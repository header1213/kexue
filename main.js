// room, direction, screen, backdoor
let pagenow = ["mainroom", "front", false, false];

let popupnow = undefined;
let datanow = undefined;

let idlebgm = new Audio("./sounds/idle.mp3");
let battlebgm = new Audio("./sounds/battle.mp3");
let bossbgm = new Audio("./sounds/boss.mp3");
idlebgm.loop = true;
battlebgm.loop = true;
bossbgm.loop = true;

const makeObject = (o) => `<div
  class="obj"
  data-popup=${o.name}
  style="
  left: calc(50% + ${o.pos[0]}vh);
    top: calc(50% + ${o.pos[1]}vh);
    width: ${o.pos[2]}vh;
    height: ${o.pos[3]}vh"
  > </div>
  `;
$(document).on("click", ".obj", function () {
  const popupname = $(this).data("popup");
  popup(popupname);
});

const makeSkill = (skillname) => `<button class="${skills[skillname].type} ${skillname}"><abbr title="${skills[skillname].tooltip}">${skills[skillname].name}</abbr></button>`;

const reloadPage = () => {
  let postfix = "";
  if (pagenow[0] === "mainroom") {
    if (pagenow[2] && ["front", "left"].includes(pagenow[1])) {
      postfix = "_screen";
    } else if (pagenow[3] && pagenow[1] === "back") {
      postfix = "_open";
    }
  }
  $(".obj").remove();
  $("#background").css("background-image", `url(./images/${pagenow[0]}/${pagenow[1]}/main${postfix}.jpg)`);
  objects[pagenow[0]][pagenow[1] + postfix].forEach((o) => {
    $("#background").append(makeObject(o));
  });
};
const move = (direction) => {
  // direction 0:left 1:right
  const connections = {
    front: ["left", "right"],
    front_screen: ["left_screen", "right"],
    left: ["back", "front"],
    left_screen: ["back", "front_screen"],
    right: ["front", "back"],
    back: ["right", "left"],
    back_open: ["right", "left"],
  };
  pagenow[1] = connections[pagenow[1]][direction];
  reloadPage();
};

const popup = (popupname, data) => {
  if (!popupname) {
    $("#foreground").html("").hide();
    popupnow = undefined;
    return;
  }
  popupnow = popupname;
  datanow = data;
  let pp;
  if (popupname === "change_skill") {
    pp = {
      type: "change_skill",
      name: "스킬 획득!",
      desc: `${skills[enemies[data].reward[1]].name} 스킬을 획득합니다! <br /> 포기할 스킬을 선택하세요.`,
    };
  } else if (popupname === "win") {
    let reward = enemies[data].reward;
    pp = {
      type: "",
      name: "승리!",
      desc: `${enemies[data].name}에게 승리했습니다. <br /> 보상으로 `,
      img: `./images/enemies/${data}.jpg`,
    };
    switch (reward[0]) {
      case "stats":
        pp.type = "message";
        pp.desc += `스탯 ${reward[1][0]}/${reward[1][1]}을(를) 받았습니다.`;
        break;
      case "passive":
        pp.desc += "패시브 ";
      case "skill":
        pp.type = "confirm";
        pp.desc += `스킬 '${skills[reward[1]].name}'을(를) 받으시겠습니까?`;
        break;
    }
  } else pp = popups[popupname];
  if (!pp) {
    console.error(`no popup: ${popupname}`);
    return;
  }
  let popup = $(`
  <div class="popup">
    <button class="exit">X</button>
    <h1>${pp.name}</h1>
    <span>${pp.desc}</span>
    ${pp.img ? `<img src="${pp.img}" />` : ""}
  </div>`);
  if (pp.type === "confirm") {
    popup.append(`
    <div id="buttons">
      <button class="yes">그래!</button>
      <button class="no">싫어..</button>
    </div>
    `);
  } else if (pp.type === "quiz") {
    popup.append(`
    <div id="buttons">
      <input class="answer" placeholder="?" />
      <button class="submit">정답인가?</button>
    </div>
    `);
  } else if (pp.type === "battle") {
    popup.append(`
    <div id="buttons">
      <button class="battle">싸우자!</button>
    </div>
    `);
  } else if (pp.type === "change_skill") {
    popup.append(makeSkill(enemies[data].reward[1]));
    let select = $(`<div class="select"></div>`).appendTo(popup);
    menow.skills.forEach((skill) => {
      $(makeSkill(skill))
        .click(() => changeSkill(skill, enemies[data].reward[1]))
        .appendTo(select);
    });
    $(`<button class="giveup">그냥 버리기</button>`).appendTo(popup);
  } else if (pp.type !== "message") {
    console.error(`unknown type: ${pp.type}(${popupname})`);
  }
  $("#foreground").show().html(popup);
};
const clearPopup = (popupname) => {
  popups[popupname].type = "message";
  popups[popupname].desc = "이곳에는 더 이상 볼 일이 없습니다.";
};
$(document).on("click", "#foreground, .exit, .no, .select *, .giveup", function (e) {
  if (e.target === this) {
    popup();
  }
});

