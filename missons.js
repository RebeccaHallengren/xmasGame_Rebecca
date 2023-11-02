let activepage = 0;

const pages = [
  {
    Headers: "Uppdrag 1",
    Text: "Om man inte skickat har, får man oftast det som blev kvar. Milo har glömt skicka sin önskemlista till tomten i år, det skulle han gjort i förrgår. Hjälp Milo så listan tomten når, vilket sätt du föreslår?",
    Btn1: {
      Text: "Slangbella",
      nextPage: 1,
    },
    Btn2: {
      Text: "Brevduva",
      nextPage: 1,
    },
    Btn3: {
      Text: "Tomtens släde",
      nextPage: 1,
    },
    backgroundImage: 'URL("Items/BackgroundMission1.png")', //Backgrundsbilden för första uppdraget
  },
  {
    Headers: "Uppdrag 2",
    Text: "En bit in i december vi är, och tomten har precis mottagit ditt kuvert. Vi står nu utanför hans hus, vi i luften känna det på pepparkakor bjuds. Vi mot hans renar ler, som visar oss runt i detta vinterkvarter. I gengäld vi tillbaka ge, morötter, glass eller kycklingfilé.",
    Btn1: {
      Text: "Morötter",
      nextPage: 2,
    },
    Btn2: {
      Text: "Glass",
      nextPage: 2,
    },
    Btn3: {
      Text: "Kycklingfilé",
      nextPage: 2,
    },
    backgroundImage: 'URL("Items/BackgroundMission2.png")',
  },
  {
    Headers: "Uppdrag 3",
    Text: "Hej tomtegubbar, tänd ett ljus och mer jul, att sjunga sånger tycker kören är jättekul! En jultext dem är osäkra på, kan du hjälpa dem att texten återfå",
    Btn1: {
      Text: "??",
      nextPage: 3,
    },
    Btn2: {
      Text: "??",
      nextPage: 3,
    },
    Btn3: {
      Text: "??",
      nextPage: 3,
    },
    backgroundImage: 'URL("Items/BackgroundMisson3.png")', //Backgrundsbilden för första uppdraget
  },
  {
    Headers: "Uppdrag 4",
    Text: "Med snö du kan skapa många ting, du kan med tillbehör sedan göra iordning. Filippa, Valter och Agnes sin snögrubbe rullat, ",
    Btn1: {
      Text: "??",
      nextPage: 4,
    },
    Btn2: {
      Text: "??",
      nextPage: 4,
    },
    Btn3: {
      Text: "??",
      nextPage: 4,
    },
    backgroundImage: 'URL("Items/BackgroundMission4.png")', //Backgrundsbilden för första uppdraget
  },
];
