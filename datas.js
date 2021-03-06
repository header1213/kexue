const objects = {
  mainroom: {
    front: [
      { name: "whiteboard", pos: [-6, -2, 52, 20] },
      { name: "screen_button_up", pos: [-57, 1, 12, 10] },
      { name: "fume_hood", pos: [52, 10, 28, 60] },
    ],
    front_screen: [
      { name: "whiteboard", pos: [3, -8, 39, 19] },
      { name: "fume_hood", pos: [53, 0, 26, 48] },
      { name: "screen", pos: [-41, -19, 49, 41] },
    ],
    left: [
      { name: "door1", pos: [-56, 0, 19, 30] },
      { name: "gigu", pos: [-37, -2, 12, 15] },
      { name: "tamgu", pos: [-17, -2, 12, 15] },
      { name: "pyesu", pos: [3, -2, 12, 15] },
      { name: "suchik", pos: [24, -2, 12, 15] },
      { name: "door2", pos: [52, 10, 28, 60] },
    ],
    left_screen: [
      { name: "door1", pos: [-52, -2, 20, 30] },
      { name: "gigu", pos: [-32, -5, 12, 15] },
      { name: "tamgu", pos: [-11, -5, 12, 15] },
      { name: "pyesu", pos: [9, -5, 12, 15] },
      { name: "suchik", pos: [29, -5, 12, 15] },
      { name: "screen", pos: [56, -18, 21, 40] },
    ],
    back: [
      { name: "backdoor_close", pos: [-30, -2, 12, 32] },
      { name: "cabinet1", pos: [-8, 3, 29, 23] },
      { name: "cabinet2", pos: [22, 3, 29, 23] },
      { name: "cabinet3", pos: [52, 6, 29, 34] },
    ],
    back_open: [
      { name: "backroom", pos: [-40, 1, 13, 33] },
      { name: "cabinet1", pos: [-15, 8, 33, 25] },
      { name: "cabinet2", pos: [18, 8, 32, 25] },
      { name: "cabinet3", pos: [50, 11, 32, 36] },
    ],
    right: [
      { name: "drysink", pos: [-15, 12, 20, 8] },
      { name: "wetsink", pos: [39, 12, 18, 8] },
      { name: "reuse", pos: [60, 3, 12, 16] },
    ],
  },
  backroom: {
    front: [{ name: "dangerous_liquid", pos: [-15, 10, 74, 75] }],
    right: [
      { name: "books", pos: [-28, 10, 20, 18] },
      { name: "linger", pos: [14, 1, 23, 28] },
      { name: "dna", pos: [50, -39, 12, 21] },
    ],
    left: [{ name: "basic_liquid", pos: [-6, 34, 46, 22] }],
    back: [{ name: "mainroom", pos: [7, 2, 42, 94] }],
  },
};

