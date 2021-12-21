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
      { name: "backroom", pos: [-40, 1, 13, 33] },
      { name: "b_cabinet1", pos: [-15, 8, 33, 25] },
      { name: "b_cabinet2", pos: [18, 8, 32, 25] },
      { name: "b_cabinet3", pos: [50, 11, 32, 36] },
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
    img: "./images/items/key.jpg",
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
    desc: "이딴 걸 왜 써놓은 거지..? <br /> 음... 일단 지금은 필요 없는 것 같네요.",
    img: "./images/mainroom/front/screen.jpg",
  },
  l_door1: {
    type: "confirm",
    name: "잠긴 문",
    desc: "굳게 잠궈 놓았습니다. <br /> 문을 여는 마법의 주문을 외쳐 볼까요?",
    img: "./images/mainroom/left/door1.jpg",
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
    desc: "항상 탐구활동에만 몰입해 있는 자입니다.",
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
    desc: "언제라도 당신을 공격할 준비가 되어 있습니다. <br /> *경고: 이 적은 강합니다.",
    img: "./images/mainroom/right/sink1.jpg",
  },
  r_sink2: {
    type: "battle",
    name: "실험코드: WETSINK",
    desc: "언제라도 당신을 공격할 준비가 되어 있습니다. <br /> 물을 흘리고 있습니다. <br /> *경고: 이 적은 강합니다.",
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
    name: "위험 약품",
    desc: "시약장에 각종 위험 약품이 들어 있습니다. <br /> 조금 마셔 볼.. 아니, 챙겨 볼까요?",
    img: "./images/backroom/front/cabinet.jpg",
  },
  get_dangerous_liquid: {
    type: "message",
    name: "위험 약품",
    desc: "위험 약품 몇 개를 챙겼습니다.",
    img: "./images/backroom/front/cabinet.jpg",
  },
  br_liquid: {
    type: "confirm",
    name: "기본 시약",
    desc: "가장 기본적인 시약들입니다. <br /> 조금 마셔 볼.. 아니, 챙겨 볼까요?",
    img: "./images/backroom/left/liquid.jpg",
  },
  get_liquid: {
    type: "message",
    name: "기본 시약",
    desc: "염기, 유기물, 증류수를 챙겼습니다.",
    img: "./images/backroom/left/liquid.jpg",
  },
  br_books: {
    type: "confirm",
    name: "책들",
    desc: "책들이 쌓여 있습니다. <br /> 하나 읽고 갈까요?",
    img: "./images/backroom/right/books.jpg",
  },
  timepass: {
    type: "message",
    name: "책들",
    desc: "읽다 보니 너무 재미있습니다... <br /> 앗, 벌써 싸워야 할 시간이 된 것 같군요!",
    img: "./images/backroom/right/books.jpg",
  },
  br_linger: {
    type: "confirm",
    name: "링거",
    desc: "시약의 투입 속도를 조절하는 기구입니다. <br /> 하나 챙겨 갈까요?",
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
  use_key: {
    type: "message",
    name: "열쇠",
    desc: "어디에 사용하는 열쇠일까요?",
    img: "./images/items/key.jpg",
  },
  use_dangerous_liquid: {
    type: "confirm",
    name: "위험 약품",
    desc: "약품을 마실 수도 있고, 뿌릴 수도 있습니다. <br /> 어떤 행동을 할지는 저도 잘 모르겠네요. <br /> 아무튼 사용하시겠어요?",
    img: "./images/items/dangerous_liquid.jpg",
  },
  used_dangerous_liquid: {
    type: "message",
    name: "위험 약품",
    desc: "위험 약품을 마셨습니다. <br /> 속은 안 좋은데... 힘이 좀 세진 것 같네요. <br /><br /> <b>공격력 +1 / 체력 -2</b>",
  },
  use_liquid: {
    type: "confirm",
    name: "기본 시약",
    desc: "시약을 마실 수도 있고, 뿌릴 수도 있습니다. <br /> 어떤 행동을 할지는 저도 잘 모르겠네요. <br /> 아무튼 사용하시겠어요?",
    img: "./images/items/liquid.jpg",
  },
  used_liquid: {
    type: "message",
    name: "증류수",
    desc: "증류수를 몸에 펴발랐습니다. <br /> 모든 피로와... 뭐더라? 아무튼 모든 것이 싹 씻겨지는 느낌입니다. <br /><br /> <b>캐릭터 상태 초기화</b>",
  },
  use_linger: {
    type: "confirm",
    name: "링거",
    desc: "사용하면 체력을 회복할 수 있습니다.",
    img: "./images/items/linger.jpg",
  },
  battle_info: {
    type: "message",
    name: "전투 개요",
    desc: "전투는 나 한 턴, 상대 한 턴을 번갈아가며 진행합니다. <br /> <br /> \
    한 턴에는 일반 공격, 스킬 사용, 아이템 사용 중 하나만을 할 수 있습니다. <br /> <br /> \
    스킬은 한 전투에 한 번 사용할 수 있고, 아이템은 사용하면 사라집니다. <br /> <br /> \
    스킬의 효과를 잘 모르겠다면 마우스를 올려 두면 나오는 설명을 참고하세요. <br /> <br /> \
    스킬과 아이템을 적절히 조합하여 적을 처치하고 승리하세요! <br /> <br /> \
    처치 보상으로 스킬을 받을 경우 자신의 스킬 하나를 포기해야 합니다.",
  },
  win_gigu: {
    type: "confirm",
    name: "승리!",
    desc: "실험체: 실험기구에게 승리했습니다. <br /> 보상으로 스킬 '진공관'을 받으시겠습니까?",
    img: "./images/enemies/gigu.jpg",
  },
  win_tamgu: {
    type: "confirm",
    name: "승리!",
    desc: "실험체: 탐구활동에게 승리했습니다. <br /> 보상으로 패시브 스킬 '몰입'을 받으시겠습니까?",
    img: "./images/enemies/tamgu.jpg",
  },
  win_pyesu: {
    type: "confirm",
    name: "승리!",
    desc: "실험체: 실험폐수에게 승리했습니다. <br /> 보상으로 스킬 '폐수 분사'를 받으시겠습니까?",
    img: "./images/enemies/pyesu.jpg",
  },
  win_suchik: {
    type: "confirm",
    name: "승리!",
    desc: "실험체: 안전수칙에게 승리했습니다. <br /> 보상으로 패시브 스킬 '첫째는 안전'을 받으시겠습니까?",
    img: "./images/enemies/suchik.jpg",
  },
  win_reuse: {
    type: "confirm",
    name: "승리!",
    desc: "실험체: 재활용에게 승리했습니다. <br /> 보상으로 스킬 '부패'를 받으시겠습니까?",
    img: "./images/enemies/reuse.jpg",
  },
  win_drysink: {
    type: "message",
    name: "승리!",
    desc: "실험코드: DRYSINK에게 승리했습니다. <br /> 보상으로 스탯 1/2를 받았습니다.",
    img: "./images/enemies/drysink.jpg",
  },
  win_wetsink: {
    type: "message",
    name: "승리!",
    desc: "실험코드: WETSINK에게 승리했습니다. <br /> 보상으로 스탯 2/1을 받았습니다.",
    img: "./images/enemies/wetsink.jpg",
  },
  wait: {
    type: "message",
    name: "음...",
    desc: "왠지 전투 중에 쓰고 싶습니다.",
  },
};
const enemies = {
  boss: {
    id: "boss",
    name: "린선 일족 연구자",
    atk: 0,
    hp: 15,
    def: 2,
    skills: ["gown", "base", "acid"],
  },
  l_board1: {
    id: "gigu",
    name: "실험체: 실험기구",
    atk: 3,
    hp: 8,
    def: 1,
    skills: ["vacuum", "accel"],
    sequence: ["accel", "attack", "attack", "attack", "attack", "attack"],
  },
  l_board2: {
    id: "tamgu",
    name: "실험체: 탐구활동",
    atk: 5,
    hp: 6,
    skills: ["immersion", "explore", "activity"],
    sequence: ["explore", "activity", "attack", "attack", "attack", "attack", "attack"],
  },
  l_board3: {
    id: "pyesu",
    name: "실험체: 실험폐수",
    atk: 100,
    hp: 5,
    skills: ["addiction", "spray"],
    sequence: ["spray"],
  },
  l_board4: {
    id: "suchik",
    name: "실험체: 안전수칙",
    atk: 1,
    hp: 12,
    skills: ["first", "second"],
    sequence: ["first", "second", "attack", "attack", "attack", "attack", "attack"],
  },
  r_board: {
    id: "reuse",
    name: "실험체: 재활용",
    life: 3,
    atk: 1,
    hp: 1,
    skills: ["reuse", "corruption"],
    sequence: ["corruption", "attack", "attack", "attack", "attack", "attack"],
  },
  r_sink1: {
    id: "drysink",
    name: "실험코드: DRYSINK",
    atk: 5,
    hp: 8,
    skills: [],
    sequence: ["attack", "attack", "attack", "attack", "attack"],
  },
  r_sink2: {
    id: "wetsink",
    name: "실험코드: WETSINK",
    atk: 6,
    hp: 5,
    skills: [],
    sequence: ["attack", "attack", "attack", "attack", "attack"],
  },
};
const skills = {
  smite: {
    type: "skill",
    name: "강타",
    tooltip: "공격력의 두 배로 공격합니다.",
  },
  batter: {
    type: "skill",
    name: "연타",
    tooltip: "공격력보다 조금 약하게 세 번 공격합니다.",
  },
  improve: {
    type: "skill",
    name: "증강",
    tooltip: "공격력과 체력을 이번 전투에서 조금 늘립니다.",
  },
  accel: {
    type: "skill",
    name: "가속기",
    tooltip: "다음 공격의 피해가 두 배가 됩니다.",
  },
  explore: {
    type: "skill",
    name: "탐구",
    tooltip: "공격력을 영구히 조금 늘립니다.",
  },
  activity: {
    type: "skill",
    name: "활동",
    tooltip: "체력을 영구히 조금 늘립니다.",
  },
  spray: {
    type: "skill",
    name: "폐수 분사",
    tooltip: "공격력만큼의 피해를 나와 상대에게 무작위로 나누어 입힙니다.",
  },
  first: {
    type: "skill",
    name: "첫째는 안전",
    tooltip: "자신의 체력을 이번 전투에서 4 늘립니다.",
  },
  second: {
    type: "skill",
    name: "둘째도 안전",
    tooltip: "상대의 공격력을 이번 전투에서 1 낮춥니다.",
  },
  corruption: {
    type: "skill",
    name: "부패",
    tooltip: "매 턴 상대에게 조금의 피해를 입힙니다.",
  },
  base: {
    type: "skill",
    name: "강염기",
    tooltip: "상대의 체력을 공격력과 같게 만듭니다. '강산'을 활성화합니다.",
  },
  acid: {
    type: "skill",
    name: "강산",
    tooltip: "상대의 공격력을 1 낮춥니다. '강염기'를 활성화합니다.",
  },

  vacuum: {
    type: "passive",
    name: "진공관",
    tooltip: "받는 모든 피해가 1씩 줄어듭니다.",
  },
  immersion: {
    type: "passive",
    name: "몰입",
    tooltip: "스킬을 사용하면 체력이 2 늘어납니다.",
  },
  addiction: {
    type: "passive",
    name: "중독",
    tooltip: "공격할 수 없습니다.",
  },
  reuse: {
    type: "passive",
    name: "재활용",
    tooltip: "죽어도 두 번까지 살아납니다.",
  },
  gown: {
    type: "passive",
    name: "실험 가운",
    tooltip: "받는 모든 피해가 2씩 줄어듭니다.",
  },
};
const passives = {};
const rewards = {
  boss: "clear",
  gigu: "vacuum",
  tamgu: "immersion",
  pyesu: "spray",
  suchik: "first",
  reuse: "corruption",
  drysink: [1, 2],
  wetsink: [2, 1],
};

