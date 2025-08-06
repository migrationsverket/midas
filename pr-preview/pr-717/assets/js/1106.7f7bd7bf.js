"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[1106],{

/***/ 14809:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ populateCommonDb)
/* harmony export */ });
/* harmony import */ var _chunk_BMRFU3JQ_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65323);


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
(0,_chunk_BMRFU3JQ_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(populateCommonDb, "populateCommonDb");




/***/ }),

/***/ 71106:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   diagram: () => (/* binding */ diagram)
/* harmony export */ });
/* harmony import */ var _chunk_44GW5IO5_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14809);
/* harmony import */ var _chunk_F7MYA6JM_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82120);
/* harmony import */ var _chunk_D33BOVEP_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34845);
/* harmony import */ var _chunk_BMRFU3JQ_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65323);
/* harmony import */ var _mermaid_js_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78731);





// src/diagrams/packet/db.ts
var defaultPacketData = {
  packet: []
};
var data = structuredClone(defaultPacketData);
var DEFAULT_PACKET_CONFIG = _chunk_BMRFU3JQ_mjs__WEBPACK_IMPORTED_MODULE_3__/* .defaultConfig_default */ .UI.packet;
var getConfig2 = /* @__PURE__ */ (0,_chunk_BMRFU3JQ_mjs__WEBPACK_IMPORTED_MODULE_3__/* .__name */ .K2)(() => {
  const config = (0,_chunk_F7MYA6JM_mjs__WEBPACK_IMPORTED_MODULE_1__/* .cleanAndMerge */ .$t)({
    ...DEFAULT_PACKET_CONFIG,
    ...(0,_chunk_BMRFU3JQ_mjs__WEBPACK_IMPORTED_MODULE_3__/* .getConfig */ .zj)().packet
  });
  if (config.showBits) {
    config.paddingY += 10;
  }
  return config;
}, "getConfig");
var getPacket = /* @__PURE__ */ (0,_chunk_BMRFU3JQ_mjs__WEBPACK_IMPORTED_MODULE_3__/* .__name */ .K2)(() => data.packet, "getPacket");
var pushWord = /* @__PURE__ */ (0,_chunk_BMRFU3JQ_mjs__WEBPACK_IMPORTED_MODULE_3__/* .__name */ .K2)((word) => {
  if (word.length > 0) {
    data.packet.push(word);
  }
}, "pushWord");
var clear2 = /* @__PURE__ */ (0,_chunk_BMRFU3JQ_mjs__WEBPACK_IMPORTED_MODULE_3__/* .__name */ .K2)(() => {
  (0,_chunk_BMRFU3JQ_mjs__WEBPACK_IMPORTED_MODULE_3__/* .clear */ .IU)();
  data = structuredClone(defaultPacketData);
}, "clear");
var db = {
  pushWord,
  getPacket,
  getConfig: getConfig2,
  clear: clear2,
  setAccTitle: _chunk_BMRFU3JQ_mjs__WEBPACK_IMPORTED_MODULE_3__/* .setAccTitle */ .SV,
  getAccTitle: _chunk_BMRFU3JQ_mjs__WEBPACK_IMPORTED_MODULE_3__/* .getAccTitle */ .iN,
  setDiagramTitle: _chunk_BMRFU3JQ_mjs__WEBPACK_IMPORTED_MODULE_3__/* .setDiagramTitle */ .ke,
  getDiagramTitle: _chunk_BMRFU3JQ_mjs__WEBPACK_IMPORTED_MODULE_3__/* .getDiagramTitle */ .ab,
  getAccDescription: _chunk_BMRFU3JQ_mjs__WEBPACK_IMPORTED_MODULE_3__/* .getAccDescription */ .m7,
  setAccDescription: _chunk_BMRFU3JQ_mjs__WEBPACK_IMPORTED_MODULE_3__/* .setAccDescription */ .EI
};

// src/diagrams/packet/parser.ts