const popups = {
  whiteboard: {
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
  screen_button_up: {
    type: "confirm",
    name: "버튼",
    desc: "누르시겠어요?",
    img: "./images/mainroom/front/button_up.jpg",
  },
  screen_button_down: {
    type: "message",
    name: "버튼",
    desc: '"지이잉-"',
    img: "./images/mainroom/front/button_down.jpg",
  },
  fume_hood: {
    type: "message",
    name: "흄 후드",
    desc: "평범한 흄 후드입니다.",
    img: "./images/mainroom/front/hood.jpg",
  },
  screen: {
    type: "message",
    name: "스크린",
    desc: "이딴 걸 왜 써놓은 거지..? <br /> 음... 일단 <b>지금은</b> 필요 없는 것 같네요.",
    img: "./images/mainroom/front/screen.jpg",
  },
  door1: {
    type: "confirm",
    name: "잠긴 문",
    desc: "굳게 잠궈 놓았습니다. <br /> 문을 여는 마법의 주문을 외쳐 볼까요?",
    img: "./images/mainroom/left/door1.jpg",
  },
  door2: {
    type: "confirm",
    name: "잠긴 문",
    desc: "굳게 잠궈 놓았습니다. <br /> 문을 여는 마법의 주문을 외쳐 볼까요?",
    img: "./images/mainroom/left/door2.jpg",
  },
  door_magic: {
    type: "message",
    name: "알로호모라!",
    desc: "음... 그대로네요.",
  },
  gigu: {
    type: "battle",
    name: "실험체: 실험기구",
    desc: "실험 기구를 자유자재로 사용하는 자입니다.",
    img: "./images/enemies/gigu.jpg",
  },
  tamgu: {
    type: "battle",
    name: "실험체: 탐구활동",
    desc: "항상 탐구활동에만 몰입해 있는 자입니다.",
    img: "./images/enemies/tamgu.jpg",
  },
  pyesu: {
    type: "battle",
    name: "실험체: 실험폐수",
    desc: "정작 이 자는 실험폐수의 처리법을 잘 모르는 것 같습니다.",
    img: "./images/enemies/pyesu.jpg",
  },
  suchik: {
    type: "battle",
    name: "실험체: 안전수칙",
    desc: "안전수칙을 지키지 않는 자는 죽게 될 것입니다.",
    img: "./images/enemies/suchik.jpg",
  },
  backdoor_close: {
    type: "confirm",
    name: "뒷문",
    desc: "열려면 열쇠가 있어야 할 것 같습니다. <br /> 한번 열어 볼까요?",
    img: "./images/mainroom/back/backdoor_close.jpg",
  },
  backdoor_lock: {
    type: "message",
    name: "뒷문",
    desc: "역시나 열리지 않습니다. <br /> 열쇠를 구해야겠네요.",
    img: "./images/mainroom/back/backdoor_close.jpg",
  },
  backdoor_open: {
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
  cabinet1: {
    type: "message",
    name: "실험실 사물함",
    desc: "실험 가운과 여러 비커, 알코올 램프가 들어 있습니다.",
    img: "./images/mainroom/back/cabinet1.jpg",
  },
  cabinet2: {
    type: "message",
    name: "실험실 사물함",
    desc: "플라스크와 실린더, DNA 모형과 과학 도서가 들어 있습니다.",
    img: "./images/mainroom/back/cabinet2.jpg",
  },
  cabinet3: {
    type: "message",
    name: "실험실 사물함",
    desc: "다양한 역학 실험 장치들이 들어 있습니다.",
    img: "./images/mainroom/back/cabinet3.jpg",
  },
  drysink: {
    type: "battle",
    name: "실험코드: DRYSINK",
    desc: "언제라도 당신을 공격할 준비가 되어 있습니다. <br /> *경고: 이 적은 강합니다.",
    img: "./images/mainroom/right/sink1.jpg",
  },
  wetsink: {
    type: "battle",
    name: "실험코드: WETSINK",
    desc: "언제라도 당신을 공격할 준비가 되어 있습니다. <br /> 물을 흘리고 있습니다. <br /> *경고: 이 적은 강합니다.",
    img: "./images/mainroom/right/sink2_water.jpg",
  },
  reuse: {
    type: "battle",
    name: "실험체: 재활용",
    desc: "절약과 재활용, 환경을 누구보다 중시하는 자입니다.",
    img: "./images/mainroom/right/board.jpg",
  },
  dangerous_liquid: {
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
  use_dangerous_liquid: {
    type: "confirm",
    name: "위험 약품",
    desc: "화장실 세제 냄새가 나는 약품입니다. <br /> 흔들 때마다 부글거리기는 하는데... 사용해 볼까요?",
    img: "./images/items/dangerous_liquid.jpg",
  },
  used_dangerous_liquid: {
    type: "message",
    name: "위험 약품",
    desc: "위험 약품을 마셨습니다. <br /> 속은 안 좋은데... 힘이 좀 세진 것 같네요. <br /><br /> <b>스탯 +3/-6 획득</b>",
  },
  basic_liquid: {
    type: "confirm",
    name: "기본 시약",
    desc: "가장 기본적인 시약들입니다. <br /> 조금 마셔 볼.. 아니, 챙겨 볼까요?",
    img: "./images/backroom/left/basic_liquid.jpg",
  },
  get_basic_liquid: {
    type: "message",
    name: "기본 시약",
    desc: "증류수를 조금 챙겼습니다.",
    img: "./images/backroom/left/basic_liquid.jpg",
  },
  wait: {
    type: "message",
    name: "음...",
    desc: "왠지 전투 중에 쓰고 싶습니다.",
  },
  use_basic_liquid: {
    type: "confirm",
    name: "증류수",
    desc: "증류수를 마실 수도 있고, 뿌릴 수도 있습니다. <br /> 어떤 행동을 할지는 저도 잘 모르겠네요. <br /> 아무튼 사용하시겠어요?",
    img: "./images/items/basic_liquid.jpg",
  },
  used_basic_liquid: {
    type: "message",
    name: "증류수",
    desc: "증류수를 몸에 펴발랐습니다. <br /> 모든 피로와... 뭐더라? <br /> 아무튼 모든 것이 싹 씻겨지는 느낌입니다. <br /><br /> <b>캐릭터 상태 초기화</b>",
  },
  books: {
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
  linger: {
    type: "confirm",
    name: "링거",
    desc: "액체의 투입 속도를 조절하는 기구입니다. <br /> 하나 챙겨 갈까요?",
    img: "./images/backroom/right/linger.jpg",
  },
  get_linger: {
    type: "message",
    name: "링거",
    desc: "링거를 챙겼습니다.",
    img: "./images/backroom/right/linger.jpg",
  },
  use_linger: {
    type: "confirm",
    name: "링거",
    desc: "약물을 꽂아 사용하면 힘이 날 것 같습니다. <br /> 사용할까요?",
    img: "./images/items/linger.jpg",
  },
  used_linger: {
    type: "confirm",
    name: "링거",
    desc: "역시, 힘이 팔팔합니다! <br /><br /> <b>체력 +5</b>",
    img: "./images/items/linger.jpg",
  },
  dna: {
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
};
const enemies = {
  boss: {
    id: "boss",
    name: "린선 일족 연구자",
    baseatk: 0,
    basehp: 60,
    skills: ["immortalism", "acid", "base"],
    reward: ["clear", "clear"],
  },
  gigu: {
    id: "gigu",
    name: "실험체: 실험기구",
    baseatk: 1,
    basehp: 50,
    skills: ["accel", "cost", "quantity"],
    reward: ["skill", "cost"],
  },
  tamgu: {
    id: "tamgu",
    name: "실험체: 탐구활동",
    baseatk: 20,
    basehp: 20,
    skills: ["immersion", "explore", "activity"],
    reward: ["skill", "activity"],
  },
  pyesu: {
    id: "pyesu",
    name: "실험체: 실험폐수",
    baseatk: 100,
    basehp: 50,
    skills: ["drinking", "close", "talk"],
    reward: ["skill", "close"],
  },
  suchik: {
    id: "suchik",
    name: "실험체: 안전수칙",
    baseatk: 3,
    basehp: 80,
    skills: ["safe", "fire", "electric"],
    reward: ["passive", "safe"],
  },
  reuse: {
    id: "reuse",
    name: "실험체: 재활용",
    baseatk: 1,
    basehp: 1,
    life: 2,
    skills: ["upcycling", "reuse"],
    reward: ["passive", "reuse"],
  },
  drysink: {
    id: "drysink",
    name: "실험코드: DRYSINK",
    baseatk: 19,
    basehp: 20,
    skills: [],
    reward: ["stats", [4, 6]],
  },
  wetsink: {
    id: "wetsink",
    name: "실험코드: WETSINK",
    baseatk: 20,
    basehp: 19,
    skills: [],
    reward: ["stats", [6, 4]],
  },
};
const skills = {
  hard: {
    type: "skill",
    name: "단단해지기",
    tooltip: "내 공격력을 4 내리고 체력을 6 올립니다.",
  },
  pierce: {
    type: "skill",
    name: "세게 찌르기",
    tooltip: "공격력+7로 공격합니다. 다음 받는 피해가 3 늘어납니다.",
  },
  electric: {
    type: "skill",
    name: "감전 사고",
    tooltip: "15의 피해를 받고 공격력이 1 감소합니다.",
  },
  close: {
    type: "skill",
    name: "빗나간 공격",
    tooltip: "공격력의 2배로 공격합니다. 이 피해로 적이 죽는 경우 체력 1을 남깁니다. 비활성화되지 않습니다.",
  },
  talk: {
    type: "skill",
    name: "취중진담?",
    tooltip: "적의 체력을 5 회복시킵니다. 적의 체력이 30 이상일 경우 공격합니다. 비활성화되지 않습니다.",
  },
  explore: {
    type: "skill",
    name: "탐구",
    tooltip: "다음 피해를 입으면 10의 피해를 더 받고 15만큼 회복합니다.",
  },
  activity: {
    type: "skill",
    name: "활동",
    tooltip: "공격력만큼 공격합니다. 입힌 피해만큼 체력을 회복합니다.",
  },
  cost: {
    type: "skill",
    name: "뼈아픈 지출",
    tooltip: "체력을 반으로 줄이고 공격력을 10 올립니다.",
  },
  quantity: {
    type: "skill",
    name: "정량주의",
    tooltip: "15의 피해를 줍니다.",
  },
  acid: {
    type: "skill",
    name: "강산",
    tooltip: "상대의 공격력과 체력을 무작위로 재분배합니다. 강염기를 활성화합니다.",
  },
  base: {
    type: "skill",
    name: "강염기",
    tooltip: "적의 공격력을 15 낮춥니다. 더 이상 공격력을 낮출 수 없으면 체력을 낮춥니다. 강산을 활성화합니다.",
  },

  charge: {
    type: "passive",
    name: "충전",
    tooltip: "일반 공격 시 모든 스킬을 충전하고 공격력을 2 올립니다.",
  },
  safe: {
    type: "passive",
    name: "안전한 실험",
    tooltip: "10턴 안에 처치하지 못하면 상대에게 50의 피해를 입힙니다.",
  },
  fire: {
    type: "passive",
    name: "화재 사고",
    tooltip: "매 턴 2의 피해를 입습니다.",
  },
  drinking: {
    type: "passive",
    name: "드링킹",
    tooltip: "매 턴 공격력 또는 방어력 중 하나를 반으로 줄이고 다른 하나는 2배로 늘립니다. (최대 500)",
  },
  immersion: {
    type: "passive",
    name: "몰입",
    tooltip: "'탐구'를 사용하면 -15/+20을 얻습니다. '활동'을 사용하면 +15/-15를 얻습니다.",
  },
  accel: {
    type: "passive",
    name: "가속기",
    tooltip: "매 턴 공격력을 2배로 늘리고 체력을 5 잃습니다.",
  },
  immortalism: {
    type: "passive",
    name: "불살주의",
    tooltip: "공격할 수 없습니다. 5턴 동안 공격 기술을 사용할 수 없습니다.",
  },
  upcycling: {
    type: "passive",
    name: "업사이클링",
    tooltip: "15의 체력으로 부활합니다.",
  },
  reuse: {
    type: "passive",
    name: "재활용",
    tooltip: "받은 피해만큼 공격력을 올립니다.",
  },
};
