const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

const flowN61 = addKeyword("61").addAnswer("No tienes asma.");

const flowN60 = addKeyword("60").addAnswer("Tienes asma.");

const flowN59 = addKeyword("59").addAnswer("No tienes asma.");

const flowN58 = addKeyword("58").addAnswer("Tienes asma.");

const flowN57 = addKeyword("57").addAnswer("Tienes asma.");

const flowN56 = addKeyword("56").addAnswer(
  [
    "¿Tienes respiraciones difíciles?",
    "",
    "Escriba el *número* que corresponde 👇",
    "*60*. Si.",
    "*61*. No.",
  ],
  { capture: true },
  (ctx, { fallback }) => {
    if (!ctx.body.includes("")) {
      return fallback();
    }
    console.log("Aqui viene todo:", ctx.body);
  }
);

const flowN55 = addKeyword("55").addAnswer("No tienes asma.");

const flowN54 = addKeyword("54").addAnswer("Tienes asma.");

const flowN53 = addKeyword("53").addAnswer("No tienes asma.");

const flowN52 = addKeyword("52").addAnswer("Tienes asma.");

const flowN51 = addKeyword("51").addAnswer("No tienes asma.");

const flowN50 = addKeyword("50").addAnswer(
  [
    "¿Empujas los hombros hacia adelante para respirar mejor?",
    "",
    "Escriba el *número* que corresponde 👇",
    "*58*. Si.",
    "*59*. No.",
  ],
  { capture: true },
  (ctx, { fallback }) => {
    if (!ctx.body.includes("")) {
      return fallback();
    }
    console.log("Aqui viene todo:", ctx.body);
  }
);

const flowN49 = addKeyword("49").addAnswer("No tienes asma.");

const flowN48 = addKeyword("48").addAnswer(
  [
    "¿Tienes respiraciones difíciles?",
    "",
    "Escriba el *número* que corresponde 👇",
    "*54*. Si.",
    "*55*. No.",
  ],
  { capture: true },
  (ctx, { fallback }) => {
    if (!ctx.body.includes("")) {
      return fallback();
    }
    console.log("Aqui viene todo:", ctx.body);
  }
);

const flowN47 = addKeyword("47").addAnswer("Tienes asma.");

const flowN46 = addKeyword("46").addAnswer(
  [
    "¿Haces respiraciones por la boca?",
    "",
    "Escriba el *número* que corresponde 👇",
    "*56*. Si.",
    "*57*. No.",
  ],
  { capture: true },
  (ctx, { fallback }) => {
    if (!ctx.body.includes("")) {
      return fallback();
    }
    console.log("Aqui viene todo:", ctx.body);
  }
);

const flowN45 = addKeyword("45").addAnswer("No tienes asma.");

const flowN44 = addKeyword("44").addAnswer(
  [
    "¿Tienes respiraciones difíciles?",
    "",
    "Escriba el *número* que corresponde 👇",
    "*52*. Si.",
    "*53*. No.",
  ],
  { capture: true },
  (ctx, { fallback }) => {
    if (!ctx.body.includes("")) {
      return fallback();
    }
    console.log("Aqui viene todo:", ctx.body);
  }
);

const flowN43 = addKeyword("43").addAnswer("No tienes asma.");

const flowN42 = addKeyword("42").addAnswer(
  [
    "¿Tienes respiraciones difíciles?",
    "",
    "Escriba el *número* que corresponde 👇",
    "*50*. Si.",
    "*51*. No.",
  ],
  { capture: true },
  (ctx, { fallback }) => {
    if (!ctx.body.includes("")) {
      return fallback();
    }
    console.log("Aqui viene todo:", ctx.body);
  }
);

const flowN41 = addKeyword("41").addAnswer("No tienes asma.");