var maxPacketSize = 1e4;
var populate = /* @__PURE__ */ (0,_chunk_BMRFU3JQ_mjs__WEBPACK_IMPORTED_MODULE_3__/* .__name */ .K2)((ast) => {
  (0,_chunk_44GW5IO5_mjs__WEBPACK_IMPORTED_MODULE_0__/* .populateCommonDb */ .S)(ast, db);
  let lastBit = -1;
  let word = [];
  let row = 1;
  const { bitsPerRow } = db.getConfig();
  for (let { start, end, bits, label } of ast.blocks) {
    if (start !== void 0 && end !== void 0 && end < start) {
      throw new Error(`Packet block ${start} - ${end} is invalid. End must be greater than start.`);
    }
    start ??= lastBit + 1;
    if (start !== lastBit + 1) {
      throw new Error(
        `Packet block ${start} - ${end ?? start} is not contiguous. It should start from ${lastBit + 1}.`
      );
    }
    if (bits === 0) {
      throw new Error(`Packet block ${start} is invalid. Cannot have a zero bit field.`);
    }
    end ??= start + (bits ?? 1) - 1;
    bits ??= end - start + 1;
    lastBit = end;
    _chunk_BMRFU3JQ_mjs__WEBPACK_IMPORTED_MODULE_3__/* .log */ .Rm.debug(`Packet block ${start} - ${lastBit} with label ${label}`);
    while (word.length <= bitsPerRow + 1 && db.getPacket().length < maxPacketSize) {
      const [block, nextBlock] = getNextFittingBlock({ start, end, bits, label }, row, bitsPerRow);
      word.push(block);
      if (block.end + 1 === row * bitsPerRow) {
        db.pushWord(word);
        word = [];
        row++;
      }
      if (!nextBlock) {
        break;
      }
      ({ start, end, bits, label } = nextBlock);
    }
  }
  db.pushWord(word);
}, "populate");
var getNextFittingBlock = /* @__PURE__ */ (0,_chunk_BMRFU3JQ_mjs__WEBPACK_IMPORTED_MODULE_3__/* .__name */ .K2)((block, row, bitsPerRow) => {
  if (block.start === void 0) {
    throw new Error("start should have been set during first phase");
  }
  if (block.end === void 0) {
    throw new Error("end should have been set during first phase");
  }
  if (block.start > block.end) {
    throw new Error(`Block start ${block.start} is greater than block end ${block.end}.`);
  }
  if (block.end + 1 <= row * bitsPerRow) {
    return [block, void 0];
  }
  const rowEnd = row * bitsPerRow - 1;
  const rowStart = row * bitsPerRow;
  return [
    {
      start: block.start,
      end: rowEnd,
      label: block.label,
      bits: rowEnd - block.start
    },
    {
      start: rowStart,
      end: block.end,
      label: block.label,
      bits: block.end - rowStart
    }
  ];
}, "getNextFittingBlock");
var parser = {
  parse: /* @__PURE__ */ (0,_chunk_BMRFU3JQ_mjs__WEBPACK_IMPORTED_MODULE_3__/* .__name */ .K2)(async (input) => {
    const ast = await (0,_mermaid_js_parser__WEBPACK_IMPORTED_MODULE_4__/* .parse */ .qg)("packet", input);
    _chunk_BMRFU3JQ_mjs__WEBPACK_IMPORTED_MODULE_3__/* .log */ .Rm.debug(ast);
    populate(ast);
  }, "parse")
};

