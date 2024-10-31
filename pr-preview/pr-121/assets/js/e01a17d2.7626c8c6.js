"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[6884],{

/***/ 17904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* binding */ metadata),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28453);


const frontMatter = {
	id: 'accessibility',
	title: 'Tillgänglighetsriktlinjer'
};
const contentTitle = undefined;
const metadata = {
  "id": "basics/accessibility",
  "title": "Tillgänglighetsriktlinjer",
  "description": "Riktlinjerna omfattar nivå A och AA i WCAG 2.1",
  "source": "@site/docs/basics/accessibility.mdx",
  "sourceDirName": "basics",
  "slug": "/basics/accessibility",
  "permalink": "/pr-preview/pr-121/basics/accessibility",
  "draft": false,
  "unlisted": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "accessibility",
    "title": "Tillgänglighetsriktlinjer"
  },
  "sidebar": "sideBar",
  "previous": {
    "title": "Ikoner",
    "permalink": "/pr-preview/pr-121/basics/icons"
  },
  "next": {
    "title": "Språk och skrivregler",
    "permalink": "/pr-preview/pr-121/basics/language"
  }
};
const assets = {

};



const toc = [{
  "value": "Visa var ett fel uppstått och beskriv det tydligt",
  "id": "visa-var-ett-fel-uppstått-och-beskriv-det-tydligt",
  "level": 2
}, {
  "value": "Se till att hjälpmedel kan presentera meddelanden som inte är i fokus",
  "id": "se-till-att-hjälpmedel-kan-presentera-meddelanden-som-inte-är-i-fokus",
  "level": 2
}, {
  "value": "Erbjud alternativ till rörelsestyrning",
  "id": "erbjud-alternativ-till-rörelsestyrning",
  "level": 2
}, {
  "value": "Möjliggör röststyrning av knappar och kontroller",
  "id": "möjliggör-röststyrning-av-knappar-och-kontroller",
  "level": 2
}, {
  "value": "Gör det möjligt att ångra klick",
  "id": "gör-det-möjligt-att-ångra-klick",
  "level": 2
}, {
  "value": "Erbjud alternativ till komplexa fingerrörelser",
  "id": "erbjud-alternativ-till-komplexa-fingerrörelser",
  "level": 2
}, {
  "value": "Popup-funktioner ska kunna hanteras och stängas av alla",
  "id": "popup-funktioner-ska-kunna-hanteras-och-stängas-av-alla",
  "level": 2
}, {
  "value": "Se till att det går att öka avstånd mellan tecken, rader, stycken och ord",
  "id": "se-till-att-det-går-att-öka-avstånd-mellan-tecken-rader-stycken-och-ord",
  "level": 2
}, {
  "value": "Använd tillräckliga kontraster i komponenter och grafik",
  "id": "använd-tillräckliga-kontraster-i-komponenter-och-grafik",
  "level": 2
}, {
  "value": "Märk upp vanliga formulärfält i koden",
  "id": "märk-upp-vanliga-formulärfält-i-koden",
  "level": 2
}, {
  "value": "Skapa en design som fungerar oavsett skärmens riktning",
  "id": "skapa-en-design-som-fungerar-oavsett-skärmens-riktning",
  "level": 2
}, {
  "value": "Se till att skräddarsydda komponenter fungerar i hjälpmedel",
  "id": "se-till-att-skräddarsydda-komponenter-fungerar-i-hjälpmedel",
  "level": 2
}, {
  "value": "Ge möjlighet att ångra, korrigera eller bekräfta vid viktiga transaktioner",
  "id": "ge-möjlighet-att-ångra-korrigera-eller-bekräfta-vid-viktiga-transaktioner",
  "level": 2
}, {
  "value": "Ge förslag på hur fel kan rättas till",
  "id": "ge-förslag-på-hur-fel-kan-rättas-till",
  "level": 2
}, {
  "value": "Benämn funktioner konsekvent",
  "id": "benämn-funktioner-konsekvent",
  "level": 2
}, {
  "value": "Utför inga oväntade förändringar vid inmatning",
  "id": "utför-inga-oväntade-förändringar-vid-inmatning",
  "level": 2
}, {
  "value": "Utför inga oväntade förändringar vid fokusering",
  "id": "utför-inga-oväntade-förändringar-vid-fokusering",
  "level": 2
}, {
  "value": "Ange språkförändringar i koden",
  "id": "ange-språkförändringar-i-koden",
  "level": 2
}, {
  "value": "Ange sidans språk i koden",
  "id": "ange-sidans-språk-i-koden",
  "level": 2
}, {
  "value": "Markera tydligt vilket fält eller element som är i fokus",
  "id": "markera-tydligt-vilket-fält-eller-element-som-är-i-fokus",
  "level": 2
}, {
  "value": "Gör en logisk tab-ordning",
  "id": "gör-en-logisk-tab-ordning",
  "level": 2
}, {
  "value": "Skriv beskrivande sidtitlar",
  "id": "skriv-beskrivande-sidtitlar",
  "level": 2
}, {
  "value": "Orsaka inte epileptiska anfall genom blinkande",
  "id": "orsaka-inte-epileptiska-anfall-genom-blinkande",
  "level": 2
}, {
  "value": "Ge användarna möjlighet att pausa eller stänga av rörelser",
  "id": "ge-användarna-möjlighet-att-pausa-eller-stänga-av-rörelser",
  "level": 2
}, {
  "value": "Ge användarna möjlighet att justera tidsbegränsningar",
  "id": "ge-användarna-möjlighet-att-justera-tidsbegränsningar",
  "level": 2
}, {
  "value": "Se till att markören inte fastnar vid tangentbordsnavigation",
  "id": "se-till-att-markören-inte-fastnar-vid-tangentbordsnavigation",
  "level": 2
}, {
  "value": "Utveckla systemet så att det går att hantera med enbart tangentbordet",
  "id": "utveckla-systemet-så-att-det-går-att-hantera-med-enbart-tangentbordet",
  "level": 2
}, {
  "value": "Använd text, inte bilder, för att visa text",
  "id": "använd-text-inte-bilder-för-att-visa-text",
  "level": 2
}, {
  "value": "Se till att text går att förstora utan problem",
  "id": "se-till-att-text-går-att-förstora-utan-problem",
  "level": 2
}, {
  "value": "Använd tillräcklig kontrast mellan text och bakgrund",
  "id": "använd-tillräcklig-kontrast-mellan-text-och-bakgrund",
  "level": 2
}, {
  "value": "Ge användaren möjlighet att pausa, stänga av eller sänka ljud",
  "id": "ge-användaren-möjlighet-att-pausa-stänga-av-eller-sänka-ljud",
  "level": 2
}, {
  "value": "Använd inte enbart färg för att förmedla information",
  "id": "använd-inte-enbart-färg-för-att-förmedla-information",
  "level": 2
}, {
  "value": "Gör inte instruktioner beroende av sensoriska kännetecken",
  "id": "gör-inte-instruktioner-beroende-av-sensoriska-kännetecken",
  "level": 2
}, {
  "value": "Presentera innehållet i en meningsfull ordning för alla",
  "id": "presentera-innehållet-i-en-meningsfull-ordning-för-alla",
  "level": 2
}, {
  "value": "Ange i kod vad sidans olika delar har för roll",
  "id": "ange-i-kod-vad-sidans-olika-delar-har-för-roll",
  "level": 2
}, {
  "value": "Syntolka videoinspelningar",
  "id": "syntolka-videoinspelningar",
  "level": 2
}, {
  "value": "Texta direktsändningar",
  "id": "texta-direktsändningar",
  "level": 2
}, {
  "value": "Syntolka eller erbjud alternativ till videoinspelningar",
  "id": "syntolka-eller-erbjud-alternativ-till-videoinspelningar",
  "level": 2
}, {
  "value": "Texta inspelad rörlig media (video, ljud, animationer…)",
  "id": "texta-inspelad-rörlig-media-video-ljud-animationer",
  "level": 2
}, {
  "value": "Erbjud alternativ om en inspelning enbart består av ljud eller video",
  "id": "erbjud-alternativ-om-en-inspelning-enbart-består-av-ljud-eller-video",
  "level": 2
}, {
  "value": "Beskriv med text allt innehåll som inte är text",
  "id": "beskriv-med-text-allt-innehåll-som-inte-är-text",
  "level": 2
}, {
  "value": "Skapa en flexibel layout som fungerar vid förstoring eller liten skärm",
  "id": "skapa-en-flexibel-layout-som-fungerar-vid-förstoring-eller-liten-skärm",
  "level": 2
}, {
  "value": "Se till att koden validerar",
  "id": "se-till-att-koden-validerar",
  "level": 2
}, {
  "value": "Erbjud möjlighet att hoppa förbi återkommande innehåll",
  "id": "erbjud-möjlighet-att-hoppa-förbi-återkommande-innehåll",
  "level": 2
}, {
  "value": "Skapa kortkommandon med varsamhet",
  "id": "skapa-kortkommandon-med-varsamhet",
  "level": 2
}, {
  "value": "Skriv beskrivande rubriker och etikettera",
  "id": "skriv-beskrivande-rubriker-och-etikettera",
  "level": 2
}, {
  "value": "Skapa tydliga och klickbara fältetiketter",
  "id": "skapa-tydliga-och-klickbara-fältetiketter",
  "level": 2
}, {
  "value": "Erbjud användarna flera olika sätt att navigera",
  "id": "erbjud-användarna-flera-olika-sätt-att-navigera",
  "level": 2
}, {
  "value": "Var konsekvent i navigation, struktur och utformning",
  "id": "var-konsekvent-i-navigation-struktur-och-utformning",
  "level": 2
}, {
  "value": "Skriv tydliga länkar",
  "id": "skriv-tydliga-länkar",
  "level": 2
}, {
  "value": "Felhantering",
  "id": "felhantering",
  "level": 2
}, {
  "value": "Visa var ett fel uppstått och beskriv det tydligt",
  "id": "visa-var-ett-fel-uppstått-och-beskriv-det-tydligt-1",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Riktlinjerna omfattar nivå A och AA i WCAG 2.1"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("table", {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["Dokument omfattar de tillgänglighetsriktlinjer som gäller för\nMigrationsverkets system och digitala tjänster. Riktlinjerna motsvarar\nnivå AA i WCAG 2.1. De riktlinjerna som för närvarande ingår utgör en\nminiminivå för tillgänglighet och är under utarbetande vilket innebär\natt det kan tillkomma fler riktlinjer och justeringar efterhand som\narbetet fortskrider. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), " Riktlinjer skrivna med röd text och i\ngråmarkerade rader bedöms inte tillämpbara på e-ansökningar."]
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["Version 1 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), " Ändrad: 2018-09-19 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), " Ansvarig: Patrik Ernfridsson"]
            })
          })]
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "visa-var-ett-fel-uppstått-och-beskriv-det-tydligt",
      children: "Visa var ett fel uppstått och beskriv det tydligt"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/2-ge-begripliga-felmeddelanden/",
        children: "https://webbriktlinjer.se/riktlinjer/2-ge-begripliga-felmeddelanden/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Hjälp dina användare när det blir fel. Väl formulerade felmeddelanden ger användarna möjlighet att fylla i så felfria data som möjligt i formulären. De minskar också risken för att användarna ska bli irriterade när systemet inte förstår eller kan tolka den felaktigt inmatade informationen."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "se-till-att-hjälpmedel-kan-presentera-meddelanden-som-inte-är-i-fokus",
      children: "Se till att hjälpmedel kan presentera meddelanden som inte är i fokus"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/164-meddelanden-som-inte-ar-fokus/",
        children: "https://webbriktlinjer.se/riktlinjer/164-meddelanden-som-inte-ar-fokus/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Se till att de som använder tekniska hjälpmedel som som exempelvis skärmläsare och förstoringsprogram kan göras uppmärksamma på viktiga meddelanden även om de presenteras utanför det område på sidan som användaren har i fokus. Ange med hjälp av attributen role eller aria-live var viktiga meddelanden kan förekomma, så får hjälpmedel kännedom om dessa och kan presentera dem för användaren vid ett lämpligt tillfälle. Berörda användare riskerar annars att missa varningar, upplysningar och felmeddelanden."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "erbjud-alternativ-till-rörelsestyrning",
      children: "Erbjud alternativ till rörelsestyrning"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/163-erbjud-alternativ-till-rorelsestyrning/",
        children: "https://webbriktlinjer.se/riktlinjer/163-erbjud-alternativ-till-rorelsestyrning/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Se till att funktioner som aktiveras genom att användaren till exempel skakar, vrider, rör vid eller viftar framför enheten kan stängas av. Funktionerna ska även kunna aktiveras på något annat sätt."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "möjliggör-röststyrning-av-knappar-och-kontroller",
      children: "Möjliggör röststyrning av knappar och kontroller"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/162-mojliggor-roststyrning-av-knappar-och-kontroller/",
        children: "https://webbriktlinjer.se/riktlinjer/162-mojliggor-roststyrning-av-knappar-och-kontroller/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Se till att text som är synlig på knappar och andra gränssnittskontroller också finns i, och överensstämmer med, den maskinläsbara etikett som representerar kontrollen i exempelvis program för röststyrning. Den som använder röststyrning säger vanligtvis det som står på en knapp för att använda knappen. Detta fungerar om det som står på knappen motsvarar den maskinläsbara texten. Upplevelsen för seende som använder skärmläsare blir också bättre om uppläst text matchar det som visas på skärmen."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "gör-det-möjligt-att-ångra-klick",
      children: "Gör det möjligt att ångra klick"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/161-gor-det-mojligt-att-angra-klick/",
        children: "https://webbriktlinjer.se/riktlinjer/161-gor-det-mojligt-att-angra-klick/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Den som använder pekskärm eller pekdon som exempelvis mus behöver kunna ångra sig om knappen eller trycket skedde av misstag. Erbjud därför minst en sådan möjlighet. Möjligheten att ångra ett påbörjat klick är värdefull därför att den minskar risken för att aktivera funktioner av misstag. Vem som helst kan råka trycka vid fel plats eller tillfälle, och det är extra lätt hänt för personer med vissa funktionsnedsättningar (exempelvis begränsad motorisk kontroll eller synnedsättning). Denna riktlinje berör dig som programmerar användargränssnitt (\"front-end\") med exempelvis Javascript, men inte dig som enbart jobbar med text, bild och formgivning."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "erbjud-alternativ-till-komplexa-fingerrörelser",
      children: "Erbjud alternativ till komplexa fingerrörelser"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/160-erbjud-alternativ-till-komplexa-fingerrorelser/",
        children: "https://webbriktlinjer.se/riktlinjer/160-erbjud-alternativ-till-komplexa-fingerrorelser/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Alla personer kan inte hantera komplexa rörelser på en pekskärm, så kallade fingergester. Detta gäller till exempel att svajpa (swipe) och gester som kräver flera fingrar (multi-touch) såsom dra isär och nyp ihop. Det kan bero på motoriska eller kognitiva begränsningar, vilket hjälpmedel en användare har eller användarens brist på kunskap om gränssnittet. Komplettera därför alltid sådana med enklare interaktion såsom klick, dubbelklick eller tryck, såvida inte rörelsen är avgörande för funktionaliteten. Observera att riktlinjen bara gäller webbplatsens eller appens gränssnitt. Det gäller inte operativsystemets eller webbläsarens funktioner, såsom horisontell svepning för att navigera i sidhistoriken. Riktlinjen undantar funktionalitet som naturligt kräver mer komplexa rörelser, till exempel att skriva sin signatur."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "popup-funktioner-ska-kunna-hanteras-och-stängas-av-alla",
      children: "Popup-funktioner ska kunna hanteras och stängas av alla"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/158-popup-funktioner-ska-kunna-hanteras-och-stangas-av-alla/",
        children: "https://webbriktlinjer.se/riktlinjer/158-popup-funktioner-ska-kunna-hanteras-och-stangas-av-alla/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Innehåll, till exempel popup-rutor, som dyker upp vid tangentbordsfokus eller när användaren för muspekaren (hovrar) över ett visst objekt ska kunna uppfattas och hanteras av alla - även av användare som har förstorat sidan eller tar längre tid på sig att komma till innehållet. Det är särskilt viktigt att innehållet enkelt kan tas bort eller stängas. Det kan till exempel gälla undermenyer, inforutor (tooltips) och icke-modala popup-fönster. Tyvärr skapar sådant innehåll annars ofta tillgänglighetsproblem, till exempel för att:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "användaren inte har aktiverat funktionen med avsikt,\nanvändaren inte blir medveten om att det har dykt upp nytt innehåll eller"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "det nya innehållet stör användarens förmåga att genomföra en uppgift."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "se-till-att-det-går-att-öka-avstånd-mellan-tecken-rader-stycken-och-ord",
      children: "Se till att det går att öka avstånd mellan tecken, rader, stycken och ord"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/157-avstand-mellan-tecken-rader-stycken-och-ord/",
        children: "https://webbriktlinjer.se/riktlinjer/157-avstand-mellan-tecken-rader-stycken-och-ord/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Många användare, till exempel dyslektiker och personer med nedsatt syn, behöver kunna påverka avståndet mellan stycken, rader, ord och tecken för att lättare kunna läsa. Gör det därför möjligt för användaren att påverka avstånden utan att innehåll eller funktionalitet krockar eller gömmer sig bakom annat innehåll. Denna riktlinje är mycket lik Se till att text går att förstora utan problem (R127) men gäller alltså mellanrummen och inte själva tecknen. Användaren ska ha möjlighet att öka avstånd åtminstone upp till följande relativa gränsvärden:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Radavstånd ska kunna ökas minst 1,5 gånger teckensnittets storlek.\nTeckenavstånd ska kunna ökas minst 0,12 gånger teckensnittets storlek."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Avståndet mellan ord ska kunna ökas minst 0,16 gånger teckensnittets storlek."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Avståndet mellan stycken ska kunna ökas minst 2 gånger teckensnittets storlek."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Förstoring av mellanrum kan ske på olika sätt. Till exempel med hjälp av länk en bookmarklet som ökar avstånden , med ett förstoringshjälpmedel eller genom att länk ställa in webbläsaren att tillämpa användarens egen css-kod . Riktlinjen gäller inte för länk öppna undertexter i video och inte heller för text som förekommer i bilder (vilket i och för sig ofta bör undvikas, se länk Använd text, inte bilder, för att visa text (R128)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "). För närvarande är även PDF undantaget."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "använd-tillräckliga-kontraster-i-komponenter-och-grafik",
      children: "Använd tillräckliga kontraster i komponenter och grafik"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/156-anvand-tillrackliga-kontraster-i-komponenter-och-grafik/",
        children: "https://webbriktlinjer.se/riktlinjer/156-anvand-tillrackliga-kontraster-i-komponenter-och-grafik/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Personer med nedsatt syn har ofta svårt att urskilja visuella kontraster mellan exempelvis en symbol och dess bakgrund, och riskerar därför att missa information. Designa därför webbplatsen så att komponenter i gränssnittet och informationsbärande grafik har tillräckliga kontraster. Som komponenter räknas till exempel knappar och formulärfält. Som grafiska objekt räknas exempelvis ikoner och betydelsefulla delar av illustrationer och diagram (till exempel kurvor och pilar). Denna riktlinje liknar Använd tillräcklig kontrast mellan text och bakgrund (R126) (som motsvarar WCAG-kriteriet 1.4.3). Men nu gäller alltså motsvarande krav även för innehåll som inte är text."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "märk-upp-vanliga-formulärfält-i-koden",
      children: "Märk upp vanliga formulärfält i koden"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/154-mark-upp-vanliga-formularfalt-i-koden/",
        children: "https://webbriktlinjer.se/riktlinjer/154-mark-upp-vanliga-formularfalt-i-koden/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Hjälp dina användare att fylla i inmatningsfält genom att ange i kod vilken typ av innehåll som förväntas. Då kan webbläsare eller hjälpmedel ibland automatiskt föreslå inmatning (baserat på till exempel tidigare inmatning i fält av samma typ) i vanliga formulärfält (såsom gatu- och postadress). Systemet kan också ytterligare hjälpa användaren genom att presentera fältet på ett sätt (till exempel med en symbol) som användaren känner igen."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Det är bra för alla användare, men kanske framför allt för personer med vissa kognitiva och motoriska funktionsnedsättningar och för användare som inte kan sidans språk så bra."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "skapa-en-design-som-fungerar-oavsett-skärmens-riktning",
      children: "Skapa en design som fungerar oavsett skärmens riktning"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["[", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/153-fungerar-oavsett-skarmens-riktning/(https://webbriktlinjer.se/riktlinjer/153-fungerar-oavsett-skarmens-riktning/)",
        children: "https://webbriktlinjer.se/riktlinjer/153-fungerar-oavsett-skarmens-riktning/(https://webbriktlinjer.se/riktlinjer/153-fungerar-oavsett-skarmens-riktning/)"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Alla människor har inte möjlighet att vrida på sin skärm. Vissa måste välja ett läge (stående eller liggande) och alltid använda detta, exempelvis med skärmen fast monterad på en rullstol. Skapa därför en design så att innehåll och funktioner är tillgängliga oavsett skärmens riktning."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Det finns inget som hindrar att presentationen av innehållet och funktionerna skiljer sig åt mellan de båda lägena så länge innehållet är tillgängligt och funktionerna är åtkomliga och har normal funktion. I riktlinjen finns undantag för när funktionaliteten är beroende av att användaren har skärmen i en viss riktning, till exempel ett pianoprogram där liggande läge är nödvändigt för att alla tangenterna ska få plats. Informera användaren om när en viss riktning av skärmen är nödvändigt."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "se-till-att-skräddarsydda-komponenter-fungerar-i-hjälpmedel",
      children: "Se till att skräddarsydda komponenter fungerar i hjälpmedel"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/152-se-till-att-skraddarsydda-komponenter-fungerar-hjalpmedel/",
        children: "https://webbriktlinjer.se/riktlinjer/152-se-till-att-skraddarsydda-komponenter-fungerar-hjalpmedel/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Många användare behöver hjälpmedel såsom skärmläsarprogram, förstoringsprogram punktdisplay med mera. Dessa hjälpmedel kommunicerar med operativsystemets tillgänglighets-API. För att det ska fungera behöver varje del av en webbsida eller applikation vid varje tillfälle exponera sitt namn, sin roll och sitt aktuella värde. Då kan hjälpmedlet presentera applikationen på ett korrekt sätt för användaren. En skärmläsare behöver […]"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "ge-möjlighet-att-ångra-korrigera-eller-bekräfta-vid-viktiga-transaktioner",
      children: "Ge möjlighet att ångra, korrigera eller bekräfta vid viktiga transaktioner"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/150-ge-mojlighet-att-angra-korrigera-eller-bekrafta-viktiga-transaktioner/",
        children: "https://webbriktlinjer.se/riktlinjer/150-ge-mojlighet-att-angra-korrigera-eller-bekrafta-viktiga-transaktioner/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Den som råkar göra något fel kan slippa mycket besvär om felet kan upptäckas och åtgärdas direkt."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "ge-förslag-på-hur-fel-kan-rättas-till",
      children: "Ge förslag på hur fel kan rättas till"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/149-ge-forslag-pa-hur-fel-kan-rattas-till/",
        children: "https://webbriktlinjer.se/riktlinjer/149-ge-forslag-pa-hur-fel-kan-rattas-till/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "När fel upptäcks automatiskt bör förslag på korrekt inmatning presenteras för användaren om det är möjligt."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "benämn-funktioner-konsekvent",
      children: "Benämn funktioner konsekvent"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/146-benamn-funktioner-konsekvent/",
        children: "https://webbriktlinjer.se/riktlinjer/146-benamn-funktioner-konsekvent/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Var konsekvent när du beskriver och namnger samma funktionalitet på olika sidor och skärmar."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "utför-inga-oväntade-förändringar-vid-inmatning",
      children: "Utför inga oväntade förändringar vid inmatning"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/144-utfor-inga-ovantade-forandringar-vid-inmatning/",
        children: "https://webbriktlinjer.se/riktlinjer/144-utfor-inga-ovantade-forandringar-vid-inmatning/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Utför ändringar när användaren har anledning att förvänta sig dem."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "utför-inga-oväntade-förändringar-vid-fokusering",
      children: "Utför inga oväntade förändringar vid fokusering"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/143-utfor-inga-ovantade-forandringar-vid-fokusering/",
        children: "https://webbriktlinjer.se/riktlinjer/143-utfor-inga-ovantade-forandringar-vid-fokusering/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Utför ändringar när användaren har anledning att förvänta sig dem."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "ange-språkförändringar-i-koden",
      children: "Ange språkförändringar i koden"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/142-ange-sprakforandringar-koden/",
        children: "https://webbriktlinjer.se/riktlinjer/142-ange-sprakforandringar-koden/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "För att öka sannolikheten att till exempel skärmläsare presenterar innehållet korrekt bör html-koden ange aktuellt språk med hjälp av lang-attribut."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "ange-sidans-språk-i-koden",
      children: "Ange sidans språk i koden"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/141-ange-sidans-sprak-i-koden/",
        children: "https://webbriktlinjer.se/riktlinjer/141-ange-sidans-sprak-i-koden/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "För att öka sannolikheten att till exempel skärmläsare presenterar innehållet korrekt bör html-koden ange aktuellt språk med hjälp av lang-attribut."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "markera-tydligt-vilket-fält-eller-element-som-är-i-fokus",
      children: "Markera tydligt vilket fält eller element som är i fokus"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/140-markera-element-i-fokus/",
        children: "https://webbriktlinjer.se/riktlinjer/140-markera-element-i-fokus/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Den som navigerar med t.ex. tab-tangenten behöver få veta var fokus ligger. Standardmarkeringen är ofta en tunn linje som är svår att se. Gör markeringen tydlig, till exempel med en CSS-regel."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "gör-en-logisk-tab-ordning",
      children: "Gör en logisk tab-ordning"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/136-gor-en-logisk-tab-ordning/",
        children: "https://webbriktlinjer.se/riktlinjer/136-gor-en-logisk-tab-ordning/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Testa tab-ordningen genom att granska en sida av varje sidtyp utan hjälp av tryckkänslig skärm, mus eller annat pekdon."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "skriv-beskrivande-sidtitlar",
      children: "Skriv beskrivande sidtitlar"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/135-skriv-beskrivande-sidtitlar/",
        children: "https://webbriktlinjer.se/riktlinjer/135-skriv-beskrivande-sidtitlar/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "En bra beskrivande titel sammanfattar sidans ämne eller innehåll. Varje sida på en webbplats, liksom andra typer av dokument bör ha en unik titel."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "orsaka-inte-epileptiska-anfall-genom-blinkande",
      children: "Orsaka inte epileptiska anfall genom blinkande"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/133-orsaka-inte-epileptiska-anfall-genom-blinkande/",
        children: "https://webbriktlinjer.se/riktlinjer/133-orsaka-inte-epileptiska-anfall-genom-blinkande/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Personer med en viss kategori av epilepsi kan få krampanfall om de utsätts för snabbt blinkande \"flimmer\" som upptar en tillräckligt stor del av synfältet."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "ge-användarna-möjlighet-att-pausa-eller-stänga-av-rörelser",
      children: "Ge användarna möjlighet att pausa eller stänga av rörelser"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/132-ge-anvandarna-mojlighet-att-pausa-eller-stanga-av-rorelser/",
        children: "https://webbriktlinjer.se/riktlinjer/132-ge-anvandarna-mojlighet-att-pausa-eller-stanga-av-rorelser/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Personer som har svårt att fokusera, läsa eller behålla koncentration behöver kunna pausa rörelser eller stänga av visuella distraktioner."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "ge-användarna-möjlighet-att-justera-tidsbegränsningar",
      children: "Ge användarna möjlighet att justera tidsbegränsningar"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/131-ge-anvandarna-mojlighet-att-justera-tidsbegransningar/",
        children: "https://webbriktlinjer.se/riktlinjer/131-ge-anvandarna-mojlighet-att-justera-tidsbegransningar/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Användare behöver ibland möjlighet att justera tidsbegräsningar som finns inbyggda i systemet, till exempel i en beställningsfunktion. Ge dem det!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "se-till-att-markören-inte-fastnar-vid-tangentbordsnavigation",
      children: "Se till att markören inte fastnar vid tangentbordsnavigation"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/130-se-till-att-markoren-inte-fastnar-vid-tangentbordsnavigation/",
        children: "https://webbriktlinjer.se/riktlinjer/130-se-till-att-markoren-inte-fastnar-vid-tangentbordsnavigation/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Markören ska inte fastna vid tangentbordsnavigation. Det kan hindra besökare att använda webbplatsen eller vissa funktioner."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "utveckla-systemet-så-att-det-går-att-hantera-med-enbart-tangentbordet",
      children: "Utveckla systemet så att det går att hantera med enbart tangentbordet"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Riktlinje\nDen som bara kan eller vill använda tangentbordet (eller hjälpmedel som kopplas till tangentbords-kommandon) är beroende av att systemet inte förutsätter att användaren har till exempel mus eller pekskärm."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/129-gar-att-hantera-med-tangentbord/",
        children: "https://webbriktlinjer.se/riktlinjer/129-gar-att-hantera-med-tangentbord/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "använd-text-inte-bilder-för-att-visa-text",
      children: "Använd text, inte bilder, för att visa text"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/128-anvand-text-inte-bilder-for-att-visa-text/",
        children: "https://webbriktlinjer.se/riktlinjer/128-anvand-text-inte-bilder-for-att-visa-text/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Användare behöver då och då anpassa texten bland annat genom att förstora eller välja ett annat teckensnitt, ändra förgrund- och bakgrundsfärger eller linjeavstånd. Om texten utgör en del av en bild saknas ofta de möjligheterna."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "se-till-att-text-går-att-förstora-utan-problem",
      children: "Se till att text går att förstora utan problem"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/127-se-till-att-text-gar-att-forstora-utan-problem/",
        children: "https://webbriktlinjer.se/riktlinjer/127-se-till-att-text-gar-att-forstora-utan-problem/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Det ska vara möjligt att förstora texten till åtminstone dubbel höjd och bredd utan att problem uppstår (till exempel att text hamnar bakom en bild eller krockar med annan text)."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Mätbarhet\nAnvänd testfall ZEP-2684 för att kontrollera att riktlinje 127 uppfylls."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "använd-tillräcklig-kontrast-mellan-text-och-bakgrund",
      children: "Använd tillräcklig kontrast mellan text och bakgrund"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/126-tillrackliga-kontraster/",
        children: "https://webbriktlinjer.se/riktlinjer/126-tillrackliga-kontraster/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Personer med nedsatt syn har ofta svårt att läsa text med bristande kontrast mot textens bakgrund. De flesta kan läsa brödtext på skärm om skillnaden i ljusintensitet mellan förgrund och bakgrund har förhållandet 4,5:1."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "ge-användaren-möjlighet-att-pausa-stänga-av-eller-sänka-ljud",
      children: "Ge användaren möjlighet att pausa, stänga av eller sänka ljud"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/125-kunna-pausa-ljud/",
        children: "https://webbriktlinjer.se/riktlinjer/125-kunna-pausa-ljud/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Det ska alltid vara möjligt att pausa, stoppa eller sänka sådant ljud som spelas upp automatiskt."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "använd-inte-enbart-färg-för-att-förmedla-information",
      children: "Använd inte enbart färg för att förmedla information"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/124-inte-bara-farg/",
        children: "https://webbriktlinjer.se/riktlinjer/124-inte-bara-farg/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Använd gärna färger, men låt inte färgskillnader vara det enda sättet att urskilja information utan komplettera med exempelvis text, mönster eller någon annan visuell indikation."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "gör-inte-instruktioner-beroende-av-sensoriska-kännetecken",
      children: "Gör inte instruktioner beroende av sensoriska kännetecken"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/123-ej-beroende-av-sensoriska-kannetecken/",
        children: "https://webbriktlinjer.se/riktlinjer/123-ej-beroende-av-sensoriska-kannetecken/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Även den som inte kan uppfatta form, storlek eller har möjlighet att relatera till höger eller vänster behöver kunna förstå till navigation och instruktioner."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "presentera-innehållet-i-en-meningsfull-ordning-för-alla",
      children: "Presentera innehållet i en meningsfull ordning för alla"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/122-meningsfull-ordning/",
        children: "https://webbriktlinjer.se/riktlinjer/122-meningsfull-ordning/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Alla användare tar inte del av informationen i samma ordning. En visuell presentation kan till exempel använda kolumner och rutnät för att fördela innehållet i två dimensioner, medan en skärmläsare presenterar innehållet sekventiellt. Responsiv design, som anpassar presentationen baserat på skärmstorlek, kan påverka ordningen. Även när språk som läses från vänster till höger blandas med […]"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "ange-i-kod-vad-sidans-olika-delar-har-för-roll",
      children: "Ange i kod vad sidans olika delar har för roll"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/121-ange-i-kod-vad-sidans-olika-delar-har-for-roll/",
        children: "https://webbriktlinjer.se/riktlinjer/121-ange-i-kod-vad-sidans-olika-delar-har-for-roll/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Öka chansen att informationen presenteras korrekt oavsett mottagarens verktyg, genom att använda html-elementen på rätt sätt."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Edit this page"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "syntolka-videoinspelningar",
      children: "Syntolka videoinspelningar"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/120-syntolka-videoinspelningar/",
        children: "https://webbriktlinjer.se/riktlinjer/120-syntolka-videoinspelningar/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Ordna med syntolkning om det behövs för att personer med begränsad syn ska kunna ta del av videoinnehåll."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "texta-direktsändningar",
      children: "Texta direktsändningar"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/119-texta-direktsandningar/",
        children: "https://webbriktlinjer.se/riktlinjer/119-texta-direktsandningar/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Digital video ska ha undertexter och för annat ljud bör en textversion erbjudas. Denna riktlinje gäller direktsändningar."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "syntolka-eller-erbjud-alternativ-till-videoinspelningar",
      children: "Syntolka eller erbjud alternativ till videoinspelningar"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/118-syntolka-eller-erbjud-alternativ-till-videoinspelningar/",
        children: "https://webbriktlinjer.se/riktlinjer/118-syntolka-eller-erbjud-alternativ-till-videoinspelningar/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Den som inte kan ta del av det visuella innehållet i videoinspelningar, till exempel på grund av synnedsättning, ska kunna få motsvarande information antingen i form av syntolkning (ljudbeskrivning) eller presenterad som text."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "texta-inspelad-rörlig-media-video-ljud-animationer",
      children: "Texta inspelad rörlig media (video, ljud, animationer…)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/117-texta-inspelad-rorlig-media/",
        children: "https://webbriktlinjer.se/riktlinjer/117-texta-inspelad-rorlig-media/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Inspelad digital video ska ha undertexter (kallas även textbeskrivningar eller textremsa) och för ljudinspelningar (till exempel podcasts) med mera bör en textversion erbjudas."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "erbjud-alternativ-om-en-inspelning-enbart-består-av-ljud-eller-video",
      children: "Erbjud alternativ om en inspelning enbart består av ljud eller video"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/116-alternativ-vid-enbart-ljud-video/",
        children: "https://webbriktlinjer.se/riktlinjer/116-alternativ-vid-enbart-ljud-video/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Användare som inte kan ta del av ljud- eller videoinspelningar ska ha en möjlighet att tillgodogöra sig innehållet med hjälp av en alternativ representation."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "beskriv-med-text-allt-innehåll-som-inte-är-text",
      children: "Beskriv med text allt innehåll som inte är text"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/115-textalternativ/",
        children: "https://webbriktlinjer.se/riktlinjer/115-textalternativ/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Användare som är beroende av till exempel skärmläsare och punktdisplay behöver beskrivningar av allt innehåll som inte är text. Det gäller till exempel: Bilder (förutom sådana som endast används för dekoration) Diagram Animationer Ljudsignaler Se därför till att allt sådant innehåll beskrivs med hjälp av text, förutom i de undantagsfall som beskrivs i WCAG-kriteriet. Undantagen […]"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "skapa-en-flexibel-layout-som-fungerar-vid-förstoring-eller-liten-skärm",
      children: "Skapa en flexibel layout som fungerar vid förstoring eller liten skärm"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/91-skapa-en-flexibel-layout/",
        children: "https://webbriktlinjer.se/riktlinjer/91-skapa-en-flexibel-layout/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Skapa en layout som fungerar på en 320 pixlar bred skärm utan att information eller funktionalitet går förlorad, utan scrollning i mer än en riktning. I praktiken innebär det responsiv design och att att riktigt långa ord behöver avstavas. Att behöva scrolla i sidled är besvärligt och försämrar upplevelsen. Många använder små skärmar och personer som på grund av nedsatt syn förstorar innehållet har liknande behov."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "se-till-att-koden-validerar",
      children: "Se till att koden validerar"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/84-se-till-att-koden-validerar/",
        children: "https://webbriktlinjer.se/riktlinjer/84-se-till-att-koden-validerar/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Se till att er webbplats har sidmallar och stilmallar som har en god kodkvalitet och följer standarder. Det ökar chansen att alla användare kan komma åt informationen och tjänsterna på webbplatsen, oavsett vilka verktyg de använder."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "erbjud-möjlighet-att-hoppa-förbi-återkommande-innehåll",
      children: "Erbjud möjlighet att hoppa förbi återkommande innehåll"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/75-gruppera-och-skapa-mojlighet-att-hoppa-forbi-delar-pa-sidorna/",
        children: "https://webbriktlinjer.se/riktlinjer/75-gruppera-och-skapa-mojlighet-att-hoppa-forbi-delar-pa-sidorna/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Bygg in genvägar i strukturen. Det kan ta lång tid att ta sig till olika delar av ett dokument när man navigerar med tangentbord, eftersom man normalt måste stega sig förbi varje länk. Webbplatser som har ett omfattande och komplext menysystem med många länkar kan försvåra avsevärt för många användare."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "skapa-kortkommandon-med-varsamhet",
      children: "Skapa kortkommandon med varsamhet"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/68-skapa-snabbkommandon-for-viktiga-funktioner/",
        children: "https://webbriktlinjer.se/riktlinjer/68-skapa-snabbkommandon-for-viktiga-funktioner/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Kortkommandon kan göra att det går snabbare att navigera på webbplatsen, men de bör användas med försiktighet. Det finns en risk att webbplatsens kortkommandon förväxlas med kortkommandon som användarens webbläsare, operativsystem eller hjälpmedel erbjuder. Kortkommandon som bara består av ett tecken kan dessutom orsaka problem för personer som använder röststyrning eller råkar klicka på fel tangent, exempelvis på grund av skakningar i händerna. Riktlinjen påverkar inte funktioner såsom listboxar och rullgardinsmenyer där användare kan göra sitt val genom att en eller flera tangenter trycks ned, eftersom detta bara går att göra när komponenten är i fokus."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "skriv-beskrivande-rubriker-och-etikettera",
      children: "Skriv beskrivande rubriker och etikettera"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/61-skriv-tydliga-och-berattande-rubriker/",
        children: "https://webbriktlinjer.se/riktlinjer/61-skriv-tydliga-och-berattande-rubriker/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Bra rubriker hjälper läsaren att hitta i texten. Rubrikerna är särskilt viktiga för personer som använder skärmläsare, som kan läsa upp en lista över rubrikerna på en sida. Rubrikerna ska vara lagom långa och sammanfatta vad sidan eller avsnittet handlar om. Alltför korta och allmänna rubriker ger inte användarna så mycket hjälp, till exempel \"Inledning\" eller \"Aktiviteter\"."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "skapa-tydliga-och-klickbara-fältetiketter",
      children: "Skapa tydliga och klickbara fältetiketter"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/55-skapa-tydliga-och-klickbara-faltetiketter/",
        children: "https://webbriktlinjer.se/riktlinjer/55-skapa-tydliga-och-klickbara-faltetiketter/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "För varje fält i ett formulär där användarna ska fylla i information, skapa en tydlig fältetikett (label) som förklarar fältets funktion."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "erbjud-användarna-flera-olika-sätt-att-navigera",
      children: "Erbjud användarna flera olika sätt att navigera"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/32-erbjud-besokaren-alternativa-orienteringsstod/",
        children: "https://webbriktlinjer.se/riktlinjer/32-erbjud-besokaren-alternativa-orienteringsstod/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Användare har många olika strategier för att hitta på webbplatser. Erbjud därför fler sätt att navigera utöver sökfunktionen och den primära navigeringen/menyn."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "var-konsekvent-i-navigation-struktur-och-utformning",
      children: "Var konsekvent i navigation, struktur och utformning"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/29-var-konsekvent-i-navigation-struktur-och-utformning/",
        children: "https://webbriktlinjer.se/riktlinjer/29-var-konsekvent-i-navigation-struktur-och-utformning/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Konsekvens är mycket viktigt för att användarna ska förstå hur webbplatsen fungerar. Det betyder inte att alla sidor måste se likadana ut, men liknande uppgifter ska utföras på samma sätt oavsett var på webbplatsen man befinner sig."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "skriv-tydliga-länkar",
      children: "Skriv tydliga länkar"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/5-skriv-tydliga-lankar/",
        children: "https://webbriktlinjer.se/riktlinjer/5-skriv-tydliga-lankar/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Skriv länkarna så att användarna förstår vart länken leder även när den är lyft ur sitt sammanhang. På webben skummar vi ofta igenom information och blicken fastnar på avvikelser såsom rubriker, markerade ord och länkar. Tydliga och informativa länkar gör att besökarna snabbare hittar den information de söker."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "felhantering",
      children: "Felhantering"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Visa var ett fel uppstått och beskriv det tydligt\nwebbriktlinjer"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Hjälp dina användare när det blir fel. Väl formulerade felmeddelanden ger användarna möjlighet att fylla i så felfria data som möjligt i formulären. De minskar också risken för att användarna ska bli irriterade när systemet inte förstår eller kan tolka den felaktigt inmatade informationen."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "visa-var-ett-fel-uppstått-och-beskriv-det-tydligt-1",
      children: "Visa var ett fel uppstått och beskriv det tydligt"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://webbriktlinjer.se/riktlinjer/2-ge-begripliga-felmeddelanden/",
        children: "https://webbriktlinjer.se/riktlinjer/2-ge-begripliga-felmeddelanden/"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Hjälp dina användare när det blir fel. Väl formulerade felmeddelanden ger användarna möjlighet att fylla i så felfria data som möjligt i formulären. De minskar också risken för att användarna ska bli irriterade när systemet inte förstår eller kan tolka den felaktigt inmatade informationen."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ })

}]);