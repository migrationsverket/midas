"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([["5863"], {
2122(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
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







// src/diagrams/railroad/parser/pegParser.ts

var langiumParser = (0,_mermaid_js_parser__rspack_import_6/* .createRailroadPegServices */.Pz)().RailroadPeg.parser.LangiumParser;
var transformOrderedChoice = /* @__PURE__ */ (0,_chunk_Y2CYZVJY_mjs__rspack_import_5/* .__name */.K)((choice) => {
  const alternatives = choice.alternatives.map(transformSequence);
  if (alternatives.length === 1) {
    return alternatives[0];
  }
  return {
    type: "choice",
    alternatives
  };
}, "transformOrderedChoice");
var transformSequence = /* @__PURE__ */ (0,_chunk_Y2CYZVJY_mjs__rspack_import_5/* .__name */.K)((sequence) => {
  const elements = sequence.elements.map(transformPrefix);
  if (elements.length === 1) {
    return elements[0];
  }
  return {
    type: "sequence",
    elements
  };
}, "transformSequence");
var transformPrefix = /* @__PURE__ */ (0,_chunk_Y2CYZVJY_mjs__rspack_import_5/* .__name */.K)((prefix) => {
  const inner = transformSuffix(prefix.suffix);
  if (!prefix.operator) {
    return inner;
  }
  const label = prefix.operator === "&" ? `&${nodeToLabel(inner)}` : `!${nodeToLabel(inner)}`;
  return {
    type: "special",
    text: label
  };
}, "transformPrefix");
var nodeToLabel = /* @__PURE__ */ (0,_chunk_Y2CYZVJY_mjs__rspack_import_5/* .__name */.K)((node) => {
  switch (node.type) {
    case "terminal":
      return `"${node.value}"`;
    case "nonterminal":
      return node.name;
    case "special":
      return node.text;
    default:
      return "(...)";
  }
}, "nodeToLabel");
var transformSuffix = /* @__PURE__ */ (0,_chunk_Y2CYZVJY_mjs__rspack_import_5/* .__name */.K)((suffix) => {
  const inner = transformPrimary(suffix.primary);
  if (!suffix.operator) {
    return inner;
  }
  switch (suffix.operator) {
    case "?":
      return { type: "optional", element: inner };
    case "*":
      return { type: "repetition", element: inner, min: 0, max: Infinity };
    case "+":
      return { type: "repetition", element: inner, min: 1, max: Infinity };
    default:
      throw new Error(`Unsupported PEG suffix operator: ${suffix.operator}`);
  }
}, "transformSuffix");
var transformPrimary = /* @__PURE__ */ (0,_chunk_Y2CYZVJY_mjs__rspack_import_5/* .__name */.K)((primary) => {
  switch (primary.$type) {
    case "PegLiteral":
      return {
        type: "terminal",
        value: primary.value
      };
    case "PegIdentifier":
      return {
        type: "nonterminal",
        name: primary.name
      };
    case "PegGroup":
      return transformOrderedChoice(primary.element);
    case "PegAny":
      return {
        type: "special",
        text: primary.dot
      };
    default:
      throw new Error(`Unsupported PEG primary node: ${primary.$type}`);
  }
}, "transformPrimary");
var transformRule = /* @__PURE__ */ (0,_chunk_Y2CYZVJY_mjs__rspack_import_5/* .__name */.K)((rule) => {
  return {
    name: rule.name,
    definition: transformOrderedChoice(rule.definition)
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
    _chunk_X3CZISLH_mjs__rspack_import_4/* .log.debug */.R.debug("[PEG Parser] Starting Langium parse");
    const result = langiumParser.parse(input);
    if (result.lexerErrors.length > 0 || result.parserErrors.length > 0) {
      throw new _mermaid_js_parser__rspack_import_6/* .MermaidParseError */.zg(result);
    }
    const ast = result.value;
    _chunk_X3CZISLH_mjs__rspack_import_4/* .log.debug */.R.debug("[PEG Parser] Parsed rules:", ast.rules.length);
    populateDb(ast);
    _chunk_X3CZISLH_mjs__rspack_import_4/* .log.debug */.R.debug("[PEG Parser] Parse complete");
  }, "parse"),
  parser: {
    yy: _chunk_SVP7TREG_mjs__rspack_import_0.db
  }
};

// src/diagrams/railroad/pegDiagram.ts
var diagram = {
  parser,
  db: _chunk_SVP7TREG_mjs__rspack_import_0.db,
  renderer: _chunk_SVP7TREG_mjs__rspack_import_0/* .renderer */.U,
  styles: _chunk_SVP7TREG_mjs__rspack_import_0/* .getStyles */.$
};



},

}]);