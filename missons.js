//Obejkt för startsida
const firstPage = {
  HeaderStart: "Rädda Julen!",
  TextStart:
    "Julen är snart här och det är en magisk atmosfär. Tomtens förberedelser är många och han varje dag problem stånga. Eftersom du en nisse är, du behöver avhjälpa tomten med allt vad det innebär. Om allt faller väl ut, du sprider glädje vid varje husknut.",
  InputStart: {
    Text: "Skriv ditt namn",
  },
  BtnStart: {
    Text: "Börja spela",
  },
  backgroundImage: 'URL("Items/BackgroundStart.png")',
};

let inventory = [];
let activepage = 0;

const pages = [
  {
    Headers: "Uppdrag 1",
    Text: "Om man inte skickat har, får man oftast det som blev kvar. Milo har glömt skicka sin önskemlista till tomten i år, det skulle han gjort i förrgår. Hjälp Milo så listan tomten når, vilket sätt du föreslår?",
    Btn1: {
      Text: "Slangbella",
      isCorrect: false,
      nextPage: 1,
    },
    Btn2: {
      Text: "Brevduva",
      isCorrect: false,
      nextPage: 1,
    },
    Btn3: {
      Text: "Tomtens släde",
      isCorrect: true,
      nextPage: 1,
    },
    backgroundImage: 'URL("Items/BackgroundMission1.png")',
  },
  {
    Headers: "Uppdrag 2",
    Text: "En bit in i december vi är, och tomten har precis mottagit ditt kuvert. Vi står nu utanför hans hus, vi i luften känna det på pepparkakor bjuds. Vi mot hans renar ler, som visar oss runt i detta vinterkvarter. I gengäld vi tillbaka ge, morötter, glass eller kycklingfilé.",
    Btn1: {
      Text: "Morötter",
      isCorrect: true,
      nextPage: 2,
    },
    Btn2: {
      Text: "Glass",
      isCorrect: false,
      nextPage: 2,
    },
    Btn3: {
      Text: "Kycklingfilé",
      isCorrect: false,
      nextPage: 2,
    },
    backgroundImage: 'URL("Items/BackgroundMission2.png")',
  },
  {
    Headers: "Uppdrag 3",
    Text: "Hej tomtegubbar, tänd ett ljus och mer jul, att sjunga sånger tycker kören är jättekul! En jultext dem är osäkra på, kan du hjälpa dem att texten återfå?",
    Btn1: {
      Text: "Mer grisfötter",
      isCorrect: false,
      nextPage: 3,
    },
    Btn2: {
      Text: "Mer jul",
      isCorrect: true,
      nextPage: 3,
    },
    Btn3: {
      Text: "Mer snö",
      isCorrect: false,
      nextPage: 3,
    },
    backgroundImage: 'URL("Items/BackgroundMission3_.png)',
  },
  {
    Headers: "Uppdrag 4",
    Text: "Med snö du kan skapa många ting, du kan med tillbehör sedan göra iordning. Filippa, Valter och Agnes sin snögrubbe rullat, ",
    Btn1: {
      Text: "??",
      isCorrect: true,
      nextPage: 4,
    },
    Btn2: {
      Text: "??",
      isCorrect: true,
      nextPage: 4,
    },
    Btn3: {
      Text: "??",
      isCorrect: true,
      nextPage: 4,
    },
    backgroundImage: 'URL("Items/BackgroundMission4.png")',
  },
];
