"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[2763],{

/***/ 86022:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ populateCommonDb)
/* harmony export */ });
/* harmony import */ var _chunk_P27NXTFD_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45567);


// src/diagrams/common/populateCommonDb.ts
function populateCommonDb(ast, db) {
  if (ast.accDescr) {
    db.setAccDescription?.(ast.accDescr);
  }
  if (ast.accTitle) {
    db.setAccTitle?.(ast.accTitle);
  }
  if (ast.title) {
    db.setDiagramTitle?.(ast.title);
  }
}
(0,_chunk_P27NXTFD_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(populateCommonDb, "populateCommonDb");




/***/ }),

/***/ 62763:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   diagram: () => (/* binding */ diagram)
/* harmony export */ });
/* harmony import */ var _chunk_BAOP5US2_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86022);
/* harmony import */ var _chunk_MCANT3UC_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85039);
/* harmony import */ var _chunk_HK56VNYQ_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61021);
/* harmony import */ var _chunk_P27NXTFD_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45567);
/* harmony import */ var _mermaid_js_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78731);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20007);





// src/diagrams/pie/pieParser.ts


// src/diagrams/pie/pieDb.ts
var DEFAULT_PIE_CONFIG = _chunk_P27NXTFD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .defaultConfig_default */ .UI.pie;
var DEFAULT_PIE_DB = {
  sections: /* @__PURE__ */ new Map(),
  showData: false,
  config: DEFAULT_PIE_CONFIG
};
var sections = DEFAULT_PIE_DB.sections;
var showData = DEFAULT_PIE_DB.showData;
var config = structuredClone(DEFAULT_PIE_CONFIG);
var getConfig2 = /* @__PURE__ */ (0,_chunk_P27NXTFD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .__name */ .K2)(() => structuredClone(config), "getConfig");
var clear2 = /* @__PURE__ */ (0,_chunk_P27NXTFD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .__name */ .K2)(() => {
  sections = /* @__PURE__ */ new Map();
  showData = DEFAULT_PIE_DB.showData;
  (0,_chunk_P27NXTFD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .clear */ .IU)();
}, "clear");
var addSection = /* @__PURE__ */ (0,_chunk_P27NXTFD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .__name */ .K2)(({ label, value }) => {
  if (!sections.has(label)) {
    sections.set(label, value);
    _chunk_P27NXTFD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .log */ .Rm.debug(`added new section: ${label}, with value: ${value}`);
  }
}, "addSection");
var getSections = /* @__PURE__ */ (0,_chunk_P27NXTFD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .__name */ .K2)(() => sections, "getSections");
var setShowData = /* @__PURE__ */ (0,_chunk_P27NXTFD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .__name */ .K2)((toggle) => {
  showData = toggle;
}, "setShowData");
var getShowData = /* @__PURE__ */ (0,_chunk_P27NXTFD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .__name */ .K2)(() => showData, "getShowData");
var db = {
  getConfig: getConfig2,
  clear: clear2,
  setDiagramTitle: _chunk_P27NXTFD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .setDiagramTitle */ .ke,
  getDiagramTitle: _chunk_P27NXTFD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .getDiagramTitle */ .ab,
  setAccTitle: _chunk_P27NXTFD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .setAccTitle */ .SV,
  getAccTitle: _chunk_P27NXTFD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .getAccTitle */ .iN,
  setAccDescription: _chunk_P27NXTFD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .setAccDescription */ .EI,
  getAccDescription: _chunk_P27NXTFD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .getAccDescription */ .m7,
  addSection,
  getSections,
  setShowData,
  getShowData
};

// src/diagrams/pie/pieParser.ts
var populateDb = /* @__PURE__ */ (0,_chunk_P27NXTFD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .__name */ .K2)((ast, db2) => {
  (0,_chunk_BAOP5US2_mjs__WEBPACK_IMPORTED_MODULE_0__/* .populateCommonDb */ .S)(ast, db2);
  db2.setShowData(ast.showData);
  ast.sections.map(db2.addSection);
}, "populateDb");
var parser = {
  parse: /* @__PURE__ */ (0,_chunk_P27NXTFD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .__name */ .K2)(async (input) => {
    const ast = await (0,_mermaid_js_parser__WEBPACK_IMPORTED_MODULE_4__/* .parse */ .qg)("pie", input);
    _chunk_P27NXTFD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .log */ .Rm.debug(ast);
    populateDb(ast, db);
  }, "parse")
};

// src/diagrams/pie/pieStyles.ts
var getStyles = /* @__PURE__ */ (0,_chunk_P27NXTFD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .__name */ .K2)((options) => `
  .pieCircle{
    stroke: ${options.pieStrokeColor};
    stroke-width : ${options.pieStrokeWidth};
    opacity : ${options.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${options.pieOuterStrokeColor};
    stroke-width: ${options.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${options.pieTitleTextSize};
    fill: ${options.pieTitleTextColor};
    font-family: ${options.fontFamily};
  }
  .slice {
    font-family: ${options.fontFamily};
    fill: ${options.pieSectionTextColor};
    font-size:${options.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${options.pieLegendTextColor};
    font-family: ${options.fontFamily};
    font-size: ${options.pieLegendTextSize};
  }
`, "getStyles");
var pieStyles_default = getStyles;

// src/diagrams/pie/pieRenderer.ts

