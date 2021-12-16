const objects = [{ name: "test_puzzle", pos: [30, 13.8, 6, 4.5] }];
const puzzles = {
  test_puzzle: {
    name: "테스트 퍼즐",
    desc: "곰 한 마리가 처음 위치에서 남쪽으로 1km 이동했습니다. <br /> \
    또, 서쪽으로 1km 갔다가 북쪽으로 1km 움직였습니다. <br /> \
    그런데 곰이 처음 위치로 돌아왔습니다. <br /> \
    그렇다면 곰의 털 색은 무엇일까요? 진행요원에게 답을 말씀해 주세요.",
    img: "https://smtmap.com/wp-content/uploads/2020/06/%EA%B3%B0-%EA%BF%88.jpg",
  },
};

const make_obj = (o) => `<div
  class="item"
  data-puzzle=${o.name}
  style="
    top: ${o.pos[0]}vw;
    left: ${o.pos[1]}vw;
    width: ${o.pos[2]}vw;
    height: ${o.pos[3]}vw"
  > </div>
  `;

const make_puz = (puz) => `
    <div class="puzzle">
      <button class="exit">X</button>
      <h1 class="puzzle-name">${puz.name}</h1>
      <span class="puzzle-desc">${puz.desc}</span>
      ${puz.img ? `<img src="${puz.img}" />` : ""}
    </div>
  `;

$(document).ready(() => {
  $("#foreground").hide();
  $("#boss").hide();

  objects.forEach((o) => {
    $("#background").append(make_obj(o));
  });
  let puzzlenow = undefined;

  $(".item").click(function () {
    const puzname = $(this).data("puzzle");
    puzzlenow = puzname;
    const puz = puzzles[puzname];
    $("#foreground").show().html(make_puz(puz));
  });

  $(document).on("click", "#foreground, .exit", function (e) {
    if (e.target === this) {
      puzzlenow = undefined;
      $("#foreground").hide();
    }
  });

  document.addEventListener("keydown", (e) => {
    console.log(e.key);
    if (e.key === "PageUp") {
      // puzzle clear
      if (puzzlenow) {
        $("#foreground").hide();
        $(`#background > [data-puzzle=${puzzlenow}]`).hide();
      }
    }
    if (e.key === "PageDown") {
      // boss fight
      $("#foreground").hide();
      $("#background").html("");
      $("#boss").show(600);
    }
  });
});