// src/diagrams/packet/renderer.ts
var draw = /* @__PURE__ */ (0,_chunk_BMRFU3JQ_mjs__WEBPACK_IMPORTED_MODULE_3__/* .__name */ .K2)((_text, id, _version, diagram2) => {
  const db2 = diagram2.db;
  const config = db2.getConfig();
  const { rowHeight, paddingY, bitWidth, bitsPerRow } = config;
  const words = db2.getPacket();
  const title = db2.getDiagramTitle();
  const totalRowHeight = rowHeight + paddingY;
  const svgHeight = totalRowHeight * (words.length + 1) - (title ? 0 : rowHeight);
  const svgWidth = bitWidth * bitsPerRow + 2;
  const svg = (0,_chunk_D33BOVEP_mjs__WEBPACK_IMPORTED_MODULE_2__/* .selectSvgElement */ .D)(id);
  svg.attr("viewbox", `0 0 ${svgWidth} ${svgHeight}`);
  (0,_chunk_BMRFU3JQ_mjs__WEBPACK_IMPORTED_MODULE_3__/* .configureSvgSize */ .a$)(svg, svgHeight, svgWidth, config.useMaxWidth);
  for (const [word, packet] of words.entries()) {
    drawWord(svg, packet, word, config);
  }
  svg.append("text").text(title).attr("x", svgWidth / 2).attr("y", svgHeight - totalRowHeight / 2).attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("class", "packetTitle");
}, "draw");
var drawWord = /* @__PURE__ */ (0,_chunk_BMRFU3JQ_mjs__WEBPACK_IMPORTED_MODULE_3__/* .__name */ .K2)((svg, word, rowNumber, { rowHeight, paddingX, paddingY, bitWidth, bitsPerRow, showBits }) => {
  const group = svg.append("g");
  const wordY = rowNumber * (rowHeight + paddingY) + paddingY;
  for (const block of word) {
    const blockX = block.start % bitsPerRow * bitWidth + 1;
    const width = (block.end - block.start + 1) * bitWidth - paddingX;
    group.append("rect").attr("x", blockX).attr("y", wordY).attr("width", width).attr("height", rowHeight).attr("class", "packetBlock");
    group.append("text").attr("x", blockX + width / 2).attr("y", wordY + rowHeight / 2).attr("class", "packetLabel").attr("dominant-baseline", "middle").attr("text-anchor", "middle").text(block.label);
    if (!showBits) {
      continue;
    }
    const isSingleBlock = block.end === block.start;
    const bitNumberY = wordY - 2;
    group.append("text").attr("x", blockX + (isSingleBlock ? width / 2 : 0)).attr("y", bitNumberY).attr("class", "packetByte start").attr("dominant-baseline", "auto").attr("text-anchor", isSingleBlock ? "middle" : "start").text(block.start);
    if (!isSingleBlock) {
      group.append("text").attr("x", blockX + width).attr("y", bitNumberY).attr("class", "packetByte end").attr("dominant-baseline", "auto").attr("text-anchor", "end").text(block.end);
    }
  }
}, "drawWord");
var renderer = { draw };

// src/diagrams/packet/styles.ts
var defaultPacketStyleOptions = {
  byteFontSize: "10px",
  startByteColor: "black",
  endByteColor: "black",
  labelColor: "black",
  labelFontSize: "12px",
  titleColor: "black",
  titleFontSize: "14px",
  blockStrokeColor: "black",
  blockStrokeWidth: "1",
  blockFillColor: "#efefef"
};
var styles = /* @__PURE__ */ (0,_chunk_BMRFU3JQ_mjs__WEBPACK_IMPORTED_MODULE_3__/* .__name */ .K2)(({ packet } = {}) => {
  const options = (0,_chunk_F7MYA6JM_mjs__WEBPACK_IMPORTED_MODULE_1__/* .cleanAndMerge */ .$t)(defaultPacketStyleOptions, packet);
  return `
	.packetByte {
		font-size: ${options.byteFontSize};
	}
	.packetByte.start {
		fill: ${options.startByteColor};
	}
	.packetByte.end {
		fill: ${options.endByteColor};
	}
	.packetLabel {
		fill: ${options.labelColor};
		font-size: ${options.labelFontSize};
	}
	.packetTitle {
		fill: ${options.titleColor};
		font-size: ${options.titleFontSize};
	}
	.packetBlock {
		stroke: ${options.blockStrokeColor};
		stroke-width: ${options.blockStrokeWidth};
		fill: ${options.blockFillColor};
	}
	`;
}, "styles");

// src/diagrams/packet/diagram.ts
var diagram = {
  parser,
  db,
  renderer,
  styles
};



/***/ })

}]);