// BATTLE
let fighting = undefined;
let turn = 0;
let menow = {
  baseatk: 10,
  atk: 0,
  basehp: 15,
  hp: 0,
  dkeep: 0,
  hkeep: 0,
  skills: ["hard", "pierce", "charge"],
};
let enemynow = {};
let sequence = [];

const changeSkill = (skillbefore, skillafter) => {
  if (skillbefore) menow.skills[menow.skills.findIndex((e) => e === skillbefore)] = skillafter;
};
const initStats = (who) => {
  if (who === "me") {
    menow.atk = menow.baseatk;
    menow.hp = menow.basehp;
    menow.dkeep = 0;
    $("#me .atk").css("color", "white");
    $("#me .hp").css("color", "white");
  } else if (who === "enemy") {
    enemynow["atk"] = enemynow.baseatk;
    enemynow["hp"] = enemynow.basehp;
    enemynow["dkeep"] = 0;
    enemynow["hkeep"] = 0;
    $("#enemy .atk").css("color", "white");
    $("#enemy .hp").css("color", "white");
  }
};
const reloadStats = () => {
  $("#enemy .atk").text(enemynow.atk);
  $("#enemy .hp").text(enemynow.hp);
  $("#me .atk").text(menow.atk);
  $("#me .hp").text(menow.hp);
};
const checkDeath = () => {
  if (menow.hp <= 0) {
    fighting = false;
    $("body>*:not(#lose)").fadeOut(2000, () => {
      $("#lose").fadeIn(2000);
    });
  } else if (enemynow.hp <= 0) {
    if ("life" in enemynow && --enemynow.life > 0) {
      setStats("enemy", enemynow.atk, enemynow.basehp);
      $("#enemy .hp").css("color", "gold");
      return;
    }
    fighting = false;
    $("#battle").fadeOut(2000, () => {
      battlebgm.load();
      idlebgm.play();
      switch (enemynow.id) {
        case "boss":
          idlebgm.pause();
          battlebgm.pause();
          bossbgm.pause();
          new Audio("./sounds/clear.mp3").play();
          $("body>*:not(#clear)").fadeOut(2000, () => {
            $("#clear").fadeIn(2000);
          });
          break;
        case "drysink":
        case "wetsink":
          buff("me", ...enemies[enemynow.id].reward[1], false);
        default:
          popup("win", enemynow.id);
      }
    });
  }
};
const setStats = (who, atk, hp) => {
  now(who).atk = atk;
  now(who).hp = hp;
  reloadStats();
};
const deal = (who, damage) => {
  console.log(who, damage);
  damage += now(who).dkeep;
  now(who).dkeep = 0;
  damage = Math.max(0, damage);
  now(who).hp -= damage;
  if (now(who).skills.includes("reuse")) {
    buff(who, damage, 0);
  }
  if (damage > 0) $(`#${who} .hp`).css("color", "red");
  reloadStats();
  checkDeath();
  if (!fighting) return;
  now(who).hp += now(who).hkeep;
  now(who).hkeep = 0;
  reloadStats();
};
const buff = (who, atk, hp, temp = true) => {
  colors = [undefined, undefined];
  if (temp) {
    if (atk > 0) colors[0] = "skyblue";
    else if (atk < 0) colors[0] = "red";
    if (hp > 0) colors[1] = "skyblue";
    else if (hp < 0) colors[1] = "red";
  }

  if (!temp) {
    now(who).baseatk += atk;
    now(who).basehp += hp;
  }
  now(who).atk += atk;
  now(who).hp += hp;

  if (now(who).atk > now(who).baseatk) $(`#${who} .atk`).css("color", "skyblue");
  else if (now(who).atk < now(who).baseatk) $(`#${who} .atk`).css("color", "red");
  if (now(who).hp > now(who).basehp) $(`#${who} .hp`).css("color", "skyblue");
  else if (now(who).hp < now(who).basehp) $(`#${who} .hp`).css("color", "red");

  reloadStats();
};
const not = (who) => {
  return { me: "enemy", enemy: "me" }[who];
};
const now = (who) => {
  return { me: menow, enemy: enemynow }[who];
};
const skill = (who, skillname) => {
  console.log(who, skillname);
  $(`#${who} .${skillname}`).addClass("used");
  // TODO:new Audio(`./sounds/${skillname}.mp3`).play();
  switch (skillname) {
    case "hard":
      buff(who, -4, 6);
      break;
    case "pierce":
      deal(not(who), now(who).atk + 7);
      now(who).dkeep += 3;
      break;
    case "electric":
      deal(who, 15);
      buff(who, -1, 0);
      break;
    case "close":
      let damage = now(who).atk * 2;
      if (damage >= now(not(who)).hp) damage = now(not(who)).hp - 1;
      deal(not(who), damage);
      $(`#${who} .${skillname}.used`).removeClass("used").css("background", "lightgray");
      break;
    case "talk":
      buff(not(who), 0, 5);
      if (now(not(who)).hp >= 30) deal(not(who), now(who).atk);
      $(`#${who} .${skillname}.used`).removeClass("used").css("background", "lightgray");
      break;
    case "explore":
      now(who).dkeep += 10;
      now(who).hkeep += 15;
      if (now(who).skills.includes("immersion")) buff(who, -15, 20);
      break;
    case "activity":
      deal(not(who), now(who).atk);
      buff(who, 0, now(who).atk);
      if (now(who).skills.includes("immersion")) buff(who, 15, -15);
      break;
    case "cost":
      deal(who, Math.floor(now(who).hp / 2));
      buff(who, 10, 0);
      break;
    case "quantity":
      deal(not(who), 15);
      break;
    case "acid":
      let sum = not(who).atk + now(who).hp;
      let atk = Math.floor(sum * Math.random());
      setStats(not(who), atk, sum - atk);
      break;
    case "base":
      let matk = Math.min(15, now(who).atk);
      buff(not(who), -matk, -15 + matk);
      break;
  }
};
function turnEnd(who) {
  console.log(who, "end");
  if (who === "me") turn++;
  reloadStats();
  checkDeath();
  if (!fighting) return;
  setTimeout(() => {
    if (turn >= 20) {
      if ($(`#${who} .safe:not(.used)`).length) {
        deal(not(who), 50);
        $(".safe:not(.used)").addClass("used");
      }
    }
    if (now(who).skills.includes("drinking")) {
      if (Math.random() < 0.5) buff(who, now(who).atk, -Math.floor(now(who).hp / 2));
      else buff(who, -Math.floor(now(who).atk / 2), now(who).hp);
    }
    if (now(who).skills.includes("accel")) {
      buff(who, now(who).atk, -5);
    }
    if (now(who).skills.includes("fire")) {
      deal(who, 2);
    }
    reloadStats();
    checkDeath();
    if (who === "enemy") turn++;
    if (!fighting) return;
    if (turn % 2 === 1) enemyAction();
  }, 1000);
}
//TODO: enemyaction
function enemyAction() {
  setTimeout(() => {
    if (turn % 2 === 0) return;
    let T = Math.floor(turn / 2);
    switch (enemynow.id) {
      case "boss":
        if (T % 2 === 0) skill("enemy", "acid");
        else skill("enemy", "base");
        break;
      case "gigu":
        if (T === 0) skill("enemy", "cost");
        else if (T === 1) skill("enemy", "quantity");
        else deal("me", enemynow.atk);
        break;
      case "tamgu":
        if (T % 2 === 0) skill("enemy", "explore");
        else skill("enemy", "activity");
        break;
      case "pyesu":
        if (Math.random() < 0.5) skill("enemy", "close");
        else skill("enemy", "talk");
        break;
      case "suchik":
        if (T === 0) skill("enemy", "electric");
        else deal("me", enemynow.atk);
        break;
      case "drysink":
      case "wetsink":
      case "reuse":
        deal("me", enemynow.atk);
        break;
    }
    turnEnd("enemy");
  }, 1000);
}
$(document).on("click", ".attack, #me .skill", function () {
  if (turn % 2 === 1) return;
  const action = $(this).attr("class").split(" ");
  if (action.includes("used")) return;
  $(this).addClass("used");
  if (action[0] === "attack") {
    new Audio(`./sounds/attack.mp3`).play();
    deal("enemy", menow.atk);
    if (menow.skills.includes("charge")) {
      $(".used").removeClass("used");
      buff("me", 2, 0);
    }
    $(this).removeClass("used");
  } else if (action[0] === "skill") {
    skill("me", action[1]);
  }
  turnEnd("me");
});
const battle = (enemy) => {
  fighting = true;
  sequence = [];

  if (fighting === undefined && popupnow !== "timepass") popup("battle_info");
  else popup();

  if (enemy === "boss") {
    $("body").fadeOut(2000, () => {
      idlebgm.pause();
      battlebgm.pause();
      bossbgm.play();
      $("body").fadeIn(2000);
    });
  } else {
    idlebgm.pause();
    battlebgm.play();
  }

  enemynow = enemies[enemy];
  turn = 0;

  $("#me .skills").html(menow.skills.map((skill) => makeSkill(skill)).join(""));
  $("#enemy .skills").html(enemynow.skills.map((skill) => makeSkill(skill)).join(""));
  $("#enemy > img").attr("src", `./images/enemies/${enemynow.id}.jpg`);
  $("#enemy .name").text(enemynow.name);

  initStats("me");
  initStats("enemy");
  reloadStats();

  $("#battle").show();
};