// room, direction, screen, backdoor
let pagenow = ["mainroom", "front", false, false];
// let pagenow = ["mainroom", "back", false, true];

let popupnow = undefined;

let idlebgm = new Audio("./sounds/idle.mp3");
// let idlebgm = new Audio("./sounds/smite.mp3");
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
const makeSkill = (skill) => `<button class="${skills[skill].type} ${skill}"><abbr title="${skills[skill].tooltip}">${skills[skill].name}</abbr></button>`;

const changePage = (page) => {
  let additional = "";
  if (page[0] === "mainroom") {
    if (page[2] && ["front", "left"].includes(page[1])) {
      additional = "_screen";
    } else if (page[3] && page[1] === "back") {
      additional = "_open";
    }
  }
  $(".obj").remove();
  $("#background").css("background-image", `url(./images/${page[0]}/${page[1]}/main${additional}.jpg)`);
  objects[page[0]][page[1] + additional].forEach((o) => {
    $("#background").append(makeObject(o));
  });
};

const popup = (popupname, second) => {
  if (!popupname) {
    $("#foreground").html("").hide();
    popupnow = undefined;
    return;
  }
  console.log("popup: " + popupname);
  popupnow = popupname;
  let pp;
  if (popupname === "change_skill") {
    pp = {
      type: "change_skill",
      name: "스킬 획득!",
      desc: `${skills[rewards[second]].name} 스킬을 획득합니다! <br /> 포기할 스킬을 선택하세요.`,
    };
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
    popup.append(makeSkill(rewards[second]));
    let select = $(`<div class="select"></div>`).appendTo(popup);
    menow.skills.forEach((skill) => {
      $(makeSkill(skill))
        .click(() => changeSkill(skill, rewards[second]))
        .appendTo(select);
    });
    $(`<button class="giveup">그냥 버리기</button>`).appendTo(popup);
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

let fighting = undefined;
let turn = 0;
let menow = {
  atk: 2,
  atkplus: 0,
  hp: 6,
  hpplus: 0,
  def: 0,
  accel: false,
  skills: ["smite", "batter", "improve"],
};
let enemynow = {};
const turnEnd = () => {
  reloadStats();
  if (!fighting) return;
  turn++;
  if (turn % 2 === 1) {
    enemyAction();
    if (enemynow.corruption !== 0) new Audio("./sounds/corruption.mp3").play();
    buff("enemy", 0, -enemynow.corruption);
  } else {
    if (menow.corruption !== 0) new Audio("./sounds/corruption.mp3").play();
    buff("me", 0, -menow.corruption);
  }
};
const changeSkill = (skillbefore, skillname) => {
  if (skillbefore) menow.skills[menow.skills.findIndex((e) => e === skillbefore)] = skillname;
  $("#me .skills").html("");
  menow.skills.forEach((skill) => {
    $("#me .skills").append(makeSkill(skill));
  });
  console.log(`skill changed: ${skillbefore}->${skillname}`);
  console.log(menow.skills);
};
const battle = (enemy) => {
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
  if (fighting === undefined && popupnow !== "timepass") popup("battle_info");
  else popup();
  fighting = true;
  enemynow = enemies[enemy];
  turn = 0;
  menow.def = 0;
  if (menow.skills.includes("vacuum")) menow.def++;
  menow.accel = false;
  menow.corruption = 0;
  enemynow["atkplus"] = 0;
  enemynow["hpplus"] = 0;
  if (!enemynow.def) enemynow["def"] = 0;
  enemynow["accel"] = false;
  enemynow["corruption"] = 0;
  menow.atkplus = 0;
  menow.hpplus = 0;
  menow.skillused = [];
  changeSkill();
  $("#enemy > img").attr("src", `./images/enemies/${enemynow.id}.jpg`);
  $("#enemy .name").text(enemynow.name);
  $("#enemy .atk").text(enemynow.atk).css("color", "white");
  $("#enemy .hp").text(enemynow.hp).css("color", "white");
  $("#enemy .skills").html("");
  enemynow.skills.forEach((skill) => {
    $("#enemy .skills").append(makeSkill(skill));
  });
  $("#me .atk")
    .text(menow.atk + menow.atkplus)
    .css("color", "white");
  $("#me .hp")
    .text(menow.hp + menow.hpplus)
    .css("color", "white");
  $("#battle").show();
};

const reloadStats = (check = true) => {
  $("#enemy .atk").text(enemynow.atk + enemynow.atkplus);
  $("#enemy .hp").text(enemynow.hp + enemynow.hpplus);
  $("#me .atk").text(menow.atk + menow.atkplus);
  $("#me .hp").text(menow.hp + menow.hpplus);

  if (!check) return;
  if (menow.hp + menow.hpplus <= 0) {
    fighting = false;
    $("body>*:not(#lose)").fadeOut(2000, () => {
      $("#lose").fadeIn(2000);
    });
  } else if (enemynow.hp + enemynow.hpplus <= 0) {
    if (enemynow.life !== undefined) {
      if (--enemynow.life !== 0) {
        new Audio("./sounds/reuse.mp3").play();
        setTimeout(() => {
          enemynow.hpplus = 0;
          reloadStats(false);
        }, 500);
        return;
      }
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
          $("#clear").fadeIn(2000);
          break;
        case "drysink":
        case "wetsink":
          buff("me", ...rewards[enemynow.id], false);
        default:
          popup("win_" + enemynow.id);
      }
    });
  }
  // console.log("my hp: " + (menow.hp + menow.hpplus));
  // console.log("enemy hp: " + (enemynow.hp + enemynow.hpplus));
  // console.log("fighting:", fighting);
};
const attack = (who, damage, count = 1) => {
  let atked = 0;
  if (who === "me") {
    if (enemynow.accel) {
      damage *= 2;
      enemynow.accel = false;
    }
    damage -= menow.def;
  } else {
    if (menow.accel) {
      damage *= 2;
      menow.accel = false;
    }
    damage -= enemynow.def;
    damage = Math.max(0, damage);
  }
  var atkid = setInterval(() => {
    if (who === "enemy") {
      enemynow.hpplus -= damage;
      if (damage > 0) $("#enemy .hp").css("color", "red");
    } else {
      menow.hpplus -= damage;
      if (damage > 0) $("#me .hp").css("color", "red");
    }
    reloadStats(false);
    if (++atked === count) clearInterval(atkid);
  }, 300);
};
const buff = (who, atk, hp, temp = true) => {
  colors = [undefined, undefined];
  if (temp) {
    if (atk > 0) colors[0] = "skyblue";
    else if (atk < 0) colors[0] = "red";
    if (hp > 0) colors[1] = "skyblue";
    else if (hp < 0) colors[1] = "red";
  }

  if (who === "me") {
    if (temp) {
      menow.atkplus += atk;
      menow.hpplus += hp;
    } else {
      menow.atk += atk;
      menow.hp += hp;
    }
    if (colors[0]) $("#me .atk").css("color", colors[0]);
    if (colors[1]) $("#me .hp").css("color", colors[1]);
  } else if (who === "enemy") {
    enemynow.atk += atk;
    enemynow.hp += hp;
  }
  reloadStats(false);
};
const enemyAction = () => {
  if (enemynow.id === "boss") {
    new Audio("./sounds/bossskill.mp3").play();
    console.log(turn, Math.floor(turn / 2) % 2);
    if (Math.floor(turn / 2) % 2 == 0) {
      console.log("강염기");
      buff("me", 0, menow.atk + menow.atkplus - menow.hp - menow.hpplus);
      reloadStats();
      $("#me .hp").css("color", "red");
      $(".base").css("background", "gray");
      $(".acid").css("background", "white");
    } else {
      console.log("강산");
      buff("me", -1, 0);
      reloadStats();
      $("#me .atk").css("color", "red");
      $(".acid").css("background", "gray");
      $(".base").css("background", "white");
    }
    console.log("me", menow.atk + menow.atkplus, menow.hp + menow.hpplus);
    turnEnd();
    return;
  }
  const action = enemynow.sequence[Math.floor(turn / 2)];
  console.log("enemy", action);
  new Audio(`./sounds/${action}.mp3`).play();
  if (enemynow.skills.includes("immersion") && action !== "attack") buff("enemy", 0, 2);
  switch (action) {
    case "attack":
      attack("me", enemynow.atk + enemynow.atkplus);
      break;
    case "accel":
      enemynow.accel = true;
      $(".skill.accel").css("background", "gray");
      break;
    case "explore":
      buff("enemy", 1, 0, false);
      $(".skill.explore").css("background", "gray");
      break;
    case "activity":
      buff("enemy", 1, 0, false);
      $(".skill.activity").css("background", "gray");
      break;
    case "spray":
      let atked = 0;
      var atkid = setInterval(() => {
        if (Math.random() < 0.5) attack("me", 1);
        else attack("enemy", 1);
        reloadStats();
        if (!fighting || ++atked === enemynow.atk) clearInterval(atkid);
      }, 200);
      $(".skill.spray").css("background", "gray");
      break;
    case "first":
      buff("enemy", 0, 4);
      $("#enemy .skill.first").css("background", "gray");
      break;
    case "second":
      buff("me", -1, 0);
      $("#enemy .skill.second").css("background", "gray");
      break;
    case "corruption":
      menow.corruption++;
      $("#enemy .skill.corruption").css("background", "gray");
      break;
  }
  setTimeout(turnEnd, 1000);
};