const flowN40 = addKeyword("40").addAnswer(
  [
    "¿Haces respiraciones por la boca?",
    "",
    "Escriba el *número* que corresponde 👇",
    "*48*. Si.",
    "*49*. No.",
  ],
  { capture: true },
  (ctx, { fallback }) => {
    if (!ctx.body.includes("")) {
      return fallback();
    }
    console.log("Aqui viene todo:", ctx.body);
  }
);

const flowN39 = addKeyword("39").addAnswer("No tienes asma.");

const flowN38 = addKeyword("38").addAnswer(
  [
    "Resollar al respirar",
    "",
    "Escriba el *número* que corresponde 👇",
    "*46*. Si.",
    "*47*. No.",
  ],
  { capture: true },
  (ctx, { fallback }) => {
    if (!ctx.body.includes("")) {
      return fallback();
    }
    console.log("Aqui viene todo:", ctx.body);
  }
);

const flowN37 = addKeyword("37").addAnswer("No tienes asma.");

const flowN36 = addKeyword("36").addAnswer(
  [
    "¿Haces respiraciones por la boca?",
    "",
    "Escriba el *número* que corresponde 👇",
    "*44*. Si.",
    "*45*. No.",
  ],
  { capture: true },
  (ctx, { fallback }) => {
    if (!ctx.body.includes("")) {
      return fallback();
    }
    console.log("Aqui viene todo:", ctx.body);
  }
);

const flowN35 = addKeyword("35").addAnswer("No tienes asma.");

const flowN34 = addKeyword("34").addAnswer(
  [
    "¿Tienes respiraciones cortas?",
    "",
    "Escriba el *número* que corresponde 👇",
    "*42*. Si.",
    "*43*. No.",
  ],
  { capture: true },
  (ctx, { fallback }) => {
    if (!ctx.body.includes("")) {
      return fallback();
    }
    console.log("Aqui viene todo:", ctx.body);
  }
);

const flowN33 = addKeyword("33").addAnswer(
  [
    "¿Dolor de garganta frecuente?",
    "",
    "Escriba el *número* que corresponde 👇",
    "*38*. Si.",
    "*39*. No.",
  ],
  { capture: true },
  (ctx, { fallback }) => {
    if (!ctx.body.includes("")) {
      return fallback();
    }
    console.log("Aqui viene todo:", ctx.body);
  }
);

const flowN32 = addKeyword("32").addAnswer("No tienes asma.");

const flowN31 = addKeyword("31").addAnswer(
  [
    "Cansancio o sentirse débil",
    "",
    "Escriba el *número* que corresponde 👇",
    "*40*. Si.",
    "*41*. No.",
  ],
  { capture: true },
  (ctx, { fallback }) => {
    if (!ctx.body.includes("")) {
      return fallback();
    }
    console.log("Aqui viene todo:", ctx.body);
  }
);

const flowN30 = addKeyword("30").addAnswer(
  [
    "¿Resollar al respirar?",
    "",
    "Escriba el *número* que corresponde 👇",
    "*36*. Si.",
    "*37*. No.",
  ],
  { capture: true },
  (ctx, { fallback }) => {
    if (!ctx.body.includes("")) {
      return fallback();
    }
    console.log("Aqui viene todo:", ctx.body);
  }
);

const flowN29 = addKeyword("29").addAnswer("No tienes asma.");

const flowN28 = addKeyword("28").addAnswer(
  [
    "¿Tienes infecciones respiratorias frecuentes?",
    "",
    "Escriba el *número* que corresponde 👇",
    "*34*. Si.",
    "*35*. No.",
  ],
  { capture: true },
  (ctx, { fallback }) => {
    if (!ctx.body.includes("")) {
      return fallback();
    }
    console.log("Aqui viene todo:", ctx.body);
  }
);

const flowN27 = addKeyword("27").addAnswer(
  "No tienes asma.",
  { capture: true },
  (ctx, { fallback }) => {
    if (!ctx.body.includes("")) {
      return fallback();
    }
    console.log("Aqui viene todo:", ctx.body);
  }
);

