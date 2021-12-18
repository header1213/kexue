const objects = {
  mainroom: {
    front: [
      { name: "f_whiteboard", pos: [-6, -2, 52, 20] },
      { name: "f_button_up", pos: [-57, 1, 12, 10] },
      { name: "f_hood", pos: [52, 10, 28, 60] },
    ],
    front_screen: [
      { name: "f_whiteboard", pos: [3, -8, 39, 19] },
      { name: "f_hood", pos: [53, 0, 26, 48] },
      { name: "screen", pos: [-41, -19, 49, 41] },
    ],
    left: [
      { name: "l_door1", pos: [-56, 0, 19, 30] },
      { name: "l_board1", pos: [-37, -2, 12, 15] },
      { name: "l_board2", pos: [-17, -2, 12, 15] },
      { name: "l_board3", pos: [3, -2, 12, 15] },
      { name: "l_board4", pos: [24, -2, 12, 15] },
      { name: "l_door2", pos: [52, 10, 28, 60] },
    ],
    left_screen: [
      { name: "l_door1", pos: [-52, -2, 20, 30] },
      { name: "l_board1", pos: [-32, -5, 12, 15] },
      { name: "l_board2", pos: [-11, -5, 12, 15] },
      { name: "l_board3", pos: [9, -5, 12, 15] },
      { name: "l_board4", pos: [29, -5, 12, 15] },
      { name: "screen", pos: [56, -18, 21, 40] },
    ],
    back: [
      { name: "b_door_close", pos: [-30, -2, 12, 32] },
      { name: "b_cabinet1", pos: [-8, 3, 29, 23] },
      { name: "b_cabinet2", pos: [22, 3, 29, 23] },
      { name: "b_cabinet3", pos: [52, 6, 29, 34] },
    ],
    back_open: [
      { name: "backroom", pos: [-30, -2, 12, 32] },
      { name: "b_cabinet1", pos: [-8, 3, 29, 23] },
      { name: "b_cabinet2", pos: [22, 3, 29, 23] },
      { name: "b_cabinet3", pos: [52, 6, 29, 34] },
    ],
    right: [
      { name: "r_sink1", pos: [-15, 12, 20, 8] },
      { name: "r_sink2", pos: [39, 12, 18, 8] },
      { name: "r_board", pos: [60, 3, 12, 16] },
    ],
  },
  backroom: {
    front: [{ name: "br_cabinet", pos: [-15, 10, 74, 75] }],
    right: [
      { name: "br_books", pos: [-28, 10, 20, 18] },
      { name: "br_linger", pos: [14, 1, 23, 28] },
      { name: "br_dna", pos: [50, -39, 12, 21] },
    ],
    left: [{ name: "br_liquid", pos: [-6, 34, 46, 22] }],
    back: [{ name: "mainroom", pos: [7, 2, 42, 94] }],
  },
};
const popups = {
  f_whiteboard: {
    type: "quiz",
    name: "화이트 보드",
    desc: "칠판에 문제가 적혀 있습니다.<br /> 정답은 무엇일까요?",
    img: "./images/mainroom/front/whiteboard.jpg",
  },
  get_key: {
    type: "message",
    name: "열쇠",
    desc: "답을 써 넣으니 열쇠가 뚝 떨어졌습니다. <br /> 열쇠를 획득했습니다.",
  },
  f_button_up: {
    type: "confirm",
    name: "버튼",
    desc: "누르시겠어요?",
    img: "./images/mainroom/front/button_up.jpg",
  },
  f_button_down: {
    type: "message",
    name: "버튼",
    desc: '"지이잉-"',
    img: "./images/mainroom/front/button_down.jpg",
  },
  f_hood: {
    type: "message",
    name: "흄 후드",
    desc: "평범한 흄 후드입니다.",
    img: "./images/mainroom/front/hood.jpg",
  },
  screen: {
    type: "message",
    name: "스크린",
    desc: "무언가를 보여주고 있는 것 같습니다.",
    img: "./images/mainroom/front/screen.jpg",
  },
  l_door1: {
    type: "confirm",
    name: "잠긴 문",
    desc: "굳게 잠궈 놓았습니다. <br /> 문을 여는 마법의 주문을 외쳐 볼까요?",
    img: "./images/example.jpg",
  },
  l_door2: {
    type: "confirm",
    name: "잠긴 문",
    desc: "굳게 잠궈 놓았습니다. <br /> 문을 여는 마법의 주문을 외쳐 볼까요?",
    img: "./images/mainroom/left/door2.jpg",
  },
  l_door_magic: {
    type: "message",
    name: "알로호모라!",
    desc: "음... 그대로네요.",
  },
  l_board1: {
    type: "battle",
    name: "실험체: 실험기구",
    desc: "실험 기구를 자유자재로 사용하는 자입니다.",
    img: "./images/mainroom/left/board1.jpg",
  },
  l_board2: {
    type: "battle",
    name: "실험체: 탐구활동",
    desc: "항상 모든 것을 탐구하고자 하는 자입니다.",
    img: "./images/mainroom/left/board2.jpg",
  },
  l_board3: {
    type: "battle",
    name: "실험체: 실험폐수",
    desc: "정작 이 자는 실험폐수의 처리법을 잘 모르는 것 같습니다.",
    img: "./images/mainroom/left/board3.jpg",
  },
  l_board4: {
    type: "battle",
    name: "실험체: 안전수칙",
    desc: "안전수칙을 지키지 않는 자는 죽게 될 것입니다.",
    img: "./images/mainroom/left/board4.jpg",
  },
  b_door_close: {
    type: "confirm",
    name: "뒷문",
    desc: "열려면 열쇠가 있어야 할 것 같습니다. <br /> 한번 열어 볼까요?",
    img: "./images/mainroom/back/backdoor_close.jpg",
  },
  b_door_lock: {
    type: "message",
    name: "뒷문",
    desc: "역시나 열리지 않습니다. <br /> 열쇠를 구해야겠네요.",
    img: "./images/mainroom/back/backdoor_close.jpg",
  },
  b_door_open: {
    type: "message",
    name: "뒷문",
    desc: "열쇠로 문을 열었습니다.",
    img: "./images/mainroom/back/backdoor_open.jpg",
  },
  backroom: {
    type: "confirm",
    name: "뒷방",
    desc: "뒷방에 들어가시겠어요?",
    img: "./images/mainroom/back/backdoor_open.jpg",
  },
  mainroom: {
    type: "confirm",
    name: "실험장",
    desc: "실험장에 들어가시겠어요?",
    img: "./images/backroom/back/main.jpg",
  },
  b_cabinet1: {
    type: "message",
    name: "실험실 사물함",
    desc: "실험 가운과 여러 비커, 알코올 램프가 들어 있습니다.",
    img: "./images/mainroom/back/cabinet1.jpg",
  },
  b_cabinet2: {
    type: "message",
    name: "실험실 사물함",
    desc: "플라스크와 실린더, DNA 모형과 과학 도서가 들어 있습니다.",
    img: "./images/mainroom/back/cabinet2.jpg",
  },
  b_cabinet3: {
    type: "message",
    name: "실험실 사물함",
    desc: "다양한 역학 실험 장치들이 들어 있습니다.",
    img: "./images/mainroom/back/cabinet3.jpg",
  },
  r_sink1: {
    type: "battle",
    name: "실험코드: DRYSINK",
    desc: "언제라도 당신을 공격할 준비가 되어 있습니다.",
    img: "./images/mainroom/right/sink1.jpg",
  },
  r_sink2: {
    type: "battle",
    name: "실험코드: WETSINK",
    desc: "언제라도 당신을 공격할 준비가 되어 있습니다. <br /> 물을 흘리고 있습니다.",
    img: "./images/mainroom/right/sink2_water.jpg",
  },
  r_board: {
    type: "battle",
    name: "실험체: 재활용",
    desc: "절약과 재활용, 환경을 누구보다 중시하는 자입니다.",
    img: "./images/mainroom/right/board.jpg",
  },
  br_cabinet: {
    type: "confirm",
    name: "시약장",
    desc: "각종 위험 약품이 들어 있습니다. <br /> 하나 마셔 볼.. 아니, 챙겨 볼까요?",
    img: "./images/backroom/front/cabinet.jpg",
  },
  get_dangerous_liquid: {
    type: "message",
    name: "위험 약품",
    desc: "아무것도 없습니다.",
    img: "./images/backroom/front/cabinet.jpg",
  },
  br_liquid: {
    type: "confirm",
    name: "기본 시약",
    desc: "가장 기본적인 시약들입니다. <br /> 하나 마셔 볼.. 아니, 챙겨 볼까요?",
    img: "./images/backroom/left/liquid.jpg",
  },
  get_liquid: {
    type: "message",
    name: "시약",
    desc: "염기, 유기물, 증류수를 챙겼습니다.",
    img: "./images/backroom/left/liquid.jpg",
  },
  br_books: {
    type: "confirm",
    name: "책들",
    desc: "책들이 쌓여 있습니다. <br /> 하나 읽고 갈까요?",
    img: "./images/backroom/right/books.jpg",
  },
  time_pass: {
    type: "message",
    name: "책들",
    desc: "읽다 보니 너무 재미있었다... <br /> 벌써 싸워야 할 시간이 된 것 같다.",
    img: "./images/backroom/right/books.jpg",
  },
  br_linger: {
    type: "confirm",
    name: "링거",
    desc: "시약의 양을 조절하는 기구입니다. <br /> 하나 챙겨 갈까요?",
    img: "./images/backroom/right/linger.jpg",
  },
  get_linger: {
    type: "message",
    name: "링거",
    desc: "링거를 챙겼습니다.",
    img: "./images/backroom/right/linger.jpg",
  },
  br_dna: {
    type: "message",
    name: "DNA 모형",
    desc: "DNA는 디옥시리보핵산의 줄임으로, 대부분의 생명체의 유전 정보를 담고 있는 화학 물질입니다. 현대 분자생물학의 필수요소이며, 이중나선 구조의 주인공입니다. DNA는 본래 세포 내에서 가느다란 실과 같은 형태로 존재하지만, 세포가 분열할 때는 엉겨붙으며 염색체라는 굵직한 구조체를 형성합니다. 아시겠나요? 아셨으면 이제 창을 닫으세요.",
    img: "./images/backroom/right/dna.jpg",
  },
};

