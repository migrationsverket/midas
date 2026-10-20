"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([["7057"], {
13608(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  diagram: () => (diagram)
});
/* import */ var _chunk_SVP7TREG_mjs__rspack_import_0 = __webpack_require__(19279);
/* import */ var _chunk_JWPE2WC7_mjs__rspack_import_1 = __webpack_require__(77454);
/* import */ var _chunk_CLGD4ZFX_mjs__rspack_import_2 = __webpack_require__(5637);
/* import */ var _chunk_DU6HZSFF_mjs__rspack_import_3 = __webpack_require__(34599);
/* import */ var _chunk_X3CZISLH_mjs__rspack_import_4 = __webpack_require__(31293);
/* import */ var _chunk_Y2CYZVJY_mjs__rspack_import_5 = __webpack_require__(86827);
/* import */ var _mermaid_js_parser__rspack_import_6 = __webpack_require__(78731);







// src/diagrams/railroad/parser/abnfParser.ts

var langiumParser = (0,_mermaid_js_parser__rspack_import_6/* .createRailroadAbnfServices */.sB)().RailroadAbnf.parser.LangiumParser;
var transformAlternation = /* @__PURE__ */ (0,_chunk_Y2CYZVJY_mjs__rspack_import_5/* .__name */.K)((alt) => {
  const alternatives = alt.alternatives.map(transformConcatenation);
  if (alternatives.length === 1) {
    return alternatives[0];
  }
  return {
    type: "choice",
    alternatives
  };
}, "transformAlternation");
var transformConcatenation = /* @__PURE__ */ (0,_chunk_Y2CYZVJY_mjs__rspack_import_5/* .__name */.K)((concat) => {
  const elements = concat.elements.map(transformElement);
  if (elements.length === 1) {
    return elements[0];
  }
  return {
    type: "sequence",
    elements
  };
}, "transformConcatenation");
var parseRepeat = /* @__PURE__ */ (0,_chunk_Y2CYZVJY_mjs__rspack_import_5/* .__name */.K)((repeat) => {
  if (repeat.includes("*")) {
    const [minStr, maxStr] = repeat.split("*");
    const min = minStr ? parseInt(minStr, 10) : 0;
    const max = maxStr ? parseInt(maxStr, 10) : Infinity;
    return { min, max };
  }
  const exact = parseInt(repeat, 10);
  return { min: exact, max: exact };
}, "parseRepeat");
var transformElement = /* @__PURE__ */ (0,_chunk_Y2CYZVJY_mjs__rspack_import_5/* .__name */.K)((element) => {
  const inner = transformPrimary(element.primary);
  if (!element.repeat) {
    return inner;
  }
  const { min, max } = parseRepeat(element.repeat);
  if (min === 0 && max === 1) {
    return { type: "optional", element: inner };
  }
  return {
    type: "repetition",
    element: inner,
    min,
    max
  };
}, "transformElement");
var transformPrimary = /* @__PURE__ */ (0,_chunk_Y2CYZVJY_mjs__rspack_import_5/* .__name */.K)((primary) => {
  switch (primary.$type) {
    case "AbnfStringLiteral":
      return {
        type: "terminal",
        value: primary.value
      };
    case "AbnfNumVal":
      return {
        type: "terminal",
        value: primary.value
      };
    case "AbnfRuleName":
      return {
        type: "nonterminal",
        name: primary.name
      };
    case "AbnfGroup":
      return transformAlternation(primary.element);
    case "AbnfOptionalGroup":
      return {
        type: "optional",
        element: transformAlternation(primary.element)
      };
    default:
      throw new Error(`Unsupported ABNF primary node: ${primary.$type}`);
  }
}, "transformPrimary");
var transformRule = /* @__PURE__ */ (0,_chunk_Y2CYZVJY_mjs__rspack_import_5/* .__name */.K)((rule) => {
  return {
    name: rule.name,
    definition: transformAlternation(rule.definition)
  };
}, "transformRule");
var populateDb = /* @__PURE__ */ (0,_chunk_Y2CYZVJY_mjs__rspack_import_5/* .__name */.K)((ast) => {
  (0,_chunk_JWPE2WC7_mjs__rspack_import_1/* .populateCommonDb */.S)(ast, _chunk_SVP7TREG_mjs__rspack_import_0.db);
  if (ast.title) {
    _chunk_SVP7TREG_mjs__rspack_import_0.db.setTitle(ast.title);
  }
  ast.rules.map((rule) => _chunk_SVP7TREG_mjs__rspack_import_0.db.addRule(transformRule(rule)));
}, "populateDb");
var parser = {
  parse: /* @__PURE__ */ (0,_chunk_Y2CYZVJY_mjs__rspack_import_5/* .__name */.K)((input) => {
    _chunk_SVP7TREG_mjs__rspack_import_0.db.clear();
    _chunk_X3CZISLH_mjs__rspack_import_4/* .log.debug */.R.debug("[ABNF Parser] Starting Langium parse");
    const result = langiumParser.parse(input);
    if (result.lexerErrors.length > 0 || result.parserErrors.length > 0) {
      throw new _mermaid_js_parser__rspack_import_6/* .MermaidParseError */.zg(result);
    }
    const ast = result.value;
    _chunk_X3CZISLH_mjs__rspack_import_4/* .log.debug */.R.debug("[ABNF Parser] Parsed rules:", ast.rules.length);
    populateDb(ast);
    _chunk_X3CZISLH_mjs__rspack_import_4/* .log.debug */.R.debug("[ABNF Parser] Parse complete");
  }, "parse"),
  parser: {
    yy: _chunk_SVP7TREG_mjs__rspack_import_0.db
  }
};

// src/diagrams/railroad/abnfDiagram.ts
var diagram = {
  parser,
  db: _chunk_SVP7TREG_mjs__rspack_import_0.db,
  renderer: _chunk_SVP7TREG_mjs__rspack_import_0/* .renderer */.U,
  styles: _chunk_SVP7TREG_mjs__rspack_import_0/* .getStyles */.$
};



},

}]);