const flowN26 = addKeyword("26").addAnswer(
  "Tienes asma.",
  { capture: true },
  (ctx, { fallback }) => {
    if (!ctx.body.includes("")) {
      return fallback();
    }
    console.log("Aqui viene todo:", ctx.body);
  }
);

const flowN25 = addKeyword("25").addAnswer("No tienes asma.");

const flowN24 = addKeyword("24").addAnswer(
  [
    "Cansancio o sentirse débil",
    "",
    "Escriba el *número* que corresponde 👇",
    "*33*. Si.",
  ],
  { capture: true },
  (ctx, { fallback }) => {
    if (!ctx.body.includes("")) {
      return fallback();
    }
    console.log("Aqui viene todo:", ctx.body);
  }
);

const flowN23 = addKeyword("23").addAnswer("No tienes asma.");

const flowN22 = addKeyword("22").addAnswer(
  [
    "¿Tienes problemas respiratorios?",
    "",
    "Escriba el *número* que corresponde 👇",
    "*30*. Si.",
  ],
  { capture: true },
  (ctx, { fallback }) => {
    if (!ctx.body.includes("")) {
      return fallback();
    }
    console.log("Aqui viene todo:", ctx.body);
  }
);

const flowN21 = addKeyword("21").addAnswer(
  [
    "¿Tienes menos energia al jugar?",
    "",
    "Escriba el *número* que corresponde 👇",
    "*31*. Si.",
    "*32*. No.",
  ],
  { capture: true },
  (ctx, { fallback }) => {
    if (!ctx.body.includes("")) {
      return fallback();
    }
    console.log("Aqui viene todo:", ctx.body);
  }
);

const flowN20 = addKeyword("20").addAnswer(
  [
    "Resollar al respirar",
    "",
    "Escriba el *número* que corresponde 👇",
    "*28*. Si.",
    "*29*. No.",
  ],
  { capture: true },
  (ctx, { fallback }) => {
    if (!ctx.body.includes("")) {
      return fallback();
    }
    console.log("Aqui viene todo:", ctx.body);
  }
);

const flowN19 = addKeyword("19").addAnswer(
  [
    "¿Tienes dolor en el pecho?",
    "",
    "Escriba el *número* que corresponde 👇",
    "*24*. Si",
    "*25*. No.",
  ],
  { capture: true },
  (ctx, { fallback }) => {
    if (!ctx.body.includes("")) {
      return fallback();
    }
    console.log("Aqui viene todo:", ctx.body);
  }
);

const flowN18 = addKeyword("18").addAnswer(
  [
    "¿Tienes menos energia al jugar?",
    "",
    "Escriba el *número* que corresponde 👇",
    "*26*. Si.",
    "*27*. No.",
  ],
  { capture: true },
  (ctx, { fallback }) => {
    if (!ctx.body.includes("")) {
      return fallback();
    }
    console.log("Aqui viene todo:", ctx.body);
  }
);

const flowN17 = addKeyword("17").addAnswer(
  [
    "Cansancio o sentirse débil",
    "",
    "Escriba el *número* que corresponde 👇",
    "*22*. Si.",
    "*23*. No.",
  ],
  { capture: true },
  (ctx, { fallback }) => {
    if (!ctx.body.includes("")) {
      return fallback();
    }
    console.log("Aqui viene todo:", ctx.body);
  }
);

const flowN16 = addKeyword("16").addAnswer("No tienes asma.");

const flowN15 = addKeyword("15")
  .addAnswer("Tos frecuente al dormir")
  .addAnswer("Tienes asma.");

const flowN14 = addKeyword("14").addAnswer(
  [
    "¿Dolor de garganta frecuente?",
    "",
    "Escriba el *número* que corresponde 👇",
    "*20*. Si.",
    "*21*. No.",
  ],
  { capture: true },
  (ctx, { fallback }) => {
    if (!ctx.body.includes("")) {
      return fallback();
    }
    console.log("Aqui viene todo:", ctx.body);
  }
);