var createPieArcs = /* @__PURE__ */ (0,_chunk_P27NXTFD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .__name */ .K2)((sections2) => {
  const pieData = [...sections2.entries()].map((element) => {
    return {
      label: element[0],
      value: element[1]
    };
  }).sort((a, b) => {
    return b.value - a.value;
  });
  const pie = (0,d3__WEBPACK_IMPORTED_MODULE_5__/* .pie */ .rLf)().value(
    (d3Section) => d3Section.value
  );
  return pie(pieData);
}, "createPieArcs");
var draw = /* @__PURE__ */ (0,_chunk_P27NXTFD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .__name */ .K2)((text, id, _version, diagObj) => {
  _chunk_P27NXTFD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .log */ .Rm.debug("rendering pie chart\n" + text);
  const db2 = diagObj.db;
  const globalConfig = (0,_chunk_P27NXTFD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .getConfig2 */ .D7)();
  const pieConfig = (0,_chunk_MCANT3UC_mjs__WEBPACK_IMPORTED_MODULE_1__/* .cleanAndMerge */ .$t)(db2.getConfig(), globalConfig.pie);
  const MARGIN = 40;
  const LEGEND_RECT_SIZE = 18;
  const LEGEND_SPACING = 4;
  const height = 450;
  const pieWidth = height;
  const svg = (0,_chunk_HK56VNYQ_mjs__WEBPACK_IMPORTED_MODULE_2__/* .selectSvgElement */ .D)(id);
  const group = svg.append("g");
  group.attr("transform", "translate(" + pieWidth / 2 + "," + height / 2 + ")");
  const { themeVariables } = globalConfig;
  let [outerStrokeWidth] = (0,_chunk_MCANT3UC_mjs__WEBPACK_IMPORTED_MODULE_1__/* .parseFontSize */ .I5)(themeVariables.pieOuterStrokeWidth);
  outerStrokeWidth ??= 2;
  const textPosition = pieConfig.textPosition;
  const radius = Math.min(pieWidth, height) / 2 - MARGIN;
  const arcGenerator = (0,d3__WEBPACK_IMPORTED_MODULE_5__/* .arc */ .JLW)().innerRadius(0).outerRadius(radius);
  const labelArcGenerator = (0,d3__WEBPACK_IMPORTED_MODULE_5__/* .arc */ .JLW)().innerRadius(radius * textPosition).outerRadius(radius * textPosition);
  group.append("circle").attr("cx", 0).attr("cy", 0).attr("r", radius + outerStrokeWidth / 2).attr("class", "pieOuterCircle");
  const sections2 = db2.getSections();
  const arcs = createPieArcs(sections2);
  const myGeneratedColors = [
    themeVariables.pie1,
    themeVariables.pie2,
    themeVariables.pie3,
    themeVariables.pie4,
    themeVariables.pie5,
    themeVariables.pie6,
    themeVariables.pie7,
    themeVariables.pie8,
    themeVariables.pie9,
    themeVariables.pie10,
    themeVariables.pie11,
    themeVariables.pie12
  ];
  const color = (0,d3__WEBPACK_IMPORTED_MODULE_5__/* .scaleOrdinal */ .UMr)(myGeneratedColors);
  group.selectAll("mySlices").data(arcs).enter().append("path").attr("d", arcGenerator).attr("fill", (datum) => {
    return color(datum.data.label);
  }).attr("class", "pieCircle");
  let sum = 0;
  sections2.forEach((section) => {
    sum += section;
  });
  group.selectAll("mySlices").data(arcs).enter().append("text").text((datum) => {
    return (datum.data.value / sum * 100).toFixed(0) + "%";
  }).attr("transform", (datum) => {
    return "translate(" + labelArcGenerator.centroid(datum) + ")";
  }).style("text-anchor", "middle").attr("class", "slice");
  group.append("text").text(db2.getDiagramTitle()).attr("x", 0).attr("y", -(height - 50) / 2).attr("class", "pieTitleText");
  const legend = group.selectAll(".legend").data(color.domain()).enter().append("g").attr("class", "legend").attr("transform", (_datum, index) => {
    const height2 = LEGEND_RECT_SIZE + LEGEND_SPACING;
    const offset = height2 * color.domain().length / 2;
    const horizontal = 12 * LEGEND_RECT_SIZE;
    const vertical = index * height2 - offset;
    return "translate(" + horizontal + "," + vertical + ")";
  });
  legend.append("rect").attr("width", LEGEND_RECT_SIZE).attr("height", LEGEND_RECT_SIZE).style("fill", color).style("stroke", color);
  legend.data(arcs).append("text").attr("x", LEGEND_RECT_SIZE + LEGEND_SPACING).attr("y", LEGEND_RECT_SIZE - LEGEND_SPACING).text((datum) => {
    const { label, value } = datum.data;
    if (db2.getShowData()) {
      return `${label} [${value}]`;
    }
    return label;
  });
  const longestTextWidth = Math.max(
    ...legend.selectAll("text").nodes().map((node) => node?.getBoundingClientRect().width ?? 0)
  );
  const totalWidth = pieWidth + MARGIN + LEGEND_RECT_SIZE + LEGEND_SPACING + longestTextWidth;
  svg.attr("viewBox", `0 0 ${totalWidth} ${height}`);
  (0,_chunk_P27NXTFD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .configureSvgSize */ .a$)(svg, height, totalWidth, pieConfig.useMaxWidth);
}, "draw");
var renderer = { draw };

// src/diagrams/pie/pieDiagram.ts
var diagram = {
  parser,
  db,
  renderer,
  styles: pieStyles_default
};



/***/ })

}]);