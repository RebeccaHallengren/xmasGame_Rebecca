let activepage = 0;
/**@typedef {{Header: string, Text: string, isCorrect:boolean, nextPage: number}} page*/

/**
 * objects in the array represent each side of the game.
 * @type {pages[]}
 */

const pages = [
  {
    Header: "Rädda pepparkakorna",
    Text: "Vid jul man ofta bakar, och tänder sina ljusstakar. Pepparkakor är vid denna tid en trendig deg, men här håller man på att begå ett felsteg. Vilken av ingrediens ska tas bort? ",
    Item1: 'URL("Items/XmasFeeling.webp")',
    Btn1: {
      Text: "Smör",
      isCorrect: false,
      nextPage: 1,
    },
    Btn2: {
      Text: "Citron",
      isCorrect: true,
      nextPage: 1,
    },
    Btn3: {
      Text: "Kanel",
      isCorrect: false,
      nextPage: 1,
    },
    backgroundImage: 'URL("Items/gingerbread.jpg")',
  },

  {
    Header: "Julbrevet har kommit bort!",
    Text: "Om man inte skickat har, får man oftast det som blev kvar. Milo har glömt skicka sin önskelista till tomten i år, det skulle han gjort i förrgår. Hjälp Milo så listan tomten når, vilket sätt du föreslår?",
    Item1: 'URL("Items/XmasFeeling.webp")',
    Btn1: {
      Text: "Slangbella",
      isCorrect: false,
      nextPage: 2,
    },
    Btn2: {
      Text: "Ring Postnord",
      isCorrect: false,
      nextPage: 2,
    },
    Btn3: {
      Text: "Tomtens släde",
      isCorrect: true,
      nextPage: 2,
    },
    backgroundImage: 'URL("Items/backgroundMailToSanta.png")',
  },
  {
    Header: "Mata tomtens renar!",
    Text: "Vi står nu utanför tomtens hus, vi i luften känna det på pepparkakor bjuds. Vi mot hans renar ler, som visar oss runt i detta vinterkvarter. I gengäld vi tillbaka ge, morötter, glass eller kycklingfilé.",
    Item1: 'URL("Items/XmasFeeling.webp")',
    Btn1: {
      Text: "Morötter",
      isCorrect: true,
      nextPage: 3,
    },
    Btn2: {
      Text: "Glass",
      isCorrect: false,
      nextPage: 3,
    },
    Btn3: {
      Text: "Kycklingfilé",
      isCorrect: false,
      nextPage: 3,
    },
    backgroundImage: 'URL("Items/BackgroundMission2.png")',
  },
  {
    Header: "Julkören sprider stämning!",
    Text: "Hej tomtegubbar och tänd ett ljus, kören sjunger för varje grannhus! En jultext dem är osäkra på, kan du hjälpa dem att texten återfå? 'Jag vill ha ...'",
    Item1: 'URL("Items/XmasFeeling.webp")',
    Btn1: {
      Text: "Mer grisfötter",
      isCorrect: false,
      nextPage: 4,
    },
    Btn2: {
      Text: "Mer jul",
      isCorrect: true,
      nextPage: 4,
    },
    Btn3: {
      Text: "Mer snö",
      isCorrect: false,
      nextPage: 4,
    },
    backgroundImage: 'URL("Items/christmasCarrol.png")',
  },
  {
    Header: "Ingen jul utan snögubbe!",
    Text: "Lisa snöbollar rulla, när hon ställt dem på varann blir det väldigt effektfulla. Med morot och pinne hon använder sitt barnasinne. Kan du se vad som saknas på gubben här, eller blir resultatet sisådär?  ",
    Item1: 'URL("Items/XmasFeeling.webp")',
    Btn1: {
      Text: "Öga",
      isCorrect: true,
      nextPage: 5,
    },
    Btn2: {
      Text: "Fötter",
      isCorrect: false,
      nextPage: 5,
    },
    Btn3: {
      Text: "Tomteluva",
      isCorrect: false,
      nextPage: 5,
    },
    backgroundImage: 'URL("Items/BackgroundMission4.png")',
  },
  {
    Header: "Hugga gran!",
    Text: "I varje hem den ofta står och på julafton man runt den går. Man klär den med hoppfulla ljus och glitter, som gör att barnen fylls av fnitter. Hur kan vi få granen hem, ett verktyg behövs så lägg på en rem. ",
    Item1: 'URL("Items/XmasFeeling.webp")',
    Btn1: {
      Text: "Ståltråd",
      isCorrect: false,
    },
    Btn2: {
      Text: "Yxa",
      isCorrect: true,
    },
    Btn3: {
      Text: "Skruvdragare",
      isCorrect: false,
    },
    backgroundImage: 'URL("Items/christmasTreeCar.png")',
  },
];