let timeleft;
const startTimer = (time) => {
  timeleft = time;
  var timer = setInterval(() => {
    timeleft--;
    let m = Math.floor(timeleft / 60);
    let s = timeleft - m * 60;
    $("#timer").text(`${m}:${s.toString().padStart(2, "0")}`);
    if (timeleft <= 0) {
      $("#timer").hide();
      clearInterval(timer);
      battle("boss");
    }
  }, 1000);
};

let items = [];
const setItem = (itemname, get = true) => {
  if (get) {
    items.push(itemname);
  } else {
    items = items.filter((i) => i !== itemname);
  }
  $("#inventory").html(items.map((i) => `<img src="images/items/${i}.jpg" id="${i}" />`).join(""));
};
$(document).on("click", "#inventory > img", function () {
  const itemname = $(this).attr("id");
  if (itemname === "basic_liquid" && !fighting) popup("wait");

  popup("use_" + itemname);
});

$(document).on("click", ".yes", () => {
  switch (popupnow) {
    case "screen_button_up":
      popup("screen_button_down");
      pagenow[2] = true;
      reloadPage();
      break;
    case "door1":
    case "door2":
      popup("door_magic");
      break;
    case "backdoor_close":
      if (items.includes("key")) {
        popup("backdoor_open");
        setItem("key", false);
        pagenow[3] = true;
        reloadPage();
      } else popup("backdoor_lock");
      break;
    case "backroom":
    case "mainroom":
      pagenow[0] = popupnow;
      pagenow[1] = "front";
      reloadPage();
      popup();
      break;
    case "linger":
      clearPopup(popupnow);
      popup("get_linger");
      setItem("linger");
      break;
    case "books":
      popup("timepass");
      timeleft = 0;
      battle("boss");
      break;
    case "dangerous_liquid":
      clearPopup(popupnow);
      popup("get_dangerous_liquid");
      setItem("dangerous_liquid");
      break;
    case "basic_liquid":
      setItem("basic_liquid");
      clearPopup(popupnow);
      popup("get_basic_liquid");
      break;
    case "win":
      popup("change_skill", datanow);
      break;
    case "use_dangerous_liquid":
      popup("used_dangerous_liquid");
      $("#dangerous_liquid").remove();
      buff("me", 1, -2, false);
      break;
    case "use_liquid":
      popup("used_liquid");
      $("#liquid").remove();
      menow.atkplus = 0;
      menow.hpplus = 0;
      menow["corruption"] = 0;
      menow.accel = 0;
      break;
    case "use_linger":
      popup("used_linger");
      $("#linger").remove();
      buff("me", 0, 5, false);
      break;
  }
});