const flowN13 = addKeyword("13").addAnswer(
  [
    "¿Dolor de garganta frecuente?",
    "",
    "Escriba el *número* que corresponde 👇",
    "*17*. Si.",
    "*18*. No.",
  ],
  { capture: true },
  (ctx, { fallback }) => {
    if (!ctx.body.includes("")) {
      return fallback();
    }
    console.log("Aqui viene todo:", ctx.body);
  }
);

const flowN12 = addKeyword("12").addAnswer(
  [
    "¿Tienes problemas respiratorios?",
    "",
    "Escriba el *número* que corresponde 👇",
    "*19*. Si.",
    "*16*. No.",
  ],
  { capture: true },
  (ctx, { fallback }) => {
    if (!ctx.body.includes("")) {
      return fallback();
    }
    console.log("Aqui viene todo:", ctx.body);
  }
);

const flowN11 = addKeyword("11").addAnswer(
  [
    "¿Tienes problemas respiratorios?",
    "",
    "Escriba el *número* que corresponde 👇",
    "*15*. Si.",
    "*14*. No.",
  ],
  { capture: true },
  (ctx, { fallback }) => {
    if (!ctx.body.includes("")) {
      return fallback();
    }
    console.log("Aqui viene todo:", ctx.body);
  }
);

const flowN10 = addKeyword("10").addAnswer("Tienes asma.");

const flowN09 = addKeyword("09").addAnswer("Tienes asma.");

const flowN08 = addKeyword("08").addAnswer(
  [
    "¿Tienes tos seca?",
    "",
    "Escriba el *número* que corresponde 👇",
    "*12*. Si.",
    "*13*. No.",
  ],
  { capture: true },
  (ctx, { fallback }) => {
    if (!ctx.body.includes("")) {
      return fallback();
    }
    console.log("Aqui viene todo:", ctx.body);
  }
);

const flowN07 = addKeyword("07").addAnswer("Tienes asma.");

const flowN06 = addKeyword("06").addAnswer("No tienes asma.");

const flowN05 = addKeyword("05").addAnswer(
  [
    "¿Te da fatiga despues de hacer ejercicios?",
    "",
    "Escriba el *número* que corresponde 👇",
    "*09*. Si.",
  ],
  { capture: true },
  (ctx, { fallback }) => {
    if (!ctx.body.includes("")) {
      return fallback();
    }
    console.log("Aqui viene todo:", ctx.body);
  }
);

const flowN04 = addKeyword("04").addAnswer("No tienes asma.");

const flowN03 = addKeyword("03").addAnswer(
  [
    "¿Tos frecuente al dormir?",
    "",
    "Escriba el *número* que corresponde 👇",
    "*10*. Si.",
    "*11*. No.",
  ],
  { capture: true },
  (ctx, { fallback }) => {
    if (!ctx.body.includes("")) {
      return fallback();
    }
    console.log("Aqui viene todo:", ctx.body);
  }
);

const flowN02 = addKeyword("02").addAnswer(
  [
    "¿Tienes menos energía al jugar?",
    "",
    "Escriba el *número* que corresponde 👇",
    "*03*. Si.",
    "*04*. No.",
  ],
  { capture: true },
  (ctx, { fallback }) => {
    if (!ctx.body.includes("")) {
      return fallback();
    }
    console.log("Aqui viene todo:", ctx.body);
  }
);

const flowN01 = addKeyword("01").addAnswer(
  [
    "¿Cuando terminas de hacer ejercicios te cuesta respirar?",
    "",
    "Escriba el *número* que corresponde 👇",
    "*05*. Si.",
    "*06*. No.",
  ],
  { capture: true },
  (ctx, { fallback }) => {
    if (!ctx.body.includes("")) {
      return fallback();
    }
    console.log("Aqui viene todo:", ctx.body);
  }
);

