const objects = {
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
  right: [
    { name: "r_sink1", pos: [-15, 12, 20, 8] },
    { name: "r_sink2", pos: [39, 12, 18, 8] },
    { name: "r_board", pos: [60, 3, 12, 16] },
  ],
};
const popups = {
  f_whiteboard: {
    name: "화이트 보드",
    desc: "칠판에 문제가 적혀 있습니다.<br /> 정답은 무엇일까요?",
    img: "./images/mainroom/front/whiteboard.jpg",
  },
  f_button_up: {
    name: "버튼",
    desc: "누르시겠어요?",
    img: "./images/mainroom/front/button_up.jpg",
  },
  f_button_down: {
    name: "버튼",
    desc: '"지이잉-"',
    img: "./images/mainroom/front/button_down.jpg",
  },
  f_hood: {
    name: "흄 후드",
    desc: "평범한 흄 후드입니다.",
    img: "./images/mainroom/front/hood.jpg",
  },
  screen: {
    name: "스크린",
    desc: "무언가를 보여주고 있는 것 같습니다.",
    img: "./images/mainroom/front/screen.jpg",
  },
  l_door1: {},
  l_board1: {
    name: "여러가지 실험기구",
    desc: "실험 기구에 대한 설명이 적혀 있습니다.",
    img: "./images/mainroom/left/board1.jpg",
  },
  l_board2: {
    name: "탐구활동의 단계",
    desc: "탐구활동의 단계를 보여주고 있습니다.",
    img: "./images/mainroom/left/board2.jpg",
  },
  l_board3: {
    name: "실험폐수 처리방침",
    desc: "실험폐수를 처리하는 방침을 알려줍니다.",
    img: "./images/mainroom/left/board3.jpg",
  },
  l_board4: {
    name: "실험실 안전수칙",
    desc: "실험실에서 지켜야 할 안전수칙을 써 놓았습니다.",
    img: "./images/mainroom/left/board4.jpg",
  },
  l_door2: {
    name: "잠긴 문",
    desc: "굳게 잠궈 놓았습니다. <br /> 알로호모라! 네, 굳게 잠궈 놓았네요.",
    img: "./images/mainroom/left/door2.jpg",
  },
  b_door_close: {
    name: "문",
    desc: "비밀번호는 무엇일까요?",
    img: "./images/mainroom/back/backdoor_close.jpg",
  },
  b_cabinet1: {
    name: "실험실 사물함",
    desc: "실험 가운과 여러 비커, 알코올 램프가 들어 있습니다.",
    img: "./images/mainroom/back/cabinet1.jpg",
  },
  b_cabinet2: {
    name: "실험실 사물함",
    desc: "플라스크와 실린더, DNA 모형과 과학 도서가 들어 있습니다.",
    img: "./images/mainroom/back/cabinet2.jpg",
  },
  b_cabinet3: {
    name: "실험실 사물함",
    desc: "다양한 역학 실험 장치들이 들어 있습니다.",
    img: "./images/mainroom/back/cabinet3.jpg",
  },
  r_sink1: {
    name: "싱크대",
    desc: "씻고 흘려 보내기 위한 싱크대입니다.",
    img: "./images/mainroom/right/sink1.jpg",
  },
  r_sink2: {
    name: "싱크대",
    desc: "씻고 흘려 보내기 위한 싱크대입니다. <br /> 물이 흐르고 있습니다.",
    img: "./images/mainroom/right/sink2_water.jpg",
  },
  r_board: {
    name: "자원의 재활용",
    desc: "다음 중 일반 쓰레기를 모두 고르세요. <br /> 게 딱지, 귤 껍질, 고추장, 의약품",
    img: "./images/mainroom/right/board.jpg",
  },
};

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

const popup = (puzname) => {
  const puz = popups[puzname];
  if (!puz) {
    console.error("no popup:", puzname);
    return;
  }
  $("#foreground")
    .show()
    .html(
      `
    <div class="popup">
    <button class="exit">X</button>
    <h1>${puz.name}</h1>
    <span>${puz.desc}</span>
    ${puz.img ? `<img src="${puz.img}" />` : ""}
    </div>
    `
    );
};

const change_page = (page) => {
  console.log(page);
  $(".item").remove();
  let additional = "";
  if (page[0] === "mainroom" && ["front", "left"].includes(page[1]) && page[2]) additional = "_screen";
  $("#background").css("background-image", `url(./images/${page[0]}/${page[1]}/main${additional}.jpg)`);
  objects[page[1] + additional].forEach((o) => {
    $("#background").append(make_object(o));
  });
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

$(document).ready(() => {
  // room, direction, screen, backdoor
  // let pagenow = ["mainroom", "front", false, false];
  let pagenow = ["mainroom", "front", false, false];
  change_page(pagenow);
  $("#foreground").hide();

  let popupnow = undefined;

  $(document).on("click", ".item", function () {
    const puzname = $(this).data("popup");
    popupnow = puzname;
    console.log(popupnow);
    popup(popupnow);
  });

  $(document).on("click", "#foreground, .exit", function (e) {
    if (e.target === this) {
      popupnow = undefined;
      $("#foreground").hide();
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

  document.addEventListener("keydown", (e) => {
    console.log(e.key);
    if (e.key === "`") {
      // popup remove
      if (popupnow) {
        $("#foreground").hide();
        $(`#background > [data-popup=${popupnow}]`).hide();
      }
    } else if (e.key === "ArrowDown") {
      if (popupnow === "f_button_up" && pagenow[2] === false) {
        // screen down
        pagenow[2] = true;
        popupnow = undefined;
        $("#foreground").hide();
        popup("f_button_down");
        change_page(pagenow);
      }
      if (popupnow === "b_door_close") {
        // door open
        pagenow[3] = true;
        popupnow = undefined;
        $("#foreground").hide();
        popup("b_door_open");
        change_page(pagenow);
      }
    } else if (e.key == "Escape") {
      // popup close
      popupnow = undefined;
      $("#foreground").hide();
    }
  });
});