$(document).ready(() => {
  reloadPage();

  $(".left").click(() => {
    move(0);
  });
  $(".right").click(() => {
    move(1);
  });

  $(document).on("click", ".battle", () => {
    clearPopup(popupnow);
    battle(popupnow);
  });

  $(document).on("click", ".submit", () => {
    if (popupnow === "whiteboard") {
      if (parseInt($(".answer").val()) === 1024) {
        clearPopup(popupnow);
        setItem("key");
        popup("get_key");
      } else {
        $(".answer").val("");
        $(".answer").attr("placeholder", "오답이다!");
      }
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key == "Escape") {
      // popup close
      popup();
    }
  });
});

const start = () => {
  reloadPage();
  console.log("GAME START!");
  $("#start")
    .css("background", "rgba(255, 0, 255, 0.4)")
    .text("시작!")
    .click(() => {
      popup();
      idlebgm.play();
      $("#battle").hide();
      $("#clear").hide();
      $("#lose").hide();
      $("#loading").remove();
      startTimer(5 * 60);
    });
};
// preLoad
const _region_audio = [
  "./sounds/accel.mp3",
  "./sounds/activity.mp3",
  "./sounds/attack.mp3",
  "./sounds/batter.mp3",
  "./sounds/battle.mp3",
  "./sounds/boss.mp3",
  "./sounds/clear.mp3",
  "./sounds/corruption.mp3",
  "./sounds/explore.mp3",
  "./sounds/first.mp3",
  "./sounds/idle.mp3",
  "./sounds/improve.mp3",
  "./sounds/reuse.mp3",
  "./sounds/second.mp3",
  "./sounds/smite.mp3",
  "./sounds/spray.mp3",
].forEach((src) => {
  const audio = new Audio(src);
});
const _region_image = [
  // front
  "./images/mainroom/front/main.jpg",
  "./images/mainroom/front/main_screen.jpg",
  "./images/mainroom/front/button_down.jpg",
  "./images/mainroom/front/button_up.jpg",
  "./images/mainroom/front/whiteboard.jpg",
  "./images/mainroom/front/screen.jpg",
  "./images/mainroom/front/hood.jpg",
  // left
  "./images/mainroom/left/main.jpg",
  "./images/mainroom/left/main_screen.jpg",
  "./images/mainroom/left/door1.jpg",
  "./images/mainroom/left/door2.jpg",
  "./images/mainroom/left/board1.jpg",
  "./images/mainroom/left/board2.jpg",
  "./images/mainroom/left/board3.jpg",
  "./images/mainroom/left/board4.jpg",
  // right
  "./images/mainroom/right/main.jpg",
  "./images/mainroom/right/sink1.jpg",
  "./images/mainroom/right/sink2.jpg",
  "./images/mainroom/right/sink2_water.jpg",
  "./images/mainroom/right/board.jpg",
  // back
  "./images/mainroom/back/main.jpg",
  "./images/mainroom/back/main_open.jpg",
  "./images/mainroom/back/backdoor_close.jpg",
  "./images/mainroom/back/backdoor_open.jpg",
  "./images/mainroom/back/cabinet1.jpg",
  "./images/mainroom/back/cabinet2.jpg",
  "./images/mainroom/back/cabinet3.jpg",
  // backroom
  "./images/backroom/front/main.jpg",
  "./images/backroom/front/cabinet.jpg",
  "./images/backroom/left/main.jpg",
  "./images/backroom/left/basic_liquid.jpg",
  "./images/backroom/right/main.jpg",
  "./images/backroom/right/books.jpg",
  "./images/backroom/right/linger.jpg",
  "./images/backroom/right/dna.jpg",
  "./images/backroom/back/main.jpg",
  // items
  "./images/items/key.jpg",
  "./images/items/dangerous_liquid.jpg",
  "./images/items/basic_liquid.jpg",
  "./images/items/linger.jpg",
  // enemies
  "./images/enemies/boss.jpg",
  "./images/enemies/gigu.jpg",
  "./images/enemies/tamgu.jpg",
  "./images/enemies/pyesu.jpg",
  "./images/enemies/suchik.jpg",
  "./images/enemies/reuse.jpg",
  "./images/enemies/drysink.jpg",
  "./images/enemies/wetsink.jpg",
  // last
  "./images/example.jpg",
  "./images/arrow.png",
].forEach((src) => {
  const img = new Image();
  img.src = src;
  img.onload = () => {
    $("<img />").attr("src", src).appendTo("body");
    if (src === "./images/arrow.png") {
      start();
    }
  };
});