const parseTime = (sec) => {
  let m = Math.floor(sec / 60);
  let s = sec - m * 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
};
let timeleft;
let timer;
const stopTimer = () => {
  $("#timer").hide();
  clearInterval(timer);
  timer = undefined;
};
const startTimer = (time) => {
  timeleft = time;
  timer = setInterval(() => {
    timeleft--;
    $("#timer").text(parseTime(timeleft));
    if (timeleft === 0) {
      stopTimer();
      battle("boss");
    }
  }, 1000);
};

let items = [];
const getItem = (itemname, get = true) => {
  if (get) {
    items.push(itemname);
  } else {
    items = items.filter((i) => i !== itemname);
  }
  $("#inventory").html(items.map((i) => `<img src="images/items/${i}.jpg" id="${i}" />`).join(""));
};

const clear = (popupname) => {
  popups[popupname].type = "message";
  popups[popupname].desc = "이곳에는 더 이상 볼 일이 없습니다.";
};

$(document).ready(() => {
  changePage(pagenow);

  $(document).on("click", ".obj", function () {
    const popupname = $(this).data("popup");
    popup(popupname);
  });

  $(document).on("click", "#foreground, .exit, .no, .giveup, .select *", function (e) {
    if (e.target === this) {
      popup();
    }
  });

  $(".left").click(() => {
    pagenow[1] = move(pagenow, 0);
    changePage(pagenow);
  });
  $(".right").click(() => {
    pagenow[1] = move(pagenow, 1);
    changePage(pagenow);
  });

  $(document).on("click", ".yes", () => {
    switch (popupnow) {
      case "f_button_up":
        pagenow[2] = true;
        popup("f_button_down");
        changePage(pagenow);
        break;
      case "l_door1":
      case "l_door2":
        popup("l_door_magic");
        break;
      case "b_door_close":
        if (items.includes("key")) {
          getItem("key", false);
          pagenow[3] = true;
          popup("b_door_open");
          changePage(pagenow);
        } else popup("b_door_lock");
        break;
      case "backroom":
      case "mainroom":
        pagenow[0] = popupnow;
        pagenow[1] = "front";
        changePage(pagenow);
        popup();
        break;
      case "br_linger":
        getItem("linger");
        clear(popupnow);
        popup("get_linger");
        break;
      case "br_books":
        stopTimer();
        popup("timepass");
        battle("boss");
        break;
      case "br_cabinet":
        getItem("dangerous_liquid");
        clear(popupnow);
        popup("get_dangerous_liquid");
        break;
      case "br_liquid":
        getItem("liquid");
        clear(popupnow);
        popup("get_liquid");
        break;
      case "win_gigu":
      case "win_tamgu":
      case "win_pyesu":
      case "win_suchik":
      case "win_reuse":
        popup("change_skill", popupnow.split("_")[1]);
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
  $(document).on("click", ".battle", () => {
    clear(popupnow);
    battle(popupnow);
  });
  $(document).on("click", ".submit", () => {
    if (popupnow === "f_whiteboard") {
      if (parseInt($(".answer").val()) === 1024) {
        clear(popupnow);
        getItem("key");
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

  $(document).on("click", "#inventory > img", function () {
    const itemname = $(this).attr("id");
    console.log("use item:" + itemname);
    if (itemname === "liquid" && !fighting) popup("wait");

    popup("use_" + itemname);
  });

  $(document).on("click", ".attack, #me .skill", function () {
    if (turn % 2 !== 0) return;
    const action = $(this).attr("class").split(" ");
    console.log("me", action);
    if (action[0] === "attack") {
      new Audio(`./sounds/attack.mp3`).play();
      attack("enemy", menow.atk + menow.atkplus);
    }
    if (action[0] === "skill") {
      if (menow.skills.includes("immersion")) buff("me", 0, 2);
      if (action.includes("used")) return;
      $(this).addClass("used");
      new Audio(`./sounds/${action[1]}.mp3`).play();
      switch (action[1]) {
        case "smite":
          attack("enemy", 2 * (menow.atk + menow.atkplus));
          break;
        case "batter":
          attack("enemy", menow.atk + menow.atkplus - 1, 3);
          break;
        case "improve":
          buff("me", 1, 1);
          break;
        case "accel":
          menow.accel = true;
          break;
        case "spray":
          let atked = 0;
          var atkid = setInterval(() => {
            if (Math.random() < 0.5) attack("me", 1);
            else attack("enemy", 1);
            if (!fighting || ++atked === enemynow.atk) clearInterval(atkid);
          }, 200);
          break;
        case "corruption":
          enemynow.corruption++;
          break;
        case "first":
          buff("me", 0, 4);
          break;
      }
      $(`.skill.${action[1]}`).addClass("used");
    }
    setTimeout(turnEnd, 1000);
  });
});

// preLoad
let ready = [false, false];
const start = () => {
  changePage(pagenow);
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
  "./images/backroom/left/liquid.jpg",
  "./images/backroom/right/main.jpg",
  "./images/backroom/right/books.jpg",
  "./images/backroom/right/linger.jpg",
  "./images/backroom/right/dna.jpg",
  "./images/backroom/back/main.jpg",
  // items
  "./images/items/key.jpg",
  "./images/items/dangerous_liquid.jpg",
  "./images/items/liquid.jpg",
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