// room, direction, screen, backdoor
let pagenow = ["mainroom", "front", false, false];
// let pagenow = ["backroom", "right", false, true];

let popupnow = undefined;

const make_object = (o) => `<div
  class="item"
  data-popup=${o.name}
  style="
  left: calc(50% + ${o.pos[0]}vh);
    top: calc(50% + ${o.pos[1]}vh);
    width: ${o.pos[2]}vh;
    height: ${o.pos[3]}vh"
  > </div>
  `;

const change_page = (page) => {
  let additional = "";
  if (page[0] === "mainroom") {
    if (page[2] && ["front", "left"].includes(page[1])) {
      additional = "_screen";
    } else if (page[3] && page[1] === "back") {
      additional = "_open";
    }
  }
  $(".item").remove();
  $("#background").css("background-image", `url(./images/${page[0]}/${page[1]}/main${additional}.jpg)`);
  objects[page[0]][page[1] + additional].forEach((o) => {
    $("#background").append(make_object(o));
  });
};

const popup = (popupname) => {
  if (!popupname) {
    $("#foreground").hide();
    popupnow = undefined;
    return;
  }
  console.log(popupname);
  popupnow = popupname;
  const pp = popups[popupname];
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
  } else if (pp.type !== "message") {
    console.error(`unknown type: ${pp.type}(${popupname})`);
  }
  $("#foreground").show().html(popup);
};