const flowNo = addKeyword(["No", "no"]).addAnswer(
  [
    "¿Haces ejercicios?",
    "",
    "Escriba el *número* que corresponde 👇",
    "*01*. Si.",
    "*02*. No.",
  ],
  { capture: true },
  (ctx, { fallback }) => {
    if (!ctx.body.includes("")) {
      return fallback();
    }
    console.log("Aqui viene todo:", ctx.body);
  }
);

const flowSi = addKeyword(["Si", "si"])
  .addAnswer(
    "Dime, ¿Cuál es tu trabajo?",
    { capture: true },
    (ctx, { fallback }) => {
      if (!ctx.body.includes("")) {
        return fallback();
      }
      console.log("Aqui viene todo:", ctx.body);
    }
  )

  .addAnswer(
    [
      "¿Estás expuesto al ambiente, polvo, moho, humedad, tabaco, etc...?",
      "",
      "Escriba *De acuerdo* ✅ o *Desacuerdo* ❌ para continuar",
    ],
    { capture: true },
    (ctx, { fallback }) => {
      if (!ctx.body.includes("")) {
        return fallback();
      }
      console.log("Aqui viene todo:", ctx.body);
    }
  )

  .addAnswer(
    [
      "¿Mientras estas trabajando o llegando a tu casa tienes tos?",
      "",
      "Escriba el *número* que corresponde 👇",
      "*07*. Si.",
      "*08*. No.",
    ],
    { capture: true },
    (ctx, { fallback }) => {
      if (!ctx.body.includes("")) {
        return fallback();
      }
      console.log("Aqui viene todo:", ctx.body);
    }
  );

const flowSaludo = addKeyword(["Hola", "Hola", "Ola", "hola"])
  .addAnswer("Hola, Bienvenido a este Chatbot 🙌")
  .addAnswer("¿Como te llamas?", { capture: true }, (ctx, { fallback }) => {
    if (!ctx.body.includes("")) {
      return fallback();
    }
    console.log("Aqui viene todo:", ctx.body);
  })

  .addAnswer(
    "¿Eres hombre o mujer?",
    { capture: true },
    (ctx, { fallback }) => {
      if (!ctx.body.includes("")) {
        return fallback();
      }
      console.log("Aqui viene todo:", ctx.body);
    }
  )

  .addAnswer("Ingresa tu edad con letras", { capture: true }, (ctx, { fallback }) => {
    if (!ctx.body.includes("")) {
      return fallback();
    }
    console.log("Aqui viene todo:", ctx.body);
  })

  .addAnswer(
    "¿Actualmente estás trabajando?",
    { capture: true },
    (ctx, { fallback }) => {
      if (!ctx.body.includes("")) {
        return fallback();
      }
      console.log("Aqui viene todo:", ctx.body);
    }
  );

const main = async () => {
  const adapterDB = new MockAdapter();
  const adapterFlow = createFlow([
    flowSaludo,
    flowSi,
    flowNo,
    flowN01,
    flowN02,
    flowN03,
    flowN04,
    flowN05,
    flowN06,
    flowN07,
    flowN08,
    flowN09,
    flowN10,
    flowN11,
    flowN12,
    flowN13,
    flowN14,
    flowN15,
    flowN16,
    flowN17,
    flowN18,
    flowN19,
    flowN20,
    flowN21,
    flowN22,
    flowN23,
    flowN24,
    flowN25,
    flowN26,
    flowN27,
    flowN28,
    flowN29,
    flowN30,
    flowN31,
    flowN32,
    flowN33,
    flowN34,
    flowN35,
    flowN36,
    flowN37,
    flowN38,
    flowN39,
    flowN40,
    flowN41,
    flowN42,
    flowN43,
    flowN44,
    flowN45,
    flowN46,
    flowN47,
    flowN48,
    flowN49,
    flowN50,
    flowN51,
    flowN52,
    flowN53,
    flowN54,
    flowN55,
    flowN56,
    flowN57,
    flowN58,
    flowN59,
    flowN60,
    flowN61,
  ]);
  const adapterProvider = createProvider(BaileysProvider);

  createBot({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
  });

  QRPortalWeb();
};

main();