const move = (page, direction) => {
  // direction 0:left 1:right
  const connections = {
    front: ["left", "right"],
    front_screen: ["left_screen", "right"],
    left: ["back", "front"],
    left_screen: ["back", "front_screen"],
    right: ["front", "back"],
    back: ["right", "left"],
  };
  return connections[page[1]][direction];
};

// TODO: battle 구현
const battle = (enemy) => {
  if (enemy == "boss") {
    alert("보스배틀은 아직 구현중!");
  } else {
    alert("배틀은 아직 구현중!");
  }
};

const parseTime = (sec) => {
  let m = Math.floor(sec / 60);
  let s = sec - m * 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
};
let timeleft;
const startTimer = (time) => {
  timeleft = time;
  setInterval(() => {
    timeleft--;
    $("#timer").text(parseTime(timeleft));
    if (timeleft === 0) {
      $("#timer").hide();
      battle("boss");
    }
  }, 1000);
};

$(document).ready(() => {
  change_page(pagenow);

  $(document).on("click", ".item", function () {
    const puzname = $(this).data("popup");
    popup(puzname);
  });

  $(document).on("click", "#foreground, .exit, .no", function (e) {
    if (e.target === this) {
      popup();
    }
  });

  $(".left").click(() => {
    pagenow[1] = move(pagenow, 0);
    change_page(pagenow);
  });
  $(".right").click(() => {
    pagenow[1] = move(pagenow, 1);
    change_page(pagenow);
  });

  // TODO: 아이템 어쩔건데
  let items = [];
  $(document).on("click", ".yes", () => {
    if (popupnow === "f_button_up") {
      // screen down
      pagenow[2] = true;
      popup("f_button_down");
      change_page(pagenow);
    } else if (popupnow === "l_door1" || popupnow === "l_door2") {
      popup("l_door_magic");
    } else if (popupnow === "b_door_close") {
      if (items.includes("key")) {
        pagenow[3] = true;
        popup("b_door_open");
        change_page(pagenow);
      } else popup("b_door_lock");
    } else if (["backroom", "mainroom"].includes(popupnow)) {
      pagenow[0] = popupnow;
      pagenow[1] = "front";
      change_page(pagenow);
      popup();
    } else if (popupnow === "br_linger") {
      items.push("linger");
      popup("get_linger");
    } else if (popupnow === "br_books") {
      timeleft = -1;
      popup("timepass");
      // TODO: 시간 때워져서 보스직행
    } else if (popupnow === "br_cabinet") {
      items.push("dangerous_liquid");
      popup("get_dangerous_liquid");
    } else if (popupnow === "br_liquid") {
      items.push("liquid");
      popup("get_liquid");
    }
  });
  $(document).on("click", ".battle", () => {
    battle(popupnow);
  });
  $(document).on("click", ".submit", () => {
    if (popupnow === "f_whiteboard") {
      if (parseInt($(".answer").val()) === 1024) {
        items.push("key");
        popup("get_key");
      } else {
        $(".answer").val("오답이다!");
      }
      change_page(pagenow);
    }
    objects[pagenow[0]][pagenow[1]] = objects[pagenow[0]][pagenow[1]].filter((o) => o.name !== popupnow);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key == "Escape") {
      // popup close
      popup();
    }
  });

  // #region
  // preLoad (cache)
  [
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
    // './images/mainroom/left/door1.jpg',
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
    "./images/backroom/left/liquid.jpg",
    "./images/backroom/right/main.jpg",
    "./images/backroom/right/books.jpg",
    "./images/backroom/right/linger.jpg",
    "./images/backroom/right/dna.jpg",
    "./images/backroom/back/main.jpg",
    // last
    "./images/example.jpg",
    "./images/arrow.png",
  ].forEach((src) => {
    $("<img />").attr("src", src).appendTo("body");
    if (src === "./images/arrow.png") {
      change_page(pagenow);
      console.log("GAME START!");
      $("#start")
        .css("background", "rgba(255, 0, 0, 0.5)")
        .text("X")
        .click(() => {
          popup();
          $("#background").hide();
          $("#loading").hide();
          $("#background").fadeIn(2000);
          startTimer(5 * 60);
        });
    }
  });
  // #endregion
});
