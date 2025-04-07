(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[2076],{

/***/ 99320:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

(function (global, factory) {
     true ? factory(exports, __webpack_require__(13534), __webpack_require__(44318), __webpack_require__(92802)) :
    0;
})(this, (function (exports, setArray, sourcemapCodec, traceMapping) { 'use strict';

    const COLUMN = 0;
    const SOURCES_INDEX = 1;
    const SOURCE_LINE = 2;
    const SOURCE_COLUMN = 3;
    const NAMES_INDEX = 4;

    const NO_NAME = -1;
    /**
     * Provides the state to generate a sourcemap.
     */
    class GenMapping {
        constructor({ file, sourceRoot } = {}) {
            this._names = new setArray.SetArray();
            this._sources = new setArray.SetArray();
            this._sourcesContent = [];
            this._mappings = [];
            this.file = file;
            this.sourceRoot = sourceRoot;
            this._ignoreList = new setArray.SetArray();
        }
    }
    /**
     * Typescript doesn't allow friend access to private fields, so this just casts the map into a type
     * with public access modifiers.
     */
    function cast(map) {
        return map;
    }
    function addSegment(map, genLine, genColumn, source, sourceLine, sourceColumn, name, content) {
        return addSegmentInternal(false, map, genLine, genColumn, source, sourceLine, sourceColumn, name, content);
    }
    function addMapping(map, mapping) {
        return addMappingInternal(false, map, mapping);
    }
    /**
     * Same as `addSegment`, but will only add the segment if it generates useful information in the
     * resulting map. This only works correctly if segments are added **in order**, meaning you should
     * not add a segment with a lower generated line/column than one that came before.
     */
    const maybeAddSegment = (map, genLine, genColumn, source, sourceLine, sourceColumn, name, content) => {
        return addSegmentInternal(true, map, genLine, genColumn, source, sourceLine, sourceColumn, name, content);
    };
    /**
     * Same as `addMapping`, but will only add the mapping if it generates useful information in the
     * resulting map. This only works correctly if mappings are added **in order**, meaning you should
     * not add a mapping with a lower generated line/column than one that came before.
     */
    const maybeAddMapping = (map, mapping) => {
        return addMappingInternal(true, map, mapping);
    };
    /**
     * Adds/removes the content of the source file to the source map.
     */
    function setSourceContent(map, source, content) {
        const { _sources: sources, _sourcesContent: sourcesContent } = cast(map);
        const index = setArray.put(sources, source);
        sourcesContent[index] = content;
    }
    function setIgnore(map, source, ignore = true) {
        const { _sources: sources, _sourcesContent: sourcesContent, _ignoreList: ignoreList } = cast(map);
        const index = setArray.put(sources, source);
        if (index === sourcesContent.length)
            sourcesContent[index] = null;
        if (ignore)
            setArray.put(ignoreList, index);
        else
            setArray.remove(ignoreList, index);
    }
    /**
     * Returns a sourcemap object (with decoded mappings) suitable for passing to a library that expects
     * a sourcemap, or to JSON.stringify.
     */
    function toDecodedMap(map) {
        const { _mappings: mappings, _sources: sources, _sourcesContent: sourcesContent, _names: names, _ignoreList: ignoreList, } = cast(map);
        removeEmptyFinalLines(mappings);
        return {
            version: 3,
            file: map.file || undefined,
            names: names.array,
            sourceRoot: map.sourceRoot || undefined,
            sources: sources.array,
            sourcesContent,
            mappings,
            ignoreList: ignoreList.array,
        };
    }
    /**
     * Returns a sourcemap object (with encoded mappings) suitable for passing to a library that expects
     * a sourcemap, or to JSON.stringify.
     */
    function toEncodedMap(map) {
        const decoded = toDecodedMap(map);
        return Object.assign(Object.assign({}, decoded), { mappings: sourcemapCodec.encode(decoded.mappings) });
    }
    /**
     * Constructs a new GenMapping, using the already present mappings of the input.
     */
    function fromMap(input) {
        const map = new traceMapping.TraceMap(input);
        const gen = new GenMapping({ file: map.file, sourceRoot: map.sourceRoot });
        putAll(cast(gen)._names, map.names);
        putAll(cast(gen)._sources, map.sources);
        cast(gen)._sourcesContent = map.sourcesContent || map.sources.map(() => null);
        cast(gen)._mappings = traceMapping.decodedMappings(map);
        if (map.ignoreList)
            putAll(cast(gen)._ignoreList, map.ignoreList);
        return gen;
    }
    /**
     * Returns an array of high-level mapping objects for every recorded segment, which could then be
     * passed to the `source-map` library.
     */
    function allMappings(map) {
        const out = [];
        const { _mappings: mappings, _sources: sources, _names: names } = cast(map);
        for (let i = 0; i < mappings.length; i++) {
            const line = mappings[i];
            for (let j = 0; j < line.length; j++) {
                const seg = line[j];
                const generated = { line: i + 1, column: seg[COLUMN] };
                let source = undefined;
                let original = undefined;
                let name = undefined;
                if (seg.length !== 1) {
                    source = sources.array[seg[SOURCES_INDEX]];
                    original = { line: seg[SOURCE_LINE] + 1, column: seg[SOURCE_COLUMN] };
                    if (seg.length === 5)
                        name = names.array[seg[NAMES_INDEX]];
                }
                out.push({ generated, source, original, name });
            }
        }
        return out;
    }
    // This split declaration is only so that terser can elminiate the static initialization block.
    function addSegmentInternal(skipable, map, genLine, genColumn, source, sourceLine, sourceColumn, name, content) {
        const { _mappings: mappings, _sources: sources, _sourcesContent: sourcesContent, _names: names, } = cast(map);
        const line = getLine(mappings, genLine);
        const index = getColumnIndex(line, genColumn);
        if (!source) {
            if (skipable && skipSourceless(line, index))
                return;
            return insert(line, index, [genColumn]);
        }
        const sourcesIndex = setArray.put(sources, source);
        const namesIndex = name ? setArray.put(names, name) : NO_NAME;
        if (sourcesIndex === sourcesContent.length)
            sourcesContent[sourcesIndex] = content !== null && content !== void 0 ? content : null;
        if (skipable && skipSource(line, index, sourcesIndex, sourceLine, sourceColumn, namesIndex)) {
            return;
        }
        return insert(line, index, name
            ? [genColumn, sourcesIndex, sourceLine, sourceColumn, namesIndex]
            : [genColumn, sourcesIndex, sourceLine, sourceColumn]);
    }
    function getLine(mappings, index) {
        for (let i = mappings.length; i <= index; i++) {
            mappings[i] = [];
        }
        return mappings[index];
    }
    function getColumnIndex(line, genColumn) {
        let index = line.length;
        for (let i = index - 1; i >= 0; index = i--) {
            const current = line[i];
            if (genColumn >= current[COLUMN])
                break;
        }
        return index;
    }
    function insert(array, index, value) {
        for (let i = array.length; i > index; i--) {
            array[i] = array[i - 1];
        }
        array[index] = value;
    }
    function removeEmptyFinalLines(mappings) {
        const { length } = mappings;
        let len = length;
        for (let i = len - 1; i >= 0; len = i, i--) {
            if (mappings[i].length > 0)
                break;
        }
        if (len < length)
            mappings.length = len;
    }
    function putAll(setarr, array) {
        for (let i = 0; i < array.length; i++)
            setArray.put(setarr, array[i]);
    }
    function skipSourceless(line, index) {
        // The start of a line is already sourceless, so adding a sourceless segment to the beginning
        // doesn't generate any useful information.
        if (index === 0)
            return true;
        const prev = line[index - 1];
        // If the previous segment is also sourceless, then adding another sourceless segment doesn't
        // genrate any new information. Else, this segment will end the source/named segment and point to
        // a sourceless position, which is useful.
        return prev.length === 1;
    }
    function skipSource(line, index, sourcesIndex, sourceLine, sourceColumn, namesIndex) {
        // A source/named segment at the start of a line gives position at that genColumn
        if (index === 0)
            return false;
        const prev = line[index - 1];
        // If the previous segment is sourceless, then we're transitioning to a source.
        if (prev.length === 1)
            return false;
        // If the previous segment maps to the exact same source position, then this segment doesn't
        // provide any new position information.
        return (sourcesIndex === prev[SOURCES_INDEX] &&
            sourceLine === prev[SOURCE_LINE] &&
            sourceColumn === prev[SOURCE_COLUMN] &&
            namesIndex === (prev.length === 5 ? prev[NAMES_INDEX] : NO_NAME));
    }
    function addMappingInternal(skipable, map, mapping) {
        const { generated, source, original, name, content } = mapping;
        if (!source) {
            return addSegmentInternal(skipable, map, generated.line - 1, generated.column, null, null, null, null, null);
        }
        return addSegmentInternal(skipable, map, generated.line - 1, generated.column, source, original.line - 1, original.column, name, content);
    }

    exports.GenMapping = GenMapping;
    exports.addMapping = addMapping;
    exports.addSegment = addSegment;
    exports.allMappings = allMappings;
    exports.fromMap = fromMap;
    exports.maybeAddMapping = maybeAddMapping;
    exports.maybeAddSegment = maybeAddSegment;
    exports.setIgnore = setIgnore;
    exports.setSourceContent = setSourceContent;
    exports.toDecodedMap = toDecodedMap;
    exports.toEncodedMap = toEncodedMap;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=gen-mapping.umd.js.map


/***/ }),

/***/ 4424:
/***/ (function(module) {

(function (global, factory) {
     true ? module.exports = factory() :
    0;
})(this, (function () { 'use strict';

    // Matches the scheme of a URL, eg "http://"
    const schemeRegex = /^[\w+.-]+:\/\//;
    /**
     * Matches the parts of a URL:
     * 1. Scheme, including ":", guaranteed.
     * 2. User/password, including "@", optional.
     * 3. Host, guaranteed.
     * 4. Port, including ":", optional.
     * 5. Path, including "/", optional.
     * 6. Query, including "?", optional.
     * 7. Hash, including "#", optional.
     */
    const urlRegex = /^([\w+.-]+:)\/\/([^@/#?]*@)?([^:/#?]*)(:\d+)?(\/[^#?]*)?(\?[^#]*)?(#.*)?/;
    /**
     * File URLs are weird. They dont' need the regular `//` in the scheme, they may or may not start
     * with a leading `/`, they can have a domain (but only if they don't start with a Windows drive).
     *
     * 1. Host, optional.
     * 2. Path, which may include "/", guaranteed.
     * 3. Query, including "?", optional.
     * 4. Hash, including "#", optional.
     */
    const fileRegex = /^file:(?:\/\/((?![a-z]:)[^/#?]*)?)?(\/?[^#?]*)(\?[^#]*)?(#.*)?/i;
    function isAbsoluteUrl(input) {
        return schemeRegex.test(input);
    }
    function isSchemeRelativeUrl(input) {
        return input.startsWith('//');
    }
    function isAbsolutePath(input) {
        return input.startsWith('/');
    }
    function isFileUrl(input) {
        return input.startsWith('file:');
    }
    function isRelative(input) {
        return /^[.?#]/.test(input);
    }
    function parseAbsoluteUrl(input) {
        const match = urlRegex.exec(input);
        return makeUrl(match[1], match[2] || '', match[3], match[4] || '', match[5] || '/', match[6] || '', match[7] || '');
    }
    function parseFileUrl(input) {
        const match = fileRegex.exec(input);
        const path = match[2];
        return makeUrl('file:', '', match[1] || '', '', isAbsolutePath(path) ? path : '/' + path, match[3] || '', match[4] || '');
    }
    function makeUrl(scheme, user, host, port, path, query, hash) {
        return {
            scheme,
            user,
            host,
            port,
            path,
            query,
            hash,
            type: 7 /* Absolute */,
        };
    }
    function parseUrl(input) {
        if (isSchemeRelativeUrl(input)) {
            const url = parseAbsoluteUrl('http:' + input);
            url.scheme = '';
            url.type = 6 /* SchemeRelative */;
            return url;
        }
        if (isAbsolutePath(input)) {
            const url = parseAbsoluteUrl('http://foo.com' + input);
            url.scheme = '';
            url.host = '';
            url.type = 5 /* AbsolutePath */;
            return url;
        }
        if (isFileUrl(input))
            return parseFileUrl(input);
        if (isAbsoluteUrl(input))
            return parseAbsoluteUrl(input);
        const url = parseAbsoluteUrl('http://foo.com/' + input);
        url.scheme = '';
        url.host = '';
        url.type = input
            ? input.startsWith('?')
                ? 3 /* Query */
                : input.startsWith('#')
                    ? 2 /* Hash */
                    : 4 /* RelativePath */
            : 1 /* Empty */;
        return url;
    }
    function stripPathFilename(path) {
        // If a path ends with a parent directory "..", then it's a relative path with excess parent
        // paths. It's not a file, so we can't strip it.
        if (path.endsWith('/..'))
            return path;
        const index = path.lastIndexOf('/');
        return path.slice(0, index + 1);
    }
    function mergePaths(url, base) {
        normalizePath(base, base.type);
        // If the path is just a "/", then it was an empty path to begin with (remember, we're a relative
        // path).
        if (url.path === '/') {
            url.path = base.path;
        }
        else {
            // Resolution happens relative to the base path's directory, not the file.
            url.path = stripPathFilename(base.path) + url.path;
        }
    }
    /**
     * The path can have empty directories "//", unneeded parents "foo/..", or current directory
     * "foo/.". We need to normalize to a standard representation.
     */
    function normalizePath(url, type) {
        const rel = type <= 4 /* RelativePath */;
        const pieces = url.path.split('/');
        // We need to preserve the first piece always, so that we output a leading slash. The item at
        // pieces[0] is an empty string.
        let pointer = 1;
        // Positive is the number of real directories we've output, used for popping a parent directory.
        // Eg, "foo/bar/.." will have a positive 2, and we can decrement to be left with just "foo".
        let positive = 0;
        // We need to keep a trailing slash if we encounter an empty directory (eg, splitting "foo/" will
        // generate `["foo", ""]` pieces). And, if we pop a parent directory. But once we encounter a
        // real directory, we won't need to append, unless the other conditions happen again.
        let addTrailingSlash = false;
        for (let i = 1; i < pieces.length; i++) {
            const piece = pieces[i];
            // An empty directory, could be a trailing slash, or just a double "//" in the path.
            if (!piece) {
                addTrailingSlash = true;
                continue;
            }
            // If we encounter a real directory, then we don't need to append anymore.
            addTrailingSlash = false;
            // A current directory, which we can always drop.
            if (piece === '.')
                continue;
            // A parent directory, we need to see if there are any real directories we can pop. Else, we
            // have an excess of parents, and we'll need to keep the "..".
            if (piece === '..') {
                if (positive) {
                    addTrailingSlash = true;
                    positive--;
                    pointer--;
                }
                else if (rel) {
                    // If we're in a relativePath, then we need to keep the excess parents. Else, in an absolute
                    // URL, protocol relative URL, or an absolute path, we don't need to keep excess.
                    pieces[pointer++] = piece;
                }
                continue;
            }
            // We've encountered a real directory. Move it to the next insertion pointer, which accounts for
            // any popped or dropped directories.
            pieces[pointer++] = piece;
            positive++;
        }
        let path = '';
        for (let i = 1; i < pointer; i++) {
            path += '/' + pieces[i];
        }
        if (!path || (addTrailingSlash && !path.endsWith('/..'))) {
            path += '/';
        }
        url.path = path;
    }
    /**
     * Attempts to resolve `input` URL/path relative to `base`.
     */
    function resolve(input, base) {
        if (!input && !base)
            return '';
        const url = parseUrl(input);
        let inputType = url.type;
        if (base && inputType !== 7 /* Absolute */) {
            const baseUrl = parseUrl(base);
            const baseType = baseUrl.type;
            switch (inputType) {
                case 1 /* Empty */:
                    url.hash = baseUrl.hash;
                // fall through
                case 2 /* Hash */:
                    url.query = baseUrl.query;
                // fall through
                case 3 /* Query */:
                case 4 /* RelativePath */:
                    mergePaths(url, baseUrl);
                // fall through
                case 5 /* AbsolutePath */:
                    // The host, user, and port are joined, you can't copy one without the others.
                    url.user = baseUrl.user;
                    url.host = baseUrl.host;
                    url.port = baseUrl.port;
                // fall through
                case 6 /* SchemeRelative */:
                    // The input doesn't have a schema at least, so we need to copy at least that over.
                    url.scheme = baseUrl.scheme;
            }
            if (baseType > inputType)
                inputType = baseType;
        }
        normalizePath(url, inputType);
        const queryHash = url.query + url.hash;
        switch (inputType) {
            // This is impossible, because of the empty checks at the start of the function.
            // case UrlType.Empty:
            case 2 /* Hash */:
            case 3 /* Query */:
                return queryHash;
            case 4 /* RelativePath */: {
                // The first char is always a "/", and we need it to be relative.
                const path = url.path.slice(1);
                if (!path)
                    return queryHash || '.';
                if (isRelative(base || input) && !isRelative(path)) {
                    // If base started with a leading ".", or there is no base and input started with a ".",
                    // then we need to ensure that the relative path starts with a ".". We don't know if
                    // relative starts with a "..", though, so check before prepending.
                    return './' + path + queryHash;
                }
                return path + queryHash;
            }
            case 5 /* AbsolutePath */:
                return url.path + queryHash;
            default:
                return url.scheme + '//' + url.user + url.host + url.port + url.path + queryHash;
        }
    }

    return resolve;

}));
//# sourceMappingURL=resolve-uri.umd.js.map


/***/ }),

/***/ 13534:
/***/ (function(__unused_webpack_module, exports) {

(function (global, factory) {
     true ? factory(exports) :
    0;
})(this, (function (exports) { 'use strict';

    /**
     * SetArray acts like a `Set` (allowing only one occurrence of a string `key`), but provides the
     * index of the `key` in the backing array.
     *
     * This is designed to allow synchronizing a second array with the contents of the backing array,
     * like how in a sourcemap `sourcesContent[i]` is the source content associated with `source[i]`,
     * and there are never duplicates.
     */
    class SetArray {
        constructor() {
            this._indexes = { __proto__: null };
            this.array = [];
        }
    }
    /**
     * Typescript doesn't allow friend access to private fields, so this just casts the set into a type
     * with public access modifiers.
     */
    function cast(set) {
        return set;
    }
    /**
     * Gets the index associated with `key` in the backing array, if it is already present.
     */
    function get(setarr, key) {
        return cast(setarr)._indexes[key];
    }
    /**
     * Puts `key` into the backing array, if it is not already present. Returns
     * the index of the `key` in the backing array.
     */
    function put(setarr, key) {
        // The key may or may not be present. If it is present, it's a number.
        const index = get(setarr, key);
        if (index !== undefined)
            return index;
        const { array, _indexes: indexes } = cast(setarr);
        const length = array.push(key);
        return (indexes[key] = length - 1);
    }
    /**
     * Pops the last added item out of the SetArray.
     */
    function pop(setarr) {
        const { array, _indexes: indexes } = cast(setarr);
        if (array.length === 0)
            return;
        const last = array.pop();
        indexes[last] = undefined;
    }
    /**
     * Removes the key, if it exists in the set.
     */
    function remove(setarr, key) {
        const index = get(setarr, key);
        if (index === undefined)
            return;
        const { array, _indexes: indexes } = cast(setarr);
        for (let i = index + 1; i < array.length; i++) {
            const k = array[i];
            array[i - 1] = k;
            indexes[k]--;
        }
        indexes[key] = undefined;
        array.pop();
    }

    exports.SetArray = SetArray;
    exports.get = get;
    exports.pop = pop;
    exports.put = put;
    exports.remove = remove;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=set-array.umd.js.map


/***/ }),

/***/ 44318:
/***/ (function(__unused_webpack_module, exports) {

(function (global, factory) {
     true ? factory(exports) :
    0;
})(this, (function (exports) { 'use strict';

    const comma = ','.charCodeAt(0);
    const semicolon = ';'.charCodeAt(0);
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    const intToChar = new Uint8Array(64); // 64 possible chars.
    const charToInt = new Uint8Array(128); // z is 122 in ASCII
    for (let i = 0; i < chars.length; i++) {
        const c = chars.charCodeAt(i);
        intToChar[i] = c;
        charToInt[c] = i;
    }
    function decodeInteger(reader, relative) {
        let value = 0;
        let shift = 0;
        let integer = 0;
        do {
            const c = reader.next();
            integer = charToInt[c];
            value |= (integer & 31) << shift;
            shift += 5;
        } while (integer & 32);
        const shouldNegate = value & 1;
        value >>>= 1;
        if (shouldNegate) {
            value = -0x80000000 | -value;
        }
        return relative + value;
    }
    function encodeInteger(builder, num, relative) {
        let delta = num - relative;
        delta = delta < 0 ? (-delta << 1) | 1 : delta << 1;
        do {
            let clamped = delta & 0b011111;
            delta >>>= 5;
            if (delta > 0)
                clamped |= 0b100000;
            builder.write(intToChar[clamped]);
        } while (delta > 0);
        return num;
    }
    function hasMoreVlq(reader, max) {
        if (reader.pos >= max)
            return false;
        return reader.peek() !== comma;
    }

    const bufLength = 1024 * 16;
    // Provide a fallback for older environments.
    const td = typeof TextDecoder !== 'undefined'
        ? /* #__PURE__ */ new TextDecoder()
        : typeof Buffer !== 'undefined'
            ? {
                decode(buf) {
                    const out = Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength);
                    return out.toString();
                },
            }
            : {
                decode(buf) {
                    let out = '';
                    for (let i = 0; i < buf.length; i++) {
                        out += String.fromCharCode(buf[i]);
                    }
                    return out;
                },
            };
    class StringWriter {
        constructor() {
            this.pos = 0;
            this.out = '';
            this.buffer = new Uint8Array(bufLength);
        }
        write(v) {
            const { buffer } = this;
            buffer[this.pos++] = v;
            if (this.pos === bufLength) {
                this.out += td.decode(buffer);
                this.pos = 0;
            }
        }
        flush() {
            const { buffer, out, pos } = this;
            return pos > 0 ? out + td.decode(buffer.subarray(0, pos)) : out;
        }
    }
    class StringReader {
        constructor(buffer) {
            this.pos = 0;
            this.buffer = buffer;
        }
        next() {
            return this.buffer.charCodeAt(this.pos++);
        }
        peek() {
            return this.buffer.charCodeAt(this.pos);
        }
        indexOf(char) {
            const { buffer, pos } = this;
            const idx = buffer.indexOf(char, pos);
            return idx === -1 ? buffer.length : idx;
        }
    }

    const EMPTY = [];
    function decodeOriginalScopes(input) {
        const { length } = input;
        const reader = new StringReader(input);
        const scopes = [];
        const stack = [];
        let line = 0;
        for (; reader.pos < length; reader.pos++) {
            line = decodeInteger(reader, line);
            const column = decodeInteger(reader, 0);
            if (!hasMoreVlq(reader, length)) {
                const last = stack.pop();
                last[2] = line;
                last[3] = column;
                continue;
            }
            const kind = decodeInteger(reader, 0);
            const fields = decodeInteger(reader, 0);
            const hasName = fields & 0b0001;
            const scope = (hasName ? [line, column, 0, 0, kind, decodeInteger(reader, 0)] : [line, column, 0, 0, kind]);
            let vars = EMPTY;
            if (hasMoreVlq(reader, length)) {
                vars = [];
                do {
                    const varsIndex = decodeInteger(reader, 0);
                    vars.push(varsIndex);
                } while (hasMoreVlq(reader, length));
            }
            scope.vars = vars;
            scopes.push(scope);
            stack.push(scope);
        }
        return scopes;
    }
    function encodeOriginalScopes(scopes) {
        const writer = new StringWriter();
        for (let i = 0; i < scopes.length;) {
            i = _encodeOriginalScopes(scopes, i, writer, [0]);
        }
        return writer.flush();
    }
    function _encodeOriginalScopes(scopes, index, writer, state) {
        const scope = scopes[index];
        const { 0: startLine, 1: startColumn, 2: endLine, 3: endColumn, 4: kind, vars } = scope;
        if (index > 0)
            writer.write(comma);
        state[0] = encodeInteger(writer, startLine, state[0]);
        encodeInteger(writer, startColumn, 0);
        encodeInteger(writer, kind, 0);
        const fields = scope.length === 6 ? 0b0001 : 0;
        encodeInteger(writer, fields, 0);
        if (scope.length === 6)
            encodeInteger(writer, scope[5], 0);
        for (const v of vars) {
            encodeInteger(writer, v, 0);
        }
        for (index++; index < scopes.length;) {
            const next = scopes[index];
            const { 0: l, 1: c } = next;
            if (l > endLine || (l === endLine && c >= endColumn)) {
                break;
            }
            index = _encodeOriginalScopes(scopes, index, writer, state);
        }
        writer.write(comma);
        state[0] = encodeInteger(writer, endLine, state[0]);
        encodeInteger(writer, endColumn, 0);
        return index;
    }
    function decodeGeneratedRanges(input) {
        const { length } = input;
        const reader = new StringReader(input);
        const ranges = [];
        const stack = [];
        let genLine = 0;
        let definitionSourcesIndex = 0;
        let definitionScopeIndex = 0;
        let callsiteSourcesIndex = 0;
        let callsiteLine = 0;
        let callsiteColumn = 0;
        let bindingLine = 0;
        let bindingColumn = 0;
        do {
            const semi = reader.indexOf(';');
            let genColumn = 0;
            for (; reader.pos < semi; reader.pos++) {
                genColumn = decodeInteger(reader, genColumn);
                if (!hasMoreVlq(reader, semi)) {
                    const last = stack.pop();
                    last[2] = genLine;
                    last[3] = genColumn;
                    continue;
                }
                const fields = decodeInteger(reader, 0);
                const hasDefinition = fields & 0b0001;
                const hasCallsite = fields & 0b0010;
                const hasScope = fields & 0b0100;
                let callsite = null;
                let bindings = EMPTY;
                let range;
                if (hasDefinition) {
                    const defSourcesIndex = decodeInteger(reader, definitionSourcesIndex);
                    definitionScopeIndex = decodeInteger(reader, definitionSourcesIndex === defSourcesIndex ? definitionScopeIndex : 0);
                    definitionSourcesIndex = defSourcesIndex;
                    range = [genLine, genColumn, 0, 0, defSourcesIndex, definitionScopeIndex];
                }
                else {
                    range = [genLine, genColumn, 0, 0];
                }
                range.isScope = !!hasScope;
                if (hasCallsite) {
                    const prevCsi = callsiteSourcesIndex;
                    const prevLine = callsiteLine;
                    callsiteSourcesIndex = decodeInteger(reader, callsiteSourcesIndex);
                    const sameSource = prevCsi === callsiteSourcesIndex;
                    callsiteLine = decodeInteger(reader, sameSource ? callsiteLine : 0);
                    callsiteColumn = decodeInteger(reader, sameSource && prevLine === callsiteLine ? callsiteColumn : 0);
                    callsite = [callsiteSourcesIndex, callsiteLine, callsiteColumn];
                }
                range.callsite = callsite;
                if (hasMoreVlq(reader, semi)) {
                    bindings = [];
                    do {
                        bindingLine = genLine;
                        bindingColumn = genColumn;
                        const expressionsCount = decodeInteger(reader, 0);
                        let expressionRanges;
                        if (expressionsCount < -1) {
                            expressionRanges = [[decodeInteger(reader, 0)]];
                            for (let i = -1; i > expressionsCount; i--) {
                                const prevBl = bindingLine;
                                bindingLine = decodeInteger(reader, bindingLine);
                                bindingColumn = decodeInteger(reader, bindingLine === prevBl ? bindingColumn : 0);
                                const expression = decodeInteger(reader, 0);
                                expressionRanges.push([expression, bindingLine, bindingColumn]);
                            }
                        }
                        else {
                            expressionRanges = [[expressionsCount]];
                        }
                        bindings.push(expressionRanges);
                    } while (hasMoreVlq(reader, semi));
                }
                range.bindings = bindings;
                ranges.push(range);
                stack.push(range);
            }
            genLine++;
            reader.pos = semi + 1;
        } while (reader.pos < length);
        return ranges;
    }
    function encodeGeneratedRanges(ranges) {
        if (ranges.length === 0)
            return '';
        const writer = new StringWriter();
        for (let i = 0; i < ranges.length;) {
            i = _encodeGeneratedRanges(ranges, i, writer, [0, 0, 0, 0, 0, 0, 0]);
        }
        return writer.flush();
    }
    function _encodeGeneratedRanges(ranges, index, writer, state) {
        const range = ranges[index];
        const { 0: startLine, 1: startColumn, 2: endLine, 3: endColumn, isScope, callsite, bindings, } = range;
        if (state[0] < startLine) {
            catchupLine(writer, state[0], startLine);
            state[0] = startLine;
            state[1] = 0;
        }
        else if (index > 0) {
            writer.write(comma);
        }
        state[1] = encodeInteger(writer, range[1], state[1]);
        const fields = (range.length === 6 ? 0b0001 : 0) | (callsite ? 0b0010 : 0) | (isScope ? 0b0100 : 0);
        encodeInteger(writer, fields, 0);
        if (range.length === 6) {
            const { 4: sourcesIndex, 5: scopesIndex } = range;
            if (sourcesIndex !== state[2]) {
                state[3] = 0;
            }
            state[2] = encodeInteger(writer, sourcesIndex, state[2]);
            state[3] = encodeInteger(writer, scopesIndex, state[3]);
        }
        if (callsite) {
            const { 0: sourcesIndex, 1: callLine, 2: callColumn } = range.callsite;
            if (sourcesIndex !== state[4]) {
                state[5] = 0;
                state[6] = 0;
            }
            else if (callLine !== state[5]) {
                state[6] = 0;
            }
            state[4] = encodeInteger(writer, sourcesIndex, state[4]);
            state[5] = encodeInteger(writer, callLine, state[5]);
            state[6] = encodeInteger(writer, callColumn, state[6]);
        }
        if (bindings) {
            for (const binding of bindings) {
                if (binding.length > 1)
                    encodeInteger(writer, -binding.length, 0);
                const expression = binding[0][0];
                encodeInteger(writer, expression, 0);
                let bindingStartLine = startLine;
                let bindingStartColumn = startColumn;
                for (let i = 1; i < binding.length; i++) {
                    const expRange = binding[i];
                    bindingStartLine = encodeInteger(writer, expRange[1], bindingStartLine);
                    bindingStartColumn = encodeInteger(writer, expRange[2], bindingStartColumn);
                    encodeInteger(writer, expRange[0], 0);
                }
            }
        }
        for (index++; index < ranges.length;) {
            const next = ranges[index];
            const { 0: l, 1: c } = next;
            if (l > endLine || (l === endLine && c >= endColumn)) {
                break;
            }
            index = _encodeGeneratedRanges(ranges, index, writer, state);
        }
        if (state[0] < endLine) {
            catchupLine(writer, state[0], endLine);
            state[0] = endLine;
            state[1] = 0;
        }
        else {
            writer.write(comma);
        }
        state[1] = encodeInteger(writer, endColumn, state[1]);
        return index;
    }
    function catchupLine(writer, lastLine, line) {
        do {
            writer.write(semicolon);
        } while (++lastLine < line);
    }

    function decode(mappings) {
        const { length } = mappings;
        const reader = new StringReader(mappings);
        const decoded = [];
        let genColumn = 0;
        let sourcesIndex = 0;
        let sourceLine = 0;
        let sourceColumn = 0;
        let namesIndex = 0;
        do {
            const semi = reader.indexOf(';');
            const line = [];
            let sorted = true;
            let lastCol = 0;
            genColumn = 0;
            while (reader.pos < semi) {
                let seg;
                genColumn = decodeInteger(reader, genColumn);
                if (genColumn < lastCol)
                    sorted = false;
                lastCol = genColumn;
                if (hasMoreVlq(reader, semi)) {
                    sourcesIndex = decodeInteger(reader, sourcesIndex);
                    sourceLine = decodeInteger(reader, sourceLine);
                    sourceColumn = decodeInteger(reader, sourceColumn);
                    if (hasMoreVlq(reader, semi)) {
                        namesIndex = decodeInteger(reader, namesIndex);
                        seg = [genColumn, sourcesIndex, sourceLine, sourceColumn, namesIndex];
                    }
                    else {
                        seg = [genColumn, sourcesIndex, sourceLine, sourceColumn];
                    }
                }
                else {
                    seg = [genColumn];
                }
                line.push(seg);
                reader.pos++;
            }
            if (!sorted)
                sort(line);
            decoded.push(line);
            reader.pos = semi + 1;
        } while (reader.pos <= length);
        return decoded;
    }
    function sort(line) {
        line.sort(sortComparator);
    }
    function sortComparator(a, b) {
        return a[0] - b[0];
    }
    function encode(decoded) {
        const writer = new StringWriter();
        let sourcesIndex = 0;
        let sourceLine = 0;
        let sourceColumn = 0;
        let namesIndex = 0;
        for (let i = 0; i < decoded.length; i++) {
            const line = decoded[i];
            if (i > 0)
                writer.write(semicolon);
            if (line.length === 0)
                continue;
            let genColumn = 0;
            for (let j = 0; j < line.length; j++) {
                const segment = line[j];
                if (j > 0)
                    writer.write(comma);
                genColumn = encodeInteger(writer, segment[0], genColumn);
                if (segment.length === 1)
                    continue;
                sourcesIndex = encodeInteger(writer, segment[1], sourcesIndex);
                sourceLine = encodeInteger(writer, segment[2], sourceLine);
                sourceColumn = encodeInteger(writer, segment[3], sourceColumn);
                if (segment.length === 4)
                    continue;
                namesIndex = encodeInteger(writer, segment[4], namesIndex);
            }
        }
        return writer.flush();
    }

    exports.decode = decode;
    exports.decodeGeneratedRanges = decodeGeneratedRanges;
    exports.decodeOriginalScopes = decodeOriginalScopes;
    exports.encode = encode;
    exports.encodeGeneratedRanges = encodeGeneratedRanges;
    exports.encodeOriginalScopes = encodeOriginalScopes;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=sourcemap-codec.umd.js.map


/***/ }),

/***/ 92802:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

(function (global, factory) {
     true ? factory(exports, __webpack_require__(44318), __webpack_require__(4424)) :
    0;
})(this, (function (exports, sourcemapCodec, resolveUri) { 'use strict';

    function resolve(input, base) {
        // The base is always treated as a directory, if it's not empty.
        // https://github.com/mozilla/source-map/blob/8cb3ee57/lib/util.js#L327
        // https://github.com/chromium/chromium/blob/da4adbb3/third_party/blink/renderer/devtools/front_end/sdk/SourceMap.js#L400-L401
        if (base && !base.endsWith('/'))
            base += '/';
        return resolveUri(input, base);
    }

    /**
     * Removes everything after the last "/", but leaves the slash.
     */
    function stripFilename(path) {
        if (!path)
            return '';
        const index = path.lastIndexOf('/');
        return path.slice(0, index + 1);
    }

    const COLUMN = 0;
    const SOURCES_INDEX = 1;
    const SOURCE_LINE = 2;
    const SOURCE_COLUMN = 3;
    const NAMES_INDEX = 4;
    const REV_GENERATED_LINE = 1;
    const REV_GENERATED_COLUMN = 2;

    function maybeSort(mappings, owned) {
        const unsortedIndex = nextUnsortedSegmentLine(mappings, 0);
        if (unsortedIndex === mappings.length)
            return mappings;
        // If we own the array (meaning we parsed it from JSON), then we're free to directly mutate it. If
        // not, we do not want to modify the consumer's input array.
        if (!owned)
            mappings = mappings.slice();
        for (let i = unsortedIndex; i < mappings.length; i = nextUnsortedSegmentLine(mappings, i + 1)) {
            mappings[i] = sortSegments(mappings[i], owned);
        }
        return mappings;
    }
    function nextUnsortedSegmentLine(mappings, start) {
        for (let i = start; i < mappings.length; i++) {
            if (!isSorted(mappings[i]))
                return i;
        }
        return mappings.length;
    }
    function isSorted(line) {
        for (let j = 1; j < line.length; j++) {
            if (line[j][COLUMN] < line[j - 1][COLUMN]) {
                return false;
            }
        }
        return true;
    }
    function sortSegments(line, owned) {
        if (!owned)
            line = line.slice();
        return line.sort(sortComparator);
    }
    function sortComparator(a, b) {
        return a[COLUMN] - b[COLUMN];
    }

    let found = false;
    /**
     * A binary search implementation that returns the index if a match is found.
     * If no match is found, then the left-index (the index associated with the item that comes just
     * before the desired index) is returned. To maintain proper sort order, a splice would happen at
     * the next index:
     *
     * ```js
     * const array = [1, 3];
     * const needle = 2;
     * const index = binarySearch(array, needle, (item, needle) => item - needle);
     *
     * assert.equal(index, 0);
     * array.splice(index + 1, 0, needle);
     * assert.deepEqual(array, [1, 2, 3]);
     * ```
     */
    function binarySearch(haystack, needle, low, high) {
        while (low <= high) {
            const mid = low + ((high - low) >> 1);
            const cmp = haystack[mid][COLUMN] - needle;
            if (cmp === 0) {
                found = true;
                return mid;
            }
            if (cmp < 0) {
                low = mid + 1;
            }
            else {
                high = mid - 1;
            }
        }
        found = false;
        return low - 1;
    }
    function upperBound(haystack, needle, index) {
        for (let i = index + 1; i < haystack.length; index = i++) {
            if (haystack[i][COLUMN] !== needle)
                break;
        }
        return index;
    }
    function lowerBound(haystack, needle, index) {
        for (let i = index - 1; i >= 0; index = i--) {
            if (haystack[i][COLUMN] !== needle)
                break;
        }
        return index;
    }
    function memoizedState() {
        return {
            lastKey: -1,
            lastNeedle: -1,
            lastIndex: -1,
        };
    }
    /**
     * This overly complicated beast is just to record the last tested line/column and the resulting
     * index, allowing us to skip a few tests if mappings are monotonically increasing.
     */
    function memoizedBinarySearch(haystack, needle, state, key) {
        const { lastKey, lastNeedle, lastIndex } = state;
        let low = 0;
        let high = haystack.length - 1;
        if (key === lastKey) {
            if (needle === lastNeedle) {
                found = lastIndex !== -1 && haystack[lastIndex][COLUMN] === needle;
                return lastIndex;
            }
            if (needle >= lastNeedle) {
                // lastIndex may be -1 if the previous needle was not found.
                low = lastIndex === -1 ? 0 : lastIndex;
            }
            else {
                high = lastIndex;
            }
        }
        state.lastKey = key;
        state.lastNeedle = needle;
        return (state.lastIndex = binarySearch(haystack, needle, low, high));
    }

    // Rebuilds the original source files, with mappings that are ordered by source line/column instead
    // of generated line/column.
    function buildBySources(decoded, memos) {
        const sources = memos.map(buildNullArray);
        for (let i = 0; i < decoded.length; i++) {
            const line = decoded[i];
            for (let j = 0; j < line.length; j++) {
                const seg = line[j];
                if (seg.length === 1)
                    continue;
                const sourceIndex = seg[SOURCES_INDEX];
                const sourceLine = seg[SOURCE_LINE];
                const sourceColumn = seg[SOURCE_COLUMN];
                const originalSource = sources[sourceIndex];
                const originalLine = (originalSource[sourceLine] || (originalSource[sourceLine] = []));
                const memo = memos[sourceIndex];
                // The binary search either found a match, or it found the left-index just before where the
                // segment should go. Either way, we want to insert after that. And there may be multiple
                // generated segments associated with an original location, so there may need to move several
                // indexes before we find where we need to insert.
                let index = upperBound(originalLine, sourceColumn, memoizedBinarySearch(originalLine, sourceColumn, memo, sourceLine));
                memo.lastIndex = ++index;
                insert(originalLine, index, [sourceColumn, i, seg[COLUMN]]);
            }
        }
        return sources;
    }
    function insert(array, index, value) {
        for (let i = array.length; i > index; i--) {
            array[i] = array[i - 1];
        }
        array[index] = value;
    }
    // Null arrays allow us to use ordered index keys without actually allocating contiguous memory like
    // a real array. We use a null-prototype object to avoid prototype pollution and deoptimizations.
    // Numeric properties on objects are magically sorted in ascending order by the engine regardless of
    // the insertion order. So, by setting any numeric keys, even out of order, we'll get ascending
    // order when iterating with for-in.
    function buildNullArray() {
        return { __proto__: null };
    }

    const AnyMap = function (map, mapUrl) {
        const parsed = parse(map);
        if (!('sections' in parsed)) {
            return new TraceMap(parsed, mapUrl);
        }
        const mappings = [];
        const sources = [];
        const sourcesContent = [];
        const names = [];
        const ignoreList = [];
        recurse(parsed, mapUrl, mappings, sources, sourcesContent, names, ignoreList, 0, 0, Infinity, Infinity);
        const joined = {
            version: 3,
            file: parsed.file,
            names,
            sources,
            sourcesContent,
            mappings,
            ignoreList,
        };
        return presortedDecodedMap(joined);
    };
    function parse(map) {
        return typeof map === 'string' ? JSON.parse(map) : map;
    }
    function recurse(input, mapUrl, mappings, sources, sourcesContent, names, ignoreList, lineOffset, columnOffset, stopLine, stopColumn) {
        const { sections } = input;
        for (let i = 0; i < sections.length; i++) {
            const { map, offset } = sections[i];
            let sl = stopLine;
            let sc = stopColumn;
            if (i + 1 < sections.length) {
                const nextOffset = sections[i + 1].offset;
                sl = Math.min(stopLine, lineOffset + nextOffset.line);
                if (sl === stopLine) {
                    sc = Math.min(stopColumn, columnOffset + nextOffset.column);
                }
                else if (sl < stopLine) {
                    sc = columnOffset + nextOffset.column;
                }
            }
            addSection(map, mapUrl, mappings, sources, sourcesContent, names, ignoreList, lineOffset + offset.line, columnOffset + offset.column, sl, sc);
        }
    }
    function addSection(input, mapUrl, mappings, sources, sourcesContent, names, ignoreList, lineOffset, columnOffset, stopLine, stopColumn) {
        const parsed = parse(input);
        if ('sections' in parsed)
            return recurse(...arguments);
        const map = new TraceMap(parsed, mapUrl);
        const sourcesOffset = sources.length;
        const namesOffset = names.length;
        const decoded = decodedMappings(map);
        const { resolvedSources, sourcesContent: contents, ignoreList: ignores } = map;
        append(sources, resolvedSources);
        append(names, map.names);
        if (contents)
            append(sourcesContent, contents);
        else
            for (let i = 0; i < resolvedSources.length; i++)
                sourcesContent.push(null);
        if (ignores)
            for (let i = 0; i < ignores.length; i++)
                ignoreList.push(ignores[i] + sourcesOffset);
        for (let i = 0; i < decoded.length; i++) {
            const lineI = lineOffset + i;
            // We can only add so many lines before we step into the range that the next section's map
            // controls. When we get to the last line, then we'll start checking the segments to see if
            // they've crossed into the column range. But it may not have any columns that overstep, so we
            // still need to check that we don't overstep lines, too.
            if (lineI > stopLine)
                return;
            // The out line may already exist in mappings (if we're continuing the line started by a
            // previous section). Or, we may have jumped ahead several lines to start this section.
            const out = getLine(mappings, lineI);
            // On the 0th loop, the section's column offset shifts us forward. On all other lines (since the
            // map can be multiple lines), it doesn't.
            const cOffset = i === 0 ? columnOffset : 0;
            const line = decoded[i];
            for (let j = 0; j < line.length; j++) {
                const seg = line[j];
                const column = cOffset + seg[COLUMN];
                // If this segment steps into the column range that the next section's map controls, we need
                // to stop early.
                if (lineI === stopLine && column >= stopColumn)
                    return;
                if (seg.length === 1) {
                    out.push([column]);
                    continue;
                }
                const sourcesIndex = sourcesOffset + seg[SOURCES_INDEX];
                const sourceLine = seg[SOURCE_LINE];
                const sourceColumn = seg[SOURCE_COLUMN];
                out.push(seg.length === 4
                    ? [column, sourcesIndex, sourceLine, sourceColumn]
                    : [column, sourcesIndex, sourceLine, sourceColumn, namesOffset + seg[NAMES_INDEX]]);
            }
        }
    }
    function append(arr, other) {
        for (let i = 0; i < other.length; i++)
            arr.push(other[i]);
    }
    function getLine(arr, index) {
        for (let i = arr.length; i <= index; i++)
            arr[i] = [];
        return arr[index];
    }

    const LINE_GTR_ZERO = '`line` must be greater than 0 (lines start at line 1)';
    const COL_GTR_EQ_ZERO = '`column` must be greater than or equal to 0 (columns start at column 0)';
    const LEAST_UPPER_BOUND = -1;
    const GREATEST_LOWER_BOUND = 1;
    class TraceMap {
        constructor(map, mapUrl) {
            const isString = typeof map === 'string';
            if (!isString && map._decodedMemo)
                return map;
            const parsed = (isString ? JSON.parse(map) : map);
            const { version, file, names, sourceRoot, sources, sourcesContent } = parsed;
            this.version = version;
            this.file = file;
            this.names = names || [];
            this.sourceRoot = sourceRoot;
            this.sources = sources;
            this.sourcesContent = sourcesContent;
            this.ignoreList = parsed.ignoreList || parsed.x_google_ignoreList || undefined;
            const from = resolve(sourceRoot || '', stripFilename(mapUrl));
            this.resolvedSources = sources.map((s) => resolve(s || '', from));
            const { mappings } = parsed;
            if (typeof mappings === 'string') {
                this._encoded = mappings;
                this._decoded = undefined;
            }
            else {
                this._encoded = undefined;
                this._decoded = maybeSort(mappings, isString);
            }
            this._decodedMemo = memoizedState();
            this._bySources = undefined;
            this._bySourceMemos = undefined;
        }
    }
    /**
     * Typescript doesn't allow friend access to private fields, so this just casts the map into a type
     * with public access modifiers.
     */
    function cast(map) {
        return map;
    }
    /**
     * Returns the encoded (VLQ string) form of the SourceMap's mappings field.
     */
    function encodedMappings(map) {
        var _a;
        var _b;
        return ((_a = (_b = cast(map))._encoded) !== null && _a !== void 0 ? _a : (_b._encoded = sourcemapCodec.encode(cast(map)._decoded)));
    }
    /**
     * Returns the decoded (array of lines of segments) form of the SourceMap's mappings field.
     */
    function decodedMappings(map) {
        var _a;
        return ((_a = cast(map))._decoded || (_a._decoded = sourcemapCodec.decode(cast(map)._encoded)));
    }
    /**
     * A low-level API to find the segment associated with a generated line/column (think, from a
     * stack trace). Line and column here are 0-based, unlike `originalPositionFor`.
     */
    function traceSegment(map, line, column) {
        const decoded = decodedMappings(map);
        // It's common for parent source maps to have pointers to lines that have no
        // mapping (like a "//# sourceMappingURL=") at the end of the child file.
        if (line >= decoded.length)
            return null;
        const segments = decoded[line];
        const index = traceSegmentInternal(segments, cast(map)._decodedMemo, line, column, GREATEST_LOWER_BOUND);
        return index === -1 ? null : segments[index];
    }
    /**
     * A higher-level API to find the source/line/column associated with a generated line/column
     * (think, from a stack trace). Line is 1-based, but column is 0-based, due to legacy behavior in
     * `source-map` library.
     */
    function originalPositionFor(map, needle) {
        let { line, column, bias } = needle;
        line--;
        if (line < 0)
            throw new Error(LINE_GTR_ZERO);
        if (column < 0)
            throw new Error(COL_GTR_EQ_ZERO);
        const decoded = decodedMappings(map);
        // It's common for parent source maps to have pointers to lines that have no
        // mapping (like a "//# sourceMappingURL=") at the end of the child file.
        if (line >= decoded.length)
            return OMapping(null, null, null, null);
        const segments = decoded[line];
        const index = traceSegmentInternal(segments, cast(map)._decodedMemo, line, column, bias || GREATEST_LOWER_BOUND);
        if (index === -1)
            return OMapping(null, null, null, null);
        const segment = segments[index];
        if (segment.length === 1)
            return OMapping(null, null, null, null);
        const { names, resolvedSources } = map;
        return OMapping(resolvedSources[segment[SOURCES_INDEX]], segment[SOURCE_LINE] + 1, segment[SOURCE_COLUMN], segment.length === 5 ? names[segment[NAMES_INDEX]] : null);
    }
    /**
     * Finds the generated line/column position of the provided source/line/column source position.
     */
    function generatedPositionFor(map, needle) {
        const { source, line, column, bias } = needle;
        return generatedPosition(map, source, line, column, bias || GREATEST_LOWER_BOUND, false);
    }
    /**
     * Finds all generated line/column positions of the provided source/line/column source position.
     */
    function allGeneratedPositionsFor(map, needle) {
        const { source, line, column, bias } = needle;
        // SourceMapConsumer uses LEAST_UPPER_BOUND for some reason, so we follow suit.
        return generatedPosition(map, source, line, column, bias || LEAST_UPPER_BOUND, true);
    }
    /**
     * Iterates each mapping in generated position order.
     */
    function eachMapping(map, cb) {
        const decoded = decodedMappings(map);
        const { names, resolvedSources } = map;
        for (let i = 0; i < decoded.length; i++) {
            const line = decoded[i];
            for (let j = 0; j < line.length; j++) {
                const seg = line[j];
                const generatedLine = i + 1;
                const generatedColumn = seg[0];
                let source = null;
                let originalLine = null;
                let originalColumn = null;
                let name = null;
                if (seg.length !== 1) {
                    source = resolvedSources[seg[1]];
                    originalLine = seg[2] + 1;
                    originalColumn = seg[3];
                }
                if (seg.length === 5)
                    name = names[seg[4]];
                cb({
                    generatedLine,
                    generatedColumn,
                    source,
                    originalLine,
                    originalColumn,
                    name,
                });
            }
        }
    }
    function sourceIndex(map, source) {
        const { sources, resolvedSources } = map;
        let index = sources.indexOf(source);
        if (index === -1)
            index = resolvedSources.indexOf(source);
        return index;
    }
    /**
     * Retrieves the source content for a particular source, if its found. Returns null if not.
     */
    function sourceContentFor(map, source) {
        const { sourcesContent } = map;
        if (sourcesContent == null)
            return null;
        const index = sourceIndex(map, source);
        return index === -1 ? null : sourcesContent[index];
    }
    /**
     * Determines if the source is marked to ignore by the source map.
     */
    function isIgnored(map, source) {
        const { ignoreList } = map;
        if (ignoreList == null)
            return false;
        const index = sourceIndex(map, source);
        return index === -1 ? false : ignoreList.includes(index);
    }
    /**
     * A helper that skips sorting of the input map's mappings array, which can be expensive for larger
     * maps.
     */
    function presortedDecodedMap(map, mapUrl) {
        const tracer = new TraceMap(clone(map, []), mapUrl);
        cast(tracer)._decoded = map.mappings;
        return tracer;
    }
    /**
     * Returns a sourcemap object (with decoded mappings) suitable for passing to a library that expects
     * a sourcemap, or to JSON.stringify.
     */
    function decodedMap(map) {
        return clone(map, decodedMappings(map));
    }
    /**
     * Returns a sourcemap object (with encoded mappings) suitable for passing to a library that expects
     * a sourcemap, or to JSON.stringify.
     */
    function encodedMap(map) {
        return clone(map, encodedMappings(map));
    }
    function clone(map, mappings) {
        return {
            version: map.version,
            file: map.file,
            names: map.names,
            sourceRoot: map.sourceRoot,
            sources: map.sources,
            sourcesContent: map.sourcesContent,
            mappings,
            ignoreList: map.ignoreList || map.x_google_ignoreList,
        };
    }
    function OMapping(source, line, column, name) {
        return { source, line, column, name };
    }
    function GMapping(line, column) {
        return { line, column };
    }
    function traceSegmentInternal(segments, memo, line, column, bias) {
        let index = memoizedBinarySearch(segments, column, memo, line);
        if (found) {
            index = (bias === LEAST_UPPER_BOUND ? upperBound : lowerBound)(segments, column, index);
        }
        else if (bias === LEAST_UPPER_BOUND)
            index++;
        if (index === -1 || index === segments.length)
            return -1;
        return index;
    }
    function sliceGeneratedPositions(segments, memo, line, column, bias) {
        let min = traceSegmentInternal(segments, memo, line, column, GREATEST_LOWER_BOUND);
        // We ignored the bias when tracing the segment so that we're guarnateed to find the first (in
        // insertion order) segment that matched. Even if we did respect the bias when tracing, we would
        // still need to call `lowerBound()` to find the first segment, which is slower than just looking
        // for the GREATEST_LOWER_BOUND to begin with. The only difference that matters for us is when the
        // binary search didn't match, in which case GREATEST_LOWER_BOUND just needs to increment to
        // match LEAST_UPPER_BOUND.
        if (!found && bias === LEAST_UPPER_BOUND)
            min++;
        if (min === -1 || min === segments.length)
            return [];
        // We may have found the segment that started at an earlier column. If this is the case, then we
        // need to slice all generated segments that match _that_ column, because all such segments span
        // to our desired column.
        const matchedColumn = found ? column : segments[min][COLUMN];
        // The binary search is not guaranteed to find the lower bound when a match wasn't found.
        if (!found)
            min = lowerBound(segments, matchedColumn, min);
        const max = upperBound(segments, matchedColumn, min);
        const result = [];
        for (; min <= max; min++) {
            const segment = segments[min];
            result.push(GMapping(segment[REV_GENERATED_LINE] + 1, segment[REV_GENERATED_COLUMN]));
        }
        return result;
    }
    function generatedPosition(map, source, line, column, bias, all) {
        var _a;
        line--;
        if (line < 0)
            throw new Error(LINE_GTR_ZERO);
        if (column < 0)
            throw new Error(COL_GTR_EQ_ZERO);
        const { sources, resolvedSources } = map;
        let sourceIndex = sources.indexOf(source);
        if (sourceIndex === -1)
            sourceIndex = resolvedSources.indexOf(source);
        if (sourceIndex === -1)
            return all ? [] : GMapping(null, null);
        const generated = ((_a = cast(map))._bySources || (_a._bySources = buildBySources(decodedMappings(map), (cast(map)._bySourceMemos = sources.map(memoizedState)))));
        const segments = generated[sourceIndex][line];
        if (segments == null)
            return all ? [] : GMapping(null, null);
        const memo = cast(map)._bySourceMemos[sourceIndex];
        if (all)
            return sliceGeneratedPositions(segments, memo, line, column, bias);
        const index = traceSegmentInternal(segments, memo, line, column, bias);
        if (index === -1)
            return GMapping(null, null);
        const segment = segments[index];
        return GMapping(segment[REV_GENERATED_LINE] + 1, segment[REV_GENERATED_COLUMN]);
    }

    exports.AnyMap = AnyMap;
    exports.GREATEST_LOWER_BOUND = GREATEST_LOWER_BOUND;
    exports.LEAST_UPPER_BOUND = LEAST_UPPER_BOUND;
    exports.TraceMap = TraceMap;
    exports.allGeneratedPositionsFor = allGeneratedPositionsFor;
    exports.decodedMap = decodedMap;
    exports.decodedMappings = decodedMappings;
    exports.eachMapping = eachMapping;
    exports.encodedMap = encodedMap;
    exports.encodedMappings = encodedMappings;
    exports.generatedPositionFor = generatedPositionFor;
    exports.isIgnored = isIgnored;
    exports.originalPositionFor = originalPositionFor;
    exports.presortedDecodedMap = presortedDecodedMap;
    exports.sourceContentFor = sourceContentFor;
    exports.traceSegment = traceSegment;

}));
//# sourceMappingURL=trace-mapping.umd.js.map


/***/ }),

/***/ 634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ CodeBlock)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(40797);
// EXTERNAL MODULE: ./node_modules/react-live/dist/index.mjs + 58 modules
var dist = __webpack_require__(86850);
;// ./apps/docs/src/components/CodeBlock/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"playgroundEditor":"playgroundEditor_hiaS","borderBottom":"borderBottom_SKni","playgroundPreview":"playgroundPreview_d6Ft","previewToolbar":"previewToolbar_oyyr"});
;// ./apps/docs/src/components/examples/fruits.ts
var fruits=[{name:'Ananas',description:'Tropisk frukt med taggigt skal',value:'ananas',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/320px-Pineapple_and_cross_section.jpg'},{name:'Apelsin',description:'Citrusfrukt med orange skal',value:'apelsin',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Orange-Fruit-Pieces.jpg/320px-Orange-Fruit-Pieces.jpg'},{name:'Aprikos',description:'Stenfrukt med orange färg',value:'aprikos',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Apricot_and_cross_section.jpg/320px-Apricot_and_cross_section.jpg'},{name:'Avokado',description:'Grönsaksfrukt med krämig konsistens',value:'avokado',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Avocado_IMGP1082.jpg/320px-Avocado_IMGP1082.jpg'},{name:'Banan',description:'Långsmal frukt med gult skal',value:'banan',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/320px-Banana-Single.jpg'},{name:'Björnbär',description:'Små svarta bär',value:'bjornbar',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Blackberries_%28Rubus_fruticosus%29.jpg/320px-Blackberries_%28Rubus_fruticosus%29.jpg'},{name:'Blåbär',description:'Små blå bär',value:'blabar',image:'https://upload.wikimedia.org/wikipedia/commons/1/15/Blueberries.jpg'},{name:'Carambola',description:'Stjärnformad exotisk frukt',value:'carambola',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Averrhoa_carambola_ARS_k5735-7.jpg/160px-Averrhoa_carambola_ARS_k5735-7.jpg'},{name:'Citron',description:'Citrusfrukt med gult skal',value:'citron',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Lemon.jpg/320px-Lemon.jpg'},{name:'Clementin',description:'Liten citrusfrukt med löst skal',value:'clementin',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Oh_my_darling.jpg/320px-Oh_my_darling.jpg'},{name:'Drakfrukt',description:'Exotisk frukt med rött skal',value:'drakfrukt',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Pitaya_cross_section_ed2.jpg/294px-Pitaya_cross_section_ed2.jpg'},{name:'Granatäpple',description:'Frukt med många kärnor',value:'granatapple',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Pomegranate_fruit_-_whole_and_piece_with_arils.jpg/320px-Pomegranate_fruit_-_whole_and_piece_with_arils.jpg'},{name:'Grapefrukt',description:'Stor citrusfrukt med rosa eller gult kött',value:'grapefrukt',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Citrus_paradisi_%28Grapefruit%2C_pink%29_white_bg.jpg/320px-Citrus_paradisi_%28Grapefruit%2C_pink%29_white_bg.jpg'},{name:'Hallon',description:'Röda bär som växer på buskar',value:'hallon',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Raspberries_%28Rubus_idaeus%29.jpg/320px-Raspberries_%28Rubus_idaeus%29.jpg'},{name:'Jordgubbe',description:'Röda bär med frön på utsidan',value:'jordgubbe',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Strawberries.jpg/320px-Strawberries.jpg'},{name:'Kiwi',description:'Frukt med hårig brun skal och grönt kött',value:'kiwi',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg/320px-Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg'},{name:'Kokosnöt',description:'Stor nöt med hårt skal',value:'kokosnot',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Coconuts_-_single_and_cracked_open.jpg/320px-Coconuts_-_single_and_cracked_open.jpg'},{name:'Körsbär',description:'Små röda stenfrukter',value:'korsbar',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Cherry_Stella444.jpg/320px-Cherry_Stella444.jpg'},{name:'Lime',description:'Liten grön citrusfrukt',value:'lime',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Citrus_×aurantiifolia927505341.jpg/320px-Citrus_×aurantiifolia927505341.jpg'},{name:'Litchi',description:'Liten frukt med tunt rosa skal',value:'litchi',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Lychee_fruits_and_seed.jpg/320px-Lychee_fruits_and_seed.jpg'},{name:'Mandarin',description:'Liten orange citrusfrukt',value:'mandarin',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Mandarin_Oranges_%28Citrus_Reticulata%29.jpg/320px-Mandarin_Oranges_%28Citrus_Reticulata%29.jpg'},{name:'Mango',description:'Söt exotisk frukt med stor kärna',value:'mango',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Mango_-_single.jpg/320px-Mango_-_single.jpg'},{name:'Melon',description:'Stor frukt med saftigt kött',value:'melon',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Muskmelon.jpg/320px-Muskmelon.jpg'},{name:'Nektarin',description:'Slät variant av persika',value:'nektarin',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Autumn_Red_peaches.jpg/320px-Autumn_Red_peaches.jpg'},{name:'Papaya',description:'Exotisk frukt med orange kött',value:'papaya',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Papaya_cross_section_BNC.jpg/320px-Papaya_cross_section_BNC.jpg'},{name:'Passionsfrukt',description:'Frukt med många kärnor och syrligt kött',value:'passionsfrukt',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Passion_fruits_-_whole_and_halved.jpg/320px-Passion_fruits_-_whole_and_halved.jpg'},{name:'Persika',description:'Mjuk stenfrukt med ludet skal',value:'persika',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Autumn_Red_peaches.jpg/320px-Autumn_Red_peaches.jpg'},{name:'Physalis',description:'Liten frukt som växer i pappershölje',value:'physalis',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Physalis_peruviana_calix_open_close-up.jpg/300px-Physalis_peruviana_calix_open_close-up.jpg'},{name:'Plommon',description:'Söt eller syrlig stenfrukt',value:'plommon',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Bluebyrd_plum.jpg/167px-Bluebyrd_plum.jpg'},{name:'Päron',description:'Avlång frukt med smal midja',value:'paron',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Pears.jpg/393px-Pears.jpg'},{name:'Rambutan',description:'Exotisk frukt med hårig skal',value:'rambutan',image:'https://upload.wikimedia.org/wikipedia/commons/a/ae/Rambutan_Fruit.jpg'},{name:'Röda vinbär',description:'Små röda bär i klasar',value:'roda vinbar',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Hjulsta_koloni_2010h.jpg/256px-Hjulsta_koloni_2010h.jpg'},{name:'Sharon',description:'Persikoliknande frukt med fast kött',value:'sharon',image:'https://upload.wikimedia.org/wikipedia/commons/9/95/Diospyros_kaki_-_persimmon_at_Paro_during_LGFC_-_Bhutan_2019_%283%29.jpg'},{name:'Stjärnfrukt',description:'Stjärnformad frukt med syrligt kött',value:'stjarnfrukt',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Carambola_Starfruit.jpg/320px-Carambola_Starfruit.jpg'},{name:'Svarta vinbär',description:'Små svarta bär i klasar',value:'svarta vinbar',image:'https://upload.wikimedia.org/wikipedia/commons/1/17/Blackcurrants2.jpg'},{name:'Vattenmelon',description:'Stor frukt med rött, saftigt kött',value:'vattenmelon',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Water_melon_2015.jpg/320px-Water_melon_2015.jpg'},{name:'Vindruvor',description:'Små gröna eller blå frukter i klasar',value:'vindruvor',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Thompson_seedless_grapes.JPG/320px-Thompson_seedless_grapes.JPG'},{name:'Äpple',description:'Rund frukt med kärnhus',value:'apple',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/320px-Red_Apple.jpg'}];
// EXTERNAL MODULE: ./packages/components/src/accordion/Accordion.tsx
var Accordion = __webpack_require__(3348);
// EXTERNAL MODULE: ./packages/components/src/accordion/AccordionItem.tsx
var AccordionItem = __webpack_require__(57389);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/colorMode.js
var contexts_colorMode = __webpack_require__(8532);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./apps/docs/src/components/CodeBlock/CodeBlock.tsx
var _excluded=["children","transformCode","hideCode","hideExample"];// eslint-disable-next-line
Array.prototype.shuffled=function(count){if(count===void 0){count=5;}var result=this.sort(function(){return Math.random()-Math.random();}).slice(0,count);return count===1?result[0]:result;};var columns=[{name:'Namn',id:'name',isRowHeader:true},{name:'Beskrivning',id:'desc'}];var rows=fruits.shuffled(7).map(function(fruit){return{id:fruit.value,name:fruit.name,desc:fruit.description};});var Playground=function Playground(_ref){var children=_ref.children,transformCode=_ref.transformCode,hideCode=_ref.hideCode,hideExample=_ref.hideExample,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var theme=usePrismTheme();var _React$useState=react.useState(false),isOpen=_React$useState[0],setIsOpen=_React$useState[1];var _useColorMode=(0,contexts_colorMode/* useColorMode */.G)(),colorMode=_useColorMode.colorMode;var _React$useState2=react.useState(colorMode),previewColorMode=_React$useState2[0],setPreviewColorMode=_React$useState2[1];react.useEffect(function(){setPreviewColorMode(colorMode);},[colorMode]);var scope=Object.assign({columns:columns,rows:rows,fruits:fruits},props.scope,{isOpen:isOpen,setIsOpen:setIsOpen});var Toolbar=function Toolbar(){react.useEffect(function(){var observer=new MutationObserver(function(){var popover=document.querySelector('[class*="popover_"], [class*="overlay_"], [class*="Popover"], [class*="tooltip_"]');if(popover)popover.style.colorScheme=previewColorMode;});observer.observe(document.body,{childList:true,subtree:true});return function(){return observer.disconnect();};},[]);return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.previewToolbar,children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"toggle_vylO colorModeToggle_DEke",children:/*#__PURE__*/(0,jsx_runtime.jsx)("button",{className:"clean-btn toggleButton_gllP",onClick:function onClick(){return setPreviewColorMode(previewColorMode==='light'?'dark':'light');},children:previewColorMode==='dark'?/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 24 24",width:"24",height:"24",color:"white",children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"})}):/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 24 24",width:"24",height:"24",children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"})})})})});};return/*#__PURE__*/(0,jsx_runtime.jsxs)(dist/* LiveProvider */.Q,Object.assign({code:children.replace(/\n$/,''),transformCode:transformCode||function(code){return code+";";},theme:theme},props,{scope:scope,children:[!hideExample&&/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.playgroundPreview,style:{colorScheme:previewColorMode},"data-theme":previewColorMode,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Toolbar,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* LivePreview */.pA,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* LiveError */.p1,{})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)(styles_module.playgroundEditor,!hideCode&&styles_module.borderBottom),children:!hideCode&&/*#__PURE__*/(0,jsx_runtime.jsx)(Accordion/* Accordion */.n,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A,{id:"example",title:"Exempelkod",children:/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* LiveEditor */.w,{})})})})]}));};/* harmony default export */ const CodeBlock = (Playground);/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var usePrismTheme=function usePrismTheme(){var _useDocusaurusContext=(0,useDocusaurusContext/* default */.A)(),siteConfig=_useDocusaurusContext.siteConfig;var _useColorMode2=(0,contexts_colorMode/* useColorMode */.G)(),colorMode=_useColorMode2.colorMode;var docusaurusPrismThemes=siteConfig.themeConfig.prism;var prismTheme=colorMode==='light'?docusaurusPrismThemes.theme:docusaurusPrismThemes.darkTheme;return prismTheme;};

/***/ }),

/***/ 80059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  B: () => (/* binding */ ComponentHeader)
});

// EXTERNAL MODULE: ./packages/components/src/flex/Flex.tsx
var Flex = __webpack_require__(39996);
// EXTERNAL MODULE: ./packages/components/src/flex/FlexItem.tsx
var FlexItem = __webpack_require__(52981);
// EXTERNAL MODULE: ./packages/components/src/link-button/LinkButton.tsx + 2 modules
var LinkButton = __webpack_require__(1353);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(29030);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.js + 3 modules
var createLucideIcon = __webpack_require__(84722);
;// ./node_modules/lucide-react/dist/esm/icons/book-marked.js
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const BookMarked = (0,createLucideIcon/* default */.A)("BookMarked", [
  ["path", { d: "M10 2v8l3-3 3 3V2", key: "sqw3rj" }],
  [
    "path",
    {
      d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
      key: "k3hazp"
    }
  ]
]);


//# sourceMappingURL=book-marked.js.map

;// ./node_modules/lucide-react/dist/esm/icons/book-text.js
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const BookText = (0,createLucideIcon/* default */.A)("BookText", [
  [
    "path",
    {
      d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
      key: "k3hazp"
    }
  ],
  ["path", { d: "M8 11h8", key: "vwpz6n" }],
  ["path", { d: "M8 7h6", key: "1f0q6e" }]
]);


//# sourceMappingURL=book-text.js.map

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./apps/docs/src/components/getComponentMetaData.tsx
var ComponentHeader=function ComponentHeader(_ref){var name=_ref.name,friendlyName=_ref.friendlyName,overrideHeadlessLink=_ref.overrideHeadlessLink,overrideHeadlessLinkTitle=_ref.overrideHeadlessLinkTitle;var baseUrl=useBaseUrl/* default */.Ay;var storybookLink= false?0:baseUrl("/storybook/?path=/docs/components-"+name.toLowerCase()+"--docs");return/*#__PURE__*/(0,jsx_runtime.jsx)("section",{style:{marginBottom:32,marginTop:-20},children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Flex/* Flex */.s,{fluid:true,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(FlexItem/* FlexItem */.Z,{className:"friendlyName",children:/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:friendlyName})}),/*#__PURE__*/(0,jsx_runtime.jsx)(FlexItem/* FlexItem */.Z,{col:"auto",children:/*#__PURE__*/(0,jsx_runtime.jsx)(LinkButton/* LinkButton */.z,{href:storybookLink,variant:"tertiary",icon:BookMarked,iconPlacement:"left",children:"Storybook"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(FlexItem/* FlexItem */.Z,{col:"auto",children:overrideHeadlessLink!==''&&/*#__PURE__*/(0,jsx_runtime.jsx)(LinkButton/* LinkButton */.z,{href:overrideHeadlessLink?overrideHeadlessLink:"https://react-spectrum.adobe.com/react-aria/"+name+".html",target:"_blank",variant:"tertiary",icon:BookText,iconPlacement:"left",children:overrideHeadlessLinkTitle?overrideHeadlessLinkTitle:'React Aria'})})]})});};

/***/ }),

/***/ 38355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  U: () => (/* binding */ PropTable)
});

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useGlobalData.js
var useGlobalData = __webpack_require__(72077);
// EXTERNAL MODULE: ./packages/components/src/accordion/Accordion.tsx
var Accordion = __webpack_require__(3348);
// EXTERNAL MODULE: ./packages/components/src/accordion/AccordionItem.tsx
var AccordionItem = __webpack_require__(57389);
;// ./apps/docs/src/css/propstable.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const propstable_module = ({"accordion":"accordion_M8EQ","table":"table_p75e","thead":"thead_NOJG","tbody":"tbody_wu48","item":"item_chxT"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./apps/docs/src/components/propsTable.tsx
var PropTable=function PropTable(_ref){var _ComponentsDocs$find;var name=_ref.name,_ref$defaultOpen=_ref.defaultOpen,defaultOpen=_ref$defaultOpen===void 0?true:_ref$defaultOpen;var globalData=(0,useGlobalData/* default */.Ay)();var ComponentsDocs=globalData['docusaurus-plugin-react-docgen-typescript']["default"];var props=(_ComponentsDocs$find=ComponentsDocs.find(function(componentDoc){return componentDoc.displayName===name;}))==null?void 0:_ComponentsDocs$find.props;if(!props){return null;}var _Object$entries$reduc=Object.entries(props).reduce(function(acc,_ref2){var key=_ref2[0],value=_ref2[1];if(key.startsWith('on')){acc.events[key]=value;}else if(key.startsWith('aria-')){acc.accessibility[key]=value;}else{acc.rest[key]=value;}return acc;},{events:{},accessibility:{},rest:{}}),events=_Object$entries$reduc.events,accessibility=_Object$entries$reduc.accessibility,rest=_Object$entries$reduc.rest;var Table=function Table(_ref3){var propGroup=_ref3.propGroup;return/*#__PURE__*/(0,jsx_runtime.jsxs)("table",{className:propstable_module.table,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("thead",{className:propstable_module.thead,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("tr",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:"Namn"}),/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:"Typ"}),/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:"Standard"}),/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:"Beskrivning"})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)("tbody",{className:propstable_module.tbody,children:Object.keys(propGroup).map(function(key){var _props$key$type;return/*#__PURE__*/(0,jsx_runtime.jsxs)("tr",{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("td",{style:{verticalAlign:'top'},children:[key," ",props[key].required&&' *']}),/*#__PURE__*/(0,jsx_runtime.jsx)("td",{style:{verticalAlign:'top',maxWidth:'250px'},children:/*#__PURE__*/(0,jsx_runtime.jsx)("code",{children:(_props$key$type=props[key].type)==null?void 0:_props$key$type.name})}),/*#__PURE__*/(0,jsx_runtime.jsx)("td",{style:{verticalAlign:'top',maxWidth:'50px'},children:props[key].defaultValue?/*#__PURE__*/(0,jsx_runtime.jsx)("code",{children:props[key].defaultValue.value}):'-'}),/*#__PURE__*/(0,jsx_runtime.jsx)("td",{style:{verticalAlign:'top'},children:props[key].description})]},key);})})]});};return/*#__PURE__*/(0,jsx_runtime.jsxs)(Accordion/* Accordion */.n,{className:propstable_module.accordion,type:"multiple",defaultExpandedKeys:defaultOpen?['props']:[],children:[Object.getOwnPropertyNames(rest).length!==0&&/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A,{id:"props",title:"Props",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Table,{propGroup:rest})}),Object.getOwnPropertyNames(events).length!==0&&/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A,{id:"events",title:"Events",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Table,{propGroup:events})}),Object.getOwnPropertyNames(accessibility).length!==0&&/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A,{id:"accessibility",title:"Tillg\xE4nglighet",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Table,{propGroup:accessibility})})]});};

/***/ }),

/***/ 79329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ TabItem)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tabItem":"tabItem_Ymn6"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TabItem(_ref){var children=_ref.children,hidden=_ref.hidden,className=_ref.className;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{role:"tabpanel",className:(0,clsx/* default */.A)(styles_module.tabItem,className),hidden:hidden,children:children});}

/***/ }),

/***/ 65537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Tabs)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/scrollUtils.js
var scrollUtils = __webpack_require__(65627);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(35527);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsomorphicLayoutEffect.js
var useIsomorphicLayoutEffect = __webpack_require__(50372);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/historyUtils.js
var historyUtils = __webpack_require__(30604);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/jsUtils.js
var jsUtils = __webpack_require__(11861);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/storageUtils.js + 1 modules
var storageUtils = __webpack_require__(9123);
;// ./node_modules/@docusaurus/theme-common/lib/utils/tabsUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// A very rough duck type, but good enough to guard against mistakes while
// allowing customization
function isTabItem(comp){var props=comp.props;return!!props&&typeof props==='object'&&'value'in props;}function sanitizeTabsChildren(children){var _React$Children$toArr,_React$Children$toArr2;return(_React$Children$toArr=(_React$Children$toArr2=react.Children.toArray(children).filter(function(child){return child!=='\n';}).map(function(child){if(!child||/*#__PURE__*/(0,react.isValidElement)(child)&&isTabItem(child)){return child;}// child.type.name will give non-sensical values in prod because of
// minification, but we assume it won't throw in prod.
throw new Error("Docusaurus error: Bad <Tabs> child <"+(// @ts-expect-error: guarding against unexpected cases
typeof child.type==='string'?child.type:child.type.name)+">: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique \"value\" prop.");}))==null?void 0:_React$Children$toArr2.filter(Boolean))!=null?_React$Children$toArr:[];}function extractChildrenTabValues(children){return sanitizeTabsChildren(children).map(function(_ref){var _ref$props=_ref.props,value=_ref$props.value,label=_ref$props.label,attributes=_ref$props.attributes,isDefault=_ref$props["default"];return{value:value,label:label,attributes:attributes,"default":isDefault};});}function ensureNoDuplicateValue(values){var dup=(0,jsUtils/* duplicates */.XI)(values,function(a,b){return a.value===b.value;});if(dup.length>0){throw new Error("Docusaurus error: Duplicate values \""+dup.map(function(a){return a.value;}).join(', ')+"\" found in <Tabs>. Every value needs to be unique.");}}function useTabValues(props){var valuesProp=props.values,children=props.children;return (0,react.useMemo)(function(){var values=valuesProp!=null?valuesProp:extractChildrenTabValues(children);ensureNoDuplicateValue(values);return values;},[valuesProp,children]);}function isValidValue(_ref2){var value=_ref2.value,tabValues=_ref2.tabValues;return tabValues.some(function(a){return a.value===value;});}function getInitialStateValue(_ref3){var _tabValues$find;var defaultValue=_ref3.defaultValue,tabValues=_ref3.tabValues;if(tabValues.length===0){throw new Error('Docusaurus error: the <Tabs> component requires at least one <TabItem> children component');}if(defaultValue){// Warn user about passing incorrect defaultValue as prop.
if(!isValidValue({value:defaultValue,tabValues:tabValues})){throw new Error("Docusaurus error: The <Tabs> has a defaultValue \""+defaultValue+"\" but none of its children has the corresponding value. Available values are: "+tabValues.map(function(a){return a.value;}).join(', ')+". If you intend to show no default tab, use defaultValue={null} instead.");}return defaultValue;}var defaultTabValue=(_tabValues$find=tabValues.find(function(tabValue){return tabValue["default"];}))!=null?_tabValues$find:tabValues[0];if(!defaultTabValue){throw new Error('Unexpected error: 0 tabValues');}return defaultTabValue.value;}function getStorageKey(groupId){if(!groupId){return null;}return"docusaurus.tab."+groupId;}function getQueryStringKey(_ref4){var _ref4$queryString=_ref4.queryString,queryString=_ref4$queryString===void 0?false:_ref4$queryString,groupId=_ref4.groupId;if(typeof queryString==='string'){return queryString;}if(queryString===false){return null;}if(queryString===true&&!groupId){throw new Error("Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString=\"my-search-param\".");}return groupId!=null?groupId:null;}function useTabQueryString(_ref5){var _ref5$queryString=_ref5.queryString,queryString=_ref5$queryString===void 0?false:_ref5$queryString,groupId=_ref5.groupId;var history=(0,react_router/* useHistory */.W6)();var key=getQueryStringKey({queryString:queryString,groupId:groupId});var value=(0,historyUtils/* useQueryStringValue */.aZ)(key);var setValue=(0,react.useCallback)(function(newValue){if(!key){return;// no-op
}var searchParams=new URLSearchParams(history.location.search);searchParams.set(key,newValue);history.replace(Object.assign({},history.location,{search:searchParams.toString()}));},[key,history]);return[value,setValue];}function useTabStorage(_ref6){var groupId=_ref6.groupId;var key=getStorageKey(groupId);var _useStorageSlot=(0,storageUtils/* useStorageSlot */.Dv)(key),value=_useStorageSlot[0],storageSlot=_useStorageSlot[1];var setValue=(0,react.useCallback)(function(newValue){if(!key){return;// no-op
}storageSlot.set(newValue);},[key,storageSlot]);return[value,setValue];}function useTabs(props){var defaultValue=props.defaultValue,_props$queryString=props.queryString,queryString=_props$queryString===void 0?false:_props$queryString,groupId=props.groupId;var tabValues=useTabValues(props);var _useState=(0,react.useState)(function(){return getInitialStateValue({defaultValue:defaultValue,tabValues:tabValues});}),selectedValue=_useState[0],setSelectedValue=_useState[1];var _useTabQueryString=useTabQueryString({queryString:queryString,groupId:groupId}),queryStringValue=_useTabQueryString[0],setQueryString=_useTabQueryString[1];var _useTabStorage=useTabStorage({groupId:groupId}),storageValue=_useTabStorage[0],setStorageValue=_useTabStorage[1];// We sync valid querystring/storage value to state on change + hydration
var valueToSync=function(){var value=queryStringValue!=null?queryStringValue:storageValue;if(!isValidValue({value:value,tabValues:tabValues})){return null;}return value;}();// Sync in a layout/sync effect is important, for useScrollPositionBlocker
// See https://github.com/facebook/docusaurus/issues/8625
(0,useIsomorphicLayoutEffect/* default */.A)(function(){if(valueToSync){setSelectedValue(valueToSync);}},[valueToSync]);var selectValue=(0,react.useCallback)(function(newValue){if(!isValidValue({value:newValue,tabValues:tabValues})){throw new Error("Can't select invalid tab value="+newValue);}setSelectedValue(newValue);setQueryString(newValue);setStorageValue(newValue);},[setQueryString,setStorageValue,tabValues]);return{selectedValue:selectedValue,selectValue:selectValue,tabValues:tabValues};}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(9136);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tabList":"tabList__CuJ","tabItem":"tabItem_LNqP"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TabList(_ref){var className=_ref.className,block=_ref.block,selectedValue=_ref.selectedValue,selectValue=_ref.selectValue,tabValues=_ref.tabValues;var tabRefs=[];var _useScrollPositionBlo=(0,scrollUtils/* useScrollPositionBlocker */.a_)(),blockElementScrollPositionUntilNextRender=_useScrollPositionBlo.blockElementScrollPositionUntilNextRender;var handleTabChange=function handleTabChange(event){var newTab=event.currentTarget;var newTabIndex=tabRefs.indexOf(newTab);var newTabValue=tabValues[newTabIndex].value;if(newTabValue!==selectedValue){blockElementScrollPositionUntilNextRender(newTab);selectValue(newTabValue);}};var handleKeydown=function handleKeydown(event){var _focusElement;var focusElement=null;switch(event.key){case'Enter':{handleTabChange(event);break;}case'ArrowRight':{var _tabRefs$nextTab;var nextTab=tabRefs.indexOf(event.currentTarget)+1;focusElement=(_tabRefs$nextTab=tabRefs[nextTab])!=null?_tabRefs$nextTab:tabRefs[0];break;}case'ArrowLeft':{var _tabRefs$prevTab;var prevTab=tabRefs.indexOf(event.currentTarget)-1;focusElement=(_tabRefs$prevTab=tabRefs[prevTab])!=null?_tabRefs$prevTab:tabRefs[tabRefs.length-1];break;}default:break;}(_focusElement=focusElement)==null||_focusElement.focus();};return/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,clsx/* default */.A)('tabs',{'tabs--block':block},className),children:tabValues.map(function(_ref2){var value=_ref2.value,label=_ref2.label,attributes=_ref2.attributes;return/*#__PURE__*/(0,jsx_runtime.jsx)("li",Object.assign({// TODO extract TabListItem
role:"tab",tabIndex:selectedValue===value?0:-1,"aria-selected":selectedValue===value,ref:function ref(tabControl){tabRefs.push(tabControl);},onKeyDown:handleKeydown,onClick:handleTabChange},attributes,{className:(0,clsx/* default */.A)('tabs__item',styles_module.tabItem,attributes==null?void 0:attributes.className,{'tabs__item--active':selectedValue===value}),children:label!=null?label:value}),value);})});}function TabContent(_ref3){var lazy=_ref3.lazy,children=_ref3.children,selectedValue=_ref3.selectedValue;var childTabs=(Array.isArray(children)?children:[children]).filter(Boolean);if(lazy){var selectedTabItem=childTabs.find(function(tabItem){return tabItem.props.value===selectedValue;});if(!selectedTabItem){// fail-safe or fail-fast? not sure what's best here
return null;}return/*#__PURE__*/(0,react.cloneElement)(selectedTabItem,{className:(0,clsx/* default */.A)('margin-top--md',selectedTabItem.props.className)});}return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"margin-top--md",children:childTabs.map(function(tabItem,i){return/*#__PURE__*/(0,react.cloneElement)(tabItem,{key:i,hidden:tabItem.props.value!==selectedValue});})});}function TabsComponent(props){var tabs=useTabs(props);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)('tabs-container',styles_module.tabList),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TabList,Object.assign({},tabs,props)),/*#__PURE__*/(0,jsx_runtime.jsx)(TabContent,Object.assign({},tabs,props))]});}function Tabs(props){var isBrowser=(0,useIsBrowser/* default */.A)();return/*#__PURE__*/(0,jsx_runtime.jsx)(TabsComponent// Remount tabs after hydration
// Temporary fix for https://github.com/facebook/docusaurus/issues/5653
,Object.assign({},props,{children:sanitizeTabsChildren(props.children)}),String(isBrowser));}

/***/ }),

/***/ 3348:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ Accordion)
/* harmony export */ });
/* unused harmony export ACCORDION_TEST_ID */
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var _Accordion_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43538);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34164);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48569);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
'use client';var _excluded=["variant","type","children","className"];var ACCORDION_TEST_ID='accordion';/**
 * Accordions are used primarily to reduce the direct amount of information on a page and to sort it clearly.
 */var Accordion=function Accordion(_ref){var _ref$variant=_ref.variant,variant=_ref$variant===void 0?'uncontained':_ref$variant,_ref$type=_ref.type,type=_ref$type===void 0?'single':_ref$type,children=_ref.children,className=_ref.className,props=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_4__/* .DisclosureGroup */ .Tw,Object.assign({"data-testid":ACCORDION_TEST_ID,allowsMultipleExpanded:type==='multiple',className:(0,clsx__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(_Accordion_module_css__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.root,variant==='contained'?_Accordion_module_css__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.contained:_Accordion_module_css__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.uncontained,className)},props,{children:children}));};

/***/ }),

/***/ 57389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ AccordionItem)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48569);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57936);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86559);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75107);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34164);
/* harmony import */ var _Accordion_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43538);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
'use client';var _excluded=["title","children","className","headingLevel"];var AccordionItem=function AccordionItem(_ref){var title=_ref.title,children=_ref.children,className=_ref.className,_ref$headingLevel=_ref.headingLevel,headingLevel=_ref$headingLevel===void 0?3:_ref$headingLevel,props=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);var panelRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);var _React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState(0),panelHeight=_React$useState[0],setPanelHeight=_React$useState[1];var titleIsReactNode=typeof title==='object';/**
   * There might be a better way to do this.
   * Normally this shouldn't be used without a dependency array
   * we found no way to get around it without doing like this.
   */// eslint-disable-next-line
react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(function(){if(panelRef.current){setPanelHeight(panelRef.current.clientHeight);}});return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_aria_components__WEBPACK_IMPORTED_MODULE_4__/* .Disclosure */ .EN,Object.assign({},props,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(_Accordion_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.item,className),children:[titleIsReactNode?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:_Accordion_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.trigger,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_button__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .$,{slot:"trigger",variant:"icon",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,{size:20,className:_Accordion_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.icon}),title]})}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_8__/* .Heading */ .D,{level:headingLevel,className:_Accordion_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.trigger,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_button__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .$,{slot:"trigger",variant:"icon",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,{size:20,className:_Accordion_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.icon}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:_Accordion_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.triggerText,children:title})]})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_4__/* .DisclosurePanel */ .kS,{style:{'--panel-height':panelHeight+"px"},className:(0,clsx__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(_Accordion_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.panel,panelHeight===0&&_Accordion_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.panel0),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{ref:panelRef,className:_Accordion_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.content,children:children})})]}));};

/***/ }),

/***/ 86559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $: () => (/* binding */ Button)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./packages/components/src/button/Button.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Button_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--button-background-primary-hover":"light-dark(#25607f, #25607f)","--button-background-primary":"light-dark(#143c50, #2e7ca5)","--icon-primary":"light-dark(#171717, #f2f2f2)","--button-background-primary-active":"light-dark(#2e7ca5, #143c50)","--button-background-secondary":"light-dark(#ffffff, #171717)","--size-03":"1rem","--text-on-color":"light-dark(#ffffff, #ffffff)","--button-border-secondary":"light-dark(light-dark(#143c50, #143c50), #f2f2f2)","--button-background-secondary-hover":"light-dark(#e6e6e6, #212121)","--button-background-disabled":"light-dark(#f2f2f2, #262626)","--white":"#ffffff","--border-disabled":"light-dark(#bfbfbf, #525252)","--button-background-secondary-active":"light-dark(#d9d9d9, #262626)","--button-background-tertiary-hover":"light-dark(#e6e6e6, #212121)","--button-background-tertiary-active":"light-dark(#d9d9d9, #262626)","--text-tertiary":"light-dark(#143c50, #f2f2f2)","--button-background-danger":"light-dark(#e62323, #e62323)","--button-background-danger-hover":"light-dark(#b31b1b, #b31b1b)","--text-disabled":"light-dark(#bfbfbf, #525252)","--button-background-danger-active":"light-dark(#801313, #801313)","--focus":"0 0 0 2px white, 0 0 0 4px black","--button-background-icon-hover":"light-dark(rgba(0 0 0 / 10%), rgba(255 255 255 / 10%))","--button-background-icon-active":"light-dark(rgba(0 0 0 / 20%), rgba(255 255 255 / 20%))","button":"button_RcXK","secondary":"secondary_h5I_","tertiary":"tertiary_xq7E","iconBtn":"iconBtn__8qK","danger":"danger_iFp6","iconRight":"iconRight_iW1e","fullwidth":"fullwidth_WWNT","small":"small_smbj","primary":"primary_JNNk"});
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Button.mjs
var dist_Button = __webpack_require__(65014);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/button/Button.tsx
'use client';var _excluded=["variant","fullwidth","className","iconPlacement","size","icon","iconSize"];/**
 * Button to perform various actions.
 *
 * @interface MidasButton
 *
 * @see {@link https://designsystem.migrationsverket.se/components/button}
 */var Button=function Button(_ref){var _ref$variant=_ref.variant,variant=_ref$variant===void 0?'primary':_ref$variant,fullwidth=_ref.fullwidth,className=_ref.className,iconPlacement=_ref.iconPlacement,size=_ref.size,IconComponent=_ref.icon,iconSize=_ref.iconSize,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var effectiveIconSize=size==='small'?14:iconSize||20;return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Button/* Button */.$,Object.assign({className:(0,clsx/* default */.A)(Button_module.button,variant==='primary'&&Button_module.primary,variant==='secondary'&&Button_module.secondary,variant==='tertiary'&&Button_module.tertiary,variant==='danger'&&Button_module.danger,variant==='icon'&&Button_module.iconBtn,fullwidth&&Button_module.fullwidth,size==='small'&&Button_module.small,iconPlacement==='right'&&Button_module.iconRight,className)},rest,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[IconComponent&&/*#__PURE__*/(0,jsx_runtime.jsx)(IconComponent,{"aria-hidden":true,size:effectiveIconSize}),rest.children]})}));};

/***/ }),

/***/ 39996:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ Flex)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _Flex_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12682);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34164);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
var _excluded=["children","fluid"];/**
 * Grid based on display: flex;
 * Calculates breakpoints and distributes columns according to MV specifications
 *
 * ### Children
 * Use FlexItem to manage each column.
 * FlexItem accepts values of 1 through 12 and auto.
 *
 * @see {@link: https://migrationsverket.se/components/flex}
 */var Flex=function Flex(_ref){var children=_ref.children,_ref$fluid=_ref.fluid,fluid=_ref$fluid===void 0?false:_ref$fluid,rest=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({},rest,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_Flex_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.container,fluid&&_Flex_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.fluid,rest.className),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:_Flex_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.flex,children:children})}));};

/***/ }),

/***/ 52981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ FlexItem)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _Flex_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12682);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34164);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
var _excluded=["children","col","offset"];/**
 * Columns based on display: flex;
 * FlexItem accepts values of 1 through 12 and auto.
 *
 * @see {@link: https://migrationsverket.se/components/flex}
 */var FlexItem=function FlexItem(_ref){var children=_ref.children,col=_ref.col,offset=_ref.offset,props=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);var colClass=col?"col-"+col:'';var offsetClass=offset?"offset-"+offset:'';return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_Flex_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.col,_Flex_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A[colClass],_Flex_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A[offsetClass],props.className)},props,{children:children}));};

/***/ }),

/***/ 1353:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* binding */ LinkButton)
});

// UNUSED EXPORTS: RouterProvider

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Link.mjs + 1 modules
var Link = __webpack_require__(73099);
;// ./packages/components/src/link-button/LinkButton.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const LinkButton_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--size-03":"1rem","--breakpoint-sm":"(max-width: 767px)","--button-background-primary":"light-dark(#143c50, #2e7ca5)","--button-border-secondary":"light-dark(light-dark(#143c50, #143c50), #f2f2f2)","--text-on-color":"light-dark(#ffffff, #ffffff)","--button-background-primary-hover":"light-dark(#25607f, #25607f)","--button-background-primary-active":"light-dark(#2e7ca5, #143c50)","--focus":"0 0 0 2px white, 0 0 0 4px black","--button-background-disabled":"light-dark(#f2f2f2, #262626)","--text-disabled":"light-dark(#bfbfbf, #525252)","--text-tertiary":"light-dark(#143c50, #f2f2f2)","--border-brand":"light-dark(#143c50, #143c50)","--button-background-secondary":"light-dark(#ffffff, #171717)","--button-background-secondary-hover":"light-dark(#e6e6e6, #212121)","--button-background-secondary-active":"light-dark(#d9d9d9, #262626)","--border-disabled":"light-dark(#bfbfbf, #525252)","--button-background-tertiary-hover":"light-dark(#e6e6e6, #212121)","--button-background-tertiary-active":"light-dark(#d9d9d9, #262626)","--button-background-danger":"light-dark(#e62323, #e62323)","--button-background-danger-hover":"light-dark(#b31b1b, #b31b1b)","--button-background-danger-active":"light-dark(#801313, #801313)","--white":"#ffffff","--icon-secondary":"light-dark(#143c50, #f2f2f2)","--button-background-icon-hover":"light-dark(rgba(0 0 0 / 10%), rgba(255 255 255 / 10%))","linkButton":"linkButton_DlJV","secondary":"secondary_aNB6","icon":"icon_g3pu","tertiary":"tertiary_tl3f","danger":"danger_qkvT","iconBtn":"iconBtn_Ngss","iconLeft":"iconLeft_r90N","fullwidth":"fullwidth_yUSG","button":"button_CzNs"});
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.js + 3 modules
var createLucideIcon = __webpack_require__(84722);
;// ./node_modules/lucide-react/dist/esm/icons/square-arrow-out-up-right.js
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const SquareArrowOutUpRight = (0,createLucideIcon/* default */.A)("SquareArrowOutUpRight", [
  ["path", { d: "M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6", key: "y09zxi" }],
  ["path", { d: "m21 3-9 9", key: "mpx6sq" }],
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }]
]);


//# sourceMappingURL=square-arrow-out-up-right.js.map

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-left.js
var chevron_left = __webpack_require__(60250);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-right.js
var chevron_right = __webpack_require__(87677);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/link-button/LinkButton.tsx
'use client';var _excluded=["children","variant","fullwidth","icon","iconPlacement","className","as"];/**
 * A link to be used when a user expects a button but web technologies force us to use a a-tag
 * */var LinkButton=function LinkButton(_ref){var children=_ref.children,variant=_ref.variant,fullwidth=_ref.fullwidth,IconComponent=_ref.icon,iconPlacement=_ref.iconPlacement,className=_ref.className,as=_ref.as,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var Component=as||Link/* Link */.N;var Icon=function Icon(){if(IconComponent)return/*#__PURE__*/(0,jsx_runtime.jsx)(IconComponent,{size:20,className:LinkButton_module.icon});if(rest.target==='_blank')return/*#__PURE__*/(0,jsx_runtime.jsx)(SquareArrowOutUpRight,{size:20,className:LinkButton_module.icon});if(iconPlacement==='left')return/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_left/* default */.A,{size:20,className:LinkButton_module.icon});return/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_right/* default */.A,{size:20,className:LinkButton_module.icon});};return/*#__PURE__*/(0,jsx_runtime.jsxs)(Component,Object.assign({className:(0,clsx/* default */.A)(LinkButton_module.linkButton,variant==='primary'&&LinkButton_module.primary,variant==='secondary'&&LinkButton_module.secondary,variant==='tertiary'&&LinkButton_module.tertiary,variant==='danger'&&LinkButton_module.danger,variant==='icon'&&LinkButton_module.iconBtn,fullwidth&&LinkButton_module.fullwidth,iconPlacement==='left'&&LinkButton_module.iconLeft,className)},rest,{children:[children,/*#__PURE__*/(0,jsx_runtime.jsx)(Icon,{})]}));};

/***/ }),

/***/ 84722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ createLucideIcon)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/lucide-react/dist/esm/shared/src/utils.js
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && array.indexOf(className) === index;
}).join(" ");


//# sourceMappingURL=utils.js.map

;// ./node_modules/lucide-react/dist/esm/defaultAttributes.js
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};


//# sourceMappingURL=defaultAttributes.js.map

;// ./node_modules/lucide-react/dist/esm/Icon.js
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */





const Icon = (0,react.forwardRef)(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => {
    return (0,react.createElement)(
      "svg",
      {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: mergeClasses("lucide", className),
        ...rest
      },
      [
        ...iconNode.map(([tag, attrs]) => (0,react.createElement)(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    );
  }
);


//# sourceMappingURL=Icon.js.map

;// ./node_modules/lucide-react/dist/esm/createLucideIcon.js
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */





const createLucideIcon = (iconName, iconNode) => {
  const Component = (0,react.forwardRef)(
    ({ className, ...props }, ref) => (0,react.createElement)(Icon, {
      ref,
      iconNode,
      className: mergeClasses(`lucide-${toKebabCase(iconName)}`, className),
      ...props
    })
  );
  Component.displayName = `${iconName}`;
  return Component;
};


//# sourceMappingURL=createLucideIcon.js.map


/***/ }),

/***/ 75107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ChevronDown)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const ChevronDown = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);


//# sourceMappingURL=chevron-down.js.map


/***/ }),

/***/ 60250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ChevronLeft)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const ChevronLeft = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);


//# sourceMappingURL=chevron-left.js.map


/***/ }),

/***/ 87677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ChevronRight)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const ChevronRight = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);


//# sourceMappingURL=chevron-right.js.map


/***/ }),

/***/ 43538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--layer-01":"light-dark(#f2f2f2, #262626)","--layer-selected-01":"light-dark(#d9d9d9, #383838)","--layer-hover-01":"light-dark(#e6e6e6, #333333)","--normal-transition":"300ms","--text-primary":"light-dark(#171717, #f2f2f2)","root":"root_dwc1","contained":"contained_snuo","triggerText":"triggerText_v8dS","trigger":"trigger_H4x6","icon":"icon_Ofz7","item":"item_EcMn","panel":"panel_aCgP","panel0":"panel0_cd8e","content":"content_eG9O","header":"header_KTZ_"});

/***/ }),

/***/ 12682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tokens":"\"../theme/tokens.css\"","--breakpoint-md":"(min-width: 768px)","--breakpoint-lg":"(min-width: 1200px)","--breakpoint-xl":"(min-width: 1440px)","container":"container_M2rG","flex":"flex_UojW","fluid":"fluid_lF5E","col":"col_Taxb","col-1":"col-1_z0bQ","col-2":"col-2_HAuY","col-3":"col-3_oSCH","col-4":"col-4_eIG4","col-5":"col-5_JlYB","col-6":"col-6_dZDY","col-7":"col-7_UoF_","col-8":"col-8_zyia","col-9":"col-9_H77l","col-10":"col-10_zbp5","col-11":"col-11_N7LS","col-12":"col-12_HChu","col-auto":"col-auto_JGok","offset-1":"offset-1_e_Jy","offset-2":"offset-2_p5mN","offset-3":"offset-3_Dz4V","offset-4":"offset-4_Uwlu","offset-5":"offset-5_DYvi","offset-6":"offset-6_pWn0","offset-7":"offset-7_iSDK","offset-8":"offset-8_RIDq","offset-9":"offset-9_Unq7","offset-10":"offset-10_OUtT","offset-11":"offset-11_ySZ3"});

/***/ }),

/***/ 67979:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = true;
__webpack_unused_export__ = void 0;
var LF = '\n';
var CR = '\r';
var LinesAndColumns = /** @class */ (function () {
    function LinesAndColumns(string) {
        this.string = string;
        var offsets = [0];
        for (var offset = 0; offset < string.length;) {
            switch (string[offset]) {
                case LF:
                    offset += LF.length;
                    offsets.push(offset);
                    break;
                case CR:
                    offset += CR.length;
                    if (string[offset] === LF) {
                        offset += LF.length;
                    }
                    offsets.push(offset);
                    break;
                default:
                    offset++;
                    break;
            }
        }
        this.offsets = offsets;
    }
    LinesAndColumns.prototype.locationForIndex = function (index) {
        if (index < 0 || index > this.string.length) {
            return null;
        }
        var line = 0;
        var offsets = this.offsets;
        while (offsets[line + 1] <= index) {
            line++;
        }
        var column = index - offsets[line];
        return { line: line, column: column };
    };
    LinesAndColumns.prototype.indexForLocation = function (location) {
        var line = location.line, column = location.column;
        if (line < 0 || line >= this.offsets.length) {
            return null;
        }
        if (column < 0 || column > this.lengthOfLine(line)) {
            return null;
        }
        return this.offsets[line] + column;
    };
    LinesAndColumns.prototype.lengthOfLine = function (line) {
        var offset = this.offsets[line];
        var nextOffset = line === this.offsets.length - 1
            ? this.string.length
            : this.offsets[line + 1];
        return nextOffset - offset;
    };
    return LinesAndColumns;
}());
__webpack_unused_export__ = LinesAndColumns;
__webpack_unused_export__ = LinesAndColumns;


/***/ }),

/***/ 99361:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Checker = exports.createCheckers = void 0;
var types_1 = __webpack_require__(1680);
var util_1 = __webpack_require__(31977);
/**
 * Export functions used to define interfaces.
 */
var types_2 = __webpack_require__(1680);
Object.defineProperty(exports, "TArray", ({ enumerable: true, get: function () { return types_2.TArray; } }));
Object.defineProperty(exports, "TEnumType", ({ enumerable: true, get: function () { return types_2.TEnumType; } }));
Object.defineProperty(exports, "TEnumLiteral", ({ enumerable: true, get: function () { return types_2.TEnumLiteral; } }));
Object.defineProperty(exports, "TFunc", ({ enumerable: true, get: function () { return types_2.TFunc; } }));
Object.defineProperty(exports, "TIface", ({ enumerable: true, get: function () { return types_2.TIface; } }));
Object.defineProperty(exports, "TLiteral", ({ enumerable: true, get: function () { return types_2.TLiteral; } }));
Object.defineProperty(exports, "TName", ({ enumerable: true, get: function () { return types_2.TName; } }));
Object.defineProperty(exports, "TOptional", ({ enumerable: true, get: function () { return types_2.TOptional; } }));
Object.defineProperty(exports, "TParam", ({ enumerable: true, get: function () { return types_2.TParam; } }));
Object.defineProperty(exports, "TParamList", ({ enumerable: true, get: function () { return types_2.TParamList; } }));
Object.defineProperty(exports, "TProp", ({ enumerable: true, get: function () { return types_2.TProp; } }));
Object.defineProperty(exports, "TTuple", ({ enumerable: true, get: function () { return types_2.TTuple; } }));
Object.defineProperty(exports, "TType", ({ enumerable: true, get: function () { return types_2.TType; } }));
Object.defineProperty(exports, "TUnion", ({ enumerable: true, get: function () { return types_2.TUnion; } }));
Object.defineProperty(exports, "TIntersection", ({ enumerable: true, get: function () { return types_2.TIntersection; } }));
Object.defineProperty(exports, "array", ({ enumerable: true, get: function () { return types_2.array; } }));
Object.defineProperty(exports, "enumlit", ({ enumerable: true, get: function () { return types_2.enumlit; } }));
Object.defineProperty(exports, "enumtype", ({ enumerable: true, get: function () { return types_2.enumtype; } }));
Object.defineProperty(exports, "func", ({ enumerable: true, get: function () { return types_2.func; } }));
Object.defineProperty(exports, "iface", ({ enumerable: true, get: function () { return types_2.iface; } }));
Object.defineProperty(exports, "lit", ({ enumerable: true, get: function () { return types_2.lit; } }));
Object.defineProperty(exports, "name", ({ enumerable: true, get: function () { return types_2.name; } }));
Object.defineProperty(exports, "opt", ({ enumerable: true, get: function () { return types_2.opt; } }));
Object.defineProperty(exports, "param", ({ enumerable: true, get: function () { return types_2.param; } }));
Object.defineProperty(exports, "tuple", ({ enumerable: true, get: function () { return types_2.tuple; } }));
Object.defineProperty(exports, "union", ({ enumerable: true, get: function () { return types_2.union; } }));
Object.defineProperty(exports, "intersection", ({ enumerable: true, get: function () { return types_2.intersection; } }));
Object.defineProperty(exports, "BasicType", ({ enumerable: true, get: function () { return types_2.BasicType; } }));
var util_2 = __webpack_require__(31977);
Object.defineProperty(exports, "VError", ({ enumerable: true, get: function () { return util_2.VError; } }));
/**
 * Takes one of more type suites (e.g. a module generated by `ts-interface-builder`), and combines
 * them into a suite of interface checkers. If a type is used by name, that name should be present
 * among the passed-in type suites.
 *
 * The returned object maps type names to Checker objects.
 */
function createCheckers() {
    var typeSuite = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        typeSuite[_i] = arguments[_i];
    }
    var fullSuite = Object.assign.apply(Object, __spreadArrays([{}, types_1.basicTypes], typeSuite));
    var checkers = {};
    for (var _a = 0, typeSuite_1 = typeSuite; _a < typeSuite_1.length; _a++) {
        var suite_1 = typeSuite_1[_a];
        for (var _b = 0, _c = Object.keys(suite_1); _b < _c.length; _b++) {
            var name = _c[_b];
            checkers[name] = new Checker(fullSuite, suite_1[name]);
        }
    }
    return checkers;
}
exports.createCheckers = createCheckers;
/**
 * Checker implements validation of objects, and also includes accessors to validate method calls.
 * Checkers should be created using `createCheckers()`.
 */
var Checker = /** @class */ (function () {
    // Create checkers by using `createCheckers()` function.
    function Checker(suite, ttype, _path) {
        if (_path === void 0) { _path = 'value'; }
        this.suite = suite;
        this.ttype = ttype;
        this._path = _path;
        this.props = new Map();
        if (ttype instanceof types_1.TIface) {
            for (var _i = 0, _a = ttype.props; _i < _a.length; _i++) {
                var p = _a[_i];
                this.props.set(p.name, p.ttype);
            }
        }
        this.checkerPlain = this.ttype.getChecker(suite, false);
        this.checkerStrict = this.ttype.getChecker(suite, true);
    }
    /**
     * Set the path to report in errors, instead of the default "value". (E.g. if the Checker is for
     * a "person" interface, set path to "person" to report e.g. "person.name is not a string".)
     */
    Checker.prototype.setReportedPath = function (path) {
        this._path = path;
    };
    /**
     * Check that the given value satisfies this checker's type, or throw Error.
     */
    Checker.prototype.check = function (value) { return this._doCheck(this.checkerPlain, value); };
    /**
     * A fast check for whether or not the given value satisfies this Checker's type. This returns
     * true or false, does not produce an error message, and is fast both on success and on failure.
     */
    Checker.prototype.test = function (value) {
        return this.checkerPlain(value, new util_1.NoopContext());
    };
    /**
     * Returns an error object describing the errors if the given value does not satisfy this
     * Checker's type, or null if it does.
     */
    Checker.prototype.validate = function (value) {
        return this._doValidate(this.checkerPlain, value);
    };
    /**
     * Check that the given value satisfies this checker's type strictly. This checks that objects
     * and tuples have no extra members. Note that this prevents backward compatibility, so usually
     * a plain check() is more appropriate.
     */
    Checker.prototype.strictCheck = function (value) { return this._doCheck(this.checkerStrict, value); };
    /**
     * A fast strict check for whether or not the given value satisfies this Checker's type. Returns
     * true or false, does not produce an error message, and is fast both on success and on failure.
     */
    Checker.prototype.strictTest = function (value) {
        return this.checkerStrict(value, new util_1.NoopContext());
    };
    /**
     * Returns an error object describing the errors if the given value does not satisfy this
     * Checker's type strictly, or null if it does.
     */
    Checker.prototype.strictValidate = function (value) {
        return this._doValidate(this.checkerStrict, value);
    };
    /**
     * If this checker is for an interface, returns a Checker for the type required for the given
     * property of this interface.
     */
    Checker.prototype.getProp = function (prop) {
        var ttype = this.props.get(prop);
        if (!ttype) {
            throw new Error("Type has no property " + prop);
        }
        return new Checker(this.suite, ttype, this._path + "." + prop);
    };
    /**
     * If this checker is for an interface, returns a Checker for the argument-list required to call
     * the given method of this interface. E.g. if this Checker is for the interface:
     *    interface Foo {
     *      find(s: string, pos?: number): number;
     *    }
     * Then methodArgs("find").check(...) will succeed for ["foo"] and ["foo", 3], but not for [17].
     */
    Checker.prototype.methodArgs = function (methodName) {
        var tfunc = this._getMethod(methodName);
        return new Checker(this.suite, tfunc.paramList);
    };
    /**
     * If this checker is for an interface, returns a Checker for the return value of the given
     * method of this interface.
     */
    Checker.prototype.methodResult = function (methodName) {
        var tfunc = this._getMethod(methodName);
        return new Checker(this.suite, tfunc.result);
    };
    /**
     * If this checker is for a function, returns a Checker for its argument-list.
     */
    Checker.prototype.getArgs = function () {
        if (!(this.ttype instanceof types_1.TFunc)) {
            throw new Error("getArgs() applied to non-function");
        }
        return new Checker(this.suite, this.ttype.paramList);
    };
    /**
     * If this checker is for a function, returns a Checker for its result.
     */
    Checker.prototype.getResult = function () {
        if (!(this.ttype instanceof types_1.TFunc)) {
            throw new Error("getResult() applied to non-function");
        }
        return new Checker(this.suite, this.ttype.result);
    };
    /**
     * Return the type for which this is a checker.
     */
    Checker.prototype.getType = function () {
        return this.ttype;
    };
    /**
     * Actual implementation of check() and strictCheck().
     */
    Checker.prototype._doCheck = function (checkerFunc, value) {
        var noopCtx = new util_1.NoopContext();
        if (!checkerFunc(value, noopCtx)) {
            var detailCtx = new util_1.DetailContext();
            checkerFunc(value, detailCtx);
            throw detailCtx.getError(this._path);
        }
    };
    Checker.prototype._doValidate = function (checkerFunc, value) {
        var noopCtx = new util_1.NoopContext();
        if (checkerFunc(value, noopCtx)) {
            return null;
        }
        var detailCtx = new util_1.DetailContext();
        checkerFunc(value, detailCtx);
        return detailCtx.getErrorDetail(this._path);
    };
    Checker.prototype._getMethod = function (methodName) {
        var ttype = this.props.get(methodName);
        if (!ttype) {
            throw new Error("Type has no property " + methodName);
        }
        if (!(ttype instanceof types_1.TFunc)) {
            throw new Error("Property " + methodName + " is not a method");
        }
        return ttype;
    };
    return Checker;
}());
exports.Checker = Checker;


/***/ }),

/***/ 1680:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/**
 * This module defines nodes used to define types and validations for objects and interfaces.
 */
// tslint:disable:no-shadowed-variable prefer-for-of
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.basicTypes = exports.BasicType = exports.TParamList = exports.TParam = exports.param = exports.TFunc = exports.func = exports.TProp = exports.TOptional = exports.opt = exports.TIface = exports.iface = exports.TEnumLiteral = exports.enumlit = exports.TEnumType = exports.enumtype = exports.TIntersection = exports.intersection = exports.TUnion = exports.union = exports.TTuple = exports.tuple = exports.TArray = exports.array = exports.TLiteral = exports.lit = exports.TName = exports.name = exports.TType = void 0;
var util_1 = __webpack_require__(31977);
/** Node that represents a type. */
var TType = /** @class */ (function () {
    function TType() {
    }
    return TType;
}());
exports.TType = TType;
/** Parses a type spec into a TType node. */
function parseSpec(typeSpec) {
    return typeof typeSpec === "string" ? name(typeSpec) : typeSpec;
}
function getNamedType(suite, name) {
    var ttype = suite[name];
    if (!ttype) {
        throw new Error("Unknown type " + name);
    }
    return ttype;
}
/**
 * Defines a type name, either built-in, or defined in this suite. It can typically be included in
 * the specs as just a plain string.
 */
function name(value) { return new TName(value); }
exports.name = name;
var TName = /** @class */ (function (_super) {
    __extends(TName, _super);
    function TName(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this._failMsg = "is not a " + name;
        return _this;
    }
    TName.prototype.getChecker = function (suite, strict, allowedProps) {
        var _this = this;
        var ttype = getNamedType(suite, this.name);
        var checker = ttype.getChecker(suite, strict, allowedProps);
        if (ttype instanceof BasicType || ttype instanceof TName) {
            return checker;
        }
        // For complex types, add an additional "is not a <Type>" message on failure.
        return function (value, ctx) { return checker(value, ctx) ? true : ctx.fail(null, _this._failMsg, 0); };
    };
    return TName;
}(TType));
exports.TName = TName;
/**
 * Defines a literal value, e.g. lit('hello') or lit(123).
 */
function lit(value) { return new TLiteral(value); }
exports.lit = lit;
var TLiteral = /** @class */ (function (_super) {
    __extends(TLiteral, _super);
    function TLiteral(value) {
        var _this = _super.call(this) || this;
        _this.value = value;
        _this.name = JSON.stringify(value);
        _this._failMsg = "is not " + _this.name;
        return _this;
    }
    TLiteral.prototype.getChecker = function (suite, strict) {
        var _this = this;
        return function (value, ctx) { return (value === _this.value) ? true : ctx.fail(null, _this._failMsg, -1); };
    };
    return TLiteral;
}(TType));
exports.TLiteral = TLiteral;
/**
 * Defines an array type, e.g. array('number').
 */
function array(typeSpec) { return new TArray(parseSpec(typeSpec)); }
exports.array = array;
var TArray = /** @class */ (function (_super) {
    __extends(TArray, _super);
    function TArray(ttype) {
        var _this = _super.call(this) || this;
        _this.ttype = ttype;
        return _this;
    }
    TArray.prototype.getChecker = function (suite, strict) {
        var itemChecker = this.ttype.getChecker(suite, strict);
        return function (value, ctx) {
            if (!Array.isArray(value)) {
                return ctx.fail(null, "is not an array", 0);
            }
            for (var i = 0; i < value.length; i++) {
                var ok = itemChecker(value[i], ctx);
                if (!ok) {
                    return ctx.fail(i, null, 1);
                }
            }
            return true;
        };
    };
    return TArray;
}(TType));
exports.TArray = TArray;
/**
 * Defines a tuple type, e.g. tuple('string', 'number').
 */
function tuple() {
    var typeSpec = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        typeSpec[_i] = arguments[_i];
    }
    return new TTuple(typeSpec.map(function (t) { return parseSpec(t); }));
}
exports.tuple = tuple;
var TTuple = /** @class */ (function (_super) {
    __extends(TTuple, _super);
    function TTuple(ttypes) {
        var _this = _super.call(this) || this;
        _this.ttypes = ttypes;
        return _this;
    }
    TTuple.prototype.getChecker = function (suite, strict) {
        var itemCheckers = this.ttypes.map(function (t) { return t.getChecker(suite, strict); });
        var checker = function (value, ctx) {
            if (!Array.isArray(value)) {
                return ctx.fail(null, "is not an array", 0);
            }
            for (var i = 0; i < itemCheckers.length; i++) {
                var ok = itemCheckers[i](value[i], ctx);
                if (!ok) {
                    return ctx.fail(i, null, 1);
                }
            }
            return true;
        };
        if (!strict) {
            return checker;
        }
        return function (value, ctx) {
            if (!checker(value, ctx)) {
                return false;
            }
            return value.length <= itemCheckers.length ? true :
                ctx.fail(itemCheckers.length, "is extraneous", 2);
        };
    };
    return TTuple;
}(TType));
exports.TTuple = TTuple;
/**
 * Defines a union type, e.g. union('number', 'null').
 */
function union() {
    var typeSpec = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        typeSpec[_i] = arguments[_i];
    }
    return new TUnion(typeSpec.map(function (t) { return parseSpec(t); }));
}
exports.union = union;
var TUnion = /** @class */ (function (_super) {
    __extends(TUnion, _super);
    function TUnion(ttypes) {
        var _this = _super.call(this) || this;
        _this.ttypes = ttypes;
        var names = ttypes.map(function (t) { return t instanceof TName || t instanceof TLiteral ? t.name : null; })
            .filter(function (n) { return n; });
        var otherTypes = ttypes.length - names.length;
        if (names.length) {
            if (otherTypes > 0) {
                names.push(otherTypes + " more");
            }
            _this._failMsg = "is none of " + names.join(", ");
        }
        else {
            _this._failMsg = "is none of " + otherTypes + " types";
        }
        return _this;
    }
    TUnion.prototype.getChecker = function (suite, strict) {
        var _this = this;
        var itemCheckers = this.ttypes.map(function (t) { return t.getChecker(suite, strict); });
        return function (value, ctx) {
            var ur = ctx.unionResolver();
            for (var i = 0; i < itemCheckers.length; i++) {
                var ok = itemCheckers[i](value, ur.createContext());
                if (ok) {
                    return true;
                }
            }
            ctx.resolveUnion(ur);
            return ctx.fail(null, _this._failMsg, 0);
        };
    };
    return TUnion;
}(TType));
exports.TUnion = TUnion;
/**
 * Defines an intersection type, e.g. intersection('number', 'null').
 */
function intersection() {
    var typeSpec = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        typeSpec[_i] = arguments[_i];
    }
    return new TIntersection(typeSpec.map(function (t) { return parseSpec(t); }));
}
exports.intersection = intersection;
var TIntersection = /** @class */ (function (_super) {
    __extends(TIntersection, _super);
    function TIntersection(ttypes) {
        var _this = _super.call(this) || this;
        _this.ttypes = ttypes;
        return _this;
    }
    TIntersection.prototype.getChecker = function (suite, strict) {
        var allowedProps = new Set();
        var itemCheckers = this.ttypes.map(function (t) { return t.getChecker(suite, strict, allowedProps); });
        return function (value, ctx) {
            var ok = itemCheckers.every(function (checker) { return checker(value, ctx); });
            if (ok) {
                return true;
            }
            return ctx.fail(null, null, 0);
        };
    };
    return TIntersection;
}(TType));
exports.TIntersection = TIntersection;
/**
 * Defines an enum type, e.g. enum({'A': 1, 'B': 2}).
 */
function enumtype(values) {
    return new TEnumType(values);
}
exports.enumtype = enumtype;
var TEnumType = /** @class */ (function (_super) {
    __extends(TEnumType, _super);
    function TEnumType(members) {
        var _this = _super.call(this) || this;
        _this.members = members;
        _this.validValues = new Set();
        _this._failMsg = "is not a valid enum value";
        _this.validValues = new Set(Object.keys(members).map(function (name) { return members[name]; }));
        return _this;
    }
    TEnumType.prototype.getChecker = function (suite, strict) {
        var _this = this;
        return function (value, ctx) {
            return (_this.validValues.has(value) ? true : ctx.fail(null, _this._failMsg, 0));
        };
    };
    return TEnumType;
}(TType));
exports.TEnumType = TEnumType;
/**
 * Defines a literal enum value, such as Direction.Up, specified as enumlit("Direction", "Up").
 */
function enumlit(name, prop) {
    return new TEnumLiteral(name, prop);
}
exports.enumlit = enumlit;
var TEnumLiteral = /** @class */ (function (_super) {
    __extends(TEnumLiteral, _super);
    function TEnumLiteral(enumName, prop) {
        var _this = _super.call(this) || this;
        _this.enumName = enumName;
        _this.prop = prop;
        _this._failMsg = "is not " + enumName + "." + prop;
        return _this;
    }
    TEnumLiteral.prototype.getChecker = function (suite, strict) {
        var _this = this;
        var ttype = getNamedType(suite, this.enumName);
        if (!(ttype instanceof TEnumType)) {
            throw new Error("Type " + this.enumName + " used in enumlit is not an enum type");
        }
        var val = ttype.members[this.prop];
        if (!ttype.members.hasOwnProperty(this.prop)) {
            throw new Error("Unknown value " + this.enumName + "." + this.prop + " used in enumlit");
        }
        return function (value, ctx) { return (value === val) ? true : ctx.fail(null, _this._failMsg, -1); };
    };
    return TEnumLiteral;
}(TType));
exports.TEnumLiteral = TEnumLiteral;
function makeIfaceProps(props) {
    return Object.keys(props).map(function (name) { return makeIfaceProp(name, props[name]); });
}
function makeIfaceProp(name, prop) {
    return prop instanceof TOptional ?
        new TProp(name, prop.ttype, true) :
        new TProp(name, parseSpec(prop), false);
}
/**
 * Defines an interface. The first argument is an array of interfaces that it extends, and the
 * second is an array of properties.
 */
function iface(bases, props) {
    return new TIface(bases, makeIfaceProps(props));
}
exports.iface = iface;
var TIface = /** @class */ (function (_super) {
    __extends(TIface, _super);
    function TIface(bases, props) {
        var _this = _super.call(this) || this;
        _this.bases = bases;
        _this.props = props;
        _this.propSet = new Set(props.map(function (p) { return p.name; }));
        return _this;
    }
    TIface.prototype.getChecker = function (suite, strict, allowedProps) {
        var _this = this;
        var baseCheckers = this.bases.map(function (b) { return getNamedType(suite, b).getChecker(suite, strict); });
        var propCheckers = this.props.map(function (prop) { return prop.ttype.getChecker(suite, strict); });
        var testCtx = new util_1.NoopContext();
        // Consider a prop required if it's not optional AND does not allow for undefined as a value.
        var isPropRequired = this.props.map(function (prop, i) {
            return !prop.isOpt && !propCheckers[i](undefined, testCtx);
        });
        var checker = function (value, ctx) {
            if (typeof value !== "object" || value === null) {
                return ctx.fail(null, "is not an object", 0);
            }
            for (var i = 0; i < baseCheckers.length; i++) {
                if (!baseCheckers[i](value, ctx)) {
                    return false;
                }
            }
            for (var i = 0; i < propCheckers.length; i++) {
                var name_1 = _this.props[i].name;
                var v = value[name_1];
                if (v === undefined) {
                    if (isPropRequired[i]) {
                        return ctx.fail(name_1, "is missing", 1);
                    }
                }
                else {
                    var ok = propCheckers[i](v, ctx);
                    if (!ok) {
                        return ctx.fail(name_1, null, 1);
                    }
                }
            }
            return true;
        };
        if (!strict) {
            return checker;
        }
        var propSet = this.propSet;
        if (allowedProps) {
            this.propSet.forEach(function (prop) { return allowedProps.add(prop); });
            propSet = allowedProps;
        }
        // In strict mode, check also for unknown enumerable properties.
        return function (value, ctx) {
            if (!checker(value, ctx)) {
                return false;
            }
            for (var prop in value) {
                if (!propSet.has(prop)) {
                    return ctx.fail(prop, "is extraneous", 2);
                }
            }
            return true;
        };
    };
    return TIface;
}(TType));
exports.TIface = TIface;
/**
 * Defines an optional property on an interface.
 */
function opt(typeSpec) { return new TOptional(parseSpec(typeSpec)); }
exports.opt = opt;
var TOptional = /** @class */ (function (_super) {
    __extends(TOptional, _super);
    function TOptional(ttype) {
        var _this = _super.call(this) || this;
        _this.ttype = ttype;
        return _this;
    }
    TOptional.prototype.getChecker = function (suite, strict) {
        var itemChecker = this.ttype.getChecker(suite, strict);
        return function (value, ctx) {
            return value === undefined || itemChecker(value, ctx);
        };
    };
    return TOptional;
}(TType));
exports.TOptional = TOptional;
/**
 * Defines a property in an interface.
 */
var TProp = /** @class */ (function () {
    function TProp(name, ttype, isOpt) {
        this.name = name;
        this.ttype = ttype;
        this.isOpt = isOpt;
    }
    return TProp;
}());
exports.TProp = TProp;
/**
 * Defines a function. The first argument declares the function's return type, the rest declare
 * its parameters.
 */
function func(resultSpec) {
    var params = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        params[_i - 1] = arguments[_i];
    }
    return new TFunc(new TParamList(params), parseSpec(resultSpec));
}
exports.func = func;
var TFunc = /** @class */ (function (_super) {
    __extends(TFunc, _super);
    function TFunc(paramList, result) {
        var _this = _super.call(this) || this;
        _this.paramList = paramList;
        _this.result = result;
        return _this;
    }
    TFunc.prototype.getChecker = function (suite, strict) {
        return function (value, ctx) {
            return typeof value === "function" ? true : ctx.fail(null, "is not a function", 0);
        };
    };
    return TFunc;
}(TType));
exports.TFunc = TFunc;
/**
 * Defines a function parameter.
 */
function param(name, typeSpec, isOpt) {
    return new TParam(name, parseSpec(typeSpec), Boolean(isOpt));
}
exports.param = param;
var TParam = /** @class */ (function () {
    function TParam(name, ttype, isOpt) {
        this.name = name;
        this.ttype = ttype;
        this.isOpt = isOpt;
    }
    return TParam;
}());
exports.TParam = TParam;
/**
 * Defines a function parameter list.
 */
var TParamList = /** @class */ (function (_super) {
    __extends(TParamList, _super);
    function TParamList(params) {
        var _this = _super.call(this) || this;
        _this.params = params;
        return _this;
    }
    TParamList.prototype.getChecker = function (suite, strict) {
        var _this = this;
        var itemCheckers = this.params.map(function (t) { return t.ttype.getChecker(suite, strict); });
        var testCtx = new util_1.NoopContext();
        var isParamRequired = this.params.map(function (param, i) {
            return !param.isOpt && !itemCheckers[i](undefined, testCtx);
        });
        var checker = function (value, ctx) {
            if (!Array.isArray(value)) {
                return ctx.fail(null, "is not an array", 0);
            }
            for (var i = 0; i < itemCheckers.length; i++) {
                var p = _this.params[i];
                if (value[i] === undefined) {
                    if (isParamRequired[i]) {
                        return ctx.fail(p.name, "is missing", 1);
                    }
                }
                else {
                    var ok = itemCheckers[i](value[i], ctx);
                    if (!ok) {
                        return ctx.fail(p.name, null, 1);
                    }
                }
            }
            return true;
        };
        if (!strict) {
            return checker;
        }
        return function (value, ctx) {
            if (!checker(value, ctx)) {
                return false;
            }
            return value.length <= itemCheckers.length ? true :
                ctx.fail(itemCheckers.length, "is extraneous", 2);
        };
    };
    return TParamList;
}(TType));
exports.TParamList = TParamList;
/**
 * Single TType implementation for all basic built-in types.
 */
var BasicType = /** @class */ (function (_super) {
    __extends(BasicType, _super);
    function BasicType(validator, message) {
        var _this = _super.call(this) || this;
        _this.validator = validator;
        _this.message = message;
        return _this;
    }
    BasicType.prototype.getChecker = function (suite, strict) {
        var _this = this;
        return function (value, ctx) { return _this.validator(value) ? true : ctx.fail(null, _this.message, 0); };
    };
    return BasicType;
}(TType));
exports.BasicType = BasicType;
/**
 * Defines the suite of basic types.
 */
exports.basicTypes = {
    any: new BasicType(function (v) { return true; }, "is invalid"),
    number: new BasicType(function (v) { return (typeof v === "number"); }, "is not a number"),
    object: new BasicType(function (v) { return (typeof v === "object" && v); }, "is not an object"),
    boolean: new BasicType(function (v) { return (typeof v === "boolean"); }, "is not a boolean"),
    string: new BasicType(function (v) { return (typeof v === "string"); }, "is not a string"),
    symbol: new BasicType(function (v) { return (typeof v === "symbol"); }, "is not a symbol"),
    void: new BasicType(function (v) { return (v == null); }, "is not void"),
    undefined: new BasicType(function (v) { return (v === undefined); }, "is not undefined"),
    null: new BasicType(function (v) { return (v === null); }, "is not null"),
    never: new BasicType(function (v) { return false; }, "is unexpected"),
    Date: new BasicType(getIsNativeChecker("[object Date]"), "is not a Date"),
    RegExp: new BasicType(getIsNativeChecker("[object RegExp]"), "is not a RegExp"),
};
// This approach for checking native object types mirrors that of lodash. Its advantage over
// `isinstance` is that it can still return true for native objects created in different JS
// execution environments.
var nativeToString = Object.prototype.toString;
function getIsNativeChecker(tag) {
    return function (v) { return typeof v === "object" && v && nativeToString.call(v) === tag; };
}
if (typeof Buffer !== "undefined") {
    exports.basicTypes.Buffer = new BasicType(function (v) { return Buffer.isBuffer(v); }, "is not a Buffer");
}
var _loop_1 = function (array_1) {
    exports.basicTypes[array_1.name] = new BasicType(function (v) { return (v instanceof array_1); }, "is not a " + array_1.name);
};
// Support typed arrays of various flavors
for (var _i = 0, _a = [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array,
    Int32Array, Uint32Array, Float32Array, Float64Array, ArrayBuffer]; _i < _a.length; _i++) {
    var array_1 = _a[_i];
    _loop_1(array_1);
}


/***/ }),

/***/ 31977:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DetailContext = exports.NoopContext = exports.VError = void 0;
/**
 * Error thrown by validation. Besides an informative message, it includes the path to the
 * property which triggered the failure.
 */
var VError = /** @class */ (function (_super) {
    __extends(VError, _super);
    function VError(path, message) {
        var _this = _super.call(this, message) || this;
        _this.path = path;
        // See https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work for info about this workaround.
        Object.setPrototypeOf(_this, VError.prototype);
        return _this;
    }
    return VError;
}(Error));
exports.VError = VError;
/**
 * Fast implementation of IContext used for first-pass validation. If that fails, we can validate
 * using DetailContext to collect error messages. That's faster for the common case when messages
 * normally pass validation.
 */
var NoopContext = /** @class */ (function () {
    function NoopContext() {
    }
    NoopContext.prototype.fail = function (relPath, message, score) {
        return false;
    };
    NoopContext.prototype.unionResolver = function () { return this; };
    NoopContext.prototype.createContext = function () { return this; };
    NoopContext.prototype.resolveUnion = function (ur) { };
    return NoopContext;
}());
exports.NoopContext = NoopContext;
/**
 * Complete implementation of IContext that collects meaningfull errors.
 */
var DetailContext = /** @class */ (function () {
    function DetailContext() {
        // Stack of property names and associated messages for reporting helpful error messages.
        this._propNames = [""];
        this._messages = [null];
        // Score is used to choose the best union member whose DetailContext to use for reporting.
        // Higher score means better match (or rather less severe mismatch).
        this._score = 0;
    }
    DetailContext.prototype.fail = function (relPath, message, score) {
        this._propNames.push(relPath);
        this._messages.push(message);
        this._score += score;
        return false;
    };
    DetailContext.prototype.unionResolver = function () {
        return new DetailUnionResolver();
    };
    DetailContext.prototype.resolveUnion = function (unionResolver) {
        var _a, _b;
        var u = unionResolver;
        var best = null;
        for (var _i = 0, _c = u.contexts; _i < _c.length; _i++) {
            var ctx = _c[_i];
            if (!best || ctx._score >= best._score) {
                best = ctx;
            }
        }
        if (best && best._score > 0) {
            (_a = this._propNames).push.apply(_a, best._propNames);
            (_b = this._messages).push.apply(_b, best._messages);
        }
    };
    DetailContext.prototype.getError = function (path) {
        var msgParts = [];
        for (var i = this._propNames.length - 1; i >= 0; i--) {
            var p = this._propNames[i];
            path += (typeof p === "number") ? "[" + p + "]" : (p ? "." + p : "");
            var m = this._messages[i];
            if (m) {
                msgParts.push(path + " " + m);
            }
        }
        return new VError(path, msgParts.join("; "));
    };
    DetailContext.prototype.getErrorDetail = function (path) {
        var details = [];
        for (var i = this._propNames.length - 1; i >= 0; i--) {
            var p = this._propNames[i];
            path += (typeof p === "number") ? "[" + p + "]" : (p ? "." + p : "");
            var message = this._messages[i];
            if (message) {
                details.push({ path: path, message: message });
            }
        }
        var detail = null;
        for (var i = details.length - 1; i >= 0; i--) {
            if (detail) {
                details[i].nested = [detail];
            }
            detail = details[i];
        }
        return detail;
    };
    return DetailContext;
}());
exports.DetailContext = DetailContext;
var DetailUnionResolver = /** @class */ (function () {
    function DetailUnionResolver() {
        this.contexts = [];
    }
    DetailUnionResolver.prototype.createContext = function () {
        var ctx = new DetailContext();
        this.contexts.push(ctx);
        return ctx;
    };
    return DetailUnionResolver;
}());


/***/ }),

/***/ 80137:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ $488c6ddbf4ef74c2$export$cc77c4ff7e8673c5)
/* harmony export */ });
/* unused harmony export numberFormatSignDisplayPolyfill */
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ let $488c6ddbf4ef74c2$var$formatterCache = new Map();
let $488c6ddbf4ef74c2$var$supportsSignDisplay = false;
try {
    $488c6ddbf4ef74c2$var$supportsSignDisplay = new Intl.NumberFormat('de-DE', {
        signDisplay: 'exceptZero'
    }).resolvedOptions().signDisplay === 'exceptZero';
// eslint-disable-next-line no-empty
} catch  {}
let $488c6ddbf4ef74c2$var$supportsUnit = false;
try {
    $488c6ddbf4ef74c2$var$supportsUnit = new Intl.NumberFormat('de-DE', {
        style: 'unit',
        unit: 'degree'
    }).resolvedOptions().style === 'unit';
// eslint-disable-next-line no-empty
} catch  {}
// Polyfill for units since Safari doesn't support them yet. See https://bugs.webkit.org/show_bug.cgi?id=215438.
// Currently only polyfilling the unit degree in narrow format for ColorSlider in our supported locales.
// Values were determined by switching to each locale manually in Chrome.
const $488c6ddbf4ef74c2$var$UNITS = {
    degree: {
        narrow: {
            default: "\xb0",
            'ja-JP': " \u5EA6",
            'zh-TW': "\u5EA6",
            'sl-SI': " \xb0"
        }
    }
};
class $488c6ddbf4ef74c2$export$cc77c4ff7e8673c5 {
    /** Formats a number value as a string, according to the locale and options provided to the constructor. */ format(value) {
        let res = '';
        if (!$488c6ddbf4ef74c2$var$supportsSignDisplay && this.options.signDisplay != null) res = $488c6ddbf4ef74c2$export$711b50b3c525e0f2(this.numberFormatter, this.options.signDisplay, value);
        else res = this.numberFormatter.format(value);
        if (this.options.style === 'unit' && !$488c6ddbf4ef74c2$var$supportsUnit) {
            var _UNITS_unit;
            let { unit: unit, unitDisplay: unitDisplay = 'short', locale: locale } = this.resolvedOptions();
            if (!unit) return res;
            let values = (_UNITS_unit = $488c6ddbf4ef74c2$var$UNITS[unit]) === null || _UNITS_unit === void 0 ? void 0 : _UNITS_unit[unitDisplay];
            res += values[locale] || values.default;
        }
        return res;
    }
    /** Formats a number to an array of parts such as separators, digits, punctuation, and more. */ formatToParts(value) {
        // TODO: implement signDisplay for formatToParts
        return this.numberFormatter.formatToParts(value);
    }
    /** Formats a number range as a string. */ formatRange(start, end) {
        if (typeof this.numberFormatter.formatRange === 'function') return this.numberFormatter.formatRange(start, end);
        if (end < start) throw new RangeError('End date must be >= start date');
        // Very basic fallback for old browsers.
        return `${this.format(start)} \u{2013} ${this.format(end)}`;
    }
    /** Formats a number range as an array of parts. */ formatRangeToParts(start, end) {
        if (typeof this.numberFormatter.formatRangeToParts === 'function') return this.numberFormatter.formatRangeToParts(start, end);
        if (end < start) throw new RangeError('End date must be >= start date');
        let startParts = this.numberFormatter.formatToParts(start);
        let endParts = this.numberFormatter.formatToParts(end);
        return [
            ...startParts.map((p)=>({
                    ...p,
                    source: 'startRange'
                })),
            {
                type: 'literal',
                value: " \u2013 ",
                source: 'shared'
            },
            ...endParts.map((p)=>({
                    ...p,
                    source: 'endRange'
                }))
        ];
    }
    /** Returns the resolved formatting options based on the values passed to the constructor. */ resolvedOptions() {
        let options = this.numberFormatter.resolvedOptions();
        if (!$488c6ddbf4ef74c2$var$supportsSignDisplay && this.options.signDisplay != null) options = {
            ...options,
            signDisplay: this.options.signDisplay
        };
        if (!$488c6ddbf4ef74c2$var$supportsUnit && this.options.style === 'unit') options = {
            ...options,
            style: 'unit',
            unit: this.options.unit,
            unitDisplay: this.options.unitDisplay
        };
        return options;
    }
    constructor(locale, options = {}){
        this.numberFormatter = $488c6ddbf4ef74c2$var$getCachedNumberFormatter(locale, options);
        this.options = options;
    }
}
function $488c6ddbf4ef74c2$var$getCachedNumberFormatter(locale, options = {}) {
    let { numberingSystem: numberingSystem } = options;
    if (numberingSystem && locale.includes('-nu-')) {
        if (!locale.includes('-u-')) locale += '-u-';
        locale += `-nu-${numberingSystem}`;
    }
    if (options.style === 'unit' && !$488c6ddbf4ef74c2$var$supportsUnit) {
        var _UNITS_unit;
        let { unit: unit, unitDisplay: unitDisplay = 'short' } = options;
        if (!unit) throw new Error('unit option must be provided with style: "unit"');
        if (!((_UNITS_unit = $488c6ddbf4ef74c2$var$UNITS[unit]) === null || _UNITS_unit === void 0 ? void 0 : _UNITS_unit[unitDisplay])) throw new Error(`Unsupported unit ${unit} with unitDisplay = ${unitDisplay}`);
        options = {
            ...options,
            style: 'decimal'
        };
    }
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1).join() : '');
    if ($488c6ddbf4ef74c2$var$formatterCache.has(cacheKey)) return $488c6ddbf4ef74c2$var$formatterCache.get(cacheKey);
    let numberFormatter = new Intl.NumberFormat(locale, options);
    $488c6ddbf4ef74c2$var$formatterCache.set(cacheKey, numberFormatter);
    return numberFormatter;
}
function $488c6ddbf4ef74c2$export$711b50b3c525e0f2(numberFormat, signDisplay, num) {
    if (signDisplay === 'auto') return numberFormat.format(num);
    else if (signDisplay === 'never') return numberFormat.format(Math.abs(num));
    else {
        let needsPositiveSign = false;
        if (signDisplay === 'always') needsPositiveSign = num > 0 || Object.is(num, 0);
        else if (signDisplay === 'exceptZero') {
            if (Object.is(num, -0) || Object.is(num, 0)) num = Math.abs(num);
            else needsPositiveSign = num > 0;
        }
        if (needsPositiveSign) {
            let negative = numberFormat.format(-num);
            let noSign = numberFormat.format(num);
            // ignore RTL/LTR marker character
            let minus = negative.replace(noSign, '').replace(/\u200e|\u061C/, '');
            if ([
                ...minus
            ].length !== 1) console.warn('@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case');
            let positive = negative.replace(noSign, '!!!').replace(minus, '+').replace('!!!', noSign);
            return positive;
        } else return numberFormat.format(num);
    }
}



//# sourceMappingURL=NumberFormatter.module.js.map


/***/ }),

/***/ 28453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }),

/***/ 69229:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ $701a24aa0da5b062$export$ea18c227d4417cc3)
/* harmony export */ });
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32217);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5987);
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35044);
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28940);



/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $701a24aa0da5b062$export$ea18c227d4417cc3(props, ref) {
    let { elementType: elementType = 'button', isDisabled: isDisabled, onPress: onPress, onPressStart: onPressStart, onPressEnd: onPressEnd, onPressUp: onPressUp, onPressChange: onPressChange, preventFocusOnPress: preventFocusOnPress, allowFocusWhenDisabled: // @ts-ignore - undocumented
    allowFocusWhenDisabled, // @ts-ignore
    onClick: deprecatedOnClick, href: href, target: target, rel: rel, type: type = 'button' } = props;
    let additionalProps;
    if (elementType === 'button') additionalProps = {
        type: type,
        disabled: isDisabled
    };
    else additionalProps = {
        role: 'button',
        href: elementType === 'a' && !isDisabled ? href : undefined,
        target: elementType === 'a' ? target : undefined,
        type: elementType === 'input' ? type : undefined,
        disabled: elementType === 'input' ? isDisabled : undefined,
        'aria-disabled': !isDisabled || elementType === 'input' ? undefined : isDisabled,
        rel: elementType === 'a' ? rel : undefined
    };
    let { pressProps: pressProps, isPressed: isPressed } = (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_0__/* .usePress */ .d)({
        onPressStart: onPressStart,
        onPressEnd: onPressEnd,
        onPressChange: onPressChange,
        onPress: onPress,
        onPressUp: onPressUp,
        isDisabled: isDisabled,
        preventFocusOnPress: preventFocusOnPress,
        ref: ref
    });
    let { focusableProps: focusableProps } = (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_1__/* .useFocusable */ .Wc)(props, ref);
    if (allowFocusWhenDisabled) focusableProps.tabIndex = isDisabled ? -1 : focusableProps.tabIndex;
    let buttonProps = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .mergeProps */ .v)(focusableProps, pressProps, (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__/* .filterDOMProps */ .$)(props, {
        labelable: true
    }));
    return {
        isPressed: isPressed,
        buttonProps: (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .mergeProps */ .v)(additionalProps, buttonProps, {
            'aria-haspopup': props['aria-haspopup'],
            'aria-expanded': props['aria-expanded'],
            'aria-controls': props['aria-controls'],
            'aria-pressed': props['aria-pressed'],
            'aria-current': props['aria-current'],
            onClick: (e)=>{
                if (deprecatedOnClick) {
                    deprecatedOnClick(e);
                    console.warn('onClick is deprecated, please use onPress');
                }
            }
        })
    };
}



//# sourceMappingURL=useButton.module.js.map


/***/ }),

/***/ 75127:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U7: () => (/* binding */ $f39a9eba43920ace$export$86427a43e3e48ebb),
/* harmony export */   jZ: () => (/* binding */ $f39a9eba43920ace$export$8dc98ba7eadeaa56),
/* harmony export */   m_: () => (/* binding */ $f39a9eba43920ace$export$b5d7cc18bb8d2b59)
/* harmony export */ });
/* unused harmony export HiddenContext */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);


/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
// React doesn't understand the <template> element, which doesn't have children like a normal element.
// It will throw an error during hydration when it expects the firstChild to contain content rendered
// on the server, when in reality, the browser will have placed this inside the `content` document fragment.
// This monkey patches the firstChild property for our special hidden template elements to work around this error.
// See https://github.com/facebook/react/issues/19932
if (typeof HTMLTemplateElement !== 'undefined') {
    const getFirstChild = Object.getOwnPropertyDescriptor(Node.prototype, 'firstChild').get;
    Object.defineProperty(HTMLTemplateElement.prototype, 'firstChild', {
        configurable: true,
        enumerable: true,
        get: function() {
            if (this.dataset.reactAriaHidden) return this.content.firstChild;
            else return getFirstChild.call(this);
        }
    });
}
const $f39a9eba43920ace$export$94b6d0abf7d33e8c = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)(false);
function $f39a9eba43920ace$export$8dc98ba7eadeaa56(props) {
    let isHidden = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($f39a9eba43920ace$export$94b6d0abf7d33e8c);
    if (isHidden) // Don't hide again if we are already hidden.
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement((0, react__WEBPACK_IMPORTED_MODULE_0__).Fragment, null, props.children);
    let children = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement($f39a9eba43920ace$export$94b6d0abf7d33e8c.Provider, {
        value: true
    }, props.children);
    // In SSR, portals are not supported by React. Instead, always render into a <template>
    // element, which the browser will never display to the user. In addition, the
    // content is not part of the accessible DOM tree, so it won't affect ids or other accessibility attributes.
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement("template", {
        "data-react-aria-hidden": true
    }, children);
}
function $f39a9eba43920ace$export$86427a43e3e48ebb(fn) {
    let Wrapper = (props, ref)=>{
        let isHidden = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($f39a9eba43920ace$export$94b6d0abf7d33e8c);
        if (isHidden) return null;
        return fn(props, ref);
    };
    // @ts-ignore - for react dev tools
    Wrapper.displayName = fn.displayName || fn.name;
    return (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Wrapper);
}
function $f39a9eba43920ace$export$b5d7cc18bb8d2b59() {
    return (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($f39a9eba43920ace$export$94b6d0abf7d33e8c);
}



//# sourceMappingURL=Hidden.module.js.map


/***/ }),

/***/ 16133:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ $f7dceffc5ad7768b$export$4e328f61c538687f)
/* harmony export */ });
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95562);
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33424);
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59461);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);





function $f7dceffc5ad7768b$export$4e328f61c538687f(props = {}) {
    let { autoFocus: autoFocus = false, isTextInput: isTextInput, within: within } = props;
    let state = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        isFocused: false,
        isFocusVisible: autoFocus || (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_1__/* .isFocusVisible */ .pP)()
    });
    let [isFocused, setFocused] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    let [isFocusVisibleState, setFocusVisible] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>state.current.isFocused && state.current.isFocusVisible);
    let updateState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>setFocusVisible(state.current.isFocused && state.current.isFocusVisible), []);
    let onFocusChange = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((isFocused)=>{
        state.current.isFocused = isFocused;
        setFocused(isFocused);
        updateState();
    }, [
        updateState
    ]);
    (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_1__/* .useFocusVisibleListener */ .K7)((isFocusVisible)=>{
        state.current.isFocusVisible = isFocusVisible;
        updateState();
    }, [], {
        isTextInput: isTextInput
    });
    let { focusProps: focusProps } = (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__/* .useFocus */ .i)({
        isDisabled: within,
        onFocusChange: onFocusChange
    });
    let { focusWithinProps: focusWithinProps } = (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_3__/* .useFocusWithin */ .R)({
        isDisabled: !within,
        onFocusWithinChange: onFocusChange
    });
    return {
        isFocused: isFocused,
        isFocusVisible: isFocusVisibleState,
        focusProps: within ? focusWithinProps : focusProps
    };
}



//# sourceMappingURL=useFocusRing.module.js.map


/***/ }),

/***/ 39892:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  C: () => (/* binding */ $18f2051aff69b9bf$export$a54013f0d02a8f82),
  Y: () => (/* binding */ $18f2051aff69b9bf$export$43bb16f9c6d9e3f7)
});

;// ./node_modules/@react-aria/i18n/dist/utils.mjs
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // https://en.wikipedia.org/wiki/Right-to-left
const $148a7a147e38ea7f$var$RTL_SCRIPTS = new Set([
    'Arab',
    'Syrc',
    'Samr',
    'Mand',
    'Thaa',
    'Mend',
    'Nkoo',
    'Adlm',
    'Rohg',
    'Hebr'
]);
const $148a7a147e38ea7f$var$RTL_LANGS = new Set([
    'ae',
    'ar',
    'arc',
    'bcc',
    'bqi',
    'ckb',
    'dv',
    'fa',
    'glk',
    'he',
    'ku',
    'mzn',
    'nqo',
    'pnb',
    'ps',
    'sd',
    'ug',
    'ur',
    'yi'
]);
function $148a7a147e38ea7f$export$702d680b21cbd764(localeString) {
    // If the Intl.Locale API is available, use it to get the locale's text direction.
    if (Intl.Locale) {
        let locale = new Intl.Locale(localeString).maximize();
        // Use the text info object to get the direction if possible.
        // @ts-ignore - this was implemented as a property by some browsers before it was standardized as a function.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getTextInfo
        let textInfo = typeof locale.getTextInfo === 'function' ? locale.getTextInfo() : locale.textInfo;
        if (textInfo) return textInfo.direction === 'rtl';
        // Fallback: guess using the script.
        // This is more accurate than guessing by language, since languages can be written in multiple scripts.
        if (locale.script) return $148a7a147e38ea7f$var$RTL_SCRIPTS.has(locale.script);
    }
    // If not, just guess by the language (first part of the locale)
    let lang = localeString.split('-')[0];
    return $148a7a147e38ea7f$var$RTL_LANGS.has(lang);
}



//# sourceMappingURL=utils.module.js.map

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@react-aria/ssr/dist/SSRProvider.mjs
var SSRProvider = __webpack_require__(60415);
;// ./node_modules/@react-aria/i18n/dist/useDefaultLocale.mjs




/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


// Locale passed from server by PackageLocalizationProvider.
const $1e5a04cdaf7d1af8$var$localeSymbol = Symbol.for('react-aria.i18n.locale');
function $1e5a04cdaf7d1af8$export$f09106e7c6677ec5() {
    let locale = typeof window !== 'undefined' && window[$1e5a04cdaf7d1af8$var$localeSymbol] || typeof navigator !== 'undefined' && (navigator.language || navigator.userLanguage) || 'en-US';
    try {
        Intl.DateTimeFormat.supportedLocalesOf([
            locale
        ]);
    } catch  {
        locale = 'en-US';
    }
    return {
        locale: locale,
        direction: (0, $148a7a147e38ea7f$export$702d680b21cbd764)(locale) ? 'rtl' : 'ltr'
    };
}
let $1e5a04cdaf7d1af8$var$currentLocale = $1e5a04cdaf7d1af8$export$f09106e7c6677ec5();
let $1e5a04cdaf7d1af8$var$listeners = new Set();
function $1e5a04cdaf7d1af8$var$updateLocale() {
    $1e5a04cdaf7d1af8$var$currentLocale = $1e5a04cdaf7d1af8$export$f09106e7c6677ec5();
    for (let listener of $1e5a04cdaf7d1af8$var$listeners)listener($1e5a04cdaf7d1af8$var$currentLocale);
}
function $1e5a04cdaf7d1af8$export$188ec29ebc2bdc3a() {
    let isSSR = (0, SSRProvider/* useIsSSR */.wR)();
    let [defaultLocale, setDefaultLocale] = (0, react.useState)($1e5a04cdaf7d1af8$var$currentLocale);
    (0, react.useEffect)(()=>{
        if ($1e5a04cdaf7d1af8$var$listeners.size === 0) window.addEventListener('languagechange', $1e5a04cdaf7d1af8$var$updateLocale);
        $1e5a04cdaf7d1af8$var$listeners.add(setDefaultLocale);
        return ()=>{
            $1e5a04cdaf7d1af8$var$listeners.delete(setDefaultLocale);
            if ($1e5a04cdaf7d1af8$var$listeners.size === 0) window.removeEventListener('languagechange', $1e5a04cdaf7d1af8$var$updateLocale);
        };
    }, []);
    // We cannot determine the browser's language on the server, so default to
    // en-US. This will be updated after hydration on the client to the correct value.
    if (isSSR) return {
        locale: 'en-US',
        direction: 'ltr'
    };
    return defaultLocale;
}



//# sourceMappingURL=useDefaultLocale.module.js.map

;// ./node_modules/@react-aria/i18n/dist/context.mjs




/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


const $18f2051aff69b9bf$var$I18nContext = /*#__PURE__*/ (0, react).createContext(null);
function $18f2051aff69b9bf$export$a54013f0d02a8f82(props) {
    let { locale: locale, children: children } = props;
    let defaultLocale = (0, $1e5a04cdaf7d1af8$export$188ec29ebc2bdc3a)();
    let value = (0, react).useMemo(()=>{
        if (!locale) return defaultLocale;
        return {
            locale: locale,
            direction: (0, $148a7a147e38ea7f$export$702d680b21cbd764)(locale) ? 'rtl' : 'ltr'
        };
    }, [
        defaultLocale,
        locale
    ]);
    return /*#__PURE__*/ (0, react).createElement($18f2051aff69b9bf$var$I18nContext.Provider, {
        value: value
    }, children);
}
function $18f2051aff69b9bf$export$43bb16f9c6d9e3f7() {
    let defaultLocale = (0, $1e5a04cdaf7d1af8$export$188ec29ebc2bdc3a)();
    let context = (0, react.useContext)($18f2051aff69b9bf$var$I18nContext);
    return context || defaultLocale;
}



//# sourceMappingURL=context.module.js.map


/***/ }),

/***/ 48084:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ $ae1eeba8b9eafd08$export$5165eccb35aaadb5)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
const $ae1eeba8b9eafd08$export$5165eccb35aaadb5 = (0, react__WEBPACK_IMPORTED_MODULE_0__).createContext({
    register: ()=>{}
});
$ae1eeba8b9eafd08$export$5165eccb35aaadb5.displayName = 'PressResponderContext';



//# sourceMappingURL=context.module.js.map


/***/ }),

/***/ 4175:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ $3ad3f6e1647bc98d$export$80f3e147d781571c)
/* harmony export */ });
/* harmony import */ var _useFocusVisible_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95562);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24836);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99672);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47233);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32268);



/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $3ad3f6e1647bc98d$export$80f3e147d781571c(element) {
    // If the user is interacting with a virtual cursor, e.g. screen reader, then
    // wait until after any animated transitions that are currently occurring on
    // the page before shifting focus. This avoids issues with VoiceOver on iOS
    // causing the page to scroll when moving focus if the element is transitioning
    // from off the screen.
    const ownerDocument = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__/* .getOwnerDocument */ .TW)(element);
    const activeElement = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .getActiveElement */ .bq)(ownerDocument);
    if ((0, _useFocusVisible_mjs__WEBPACK_IMPORTED_MODULE_2__/* .getInteractionModality */ .ME)() === 'virtual') {
        let lastFocusedElement = activeElement;
        (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__/* .runAfterTransition */ .v)(()=>{
            // If focus did not move and the element is still in the document, focus it.
            if ((0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .getActiveElement */ .bq)(ownerDocument) === lastFocusedElement && element.isConnected) (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__/* .focusWithoutScrolling */ .e)(element);
        });
    } else (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__/* .focusWithoutScrolling */ .e)(element);
}



//# sourceMappingURL=focusSafely.module.js.map


/***/ }),

/***/ 33424:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ $a1ea59d68270f0dd$export$f8168d8dd8fd66e6)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62894);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24836);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99672);




/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions



function $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props) {
    let { isDisabled: isDisabled, onFocus: onFocusProp, onBlur: onBlurProp, onFocusChange: onFocusChange } = props;
    const onBlur = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{
        if (e.target === e.currentTarget) {
            if (onBlurProp) onBlurProp(e);
            if (onFocusChange) onFocusChange(false);
            return true;
        }
    }, [
        onBlurProp,
        onFocusChange
    ]);
    const onSyntheticFocus = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useSyntheticBlurEvent */ .yB)(onBlur);
    const onFocus = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{
        // Double check that document.activeElement actually matches e.target in case a previously chained
        // focus handler already moved focus somewhere else.
        const ownerDocument = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .getOwnerDocument */ .TW)(e.target);
        const activeElement = ownerDocument ? (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__/* .getActiveElement */ .bq)(ownerDocument) : (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__/* .getActiveElement */ .bq)();
        if (e.target === e.currentTarget && activeElement === (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__/* .getEventTarget */ .wt)(e.nativeEvent)) {
            if (onFocusProp) onFocusProp(e);
            if (onFocusChange) onFocusChange(true);
            onSyntheticFocus(e);
        }
    }, [
        onFocusChange,
        onFocusProp,
        onSyntheticFocus
    ]);
    return {
        focusProps: {
            onFocus: !isDisabled && (onFocusProp || onFocusChange || onBlurProp) ? onFocus : undefined,
            onBlur: !isDisabled && (onBlurProp || onFocusChange) ? onBlur : undefined
        }
    };
}



//# sourceMappingURL=useFocus.module.js.map


/***/ }),

/***/ 95562:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cl: () => (/* binding */ $507fabe10e71c6fb$export$8397ddfc504fdb9a),
/* harmony export */   K7: () => (/* binding */ $507fabe10e71c6fb$export$ec71b4b83ac08ec3),
/* harmony export */   ME: () => (/* binding */ $507fabe10e71c6fb$export$630ff653c5ada6a9),
/* harmony export */   lb: () => (/* binding */ $507fabe10e71c6fb$export$98e20ec92f614cfe),
/* harmony export */   pP: () => (/* binding */ $507fabe10e71c6fb$export$b9b3dfddab17db27)
/* harmony export */ });
/* unused harmony exports hasSetupGlobalListeners, addWindowFocusTracking, useFocusVisible */
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62894);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69202);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28948);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24836);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _react_aria_ssr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60415);





/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions




let $507fabe10e71c6fb$var$currentModality = null;
let $507fabe10e71c6fb$var$changeHandlers = new Set();
let $507fabe10e71c6fb$export$d90243b58daecda7 = new Map(); // We use a map here to support setting event listeners across multiple document objects.
let $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
let $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
// Only Tab or Esc keys will make focus visible on text input elements
const $507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS = {
    Tab: true,
    Escape: true
};
function $507fabe10e71c6fb$var$triggerChangeHandlers(modality, e) {
    for (let handler of $507fabe10e71c6fb$var$changeHandlers)handler(modality, e);
}
/**
 * Helper function to determine if a KeyboardEvent is unmodified and could make keyboard focus styles visible.
 */ function $507fabe10e71c6fb$var$isValidKey(e) {
    // Control and Shift keys trigger when navigating back to the tab with keyboard.
    return !(e.metaKey || !(0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .isMac */ .cX)() && e.altKey || e.ctrlKey || e.key === 'Control' || e.key === 'Shift' || e.key === 'Meta');
}
function $507fabe10e71c6fb$var$handleKeyboardEvent(e) {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    if ($507fabe10e71c6fb$var$isValidKey(e)) {
        $507fabe10e71c6fb$var$currentModality = 'keyboard';
        $507fabe10e71c6fb$var$triggerChangeHandlers('keyboard', e);
    }
}
function $507fabe10e71c6fb$var$handlePointerEvent(e) {
    $507fabe10e71c6fb$var$currentModality = 'pointer';
    if (e.type === 'mousedown' || e.type === 'pointerdown') {
        $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
        $507fabe10e71c6fb$var$triggerChangeHandlers('pointer', e);
    }
}
function $507fabe10e71c6fb$var$handleClickEvent(e) {
    if ((0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .isVirtualClick */ .Y)(e)) {
        $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
        $507fabe10e71c6fb$var$currentModality = 'virtual';
    }
}
function $507fabe10e71c6fb$var$handleFocusEvent(e) {
    // Firefox fires two extra focus events when the user first clicks into an iframe:
    // first on the window, then on the document. We ignore these events so they don't
    // cause keyboard focus rings to appear.
    if (e.target === window || e.target === document || (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_3__/* .ignoreFocusEvent */ .lR) || !e.isTrusted) return;
    // If a focus event occurs without a preceding keyboard or pointer event, switch to virtual modality.
    // This occurs, for example, when navigating a form with the next/previous buttons on iOS.
    if (!$507fabe10e71c6fb$var$hasEventBeforeFocus && !$507fabe10e71c6fb$var$hasBlurredWindowRecently) {
        $507fabe10e71c6fb$var$currentModality = 'virtual';
        $507fabe10e71c6fb$var$triggerChangeHandlers('virtual', e);
    }
    $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
    $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
}
function $507fabe10e71c6fb$var$handleWindowBlur() {
    if (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_3__/* .ignoreFocusEvent */ .lR) return;
    // When the window is blurred, reset state. This is necessary when tabbing out of the window,
    // for example, since a subsequent focus event won't be fired.
    $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
    $507fabe10e71c6fb$var$hasBlurredWindowRecently = true;
}
/**
 * Setup global event listeners to control when keyboard focus style should be visible.
 */ function $507fabe10e71c6fb$var$setupGlobalFocusEvents(element) {
    if (typeof window === 'undefined' || $507fabe10e71c6fb$export$d90243b58daecda7.get((0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__/* .getOwnerWindow */ .mD)(element))) return;
    const windowObject = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__/* .getOwnerWindow */ .mD)(element);
    const documentObject = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__/* .getOwnerDocument */ .TW)(element);
    // Programmatic focus() calls shouldn't affect the current input modality.
    // However, we need to detect other cases when a focus event occurs without
    // a preceding user event (e.g. screen reader focus). Overriding the focus
    // method on HTMLElement.prototype is a bit hacky, but works.
    let focus = windowObject.HTMLElement.prototype.focus;
    windowObject.HTMLElement.prototype.focus = function() {
        $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
        focus.apply(this, arguments);
    };
    documentObject.addEventListener('keydown', $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    documentObject.addEventListener('keyup', $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    documentObject.addEventListener('click', $507fabe10e71c6fb$var$handleClickEvent, true);
    // Register focus events on the window so they are sure to happen
    // before React's event listeners (registered on the document).
    windowObject.addEventListener('focus', $507fabe10e71c6fb$var$handleFocusEvent, true);
    windowObject.addEventListener('blur', $507fabe10e71c6fb$var$handleWindowBlur, false);
    if (typeof PointerEvent !== 'undefined') {
        documentObject.addEventListener('pointerdown', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.addEventListener('pointermove', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.addEventListener('pointerup', $507fabe10e71c6fb$var$handlePointerEvent, true);
    } else {
        documentObject.addEventListener('mousedown', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.addEventListener('mousemove', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.addEventListener('mouseup', $507fabe10e71c6fb$var$handlePointerEvent, true);
    }
    // Add unmount handler
    windowObject.addEventListener('beforeunload', ()=>{
        $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element);
    }, {
        once: true
    });
    $507fabe10e71c6fb$export$d90243b58daecda7.set(windowObject, {
        focus: focus
    });
}
const $507fabe10e71c6fb$var$tearDownWindowFocusTracking = (element, loadListener)=>{
    const windowObject = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__/* .getOwnerWindow */ .mD)(element);
    const documentObject = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__/* .getOwnerDocument */ .TW)(element);
    if (loadListener) documentObject.removeEventListener('DOMContentLoaded', loadListener);
    if (!$507fabe10e71c6fb$export$d90243b58daecda7.has(windowObject)) return;
    windowObject.HTMLElement.prototype.focus = $507fabe10e71c6fb$export$d90243b58daecda7.get(windowObject).focus;
    documentObject.removeEventListener('keydown', $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    documentObject.removeEventListener('keyup', $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    documentObject.removeEventListener('click', $507fabe10e71c6fb$var$handleClickEvent, true);
    windowObject.removeEventListener('focus', $507fabe10e71c6fb$var$handleFocusEvent, true);
    windowObject.removeEventListener('blur', $507fabe10e71c6fb$var$handleWindowBlur, false);
    if (typeof PointerEvent !== 'undefined') {
        documentObject.removeEventListener('pointerdown', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.removeEventListener('pointermove', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.removeEventListener('pointerup', $507fabe10e71c6fb$var$handlePointerEvent, true);
    } else {
        documentObject.removeEventListener('mousedown', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.removeEventListener('mousemove', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.removeEventListener('mouseup', $507fabe10e71c6fb$var$handlePointerEvent, true);
    }
    $507fabe10e71c6fb$export$d90243b58daecda7.delete(windowObject);
};
function $507fabe10e71c6fb$export$2f1888112f558a7d(element) {
    const documentObject = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__/* .getOwnerDocument */ .TW)(element);
    let loadListener;
    if (documentObject.readyState !== 'loading') $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
    else {
        loadListener = ()=>{
            $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
        };
        documentObject.addEventListener('DOMContentLoaded', loadListener);
    }
    return ()=>$507fabe10e71c6fb$var$tearDownWindowFocusTracking(element, loadListener);
}
// Server-side rendering does not have the document object defined
// eslint-disable-next-line no-restricted-globals
if (typeof document !== 'undefined') $507fabe10e71c6fb$export$2f1888112f558a7d();
function $507fabe10e71c6fb$export$b9b3dfddab17db27() {
    return $507fabe10e71c6fb$var$currentModality !== 'pointer';
}
function $507fabe10e71c6fb$export$630ff653c5ada6a9() {
    return $507fabe10e71c6fb$var$currentModality;
}
function $507fabe10e71c6fb$export$8397ddfc504fdb9a(modality) {
    $507fabe10e71c6fb$var$currentModality = modality;
    $507fabe10e71c6fb$var$triggerChangeHandlers(modality, null);
}
function $507fabe10e71c6fb$export$98e20ec92f614cfe() {
    $507fabe10e71c6fb$var$setupGlobalFocusEvents();
    let [modality, setModality] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)($507fabe10e71c6fb$var$currentModality);
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let handler = ()=>{
            setModality($507fabe10e71c6fb$var$currentModality);
        };
        $507fabe10e71c6fb$var$changeHandlers.add(handler);
        return ()=>{
            $507fabe10e71c6fb$var$changeHandlers.delete(handler);
        };
    }, []);
    return (0, _react_aria_ssr__WEBPACK_IMPORTED_MODULE_5__/* .useIsSSR */ .wR)() ? null : modality;
}
const $507fabe10e71c6fb$var$nonTextInputTypes = new Set([
    'checkbox',
    'radio',
    'range',
    'color',
    'file',
    'image',
    'button',
    'submit',
    'reset'
]);
/**
 * If this is attached to text input component, return if the event is a focus event (Tab/Escape keys pressed) so that
 * focus visible style can be properly set.
 */ function $507fabe10e71c6fb$var$isKeyboardFocusEvent(isTextInput, modality, e) {
    let document1 = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__/* .getOwnerDocument */ .TW)(e === null || e === void 0 ? void 0 : e.target);
    const IHTMLInputElement = typeof window !== 'undefined' ? (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__/* .getOwnerWindow */ .mD)(e === null || e === void 0 ? void 0 : e.target).HTMLInputElement : HTMLInputElement;
    const IHTMLTextAreaElement = typeof window !== 'undefined' ? (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__/* .getOwnerWindow */ .mD)(e === null || e === void 0 ? void 0 : e.target).HTMLTextAreaElement : HTMLTextAreaElement;
    const IHTMLElement = typeof window !== 'undefined' ? (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__/* .getOwnerWindow */ .mD)(e === null || e === void 0 ? void 0 : e.target).HTMLElement : HTMLElement;
    const IKeyboardEvent = typeof window !== 'undefined' ? (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__/* .getOwnerWindow */ .mD)(e === null || e === void 0 ? void 0 : e.target).KeyboardEvent : KeyboardEvent;
    // For keyboard events that occur on a non-input element that will move focus into input element (aka ArrowLeft going from Datepicker button to the main input group)
    // we need to rely on the user passing isTextInput into here. This way we can skip toggling focus visiblity for said input element
    isTextInput = isTextInput || document1.activeElement instanceof IHTMLInputElement && !$507fabe10e71c6fb$var$nonTextInputTypes.has(document1.activeElement.type) || document1.activeElement instanceof IHTMLTextAreaElement || document1.activeElement instanceof IHTMLElement && document1.activeElement.isContentEditable;
    return !(isTextInput && modality === 'keyboard' && e instanceof IKeyboardEvent && !$507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS[e.key]);
}
function $507fabe10e71c6fb$export$ffd9e5021c1fb2d6(props = {}) {
    let { isTextInput: isTextInput, autoFocus: autoFocus } = props;
    let [isFocusVisibleState, setFocusVisible] = (0, $28AnR$useState)(autoFocus || $507fabe10e71c6fb$export$b9b3dfddab17db27());
    $507fabe10e71c6fb$export$ec71b4b83ac08ec3((isFocusVisible)=>{
        setFocusVisible(isFocusVisible);
    }, [
        isTextInput
    ], {
        isTextInput: isTextInput
    });
    return {
        isFocusVisible: isFocusVisibleState
    };
}
function $507fabe10e71c6fb$export$ec71b4b83ac08ec3(fn, deps, opts) {
    $507fabe10e71c6fb$var$setupGlobalFocusEvents();
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let handler = (modality, e)=>{
            // We want to early return for any keyboard events that occur inside text inputs EXCEPT for Tab and Escape
            if (!$507fabe10e71c6fb$var$isKeyboardFocusEvent(!!(opts === null || opts === void 0 ? void 0 : opts.isTextInput), modality, e)) return;
            fn($507fabe10e71c6fb$export$b9b3dfddab17db27());
        };
        $507fabe10e71c6fb$var$changeHandlers.add(handler);
        return ()=>{
            $507fabe10e71c6fb$var$changeHandlers.delete(handler);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}



//# sourceMappingURL=useFocusVisible.module.js.map


/***/ }),

/***/ 59461:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ $9ab94262bd0047c7$export$420e68273165f4ec)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62894);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76948);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24836);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99672);




/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions



function $9ab94262bd0047c7$export$420e68273165f4ec(props) {
    let { isDisabled: isDisabled, onBlurWithin: onBlurWithin, onFocusWithin: onFocusWithin, onFocusWithinChange: onFocusWithinChange } = props;
    let state = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        isFocusWithin: false
    });
    let { addGlobalListener: addGlobalListener, removeAllGlobalListeners: removeAllGlobalListeners } = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useGlobalListeners */ .A)();
    let onBlur = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{
        // Ignore events bubbling through portals.
        if (!e.currentTarget.contains(e.target)) return;
        // We don't want to trigger onBlurWithin and then immediately onFocusWithin again
        // when moving focus inside the element. Only trigger if the currentTarget doesn't
        // include the relatedTarget (where focus is moving).
        if (state.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget)) {
            state.current.isFocusWithin = false;
            removeAllGlobalListeners();
            if (onBlurWithin) onBlurWithin(e);
            if (onFocusWithinChange) onFocusWithinChange(false);
        }
    }, [
        onBlurWithin,
        onFocusWithinChange,
        state,
        removeAllGlobalListeners
    ]);
    let onSyntheticFocus = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useSyntheticBlurEvent */ .yB)(onBlur);
    let onFocus = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{
        // Ignore events bubbling through portals.
        if (!e.currentTarget.contains(e.target)) return;
        // Double check that document.activeElement actually matches e.target in case a previously chained
        // focus handler already moved focus somewhere else.
        const ownerDocument = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__/* .getOwnerDocument */ .TW)(e.target);
        const activeElement = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__/* .getActiveElement */ .bq)(ownerDocument);
        if (!state.current.isFocusWithin && activeElement === (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__/* .getEventTarget */ .wt)(e.nativeEvent)) {
            if (onFocusWithin) onFocusWithin(e);
            if (onFocusWithinChange) onFocusWithinChange(true);
            state.current.isFocusWithin = true;
            onSyntheticFocus(e);
            // Browsers don't fire blur events when elements are removed from the DOM.
            // However, if a focus event occurs outside the element we're tracking, we
            // can manually fire onBlur.
            let currentTarget = e.currentTarget;
            addGlobalListener(ownerDocument, 'focus', (e)=>{
                if (state.current.isFocusWithin && !(0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__/* .nodeContains */ .sD)(currentTarget, e.target)) {
                    let event = new (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .SyntheticFocusEvent */ .KU)('blur', new ownerDocument.defaultView.FocusEvent('blur', {
                        relatedTarget: e.target
                    }));
                    event.target = currentTarget;
                    event.currentTarget = currentTarget;
                    onBlur(event);
                }
            }, {
                capture: true
            });
        }
    }, [
        onFocusWithin,
        onFocusWithinChange,
        onSyntheticFocus,
        addGlobalListener,
        onBlur
    ]);
    if (isDisabled) return {
        focusWithinProps: {
            // These cannot be null, that would conflict in mergeProps
            onFocus: undefined,
            onBlur: undefined
        }
    };
    return {
        focusWithinProps: {
            onFocus: onFocus,
            onBlur: onBlur
        }
    };
}



//# sourceMappingURL=useFocusWithin.module.js.map


/***/ }),

/***/ 28940:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M2: () => (/* binding */ $f645667febf57a63$export$13f3202a3e5ddd5),
/* harmony export */   Wc: () => (/* binding */ $f645667febf57a63$export$4c014de7c8940b4c),
/* harmony export */   gY: () => (/* binding */ $f645667febf57a63$export$f9762fab77588ecb)
/* harmony export */ });
/* unused harmony export Focusable */
/* harmony import */ var _focusSafely_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4175);
/* harmony import */ var _useFocus_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33424);
/* harmony import */ var _useKeyboard_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63029);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6660);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83908);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32217);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);






/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 




let $f645667febf57a63$export$f9762fab77588ecb = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createContext(null);
function $f645667febf57a63$var$useFocusableContext(ref) {
    let context = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($f645667febf57a63$export$f9762fab77588ecb) || {};
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useSyncRef */ .w)(context, ref);
    // eslint-disable-next-line
    let { ref: _, ...otherProps } = context;
    return otherProps;
}
const $f645667febf57a63$export$13f3202a3e5ddd5 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).forwardRef(function FocusableProvider(props, ref) {
    let { children: children, ...otherProps } = props;
    let objRef = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .useObjectRef */ .U)(ref);
    let context = {
        ...otherProps,
        ref: objRef
    };
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement($f645667febf57a63$export$f9762fab77588ecb.Provider, {
        value: context
    }, children);
});
function $f645667febf57a63$export$4c014de7c8940b4c(props, domRef) {
    let { focusProps: focusProps } = (0, _useFocus_mjs__WEBPACK_IMPORTED_MODULE_3__/* .useFocus */ .i)(props);
    let { keyboardProps: keyboardProps } = (0, _useKeyboard_mjs__WEBPACK_IMPORTED_MODULE_4__/* .useKeyboard */ .d)(props);
    let interactions = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_5__/* .mergeProps */ .v)(focusProps, keyboardProps);
    let domProps = $f645667febf57a63$var$useFocusableContext(domRef);
    let interactionProps = props.isDisabled ? {} : domProps;
    let autoFocusRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(props.autoFocus);
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (autoFocusRef.current && domRef.current) (0, _focusSafely_mjs__WEBPACK_IMPORTED_MODULE_6__/* .focusSafely */ .l)(domRef.current);
        autoFocusRef.current = false;
    }, [
        domRef
    ]);
    // Always set a tabIndex so that Safari allows focusing native buttons and inputs.
    let tabIndex = props.excludeFromTabOrder ? -1 : 0;
    if (props.isDisabled) tabIndex = undefined;
    return {
        focusableProps: (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_5__/* .mergeProps */ .v)({
            ...interactions,
            tabIndex: tabIndex
        }, interactionProps)
    };
}
const $f645667febf57a63$export$35a3bebf7ef2d934 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $fcPuG$forwardRef)(({ children: children, ...props }, ref)=>{
    ref = (0, $fcPuG$useObjectRef)(ref);
    let { focusableProps: focusableProps } = $f645667febf57a63$export$4c014de7c8940b4c(props, ref);
    let child = (0, $fcPuG$react).Children.only(children);
    (0, $fcPuG$useEffect)(()=>{
        let el = ref.current;
        if (!el || !(el instanceof (0, $fcPuG$getOwnerWindow)(el).Element)) {
            console.error('<Focusable> child must forward its ref to a DOM element.');
            return;
        }
        if (!props.isDisabled && !(0, $fcPuG$isFocusable)(el)) {
            console.warn('<Focusable> child must be focusable. Please ensure the tabIndex prop is passed through.');
            return;
        }
        if (el.localName !== 'button' && el.localName !== 'input' && el.localName !== 'select' && el.localName !== 'textarea' && el.localName !== 'a' && el.localName !== 'area' && el.localName !== 'summary' && el.localName !== 'img' && el.localName !== 'svg') {
            let role = el.getAttribute('role');
            if (!role) console.warn('<Focusable> child must have an interactive ARIA role.');
            else if (// https://w3c.github.io/aria/#widget_roles
            role !== 'application' && role !== 'button' && role !== 'checkbox' && role !== 'combobox' && role !== 'gridcell' && role !== 'link' && role !== 'menuitem' && role !== 'menuitemcheckbox' && role !== 'menuitemradio' && role !== 'option' && role !== 'radio' && role !== 'searchbox' && role !== 'separator' && role !== 'slider' && role !== 'spinbutton' && role !== 'switch' && role !== 'tab' && role !== 'tabpanel' && role !== 'textbox' && role !== 'treeitem' && // aria-describedby is also announced on these roles
            role !== 'img' && role !== 'meter' && role !== 'progressbar') console.warn(`<Focusable> child must have an interactive ARIA role. Got "${role}".`);
        }
    }, [
        ref,
        props.isDisabled
    ]);
    // @ts-ignore
    let childRef = parseInt((0, $fcPuG$react).version, 10) < 19 ? child.ref : child.props.ref;
    return /*#__PURE__*/ (0, $fcPuG$react).cloneElement(child, {
        ...(0, $fcPuG$mergeProps)(focusableProps, child.props),
        // @ts-ignore
        ref: (0, $fcPuG$mergeRefs)(childRef, ref)
    });
})));



//# sourceMappingURL=useFocusable.module.js.map


/***/ }),

/***/ 16638:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ $6179b936705e76d3$export$ae780daf29e6d456)
/* harmony export */ });
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76948);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24836);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99672);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);



/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions


// iOS fires onPointerEnter twice: once with pointerType="touch" and again with pointerType="mouse".
// We want to ignore these emulated events so they do not trigger hover behavior.
// See https://bugs.webkit.org/show_bug.cgi?id=214609.
let $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
let $6179b936705e76d3$var$hoverCount = 0;
function $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents() {
    $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = true;
    // Clear globalIgnoreEmulatedMouseEvents after a short timeout. iOS fires onPointerEnter
    // with pointerType="mouse" immediately after onPointerUp and before onFocus. On other
    // devices that don't have this quirk, we don't want to ignore a mouse hover sometime in
    // the distant future because a user previously touched the element.
    setTimeout(()=>{
        $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
    }, 50);
}
function $6179b936705e76d3$var$handleGlobalPointerEvent(e) {
    if (e.pointerType === 'touch') $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents();
}
function $6179b936705e76d3$var$setupGlobalTouchEvents() {
    if (typeof document === 'undefined') return;
    if (typeof PointerEvent !== 'undefined') document.addEventListener('pointerup', $6179b936705e76d3$var$handleGlobalPointerEvent);
    else document.addEventListener('touchend', $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
    $6179b936705e76d3$var$hoverCount++;
    return ()=>{
        $6179b936705e76d3$var$hoverCount--;
        if ($6179b936705e76d3$var$hoverCount > 0) return;
        if (typeof PointerEvent !== 'undefined') document.removeEventListener('pointerup', $6179b936705e76d3$var$handleGlobalPointerEvent);
        else document.removeEventListener('touchend', $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
    };
}
function $6179b936705e76d3$export$ae780daf29e6d456(props) {
    let { onHoverStart: onHoverStart, onHoverChange: onHoverChange, onHoverEnd: onHoverEnd, isDisabled: isDisabled } = props;
    let [isHovered, setHovered] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    let state = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        isHovered: false,
        ignoreEmulatedMouseEvents: false,
        pointerType: '',
        target: null
    }).current;
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)($6179b936705e76d3$var$setupGlobalTouchEvents, []);
    let { addGlobalListener: addGlobalListener, removeAllGlobalListeners: removeAllGlobalListeners } = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useGlobalListeners */ .A)();
    let { hoverProps: hoverProps, triggerHoverEnd: triggerHoverEnd } = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        let triggerHoverStart = (event, pointerType)=>{
            state.pointerType = pointerType;
            if (isDisabled || pointerType === 'touch' || state.isHovered || !event.currentTarget.contains(event.target)) return;
            state.isHovered = true;
            let target = event.currentTarget;
            state.target = target;
            // When an element that is hovered over is removed, no pointerleave event is fired by the browser,
            // even though the originally hovered target may have shrunk in size so it is no longer hovered.
            // However, a pointerover event will be fired on the new target the mouse is over.
            // In Chrome this happens immediately. In Safari and Firefox, it happens upon moving the mouse one pixel.
            addGlobalListener((0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .getOwnerDocument */ .TW)(event.target), 'pointerover', (e)=>{
                if (state.isHovered && state.target && !(0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__/* .nodeContains */ .sD)(state.target, e.target)) triggerHoverEnd(e, e.pointerType);
            }, {
                capture: true
            });
            if (onHoverStart) onHoverStart({
                type: 'hoverstart',
                target: target,
                pointerType: pointerType
            });
            if (onHoverChange) onHoverChange(true);
            setHovered(true);
        };
        let triggerHoverEnd = (event, pointerType)=>{
            let target = state.target;
            state.pointerType = '';
            state.target = null;
            if (pointerType === 'touch' || !state.isHovered || !target) return;
            state.isHovered = false;
            removeAllGlobalListeners();
            if (onHoverEnd) onHoverEnd({
                type: 'hoverend',
                target: target,
                pointerType: pointerType
            });
            if (onHoverChange) onHoverChange(false);
            setHovered(false);
        };
        let hoverProps = {};
        if (typeof PointerEvent !== 'undefined') {
            hoverProps.onPointerEnter = (e)=>{
                if ($6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents && e.pointerType === 'mouse') return;
                triggerHoverStart(e, e.pointerType);
            };
            hoverProps.onPointerLeave = (e)=>{
                if (!isDisabled && e.currentTarget.contains(e.target)) triggerHoverEnd(e, e.pointerType);
            };
        } else {
            hoverProps.onTouchStart = ()=>{
                state.ignoreEmulatedMouseEvents = true;
            };
            hoverProps.onMouseEnter = (e)=>{
                if (!state.ignoreEmulatedMouseEvents && !$6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents) triggerHoverStart(e, 'mouse');
                state.ignoreEmulatedMouseEvents = false;
            };
            hoverProps.onMouseLeave = (e)=>{
                if (!isDisabled && e.currentTarget.contains(e.target)) triggerHoverEnd(e, 'mouse');
            };
        }
        return {
            hoverProps: hoverProps,
            triggerHoverEnd: triggerHoverEnd
        };
    }, [
        onHoverStart,
        onHoverChange,
        onHoverEnd,
        isDisabled,
        state,
        addGlobalListener,
        removeAllGlobalListeners
    ]);
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        // Call the triggerHoverEnd as soon as isDisabled changes to true
        // Safe to call triggerHoverEnd, it will early return if we aren't currently hovering
        if (isDisabled) triggerHoverEnd({
            currentTarget: state.target
        }, state.pointerType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isDisabled
    ]);
    return {
        hoverProps: hoverProps,
        isHovered: isHovered
    };
}



//# sourceMappingURL=useHover.module.js.map


/***/ }),

/***/ 63029:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  d: () => (/* binding */ $46d819fcbaf35654$export$8f71654801c2f7cd)
});

;// ./node_modules/@react-aria/interactions/dist/createEventHandler.mjs
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $93925083ecbb358c$export$48d1ea6320830260(handler) {
    if (!handler) return undefined;
    let shouldStopPropagation = true;
    return (e)=>{
        let event = {
            ...e,
            preventDefault () {
                e.preventDefault();
            },
            isDefaultPrevented () {
                return e.isDefaultPrevented();
            },
            stopPropagation () {
                if (shouldStopPropagation) console.error('stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.');
                else shouldStopPropagation = true;
            },
            continuePropagation () {
                shouldStopPropagation = false;
            },
            isPropagationStopped () {
                return shouldStopPropagation;
            }
        };
        handler(event);
        if (shouldStopPropagation) e.stopPropagation();
    };
}



//# sourceMappingURL=createEventHandler.module.js.map

;// ./node_modules/@react-aria/interactions/dist/useKeyboard.mjs


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $46d819fcbaf35654$export$8f71654801c2f7cd(props) {
    return {
        keyboardProps: props.isDisabled ? {} : {
            onKeyDown: (0, $93925083ecbb358c$export$48d1ea6320830260)(props.onKeyDown),
            onKeyUp: (0, $93925083ecbb358c$export$48d1ea6320830260)(props.onKeyUp)
        }
    };
}



//# sourceMappingURL=useKeyboard.module.js.map


/***/ }),

/***/ 35044:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  d: () => (/* binding */ $f6c31cce2adf654f$export$45712eceda6fad21)
});

// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/platform.mjs
var platform = __webpack_require__(69202);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/domHelpers.mjs
var domHelpers = __webpack_require__(24836);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/runAfterTransition.mjs
var runAfterTransition = __webpack_require__(47233);
;// ./node_modules/@react-aria/interactions/dist/textSelection.mjs


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
// Note that state only matters here for iOS. Non-iOS gets user-select: none applied to the target element
// rather than at the document level so we just need to apply/remove user-select: none for each pressed element individually
let $14c0b72509d70225$var$state = 'default';
let $14c0b72509d70225$var$savedUserSelect = '';
let $14c0b72509d70225$var$modifiedElementMap = new WeakMap();
function $14c0b72509d70225$export$16a4697467175487(target) {
    if ((0, platform/* isIOS */.un)()) {
        if ($14c0b72509d70225$var$state === 'default') {
            const documentObject = (0, domHelpers/* getOwnerDocument */.TW)(target);
            $14c0b72509d70225$var$savedUserSelect = documentObject.documentElement.style.webkitUserSelect;
            documentObject.documentElement.style.webkitUserSelect = 'none';
        }
        $14c0b72509d70225$var$state = 'disabled';
    } else if (target instanceof HTMLElement || target instanceof SVGElement) {
        // If not iOS, store the target's original user-select and change to user-select: none
        // Ignore state since it doesn't apply for non iOS
        let property = 'userSelect' in target.style ? 'userSelect' : 'webkitUserSelect';
        $14c0b72509d70225$var$modifiedElementMap.set(target, target.style[property]);
        target.style[property] = 'none';
    }
}
function $14c0b72509d70225$export$b0d6fa1ab32e3295(target) {
    if ((0, platform/* isIOS */.un)()) {
        // If the state is already default, there's nothing to do.
        // If it is restoring, then there's no need to queue a second restore.
        if ($14c0b72509d70225$var$state !== 'disabled') return;
        $14c0b72509d70225$var$state = 'restoring';
        // There appears to be a delay on iOS where selection still might occur
        // after pointer up, so wait a bit before removing user-select.
        setTimeout(()=>{
            // Wait for any CSS transitions to complete so we don't recompute style
            // for the whole page in the middle of the animation and cause jank.
            (0, runAfterTransition/* runAfterTransition */.v)(()=>{
                // Avoid race conditions
                if ($14c0b72509d70225$var$state === 'restoring') {
                    const documentObject = (0, domHelpers/* getOwnerDocument */.TW)(target);
                    if (documentObject.documentElement.style.webkitUserSelect === 'none') documentObject.documentElement.style.webkitUserSelect = $14c0b72509d70225$var$savedUserSelect || '';
                    $14c0b72509d70225$var$savedUserSelect = '';
                    $14c0b72509d70225$var$state = 'default';
                }
            });
        }, 300);
    } else if (target instanceof HTMLElement || target instanceof SVGElement) // If not iOS, restore the target's original user-select if any
    // Ignore state since it doesn't apply for non iOS
    {
        if (target && $14c0b72509d70225$var$modifiedElementMap.has(target)) {
            let targetOldUserSelect = $14c0b72509d70225$var$modifiedElementMap.get(target);
            let property = 'userSelect' in target.style ? 'userSelect' : 'webkitUserSelect';
            if (target.style[property] === 'none') target.style[property] = targetOldUserSelect;
            if (target.getAttribute('style') === '') target.removeAttribute('style');
            $14c0b72509d70225$var$modifiedElementMap.delete(target);
        }
    }
}



//# sourceMappingURL=textSelection.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/context.mjs
var dist_context = __webpack_require__(48084);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/utils.mjs
var utils = __webpack_require__(62894);
;// ./node_modules/@swc/helpers/esm/_class_apply_descriptor_get.js
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) return descriptor.get.call(receiver);

    return descriptor.value;
}


;// ./node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");

    return privateMap.get(receiver);
}


;// ./node_modules/@swc/helpers/esm/_class_private_field_get.js



function _class_private_field_get(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}


// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_class_private_field_init.js + 1 modules
var _class_private_field_init = __webpack_require__(20051);
;// ./node_modules/@swc/helpers/esm/_class_apply_descriptor_set.js
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) descriptor.set.call(receiver, value);
    else {
        if (!descriptor.writable) {
            // This should only throw in strict mode, but class bodies are
            // always strict and private fields can only be used inside
            // class bodies.
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}


;// ./node_modules/@swc/helpers/esm/_class_private_field_set.js



function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
    _class_apply_descriptor_set(receiver, descriptor, value);
    return value;
}


// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/mergeProps.mjs
var mergeProps = __webpack_require__(32217);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useSyncRef.mjs
var useSyncRef = __webpack_require__(6660);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useGlobalListeners.mjs
var useGlobalListeners = __webpack_require__(76948);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useEffectEvent.mjs
var useEffectEvent = __webpack_require__(7049);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/DOMFunctions.mjs
var DOMFunctions = __webpack_require__(99672);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/chain.mjs
var chain = __webpack_require__(72166);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/openLink.mjs
var openLink = __webpack_require__(43831);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/isVirtualEvent.mjs
var isVirtualEvent = __webpack_require__(28948);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/focusWithoutScrolling.mjs
var focusWithoutScrolling = __webpack_require__(32268);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(40961);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/@react-aria/interactions/dist/usePress.mjs










/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions









function $f6c31cce2adf654f$var$usePressResponderContext(props) {
    // Consume context from <PressResponder> and merge with props.
    let context = (0, react.useContext)((0, dist_context/* PressResponderContext */.F));
    if (context) {
        let { register: register, ...contextProps } = context;
        props = (0, mergeProps/* mergeProps */.v)(contextProps, props);
        register();
    }
    (0, useSyncRef/* useSyncRef */.w)(context, props.ref);
    return props;
}
var $f6c31cce2adf654f$var$_shouldStopPropagation = /*#__PURE__*/ new WeakMap();
class $f6c31cce2adf654f$var$PressEvent {
    continuePropagation() {
        (0, _class_private_field_set)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, false);
    }
    get shouldStopPropagation() {
        return (0, _class_private_field_get)(this, $f6c31cce2adf654f$var$_shouldStopPropagation);
    }
    constructor(type, pointerType, originalEvent, state){
        (0, _class_private_field_init._)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, {
            writable: true,
            value: void 0
        });
        (0, _class_private_field_set)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, true);
        var _state_target;
        let currentTarget = (_state_target = state === null || state === void 0 ? void 0 : state.target) !== null && _state_target !== void 0 ? _state_target : originalEvent.currentTarget;
        const rect = currentTarget === null || currentTarget === void 0 ? void 0 : currentTarget.getBoundingClientRect();
        let x, y = 0;
        let clientX, clientY = null;
        if (originalEvent.clientX != null && originalEvent.clientY != null) {
            clientX = originalEvent.clientX;
            clientY = originalEvent.clientY;
        }
        if (rect) {
            if (clientX != null && clientY != null) {
                x = clientX - rect.left;
                y = clientY - rect.top;
            } else {
                x = rect.width / 2;
                y = rect.height / 2;
            }
        }
        this.type = type;
        this.pointerType = pointerType;
        this.target = originalEvent.currentTarget;
        this.shiftKey = originalEvent.shiftKey;
        this.metaKey = originalEvent.metaKey;
        this.ctrlKey = originalEvent.ctrlKey;
        this.altKey = originalEvent.altKey;
        this.x = x;
        this.y = y;
    }
}
const $f6c31cce2adf654f$var$LINK_CLICKED = Symbol('linkClicked');
function $f6c31cce2adf654f$export$45712eceda6fad21(props) {
    let { onPress: onPress, onPressChange: onPressChange, onPressStart: onPressStart, onPressEnd: onPressEnd, onPressUp: onPressUp, isDisabled: isDisabled, isPressed: isPressedProp, preventFocusOnPress: preventFocusOnPress, shouldCancelOnPointerExit: shouldCancelOnPointerExit, allowTextSelectionOnPress: allowTextSelectionOnPress, // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref: _, ...domProps } = $f6c31cce2adf654f$var$usePressResponderContext(props);
    let [isPressed, setPressed] = (0, react.useState)(false);
    let ref = (0, react.useRef)({
        isPressed: false,
        ignoreEmulatedMouseEvents: false,
        didFirePressStart: false,
        isTriggeringEvent: false,
        activePointerId: null,
        target: null,
        isOverTarget: false,
        pointerType: null,
        disposables: []
    });
    let { addGlobalListener: addGlobalListener, removeAllGlobalListeners: removeAllGlobalListeners } = (0, useGlobalListeners/* useGlobalListeners */.A)();
    let triggerPressStart = (0, useEffectEvent/* useEffectEvent */.J)((originalEvent, pointerType)=>{
        let state = ref.current;
        if (isDisabled || state.didFirePressStart) return false;
        let shouldStopPropagation = true;
        state.isTriggeringEvent = true;
        if (onPressStart) {
            let event = new $f6c31cce2adf654f$var$PressEvent('pressstart', pointerType, originalEvent);
            onPressStart(event);
            shouldStopPropagation = event.shouldStopPropagation;
        }
        if (onPressChange) onPressChange(true);
        state.isTriggeringEvent = false;
        state.didFirePressStart = true;
        setPressed(true);
        return shouldStopPropagation;
    });
    let triggerPressEnd = (0, useEffectEvent/* useEffectEvent */.J)((originalEvent, pointerType, wasPressed = true)=>{
        let state = ref.current;
        if (!state.didFirePressStart) return false;
        state.didFirePressStart = false;
        state.isTriggeringEvent = true;
        let shouldStopPropagation = true;
        if (onPressEnd) {
            let event = new $f6c31cce2adf654f$var$PressEvent('pressend', pointerType, originalEvent);
            onPressEnd(event);
            shouldStopPropagation = event.shouldStopPropagation;
        }
        if (onPressChange) onPressChange(false);
        setPressed(false);
        if (onPress && wasPressed && !isDisabled) {
            let event = new $f6c31cce2adf654f$var$PressEvent('press', pointerType, originalEvent);
            onPress(event);
            shouldStopPropagation && (shouldStopPropagation = event.shouldStopPropagation);
        }
        state.isTriggeringEvent = false;
        return shouldStopPropagation;
    });
    let triggerPressUp = (0, useEffectEvent/* useEffectEvent */.J)((originalEvent, pointerType)=>{
        let state = ref.current;
        if (isDisabled) return false;
        if (onPressUp) {
            state.isTriggeringEvent = true;
            let event = new $f6c31cce2adf654f$var$PressEvent('pressup', pointerType, originalEvent);
            onPressUp(event);
            state.isTriggeringEvent = false;
            return event.shouldStopPropagation;
        }
        return true;
    });
    let cancel = (0, useEffectEvent/* useEffectEvent */.J)((e)=>{
        let state = ref.current;
        if (state.isPressed && state.target) {
            if (state.didFirePressStart && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
            state.isPressed = false;
            state.isOverTarget = false;
            state.activePointerId = null;
            state.pointerType = null;
            removeAllGlobalListeners();
            if (!allowTextSelectionOnPress) (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
            for (let dispose of state.disposables)dispose();
            state.disposables = [];
        }
    });
    let cancelOnPointerExit = (0, useEffectEvent/* useEffectEvent */.J)((e)=>{
        if (shouldCancelOnPointerExit) cancel(e);
    });
    let pressProps = (0, react.useMemo)(()=>{
        let state = ref.current;
        let pressProps = {
            onKeyDown (e) {
                if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e.nativeEvent, e.currentTarget) && (0, DOMFunctions/* nodeContains */.sD)(e.currentTarget, (0, DOMFunctions/* getEventTarget */.wt)(e.nativeEvent))) {
                    var _state_metaKeyEvents;
                    if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard((0, DOMFunctions/* getEventTarget */.wt)(e.nativeEvent), e.key)) e.preventDefault();
                    // If the event is repeating, it may have started on a different element
                    // after which focus moved to the current element. Ignore these events and
                    // only handle the first key down event.
                    let shouldStopPropagation = true;
                    if (!state.isPressed && !e.repeat) {
                        state.target = e.currentTarget;
                        state.isPressed = true;
                        state.pointerType = 'keyboard';
                        shouldStopPropagation = triggerPressStart(e, 'keyboard');
                        // Focus may move before the key up event, so register the event on the document
                        // instead of the same element where the key down event occurred. Make it capturing so that it will trigger
                        // before stopPropagation from useKeyboard on a child element may happen and thus we can still call triggerPress for the parent element.
                        let originalTarget = e.currentTarget;
                        let pressUp = (e)=>{
                            if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e, originalTarget) && !e.repeat && (0, DOMFunctions/* nodeContains */.sD)(originalTarget, (0, DOMFunctions/* getEventTarget */.wt)(e)) && state.target) triggerPressUp($f6c31cce2adf654f$var$createEvent(state.target, e), 'keyboard');
                        };
                        addGlobalListener((0, domHelpers/* getOwnerDocument */.TW)(e.currentTarget), 'keyup', (0, chain/* chain */.c)(pressUp, onKeyUp), true);
                    }
                    if (shouldStopPropagation) e.stopPropagation();
                    // Keep track of the keydown events that occur while the Meta (e.g. Command) key is held.
                    // macOS has a bug where keyup events are not fired while the Meta key is down.
                    // When the Meta key itself is released we will get an event for that, and we'll act as if
                    // all of these other keys were released as well.
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1393524
                    // https://bugs.webkit.org/show_bug.cgi?id=55291
                    // https://bugzilla.mozilla.org/show_bug.cgi?id=1299553
                    if (e.metaKey && (0, platform/* isMac */.cX)()) (_state_metaKeyEvents = state.metaKeyEvents) === null || _state_metaKeyEvents === void 0 ? void 0 : _state_metaKeyEvents.set(e.key, e.nativeEvent);
                } else if (e.key === 'Meta') state.metaKeyEvents = new Map();
            },
            onClick (e) {
                if (e && !(0, DOMFunctions/* nodeContains */.sD)(e.currentTarget, (0, DOMFunctions/* getEventTarget */.wt)(e.nativeEvent))) return;
                if (e && e.button === 0 && !state.isTriggeringEvent && !(0, openLink/* openLink */.Fe).isOpening) {
                    let shouldStopPropagation = true;
                    if (isDisabled) e.preventDefault();
                    // If triggered from a screen reader or by using element.click(),
                    // trigger as if it were a keyboard click.
                    if (!state.ignoreEmulatedMouseEvents && !state.isPressed && (state.pointerType === 'virtual' || (0, isVirtualEvent/* isVirtualClick */.Y)(e.nativeEvent))) {
                        let stopPressStart = triggerPressStart(e, 'virtual');
                        let stopPressUp = triggerPressUp(e, 'virtual');
                        let stopPressEnd = triggerPressEnd(e, 'virtual');
                        shouldStopPropagation = stopPressStart && stopPressUp && stopPressEnd;
                    } else if (state.isPressed && state.pointerType !== 'keyboard') {
                        let pointerType = state.pointerType || e.nativeEvent.pointerType || 'virtual';
                        shouldStopPropagation = triggerPressEnd($f6c31cce2adf654f$var$createEvent(e.currentTarget, e), pointerType, true);
                        state.isOverTarget = false;
                        cancel(e);
                    }
                    state.ignoreEmulatedMouseEvents = false;
                    if (shouldStopPropagation) e.stopPropagation();
                }
            }
        };
        let onKeyUp = (e)=>{
            var _state_metaKeyEvents;
            if (state.isPressed && state.target && $f6c31cce2adf654f$var$isValidKeyboardEvent(e, state.target)) {
                var _state_metaKeyEvents1;
                if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard((0, DOMFunctions/* getEventTarget */.wt)(e), e.key)) e.preventDefault();
                let target = (0, DOMFunctions/* getEventTarget */.wt)(e);
                triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), 'keyboard', (0, DOMFunctions/* nodeContains */.sD)(state.target, (0, DOMFunctions/* getEventTarget */.wt)(e)));
                removeAllGlobalListeners();
                // If a link was triggered with a key other than Enter, open the URL ourselves.
                // This means the link has a role override, and the default browser behavior
                // only applies when using the Enter key.
                if (e.key !== 'Enter' && $f6c31cce2adf654f$var$isHTMLAnchorLink(state.target) && (0, DOMFunctions/* nodeContains */.sD)(state.target, target) && !e[$f6c31cce2adf654f$var$LINK_CLICKED]) {
                    // Store a hidden property on the event so we only trigger link click once,
                    // even if there are multiple usePress instances attached to the element.
                    e[$f6c31cce2adf654f$var$LINK_CLICKED] = true;
                    (0, openLink/* openLink */.Fe)(state.target, e, false);
                }
                state.isPressed = false;
                (_state_metaKeyEvents1 = state.metaKeyEvents) === null || _state_metaKeyEvents1 === void 0 ? void 0 : _state_metaKeyEvents1.delete(e.key);
            } else if (e.key === 'Meta' && ((_state_metaKeyEvents = state.metaKeyEvents) === null || _state_metaKeyEvents === void 0 ? void 0 : _state_metaKeyEvents.size)) {
                var _state_target;
                // If we recorded keydown events that occurred while the Meta key was pressed,
                // and those haven't received keyup events already, fire keyup events ourselves.
                // See comment above for more info about the macOS bug causing this.
                let events = state.metaKeyEvents;
                state.metaKeyEvents = undefined;
                for (let event of events.values())(_state_target = state.target) === null || _state_target === void 0 ? void 0 : _state_target.dispatchEvent(new KeyboardEvent('keyup', event));
            }
        };
        if (typeof PointerEvent !== 'undefined') {
            pressProps.onPointerDown = (e)=>{
                // Only handle left clicks, and ignore events that bubbled through portals.
                if (e.button !== 0 || !(0, DOMFunctions/* nodeContains */.sD)(e.currentTarget, (0, DOMFunctions/* getEventTarget */.wt)(e.nativeEvent))) return;
                // iOS safari fires pointer events from VoiceOver with incorrect coordinates/target.
                // Ignore and let the onClick handler take care of it instead.
                // https://bugs.webkit.org/show_bug.cgi?id=222627
                // https://bugs.webkit.org/show_bug.cgi?id=223202
                if ((0, isVirtualEvent/* isVirtualPointerEvent */.P)(e.nativeEvent)) {
                    state.pointerType = 'virtual';
                    return;
                }
                state.pointerType = e.pointerType;
                let shouldStopPropagation = true;
                if (!state.isPressed) {
                    state.isPressed = true;
                    state.isOverTarget = true;
                    state.activePointerId = e.pointerId;
                    state.target = e.currentTarget;
                    if (!allowTextSelectionOnPress) (0, $14c0b72509d70225$export$16a4697467175487)(state.target);
                    shouldStopPropagation = triggerPressStart(e, state.pointerType);
                    // Release pointer capture so that touch interactions can leave the original target.
                    // This enables onPointerLeave and onPointerEnter to fire.
                    let target = (0, DOMFunctions/* getEventTarget */.wt)(e.nativeEvent);
                    if ('releasePointerCapture' in target) target.releasePointerCapture(e.pointerId);
                    addGlobalListener((0, domHelpers/* getOwnerDocument */.TW)(e.currentTarget), 'pointerup', onPointerUp, false);
                    addGlobalListener((0, domHelpers/* getOwnerDocument */.TW)(e.currentTarget), 'pointercancel', onPointerCancel, false);
                }
                if (shouldStopPropagation) e.stopPropagation();
            };
            pressProps.onMouseDown = (e)=>{
                if (!(0, DOMFunctions/* nodeContains */.sD)(e.currentTarget, (0, DOMFunctions/* getEventTarget */.wt)(e.nativeEvent))) return;
                if (e.button === 0) {
                    if (preventFocusOnPress) {
                        let dispose = (0, utils/* preventFocus */.LE)(e.target);
                        if (dispose) state.disposables.push(dispose);
                    }
                    e.stopPropagation();
                }
            };
            pressProps.onPointerUp = (e)=>{
                // iOS fires pointerup with zero width and height, so check the pointerType recorded during pointerdown.
                if (!(0, DOMFunctions/* nodeContains */.sD)(e.currentTarget, (0, DOMFunctions/* getEventTarget */.wt)(e.nativeEvent)) || state.pointerType === 'virtual') return;
                // Only handle left clicks
                if (e.button === 0) triggerPressUp(e, state.pointerType || e.pointerType);
            };
            pressProps.onPointerEnter = (e)=>{
                if (e.pointerId === state.activePointerId && state.target && !state.isOverTarget && state.pointerType != null) {
                    state.isOverTarget = true;
                    triggerPressStart($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType);
                }
            };
            pressProps.onPointerLeave = (e)=>{
                if (e.pointerId === state.activePointerId && state.target && state.isOverTarget && state.pointerType != null) {
                    state.isOverTarget = false;
                    triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
                    cancelOnPointerExit(e);
                }
            };
            let onPointerUp = (e)=>{
                if (e.pointerId === state.activePointerId && state.isPressed && e.button === 0 && state.target) {
                    if ((0, DOMFunctions/* nodeContains */.sD)(state.target, (0, DOMFunctions/* getEventTarget */.wt)(e)) && state.pointerType != null) {
                        // Wait for onClick to fire onPress. This avoids browser issues when the DOM
                        // is mutated between onPointerUp and onClick, and is more compatible with third party libraries.
                        // https://github.com/adobe/react-spectrum/issues/1513
                        // https://issues.chromium.org/issues/40732224
                        // However, iOS and Android do not focus or fire onClick after a long press.
                        // We work around this by triggering a click ourselves after a timeout.
                        // This timeout is canceled during the click event in case the real one fires first.
                        // The timeout must be at least 32ms, because Safari on iOS delays the click event on
                        // non-form elements without certain ARIA roles (for hover emulation).
                        // https://github.com/WebKit/WebKit/blob/dccfae42bb29bd4bdef052e469f604a9387241c0/Source/WebKit/WebProcess/WebPage/ios/WebPageIOS.mm#L875-L892
                        let clicked = false;
                        let timeout = setTimeout(()=>{
                            if (state.isPressed && state.target instanceof HTMLElement) {
                                if (clicked) cancel(e);
                                else {
                                    (0, focusWithoutScrolling/* focusWithoutScrolling */.e)(state.target);
                                    state.target.click();
                                }
                            }
                        }, 80);
                        // Use a capturing listener to track if a click occurred.
                        // If stopPropagation is called it may never reach our handler.
                        addGlobalListener(e.currentTarget, 'click', ()=>clicked = true, true);
                        state.disposables.push(()=>clearTimeout(timeout));
                    } else cancel(e);
                    // Ignore subsequent onPointerLeave event before onClick on touch devices.
                    state.isOverTarget = false;
                }
            };
            let onPointerCancel = (e)=>{
                cancel(e);
            };
            pressProps.onDragStart = (e)=>{
                if (!(0, DOMFunctions/* nodeContains */.sD)(e.currentTarget, (0, DOMFunctions/* getEventTarget */.wt)(e.nativeEvent))) return;
                // Safari does not call onPointerCancel when a drag starts, whereas Chrome and Firefox do.
                cancel(e);
            };
        } else {
            // NOTE: this fallback branch is almost entirely used by unit tests.
            // All browsers now support pointer events, but JSDOM still does not.
            pressProps.onMouseDown = (e)=>{
                // Only handle left clicks
                if (e.button !== 0 || !(0, DOMFunctions/* nodeContains */.sD)(e.currentTarget, (0, DOMFunctions/* getEventTarget */.wt)(e.nativeEvent))) return;
                if (state.ignoreEmulatedMouseEvents) {
                    e.stopPropagation();
                    return;
                }
                state.isPressed = true;
                state.isOverTarget = true;
                state.target = e.currentTarget;
                state.pointerType = (0, isVirtualEvent/* isVirtualClick */.Y)(e.nativeEvent) ? 'virtual' : 'mouse';
                // Flush sync so that focus moved during react re-renders occurs before we yield back to the browser.
                let shouldStopPropagation = (0, react_dom.flushSync)(()=>triggerPressStart(e, state.pointerType));
                if (shouldStopPropagation) e.stopPropagation();
                if (preventFocusOnPress) {
                    let dispose = (0, utils/* preventFocus */.LE)(e.target);
                    if (dispose) state.disposables.push(dispose);
                }
                addGlobalListener((0, domHelpers/* getOwnerDocument */.TW)(e.currentTarget), 'mouseup', onMouseUp, false);
            };
            pressProps.onMouseEnter = (e)=>{
                if (!(0, DOMFunctions/* nodeContains */.sD)(e.currentTarget, (0, DOMFunctions/* getEventTarget */.wt)(e.nativeEvent))) return;
                let shouldStopPropagation = true;
                if (state.isPressed && !state.ignoreEmulatedMouseEvents && state.pointerType != null) {
                    state.isOverTarget = true;
                    shouldStopPropagation = triggerPressStart(e, state.pointerType);
                }
                if (shouldStopPropagation) e.stopPropagation();
            };
            pressProps.onMouseLeave = (e)=>{
                if (!(0, DOMFunctions/* nodeContains */.sD)(e.currentTarget, (0, DOMFunctions/* getEventTarget */.wt)(e.nativeEvent))) return;
                let shouldStopPropagation = true;
                if (state.isPressed && !state.ignoreEmulatedMouseEvents && state.pointerType != null) {
                    state.isOverTarget = false;
                    shouldStopPropagation = triggerPressEnd(e, state.pointerType, false);
                    cancelOnPointerExit(e);
                }
                if (shouldStopPropagation) e.stopPropagation();
            };
            pressProps.onMouseUp = (e)=>{
                if (!(0, DOMFunctions/* nodeContains */.sD)(e.currentTarget, (0, DOMFunctions/* getEventTarget */.wt)(e.nativeEvent))) return;
                if (!state.ignoreEmulatedMouseEvents && e.button === 0) triggerPressUp(e, state.pointerType || 'mouse');
            };
            let onMouseUp = (e)=>{
                // Only handle left clicks
                if (e.button !== 0) return;
                if (state.ignoreEmulatedMouseEvents) {
                    state.ignoreEmulatedMouseEvents = false;
                    return;
                }
                if (state.target && state.target.contains(e.target) && state.pointerType != null) ;
                else cancel(e);
                state.isOverTarget = false;
            };
            pressProps.onTouchStart = (e)=>{
                if (!(0, DOMFunctions/* nodeContains */.sD)(e.currentTarget, (0, DOMFunctions/* getEventTarget */.wt)(e.nativeEvent))) return;
                let touch = $f6c31cce2adf654f$var$getTouchFromEvent(e.nativeEvent);
                if (!touch) return;
                state.activePointerId = touch.identifier;
                state.ignoreEmulatedMouseEvents = true;
                state.isOverTarget = true;
                state.isPressed = true;
                state.target = e.currentTarget;
                state.pointerType = 'touch';
                if (!allowTextSelectionOnPress) (0, $14c0b72509d70225$export$16a4697467175487)(state.target);
                let shouldStopPropagation = triggerPressStart($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType);
                if (shouldStopPropagation) e.stopPropagation();
                addGlobalListener((0, domHelpers/* getOwnerWindow */.mD)(e.currentTarget), 'scroll', onScroll, true);
            };
            pressProps.onTouchMove = (e)=>{
                if (!(0, DOMFunctions/* nodeContains */.sD)(e.currentTarget, (0, DOMFunctions/* getEventTarget */.wt)(e.nativeEvent))) return;
                if (!state.isPressed) {
                    e.stopPropagation();
                    return;
                }
                let touch = $f6c31cce2adf654f$var$getTouchById(e.nativeEvent, state.activePointerId);
                let shouldStopPropagation = true;
                if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e.currentTarget)) {
                    if (!state.isOverTarget && state.pointerType != null) {
                        state.isOverTarget = true;
                        shouldStopPropagation = triggerPressStart($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType);
                    }
                } else if (state.isOverTarget && state.pointerType != null) {
                    state.isOverTarget = false;
                    shouldStopPropagation = triggerPressEnd($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType, false);
                    cancelOnPointerExit($f6c31cce2adf654f$var$createTouchEvent(state.target, e));
                }
                if (shouldStopPropagation) e.stopPropagation();
            };
            pressProps.onTouchEnd = (e)=>{
                if (!(0, DOMFunctions/* nodeContains */.sD)(e.currentTarget, (0, DOMFunctions/* getEventTarget */.wt)(e.nativeEvent))) return;
                if (!state.isPressed) {
                    e.stopPropagation();
                    return;
                }
                let touch = $f6c31cce2adf654f$var$getTouchById(e.nativeEvent, state.activePointerId);
                let shouldStopPropagation = true;
                if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e.currentTarget) && state.pointerType != null) {
                    triggerPressUp($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType);
                    shouldStopPropagation = triggerPressEnd($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType);
                } else if (state.isOverTarget && state.pointerType != null) shouldStopPropagation = triggerPressEnd($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType, false);
                if (shouldStopPropagation) e.stopPropagation();
                state.isPressed = false;
                state.activePointerId = null;
                state.isOverTarget = false;
                state.ignoreEmulatedMouseEvents = true;
                if (state.target && !allowTextSelectionOnPress) (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
                removeAllGlobalListeners();
            };
            pressProps.onTouchCancel = (e)=>{
                if (!(0, DOMFunctions/* nodeContains */.sD)(e.currentTarget, (0, DOMFunctions/* getEventTarget */.wt)(e.nativeEvent))) return;
                e.stopPropagation();
                if (state.isPressed) cancel($f6c31cce2adf654f$var$createTouchEvent(state.target, e));
            };
            let onScroll = (e)=>{
                if (state.isPressed && (0, DOMFunctions/* nodeContains */.sD)((0, DOMFunctions/* getEventTarget */.wt)(e), state.target)) cancel({
                    currentTarget: state.target,
                    shiftKey: false,
                    ctrlKey: false,
                    metaKey: false,
                    altKey: false
                });
            };
            pressProps.onDragStart = (e)=>{
                if (!(0, DOMFunctions/* nodeContains */.sD)(e.currentTarget, (0, DOMFunctions/* getEventTarget */.wt)(e.nativeEvent))) return;
                cancel(e);
            };
        }
        return pressProps;
    }, [
        addGlobalListener,
        isDisabled,
        preventFocusOnPress,
        removeAllGlobalListeners,
        allowTextSelectionOnPress,
        cancel,
        cancelOnPointerExit,
        triggerPressEnd,
        triggerPressStart,
        triggerPressUp
    ]);
    // Remove user-select: none in case component unmounts immediately after pressStart
    (0, react.useEffect)(()=>{
        let state = ref.current;
        return ()=>{
            var _state_target;
            if (!allowTextSelectionOnPress) (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)((_state_target = state.target) !== null && _state_target !== void 0 ? _state_target : undefined);
            for (let dispose of state.disposables)dispose();
            state.disposables = [];
        };
    }, [
        allowTextSelectionOnPress
    ]);
    return {
        isPressed: isPressedProp || isPressed,
        pressProps: (0, mergeProps/* mergeProps */.v)(domProps, pressProps)
    };
}
function $f6c31cce2adf654f$var$isHTMLAnchorLink(target) {
    return target.tagName === 'A' && target.hasAttribute('href');
}
function $f6c31cce2adf654f$var$isValidKeyboardEvent(event, currentTarget) {
    const { key: key, code: code } = event;
    const element = currentTarget;
    const role = element.getAttribute('role');
    // Accessibility for keyboards. Space and Enter only.
    // "Spacebar" is for IE 11
    return (key === 'Enter' || key === ' ' || key === 'Spacebar' || code === 'Space') && !(element instanceof (0, domHelpers/* getOwnerWindow */.mD)(element).HTMLInputElement && !$f6c31cce2adf654f$var$isValidInputKey(element, key) || element instanceof (0, domHelpers/* getOwnerWindow */.mD)(element).HTMLTextAreaElement || element.isContentEditable) && // Links should only trigger with Enter key
    !((role === 'link' || !role && $f6c31cce2adf654f$var$isHTMLAnchorLink(element)) && key !== 'Enter');
}
function $f6c31cce2adf654f$var$getTouchFromEvent(event) {
    const { targetTouches: targetTouches } = event;
    if (targetTouches.length > 0) return targetTouches[0];
    return null;
}
function $f6c31cce2adf654f$var$getTouchById(event, pointerId) {
    const changedTouches = event.changedTouches;
    for(let i = 0; i < changedTouches.length; i++){
        const touch = changedTouches[i];
        if (touch.identifier === pointerId) return touch;
    }
    return null;
}
function $f6c31cce2adf654f$var$createTouchEvent(target, e) {
    let clientX = 0;
    let clientY = 0;
    if (e.targetTouches && e.targetTouches.length === 1) {
        clientX = e.targetTouches[0].clientX;
        clientY = e.targetTouches[0].clientY;
    }
    return {
        currentTarget: target,
        shiftKey: e.shiftKey,
        ctrlKey: e.ctrlKey,
        metaKey: e.metaKey,
        altKey: e.altKey,
        clientX: clientX,
        clientY: clientY
    };
}
function $f6c31cce2adf654f$var$createEvent(target, e) {
    let clientX = e.clientX;
    let clientY = e.clientY;
    return {
        currentTarget: target,
        shiftKey: e.shiftKey,
        ctrlKey: e.ctrlKey,
        metaKey: e.metaKey,
        altKey: e.altKey,
        clientX: clientX,
        clientY: clientY
    };
}
function $f6c31cce2adf654f$var$getPointClientRect(point) {
    let offsetX = 0;
    let offsetY = 0;
    if (point.width !== undefined) offsetX = point.width / 2;
    else if (point.radiusX !== undefined) offsetX = point.radiusX;
    if (point.height !== undefined) offsetY = point.height / 2;
    else if (point.radiusY !== undefined) offsetY = point.radiusY;
    return {
        top: point.clientY - offsetY,
        right: point.clientX + offsetX,
        bottom: point.clientY + offsetY,
        left: point.clientX - offsetX
    };
}
function $f6c31cce2adf654f$var$areRectanglesOverlapping(a, b) {
    // check if they cannot overlap on x axis
    if (a.left > b.right || b.left > a.right) return false;
    // check if they cannot overlap on y axis
    if (a.top > b.bottom || b.top > a.bottom) return false;
    return true;
}
function $f6c31cce2adf654f$var$isOverTarget(point, target) {
    let rect = target.getBoundingClientRect();
    let pointRect = $f6c31cce2adf654f$var$getPointClientRect(point);
    return $f6c31cce2adf654f$var$areRectanglesOverlapping(rect, pointRect);
}
function $f6c31cce2adf654f$var$shouldPreventDefaultUp(target) {
    if (target instanceof HTMLInputElement) return false;
    if (target instanceof HTMLButtonElement) return target.type !== 'submit' && target.type !== 'reset';
    if ($f6c31cce2adf654f$var$isHTMLAnchorLink(target)) return false;
    return true;
}
function $f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(target, key) {
    if (target instanceof HTMLInputElement) return !$f6c31cce2adf654f$var$isValidInputKey(target, key);
    return $f6c31cce2adf654f$var$shouldPreventDefaultUp(target);
}
const $f6c31cce2adf654f$var$nonTextInputTypes = new Set([
    'checkbox',
    'radio',
    'range',
    'color',
    'file',
    'image',
    'button',
    'submit',
    'reset'
]);
function $f6c31cce2adf654f$var$isValidInputKey(target, key) {
    // Only space should toggle checkboxes and radios, not enter.
    return target.type === 'checkbox' || target.type === 'radio' ? key === ' ' : $f6c31cce2adf654f$var$nonTextInputTypes.has(target.type);
}



//# sourceMappingURL=usePress.module.js.map


/***/ }),

/***/ 62894:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KU: () => (/* binding */ $8a9cb279dc87e130$export$905e7fc544a71f36),
/* harmony export */   LE: () => (/* binding */ $8a9cb279dc87e130$export$cabe61c495ee3649),
/* harmony export */   lR: () => (/* binding */ $8a9cb279dc87e130$export$fda7da73ab5d4c48),
/* harmony export */   yB: () => (/* binding */ $8a9cb279dc87e130$export$715c682d09d639cc)
/* harmony export */ });
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49953);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7049);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43629);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24836);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32268);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);



/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

class $8a9cb279dc87e130$export$905e7fc544a71f36 {
    isDefaultPrevented() {
        return this.nativeEvent.defaultPrevented;
    }
    preventDefault() {
        this.defaultPrevented = true;
        this.nativeEvent.preventDefault();
    }
    stopPropagation() {
        this.nativeEvent.stopPropagation();
        this.isPropagationStopped = ()=>true;
    }
    isPropagationStopped() {
        return false;
    }
    persist() {}
    constructor(type, nativeEvent){
        this.nativeEvent = nativeEvent;
        this.target = nativeEvent.target;
        this.currentTarget = nativeEvent.currentTarget;
        this.relatedTarget = nativeEvent.relatedTarget;
        this.bubbles = nativeEvent.bubbles;
        this.cancelable = nativeEvent.cancelable;
        this.defaultPrevented = nativeEvent.defaultPrevented;
        this.eventPhase = nativeEvent.eventPhase;
        this.isTrusted = nativeEvent.isTrusted;
        this.timeStamp = nativeEvent.timeStamp;
        this.type = type;
    }
}
function $8a9cb279dc87e130$export$715c682d09d639cc(onBlur) {
    let stateRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        isFocused: false,
        observer: null
    });
    // Clean up MutationObserver on unmount. See below.
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useLayoutEffect */ .N)(()=>{
        const state = stateRef.current;
        return ()=>{
            if (state.observer) {
                state.observer.disconnect();
                state.observer = null;
            }
        };
    }, []);
    let dispatchBlur = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .useEffectEvent */ .J)((e)=>{
        onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
    });
    // This function is called during a React onFocus event.
    return (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{
        // React does not fire onBlur when an element is disabled. https://github.com/facebook/react/issues/9142
        // Most browsers fire a native focusout event in this case, except for Firefox. In that case, we use a
        // MutationObserver to watch for the disabled attribute, and dispatch these events ourselves.
        // For browsers that do, focusout fires before the MutationObserver, so onBlur should not fire twice.
        if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
            stateRef.current.isFocused = true;
            let target = e.target;
            let onBlurHandler = (e)=>{
                stateRef.current.isFocused = false;
                if (target.disabled) // For backward compatibility, dispatch a (fake) React synthetic event.
                dispatchBlur(new $8a9cb279dc87e130$export$905e7fc544a71f36('blur', e));
                // We no longer need the MutationObserver once the target is blurred.
                if (stateRef.current.observer) {
                    stateRef.current.observer.disconnect();
                    stateRef.current.observer = null;
                }
            };
            target.addEventListener('focusout', onBlurHandler, {
                once: true
            });
            stateRef.current.observer = new MutationObserver(()=>{
                if (stateRef.current.isFocused && target.disabled) {
                    var _stateRef_current_observer;
                    (_stateRef_current_observer = stateRef.current.observer) === null || _stateRef_current_observer === void 0 ? void 0 : _stateRef_current_observer.disconnect();
                    let relatedTargetEl = target === document.activeElement ? null : document.activeElement;
                    target.dispatchEvent(new FocusEvent('blur', {
                        relatedTarget: relatedTargetEl
                    }));
                    target.dispatchEvent(new FocusEvent('focusout', {
                        bubbles: true,
                        relatedTarget: relatedTargetEl
                    }));
                }
            });
            stateRef.current.observer.observe(target, {
                attributes: true,
                attributeFilter: [
                    'disabled'
                ]
            });
        }
    }, [
        dispatchBlur
    ]);
}
let $8a9cb279dc87e130$export$fda7da73ab5d4c48 = false;
function $8a9cb279dc87e130$export$cabe61c495ee3649(target) {
    // The browser will focus the nearest focusable ancestor of our target.
    while(target && !(0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__/* .isFocusable */ .t)(target))target = target.parentElement;
    let window = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__/* .getOwnerWindow */ .mD)(target);
    let activeElement = window.document.activeElement;
    if (!activeElement || activeElement === target) return;
    $8a9cb279dc87e130$export$fda7da73ab5d4c48 = true;
    let isRefocusing = false;
    let onBlur = (e)=>{
        if (e.target === activeElement || isRefocusing) e.stopImmediatePropagation();
    };
    let onFocusOut = (e)=>{
        if (e.target === activeElement || isRefocusing) {
            e.stopImmediatePropagation();
            // If there was no focusable ancestor, we don't expect a focus event.
            // Re-focus the original active element here.
            if (!target && !isRefocusing) {
                isRefocusing = true;
                (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_5__/* .focusWithoutScrolling */ .e)(activeElement);
                cleanup();
            }
        }
    };
    let onFocus = (e)=>{
        if (e.target === target || isRefocusing) e.stopImmediatePropagation();
    };
    let onFocusIn = (e)=>{
        if (e.target === target || isRefocusing) {
            e.stopImmediatePropagation();
            if (!isRefocusing) {
                isRefocusing = true;
                (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_5__/* .focusWithoutScrolling */ .e)(activeElement);
                cleanup();
            }
        }
    };
    window.addEventListener('blur', onBlur, true);
    window.addEventListener('focusout', onFocusOut, true);
    window.addEventListener('focusin', onFocusIn, true);
    window.addEventListener('focus', onFocus, true);
    let cleanup = ()=>{
        cancelAnimationFrame(raf);
        window.removeEventListener('blur', onBlur, true);
        window.removeEventListener('focusout', onFocusOut, true);
        window.removeEventListener('focusin', onFocusIn, true);
        window.removeEventListener('focus', onFocus, true);
        $8a9cb279dc87e130$export$fda7da73ab5d4c48 = false;
        isRefocusing = false;
    };
    let raf = requestAnimationFrame(cleanup);
    return cleanup;
}



//# sourceMappingURL=utils.module.js.map


/***/ }),

/***/ 64887:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ $d191a55c9702f145$export$8467354a121f1b9f)
/* harmony export */ });
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84137);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37061);


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $d191a55c9702f145$export$8467354a121f1b9f(props) {
    let { id: id, label: label, 'aria-labelledby': ariaLabelledby, 'aria-label': ariaLabel, labelElementType: labelElementType = 'label' } = props;
    id = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__/* .useId */ .Bi)(id);
    let labelId = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__/* .useId */ .Bi)();
    let labelProps = {};
    if (label) {
        ariaLabelledby = ariaLabelledby ? `${labelId} ${ariaLabelledby}` : labelId;
        labelProps = {
            id: labelId,
            htmlFor: labelElementType === 'label' ? id : undefined
        };
    } else if (!ariaLabelledby && !ariaLabel) console.warn('If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility');
    let fieldProps = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useLabels */ .b)({
        id: id,
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledby
    });
    return {
        labelProps: labelProps,
        fieldProps: fieldProps
    };
}



//# sourceMappingURL=useLabel.module.js.map


/***/ }),

/***/ 60771:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iP: () => (/* binding */ $319e236875307eab$export$a9b970dcc4ae71a9),
/* harmony export */   pA: () => (/* binding */ $319e236875307eab$export$d10ae4f68404609a)
/* harmony export */ });
/* unused harmony export destroyAnnouncer */
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /* Inspired by https://github.com/AlmeroSteyn/react-aria-live */ const $319e236875307eab$var$LIVEREGION_TIMEOUT_DELAY = 7000;
let $319e236875307eab$var$liveAnnouncer = null;
function $319e236875307eab$export$a9b970dcc4ae71a9(message, assertiveness = 'assertive', timeout = $319e236875307eab$var$LIVEREGION_TIMEOUT_DELAY) {
    if (!$319e236875307eab$var$liveAnnouncer) {
        $319e236875307eab$var$liveAnnouncer = new $319e236875307eab$var$LiveAnnouncer();
        // wait for the live announcer regions to be added to the dom, then announce
        // otherwise Safari won't announce the message if it's added too quickly
        // found most times less than 100ms were not consistent when announcing with Safari
        // IS_REACT_ACT_ENVIRONMENT is used by React 18. Previous versions checked for the `jest` global.
        // https://github.com/reactwg/react-18/discussions/102
        // if we're in a test environment, announce without waiting
        // @ts-ignore
        if (!(typeof IS_REACT_ACT_ENVIRONMENT === 'boolean' ? IS_REACT_ACT_ENVIRONMENT : typeof jest !== 'undefined')) setTimeout(()=>{
            if ($319e236875307eab$var$liveAnnouncer === null || $319e236875307eab$var$liveAnnouncer === void 0 ? void 0 : $319e236875307eab$var$liveAnnouncer.isAttached()) $319e236875307eab$var$liveAnnouncer === null || $319e236875307eab$var$liveAnnouncer === void 0 ? void 0 : $319e236875307eab$var$liveAnnouncer.announce(message, assertiveness, timeout);
        }, 100);
        else $319e236875307eab$var$liveAnnouncer.announce(message, assertiveness, timeout);
    } else $319e236875307eab$var$liveAnnouncer.announce(message, assertiveness, timeout);
}
function $319e236875307eab$export$d10ae4f68404609a(assertiveness) {
    if ($319e236875307eab$var$liveAnnouncer) $319e236875307eab$var$liveAnnouncer.clear(assertiveness);
}
function $319e236875307eab$export$d8686216b8b81b2f() {
    if ($319e236875307eab$var$liveAnnouncer) {
        $319e236875307eab$var$liveAnnouncer.destroy();
        $319e236875307eab$var$liveAnnouncer = null;
    }
}
// LiveAnnouncer is implemented using vanilla DOM, not React. That's because as of React 18
// ReactDOM.render is deprecated, and the replacement, ReactDOM.createRoot is moved into a
// subpath import `react-dom/client`. That makes it hard for us to support multiple React versions.
// As a global API, we can't use portals without introducing a breaking API change. LiveAnnouncer
// is simple enough to implement without React, so that's what we do here.
// See this discussion for more details: https://github.com/reactwg/react-18/discussions/125#discussioncomment-2382638
class $319e236875307eab$var$LiveAnnouncer {
    isAttached() {
        var _this_node;
        return (_this_node = this.node) === null || _this_node === void 0 ? void 0 : _this_node.isConnected;
    }
    createLog(ariaLive) {
        let node = document.createElement('div');
        node.setAttribute('role', 'log');
        node.setAttribute('aria-live', ariaLive);
        node.setAttribute('aria-relevant', 'additions');
        return node;
    }
    destroy() {
        if (!this.node) return;
        document.body.removeChild(this.node);
        this.node = null;
    }
    announce(message, assertiveness = 'assertive', timeout = $319e236875307eab$var$LIVEREGION_TIMEOUT_DELAY) {
        var _this_assertiveLog, _this_politeLog;
        if (!this.node) return;
        let node = document.createElement('div');
        if (typeof message === 'object') {
            // To read an aria-labelledby, the element must have an appropriate role, such as img.
            node.setAttribute('role', 'img');
            node.setAttribute('aria-labelledby', message['aria-labelledby']);
        } else node.textContent = message;
        if (assertiveness === 'assertive') (_this_assertiveLog = this.assertiveLog) === null || _this_assertiveLog === void 0 ? void 0 : _this_assertiveLog.appendChild(node);
        else (_this_politeLog = this.politeLog) === null || _this_politeLog === void 0 ? void 0 : _this_politeLog.appendChild(node);
        if (message !== '') setTimeout(()=>{
            node.remove();
        }, timeout);
    }
    clear(assertiveness) {
        if (!this.node) return;
        if ((!assertiveness || assertiveness === 'assertive') && this.assertiveLog) this.assertiveLog.innerHTML = '';
        if ((!assertiveness || assertiveness === 'polite') && this.politeLog) this.politeLog.innerHTML = '';
    }
    constructor(){
        this.node = null;
        this.assertiveLog = null;
        this.politeLog = null;
        if (typeof document !== 'undefined') {
            this.node = document.createElement('div');
            this.node.dataset.liveAnnouncer = 'true';
            // copied from VisuallyHidden
            Object.assign(this.node.style, {
                border: 0,
                clip: 'rect(0 0 0 0)',
                clipPath: 'inset(50%)',
                height: '1px',
                margin: '-1px',
                overflow: 'hidden',
                padding: 0,
                position: 'absolute',
                width: '1px',
                whiteSpace: 'nowrap'
            });
            this.assertiveLog = this.createLog('assertive');
            this.node.appendChild(this.assertiveLog);
            this.politeLog = this.createLog('polite');
            this.node.appendChild(this.politeLog);
            document.body.prepend(this.node);
        }
    }
}



//# sourceMappingURL=LiveAnnouncer.module.js.map


/***/ }),

/***/ 60415:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cc: () => (/* binding */ $b5e257d569688ac6$export$619500959fc48b26),
/* harmony export */   wR: () => (/* binding */ $b5e257d569688ac6$export$535bd6ca7f90a273)
/* harmony export */ });
/* unused harmony export SSRProvider */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // We must avoid a circular dependency with @react-aria/utils, and this useLayoutEffect is
// guarded by a check that it only runs on the client side.
// eslint-disable-next-line rulesdir/useLayoutEffectRule

// Default context value to use in case there is no SSRProvider. This is fine for
// client-only apps. In order to support multiple copies of React Aria potentially
// being on the page at once, the prefix is set to a random number. SSRProvider
// will reset this to zero for consistency between server and client, so in the
// SSR case multiple copies of React Aria is not supported.
const $b5e257d569688ac6$var$defaultContext = {
    prefix: String(Math.round(Math.random() * 10000000000)),
    current: 0
};
const $b5e257d569688ac6$var$SSRContext = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createContext($b5e257d569688ac6$var$defaultContext);
const $b5e257d569688ac6$var$IsSSRContext = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createContext(false);
// This is only used in React < 18.
function $b5e257d569688ac6$var$LegacySSRProvider(props) {
    let cur = (0, $670gB$useContext)($b5e257d569688ac6$var$SSRContext);
    let counter = $b5e257d569688ac6$var$useCounter(cur === $b5e257d569688ac6$var$defaultContext);
    let [isSSR, setIsSSR] = (0, $670gB$useState)(true);
    let value = (0, $670gB$useMemo)(()=>({
            // If this is the first SSRProvider, start with an empty string prefix, otherwise
            // append and increment the counter.
            prefix: cur === $b5e257d569688ac6$var$defaultContext ? '' : `${cur.prefix}-${counter}`,
            current: 0
        }), [
        cur,
        counter
    ]);
    // If on the client, and the component was initially server rendered,
    // then schedule a layout effect to update the component after hydration.
    if (typeof document !== 'undefined') // This if statement technically breaks the rules of hooks, but is safe
    // because the condition never changes after mounting.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    (0, $670gB$useLayoutEffect)(()=>{
        setIsSSR(false);
    }, []);
    return /*#__PURE__*/ (0, $670gB$react).createElement($b5e257d569688ac6$var$SSRContext.Provider, {
        value: value
    }, /*#__PURE__*/ (0, $670gB$react).createElement($b5e257d569688ac6$var$IsSSRContext.Provider, {
        value: isSSR
    }, props.children));
}
let $b5e257d569688ac6$var$warnedAboutSSRProvider = false;
function $b5e257d569688ac6$export$9f8ac96af4b1b2ae(props) {
    if (typeof (0, $670gB$react)['useId'] === 'function') {
        if ( true && !$b5e257d569688ac6$var$warnedAboutSSRProvider) {
            console.warn('In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.');
            $b5e257d569688ac6$var$warnedAboutSSRProvider = true;
        }
        return /*#__PURE__*/ (0, $670gB$react).createElement((0, $670gB$react).Fragment, null, props.children);
    }
    return /*#__PURE__*/ (0, $670gB$react).createElement($b5e257d569688ac6$var$LegacySSRProvider, props);
}
let $b5e257d569688ac6$var$canUseDOM = Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);
let $b5e257d569688ac6$var$componentIds = new WeakMap();
function $b5e257d569688ac6$var$useCounter(isDisabled = false) {
    let ctx = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($b5e257d569688ac6$var$SSRContext);
    let ref = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    // eslint-disable-next-line rulesdir/pure-render
    if (ref.current === null && !isDisabled) {
        var _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner, _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        // In strict mode, React renders components twice, and the ref will be reset to null on the second render.
        // This means our id counter will be incremented twice instead of once. This is a problem because on the
        // server, components are only rendered once and so ids generated on the server won't match the client.
        // In React 18, useId was introduced to solve this, but it is not available in older versions. So to solve this
        // we need to use some React internals to access the underlying Fiber instance, which is stable between renders.
        // This is exposed as ReactCurrentOwner in development, which is all we need since StrictMode only runs in development.
        // To ensure that we only increment the global counter once, we store the starting id for this component in
        // a weak map associated with the Fiber. On the second render, we reset the global counter to this value.
        // Since React runs the second render immediately after the first, this is safe.
        // @ts-ignore
        let currentOwner = (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = (0, react__WEBPACK_IMPORTED_MODULE_0__).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED === void 0 ? void 0 : (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner = _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner === void 0 ? void 0 : _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner.current;
        if (currentOwner) {
            let prevComponentValue = $b5e257d569688ac6$var$componentIds.get(currentOwner);
            if (prevComponentValue == null) // On the first render, and first call to useId, store the id and state in our weak map.
            $b5e257d569688ac6$var$componentIds.set(currentOwner, {
                id: ctx.current,
                state: currentOwner.memoizedState
            });
            else if (currentOwner.memoizedState !== prevComponentValue.state) {
                // On the second render, the memoizedState gets reset by React.
                // Reset the counter, and remove from the weak map so we don't
                // do this for subsequent useId calls.
                ctx.current = prevComponentValue.id;
                $b5e257d569688ac6$var$componentIds.delete(currentOwner);
            }
        }
        // eslint-disable-next-line rulesdir/pure-render
        ref.current = ++ctx.current;
    }
    // eslint-disable-next-line rulesdir/pure-render
    return ref.current;
}
function $b5e257d569688ac6$var$useLegacySSRSafeId(defaultId) {
    let ctx = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($b5e257d569688ac6$var$SSRContext);
    // If we are rendering in a non-DOM environment, and there's no SSRProvider,
    // provide a warning to hint to the developer to add one.
    if (ctx === $b5e257d569688ac6$var$defaultContext && !$b5e257d569688ac6$var$canUseDOM) console.warn('When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.');
    let counter = $b5e257d569688ac6$var$useCounter(!!defaultId);
    let prefix = ctx === $b5e257d569688ac6$var$defaultContext && "production" === 'test' ? 0 : `react-aria${ctx.prefix}`;
    return defaultId || `${prefix}-${counter}`;
}
function $b5e257d569688ac6$var$useModernSSRSafeId(defaultId) {
    let id = (0, react__WEBPACK_IMPORTED_MODULE_0__).useId();
    let [didSSR] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)($b5e257d569688ac6$export$535bd6ca7f90a273());
    let prefix = didSSR || "production" === 'test' ? 'react-aria' : `react-aria${$b5e257d569688ac6$var$defaultContext.prefix}`;
    return defaultId || `${prefix}-${id}`;
}
const $b5e257d569688ac6$export$619500959fc48b26 = typeof (0, react__WEBPACK_IMPORTED_MODULE_0__)['useId'] === 'function' ? $b5e257d569688ac6$var$useModernSSRSafeId : $b5e257d569688ac6$var$useLegacySSRSafeId;
function $b5e257d569688ac6$var$getSnapshot() {
    return false;
}
function $b5e257d569688ac6$var$getServerSnapshot() {
    return true;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function $b5e257d569688ac6$var$subscribe(onStoreChange) {
    // noop
    return ()=>{};
}
function $b5e257d569688ac6$export$535bd6ca7f90a273() {
    // In React 18, we can use useSyncExternalStore to detect if we're server rendering or hydrating.
    if (typeof (0, react__WEBPACK_IMPORTED_MODULE_0__)['useSyncExternalStore'] === 'function') return (0, react__WEBPACK_IMPORTED_MODULE_0__)['useSyncExternalStore']($b5e257d569688ac6$var$subscribe, $b5e257d569688ac6$var$getSnapshot, $b5e257d569688ac6$var$getServerSnapshot);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($b5e257d569688ac6$var$IsSSRContext);
}



//# sourceMappingURL=SSRProvider.module.js.map


/***/ }),

/***/ 99672:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bq: () => (/* binding */ $d4ee10de306f2510$export$cd4e5573fbe2b576),
/* harmony export */   sD: () => (/* binding */ $d4ee10de306f2510$export$4282f70798064fe0),
/* harmony export */   wt: () => (/* binding */ $d4ee10de306f2510$export$e58f029f0fbfdb29)
/* harmony export */ });
/* harmony import */ var _domHelpers_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24836);
/* harmony import */ var _react_stately_flags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93399);



// Source: https://github.com/microsoft/tabster/blob/a89fc5d7e332d48f68d03b1ca6e344489d1c3898/src/Shadowdomize/DOMFunctions.ts#L16


function $d4ee10de306f2510$export$4282f70798064fe0(node, otherNode) {
    if (!(0, _react_stately_flags__WEBPACK_IMPORTED_MODULE_0__/* .shadowDOM */ .Nf)()) return otherNode && node ? node.contains(otherNode) : false;
    if (!node || !otherNode) return false;
    let currentNode = otherNode;
    while(currentNode !== null){
        if (currentNode === node) return true;
        if (currentNode.tagName === 'SLOT' && currentNode.assignedSlot) // Element is slotted
        currentNode = currentNode.assignedSlot.parentNode;
        else if ((0, _domHelpers_mjs__WEBPACK_IMPORTED_MODULE_1__/* .isShadowRoot */ .Ng)(currentNode)) // Element is in shadow root
        currentNode = currentNode.host;
        else currentNode = currentNode.parentNode;
    }
    return false;
}
const $d4ee10de306f2510$export$cd4e5573fbe2b576 = (doc = document)=>{
    var _activeElement_shadowRoot;
    if (!(0, _react_stately_flags__WEBPACK_IMPORTED_MODULE_0__/* .shadowDOM */ .Nf)()) return doc.activeElement;
    let activeElement = doc.activeElement;
    while(activeElement && 'shadowRoot' in activeElement && ((_activeElement_shadowRoot = activeElement.shadowRoot) === null || _activeElement_shadowRoot === void 0 ? void 0 : _activeElement_shadowRoot.activeElement))activeElement = activeElement.shadowRoot.activeElement;
    return activeElement;
};
function $d4ee10de306f2510$export$e58f029f0fbfdb29(event) {
    if ((0, _react_stately_flags__WEBPACK_IMPORTED_MODULE_0__/* .shadowDOM */ .Nf)() && event.target.shadowRoot) {
        if (event.composedPath) return event.composedPath()[0];
    }
    return event.target;
}



//# sourceMappingURL=DOMFunctions.module.js.map


/***/ }),

/***/ 72166:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ $ff5963eb1fccf552$export$e08e3b67e392101e)
/* harmony export */ });
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /**
 * Calls all functions in the order they were chained with the same arguments.
 */ function $ff5963eb1fccf552$export$e08e3b67e392101e(...callbacks) {
    return (...args)=>{
        for (let callback of callbacks)if (typeof callback === 'function') callback(...args);
    };
}



//# sourceMappingURL=chain.module.js.map


/***/ }),

/***/ 24836:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ng: () => (/* binding */ $431fbd86ca7dc216$export$af51f0f06c0f328a),
/* harmony export */   TW: () => (/* binding */ $431fbd86ca7dc216$export$b204af158042fbac),
/* harmony export */   mD: () => (/* binding */ $431fbd86ca7dc216$export$f21a1ffae260145a)
/* harmony export */ });
const $431fbd86ca7dc216$export$b204af158042fbac = (el)=>{
    var _el_ownerDocument;
    return (_el_ownerDocument = el === null || el === void 0 ? void 0 : el.ownerDocument) !== null && _el_ownerDocument !== void 0 ? _el_ownerDocument : document;
};
const $431fbd86ca7dc216$export$f21a1ffae260145a = (el)=>{
    if (el && 'window' in el && el.window === el) return el;
    const doc = $431fbd86ca7dc216$export$b204af158042fbac(el);
    return doc.defaultView || window;
};
/**
 * Type guard that checks if a value is a Node. Verifies the presence and type of the nodeType property.
 */ function $431fbd86ca7dc216$var$isNode(value) {
    return value !== null && typeof value === 'object' && 'nodeType' in value && typeof value.nodeType === 'number';
}
function $431fbd86ca7dc216$export$af51f0f06c0f328a(node) {
    return $431fbd86ca7dc216$var$isNode(node) && node.nodeType === Node.DOCUMENT_FRAGMENT_NODE && 'host' in node;
}



//# sourceMappingURL=domHelpers.module.js.map


/***/ }),

/***/ 5987:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ $65484d02dcb7eb3e$export$457c3d6518dd4c6f)
/* harmony export */ });
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $65484d02dcb7eb3e$var$DOMPropNames = new Set([
    'id'
]);
const $65484d02dcb7eb3e$var$labelablePropNames = new Set([
    'aria-label',
    'aria-labelledby',
    'aria-describedby',
    'aria-details'
]);
// See LinkDOMProps in dom.d.ts.
const $65484d02dcb7eb3e$var$linkPropNames = new Set([
    'href',
    'hrefLang',
    'target',
    'rel',
    'download',
    'ping',
    'referrerPolicy'
]);
const $65484d02dcb7eb3e$var$propRe = /^(data-.*)$/;
function $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, opts = {}) {
    let { labelable: labelable, isLink: isLink, propNames: propNames } = opts;
    let filteredProps = {};
    for(const prop in props)if (Object.prototype.hasOwnProperty.call(props, prop) && ($65484d02dcb7eb3e$var$DOMPropNames.has(prop) || labelable && $65484d02dcb7eb3e$var$labelablePropNames.has(prop) || isLink && $65484d02dcb7eb3e$var$linkPropNames.has(prop) || (propNames === null || propNames === void 0 ? void 0 : propNames.has(prop)) || $65484d02dcb7eb3e$var$propRe.test(prop))) filteredProps[prop] = props[prop];
    return filteredProps;
}



//# sourceMappingURL=filterDOMProps.module.js.map


/***/ }),

/***/ 32268:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ $7215afc6de606d6b$export$de79e2c695e052f3)
/* harmony export */ });
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $7215afc6de606d6b$export$de79e2c695e052f3(element) {
    if ($7215afc6de606d6b$var$supportsPreventScroll()) element.focus({
        preventScroll: true
    });
    else {
        let scrollableElements = $7215afc6de606d6b$var$getScrollableElements(element);
        element.focus();
        $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements);
    }
}
let $7215afc6de606d6b$var$supportsPreventScrollCached = null;
function $7215afc6de606d6b$var$supportsPreventScroll() {
    if ($7215afc6de606d6b$var$supportsPreventScrollCached == null) {
        $7215afc6de606d6b$var$supportsPreventScrollCached = false;
        try {
            let focusElem = document.createElement('div');
            focusElem.focus({
                get preventScroll () {
                    $7215afc6de606d6b$var$supportsPreventScrollCached = true;
                    return true;
                }
            });
        } catch  {
        // Ignore
        }
    }
    return $7215afc6de606d6b$var$supportsPreventScrollCached;
}
function $7215afc6de606d6b$var$getScrollableElements(element) {
    let parent = element.parentNode;
    let scrollableElements = [];
    let rootScrollingElement = document.scrollingElement || document.documentElement;
    while(parent instanceof HTMLElement && parent !== rootScrollingElement){
        if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) scrollableElements.push({
            element: parent,
            scrollTop: parent.scrollTop,
            scrollLeft: parent.scrollLeft
        });
        parent = parent.parentNode;
    }
    if (rootScrollingElement instanceof HTMLElement) scrollableElements.push({
        element: rootScrollingElement,
        scrollTop: rootScrollingElement.scrollTop,
        scrollLeft: rootScrollingElement.scrollLeft
    });
    return scrollableElements;
}
function $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements) {
    for (let { element: element, scrollTop: scrollTop, scrollLeft: scrollLeft } of scrollableElements){
        element.scrollTop = scrollTop;
        element.scrollLeft = scrollLeft;
    }
}



//# sourceMappingURL=focusWithoutScrolling.module.js.map


/***/ }),

/***/ 43629:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ $b4b717babfbb907b$export$bebd5a1431fec25d),
/* harmony export */   t: () => (/* binding */ $b4b717babfbb907b$export$4c063cf1350e6fed)
/* harmony export */ });
const $b4b717babfbb907b$var$focusableElements = [
    'input:not([disabled]):not([type=hidden])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'button:not([disabled])',
    'a[href]',
    'area[href]',
    'summary',
    'iframe',
    'object',
    'embed',
    'audio[controls]',
    'video[controls]',
    '[contenteditable]:not([contenteditable^="false"])'
];
const $b4b717babfbb907b$var$FOCUSABLE_ELEMENT_SELECTOR = $b4b717babfbb907b$var$focusableElements.join(':not([hidden]),') + ',[tabindex]:not([disabled]):not([hidden])';
$b4b717babfbb907b$var$focusableElements.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const $b4b717babfbb907b$var$TABBABLE_ELEMENT_SELECTOR = $b4b717babfbb907b$var$focusableElements.join(':not([hidden]):not([tabindex="-1"]),');
function $b4b717babfbb907b$export$4c063cf1350e6fed(element) {
    return element.matches($b4b717babfbb907b$var$FOCUSABLE_ELEMENT_SELECTOR);
}
function $b4b717babfbb907b$export$bebd5a1431fec25d(element) {
    return element.matches($b4b717babfbb907b$var$TABBABLE_ELEMENT_SELECTOR);
}



//# sourceMappingURL=isFocusable.module.js.map


/***/ }),

/***/ 28948:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ $6a7db85432448f7f$export$29bf1b5f2c56cf63),
/* harmony export */   Y: () => (/* binding */ $6a7db85432448f7f$export$60278871457622de)
/* harmony export */ });
/* harmony import */ var _platform_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69202);


/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $6a7db85432448f7f$export$60278871457622de(event) {
    // JAWS/NVDA with Firefox.
    if (event.mozInputSource === 0 && event.isTrusted) return true;
    // Android TalkBack's detail value varies depending on the event listener providing the event so we have specific logic here instead
    // If pointerType is defined, event is from a click listener. For events from mousedown listener, detail === 0 is a sufficient check
    // to detect TalkBack virtual clicks.
    if ((0, _platform_mjs__WEBPACK_IMPORTED_MODULE_0__/* .isAndroid */ .m0)() && event.pointerType) return event.type === 'click' && event.buttons === 1;
    return event.detail === 0 && !event.pointerType;
}
function $6a7db85432448f7f$export$29bf1b5f2c56cf63(event) {
    // If the pointer size is zero, then we assume it's from a screen reader.
    // Android TalkBack double tap will sometimes return a event with width and height of 1
    // and pointerType === 'mouse' so we need to check for a specific combination of event attributes.
    // Cannot use "event.pressure === 0" as the sole check due to Safari pointer events always returning pressure === 0
    // instead of .5, see https://bugs.webkit.org/show_bug.cgi?id=206216. event.pointerType === 'mouse' is to distingush
    // Talkback double tap from Windows Firefox touch screen press
    return !(0, _platform_mjs__WEBPACK_IMPORTED_MODULE_0__/* .isAndroid */ .m0)() && event.width === 0 && event.height === 0 || event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === 'mouse';
}



//# sourceMappingURL=isVirtualEvent.module.js.map


/***/ }),

/***/ 32217:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ $3ef42575df84b30b$export$9d1611c77c2fe928)
/* harmony export */ });
/* harmony import */ var _chain_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72166);
/* harmony import */ var _useId_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84137);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34164);




/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $3ef42575df84b30b$export$9d1611c77c2fe928(...args) {
    // Start with a base clone of the first argument. This is a lot faster than starting
    // with an empty object and adding properties as we go.
    let result = {
        ...args[0]
    };
    for(let i = 1; i < args.length; i++){
        let props = args[i];
        for(let key in props){
            let a = result[key];
            let b = props[key];
            // Chain events
            if (typeof a === 'function' && typeof b === 'function' && // This is a lot faster than a regex.
            key[0] === 'o' && key[1] === 'n' && key.charCodeAt(2) >= /* 'A' */ 65 && key.charCodeAt(2) <= /* 'Z' */ 90) result[key] = (0, _chain_mjs__WEBPACK_IMPORTED_MODULE_0__/* .chain */ .c)(a, b);
            else if ((key === 'className' || key === 'UNSAFE_className') && typeof a === 'string' && typeof b === 'string') result[key] = (0, clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(a, b);
            else if (key === 'id' && a && b) result.id = (0, _useId_mjs__WEBPACK_IMPORTED_MODULE_2__/* .mergeIds */ .Tw)(a, b);
            else result[key] = b !== undefined ? b : a;
        }
    }
    return result;
}



//# sourceMappingURL=mergeProps.module.js.map


/***/ }),

/***/ 17099:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ $5dc95899b306f630$export$c9058316764c140e)
/* harmony export */ });
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $5dc95899b306f630$export$c9058316764c140e(...refs) {
    if (refs.length === 1 && refs[0]) return refs[0];
    return (value)=>{
        for (let ref of refs){
            if (typeof ref === 'function') ref(value);
            else if (ref != null) ref.current = value;
        }
    };
}



//# sourceMappingURL=mergeRefs.module.js.map


/***/ }),

/***/ 43831:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fe: () => (/* binding */ $ea8dcbcb9ea1b556$export$95185d699e05d4d7),
/* harmony export */   HI: () => (/* binding */ $ea8dcbcb9ea1b556$export$bdc77b0c0a3a85d6),
/* harmony export */   _h: () => (/* binding */ $ea8dcbcb9ea1b556$export$7e924b3091a3bd18),
/* harmony export */   pg: () => (/* binding */ $ea8dcbcb9ea1b556$export$323e4fc2fa4753fb),
/* harmony export */   rd: () => (/* binding */ $ea8dcbcb9ea1b556$export$9a302a45f65d0572),
/* harmony export */   sU: () => (/* binding */ $ea8dcbcb9ea1b556$export$efa8c9099e530235)
/* harmony export */ });
/* unused harmony export getSyntheticLinkProps */
/* harmony import */ var _focusWithoutScrolling_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32268);
/* harmony import */ var _platform_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69202);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);




/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


const $ea8dcbcb9ea1b556$var$RouterContext = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    isNative: true,
    open: $ea8dcbcb9ea1b556$var$openSyntheticLink,
    useHref: (href)=>href
});
function $ea8dcbcb9ea1b556$export$323e4fc2fa4753fb(props) {
    let { children: children, navigate: navigate, useHref: useHref } = props;
    let ctx = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({
            isNative: false,
            open: (target, modifiers, href, routerOptions)=>{
                $ea8dcbcb9ea1b556$var$getSyntheticLink(target, (link)=>{
                    if ($ea8dcbcb9ea1b556$export$efa8c9099e530235(link, modifiers)) navigate(href, routerOptions);
                    else $ea8dcbcb9ea1b556$export$95185d699e05d4d7(link, modifiers);
                });
            },
            useHref: useHref || ((href)=>href)
        }), [
        navigate,
        useHref
    ]);
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement($ea8dcbcb9ea1b556$var$RouterContext.Provider, {
        value: ctx
    }, children);
}
function $ea8dcbcb9ea1b556$export$9a302a45f65d0572() {
    return (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($ea8dcbcb9ea1b556$var$RouterContext);
}
function $ea8dcbcb9ea1b556$export$efa8c9099e530235(link, modifiers) {
    // Use getAttribute here instead of link.target. Firefox will default link.target to "_parent" when inside an iframe.
    let target = link.getAttribute('target');
    return (!target || target === '_self') && link.origin === location.origin && !link.hasAttribute('download') && !modifiers.metaKey && // open in new tab (mac)
    !modifiers.ctrlKey && // open in new tab (windows)
    !modifiers.altKey && // download
    !modifiers.shiftKey;
}
function $ea8dcbcb9ea1b556$export$95185d699e05d4d7(target, modifiers, setOpening = true) {
    var _window_event_type, _window_event;
    let { metaKey: metaKey, ctrlKey: ctrlKey, altKey: altKey, shiftKey: shiftKey } = modifiers;
    // Firefox does not recognize keyboard events as a user action by default, and the popup blocker
    // will prevent links with target="_blank" from opening. However, it does allow the event if the
    // Command/Control key is held, which opens the link in a background tab. This seems like the best we can do.
    // See https://bugzilla.mozilla.org/show_bug.cgi?id=257870 and https://bugzilla.mozilla.org/show_bug.cgi?id=746640.
    if ((0, _platform_mjs__WEBPACK_IMPORTED_MODULE_1__/* .isFirefox */ .gm)() && ((_window_event = window.event) === null || _window_event === void 0 ? void 0 : (_window_event_type = _window_event.type) === null || _window_event_type === void 0 ? void 0 : _window_event_type.startsWith('key')) && target.target === '_blank') {
        if ((0, _platform_mjs__WEBPACK_IMPORTED_MODULE_1__/* .isMac */ .cX)()) metaKey = true;
        else ctrlKey = true;
    }
    // WebKit does not support firing click events with modifier keys, but does support keyboard events.
    // https://github.com/WebKit/WebKit/blob/c03d0ac6e6db178f90923a0a63080b5ca210d25f/Source/WebCore/html/HTMLAnchorElement.cpp#L184
    let event = (0, _platform_mjs__WEBPACK_IMPORTED_MODULE_1__/* .isWebKit */ .Tc)() && (0, _platform_mjs__WEBPACK_IMPORTED_MODULE_1__/* .isMac */ .cX)() && !(0, _platform_mjs__WEBPACK_IMPORTED_MODULE_1__/* .isIPad */ .bh)() && true ? new KeyboardEvent('keydown', {
        keyIdentifier: 'Enter',
        metaKey: metaKey,
        ctrlKey: ctrlKey,
        altKey: altKey,
        shiftKey: shiftKey
    }) : new MouseEvent('click', {
        metaKey: metaKey,
        ctrlKey: ctrlKey,
        altKey: altKey,
        shiftKey: shiftKey,
        bubbles: true,
        cancelable: true
    });
    $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = setOpening;
    (0, _focusWithoutScrolling_mjs__WEBPACK_IMPORTED_MODULE_2__/* .focusWithoutScrolling */ .e)(target);
    target.dispatchEvent(event);
    $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = false;
}
// https://github.com/parcel-bundler/parcel/issues/8724
$ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = false;
function $ea8dcbcb9ea1b556$var$getSyntheticLink(target, open) {
    if (target instanceof HTMLAnchorElement) open(target);
    else if (target.hasAttribute('data-href')) {
        let link = document.createElement('a');
        link.href = target.getAttribute('data-href');
        if (target.hasAttribute('data-target')) link.target = target.getAttribute('data-target');
        if (target.hasAttribute('data-rel')) link.rel = target.getAttribute('data-rel');
        if (target.hasAttribute('data-download')) link.download = target.getAttribute('data-download');
        if (target.hasAttribute('data-ping')) link.ping = target.getAttribute('data-ping');
        if (target.hasAttribute('data-referrer-policy')) link.referrerPolicy = target.getAttribute('data-referrer-policy');
        target.appendChild(link);
        open(link);
        target.removeChild(link);
    }
}
function $ea8dcbcb9ea1b556$var$openSyntheticLink(target, modifiers) {
    $ea8dcbcb9ea1b556$var$getSyntheticLink(target, (link)=>$ea8dcbcb9ea1b556$export$95185d699e05d4d7(link, modifiers));
}
function $ea8dcbcb9ea1b556$export$bdc77b0c0a3a85d6(props) {
    let router = $ea8dcbcb9ea1b556$export$9a302a45f65d0572();
    var _props_href;
    const href = router.useHref((_props_href = props.href) !== null && _props_href !== void 0 ? _props_href : '');
    return {
        'data-href': props.href ? href : undefined,
        'data-target': props.target,
        'data-rel': props.rel,
        'data-download': props.download,
        'data-ping': props.ping,
        'data-referrer-policy': props.referrerPolicy
    };
}
function $ea8dcbcb9ea1b556$export$51437d503373d223(props) {
    return {
        'data-href': props.href,
        'data-target': props.target,
        'data-rel': props.rel,
        'data-download': props.download,
        'data-ping': props.ping,
        'data-referrer-policy': props.referrerPolicy
    };
}
function $ea8dcbcb9ea1b556$export$7e924b3091a3bd18(props) {
    let router = $ea8dcbcb9ea1b556$export$9a302a45f65d0572();
    var _props_href;
    const href = router.useHref((_props_href = props === null || props === void 0 ? void 0 : props.href) !== null && _props_href !== void 0 ? _props_href : '');
    return {
        href: (props === null || props === void 0 ? void 0 : props.href) ? href : undefined,
        target: props === null || props === void 0 ? void 0 : props.target,
        rel: props === null || props === void 0 ? void 0 : props.rel,
        download: props === null || props === void 0 ? void 0 : props.download,
        ping: props === null || props === void 0 ? void 0 : props.ping,
        referrerPolicy: props === null || props === void 0 ? void 0 : props.referrerPolicy
    };
}



//# sourceMappingURL=openLink.module.js.map


/***/ }),

/***/ 69202:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H8: () => (/* binding */ $c87311424ea30a05$export$6446a186d09e379e),
/* harmony export */   Tc: () => (/* binding */ $c87311424ea30a05$export$78551043582a6a98),
/* harmony export */   bh: () => (/* binding */ $c87311424ea30a05$export$7bef049ce92e4224),
/* harmony export */   cX: () => (/* binding */ $c87311424ea30a05$export$9ac100e40613ea10),
/* harmony export */   gm: () => (/* binding */ $c87311424ea30a05$export$b7d78993b74f766d),
/* harmony export */   lg: () => (/* binding */ $c87311424ea30a05$export$e1865c3bedcd822b),
/* harmony export */   m0: () => (/* binding */ $c87311424ea30a05$export$a11b0059900ceec8),
/* harmony export */   un: () => (/* binding */ $c87311424ea30a05$export$fedb369cb70207f1)
/* harmony export */ });
/* unused harmony export isIPhone */
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $c87311424ea30a05$var$testUserAgent(re) {
    var _window_navigator_userAgentData;
    if (typeof window === 'undefined' || window.navigator == null) return false;
    return ((_window_navigator_userAgentData = window.navigator['userAgentData']) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.brands.some((brand)=>re.test(brand.brand))) || re.test(window.navigator.userAgent);
}
function $c87311424ea30a05$var$testPlatform(re) {
    var _window_navigator_userAgentData;
    return typeof window !== 'undefined' && window.navigator != null ? re.test(((_window_navigator_userAgentData = window.navigator['userAgentData']) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.platform) || window.navigator.platform) : false;
}
function $c87311424ea30a05$var$cached(fn) {
    let res = null;
    return ()=>{
        if (res == null) res = fn();
        return res;
    };
}
const $c87311424ea30a05$export$9ac100e40613ea10 = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$var$testPlatform(/^Mac/i);
});
const $c87311424ea30a05$export$186c6964ca17d99 = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$var$testPlatform(/^iPhone/i);
});
const $c87311424ea30a05$export$7bef049ce92e4224 = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$var$testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
    $c87311424ea30a05$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
});
const $c87311424ea30a05$export$fedb369cb70207f1 = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$export$186c6964ca17d99() || $c87311424ea30a05$export$7bef049ce92e4224();
});
const $c87311424ea30a05$export$e1865c3bedcd822b = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$export$9ac100e40613ea10() || $c87311424ea30a05$export$fedb369cb70207f1();
});
const $c87311424ea30a05$export$78551043582a6a98 = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$var$testUserAgent(/AppleWebKit/i) && !$c87311424ea30a05$export$6446a186d09e379e();
});
const $c87311424ea30a05$export$6446a186d09e379e = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$var$testUserAgent(/Chrome/i);
});
const $c87311424ea30a05$export$a11b0059900ceec8 = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$var$testUserAgent(/Android/i);
});
const $c87311424ea30a05$export$b7d78993b74f766d = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$var$testUserAgent(/Firefox/i);
});



//# sourceMappingURL=platform.module.js.map


/***/ }),

/***/ 47233:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ $bbed8b41f857bcc0$export$24490316f764c430)
/* harmony export */ });
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // We store a global list of elements that are currently transitioning,
// mapped to a set of CSS properties that are transitioning for that element.
// This is necessary rather than a simple count of transitions because of browser
// bugs, e.g. Chrome sometimes fires both transitionend and transitioncancel rather
// than one or the other. So we need to track what's actually transitioning so that
// we can ignore these duplicate events.
let $bbed8b41f857bcc0$var$transitionsByElement = new Map();
// A list of callbacks to call once there are no transitioning elements.
let $bbed8b41f857bcc0$var$transitionCallbacks = new Set();
function $bbed8b41f857bcc0$var$setupGlobalEvents() {
    if (typeof window === 'undefined') return;
    function isTransitionEvent(event) {
        return 'propertyName' in event;
    }
    let onTransitionStart = (e)=>{
        if (!isTransitionEvent(e) || !e.target) return;
        // Add the transitioning property to the list for this element.
        let transitions = $bbed8b41f857bcc0$var$transitionsByElement.get(e.target);
        if (!transitions) {
            transitions = new Set();
            $bbed8b41f857bcc0$var$transitionsByElement.set(e.target, transitions);
            // The transitioncancel event must be registered on the element itself, rather than as a global
            // event. This enables us to handle when the node is deleted from the document while it is transitioning.
            // In that case, the cancel event would have nowhere to bubble to so we need to handle it directly.
            e.target.addEventListener('transitioncancel', onTransitionEnd, {
                once: true
            });
        }
        transitions.add(e.propertyName);
    };
    let onTransitionEnd = (e)=>{
        if (!isTransitionEvent(e) || !e.target) return;
        // Remove property from list of transitioning properties.
        let properties = $bbed8b41f857bcc0$var$transitionsByElement.get(e.target);
        if (!properties) return;
        properties.delete(e.propertyName);
        // If empty, remove transitioncancel event, and remove the element from the list of transitioning elements.
        if (properties.size === 0) {
            e.target.removeEventListener('transitioncancel', onTransitionEnd);
            $bbed8b41f857bcc0$var$transitionsByElement.delete(e.target);
        }
        // If no transitioning elements, call all of the queued callbacks.
        if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) {
            for (let cb of $bbed8b41f857bcc0$var$transitionCallbacks)cb();
            $bbed8b41f857bcc0$var$transitionCallbacks.clear();
        }
    };
    document.body.addEventListener('transitionrun', onTransitionStart);
    document.body.addEventListener('transitionend', onTransitionEnd);
}
if (typeof document !== 'undefined') {
    if (document.readyState !== 'loading') $bbed8b41f857bcc0$var$setupGlobalEvents();
    else document.addEventListener('DOMContentLoaded', $bbed8b41f857bcc0$var$setupGlobalEvents);
}
function $bbed8b41f857bcc0$export$24490316f764c430(fn) {
    // Wait one frame to see if an animation starts, e.g. a transition on mount.
    requestAnimationFrame(()=>{
        // If no transitions are running, call the function immediately.
        // Otherwise, add it to a list of callbacks to run at the end of the animation.
        if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) fn();
        else $bbed8b41f857bcc0$var$transitionCallbacks.add(fn);
    });
}



//# sourceMappingURL=runAfterTransition.module.js.map


/***/ }),

/***/ 7049:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ $8ae05eaa5c114e9c$export$7f54fc3180508a52)
/* harmony export */ });
/* harmony import */ var _useLayoutEffect_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49953);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);



/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $8ae05eaa5c114e9c$export$7f54fc3180508a52(fn) {
    const ref = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0, _useLayoutEffect_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useLayoutEffect */ .N)(()=>{
        ref.current = fn;
    }, [
        fn
    ]);
    // @ts-ignore
    return (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((...args)=>{
        const f = ref.current;
        return f === null || f === void 0 ? void 0 : f(...args);
    }, []);
}



//# sourceMappingURL=useEffectEvent.module.js.map


/***/ }),

/***/ 17460:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ $e9faafb641e167db$export$90fc3a17d93f704c)
/* harmony export */ });
/* harmony import */ var _useEffectEvent_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7049);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);



/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $e9faafb641e167db$export$90fc3a17d93f704c(ref, event, handler, options) {
    let handleEvent = (0, _useEffectEvent_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useEffectEvent */ .J)(handler);
    let isDisabled = handler == null;
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (isDisabled || !ref.current) return;
        let element = ref.current;
        element.addEventListener(event, handleEvent, options);
        return ()=>{
            element.removeEventListener(event, handleEvent, options);
        };
    }, [
        ref,
        event,
        options,
        isDisabled,
        handleEvent
    ]);
}



//# sourceMappingURL=useEvent.module.js.map


/***/ }),

/***/ 76948:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ $03deb23ff14920c4$export$4eaf04e54aa8eed6)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $03deb23ff14920c4$export$4eaf04e54aa8eed6() {
    let globalListeners = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Map());
    let addGlobalListener = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((eventTarget, type, listener, options)=>{
        // Make sure we remove the listener after it is called with the `once` option.
        let fn = (options === null || options === void 0 ? void 0 : options.once) ? (...args)=>{
            globalListeners.current.delete(listener);
            listener(...args);
        } : listener;
        globalListeners.current.set(listener, {
            type: type,
            eventTarget: eventTarget,
            fn: fn,
            options: options
        });
        eventTarget.addEventListener(type, fn, options);
    }, []);
    let removeGlobalListener = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((eventTarget, type, listener, options)=>{
        var _globalListeners_current_get;
        let fn = ((_globalListeners_current_get = globalListeners.current.get(listener)) === null || _globalListeners_current_get === void 0 ? void 0 : _globalListeners_current_get.fn) || listener;
        eventTarget.removeEventListener(type, fn, options);
        globalListeners.current.delete(listener);
    }, []);
    let removeAllGlobalListeners = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        globalListeners.current.forEach((value, key)=>{
            removeGlobalListener(value.eventTarget, value.type, key, value.options);
        });
    }, [
        removeGlobalListener
    ]);
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        return removeAllGlobalListeners;
    }, [
        removeAllGlobalListeners
    ]);
    return {
        addGlobalListener: addGlobalListener,
        removeGlobalListener: removeGlobalListener,
        removeAllGlobalListeners: removeAllGlobalListeners
    };
}



//# sourceMappingURL=useGlobalListeners.module.js.map


/***/ }),

/***/ 84137:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Tw: () => (/* binding */ $bdb11010cef70236$export$cd8c9cb68f842629),
  Bi: () => (/* binding */ $bdb11010cef70236$export$f680877a34711e37),
  X1: () => (/* binding */ $bdb11010cef70236$export$b4cc09c592e8fdb8)
});

// UNUSED EXPORTS: idsUpdaterMap

// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useLayoutEffect.mjs
var useLayoutEffect = __webpack_require__(49953);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useEffectEvent.mjs
var useEffectEvent = __webpack_require__(7049);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/@react-aria/utils/dist/useValueEffect.mjs




/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $1dbecbe27a04f9af$export$14d238f342723f25(defaultValue) {
    let [value, setValue] = (0, react.useState)(defaultValue);
    let effect = (0, react.useRef)(null);
    // Store the function in a ref so we can always access the current version
    // which has the proper `value` in scope.
    let nextRef = (0, useEffectEvent/* useEffectEvent */.J)(()=>{
        if (!effect.current) return;
        // Run the generator to the next yield.
        let newValue = effect.current.next();
        // If the generator is done, reset the effect.
        if (newValue.done) {
            effect.current = null;
            return;
        }
        // If the value is the same as the current value,
        // then continue to the next yield. Otherwise,
        // set the value in state and wait for the next layout effect.
        if (value === newValue.value) nextRef();
        else setValue(newValue.value);
    });
    (0, useLayoutEffect/* useLayoutEffect */.N)(()=>{
        // If there is an effect currently running, continue to the next yield.
        if (effect.current) nextRef();
    });
    let queue = (0, useEffectEvent/* useEffectEvent */.J)((fn)=>{
        effect.current = fn(value);
        nextRef();
    });
    return [
        value,
        queue
    ];
}



//# sourceMappingURL=useValueEffect.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/ssr/dist/SSRProvider.mjs
var SSRProvider = __webpack_require__(60415);
;// ./node_modules/@react-aria/utils/dist/useId.mjs





/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



// copied from SSRProvider.tsx to reduce exports, if needed again, consider sharing
let $bdb11010cef70236$var$canUseDOM = Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);
let $bdb11010cef70236$export$d41a04c74483c6ef = new Map();
// This allows us to clean up the idsUpdaterMap when the id is no longer used.
// Map is a strong reference, so unused ids wouldn't be cleaned up otherwise.
// This can happen in suspended components where mount/unmount is not called.
let $bdb11010cef70236$var$registry;
if (typeof FinalizationRegistry !== 'undefined') $bdb11010cef70236$var$registry = new FinalizationRegistry((heldValue)=>{
    $bdb11010cef70236$export$d41a04c74483c6ef.delete(heldValue);
});
function $bdb11010cef70236$export$f680877a34711e37(defaultId) {
    let [value, setValue] = (0, react.useState)(defaultId);
    let nextId = (0, react.useRef)(null);
    let res = (0, SSRProvider/* useSSRSafeId */.Cc)(value);
    let cleanupRef = (0, react.useRef)(null);
    if ($bdb11010cef70236$var$registry) $bdb11010cef70236$var$registry.register(cleanupRef, res);
    if ($bdb11010cef70236$var$canUseDOM) {
        const cacheIdRef = $bdb11010cef70236$export$d41a04c74483c6ef.get(res);
        if (cacheIdRef && !cacheIdRef.includes(nextId)) cacheIdRef.push(nextId);
        else $bdb11010cef70236$export$d41a04c74483c6ef.set(res, [
            nextId
        ]);
    }
    (0, useLayoutEffect/* useLayoutEffect */.N)(()=>{
        let r = res;
        return ()=>{
            // In Suspense, the cleanup function may be not called
            // when it is though, also remove it from the finalization registry.
            if ($bdb11010cef70236$var$registry) $bdb11010cef70236$var$registry.unregister(cleanupRef);
            $bdb11010cef70236$export$d41a04c74483c6ef.delete(r);
        };
    }, [
        res
    ]);
    // This cannot cause an infinite loop because the ref is always cleaned up.
    // eslint-disable-next-line
    (0, react.useEffect)(()=>{
        let newId = nextId.current;
        if (newId) setValue(newId);
        return ()=>{
            if (newId) nextId.current = null;
        };
    });
    return res;
}
function $bdb11010cef70236$export$cd8c9cb68f842629(idA, idB) {
    if (idA === idB) return idA;
    let setIdsA = $bdb11010cef70236$export$d41a04c74483c6ef.get(idA);
    if (setIdsA) {
        setIdsA.forEach((ref)=>ref.current = idB);
        return idB;
    }
    let setIdsB = $bdb11010cef70236$export$d41a04c74483c6ef.get(idB);
    if (setIdsB) {
        setIdsB.forEach((ref)=>ref.current = idA);
        return idA;
    }
    return idB;
}
function $bdb11010cef70236$export$b4cc09c592e8fdb8(depArray = []) {
    let id = $bdb11010cef70236$export$f680877a34711e37();
    let [resolvedId, setResolvedId] = (0, $1dbecbe27a04f9af$export$14d238f342723f25)(id);
    let updateId = (0, react.useCallback)(()=>{
        setResolvedId(function*() {
            yield id;
            yield document.getElementById(id) ? id : undefined;
        });
    }, [
        id,
        setResolvedId
    ]);
    (0, useLayoutEffect/* useLayoutEffect */.N)(updateId, [
        id,
        updateId,
        ...depArray
    ]);
    return resolvedId;
}



//# sourceMappingURL=useId.module.js.map


/***/ }),

/***/ 37061:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ $313b98861ee5dd6c$export$d6875122194c7b44)
/* harmony export */ });
/* harmony import */ var _useId_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84137);


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $313b98861ee5dd6c$export$d6875122194c7b44(props, defaultLabel) {
    let { id: id, 'aria-label': label, 'aria-labelledby': labelledBy } = props;
    // If there is both an aria-label and aria-labelledby,
    // combine them by pointing to the element itself.
    id = (0, _useId_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useId */ .Bi)(id);
    if (labelledBy && label) {
        let ids = new Set([
            id,
            ...labelledBy.trim().split(/\s+/)
        ]);
        labelledBy = [
            ...ids
        ].join(' ');
    } else if (labelledBy) labelledBy = labelledBy.trim().split(/\s+/).join(' ');
    // If no labels are provided, use the default
    if (!label && !labelledBy && defaultLabel) label = defaultLabel;
    return {
        id: id,
        'aria-label': label,
        'aria-labelledby': labelledBy
    };
}



//# sourceMappingURL=useLabels.module.js.map


/***/ }),

/***/ 49953:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
const $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof document !== 'undefined' ? (0, react__WEBPACK_IMPORTED_MODULE_0__).useLayoutEffect : ()=>{};



//# sourceMappingURL=useLayoutEffect.module.js.map


/***/ }),

/***/ 83908:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ $df56164dff5785e2$export$4338b53315abf666)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);


/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $df56164dff5785e2$export$4338b53315abf666(forwardedRef) {
    const objRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    return (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({
            get current () {
                return objRef.current;
            },
            set current (value){
                objRef.current = value;
                if (typeof forwardedRef === 'function') forwardedRef(value);
                else if (forwardedRef) forwardedRef.current = value;
            }
        }), [
        forwardedRef
    ]);
}



//# sourceMappingURL=useObjectRef.module.js.map


/***/ }),

/***/ 6660:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ $e7801be82b4b2a53$export$4debdb1a3f0fa79e)
/* harmony export */ });
/* harmony import */ var _useLayoutEffect_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49953);


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $e7801be82b4b2a53$export$4debdb1a3f0fa79e(context, ref) {
    (0, _useLayoutEffect_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useLayoutEffect */ .N)(()=>{
        if (context && context.ref && ref) {
            context.ref.current = ref.current;
            return ()=>{
                if (context.ref) context.ref.current = null;
            };
        }
    });
}



//# sourceMappingURL=useSyncRef.module.js.map


/***/ }),

/***/ 93399:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D5: () => (/* binding */ $f4e2df6bd15f8569$export$1b00cb14a96194e6),
/* harmony export */   Nf: () => (/* binding */ $f4e2df6bd15f8569$export$98658e8c59125e6a)
/* harmony export */ });
/* unused harmony exports enableTableNestedRows, enableShadowDOM */
/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ let $f4e2df6bd15f8569$var$_tableNestedRows = false;
let $f4e2df6bd15f8569$var$_shadowDOM = false;
function $f4e2df6bd15f8569$export$d9d8a0f82de49530() {
    $f4e2df6bd15f8569$var$_tableNestedRows = true;
}
function $f4e2df6bd15f8569$export$1b00cb14a96194e6() {
    return $f4e2df6bd15f8569$var$_tableNestedRows;
}
function $f4e2df6bd15f8569$export$12b151d9882e9985() {
    $f4e2df6bd15f8569$var$_shadowDOM = true;
}
function $f4e2df6bd15f8569$export$98658e8c59125e6a() {
    return $f4e2df6bd15f8569$var$_shadowDOM;
}



//# sourceMappingURL=module.js.map


/***/ }),

/***/ 91945:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   qE: () => (/* binding */ $9446cca9a3875146$export$7d15b64cf5a3a4c4)
/* harmony export */ });
/* unused harmony exports roundToStepPrecision, snapValueToStep, toFixedNumber */
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /**
 * Takes a value and forces it to the closest min/max if it's outside. Also forces it to the closest valid step.
 */ function $9446cca9a3875146$export$7d15b64cf5a3a4c4(value, min = -Infinity, max = Infinity) {
    let newValue = Math.min(Math.max(value, min), max);
    return newValue;
}
function $9446cca9a3875146$export$e1a7b8e69ef6c52f(value, step) {
    let roundedValue = value;
    let stepString = step.toString();
    let pointIndex = stepString.indexOf('.');
    let precision = pointIndex >= 0 ? stepString.length - pointIndex : 0;
    if (precision > 0) {
        let pow = Math.pow(10, precision);
        roundedValue = Math.round(roundedValue * pow) / pow;
    }
    return roundedValue;
}
function $9446cca9a3875146$export$cb6e0bb50bc19463(value, min, max, step) {
    min = Number(min);
    max = Number(max);
    let remainder = (value - (isNaN(min) ? 0 : min)) % step;
    let snappedValue = $9446cca9a3875146$export$e1a7b8e69ef6c52f(Math.abs(remainder) * 2 >= step ? value + Math.sign(remainder) * (step - Math.abs(remainder)) : value - remainder, step);
    if (!isNaN(min)) {
        if (snappedValue < min) snappedValue = min;
        else if (!isNaN(max) && snappedValue > max) snappedValue = min + Math.floor($9446cca9a3875146$export$e1a7b8e69ef6c52f((max - min) / step, step)) * step;
    } else if (!isNaN(max) && snappedValue > max) snappedValue = Math.floor($9446cca9a3875146$export$e1a7b8e69ef6c52f(max / step, step)) * step;
    // correct floating point behavior by rounding to step precision
    snappedValue = $9446cca9a3875146$export$e1a7b8e69ef6c52f(snappedValue, step);
    return snappedValue;
}
function $9446cca9a3875146$export$b6268554fba451f(value, digits, base = 10) {
    const pow = Math.pow(base, digits);
    return Math.round(value * pow) / pow;
}



//# sourceMappingURL=number.module.js.map


/***/ }),

/***/ 8356:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ $458b0a5536c1a7cf$export$40bfa8c7b0832715)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $458b0a5536c1a7cf$export$40bfa8c7b0832715(value, defaultValue, onChange) {
    let [stateValue, setStateValue] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(value || defaultValue);
    let isControlledRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value !== undefined);
    let isControlled = value !== undefined;
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let wasControlled = isControlledRef.current;
        if (wasControlled !== isControlled) console.warn(`WARN: A component changed from ${wasControlled ? 'controlled' : 'uncontrolled'} to ${isControlled ? 'controlled' : 'uncontrolled'}.`);
        isControlledRef.current = isControlled;
    }, [
        isControlled
    ]);
    let currentValue = isControlled ? value : stateValue;
    let setValue = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((value, ...args)=>{
        let onChangeCaller = (value, ...onChangeArgs)=>{
            if (onChange) {
                if (!Object.is(currentValue, value)) onChange(value, ...onChangeArgs);
            }
            if (!isControlled) // If uncontrolled, mutate the currentValue local variable so that
            // calling setState multiple times with the same value only emits onChange once.
            // We do not use a ref for this because we specifically _do_ want the value to
            // reset every render, and assigning to a ref in render breaks aborted suspended renders.
            // eslint-disable-next-line react-hooks/exhaustive-deps
            currentValue = value;
        };
        if (typeof value === 'function') {
            console.warn('We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320');
            // this supports functional updates https://reactjs.org/docs/hooks-reference.html#functional-updates
            // when someone using useControlledState calls setControlledState(myFunc)
            // this will call our useState setState with a function as well which invokes myFunc and calls onChange with the value from myFunc
            // if we're in an uncontrolled state, then we also return the value of myFunc which to setState looks as though it was just called with myFunc from the beginning
            // otherwise we just return the controlled value, which won't cause a rerender because React knows to bail out when the value is the same
            let updateFunction = (oldValue, ...functionArgs)=>{
                let interceptedValue = value(isControlled ? currentValue : oldValue, ...functionArgs);
                onChangeCaller(interceptedValue, ...args);
                if (!isControlled) return interceptedValue;
                return oldValue;
            };
            setStateValue(updateFunction);
        } else {
            if (!isControlled) setStateValue(value);
            onChangeCaller(value, ...args);
        }
    }, [
        isControlled,
        currentValue,
        onChange
    ]);
    return [
        currentValue,
        setValue
    ];
}



//# sourceMappingURL=useControlledState.module.js.map


/***/ }),

/***/ 20051:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  _: () => (/* binding */ _class_private_field_init)
});

;// ./node_modules/@swc/helpers/esm/_check_private_redeclaration.js
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}


;// ./node_modules/@swc/helpers/esm/_class_private_field_init.js


function _class_private_field_init(obj, privateMap, value) {
    _check_private_redeclaration(obj, privateMap);
    privateMap.set(obj, value);
}



/***/ }),

/***/ 65014:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ $d2b4bc8c273e7be6$export$353f5b6fc5456de1),
/* harmony export */   k: () => (/* binding */ $d2b4bc8c273e7be6$export$24d547caef80ccd1)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5933);
/* harmony import */ var _ProgressBar_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(39565);
/* harmony import */ var _react_aria_live_announcer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60771);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69229);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16133);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16638);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84137);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32217);
/* harmony import */ var _react_aria_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75127);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5987);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);








/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 






const $d2b4bc8c273e7be6$var$additionalButtonHTMLAttributes = new Set([
    'form',
    'formAction',
    'formEncType',
    'formMethod',
    'formNoValidate',
    'formTarget',
    'name',
    'value'
]);
const $d2b4bc8c273e7be6$export$24d547caef80ccd1 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const $d2b4bc8c273e7be6$export$353f5b6fc5456de1 = /*#__PURE__*/ (0, _react_aria_collections__WEBPACK_IMPORTED_MODULE_1__/* .createHideableComponent */ .U7)(function Button(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useContextProps */ .JT)(props, ref, $d2b4bc8c273e7be6$export$24d547caef80ccd1);
    props = $d2b4bc8c273e7be6$var$disablePendingProps(props);
    let ctx = props;
    let { isPending: isPending } = ctx;
    let { buttonProps: buttonProps, isPressed: isPressed } = (0, react_aria__WEBPACK_IMPORTED_MODULE_3__/* .useButton */ .s)(props, ref);
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, react_aria__WEBPACK_IMPORTED_MODULE_4__/* .useFocusRing */ .o)(props);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, react_aria__WEBPACK_IMPORTED_MODULE_5__/* .useHover */ .M)({
        ...props,
        isDisabled: props.isDisabled || isPending
    });
    let renderValues = {
        isHovered: isHovered,
        isPressed: (ctx.isPressed || isPressed) && !isPending,
        isFocused: isFocused,
        isFocusVisible: isFocusVisible,
        isDisabled: props.isDisabled || false,
        isPending: isPending !== null && isPending !== void 0 ? isPending : false
    };
    let renderProps = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useRenderProps */ .Sl)({
        ...props,
        values: renderValues,
        defaultClassName: 'react-aria-Button'
    });
    let buttonId = (0, react_aria__WEBPACK_IMPORTED_MODULE_6__/* .useId */ .Bi)(buttonProps.id);
    let progressId = (0, react_aria__WEBPACK_IMPORTED_MODULE_6__/* .useId */ .Bi)();
    let ariaLabelledby = buttonProps['aria-labelledby'];
    if (isPending) {
        // aria-labelledby wins over aria-label
        // https://www.w3.org/TR/accname-1.2/#computation-steps
        if (ariaLabelledby) ariaLabelledby = `${ariaLabelledby} ${progressId}`;
        else if (buttonProps['aria-label']) ariaLabelledby = `${buttonId} ${progressId}`;
    }
    let wasPending = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(isPending);
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let message = {
            'aria-labelledby': ariaLabelledby || buttonId
        };
        if (!wasPending.current && isFocused && isPending) (0, _react_aria_live_announcer__WEBPACK_IMPORTED_MODULE_7__/* .announce */ .iP)(message, 'assertive');
        else if (wasPending.current && isFocused && !isPending) (0, _react_aria_live_announcer__WEBPACK_IMPORTED_MODULE_7__/* .announce */ .iP)(message, 'assertive');
        wasPending.current = isPending;
    }, [
        isPending,
        isFocused,
        ariaLabelledby,
        buttonId
    ]);
    // When the button is in a pending state, we want to stop implicit form submission (ie. when the user presses enter on a text input).
    // We do this by changing the button's type to button.
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement("button", {
        ...(0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_8__/* .filterDOMProps */ .$)(props, {
            propNames: $d2b4bc8c273e7be6$var$additionalButtonHTMLAttributes
        }),
        ...(0, react_aria__WEBPACK_IMPORTED_MODULE_9__/* .mergeProps */ .v)(buttonProps, focusProps, hoverProps),
        ...renderProps,
        type: buttonProps.type === 'submit' && isPending ? 'button' : buttonProps.type,
        id: buttonId,
        ref: ref,
        "aria-labelledby": ariaLabelledby,
        slot: props.slot || undefined,
        "aria-disabled": isPending ? 'true' : buttonProps['aria-disabled'],
        "data-disabled": props.isDisabled || undefined,
        "data-pressed": renderValues.isPressed || undefined,
        "data-hovered": isHovered || undefined,
        "data-focused": isFocused || undefined,
        "data-pending": isPending || undefined,
        "data-focus-visible": isFocusVisible || undefined
    }, /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement((0, _ProgressBar_mjs__WEBPACK_IMPORTED_MODULE_10__/* .ProgressBarContext */ .K).Provider, {
        value: {
            id: progressId
        }
    }, renderProps.children));
});
function $d2b4bc8c273e7be6$var$disablePendingProps(props) {
    // Don't allow interaction while isPending is true
    if (props.isPending) {
        props.onPress = undefined;
        props.onPressStart = undefined;
        props.onPressEnd = undefined;
        props.onPressChange = undefined;
        props.onPressUp = undefined;
        props.onKeyDown = undefined;
        props.onKeyUp = undefined;
        props.onClick = undefined;
        props.href = undefined;
    }
    return props;
}



//# sourceMappingURL=Button.module.js.map


/***/ }),

/***/ 48569:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  EN: () => (/* binding */ $28f4fd908f0de97f$export$74a362b31437ec83),
  Tw: () => (/* binding */ $28f4fd908f0de97f$export$944aceb4f8c89f10),
  kS: () => (/* binding */ $28f4fd908f0de97f$export$feabaa331e1d464c)
});

// UNUSED EXPORTS: DisclosureContext, DisclosureGroupStateContext, DisclosureStateContext

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Button.mjs
var Button = __webpack_require__(65014);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(40961);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useId.mjs + 1 modules
var useId = __webpack_require__(84137);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useEvent.mjs
var useEvent = __webpack_require__(17460);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useLayoutEffect.mjs
var useLayoutEffect = __webpack_require__(49953);
// EXTERNAL MODULE: ./node_modules/@react-aria/ssr/dist/SSRProvider.mjs
var SSRProvider = __webpack_require__(60415);
;// ./node_modules/@react-aria/disclosure/dist/useDisclosure.mjs





/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



function $5e910fae8e128ead$export$6e3e27031a30522f(props, state, ref) {
    let { isDisabled: isDisabled } = props;
    let triggerId = (0, useId/* useId */.Bi)();
    let panelId = (0, useId/* useId */.Bi)();
    let isSSR = (0, SSRProvider/* useIsSSR */.wR)();
    let supportsBeforeMatch = !isSSR && 'onbeforematch' in document.body;
    let raf = (0, react.useRef)(null);
    let handleBeforeMatch = (0, react.useCallback)(()=>{
        // Wait a frame to revert browser's removal of hidden attribute
        raf.current = requestAnimationFrame(()=>{
            if (ref.current) ref.current.setAttribute('hidden', 'until-found');
        });
        // Force sync state update
        (0, react_dom.flushSync)(()=>{
            state.toggle();
        });
    }, [
        ref,
        state
    ]);
    // @ts-ignore https://github.com/facebook/react/pull/24741
    (0, useEvent/* useEvent */._)(ref, 'beforematch', supportsBeforeMatch ? handleBeforeMatch : null);
    (0, useLayoutEffect/* useLayoutEffect */.N)(()=>{
        // Cancel any pending RAF to prevent stale updates
        if (raf.current) cancelAnimationFrame(raf.current);
        // Until React supports hidden="until-found": https://github.com/facebook/react/pull/24741
        if (supportsBeforeMatch && ref.current && !isDisabled) {
            if (state.isExpanded) ref.current.removeAttribute('hidden');
            else ref.current.setAttribute('hidden', 'until-found');
        }
    }, [
        isDisabled,
        ref,
        state.isExpanded,
        supportsBeforeMatch
    ]);
    (0, react.useEffect)(()=>{
        return ()=>{
            if (raf.current) cancelAnimationFrame(raf.current);
        };
    }, []);
    return {
        buttonProps: {
            id: triggerId,
            'aria-expanded': state.isExpanded,
            'aria-controls': panelId,
            onPress: (e)=>{
                if (!isDisabled && e.pointerType !== 'keyboard') state.toggle();
            },
            isDisabled: isDisabled,
            onPressStart (e) {
                if (e.pointerType === 'keyboard' && !isDisabled) state.toggle();
            }
        },
        panelProps: {
            id: panelId,
            // This can be overridden at the panel element level.
            role: 'group',
            'aria-labelledby': triggerId,
            'aria-hidden': !state.isExpanded,
            hidden: supportsBeforeMatch ? true : !state.isExpanded
        }
    };
}



//# sourceMappingURL=useDisclosure.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/useFocusRing.mjs
var useFocusRing = __webpack_require__(16133);
// EXTERNAL MODULE: ./node_modules/@react-stately/utils/dist/useControlledState.mjs
var useControlledState = __webpack_require__(8356);
;// ./node_modules/@react-stately/disclosure/dist/useDisclosureGroupState.mjs



/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $9385b3affbdec831$export$f36461af0ef4707d(props) {
    let { allowsMultipleExpanded: allowsMultipleExpanded = false, isDisabled: isDisabled = false } = props;
    let [expandedKeys, setExpandedKeys] = (0, useControlledState/* useControlledState */.P)((0, react.useMemo)(()=>props.expandedKeys ? new Set(props.expandedKeys) : undefined, [
        props.expandedKeys
    ]), (0, react.useMemo)(()=>props.defaultExpandedKeys ? new Set(props.defaultExpandedKeys) : new Set(), [
        props.defaultExpandedKeys
    ]), props.onExpandedChange);
    (0, react.useEffect)(()=>{
        // Ensure only one item is expanded if allowsMultipleExpanded is false.
        if (!allowsMultipleExpanded && expandedKeys.size > 1) setExpandedKeys(new Set([
            expandedKeys.values().next().value
        ]));
    });
    return {
        allowsMultipleExpanded: allowsMultipleExpanded,
        isDisabled: isDisabled,
        expandedKeys: expandedKeys,
        setExpandedKeys: setExpandedKeys,
        toggleKey (key) {
            let keys;
            if (allowsMultipleExpanded) {
                keys = new Set(expandedKeys);
                if (keys.has(key)) keys.delete(key);
                else keys.add(key);
            } else keys = new Set(expandedKeys.has(key) ? [] : [
                key
            ]);
            setExpandedKeys(keys);
        }
    };
}



//# sourceMappingURL=useDisclosureGroupState.module.js.map

;// ./node_modules/@react-stately/disclosure/dist/useDisclosureState.mjs



/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $bf996d45f4a36925$export$3fcbf6e4407997e0(props) {
    let [isExpanded, setExpanded] = (0, useControlledState/* useControlledState */.P)(props.isExpanded, props.defaultExpanded || false, props.onExpandedChange);
    const expand = (0, react.useCallback)(()=>{
        setExpanded(true);
    }, [
        setExpanded
    ]);
    const collapse = (0, react.useCallback)(()=>{
        setExpanded(false);
    }, [
        setExpanded
    ]);
    const toggle = (0, react.useCallback)(()=>{
        setExpanded(!isExpanded);
    }, [
        setExpanded,
        isExpanded
    ]);
    return {
        isExpanded: isExpanded,
        setExpanded: setExpanded,
        expand: expand,
        collapse: collapse,
        toggle: toggle
    };
}



//# sourceMappingURL=useDisclosureState.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/mergeRefs.mjs
var mergeRefs = __webpack_require__(17099);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/mergeProps.mjs
var mergeProps = __webpack_require__(32217);
;// ./node_modules/react-aria-components/dist/Disclosure.mjs







/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 





const $28f4fd908f0de97f$export$1d40e3e0cc4d5de = /*#__PURE__*/ (0, react.createContext)(null);
const $28f4fd908f0de97f$export$944aceb4f8c89f10 = /*#__PURE__*/ (0, react.forwardRef)(function DisclosureGroup(props, ref) {
    let state = (0, $9385b3affbdec831$export$f36461af0ef4707d)(props);
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        defaultClassName: 'react-aria-DisclosureGroup',
        values: {
            isDisabled: state.isDisabled,
            state: state
        }
    });
    let domProps = (0, filterDOMProps/* filterDOMProps */.$)(props);
    return /*#__PURE__*/ (0, react).createElement("div", {
        ...domProps,
        ...renderProps,
        ref: ref,
        "data-disabled": props.isDisabled || undefined
    }, /*#__PURE__*/ (0, react).createElement($28f4fd908f0de97f$export$1d40e3e0cc4d5de.Provider, {
        value: state
    }, renderProps.children));
});
const $28f4fd908f0de97f$export$d665dd135a51b28a = /*#__PURE__*/ (0, react.createContext)(null);
const $28f4fd908f0de97f$export$dab3ea4a6ef094da = /*#__PURE__*/ (0, react.createContext)(null);
const $28f4fd908f0de97f$var$InternalDisclosureContext = /*#__PURE__*/ (0, react.createContext)(null);
const $28f4fd908f0de97f$export$74a362b31437ec83 = /*#__PURE__*/ (0, react.forwardRef)(function Disclosure(props, ref) {
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, $28f4fd908f0de97f$export$d665dd135a51b28a);
    let groupState = (0, react.useContext)($28f4fd908f0de97f$export$1d40e3e0cc4d5de);
    let { id: id, ...otherProps } = props;
    // Generate an id if one wasn't provided.
    // (can't pass id into useId since it can also be a number)
    let defaultId = (0, useId/* useId */.Bi)();
    id || (id = defaultId);
    let isExpanded = groupState ? groupState.expandedKeys.has(id) : props.isExpanded;
    let state = (0, $bf996d45f4a36925$export$3fcbf6e4407997e0)({
        ...props,
        isExpanded: isExpanded,
        onExpandedChange (isExpanded) {
            var _props_onExpandedChange;
            if (groupState) groupState.toggleKey(id);
            (_props_onExpandedChange = props.onExpandedChange) === null || _props_onExpandedChange === void 0 ? void 0 : _props_onExpandedChange.call(props, isExpanded);
        }
    });
    let panelRef = (0, react).useRef(null);
    let isDisabled = props.isDisabled || (groupState === null || groupState === void 0 ? void 0 : groupState.isDisabled) || false;
    let { buttonProps: buttonProps, panelProps: panelProps } = (0, $5e910fae8e128ead$export$6e3e27031a30522f)({
        ...props,
        isExpanded: isExpanded,
        isDisabled: isDisabled
    }, state, panelRef);
    let { isFocusVisible: isFocusVisibleWithin, focusProps: focusWithinProps } = (0, useFocusRing/* useFocusRing */.o)({
        within: true
    });
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        id: undefined,
        defaultClassName: 'react-aria-Disclosure',
        values: {
            isExpanded: state.isExpanded,
            isDisabled: isDisabled,
            isFocusVisibleWithin: isFocusVisibleWithin,
            state: state
        }
    });
    let domProps = (0, filterDOMProps/* filterDOMProps */.$)(otherProps);
    return /*#__PURE__*/ (0, react).createElement((0, utils/* Provider */.Kq), {
        values: [
            [
                (0, Button/* ButtonContext */.k),
                {
                    slots: {
                        [(0, utils/* DEFAULT_SLOT */.P_)]: {},
                        trigger: buttonProps
                    }
                }
            ],
            [
                $28f4fd908f0de97f$var$InternalDisclosureContext,
                {
                    panelProps: panelProps,
                    panelRef: panelRef
                }
            ],
            [
                $28f4fd908f0de97f$export$dab3ea4a6ef094da,
                state
            ]
        ]
    }, /*#__PURE__*/ (0, react).createElement("div", {
        ref: ref,
        "data-expanded": state.isExpanded || undefined,
        "data-disabled": isDisabled || undefined,
        "data-focus-visible-within": isFocusVisibleWithin || undefined,
        ...domProps,
        ...focusWithinProps,
        ...renderProps
    }, renderProps.children));
});
const $28f4fd908f0de97f$export$feabaa331e1d464c = /*#__PURE__*/ (0, react.forwardRef)(function DisclosurePanel(props, ref) {
    let { role: role = 'group' } = props;
    let { panelProps: panelProps, panelRef: panelRef } = (0, react.useContext)($28f4fd908f0de97f$var$InternalDisclosureContext);
    let { isFocusVisible: isFocusVisibleWithin, focusProps: focusWithinProps } = (0, useFocusRing/* useFocusRing */.o)({
        within: true
    });
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        defaultClassName: 'react-aria-DisclosurePanel',
        values: {
            isFocusVisibleWithin: isFocusVisibleWithin
        }
    });
    let DOMProps = (0, filterDOMProps/* filterDOMProps */.$)(props);
    return /*#__PURE__*/ (0, react).createElement("div", {
        ...DOMProps,
        ref: (0, mergeRefs/* mergeRefs */.P)(ref, panelRef),
        ...(0, mergeProps/* mergeProps */.v)(panelProps, focusWithinProps),
        ...renderProps,
        role: role,
        "data-focus-visible-within": isFocusVisibleWithin || undefined
    }, /*#__PURE__*/ (0, react).createElement((0, utils/* Provider */.Kq), {
        values: [
            [
                (0, Button/* ButtonContext */.k),
                null
            ]
        ]
    }, props.children));
});



//# sourceMappingURL=Disclosure.module.js.map


/***/ }),

/***/ 57936:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ $5cb03073d3f54797$export$a8a3e93435678ff9)
/* harmony export */ });
/* harmony import */ var _RSPContexts_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32373);
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5933);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);




/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


const $5cb03073d3f54797$export$a8a3e93435678ff9 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function Heading(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useContextProps */ .JT)(props, ref, (0, _RSPContexts_mjs__WEBPACK_IMPORTED_MODULE_2__/* .HeadingContext */ .A3));
    let { children: children, level: level = 3, className: className, ...domProps } = props;
    let Element = `h${level}`;
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement(Element, {
        ...domProps,
        ref: ref,
        className: className !== null && className !== void 0 ? className : 'react-aria-Heading'
    }, children);
});



//# sourceMappingURL=Heading.module.js.map


/***/ }),

/***/ 21704:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ $01b77f81d0f07f68$export$75b6ee27786ba447),
/* harmony export */   J: () => (/* binding */ $01b77f81d0f07f68$export$b04be29aa201d4f5)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5933);
/* harmony import */ var _react_aria_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75127);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);




/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


const $01b77f81d0f07f68$export$75b6ee27786ba447 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const $01b77f81d0f07f68$export$b04be29aa201d4f5 = /*#__PURE__*/ (0, _react_aria_collections__WEBPACK_IMPORTED_MODULE_1__/* .createHideableComponent */ .U7)(function Label(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useContextProps */ .JT)(props, ref, $01b77f81d0f07f68$export$75b6ee27786ba447);
    let { elementType: ElementType = 'label', ...labelProps } = props;
    // @ts-ignore
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement(ElementType, {
        className: "react-aria-Label",
        ...labelProps,
        ref: ref
    });
});



//# sourceMappingURL=Label.module.js.map


/***/ }),

/***/ 73099:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  N: () => (/* binding */ $4f118338184dc1d9$export$a6c7ac8248d6e38a),
  s: () => (/* binding */ $4f118338184dc1d9$export$e2509388b49734e7)
});

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/mergeProps.mjs
var mergeProps = __webpack_require__(32217);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/openLink.mjs
var openLink = __webpack_require__(43831);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useFocusable.mjs
var useFocusable = __webpack_require__(28940);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/usePress.mjs + 6 modules
var usePress = __webpack_require__(35044);
;// ./node_modules/@react-aria/link/dist/useLink.mjs



/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $298d61e98472621b$export$dcf14c9974fe2767(props, ref) {
    let { elementType: elementType = 'a', onPress: onPress, onPressStart: onPressStart, onPressEnd: onPressEnd, // @ts-ignore
    onClick: deprecatedOnClick, isDisabled: isDisabled, ...otherProps } = props;
    let linkProps = {};
    if (elementType !== 'a') linkProps = {
        role: 'link',
        tabIndex: !isDisabled ? 0 : undefined
    };
    let { focusableProps: focusableProps } = (0, useFocusable/* useFocusable */.Wc)(props, ref);
    let { pressProps: pressProps, isPressed: isPressed } = (0, usePress/* usePress */.d)({
        onPress: onPress,
        onPressStart: onPressStart,
        onPressEnd: onPressEnd,
        isDisabled: isDisabled,
        ref: ref
    });
    let domProps = (0, filterDOMProps/* filterDOMProps */.$)(otherProps, {
        labelable: true
    });
    let interactionHandlers = (0, mergeProps/* mergeProps */.v)(focusableProps, pressProps);
    let router = (0, openLink/* useRouter */.rd)();
    let routerLinkProps = (0, openLink/* useLinkProps */._h)(props);
    return {
        isPressed: isPressed,
        linkProps: (0, mergeProps/* mergeProps */.v)(domProps, routerLinkProps, {
            ...interactionHandlers,
            ...linkProps,
            'aria-disabled': isDisabled || undefined,
            'aria-current': props['aria-current'],
            onClick: (e)=>{
                var _pressProps_onClick;
                (_pressProps_onClick = pressProps.onClick) === null || _pressProps_onClick === void 0 ? void 0 : _pressProps_onClick.call(pressProps, e);
                if (deprecatedOnClick) {
                    deprecatedOnClick(e);
                    console.warn('onClick is deprecated, please use onPress');
                }
                // If a custom router is provided, prevent default and forward if this link should client navigate.
                if (!router.isNative && e.currentTarget instanceof HTMLAnchorElement && e.currentTarget.href && // If props are applied to a router Link component, it may have already prevented default.
                !e.isDefaultPrevented() && (0, openLink/* shouldClientNavigate */.sU)(e.currentTarget, e) && props.href) {
                    e.preventDefault();
                    router.open(e.currentTarget, e, props.href, props.routerOptions);
                }
            }
        })
    };
}



//# sourceMappingURL=useLink.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useHover.mjs
var useHover = __webpack_require__(16638);
// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/useFocusRing.mjs
var useFocusRing = __webpack_require__(16133);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/react-aria-components/dist/Link.mjs




/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


const $4f118338184dc1d9$export$e2509388b49734e7 = /*#__PURE__*/ (0, react.createContext)(null);
const $4f118338184dc1d9$export$a6c7ac8248d6e38a = /*#__PURE__*/ (0, react.forwardRef)(function Link(props, ref) {
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, $4f118338184dc1d9$export$e2509388b49734e7);
    let ElementType = props.href && !props.isDisabled ? 'a' : 'span';
    let { linkProps: linkProps, isPressed: isPressed } = (0, $298d61e98472621b$export$dcf14c9974fe2767)({
        ...props,
        elementType: ElementType
    }, ref);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, useHover/* useHover */.M)(props);
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, useFocusRing/* useFocusRing */.o)();
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        defaultClassName: 'react-aria-Link',
        values: {
            isCurrent: !!props['aria-current'],
            isDisabled: props.isDisabled || false,
            isPressed: isPressed,
            isHovered: isHovered,
            isFocused: isFocused,
            isFocusVisible: isFocusVisible
        }
    });
    return /*#__PURE__*/ (0, react).createElement(ElementType, {
        ref: ref,
        slot: props.slot || undefined,
        ...(0, mergeProps/* mergeProps */.v)(renderProps, linkProps, hoverProps, focusProps),
        "data-focused": isFocused || undefined,
        "data-hovered": isHovered || undefined,
        "data-pressed": isPressed || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-current": !!props['aria-current'] || undefined,
        "data-disabled": props.isDisabled || undefined
    }, renderProps.children);
});



//# sourceMappingURL=Link.module.js.map


/***/ }),

/***/ 39565:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* binding */ $0393f8ab869a0f1a$export$c17561cb55d4db30),
  K: () => (/* binding */ $0393f8ab869a0f1a$export$e9f3bf65a26ce129)
});

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Label.mjs
var Label = __webpack_require__(21704);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/@react-stately/utils/dist/number.mjs
var number = __webpack_require__(91945);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/mergeProps.mjs
var mergeProps = __webpack_require__(32217);
// EXTERNAL MODULE: ./node_modules/@react-aria/label/dist/useLabel.mjs
var useLabel = __webpack_require__(64887);
// EXTERNAL MODULE: ./node_modules/@react-aria/i18n/dist/context.mjs + 2 modules
var context = __webpack_require__(39892);
// EXTERNAL MODULE: ./node_modules/@internationalized/number/dist/NumberFormatter.mjs
var NumberFormatter = __webpack_require__(80137);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/@react-aria/i18n/dist/useNumberFormatter.mjs




/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $a916eb452884faea$export$b7a616150fdb9f44(options = {}) {
    let { locale: locale } = (0, context/* useLocale */.Y)();
    return (0, react.useMemo)(()=>new (0, NumberFormatter/* NumberFormatter */.K)(locale, options), [
        locale,
        options
    ]);
}



//# sourceMappingURL=useNumberFormatter.module.js.map

;// ./node_modules/@react-aria/progress/dist/useProgressBar.mjs




/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $204d9ebcedfb8806$export$ed5abd763a836edc(props) {
    let { value: value = 0, minValue: minValue = 0, maxValue: maxValue = 100, valueLabel: valueLabel, isIndeterminate: isIndeterminate, formatOptions: formatOptions = {
        style: 'percent'
    } } = props;
    let domProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        labelable: true
    });
    let { labelProps: labelProps, fieldProps: fieldProps } = (0, useLabel/* useLabel */.M)({
        ...props,
        // Progress bar is not an HTML input element so it
        // shouldn't be labeled by a <label> element.
        labelElementType: 'span'
    });
    value = (0, number/* clamp */.qE)(value, minValue, maxValue);
    let percentage = (value - minValue) / (maxValue - minValue);
    let formatter = (0, $a916eb452884faea$export$b7a616150fdb9f44)(formatOptions);
    if (!isIndeterminate && !valueLabel) {
        let valueToFormat = formatOptions.style === 'percent' ? percentage : value;
        valueLabel = formatter.format(valueToFormat);
    }
    return {
        progressBarProps: (0, mergeProps/* mergeProps */.v)(domProps, {
            ...fieldProps,
            'aria-valuenow': isIndeterminate ? undefined : value,
            'aria-valuemin': minValue,
            'aria-valuemax': maxValue,
            'aria-valuetext': isIndeterminate ? undefined : valueLabel,
            role: 'progressbar'
        }),
        labelProps: labelProps
    };
}



//# sourceMappingURL=useProgressBar.module.js.map

;// ./node_modules/react-aria-components/dist/ProgressBar.mjs






/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 




const $0393f8ab869a0f1a$export$e9f3bf65a26ce129 = /*#__PURE__*/ (0, react.createContext)(null);
const $0393f8ab869a0f1a$export$c17561cb55d4db30 = /*#__PURE__*/ (0, react.forwardRef)(function ProgressBar(props, ref) {
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, $0393f8ab869a0f1a$export$e9f3bf65a26ce129);
    let { value: value = 0, minValue: minValue = 0, maxValue: maxValue = 100, isIndeterminate: isIndeterminate = false } = props;
    value = (0, number/* clamp */.qE)(value, minValue, maxValue);
    let [labelRef, label] = (0, utils/* useSlot */._E)(!props['aria-label'] && !props['aria-labelledby']);
    let { progressBarProps: progressBarProps, labelProps: labelProps } = (0, $204d9ebcedfb8806$export$ed5abd763a836edc)({
        ...props,
        label: label
    });
    // Calculate the width of the progress bar as a percentage
    let percentage = isIndeterminate ? undefined : (value - minValue) / (maxValue - minValue) * 100;
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        defaultClassName: 'react-aria-ProgressBar',
        values: {
            percentage: percentage,
            valueText: progressBarProps['aria-valuetext'],
            isIndeterminate: isIndeterminate
        }
    });
    return /*#__PURE__*/ (0, react).createElement("div", {
        ...progressBarProps,
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined
    }, /*#__PURE__*/ (0, react).createElement((0, Label/* LabelContext */.I).Provider, {
        value: {
            ...labelProps,
            ref: labelRef,
            elementType: 'span'
        }
    }, renderProps.children));
});



//# sourceMappingURL=ProgressBar.module.js.map


/***/ }),

/***/ 32373:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A3: () => (/* binding */ $4e85f108e88277b8$export$d688439359537581),
/* harmony export */   BP: () => (/* binding */ $4e85f108e88277b8$export$b085522c77523c51)
/* harmony export */ });
/* unused harmony exports ColorAreaContext, ColorFieldContext, ColorSliderContext, ColorWheelContext */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);


/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
const $4e85f108e88277b8$export$b085522c77523c51 = (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const $4e85f108e88277b8$export$ebe63fadcdce34ed = (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const $4e85f108e88277b8$export$44644b8a16031b5b = (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const $4e85f108e88277b8$export$717b2c0a523a0b53 = (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const $4e85f108e88277b8$export$265015d6dc85bf21 = (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const $4e85f108e88277b8$export$d688439359537581 = (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});



//# sourceMappingURL=RSPContexts.module.js.map


/***/ }),

/***/ 5933:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CC: () => (/* binding */ $64fa3d84918910a7$export$fabf2dc03a41866e),
/* harmony export */   JT: () => (/* binding */ $64fa3d84918910a7$export$29f1550f4b0d4415),
/* harmony export */   Kq: () => (/* binding */ $64fa3d84918910a7$export$2881499e37b75b9a),
/* harmony export */   P_: () => (/* binding */ $64fa3d84918910a7$export$c62b8e45d58ddad9),
/* harmony export */   SK: () => (/* binding */ $64fa3d84918910a7$export$ef03459518577ad4),
/* harmony export */   Sl: () => (/* binding */ $64fa3d84918910a7$export$4d86445c2cf5e3),
/* harmony export */   _E: () => (/* binding */ $64fa3d84918910a7$export$9d4c57ee4c6ffdd8)
/* harmony export */ });
/* unused harmony export composeRenderProps */
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83908);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17099);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32217);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49953);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);



/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

const $64fa3d84918910a7$export$c62b8e45d58ddad9 = Symbol('default');
function $64fa3d84918910a7$export$2881499e37b75b9a({ values: values, children: children }) {
    for (let [Context, value] of values)// @ts-ignore
    children = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement(Context.Provider, {
        value: value
    }, children);
    return children;
}
function $64fa3d84918910a7$export$4d86445c2cf5e3(props) {
    let { className: className, style: style, children: children, defaultClassName: defaultClassName, defaultChildren: defaultChildren, defaultStyle: defaultStyle, values: values } = props;
    return (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        let computedClassName;
        let computedStyle;
        let computedChildren;
        if (typeof className === 'function') computedClassName = className({
            ...values,
            defaultClassName: defaultClassName
        });
        else computedClassName = className;
        if (typeof style === 'function') computedStyle = style({
            ...values,
            defaultStyle: defaultStyle || {}
        });
        else computedStyle = style;
        if (typeof children === 'function') computedChildren = children({
            ...values,
            defaultChildren: defaultChildren
        });
        else if (children == null) computedChildren = defaultChildren;
        else computedChildren = children;
        return {
            className: computedClassName !== null && computedClassName !== void 0 ? computedClassName : defaultClassName,
            style: computedStyle || defaultStyle ? {
                ...defaultStyle,
                ...computedStyle
            } : undefined,
            children: computedChildren !== null && computedChildren !== void 0 ? computedChildren : defaultChildren,
            'data-rac': ''
        };
    }, [
        className,
        style,
        children,
        defaultClassName,
        defaultChildren,
        defaultStyle,
        values
    ]);
}
function $64fa3d84918910a7$export$c245e6201fed2f75(// https://stackoverflow.com/questions/60898079/typescript-type-t-or-function-t-usage
value, wrap) {
    return (renderProps)=>wrap(typeof value === 'function' ? value(renderProps) : value, renderProps);
}
function $64fa3d84918910a7$export$fabf2dc03a41866e(context, slot) {
    let ctx = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)(context);
    if (slot === null) // An explicit `null` slot means don't use context.
    return null;
    if (ctx && typeof ctx === 'object' && 'slots' in ctx && ctx.slots) {
        let slotKey = slot || $64fa3d84918910a7$export$c62b8e45d58ddad9;
        if (!ctx.slots[slotKey]) {
            let availableSlots = new Intl.ListFormat().format(Object.keys(ctx.slots).map((p)=>`"${p}"`));
            let errorMessage = slot ? `Invalid slot "${slot}".` : 'A slot prop is required.';
            throw new Error(`${errorMessage} Valid slot names are ${availableSlots}.`);
        }
        return ctx.slots[slotKey];
    }
    // @ts-ignore
    return ctx;
}
function $64fa3d84918910a7$export$29f1550f4b0d4415(props, ref, context) {
    let ctx = $64fa3d84918910a7$export$fabf2dc03a41866e(context, props.slot) || {};
    // @ts-ignore - TS says "Type 'unique symbol' cannot be used as an index type." but not sure why.
    let { ref: contextRef, ...contextProps } = ctx;
    let mergedRef = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useObjectRef */ .U)((0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .mergeRefs */ .P)(ref, contextRef), [
        ref,
        contextRef
    ]));
    let mergedProps = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__/* .mergeProps */ .v)(contextProps, props);
    // mergeProps does not merge `style`. Adding this there might be a breaking change.
    if ('style' in contextProps && contextProps.style && 'style' in props && props.style) {
        if (typeof contextProps.style === 'function' || typeof props.style === 'function') // @ts-ignore
        mergedProps.style = (renderProps)=>{
            let contextStyle = typeof contextProps.style === 'function' ? contextProps.style(renderProps) : contextProps.style;
            let defaultStyle = {
                ...renderProps.defaultStyle,
                ...contextStyle
            };
            let style = typeof props.style === 'function' ? props.style({
                ...renderProps,
                defaultStyle: defaultStyle
            }) : props.style;
            return {
                ...defaultStyle,
                ...style
            };
        };
        else // @ts-ignore
        mergedProps.style = {
            ...contextProps.style,
            ...props.style
        };
    }
    return [
        mergedProps,
        mergedRef
    ];
}
function $64fa3d84918910a7$export$9d4c57ee4c6ffdd8(initialState = true) {
    // Initial state is typically based on the parent having an aria-label or aria-labelledby.
    // If it does, this value should be false so that we don't update the state and cause a rerender when we go through the layoutEffect
    let [hasSlot, setHasSlot] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState);
    let hasRun = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    // A callback ref which will run when the slotted element mounts.
    // This should happen before the useLayoutEffect below.
    let ref = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((el)=>{
        hasRun.current = true;
        setHasSlot(!!el);
    }, []);
    // If the callback hasn't been called, then reset to false.
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__/* .useLayoutEffect */ .N)(()=>{
        if (!hasRun.current) setHasSlot(false);
    }, []);
    return [
        ref,
        hasSlot
    ];
}
function $64fa3d84918910a7$export$ef03459518577ad4(props) {
    const prefix = /^(data-.*)$/;
    let filteredProps = {};
    for(const prop in props)if (!prefix.test(prop)) filteredProps[prop] = props[prop];
    return filteredProps;
}



//# sourceMappingURL=utils.module.js.map


/***/ }),

/***/ 86850:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  w: () => (/* binding */ LiveEditor),
  p1: () => (/* binding */ LiveError),
  pA: () => (/* binding */ LivePreview_default),
  Q: () => (/* binding */ LiveProvider_default)
});

// UNUSED EXPORTS: Editor, LiveContext, generateElement, renderElementAsync, withLive

// EXTERNAL MODULE: ./node_modules/prism-react-renderer/dist/index.mjs
var dist = __webpack_require__(71765);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/use-editable/dist/use-editable.es.js


var m = {
  characterData: !0,
  characterDataOldValue: !0,
  childList: !0,
  subtree: !0
};

function p(c) {
  var a = window.getSelection();
  a.empty();
  a.addRange(c);
}

function q(c) {
  return (c.metaKey || c.ctrlKey) && !c.altKey && "KeyZ" === c.code;
}

function r(c) {
  c = [ c.firstChild ];
  for (var b, a = ""; b = c.pop(); ) {
    b.nodeType === Node.TEXT_NODE ? a += b.textContent : b.nodeType === Node.ELEMENT_NODE && "BR" === b.nodeName && (a += "\n"), 
    b.nextSibling && c.push(b.nextSibling), b.firstChild && c.push(b.firstChild);
  }
  "\n" !== a[a.length - 1] && (a += "\n");
  return a;
}

function w(c) {
  var a = window.getSelection().getRangeAt(0), b = a.collapsed ? 0 : a.toString().length, f = document.createRange();
  f.setStart(c, 0);
  f.setEnd(a.startContainer, a.startOffset);
  return {
    position: c = (f = f.toString()).length,
    extent: b,
    content: f = (f = f.split("\n"))[a = f.length - 1],
    line: a
  };
}

function C(c, a, b) {
  0 >= a && (a = 0);
  if (!b || 0 > b) {
    b = a;
  }
  var f = document.createRange();
  c = [ c.firstChild ];
  for (var d, l = 0, g = a; d = c[c.length - 1]; ) {
    if (d.nodeType === Node.TEXT_NODE) {
      if (l + d.textContent.length >= g) {
        var h = g - l;
        if (g === a) {
          if (g = f, h < d.textContent.length ? g.setStart(d, h) : g.setStartAfter(d), b !== a) {
            g = b;
            continue;
          } else {
            break;
          }
        } else {
          a = f;
          h < (b = d).textContent.length ? a.setEnd(b, h) : a.setEndAfter(b);
          break;
        }
      }
      l += d.textContent.length;
    } else if (d.nodeType === Node.ELEMENT_NODE && "BR" === d.nodeName) {
      if (l + 1 >= g) {
        if (g === a) {
          if (h = f, 0 < d.textContent.length ? h.setStart(d, 0) : h.setStartAfter(d), b !== a) {
            g = b;
            continue;
          } else {
            break;
          }
        } else {
          a = f;
          0 < (b = d).textContent.length ? a.setEnd(b, 0) : a.setEndAfter(b);
          break;
        }
      }
      l++;
    }
    c.pop();
    d.nextSibling && c.push(d.nextSibling);
    d.firstChild && c.push(d.firstChild);
  }
  return f;
}

function useEditable(c, a, b) {
  function f(k) {
    var b = c.current;
    if (b) {
      var a = w(b);
      b = r(b);
      a.position += k.length - b.length;
      e.position = a;
      e.onChange(k, a);
    }
  }
  function l(k, b) {
    var e = c.current;
    if (e) {
      var a = window.getSelection().getRangeAt(0);
      a.deleteContents();
      a.collapse();
      var d = b || 0;
      (a = C(e, b = (a = w(e)).position + (0 > d ? d : 0), a.position + (0 < d ? d : 0))).deleteContents();
      k && a.insertNode(document.createTextNode(k));
      p(C(e, b + k.length));
    }
  }
  function d(b) {
    var a = c.current;
    if (a) {
      a.focus();
      var e = 0;
      if ("number" == typeof b) {
        e = b;
      } else {
        var k = r(a).split("\n").slice(0, b.row);
        b.row && (e += k.join("\n").length + 1);
        e += b.column;
      }
      p(C(a, e));
    }
  }
  function g() {
    var b = c.current;
    return {
      text: r(b),
      position: b = w(b)
    };
  }
  function h() {
    e.observer.disconnect();
  }
  b || (b = {});
  var D = (0,react.useState)([])[1], e = (0,react.useState)((function() {
    var e = {
      observer: null,
      disconnected: !1,
      onChange: a,
      queue: [],
      history: [],
      historyAt: -1,
      position: null
    };
    "undefined" != typeof MutationObserver && (e.observer = new MutationObserver((function b(b) {
      var a;
      (a = e.queue).push.apply(a, b);
    })));
    return e;
  }))[0], n = (0,react.useMemo)((function() {
    return {
      update: f,
      insert: l,
      move: d,
      getState: g
    };
  }), []);
  if ("object" != typeof navigator) {
    return n;
  }
  (0,react.useLayoutEffect)((function() {
    e.onChange = a;
    if (c.current && !b.disabled) {
      e.disconnected = !1;
      e.observer.observe(c.current, m);
      if (e.position) {
        var k = e.position, d = k.position;
        p(C(c.current, d, d + k.extent));
      }
      return h;
    }
  }));
  (0,react.useLayoutEffect)((function() {
    if (!c.current || b.disabled) {
      e.history.length = 0, e.historyAt = -1;
    } else {
      var a = c.current;
      if (e.position) {
        a.focus();
        var d = e.position, f = d.position;
        p(C(a, f, f + d.extent));
      }
      var g = a.style.whiteSpace, h = a.contentEditable, l = !0;
      try {
        a.contentEditable = "plaintext-only";
      } catch (u) {
        a.contentEditable = "true", l = !1;
      }
      "pre" !== g && (a.style.whiteSpace = "pre-wrap");
      b.indentation && (a.style.tabSize = a.style.MozTabSize = "" + b.indentation);
      d = "" + " ".repeat(b.indentation || 0);
      var x, E = new RegExp("^(?:" + d + ")"), F = new RegExp("^(?:" + d + ")*(" + d + ")$"), t = function(b) {
        if (c.current && e.position) {
          var u = r(a), d = w(a), f = (new Date).valueOf(), g = e.history[e.historyAt];
          !b && 500 > f - x || g && g[1] === u ? x = f : (b = ++e.historyAt, e.history[b] = [ d, u ], 
          e.history.splice(b + 1), 500 < b && (e.historyAt--, e.history.shift()));
        }
      }, v = function() {
        var b;
        (b = e.queue).push.apply(b, e.observer.takeRecords());
        b = w(a);
        if (e.queue.length) {
          e.observer.disconnect();
          e.disconnected = !0;
          var d = r(a);
          e.position = b;
          for (var c, f; c = e.queue.pop(); ) {
            null !== c.oldValue && (c.target.textContent = c.oldValue);
            for (f = c.removedNodes.length - 1; 0 <= f; f--) {
              c.target.insertBefore(c.removedNodes[f], c.nextSibling);
            }
            for (f = c.addedNodes.length - 1; 0 <= f; f--) {
              c.addedNodes[f].parentNode && c.target.removeChild(c.addedNodes[f]);
            }
          }
          e.onChange(d, b);
        }
      }, y = function(c) {
        if (!c.defaultPrevented && c.target === a) {
          if (e.disconnected) {
            return c.preventDefault(), D([]);
          }
          if (q(c)) {
            c.preventDefault(), c.shiftKey ? (c = ++e.historyAt, (c = e.history[c]) || (e.historyAt = e.history.length - 1)) : (c = --e.historyAt, 
            (c = e.history[c]) || (e.historyAt = 0)), c && (e.observer.disconnect(), e.disconnected = !0, 
            e.position = c[0], e.onChange(c[1], c[0]));
          } else {
            t();
            if ("Enter" === c.key) {
              c.preventDefault();
              var d = w(a), f = /\S/g.exec(d.content);
              d = "\n" + d.content.slice(0, f ? f.index : d.content.length);
              n.insert(d);
            } else if ((!l || b.indentation) && "Backspace" === c.key) {
              c.preventDefault(), window.getSelection().getRangeAt(0).collapsed ? (d = w(a), d = F.exec(d.content), 
              n.insert("", d ? -d[1].length : -1)) : n.insert("", 0);
            } else if (b.indentation && "Tab" === c.key) {
              c.preventDefault();
              f = (d = w(a)).position - d.content.length;
              var g = r(a);
              d = c.shiftKey ? g.slice(0, f) + d.content.replace(E, "") + g.slice(f + d.content.length) : g.slice(0, f) + (b.indentation ? " ".repeat(b.indentation) : "\t") + g.slice(f);
              n.update(d);
            }
            c.repeat && v();
          }
        }
      }, z = function(b) {
        b.defaultPrevented || b.isComposing || (q(b) || t(), v(), a.focus());
      }, A = function(b) {
        e.position = window.getSelection().rangeCount && b.target === a ? w(a) : null;
      }, B = function(a) {
        a.preventDefault();
        t(!0);
        n.insert(a.clipboardData.getData("text/plain"));
        t(!0);
        v();
      };
      document.addEventListener("selectstart", A);
      window.addEventListener("keydown", y);
      a.addEventListener("paste", B);
      a.addEventListener("keyup", z);
      return function() {
        document.removeEventListener("selectstart", A);
        window.removeEventListener("keydown", y);
        a.removeEventListener("paste", B);
        a.removeEventListener("keyup", z);
        a.style.whiteSpace = g;
        a.contentEditable = h;
      };
    }
  }), [ c.current, b.disabled, b.indentation ]);
  return n;
}
//# sourceMappingURL=use-editable.es.js.map

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/sucrase/dist/esm/parser/tokenizer/keywords.js
var ContextualKeyword; (function (ContextualKeyword) {
  const NONE = 0; ContextualKeyword[ContextualKeyword["NONE"] = NONE] = "NONE";
  const _abstract = NONE + 1; ContextualKeyword[ContextualKeyword["_abstract"] = _abstract] = "_abstract";
  const _accessor = _abstract + 1; ContextualKeyword[ContextualKeyword["_accessor"] = _accessor] = "_accessor";
  const _as = _accessor + 1; ContextualKeyword[ContextualKeyword["_as"] = _as] = "_as";
  const _assert = _as + 1; ContextualKeyword[ContextualKeyword["_assert"] = _assert] = "_assert";
  const _asserts = _assert + 1; ContextualKeyword[ContextualKeyword["_asserts"] = _asserts] = "_asserts";
  const _async = _asserts + 1; ContextualKeyword[ContextualKeyword["_async"] = _async] = "_async";
  const _await = _async + 1; ContextualKeyword[ContextualKeyword["_await"] = _await] = "_await";
  const _checks = _await + 1; ContextualKeyword[ContextualKeyword["_checks"] = _checks] = "_checks";
  const _constructor = _checks + 1; ContextualKeyword[ContextualKeyword["_constructor"] = _constructor] = "_constructor";
  const _declare = _constructor + 1; ContextualKeyword[ContextualKeyword["_declare"] = _declare] = "_declare";
  const _enum = _declare + 1; ContextualKeyword[ContextualKeyword["_enum"] = _enum] = "_enum";
  const _exports = _enum + 1; ContextualKeyword[ContextualKeyword["_exports"] = _exports] = "_exports";
  const _from = _exports + 1; ContextualKeyword[ContextualKeyword["_from"] = _from] = "_from";
  const _get = _from + 1; ContextualKeyword[ContextualKeyword["_get"] = _get] = "_get";
  const _global = _get + 1; ContextualKeyword[ContextualKeyword["_global"] = _global] = "_global";
  const _implements = _global + 1; ContextualKeyword[ContextualKeyword["_implements"] = _implements] = "_implements";
  const _infer = _implements + 1; ContextualKeyword[ContextualKeyword["_infer"] = _infer] = "_infer";
  const _interface = _infer + 1; ContextualKeyword[ContextualKeyword["_interface"] = _interface] = "_interface";
  const _is = _interface + 1; ContextualKeyword[ContextualKeyword["_is"] = _is] = "_is";
  const _keyof = _is + 1; ContextualKeyword[ContextualKeyword["_keyof"] = _keyof] = "_keyof";
  const _mixins = _keyof + 1; ContextualKeyword[ContextualKeyword["_mixins"] = _mixins] = "_mixins";
  const _module = _mixins + 1; ContextualKeyword[ContextualKeyword["_module"] = _module] = "_module";
  const _namespace = _module + 1; ContextualKeyword[ContextualKeyword["_namespace"] = _namespace] = "_namespace";
  const _of = _namespace + 1; ContextualKeyword[ContextualKeyword["_of"] = _of] = "_of";
  const _opaque = _of + 1; ContextualKeyword[ContextualKeyword["_opaque"] = _opaque] = "_opaque";
  const _out = _opaque + 1; ContextualKeyword[ContextualKeyword["_out"] = _out] = "_out";
  const _override = _out + 1; ContextualKeyword[ContextualKeyword["_override"] = _override] = "_override";
  const _private = _override + 1; ContextualKeyword[ContextualKeyword["_private"] = _private] = "_private";
  const _protected = _private + 1; ContextualKeyword[ContextualKeyword["_protected"] = _protected] = "_protected";
  const _proto = _protected + 1; ContextualKeyword[ContextualKeyword["_proto"] = _proto] = "_proto";
  const _public = _proto + 1; ContextualKeyword[ContextualKeyword["_public"] = _public] = "_public";
  const _readonly = _public + 1; ContextualKeyword[ContextualKeyword["_readonly"] = _readonly] = "_readonly";
  const _require = _readonly + 1; ContextualKeyword[ContextualKeyword["_require"] = _require] = "_require";
  const _satisfies = _require + 1; ContextualKeyword[ContextualKeyword["_satisfies"] = _satisfies] = "_satisfies";
  const _set = _satisfies + 1; ContextualKeyword[ContextualKeyword["_set"] = _set] = "_set";
  const _static = _set + 1; ContextualKeyword[ContextualKeyword["_static"] = _static] = "_static";
  const _symbol = _static + 1; ContextualKeyword[ContextualKeyword["_symbol"] = _symbol] = "_symbol";
  const _type = _symbol + 1; ContextualKeyword[ContextualKeyword["_type"] = _type] = "_type";
  const _unique = _type + 1; ContextualKeyword[ContextualKeyword["_unique"] = _unique] = "_unique";
  const _using = _unique + 1; ContextualKeyword[ContextualKeyword["_using"] = _using] = "_using";
})(ContextualKeyword || (ContextualKeyword = {}));

;// ./node_modules/sucrase/dist/esm/parser/tokenizer/types.js
// Generated file, do not edit! Run "yarn generate" to re-generate this file.
/* istanbul ignore file */
/**
 * Enum of all token types, with bit fields to signify meaningful properties.
 */
var TokenType; (function (TokenType) {
  // Precedence 0 means not an operator; otherwise it is a positive number up to 12.
  const PRECEDENCE_MASK = 0xf; TokenType[TokenType["PRECEDENCE_MASK"] = PRECEDENCE_MASK] = "PRECEDENCE_MASK";
  const IS_KEYWORD = 1 << 4; TokenType[TokenType["IS_KEYWORD"] = IS_KEYWORD] = "IS_KEYWORD";
  const IS_ASSIGN = 1 << 5; TokenType[TokenType["IS_ASSIGN"] = IS_ASSIGN] = "IS_ASSIGN";
  const IS_RIGHT_ASSOCIATIVE = 1 << 6; TokenType[TokenType["IS_RIGHT_ASSOCIATIVE"] = IS_RIGHT_ASSOCIATIVE] = "IS_RIGHT_ASSOCIATIVE";
  const IS_PREFIX = 1 << 7; TokenType[TokenType["IS_PREFIX"] = IS_PREFIX] = "IS_PREFIX";
  const IS_POSTFIX = 1 << 8; TokenType[TokenType["IS_POSTFIX"] = IS_POSTFIX] = "IS_POSTFIX";
  const IS_EXPRESSION_START = 1 << 9; TokenType[TokenType["IS_EXPRESSION_START"] = IS_EXPRESSION_START] = "IS_EXPRESSION_START";

  const num = 512; TokenType[TokenType["num"] = num] = "num"; // num startsExpr
  const bigint = 1536; TokenType[TokenType["bigint"] = bigint] = "bigint"; // bigint startsExpr
  const decimal = 2560; TokenType[TokenType["decimal"] = decimal] = "decimal"; // decimal startsExpr
  const regexp = 3584; TokenType[TokenType["regexp"] = regexp] = "regexp"; // regexp startsExpr
  const string = 4608; TokenType[TokenType["string"] = string] = "string"; // string startsExpr
  const name = 5632; TokenType[TokenType["name"] = name] = "name"; // name startsExpr
  const eof = 6144; TokenType[TokenType["eof"] = eof] = "eof"; // eof
  const bracketL = 7680; TokenType[TokenType["bracketL"] = bracketL] = "bracketL"; // [ startsExpr
  const bracketR = 8192; TokenType[TokenType["bracketR"] = bracketR] = "bracketR"; // ]
  const braceL = 9728; TokenType[TokenType["braceL"] = braceL] = "braceL"; // { startsExpr
  const braceBarL = 10752; TokenType[TokenType["braceBarL"] = braceBarL] = "braceBarL"; // {| startsExpr
  const braceR = 11264; TokenType[TokenType["braceR"] = braceR] = "braceR"; // }
  const braceBarR = 12288; TokenType[TokenType["braceBarR"] = braceBarR] = "braceBarR"; // |}
  const parenL = 13824; TokenType[TokenType["parenL"] = parenL] = "parenL"; // ( startsExpr
  const parenR = 14336; TokenType[TokenType["parenR"] = parenR] = "parenR"; // )
  const comma = 15360; TokenType[TokenType["comma"] = comma] = "comma"; // ,
  const semi = 16384; TokenType[TokenType["semi"] = semi] = "semi"; // ;
  const colon = 17408; TokenType[TokenType["colon"] = colon] = "colon"; // :
  const doubleColon = 18432; TokenType[TokenType["doubleColon"] = doubleColon] = "doubleColon"; // ::
  const dot = 19456; TokenType[TokenType["dot"] = dot] = "dot"; // .
  const question = 20480; TokenType[TokenType["question"] = question] = "question"; // ?
  const questionDot = 21504; TokenType[TokenType["questionDot"] = questionDot] = "questionDot"; // ?.
  const arrow = 22528; TokenType[TokenType["arrow"] = arrow] = "arrow"; // =>
  const template = 23552; TokenType[TokenType["template"] = template] = "template"; // template
  const ellipsis = 24576; TokenType[TokenType["ellipsis"] = ellipsis] = "ellipsis"; // ...
  const backQuote = 25600; TokenType[TokenType["backQuote"] = backQuote] = "backQuote"; // `
  const dollarBraceL = 27136; TokenType[TokenType["dollarBraceL"] = dollarBraceL] = "dollarBraceL"; // ${ startsExpr
  const at = 27648; TokenType[TokenType["at"] = at] = "at"; // @
  const hash = 29184; TokenType[TokenType["hash"] = hash] = "hash"; // # startsExpr
  const eq = 29728; TokenType[TokenType["eq"] = eq] = "eq"; // = isAssign
  const assign = 30752; TokenType[TokenType["assign"] = assign] = "assign"; // _= isAssign
  const preIncDec = 32640; TokenType[TokenType["preIncDec"] = preIncDec] = "preIncDec"; // ++/-- prefix postfix startsExpr
  const postIncDec = 33664; TokenType[TokenType["postIncDec"] = postIncDec] = "postIncDec"; // ++/-- prefix postfix startsExpr
  const bang = 34432; TokenType[TokenType["bang"] = bang] = "bang"; // ! prefix startsExpr
  const tilde = 35456; TokenType[TokenType["tilde"] = tilde] = "tilde"; // ~ prefix startsExpr
  const pipeline = 35841; TokenType[TokenType["pipeline"] = pipeline] = "pipeline"; // |> prec:1
  const nullishCoalescing = 36866; TokenType[TokenType["nullishCoalescing"] = nullishCoalescing] = "nullishCoalescing"; // ?? prec:2
  const logicalOR = 37890; TokenType[TokenType["logicalOR"] = logicalOR] = "logicalOR"; // || prec:2
  const logicalAND = 38915; TokenType[TokenType["logicalAND"] = logicalAND] = "logicalAND"; // && prec:3
  const bitwiseOR = 39940; TokenType[TokenType["bitwiseOR"] = bitwiseOR] = "bitwiseOR"; // | prec:4
  const bitwiseXOR = 40965; TokenType[TokenType["bitwiseXOR"] = bitwiseXOR] = "bitwiseXOR"; // ^ prec:5
  const bitwiseAND = 41990; TokenType[TokenType["bitwiseAND"] = bitwiseAND] = "bitwiseAND"; // & prec:6
  const equality = 43015; TokenType[TokenType["equality"] = equality] = "equality"; // ==/!= prec:7
  const lessThan = 44040; TokenType[TokenType["lessThan"] = lessThan] = "lessThan"; // < prec:8
  const greaterThan = 45064; TokenType[TokenType["greaterThan"] = greaterThan] = "greaterThan"; // > prec:8
  const relationalOrEqual = 46088; TokenType[TokenType["relationalOrEqual"] = relationalOrEqual] = "relationalOrEqual"; // <=/>= prec:8
  const bitShiftL = 47113; TokenType[TokenType["bitShiftL"] = bitShiftL] = "bitShiftL"; // << prec:9
  const bitShiftR = 48137; TokenType[TokenType["bitShiftR"] = bitShiftR] = "bitShiftR"; // >>/>>> prec:9
  const plus = 49802; TokenType[TokenType["plus"] = plus] = "plus"; // + prec:10 prefix startsExpr
  const minus = 50826; TokenType[TokenType["minus"] = minus] = "minus"; // - prec:10 prefix startsExpr
  const modulo = 51723; TokenType[TokenType["modulo"] = modulo] = "modulo"; // % prec:11 startsExpr
  const star = 52235; TokenType[TokenType["star"] = star] = "star"; // * prec:11
  const slash = 53259; TokenType[TokenType["slash"] = slash] = "slash"; // / prec:11
  const exponent = 54348; TokenType[TokenType["exponent"] = exponent] = "exponent"; // ** prec:12 rightAssociative
  const jsxName = 55296; TokenType[TokenType["jsxName"] = jsxName] = "jsxName"; // jsxName
  const jsxText = 56320; TokenType[TokenType["jsxText"] = jsxText] = "jsxText"; // jsxText
  const jsxEmptyText = 57344; TokenType[TokenType["jsxEmptyText"] = jsxEmptyText] = "jsxEmptyText"; // jsxEmptyText
  const jsxTagStart = 58880; TokenType[TokenType["jsxTagStart"] = jsxTagStart] = "jsxTagStart"; // jsxTagStart startsExpr
  const jsxTagEnd = 59392; TokenType[TokenType["jsxTagEnd"] = jsxTagEnd] = "jsxTagEnd"; // jsxTagEnd
  const typeParameterStart = 60928; TokenType[TokenType["typeParameterStart"] = typeParameterStart] = "typeParameterStart"; // typeParameterStart startsExpr
  const nonNullAssertion = 61440; TokenType[TokenType["nonNullAssertion"] = nonNullAssertion] = "nonNullAssertion"; // nonNullAssertion
  const _break = 62480; TokenType[TokenType["_break"] = _break] = "_break"; // break keyword
  const _case = 63504; TokenType[TokenType["_case"] = _case] = "_case"; // case keyword
  const _catch = 64528; TokenType[TokenType["_catch"] = _catch] = "_catch"; // catch keyword
  const _continue = 65552; TokenType[TokenType["_continue"] = _continue] = "_continue"; // continue keyword
  const _debugger = 66576; TokenType[TokenType["_debugger"] = _debugger] = "_debugger"; // debugger keyword
  const _default = 67600; TokenType[TokenType["_default"] = _default] = "_default"; // default keyword
  const _do = 68624; TokenType[TokenType["_do"] = _do] = "_do"; // do keyword
  const _else = 69648; TokenType[TokenType["_else"] = _else] = "_else"; // else keyword
  const _finally = 70672; TokenType[TokenType["_finally"] = _finally] = "_finally"; // finally keyword
  const _for = 71696; TokenType[TokenType["_for"] = _for] = "_for"; // for keyword
  const _function = 73232; TokenType[TokenType["_function"] = _function] = "_function"; // function keyword startsExpr
  const _if = 73744; TokenType[TokenType["_if"] = _if] = "_if"; // if keyword
  const _return = 74768; TokenType[TokenType["_return"] = _return] = "_return"; // return keyword
  const _switch = 75792; TokenType[TokenType["_switch"] = _switch] = "_switch"; // switch keyword
  const _throw = 77456; TokenType[TokenType["_throw"] = _throw] = "_throw"; // throw keyword prefix startsExpr
  const _try = 77840; TokenType[TokenType["_try"] = _try] = "_try"; // try keyword
  const _var = 78864; TokenType[TokenType["_var"] = _var] = "_var"; // var keyword
  const _let = 79888; TokenType[TokenType["_let"] = _let] = "_let"; // let keyword
  const _const = 80912; TokenType[TokenType["_const"] = _const] = "_const"; // const keyword
  const _while = 81936; TokenType[TokenType["_while"] = _while] = "_while"; // while keyword
  const _with = 82960; TokenType[TokenType["_with"] = _with] = "_with"; // with keyword
  const _new = 84496; TokenType[TokenType["_new"] = _new] = "_new"; // new keyword startsExpr
  const _this = 85520; TokenType[TokenType["_this"] = _this] = "_this"; // this keyword startsExpr
  const _super = 86544; TokenType[TokenType["_super"] = _super] = "_super"; // super keyword startsExpr
  const _class = 87568; TokenType[TokenType["_class"] = _class] = "_class"; // class keyword startsExpr
  const _extends = 88080; TokenType[TokenType["_extends"] = _extends] = "_extends"; // extends keyword
  const _export = 89104; TokenType[TokenType["_export"] = _export] = "_export"; // export keyword
  const _import = 90640; TokenType[TokenType["_import"] = _import] = "_import"; // import keyword startsExpr
  const _yield = 91664; TokenType[TokenType["_yield"] = _yield] = "_yield"; // yield keyword startsExpr
  const _null = 92688; TokenType[TokenType["_null"] = _null] = "_null"; // null keyword startsExpr
  const _true = 93712; TokenType[TokenType["_true"] = _true] = "_true"; // true keyword startsExpr
  const _false = 94736; TokenType[TokenType["_false"] = _false] = "_false"; // false keyword startsExpr
  const _in = 95256; TokenType[TokenType["_in"] = _in] = "_in"; // in prec:8 keyword
  const _instanceof = 96280; TokenType[TokenType["_instanceof"] = _instanceof] = "_instanceof"; // instanceof prec:8 keyword
  const _typeof = 97936; TokenType[TokenType["_typeof"] = _typeof] = "_typeof"; // typeof keyword prefix startsExpr
  const _void = 98960; TokenType[TokenType["_void"] = _void] = "_void"; // void keyword prefix startsExpr
  const _delete = 99984; TokenType[TokenType["_delete"] = _delete] = "_delete"; // delete keyword prefix startsExpr
  const _async = 100880; TokenType[TokenType["_async"] = _async] = "_async"; // async keyword startsExpr
  const _get = 101904; TokenType[TokenType["_get"] = _get] = "_get"; // get keyword startsExpr
  const _set = 102928; TokenType[TokenType["_set"] = _set] = "_set"; // set keyword startsExpr
  const _declare = 103952; TokenType[TokenType["_declare"] = _declare] = "_declare"; // declare keyword startsExpr
  const _readonly = 104976; TokenType[TokenType["_readonly"] = _readonly] = "_readonly"; // readonly keyword startsExpr
  const _abstract = 106000; TokenType[TokenType["_abstract"] = _abstract] = "_abstract"; // abstract keyword startsExpr
  const _static = 107024; TokenType[TokenType["_static"] = _static] = "_static"; // static keyword startsExpr
  const _public = 107536; TokenType[TokenType["_public"] = _public] = "_public"; // public keyword
  const _private = 108560; TokenType[TokenType["_private"] = _private] = "_private"; // private keyword
  const _protected = 109584; TokenType[TokenType["_protected"] = _protected] = "_protected"; // protected keyword
  const _override = 110608; TokenType[TokenType["_override"] = _override] = "_override"; // override keyword
  const _as = 112144; TokenType[TokenType["_as"] = _as] = "_as"; // as keyword startsExpr
  const _enum = 113168; TokenType[TokenType["_enum"] = _enum] = "_enum"; // enum keyword startsExpr
  const _type = 114192; TokenType[TokenType["_type"] = _type] = "_type"; // type keyword startsExpr
  const _implements = 115216; TokenType[TokenType["_implements"] = _implements] = "_implements"; // implements keyword startsExpr
})(TokenType || (TokenType = {}));
function types_formatTokenType(tokenType) {
  switch (tokenType) {
    case TokenType.num:
      return "num";
    case TokenType.bigint:
      return "bigint";
    case TokenType.decimal:
      return "decimal";
    case TokenType.regexp:
      return "regexp";
    case TokenType.string:
      return "string";
    case TokenType.name:
      return "name";
    case TokenType.eof:
      return "eof";
    case TokenType.bracketL:
      return "[";
    case TokenType.bracketR:
      return "]";
    case TokenType.braceL:
      return "{";
    case TokenType.braceBarL:
      return "{|";
    case TokenType.braceR:
      return "}";
    case TokenType.braceBarR:
      return "|}";
    case TokenType.parenL:
      return "(";
    case TokenType.parenR:
      return ")";
    case TokenType.comma:
      return ",";
    case TokenType.semi:
      return ";";
    case TokenType.colon:
      return ":";
    case TokenType.doubleColon:
      return "::";
    case TokenType.dot:
      return ".";
    case TokenType.question:
      return "?";
    case TokenType.questionDot:
      return "?.";
    case TokenType.arrow:
      return "=>";
    case TokenType.template:
      return "template";
    case TokenType.ellipsis:
      return "...";
    case TokenType.backQuote:
      return "`";
    case TokenType.dollarBraceL:
      return "${";
    case TokenType.at:
      return "@";
    case TokenType.hash:
      return "#";
    case TokenType.eq:
      return "=";
    case TokenType.assign:
      return "_=";
    case TokenType.preIncDec:
      return "++/--";
    case TokenType.postIncDec:
      return "++/--";
    case TokenType.bang:
      return "!";
    case TokenType.tilde:
      return "~";
    case TokenType.pipeline:
      return "|>";
    case TokenType.nullishCoalescing:
      return "??";
    case TokenType.logicalOR:
      return "||";
    case TokenType.logicalAND:
      return "&&";
    case TokenType.bitwiseOR:
      return "|";
    case TokenType.bitwiseXOR:
      return "^";
    case TokenType.bitwiseAND:
      return "&";
    case TokenType.equality:
      return "==/!=";
    case TokenType.lessThan:
      return "<";
    case TokenType.greaterThan:
      return ">";
    case TokenType.relationalOrEqual:
      return "<=/>=";
    case TokenType.bitShiftL:
      return "<<";
    case TokenType.bitShiftR:
      return ">>/>>>";
    case TokenType.plus:
      return "+";
    case TokenType.minus:
      return "-";
    case TokenType.modulo:
      return "%";
    case TokenType.star:
      return "*";
    case TokenType.slash:
      return "/";
    case TokenType.exponent:
      return "**";
    case TokenType.jsxName:
      return "jsxName";
    case TokenType.jsxText:
      return "jsxText";
    case TokenType.jsxEmptyText:
      return "jsxEmptyText";
    case TokenType.jsxTagStart:
      return "jsxTagStart";
    case TokenType.jsxTagEnd:
      return "jsxTagEnd";
    case TokenType.typeParameterStart:
      return "typeParameterStart";
    case TokenType.nonNullAssertion:
      return "nonNullAssertion";
    case TokenType._break:
      return "break";
    case TokenType._case:
      return "case";
    case TokenType._catch:
      return "catch";
    case TokenType._continue:
      return "continue";
    case TokenType._debugger:
      return "debugger";
    case TokenType._default:
      return "default";
    case TokenType._do:
      return "do";
    case TokenType._else:
      return "else";
    case TokenType._finally:
      return "finally";
    case TokenType._for:
      return "for";
    case TokenType._function:
      return "function";
    case TokenType._if:
      return "if";
    case TokenType._return:
      return "return";
    case TokenType._switch:
      return "switch";
    case TokenType._throw:
      return "throw";
    case TokenType._try:
      return "try";
    case TokenType._var:
      return "var";
    case TokenType._let:
      return "let";
    case TokenType._const:
      return "const";
    case TokenType._while:
      return "while";
    case TokenType._with:
      return "with";
    case TokenType._new:
      return "new";
    case TokenType._this:
      return "this";
    case TokenType._super:
      return "super";
    case TokenType._class:
      return "class";
    case TokenType._extends:
      return "extends";
    case TokenType._export:
      return "export";
    case TokenType._import:
      return "import";
    case TokenType._yield:
      return "yield";
    case TokenType._null:
      return "null";
    case TokenType._true:
      return "true";
    case TokenType._false:
      return "false";
    case TokenType._in:
      return "in";
    case TokenType._instanceof:
      return "instanceof";
    case TokenType._typeof:
      return "typeof";
    case TokenType._void:
      return "void";
    case TokenType._delete:
      return "delete";
    case TokenType._async:
      return "async";
    case TokenType._get:
      return "get";
    case TokenType._set:
      return "set";
    case TokenType._declare:
      return "declare";
    case TokenType._readonly:
      return "readonly";
    case TokenType._abstract:
      return "abstract";
    case TokenType._static:
      return "static";
    case TokenType._public:
      return "public";
    case TokenType._private:
      return "private";
    case TokenType._protected:
      return "protected";
    case TokenType._override:
      return "override";
    case TokenType._as:
      return "as";
    case TokenType._enum:
      return "enum";
    case TokenType._type:
      return "type";
    case TokenType._implements:
      return "implements";
    default:
      return "";
  }
}

;// ./node_modules/sucrase/dist/esm/parser/tokenizer/state.js




class Scope {
  
  
  

  constructor(startTokenIndex, endTokenIndex, isFunctionScope) {
    this.startTokenIndex = startTokenIndex;
    this.endTokenIndex = endTokenIndex;
    this.isFunctionScope = isFunctionScope;
  }
}

class StateSnapshot {
  constructor(
     potentialArrowAt,
     noAnonFunctionType,
     inDisallowConditionalTypesContext,
     tokensLength,
     scopesLength,
     pos,
     type,
     contextualKeyword,
     start,
     end,
     isType,
     scopeDepth,
     error,
  ) {;this.potentialArrowAt = potentialArrowAt;this.noAnonFunctionType = noAnonFunctionType;this.inDisallowConditionalTypesContext = inDisallowConditionalTypesContext;this.tokensLength = tokensLength;this.scopesLength = scopesLength;this.pos = pos;this.type = type;this.contextualKeyword = contextualKeyword;this.start = start;this.end = end;this.isType = isType;this.scopeDepth = scopeDepth;this.error = error;}
}

class State {constructor() { State.prototype.__init.call(this);State.prototype.__init2.call(this);State.prototype.__init3.call(this);State.prototype.__init4.call(this);State.prototype.__init5.call(this);State.prototype.__init6.call(this);State.prototype.__init7.call(this);State.prototype.__init8.call(this);State.prototype.__init9.call(this);State.prototype.__init10.call(this);State.prototype.__init11.call(this);State.prototype.__init12.call(this);State.prototype.__init13.call(this); }
  // Used to signify the start of a potential arrow function
  __init() {this.potentialArrowAt = -1}

  // Used by Flow to handle an edge case involving function type parsing.
  __init2() {this.noAnonFunctionType = false}

  // Used by TypeScript to handle ambiguities when parsing conditional types.
  __init3() {this.inDisallowConditionalTypesContext = false}

  // Token store.
  __init4() {this.tokens = []}

  // Array of all observed scopes, ordered by their ending position.
  __init5() {this.scopes = []}

  // The current position of the tokenizer in the input.
  __init6() {this.pos = 0}

  // Information about the current token.
  __init7() {this.type = TokenType.eof}
  __init8() {this.contextualKeyword = ContextualKeyword.NONE}
  __init9() {this.start = 0}
  __init10() {this.end = 0}

  __init11() {this.isType = false}
  __init12() {this.scopeDepth = 0}

  /**
   * If the parser is in an error state, then the token is always tt.eof and all functions can
   * keep executing but should be written so they don't get into an infinite loop in this situation.
   *
   * This approach, combined with the ability to snapshot and restore state, allows us to implement
   * backtracking without exceptions and without needing to explicitly propagate error states
   * everywhere.
   */
  __init13() {this.error = null}

  snapshot() {
    return new StateSnapshot(
      this.potentialArrowAt,
      this.noAnonFunctionType,
      this.inDisallowConditionalTypesContext,
      this.tokens.length,
      this.scopes.length,
      this.pos,
      this.type,
      this.contextualKeyword,
      this.start,
      this.end,
      this.isType,
      this.scopeDepth,
      this.error,
    );
  }

  restoreFromSnapshot(snapshot) {
    this.potentialArrowAt = snapshot.potentialArrowAt;
    this.noAnonFunctionType = snapshot.noAnonFunctionType;
    this.inDisallowConditionalTypesContext = snapshot.inDisallowConditionalTypesContext;
    this.tokens.length = snapshot.tokensLength;
    this.scopes.length = snapshot.scopesLength;
    this.pos = snapshot.pos;
    this.type = snapshot.type;
    this.contextualKeyword = snapshot.contextualKeyword;
    this.start = snapshot.start;
    this.end = snapshot.end;
    this.isType = snapshot.isType;
    this.scopeDepth = snapshot.scopeDepth;
    this.error = snapshot.error;
  }
}

;// ./node_modules/sucrase/dist/esm/parser/util/charcodes.js
var charCodes; (function (charCodes) {
  const backSpace = 8; charCodes[charCodes["backSpace"] = backSpace] = "backSpace";
  const lineFeed = 10; charCodes[charCodes["lineFeed"] = lineFeed] = "lineFeed"; //  '\n'
  const tab = 9; charCodes[charCodes["tab"] = tab] = "tab"; //  '\t'
  const carriageReturn = 13; charCodes[charCodes["carriageReturn"] = carriageReturn] = "carriageReturn"; //  '\r'
  const shiftOut = 14; charCodes[charCodes["shiftOut"] = shiftOut] = "shiftOut";
  const space = 32; charCodes[charCodes["space"] = space] = "space";
  const exclamationMark = 33; charCodes[charCodes["exclamationMark"] = exclamationMark] = "exclamationMark"; //  '!'
  const quotationMark = 34; charCodes[charCodes["quotationMark"] = quotationMark] = "quotationMark"; //  '"'
  const numberSign = 35; charCodes[charCodes["numberSign"] = numberSign] = "numberSign"; //  '#'
  const dollarSign = 36; charCodes[charCodes["dollarSign"] = dollarSign] = "dollarSign"; //  '$'
  const percentSign = 37; charCodes[charCodes["percentSign"] = percentSign] = "percentSign"; //  '%'
  const ampersand = 38; charCodes[charCodes["ampersand"] = ampersand] = "ampersand"; //  '&'
  const apostrophe = 39; charCodes[charCodes["apostrophe"] = apostrophe] = "apostrophe"; //  '''
  const leftParenthesis = 40; charCodes[charCodes["leftParenthesis"] = leftParenthesis] = "leftParenthesis"; //  '('
  const rightParenthesis = 41; charCodes[charCodes["rightParenthesis"] = rightParenthesis] = "rightParenthesis"; //  ')'
  const asterisk = 42; charCodes[charCodes["asterisk"] = asterisk] = "asterisk"; //  '*'
  const plusSign = 43; charCodes[charCodes["plusSign"] = plusSign] = "plusSign"; //  '+'
  const comma = 44; charCodes[charCodes["comma"] = comma] = "comma"; //  ','
  const dash = 45; charCodes[charCodes["dash"] = dash] = "dash"; //  '-'
  const dot = 46; charCodes[charCodes["dot"] = dot] = "dot"; //  '.'
  const slash = 47; charCodes[charCodes["slash"] = slash] = "slash"; //  '/'
  const digit0 = 48; charCodes[charCodes["digit0"] = digit0] = "digit0"; //  '0'
  const digit1 = 49; charCodes[charCodes["digit1"] = digit1] = "digit1"; //  '1'
  const digit2 = 50; charCodes[charCodes["digit2"] = digit2] = "digit2"; //  '2'
  const digit3 = 51; charCodes[charCodes["digit3"] = digit3] = "digit3"; //  '3'
  const digit4 = 52; charCodes[charCodes["digit4"] = digit4] = "digit4"; //  '4'
  const digit5 = 53; charCodes[charCodes["digit5"] = digit5] = "digit5"; //  '5'
  const digit6 = 54; charCodes[charCodes["digit6"] = digit6] = "digit6"; //  '6'
  const digit7 = 55; charCodes[charCodes["digit7"] = digit7] = "digit7"; //  '7'
  const digit8 = 56; charCodes[charCodes["digit8"] = digit8] = "digit8"; //  '8'
  const digit9 = 57; charCodes[charCodes["digit9"] = digit9] = "digit9"; //  '9'
  const colon = 58; charCodes[charCodes["colon"] = colon] = "colon"; //  ':'
  const semicolon = 59; charCodes[charCodes["semicolon"] = semicolon] = "semicolon"; //  ';'
  const lessThan = 60; charCodes[charCodes["lessThan"] = lessThan] = "lessThan"; //  '<'
  const equalsTo = 61; charCodes[charCodes["equalsTo"] = equalsTo] = "equalsTo"; //  '='
  const greaterThan = 62; charCodes[charCodes["greaterThan"] = greaterThan] = "greaterThan"; //  '>'
  const questionMark = 63; charCodes[charCodes["questionMark"] = questionMark] = "questionMark"; //  '?'
  const atSign = 64; charCodes[charCodes["atSign"] = atSign] = "atSign"; //  '@'
  const uppercaseA = 65; charCodes[charCodes["uppercaseA"] = uppercaseA] = "uppercaseA"; //  'A'
  const uppercaseB = 66; charCodes[charCodes["uppercaseB"] = uppercaseB] = "uppercaseB"; //  'B'
  const uppercaseC = 67; charCodes[charCodes["uppercaseC"] = uppercaseC] = "uppercaseC"; //  'C'
  const uppercaseD = 68; charCodes[charCodes["uppercaseD"] = uppercaseD] = "uppercaseD"; //  'D'
  const uppercaseE = 69; charCodes[charCodes["uppercaseE"] = uppercaseE] = "uppercaseE"; //  'E'
  const uppercaseF = 70; charCodes[charCodes["uppercaseF"] = uppercaseF] = "uppercaseF"; //  'F'
  const uppercaseG = 71; charCodes[charCodes["uppercaseG"] = uppercaseG] = "uppercaseG"; //  'G'
  const uppercaseH = 72; charCodes[charCodes["uppercaseH"] = uppercaseH] = "uppercaseH"; //  'H'
  const uppercaseI = 73; charCodes[charCodes["uppercaseI"] = uppercaseI] = "uppercaseI"; //  'I'
  const uppercaseJ = 74; charCodes[charCodes["uppercaseJ"] = uppercaseJ] = "uppercaseJ"; //  'J'
  const uppercaseK = 75; charCodes[charCodes["uppercaseK"] = uppercaseK] = "uppercaseK"; //  'K'
  const uppercaseL = 76; charCodes[charCodes["uppercaseL"] = uppercaseL] = "uppercaseL"; //  'L'
  const uppercaseM = 77; charCodes[charCodes["uppercaseM"] = uppercaseM] = "uppercaseM"; //  'M'
  const uppercaseN = 78; charCodes[charCodes["uppercaseN"] = uppercaseN] = "uppercaseN"; //  'N'
  const uppercaseO = 79; charCodes[charCodes["uppercaseO"] = uppercaseO] = "uppercaseO"; //  'O'
  const uppercaseP = 80; charCodes[charCodes["uppercaseP"] = uppercaseP] = "uppercaseP"; //  'P'
  const uppercaseQ = 81; charCodes[charCodes["uppercaseQ"] = uppercaseQ] = "uppercaseQ"; //  'Q'
  const uppercaseR = 82; charCodes[charCodes["uppercaseR"] = uppercaseR] = "uppercaseR"; //  'R'
  const uppercaseS = 83; charCodes[charCodes["uppercaseS"] = uppercaseS] = "uppercaseS"; //  'S'
  const uppercaseT = 84; charCodes[charCodes["uppercaseT"] = uppercaseT] = "uppercaseT"; //  'T'
  const uppercaseU = 85; charCodes[charCodes["uppercaseU"] = uppercaseU] = "uppercaseU"; //  'U'
  const uppercaseV = 86; charCodes[charCodes["uppercaseV"] = uppercaseV] = "uppercaseV"; //  'V'
  const uppercaseW = 87; charCodes[charCodes["uppercaseW"] = uppercaseW] = "uppercaseW"; //  'W'
  const uppercaseX = 88; charCodes[charCodes["uppercaseX"] = uppercaseX] = "uppercaseX"; //  'X'
  const uppercaseY = 89; charCodes[charCodes["uppercaseY"] = uppercaseY] = "uppercaseY"; //  'Y'
  const uppercaseZ = 90; charCodes[charCodes["uppercaseZ"] = uppercaseZ] = "uppercaseZ"; //  'Z'
  const leftSquareBracket = 91; charCodes[charCodes["leftSquareBracket"] = leftSquareBracket] = "leftSquareBracket"; //  '['
  const backslash = 92; charCodes[charCodes["backslash"] = backslash] = "backslash"; //  '\    '
  const rightSquareBracket = 93; charCodes[charCodes["rightSquareBracket"] = rightSquareBracket] = "rightSquareBracket"; //  ']'
  const caret = 94; charCodes[charCodes["caret"] = caret] = "caret"; //  '^'
  const underscore = 95; charCodes[charCodes["underscore"] = underscore] = "underscore"; //  '_'
  const graveAccent = 96; charCodes[charCodes["graveAccent"] = graveAccent] = "graveAccent"; //  '`'
  const lowercaseA = 97; charCodes[charCodes["lowercaseA"] = lowercaseA] = "lowercaseA"; //  'a'
  const lowercaseB = 98; charCodes[charCodes["lowercaseB"] = lowercaseB] = "lowercaseB"; //  'b'
  const lowercaseC = 99; charCodes[charCodes["lowercaseC"] = lowercaseC] = "lowercaseC"; //  'c'
  const lowercaseD = 100; charCodes[charCodes["lowercaseD"] = lowercaseD] = "lowercaseD"; //  'd'
  const lowercaseE = 101; charCodes[charCodes["lowercaseE"] = lowercaseE] = "lowercaseE"; //  'e'
  const lowercaseF = 102; charCodes[charCodes["lowercaseF"] = lowercaseF] = "lowercaseF"; //  'f'
  const lowercaseG = 103; charCodes[charCodes["lowercaseG"] = lowercaseG] = "lowercaseG"; //  'g'
  const lowercaseH = 104; charCodes[charCodes["lowercaseH"] = lowercaseH] = "lowercaseH"; //  'h'
  const lowercaseI = 105; charCodes[charCodes["lowercaseI"] = lowercaseI] = "lowercaseI"; //  'i'
  const lowercaseJ = 106; charCodes[charCodes["lowercaseJ"] = lowercaseJ] = "lowercaseJ"; //  'j'
  const lowercaseK = 107; charCodes[charCodes["lowercaseK"] = lowercaseK] = "lowercaseK"; //  'k'
  const lowercaseL = 108; charCodes[charCodes["lowercaseL"] = lowercaseL] = "lowercaseL"; //  'l'
  const lowercaseM = 109; charCodes[charCodes["lowercaseM"] = lowercaseM] = "lowercaseM"; //  'm'
  const lowercaseN = 110; charCodes[charCodes["lowercaseN"] = lowercaseN] = "lowercaseN"; //  'n'
  const lowercaseO = 111; charCodes[charCodes["lowercaseO"] = lowercaseO] = "lowercaseO"; //  'o'
  const lowercaseP = 112; charCodes[charCodes["lowercaseP"] = lowercaseP] = "lowercaseP"; //  'p'
  const lowercaseQ = 113; charCodes[charCodes["lowercaseQ"] = lowercaseQ] = "lowercaseQ"; //  'q'
  const lowercaseR = 114; charCodes[charCodes["lowercaseR"] = lowercaseR] = "lowercaseR"; //  'r'
  const lowercaseS = 115; charCodes[charCodes["lowercaseS"] = lowercaseS] = "lowercaseS"; //  's'
  const lowercaseT = 116; charCodes[charCodes["lowercaseT"] = lowercaseT] = "lowercaseT"; //  't'
  const lowercaseU = 117; charCodes[charCodes["lowercaseU"] = lowercaseU] = "lowercaseU"; //  'u'
  const lowercaseV = 118; charCodes[charCodes["lowercaseV"] = lowercaseV] = "lowercaseV"; //  'v'
  const lowercaseW = 119; charCodes[charCodes["lowercaseW"] = lowercaseW] = "lowercaseW"; //  'w'
  const lowercaseX = 120; charCodes[charCodes["lowercaseX"] = lowercaseX] = "lowercaseX"; //  'x'
  const lowercaseY = 121; charCodes[charCodes["lowercaseY"] = lowercaseY] = "lowercaseY"; //  'y'
  const lowercaseZ = 122; charCodes[charCodes["lowercaseZ"] = lowercaseZ] = "lowercaseZ"; //  'z'
  const leftCurlyBrace = 123; charCodes[charCodes["leftCurlyBrace"] = leftCurlyBrace] = "leftCurlyBrace"; //  '{'
  const verticalBar = 124; charCodes[charCodes["verticalBar"] = verticalBar] = "verticalBar"; //  '|'
  const rightCurlyBrace = 125; charCodes[charCodes["rightCurlyBrace"] = rightCurlyBrace] = "rightCurlyBrace"; //  '}'
  const tilde = 126; charCodes[charCodes["tilde"] = tilde] = "tilde"; //  '~'
  const nonBreakingSpace = 160; charCodes[charCodes["nonBreakingSpace"] = nonBreakingSpace] = "nonBreakingSpace";
  // eslint-disable-next-line no-irregular-whitespace
  const oghamSpaceMark = 5760; charCodes[charCodes["oghamSpaceMark"] = oghamSpaceMark] = "oghamSpaceMark"; // ' '
  const lineSeparator = 8232; charCodes[charCodes["lineSeparator"] = lineSeparator] = "lineSeparator";
  const paragraphSeparator = 8233; charCodes[charCodes["paragraphSeparator"] = paragraphSeparator] = "paragraphSeparator";
})(charCodes || (charCodes = {}));

function isDigit(code) {
  return (
    (code >= charCodes.digit0 && code <= charCodes.digit9) ||
    (code >= charCodes.lowercaseA && code <= charCodes.lowercaseF) ||
    (code >= charCodes.uppercaseA && code <= charCodes.uppercaseF)
  );
}

;// ./node_modules/sucrase/dist/esm/parser/traverser/base.js



let isJSXEnabled;
let isTypeScriptEnabled;
let isFlowEnabled;
let state;
let input;
let nextContextId;

function getNextContextId() {
  return nextContextId++;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function augmentError(error) {
  if ("pos" in error) {
    const loc = locationForIndex(error.pos);
    error.message += ` (${loc.line}:${loc.column})`;
    error.loc = loc;
  }
  return error;
}

class Loc {
  
  
  constructor(line, column) {
    this.line = line;
    this.column = column;
  }
}

function locationForIndex(pos) {
  let line = 1;
  let column = 1;
  for (let i = 0; i < pos; i++) {
    if (input.charCodeAt(i) === charCodes.lineFeed) {
      line++;
      column = 1;
    } else {
      column++;
    }
  }
  return new Loc(line, column);
}

function initParser(
  inputCode,
  isJSXEnabledArg,
  isTypeScriptEnabledArg,
  isFlowEnabledArg,
) {
  input = inputCode;
  state = new State();
  nextContextId = 1;
  isJSXEnabled = isJSXEnabledArg;
  isTypeScriptEnabled = isTypeScriptEnabledArg;
  isFlowEnabled = isFlowEnabledArg;
}

;// ./node_modules/sucrase/dist/esm/parser/traverser/util.js






// ## Parser utilities

// Tests whether parsed token is a contextual keyword.
function isContextual(contextualKeyword) {
  return state.contextualKeyword === contextualKeyword;
}

function isLookaheadContextual(contextualKeyword) {
  const l = lookaheadTypeAndKeyword();
  return l.type === TokenType.name && l.contextualKeyword === contextualKeyword;
}

// Consumes contextual keyword if possible.
function eatContextual(contextualKeyword) {
  return state.contextualKeyword === contextualKeyword && eat(TokenType.name);
}

// Asserts that following token is given contextual keyword.
function expectContextual(contextualKeyword) {
  if (!eatContextual(contextualKeyword)) {
    unexpected();
  }
}

// Test whether a semicolon can be inserted at the current position.
function canInsertSemicolon() {
  return match(TokenType.eof) || match(TokenType.braceR) || hasPrecedingLineBreak();
}

function hasPrecedingLineBreak() {
  const prevToken = state.tokens[state.tokens.length - 1];
  const lastTokEnd = prevToken ? prevToken.end : 0;
  for (let i = lastTokEnd; i < state.start; i++) {
    const code = input.charCodeAt(i);
    if (
      code === charCodes.lineFeed ||
      code === charCodes.carriageReturn ||
      code === 0x2028 ||
      code === 0x2029
    ) {
      return true;
    }
  }
  return false;
}

function hasFollowingLineBreak() {
  const nextStart = nextTokenStart();
  for (let i = state.end; i < nextStart; i++) {
    const code = input.charCodeAt(i);
    if (
      code === charCodes.lineFeed ||
      code === charCodes.carriageReturn ||
      code === 0x2028 ||
      code === 0x2029
    ) {
      return true;
    }
  }
  return false;
}

function isLineTerminator() {
  return eat(TokenType.semi) || canInsertSemicolon();
}

// Consume a semicolon, or, failing that, see if we are allowed to
// pretend that there is a semicolon at this position.
function semicolon() {
  if (!isLineTerminator()) {
    unexpected('Unexpected token, expected ";"');
  }
}

// Expect a token of a given type. If found, consume it, otherwise,
// raise an unexpected token error at given pos.
function expect(type) {
  const matched = eat(type);
  if (!matched) {
    unexpected(`Unexpected token, expected "${types_formatTokenType(type)}"`);
  }
}

/**
 * Transition the parser to an error state. All code needs to be written to naturally unwind in this
 * state, which allows us to backtrack without exceptions and without error plumbing everywhere.
 */
function unexpected(message = "Unexpected token", pos = state.start) {
  if (state.error) {
    return;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const err = new SyntaxError(message);
  err.pos = pos;
  state.error = err;
  state.pos = input.length;
  finishToken(TokenType.eof);
}

;// ./node_modules/sucrase/dist/esm/parser/util/whitespace.js


// https://tc39.github.io/ecma262/#sec-white-space
const WHITESPACE_CHARS = [
  0x0009,
  0x000b,
  0x000c,
  charCodes.space,
  charCodes.nonBreakingSpace,
  charCodes.oghamSpaceMark,
  0x2000, // EN QUAD
  0x2001, // EM QUAD
  0x2002, // EN SPACE
  0x2003, // EM SPACE
  0x2004, // THREE-PER-EM SPACE
  0x2005, // FOUR-PER-EM SPACE
  0x2006, // SIX-PER-EM SPACE
  0x2007, // FIGURE SPACE
  0x2008, // PUNCTUATION SPACE
  0x2009, // THIN SPACE
  0x200a, // HAIR SPACE
  0x202f, // NARROW NO-BREAK SPACE
  0x205f, // MEDIUM MATHEMATICAL SPACE
  0x3000, // IDEOGRAPHIC SPACE
  0xfeff, // ZERO WIDTH NO-BREAK SPACE
];

const skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;

const IS_WHITESPACE = new Uint8Array(65536);
for (const char of WHITESPACE_CHARS) {
  IS_WHITESPACE[char] = 1;
}

;// ./node_modules/sucrase/dist/esm/parser/util/identifier.js



function computeIsIdentifierChar(code) {
  if (code < 48) return code === 36;
  if (code < 58) return true;
  if (code < 65) return false;
  if (code < 91) return true;
  if (code < 97) return code === 95;
  if (code < 123) return true;
  if (code < 128) return false;
  throw new Error("Should not be called with non-ASCII char code.");
}

const IS_IDENTIFIER_CHAR = new Uint8Array(65536);
for (let i = 0; i < 128; i++) {
  IS_IDENTIFIER_CHAR[i] = computeIsIdentifierChar(i) ? 1 : 0;
}
for (let i = 128; i < 65536; i++) {
  IS_IDENTIFIER_CHAR[i] = 1;
}
// Aside from whitespace and newlines, all characters outside the ASCII space are either
// identifier characters or invalid. Since we're not performing code validation, we can just
// treat all invalid characters as identifier characters.
for (const whitespaceChar of WHITESPACE_CHARS) {
  IS_IDENTIFIER_CHAR[whitespaceChar] = 0;
}
IS_IDENTIFIER_CHAR[0x2028] = 0;
IS_IDENTIFIER_CHAR[0x2029] = 0;

const IS_IDENTIFIER_START = IS_IDENTIFIER_CHAR.slice();
for (let numChar = charCodes.digit0; numChar <= charCodes.digit9; numChar++) {
  IS_IDENTIFIER_START[numChar] = 0;
}

;// ./node_modules/sucrase/dist/esm/parser/tokenizer/readWordTree.js
// Generated file, do not edit! Run "yarn generate" to re-generate this file.



// prettier-ignore
const READ_WORD_TREE = new Int32Array([
  // ""
  -1, 27, 783, 918, 1755, 2376, 2862, 3483, -1, 3699, -1, 4617, 4752, 4833, 5130, 5508, 5940, -1, 6480, 6939, 7749, 8181, 8451, 8613, -1, 8829, -1,
  // "a"
  -1, -1, 54, 243, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 432, -1, -1, -1, 675, -1, -1, -1,
  // "ab"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 81, -1, -1, -1, -1, -1, -1, -1,
  // "abs"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 108, -1, -1, -1, -1, -1, -1,
  // "abst"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 135, -1, -1, -1, -1, -1, -1, -1, -1,
  // "abstr"
  -1, 162, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "abstra"
  -1, -1, -1, 189, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "abstrac"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 216, -1, -1, -1, -1, -1, -1,
  // "abstract"
  ContextualKeyword._abstract << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "ac"
  -1, -1, -1, 270, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "acc"
  -1, -1, -1, -1, -1, 297, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "acce"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 324, -1, -1, -1, -1, -1, -1, -1,
  // "acces"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 351, -1, -1, -1, -1, -1, -1, -1,
  // "access"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 378, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "accesso"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 405, -1, -1, -1, -1, -1, -1, -1, -1,
  // "accessor"
  ContextualKeyword._accessor << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "as"
  ContextualKeyword._as << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 459, -1, -1, -1, -1, -1, 594, -1,
  // "ass"
  -1, -1, -1, -1, -1, 486, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "asse"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 513, -1, -1, -1, -1, -1, -1, -1, -1,
  // "asser"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 540, -1, -1, -1, -1, -1, -1,
  // "assert"
  ContextualKeyword._assert << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 567, -1, -1, -1, -1, -1, -1, -1,
  // "asserts"
  ContextualKeyword._asserts << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "asy"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 621, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "asyn"
  -1, -1, -1, 648, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "async"
  ContextualKeyword._async << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "aw"
  -1, 702, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "awa"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 729, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "awai"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 756, -1, -1, -1, -1, -1, -1,
  // "await"
  ContextualKeyword._await << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "b"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 810, -1, -1, -1, -1, -1, -1, -1, -1,
  // "br"
  -1, -1, -1, -1, -1, 837, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "bre"
  -1, 864, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "brea"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 891, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "break"
  (TokenType._break << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "c"
  -1, 945, -1, -1, -1, -1, -1, -1, 1107, -1, -1, -1, 1242, -1, -1, 1350, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "ca"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 972, 1026, -1, -1, -1, -1, -1, -1,
  // "cas"
  -1, -1, -1, -1, -1, 999, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "case"
  (TokenType._case << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "cat"
  -1, -1, -1, 1053, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "catc"
  -1, -1, -1, -1, -1, -1, -1, -1, 1080, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "catch"
  (TokenType._catch << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "ch"
  -1, -1, -1, -1, -1, 1134, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "che"
  -1, -1, -1, 1161, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "chec"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1188, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "check"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1215, -1, -1, -1, -1, -1, -1, -1,
  // "checks"
  ContextualKeyword._checks << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "cl"
  -1, 1269, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "cla"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1296, -1, -1, -1, -1, -1, -1, -1,
  // "clas"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1323, -1, -1, -1, -1, -1, -1, -1,
  // "class"
  (TokenType._class << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "co"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1377, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "con"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1404, 1620, -1, -1, -1, -1, -1, -1,
  // "cons"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1431, -1, -1, -1, -1, -1, -1,
  // "const"
  (TokenType._const << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1458, -1, -1, -1, -1, -1, -1, -1, -1,
  // "constr"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1485, -1, -1, -1, -1, -1,
  // "constru"
  -1, -1, -1, 1512, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "construc"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1539, -1, -1, -1, -1, -1, -1,
  // "construct"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1566, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "constructo"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1593, -1, -1, -1, -1, -1, -1, -1, -1,
  // "constructor"
  ContextualKeyword._constructor << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "cont"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 1647, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "conti"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1674, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "contin"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1701, -1, -1, -1, -1, -1,
  // "continu"
  -1, -1, -1, -1, -1, 1728, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "continue"
  (TokenType._continue << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "d"
  -1, -1, -1, -1, -1, 1782, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2349, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "de"
  -1, -1, 1809, 1971, -1, -1, 2106, -1, -1, -1, -1, -1, 2241, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "deb"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1836, -1, -1, -1, -1, -1,
  // "debu"
  -1, -1, -1, -1, -1, -1, -1, 1863, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "debug"
  -1, -1, -1, -1, -1, -1, -1, 1890, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "debugg"
  -1, -1, -1, -1, -1, 1917, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "debugge"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1944, -1, -1, -1, -1, -1, -1, -1, -1,
  // "debugger"
  (TokenType._debugger << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "dec"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1998, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "decl"
  -1, 2025, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "decla"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2052, -1, -1, -1, -1, -1, -1, -1, -1,
  // "declar"
  -1, -1, -1, -1, -1, 2079, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "declare"
  ContextualKeyword._declare << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "def"
  -1, 2133, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "defa"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2160, -1, -1, -1, -1, -1,
  // "defau"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2187, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "defaul"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2214, -1, -1, -1, -1, -1, -1,
  // "default"
  (TokenType._default << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "del"
  -1, -1, -1, -1, -1, 2268, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "dele"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2295, -1, -1, -1, -1, -1, -1,
  // "delet"
  -1, -1, -1, -1, -1, 2322, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "delete"
  (TokenType._delete << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "do"
  (TokenType._do << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "e"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2403, -1, 2484, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2565, -1, -1,
  // "el"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2430, -1, -1, -1, -1, -1, -1, -1,
  // "els"
  -1, -1, -1, -1, -1, 2457, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "else"
  (TokenType._else << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "en"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2511, -1, -1, -1, -1, -1,
  // "enu"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2538, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "enum"
  ContextualKeyword._enum << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "ex"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2592, -1, -1, -1, 2727, -1, -1, -1, -1, -1, -1,
  // "exp"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2619, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "expo"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2646, -1, -1, -1, -1, -1, -1, -1, -1,
  // "expor"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2673, -1, -1, -1, -1, -1, -1,
  // "export"
  (TokenType._export << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2700, -1, -1, -1, -1, -1, -1, -1,
  // "exports"
  ContextualKeyword._exports << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "ext"
  -1, -1, -1, -1, -1, 2754, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "exte"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2781, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "exten"
  -1, -1, -1, -1, 2808, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "extend"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2835, -1, -1, -1, -1, -1, -1, -1,
  // "extends"
  (TokenType._extends << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "f"
  -1, 2889, -1, -1, -1, -1, -1, -1, -1, 2997, -1, -1, -1, -1, -1, 3159, -1, -1, 3213, -1, -1, 3294, -1, -1, -1, -1, -1,
  // "fa"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2916, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "fal"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2943, -1, -1, -1, -1, -1, -1, -1,
  // "fals"
  -1, -1, -1, -1, -1, 2970, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "false"
  (TokenType._false << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "fi"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3024, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "fin"
  -1, 3051, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "fina"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3078, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "final"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3105, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "finall"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3132, -1,
  // "finally"
  (TokenType._finally << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "fo"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3186, -1, -1, -1, -1, -1, -1, -1, -1,
  // "for"
  (TokenType._for << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "fr"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3240, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "fro"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3267, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "from"
  ContextualKeyword._from << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "fu"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3321, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "fun"
  -1, -1, -1, 3348, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "func"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3375, -1, -1, -1, -1, -1, -1,
  // "funct"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 3402, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "functi"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3429, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "functio"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3456, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "function"
  (TokenType._function << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "g"
  -1, -1, -1, -1, -1, 3510, -1, -1, -1, -1, -1, -1, 3564, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "ge"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3537, -1, -1, -1, -1, -1, -1,
  // "get"
  ContextualKeyword._get << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "gl"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3591, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "glo"
  -1, -1, 3618, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "glob"
  -1, 3645, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "globa"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3672, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "global"
  ContextualKeyword._global << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "i"
  -1, -1, -1, -1, -1, -1, 3726, -1, -1, -1, -1, -1, -1, 3753, 4077, -1, -1, -1, -1, 4590, -1, -1, -1, -1, -1, -1, -1,
  // "if"
  (TokenType._if << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "im"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3780, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "imp"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3807, -1, -1, 3996, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "impl"
  -1, -1, -1, -1, -1, 3834, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "imple"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3861, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "implem"
  -1, -1, -1, -1, -1, 3888, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "impleme"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3915, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "implemen"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3942, -1, -1, -1, -1, -1, -1,
  // "implement"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3969, -1, -1, -1, -1, -1, -1, -1,
  // "implements"
  ContextualKeyword._implements << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "impo"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4023, -1, -1, -1, -1, -1, -1, -1, -1,
  // "impor"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4050, -1, -1, -1, -1, -1, -1,
  // "import"
  (TokenType._import << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "in"
  (TokenType._in << 1) + 1, -1, -1, -1, -1, -1, 4104, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4185, 4401, -1, -1, -1, -1, -1, -1,
  // "inf"
  -1, -1, -1, -1, -1, 4131, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "infe"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4158, -1, -1, -1, -1, -1, -1, -1, -1,
  // "infer"
  ContextualKeyword._infer << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "ins"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4212, -1, -1, -1, -1, -1, -1,
  // "inst"
  -1, 4239, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "insta"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4266, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "instan"
  -1, -1, -1, 4293, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "instanc"
  -1, -1, -1, -1, -1, 4320, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "instance"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4347, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "instanceo"
  -1, -1, -1, -1, -1, -1, 4374, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "instanceof"
  (TokenType._instanceof << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "int"
  -1, -1, -1, -1, -1, 4428, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "inte"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4455, -1, -1, -1, -1, -1, -1, -1, -1,
  // "inter"
  -1, -1, -1, -1, -1, -1, 4482, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "interf"
  -1, 4509, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "interfa"
  -1, -1, -1, 4536, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "interfac"
  -1, -1, -1, -1, -1, 4563, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "interface"
  ContextualKeyword._interface << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "is"
  ContextualKeyword._is << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "k"
  -1, -1, -1, -1, -1, 4644, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "ke"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4671, -1,
  // "key"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4698, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "keyo"
  -1, -1, -1, -1, -1, -1, 4725, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "keyof"
  ContextualKeyword._keyof << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "l"
  -1, -1, -1, -1, -1, 4779, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "le"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4806, -1, -1, -1, -1, -1, -1,
  // "let"
  (TokenType._let << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "m"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 4860, -1, -1, -1, -1, -1, 4995, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "mi"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4887, -1, -1,
  // "mix"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 4914, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "mixi"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4941, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "mixin"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4968, -1, -1, -1, -1, -1, -1, -1,
  // "mixins"
  ContextualKeyword._mixins << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "mo"
  -1, -1, -1, -1, 5022, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "mod"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5049, -1, -1, -1, -1, -1,
  // "modu"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5076, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "modul"
  -1, -1, -1, -1, -1, 5103, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "module"
  ContextualKeyword._module << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "n"
  -1, 5157, -1, -1, -1, 5373, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5427, -1, -1, -1, -1, -1,
  // "na"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5184, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "nam"
  -1, -1, -1, -1, -1, 5211, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "name"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5238, -1, -1, -1, -1, -1, -1, -1,
  // "names"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5265, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "namesp"
  -1, 5292, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "namespa"
  -1, -1, -1, 5319, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "namespac"
  -1, -1, -1, -1, -1, 5346, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "namespace"
  ContextualKeyword._namespace << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "ne"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5400, -1, -1, -1,
  // "new"
  (TokenType._new << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "nu"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5454, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "nul"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5481, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "null"
  (TokenType._null << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "o"
  -1, -1, -1, -1, -1, -1, 5535, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5562, -1, -1, -1, -1, 5697, 5751, -1, -1, -1, -1,
  // "of"
  ContextualKeyword._of << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "op"
  -1, 5589, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "opa"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5616, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "opaq"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5643, -1, -1, -1, -1, -1,
  // "opaqu"
  -1, -1, -1, -1, -1, 5670, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "opaque"
  ContextualKeyword._opaque << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "ou"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5724, -1, -1, -1, -1, -1, -1,
  // "out"
  ContextualKeyword._out << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "ov"
  -1, -1, -1, -1, -1, 5778, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "ove"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5805, -1, -1, -1, -1, -1, -1, -1, -1,
  // "over"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5832, -1, -1, -1, -1, -1, -1, -1, -1,
  // "overr"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 5859, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "overri"
  -1, -1, -1, -1, 5886, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "overrid"
  -1, -1, -1, -1, -1, 5913, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "override"
  ContextualKeyword._override << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "p"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5967, -1, -1, 6345, -1, -1, -1, -1, -1,
  // "pr"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 5994, -1, -1, -1, -1, -1, 6129, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "pri"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6021, -1, -1, -1, -1,
  // "priv"
  -1, 6048, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "priva"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6075, -1, -1, -1, -1, -1, -1,
  // "privat"
  -1, -1, -1, -1, -1, 6102, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "private"
  ContextualKeyword._private << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "pro"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6156, -1, -1, -1, -1, -1, -1,
  // "prot"
  -1, -1, -1, -1, -1, 6183, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6318, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "prote"
  -1, -1, -1, 6210, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "protec"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6237, -1, -1, -1, -1, -1, -1,
  // "protect"
  -1, -1, -1, -1, -1, 6264, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "protecte"
  -1, -1, -1, -1, 6291, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "protected"
  ContextualKeyword._protected << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "proto"
  ContextualKeyword._proto << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "pu"
  -1, -1, 6372, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "pub"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6399, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "publ"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 6426, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "publi"
  -1, -1, -1, 6453, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "public"
  ContextualKeyword._public << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "r"
  -1, -1, -1, -1, -1, 6507, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "re"
  -1, 6534, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6696, -1, -1, 6831, -1, -1, -1, -1, -1, -1,
  // "rea"
  -1, -1, -1, -1, 6561, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "read"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6588, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "reado"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6615, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "readon"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6642, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "readonl"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6669, -1,
  // "readonly"
  ContextualKeyword._readonly << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "req"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6723, -1, -1, -1, -1, -1,
  // "requ"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 6750, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "requi"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6777, -1, -1, -1, -1, -1, -1, -1, -1,
  // "requir"
  -1, -1, -1, -1, -1, 6804, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "require"
  ContextualKeyword._require << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "ret"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6858, -1, -1, -1, -1, -1,
  // "retu"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6885, -1, -1, -1, -1, -1, -1, -1, -1,
  // "retur"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6912, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "return"
  (TokenType._return << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "s"
  -1, 6966, -1, -1, -1, 7182, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7236, 7371, -1, 7479, -1, 7614, -1,
  // "sa"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6993, -1, -1, -1, -1, -1, -1,
  // "sat"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 7020, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "sati"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7047, -1, -1, -1, -1, -1, -1, -1,
  // "satis"
  -1, -1, -1, -1, -1, -1, 7074, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "satisf"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 7101, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "satisfi"
  -1, -1, -1, -1, -1, 7128, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "satisfie"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7155, -1, -1, -1, -1, -1, -1, -1,
  // "satisfies"
  ContextualKeyword._satisfies << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "se"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7209, -1, -1, -1, -1, -1, -1,
  // "set"
  ContextualKeyword._set << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "st"
  -1, 7263, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "sta"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7290, -1, -1, -1, -1, -1, -1,
  // "stat"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 7317, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "stati"
  -1, -1, -1, 7344, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "static"
  ContextualKeyword._static << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "su"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7398, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "sup"
  -1, -1, -1, -1, -1, 7425, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "supe"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7452, -1, -1, -1, -1, -1, -1, -1, -1,
  // "super"
  (TokenType._super << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "sw"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 7506, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "swi"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7533, -1, -1, -1, -1, -1, -1,
  // "swit"
  -1, -1, -1, 7560, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "switc"
  -1, -1, -1, -1, -1, -1, -1, -1, 7587, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "switch"
  (TokenType._switch << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "sy"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7641, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "sym"
  -1, -1, 7668, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "symb"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7695, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "symbo"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7722, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "symbol"
  ContextualKeyword._symbol << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "t"
  -1, -1, -1, -1, -1, -1, -1, -1, 7776, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7938, -1, -1, -1, -1, -1, -1, 8046, -1,
  // "th"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 7803, -1, -1, -1, -1, -1, -1, -1, -1, 7857, -1, -1, -1, -1, -1, -1, -1, -1,
  // "thi"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7830, -1, -1, -1, -1, -1, -1, -1,
  // "this"
  (TokenType._this << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "thr"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7884, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "thro"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7911, -1, -1, -1,
  // "throw"
  (TokenType._throw << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "tr"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7965, -1, -1, -1, 8019, -1,
  // "tru"
  -1, -1, -1, -1, -1, 7992, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "true"
  (TokenType._true << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "try"
  (TokenType._try << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "ty"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8073, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "typ"
  -1, -1, -1, -1, -1, 8100, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "type"
  ContextualKeyword._type << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8127, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "typeo"
  -1, -1, -1, -1, -1, -1, 8154, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "typeof"
  (TokenType._typeof << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "u"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8208, -1, -1, -1, -1, 8343, -1, -1, -1, -1, -1, -1, -1,
  // "un"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 8235, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "uni"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8262, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "uniq"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8289, -1, -1, -1, -1, -1,
  // "uniqu"
  -1, -1, -1, -1, -1, 8316, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "unique"
  ContextualKeyword._unique << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "us"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 8370, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "usi"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8397, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "usin"
  -1, -1, -1, -1, -1, -1, -1, 8424, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "using"
  ContextualKeyword._using << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "v"
  -1, 8478, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8532, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "va"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8505, -1, -1, -1, -1, -1, -1, -1, -1,
  // "var"
  (TokenType._var << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "vo"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 8559, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "voi"
  -1, -1, -1, -1, 8586, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "void"
  (TokenType._void << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "w"
  -1, -1, -1, -1, -1, -1, -1, -1, 8640, 8748, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "wh"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 8667, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "whi"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8694, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "whil"
  -1, -1, -1, -1, -1, 8721, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "while"
  (TokenType._while << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "wi"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8775, -1, -1, -1, -1, -1, -1,
  // "wit"
  -1, -1, -1, -1, -1, -1, -1, -1, 8802, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "with"
  (TokenType._with << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "y"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 8856, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "yi"
  -1, -1, -1, -1, -1, 8883, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "yie"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8910, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "yiel"
  -1, -1, -1, -1, 8937, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "yield"
  (TokenType._yield << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
]);

;// ./node_modules/sucrase/dist/esm/parser/tokenizer/readWord.js







/**
 * Read an identifier, producing either a name token or matching on one of the existing keywords.
 * For performance, we pre-generate big decision tree that we traverse. Each node represents a
 * prefix and has 27 values, where the first value is the token or contextual token, if any (-1 if
 * not), and the other 26 values are the transitions to other nodes, or -1 to stop.
 */
function readWord() {
  let treePos = 0;
  let code = 0;
  let pos = state.pos;
  while (pos < input.length) {
    code = input.charCodeAt(pos);
    if (code < charCodes.lowercaseA || code > charCodes.lowercaseZ) {
      break;
    }
    const next = READ_WORD_TREE[treePos + (code - charCodes.lowercaseA) + 1];
    if (next === -1) {
      break;
    } else {
      treePos = next;
      pos++;
    }
  }

  const keywordValue = READ_WORD_TREE[treePos];
  if (keywordValue > -1 && !IS_IDENTIFIER_CHAR[code]) {
    state.pos = pos;
    if (keywordValue & 1) {
      finishToken(keywordValue >>> 1);
    } else {
      finishToken(TokenType.name, keywordValue >>> 1);
    }
    return;
  }

  while (pos < input.length) {
    const ch = input.charCodeAt(pos);
    if (IS_IDENTIFIER_CHAR[ch]) {
      pos++;
    } else if (ch === charCodes.backslash) {
      // \u
      pos += 2;
      if (input.charCodeAt(pos) === charCodes.leftCurlyBrace) {
        while (pos < input.length && input.charCodeAt(pos) !== charCodes.rightCurlyBrace) {
          pos++;
        }
        pos++;
      }
    } else if (ch === charCodes.atSign && input.charCodeAt(pos + 1) === charCodes.atSign) {
      pos += 2;
    } else {
      break;
    }
  }
  state.pos = pos;
  finishToken(TokenType.name);
}

;// ./node_modules/sucrase/dist/esm/parser/tokenizer/index.js
/* eslint max-len: 0 */










var IdentifierRole; (function (IdentifierRole) {
  const Access = 0; IdentifierRole[IdentifierRole["Access"] = Access] = "Access";
  const ExportAccess = Access + 1; IdentifierRole[IdentifierRole["ExportAccess"] = ExportAccess] = "ExportAccess";
  const TopLevelDeclaration = ExportAccess + 1; IdentifierRole[IdentifierRole["TopLevelDeclaration"] = TopLevelDeclaration] = "TopLevelDeclaration";
  const FunctionScopedDeclaration = TopLevelDeclaration + 1; IdentifierRole[IdentifierRole["FunctionScopedDeclaration"] = FunctionScopedDeclaration] = "FunctionScopedDeclaration";
  const BlockScopedDeclaration = FunctionScopedDeclaration + 1; IdentifierRole[IdentifierRole["BlockScopedDeclaration"] = BlockScopedDeclaration] = "BlockScopedDeclaration";
  const ObjectShorthandTopLevelDeclaration = BlockScopedDeclaration + 1; IdentifierRole[IdentifierRole["ObjectShorthandTopLevelDeclaration"] = ObjectShorthandTopLevelDeclaration] = "ObjectShorthandTopLevelDeclaration";
  const ObjectShorthandFunctionScopedDeclaration = ObjectShorthandTopLevelDeclaration + 1; IdentifierRole[IdentifierRole["ObjectShorthandFunctionScopedDeclaration"] = ObjectShorthandFunctionScopedDeclaration] = "ObjectShorthandFunctionScopedDeclaration";
  const ObjectShorthandBlockScopedDeclaration = ObjectShorthandFunctionScopedDeclaration + 1; IdentifierRole[IdentifierRole["ObjectShorthandBlockScopedDeclaration"] = ObjectShorthandBlockScopedDeclaration] = "ObjectShorthandBlockScopedDeclaration";
  const ObjectShorthand = ObjectShorthandBlockScopedDeclaration + 1; IdentifierRole[IdentifierRole["ObjectShorthand"] = ObjectShorthand] = "ObjectShorthand";
  // Any identifier bound in an import statement, e.g. both A and b from
  // `import A, * as b from 'A';`
  const ImportDeclaration = ObjectShorthand + 1; IdentifierRole[IdentifierRole["ImportDeclaration"] = ImportDeclaration] = "ImportDeclaration";
  const ObjectKey = ImportDeclaration + 1; IdentifierRole[IdentifierRole["ObjectKey"] = ObjectKey] = "ObjectKey";
  // The `foo` in `import {foo as bar} from "./abc";`.
  const ImportAccess = ObjectKey + 1; IdentifierRole[IdentifierRole["ImportAccess"] = ImportAccess] = "ImportAccess";
})(IdentifierRole || (IdentifierRole = {}));

/**
 * Extra information on jsxTagStart tokens, used to determine which of the three
 * jsx functions are called in the automatic transform.
 */
var JSXRole; (function (JSXRole) {
  // The element is self-closing or has a body that resolves to empty. We
  // shouldn't emit children at all in this case.
  const NoChildren = 0; JSXRole[JSXRole["NoChildren"] = NoChildren] = "NoChildren";
  // The element has a single explicit child, which might still be an arbitrary
  // expression like an array. We should emit that expression as the children.
  const OneChild = NoChildren + 1; JSXRole[JSXRole["OneChild"] = OneChild] = "OneChild";
  // The element has at least two explicitly-specified children or has spread
  // children, so child positions are assumed to be "static". We should wrap
  // these children in an array.
  const StaticChildren = OneChild + 1; JSXRole[JSXRole["StaticChildren"] = StaticChildren] = "StaticChildren";
  // The element has a prop named "key" after a prop spread, so we should fall
  // back to the createElement function.
  const KeyAfterPropSpread = StaticChildren + 1; JSXRole[JSXRole["KeyAfterPropSpread"] = KeyAfterPropSpread] = "KeyAfterPropSpread";
})(JSXRole || (JSXRole = {}));

function isDeclaration(token) {
  const role = token.identifierRole;
  return (
    role === IdentifierRole.TopLevelDeclaration ||
    role === IdentifierRole.FunctionScopedDeclaration ||
    role === IdentifierRole.BlockScopedDeclaration ||
    role === IdentifierRole.ObjectShorthandTopLevelDeclaration ||
    role === IdentifierRole.ObjectShorthandFunctionScopedDeclaration ||
    role === IdentifierRole.ObjectShorthandBlockScopedDeclaration
  );
}

function isNonTopLevelDeclaration(token) {
  const role = token.identifierRole;
  return (
    role === IdentifierRole.FunctionScopedDeclaration ||
    role === IdentifierRole.BlockScopedDeclaration ||
    role === IdentifierRole.ObjectShorthandFunctionScopedDeclaration ||
    role === IdentifierRole.ObjectShorthandBlockScopedDeclaration
  );
}

function isTopLevelDeclaration(token) {
  const role = token.identifierRole;
  return (
    role === IdentifierRole.TopLevelDeclaration ||
    role === IdentifierRole.ObjectShorthandTopLevelDeclaration ||
    role === IdentifierRole.ImportDeclaration
  );
}

function isBlockScopedDeclaration(token) {
  const role = token.identifierRole;
  // Treat top-level declarations as block scope since the distinction doesn't matter here.
  return (
    role === IdentifierRole.TopLevelDeclaration ||
    role === IdentifierRole.BlockScopedDeclaration ||
    role === IdentifierRole.ObjectShorthandTopLevelDeclaration ||
    role === IdentifierRole.ObjectShorthandBlockScopedDeclaration
  );
}

function isFunctionScopedDeclaration(token) {
  const role = token.identifierRole;
  return (
    role === IdentifierRole.FunctionScopedDeclaration ||
    role === IdentifierRole.ObjectShorthandFunctionScopedDeclaration
  );
}

function isObjectShorthandDeclaration(token) {
  return (
    token.identifierRole === IdentifierRole.ObjectShorthandTopLevelDeclaration ||
    token.identifierRole === IdentifierRole.ObjectShorthandBlockScopedDeclaration ||
    token.identifierRole === IdentifierRole.ObjectShorthandFunctionScopedDeclaration
  );
}

// Object type used to represent tokens. Note that normally, tokens
// simply exist as properties on the parser object. This is only
// used for the onToken callback and the external tokenizer.
class Token {
  constructor() {
    this.type = state.type;
    this.contextualKeyword = state.contextualKeyword;
    this.start = state.start;
    this.end = state.end;
    this.scopeDepth = state.scopeDepth;
    this.isType = state.isType;
    this.identifierRole = null;
    this.jsxRole = null;
    this.shadowsGlobal = false;
    this.isAsyncOperation = false;
    this.contextId = null;
    this.rhsEndIndex = null;
    this.isExpression = false;
    this.numNullishCoalesceStarts = 0;
    this.numNullishCoalesceEnds = 0;
    this.isOptionalChainStart = false;
    this.isOptionalChainEnd = false;
    this.subscriptStartIndex = null;
    this.nullishStartIndex = null;
  }

  
  
  
  
  
  
  
  
  // Initially false for all tokens, then may be computed in a follow-up step that does scope
  // analysis.
  
  // Initially false for all tokens, but may be set during transform to mark it as containing an
  // await operation.
  
  
  // For assignments, the index of the RHS. For export tokens, the end of the export.
  
  // For class tokens, records if the class is a class expression or a class statement.
  
  // Number of times to insert a `nullishCoalesce(` snippet before this token.
  
  // Number of times to insert a `)` snippet after this token.
  
  // If true, insert an `optionalChain([` snippet before this token.
  
  // If true, insert a `])` snippet after this token.
  
  // Tag for `.`, `?.`, `[`, `?.[`, `(`, and `?.(` to denote the "root" token for this
  // subscript chain. This can be used to determine if this chain is an optional chain.
  
  // Tag for `??` operators to denote the root token for this nullish coalescing call.
  
}

// ## Tokenizer

// Move to the next token
function next() {
  state.tokens.push(new Token());
  nextToken();
}

// Call instead of next when inside a template, since that needs to be handled differently.
function nextTemplateToken() {
  state.tokens.push(new Token());
  state.start = state.pos;
  readTmplToken();
}

// The tokenizer never parses regexes by default. Instead, the parser is responsible for
// instructing it to parse a regex when we see a slash at the start of an expression.
function retokenizeSlashAsRegex() {
  if (state.type === TokenType.assign) {
    --state.pos;
  }
  readRegexp();
}

function pushTypeContext(existingTokensInType) {
  for (let i = state.tokens.length - existingTokensInType; i < state.tokens.length; i++) {
    state.tokens[i].isType = true;
  }
  const oldIsType = state.isType;
  state.isType = true;
  return oldIsType;
}

function popTypeContext(oldIsType) {
  state.isType = oldIsType;
}

function eat(type) {
  if (match(type)) {
    next();
    return true;
  } else {
    return false;
  }
}

function eatTypeToken(tokenType) {
  const oldIsType = state.isType;
  state.isType = true;
  eat(tokenType);
  state.isType = oldIsType;
}

function match(type) {
  return state.type === type;
}

function lookaheadType() {
  const snapshot = state.snapshot();
  next();
  const type = state.type;
  state.restoreFromSnapshot(snapshot);
  return type;
}

class TypeAndKeyword {
  
  
  constructor(type, contextualKeyword) {
    this.type = type;
    this.contextualKeyword = contextualKeyword;
  }
}

function lookaheadTypeAndKeyword() {
  const snapshot = state.snapshot();
  next();
  const type = state.type;
  const contextualKeyword = state.contextualKeyword;
  state.restoreFromSnapshot(snapshot);
  return new TypeAndKeyword(type, contextualKeyword);
}

function nextTokenStart() {
  return nextTokenStartSince(state.pos);
}

function nextTokenStartSince(pos) {
  skipWhiteSpace.lastIndex = pos;
  const skip = skipWhiteSpace.exec(input);
  return pos + skip[0].length;
}

function lookaheadCharCode() {
  return input.charCodeAt(nextTokenStart());
}

// Read a single token, updating the parser object's token-related
// properties.
function nextToken() {
  skipSpace();
  state.start = state.pos;
  if (state.pos >= input.length) {
    const tokens = state.tokens;
    // We normally run past the end a bit, but if we're way past the end, avoid an infinite loop.
    // Also check the token positions rather than the types since sometimes we rewrite the token
    // type to something else.
    if (
      tokens.length >= 2 &&
      tokens[tokens.length - 1].start >= input.length &&
      tokens[tokens.length - 2].start >= input.length
    ) {
      unexpected("Unexpectedly reached the end of input.");
    }
    finishToken(TokenType.eof);
    return;
  }
  readToken(input.charCodeAt(state.pos));
}

function readToken(code) {
  // Identifier or keyword. '\uXXXX' sequences are allowed in
  // identifiers, so '\' also dispatches to that.
  if (
    IS_IDENTIFIER_START[code] ||
    code === charCodes.backslash ||
    (code === charCodes.atSign && input.charCodeAt(state.pos + 1) === charCodes.atSign)
  ) {
    readWord();
  } else {
    getTokenFromCode(code);
  }
}

function skipBlockComment() {
  while (
    input.charCodeAt(state.pos) !== charCodes.asterisk ||
    input.charCodeAt(state.pos + 1) !== charCodes.slash
  ) {
    state.pos++;
    if (state.pos > input.length) {
      unexpected("Unterminated comment", state.pos - 2);
      return;
    }
  }
  state.pos += 2;
}

function skipLineComment(startSkip) {
  let ch = input.charCodeAt((state.pos += startSkip));
  if (state.pos < input.length) {
    while (
      ch !== charCodes.lineFeed &&
      ch !== charCodes.carriageReturn &&
      ch !== charCodes.lineSeparator &&
      ch !== charCodes.paragraphSeparator &&
      ++state.pos < input.length
    ) {
      ch = input.charCodeAt(state.pos);
    }
  }
}

// Called at the start of the parse and after every token. Skips
// whitespace and comments.
function skipSpace() {
  while (state.pos < input.length) {
    const ch = input.charCodeAt(state.pos);
    switch (ch) {
      case charCodes.carriageReturn:
        if (input.charCodeAt(state.pos + 1) === charCodes.lineFeed) {
          ++state.pos;
        }

      case charCodes.lineFeed:
      case charCodes.lineSeparator:
      case charCodes.paragraphSeparator:
        ++state.pos;
        break;

      case charCodes.slash:
        switch (input.charCodeAt(state.pos + 1)) {
          case charCodes.asterisk:
            state.pos += 2;
            skipBlockComment();
            break;

          case charCodes.slash:
            skipLineComment(2);
            break;

          default:
            return;
        }
        break;

      default:
        if (IS_WHITESPACE[ch]) {
          ++state.pos;
        } else {
          return;
        }
    }
  }
}

// Called at the end of every token. Sets various fields, and skips the space after the token, so
// that the next one's `start` will point at the right position.
function finishToken(
  type,
  contextualKeyword = ContextualKeyword.NONE,
) {
  state.end = state.pos;
  state.type = type;
  state.contextualKeyword = contextualKeyword;
}

// ### Token reading

// This is the function that is called to fetch the next token. It
// is somewhat obscure, because it works in character codes rather
// than characters, and because operator parsing has been inlined
// into it.
//
// All in the name of speed.
function readToken_dot() {
  const nextChar = input.charCodeAt(state.pos + 1);
  if (nextChar >= charCodes.digit0 && nextChar <= charCodes.digit9) {
    readNumber(true);
    return;
  }

  if (nextChar === charCodes.dot && input.charCodeAt(state.pos + 2) === charCodes.dot) {
    state.pos += 3;
    finishToken(TokenType.ellipsis);
  } else {
    ++state.pos;
    finishToken(TokenType.dot);
  }
}

function readToken_slash() {
  const nextChar = input.charCodeAt(state.pos + 1);
  if (nextChar === charCodes.equalsTo) {
    finishOp(TokenType.assign, 2);
  } else {
    finishOp(TokenType.slash, 1);
  }
}

function readToken_mult_modulo(code) {
  // '%*'
  let tokenType = code === charCodes.asterisk ? TokenType.star : TokenType.modulo;
  let width = 1;
  let nextChar = input.charCodeAt(state.pos + 1);

  // Exponentiation operator **
  if (code === charCodes.asterisk && nextChar === charCodes.asterisk) {
    width++;
    nextChar = input.charCodeAt(state.pos + 2);
    tokenType = TokenType.exponent;
  }

  // Match *= or %=, disallowing *=> which can be valid in flow.
  if (
    nextChar === charCodes.equalsTo &&
    input.charCodeAt(state.pos + 2) !== charCodes.greaterThan
  ) {
    width++;
    tokenType = TokenType.assign;
  }

  finishOp(tokenType, width);
}

function readToken_pipe_amp(code) {
  // '|&'
  const nextChar = input.charCodeAt(state.pos + 1);

  if (nextChar === code) {
    if (input.charCodeAt(state.pos + 2) === charCodes.equalsTo) {
      // ||= or &&=
      finishOp(TokenType.assign, 3);
    } else {
      // || or &&
      finishOp(code === charCodes.verticalBar ? TokenType.logicalOR : TokenType.logicalAND, 2);
    }
    return;
  }

  if (code === charCodes.verticalBar) {
    // '|>'
    if (nextChar === charCodes.greaterThan) {
      finishOp(TokenType.pipeline, 2);
      return;
    } else if (nextChar === charCodes.rightCurlyBrace && isFlowEnabled) {
      // '|}'
      finishOp(TokenType.braceBarR, 2);
      return;
    }
  }

  if (nextChar === charCodes.equalsTo) {
    finishOp(TokenType.assign, 2);
    return;
  }

  finishOp(code === charCodes.verticalBar ? TokenType.bitwiseOR : TokenType.bitwiseAND, 1);
}

function readToken_caret() {
  // '^'
  const nextChar = input.charCodeAt(state.pos + 1);
  if (nextChar === charCodes.equalsTo) {
    finishOp(TokenType.assign, 2);
  } else {
    finishOp(TokenType.bitwiseXOR, 1);
  }
}

function readToken_plus_min(code) {
  // '+-'
  const nextChar = input.charCodeAt(state.pos + 1);

  if (nextChar === code) {
    // Tentatively call this a prefix operator, but it might be changed to postfix later.
    finishOp(TokenType.preIncDec, 2);
    return;
  }

  if (nextChar === charCodes.equalsTo) {
    finishOp(TokenType.assign, 2);
  } else if (code === charCodes.plusSign) {
    finishOp(TokenType.plus, 1);
  } else {
    finishOp(TokenType.minus, 1);
  }
}

function readToken_lt() {
  const nextChar = input.charCodeAt(state.pos + 1);

  if (nextChar === charCodes.lessThan) {
    if (input.charCodeAt(state.pos + 2) === charCodes.equalsTo) {
      finishOp(TokenType.assign, 3);
      return;
    }
    // We see <<, but need to be really careful about whether to treat it as a
    // true left-shift or as two < tokens.
    if (state.isType) {
      // Within a type, << might come up in a snippet like `Array<<T>() => void>`,
      // so treat it as two < tokens. Importantly, this should only override <<
      // rather than other tokens like <= . If we treated <= as < in a type
      // context, then the snippet `a as T <= 1` would incorrectly start parsing
      // a type argument on T. We don't need to worry about `a as T << 1`
      // because TypeScript disallows that syntax.
      finishOp(TokenType.lessThan, 1);
    } else {
      // Outside a type, this might be a true left-shift operator, or it might
      // still be two open-type-arg tokens, such as in `f<<T>() => void>()`. We
      // look at the token while considering the `f`, so we don't yet know that
      // we're in a type context. In this case, we initially tokenize as a
      // left-shift and correct after-the-fact as necessary in
      // tsParseTypeArgumentsWithPossibleBitshift .
      finishOp(TokenType.bitShiftL, 2);
    }
    return;
  }

  if (nextChar === charCodes.equalsTo) {
    // <=
    finishOp(TokenType.relationalOrEqual, 2);
  } else {
    finishOp(TokenType.lessThan, 1);
  }
}

function readToken_gt() {
  if (state.isType) {
    // Avoid right-shift for things like `Array<Array<string>>` and
    // greater-than-or-equal for things like `const a: Array<number>=[];`.
    finishOp(TokenType.greaterThan, 1);
    return;
  }

  const nextChar = input.charCodeAt(state.pos + 1);

  if (nextChar === charCodes.greaterThan) {
    const size = input.charCodeAt(state.pos + 2) === charCodes.greaterThan ? 3 : 2;
    if (input.charCodeAt(state.pos + size) === charCodes.equalsTo) {
      finishOp(TokenType.assign, size + 1);
      return;
    }
    finishOp(TokenType.bitShiftR, size);
    return;
  }

  if (nextChar === charCodes.equalsTo) {
    // >=
    finishOp(TokenType.relationalOrEqual, 2);
  } else {
    finishOp(TokenType.greaterThan, 1);
  }
}

/**
 * Reinterpret a possible > token when transitioning from a type to a non-type
 * context.
 *
 * This comes up in two situations where >= needs to be treated as one token:
 * - After an `as` expression, like in the code `a as T >= 1`.
 * - In a type argument in an expression context, e.g. `f(a < b, c >= d)`, we
 *   need to see the token as >= so that we get an error and backtrack to
 *   normal expression parsing.
 *
 * Other situations require >= to be seen as two tokens, e.g.
 * `const x: Array<T>=[];`, so it's important to treat > as its own token in
 * typical type parsing situations.
 */
function rescan_gt() {
  if (state.type === TokenType.greaterThan) {
    state.pos -= 1;
    readToken_gt();
  }
}

function readToken_eq_excl(code) {
  // '=!'
  const nextChar = input.charCodeAt(state.pos + 1);
  if (nextChar === charCodes.equalsTo) {
    finishOp(TokenType.equality, input.charCodeAt(state.pos + 2) === charCodes.equalsTo ? 3 : 2);
    return;
  }
  if (code === charCodes.equalsTo && nextChar === charCodes.greaterThan) {
    // '=>'
    state.pos += 2;
    finishToken(TokenType.arrow);
    return;
  }
  finishOp(code === charCodes.equalsTo ? TokenType.eq : TokenType.bang, 1);
}

function readToken_question() {
  // '?'
  const nextChar = input.charCodeAt(state.pos + 1);
  const nextChar2 = input.charCodeAt(state.pos + 2);
  if (
    nextChar === charCodes.questionMark &&
    // In Flow (but not TypeScript), ??string is a valid type that should be
    // tokenized as two individual ? tokens.
    !(isFlowEnabled && state.isType)
  ) {
    if (nextChar2 === charCodes.equalsTo) {
      // '??='
      finishOp(TokenType.assign, 3);
    } else {
      // '??'
      finishOp(TokenType.nullishCoalescing, 2);
    }
  } else if (
    nextChar === charCodes.dot &&
    !(nextChar2 >= charCodes.digit0 && nextChar2 <= charCodes.digit9)
  ) {
    // '.' not followed by a number
    state.pos += 2;
    finishToken(TokenType.questionDot);
  } else {
    ++state.pos;
    finishToken(TokenType.question);
  }
}

function getTokenFromCode(code) {
  switch (code) {
    case charCodes.numberSign:
      ++state.pos;
      finishToken(TokenType.hash);
      return;

    // The interpretation of a dot depends on whether it is followed
    // by a digit or another two dots.

    case charCodes.dot:
      readToken_dot();
      return;

    // Punctuation tokens.
    case charCodes.leftParenthesis:
      ++state.pos;
      finishToken(TokenType.parenL);
      return;
    case charCodes.rightParenthesis:
      ++state.pos;
      finishToken(TokenType.parenR);
      return;
    case charCodes.semicolon:
      ++state.pos;
      finishToken(TokenType.semi);
      return;
    case charCodes.comma:
      ++state.pos;
      finishToken(TokenType.comma);
      return;
    case charCodes.leftSquareBracket:
      ++state.pos;
      finishToken(TokenType.bracketL);
      return;
    case charCodes.rightSquareBracket:
      ++state.pos;
      finishToken(TokenType.bracketR);
      return;

    case charCodes.leftCurlyBrace:
      if (isFlowEnabled && input.charCodeAt(state.pos + 1) === charCodes.verticalBar) {
        finishOp(TokenType.braceBarL, 2);
      } else {
        ++state.pos;
        finishToken(TokenType.braceL);
      }
      return;

    case charCodes.rightCurlyBrace:
      ++state.pos;
      finishToken(TokenType.braceR);
      return;

    case charCodes.colon:
      if (input.charCodeAt(state.pos + 1) === charCodes.colon) {
        finishOp(TokenType.doubleColon, 2);
      } else {
        ++state.pos;
        finishToken(TokenType.colon);
      }
      return;

    case charCodes.questionMark:
      readToken_question();
      return;
    case charCodes.atSign:
      ++state.pos;
      finishToken(TokenType.at);
      return;

    case charCodes.graveAccent:
      ++state.pos;
      finishToken(TokenType.backQuote);
      return;

    case charCodes.digit0: {
      const nextChar = input.charCodeAt(state.pos + 1);
      // '0x', '0X', '0o', '0O', '0b', '0B'
      if (
        nextChar === charCodes.lowercaseX ||
        nextChar === charCodes.uppercaseX ||
        nextChar === charCodes.lowercaseO ||
        nextChar === charCodes.uppercaseO ||
        nextChar === charCodes.lowercaseB ||
        nextChar === charCodes.uppercaseB
      ) {
        readRadixNumber();
        return;
      }
    }
    // Anything else beginning with a digit is an integer, octal
    // number, or float.
    case charCodes.digit1:
    case charCodes.digit2:
    case charCodes.digit3:
    case charCodes.digit4:
    case charCodes.digit5:
    case charCodes.digit6:
    case charCodes.digit7:
    case charCodes.digit8:
    case charCodes.digit9:
      readNumber(false);
      return;

    // Quotes produce strings.
    case charCodes.quotationMark:
    case charCodes.apostrophe:
      readString(code);
      return;

    // Operators are parsed inline in tiny state machines. '=' (charCodes.equalsTo) is
    // often referred to. `finishOp` simply skips the amount of
    // characters it is given as second argument, and returns a token
    // of the type given by its first argument.

    case charCodes.slash:
      readToken_slash();
      return;

    case charCodes.percentSign:
    case charCodes.asterisk:
      readToken_mult_modulo(code);
      return;

    case charCodes.verticalBar:
    case charCodes.ampersand:
      readToken_pipe_amp(code);
      return;

    case charCodes.caret:
      readToken_caret();
      return;

    case charCodes.plusSign:
    case charCodes.dash:
      readToken_plus_min(code);
      return;

    case charCodes.lessThan:
      readToken_lt();
      return;

    case charCodes.greaterThan:
      readToken_gt();
      return;

    case charCodes.equalsTo:
    case charCodes.exclamationMark:
      readToken_eq_excl(code);
      return;

    case charCodes.tilde:
      finishOp(TokenType.tilde, 1);
      return;

    default:
      break;
  }

  unexpected(`Unexpected character '${String.fromCharCode(code)}'`, state.pos);
}

function finishOp(type, size) {
  state.pos += size;
  finishToken(type);
}

function readRegexp() {
  const start = state.pos;
  let escaped = false;
  let inClass = false;
  for (;;) {
    if (state.pos >= input.length) {
      unexpected("Unterminated regular expression", start);
      return;
    }
    const code = input.charCodeAt(state.pos);
    if (escaped) {
      escaped = false;
    } else {
      if (code === charCodes.leftSquareBracket) {
        inClass = true;
      } else if (code === charCodes.rightSquareBracket && inClass) {
        inClass = false;
      } else if (code === charCodes.slash && !inClass) {
        break;
      }
      escaped = code === charCodes.backslash;
    }
    ++state.pos;
  }
  ++state.pos;
  // Need to use `skipWord` because '\uXXXX' sequences are allowed here (don't ask).
  skipWord();

  finishToken(TokenType.regexp);
}

/**
 * Read a decimal integer. Note that this can't be unified with the similar code
 * in readRadixNumber (which also handles hex digits) because "e" needs to be
 * the end of the integer so that we can properly handle scientific notation.
 */
function readInt() {
  while (true) {
    const code = input.charCodeAt(state.pos);
    if ((code >= charCodes.digit0 && code <= charCodes.digit9) || code === charCodes.underscore) {
      state.pos++;
    } else {
      break;
    }
  }
}

function readRadixNumber() {
  state.pos += 2; // 0x

  // Walk to the end of the number, allowing hex digits.
  while (true) {
    const code = input.charCodeAt(state.pos);
    if (
      (code >= charCodes.digit0 && code <= charCodes.digit9) ||
      (code >= charCodes.lowercaseA && code <= charCodes.lowercaseF) ||
      (code >= charCodes.uppercaseA && code <= charCodes.uppercaseF) ||
      code === charCodes.underscore
    ) {
      state.pos++;
    } else {
      break;
    }
  }

  const nextChar = input.charCodeAt(state.pos);
  if (nextChar === charCodes.lowercaseN) {
    ++state.pos;
    finishToken(TokenType.bigint);
  } else {
    finishToken(TokenType.num);
  }
}

// Read an integer, octal integer, or floating-point number.
function readNumber(startsWithDot) {
  let isBigInt = false;
  let isDecimal = false;

  if (!startsWithDot) {
    readInt();
  }

  let nextChar = input.charCodeAt(state.pos);
  if (nextChar === charCodes.dot) {
    ++state.pos;
    readInt();
    nextChar = input.charCodeAt(state.pos);
  }

  if (nextChar === charCodes.uppercaseE || nextChar === charCodes.lowercaseE) {
    nextChar = input.charCodeAt(++state.pos);
    if (nextChar === charCodes.plusSign || nextChar === charCodes.dash) {
      ++state.pos;
    }
    readInt();
    nextChar = input.charCodeAt(state.pos);
  }

  if (nextChar === charCodes.lowercaseN) {
    ++state.pos;
    isBigInt = true;
  } else if (nextChar === charCodes.lowercaseM) {
    ++state.pos;
    isDecimal = true;
  }

  if (isBigInt) {
    finishToken(TokenType.bigint);
    return;
  }

  if (isDecimal) {
    finishToken(TokenType.decimal);
    return;
  }

  finishToken(TokenType.num);
}

function readString(quote) {
  state.pos++;
  for (;;) {
    if (state.pos >= input.length) {
      unexpected("Unterminated string constant");
      return;
    }
    const ch = input.charCodeAt(state.pos);
    if (ch === charCodes.backslash) {
      state.pos++;
    } else if (ch === quote) {
      break;
    }
    state.pos++;
  }
  state.pos++;
  finishToken(TokenType.string);
}

// Reads template string tokens.
function readTmplToken() {
  for (;;) {
    if (state.pos >= input.length) {
      unexpected("Unterminated template");
      return;
    }
    const ch = input.charCodeAt(state.pos);
    if (
      ch === charCodes.graveAccent ||
      (ch === charCodes.dollarSign && input.charCodeAt(state.pos + 1) === charCodes.leftCurlyBrace)
    ) {
      if (state.pos === state.start && match(TokenType.template)) {
        if (ch === charCodes.dollarSign) {
          state.pos += 2;
          finishToken(TokenType.dollarBraceL);
          return;
        } else {
          ++state.pos;
          finishToken(TokenType.backQuote);
          return;
        }
      }
      finishToken(TokenType.template);
      return;
    }
    if (ch === charCodes.backslash) {
      state.pos++;
    }
    state.pos++;
  }
}

// Skip to the end of the current word. Note that this is the same as the snippet at the end of
// readWord, but calling skipWord from readWord seems to slightly hurt performance from some rough
// measurements.
function skipWord() {
  while (state.pos < input.length) {
    const ch = input.charCodeAt(state.pos);
    if (IS_IDENTIFIER_CHAR[ch]) {
      state.pos++;
    } else if (ch === charCodes.backslash) {
      // \u
      state.pos += 2;
      if (input.charCodeAt(state.pos) === charCodes.leftCurlyBrace) {
        while (
          state.pos < input.length &&
          input.charCodeAt(state.pos) !== charCodes.rightCurlyBrace
        ) {
          state.pos++;
        }
        state.pos++;
      }
    } else {
      break;
    }
  }
}

;// ./node_modules/sucrase/dist/esm/util/getImportExportSpecifierInfo.js



 













/**
 * Determine information about this named import or named export specifier.
 *
 * This syntax is the `a` from statements like these:
 * import {A} from "./foo";
 * export {A};
 * export {A} from "./foo";
 *
 * As it turns out, we can exactly characterize the syntax meaning by simply
 * counting the number of tokens, which can be from 1 to 4:
 * {A}
 * {type A}
 * {A as B}
 * {type A as B}
 *
 * In the type case, we never actually need the names in practice, so don't get
 * them.
 *
 * TODO: There's some redundancy with the type detection here and the isType
 * flag that's already present on tokens in TS mode. This function could
 * potentially be simplified and/or pushed to the call sites to avoid the object
 * allocation.
 */
function getImportExportSpecifierInfo(
  tokens,
  index = tokens.currentIndex(),
) {
  let endIndex = index + 1;
  if (isSpecifierEnd(tokens, endIndex)) {
    // import {A}
    const name = tokens.identifierNameAtIndex(index);
    return {
      isType: false,
      leftName: name,
      rightName: name,
      endIndex,
    };
  }
  endIndex++;
  if (isSpecifierEnd(tokens, endIndex)) {
    // import {type A}
    return {
      isType: true,
      leftName: null,
      rightName: null,
      endIndex,
    };
  }
  endIndex++;
  if (isSpecifierEnd(tokens, endIndex)) {
    // import {A as B}
    return {
      isType: false,
      leftName: tokens.identifierNameAtIndex(index),
      rightName: tokens.identifierNameAtIndex(index + 2),
      endIndex,
    };
  }
  endIndex++;
  if (isSpecifierEnd(tokens, endIndex)) {
    // import {type A as B}
    return {
      isType: true,
      leftName: null,
      rightName: null,
      endIndex,
    };
  }
  throw new Error(`Unexpected import/export specifier at ${index}`);
}

function isSpecifierEnd(tokens, index) {
  const token = tokens.tokens[index];
  return token.type === TokenType.braceR || token.type === TokenType.comma;
}

;// ./node_modules/sucrase/dist/esm/parser/plugins/jsx/xhtml.js
// Use a Map rather than object to avoid unexpected __proto__ access.
/* harmony default export */ const xhtml = (new Map([
  ["quot", "\u0022"],
  ["amp", "&"],
  ["apos", "\u0027"],
  ["lt", "<"],
  ["gt", ">"],
  ["nbsp", "\u00A0"],
  ["iexcl", "\u00A1"],
  ["cent", "\u00A2"],
  ["pound", "\u00A3"],
  ["curren", "\u00A4"],
  ["yen", "\u00A5"],
  ["brvbar", "\u00A6"],
  ["sect", "\u00A7"],
  ["uml", "\u00A8"],
  ["copy", "\u00A9"],
  ["ordf", "\u00AA"],
  ["laquo", "\u00AB"],
  ["not", "\u00AC"],
  ["shy", "\u00AD"],
  ["reg", "\u00AE"],
  ["macr", "\u00AF"],
  ["deg", "\u00B0"],
  ["plusmn", "\u00B1"],
  ["sup2", "\u00B2"],
  ["sup3", "\u00B3"],
  ["acute", "\u00B4"],
  ["micro", "\u00B5"],
  ["para", "\u00B6"],
  ["middot", "\u00B7"],
  ["cedil", "\u00B8"],
  ["sup1", "\u00B9"],
  ["ordm", "\u00BA"],
  ["raquo", "\u00BB"],
  ["frac14", "\u00BC"],
  ["frac12", "\u00BD"],
  ["frac34", "\u00BE"],
  ["iquest", "\u00BF"],
  ["Agrave", "\u00C0"],
  ["Aacute", "\u00C1"],
  ["Acirc", "\u00C2"],
  ["Atilde", "\u00C3"],
  ["Auml", "\u00C4"],
  ["Aring", "\u00C5"],
  ["AElig", "\u00C6"],
  ["Ccedil", "\u00C7"],
  ["Egrave", "\u00C8"],
  ["Eacute", "\u00C9"],
  ["Ecirc", "\u00CA"],
  ["Euml", "\u00CB"],
  ["Igrave", "\u00CC"],
  ["Iacute", "\u00CD"],
  ["Icirc", "\u00CE"],
  ["Iuml", "\u00CF"],
  ["ETH", "\u00D0"],
  ["Ntilde", "\u00D1"],
  ["Ograve", "\u00D2"],
  ["Oacute", "\u00D3"],
  ["Ocirc", "\u00D4"],
  ["Otilde", "\u00D5"],
  ["Ouml", "\u00D6"],
  ["times", "\u00D7"],
  ["Oslash", "\u00D8"],
  ["Ugrave", "\u00D9"],
  ["Uacute", "\u00DA"],
  ["Ucirc", "\u00DB"],
  ["Uuml", "\u00DC"],
  ["Yacute", "\u00DD"],
  ["THORN", "\u00DE"],
  ["szlig", "\u00DF"],
  ["agrave", "\u00E0"],
  ["aacute", "\u00E1"],
  ["acirc", "\u00E2"],
  ["atilde", "\u00E3"],
  ["auml", "\u00E4"],
  ["aring", "\u00E5"],
  ["aelig", "\u00E6"],
  ["ccedil", "\u00E7"],
  ["egrave", "\u00E8"],
  ["eacute", "\u00E9"],
  ["ecirc", "\u00EA"],
  ["euml", "\u00EB"],
  ["igrave", "\u00EC"],
  ["iacute", "\u00ED"],
  ["icirc", "\u00EE"],
  ["iuml", "\u00EF"],
  ["eth", "\u00F0"],
  ["ntilde", "\u00F1"],
  ["ograve", "\u00F2"],
  ["oacute", "\u00F3"],
  ["ocirc", "\u00F4"],
  ["otilde", "\u00F5"],
  ["ouml", "\u00F6"],
  ["divide", "\u00F7"],
  ["oslash", "\u00F8"],
  ["ugrave", "\u00F9"],
  ["uacute", "\u00FA"],
  ["ucirc", "\u00FB"],
  ["uuml", "\u00FC"],
  ["yacute", "\u00FD"],
  ["thorn", "\u00FE"],
  ["yuml", "\u00FF"],
  ["OElig", "\u0152"],
  ["oelig", "\u0153"],
  ["Scaron", "\u0160"],
  ["scaron", "\u0161"],
  ["Yuml", "\u0178"],
  ["fnof", "\u0192"],
  ["circ", "\u02C6"],
  ["tilde", "\u02DC"],
  ["Alpha", "\u0391"],
  ["Beta", "\u0392"],
  ["Gamma", "\u0393"],
  ["Delta", "\u0394"],
  ["Epsilon", "\u0395"],
  ["Zeta", "\u0396"],
  ["Eta", "\u0397"],
  ["Theta", "\u0398"],
  ["Iota", "\u0399"],
  ["Kappa", "\u039A"],
  ["Lambda", "\u039B"],
  ["Mu", "\u039C"],
  ["Nu", "\u039D"],
  ["Xi", "\u039E"],
  ["Omicron", "\u039F"],
  ["Pi", "\u03A0"],
  ["Rho", "\u03A1"],
  ["Sigma", "\u03A3"],
  ["Tau", "\u03A4"],
  ["Upsilon", "\u03A5"],
  ["Phi", "\u03A6"],
  ["Chi", "\u03A7"],
  ["Psi", "\u03A8"],
  ["Omega", "\u03A9"],
  ["alpha", "\u03B1"],
  ["beta", "\u03B2"],
  ["gamma", "\u03B3"],
  ["delta", "\u03B4"],
  ["epsilon", "\u03B5"],
  ["zeta", "\u03B6"],
  ["eta", "\u03B7"],
  ["theta", "\u03B8"],
  ["iota", "\u03B9"],
  ["kappa", "\u03BA"],
  ["lambda", "\u03BB"],
  ["mu", "\u03BC"],
  ["nu", "\u03BD"],
  ["xi", "\u03BE"],
  ["omicron", "\u03BF"],
  ["pi", "\u03C0"],
  ["rho", "\u03C1"],
  ["sigmaf", "\u03C2"],
  ["sigma", "\u03C3"],
  ["tau", "\u03C4"],
  ["upsilon", "\u03C5"],
  ["phi", "\u03C6"],
  ["chi", "\u03C7"],
  ["psi", "\u03C8"],
  ["omega", "\u03C9"],
  ["thetasym", "\u03D1"],
  ["upsih", "\u03D2"],
  ["piv", "\u03D6"],
  ["ensp", "\u2002"],
  ["emsp", "\u2003"],
  ["thinsp", "\u2009"],
  ["zwnj", "\u200C"],
  ["zwj", "\u200D"],
  ["lrm", "\u200E"],
  ["rlm", "\u200F"],
  ["ndash", "\u2013"],
  ["mdash", "\u2014"],
  ["lsquo", "\u2018"],
  ["rsquo", "\u2019"],
  ["sbquo", "\u201A"],
  ["ldquo", "\u201C"],
  ["rdquo", "\u201D"],
  ["bdquo", "\u201E"],
  ["dagger", "\u2020"],
  ["Dagger", "\u2021"],
  ["bull", "\u2022"],
  ["hellip", "\u2026"],
  ["permil", "\u2030"],
  ["prime", "\u2032"],
  ["Prime", "\u2033"],
  ["lsaquo", "\u2039"],
  ["rsaquo", "\u203A"],
  ["oline", "\u203E"],
  ["frasl", "\u2044"],
  ["euro", "\u20AC"],
  ["image", "\u2111"],
  ["weierp", "\u2118"],
  ["real", "\u211C"],
  ["trade", "\u2122"],
  ["alefsym", "\u2135"],
  ["larr", "\u2190"],
  ["uarr", "\u2191"],
  ["rarr", "\u2192"],
  ["darr", "\u2193"],
  ["harr", "\u2194"],
  ["crarr", "\u21B5"],
  ["lArr", "\u21D0"],
  ["uArr", "\u21D1"],
  ["rArr", "\u21D2"],
  ["dArr", "\u21D3"],
  ["hArr", "\u21D4"],
  ["forall", "\u2200"],
  ["part", "\u2202"],
  ["exist", "\u2203"],
  ["empty", "\u2205"],
  ["nabla", "\u2207"],
  ["isin", "\u2208"],
  ["notin", "\u2209"],
  ["ni", "\u220B"],
  ["prod", "\u220F"],
  ["sum", "\u2211"],
  ["minus", "\u2212"],
  ["lowast", "\u2217"],
  ["radic", "\u221A"],
  ["prop", "\u221D"],
  ["infin", "\u221E"],
  ["ang", "\u2220"],
  ["and", "\u2227"],
  ["or", "\u2228"],
  ["cap", "\u2229"],
  ["cup", "\u222A"],
  ["int", "\u222B"],
  ["there4", "\u2234"],
  ["sim", "\u223C"],
  ["cong", "\u2245"],
  ["asymp", "\u2248"],
  ["ne", "\u2260"],
  ["equiv", "\u2261"],
  ["le", "\u2264"],
  ["ge", "\u2265"],
  ["sub", "\u2282"],
  ["sup", "\u2283"],
  ["nsub", "\u2284"],
  ["sube", "\u2286"],
  ["supe", "\u2287"],
  ["oplus", "\u2295"],
  ["otimes", "\u2297"],
  ["perp", "\u22A5"],
  ["sdot", "\u22C5"],
  ["lceil", "\u2308"],
  ["rceil", "\u2309"],
  ["lfloor", "\u230A"],
  ["rfloor", "\u230B"],
  ["lang", "\u2329"],
  ["rang", "\u232A"],
  ["loz", "\u25CA"],
  ["spades", "\u2660"],
  ["clubs", "\u2663"],
  ["hearts", "\u2665"],
  ["diams", "\u2666"],
]));

;// ./node_modules/sucrase/dist/esm/util/getJSXPragmaInfo.js









function getJSXPragmaInfo(options) {
  const [base, suffix] = splitPragma(options.jsxPragma || "React.createElement");
  const [fragmentBase, fragmentSuffix] = splitPragma(options.jsxFragmentPragma || "React.Fragment");
  return {base, suffix, fragmentBase, fragmentSuffix};
}

function splitPragma(pragma) {
  let dotIndex = pragma.indexOf(".");
  if (dotIndex === -1) {
    dotIndex = pragma.length;
  }
  return [pragma.slice(0, dotIndex), pragma.slice(dotIndex)];
}

;// ./node_modules/sucrase/dist/esm/transformers/Transformer.js
class Transformer {
  // Return true if anything was processed, false otherwise.
  

  getPrefixCode() {
    return "";
  }

  getHoistedCode() {
    return "";
  }

  getSuffixCode() {
    return "";
  }
}

;// ./node_modules/sucrase/dist/esm/transformers/JSXTransformer.js












class JSXTransformer extends Transformer {
  
  
  

  // State for calculating the line number of each JSX tag in development.
  __init() {this.lastLineNumber = 1}
  __init2() {this.lastIndex = 0}

  // In development, variable name holding the name of the current file.
  __init3() {this.filenameVarName = null}
  // Mapping of claimed names for imports in the automatic transform, e,g.
  // {jsx: "_jsx"}. This determines which imports to generate in the prefix.
  __init4() {this.esmAutomaticImportNameResolutions = {}}
  // When automatically adding imports in CJS mode, we store the variable name
  // holding the imported CJS module so we can require it in the prefix.
  __init5() {this.cjsAutomaticModuleNameResolutions = {}}

  constructor(
     rootTransformer,
     tokens,
     importProcessor,
     nameManager,
     options,
  ) {
    super();this.rootTransformer = rootTransformer;this.tokens = tokens;this.importProcessor = importProcessor;this.nameManager = nameManager;this.options = options;JSXTransformer.prototype.__init.call(this);JSXTransformer.prototype.__init2.call(this);JSXTransformer.prototype.__init3.call(this);JSXTransformer.prototype.__init4.call(this);JSXTransformer.prototype.__init5.call(this);;
    this.jsxPragmaInfo = getJSXPragmaInfo(options);
    this.isAutomaticRuntime = options.jsxRuntime === "automatic";
    this.jsxImportSource = options.jsxImportSource || "react";
  }

  process() {
    if (this.tokens.matches1(TokenType.jsxTagStart)) {
      this.processJSXTag();
      return true;
    }
    return false;
  }

  getPrefixCode() {
    let prefix = "";
    if (this.filenameVarName) {
      prefix += `const ${this.filenameVarName} = ${JSON.stringify(this.options.filePath || "")};`;
    }
    if (this.isAutomaticRuntime) {
      if (this.importProcessor) {
        // CJS mode: emit require statements for all modules that were referenced.
        for (const [path, resolvedName] of Object.entries(this.cjsAutomaticModuleNameResolutions)) {
          prefix += `var ${resolvedName} = require("${path}");`;
        }
      } else {
        // ESM mode: consolidate and emit import statements for referenced names.
        const {createElement: createElementResolution, ...otherResolutions} =
          this.esmAutomaticImportNameResolutions;
        if (createElementResolution) {
          prefix += `import {createElement as ${createElementResolution}} from "${this.jsxImportSource}";`;
        }
        const importSpecifiers = Object.entries(otherResolutions)
          .map(([name, resolvedName]) => `${name} as ${resolvedName}`)
          .join(", ");
        if (importSpecifiers) {
          const importPath =
            this.jsxImportSource + (this.options.production ? "/jsx-runtime" : "/jsx-dev-runtime");
          prefix += `import {${importSpecifiers}} from "${importPath}";`;
        }
      }
    }
    return prefix;
  }

  processJSXTag() {
    const {jsxRole, start} = this.tokens.currentToken();
    // Calculate line number information at the very start (if in development
    // mode) so that the information is guaranteed to be queried in token order.
    const elementLocationCode = this.options.production ? null : this.getElementLocationCode(start);
    if (this.isAutomaticRuntime && jsxRole !== JSXRole.KeyAfterPropSpread) {
      this.transformTagToJSXFunc(elementLocationCode, jsxRole);
    } else {
      this.transformTagToCreateElement(elementLocationCode);
    }
  }

  getElementLocationCode(firstTokenStart) {
    const lineNumber = this.getLineNumberForIndex(firstTokenStart);
    return `lineNumber: ${lineNumber}`;
  }

  /**
   * Get the line number for this source position. This is calculated lazily and
   * must be called in increasing order by index.
   */
  getLineNumberForIndex(index) {
    const code = this.tokens.code;
    while (this.lastIndex < index && this.lastIndex < code.length) {
      if (code[this.lastIndex] === "\n") {
        this.lastLineNumber++;
      }
      this.lastIndex++;
    }
    return this.lastLineNumber;
  }

  /**
   * Convert the current JSX element to a call to jsx, jsxs, or jsxDEV. This is
   * the primary transformation for the automatic transform.
   *
   * Example:
   * <div a={1} key={2}>Hello{x}</div>
   * becomes
   * jsxs('div', {a: 1, children: ["Hello", x]}, 2)
   */
  transformTagToJSXFunc(elementLocationCode, jsxRole) {
    const isStatic = jsxRole === JSXRole.StaticChildren;
    // First tag is always jsxTagStart.
    this.tokens.replaceToken(this.getJSXFuncInvocationCode(isStatic));

    let keyCode = null;
    if (this.tokens.matches1(TokenType.jsxTagEnd)) {
      // Fragment syntax.
      this.tokens.replaceToken(`${this.getFragmentCode()}, {`);
      this.processAutomaticChildrenAndEndProps(jsxRole);
    } else {
      // Normal open tag or self-closing tag.
      this.processTagIntro();
      this.tokens.appendCode(", {");
      keyCode = this.processProps(true);

      if (this.tokens.matches2(TokenType.slash, TokenType.jsxTagEnd)) {
        // Self-closing tag, no children to add, so close the props.
        this.tokens.appendCode("}");
      } else if (this.tokens.matches1(TokenType.jsxTagEnd)) {
        // Tag with children.
        this.tokens.removeToken();
        this.processAutomaticChildrenAndEndProps(jsxRole);
      } else {
        throw new Error("Expected either /> or > at the end of the tag.");
      }
      // If a key was present, move it to its own arg. Note that moving code
      // like this will cause line numbers to get out of sync within the JSX
      // element if the key expression has a newline in it. This is unfortunate,
      // but hopefully should be rare.
      if (keyCode) {
        this.tokens.appendCode(`, ${keyCode}`);
      }
    }
    if (!this.options.production) {
      // If the key wasn't already added, add it now so we can correctly set
      // positional args for jsxDEV.
      if (keyCode === null) {
        this.tokens.appendCode(", void 0");
      }
      this.tokens.appendCode(`, ${isStatic}, ${this.getDevSource(elementLocationCode)}, this`);
    }
    // We're at the close-tag or the end of a self-closing tag, so remove
    // everything else and close the function call.
    this.tokens.removeInitialToken();
    while (!this.tokens.matches1(TokenType.jsxTagEnd)) {
      this.tokens.removeToken();
    }
    this.tokens.replaceToken(")");
  }

  /**
   * Convert the current JSX element to a createElement call. In the classic
   * runtime, this is the only case. In the automatic runtime, this is called
   * as a fallback in some situations.
   *
   * Example:
   * <div a={1} key={2}>Hello{x}</div>
   * becomes
   * React.createElement('div', {a: 1, key: 2}, "Hello", x)
   */
  transformTagToCreateElement(elementLocationCode) {
    // First tag is always jsxTagStart.
    this.tokens.replaceToken(this.getCreateElementInvocationCode());

    if (this.tokens.matches1(TokenType.jsxTagEnd)) {
      // Fragment syntax.
      this.tokens.replaceToken(`${this.getFragmentCode()}, null`);
      this.processChildren(true);
    } else {
      // Normal open tag or self-closing tag.
      this.processTagIntro();
      this.processPropsObjectWithDevInfo(elementLocationCode);

      if (this.tokens.matches2(TokenType.slash, TokenType.jsxTagEnd)) {
        // Self-closing tag; no children to process.
      } else if (this.tokens.matches1(TokenType.jsxTagEnd)) {
        // Tag with children and a close-tag; process the children as args.
        this.tokens.removeToken();
        this.processChildren(true);
      } else {
        throw new Error("Expected either /> or > at the end of the tag.");
      }
    }
    // We're at the close-tag or the end of a self-closing tag, so remove
    // everything else and close the function call.
    this.tokens.removeInitialToken();
    while (!this.tokens.matches1(TokenType.jsxTagEnd)) {
      this.tokens.removeToken();
    }
    this.tokens.replaceToken(")");
  }

  /**
   * Get the code for the relevant function for this context: jsx, jsxs,
   * or jsxDEV. The following open-paren is included as well.
   *
   * These functions are only used for the automatic runtime, so they are always
   * auto-imported, but the auto-import will be either CJS or ESM based on the
   * target module format.
   */
  getJSXFuncInvocationCode(isStatic) {
    if (this.options.production) {
      if (isStatic) {
        return this.claimAutoImportedFuncInvocation("jsxs", "/jsx-runtime");
      } else {
        return this.claimAutoImportedFuncInvocation("jsx", "/jsx-runtime");
      }
    } else {
      return this.claimAutoImportedFuncInvocation("jsxDEV", "/jsx-dev-runtime");
    }
  }

  /**
   * Return the code to use for the createElement function, e.g.
   * `React.createElement`, including the following open-paren.
   *
   * This is the main function to use for the classic runtime. For the
   * automatic runtime, this function is used as a fallback function to
   * preserve behavior when there is a prop spread followed by an explicit
   * key. In that automatic runtime case, the function should be automatically
   * imported.
   */
  getCreateElementInvocationCode() {
    if (this.isAutomaticRuntime) {
      return this.claimAutoImportedFuncInvocation("createElement", "");
    } else {
      const {jsxPragmaInfo} = this;
      const resolvedPragmaBaseName = this.importProcessor
        ? this.importProcessor.getIdentifierReplacement(jsxPragmaInfo.base) || jsxPragmaInfo.base
        : jsxPragmaInfo.base;
      return `${resolvedPragmaBaseName}${jsxPragmaInfo.suffix}(`;
    }
  }

  /**
   * Return the code to use as the component when compiling a shorthand
   * fragment, e.g. `React.Fragment`.
   *
   * This may be called from either the classic or automatic runtime, and
   * the value should be auto-imported for the automatic runtime.
   */
  getFragmentCode() {
    if (this.isAutomaticRuntime) {
      return this.claimAutoImportedName(
        "Fragment",
        this.options.production ? "/jsx-runtime" : "/jsx-dev-runtime",
      );
    } else {
      const {jsxPragmaInfo} = this;
      const resolvedFragmentPragmaBaseName = this.importProcessor
        ? this.importProcessor.getIdentifierReplacement(jsxPragmaInfo.fragmentBase) ||
          jsxPragmaInfo.fragmentBase
        : jsxPragmaInfo.fragmentBase;
      return resolvedFragmentPragmaBaseName + jsxPragmaInfo.fragmentSuffix;
    }
  }

  /**
   * Return code that invokes the given function.
   *
   * When the imports transform is enabled, use the CJSImportTransformer
   * strategy of using `.call(void 0, ...` to avoid passing a `this` value in a
   * situation that would otherwise look like a method call.
   */
  claimAutoImportedFuncInvocation(funcName, importPathSuffix) {
    const funcCode = this.claimAutoImportedName(funcName, importPathSuffix);
    if (this.importProcessor) {
      return `${funcCode}.call(void 0, `;
    } else {
      return `${funcCode}(`;
    }
  }

  claimAutoImportedName(funcName, importPathSuffix) {
    if (this.importProcessor) {
      // CJS mode: claim a name for the module and mark it for import.
      const path = this.jsxImportSource + importPathSuffix;
      if (!this.cjsAutomaticModuleNameResolutions[path]) {
        this.cjsAutomaticModuleNameResolutions[path] =
          this.importProcessor.getFreeIdentifierForPath(path);
      }
      return `${this.cjsAutomaticModuleNameResolutions[path]}.${funcName}`;
    } else {
      // ESM mode: claim a name for this function and add it to the names that
      // should be auto-imported when the prefix is generated.
      if (!this.esmAutomaticImportNameResolutions[funcName]) {
        this.esmAutomaticImportNameResolutions[funcName] = this.nameManager.claimFreeName(
          `_${funcName}`,
        );
      }
      return this.esmAutomaticImportNameResolutions[funcName];
    }
  }

  /**
   * Process the first part of a tag, before any props.
   */
  processTagIntro() {
    // Walk forward until we see one of these patterns:
    // jsxName to start the first prop, preceded by another jsxName to end the tag name.
    // jsxName to start the first prop, preceded by greaterThan to end the type argument.
    // [open brace] to start the first prop.
    // [jsxTagEnd] to end the open-tag.
    // [slash, jsxTagEnd] to end the self-closing tag.
    let introEnd = this.tokens.currentIndex() + 1;
    while (
      this.tokens.tokens[introEnd].isType ||
      (!this.tokens.matches2AtIndex(introEnd - 1, TokenType.jsxName, TokenType.jsxName) &&
        !this.tokens.matches2AtIndex(introEnd - 1, TokenType.greaterThan, TokenType.jsxName) &&
        !this.tokens.matches1AtIndex(introEnd, TokenType.braceL) &&
        !this.tokens.matches1AtIndex(introEnd, TokenType.jsxTagEnd) &&
        !this.tokens.matches2AtIndex(introEnd, TokenType.slash, TokenType.jsxTagEnd))
    ) {
      introEnd++;
    }
    if (introEnd === this.tokens.currentIndex() + 1) {
      const tagName = this.tokens.identifierName();
      if (startsWithLowerCase(tagName)) {
        this.tokens.replaceToken(`'${tagName}'`);
      }
    }
    while (this.tokens.currentIndex() < introEnd) {
      this.rootTransformer.processToken();
    }
  }

  /**
   * Starting at the beginning of the props, add the props argument to
   * React.createElement, including the comma before it.
   */
  processPropsObjectWithDevInfo(elementLocationCode) {
    const devProps = this.options.production
      ? ""
      : `__self: this, __source: ${this.getDevSource(elementLocationCode)}`;
    if (!this.tokens.matches1(TokenType.jsxName) && !this.tokens.matches1(TokenType.braceL)) {
      if (devProps) {
        this.tokens.appendCode(`, {${devProps}}`);
      } else {
        this.tokens.appendCode(`, null`);
      }
      return;
    }
    this.tokens.appendCode(`, {`);
    this.processProps(false);
    if (devProps) {
      this.tokens.appendCode(` ${devProps}}`);
    } else {
      this.tokens.appendCode("}");
    }
  }

  /**
   * Transform the core part of the props, assuming that a { has already been
   * inserted before us and that a } will be inserted after us.
   *
   * If extractKeyCode is true (i.e. when using any jsx... function), any prop
   * named "key" has its code captured and returned rather than being emitted to
   * the output code. This shifts line numbers, and emitting the code later will
   * correct line numbers again. If no key is found or if extractKeyCode is
   * false, this function returns null.
   */
  processProps(extractKeyCode) {
    let keyCode = null;
    while (true) {
      if (this.tokens.matches2(TokenType.jsxName, TokenType.eq)) {
        // This is a regular key={value} or key="value" prop.
        const propName = this.tokens.identifierName();
        if (extractKeyCode && propName === "key") {
          if (keyCode !== null) {
            // The props list has multiple keys. Different implementations are
            // inconsistent about what to do here: as of this writing, Babel and
            // swc keep the *last* key and completely remove the rest, while
            // TypeScript uses the *first* key and leaves the others as regular
            // props. The React team collaborated with Babel on the
            // implementation of this behavior, so presumably the Babel behavior
            // is the one to use.
            // Since we won't ever be emitting the previous key code, we need to
            // at least emit its newlines here so that the line numbers match up
            // in the long run.
            this.tokens.appendCode(keyCode.replace(/[^\n]/g, ""));
          }
          // key
          this.tokens.removeToken();
          // =
          this.tokens.removeToken();
          const snapshot = this.tokens.snapshot();
          this.processPropValue();
          keyCode = this.tokens.dangerouslyGetAndRemoveCodeSinceSnapshot(snapshot);
          // Don't add a comma
          continue;
        } else {
          this.processPropName(propName);
          this.tokens.replaceToken(": ");
          this.processPropValue();
        }
      } else if (this.tokens.matches1(TokenType.jsxName)) {
        // This is a shorthand prop like <input disabled />.
        const propName = this.tokens.identifierName();
        this.processPropName(propName);
        this.tokens.appendCode(": true");
      } else if (this.tokens.matches1(TokenType.braceL)) {
        // This is prop spread, like <div {...getProps()}>, which we can pass
        // through fairly directly as an object spread.
        this.tokens.replaceToken("");
        this.rootTransformer.processBalancedCode();
        this.tokens.replaceToken("");
      } else {
        break;
      }
      this.tokens.appendCode(",");
    }
    return keyCode;
  }

  processPropName(propName) {
    if (propName.includes("-")) {
      this.tokens.replaceToken(`'${propName}'`);
    } else {
      this.tokens.copyToken();
    }
  }

  processPropValue() {
    if (this.tokens.matches1(TokenType.braceL)) {
      this.tokens.replaceToken("");
      this.rootTransformer.processBalancedCode();
      this.tokens.replaceToken("");
    } else if (this.tokens.matches1(TokenType.jsxTagStart)) {
      this.processJSXTag();
    } else {
      this.processStringPropValue();
    }
  }

  processStringPropValue() {
    const token = this.tokens.currentToken();
    const valueCode = this.tokens.code.slice(token.start + 1, token.end - 1);
    const replacementCode = formatJSXTextReplacement(valueCode);
    const literalCode = formatJSXStringValueLiteral(valueCode);
    this.tokens.replaceToken(literalCode + replacementCode);
  }

  /**
   * Starting in the middle of the props object literal, produce an additional
   * prop for the children and close the object literal.
   */
  processAutomaticChildrenAndEndProps(jsxRole) {
    if (jsxRole === JSXRole.StaticChildren) {
      this.tokens.appendCode(" children: [");
      this.processChildren(false);
      this.tokens.appendCode("]}");
    } else {
      // The parser information tells us whether we will see a real child or if
      // all remaining children (if any) will resolve to empty. If there are no
      // non-empty children, don't emit a children prop at all, but still
      // process children so that we properly transform the code into nothing.
      if (jsxRole === JSXRole.OneChild) {
        this.tokens.appendCode(" children: ");
      }
      this.processChildren(false);
      this.tokens.appendCode("}");
    }
  }

  /**
   * Transform children into a comma-separated list, which will be either
   * arguments to createElement or array elements of a children prop.
   */
  processChildren(needsInitialComma) {
    let needsComma = needsInitialComma;
    while (true) {
      if (this.tokens.matches2(TokenType.jsxTagStart, TokenType.slash)) {
        // Closing tag, so no more children.
        return;
      }
      let didEmitElement = false;
      if (this.tokens.matches1(TokenType.braceL)) {
        if (this.tokens.matches2(TokenType.braceL, TokenType.braceR)) {
          // Empty interpolations and comment-only interpolations are allowed
          // and don't create an extra child arg.
          this.tokens.replaceToken("");
          this.tokens.replaceToken("");
        } else {
          // Interpolated expression.
          this.tokens.replaceToken(needsComma ? ", " : "");
          this.rootTransformer.processBalancedCode();
          this.tokens.replaceToken("");
          didEmitElement = true;
        }
      } else if (this.tokens.matches1(TokenType.jsxTagStart)) {
        // Child JSX element
        this.tokens.appendCode(needsComma ? ", " : "");
        this.processJSXTag();
        didEmitElement = true;
      } else if (this.tokens.matches1(TokenType.jsxText) || this.tokens.matches1(TokenType.jsxEmptyText)) {
        didEmitElement = this.processChildTextElement(needsComma);
      } else {
        throw new Error("Unexpected token when processing JSX children.");
      }
      if (didEmitElement) {
        needsComma = true;
      }
    }
  }

  /**
   * Turn a JSX text element into a string literal, or nothing at all if the JSX
   * text resolves to the empty string.
   *
   * Returns true if a string literal is emitted, false otherwise.
   */
  processChildTextElement(needsComma) {
    const token = this.tokens.currentToken();
    const valueCode = this.tokens.code.slice(token.start, token.end);
    const replacementCode = formatJSXTextReplacement(valueCode);
    const literalCode = formatJSXTextLiteral(valueCode);
    if (literalCode === '""') {
      this.tokens.replaceToken(replacementCode);
      return false;
    } else {
      this.tokens.replaceToken(`${needsComma ? ", " : ""}${literalCode}${replacementCode}`);
      return true;
    }
  }

  getDevSource(elementLocationCode) {
    return `{fileName: ${this.getFilenameVarName()}, ${elementLocationCode}}`;
  }

  getFilenameVarName() {
    if (!this.filenameVarName) {
      this.filenameVarName = this.nameManager.claimFreeName("_jsxFileName");
    }
    return this.filenameVarName;
  }
}

/**
 * Spec for identifiers: https://tc39.github.io/ecma262/#prod-IdentifierStart.
 *
 * Really only treat anything starting with a-z as tag names.  `_`, `$`, `é`
 * should be treated as component names
 */
function startsWithLowerCase(s) {
  const firstChar = s.charCodeAt(0);
  return firstChar >= charCodes.lowercaseA && firstChar <= charCodes.lowercaseZ;
}

/**
 * Turn the given jsxText string into a JS string literal. Leading and trailing
 * whitespace on lines is removed, except immediately after the open-tag and
 * before the close-tag. Empty lines are completely removed, and spaces are
 * added between lines after that.
 *
 * We use JSON.stringify to introduce escape characters as necessary, and trim
 * the start and end of each line and remove blank lines.
 */
function formatJSXTextLiteral(text) {
  let result = "";
  let whitespace = "";

  let isInInitialLineWhitespace = false;
  let seenNonWhitespace = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (c === " " || c === "\t" || c === "\r") {
      if (!isInInitialLineWhitespace) {
        whitespace += c;
      }
    } else if (c === "\n") {
      whitespace = "";
      isInInitialLineWhitespace = true;
    } else {
      if (seenNonWhitespace && isInInitialLineWhitespace) {
        result += " ";
      }
      result += whitespace;
      whitespace = "";
      if (c === "&") {
        const {entity, newI} = processEntity(text, i + 1);
        i = newI - 1;
        result += entity;
      } else {
        result += c;
      }
      seenNonWhitespace = true;
      isInInitialLineWhitespace = false;
    }
  }
  if (!isInInitialLineWhitespace) {
    result += whitespace;
  }
  return JSON.stringify(result);
}

/**
 * Produce the code that should be printed after the JSX text string literal,
 * with most content removed, but all newlines preserved and all spacing at the
 * end preserved.
 */
function formatJSXTextReplacement(text) {
  let numNewlines = 0;
  let numSpaces = 0;
  for (const c of text) {
    if (c === "\n") {
      numNewlines++;
      numSpaces = 0;
    } else if (c === " ") {
      numSpaces++;
    }
  }
  return "\n".repeat(numNewlines) + " ".repeat(numSpaces);
}

/**
 * Format a string in the value position of a JSX prop.
 *
 * Use the same implementation as convertAttribute from
 * babel-helper-builder-react-jsx.
 */
function formatJSXStringValueLiteral(text) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (c === "\n") {
      if (/\s/.test(text[i + 1])) {
        result += " ";
        while (i < text.length && /\s/.test(text[i + 1])) {
          i++;
        }
      } else {
        result += "\n";
      }
    } else if (c === "&") {
      const {entity, newI} = processEntity(text, i + 1);
      result += entity;
      i = newI - 1;
    } else {
      result += c;
    }
  }
  return JSON.stringify(result);
}

/**
 * Starting at a &, see if there's an HTML entity (specified by name, decimal
 * char code, or hex char code) and return it if so.
 *
 * Modified from jsxReadString in babel-parser.
 */
function processEntity(text, indexAfterAmpersand) {
  let str = "";
  let count = 0;
  let entity;
  let i = indexAfterAmpersand;

  if (text[i] === "#") {
    let radix = 10;
    i++;
    let numStart;
    if (text[i] === "x") {
      radix = 16;
      i++;
      numStart = i;
      while (i < text.length && isHexDigit(text.charCodeAt(i))) {
        i++;
      }
    } else {
      numStart = i;
      while (i < text.length && isDecimalDigit(text.charCodeAt(i))) {
        i++;
      }
    }
    if (text[i] === ";") {
      const numStr = text.slice(numStart, i);
      if (numStr) {
        i++;
        entity = String.fromCodePoint(parseInt(numStr, radix));
      }
    }
  } else {
    while (i < text.length && count++ < 10) {
      const ch = text[i];
      i++;
      if (ch === ";") {
        entity = xhtml.get(str);
        break;
      }
      str += ch;
    }
  }

  if (!entity) {
    return {entity: "&", newI: indexAfterAmpersand};
  }
  return {entity, newI: i};
}

function isDecimalDigit(code) {
  return code >= charCodes.digit0 && code <= charCodes.digit9;
}

function isHexDigit(code) {
  return (
    (code >= charCodes.digit0 && code <= charCodes.digit9) ||
    (code >= charCodes.lowercaseA && code <= charCodes.lowercaseF) ||
    (code >= charCodes.uppercaseA && code <= charCodes.uppercaseF)
  );
}

;// ./node_modules/sucrase/dist/esm/util/getNonTypeIdentifiers.js







function getNonTypeIdentifiers(tokens, options) {
  const jsxPragmaInfo = getJSXPragmaInfo(options);
  const nonTypeIdentifiers = new Set();
  for (let i = 0; i < tokens.tokens.length; i++) {
    const token = tokens.tokens[i];
    if (
      token.type === TokenType.name &&
      !token.isType &&
      (token.identifierRole === IdentifierRole.Access ||
        token.identifierRole === IdentifierRole.ObjectShorthand ||
        token.identifierRole === IdentifierRole.ExportAccess) &&
      !token.shadowsGlobal
    ) {
      nonTypeIdentifiers.add(tokens.identifierNameForToken(token));
    }
    if (token.type === TokenType.jsxTagStart) {
      nonTypeIdentifiers.add(jsxPragmaInfo.base);
    }
    if (
      token.type === TokenType.jsxTagStart &&
      i + 1 < tokens.tokens.length &&
      tokens.tokens[i + 1].type === TokenType.jsxTagEnd
    ) {
      nonTypeIdentifiers.add(jsxPragmaInfo.base);
      nonTypeIdentifiers.add(jsxPragmaInfo.fragmentBase);
    }
    if (token.type === TokenType.jsxName && token.identifierRole === IdentifierRole.Access) {
      const identifierName = tokens.identifierNameForToken(token);
      // Lower-case single-component tag names like "div" don't count.
      if (!startsWithLowerCase(identifierName) || tokens.tokens[i + 1].type === TokenType.dot) {
        nonTypeIdentifiers.add(tokens.identifierNameForToken(token));
      }
    }
  }
  return nonTypeIdentifiers;
}

;// ./node_modules/sucrase/dist/esm/CJSImportProcessor.js

























/**
 * Class responsible for preprocessing and bookkeeping import and export declarations within the
 * file.
 *
 * TypeScript uses a simpler mechanism that does not use functions like interopRequireDefault and
 * interopRequireWildcard, so we also allow that mode for compatibility.
 */
class CJSImportProcessor {
   __init() {this.nonTypeIdentifiers = new Set()}
   __init2() {this.importInfoByPath = new Map()}
   __init3() {this.importsToReplace = new Map()}
   __init4() {this.identifierReplacements = new Map()}
   __init5() {this.exportBindingsByLocalName = new Map()}

  constructor(
     nameManager,
     tokens,
     enableLegacyTypeScriptModuleInterop,
     options,
     isTypeScriptTransformEnabled,
     keepUnusedImports,
     helperManager,
  ) {;this.nameManager = nameManager;this.tokens = tokens;this.enableLegacyTypeScriptModuleInterop = enableLegacyTypeScriptModuleInterop;this.options = options;this.isTypeScriptTransformEnabled = isTypeScriptTransformEnabled;this.keepUnusedImports = keepUnusedImports;this.helperManager = helperManager;CJSImportProcessor.prototype.__init.call(this);CJSImportProcessor.prototype.__init2.call(this);CJSImportProcessor.prototype.__init3.call(this);CJSImportProcessor.prototype.__init4.call(this);CJSImportProcessor.prototype.__init5.call(this);}

  preprocessTokens() {
    for (let i = 0; i < this.tokens.tokens.length; i++) {
      if (
        this.tokens.matches1AtIndex(i, TokenType._import) &&
        !this.tokens.matches3AtIndex(i, TokenType._import, TokenType.name, TokenType.eq)
      ) {
        this.preprocessImportAtIndex(i);
      }
      if (
        this.tokens.matches1AtIndex(i, TokenType._export) &&
        !this.tokens.matches2AtIndex(i, TokenType._export, TokenType.eq)
      ) {
        this.preprocessExportAtIndex(i);
      }
    }
    this.generateImportReplacements();
  }

  /**
   * In TypeScript, import statements that only import types should be removed.
   * This includes `import {} from 'foo';`, but not `import 'foo';`.
   */
  pruneTypeOnlyImports() {
    this.nonTypeIdentifiers = getNonTypeIdentifiers(this.tokens, this.options);
    for (const [path, importInfo] of this.importInfoByPath.entries()) {
      if (
        importInfo.hasBareImport ||
        importInfo.hasStarExport ||
        importInfo.exportStarNames.length > 0 ||
        importInfo.namedExports.length > 0
      ) {
        continue;
      }
      const names = [
        ...importInfo.defaultNames,
        ...importInfo.wildcardNames,
        ...importInfo.namedImports.map(({localName}) => localName),
      ];
      if (names.every((name) => this.shouldAutomaticallyElideImportedName(name))) {
        this.importsToReplace.set(path, "");
      }
    }
  }

  shouldAutomaticallyElideImportedName(name) {
    return (
      this.isTypeScriptTransformEnabled &&
      !this.keepUnusedImports &&
      !this.nonTypeIdentifiers.has(name)
    );
  }

   generateImportReplacements() {
    for (const [path, importInfo] of this.importInfoByPath.entries()) {
      const {
        defaultNames,
        wildcardNames,
        namedImports,
        namedExports,
        exportStarNames,
        hasStarExport,
      } = importInfo;

      if (
        defaultNames.length === 0 &&
        wildcardNames.length === 0 &&
        namedImports.length === 0 &&
        namedExports.length === 0 &&
        exportStarNames.length === 0 &&
        !hasStarExport
      ) {
        // Import is never used, so don't even assign a name.
        this.importsToReplace.set(path, `require('${path}');`);
        continue;
      }

      const primaryImportName = this.getFreeIdentifierForPath(path);
      let secondaryImportName;
      if (this.enableLegacyTypeScriptModuleInterop) {
        secondaryImportName = primaryImportName;
      } else {
        secondaryImportName =
          wildcardNames.length > 0 ? wildcardNames[0] : this.getFreeIdentifierForPath(path);
      }
      let requireCode = `var ${primaryImportName} = require('${path}');`;
      if (wildcardNames.length > 0) {
        for (const wildcardName of wildcardNames) {
          const moduleExpr = this.enableLegacyTypeScriptModuleInterop
            ? primaryImportName
            : `${this.helperManager.getHelperName("interopRequireWildcard")}(${primaryImportName})`;
          requireCode += ` var ${wildcardName} = ${moduleExpr};`;
        }
      } else if (exportStarNames.length > 0 && secondaryImportName !== primaryImportName) {
        requireCode += ` var ${secondaryImportName} = ${this.helperManager.getHelperName(
          "interopRequireWildcard",
        )}(${primaryImportName});`;
      } else if (defaultNames.length > 0 && secondaryImportName !== primaryImportName) {
        requireCode += ` var ${secondaryImportName} = ${this.helperManager.getHelperName(
          "interopRequireDefault",
        )}(${primaryImportName});`;
      }

      for (const {importedName, localName} of namedExports) {
        requireCode += ` ${this.helperManager.getHelperName(
          "createNamedExportFrom",
        )}(${primaryImportName}, '${localName}', '${importedName}');`;
      }
      for (const exportStarName of exportStarNames) {
        requireCode += ` exports.${exportStarName} = ${secondaryImportName};`;
      }
      if (hasStarExport) {
        requireCode += ` ${this.helperManager.getHelperName(
          "createStarExport",
        )}(${primaryImportName});`;
      }

      this.importsToReplace.set(path, requireCode);

      for (const defaultName of defaultNames) {
        this.identifierReplacements.set(defaultName, `${secondaryImportName}.default`);
      }
      for (const {importedName, localName} of namedImports) {
        this.identifierReplacements.set(localName, `${primaryImportName}.${importedName}`);
      }
    }
  }

  getFreeIdentifierForPath(path) {
    const components = path.split("/");
    const lastComponent = components[components.length - 1];
    const baseName = lastComponent.replace(/\W/g, "");
    return this.nameManager.claimFreeName(`_${baseName}`);
  }

   preprocessImportAtIndex(index) {
    const defaultNames = [];
    const wildcardNames = [];
    const namedImports = [];

    index++;
    if (
      (this.tokens.matchesContextualAtIndex(index, ContextualKeyword._type) ||
        this.tokens.matches1AtIndex(index, TokenType._typeof)) &&
      !this.tokens.matches1AtIndex(index + 1, TokenType.comma) &&
      !this.tokens.matchesContextualAtIndex(index + 1, ContextualKeyword._from)
    ) {
      // import type declaration, so no need to process anything.
      return;
    }

    if (this.tokens.matches1AtIndex(index, TokenType.parenL)) {
      // Dynamic import, so nothing to do
      return;
    }

    if (this.tokens.matches1AtIndex(index, TokenType.name)) {
      defaultNames.push(this.tokens.identifierNameAtIndex(index));
      index++;
      if (this.tokens.matches1AtIndex(index, TokenType.comma)) {
        index++;
      }
    }

    if (this.tokens.matches1AtIndex(index, TokenType.star)) {
      // * as
      index += 2;
      wildcardNames.push(this.tokens.identifierNameAtIndex(index));
      index++;
    }

    if (this.tokens.matches1AtIndex(index, TokenType.braceL)) {
      const result = this.getNamedImports(index + 1);
      index = result.newIndex;

      for (const namedImport of result.namedImports) {
        // Treat {default as X} as a default import to ensure usage of require interop helper
        if (namedImport.importedName === "default") {
          defaultNames.push(namedImport.localName);
        } else {
          namedImports.push(namedImport);
        }
      }
    }

    if (this.tokens.matchesContextualAtIndex(index, ContextualKeyword._from)) {
      index++;
    }

    if (!this.tokens.matches1AtIndex(index, TokenType.string)) {
      throw new Error("Expected string token at the end of import statement.");
    }
    const path = this.tokens.stringValueAtIndex(index);
    const importInfo = this.getImportInfo(path);
    importInfo.defaultNames.push(...defaultNames);
    importInfo.wildcardNames.push(...wildcardNames);
    importInfo.namedImports.push(...namedImports);
    if (defaultNames.length === 0 && wildcardNames.length === 0 && namedImports.length === 0) {
      importInfo.hasBareImport = true;
    }
  }

   preprocessExportAtIndex(index) {
    if (
      this.tokens.matches2AtIndex(index, TokenType._export, TokenType._var) ||
      this.tokens.matches2AtIndex(index, TokenType._export, TokenType._let) ||
      this.tokens.matches2AtIndex(index, TokenType._export, TokenType._const)
    ) {
      this.preprocessVarExportAtIndex(index);
    } else if (
      this.tokens.matches2AtIndex(index, TokenType._export, TokenType._function) ||
      this.tokens.matches2AtIndex(index, TokenType._export, TokenType._class)
    ) {
      const exportName = this.tokens.identifierNameAtIndex(index + 2);
      this.addExportBinding(exportName, exportName);
    } else if (this.tokens.matches3AtIndex(index, TokenType._export, TokenType.name, TokenType._function)) {
      const exportName = this.tokens.identifierNameAtIndex(index + 3);
      this.addExportBinding(exportName, exportName);
    } else if (this.tokens.matches2AtIndex(index, TokenType._export, TokenType.braceL)) {
      this.preprocessNamedExportAtIndex(index);
    } else if (this.tokens.matches2AtIndex(index, TokenType._export, TokenType.star)) {
      this.preprocessExportStarAtIndex(index);
    }
  }

   preprocessVarExportAtIndex(index) {
    let depth = 0;
    // Handle cases like `export let {x} = y;`, starting at the open-brace in that case.
    for (let i = index + 2; ; i++) {
      if (
        this.tokens.matches1AtIndex(i, TokenType.braceL) ||
        this.tokens.matches1AtIndex(i, TokenType.dollarBraceL) ||
        this.tokens.matches1AtIndex(i, TokenType.bracketL)
      ) {
        depth++;
      } else if (
        this.tokens.matches1AtIndex(i, TokenType.braceR) ||
        this.tokens.matches1AtIndex(i, TokenType.bracketR)
      ) {
        depth--;
      } else if (depth === 0 && !this.tokens.matches1AtIndex(i, TokenType.name)) {
        break;
      } else if (this.tokens.matches1AtIndex(1, TokenType.eq)) {
        const endIndex = this.tokens.currentToken().rhsEndIndex;
        if (endIndex == null) {
          throw new Error("Expected = token with an end index.");
        }
        i = endIndex - 1;
      } else {
        const token = this.tokens.tokens[i];
        if (isDeclaration(token)) {
          const exportName = this.tokens.identifierNameAtIndex(i);
          this.identifierReplacements.set(exportName, `exports.${exportName}`);
        }
      }
    }
  }

  /**
   * Walk this export statement just in case it's an export...from statement.
   * If it is, combine it into the import info for that path. Otherwise, just
   * bail out; it'll be handled later.
   */
   preprocessNamedExportAtIndex(index) {
    // export {
    index += 2;
    const {newIndex, namedImports} = this.getNamedImports(index);
    index = newIndex;

    if (this.tokens.matchesContextualAtIndex(index, ContextualKeyword._from)) {
      index++;
    } else {
      // Reinterpret "a as b" to be local/exported rather than imported/local.
      for (const {importedName: localName, localName: exportedName} of namedImports) {
        this.addExportBinding(localName, exportedName);
      }
      return;
    }

    if (!this.tokens.matches1AtIndex(index, TokenType.string)) {
      throw new Error("Expected string token at the end of import statement.");
    }
    const path = this.tokens.stringValueAtIndex(index);
    const importInfo = this.getImportInfo(path);
    importInfo.namedExports.push(...namedImports);
  }

   preprocessExportStarAtIndex(index) {
    let exportedName = null;
    if (this.tokens.matches3AtIndex(index, TokenType._export, TokenType.star, TokenType._as)) {
      // export * as
      index += 3;
      exportedName = this.tokens.identifierNameAtIndex(index);
      // foo from
      index += 2;
    } else {
      // export * from
      index += 3;
    }
    if (!this.tokens.matches1AtIndex(index, TokenType.string)) {
      throw new Error("Expected string token at the end of star export statement.");
    }
    const path = this.tokens.stringValueAtIndex(index);
    const importInfo = this.getImportInfo(path);
    if (exportedName !== null) {
      importInfo.exportStarNames.push(exportedName);
    } else {
      importInfo.hasStarExport = true;
    }
  }

   getNamedImports(index) {
    const namedImports = [];
    while (true) {
      if (this.tokens.matches1AtIndex(index, TokenType.braceR)) {
        index++;
        break;
      }

      const specifierInfo = getImportExportSpecifierInfo(this.tokens, index);
      index = specifierInfo.endIndex;
      if (!specifierInfo.isType) {
        namedImports.push({
          importedName: specifierInfo.leftName,
          localName: specifierInfo.rightName,
        });
      }

      if (this.tokens.matches2AtIndex(index, TokenType.comma, TokenType.braceR)) {
        index += 2;
        break;
      } else if (this.tokens.matches1AtIndex(index, TokenType.braceR)) {
        index++;
        break;
      } else if (this.tokens.matches1AtIndex(index, TokenType.comma)) {
        index++;
      } else {
        throw new Error(`Unexpected token: ${JSON.stringify(this.tokens.tokens[index])}`);
      }
    }
    return {newIndex: index, namedImports};
  }

  /**
   * Get a mutable import info object for this path, creating one if it doesn't
   * exist yet.
   */
   getImportInfo(path) {
    const existingInfo = this.importInfoByPath.get(path);
    if (existingInfo) {
      return existingInfo;
    }
    const newInfo = {
      defaultNames: [],
      wildcardNames: [],
      namedImports: [],
      namedExports: [],
      hasBareImport: false,
      exportStarNames: [],
      hasStarExport: false,
    };
    this.importInfoByPath.set(path, newInfo);
    return newInfo;
  }

   addExportBinding(localName, exportedName) {
    if (!this.exportBindingsByLocalName.has(localName)) {
      this.exportBindingsByLocalName.set(localName, []);
    }
    this.exportBindingsByLocalName.get(localName).push(exportedName);
  }

  /**
   * Return the code to use for the import for this path, or the empty string if
   * the code has already been "claimed" by a previous import.
   */
  claimImportCode(importPath) {
    const result = this.importsToReplace.get(importPath);
    this.importsToReplace.set(importPath, "");
    return result || "";
  }

  getIdentifierReplacement(identifierName) {
    return this.identifierReplacements.get(identifierName) || null;
  }

  /**
   * Return a string like `exports.foo = exports.bar`.
   */
  resolveExportBinding(assignedName) {
    const exportedNames = this.exportBindingsByLocalName.get(assignedName);
    if (!exportedNames || exportedNames.length === 0) {
      return null;
    }
    return exportedNames.map((exportedName) => `exports.${exportedName}`).join(" = ");
  }

  /**
   * Return all imported/exported names where we might be interested in whether usages of those
   * names are shadowed.
   */
  getGlobalNames() {
    return new Set([
      ...this.identifierReplacements.keys(),
      ...this.exportBindingsByLocalName.keys(),
    ]);
  }
}

// EXTERNAL MODULE: ./node_modules/@jridgewell/gen-mapping/dist/gen-mapping.umd.js
var gen_mapping_umd = __webpack_require__(99320);
;// ./node_modules/sucrase/dist/esm/computeSourceMap.js

















/**
 * Generate a source map indicating that each line maps directly to the original line,
 * with the tokens in their new positions.
 */
function computeSourceMap(
  {code: generatedCode, mappings: rawMappings},
  filePath,
  options,
  source,
  tokens,
) {
  const sourceColumns = computeSourceColumns(source, tokens);
  const map = new gen_mapping_umd.GenMapping({file: options.compiledFilename});
  let tokenIndex = 0;
  // currentMapping is the output source index for the current input token being
  // considered.
  let currentMapping = rawMappings[0];
  while (currentMapping === undefined && tokenIndex < rawMappings.length - 1) {
    tokenIndex++;
    currentMapping = rawMappings[tokenIndex];
  }
  let line = 0;
  let lineStart = 0;
  if (currentMapping !== lineStart) {
    (0,gen_mapping_umd.maybeAddSegment)(map, line, 0, filePath, line, 0);
  }
  for (let i = 0; i < generatedCode.length; i++) {
    if (i === currentMapping) {
      const genColumn = currentMapping - lineStart;
      const sourceColumn = sourceColumns[tokenIndex];
      (0,gen_mapping_umd.maybeAddSegment)(map, line, genColumn, filePath, line, sourceColumn);
      while (
        (currentMapping === i || currentMapping === undefined) &&
        tokenIndex < rawMappings.length - 1
      ) {
        tokenIndex++;
        currentMapping = rawMappings[tokenIndex];
      }
    }
    if (generatedCode.charCodeAt(i) === charCodes.lineFeed) {
      line++;
      lineStart = i + 1;
      if (currentMapping !== lineStart) {
        (0,gen_mapping_umd.maybeAddSegment)(map, line, 0, filePath, line, 0);
      }
    }
  }
  const {sourceRoot, sourcesContent, ...sourceMap} = (0,gen_mapping_umd.toEncodedMap)(map);
  return sourceMap ;
}

/**
 * Create an array mapping each token index to the 0-based column of the start
 * position of the token.
 */
function computeSourceColumns(code, tokens) {
  const sourceColumns = new Array(tokens.length);
  let tokenIndex = 0;
  let currentMapping = tokens[tokenIndex].start;
  let lineStart = 0;
  for (let i = 0; i < code.length; i++) {
    if (i === currentMapping) {
      sourceColumns[tokenIndex] = currentMapping - lineStart;
      tokenIndex++;
      currentMapping = tokens[tokenIndex].start;
    }
    if (code.charCodeAt(i) === charCodes.lineFeed) {
      lineStart = i + 1;
    }
  }
  return sourceColumns;
}

;// ./node_modules/sucrase/dist/esm/HelperManager.js


const HELPERS = {
  require: `
    import {createRequire as CREATE_REQUIRE_NAME} from "module";
    const require = CREATE_REQUIRE_NAME(import.meta.url);
  `,
  interopRequireWildcard: `
    function interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              newObj[key] = obj[key];
            }
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
  `,
  interopRequireDefault: `
    function interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
  `,
  createNamedExportFrom: `
    function createNamedExportFrom(obj, localName, importedName) {
      Object.defineProperty(exports, localName, {enumerable: true, configurable: true, get: () => obj[importedName]});
    }
  `,
  // Note that TypeScript and Babel do this differently; TypeScript does a simple existence
  // check in the exports object and does a plain assignment, whereas Babel uses
  // defineProperty and builds an object of explicitly-exported names so that star exports can
  // always take lower precedence. For now, we do the easier TypeScript thing.
  createStarExport: `
    function createStarExport(obj) {
      Object.keys(obj)
        .filter((key) => key !== "default" && key !== "__esModule")
        .forEach((key) => {
          if (exports.hasOwnProperty(key)) {
            return;
          }
          Object.defineProperty(exports, key, {enumerable: true, configurable: true, get: () => obj[key]});
        });
    }
  `,
  nullishCoalesce: `
    function nullishCoalesce(lhs, rhsFn) {
      if (lhs != null) {
        return lhs;
      } else {
        return rhsFn();
      }
    }
  `,
  asyncNullishCoalesce: `
    async function asyncNullishCoalesce(lhs, rhsFn) {
      if (lhs != null) {
        return lhs;
      } else {
        return await rhsFn();
      }
    }
  `,
  optionalChain: `
    function optionalChain(ops) {
      let lastAccessLHS = undefined;
      let value = ops[0];
      let i = 1;
      while (i < ops.length) {
        const op = ops[i];
        const fn = ops[i + 1];
        i += 2;
        if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
          return undefined;
        }
        if (op === 'access' || op === 'optionalAccess') {
          lastAccessLHS = value;
          value = fn(value);
        } else if (op === 'call' || op === 'optionalCall') {
          value = fn((...args) => value.call(lastAccessLHS, ...args));
          lastAccessLHS = undefined;
        }
      }
      return value;
    }
  `,
  asyncOptionalChain: `
    async function asyncOptionalChain(ops) {
      let lastAccessLHS = undefined;
      let value = ops[0];
      let i = 1;
      while (i < ops.length) {
        const op = ops[i];
        const fn = ops[i + 1];
        i += 2;
        if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
          return undefined;
        }
        if (op === 'access' || op === 'optionalAccess') {
          lastAccessLHS = value;
          value = await fn(value);
        } else if (op === 'call' || op === 'optionalCall') {
          value = await fn((...args) => value.call(lastAccessLHS, ...args));
          lastAccessLHS = undefined;
        }
      }
      return value;
    }
  `,
  optionalChainDelete: `
    function optionalChainDelete(ops) {
      const result = OPTIONAL_CHAIN_NAME(ops);
      return result == null ? true : result;
    }
  `,
  asyncOptionalChainDelete: `
    async function asyncOptionalChainDelete(ops) {
      const result = await ASYNC_OPTIONAL_CHAIN_NAME(ops);
      return result == null ? true : result;
    }
  `,
};

class HelperManager {
  __init() {this.helperNames = {}}
  __init2() {this.createRequireName = null}
  constructor( nameManager) {;this.nameManager = nameManager;HelperManager.prototype.__init.call(this);HelperManager.prototype.__init2.call(this);}

  getHelperName(baseName) {
    let helperName = this.helperNames[baseName];
    if (helperName) {
      return helperName;
    }
    helperName = this.nameManager.claimFreeName(`_${baseName}`);
    this.helperNames[baseName] = helperName;
    return helperName;
  }

  emitHelpers() {
    let resultCode = "";
    if (this.helperNames.optionalChainDelete) {
      this.getHelperName("optionalChain");
    }
    if (this.helperNames.asyncOptionalChainDelete) {
      this.getHelperName("asyncOptionalChain");
    }
    for (const [baseName, helperCodeTemplate] of Object.entries(HELPERS)) {
      const helperName = this.helperNames[baseName];
      let helperCode = helperCodeTemplate;
      if (baseName === "optionalChainDelete") {
        helperCode = helperCode.replace("OPTIONAL_CHAIN_NAME", this.helperNames.optionalChain);
      } else if (baseName === "asyncOptionalChainDelete") {
        helperCode = helperCode.replace(
          "ASYNC_OPTIONAL_CHAIN_NAME",
          this.helperNames.asyncOptionalChain,
        );
      } else if (baseName === "require") {
        if (this.createRequireName === null) {
          this.createRequireName = this.nameManager.claimFreeName("_createRequire");
        }
        helperCode = helperCode.replace(/CREATE_REQUIRE_NAME/g, this.createRequireName);
      }
      if (helperName) {
        resultCode += " ";
        resultCode += helperCode.replace(baseName, helperName).replace(/\s+/g, " ").trim();
      }
    }
    return resultCode;
  }
}

;// ./node_modules/sucrase/dist/esm/identifyShadowedGlobals.js





/**
 * Traverse the given tokens and modify them if necessary to indicate that some names shadow global
 * variables.
 */
function identifyShadowedGlobals(
  tokens,
  scopes,
  globalNames,
) {
  if (!hasShadowedGlobals(tokens, globalNames)) {
    return;
  }
  markShadowedGlobals(tokens, scopes, globalNames);
}

/**
 * We can do a fast up-front check to see if there are any declarations to global names. If not,
 * then there's no point in computing scope assignments.
 */
// Exported for testing.
function hasShadowedGlobals(tokens, globalNames) {
  for (const token of tokens.tokens) {
    if (
      token.type === TokenType.name &&
      !token.isType &&
      isNonTopLevelDeclaration(token) &&
      globalNames.has(tokens.identifierNameForToken(token))
    ) {
      return true;
    }
  }
  return false;
}

function markShadowedGlobals(
  tokens,
  scopes,
  globalNames,
) {
  const scopeStack = [];
  let scopeIndex = scopes.length - 1;
  // Scopes were generated at completion time, so they're sorted by end index, so we can maintain a
  // good stack by going backwards through them.
  for (let i = tokens.tokens.length - 1; ; i--) {
    while (scopeStack.length > 0 && scopeStack[scopeStack.length - 1].startTokenIndex === i + 1) {
      scopeStack.pop();
    }
    while (scopeIndex >= 0 && scopes[scopeIndex].endTokenIndex === i + 1) {
      scopeStack.push(scopes[scopeIndex]);
      scopeIndex--;
    }
    // Process scopes after the last iteration so we can make sure we pop all of them.
    if (i < 0) {
      break;
    }

    const token = tokens.tokens[i];
    const name = tokens.identifierNameForToken(token);
    if (scopeStack.length > 1 && !token.isType && token.type === TokenType.name && globalNames.has(name)) {
      if (isBlockScopedDeclaration(token)) {
        markShadowedForScope(scopeStack[scopeStack.length - 1], tokens, name);
      } else if (isFunctionScopedDeclaration(token)) {
        let stackIndex = scopeStack.length - 1;
        while (stackIndex > 0 && !scopeStack[stackIndex].isFunctionScope) {
          stackIndex--;
        }
        if (stackIndex < 0) {
          throw new Error("Did not find parent function scope.");
        }
        markShadowedForScope(scopeStack[stackIndex], tokens, name);
      }
    }
  }
  if (scopeStack.length > 0) {
    throw new Error("Expected empty scope stack after processing file.");
  }
}

function markShadowedForScope(scope, tokens, name) {
  for (let i = scope.startTokenIndex; i < scope.endTokenIndex; i++) {
    const token = tokens.tokens[i];
    if (
      (token.type === TokenType.name || token.type === TokenType.jsxName) &&
      tokens.identifierNameForToken(token) === name
    ) {
      token.shadowsGlobal = true;
    }
  }
}

;// ./node_modules/sucrase/dist/esm/util/getIdentifierNames.js



/**
 * Get all identifier names in the code, in order, including duplicates.
 */
function getIdentifierNames(code, tokens) {
  const names = [];
  for (const token of tokens) {
    if (token.type === TokenType.name) {
      names.push(code.slice(token.start, token.end));
    }
  }
  return names;
}

;// ./node_modules/sucrase/dist/esm/NameManager.js



class NameManager {
    __init() {this.usedNames = new Set()}

  constructor(code, tokens) {;NameManager.prototype.__init.call(this);
    this.usedNames = new Set(getIdentifierNames(code, tokens));
  }

  claimFreeName(name) {
    const newName = this.findFreeName(name);
    this.usedNames.add(newName);
    return newName;
  }

  findFreeName(name) {
    if (!this.usedNames.has(name)) {
      return name;
    }
    let suffixNum = 2;
    while (this.usedNames.has(name + String(suffixNum))) {
      suffixNum++;
    }
    return name + String(suffixNum);
  }
}

// EXTERNAL MODULE: ./node_modules/ts-interface-checker/dist/index.js
var ts_interface_checker_dist = __webpack_require__(99361);
;// ./node_modules/sucrase/dist/esm/Options-gen-types.js
/**
 * This module was automatically generated by `ts-interface-builder`
 */

// tslint:disable:object-literal-key-quotes

const Transform = ts_interface_checker_dist.union(
  ts_interface_checker_dist.lit("jsx"),
  ts_interface_checker_dist.lit("typescript"),
  ts_interface_checker_dist.lit("flow"),
  ts_interface_checker_dist.lit("imports"),
  ts_interface_checker_dist.lit("react-hot-loader"),
  ts_interface_checker_dist.lit("jest"),
);

const SourceMapOptions = ts_interface_checker_dist.iface([], {
  compiledFilename: "string",
});

const Options = ts_interface_checker_dist.iface([], {
  transforms: ts_interface_checker_dist.array("Transform"),
  disableESTransforms: ts_interface_checker_dist.opt("boolean"),
  jsxRuntime: ts_interface_checker_dist.opt(ts_interface_checker_dist.union(ts_interface_checker_dist.lit("classic"), ts_interface_checker_dist.lit("automatic"), ts_interface_checker_dist.lit("preserve"))),
  production: ts_interface_checker_dist.opt("boolean"),
  jsxImportSource: ts_interface_checker_dist.opt("string"),
  jsxPragma: ts_interface_checker_dist.opt("string"),
  jsxFragmentPragma: ts_interface_checker_dist.opt("string"),
  keepUnusedImports: ts_interface_checker_dist.opt("boolean"),
  preserveDynamicImport: ts_interface_checker_dist.opt("boolean"),
  injectCreateRequireForImportRequire: ts_interface_checker_dist.opt("boolean"),
  enableLegacyTypeScriptModuleInterop: ts_interface_checker_dist.opt("boolean"),
  enableLegacyBabel5ModuleInterop: ts_interface_checker_dist.opt("boolean"),
  sourceMapOptions: ts_interface_checker_dist.opt("SourceMapOptions"),
  filePath: ts_interface_checker_dist.opt("string"),
});

const exportedTypeSuite = {
  Transform,
  SourceMapOptions,
  Options,
};
/* harmony default export */ const Options_gen_types = (exportedTypeSuite);

;// ./node_modules/sucrase/dist/esm/Options.js




const {Options: OptionsChecker} = (0,ts_interface_checker_dist.createCheckers)(Options_gen_types);

 



























































































function validateOptions(options) {
  OptionsChecker.strictCheck(options);
}

;// ./node_modules/sucrase/dist/esm/parser/traverser/lval.js









function parseSpread() {
  next();
  parseMaybeAssign(false);
}

function parseRest(isBlockScope) {
  next();
  parseBindingAtom(isBlockScope);
}

function parseBindingIdentifier(isBlockScope) {
  parseIdentifier();
  markPriorBindingIdentifier(isBlockScope);
}

function parseImportedIdentifier() {
  parseIdentifier();
  state.tokens[state.tokens.length - 1].identifierRole = IdentifierRole.ImportDeclaration;
}

function markPriorBindingIdentifier(isBlockScope) {
  let identifierRole;
  if (state.scopeDepth === 0) {
    identifierRole = IdentifierRole.TopLevelDeclaration;
  } else if (isBlockScope) {
    identifierRole = IdentifierRole.BlockScopedDeclaration;
  } else {
    identifierRole = IdentifierRole.FunctionScopedDeclaration;
  }
  state.tokens[state.tokens.length - 1].identifierRole = identifierRole;
}

// Parses lvalue (assignable) atom.
function parseBindingAtom(isBlockScope) {
  switch (state.type) {
    case TokenType._this: {
      // In TypeScript, "this" may be the name of a parameter, so allow it.
      const oldIsType = pushTypeContext(0);
      next();
      popTypeContext(oldIsType);
      return;
    }

    case TokenType._yield:
    case TokenType.name: {
      state.type = TokenType.name;
      parseBindingIdentifier(isBlockScope);
      return;
    }

    case TokenType.bracketL: {
      next();
      parseBindingList(TokenType.bracketR, isBlockScope, true /* allowEmpty */);
      return;
    }

    case TokenType.braceL:
      parseObj(true, isBlockScope);
      return;

    default:
      unexpected();
  }
}

function parseBindingList(
  close,
  isBlockScope,
  allowEmpty = false,
  allowModifiers = false,
  contextId = 0,
) {
  let first = true;

  let hasRemovedComma = false;
  const firstItemTokenIndex = state.tokens.length;

  while (!eat(close) && !state.error) {
    if (first) {
      first = false;
    } else {
      expect(TokenType.comma);
      state.tokens[state.tokens.length - 1].contextId = contextId;
      // After a "this" type in TypeScript, we need to set the following comma (if any) to also be
      // a type token so that it will be removed.
      if (!hasRemovedComma && state.tokens[firstItemTokenIndex].isType) {
        state.tokens[state.tokens.length - 1].isType = true;
        hasRemovedComma = true;
      }
    }
    if (allowEmpty && match(TokenType.comma)) {
      // Empty item; nothing further to parse for this item.
    } else if (eat(close)) {
      break;
    } else if (match(TokenType.ellipsis)) {
      parseRest(isBlockScope);
      parseAssignableListItemTypes();
      // Support rest element trailing commas allowed by TypeScript <2.9.
      eat(TokenType.comma);
      expect(close);
      break;
    } else {
      parseAssignableListItem(allowModifiers, isBlockScope);
    }
  }
}

function parseAssignableListItem(allowModifiers, isBlockScope) {
  if (allowModifiers) {
    tsParseModifiers([
      ContextualKeyword._public,
      ContextualKeyword._protected,
      ContextualKeyword._private,
      ContextualKeyword._readonly,
      ContextualKeyword._override,
    ]);
  }

  parseMaybeDefault(isBlockScope);
  parseAssignableListItemTypes();
  parseMaybeDefault(isBlockScope, true /* leftAlreadyParsed */);
}

function parseAssignableListItemTypes() {
  if (isFlowEnabled) {
    flowParseAssignableListItemTypes();
  } else if (isTypeScriptEnabled) {
    tsParseAssignableListItemTypes();
  }
}

// Parses assignment pattern around given atom if possible.
function parseMaybeDefault(isBlockScope, leftAlreadyParsed = false) {
  if (!leftAlreadyParsed) {
    parseBindingAtom(isBlockScope);
  }
  if (!eat(TokenType.eq)) {
    return;
  }
  const eqIndex = state.tokens.length - 1;
  parseMaybeAssign();
  state.tokens[eqIndex].rhsEndIndex = state.tokens.length;
}

;// ./node_modules/sucrase/dist/esm/parser/plugins/typescript.js










function tsIsIdentifier() {
  // TODO: actually a bit more complex in TypeScript, but shouldn't matter.
  // See https://github.com/Microsoft/TypeScript/issues/15008
  return match(TokenType.name);
}

function isLiteralPropertyName() {
  return (
    match(TokenType.name) ||
    Boolean(state.type & TokenType.IS_KEYWORD) ||
    match(TokenType.string) ||
    match(TokenType.num) ||
    match(TokenType.bigint) ||
    match(TokenType.decimal)
  );
}

function tsNextTokenCanFollowModifier() {
  // Note: TypeScript's implementation is much more complicated because
  // more things are considered modifiers there.
  // This implementation only handles modifiers not handled by babylon itself. And "static".
  // TODO: Would be nice to avoid lookahead. Want a hasLineBreakUpNext() method...
  const snapshot = state.snapshot();

  next();
  const canFollowModifier =
    (match(TokenType.bracketL) ||
      match(TokenType.braceL) ||
      match(TokenType.star) ||
      match(TokenType.ellipsis) ||
      match(TokenType.hash) ||
      isLiteralPropertyName()) &&
    !hasPrecedingLineBreak();

  if (canFollowModifier) {
    return true;
  } else {
    state.restoreFromSnapshot(snapshot);
    return false;
  }
}

function tsParseModifiers(allowedModifiers) {
  while (true) {
    const modifier = tsParseModifier(allowedModifiers);
    if (modifier === null) {
      break;
    }
  }
}

/** Parses a modifier matching one the given modifier names. */
function tsParseModifier(
  allowedModifiers,
) {
  if (!match(TokenType.name)) {
    return null;
  }

  const modifier = state.contextualKeyword;
  if (allowedModifiers.indexOf(modifier) !== -1 && tsNextTokenCanFollowModifier()) {
    switch (modifier) {
      case ContextualKeyword._readonly:
        state.tokens[state.tokens.length - 1].type = TokenType._readonly;
        break;
      case ContextualKeyword._abstract:
        state.tokens[state.tokens.length - 1].type = TokenType._abstract;
        break;
      case ContextualKeyword._static:
        state.tokens[state.tokens.length - 1].type = TokenType._static;
        break;
      case ContextualKeyword._public:
        state.tokens[state.tokens.length - 1].type = TokenType._public;
        break;
      case ContextualKeyword._private:
        state.tokens[state.tokens.length - 1].type = TokenType._private;
        break;
      case ContextualKeyword._protected:
        state.tokens[state.tokens.length - 1].type = TokenType._protected;
        break;
      case ContextualKeyword._override:
        state.tokens[state.tokens.length - 1].type = TokenType._override;
        break;
      case ContextualKeyword._declare:
        state.tokens[state.tokens.length - 1].type = TokenType._declare;
        break;
      default:
        break;
    }
    return modifier;
  }
  return null;
}

function tsParseEntityName() {
  parseIdentifier();
  while (eat(TokenType.dot)) {
    parseIdentifier();
  }
}

function tsParseTypeReference() {
  tsParseEntityName();
  if (!hasPrecedingLineBreak() && match(TokenType.lessThan)) {
    tsParseTypeArguments();
  }
}

function tsParseThisTypePredicate() {
  next();
  tsParseTypeAnnotation();
}

function tsParseThisTypeNode() {
  next();
}

function tsParseTypeQuery() {
  expect(TokenType._typeof);
  if (match(TokenType._import)) {
    tsParseImportType();
  } else {
    tsParseEntityName();
  }
  if (!hasPrecedingLineBreak() && match(TokenType.lessThan)) {
    tsParseTypeArguments();
  }
}

function tsParseImportType() {
  expect(TokenType._import);
  expect(TokenType.parenL);
  expect(TokenType.string);
  expect(TokenType.parenR);
  if (eat(TokenType.dot)) {
    tsParseEntityName();
  }
  if (match(TokenType.lessThan)) {
    tsParseTypeArguments();
  }
}

function tsParseTypeParameter() {
  eat(TokenType._const);
  const hadIn = eat(TokenType._in);
  const hadOut = eatContextual(ContextualKeyword._out);
  eat(TokenType._const);
  if ((hadIn || hadOut) && !match(TokenType.name)) {
    // The "in" or "out" keyword must have actually been the type parameter
    // name, so set it as the name.
    state.tokens[state.tokens.length - 1].type = TokenType.name;
  } else {
    parseIdentifier();
  }

  if (eat(TokenType._extends)) {
    tsParseType();
  }
  if (eat(TokenType.eq)) {
    tsParseType();
  }
}

function tsTryParseTypeParameters() {
  if (match(TokenType.lessThan)) {
    tsParseTypeParameters();
  }
}

function tsParseTypeParameters() {
  const oldIsType = pushTypeContext(0);
  if (match(TokenType.lessThan) || match(TokenType.typeParameterStart)) {
    next();
  } else {
    unexpected();
  }

  while (!eat(TokenType.greaterThan) && !state.error) {
    tsParseTypeParameter();
    eat(TokenType.comma);
  }
  popTypeContext(oldIsType);
}

// Note: In TypeScript implementation we must provide `yieldContext` and `awaitContext`,
// but here it's always false, because this is only used for types.
function tsFillSignature(returnToken) {
  // Arrow fns *must* have return token (`=>`). Normal functions can omit it.
  const returnTokenRequired = returnToken === TokenType.arrow;
  tsTryParseTypeParameters();
  expect(TokenType.parenL);
  // Create a scope even though we're doing type parsing so we don't accidentally
  // treat params as top-level bindings.
  state.scopeDepth++;
  tsParseBindingListForSignature(false /* isBlockScope */);
  state.scopeDepth--;
  if (returnTokenRequired) {
    tsParseTypeOrTypePredicateAnnotation(returnToken);
  } else if (match(returnToken)) {
    tsParseTypeOrTypePredicateAnnotation(returnToken);
  }
}

function tsParseBindingListForSignature(isBlockScope) {
  parseBindingList(TokenType.parenR, isBlockScope);
}

function tsParseTypeMemberSemicolon() {
  if (!eat(TokenType.comma)) {
    semicolon();
  }
}

function tsParseSignatureMember() {
  tsFillSignature(TokenType.colon);
  tsParseTypeMemberSemicolon();
}

function tsIsUnambiguouslyIndexSignature() {
  const snapshot = state.snapshot();
  next(); // Skip '{'
  const isIndexSignature = eat(TokenType.name) && match(TokenType.colon);
  state.restoreFromSnapshot(snapshot);
  return isIndexSignature;
}

function tsTryParseIndexSignature() {
  if (!(match(TokenType.bracketL) && tsIsUnambiguouslyIndexSignature())) {
    return false;
  }

  const oldIsType = pushTypeContext(0);

  expect(TokenType.bracketL);
  parseIdentifier();
  tsParseTypeAnnotation();
  expect(TokenType.bracketR);

  tsTryParseTypeAnnotation();
  tsParseTypeMemberSemicolon();

  popTypeContext(oldIsType);
  return true;
}

function tsParsePropertyOrMethodSignature(isReadonly) {
  eat(TokenType.question);

  if (!isReadonly && (match(TokenType.parenL) || match(TokenType.lessThan))) {
    tsFillSignature(TokenType.colon);
    tsParseTypeMemberSemicolon();
  } else {
    tsTryParseTypeAnnotation();
    tsParseTypeMemberSemicolon();
  }
}

function tsParseTypeMember() {
  if (match(TokenType.parenL) || match(TokenType.lessThan)) {
    // call signature
    tsParseSignatureMember();
    return;
  }
  if (match(TokenType._new)) {
    next();
    if (match(TokenType.parenL) || match(TokenType.lessThan)) {
      // constructor signature
      tsParseSignatureMember();
    } else {
      tsParsePropertyOrMethodSignature(false);
    }
    return;
  }
  const readonly = !!tsParseModifier([ContextualKeyword._readonly]);

  const found = tsTryParseIndexSignature();
  if (found) {
    return;
  }
  if (
    (isContextual(ContextualKeyword._get) || isContextual(ContextualKeyword._set)) &&
    tsNextTokenCanFollowModifier()
  ) {
    // This is a getter/setter on a type. The tsNextTokenCanFollowModifier
    // function already called next() for us, so continue parsing the name.
  }
  parsePropertyName(-1 /* Types don't need context IDs. */);
  tsParsePropertyOrMethodSignature(readonly);
}

function tsParseTypeLiteral() {
  tsParseObjectTypeMembers();
}

function tsParseObjectTypeMembers() {
  expect(TokenType.braceL);
  while (!eat(TokenType.braceR) && !state.error) {
    tsParseTypeMember();
  }
}

function tsLookaheadIsStartOfMappedType() {
  const snapshot = state.snapshot();
  const isStartOfMappedType = tsIsStartOfMappedType();
  state.restoreFromSnapshot(snapshot);
  return isStartOfMappedType;
}

function tsIsStartOfMappedType() {
  next();
  if (eat(TokenType.plus) || eat(TokenType.minus)) {
    return isContextual(ContextualKeyword._readonly);
  }
  if (isContextual(ContextualKeyword._readonly)) {
    next();
  }
  if (!match(TokenType.bracketL)) {
    return false;
  }
  next();
  if (!tsIsIdentifier()) {
    return false;
  }
  next();
  return match(TokenType._in);
}

function tsParseMappedTypeParameter() {
  parseIdentifier();
  expect(TokenType._in);
  tsParseType();
}

function tsParseMappedType() {
  expect(TokenType.braceL);
  if (match(TokenType.plus) || match(TokenType.minus)) {
    next();
    expectContextual(ContextualKeyword._readonly);
  } else {
    eatContextual(ContextualKeyword._readonly);
  }
  expect(TokenType.bracketL);
  tsParseMappedTypeParameter();
  if (eatContextual(ContextualKeyword._as)) {
    tsParseType();
  }
  expect(TokenType.bracketR);
  if (match(TokenType.plus) || match(TokenType.minus)) {
    next();
    expect(TokenType.question);
  } else {
    eat(TokenType.question);
  }
  tsTryParseType();
  semicolon();
  expect(TokenType.braceR);
}

function tsParseTupleType() {
  expect(TokenType.bracketL);
  while (!eat(TokenType.bracketR) && !state.error) {
    // Do not validate presence of either none or only labeled elements
    tsParseTupleElementType();
    eat(TokenType.comma);
  }
}

function tsParseTupleElementType() {
  // parses `...TsType[]`
  if (eat(TokenType.ellipsis)) {
    tsParseType();
  } else {
    // parses `TsType?`
    tsParseType();
    eat(TokenType.question);
  }

  // The type we parsed above was actually a label
  if (eat(TokenType.colon)) {
    // Labeled tuple types must affix the label with `...` or `?`, so no need to handle those here
    tsParseType();
  }
}

function tsParseParenthesizedType() {
  expect(TokenType.parenL);
  tsParseType();
  expect(TokenType.parenR);
}

function tsParseTemplateLiteralType() {
  // Finish `, read quasi
  nextTemplateToken();
  // Finish quasi, read ${
  nextTemplateToken();
  while (!match(TokenType.backQuote) && !state.error) {
    expect(TokenType.dollarBraceL);
    tsParseType();
    // Finish }, read quasi
    nextTemplateToken();
    // Finish quasi, read either ${ or `
    nextTemplateToken();
  }
  next();
}

var FunctionType; (function (FunctionType) {
  const TSFunctionType = 0; FunctionType[FunctionType["TSFunctionType"] = TSFunctionType] = "TSFunctionType";
  const TSConstructorType = TSFunctionType + 1; FunctionType[FunctionType["TSConstructorType"] = TSConstructorType] = "TSConstructorType";
  const TSAbstractConstructorType = TSConstructorType + 1; FunctionType[FunctionType["TSAbstractConstructorType"] = TSAbstractConstructorType] = "TSAbstractConstructorType";
})(FunctionType || (FunctionType = {}));

function tsParseFunctionOrConstructorType(type) {
  if (type === FunctionType.TSAbstractConstructorType) {
    expectContextual(ContextualKeyword._abstract);
  }
  if (type === FunctionType.TSConstructorType || type === FunctionType.TSAbstractConstructorType) {
    expect(TokenType._new);
  }
  const oldInDisallowConditionalTypesContext = state.inDisallowConditionalTypesContext;
  state.inDisallowConditionalTypesContext = false;
  tsFillSignature(TokenType.arrow);
  state.inDisallowConditionalTypesContext = oldInDisallowConditionalTypesContext;
}

function tsParseNonArrayType() {
  switch (state.type) {
    case TokenType.name:
      tsParseTypeReference();
      return;
    case TokenType._void:
    case TokenType._null:
      next();
      return;
    case TokenType.string:
    case TokenType.num:
    case TokenType.bigint:
    case TokenType.decimal:
    case TokenType._true:
    case TokenType._false:
      parseLiteral();
      return;
    case TokenType.minus:
      next();
      parseLiteral();
      return;
    case TokenType._this: {
      tsParseThisTypeNode();
      if (isContextual(ContextualKeyword._is) && !hasPrecedingLineBreak()) {
        tsParseThisTypePredicate();
      }
      return;
    }
    case TokenType._typeof:
      tsParseTypeQuery();
      return;
    case TokenType._import:
      tsParseImportType();
      return;
    case TokenType.braceL:
      if (tsLookaheadIsStartOfMappedType()) {
        tsParseMappedType();
      } else {
        tsParseTypeLiteral();
      }
      return;
    case TokenType.bracketL:
      tsParseTupleType();
      return;
    case TokenType.parenL:
      tsParseParenthesizedType();
      return;
    case TokenType.backQuote:
      tsParseTemplateLiteralType();
      return;
    default:
      if (state.type & TokenType.IS_KEYWORD) {
        next();
        state.tokens[state.tokens.length - 1].type = TokenType.name;
        return;
      }
      break;
  }

  unexpected();
}

function tsParseArrayTypeOrHigher() {
  tsParseNonArrayType();
  while (!hasPrecedingLineBreak() && eat(TokenType.bracketL)) {
    if (!eat(TokenType.bracketR)) {
      // If we hit ] immediately, this is an array type, otherwise it's an indexed access type.
      tsParseType();
      expect(TokenType.bracketR);
    }
  }
}

function tsParseInferType() {
  expectContextual(ContextualKeyword._infer);
  parseIdentifier();
  if (match(TokenType._extends)) {
    // Infer type constraints introduce an ambiguity about whether the "extends"
    // is a constraint for this infer type or is another conditional type.
    const snapshot = state.snapshot();
    expect(TokenType._extends);
    const oldInDisallowConditionalTypesContext = state.inDisallowConditionalTypesContext;
    state.inDisallowConditionalTypesContext = true;
    tsParseType();
    state.inDisallowConditionalTypesContext = oldInDisallowConditionalTypesContext;
    if (state.error || (!state.inDisallowConditionalTypesContext && match(TokenType.question))) {
      state.restoreFromSnapshot(snapshot);
    }
  }
}

function tsParseTypeOperatorOrHigher() {
  if (
    isContextual(ContextualKeyword._keyof) ||
    isContextual(ContextualKeyword._unique) ||
    isContextual(ContextualKeyword._readonly)
  ) {
    next();
    tsParseTypeOperatorOrHigher();
  } else if (isContextual(ContextualKeyword._infer)) {
    tsParseInferType();
  } else {
    const oldInDisallowConditionalTypesContext = state.inDisallowConditionalTypesContext;
    state.inDisallowConditionalTypesContext = false;
    tsParseArrayTypeOrHigher();
    state.inDisallowConditionalTypesContext = oldInDisallowConditionalTypesContext;
  }
}

function tsParseIntersectionTypeOrHigher() {
  eat(TokenType.bitwiseAND);
  tsParseTypeOperatorOrHigher();
  if (match(TokenType.bitwiseAND)) {
    while (eat(TokenType.bitwiseAND)) {
      tsParseTypeOperatorOrHigher();
    }
  }
}

function tsParseUnionTypeOrHigher() {
  eat(TokenType.bitwiseOR);
  tsParseIntersectionTypeOrHigher();
  if (match(TokenType.bitwiseOR)) {
    while (eat(TokenType.bitwiseOR)) {
      tsParseIntersectionTypeOrHigher();
    }
  }
}

function tsIsStartOfFunctionType() {
  if (match(TokenType.lessThan)) {
    return true;
  }
  return match(TokenType.parenL) && tsLookaheadIsUnambiguouslyStartOfFunctionType();
}

function tsSkipParameterStart() {
  if (match(TokenType.name) || match(TokenType._this)) {
    next();
    return true;
  }
  // If this is a possible array/object destructure, walk to the matching bracket/brace.
  // The next token after will tell us definitively whether this is a function param.
  if (match(TokenType.braceL) || match(TokenType.bracketL)) {
    let depth = 1;
    next();
    while (depth > 0 && !state.error) {
      if (match(TokenType.braceL) || match(TokenType.bracketL)) {
        depth++;
      } else if (match(TokenType.braceR) || match(TokenType.bracketR)) {
        depth--;
      }
      next();
    }
    return true;
  }
  return false;
}

function tsLookaheadIsUnambiguouslyStartOfFunctionType() {
  const snapshot = state.snapshot();
  const isUnambiguouslyStartOfFunctionType = tsIsUnambiguouslyStartOfFunctionType();
  state.restoreFromSnapshot(snapshot);
  return isUnambiguouslyStartOfFunctionType;
}

function tsIsUnambiguouslyStartOfFunctionType() {
  next();
  if (match(TokenType.parenR) || match(TokenType.ellipsis)) {
    // ( )
    // ( ...
    return true;
  }
  if (tsSkipParameterStart()) {
    if (match(TokenType.colon) || match(TokenType.comma) || match(TokenType.question) || match(TokenType.eq)) {
      // ( xxx :
      // ( xxx ,
      // ( xxx ?
      // ( xxx =
      return true;
    }
    if (match(TokenType.parenR)) {
      next();
      if (match(TokenType.arrow)) {
        // ( xxx ) =>
        return true;
      }
    }
  }
  return false;
}

function tsParseTypeOrTypePredicateAnnotation(returnToken) {
  const oldIsType = pushTypeContext(0);
  expect(returnToken);
  const finishedReturn = tsParseTypePredicateOrAssertsPrefix();
  if (!finishedReturn) {
    tsParseType();
  }
  popTypeContext(oldIsType);
}

function tsTryParseTypeOrTypePredicateAnnotation() {
  if (match(TokenType.colon)) {
    tsParseTypeOrTypePredicateAnnotation(TokenType.colon);
  }
}

function tsTryParseTypeAnnotation() {
  if (match(TokenType.colon)) {
    tsParseTypeAnnotation();
  }
}

function tsTryParseType() {
  if (eat(TokenType.colon)) {
    tsParseType();
  }
}

/**
 * Detect a few special return syntax cases: `x is T`, `asserts x`, `asserts x is T`,
 * `asserts this is T`.
 *
 * Returns true if we parsed the return type, false if there's still a type to be parsed.
 */
function tsParseTypePredicateOrAssertsPrefix() {
  const snapshot = state.snapshot();
  if (isContextual(ContextualKeyword._asserts)) {
    // Normally this is `asserts x is T`, but at this point, it might be `asserts is T` (a user-
    // defined type guard on the `asserts` variable) or just a type called `asserts`.
    next();
    if (eatContextual(ContextualKeyword._is)) {
      // If we see `asserts is`, then this must be of the form `asserts is T`, since
      // `asserts is is T` isn't valid.
      tsParseType();
      return true;
    } else if (tsIsIdentifier() || match(TokenType._this)) {
      next();
      if (eatContextual(ContextualKeyword._is)) {
        // If we see `is`, then this is `asserts x is T`. Otherwise, it's `asserts x`.
        tsParseType();
      }
      return true;
    } else {
      // Regular type, so bail out and start type parsing from scratch.
      state.restoreFromSnapshot(snapshot);
      return false;
    }
  } else if (tsIsIdentifier() || match(TokenType._this)) {
    // This is a regular identifier, which may or may not have "is" after it.
    next();
    if (isContextual(ContextualKeyword._is) && !hasPrecedingLineBreak()) {
      next();
      tsParseType();
      return true;
    } else {
      // Regular type, so bail out and start type parsing from scratch.
      state.restoreFromSnapshot(snapshot);
      return false;
    }
  }
  return false;
}

function tsParseTypeAnnotation() {
  const oldIsType = pushTypeContext(0);
  expect(TokenType.colon);
  tsParseType();
  popTypeContext(oldIsType);
}

function tsParseType() {
  tsParseNonConditionalType();
  if (state.inDisallowConditionalTypesContext || hasPrecedingLineBreak() || !eat(TokenType._extends)) {
    return;
  }
  // extends type
  const oldInDisallowConditionalTypesContext = state.inDisallowConditionalTypesContext;
  state.inDisallowConditionalTypesContext = true;
  tsParseNonConditionalType();
  state.inDisallowConditionalTypesContext = oldInDisallowConditionalTypesContext;

  expect(TokenType.question);
  // true type
  tsParseType();
  expect(TokenType.colon);
  // false type
  tsParseType();
}

function isAbstractConstructorSignature() {
  return isContextual(ContextualKeyword._abstract) && lookaheadType() === TokenType._new;
}

function tsParseNonConditionalType() {
  if (tsIsStartOfFunctionType()) {
    tsParseFunctionOrConstructorType(FunctionType.TSFunctionType);
    return;
  }
  if (match(TokenType._new)) {
    // As in `new () => Date`
    tsParseFunctionOrConstructorType(FunctionType.TSConstructorType);
    return;
  } else if (isAbstractConstructorSignature()) {
    // As in `abstract new () => Date`
    tsParseFunctionOrConstructorType(FunctionType.TSAbstractConstructorType);
    return;
  }
  tsParseUnionTypeOrHigher();
}

function tsParseTypeAssertion() {
  const oldIsType = pushTypeContext(1);
  tsParseType();
  expect(TokenType.greaterThan);
  popTypeContext(oldIsType);
  parseMaybeUnary();
}

function tsTryParseJSXTypeArgument() {
  if (eat(TokenType.jsxTagStart)) {
    state.tokens[state.tokens.length - 1].type = TokenType.typeParameterStart;
    const oldIsType = pushTypeContext(1);
    while (!match(TokenType.greaterThan) && !state.error) {
      tsParseType();
      eat(TokenType.comma);
    }
    // Process >, but the one after needs to be parsed JSX-style.
    nextJSXTagToken();
    popTypeContext(oldIsType);
  }
}

function tsParseHeritageClause() {
  while (!match(TokenType.braceL) && !state.error) {
    tsParseExpressionWithTypeArguments();
    eat(TokenType.comma);
  }
}

function tsParseExpressionWithTypeArguments() {
  // Note: TS uses parseLeftHandSideExpressionOrHigher,
  // then has grammar errors later if it's not an EntityName.
  tsParseEntityName();
  if (match(TokenType.lessThan)) {
    tsParseTypeArguments();
  }
}

function tsParseInterfaceDeclaration() {
  parseBindingIdentifier(false);
  tsTryParseTypeParameters();
  if (eat(TokenType._extends)) {
    tsParseHeritageClause();
  }
  tsParseObjectTypeMembers();
}

function tsParseTypeAliasDeclaration() {
  parseBindingIdentifier(false);
  tsTryParseTypeParameters();
  expect(TokenType.eq);
  tsParseType();
  semicolon();
}

function tsParseEnumMember() {
  // Computed property names are grammar errors in an enum, so accept just string literal or identifier.
  if (match(TokenType.string)) {
    parseLiteral();
  } else {
    parseIdentifier();
  }
  if (eat(TokenType.eq)) {
    const eqIndex = state.tokens.length - 1;
    parseMaybeAssign();
    state.tokens[eqIndex].rhsEndIndex = state.tokens.length;
  }
}

function tsParseEnumDeclaration() {
  parseBindingIdentifier(false);
  expect(TokenType.braceL);
  while (!eat(TokenType.braceR) && !state.error) {
    tsParseEnumMember();
    eat(TokenType.comma);
  }
}

function tsParseModuleBlock() {
  expect(TokenType.braceL);
  parseBlockBody(/* end */ TokenType.braceR);
}

function tsParseModuleOrNamespaceDeclaration() {
  parseBindingIdentifier(false);
  if (eat(TokenType.dot)) {
    tsParseModuleOrNamespaceDeclaration();
  } else {
    tsParseModuleBlock();
  }
}

function tsParseAmbientExternalModuleDeclaration() {
  if (isContextual(ContextualKeyword._global)) {
    parseIdentifier();
  } else if (match(TokenType.string)) {
    parseExprAtom();
  } else {
    unexpected();
  }

  if (match(TokenType.braceL)) {
    tsParseModuleBlock();
  } else {
    semicolon();
  }
}

function tsParseImportEqualsDeclaration() {
  parseImportedIdentifier();
  expect(TokenType.eq);
  tsParseModuleReference();
  semicolon();
}

function tsIsExternalModuleReference() {
  return isContextual(ContextualKeyword._require) && lookaheadType() === TokenType.parenL;
}

function tsParseModuleReference() {
  if (tsIsExternalModuleReference()) {
    tsParseExternalModuleReference();
  } else {
    tsParseEntityName();
  }
}

function tsParseExternalModuleReference() {
  expectContextual(ContextualKeyword._require);
  expect(TokenType.parenL);
  if (!match(TokenType.string)) {
    unexpected();
  }
  parseLiteral();
  expect(TokenType.parenR);
}

// Utilities

// Returns true if a statement matched.
function tsTryParseDeclare() {
  if (isLineTerminator()) {
    return false;
  }
  switch (state.type) {
    case TokenType._function: {
      const oldIsType = pushTypeContext(1);
      next();
      // We don't need to precisely get the function start here, since it's only used to mark
      // the function as a type if it's bodiless, and it's already a type here.
      const functionStart = state.start;
      parseFunction(functionStart, /* isStatement */ true);
      popTypeContext(oldIsType);
      return true;
    }
    case TokenType._class: {
      const oldIsType = pushTypeContext(1);
      parseClass(/* isStatement */ true, /* optionalId */ false);
      popTypeContext(oldIsType);
      return true;
    }
    case TokenType._const: {
      if (match(TokenType._const) && isLookaheadContextual(ContextualKeyword._enum)) {
        const oldIsType = pushTypeContext(1);
        // `const enum = 0;` not allowed because "enum" is a strict mode reserved word.
        expect(TokenType._const);
        expectContextual(ContextualKeyword._enum);
        state.tokens[state.tokens.length - 1].type = TokenType._enum;
        tsParseEnumDeclaration();
        popTypeContext(oldIsType);
        return true;
      }
    }
    // falls through
    case TokenType._var:
    case TokenType._let: {
      const oldIsType = pushTypeContext(1);
      parseVarStatement(state.type !== TokenType._var);
      popTypeContext(oldIsType);
      return true;
    }
    case TokenType.name: {
      const oldIsType = pushTypeContext(1);
      const contextualKeyword = state.contextualKeyword;
      let matched = false;
      if (contextualKeyword === ContextualKeyword._global) {
        tsParseAmbientExternalModuleDeclaration();
        matched = true;
      } else {
        matched = tsParseDeclaration(contextualKeyword, /* isBeforeToken */ true);
      }
      popTypeContext(oldIsType);
      return matched;
    }
    default:
      return false;
  }
}

// Note: this won't be called unless the keyword is allowed in `shouldParseExportDeclaration`.
// Returns true if it matched a declaration.
function tsTryParseExportDeclaration() {
  return tsParseDeclaration(state.contextualKeyword, /* isBeforeToken */ true);
}

// Returns true if it matched a statement.
function tsParseExpressionStatement(contextualKeyword) {
  switch (contextualKeyword) {
    case ContextualKeyword._declare: {
      const declareTokenIndex = state.tokens.length - 1;
      const matched = tsTryParseDeclare();
      if (matched) {
        state.tokens[declareTokenIndex].type = TokenType._declare;
        return true;
      }
      break;
    }
    case ContextualKeyword._global:
      // `global { }` (with no `declare`) may appear inside an ambient module declaration.
      // Would like to use tsParseAmbientExternalModuleDeclaration here, but already ran past "global".
      if (match(TokenType.braceL)) {
        tsParseModuleBlock();
        return true;
      }
      break;

    default:
      return tsParseDeclaration(contextualKeyword, /* isBeforeToken */ false);
  }
  return false;
}

/**
 * Common code for parsing a declaration.
 *
 * isBeforeToken indicates that the current parser state is at the contextual
 * keyword (and that it is not yet emitted) rather than reading the token after
 * it. When isBeforeToken is true, we may be preceded by an `export` token and
 * should include that token in a type context we create, e.g. to handle
 * `export interface` or `export type`. (This is a bit of a hack and should be
 * cleaned up at some point.)
 *
 * Returns true if it matched a declaration.
 */
function tsParseDeclaration(contextualKeyword, isBeforeToken) {
  switch (contextualKeyword) {
    case ContextualKeyword._abstract:
      if (tsCheckLineTerminator(isBeforeToken) && match(TokenType._class)) {
        state.tokens[state.tokens.length - 1].type = TokenType._abstract;
        parseClass(/* isStatement */ true, /* optionalId */ false);
        return true;
      }
      break;

    case ContextualKeyword._enum:
      if (tsCheckLineTerminator(isBeforeToken) && match(TokenType.name)) {
        state.tokens[state.tokens.length - 1].type = TokenType._enum;
        tsParseEnumDeclaration();
        return true;
      }
      break;

    case ContextualKeyword._interface:
      if (tsCheckLineTerminator(isBeforeToken) && match(TokenType.name)) {
        // `next` is true in "export" and "declare" contexts, so we want to remove that token
        // as well.
        const oldIsType = pushTypeContext(isBeforeToken ? 2 : 1);
        tsParseInterfaceDeclaration();
        popTypeContext(oldIsType);
        return true;
      }
      break;

    case ContextualKeyword._module:
      if (tsCheckLineTerminator(isBeforeToken)) {
        if (match(TokenType.string)) {
          const oldIsType = pushTypeContext(isBeforeToken ? 2 : 1);
          tsParseAmbientExternalModuleDeclaration();
          popTypeContext(oldIsType);
          return true;
        } else if (match(TokenType.name)) {
          const oldIsType = pushTypeContext(isBeforeToken ? 2 : 1);
          tsParseModuleOrNamespaceDeclaration();
          popTypeContext(oldIsType);
          return true;
        }
      }
      break;

    case ContextualKeyword._namespace:
      if (tsCheckLineTerminator(isBeforeToken) && match(TokenType.name)) {
        const oldIsType = pushTypeContext(isBeforeToken ? 2 : 1);
        tsParseModuleOrNamespaceDeclaration();
        popTypeContext(oldIsType);
        return true;
      }
      break;

    case ContextualKeyword._type:
      if (tsCheckLineTerminator(isBeforeToken) && match(TokenType.name)) {
        const oldIsType = pushTypeContext(isBeforeToken ? 2 : 1);
        tsParseTypeAliasDeclaration();
        popTypeContext(oldIsType);
        return true;
      }
      break;

    default:
      break;
  }
  return false;
}

function tsCheckLineTerminator(isBeforeToken) {
  if (isBeforeToken) {
    // Babel checks hasFollowingLineBreak here and returns false, but this
    // doesn't actually come up, e.g. `export interface` can never be on its own
    // line in valid code.
    next();
    return true;
  } else {
    return !isLineTerminator();
  }
}

// Returns true if there was a generic async arrow function.
function tsTryParseGenericAsyncArrowFunction() {
  const snapshot = state.snapshot();

  tsParseTypeParameters();
  parseFunctionParams();
  tsTryParseTypeOrTypePredicateAnnotation();
  expect(TokenType.arrow);

  if (state.error) {
    state.restoreFromSnapshot(snapshot);
    return false;
  }

  parseFunctionBody(true);
  return true;
}

/**
 * If necessary, hack the tokenizer state so that this bitshift was actually a
 * less-than token, then keep parsing. This should only be used in situations
 * where we restore from snapshot on error (which reverts this change) or
 * where bitshift would be illegal anyway (e.g. in a class "extends" clause).
 *
 * This hack is useful to handle situations like foo<<T>() => void>() where
 * there can legitimately be two open-angle-brackets in a row in TS.
 */
function tsParseTypeArgumentsWithPossibleBitshift() {
  if (state.type === TokenType.bitShiftL) {
    state.pos -= 1;
    finishToken(TokenType.lessThan);
  }
  tsParseTypeArguments();
}

function tsParseTypeArguments() {
  const oldIsType = pushTypeContext(0);
  expect(TokenType.lessThan);
  while (!match(TokenType.greaterThan) && !state.error) {
    tsParseType();
    eat(TokenType.comma);
  }
  if (!oldIsType) {
    // If the type arguments are present in an expression context, e.g.
    // f<number>(), then the > sign should be tokenized as a non-type token.
    // In particular, f(a < b, c >= d) should parse the >= as a single token,
    // resulting in a syntax error and fallback to the non-type-args
    // interpretation. In the success case, even though the > is tokenized as a
    // non-type token, it still must be marked as a type token so that it is
    // erased.
    popTypeContext(oldIsType);
    rescan_gt();
    expect(TokenType.greaterThan);
    state.tokens[state.tokens.length - 1].isType = true;
  } else {
    expect(TokenType.greaterThan);
    popTypeContext(oldIsType);
  }
}

function tsIsDeclarationStart() {
  if (match(TokenType.name)) {
    switch (state.contextualKeyword) {
      case ContextualKeyword._abstract:
      case ContextualKeyword._declare:
      case ContextualKeyword._enum:
      case ContextualKeyword._interface:
      case ContextualKeyword._module:
      case ContextualKeyword._namespace:
      case ContextualKeyword._type:
        return true;
      default:
        break;
    }
  }

  return false;
}

// ======================================================
// OVERRIDES
// ======================================================

function tsParseFunctionBodyAndFinish(functionStart, funcContextId) {
  // For arrow functions, `parseArrow` handles the return type itself.
  if (match(TokenType.colon)) {
    tsParseTypeOrTypePredicateAnnotation(TokenType.colon);
  }

  // The original code checked the node type to make sure this function type allows a missing
  // body, but we skip that to avoid sending around the node type. We instead just use the
  // allowExpressionBody boolean to make sure it's not an arrow function.
  if (!match(TokenType.braceL) && isLineTerminator()) {
    // Retroactively mark the function declaration as a type.
    let i = state.tokens.length - 1;
    while (
      i >= 0 &&
      (state.tokens[i].start >= functionStart ||
        state.tokens[i].type === TokenType._default ||
        state.tokens[i].type === TokenType._export)
    ) {
      state.tokens[i].isType = true;
      i--;
    }
    return;
  }

  parseFunctionBody(false, funcContextId);
}

function tsParseSubscript(
  startTokenIndex,
  noCalls,
  stopState,
) {
  if (!hasPrecedingLineBreak() && eat(TokenType.bang)) {
    state.tokens[state.tokens.length - 1].type = TokenType.nonNullAssertion;
    return;
  }

  if (match(TokenType.lessThan) || match(TokenType.bitShiftL)) {
    // There are number of things we are going to "maybe" parse, like type arguments on
    // tagged template expressions. If any of them fail, walk it back and continue.
    const snapshot = state.snapshot();

    if (!noCalls && atPossibleAsync()) {
      // Almost certainly this is a generic async function `async <T>() => ...
      // But it might be a call with a type argument `async<T>();`
      const asyncArrowFn = tsTryParseGenericAsyncArrowFunction();
      if (asyncArrowFn) {
        return;
      }
    }
    tsParseTypeArgumentsWithPossibleBitshift();
    if (!noCalls && eat(TokenType.parenL)) {
      // With f<T>(), the subscriptStartIndex marker is on the ( token.
      state.tokens[state.tokens.length - 1].subscriptStartIndex = startTokenIndex;
      parseCallExpressionArguments();
    } else if (match(TokenType.backQuote)) {
      // Tagged template with a type argument.
      parseTemplate();
    } else if (
      // The remaining possible case is an instantiation expression, e.g.
      // Array<number> . Check for a few cases that would disqualify it and
      // cause us to bail out.
      // a<b>>c is not (a<b>)>c, but a<(b>>c)
      state.type === TokenType.greaterThan ||
      // a<b>c is (a<b)>c
      (state.type !== TokenType.parenL &&
        Boolean(state.type & TokenType.IS_EXPRESSION_START) &&
        !hasPrecedingLineBreak())
    ) {
      // Bail out. We have something like a<b>c, which is not an expression with
      // type arguments but an (a < b) > c comparison.
      unexpected();
    }

    if (state.error) {
      state.restoreFromSnapshot(snapshot);
    } else {
      return;
    }
  } else if (!noCalls && match(TokenType.questionDot) && lookaheadType() === TokenType.lessThan) {
    // If we see f?.<, then this must be an optional call with a type argument.
    next();
    state.tokens[startTokenIndex].isOptionalChainStart = true;
    // With f?.<T>(), the subscriptStartIndex marker is on the ?. token.
    state.tokens[state.tokens.length - 1].subscriptStartIndex = startTokenIndex;

    tsParseTypeArguments();
    expect(TokenType.parenL);
    parseCallExpressionArguments();
  }
  baseParseSubscript(startTokenIndex, noCalls, stopState);
}

function tsTryParseExport() {
  if (eat(TokenType._import)) {
    // One of these cases:
    // export import A = B;
    // export import type A = require("A");
    if (isContextual(ContextualKeyword._type) && lookaheadType() !== TokenType.eq) {
      // Eat a `type` token, unless it's actually an identifier name.
      expectContextual(ContextualKeyword._type);
    }
    tsParseImportEqualsDeclaration();
    return true;
  } else if (eat(TokenType.eq)) {
    // `export = x;`
    parseExpression();
    semicolon();
    return true;
  } else if (eatContextual(ContextualKeyword._as)) {
    // `export as namespace A;`
    // See `parseNamespaceExportDeclaration` in TypeScript's own parser
    expectContextual(ContextualKeyword._namespace);
    parseIdentifier();
    semicolon();
    return true;
  } else {
    if (isContextual(ContextualKeyword._type)) {
      const nextType = lookaheadType();
      // export type {foo} from 'a';
      // export type * from 'a';'
      // export type * as ns from 'a';'
      if (nextType === TokenType.braceL || nextType === TokenType.star) {
        next();
      }
    }
    return false;
  }
}

/**
 * Parse a TS import specifier, which may be prefixed with "type" and may be of
 * the form `foo as bar`.
 *
 * The number of identifier-like tokens we see happens to be enough to uniquely
 * identify the form, so simply count the number of identifiers rather than
 * matching the words `type` or `as`. This is particularly important because
 * `type` and `as` could each actually be plain identifiers rather than
 * keywords.
 */
function tsParseImportSpecifier() {
  parseIdentifier();
  if (match(TokenType.comma) || match(TokenType.braceR)) {
    // import {foo}
    state.tokens[state.tokens.length - 1].identifierRole = IdentifierRole.ImportDeclaration;
    return;
  }
  parseIdentifier();
  if (match(TokenType.comma) || match(TokenType.braceR)) {
    // import {type foo}
    state.tokens[state.tokens.length - 1].identifierRole = IdentifierRole.ImportDeclaration;
    state.tokens[state.tokens.length - 2].isType = true;
    state.tokens[state.tokens.length - 1].isType = true;
    return;
  }
  parseIdentifier();
  if (match(TokenType.comma) || match(TokenType.braceR)) {
    // import {foo as bar}
    state.tokens[state.tokens.length - 3].identifierRole = IdentifierRole.ImportAccess;
    state.tokens[state.tokens.length - 1].identifierRole = IdentifierRole.ImportDeclaration;
    return;
  }
  parseIdentifier();
  // import {type foo as bar}
  state.tokens[state.tokens.length - 3].identifierRole = IdentifierRole.ImportAccess;
  state.tokens[state.tokens.length - 1].identifierRole = IdentifierRole.ImportDeclaration;
  state.tokens[state.tokens.length - 4].isType = true;
  state.tokens[state.tokens.length - 3].isType = true;
  state.tokens[state.tokens.length - 2].isType = true;
  state.tokens[state.tokens.length - 1].isType = true;
}

/**
 * Just like named import specifiers, export specifiers can have from 1 to 4
 * tokens, inclusive, and the number of tokens determines the role of each token.
 */
function tsParseExportSpecifier() {
  parseIdentifier();
  if (match(TokenType.comma) || match(TokenType.braceR)) {
    // export {foo}
    state.tokens[state.tokens.length - 1].identifierRole = IdentifierRole.ExportAccess;
    return;
  }
  parseIdentifier();
  if (match(TokenType.comma) || match(TokenType.braceR)) {
    // export {type foo}
    state.tokens[state.tokens.length - 1].identifierRole = IdentifierRole.ExportAccess;
    state.tokens[state.tokens.length - 2].isType = true;
    state.tokens[state.tokens.length - 1].isType = true;
    return;
  }
  parseIdentifier();
  if (match(TokenType.comma) || match(TokenType.braceR)) {
    // export {foo as bar}
    state.tokens[state.tokens.length - 3].identifierRole = IdentifierRole.ExportAccess;
    return;
  }
  parseIdentifier();
  // export {type foo as bar}
  state.tokens[state.tokens.length - 3].identifierRole = IdentifierRole.ExportAccess;
  state.tokens[state.tokens.length - 4].isType = true;
  state.tokens[state.tokens.length - 3].isType = true;
  state.tokens[state.tokens.length - 2].isType = true;
  state.tokens[state.tokens.length - 1].isType = true;
}

function tsTryParseExportDefaultExpression() {
  if (isContextual(ContextualKeyword._abstract) && lookaheadType() === TokenType._class) {
    state.type = TokenType._abstract;
    next(); // Skip "abstract"
    parseClass(true, true);
    return true;
  }
  if (isContextual(ContextualKeyword._interface)) {
    // Make sure "export default" are considered type tokens so the whole thing is removed.
    const oldIsType = pushTypeContext(2);
    tsParseDeclaration(ContextualKeyword._interface, true);
    popTypeContext(oldIsType);
    return true;
  }
  return false;
}

function tsTryParseStatementContent() {
  if (state.type === TokenType._const) {
    const ahead = lookaheadTypeAndKeyword();
    if (ahead.type === TokenType.name && ahead.contextualKeyword === ContextualKeyword._enum) {
      expect(TokenType._const);
      expectContextual(ContextualKeyword._enum);
      state.tokens[state.tokens.length - 1].type = TokenType._enum;
      tsParseEnumDeclaration();
      return true;
    }
  }
  return false;
}

function tsTryParseClassMemberWithIsStatic(isStatic) {
  const memberStartIndexAfterStatic = state.tokens.length;
  tsParseModifiers([
    ContextualKeyword._abstract,
    ContextualKeyword._readonly,
    ContextualKeyword._declare,
    ContextualKeyword._static,
    ContextualKeyword._override,
  ]);

  const modifiersEndIndex = state.tokens.length;
  const found = tsTryParseIndexSignature();
  if (found) {
    // Index signatures are type declarations, so set the modifier tokens as
    // type tokens. Most tokens could be assumed to be type tokens, but `static`
    // is ambiguous unless we set it explicitly here.
    const memberStartIndex = isStatic
      ? memberStartIndexAfterStatic - 1
      : memberStartIndexAfterStatic;
    for (let i = memberStartIndex; i < modifiersEndIndex; i++) {
      state.tokens[i].isType = true;
    }
    return true;
  }
  return false;
}

// Note: The reason we do this in `parseIdentifierStatement` and not `parseStatement`
// is that e.g. `type()` is valid JS, so we must try parsing that first.
// If it's really a type, we will parse `type` as the statement, and can correct it here
// by parsing the rest.
function tsParseIdentifierStatement(contextualKeyword) {
  const matched = tsParseExpressionStatement(contextualKeyword);
  if (!matched) {
    semicolon();
  }
}

function tsParseExportDeclaration() {
  // "export declare" is equivalent to just "export".
  const isDeclare = eatContextual(ContextualKeyword._declare);
  if (isDeclare) {
    state.tokens[state.tokens.length - 1].type = TokenType._declare;
  }

  let matchedDeclaration = false;
  if (match(TokenType.name)) {
    if (isDeclare) {
      const oldIsType = pushTypeContext(2);
      matchedDeclaration = tsTryParseExportDeclaration();
      popTypeContext(oldIsType);
    } else {
      matchedDeclaration = tsTryParseExportDeclaration();
    }
  }
  if (!matchedDeclaration) {
    if (isDeclare) {
      const oldIsType = pushTypeContext(2);
      parseStatement(true);
      popTypeContext(oldIsType);
    } else {
      parseStatement(true);
    }
  }
}

function tsAfterParseClassSuper(hasSuper) {
  if (hasSuper && (match(TokenType.lessThan) || match(TokenType.bitShiftL))) {
    tsParseTypeArgumentsWithPossibleBitshift();
  }
  if (eatContextual(ContextualKeyword._implements)) {
    state.tokens[state.tokens.length - 1].type = TokenType._implements;
    const oldIsType = pushTypeContext(1);
    tsParseHeritageClause();
    popTypeContext(oldIsType);
  }
}

function tsStartParseObjPropValue() {
  tsTryParseTypeParameters();
}

function tsStartParseFunctionParams() {
  tsTryParseTypeParameters();
}

// `let x: number;`
function tsAfterParseVarHead() {
  const oldIsType = pushTypeContext(0);
  if (!hasPrecedingLineBreak()) {
    eat(TokenType.bang);
  }
  tsTryParseTypeAnnotation();
  popTypeContext(oldIsType);
}

// parse the return type of an async arrow function - let foo = (async (): number => {});
function tsStartParseAsyncArrowFromCallExpression() {
  if (match(TokenType.colon)) {
    tsParseTypeAnnotation();
  }
}

// Returns true if the expression was an arrow function.
function tsParseMaybeAssign(noIn, isWithinParens) {
  // Note: When the JSX plugin is on, type assertions (`<T> x`) aren't valid syntax.
  if (isJSXEnabled) {
    return tsParseMaybeAssignWithJSX(noIn, isWithinParens);
  } else {
    return tsParseMaybeAssignWithoutJSX(noIn, isWithinParens);
  }
}

function tsParseMaybeAssignWithJSX(noIn, isWithinParens) {
  if (!match(TokenType.lessThan)) {
    return baseParseMaybeAssign(noIn, isWithinParens);
  }

  // Prefer to parse JSX if possible. But may be an arrow fn.
  const snapshot = state.snapshot();
  let wasArrow = baseParseMaybeAssign(noIn, isWithinParens);
  if (state.error) {
    state.restoreFromSnapshot(snapshot);
  } else {
    return wasArrow;
  }

  // Otherwise, try as type-parameterized arrow function.
  state.type = TokenType.typeParameterStart;
  // This is similar to TypeScript's `tryParseParenthesizedArrowFunctionExpression`.
  tsParseTypeParameters();
  wasArrow = baseParseMaybeAssign(noIn, isWithinParens);
  if (!wasArrow) {
    unexpected();
  }

  return wasArrow;
}

function tsParseMaybeAssignWithoutJSX(noIn, isWithinParens) {
  if (!match(TokenType.lessThan)) {
    return baseParseMaybeAssign(noIn, isWithinParens);
  }

  const snapshot = state.snapshot();
  // This is similar to TypeScript's `tryParseParenthesizedArrowFunctionExpression`.
  tsParseTypeParameters();
  const wasArrow = baseParseMaybeAssign(noIn, isWithinParens);
  if (!wasArrow) {
    unexpected();
  }
  if (state.error) {
    state.restoreFromSnapshot(snapshot);
  } else {
    return wasArrow;
  }

  // Try parsing a type cast instead of an arrow function.
  // This will start with a type assertion (via parseMaybeUnary).
  // But don't directly call `tsParseTypeAssertion` because we want to handle any binary after it.
  return baseParseMaybeAssign(noIn, isWithinParens);
}

function tsParseArrow() {
  if (match(TokenType.colon)) {
    // This is different from how the TS parser does it.
    // TS uses lookahead. Babylon parses it as a parenthesized expression and converts.
    const snapshot = state.snapshot();

    tsParseTypeOrTypePredicateAnnotation(TokenType.colon);
    if (canInsertSemicolon()) unexpected();
    if (!match(TokenType.arrow)) unexpected();

    if (state.error) {
      state.restoreFromSnapshot(snapshot);
    }
  }
  return eat(TokenType.arrow);
}

// Allow type annotations inside of a parameter list.
function tsParseAssignableListItemTypes() {
  const oldIsType = pushTypeContext(0);
  eat(TokenType.question);
  tsTryParseTypeAnnotation();
  popTypeContext(oldIsType);
}

function tsParseMaybeDecoratorArguments() {
  if (match(TokenType.lessThan) || match(TokenType.bitShiftL)) {
    tsParseTypeArgumentsWithPossibleBitshift();
  }
  baseParseMaybeDecoratorArguments();
}

;// ./node_modules/sucrase/dist/esm/parser/plugins/jsx/index.js









/**
 * Read token with JSX contents.
 *
 * In addition to detecting jsxTagStart and also regular tokens that might be
 * part of an expression, this code detects the start and end of text ranges
 * within JSX children. In order to properly count the number of children, we
 * distinguish jsxText from jsxEmptyText, which is a text range that simplifies
 * to the empty string after JSX whitespace trimming.
 *
 * It turns out that a JSX text range will simplify to the empty string if and
 * only if both of these conditions hold:
 * - The range consists entirely of whitespace characters (only counting space,
 *   tab, \r, and \n).
 * - The range has at least one newline.
 * This can be proven by analyzing any implementation of whitespace trimming,
 * e.g. formatJSXTextLiteral in Sucrase or cleanJSXElementLiteralChild in Babel.
 */
function jsxReadToken() {
  let sawNewline = false;
  let sawNonWhitespace = false;
  while (true) {
    if (state.pos >= input.length) {
      unexpected("Unterminated JSX contents");
      return;
    }

    const ch = input.charCodeAt(state.pos);
    if (ch === charCodes.lessThan || ch === charCodes.leftCurlyBrace) {
      if (state.pos === state.start) {
        if (ch === charCodes.lessThan) {
          state.pos++;
          finishToken(TokenType.jsxTagStart);
          return;
        }
        getTokenFromCode(ch);
        return;
      }
      if (sawNewline && !sawNonWhitespace) {
        finishToken(TokenType.jsxEmptyText);
      } else {
        finishToken(TokenType.jsxText);
      }
      return;
    }

    // This is part of JSX text.
    if (ch === charCodes.lineFeed) {
      sawNewline = true;
    } else if (ch !== charCodes.space && ch !== charCodes.carriageReturn && ch !== charCodes.tab) {
      sawNonWhitespace = true;
    }
    state.pos++;
  }
}

function jsxReadString(quote) {
  state.pos++;
  for (;;) {
    if (state.pos >= input.length) {
      unexpected("Unterminated string constant");
      return;
    }

    const ch = input.charCodeAt(state.pos);
    if (ch === quote) {
      state.pos++;
      break;
    }
    state.pos++;
  }
  finishToken(TokenType.string);
}

// Read a JSX identifier (valid tag or attribute name).
//
// Optimized version since JSX identifiers can't contain
// escape characters and so can be read as single slice.
// Also assumes that first character was already checked
// by isIdentifierStart in readToken.

function jsxReadWord() {
  let ch;
  do {
    if (state.pos > input.length) {
      unexpected("Unexpectedly reached the end of input.");
      return;
    }
    ch = input.charCodeAt(++state.pos);
  } while (IS_IDENTIFIER_CHAR[ch] || ch === charCodes.dash);
  finishToken(TokenType.jsxName);
}

// Parse next token as JSX identifier
function jsxParseIdentifier() {
  nextJSXTagToken();
}

// Parse namespaced identifier.
function jsxParseNamespacedName(identifierRole) {
  jsxParseIdentifier();
  if (!eat(TokenType.colon)) {
    // Plain identifier, so this is an access.
    state.tokens[state.tokens.length - 1].identifierRole = identifierRole;
    return;
  }
  // Process the second half of the namespaced name.
  jsxParseIdentifier();
}

// Parses element name in any form - namespaced, member
// or single identifier.
function jsxParseElementName() {
  const firstTokenIndex = state.tokens.length;
  jsxParseNamespacedName(IdentifierRole.Access);
  let hadDot = false;
  while (match(TokenType.dot)) {
    hadDot = true;
    nextJSXTagToken();
    jsxParseIdentifier();
  }
  // For tags like <div> with a lowercase letter and no dots, the name is
  // actually *not* an identifier access, since it's referring to a built-in
  // tag name. Remove the identifier role in this case so that it's not
  // accidentally transformed by the imports transform when preserving JSX.
  if (!hadDot) {
    const firstToken = state.tokens[firstTokenIndex];
    const firstChar = input.charCodeAt(firstToken.start);
    if (firstChar >= charCodes.lowercaseA && firstChar <= charCodes.lowercaseZ) {
      firstToken.identifierRole = null;
    }
  }
}

// Parses any type of JSX attribute value.
function jsxParseAttributeValue() {
  switch (state.type) {
    case TokenType.braceL:
      next();
      parseExpression();
      nextJSXTagToken();
      return;

    case TokenType.jsxTagStart:
      jsxParseElement();
      nextJSXTagToken();
      return;

    case TokenType.string:
      nextJSXTagToken();
      return;

    default:
      unexpected("JSX value should be either an expression or a quoted JSX text");
  }
}

// Parse JSX spread child, after already processing the {
// Does not parse the closing }
function jsxParseSpreadChild() {
  expect(TokenType.ellipsis);
  parseExpression();
}

// Parses JSX opening tag starting after "<".
// Returns true if the tag was self-closing.
// Does not parse the last token.
function jsxParseOpeningElement(initialTokenIndex) {
  if (match(TokenType.jsxTagEnd)) {
    // This is an open-fragment.
    return false;
  }
  jsxParseElementName();
  if (isTypeScriptEnabled) {
    tsTryParseJSXTypeArgument();
  }
  let hasSeenPropSpread = false;
  while (!match(TokenType.slash) && !match(TokenType.jsxTagEnd) && !state.error) {
    if (eat(TokenType.braceL)) {
      hasSeenPropSpread = true;
      expect(TokenType.ellipsis);
      parseMaybeAssign();
      // }
      nextJSXTagToken();
      continue;
    }
    if (
      hasSeenPropSpread &&
      state.end - state.start === 3 &&
      input.charCodeAt(state.start) === charCodes.lowercaseK &&
      input.charCodeAt(state.start + 1) === charCodes.lowercaseE &&
      input.charCodeAt(state.start + 2) === charCodes.lowercaseY
    ) {
      state.tokens[initialTokenIndex].jsxRole = JSXRole.KeyAfterPropSpread;
    }
    jsxParseNamespacedName(IdentifierRole.ObjectKey);
    if (match(TokenType.eq)) {
      nextJSXTagToken();
      jsxParseAttributeValue();
    }
  }
  const isSelfClosing = match(TokenType.slash);
  if (isSelfClosing) {
    // /
    nextJSXTagToken();
  }
  return isSelfClosing;
}

// Parses JSX closing tag starting after "</".
// Does not parse the last token.
function jsxParseClosingElement() {
  if (match(TokenType.jsxTagEnd)) {
    // Fragment syntax, so we immediately have a tag end.
    return;
  }
  jsxParseElementName();
}

// Parses entire JSX element, including its opening tag
// (starting after "<"), attributes, contents and closing tag.
// Does not parse the last token.
function jsxParseElementAt() {
  const initialTokenIndex = state.tokens.length - 1;
  state.tokens[initialTokenIndex].jsxRole = JSXRole.NoChildren;
  let numExplicitChildren = 0;
  const isSelfClosing = jsxParseOpeningElement(initialTokenIndex);
  if (!isSelfClosing) {
    nextJSXExprToken();
    while (true) {
      switch (state.type) {
        case TokenType.jsxTagStart:
          nextJSXTagToken();
          if (match(TokenType.slash)) {
            nextJSXTagToken();
            jsxParseClosingElement();
            // Key after prop spread takes precedence over number of children,
            // since it means we switch to createElement, which doesn't care
            // about number of children.
            if (state.tokens[initialTokenIndex].jsxRole !== JSXRole.KeyAfterPropSpread) {
              if (numExplicitChildren === 1) {
                state.tokens[initialTokenIndex].jsxRole = JSXRole.OneChild;
              } else if (numExplicitChildren > 1) {
                state.tokens[initialTokenIndex].jsxRole = JSXRole.StaticChildren;
              }
            }
            return;
          }
          numExplicitChildren++;
          jsxParseElementAt();
          nextJSXExprToken();
          break;

        case TokenType.jsxText:
          numExplicitChildren++;
          nextJSXExprToken();
          break;

        case TokenType.jsxEmptyText:
          nextJSXExprToken();
          break;

        case TokenType.braceL:
          next();
          if (match(TokenType.ellipsis)) {
            jsxParseSpreadChild();
            nextJSXExprToken();
            // Spread children are a mechanism to explicitly mark children as
            // static, so count it as 2 children to satisfy the "more than one
            // child" condition.
            numExplicitChildren += 2;
          } else {
            // If we see {}, this is an empty pseudo-expression that doesn't
            // count as a child.
            if (!match(TokenType.braceR)) {
              numExplicitChildren++;
              parseExpression();
            }
            nextJSXExprToken();
          }

          break;

        // istanbul ignore next - should never happen
        default:
          unexpected();
          return;
      }
    }
  }
}

// Parses entire JSX element from current position.
// Does not parse the last token.
function jsxParseElement() {
  nextJSXTagToken();
  jsxParseElementAt();
}

// ==================================
// Overrides
// ==================================

function nextJSXTagToken() {
  state.tokens.push(new Token());
  skipSpace();
  state.start = state.pos;
  const code = input.charCodeAt(state.pos);

  if (IS_IDENTIFIER_START[code]) {
    jsxReadWord();
  } else if (code === charCodes.quotationMark || code === charCodes.apostrophe) {
    jsxReadString(code);
  } else {
    // The following tokens are just one character each.
    ++state.pos;
    switch (code) {
      case charCodes.greaterThan:
        finishToken(TokenType.jsxTagEnd);
        break;
      case charCodes.lessThan:
        finishToken(TokenType.jsxTagStart);
        break;
      case charCodes.slash:
        finishToken(TokenType.slash);
        break;
      case charCodes.equalsTo:
        finishToken(TokenType.eq);
        break;
      case charCodes.leftCurlyBrace:
        finishToken(TokenType.braceL);
        break;
      case charCodes.dot:
        finishToken(TokenType.dot);
        break;
      case charCodes.colon:
        finishToken(TokenType.colon);
        break;
      default:
        unexpected();
    }
  }
}

function nextJSXExprToken() {
  state.tokens.push(new Token());
  state.start = state.pos;
  jsxReadToken();
}

;// ./node_modules/sucrase/dist/esm/parser/plugins/types.js







/**
 * Common parser code for TypeScript and Flow.
 */

// An apparent conditional expression could actually be an optional parameter in an arrow function.
function typedParseConditional(noIn) {
  // If we see ?:, this can't possibly be a valid conditional. typedParseParenItem will be called
  // later to finish off the arrow parameter. We also need to handle bare ? tokens for optional
  // parameters without type annotations, i.e. ?, and ?) .
  if (match(TokenType.question)) {
    const nextType = lookaheadType();
    if (nextType === TokenType.colon || nextType === TokenType.comma || nextType === TokenType.parenR) {
      return;
    }
  }
  baseParseConditional(noIn);
}

// Note: These "type casts" are *not* valid TS expressions.
// But we parse them here and change them when completing the arrow function.
function typedParseParenItem() {
  eatTypeToken(TokenType.question);
  if (match(TokenType.colon)) {
    if (isTypeScriptEnabled) {
      tsParseTypeAnnotation();
    } else if (isFlowEnabled) {
      flowParseTypeAnnotation();
    }
  }
}

;// ./node_modules/sucrase/dist/esm/parser/traverser/expression.js
/* eslint max-len: 0 */

// A recursive descent parser operates by defining functions for all
// syntactic elements, and recursively calling those, each function
// advancing the input stream and returning an AST node. Precedence
// of constructs (for example, the fact that `!x[1]` means `!(x[1])`
// instead of `(!x)[1]` is handled by the fact that the parser
// function that parses unary prefix operators is called first, and
// in turn calls the function that parses `[]` subscripts — that
// way, it'll receive the node for `x[1]` already parsed, and wraps
// *that* in the unary operator node.
//
// Acorn uses an [operator precedence parser][opp] to handle binary
// operator precedence, because it is much more compact than using
// the technique outlined above, which uses different, nesting
// functions to specify precedence, for all of the ten binary
// precedence levels that JavaScript defines.
//
// [opp]: http://en.wikipedia.org/wiki/Operator-precedence_parser
















class StopState {
  
  constructor(stop) {
    this.stop = stop;
  }
}

// ### Expression parsing

// These nest, from the most general expression type at the top to
// 'atomic', nondivisible expression types at the bottom. Most of
// the functions will simply let the function (s) below them parse,
// and, *if* the syntactic construct they handle is present, wrap
// the AST node that the inner parser gave them in another node.
function parseExpression(noIn = false) {
  parseMaybeAssign(noIn);
  if (match(TokenType.comma)) {
    while (eat(TokenType.comma)) {
      parseMaybeAssign(noIn);
    }
  }
}

/**
 * noIn is used when parsing a for loop so that we don't interpret a following "in" as the binary
 * operatior.
 * isWithinParens is used to indicate that we're parsing something that might be a comma expression
 * or might be an arrow function or might be a Flow type assertion (which requires explicit parens).
 * In these cases, we should allow : and ?: after the initial "left" part.
 */
function parseMaybeAssign(noIn = false, isWithinParens = false) {
  if (isTypeScriptEnabled) {
    return tsParseMaybeAssign(noIn, isWithinParens);
  } else if (isFlowEnabled) {
    return flowParseMaybeAssign(noIn, isWithinParens);
  } else {
    return baseParseMaybeAssign(noIn, isWithinParens);
  }
}

// Parse an assignment expression. This includes applications of
// operators like `+=`.
// Returns true if the expression was an arrow function.
function baseParseMaybeAssign(noIn, isWithinParens) {
  if (match(TokenType._yield)) {
    parseYield();
    return false;
  }

  if (match(TokenType.parenL) || match(TokenType.name) || match(TokenType._yield)) {
    state.potentialArrowAt = state.start;
  }

  const wasArrow = parseMaybeConditional(noIn);
  if (isWithinParens) {
    parseParenItem();
  }
  if (state.type & TokenType.IS_ASSIGN) {
    next();
    parseMaybeAssign(noIn);
    return false;
  }
  return wasArrow;
}

// Parse a ternary conditional (`?:`) operator.
// Returns true if the expression was an arrow function.
function parseMaybeConditional(noIn) {
  const wasArrow = parseExprOps(noIn);
  if (wasArrow) {
    return true;
  }
  parseConditional(noIn);
  return false;
}

function parseConditional(noIn) {
  if (isTypeScriptEnabled || isFlowEnabled) {
    typedParseConditional(noIn);
  } else {
    baseParseConditional(noIn);
  }
}

function baseParseConditional(noIn) {
  if (eat(TokenType.question)) {
    parseMaybeAssign();
    expect(TokenType.colon);
    parseMaybeAssign(noIn);
  }
}

// Start the precedence parser.
// Returns true if this was an arrow function
function parseExprOps(noIn) {
  const startTokenIndex = state.tokens.length;
  const wasArrow = parseMaybeUnary();
  if (wasArrow) {
    return true;
  }
  parseExprOp(startTokenIndex, -1, noIn);
  return false;
}

// Parse binary operators with the operator precedence parsing
// algorithm. `left` is the left-hand side of the operator.
// `minPrec` provides context that allows the function to stop and
// defer further parser to one of its callers when it encounters an
// operator that has a lower precedence than the set it is parsing.
function parseExprOp(startTokenIndex, minPrec, noIn) {
  if (
    isTypeScriptEnabled &&
    (TokenType._in & TokenType.PRECEDENCE_MASK) > minPrec &&
    !hasPrecedingLineBreak() &&
    (eatContextual(ContextualKeyword._as) || eatContextual(ContextualKeyword._satisfies))
  ) {
    const oldIsType = pushTypeContext(1);
    tsParseType();
    popTypeContext(oldIsType);
    rescan_gt();
    parseExprOp(startTokenIndex, minPrec, noIn);
    return;
  }

  const prec = state.type & TokenType.PRECEDENCE_MASK;
  if (prec > 0 && (!noIn || !match(TokenType._in))) {
    if (prec > minPrec) {
      const op = state.type;
      next();
      if (op === TokenType.nullishCoalescing) {
        state.tokens[state.tokens.length - 1].nullishStartIndex = startTokenIndex;
      }

      const rhsStartTokenIndex = state.tokens.length;
      parseMaybeUnary();
      // Extend the right operand of this operator if possible.
      parseExprOp(rhsStartTokenIndex, op & TokenType.IS_RIGHT_ASSOCIATIVE ? prec - 1 : prec, noIn);
      if (op === TokenType.nullishCoalescing) {
        state.tokens[startTokenIndex].numNullishCoalesceStarts++;
        state.tokens[state.tokens.length - 1].numNullishCoalesceEnds++;
      }
      // Continue with any future operator holding this expression as the left operand.
      parseExprOp(startTokenIndex, minPrec, noIn);
    }
  }
}

// Parse unary operators, both prefix and postfix.
// Returns true if this was an arrow function.
function parseMaybeUnary() {
  if (isTypeScriptEnabled && !isJSXEnabled && eat(TokenType.lessThan)) {
    tsParseTypeAssertion();
    return false;
  }
  if (
    isContextual(ContextualKeyword._module) &&
    lookaheadCharCode() === charCodes.leftCurlyBrace &&
    !hasFollowingLineBreak()
  ) {
    parseModuleExpression();
    return false;
  }
  if (state.type & TokenType.IS_PREFIX) {
    next();
    parseMaybeUnary();
    return false;
  }

  const wasArrow = parseExprSubscripts();
  if (wasArrow) {
    return true;
  }
  while (state.type & TokenType.IS_POSTFIX && !canInsertSemicolon()) {
    // The tokenizer calls everything a preincrement, so make it a postincrement when
    // we see it in that context.
    if (state.type === TokenType.preIncDec) {
      state.type = TokenType.postIncDec;
    }
    next();
  }
  return false;
}

// Parse call, dot, and `[]`-subscript expressions.
// Returns true if this was an arrow function.
function parseExprSubscripts() {
  const startTokenIndex = state.tokens.length;
  const wasArrow = parseExprAtom();
  if (wasArrow) {
    return true;
  }
  parseSubscripts(startTokenIndex);
  // If there was any optional chain operation, the start token would be marked
  // as such, so also mark the end now.
  if (state.tokens.length > startTokenIndex && state.tokens[startTokenIndex].isOptionalChainStart) {
    state.tokens[state.tokens.length - 1].isOptionalChainEnd = true;
  }
  return false;
}

function parseSubscripts(startTokenIndex, noCalls = false) {
  if (isFlowEnabled) {
    flowParseSubscripts(startTokenIndex, noCalls);
  } else {
    baseParseSubscripts(startTokenIndex, noCalls);
  }
}

function baseParseSubscripts(startTokenIndex, noCalls = false) {
  const stopState = new StopState(false);
  do {
    parseSubscript(startTokenIndex, noCalls, stopState);
  } while (!stopState.stop && !state.error);
}

function parseSubscript(startTokenIndex, noCalls, stopState) {
  if (isTypeScriptEnabled) {
    tsParseSubscript(startTokenIndex, noCalls, stopState);
  } else if (isFlowEnabled) {
    flowParseSubscript(startTokenIndex, noCalls, stopState);
  } else {
    baseParseSubscript(startTokenIndex, noCalls, stopState);
  }
}

/** Set 'state.stop = true' to indicate that we should stop parsing subscripts. */
function baseParseSubscript(
  startTokenIndex,
  noCalls,
  stopState,
) {
  if (!noCalls && eat(TokenType.doubleColon)) {
    parseNoCallExpr();
    stopState.stop = true;
    // Propagate startTokenIndex so that `a::b?.()` will keep `a` as the first token. We may want
    // to revisit this in the future when fully supporting bind syntax.
    parseSubscripts(startTokenIndex, noCalls);
  } else if (match(TokenType.questionDot)) {
    state.tokens[startTokenIndex].isOptionalChainStart = true;
    if (noCalls && lookaheadType() === TokenType.parenL) {
      stopState.stop = true;
      return;
    }
    next();
    state.tokens[state.tokens.length - 1].subscriptStartIndex = startTokenIndex;

    if (eat(TokenType.bracketL)) {
      parseExpression();
      expect(TokenType.bracketR);
    } else if (eat(TokenType.parenL)) {
      parseCallExpressionArguments();
    } else {
      parseMaybePrivateName();
    }
  } else if (eat(TokenType.dot)) {
    state.tokens[state.tokens.length - 1].subscriptStartIndex = startTokenIndex;
    parseMaybePrivateName();
  } else if (eat(TokenType.bracketL)) {
    state.tokens[state.tokens.length - 1].subscriptStartIndex = startTokenIndex;
    parseExpression();
    expect(TokenType.bracketR);
  } else if (!noCalls && match(TokenType.parenL)) {
    if (atPossibleAsync()) {
      // We see "async", but it's possible it's a usage of the name "async". Parse as if it's a
      // function call, and if we see an arrow later, backtrack and re-parse as a parameter list.
      const snapshot = state.snapshot();
      const asyncStartTokenIndex = state.tokens.length;
      next();
      state.tokens[state.tokens.length - 1].subscriptStartIndex = startTokenIndex;

      const callContextId = getNextContextId();

      state.tokens[state.tokens.length - 1].contextId = callContextId;
      parseCallExpressionArguments();
      state.tokens[state.tokens.length - 1].contextId = callContextId;

      if (shouldParseAsyncArrow()) {
        // We hit an arrow, so backtrack and start again parsing function parameters.
        state.restoreFromSnapshot(snapshot);
        stopState.stop = true;
        state.scopeDepth++;

        parseFunctionParams();
        parseAsyncArrowFromCallExpression(asyncStartTokenIndex);
      }
    } else {
      next();
      state.tokens[state.tokens.length - 1].subscriptStartIndex = startTokenIndex;
      const callContextId = getNextContextId();
      state.tokens[state.tokens.length - 1].contextId = callContextId;
      parseCallExpressionArguments();
      state.tokens[state.tokens.length - 1].contextId = callContextId;
    }
  } else if (match(TokenType.backQuote)) {
    // Tagged template expression.
    parseTemplate();
  } else {
    stopState.stop = true;
  }
}

function atPossibleAsync() {
  // This was made less strict than the original version to avoid passing around nodes, but it
  // should be safe to have rare false positives here.
  return (
    state.tokens[state.tokens.length - 1].contextualKeyword === ContextualKeyword._async &&
    !canInsertSemicolon()
  );
}

function parseCallExpressionArguments() {
  let first = true;
  while (!eat(TokenType.parenR) && !state.error) {
    if (first) {
      first = false;
    } else {
      expect(TokenType.comma);
      if (eat(TokenType.parenR)) {
        break;
      }
    }

    parseExprListItem(false);
  }
}

function shouldParseAsyncArrow() {
  return match(TokenType.colon) || match(TokenType.arrow);
}

function parseAsyncArrowFromCallExpression(startTokenIndex) {
  if (isTypeScriptEnabled) {
    tsStartParseAsyncArrowFromCallExpression();
  } else if (isFlowEnabled) {
    flowStartParseAsyncArrowFromCallExpression();
  }
  expect(TokenType.arrow);
  parseArrowExpression(startTokenIndex);
}

// Parse a no-call expression (like argument of `new` or `::` operators).

function parseNoCallExpr() {
  const startTokenIndex = state.tokens.length;
  parseExprAtom();
  parseSubscripts(startTokenIndex, true);
}

// Parse an atomic expression — either a single token that is an
// expression, an expression started by a keyword like `function` or
// `new`, or an expression wrapped in punctuation like `()`, `[]`,
// or `{}`.
// Returns true if the parsed expression was an arrow function.
function parseExprAtom() {
  if (eat(TokenType.modulo)) {
    // V8 intrinsic expression. Just parse the identifier, and the function invocation is parsed
    // naturally.
    parseIdentifier();
    return false;
  }

  if (match(TokenType.jsxText) || match(TokenType.jsxEmptyText)) {
    parseLiteral();
    return false;
  } else if (match(TokenType.lessThan) && isJSXEnabled) {
    state.type = TokenType.jsxTagStart;
    jsxParseElement();
    next();
    return false;
  }

  const canBeArrow = state.potentialArrowAt === state.start;
  switch (state.type) {
    case TokenType.slash:
    case TokenType.assign:
      retokenizeSlashAsRegex();
    // Fall through.

    case TokenType._super:
    case TokenType._this:
    case TokenType.regexp:
    case TokenType.num:
    case TokenType.bigint:
    case TokenType.decimal:
    case TokenType.string:
    case TokenType._null:
    case TokenType._true:
    case TokenType._false:
      next();
      return false;

    case TokenType._import:
      next();
      if (match(TokenType.dot)) {
        // import.meta
        state.tokens[state.tokens.length - 1].type = TokenType.name;
        next();
        parseIdentifier();
      }
      return false;

    case TokenType.name: {
      const startTokenIndex = state.tokens.length;
      const functionStart = state.start;
      const contextualKeyword = state.contextualKeyword;
      parseIdentifier();
      if (contextualKeyword === ContextualKeyword._await) {
        parseAwait();
        return false;
      } else if (
        contextualKeyword === ContextualKeyword._async &&
        match(TokenType._function) &&
        !canInsertSemicolon()
      ) {
        next();
        parseFunction(functionStart, false);
        return false;
      } else if (
        canBeArrow &&
        contextualKeyword === ContextualKeyword._async &&
        !canInsertSemicolon() &&
        match(TokenType.name)
      ) {
        state.scopeDepth++;
        parseBindingIdentifier(false);
        expect(TokenType.arrow);
        // let foo = async bar => {};
        parseArrowExpression(startTokenIndex);
        return true;
      } else if (match(TokenType._do) && !canInsertSemicolon()) {
        next();
        parseBlock();
        return false;
      }

      if (canBeArrow && !canInsertSemicolon() && match(TokenType.arrow)) {
        state.scopeDepth++;
        markPriorBindingIdentifier(false);
        expect(TokenType.arrow);
        parseArrowExpression(startTokenIndex);
        return true;
      }

      state.tokens[state.tokens.length - 1].identifierRole = IdentifierRole.Access;
      return false;
    }

    case TokenType._do: {
      next();
      parseBlock();
      return false;
    }

    case TokenType.parenL: {
      const wasArrow = parseParenAndDistinguishExpression(canBeArrow);
      return wasArrow;
    }

    case TokenType.bracketL:
      next();
      parseExprList(TokenType.bracketR, true);
      return false;

    case TokenType.braceL:
      parseObj(false, false);
      return false;

    case TokenType._function:
      parseFunctionExpression();
      return false;

    case TokenType.at:
      parseDecorators();
    // Fall through.

    case TokenType._class:
      parseClass(false);
      return false;

    case TokenType._new:
      parseNew();
      return false;

    case TokenType.backQuote:
      parseTemplate();
      return false;

    case TokenType.doubleColon: {
      next();
      parseNoCallExpr();
      return false;
    }

    case TokenType.hash: {
      const code = lookaheadCharCode();
      if (IS_IDENTIFIER_START[code] || code === charCodes.backslash) {
        parseMaybePrivateName();
      } else {
        next();
      }
      // Smart pipeline topic reference.
      return false;
    }

    default:
      unexpected();
      return false;
  }
}

function parseMaybePrivateName() {
  eat(TokenType.hash);
  parseIdentifier();
}

function parseFunctionExpression() {
  const functionStart = state.start;
  parseIdentifier();
  if (eat(TokenType.dot)) {
    // function.sent
    parseIdentifier();
  }
  parseFunction(functionStart, false);
}

function parseLiteral() {
  next();
}

function parseParenExpression() {
  expect(TokenType.parenL);
  parseExpression();
  expect(TokenType.parenR);
}

// Returns true if this was an arrow expression.
function parseParenAndDistinguishExpression(canBeArrow) {
  // Assume this is a normal parenthesized expression, but if we see an arrow, we'll bail and
  // start over as a parameter list.
  const snapshot = state.snapshot();

  const startTokenIndex = state.tokens.length;
  expect(TokenType.parenL);

  let first = true;

  while (!match(TokenType.parenR) && !state.error) {
    if (first) {
      first = false;
    } else {
      expect(TokenType.comma);
      if (match(TokenType.parenR)) {
        break;
      }
    }

    if (match(TokenType.ellipsis)) {
      parseRest(false /* isBlockScope */);
      parseParenItem();
      break;
    } else {
      parseMaybeAssign(false, true);
    }
  }

  expect(TokenType.parenR);

  if (canBeArrow && shouldParseArrow()) {
    const wasArrow = parseArrow();
    if (wasArrow) {
      // It was an arrow function this whole time, so start over and parse it as params so that we
      // get proper token annotations.
      state.restoreFromSnapshot(snapshot);
      state.scopeDepth++;
      // Don't specify a context ID because arrow functions don't need a context ID.
      parseFunctionParams();
      parseArrow();
      parseArrowExpression(startTokenIndex);
      if (state.error) {
        // Nevermind! This must have been something that looks very much like an
        // arrow function but where its "parameter list" isn't actually a valid
        // parameter list. Force non-arrow parsing.
        // See https://github.com/alangpierce/sucrase/issues/666 for an example.
        state.restoreFromSnapshot(snapshot);
        parseParenAndDistinguishExpression(false);
        return false;
      }
      return true;
    }
  }

  return false;
}

function shouldParseArrow() {
  return match(TokenType.colon) || !canInsertSemicolon();
}

// Returns whether there was an arrow token.
function parseArrow() {
  if (isTypeScriptEnabled) {
    return tsParseArrow();
  } else if (isFlowEnabled) {
    return flowParseArrow();
  } else {
    return eat(TokenType.arrow);
  }
}

function parseParenItem() {
  if (isTypeScriptEnabled || isFlowEnabled) {
    typedParseParenItem();
  }
}

// New's precedence is slightly tricky. It must allow its argument to
// be a `[]` or dot subscript expression, but not a call — at least,
// not without wrapping it in parentheses. Thus, it uses the noCalls
// argument to parseSubscripts to prevent it from consuming the
// argument list.
function parseNew() {
  expect(TokenType._new);
  if (eat(TokenType.dot)) {
    // new.target
    parseIdentifier();
    return;
  }
  parseNewCallee();
  if (isFlowEnabled) {
    flowStartParseNewArguments();
  }
  if (eat(TokenType.parenL)) {
    parseExprList(TokenType.parenR);
  }
}

function parseNewCallee() {
  parseNoCallExpr();
  eat(TokenType.questionDot);
}

function parseTemplate() {
  // Finish `, read quasi
  nextTemplateToken();
  // Finish quasi, read ${
  nextTemplateToken();
  while (!match(TokenType.backQuote) && !state.error) {
    expect(TokenType.dollarBraceL);
    parseExpression();
    // Finish }, read quasi
    nextTemplateToken();
    // Finish quasi, read either ${ or `
    nextTemplateToken();
  }
  next();
}

// Parse an object literal or binding pattern.
function parseObj(isPattern, isBlockScope) {
  // Attach a context ID to the object open and close brace and each object key.
  const contextId = getNextContextId();
  let first = true;

  next();
  state.tokens[state.tokens.length - 1].contextId = contextId;

  while (!eat(TokenType.braceR) && !state.error) {
    if (first) {
      first = false;
    } else {
      expect(TokenType.comma);
      if (eat(TokenType.braceR)) {
        break;
      }
    }

    let isGenerator = false;
    if (match(TokenType.ellipsis)) {
      const previousIndex = state.tokens.length;
      parseSpread();
      if (isPattern) {
        // Mark role when the only thing being spread over is an identifier.
        if (state.tokens.length === previousIndex + 2) {
          markPriorBindingIdentifier(isBlockScope);
        }
        if (eat(TokenType.braceR)) {
          break;
        }
      }
      continue;
    }

    if (!isPattern) {
      isGenerator = eat(TokenType.star);
    }

    if (!isPattern && isContextual(ContextualKeyword._async)) {
      if (isGenerator) unexpected();

      parseIdentifier();
      if (
        match(TokenType.colon) ||
        match(TokenType.parenL) ||
        match(TokenType.braceR) ||
        match(TokenType.eq) ||
        match(TokenType.comma)
      ) {
        // This is a key called "async" rather than an async function.
      } else {
        if (match(TokenType.star)) {
          next();
          isGenerator = true;
        }
        parsePropertyName(contextId);
      }
    } else {
      parsePropertyName(contextId);
    }

    parseObjPropValue(isPattern, isBlockScope, contextId);
  }

  state.tokens[state.tokens.length - 1].contextId = contextId;
}

function isGetterOrSetterMethod(isPattern) {
  // We go off of the next and don't bother checking if the node key is actually "get" or "set".
  // This lets us avoid generating a node, and should only make the validation worse.
  return (
    !isPattern &&
    (match(TokenType.string) || // get "string"() {}
      match(TokenType.num) || // get 1() {}
      match(TokenType.bracketL) || // get ["string"]() {}
      match(TokenType.name) || // get foo() {}
      !!(state.type & TokenType.IS_KEYWORD)) // get debugger() {}
  );
}

// Returns true if this was a method.
function parseObjectMethod(isPattern, objectContextId) {
  // We don't need to worry about modifiers because object methods can't have optional bodies, so
  // the start will never be used.
  const functionStart = state.start;
  if (match(TokenType.parenL)) {
    if (isPattern) unexpected();
    parseMethod(functionStart, /* isConstructor */ false);
    return true;
  }

  if (isGetterOrSetterMethod(isPattern)) {
    parsePropertyName(objectContextId);
    parseMethod(functionStart, /* isConstructor */ false);
    return true;
  }
  return false;
}

function parseObjectProperty(isPattern, isBlockScope) {
  if (eat(TokenType.colon)) {
    if (isPattern) {
      parseMaybeDefault(isBlockScope);
    } else {
      parseMaybeAssign(false);
    }
    return;
  }

  // Since there's no colon, we assume this is an object shorthand.

  // If we're in a destructuring, we've now discovered that the key was actually an assignee, so
  // we need to tag it as a declaration with the appropriate scope. Otherwise, we might need to
  // transform it on access, so mark it as a normal object shorthand.
  let identifierRole;
  if (isPattern) {
    if (state.scopeDepth === 0) {
      identifierRole = IdentifierRole.ObjectShorthandTopLevelDeclaration;
    } else if (isBlockScope) {
      identifierRole = IdentifierRole.ObjectShorthandBlockScopedDeclaration;
    } else {
      identifierRole = IdentifierRole.ObjectShorthandFunctionScopedDeclaration;
    }
  } else {
    identifierRole = IdentifierRole.ObjectShorthand;
  }
  state.tokens[state.tokens.length - 1].identifierRole = identifierRole;

  // Regardless of whether we know this to be a pattern or if we're in an ambiguous context, allow
  // parsing as if there's a default value.
  parseMaybeDefault(isBlockScope, true);
}

function parseObjPropValue(
  isPattern,
  isBlockScope,
  objectContextId,
) {
  if (isTypeScriptEnabled) {
    tsStartParseObjPropValue();
  } else if (isFlowEnabled) {
    flowStartParseObjPropValue();
  }
  const wasMethod = parseObjectMethod(isPattern, objectContextId);
  if (!wasMethod) {
    parseObjectProperty(isPattern, isBlockScope);
  }
}

function parsePropertyName(objectContextId) {
  if (isFlowEnabled) {
    flowParseVariance();
  }
  if (eat(TokenType.bracketL)) {
    state.tokens[state.tokens.length - 1].contextId = objectContextId;
    parseMaybeAssign();
    expect(TokenType.bracketR);
    state.tokens[state.tokens.length - 1].contextId = objectContextId;
  } else {
    if (match(TokenType.num) || match(TokenType.string) || match(TokenType.bigint) || match(TokenType.decimal)) {
      parseExprAtom();
    } else {
      parseMaybePrivateName();
    }

    state.tokens[state.tokens.length - 1].identifierRole = IdentifierRole.ObjectKey;
    state.tokens[state.tokens.length - 1].contextId = objectContextId;
  }
}

// Parse object or class method.
function parseMethod(functionStart, isConstructor) {
  const funcContextId = getNextContextId();

  state.scopeDepth++;
  const startTokenIndex = state.tokens.length;
  const allowModifiers = isConstructor; // For TypeScript parameter properties
  parseFunctionParams(allowModifiers, funcContextId);
  parseFunctionBodyAndFinish(functionStart, funcContextId);
  const endTokenIndex = state.tokens.length;
  state.scopes.push(new Scope(startTokenIndex, endTokenIndex, true));
  state.scopeDepth--;
}

// Parse arrow function expression.
// If the parameters are provided, they will be converted to an
// assignable list.
function parseArrowExpression(startTokenIndex) {
  parseFunctionBody(true);
  const endTokenIndex = state.tokens.length;
  state.scopes.push(new Scope(startTokenIndex, endTokenIndex, true));
  state.scopeDepth--;
}

function parseFunctionBodyAndFinish(functionStart, funcContextId = 0) {
  if (isTypeScriptEnabled) {
    tsParseFunctionBodyAndFinish(functionStart, funcContextId);
  } else if (isFlowEnabled) {
    flowParseFunctionBodyAndFinish(funcContextId);
  } else {
    parseFunctionBody(false, funcContextId);
  }
}

function parseFunctionBody(allowExpression, funcContextId = 0) {
  const isExpression = allowExpression && !match(TokenType.braceL);

  if (isExpression) {
    parseMaybeAssign();
  } else {
    parseBlock(true /* isFunctionScope */, funcContextId);
  }
}

// Parses a comma-separated list of expressions, and returns them as
// an array. `close` is the token type that ends the list, and
// `allowEmpty` can be turned on to allow subsequent commas with
// nothing in between them to be parsed as `null` (which is needed
// for array literals).

function parseExprList(close, allowEmpty = false) {
  let first = true;
  while (!eat(close) && !state.error) {
    if (first) {
      first = false;
    } else {
      expect(TokenType.comma);
      if (eat(close)) break;
    }
    parseExprListItem(allowEmpty);
  }
}

function parseExprListItem(allowEmpty) {
  if (allowEmpty && match(TokenType.comma)) {
    // Empty item; nothing more to parse for this item.
  } else if (match(TokenType.ellipsis)) {
    parseSpread();
    parseParenItem();
  } else if (match(TokenType.question)) {
    // Partial function application proposal.
    next();
  } else {
    parseMaybeAssign(false, true);
  }
}

// Parse the next token as an identifier.
function parseIdentifier() {
  next();
  state.tokens[state.tokens.length - 1].type = TokenType.name;
}

// Parses await expression inside async function.
function parseAwait() {
  parseMaybeUnary();
}

// Parses yield expression inside generator.
function parseYield() {
  next();
  if (!match(TokenType.semi) && !canInsertSemicolon()) {
    eat(TokenType.star);
    parseMaybeAssign();
  }
}

// https://github.com/tc39/proposal-js-module-blocks
function parseModuleExpression() {
  expectContextual(ContextualKeyword._module);
  expect(TokenType.braceL);
  // For now, just call parseBlockBody to parse the block. In the future when we
  // implement full support, we'll want to emit scopes and possibly other
  // information.
  parseBlockBody(TokenType.braceR);
}

;// ./node_modules/sucrase/dist/esm/parser/plugins/flow.js
/* eslint max-len: 0 */









function isMaybeDefaultImport(lookahead) {
  return (
    (lookahead.type === TokenType.name || !!(lookahead.type & TokenType.IS_KEYWORD)) &&
    lookahead.contextualKeyword !== ContextualKeyword._from
  );
}

function flowParseTypeInitialiser(tok) {
  const oldIsType = pushTypeContext(0);
  expect(tok || TokenType.colon);
  flowParseType();
  popTypeContext(oldIsType);
}

function flowParsePredicate() {
  expect(TokenType.modulo);
  expectContextual(ContextualKeyword._checks);
  if (eat(TokenType.parenL)) {
    parseExpression();
    expect(TokenType.parenR);
  }
}

function flowParseTypeAndPredicateInitialiser() {
  const oldIsType = pushTypeContext(0);
  expect(TokenType.colon);
  if (match(TokenType.modulo)) {
    flowParsePredicate();
  } else {
    flowParseType();
    if (match(TokenType.modulo)) {
      flowParsePredicate();
    }
  }
  popTypeContext(oldIsType);
}

function flowParseDeclareClass() {
  next();
  flowParseInterfaceish(/* isClass */ true);
}

function flowParseDeclareFunction() {
  next();
  parseIdentifier();

  if (match(TokenType.lessThan)) {
    flowParseTypeParameterDeclaration();
  }

  expect(TokenType.parenL);
  flowParseFunctionTypeParams();
  expect(TokenType.parenR);

  flowParseTypeAndPredicateInitialiser();

  semicolon();
}

function flowParseDeclare() {
  if (match(TokenType._class)) {
    flowParseDeclareClass();
  } else if (match(TokenType._function)) {
    flowParseDeclareFunction();
  } else if (match(TokenType._var)) {
    flowParseDeclareVariable();
  } else if (eatContextual(ContextualKeyword._module)) {
    if (eat(TokenType.dot)) {
      flowParseDeclareModuleExports();
    } else {
      flowParseDeclareModule();
    }
  } else if (isContextual(ContextualKeyword._type)) {
    flowParseDeclareTypeAlias();
  } else if (isContextual(ContextualKeyword._opaque)) {
    flowParseDeclareOpaqueType();
  } else if (isContextual(ContextualKeyword._interface)) {
    flowParseDeclareInterface();
  } else if (match(TokenType._export)) {
    flowParseDeclareExportDeclaration();
  } else {
    unexpected();
  }
}

function flowParseDeclareVariable() {
  next();
  flowParseTypeAnnotatableIdentifier();
  semicolon();
}

function flowParseDeclareModule() {
  if (match(TokenType.string)) {
    parseExprAtom();
  } else {
    parseIdentifier();
  }

  expect(TokenType.braceL);
  while (!match(TokenType.braceR) && !state.error) {
    if (match(TokenType._import)) {
      next();
      parseImport();
    } else {
      unexpected();
    }
  }
  expect(TokenType.braceR);
}

function flowParseDeclareExportDeclaration() {
  expect(TokenType._export);

  if (eat(TokenType._default)) {
    if (match(TokenType._function) || match(TokenType._class)) {
      // declare export default class ...
      // declare export default function ...
      flowParseDeclare();
    } else {
      // declare export default [type];
      flowParseType();
      semicolon();
    }
  } else if (
    match(TokenType._var) || // declare export var ...
    match(TokenType._function) || // declare export function ...
    match(TokenType._class) || // declare export class ...
    isContextual(ContextualKeyword._opaque) // declare export opaque ..
  ) {
    flowParseDeclare();
  } else if (
    match(TokenType.star) || // declare export * from ''
    match(TokenType.braceL) || // declare export {} ...
    isContextual(ContextualKeyword._interface) || // declare export interface ...
    isContextual(ContextualKeyword._type) || // declare export type ...
    isContextual(ContextualKeyword._opaque) // declare export opaque type ...
  ) {
    parseExport();
  } else {
    unexpected();
  }
}

function flowParseDeclareModuleExports() {
  expectContextual(ContextualKeyword._exports);
  flowParseTypeAnnotation();
  semicolon();
}

function flowParseDeclareTypeAlias() {
  next();
  flowParseTypeAlias();
}

function flowParseDeclareOpaqueType() {
  next();
  flowParseOpaqueType(true);
}

function flowParseDeclareInterface() {
  next();
  flowParseInterfaceish();
}

// Interfaces

function flowParseInterfaceish(isClass = false) {
  flowParseRestrictedIdentifier();

  if (match(TokenType.lessThan)) {
    flowParseTypeParameterDeclaration();
  }

  if (eat(TokenType._extends)) {
    do {
      flowParseInterfaceExtends();
    } while (!isClass && eat(TokenType.comma));
  }

  if (isContextual(ContextualKeyword._mixins)) {
    next();
    do {
      flowParseInterfaceExtends();
    } while (eat(TokenType.comma));
  }

  if (isContextual(ContextualKeyword._implements)) {
    next();
    do {
      flowParseInterfaceExtends();
    } while (eat(TokenType.comma));
  }

  flowParseObjectType(isClass, false, isClass);
}

function flowParseInterfaceExtends() {
  flowParseQualifiedTypeIdentifier(false);
  if (match(TokenType.lessThan)) {
    flowParseTypeParameterInstantiation();
  }
}

function flowParseInterface() {
  flowParseInterfaceish();
}

function flowParseRestrictedIdentifier() {
  parseIdentifier();
}

function flowParseTypeAlias() {
  flowParseRestrictedIdentifier();

  if (match(TokenType.lessThan)) {
    flowParseTypeParameterDeclaration();
  }

  flowParseTypeInitialiser(TokenType.eq);
  semicolon();
}

function flowParseOpaqueType(declare) {
  expectContextual(ContextualKeyword._type);
  flowParseRestrictedIdentifier();

  if (match(TokenType.lessThan)) {
    flowParseTypeParameterDeclaration();
  }

  // Parse the supertype
  if (match(TokenType.colon)) {
    flowParseTypeInitialiser(TokenType.colon);
  }

  if (!declare) {
    flowParseTypeInitialiser(TokenType.eq);
  }
  semicolon();
}

function flowParseTypeParameter() {
  flowParseVariance();
  flowParseTypeAnnotatableIdentifier();

  if (eat(TokenType.eq)) {
    flowParseType();
  }
}

function flowParseTypeParameterDeclaration() {
  const oldIsType = pushTypeContext(0);
  // istanbul ignore else: this condition is already checked at all call sites
  if (match(TokenType.lessThan) || match(TokenType.typeParameterStart)) {
    next();
  } else {
    unexpected();
  }

  do {
    flowParseTypeParameter();
    if (!match(TokenType.greaterThan)) {
      expect(TokenType.comma);
    }
  } while (!match(TokenType.greaterThan) && !state.error);
  expect(TokenType.greaterThan);
  popTypeContext(oldIsType);
}

function flowParseTypeParameterInstantiation() {
  const oldIsType = pushTypeContext(0);
  expect(TokenType.lessThan);
  while (!match(TokenType.greaterThan) && !state.error) {
    flowParseType();
    if (!match(TokenType.greaterThan)) {
      expect(TokenType.comma);
    }
  }
  expect(TokenType.greaterThan);
  popTypeContext(oldIsType);
}

function flowParseInterfaceType() {
  expectContextual(ContextualKeyword._interface);
  if (eat(TokenType._extends)) {
    do {
      flowParseInterfaceExtends();
    } while (eat(TokenType.comma));
  }
  flowParseObjectType(false, false, false);
}

function flowParseObjectPropertyKey() {
  if (match(TokenType.num) || match(TokenType.string)) {
    parseExprAtom();
  } else {
    parseIdentifier();
  }
}

function flowParseObjectTypeIndexer() {
  // Note: bracketL has already been consumed
  if (lookaheadType() === TokenType.colon) {
    flowParseObjectPropertyKey();
    flowParseTypeInitialiser();
  } else {
    flowParseType();
  }
  expect(TokenType.bracketR);
  flowParseTypeInitialiser();
}

function flowParseObjectTypeInternalSlot() {
  // Note: both bracketL have already been consumed
  flowParseObjectPropertyKey();
  expect(TokenType.bracketR);
  expect(TokenType.bracketR);
  if (match(TokenType.lessThan) || match(TokenType.parenL)) {
    flowParseObjectTypeMethodish();
  } else {
    eat(TokenType.question);
    flowParseTypeInitialiser();
  }
}

function flowParseObjectTypeMethodish() {
  if (match(TokenType.lessThan)) {
    flowParseTypeParameterDeclaration();
  }

  expect(TokenType.parenL);
  while (!match(TokenType.parenR) && !match(TokenType.ellipsis) && !state.error) {
    flowParseFunctionTypeParam();
    if (!match(TokenType.parenR)) {
      expect(TokenType.comma);
    }
  }

  if (eat(TokenType.ellipsis)) {
    flowParseFunctionTypeParam();
  }
  expect(TokenType.parenR);
  flowParseTypeInitialiser();
}

function flowParseObjectTypeCallProperty() {
  flowParseObjectTypeMethodish();
}

function flowParseObjectType(allowStatic, allowExact, allowProto) {
  let endDelim;
  if (allowExact && match(TokenType.braceBarL)) {
    expect(TokenType.braceBarL);
    endDelim = TokenType.braceBarR;
  } else {
    expect(TokenType.braceL);
    endDelim = TokenType.braceR;
  }

  while (!match(endDelim) && !state.error) {
    if (allowProto && isContextual(ContextualKeyword._proto)) {
      const lookahead = lookaheadType();
      if (lookahead !== TokenType.colon && lookahead !== TokenType.question) {
        next();
        allowStatic = false;
      }
    }
    if (allowStatic && isContextual(ContextualKeyword._static)) {
      const lookahead = lookaheadType();
      if (lookahead !== TokenType.colon && lookahead !== TokenType.question) {
        next();
      }
    }

    flowParseVariance();

    if (eat(TokenType.bracketL)) {
      if (eat(TokenType.bracketL)) {
        flowParseObjectTypeInternalSlot();
      } else {
        flowParseObjectTypeIndexer();
      }
    } else if (match(TokenType.parenL) || match(TokenType.lessThan)) {
      flowParseObjectTypeCallProperty();
    } else {
      if (isContextual(ContextualKeyword._get) || isContextual(ContextualKeyword._set)) {
        const lookahead = lookaheadType();
        if (lookahead === TokenType.name || lookahead === TokenType.string || lookahead === TokenType.num) {
          next();
        }
      }

      flowParseObjectTypeProperty();
    }

    flowObjectTypeSemicolon();
  }

  expect(endDelim);
}

function flowParseObjectTypeProperty() {
  if (match(TokenType.ellipsis)) {
    expect(TokenType.ellipsis);
    if (!eat(TokenType.comma)) {
      eat(TokenType.semi);
    }
    // Explicit inexact object syntax.
    if (match(TokenType.braceR)) {
      return;
    }
    flowParseType();
  } else {
    flowParseObjectPropertyKey();
    if (match(TokenType.lessThan) || match(TokenType.parenL)) {
      // This is a method property
      flowParseObjectTypeMethodish();
    } else {
      eat(TokenType.question);
      flowParseTypeInitialiser();
    }
  }
}

function flowObjectTypeSemicolon() {
  if (!eat(TokenType.semi) && !eat(TokenType.comma) && !match(TokenType.braceR) && !match(TokenType.braceBarR)) {
    unexpected();
  }
}

function flowParseQualifiedTypeIdentifier(initialIdAlreadyParsed) {
  if (!initialIdAlreadyParsed) {
    parseIdentifier();
  }
  while (eat(TokenType.dot)) {
    parseIdentifier();
  }
}

function flowParseGenericType() {
  flowParseQualifiedTypeIdentifier(true);
  if (match(TokenType.lessThan)) {
    flowParseTypeParameterInstantiation();
  }
}

function flowParseTypeofType() {
  expect(TokenType._typeof);
  flowParsePrimaryType();
}

function flowParseTupleType() {
  expect(TokenType.bracketL);
  // We allow trailing commas
  while (state.pos < input.length && !match(TokenType.bracketR)) {
    flowParseType();
    if (match(TokenType.bracketR)) {
      break;
    }
    expect(TokenType.comma);
  }
  expect(TokenType.bracketR);
}

function flowParseFunctionTypeParam() {
  const lookahead = lookaheadType();
  if (lookahead === TokenType.colon || lookahead === TokenType.question) {
    parseIdentifier();
    eat(TokenType.question);
    flowParseTypeInitialiser();
  } else {
    flowParseType();
  }
}

function flowParseFunctionTypeParams() {
  while (!match(TokenType.parenR) && !match(TokenType.ellipsis) && !state.error) {
    flowParseFunctionTypeParam();
    if (!match(TokenType.parenR)) {
      expect(TokenType.comma);
    }
  }
  if (eat(TokenType.ellipsis)) {
    flowParseFunctionTypeParam();
  }
}

// The parsing of types roughly parallels the parsing of expressions, and
// primary types are kind of like primary expressions...they're the
// primitives with which other types are constructed.
function flowParsePrimaryType() {
  let isGroupedType = false;
  const oldNoAnonFunctionType = state.noAnonFunctionType;

  switch (state.type) {
    case TokenType.name: {
      if (isContextual(ContextualKeyword._interface)) {
        flowParseInterfaceType();
        return;
      }
      parseIdentifier();
      flowParseGenericType();
      return;
    }

    case TokenType.braceL:
      flowParseObjectType(false, false, false);
      return;

    case TokenType.braceBarL:
      flowParseObjectType(false, true, false);
      return;

    case TokenType.bracketL:
      flowParseTupleType();
      return;

    case TokenType.lessThan:
      flowParseTypeParameterDeclaration();
      expect(TokenType.parenL);
      flowParseFunctionTypeParams();
      expect(TokenType.parenR);
      expect(TokenType.arrow);
      flowParseType();
      return;

    case TokenType.parenL:
      next();

      // Check to see if this is actually a grouped type
      if (!match(TokenType.parenR) && !match(TokenType.ellipsis)) {
        if (match(TokenType.name)) {
          const token = lookaheadType();
          isGroupedType = token !== TokenType.question && token !== TokenType.colon;
        } else {
          isGroupedType = true;
        }
      }

      if (isGroupedType) {
        state.noAnonFunctionType = false;
        flowParseType();
        state.noAnonFunctionType = oldNoAnonFunctionType;

        // A `,` or a `) =>` means this is an anonymous function type
        if (
          state.noAnonFunctionType ||
          !(match(TokenType.comma) || (match(TokenType.parenR) && lookaheadType() === TokenType.arrow))
        ) {
          expect(TokenType.parenR);
          return;
        } else {
          // Eat a comma if there is one
          eat(TokenType.comma);
        }
      }

      flowParseFunctionTypeParams();

      expect(TokenType.parenR);
      expect(TokenType.arrow);
      flowParseType();
      return;

    case TokenType.minus:
      next();
      parseLiteral();
      return;

    case TokenType.string:
    case TokenType.num:
    case TokenType._true:
    case TokenType._false:
    case TokenType._null:
    case TokenType._this:
    case TokenType._void:
    case TokenType.star:
      next();
      return;

    default:
      if (state.type === TokenType._typeof) {
        flowParseTypeofType();
        return;
      } else if (state.type & TokenType.IS_KEYWORD) {
        next();
        state.tokens[state.tokens.length - 1].type = TokenType.name;
        return;
      }
  }

  unexpected();
}

function flowParsePostfixType() {
  flowParsePrimaryType();
  while (!canInsertSemicolon() && (match(TokenType.bracketL) || match(TokenType.questionDot))) {
    eat(TokenType.questionDot);
    expect(TokenType.bracketL);
    if (eat(TokenType.bracketR)) {
      // Array type
    } else {
      // Indexed access type
      flowParseType();
      expect(TokenType.bracketR);
    }
  }
}

function flowParsePrefixType() {
  if (eat(TokenType.question)) {
    flowParsePrefixType();
  } else {
    flowParsePostfixType();
  }
}

function flowParseAnonFunctionWithoutParens() {
  flowParsePrefixType();
  if (!state.noAnonFunctionType && eat(TokenType.arrow)) {
    flowParseType();
  }
}

function flowParseIntersectionType() {
  eat(TokenType.bitwiseAND);
  flowParseAnonFunctionWithoutParens();
  while (eat(TokenType.bitwiseAND)) {
    flowParseAnonFunctionWithoutParens();
  }
}

function flowParseUnionType() {
  eat(TokenType.bitwiseOR);
  flowParseIntersectionType();
  while (eat(TokenType.bitwiseOR)) {
    flowParseIntersectionType();
  }
}

function flowParseType() {
  flowParseUnionType();
}

function flowParseTypeAnnotation() {
  flowParseTypeInitialiser();
}

function flowParseTypeAnnotatableIdentifier() {
  parseIdentifier();
  if (match(TokenType.colon)) {
    flowParseTypeAnnotation();
  }
}

function flowParseVariance() {
  if (match(TokenType.plus) || match(TokenType.minus)) {
    next();
    state.tokens[state.tokens.length - 1].isType = true;
  }
}

// ==================================
// Overrides
// ==================================

function flowParseFunctionBodyAndFinish(funcContextId) {
  // For arrow functions, `parseArrow` handles the return type itself.
  if (match(TokenType.colon)) {
    flowParseTypeAndPredicateInitialiser();
  }

  parseFunctionBody(false, funcContextId);
}

function flowParseSubscript(
  startTokenIndex,
  noCalls,
  stopState,
) {
  if (match(TokenType.questionDot) && lookaheadType() === TokenType.lessThan) {
    if (noCalls) {
      stopState.stop = true;
      return;
    }
    next();
    flowParseTypeParameterInstantiation();
    expect(TokenType.parenL);
    parseCallExpressionArguments();
    return;
  } else if (!noCalls && match(TokenType.lessThan)) {
    const snapshot = state.snapshot();
    flowParseTypeParameterInstantiation();
    expect(TokenType.parenL);
    parseCallExpressionArguments();
    if (state.error) {
      state.restoreFromSnapshot(snapshot);
    } else {
      return;
    }
  }
  baseParseSubscript(startTokenIndex, noCalls, stopState);
}

function flowStartParseNewArguments() {
  if (match(TokenType.lessThan)) {
    const snapshot = state.snapshot();
    flowParseTypeParameterInstantiation();
    if (state.error) {
      state.restoreFromSnapshot(snapshot);
    }
  }
}

// interfaces
function flowTryParseStatement() {
  if (match(TokenType.name) && state.contextualKeyword === ContextualKeyword._interface) {
    const oldIsType = pushTypeContext(0);
    next();
    flowParseInterface();
    popTypeContext(oldIsType);
    return true;
  } else if (isContextual(ContextualKeyword._enum)) {
    flowParseEnumDeclaration();
    return true;
  }
  return false;
}

function flowTryParseExportDefaultExpression() {
  if (isContextual(ContextualKeyword._enum)) {
    flowParseEnumDeclaration();
    return true;
  }
  return false;
}

// declares, interfaces and type aliases
function flowParseIdentifierStatement(contextualKeyword) {
  if (contextualKeyword === ContextualKeyword._declare) {
    if (
      match(TokenType._class) ||
      match(TokenType.name) ||
      match(TokenType._function) ||
      match(TokenType._var) ||
      match(TokenType._export)
    ) {
      const oldIsType = pushTypeContext(1);
      flowParseDeclare();
      popTypeContext(oldIsType);
    }
  } else if (match(TokenType.name)) {
    if (contextualKeyword === ContextualKeyword._interface) {
      const oldIsType = pushTypeContext(1);
      flowParseInterface();
      popTypeContext(oldIsType);
    } else if (contextualKeyword === ContextualKeyword._type) {
      const oldIsType = pushTypeContext(1);
      flowParseTypeAlias();
      popTypeContext(oldIsType);
    } else if (contextualKeyword === ContextualKeyword._opaque) {
      const oldIsType = pushTypeContext(1);
      flowParseOpaqueType(false);
      popTypeContext(oldIsType);
    }
  }
  semicolon();
}

// export type
function flowShouldParseExportDeclaration() {
  return (
    isContextual(ContextualKeyword._type) ||
    isContextual(ContextualKeyword._interface) ||
    isContextual(ContextualKeyword._opaque) ||
    isContextual(ContextualKeyword._enum)
  );
}

function flowShouldDisallowExportDefaultSpecifier() {
  return (
    match(TokenType.name) &&
    (state.contextualKeyword === ContextualKeyword._type ||
      state.contextualKeyword === ContextualKeyword._interface ||
      state.contextualKeyword === ContextualKeyword._opaque ||
      state.contextualKeyword === ContextualKeyword._enum)
  );
}

function flowParseExportDeclaration() {
  if (isContextual(ContextualKeyword._type)) {
    const oldIsType = pushTypeContext(1);
    next();

    if (match(TokenType.braceL)) {
      // export type { foo, bar };
      parseExportSpecifiers();
      parseExportFrom();
    } else {
      // export type Foo = Bar;
      flowParseTypeAlias();
    }
    popTypeContext(oldIsType);
  } else if (isContextual(ContextualKeyword._opaque)) {
    const oldIsType = pushTypeContext(1);
    next();
    // export opaque type Foo = Bar;
    flowParseOpaqueType(false);
    popTypeContext(oldIsType);
  } else if (isContextual(ContextualKeyword._interface)) {
    const oldIsType = pushTypeContext(1);
    next();
    flowParseInterface();
    popTypeContext(oldIsType);
  } else {
    parseStatement(true);
  }
}

function flowShouldParseExportStar() {
  return match(TokenType.star) || (isContextual(ContextualKeyword._type) && lookaheadType() === TokenType.star);
}

function flowParseExportStar() {
  if (eatContextual(ContextualKeyword._type)) {
    const oldIsType = pushTypeContext(2);
    baseParseExportStar();
    popTypeContext(oldIsType);
  } else {
    baseParseExportStar();
  }
}

// parse a the super class type parameters and implements
function flowAfterParseClassSuper(hasSuper) {
  if (hasSuper && match(TokenType.lessThan)) {
    flowParseTypeParameterInstantiation();
  }
  if (isContextual(ContextualKeyword._implements)) {
    const oldIsType = pushTypeContext(0);
    next();
    state.tokens[state.tokens.length - 1].type = TokenType._implements;
    do {
      flowParseRestrictedIdentifier();
      if (match(TokenType.lessThan)) {
        flowParseTypeParameterInstantiation();
      }
    } while (eat(TokenType.comma));
    popTypeContext(oldIsType);
  }
}

// parse type parameters for object method shorthand
function flowStartParseObjPropValue() {
  // method shorthand
  if (match(TokenType.lessThan)) {
    flowParseTypeParameterDeclaration();
    if (!match(TokenType.parenL)) unexpected();
  }
}

function flowParseAssignableListItemTypes() {
  const oldIsType = pushTypeContext(0);
  eat(TokenType.question);
  if (match(TokenType.colon)) {
    flowParseTypeAnnotation();
  }
  popTypeContext(oldIsType);
}

// parse typeof and type imports
function flowStartParseImportSpecifiers() {
  if (match(TokenType._typeof) || isContextual(ContextualKeyword._type)) {
    const lh = lookaheadTypeAndKeyword();
    if (isMaybeDefaultImport(lh) || lh.type === TokenType.braceL || lh.type === TokenType.star) {
      next();
    }
  }
}

// parse import-type/typeof shorthand
function flowParseImportSpecifier() {
  const isTypeKeyword =
    state.contextualKeyword === ContextualKeyword._type || state.type === TokenType._typeof;
  if (isTypeKeyword) {
    next();
  } else {
    parseIdentifier();
  }

  if (isContextual(ContextualKeyword._as) && !isLookaheadContextual(ContextualKeyword._as)) {
    parseIdentifier();
    if (isTypeKeyword && !match(TokenType.name) && !(state.type & TokenType.IS_KEYWORD)) {
      // `import {type as ,` or `import {type as }`
    } else {
      // `import {type as foo`
      parseIdentifier();
    }
  } else {
    if (isTypeKeyword && (match(TokenType.name) || !!(state.type & TokenType.IS_KEYWORD))) {
      // `import {type foo`
      parseIdentifier();
    }
    if (eatContextual(ContextualKeyword._as)) {
      parseIdentifier();
    }
  }
}

// parse function type parameters - function foo<T>() {}
function flowStartParseFunctionParams() {
  // Originally this checked if the method is a getter/setter, but if it was, we'd crash soon
  // anyway, so don't try to propagate that information.
  if (match(TokenType.lessThan)) {
    const oldIsType = pushTypeContext(0);
    flowParseTypeParameterDeclaration();
    popTypeContext(oldIsType);
  }
}

// parse flow type annotations on variable declarator heads - let foo: string = bar
function flowAfterParseVarHead() {
  if (match(TokenType.colon)) {
    flowParseTypeAnnotation();
  }
}

// parse the return type of an async arrow function - let foo = (async (): number => {});
function flowStartParseAsyncArrowFromCallExpression() {
  if (match(TokenType.colon)) {
    const oldNoAnonFunctionType = state.noAnonFunctionType;
    state.noAnonFunctionType = true;
    flowParseTypeAnnotation();
    state.noAnonFunctionType = oldNoAnonFunctionType;
  }
}

// We need to support type parameter declarations for arrow functions. This
// is tricky. There are three situations we need to handle
//
// 1. This is either JSX or an arrow function. We'll try JSX first. If that
//    fails, we'll try an arrow function. If that fails, we'll throw the JSX
//    error.
// 2. This is an arrow function. We'll parse the type parameter declaration,
//    parse the rest, make sure the rest is an arrow function, and go from
//    there
// 3. This is neither. Just call the super method
function flowParseMaybeAssign(noIn, isWithinParens) {
  if (match(TokenType.lessThan)) {
    const snapshot = state.snapshot();
    let wasArrow = baseParseMaybeAssign(noIn, isWithinParens);
    if (state.error) {
      state.restoreFromSnapshot(snapshot);
      state.type = TokenType.typeParameterStart;
    } else {
      return wasArrow;
    }

    const oldIsType = pushTypeContext(0);
    flowParseTypeParameterDeclaration();
    popTypeContext(oldIsType);
    wasArrow = baseParseMaybeAssign(noIn, isWithinParens);
    if (wasArrow) {
      return true;
    }
    unexpected();
  }

  return baseParseMaybeAssign(noIn, isWithinParens);
}

// handle return types for arrow functions
function flowParseArrow() {
  if (match(TokenType.colon)) {
    const oldIsType = pushTypeContext(0);
    const snapshot = state.snapshot();

    const oldNoAnonFunctionType = state.noAnonFunctionType;
    state.noAnonFunctionType = true;
    flowParseTypeAndPredicateInitialiser();
    state.noAnonFunctionType = oldNoAnonFunctionType;

    if (canInsertSemicolon()) unexpected();
    if (!match(TokenType.arrow)) unexpected();

    if (state.error) {
      state.restoreFromSnapshot(snapshot);
    }
    popTypeContext(oldIsType);
  }
  return eat(TokenType.arrow);
}

function flowParseSubscripts(startTokenIndex, noCalls = false) {
  if (
    state.tokens[state.tokens.length - 1].contextualKeyword === ContextualKeyword._async &&
    match(TokenType.lessThan)
  ) {
    const snapshot = state.snapshot();
    const wasArrow = parseAsyncArrowWithTypeParameters();
    if (wasArrow && !state.error) {
      return;
    }
    state.restoreFromSnapshot(snapshot);
  }

  baseParseSubscripts(startTokenIndex, noCalls);
}

// Returns true if there was an arrow function here.
function parseAsyncArrowWithTypeParameters() {
  state.scopeDepth++;
  const startTokenIndex = state.tokens.length;
  parseFunctionParams();
  if (!parseArrow()) {
    return false;
  }
  parseArrowExpression(startTokenIndex);
  return true;
}

function flowParseEnumDeclaration() {
  expectContextual(ContextualKeyword._enum);
  state.tokens[state.tokens.length - 1].type = TokenType._enum;
  parseIdentifier();
  flowParseEnumBody();
}

function flowParseEnumBody() {
  if (eatContextual(ContextualKeyword._of)) {
    next();
  }
  expect(TokenType.braceL);
  flowParseEnumMembers();
  expect(TokenType.braceR);
}

function flowParseEnumMembers() {
  while (!match(TokenType.braceR) && !state.error) {
    if (eat(TokenType.ellipsis)) {
      break;
    }
    flowParseEnumMember();
    if (!match(TokenType.braceR)) {
      expect(TokenType.comma);
    }
  }
}

function flowParseEnumMember() {
  parseIdentifier();
  if (eat(TokenType.eq)) {
    // Flow enum values are always just one token (a string, number, or boolean literal).
    next();
  }
}

;// ./node_modules/sucrase/dist/esm/parser/traverser/statement.js
/* eslint max-len: 0 */














function parseTopLevel() {
  parseBlockBody(TokenType.eof);
  state.scopes.push(new Scope(0, state.tokens.length, true));
  if (state.scopeDepth !== 0) {
    throw new Error(`Invalid scope depth at end of file: ${state.scopeDepth}`);
  }
  return new File(state.tokens, state.scopes);
}

// Parse a single statement.
//
// If expecting a statement and finding a slash operator, parse a
// regular expression literal. This is to handle cases like
// `if (foo) /blah/.exec(foo)`, where looking at the previous token
// does not help.

function parseStatement(declaration) {
  if (isFlowEnabled) {
    if (flowTryParseStatement()) {
      return;
    }
  }
  if (match(TokenType.at)) {
    parseDecorators();
  }
  parseStatementContent(declaration);
}

function parseStatementContent(declaration) {
  if (isTypeScriptEnabled) {
    if (tsTryParseStatementContent()) {
      return;
    }
  }

  const starttype = state.type;

  // Most types of statements are recognized by the keyword they
  // start with. Many are trivial to parse, some require a bit of
  // complexity.

  switch (starttype) {
    case TokenType._break:
    case TokenType._continue:
      parseBreakContinueStatement();
      return;
    case TokenType._debugger:
      parseDebuggerStatement();
      return;
    case TokenType._do:
      parseDoStatement();
      return;
    case TokenType._for:
      parseForStatement();
      return;
    case TokenType._function:
      if (lookaheadType() === TokenType.dot) break;
      if (!declaration) unexpected();
      parseFunctionStatement();
      return;

    case TokenType._class:
      if (!declaration) unexpected();
      parseClass(true);
      return;

    case TokenType._if:
      parseIfStatement();
      return;
    case TokenType._return:
      parseReturnStatement();
      return;
    case TokenType._switch:
      parseSwitchStatement();
      return;
    case TokenType._throw:
      parseThrowStatement();
      return;
    case TokenType._try:
      parseTryStatement();
      return;

    case TokenType._let:
    case TokenType._const:
      if (!declaration) unexpected(); // NOTE: falls through to _var

    case TokenType._var:
      parseVarStatement(starttype !== TokenType._var);
      return;

    case TokenType._while:
      parseWhileStatement();
      return;
    case TokenType.braceL:
      parseBlock();
      return;
    case TokenType.semi:
      parseEmptyStatement();
      return;
    case TokenType._export:
    case TokenType._import: {
      const nextType = lookaheadType();
      if (nextType === TokenType.parenL || nextType === TokenType.dot) {
        break;
      }
      next();
      if (starttype === TokenType._import) {
        parseImport();
      } else {
        parseExport();
      }
      return;
    }
    case TokenType.name:
      if (state.contextualKeyword === ContextualKeyword._async) {
        const functionStart = state.start;
        // peek ahead and see if next token is a function
        const snapshot = state.snapshot();
        next();
        if (match(TokenType._function) && !canInsertSemicolon()) {
          expect(TokenType._function);
          parseFunction(functionStart, true);
          return;
        } else {
          state.restoreFromSnapshot(snapshot);
        }
      } else if (
        state.contextualKeyword === ContextualKeyword._using &&
        !hasFollowingLineBreak() &&
        // Statements like `using[0]` and `using in foo` aren't actual using
        // declarations.
        lookaheadType() === TokenType.name
      ) {
        parseVarStatement(true);
        return;
      } else if (startsAwaitUsing()) {
        expectContextual(ContextualKeyword._await);
        parseVarStatement(true);
        return;
      }
    default:
      // Do nothing.
      break;
  }

  // If the statement does not start with a statement keyword or a
  // brace, it's an ExpressionStatement or LabeledStatement. We
  // simply start parsing an expression, and afterwards, if the
  // next token is a colon and the expression was a simple
  // Identifier node, we switch to interpreting it as a label.
  const initialTokensLength = state.tokens.length;
  parseExpression();
  let simpleName = null;
  if (state.tokens.length === initialTokensLength + 1) {
    const token = state.tokens[state.tokens.length - 1];
    if (token.type === TokenType.name) {
      simpleName = token.contextualKeyword;
    }
  }
  if (simpleName == null) {
    semicolon();
    return;
  }
  if (eat(TokenType.colon)) {
    parseLabeledStatement();
  } else {
    // This was an identifier, so we might want to handle flow/typescript-specific cases.
    parseIdentifierStatement(simpleName);
  }
}

/**
 * Determine if we're positioned at an `await using` declaration.
 *
 * Note that this can happen either in place of a regular variable declaration
 * or in a loop body, and in both places, there are similar-looking cases where
 * we need to return false.
 *
 * Examples returning true:
 * await using foo = bar();
 * for (await using a of b) {}
 *
 * Examples returning false:
 * await using
 * await using + 1
 * await using instanceof T
 * for (await using;;) {}
 *
 * For now, we early return if we don't see `await`, then do a simple
 * backtracking-based lookahead for the `using` and identifier tokens. In the
 * future, this could be optimized with a character-based approach.
 */
function startsAwaitUsing() {
  if (!isContextual(ContextualKeyword._await)) {
    return false;
  }
  const snapshot = state.snapshot();
  // await
  next();
  if (!isContextual(ContextualKeyword._using) || hasPrecedingLineBreak()) {
    state.restoreFromSnapshot(snapshot);
    return false;
  }
  // using
  next();
  if (!match(TokenType.name) || hasPrecedingLineBreak()) {
    state.restoreFromSnapshot(snapshot);
    return false;
  }
  state.restoreFromSnapshot(snapshot);
  return true;
}

function parseDecorators() {
  while (match(TokenType.at)) {
    parseDecorator();
  }
}

function parseDecorator() {
  next();
  if (eat(TokenType.parenL)) {
    parseExpression();
    expect(TokenType.parenR);
  } else {
    parseIdentifier();
    while (eat(TokenType.dot)) {
      parseIdentifier();
    }
    parseMaybeDecoratorArguments();
  }
}

function parseMaybeDecoratorArguments() {
  if (isTypeScriptEnabled) {
    tsParseMaybeDecoratorArguments();
  } else {
    baseParseMaybeDecoratorArguments();
  }
}

function baseParseMaybeDecoratorArguments() {
  if (eat(TokenType.parenL)) {
    parseCallExpressionArguments();
  }
}

function parseBreakContinueStatement() {
  next();
  if (!isLineTerminator()) {
    parseIdentifier();
    semicolon();
  }
}

function parseDebuggerStatement() {
  next();
  semicolon();
}

function parseDoStatement() {
  next();
  parseStatement(false);
  expect(TokenType._while);
  parseParenExpression();
  eat(TokenType.semi);
}

function parseForStatement() {
  state.scopeDepth++;
  const startTokenIndex = state.tokens.length;
  parseAmbiguousForStatement();
  const endTokenIndex = state.tokens.length;
  state.scopes.push(new Scope(startTokenIndex, endTokenIndex, false));
  state.scopeDepth--;
}

/**
 * Determine if this token is a `using` declaration (explicit resource
 * management) as part of a loop.
 * https://github.com/tc39/proposal-explicit-resource-management
 */
function isUsingInLoop() {
  if (!isContextual(ContextualKeyword._using)) {
    return false;
  }
  // This must be `for (using of`, where `using` is the name of the loop
  // variable.
  if (isLookaheadContextual(ContextualKeyword._of)) {
    return false;
  }
  return true;
}

// Disambiguating between a `for` and a `for`/`in` or `for`/`of`
// loop is non-trivial. Basically, we have to parse the init `var`
// statement or expression, disallowing the `in` operator (see
// the second parameter to `parseExpression`), and then check
// whether the next token is `in` or `of`. When there is no init
// part (semicolon immediately after the opening parenthesis), it
// is a regular `for` loop.
function parseAmbiguousForStatement() {
  next();

  let forAwait = false;
  if (isContextual(ContextualKeyword._await)) {
    forAwait = true;
    next();
  }
  expect(TokenType.parenL);

  if (match(TokenType.semi)) {
    if (forAwait) {
      unexpected();
    }
    parseFor();
    return;
  }

  const isAwaitUsing = startsAwaitUsing();
  if (isAwaitUsing || match(TokenType._var) || match(TokenType._let) || match(TokenType._const) || isUsingInLoop()) {
    if (isAwaitUsing) {
      expectContextual(ContextualKeyword._await);
    }
    next();
    parseVar(true, state.type !== TokenType._var);
    if (match(TokenType._in) || isContextual(ContextualKeyword._of)) {
      parseForIn(forAwait);
      return;
    }
    parseFor();
    return;
  }

  parseExpression(true);
  if (match(TokenType._in) || isContextual(ContextualKeyword._of)) {
    parseForIn(forAwait);
    return;
  }
  if (forAwait) {
    unexpected();
  }
  parseFor();
}

function parseFunctionStatement() {
  const functionStart = state.start;
  next();
  parseFunction(functionStart, true);
}

function parseIfStatement() {
  next();
  parseParenExpression();
  parseStatement(false);
  if (eat(TokenType._else)) {
    parseStatement(false);
  }
}

function parseReturnStatement() {
  next();

  // In `return` (and `break`/`continue`), the keywords with
  // optional arguments, we eagerly look for a semicolon or the
  // possibility to insert one.

  if (!isLineTerminator()) {
    parseExpression();
    semicolon();
  }
}

function parseSwitchStatement() {
  next();
  parseParenExpression();
  state.scopeDepth++;
  const startTokenIndex = state.tokens.length;
  expect(TokenType.braceL);

  // Don't bother validation; just go through any sequence of cases, defaults, and statements.
  while (!match(TokenType.braceR) && !state.error) {
    if (match(TokenType._case) || match(TokenType._default)) {
      const isCase = match(TokenType._case);
      next();
      if (isCase) {
        parseExpression();
      }
      expect(TokenType.colon);
    } else {
      parseStatement(true);
    }
  }
  next(); // Closing brace
  const endTokenIndex = state.tokens.length;
  state.scopes.push(new Scope(startTokenIndex, endTokenIndex, false));
  state.scopeDepth--;
}

function parseThrowStatement() {
  next();
  parseExpression();
  semicolon();
}

function parseCatchClauseParam() {
  parseBindingAtom(true /* isBlockScope */);

  if (isTypeScriptEnabled) {
    tsTryParseTypeAnnotation();
  }
}

function parseTryStatement() {
  next();

  parseBlock();

  if (match(TokenType._catch)) {
    next();
    let catchBindingStartTokenIndex = null;
    if (match(TokenType.parenL)) {
      state.scopeDepth++;
      catchBindingStartTokenIndex = state.tokens.length;
      expect(TokenType.parenL);
      parseCatchClauseParam();
      expect(TokenType.parenR);
    }
    parseBlock();
    if (catchBindingStartTokenIndex != null) {
      // We need a special scope for the catch binding which includes the binding itself and the
      // catch block.
      const endTokenIndex = state.tokens.length;
      state.scopes.push(new Scope(catchBindingStartTokenIndex, endTokenIndex, false));
      state.scopeDepth--;
    }
  }
  if (eat(TokenType._finally)) {
    parseBlock();
  }
}

function parseVarStatement(isBlockScope) {
  next();
  parseVar(false, isBlockScope);
  semicolon();
}

function parseWhileStatement() {
  next();
  parseParenExpression();
  parseStatement(false);
}

function parseEmptyStatement() {
  next();
}

function parseLabeledStatement() {
  parseStatement(true);
}

/**
 * Parse a statement starting with an identifier of the given name. Subclasses match on the name
 * to handle statements like "declare".
 */
function parseIdentifierStatement(contextualKeyword) {
  if (isTypeScriptEnabled) {
    tsParseIdentifierStatement(contextualKeyword);
  } else if (isFlowEnabled) {
    flowParseIdentifierStatement(contextualKeyword);
  } else {
    semicolon();
  }
}

// Parse a semicolon-enclosed block of statements.
function parseBlock(isFunctionScope = false, contextId = 0) {
  const startTokenIndex = state.tokens.length;
  state.scopeDepth++;
  expect(TokenType.braceL);
  if (contextId) {
    state.tokens[state.tokens.length - 1].contextId = contextId;
  }
  parseBlockBody(TokenType.braceR);
  if (contextId) {
    state.tokens[state.tokens.length - 1].contextId = contextId;
  }
  const endTokenIndex = state.tokens.length;
  state.scopes.push(new Scope(startTokenIndex, endTokenIndex, isFunctionScope));
  state.scopeDepth--;
}

function parseBlockBody(end) {
  while (!eat(end) && !state.error) {
    parseStatement(true);
  }
}

// Parse a regular `for` loop. The disambiguation code in
// `parseStatement` will already have parsed the init statement or
// expression.

function parseFor() {
  expect(TokenType.semi);
  if (!match(TokenType.semi)) {
    parseExpression();
  }
  expect(TokenType.semi);
  if (!match(TokenType.parenR)) {
    parseExpression();
  }
  expect(TokenType.parenR);
  parseStatement(false);
}

// Parse a `for`/`in` and `for`/`of` loop, which are almost
// same from parser's perspective.

function parseForIn(forAwait) {
  if (forAwait) {
    eatContextual(ContextualKeyword._of);
  } else {
    next();
  }
  parseExpression();
  expect(TokenType.parenR);
  parseStatement(false);
}

// Parse a list of variable declarations.

function parseVar(isFor, isBlockScope) {
  while (true) {
    parseVarHead(isBlockScope);
    if (eat(TokenType.eq)) {
      const eqIndex = state.tokens.length - 1;
      parseMaybeAssign(isFor);
      state.tokens[eqIndex].rhsEndIndex = state.tokens.length;
    }
    if (!eat(TokenType.comma)) {
      break;
    }
  }
}

function parseVarHead(isBlockScope) {
  parseBindingAtom(isBlockScope);
  if (isTypeScriptEnabled) {
    tsAfterParseVarHead();
  } else if (isFlowEnabled) {
    flowAfterParseVarHead();
  }
}

// Parse a function declaration or literal (depending on the
// `isStatement` parameter).

function parseFunction(
  functionStart,
  isStatement,
  optionalId = false,
) {
  if (match(TokenType.star)) {
    next();
  }

  if (isStatement && !optionalId && !match(TokenType.name) && !match(TokenType._yield)) {
    unexpected();
  }

  let nameScopeStartTokenIndex = null;

  if (match(TokenType.name)) {
    // Expression-style functions should limit their name's scope to the function body, so we make
    // a new function scope to enforce that.
    if (!isStatement) {
      nameScopeStartTokenIndex = state.tokens.length;
      state.scopeDepth++;
    }
    parseBindingIdentifier(false);
  }

  const startTokenIndex = state.tokens.length;
  state.scopeDepth++;
  parseFunctionParams();
  parseFunctionBodyAndFinish(functionStart);
  const endTokenIndex = state.tokens.length;
  // In addition to the block scope of the function body, we need a separate function-style scope
  // that includes the params.
  state.scopes.push(new Scope(startTokenIndex, endTokenIndex, true));
  state.scopeDepth--;
  if (nameScopeStartTokenIndex !== null) {
    state.scopes.push(new Scope(nameScopeStartTokenIndex, endTokenIndex, true));
    state.scopeDepth--;
  }
}

function parseFunctionParams(
  allowModifiers = false,
  funcContextId = 0,
) {
  if (isTypeScriptEnabled) {
    tsStartParseFunctionParams();
  } else if (isFlowEnabled) {
    flowStartParseFunctionParams();
  }

  expect(TokenType.parenL);
  if (funcContextId) {
    state.tokens[state.tokens.length - 1].contextId = funcContextId;
  }
  parseBindingList(
    TokenType.parenR,
    false /* isBlockScope */,
    false /* allowEmpty */,
    allowModifiers,
    funcContextId,
  );
  if (funcContextId) {
    state.tokens[state.tokens.length - 1].contextId = funcContextId;
  }
}

// Parse a class declaration or literal (depending on the
// `isStatement` parameter).

function parseClass(isStatement, optionalId = false) {
  // Put a context ID on the class keyword, the open-brace, and the close-brace, so that later
  // code can easily navigate to meaningful points on the class.
  const contextId = getNextContextId();

  next();
  state.tokens[state.tokens.length - 1].contextId = contextId;
  state.tokens[state.tokens.length - 1].isExpression = !isStatement;
  // Like with functions, we declare a special "name scope" from the start of the name to the end
  // of the class, but only with expression-style classes, to represent the fact that the name is
  // available to the body of the class but not an outer declaration.
  let nameScopeStartTokenIndex = null;
  if (!isStatement) {
    nameScopeStartTokenIndex = state.tokens.length;
    state.scopeDepth++;
  }
  parseClassId(isStatement, optionalId);
  parseClassSuper();
  const openBraceIndex = state.tokens.length;
  parseClassBody(contextId);
  if (state.error) {
    return;
  }
  state.tokens[openBraceIndex].contextId = contextId;
  state.tokens[state.tokens.length - 1].contextId = contextId;
  if (nameScopeStartTokenIndex !== null) {
    const endTokenIndex = state.tokens.length;
    state.scopes.push(new Scope(nameScopeStartTokenIndex, endTokenIndex, false));
    state.scopeDepth--;
  }
}

function isClassProperty() {
  return match(TokenType.eq) || match(TokenType.semi) || match(TokenType.braceR) || match(TokenType.bang) || match(TokenType.colon);
}

function isClassMethod() {
  return match(TokenType.parenL) || match(TokenType.lessThan);
}

function parseClassBody(classContextId) {
  expect(TokenType.braceL);

  while (!eat(TokenType.braceR) && !state.error) {
    if (eat(TokenType.semi)) {
      continue;
    }

    if (match(TokenType.at)) {
      parseDecorator();
      continue;
    }
    const memberStart = state.start;
    parseClassMember(memberStart, classContextId);
  }
}

function parseClassMember(memberStart, classContextId) {
  if (isTypeScriptEnabled) {
    tsParseModifiers([
      ContextualKeyword._declare,
      ContextualKeyword._public,
      ContextualKeyword._protected,
      ContextualKeyword._private,
      ContextualKeyword._override,
    ]);
  }
  let isStatic = false;
  if (match(TokenType.name) && state.contextualKeyword === ContextualKeyword._static) {
    parseIdentifier(); // eats 'static'
    if (isClassMethod()) {
      parseClassMethod(memberStart, /* isConstructor */ false);
      return;
    } else if (isClassProperty()) {
      parseClassProperty();
      return;
    }
    // otherwise something static
    state.tokens[state.tokens.length - 1].type = TokenType._static;
    isStatic = true;

    if (match(TokenType.braceL)) {
      // This is a static block. Mark the word "static" with the class context ID for class element
      // detection and parse as a regular block.
      state.tokens[state.tokens.length - 1].contextId = classContextId;
      parseBlock();
      return;
    }
  }

  parseClassMemberWithIsStatic(memberStart, isStatic, classContextId);
}

function parseClassMemberWithIsStatic(
  memberStart,
  isStatic,
  classContextId,
) {
  if (isTypeScriptEnabled) {
    if (tsTryParseClassMemberWithIsStatic(isStatic)) {
      return;
    }
  }
  if (eat(TokenType.star)) {
    // a generator
    parseClassPropertyName(classContextId);
    parseClassMethod(memberStart, /* isConstructor */ false);
    return;
  }

  // Get the identifier name so we can tell if it's actually a keyword like "async", "get", or
  // "set".
  parseClassPropertyName(classContextId);
  let isConstructor = false;
  const token = state.tokens[state.tokens.length - 1];
  // We allow "constructor" as either an identifier or a string.
  if (token.contextualKeyword === ContextualKeyword._constructor) {
    isConstructor = true;
  }
  parsePostMemberNameModifiers();

  if (isClassMethod()) {
    parseClassMethod(memberStart, isConstructor);
  } else if (isClassProperty()) {
    parseClassProperty();
  } else if (token.contextualKeyword === ContextualKeyword._async && !isLineTerminator()) {
    state.tokens[state.tokens.length - 1].type = TokenType._async;
    // an async method
    const isGenerator = match(TokenType.star);
    if (isGenerator) {
      next();
    }

    // The so-called parsed name would have been "async": get the real name.
    parseClassPropertyName(classContextId);
    parsePostMemberNameModifiers();
    parseClassMethod(memberStart, false /* isConstructor */);
  } else if (
    (token.contextualKeyword === ContextualKeyword._get ||
      token.contextualKeyword === ContextualKeyword._set) &&
    !(isLineTerminator() && match(TokenType.star))
  ) {
    if (token.contextualKeyword === ContextualKeyword._get) {
      state.tokens[state.tokens.length - 1].type = TokenType._get;
    } else {
      state.tokens[state.tokens.length - 1].type = TokenType._set;
    }
    // `get\n*` is an uninitialized property named 'get' followed by a generator.
    // a getter or setter
    // The so-called parsed name would have been "get/set": get the real name.
    parseClassPropertyName(classContextId);
    parseClassMethod(memberStart, /* isConstructor */ false);
  } else if (token.contextualKeyword === ContextualKeyword._accessor && !isLineTerminator()) {
    parseClassPropertyName(classContextId);
    parseClassProperty();
  } else if (isLineTerminator()) {
    // an uninitialized class property (due to ASI, since we don't otherwise recognize the next token)
    parseClassProperty();
  } else {
    unexpected();
  }
}

function parseClassMethod(functionStart, isConstructor) {
  if (isTypeScriptEnabled) {
    tsTryParseTypeParameters();
  } else if (isFlowEnabled) {
    if (match(TokenType.lessThan)) {
      flowParseTypeParameterDeclaration();
    }
  }
  parseMethod(functionStart, isConstructor);
}

// Return the name of the class property, if it is a simple identifier.
function parseClassPropertyName(classContextId) {
  parsePropertyName(classContextId);
}

function parsePostMemberNameModifiers() {
  if (isTypeScriptEnabled) {
    const oldIsType = pushTypeContext(0);
    eat(TokenType.question);
    popTypeContext(oldIsType);
  }
}

function parseClassProperty() {
  if (isTypeScriptEnabled) {
    eatTypeToken(TokenType.bang);
    tsTryParseTypeAnnotation();
  } else if (isFlowEnabled) {
    if (match(TokenType.colon)) {
      flowParseTypeAnnotation();
    }
  }

  if (match(TokenType.eq)) {
    const equalsTokenIndex = state.tokens.length;
    next();
    parseMaybeAssign();
    state.tokens[equalsTokenIndex].rhsEndIndex = state.tokens.length;
  }
  semicolon();
}

function parseClassId(isStatement, optionalId = false) {
  if (
    isTypeScriptEnabled &&
    (!isStatement || optionalId) &&
    isContextual(ContextualKeyword._implements)
  ) {
    return;
  }

  if (match(TokenType.name)) {
    parseBindingIdentifier(true);
  }

  if (isTypeScriptEnabled) {
    tsTryParseTypeParameters();
  } else if (isFlowEnabled) {
    if (match(TokenType.lessThan)) {
      flowParseTypeParameterDeclaration();
    }
  }
}

// Returns true if there was a superclass.
function parseClassSuper() {
  let hasSuper = false;
  if (eat(TokenType._extends)) {
    parseExprSubscripts();
    hasSuper = true;
  } else {
    hasSuper = false;
  }
  if (isTypeScriptEnabled) {
    tsAfterParseClassSuper(hasSuper);
  } else if (isFlowEnabled) {
    flowAfterParseClassSuper(hasSuper);
  }
}

// Parses module export declaration.

function parseExport() {
  const exportIndex = state.tokens.length - 1;
  if (isTypeScriptEnabled) {
    if (tsTryParseExport()) {
      return;
    }
  }
  // export * from '...'
  if (shouldParseExportStar()) {
    parseExportStar();
  } else if (isExportDefaultSpecifier()) {
    // export default from
    parseIdentifier();
    if (match(TokenType.comma) && lookaheadType() === TokenType.star) {
      expect(TokenType.comma);
      expect(TokenType.star);
      expectContextual(ContextualKeyword._as);
      parseIdentifier();
    } else {
      parseExportSpecifiersMaybe();
    }
    parseExportFrom();
  } else if (eat(TokenType._default)) {
    // export default ...
    parseExportDefaultExpression();
  } else if (shouldParseExportDeclaration()) {
    parseExportDeclaration();
  } else {
    // export { x, y as z } [from '...']
    parseExportSpecifiers();
    parseExportFrom();
  }
  state.tokens[exportIndex].rhsEndIndex = state.tokens.length;
}

function parseExportDefaultExpression() {
  if (isTypeScriptEnabled) {
    if (tsTryParseExportDefaultExpression()) {
      return;
    }
  }
  if (isFlowEnabled) {
    if (flowTryParseExportDefaultExpression()) {
      return;
    }
  }
  const functionStart = state.start;
  if (eat(TokenType._function)) {
    parseFunction(functionStart, true, true);
  } else if (isContextual(ContextualKeyword._async) && lookaheadType() === TokenType._function) {
    // async function declaration
    eatContextual(ContextualKeyword._async);
    eat(TokenType._function);
    parseFunction(functionStart, true, true);
  } else if (match(TokenType._class)) {
    parseClass(true, true);
  } else if (match(TokenType.at)) {
    parseDecorators();
    parseClass(true, true);
  } else {
    parseMaybeAssign();
    semicolon();
  }
}

function parseExportDeclaration() {
  if (isTypeScriptEnabled) {
    tsParseExportDeclaration();
  } else if (isFlowEnabled) {
    flowParseExportDeclaration();
  } else {
    parseStatement(true);
  }
}

function isExportDefaultSpecifier() {
  if (isTypeScriptEnabled && tsIsDeclarationStart()) {
    return false;
  } else if (isFlowEnabled && flowShouldDisallowExportDefaultSpecifier()) {
    return false;
  }
  if (match(TokenType.name)) {
    return state.contextualKeyword !== ContextualKeyword._async;
  }

  if (!match(TokenType._default)) {
    return false;
  }

  const _next = nextTokenStart();
  const lookahead = lookaheadTypeAndKeyword();
  const hasFrom =
    lookahead.type === TokenType.name && lookahead.contextualKeyword === ContextualKeyword._from;
  if (lookahead.type === TokenType.comma) {
    return true;
  }
  // lookahead again when `export default from` is seen
  if (hasFrom) {
    const nextAfterFrom = input.charCodeAt(nextTokenStartSince(_next + 4));
    return nextAfterFrom === charCodes.quotationMark || nextAfterFrom === charCodes.apostrophe;
  }
  return false;
}

function parseExportSpecifiersMaybe() {
  if (eat(TokenType.comma)) {
    parseExportSpecifiers();
  }
}

function parseExportFrom() {
  if (eatContextual(ContextualKeyword._from)) {
    parseExprAtom();
    maybeParseImportAttributes();
  }
  semicolon();
}

function shouldParseExportStar() {
  if (isFlowEnabled) {
    return flowShouldParseExportStar();
  } else {
    return match(TokenType.star);
  }
}

function parseExportStar() {
  if (isFlowEnabled) {
    flowParseExportStar();
  } else {
    baseParseExportStar();
  }
}

function baseParseExportStar() {
  expect(TokenType.star);

  if (isContextual(ContextualKeyword._as)) {
    parseExportNamespace();
  } else {
    parseExportFrom();
  }
}

function parseExportNamespace() {
  next();
  state.tokens[state.tokens.length - 1].type = TokenType._as;
  parseIdentifier();
  parseExportSpecifiersMaybe();
  parseExportFrom();
}

function shouldParseExportDeclaration() {
  return (
    (isTypeScriptEnabled && tsIsDeclarationStart()) ||
    (isFlowEnabled && flowShouldParseExportDeclaration()) ||
    state.type === TokenType._var ||
    state.type === TokenType._const ||
    state.type === TokenType._let ||
    state.type === TokenType._function ||
    state.type === TokenType._class ||
    isContextual(ContextualKeyword._async) ||
    match(TokenType.at)
  );
}

// Parses a comma-separated list of module exports.
function parseExportSpecifiers() {
  let first = true;

  // export { x, y as z } [from '...']
  expect(TokenType.braceL);

  while (!eat(TokenType.braceR) && !state.error) {
    if (first) {
      first = false;
    } else {
      expect(TokenType.comma);
      if (eat(TokenType.braceR)) {
        break;
      }
    }
    parseExportSpecifier();
  }
}

function parseExportSpecifier() {
  if (isTypeScriptEnabled) {
    tsParseExportSpecifier();
    return;
  }
  parseIdentifier();
  state.tokens[state.tokens.length - 1].identifierRole = IdentifierRole.ExportAccess;
  if (eatContextual(ContextualKeyword._as)) {
    parseIdentifier();
  }
}

/**
 * Starting at the `module` token in an import, determine if it was truly an
 * import reflection token or just looks like one.
 *
 * Returns true for:
 * import module foo from "foo";
 * import module from from "foo";
 *
 * Returns false for:
 * import module from "foo";
 * import module, {bar} from "foo";
 */
function isImportReflection() {
  const snapshot = state.snapshot();
  expectContextual(ContextualKeyword._module);
  if (eatContextual(ContextualKeyword._from)) {
    if (isContextual(ContextualKeyword._from)) {
      state.restoreFromSnapshot(snapshot);
      return true;
    } else {
      state.restoreFromSnapshot(snapshot);
      return false;
    }
  } else if (match(TokenType.comma)) {
    state.restoreFromSnapshot(snapshot);
    return false;
  } else {
    state.restoreFromSnapshot(snapshot);
    return true;
  }
}

/**
 * Eat the "module" token from the import reflection proposal.
 * https://github.com/tc39/proposal-import-reflection
 */
function parseMaybeImportReflection() {
  // isImportReflection does snapshot/restore, so only run it if we see the word
  // "module".
  if (isContextual(ContextualKeyword._module) && isImportReflection()) {
    next();
  }
}

// Parses import declaration.

function parseImport() {
  if (isTypeScriptEnabled && match(TokenType.name) && lookaheadType() === TokenType.eq) {
    tsParseImportEqualsDeclaration();
    return;
  }
  if (isTypeScriptEnabled && isContextual(ContextualKeyword._type)) {
    const lookahead = lookaheadTypeAndKeyword();
    if (lookahead.type === TokenType.name && lookahead.contextualKeyword !== ContextualKeyword._from) {
      // One of these `import type` cases:
      // import type T = require('T');
      // import type A from 'A';
      expectContextual(ContextualKeyword._type);
      if (lookaheadType() === TokenType.eq) {
        tsParseImportEqualsDeclaration();
        return;
      }
      // If this is an `import type...from` statement, then we already ate the
      // type token, so proceed to the regular import parser.
    } else if (lookahead.type === TokenType.star || lookahead.type === TokenType.braceL) {
      // One of these `import type` cases, in which case we can eat the type token
      // and proceed as normal:
      // import type * as A from 'A';
      // import type {a} from 'A';
      expectContextual(ContextualKeyword._type);
    }
    // Otherwise, we are importing the name "type".
  }

  // import '...'
  if (match(TokenType.string)) {
    parseExprAtom();
  } else {
    parseMaybeImportReflection();
    parseImportSpecifiers();
    expectContextual(ContextualKeyword._from);
    parseExprAtom();
  }
  maybeParseImportAttributes();
  semicolon();
}

// eslint-disable-next-line no-unused-vars
function shouldParseDefaultImport() {
  return match(TokenType.name);
}

function parseImportSpecifierLocal() {
  parseImportedIdentifier();
}

// Parses a comma-separated list of module imports.
function parseImportSpecifiers() {
  if (isFlowEnabled) {
    flowStartParseImportSpecifiers();
  }

  let first = true;
  if (shouldParseDefaultImport()) {
    // import defaultObj, { x, y as z } from '...'
    parseImportSpecifierLocal();

    if (!eat(TokenType.comma)) return;
  }

  if (match(TokenType.star)) {
    next();
    expectContextual(ContextualKeyword._as);

    parseImportSpecifierLocal();

    return;
  }

  expect(TokenType.braceL);
  while (!eat(TokenType.braceR) && !state.error) {
    if (first) {
      first = false;
    } else {
      // Detect an attempt to deep destructure
      if (eat(TokenType.colon)) {
        unexpected(
          "ES2015 named imports do not destructure. Use another statement for destructuring after the import.",
        );
      }

      expect(TokenType.comma);
      if (eat(TokenType.braceR)) {
        break;
      }
    }

    parseImportSpecifier();
  }
}

function parseImportSpecifier() {
  if (isTypeScriptEnabled) {
    tsParseImportSpecifier();
    return;
  }
  if (isFlowEnabled) {
    flowParseImportSpecifier();
    return;
  }
  parseImportedIdentifier();
  if (isContextual(ContextualKeyword._as)) {
    state.tokens[state.tokens.length - 1].identifierRole = IdentifierRole.ImportAccess;
    next();
    parseImportedIdentifier();
  }
}

/**
 * Parse import attributes like `with {type: "json"}`, or the legacy form
 * `assert {type: "json"}`.
 *
 * Import attributes technically have their own syntax, but are always parseable
 * as a plain JS object, so just do that for simplicity.
 */
function maybeParseImportAttributes() {
  if (match(TokenType._with) || (isContextual(ContextualKeyword._assert) && !hasPrecedingLineBreak())) {
    next();
    parseObj(false, false);
  }
}

;// ./node_modules/sucrase/dist/esm/parser/traverser/index.js






function parseFile() {
  // If enabled, skip leading hashbang line.
  if (
    state.pos === 0 &&
    input.charCodeAt(0) === charCodes.numberSign &&
    input.charCodeAt(1) === charCodes.exclamationMark
  ) {
    skipLineComment(2);
  }
  nextToken();
  return parseTopLevel();
}

;// ./node_modules/sucrase/dist/esm/parser/index.js





class File {
  
  

  constructor(tokens, scopes) {
    this.tokens = tokens;
    this.scopes = scopes;
  }
}

function parse(
  input,
  isJSXEnabled,
  isTypeScriptEnabled,
  isFlowEnabled,
) {
  if (isFlowEnabled && isTypeScriptEnabled) {
    throw new Error("Cannot combine flow and typescript plugins.");
  }
  initParser(input, isJSXEnabled, isTypeScriptEnabled, isFlowEnabled);
  const result = parseFile();
  if (state.error) {
    throw augmentError(state.error);
  }
  return result;
}

;// ./node_modules/sucrase/dist/esm/util/isAsyncOperation.js



/**
 * Determine whether this optional chain or nullish coalescing operation has any await statements in
 * it. If so, we'll need to transpile to an async operation.
 *
 * We compute this by walking the length of the operation and returning true if we see an await
 * keyword used as a real await (rather than an object key or property access). Nested optional
 * chain/nullish operations need to be tracked but don't silence await, but a nested async function
 * (or any other nested scope) will make the await not count.
 */
function isAsyncOperation(tokens) {
  let index = tokens.currentIndex();
  let depth = 0;
  const startToken = tokens.currentToken();
  do {
    const token = tokens.tokens[index];
    if (token.isOptionalChainStart) {
      depth++;
    }
    if (token.isOptionalChainEnd) {
      depth--;
    }
    depth += token.numNullishCoalesceStarts;
    depth -= token.numNullishCoalesceEnds;

    if (
      token.contextualKeyword === ContextualKeyword._await &&
      token.identifierRole == null &&
      token.scopeDepth === startToken.scopeDepth
    ) {
      return true;
    }
    index += 1;
  } while (depth > 0 && index < tokens.tokens.length);
  return false;
}

;// ./node_modules/sucrase/dist/esm/TokenProcessor.js
















class TokenProcessor {
   __init() {this.resultCode = ""}
  // Array mapping input token index to optional string index position in the
  // output code.
   __init2() {this.resultMappings = new Array(this.tokens.length)}
   __init3() {this.tokenIndex = 0}

  constructor(
     code,
     tokens,
     isFlowEnabled,
     disableESTransforms,
     helperManager,
  ) {;this.code = code;this.tokens = tokens;this.isFlowEnabled = isFlowEnabled;this.disableESTransforms = disableESTransforms;this.helperManager = helperManager;TokenProcessor.prototype.__init.call(this);TokenProcessor.prototype.__init2.call(this);TokenProcessor.prototype.__init3.call(this);}

  /**
   * Snapshot the token state in a way that can be restored later, useful for
   * things like lookahead.
   *
   * resultMappings do not need to be copied since in all use cases, they will
   * be overwritten anyway after restore.
   */
  snapshot() {
    return {
      resultCode: this.resultCode,
      tokenIndex: this.tokenIndex,
    };
  }

  restoreToSnapshot(snapshot) {
    this.resultCode = snapshot.resultCode;
    this.tokenIndex = snapshot.tokenIndex;
  }

  /**
   * Remove and return the code generated since the snapshot, leaving the
   * current token position in-place. Unlike most TokenProcessor operations,
   * this operation can result in input/output line number mismatches because
   * the removed code may contain newlines, so this operation should be used
   * sparingly.
   */
  dangerouslyGetAndRemoveCodeSinceSnapshot(snapshot) {
    const result = this.resultCode.slice(snapshot.resultCode.length);
    this.resultCode = snapshot.resultCode;
    return result;
  }

  reset() {
    this.resultCode = "";
    this.resultMappings = new Array(this.tokens.length);
    this.tokenIndex = 0;
  }

  matchesContextualAtIndex(index, contextualKeyword) {
    return (
      this.matches1AtIndex(index, TokenType.name) &&
      this.tokens[index].contextualKeyword === contextualKeyword
    );
  }

  identifierNameAtIndex(index) {
    // TODO: We need to process escapes since technically you can have unicode escapes in variable
    // names.
    return this.identifierNameForToken(this.tokens[index]);
  }

  identifierNameAtRelativeIndex(relativeIndex) {
    return this.identifierNameForToken(this.tokenAtRelativeIndex(relativeIndex));
  }

  identifierName() {
    return this.identifierNameForToken(this.currentToken());
  }

  identifierNameForToken(token) {
    return this.code.slice(token.start, token.end);
  }

  rawCodeForToken(token) {
    return this.code.slice(token.start, token.end);
  }

  stringValueAtIndex(index) {
    return this.stringValueForToken(this.tokens[index]);
  }

  stringValue() {
    return this.stringValueForToken(this.currentToken());
  }

  stringValueForToken(token) {
    // This is used to identify when two imports are the same and to resolve TypeScript enum keys.
    // Ideally we'd process escapes within the strings, but for now we pretty much take the raw
    // code.
    return this.code.slice(token.start + 1, token.end - 1);
  }

  matches1AtIndex(index, t1) {
    return this.tokens[index].type === t1;
  }

  matches2AtIndex(index, t1, t2) {
    return this.tokens[index].type === t1 && this.tokens[index + 1].type === t2;
  }

  matches3AtIndex(index, t1, t2, t3) {
    return (
      this.tokens[index].type === t1 &&
      this.tokens[index + 1].type === t2 &&
      this.tokens[index + 2].type === t3
    );
  }

  matches1(t1) {
    return this.tokens[this.tokenIndex].type === t1;
  }

  matches2(t1, t2) {
    return this.tokens[this.tokenIndex].type === t1 && this.tokens[this.tokenIndex + 1].type === t2;
  }

  matches3(t1, t2, t3) {
    return (
      this.tokens[this.tokenIndex].type === t1 &&
      this.tokens[this.tokenIndex + 1].type === t2 &&
      this.tokens[this.tokenIndex + 2].type === t3
    );
  }

  matches4(t1, t2, t3, t4) {
    return (
      this.tokens[this.tokenIndex].type === t1 &&
      this.tokens[this.tokenIndex + 1].type === t2 &&
      this.tokens[this.tokenIndex + 2].type === t3 &&
      this.tokens[this.tokenIndex + 3].type === t4
    );
  }

  matches5(t1, t2, t3, t4, t5) {
    return (
      this.tokens[this.tokenIndex].type === t1 &&
      this.tokens[this.tokenIndex + 1].type === t2 &&
      this.tokens[this.tokenIndex + 2].type === t3 &&
      this.tokens[this.tokenIndex + 3].type === t4 &&
      this.tokens[this.tokenIndex + 4].type === t5
    );
  }

  matchesContextual(contextualKeyword) {
    return this.matchesContextualAtIndex(this.tokenIndex, contextualKeyword);
  }

  matchesContextIdAndLabel(type, contextId) {
    return this.matches1(type) && this.currentToken().contextId === contextId;
  }

  previousWhitespaceAndComments() {
    let whitespaceAndComments = this.code.slice(
      this.tokenIndex > 0 ? this.tokens[this.tokenIndex - 1].end : 0,
      this.tokenIndex < this.tokens.length ? this.tokens[this.tokenIndex].start : this.code.length,
    );
    if (this.isFlowEnabled) {
      whitespaceAndComments = whitespaceAndComments.replace(/@flow/g, "");
    }
    return whitespaceAndComments;
  }

  replaceToken(newCode) {
    this.resultCode += this.previousWhitespaceAndComments();
    this.appendTokenPrefix();
    this.resultMappings[this.tokenIndex] = this.resultCode.length;
    this.resultCode += newCode;
    this.appendTokenSuffix();
    this.tokenIndex++;
  }

  replaceTokenTrimmingLeftWhitespace(newCode) {
    this.resultCode += this.previousWhitespaceAndComments().replace(/[^\r\n]/g, "");
    this.appendTokenPrefix();
    this.resultMappings[this.tokenIndex] = this.resultCode.length;
    this.resultCode += newCode;
    this.appendTokenSuffix();
    this.tokenIndex++;
  }

  removeInitialToken() {
    this.replaceToken("");
  }

  removeToken() {
    this.replaceTokenTrimmingLeftWhitespace("");
  }

  /**
   * Remove all code until the next }, accounting for balanced braces.
   */
  removeBalancedCode() {
    let braceDepth = 0;
    while (!this.isAtEnd()) {
      if (this.matches1(TokenType.braceL)) {
        braceDepth++;
      } else if (this.matches1(TokenType.braceR)) {
        if (braceDepth === 0) {
          return;
        }
        braceDepth--;
      }
      this.removeToken();
    }
  }

  copyExpectedToken(tokenType) {
    if (this.tokens[this.tokenIndex].type !== tokenType) {
      throw new Error(`Expected token ${tokenType}`);
    }
    this.copyToken();
  }

  copyToken() {
    this.resultCode += this.previousWhitespaceAndComments();
    this.appendTokenPrefix();
    this.resultMappings[this.tokenIndex] = this.resultCode.length;
    this.resultCode += this.code.slice(
      this.tokens[this.tokenIndex].start,
      this.tokens[this.tokenIndex].end,
    );
    this.appendTokenSuffix();
    this.tokenIndex++;
  }

  copyTokenWithPrefix(prefix) {
    this.resultCode += this.previousWhitespaceAndComments();
    this.appendTokenPrefix();
    this.resultCode += prefix;
    this.resultMappings[this.tokenIndex] = this.resultCode.length;
    this.resultCode += this.code.slice(
      this.tokens[this.tokenIndex].start,
      this.tokens[this.tokenIndex].end,
    );
    this.appendTokenSuffix();
    this.tokenIndex++;
  }

   appendTokenPrefix() {
    const token = this.currentToken();
    if (token.numNullishCoalesceStarts || token.isOptionalChainStart) {
      token.isAsyncOperation = isAsyncOperation(this);
    }
    if (this.disableESTransforms) {
      return;
    }
    if (token.numNullishCoalesceStarts) {
      for (let i = 0; i < token.numNullishCoalesceStarts; i++) {
        if (token.isAsyncOperation) {
          this.resultCode += "await ";
          this.resultCode += this.helperManager.getHelperName("asyncNullishCoalesce");
        } else {
          this.resultCode += this.helperManager.getHelperName("nullishCoalesce");
        }
        this.resultCode += "(";
      }
    }
    if (token.isOptionalChainStart) {
      if (token.isAsyncOperation) {
        this.resultCode += "await ";
      }
      if (this.tokenIndex > 0 && this.tokenAtRelativeIndex(-1).type === TokenType._delete) {
        if (token.isAsyncOperation) {
          this.resultCode += this.helperManager.getHelperName("asyncOptionalChainDelete");
        } else {
          this.resultCode += this.helperManager.getHelperName("optionalChainDelete");
        }
      } else if (token.isAsyncOperation) {
        this.resultCode += this.helperManager.getHelperName("asyncOptionalChain");
      } else {
        this.resultCode += this.helperManager.getHelperName("optionalChain");
      }
      this.resultCode += "([";
    }
  }

   appendTokenSuffix() {
    const token = this.currentToken();
    if (token.isOptionalChainEnd && !this.disableESTransforms) {
      this.resultCode += "])";
    }
    if (token.numNullishCoalesceEnds && !this.disableESTransforms) {
      for (let i = 0; i < token.numNullishCoalesceEnds; i++) {
        this.resultCode += "))";
      }
    }
  }

  appendCode(code) {
    this.resultCode += code;
  }

  currentToken() {
    return this.tokens[this.tokenIndex];
  }

  currentTokenCode() {
    const token = this.currentToken();
    return this.code.slice(token.start, token.end);
  }

  tokenAtRelativeIndex(relativeIndex) {
    return this.tokens[this.tokenIndex + relativeIndex];
  }

  currentIndex() {
    return this.tokenIndex;
  }

  /**
   * Move to the next token. Only suitable in preprocessing steps. When
   * generating new code, you should use copyToken or removeToken.
   */
  nextToken() {
    if (this.tokenIndex === this.tokens.length) {
      throw new Error("Unexpectedly reached end of input.");
    }
    this.tokenIndex++;
  }

  previousToken() {
    this.tokenIndex--;
  }

  finish() {
    if (this.tokenIndex !== this.tokens.length) {
      throw new Error("Tried to finish processing tokens before reaching the end.");
    }
    this.resultCode += this.previousWhitespaceAndComments();
    return {code: this.resultCode, mappings: this.resultMappings};
  }

  isAtEnd() {
    return this.tokenIndex === this.tokens.length;
  }
}

;// ./node_modules/sucrase/dist/esm/util/getClassInfo.js











































/**
 * Get information about the class fields for this class, given a token processor pointing to the
 * open-brace at the start of the class.
 */
function getClassInfo(
  rootTransformer,
  tokens,
  nameManager,
  disableESTransforms,
) {
  const snapshot = tokens.snapshot();

  const headerInfo = processClassHeader(tokens);

  let constructorInitializerStatements = [];
  const instanceInitializerNames = [];
  const staticInitializerNames = [];
  let constructorInsertPos = null;
  const fields = [];
  const rangesToRemove = [];

  const classContextId = tokens.currentToken().contextId;
  if (classContextId == null) {
    throw new Error("Expected non-null class context ID on class open-brace.");
  }

  tokens.nextToken();
  while (!tokens.matchesContextIdAndLabel(TokenType.braceR, classContextId)) {
    if (tokens.matchesContextual(ContextualKeyword._constructor) && !tokens.currentToken().isType) {
      ({constructorInitializerStatements, constructorInsertPos} = processConstructor(tokens));
    } else if (tokens.matches1(TokenType.semi)) {
      if (!disableESTransforms) {
        rangesToRemove.push({start: tokens.currentIndex(), end: tokens.currentIndex() + 1});
      }
      tokens.nextToken();
    } else if (tokens.currentToken().isType) {
      tokens.nextToken();
    } else {
      // Either a method or a field. Skip to the identifier part.
      const statementStartIndex = tokens.currentIndex();
      let isStatic = false;
      let isESPrivate = false;
      let isDeclareOrAbstract = false;
      while (isAccessModifier(tokens.currentToken())) {
        if (tokens.matches1(TokenType._static)) {
          isStatic = true;
        }
        if (tokens.matches1(TokenType.hash)) {
          isESPrivate = true;
        }
        if (tokens.matches1(TokenType._declare) || tokens.matches1(TokenType._abstract)) {
          isDeclareOrAbstract = true;
        }
        tokens.nextToken();
      }
      if (isStatic && tokens.matches1(TokenType.braceL)) {
        // This is a static block, so don't process it in any special way.
        skipToNextClassElement(tokens, classContextId);
        continue;
      }
      if (isESPrivate) {
        // Sucrase doesn't attempt to transpile private fields; just leave them as-is.
        skipToNextClassElement(tokens, classContextId);
        continue;
      }
      if (
        tokens.matchesContextual(ContextualKeyword._constructor) &&
        !tokens.currentToken().isType
      ) {
        ({constructorInitializerStatements, constructorInsertPos} = processConstructor(tokens));
        continue;
      }

      const nameStartIndex = tokens.currentIndex();
      skipFieldName(tokens);
      if (tokens.matches1(TokenType.lessThan) || tokens.matches1(TokenType.parenL)) {
        // This is a method, so nothing to process.
        skipToNextClassElement(tokens, classContextId);
        continue;
      }
      // There might be a type annotation that we need to skip.
      while (tokens.currentToken().isType) {
        tokens.nextToken();
      }
      if (tokens.matches1(TokenType.eq)) {
        const equalsIndex = tokens.currentIndex();
        // This is an initializer, so we need to wrap in an initializer method.
        const valueEnd = tokens.currentToken().rhsEndIndex;
        if (valueEnd == null) {
          throw new Error("Expected rhsEndIndex on class field assignment.");
        }
        tokens.nextToken();
        while (tokens.currentIndex() < valueEnd) {
          rootTransformer.processToken();
        }
        let initializerName;
        if (isStatic) {
          initializerName = nameManager.claimFreeName("__initStatic");
          staticInitializerNames.push(initializerName);
        } else {
          initializerName = nameManager.claimFreeName("__init");
          instanceInitializerNames.push(initializerName);
        }
        // Fields start at the name, so `static x = 1;` has a field range of `x = 1;`.
        fields.push({
          initializerName,
          equalsIndex,
          start: nameStartIndex,
          end: tokens.currentIndex(),
        });
      } else if (!disableESTransforms || isDeclareOrAbstract) {
        // This is a regular field declaration, like `x;`. With the class transform enabled, we just
        // remove the line so that no output is produced. With the class transform disabled, we
        // usually want to preserve the declaration (but still strip types), but if the `declare`
        // or `abstract` keyword is specified, we should remove the line to avoid initializing the
        // value to undefined.
        rangesToRemove.push({start: statementStartIndex, end: tokens.currentIndex()});
      }
    }
  }

  tokens.restoreToSnapshot(snapshot);
  if (disableESTransforms) {
    // With ES transforms disabled, we don't want to transform regular class
    // field declarations, and we don't need to do any additional tricks to
    // reference the constructor for static init, but we still need to transform
    // TypeScript field initializers defined as constructor parameters and we
    // still need to remove `declare` fields. For now, we run the same code
    // path but omit any field information, as if the class had no field
    // declarations. In the future, when we fully drop the class fields
    // transform, we can simplify this code significantly.
    return {
      headerInfo,
      constructorInitializerStatements,
      instanceInitializerNames: [],
      staticInitializerNames: [],
      constructorInsertPos,
      fields: [],
      rangesToRemove,
    };
  } else {
    return {
      headerInfo,
      constructorInitializerStatements,
      instanceInitializerNames,
      staticInitializerNames,
      constructorInsertPos,
      fields,
      rangesToRemove,
    };
  }
}

/**
 * Move the token processor to the next method/field in the class.
 *
 * To do that, we seek forward to the next start of a class name (either an open
 * bracket or an identifier, or the closing curly brace), then seek backward to
 * include any access modifiers.
 */
function skipToNextClassElement(tokens, classContextId) {
  tokens.nextToken();
  while (tokens.currentToken().contextId !== classContextId) {
    tokens.nextToken();
  }
  while (isAccessModifier(tokens.tokenAtRelativeIndex(-1))) {
    tokens.previousToken();
  }
}

function processClassHeader(tokens) {
  const classToken = tokens.currentToken();
  const contextId = classToken.contextId;
  if (contextId == null) {
    throw new Error("Expected context ID on class token.");
  }
  const isExpression = classToken.isExpression;
  if (isExpression == null) {
    throw new Error("Expected isExpression on class token.");
  }
  let className = null;
  let hasSuperclass = false;
  tokens.nextToken();
  if (tokens.matches1(TokenType.name)) {
    className = tokens.identifierName();
  }
  while (!tokens.matchesContextIdAndLabel(TokenType.braceL, contextId)) {
    // If this has a superclass, there will always be an `extends` token. If it doesn't have a
    // superclass, only type parameters and `implements` clauses can show up here, all of which
    // consist only of type tokens. A declaration like `class A<B extends C> {` should *not* count
    // as having a superclass.
    if (tokens.matches1(TokenType._extends) && !tokens.currentToken().isType) {
      hasSuperclass = true;
    }
    tokens.nextToken();
  }
  return {isExpression, className, hasSuperclass};
}

/**
 * Extract useful information out of a constructor, starting at the "constructor" name.
 */
function processConstructor(tokens)


 {
  const constructorInitializerStatements = [];

  tokens.nextToken();
  const constructorContextId = tokens.currentToken().contextId;
  if (constructorContextId == null) {
    throw new Error("Expected context ID on open-paren starting constructor params.");
  }
  // Advance through parameters looking for access modifiers.
  while (!tokens.matchesContextIdAndLabel(TokenType.parenR, constructorContextId)) {
    if (tokens.currentToken().contextId === constructorContextId) {
      // Current token is an open paren or comma just before a param, so check
      // that param for access modifiers.
      tokens.nextToken();
      if (isAccessModifier(tokens.currentToken())) {
        tokens.nextToken();
        while (isAccessModifier(tokens.currentToken())) {
          tokens.nextToken();
        }
        const token = tokens.currentToken();
        if (token.type !== TokenType.name) {
          throw new Error("Expected identifier after access modifiers in constructor arg.");
        }
        const name = tokens.identifierNameForToken(token);
        constructorInitializerStatements.push(`this.${name} = ${name}`);
      }
    } else {
      tokens.nextToken();
    }
  }
  // )
  tokens.nextToken();
  // Constructor type annotations are invalid, but skip them anyway since
  // they're easy to skip.
  while (tokens.currentToken().isType) {
    tokens.nextToken();
  }
  let constructorInsertPos = tokens.currentIndex();

  // Advance through body looking for a super call.
  let foundSuperCall = false;
  while (!tokens.matchesContextIdAndLabel(TokenType.braceR, constructorContextId)) {
    if (!foundSuperCall && tokens.matches2(TokenType._super, TokenType.parenL)) {
      tokens.nextToken();
      const superCallContextId = tokens.currentToken().contextId;
      if (superCallContextId == null) {
        throw new Error("Expected a context ID on the super call");
      }
      while (!tokens.matchesContextIdAndLabel(TokenType.parenR, superCallContextId)) {
        tokens.nextToken();
      }
      constructorInsertPos = tokens.currentIndex();
      foundSuperCall = true;
    }
    tokens.nextToken();
  }
  // }
  tokens.nextToken();

  return {constructorInitializerStatements, constructorInsertPos};
}

/**
 * Determine if this is any token that can go before the name in a method/field.
 */
function isAccessModifier(token) {
  return [
    TokenType._async,
    TokenType._get,
    TokenType._set,
    TokenType.plus,
    TokenType.minus,
    TokenType._readonly,
    TokenType._static,
    TokenType._public,
    TokenType._private,
    TokenType._protected,
    TokenType._override,
    TokenType._abstract,
    TokenType.star,
    TokenType._declare,
    TokenType.hash,
  ].includes(token.type);
}

/**
 * The next token or set of tokens is either an identifier or an expression in square brackets, for
 * a method or field name.
 */
function skipFieldName(tokens) {
  if (tokens.matches1(TokenType.bracketL)) {
    const startToken = tokens.currentToken();
    const classContextId = startToken.contextId;
    if (classContextId == null) {
      throw new Error("Expected class context ID on computed name open bracket.");
    }
    while (!tokens.matchesContextIdAndLabel(TokenType.bracketR, classContextId)) {
      tokens.nextToken();
    }
    tokens.nextToken();
  } else {
    tokens.nextToken();
  }
}

;// ./node_modules/sucrase/dist/esm/util/elideImportEquals.js



function elideImportEquals(tokens) {
  // import
  tokens.removeInitialToken();
  // name
  tokens.removeToken();
  // =
  tokens.removeToken();
  // name or require
  tokens.removeToken();
  // Handle either `import A = require('A')` or `import A = B.C.D`.
  if (tokens.matches1(TokenType.parenL)) {
    // (
    tokens.removeToken();
    // path string
    tokens.removeToken();
    // )
    tokens.removeToken();
  } else {
    while (tokens.matches1(TokenType.dot)) {
      // .
      tokens.removeToken();
      // name
      tokens.removeToken();
    }
  }
}

;// ./node_modules/sucrase/dist/esm/util/getDeclarationInfo.js









const EMPTY_DECLARATION_INFO = {
  typeDeclarations: new Set(),
  valueDeclarations: new Set(),
};

/**
 * Get all top-level identifiers that should be preserved when exported in TypeScript.
 *
 * Examples:
 * - If an identifier is declared as `const x`, then `export {x}` should be preserved.
 * - If it's declared as `type x`, then `export {x}` should be removed.
 * - If it's declared as both `const x` and `type x`, then the export should be preserved.
 * - Classes and enums should be preserved (even though they also introduce types).
 * - Imported identifiers should be preserved since we don't have enough information to
 *   rule them out. --isolatedModules disallows re-exports, which catches errors here.
 */
function getDeclarationInfo(tokens) {
  const typeDeclarations = new Set();
  const valueDeclarations = new Set();
  for (let i = 0; i < tokens.tokens.length; i++) {
    const token = tokens.tokens[i];
    if (token.type === TokenType.name && isTopLevelDeclaration(token)) {
      if (token.isType) {
        typeDeclarations.add(tokens.identifierNameForToken(token));
      } else {
        valueDeclarations.add(tokens.identifierNameForToken(token));
      }
    }
  }
  return {typeDeclarations, valueDeclarations};
}

;// ./node_modules/sucrase/dist/esm/util/isExportFrom.js




/**
 * Starting at `export {`, look ahead and return `true` if this is an
 * `export {...} from` statement and `false` if this is a plain multi-export.
 */
function isExportFrom(tokens) {
  let closeBraceIndex = tokens.currentIndex();
  while (!tokens.matches1AtIndex(closeBraceIndex, TokenType.braceR)) {
    closeBraceIndex++;
  }
  return (
    tokens.matchesContextualAtIndex(closeBraceIndex + 1, ContextualKeyword._from) &&
    tokens.matches1AtIndex(closeBraceIndex + 2, TokenType.string)
  );
}

;// ./node_modules/sucrase/dist/esm/util/removeMaybeImportAttributes.js




/**
 * Starting at a potential `with` or (legacy) `assert` token, remove the import
 * attributes if they exist.
 */
function removeMaybeImportAttributes(tokens) {
  if (
    tokens.matches2(TokenType._with, TokenType.braceL) ||
    (tokens.matches2(TokenType.name, TokenType.braceL) && tokens.matchesContextual(ContextualKeyword._assert))
  ) {
    // assert
    tokens.removeToken();
    // {
    tokens.removeToken();
    tokens.removeBalancedCode();
    // }
    tokens.removeToken();
  }
}

;// ./node_modules/sucrase/dist/esm/util/shouldElideDefaultExport.js




/**
 * Common method sharing code between CJS and ESM cases, since they're the same here.
 */
function shouldElideDefaultExport(
  isTypeScriptTransformEnabled,
  keepUnusedImports,
  tokens,
  declarationInfo,
) {
  if (!isTypeScriptTransformEnabled || keepUnusedImports) {
    return false;
  }
  const exportToken = tokens.currentToken();
  if (exportToken.rhsEndIndex == null) {
    throw new Error("Expected non-null rhsEndIndex on export token.");
  }
  // The export must be of the form `export default a` or `export default a;`.
  const numTokens = exportToken.rhsEndIndex - tokens.currentIndex();
  if (
    numTokens !== 3 &&
    !(numTokens === 4 && tokens.matches1AtIndex(exportToken.rhsEndIndex - 1, TokenType.semi))
  ) {
    return false;
  }
  const identifierToken = tokens.tokenAtRelativeIndex(2);
  if (identifierToken.type !== TokenType.name) {
    return false;
  }
  const exportedName = tokens.identifierNameForToken(identifierToken);
  return (
    declarationInfo.typeDeclarations.has(exportedName) &&
    !declarationInfo.valueDeclarations.has(exportedName)
  );
}

;// ./node_modules/sucrase/dist/esm/transformers/CJSImportTransformer.js

















/**
 * Class for editing import statements when we are transforming to commonjs.
 */
class CJSImportTransformer extends Transformer {
   __init() {this.hadExport = false}
   __init2() {this.hadNamedExport = false}
   __init3() {this.hadDefaultExport = false}
  

  constructor(
     rootTransformer,
     tokens,
     importProcessor,
     nameManager,
     helperManager,
     reactHotLoaderTransformer,
     enableLegacyBabel5ModuleInterop,
     enableLegacyTypeScriptModuleInterop,
     isTypeScriptTransformEnabled,
     isFlowTransformEnabled,
     preserveDynamicImport,
     keepUnusedImports,
  ) {
    super();this.rootTransformer = rootTransformer;this.tokens = tokens;this.importProcessor = importProcessor;this.nameManager = nameManager;this.helperManager = helperManager;this.reactHotLoaderTransformer = reactHotLoaderTransformer;this.enableLegacyBabel5ModuleInterop = enableLegacyBabel5ModuleInterop;this.enableLegacyTypeScriptModuleInterop = enableLegacyTypeScriptModuleInterop;this.isTypeScriptTransformEnabled = isTypeScriptTransformEnabled;this.isFlowTransformEnabled = isFlowTransformEnabled;this.preserveDynamicImport = preserveDynamicImport;this.keepUnusedImports = keepUnusedImports;CJSImportTransformer.prototype.__init.call(this);CJSImportTransformer.prototype.__init2.call(this);CJSImportTransformer.prototype.__init3.call(this);;
    this.declarationInfo = isTypeScriptTransformEnabled
      ? getDeclarationInfo(tokens)
      : EMPTY_DECLARATION_INFO;
  }

  getPrefixCode() {
    let prefix = "";
    if (this.hadExport) {
      prefix += 'Object.defineProperty(exports, "__esModule", {value: true});';
    }
    return prefix;
  }

  getSuffixCode() {
    if (this.enableLegacyBabel5ModuleInterop && this.hadDefaultExport && !this.hadNamedExport) {
      return "\nmodule.exports = exports.default;\n";
    }
    return "";
  }

  process() {
    // TypeScript `import foo = require('foo');` should always just be translated to plain require.
    if (this.tokens.matches3(TokenType._import, TokenType.name, TokenType.eq)) {
      return this.processImportEquals();
    }
    if (this.tokens.matches1(TokenType._import)) {
      this.processImport();
      return true;
    }
    if (this.tokens.matches2(TokenType._export, TokenType.eq)) {
      this.tokens.replaceToken("module.exports");
      return true;
    }
    if (this.tokens.matches1(TokenType._export) && !this.tokens.currentToken().isType) {
      this.hadExport = true;
      return this.processExport();
    }
    if (this.tokens.matches2(TokenType.name, TokenType.postIncDec)) {
      // Fall through to normal identifier matching if this doesn't apply.
      if (this.processPostIncDec()) {
        return true;
      }
    }
    if (this.tokens.matches1(TokenType.name) || this.tokens.matches1(TokenType.jsxName)) {
      return this.processIdentifier();
    }
    if (this.tokens.matches1(TokenType.eq)) {
      return this.processAssignment();
    }
    if (this.tokens.matches1(TokenType.assign)) {
      return this.processComplexAssignment();
    }
    if (this.tokens.matches1(TokenType.preIncDec)) {
      return this.processPreIncDec();
    }
    return false;
  }

   processImportEquals() {
    const importName = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
    if (this.importProcessor.shouldAutomaticallyElideImportedName(importName)) {
      // If this name is only used as a type, elide the whole import.
      elideImportEquals(this.tokens);
    } else {
      // Otherwise, switch `import` to `const`.
      this.tokens.replaceToken("const");
    }
    return true;
  }

  /**
   * Transform this:
   * import foo, {bar} from 'baz';
   * into
   * var _baz = require('baz'); var _baz2 = _interopRequireDefault(_baz);
   *
   * The import code was already generated in the import preprocessing step, so
   * we just need to look it up.
   */
   processImport() {
    if (this.tokens.matches2(TokenType._import, TokenType.parenL)) {
      if (this.preserveDynamicImport) {
        // Bail out, only making progress for this one token.
        this.tokens.copyToken();
        return;
      }
      const requireWrapper = this.enableLegacyTypeScriptModuleInterop
        ? ""
        : `${this.helperManager.getHelperName("interopRequireWildcard")}(`;
      this.tokens.replaceToken(`Promise.resolve().then(() => ${requireWrapper}require`);
      const contextId = this.tokens.currentToken().contextId;
      if (contextId == null) {
        throw new Error("Expected context ID on dynamic import invocation.");
      }
      this.tokens.copyToken();
      while (!this.tokens.matchesContextIdAndLabel(TokenType.parenR, contextId)) {
        this.rootTransformer.processToken();
      }
      this.tokens.replaceToken(requireWrapper ? ")))" : "))");
      return;
    }

    const shouldElideImport = this.removeImportAndDetectIfShouldElide();
    if (shouldElideImport) {
      this.tokens.removeToken();
    } else {
      const path = this.tokens.stringValue();
      this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(path));
      this.tokens.appendCode(this.importProcessor.claimImportCode(path));
    }
    removeMaybeImportAttributes(this.tokens);
    if (this.tokens.matches1(TokenType.semi)) {
      this.tokens.removeToken();
    }
  }

  /**
   * Erase this import (since any CJS output would be completely different), and
   * return true if this import is should be elided due to being a type-only
   * import. Such imports will not be emitted at all to avoid side effects.
   *
   * Import elision only happens with the TypeScript or Flow transforms enabled.
   *
   * TODO: This function has some awkward overlap with
   *  CJSImportProcessor.pruneTypeOnlyImports , and the two should be unified.
   *  That function handles TypeScript implicit import name elision, and removes
   *  an import if all typical imported names (without `type`) are removed due
   *  to being type-only imports. This function handles Flow import removal and
   *  properly distinguishes `import 'foo'` from `import {} from 'foo'` for TS
   *  purposes.
   *
   * The position should end at the import string.
   */
   removeImportAndDetectIfShouldElide() {
    this.tokens.removeInitialToken();
    if (
      this.tokens.matchesContextual(ContextualKeyword._type) &&
      !this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, TokenType.comma) &&
      !this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, ContextualKeyword._from)
    ) {
      // This is an "import type" statement, so exit early.
      this.removeRemainingImport();
      return true;
    }

    if (this.tokens.matches1(TokenType.name) || this.tokens.matches1(TokenType.star)) {
      // We have a default import or namespace import, so there must be some
      // non-type import.
      this.removeRemainingImport();
      return false;
    }

    if (this.tokens.matches1(TokenType.string)) {
      // This is a bare import, so we should proceed with the import.
      return false;
    }

    let foundNonTypeImport = false;
    let foundAnyNamedImport = false;
    while (!this.tokens.matches1(TokenType.string)) {
      // Check if any named imports are of the form "foo" or "foo as bar", with
      // no leading "type".
      if (
        (!foundNonTypeImport && this.tokens.matches1(TokenType.braceL)) ||
        this.tokens.matches1(TokenType.comma)
      ) {
        this.tokens.removeToken();
        if (!this.tokens.matches1(TokenType.braceR)) {
          foundAnyNamedImport = true;
        }
        if (
          this.tokens.matches2(TokenType.name, TokenType.comma) ||
          this.tokens.matches2(TokenType.name, TokenType.braceR) ||
          this.tokens.matches4(TokenType.name, TokenType.name, TokenType.name, TokenType.comma) ||
          this.tokens.matches4(TokenType.name, TokenType.name, TokenType.name, TokenType.braceR)
        ) {
          foundNonTypeImport = true;
        }
      }
      this.tokens.removeToken();
    }
    if (this.keepUnusedImports) {
      return false;
    }
    if (this.isTypeScriptTransformEnabled) {
      return !foundNonTypeImport;
    } else if (this.isFlowTransformEnabled) {
      // In Flow, unlike TS, `import {} from 'foo';` preserves the import.
      return foundAnyNamedImport && !foundNonTypeImport;
    } else {
      return false;
    }
  }

   removeRemainingImport() {
    while (!this.tokens.matches1(TokenType.string)) {
      this.tokens.removeToken();
    }
  }

   processIdentifier() {
    const token = this.tokens.currentToken();
    if (token.shadowsGlobal) {
      return false;
    }

    if (token.identifierRole === IdentifierRole.ObjectShorthand) {
      return this.processObjectShorthand();
    }

    if (token.identifierRole !== IdentifierRole.Access) {
      return false;
    }
    const replacement = this.importProcessor.getIdentifierReplacement(
      this.tokens.identifierNameForToken(token),
    );
    if (!replacement) {
      return false;
    }
    // Tolerate any number of closing parens while looking for an opening paren
    // that indicates a function call.
    let possibleOpenParenIndex = this.tokens.currentIndex() + 1;
    while (
      possibleOpenParenIndex < this.tokens.tokens.length &&
      this.tokens.tokens[possibleOpenParenIndex].type === TokenType.parenR
    ) {
      possibleOpenParenIndex++;
    }
    // Avoid treating imported functions as methods of their `exports` object
    // by using `(0, f)` when the identifier is in a paren expression. Else
    // use `Function.prototype.call` when the identifier is a guaranteed
    // function call. When using `call`, pass undefined as the context.
    if (this.tokens.tokens[possibleOpenParenIndex].type === TokenType.parenL) {
      if (
        this.tokens.tokenAtRelativeIndex(1).type === TokenType.parenL &&
        this.tokens.tokenAtRelativeIndex(-1).type !== TokenType._new
      ) {
        this.tokens.replaceToken(`${replacement}.call(void 0, `);
        // Remove the old paren.
        this.tokens.removeToken();
        // Balance out the new paren.
        this.rootTransformer.processBalancedCode();
        this.tokens.copyExpectedToken(TokenType.parenR);
      } else {
        // See here: http://2ality.com/2015/12/references.html
        this.tokens.replaceToken(`(0, ${replacement})`);
      }
    } else {
      this.tokens.replaceToken(replacement);
    }
    return true;
  }

  processObjectShorthand() {
    const identifier = this.tokens.identifierName();
    const replacement = this.importProcessor.getIdentifierReplacement(identifier);
    if (!replacement) {
      return false;
    }
    this.tokens.replaceToken(`${identifier}: ${replacement}`);
    return true;
  }

  processExport() {
    if (
      this.tokens.matches2(TokenType._export, TokenType._enum) ||
      this.tokens.matches3(TokenType._export, TokenType._const, TokenType._enum)
    ) {
      this.hadNamedExport = true;
      // Let the TypeScript transform handle it.
      return false;
    }
    if (this.tokens.matches2(TokenType._export, TokenType._default)) {
      if (this.tokens.matches3(TokenType._export, TokenType._default, TokenType._enum)) {
        this.hadDefaultExport = true;
        // Flow export default enums need some special handling, so handle them
        // in that tranform rather than this one.
        return false;
      }
      this.processExportDefault();
      return true;
    } else if (this.tokens.matches2(TokenType._export, TokenType.braceL)) {
      this.processExportBindings();
      return true;
    } else if (
      this.tokens.matches2(TokenType._export, TokenType.name) &&
      this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, ContextualKeyword._type)
    ) {
      // export type {a};
      // export type {a as b};
      // export type {a} from './b';
      // export type * from './b';
      // export type * as ns from './b';
      this.tokens.removeInitialToken();
      this.tokens.removeToken();
      if (this.tokens.matches1(TokenType.braceL)) {
        while (!this.tokens.matches1(TokenType.braceR)) {
          this.tokens.removeToken();
        }
        this.tokens.removeToken();
      } else {
        // *
        this.tokens.removeToken();
        if (this.tokens.matches1(TokenType._as)) {
          // as
          this.tokens.removeToken();
          // ns
          this.tokens.removeToken();
        }
      }
      // Remove type re-export `... } from './T'`
      if (
        this.tokens.matchesContextual(ContextualKeyword._from) &&
        this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, TokenType.string)
      ) {
        this.tokens.removeToken();
        this.tokens.removeToken();
        removeMaybeImportAttributes(this.tokens);
      }
      return true;
    }
    this.hadNamedExport = true;
    if (
      this.tokens.matches2(TokenType._export, TokenType._var) ||
      this.tokens.matches2(TokenType._export, TokenType._let) ||
      this.tokens.matches2(TokenType._export, TokenType._const)
    ) {
      this.processExportVar();
      return true;
    } else if (
      this.tokens.matches2(TokenType._export, TokenType._function) ||
      // export async function
      this.tokens.matches3(TokenType._export, TokenType.name, TokenType._function)
    ) {
      this.processExportFunction();
      return true;
    } else if (
      this.tokens.matches2(TokenType._export, TokenType._class) ||
      this.tokens.matches3(TokenType._export, TokenType._abstract, TokenType._class) ||
      this.tokens.matches2(TokenType._export, TokenType.at)
    ) {
      this.processExportClass();
      return true;
    } else if (this.tokens.matches2(TokenType._export, TokenType.star)) {
      this.processExportStar();
      return true;
    } else {
      throw new Error("Unrecognized export syntax.");
    }
  }

   processAssignment() {
    const index = this.tokens.currentIndex();
    const identifierToken = this.tokens.tokens[index - 1];
    // If the LHS is a type identifier, this must be a declaration like `let a: b = c;`,
    // with `b` as the identifier, so nothing needs to be done in that case.
    if (identifierToken.isType || identifierToken.type !== TokenType.name) {
      return false;
    }
    if (identifierToken.shadowsGlobal) {
      return false;
    }
    if (index >= 2 && this.tokens.matches1AtIndex(index - 2, TokenType.dot)) {
      return false;
    }
    if (index >= 2 && [TokenType._var, TokenType._let, TokenType._const].includes(this.tokens.tokens[index - 2].type)) {
      // Declarations don't need an extra assignment. This doesn't avoid the
      // assignment for comma-separated declarations, but it's still correct
      // since the assignment is just redundant.
      return false;
    }
    const assignmentSnippet = this.importProcessor.resolveExportBinding(
      this.tokens.identifierNameForToken(identifierToken),
    );
    if (!assignmentSnippet) {
      return false;
    }
    this.tokens.copyToken();
    this.tokens.appendCode(` ${assignmentSnippet} =`);
    return true;
  }

  /**
   * Process something like `a += 3`, where `a` might be an exported value.
   */
   processComplexAssignment() {
    const index = this.tokens.currentIndex();
    const identifierToken = this.tokens.tokens[index - 1];
    if (identifierToken.type !== TokenType.name) {
      return false;
    }
    if (identifierToken.shadowsGlobal) {
      return false;
    }
    if (index >= 2 && this.tokens.matches1AtIndex(index - 2, TokenType.dot)) {
      return false;
    }
    const assignmentSnippet = this.importProcessor.resolveExportBinding(
      this.tokens.identifierNameForToken(identifierToken),
    );
    if (!assignmentSnippet) {
      return false;
    }
    this.tokens.appendCode(` = ${assignmentSnippet}`);
    this.tokens.copyToken();
    return true;
  }

  /**
   * Process something like `++a`, where `a` might be an exported value.
   */
   processPreIncDec() {
    const index = this.tokens.currentIndex();
    const identifierToken = this.tokens.tokens[index + 1];
    if (identifierToken.type !== TokenType.name) {
      return false;
    }
    if (identifierToken.shadowsGlobal) {
      return false;
    }
    // Ignore things like ++a.b and ++a[b] and ++a().b.
    if (
      index + 2 < this.tokens.tokens.length &&
      (this.tokens.matches1AtIndex(index + 2, TokenType.dot) ||
        this.tokens.matches1AtIndex(index + 2, TokenType.bracketL) ||
        this.tokens.matches1AtIndex(index + 2, TokenType.parenL))
    ) {
      return false;
    }
    const identifierName = this.tokens.identifierNameForToken(identifierToken);
    const assignmentSnippet = this.importProcessor.resolveExportBinding(identifierName);
    if (!assignmentSnippet) {
      return false;
    }
    this.tokens.appendCode(`${assignmentSnippet} = `);
    this.tokens.copyToken();
    return true;
  }

  /**
   * Process something like `a++`, where `a` might be an exported value.
   * This starts at the `a`, not at the `++`.
   */
   processPostIncDec() {
    const index = this.tokens.currentIndex();
    const identifierToken = this.tokens.tokens[index];
    const operatorToken = this.tokens.tokens[index + 1];
    if (identifierToken.type !== TokenType.name) {
      return false;
    }
    if (identifierToken.shadowsGlobal) {
      return false;
    }
    if (index >= 1 && this.tokens.matches1AtIndex(index - 1, TokenType.dot)) {
      return false;
    }
    const identifierName = this.tokens.identifierNameForToken(identifierToken);
    const assignmentSnippet = this.importProcessor.resolveExportBinding(identifierName);
    if (!assignmentSnippet) {
      return false;
    }
    const operatorCode = this.tokens.rawCodeForToken(operatorToken);
    // We might also replace the identifier with something like exports.x, so
    // do that replacement here as well.
    const base = this.importProcessor.getIdentifierReplacement(identifierName) || identifierName;
    if (operatorCode === "++") {
      this.tokens.replaceToken(`(${base} = ${assignmentSnippet} = ${base} + 1, ${base} - 1)`);
    } else if (operatorCode === "--") {
      this.tokens.replaceToken(`(${base} = ${assignmentSnippet} = ${base} - 1, ${base} + 1)`);
    } else {
      throw new Error(`Unexpected operator: ${operatorCode}`);
    }
    this.tokens.removeToken();
    return true;
  }

   processExportDefault() {
    let exportedRuntimeValue = true;
    if (
      this.tokens.matches4(TokenType._export, TokenType._default, TokenType._function, TokenType.name) ||
      // export default async function
      (this.tokens.matches5(TokenType._export, TokenType._default, TokenType.name, TokenType._function, TokenType.name) &&
        this.tokens.matchesContextualAtIndex(
          this.tokens.currentIndex() + 2,
          ContextualKeyword._async,
        ))
    ) {
      this.tokens.removeInitialToken();
      this.tokens.removeToken();
      // Named function export case: change it to a top-level function
      // declaration followed by exports statement.
      const name = this.processNamedFunction();
      this.tokens.appendCode(` exports.default = ${name};`);
    } else if (
      this.tokens.matches4(TokenType._export, TokenType._default, TokenType._class, TokenType.name) ||
      this.tokens.matches5(TokenType._export, TokenType._default, TokenType._abstract, TokenType._class, TokenType.name) ||
      this.tokens.matches3(TokenType._export, TokenType._default, TokenType.at)
    ) {
      this.tokens.removeInitialToken();
      this.tokens.removeToken();
      this.copyDecorators();
      if (this.tokens.matches1(TokenType._abstract)) {
        this.tokens.removeToken();
      }
      const name = this.rootTransformer.processNamedClass();
      this.tokens.appendCode(` exports.default = ${name};`);
      // After this point, this is a plain "export default E" statement.
    } else if (
      shouldElideDefaultExport(
        this.isTypeScriptTransformEnabled,
        this.keepUnusedImports,
        this.tokens,
        this.declarationInfo,
      )
    ) {
      // If the exported value is just an identifier and should be elided by TypeScript
      // rules, then remove it entirely. It will always have the form `export default e`,
      // where `e` is an identifier.
      exportedRuntimeValue = false;
      this.tokens.removeInitialToken();
      this.tokens.removeToken();
      this.tokens.removeToken();
    } else if (this.reactHotLoaderTransformer) {
      // We need to assign E to a variable. Change "export default E" to
      // "let _default; exports.default = _default = E"
      const defaultVarName = this.nameManager.claimFreeName("_default");
      this.tokens.replaceToken(`let ${defaultVarName}; exports.`);
      this.tokens.copyToken();
      this.tokens.appendCode(` = ${defaultVarName} =`);
      this.reactHotLoaderTransformer.setExtractedDefaultExportName(defaultVarName);
    } else {
      // Change "export default E" to "exports.default = E"
      this.tokens.replaceToken("exports.");
      this.tokens.copyToken();
      this.tokens.appendCode(" =");
    }
    if (exportedRuntimeValue) {
      this.hadDefaultExport = true;
    }
  }

   copyDecorators() {
    while (this.tokens.matches1(TokenType.at)) {
      this.tokens.copyToken();
      if (this.tokens.matches1(TokenType.parenL)) {
        this.tokens.copyExpectedToken(TokenType.parenL);
        this.rootTransformer.processBalancedCode();
        this.tokens.copyExpectedToken(TokenType.parenR);
      } else {
        this.tokens.copyExpectedToken(TokenType.name);
        while (this.tokens.matches1(TokenType.dot)) {
          this.tokens.copyExpectedToken(TokenType.dot);
          this.tokens.copyExpectedToken(TokenType.name);
        }
        if (this.tokens.matches1(TokenType.parenL)) {
          this.tokens.copyExpectedToken(TokenType.parenL);
          this.rootTransformer.processBalancedCode();
          this.tokens.copyExpectedToken(TokenType.parenR);
        }
      }
    }
  }

  /**
   * Transform a declaration like `export var`, `export let`, or `export const`.
   */
   processExportVar() {
    if (this.isSimpleExportVar()) {
      this.processSimpleExportVar();
    } else {
      this.processComplexExportVar();
    }
  }

  /**
   * Determine if the export is of the form:
   * export var/let/const [varName] = [expr];
   * In other words, determine if function name inference might apply.
   */
   isSimpleExportVar() {
    let tokenIndex = this.tokens.currentIndex();
    // export
    tokenIndex++;
    // var/let/const
    tokenIndex++;
    if (!this.tokens.matches1AtIndex(tokenIndex, TokenType.name)) {
      return false;
    }
    tokenIndex++;
    while (tokenIndex < this.tokens.tokens.length && this.tokens.tokens[tokenIndex].isType) {
      tokenIndex++;
    }
    if (!this.tokens.matches1AtIndex(tokenIndex, TokenType.eq)) {
      return false;
    }
    return true;
  }

  /**
   * Transform an `export var` declaration initializing a single variable.
   *
   * For example, this:
   * export const f = () => {};
   * becomes this:
   * const f = () => {}; exports.f = f;
   *
   * The variable is unused (e.g. exports.f has the true value of the export).
   * We need to produce an assignment of this form so that the function will
   * have an inferred name of "f", which wouldn't happen in the more general
   * case below.
   */
   processSimpleExportVar() {
    // export
    this.tokens.removeInitialToken();
    // var/let/const
    this.tokens.copyToken();
    const varName = this.tokens.identifierName();
    // x: number  ->  x
    while (!this.tokens.matches1(TokenType.eq)) {
      this.rootTransformer.processToken();
    }
    const endIndex = this.tokens.currentToken().rhsEndIndex;
    if (endIndex == null) {
      throw new Error("Expected = token with an end index.");
    }
    while (this.tokens.currentIndex() < endIndex) {
      this.rootTransformer.processToken();
    }
    this.tokens.appendCode(`; exports.${varName} = ${varName}`);
  }

  /**
   * Transform normal declaration exports, including handling destructuring.
   * For example, this:
   * export const {x: [a = 2, b], c} = d;
   * becomes this:
   * ({x: [exports.a = 2, exports.b], c: exports.c} = d;)
   */
   processComplexExportVar() {
    this.tokens.removeInitialToken();
    this.tokens.removeToken();
    const needsParens = this.tokens.matches1(TokenType.braceL);
    if (needsParens) {
      this.tokens.appendCode("(");
    }

    let depth = 0;
    while (true) {
      if (
        this.tokens.matches1(TokenType.braceL) ||
        this.tokens.matches1(TokenType.dollarBraceL) ||
        this.tokens.matches1(TokenType.bracketL)
      ) {
        depth++;
        this.tokens.copyToken();
      } else if (this.tokens.matches1(TokenType.braceR) || this.tokens.matches1(TokenType.bracketR)) {
        depth--;
        this.tokens.copyToken();
      } else if (
        depth === 0 &&
        !this.tokens.matches1(TokenType.name) &&
        !this.tokens.currentToken().isType
      ) {
        break;
      } else if (this.tokens.matches1(TokenType.eq)) {
        // Default values might have assignments in the RHS that we want to ignore, so skip past
        // them.
        const endIndex = this.tokens.currentToken().rhsEndIndex;
        if (endIndex == null) {
          throw new Error("Expected = token with an end index.");
        }
        while (this.tokens.currentIndex() < endIndex) {
          this.rootTransformer.processToken();
        }
      } else {
        const token = this.tokens.currentToken();
        if (isDeclaration(token)) {
          const name = this.tokens.identifierName();
          let replacement = this.importProcessor.getIdentifierReplacement(name);
          if (replacement === null) {
            throw new Error(`Expected a replacement for ${name} in \`export var\` syntax.`);
          }
          if (isObjectShorthandDeclaration(token)) {
            replacement = `${name}: ${replacement}`;
          }
          this.tokens.replaceToken(replacement);
        } else {
          this.rootTransformer.processToken();
        }
      }
    }

    if (needsParens) {
      // Seek to the end of the RHS.
      const endIndex = this.tokens.currentToken().rhsEndIndex;
      if (endIndex == null) {
        throw new Error("Expected = token with an end index.");
      }
      while (this.tokens.currentIndex() < endIndex) {
        this.rootTransformer.processToken();
      }
      this.tokens.appendCode(")");
    }
  }

  /**
   * Transform this:
   * export function foo() {}
   * into this:
   * function foo() {} exports.foo = foo;
   */
   processExportFunction() {
    this.tokens.replaceToken("");
    const name = this.processNamedFunction();
    this.tokens.appendCode(` exports.${name} = ${name};`);
  }

  /**
   * Skip past a function with a name and return that name.
   */
   processNamedFunction() {
    if (this.tokens.matches1(TokenType._function)) {
      this.tokens.copyToken();
    } else if (this.tokens.matches2(TokenType.name, TokenType._function)) {
      if (!this.tokens.matchesContextual(ContextualKeyword._async)) {
        throw new Error("Expected async keyword in function export.");
      }
      this.tokens.copyToken();
      this.tokens.copyToken();
    }
    if (this.tokens.matches1(TokenType.star)) {
      this.tokens.copyToken();
    }
    if (!this.tokens.matches1(TokenType.name)) {
      throw new Error("Expected identifier for exported function name.");
    }
    const name = this.tokens.identifierName();
    this.tokens.copyToken();
    if (this.tokens.currentToken().isType) {
      this.tokens.removeInitialToken();
      while (this.tokens.currentToken().isType) {
        this.tokens.removeToken();
      }
    }
    this.tokens.copyExpectedToken(TokenType.parenL);
    this.rootTransformer.processBalancedCode();
    this.tokens.copyExpectedToken(TokenType.parenR);
    this.rootTransformer.processPossibleTypeRange();
    this.tokens.copyExpectedToken(TokenType.braceL);
    this.rootTransformer.processBalancedCode();
    this.tokens.copyExpectedToken(TokenType.braceR);
    return name;
  }

  /**
   * Transform this:
   * export class A {}
   * into this:
   * class A {} exports.A = A;
   */
   processExportClass() {
    this.tokens.removeInitialToken();
    this.copyDecorators();
    if (this.tokens.matches1(TokenType._abstract)) {
      this.tokens.removeToken();
    }
    const name = this.rootTransformer.processNamedClass();
    this.tokens.appendCode(` exports.${name} = ${name};`);
  }

  /**
   * Transform this:
   * export {a, b as c};
   * into this:
   * exports.a = a; exports.c = b;
   *
   * OR
   *
   * Transform this:
   * export {a, b as c} from './foo';
   * into the pre-generated Object.defineProperty code from the ImportProcessor.
   *
   * For the first case, if the TypeScript transform is enabled, we need to skip
   * exports that are only defined as types.
   */
   processExportBindings() {
    this.tokens.removeInitialToken();
    this.tokens.removeToken();

    const isReExport = isExportFrom(this.tokens);

    const exportStatements = [];
    while (true) {
      if (this.tokens.matches1(TokenType.braceR)) {
        this.tokens.removeToken();
        break;
      }

      const specifierInfo = getImportExportSpecifierInfo(this.tokens);

      while (this.tokens.currentIndex() < specifierInfo.endIndex) {
        this.tokens.removeToken();
      }

      const shouldRemoveExport =
        specifierInfo.isType ||
        (!isReExport && this.shouldElideExportedIdentifier(specifierInfo.leftName));
      if (!shouldRemoveExport) {
        const exportedName = specifierInfo.rightName;
        if (exportedName === "default") {
          this.hadDefaultExport = true;
        } else {
          this.hadNamedExport = true;
        }
        const localName = specifierInfo.leftName;
        const newLocalName = this.importProcessor.getIdentifierReplacement(localName);
        exportStatements.push(`exports.${exportedName} = ${newLocalName || localName};`);
      }

      if (this.tokens.matches1(TokenType.braceR)) {
        this.tokens.removeToken();
        break;
      }
      if (this.tokens.matches2(TokenType.comma, TokenType.braceR)) {
        this.tokens.removeToken();
        this.tokens.removeToken();
        break;
      } else if (this.tokens.matches1(TokenType.comma)) {
        this.tokens.removeToken();
      } else {
        throw new Error(`Unexpected token: ${JSON.stringify(this.tokens.currentToken())}`);
      }
    }

    if (this.tokens.matchesContextual(ContextualKeyword._from)) {
      // This is an export...from, so throw away the normal named export code
      // and use the Object.defineProperty code from ImportProcessor.
      this.tokens.removeToken();
      const path = this.tokens.stringValue();
      this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(path));
      removeMaybeImportAttributes(this.tokens);
    } else {
      // This is a normal named export, so use that.
      this.tokens.appendCode(exportStatements.join(" "));
    }

    if (this.tokens.matches1(TokenType.semi)) {
      this.tokens.removeToken();
    }
  }

   processExportStar() {
    this.tokens.removeInitialToken();
    while (!this.tokens.matches1(TokenType.string)) {
      this.tokens.removeToken();
    }
    const path = this.tokens.stringValue();
    this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(path));
    removeMaybeImportAttributes(this.tokens);
    if (this.tokens.matches1(TokenType.semi)) {
      this.tokens.removeToken();
    }
  }

   shouldElideExportedIdentifier(name) {
    return (
      this.isTypeScriptTransformEnabled &&
      !this.keepUnusedImports &&
      !this.declarationInfo.valueDeclarations.has(name)
    );
  }
}

;// ./node_modules/sucrase/dist/esm/transformers/ESMImportTransformer.js
















/**
 * Class for editing import statements when we are keeping the code as ESM. We still need to remove
 * type-only imports in TypeScript and Flow.
 */
class ESMImportTransformer extends Transformer {
  
  
  

  constructor(
     tokens,
     nameManager,
     helperManager,
     reactHotLoaderTransformer,
     isTypeScriptTransformEnabled,
     isFlowTransformEnabled,
     keepUnusedImports,
    options,
  ) {
    super();this.tokens = tokens;this.nameManager = nameManager;this.helperManager = helperManager;this.reactHotLoaderTransformer = reactHotLoaderTransformer;this.isTypeScriptTransformEnabled = isTypeScriptTransformEnabled;this.isFlowTransformEnabled = isFlowTransformEnabled;this.keepUnusedImports = keepUnusedImports;;
    this.nonTypeIdentifiers =
      isTypeScriptTransformEnabled && !keepUnusedImports
        ? getNonTypeIdentifiers(tokens, options)
        : new Set();
    this.declarationInfo =
      isTypeScriptTransformEnabled && !keepUnusedImports
        ? getDeclarationInfo(tokens)
        : EMPTY_DECLARATION_INFO;
    this.injectCreateRequireForImportRequire = Boolean(options.injectCreateRequireForImportRequire);
  }

  process() {
    // TypeScript `import foo = require('foo');` should always just be translated to plain require.
    if (this.tokens.matches3(TokenType._import, TokenType.name, TokenType.eq)) {
      return this.processImportEquals();
    }
    if (
      this.tokens.matches4(TokenType._import, TokenType.name, TokenType.name, TokenType.eq) &&
      this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, ContextualKeyword._type)
    ) {
      // import type T = require('T')
      this.tokens.removeInitialToken();
      // This construct is always exactly 8 tokens long, so remove the 7 remaining tokens.
      for (let i = 0; i < 7; i++) {
        this.tokens.removeToken();
      }
      return true;
    }
    if (this.tokens.matches2(TokenType._export, TokenType.eq)) {
      this.tokens.replaceToken("module.exports");
      return true;
    }
    if (
      this.tokens.matches5(TokenType._export, TokenType._import, TokenType.name, TokenType.name, TokenType.eq) &&
      this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 2, ContextualKeyword._type)
    ) {
      // export import type T = require('T')
      this.tokens.removeInitialToken();
      // This construct is always exactly 9 tokens long, so remove the 8 remaining tokens.
      for (let i = 0; i < 8; i++) {
        this.tokens.removeToken();
      }
      return true;
    }
    if (this.tokens.matches1(TokenType._import)) {
      return this.processImport();
    }
    if (this.tokens.matches2(TokenType._export, TokenType._default)) {
      return this.processExportDefault();
    }
    if (this.tokens.matches2(TokenType._export, TokenType.braceL)) {
      return this.processNamedExports();
    }
    if (
      this.tokens.matches2(TokenType._export, TokenType.name) &&
      this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, ContextualKeyword._type)
    ) {
      // export type {a};
      // export type {a as b};
      // export type {a} from './b';
      // export type * from './b';
      // export type * as ns from './b';
      this.tokens.removeInitialToken();
      this.tokens.removeToken();
      if (this.tokens.matches1(TokenType.braceL)) {
        while (!this.tokens.matches1(TokenType.braceR)) {
          this.tokens.removeToken();
        }
        this.tokens.removeToken();
      } else {
        // *
        this.tokens.removeToken();
        if (this.tokens.matches1(TokenType._as)) {
          // as
          this.tokens.removeToken();
          // ns
          this.tokens.removeToken();
        }
      }
      // Remove type re-export `... } from './T'`
      if (
        this.tokens.matchesContextual(ContextualKeyword._from) &&
        this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, TokenType.string)
      ) {
        this.tokens.removeToken();
        this.tokens.removeToken();
        removeMaybeImportAttributes(this.tokens);
      }
      return true;
    }
    return false;
  }

   processImportEquals() {
    const importName = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
    if (this.shouldAutomaticallyElideImportedName(importName)) {
      // If this name is only used as a type, elide the whole import.
      elideImportEquals(this.tokens);
    } else if (this.injectCreateRequireForImportRequire) {
      // We're using require in an environment (Node ESM) that doesn't provide
      // it as a global, so generate a helper to import it.
      // import -> const
      this.tokens.replaceToken("const");
      // Foo
      this.tokens.copyToken();
      // =
      this.tokens.copyToken();
      // require
      this.tokens.replaceToken(this.helperManager.getHelperName("require"));
    } else {
      // Otherwise, just switch `import` to `const`.
      this.tokens.replaceToken("const");
    }
    return true;
  }

   processImport() {
    if (this.tokens.matches2(TokenType._import, TokenType.parenL)) {
      // Dynamic imports don't need to be transformed.
      return false;
    }

    const snapshot = this.tokens.snapshot();
    const allImportsRemoved = this.removeImportTypeBindings();
    if (allImportsRemoved) {
      this.tokens.restoreToSnapshot(snapshot);
      while (!this.tokens.matches1(TokenType.string)) {
        this.tokens.removeToken();
      }
      this.tokens.removeToken();
      removeMaybeImportAttributes(this.tokens);
      if (this.tokens.matches1(TokenType.semi)) {
        this.tokens.removeToken();
      }
    }
    return true;
  }

  /**
   * Remove type bindings from this import, leaving the rest of the import intact.
   *
   * Return true if this import was ONLY types, and thus is eligible for removal. This will bail out
   * of the replacement operation, so we can return early here.
   */
   removeImportTypeBindings() {
    this.tokens.copyExpectedToken(TokenType._import);
    if (
      this.tokens.matchesContextual(ContextualKeyword._type) &&
      !this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, TokenType.comma) &&
      !this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, ContextualKeyword._from)
    ) {
      // This is an "import type" statement, so exit early.
      return true;
    }

    if (this.tokens.matches1(TokenType.string)) {
      // This is a bare import, so we should proceed with the import.
      this.tokens.copyToken();
      return false;
    }

    // Skip the "module" token in import reflection.
    if (
      this.tokens.matchesContextual(ContextualKeyword._module) &&
      this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 2, ContextualKeyword._from)
    ) {
      this.tokens.copyToken();
    }

    let foundNonTypeImport = false;
    let foundAnyNamedImport = false;
    let needsComma = false;

    // Handle default import.
    if (this.tokens.matches1(TokenType.name)) {
      if (this.shouldAutomaticallyElideImportedName(this.tokens.identifierName())) {
        this.tokens.removeToken();
        if (this.tokens.matches1(TokenType.comma)) {
          this.tokens.removeToken();
        }
      } else {
        foundNonTypeImport = true;
        this.tokens.copyToken();
        if (this.tokens.matches1(TokenType.comma)) {
          // We're in a statement like:
          // import A, * as B from './A';
          // or
          // import A, {foo} from './A';
          // where the `A` is being kept. The comma should be removed if an only
          // if the next part of the import statement is elided, but that's hard
          // to determine at this point in the code. Instead, always remove it
          // and set a flag to add it back if necessary.
          needsComma = true;
          this.tokens.removeToken();
        }
      }
    }

    if (this.tokens.matches1(TokenType.star)) {
      if (this.shouldAutomaticallyElideImportedName(this.tokens.identifierNameAtRelativeIndex(2))) {
        this.tokens.removeToken();
        this.tokens.removeToken();
        this.tokens.removeToken();
      } else {
        if (needsComma) {
          this.tokens.appendCode(",");
        }
        foundNonTypeImport = true;
        this.tokens.copyExpectedToken(TokenType.star);
        this.tokens.copyExpectedToken(TokenType.name);
        this.tokens.copyExpectedToken(TokenType.name);
      }
    } else if (this.tokens.matches1(TokenType.braceL)) {
      if (needsComma) {
        this.tokens.appendCode(",");
      }
      this.tokens.copyToken();
      while (!this.tokens.matches1(TokenType.braceR)) {
        foundAnyNamedImport = true;
        const specifierInfo = getImportExportSpecifierInfo(this.tokens);
        if (
          specifierInfo.isType ||
          this.shouldAutomaticallyElideImportedName(specifierInfo.rightName)
        ) {
          while (this.tokens.currentIndex() < specifierInfo.endIndex) {
            this.tokens.removeToken();
          }
          if (this.tokens.matches1(TokenType.comma)) {
            this.tokens.removeToken();
          }
        } else {
          foundNonTypeImport = true;
          while (this.tokens.currentIndex() < specifierInfo.endIndex) {
            this.tokens.copyToken();
          }
          if (this.tokens.matches1(TokenType.comma)) {
            this.tokens.copyToken();
          }
        }
      }
      this.tokens.copyExpectedToken(TokenType.braceR);
    }

    if (this.keepUnusedImports) {
      return false;
    }
    if (this.isTypeScriptTransformEnabled) {
      return !foundNonTypeImport;
    } else if (this.isFlowTransformEnabled) {
      // In Flow, unlike TS, `import {} from 'foo';` preserves the import.
      return foundAnyNamedImport && !foundNonTypeImport;
    } else {
      return false;
    }
  }

   shouldAutomaticallyElideImportedName(name) {
    return (
      this.isTypeScriptTransformEnabled &&
      !this.keepUnusedImports &&
      !this.nonTypeIdentifiers.has(name)
    );
  }

   processExportDefault() {
    if (
      shouldElideDefaultExport(
        this.isTypeScriptTransformEnabled,
        this.keepUnusedImports,
        this.tokens,
        this.declarationInfo,
      )
    ) {
      // If the exported value is just an identifier and should be elided by TypeScript
      // rules, then remove it entirely. It will always have the form `export default e`,
      // where `e` is an identifier.
      this.tokens.removeInitialToken();
      this.tokens.removeToken();
      this.tokens.removeToken();
      return true;
    }

    const alreadyHasName =
      this.tokens.matches4(TokenType._export, TokenType._default, TokenType._function, TokenType.name) ||
      // export default async function
      (this.tokens.matches5(TokenType._export, TokenType._default, TokenType.name, TokenType._function, TokenType.name) &&
        this.tokens.matchesContextualAtIndex(
          this.tokens.currentIndex() + 2,
          ContextualKeyword._async,
        )) ||
      this.tokens.matches4(TokenType._export, TokenType._default, TokenType._class, TokenType.name) ||
      this.tokens.matches5(TokenType._export, TokenType._default, TokenType._abstract, TokenType._class, TokenType.name);

    if (!alreadyHasName && this.reactHotLoaderTransformer) {
      // This is a plain "export default E" statement and we need to assign E to a variable.
      // Change "export default E" to "let _default; export default _default = E"
      const defaultVarName = this.nameManager.claimFreeName("_default");
      this.tokens.replaceToken(`let ${defaultVarName}; export`);
      this.tokens.copyToken();
      this.tokens.appendCode(` ${defaultVarName} =`);
      this.reactHotLoaderTransformer.setExtractedDefaultExportName(defaultVarName);
      return true;
    }
    return false;
  }

  /**
   * Handle a statement with one of these forms:
   * export {a, type b};
   * export {c, type d} from 'foo';
   *
   * In both cases, any explicit type exports should be removed. In the first
   * case, we also need to handle implicit export elision for names declared as
   * types. In the second case, we must NOT do implicit named export elision,
   * but we must remove the runtime import if all exports are type exports.
   */
   processNamedExports() {
    if (!this.isTypeScriptTransformEnabled) {
      return false;
    }
    this.tokens.copyExpectedToken(TokenType._export);
    this.tokens.copyExpectedToken(TokenType.braceL);

    const isReExport = isExportFrom(this.tokens);
    let foundNonTypeExport = false;
    while (!this.tokens.matches1(TokenType.braceR)) {
      const specifierInfo = getImportExportSpecifierInfo(this.tokens);
      if (
        specifierInfo.isType ||
        (!isReExport && this.shouldElideExportedName(specifierInfo.leftName))
      ) {
        // Type export, so remove all tokens, including any comma.
        while (this.tokens.currentIndex() < specifierInfo.endIndex) {
          this.tokens.removeToken();
        }
        if (this.tokens.matches1(TokenType.comma)) {
          this.tokens.removeToken();
        }
      } else {
        // Non-type export, so copy all tokens, including any comma.
        foundNonTypeExport = true;
        while (this.tokens.currentIndex() < specifierInfo.endIndex) {
          this.tokens.copyToken();
        }
        if (this.tokens.matches1(TokenType.comma)) {
          this.tokens.copyToken();
        }
      }
    }
    this.tokens.copyExpectedToken(TokenType.braceR);

    if (!this.keepUnusedImports && isReExport && !foundNonTypeExport) {
      // This is a type-only re-export, so skip evaluating the other module. Technically this
      // leaves the statement as `export {}`, but that's ok since that's a no-op.
      this.tokens.removeToken();
      this.tokens.removeToken();
      removeMaybeImportAttributes(this.tokens);
    }

    return true;
  }

  /**
   * ESM elides all imports with the rule that we only elide if we see that it's
   * a type and never see it as a value. This is in contrast to CJS, which
   * elides imports that are completely unknown.
   */
   shouldElideExportedName(name) {
    return (
      this.isTypeScriptTransformEnabled &&
      !this.keepUnusedImports &&
      this.declarationInfo.typeDeclarations.has(name) &&
      !this.declarationInfo.valueDeclarations.has(name)
    );
  }
}

;// ./node_modules/sucrase/dist/esm/transformers/FlowTransformer.js






class FlowTransformer extends Transformer {
  constructor(
     rootTransformer,
     tokens,
     isImportsTransformEnabled,
  ) {
    super();this.rootTransformer = rootTransformer;this.tokens = tokens;this.isImportsTransformEnabled = isImportsTransformEnabled;;
  }

  process() {
    if (
      this.rootTransformer.processPossibleArrowParamEnd() ||
      this.rootTransformer.processPossibleAsyncArrowWithTypeParams() ||
      this.rootTransformer.processPossibleTypeRange()
    ) {
      return true;
    }
    if (this.tokens.matches1(TokenType._enum)) {
      this.processEnum();
      return true;
    }
    if (this.tokens.matches2(TokenType._export, TokenType._enum)) {
      this.processNamedExportEnum();
      return true;
    }
    if (this.tokens.matches3(TokenType._export, TokenType._default, TokenType._enum)) {
      this.processDefaultExportEnum();
      return true;
    }
    return false;
  }

  /**
   * Handle a declaration like:
   * export enum E ...
   *
   * With this imports transform, this becomes:
   * const E = [[enum]]; exports.E = E;
   *
   * otherwise, it becomes:
   * export const E = [[enum]];
   */
  processNamedExportEnum() {
    if (this.isImportsTransformEnabled) {
      // export
      this.tokens.removeInitialToken();
      const enumName = this.tokens.identifierNameAtRelativeIndex(1);
      this.processEnum();
      this.tokens.appendCode(` exports.${enumName} = ${enumName};`);
    } else {
      this.tokens.copyToken();
      this.processEnum();
    }
  }

  /**
   * Handle a declaration like:
   * export default enum E
   *
   * With the imports transform, this becomes:
   * const E = [[enum]]; exports.default = E;
   *
   * otherwise, it becomes:
   * const E = [[enum]]; export default E;
   */
  processDefaultExportEnum() {
    // export
    this.tokens.removeInitialToken();
    // default
    this.tokens.removeToken();
    const enumName = this.tokens.identifierNameAtRelativeIndex(1);
    this.processEnum();
    if (this.isImportsTransformEnabled) {
      this.tokens.appendCode(` exports.default = ${enumName};`);
    } else {
      this.tokens.appendCode(` export default ${enumName};`);
    }
  }

  /**
   * Transpile flow enums to invoke the "flow-enums-runtime" library.
   *
   * Currently, the transpiled code always uses `require("flow-enums-runtime")`,
   * but if future flexibility is needed, we could expose a config option for
   * this string (similar to configurable JSX). Even when targeting ESM, the
   * default behavior of babel-plugin-transform-flow-enums is to use require
   * rather than injecting an import.
   *
   * Flow enums are quite a bit simpler than TS enums and have some convenient
   * constraints:
   * - Element initializers must be either always present or always absent. That
   *   means that we can use fixed lookahead on the first element (if any) and
   *   assume that all elements are like that.
   * - The right-hand side of an element initializer must be a literal value,
   *   not a complex expression and not referencing other elements. That means
   *   we can simply copy a single token.
   *
   * Enums can be broken up into three basic cases:
   *
   * Mirrored enums:
   * enum E {A, B}
   *   ->
   * const E = require("flow-enums-runtime").Mirrored(["A", "B"]);
   *
   * Initializer enums:
   * enum E {A = 1, B = 2}
   *   ->
   * const E = require("flow-enums-runtime")({A: 1, B: 2});
   *
   * Symbol enums:
   * enum E of symbol {A, B}
   *   ->
   * const E = require("flow-enums-runtime")({A: Symbol("A"), B: Symbol("B")});
   *
   * We can statically detect which of the three cases this is by looking at the
   * "of" declaration (if any) and seeing if the first element has an initializer.
   * Since the other transform details are so similar between the three cases, we
   * use a single implementation and vary the transform within processEnumElement
   * based on case.
   */
  processEnum() {
    // enum E -> const E
    this.tokens.replaceToken("const");
    this.tokens.copyExpectedToken(TokenType.name);

    let isSymbolEnum = false;
    if (this.tokens.matchesContextual(ContextualKeyword._of)) {
      this.tokens.removeToken();
      isSymbolEnum = this.tokens.matchesContextual(ContextualKeyword._symbol);
      this.tokens.removeToken();
    }
    const hasInitializers = this.tokens.matches3(TokenType.braceL, TokenType.name, TokenType.eq);
    this.tokens.appendCode(' = require("flow-enums-runtime")');

    const isMirrored = !isSymbolEnum && !hasInitializers;
    this.tokens.replaceTokenTrimmingLeftWhitespace(isMirrored ? ".Mirrored([" : "({");

    while (!this.tokens.matches1(TokenType.braceR)) {
      // ... is allowed at the end and has no runtime behavior.
      if (this.tokens.matches1(TokenType.ellipsis)) {
        this.tokens.removeToken();
        break;
      }
      this.processEnumElement(isSymbolEnum, hasInitializers);
      if (this.tokens.matches1(TokenType.comma)) {
        this.tokens.copyToken();
      }
    }

    this.tokens.replaceToken(isMirrored ? "]);" : "});");
  }

  /**
   * Process an individual enum element, producing either an array element or an
   * object element based on what type of enum this is.
   */
  processEnumElement(isSymbolEnum, hasInitializers) {
    if (isSymbolEnum) {
      // Symbol enums never have initializers and are expanded to object elements.
      // A, -> A: Symbol("A"),
      const elementName = this.tokens.identifierName();
      this.tokens.copyToken();
      this.tokens.appendCode(`: Symbol("${elementName}")`);
    } else if (hasInitializers) {
      // Initializers are expanded to object elements.
      // A = 1, -> A: 1,
      this.tokens.copyToken();
      this.tokens.replaceTokenTrimmingLeftWhitespace(":");
      this.tokens.copyToken();
    } else {
      // Enum elements without initializers become string literal array elements.
      // A, -> "A",
      this.tokens.replaceToken(`"${this.tokens.identifierName()}"`);
    }
  }
}

;// ./node_modules/sucrase/dist/esm/transformers/JestHoistTransformer.js
 function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }






const JEST_GLOBAL_NAME = "jest";
const HOISTED_METHODS = ["mock", "unmock", "enableAutomock", "disableAutomock"];

/**
 * Implementation of babel-plugin-jest-hoist, which hoists up some jest method
 * calls above the imports to allow them to override other imports.
 *
 * To preserve line numbers, rather than directly moving the jest.mock code, we
 * wrap each invocation in a function statement and then call the function from
 * the top of the file.
 */
class JestHoistTransformer extends Transformer {
    __init() {this.hoistedFunctionNames = []}

  constructor(
     rootTransformer,
     tokens,
     nameManager,
     importProcessor,
  ) {
    super();this.rootTransformer = rootTransformer;this.tokens = tokens;this.nameManager = nameManager;this.importProcessor = importProcessor;JestHoistTransformer.prototype.__init.call(this);;
  }

  process() {
    if (
      this.tokens.currentToken().scopeDepth === 0 &&
      this.tokens.matches4(TokenType.name, TokenType.dot, TokenType.name, TokenType.parenL) &&
      this.tokens.identifierName() === JEST_GLOBAL_NAME
    ) {
      // TODO: This only works if imports transform is active, which it will be for jest.
      //       But if jest adds module support and we no longer need the import transform, this needs fixing.
      if (_optionalChain([this, 'access', _ => _.importProcessor, 'optionalAccess', _2 => _2.getGlobalNames, 'call', _3 => _3(), 'optionalAccess', _4 => _4.has, 'call', _5 => _5(JEST_GLOBAL_NAME)])) {
        return false;
      }
      return this.extractHoistedCalls();
    }

    return false;
  }

  getHoistedCode() {
    if (this.hoistedFunctionNames.length > 0) {
      // This will be placed before module interop code, but that's fine since
      // imports aren't allowed in module mock factories.
      return this.hoistedFunctionNames.map((name) => `${name}();`).join("");
    }
    return "";
  }

  /**
   * Extracts any methods calls on the jest-object that should be hoisted.
   *
   * According to the jest docs, https://jestjs.io/docs/en/jest-object#jestmockmodulename-factory-options,
   * mock, unmock, enableAutomock, disableAutomock, are the methods that should be hoisted.
   *
   * We do not apply the same checks of the arguments as babel-plugin-jest-hoist does.
   */
   extractHoistedCalls() {
    // We're handling a chain of calls where `jest` may or may not need to be inserted for each call
    // in the chain, so remove the initial `jest` to make the loop implementation cleaner.
    this.tokens.removeToken();
    // Track some state so that multiple non-hoisted chained calls in a row keep their chaining
    // syntax.
    let followsNonHoistedJestCall = false;

    // Iterate through all chained calls on the jest object.
    while (this.tokens.matches3(TokenType.dot, TokenType.name, TokenType.parenL)) {
      const methodName = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
      const shouldHoist = HOISTED_METHODS.includes(methodName);
      if (shouldHoist) {
        // We've matched e.g. `.mock(...)` or similar call.
        // Replace the initial `.` with `function __jestHoist(){jest.`
        const hoistedFunctionName = this.nameManager.claimFreeName("__jestHoist");
        this.hoistedFunctionNames.push(hoistedFunctionName);
        this.tokens.replaceToken(`function ${hoistedFunctionName}(){${JEST_GLOBAL_NAME}.`);
        this.tokens.copyToken();
        this.tokens.copyToken();
        this.rootTransformer.processBalancedCode();
        this.tokens.copyExpectedToken(TokenType.parenR);
        this.tokens.appendCode(";}");
        followsNonHoistedJestCall = false;
      } else {
        // This is a non-hoisted method, so just transform the code as usual.
        if (followsNonHoistedJestCall) {
          // If we didn't hoist the previous call, we can leave the code as-is to chain off of the
          // previous method call. It's important to preserve the code here because we don't know
          // for sure that the method actually returned the jest object for chaining.
          this.tokens.copyToken();
        } else {
          // If we hoisted the previous call, we know it returns the jest object back, so we insert
          // the identifier `jest` to continue the chain.
          this.tokens.replaceToken(`${JEST_GLOBAL_NAME}.`);
        }
        this.tokens.copyToken();
        this.tokens.copyToken();
        this.rootTransformer.processBalancedCode();
        this.tokens.copyExpectedToken(TokenType.parenR);
        followsNonHoistedJestCall = true;
      }
    }

    return true;
  }
}

;// ./node_modules/sucrase/dist/esm/transformers/NumericSeparatorTransformer.js




class NumericSeparatorTransformer extends Transformer {
  constructor( tokens) {
    super();this.tokens = tokens;;
  }

  process() {
    if (this.tokens.matches1(TokenType.num)) {
      const code = this.tokens.currentTokenCode();
      if (code.includes("_")) {
        this.tokens.replaceToken(code.replace(/_/g, ""));
        return true;
      }
    }
    return false;
  }
}

;// ./node_modules/sucrase/dist/esm/transformers/OptionalCatchBindingTransformer.js





class OptionalCatchBindingTransformer extends Transformer {
  constructor( tokens,  nameManager) {
    super();this.tokens = tokens;this.nameManager = nameManager;;
  }

  process() {
    if (this.tokens.matches2(TokenType._catch, TokenType.braceL)) {
      this.tokens.copyToken();
      this.tokens.appendCode(` (${this.nameManager.claimFreeName("e")})`);
      return true;
    }
    return false;
  }
}

;// ./node_modules/sucrase/dist/esm/transformers/OptionalChainingNullishTransformer.js





/**
 * Transformer supporting the optional chaining and nullish coalescing operators.
 *
 * Tech plan here:
 * https://github.com/alangpierce/sucrase/wiki/Sucrase-Optional-Chaining-and-Nullish-Coalescing-Technical-Plan
 *
 * The prefix and suffix code snippets are handled by TokenProcessor, and this transformer handles
 * the operators themselves.
 */
class OptionalChainingNullishTransformer extends Transformer {
  constructor( tokens,  nameManager) {
    super();this.tokens = tokens;this.nameManager = nameManager;;
  }

  process() {
    if (this.tokens.matches1(TokenType.nullishCoalescing)) {
      const token = this.tokens.currentToken();
      if (this.tokens.tokens[token.nullishStartIndex].isAsyncOperation) {
        this.tokens.replaceTokenTrimmingLeftWhitespace(", async () => (");
      } else {
        this.tokens.replaceTokenTrimmingLeftWhitespace(", () => (");
      }
      return true;
    }
    if (this.tokens.matches1(TokenType._delete)) {
      const nextToken = this.tokens.tokenAtRelativeIndex(1);
      if (nextToken.isOptionalChainStart) {
        this.tokens.removeInitialToken();
        return true;
      }
    }
    const token = this.tokens.currentToken();
    const chainStart = token.subscriptStartIndex;
    if (
      chainStart != null &&
      this.tokens.tokens[chainStart].isOptionalChainStart &&
      // Super subscripts can't be optional (since super is never null/undefined), and the syntax
      // relies on the subscript being intact, so leave this token alone.
      this.tokens.tokenAtRelativeIndex(-1).type !== TokenType._super
    ) {
      const param = this.nameManager.claimFreeName("_");
      let arrowStartSnippet;
      if (
        chainStart > 0 &&
        this.tokens.matches1AtIndex(chainStart - 1, TokenType._delete) &&
        this.isLastSubscriptInChain()
      ) {
        // Delete operations are special: we already removed the delete keyword, and to still
        // perform a delete, we need to insert a delete in the very last part of the chain, which
        // in correct code will always be a property access.
        arrowStartSnippet = `${param} => delete ${param}`;
      } else {
        arrowStartSnippet = `${param} => ${param}`;
      }
      if (this.tokens.tokens[chainStart].isAsyncOperation) {
        arrowStartSnippet = `async ${arrowStartSnippet}`;
      }
      if (
        this.tokens.matches2(TokenType.questionDot, TokenType.parenL) ||
        this.tokens.matches2(TokenType.questionDot, TokenType.lessThan)
      ) {
        if (this.justSkippedSuper()) {
          this.tokens.appendCode(".bind(this)");
        }
        this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalCall', ${arrowStartSnippet}`);
      } else if (this.tokens.matches2(TokenType.questionDot, TokenType.bracketL)) {
        this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalAccess', ${arrowStartSnippet}`);
      } else if (this.tokens.matches1(TokenType.questionDot)) {
        this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalAccess', ${arrowStartSnippet}.`);
      } else if (this.tokens.matches1(TokenType.dot)) {
        this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'access', ${arrowStartSnippet}.`);
      } else if (this.tokens.matches1(TokenType.bracketL)) {
        this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'access', ${arrowStartSnippet}[`);
      } else if (this.tokens.matches1(TokenType.parenL)) {
        if (this.justSkippedSuper()) {
          this.tokens.appendCode(".bind(this)");
        }
        this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'call', ${arrowStartSnippet}(`);
      } else {
        throw new Error("Unexpected subscript operator in optional chain.");
      }
      return true;
    }
    return false;
  }

  /**
   * Determine if the current token is the last of its chain, so that we know whether it's eligible
   * to have a delete op inserted.
   *
   * We can do this by walking forward until we determine one way or another. Each
   * isOptionalChainStart token must be paired with exactly one isOptionalChainEnd token after it in
   * a nesting way, so we can track depth and walk to the end of the chain (the point where the
   * depth goes negative) and see if any other subscript token is after us in the chain.
   */
  isLastSubscriptInChain() {
    let depth = 0;
    for (let i = this.tokens.currentIndex() + 1; ; i++) {
      if (i >= this.tokens.tokens.length) {
        throw new Error("Reached the end of the code while finding the end of the access chain.");
      }
      if (this.tokens.tokens[i].isOptionalChainStart) {
        depth++;
      } else if (this.tokens.tokens[i].isOptionalChainEnd) {
        depth--;
      }
      if (depth < 0) {
        return true;
      }

      // This subscript token is a later one in the same chain.
      if (depth === 0 && this.tokens.tokens[i].subscriptStartIndex != null) {
        return false;
      }
    }
  }

  /**
   * Determine if we are the open-paren in an expression like super.a()?.b.
   *
   * We can do this by walking backward to find the previous subscript. If that subscript was
   * preceded by a super, then we must be the subscript after it, so if this is a call expression,
   * we'll need to attach the right context.
   */
  justSkippedSuper() {
    let depth = 0;
    let index = this.tokens.currentIndex() - 1;
    while (true) {
      if (index < 0) {
        throw new Error(
          "Reached the start of the code while finding the start of the access chain.",
        );
      }
      if (this.tokens.tokens[index].isOptionalChainStart) {
        depth--;
      } else if (this.tokens.tokens[index].isOptionalChainEnd) {
        depth++;
      }
      if (depth < 0) {
        return false;
      }

      // This subscript token is a later one in the same chain.
      if (depth === 0 && this.tokens.tokens[index].subscriptStartIndex != null) {
        return this.tokens.tokens[index - 1].type === TokenType._super;
      }
      index--;
    }
  }
}

;// ./node_modules/sucrase/dist/esm/transformers/ReactDisplayNameTransformer.js








/**
 * Implementation of babel-plugin-transform-react-display-name, which adds a
 * display name to usages of React.createClass and createReactClass.
 */
class ReactDisplayNameTransformer extends Transformer {
  constructor(
     rootTransformer,
     tokens,
     importProcessor,
     options,
  ) {
    super();this.rootTransformer = rootTransformer;this.tokens = tokens;this.importProcessor = importProcessor;this.options = options;;
  }

  process() {
    const startIndex = this.tokens.currentIndex();
    if (this.tokens.identifierName() === "createReactClass") {
      const newName =
        this.importProcessor && this.importProcessor.getIdentifierReplacement("createReactClass");
      if (newName) {
        this.tokens.replaceToken(`(0, ${newName})`);
      } else {
        this.tokens.copyToken();
      }
      this.tryProcessCreateClassCall(startIndex);
      return true;
    }
    if (
      this.tokens.matches3(TokenType.name, TokenType.dot, TokenType.name) &&
      this.tokens.identifierName() === "React" &&
      this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 2) === "createClass"
    ) {
      const newName = this.importProcessor
        ? this.importProcessor.getIdentifierReplacement("React") || "React"
        : "React";
      if (newName) {
        this.tokens.replaceToken(newName);
        this.tokens.copyToken();
        this.tokens.copyToken();
      } else {
        this.tokens.copyToken();
        this.tokens.copyToken();
        this.tokens.copyToken();
      }
      this.tryProcessCreateClassCall(startIndex);
      return true;
    }
    return false;
  }

  /**
   * This is called with the token position at the open-paren.
   */
   tryProcessCreateClassCall(startIndex) {
    const displayName = this.findDisplayName(startIndex);
    if (!displayName) {
      return;
    }

    if (this.classNeedsDisplayName()) {
      this.tokens.copyExpectedToken(TokenType.parenL);
      this.tokens.copyExpectedToken(TokenType.braceL);
      this.tokens.appendCode(`displayName: '${displayName}',`);
      this.rootTransformer.processBalancedCode();
      this.tokens.copyExpectedToken(TokenType.braceR);
      this.tokens.copyExpectedToken(TokenType.parenR);
    }
  }

   findDisplayName(startIndex) {
    if (startIndex < 2) {
      return null;
    }
    if (this.tokens.matches2AtIndex(startIndex - 2, TokenType.name, TokenType.eq)) {
      // This is an assignment (or declaration) and the LHS is either an identifier or a member
      // expression ending in an identifier, so use that identifier name.
      return this.tokens.identifierNameAtIndex(startIndex - 2);
    }
    if (
      startIndex >= 2 &&
      this.tokens.tokens[startIndex - 2].identifierRole === IdentifierRole.ObjectKey
    ) {
      // This is an object literal value.
      return this.tokens.identifierNameAtIndex(startIndex - 2);
    }
    if (this.tokens.matches2AtIndex(startIndex - 2, TokenType._export, TokenType._default)) {
      return this.getDisplayNameFromFilename();
    }
    return null;
  }

   getDisplayNameFromFilename() {
    const filePath = this.options.filePath || "unknown";
    const pathSegments = filePath.split("/");
    const filename = pathSegments[pathSegments.length - 1];
    const dotIndex = filename.lastIndexOf(".");
    const baseFilename = dotIndex === -1 ? filename : filename.slice(0, dotIndex);
    if (baseFilename === "index" && pathSegments[pathSegments.length - 2]) {
      return pathSegments[pathSegments.length - 2];
    } else {
      return baseFilename;
    }
  }

  /**
   * We only want to add a display name when this is a function call containing
   * one argument, which is an object literal without `displayName` as an
   * existing key.
   */
   classNeedsDisplayName() {
    let index = this.tokens.currentIndex();
    if (!this.tokens.matches2(TokenType.parenL, TokenType.braceL)) {
      return false;
    }
    // The block starts on the {, and we expect any displayName key to be in
    // that context. We need to ignore other other contexts to avoid matching
    // nested displayName keys.
    const objectStartIndex = index + 1;
    const objectContextId = this.tokens.tokens[objectStartIndex].contextId;
    if (objectContextId == null) {
      throw new Error("Expected non-null context ID on object open-brace.");
    }

    for (; index < this.tokens.tokens.length; index++) {
      const token = this.tokens.tokens[index];
      if (token.type === TokenType.braceR && token.contextId === objectContextId) {
        index++;
        break;
      }

      if (
        this.tokens.identifierNameAtIndex(index) === "displayName" &&
        this.tokens.tokens[index].identifierRole === IdentifierRole.ObjectKey &&
        token.contextId === objectContextId
      ) {
        // We found a displayName key, so bail out.
        return false;
      }
    }

    if (index === this.tokens.tokens.length) {
      throw new Error("Unexpected end of input when processing React class.");
    }

    // If we got this far, we know we have createClass with an object with no
    // display name, so we want to proceed as long as that was the only argument.
    return (
      this.tokens.matches1AtIndex(index, TokenType.parenR) ||
      this.tokens.matches2AtIndex(index, TokenType.comma, TokenType.parenR)
    );
  }
}

;// ./node_modules/sucrase/dist/esm/transformers/ReactHotLoaderTransformer.js




class ReactHotLoaderTransformer extends Transformer {
   __init() {this.extractedDefaultExportName = null}

  constructor( tokens,  filePath) {
    super();this.tokens = tokens;this.filePath = filePath;ReactHotLoaderTransformer.prototype.__init.call(this);;
  }

  setExtractedDefaultExportName(extractedDefaultExportName) {
    this.extractedDefaultExportName = extractedDefaultExportName;
  }

  getPrefixCode() {
    return `
      (function () {
        var enterModule = require('react-hot-loader').enterModule;
        enterModule && enterModule(module);
      })();`
      .replace(/\s+/g, " ")
      .trim();
  }

  getSuffixCode() {
    const topLevelNames = new Set();
    for (const token of this.tokens.tokens) {
      if (
        !token.isType &&
        isTopLevelDeclaration(token) &&
        token.identifierRole !== IdentifierRole.ImportDeclaration
      ) {
        topLevelNames.add(this.tokens.identifierNameForToken(token));
      }
    }
    const namesToRegister = Array.from(topLevelNames).map((name) => ({
      variableName: name,
      uniqueLocalName: name,
    }));
    if (this.extractedDefaultExportName) {
      namesToRegister.push({
        variableName: this.extractedDefaultExportName,
        uniqueLocalName: "default",
      });
    }
    return `
;(function () {
  var reactHotLoader = require('react-hot-loader').default;
  var leaveModule = require('react-hot-loader').leaveModule;
  if (!reactHotLoader) {
    return;
  }
${namesToRegister
  .map(
    ({variableName, uniqueLocalName}) =>
      `  reactHotLoader.register(${variableName}, "${uniqueLocalName}", ${JSON.stringify(
        this.filePath || "",
      )});`,
  )
  .join("\n")}
  leaveModule(module);
})();`;
  }

  process() {
    return false;
  }
}

;// ./node_modules/sucrase/dist/esm/util/isIdentifier.js


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar
// Hard-code a list of reserved words rather than trying to use keywords or contextual keywords
// from the parser, since currently there are various exceptions, like `package` being reserved
// but unused and various contextual keywords being reserved. Note that we assume that all code
// compiled by Sucrase is in a module, so strict mode words and await are all considered reserved
// here.
const RESERVED_WORDS = new Set([
  // Reserved keywords as of ECMAScript 2015
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "export",
  "extends",
  "finally",
  "for",
  "function",
  "if",
  "import",
  "in",
  "instanceof",
  "new",
  "return",
  "super",
  "switch",
  "this",
  "throw",
  "try",
  "typeof",
  "var",
  "void",
  "while",
  "with",
  "yield",
  // Future reserved keywords
  "enum",
  "implements",
  "interface",
  "let",
  "package",
  "private",
  "protected",
  "public",
  "static",
  "await",
  // Literals that cannot be used as identifiers
  "false",
  "null",
  "true",
]);

/**
 * Determine if the given name is a legal variable name.
 *
 * This is needed when transforming TypeScript enums; if an enum key is a valid
 * variable name, it might be referenced later in the enum, so we need to
 * declare a variable.
 */
function isIdentifier(name) {
  if (name.length === 0) {
    return false;
  }
  if (!IS_IDENTIFIER_START[name.charCodeAt(0)]) {
    return false;
  }
  for (let i = 1; i < name.length; i++) {
    if (!IS_IDENTIFIER_CHAR[name.charCodeAt(i)]) {
      return false;
    }
  }
  return !RESERVED_WORDS.has(name);
}

;// ./node_modules/sucrase/dist/esm/transformers/TypeScriptTransformer.js







class TypeScriptTransformer extends Transformer {
  constructor(
     rootTransformer,
     tokens,
     isImportsTransformEnabled,
  ) {
    super();this.rootTransformer = rootTransformer;this.tokens = tokens;this.isImportsTransformEnabled = isImportsTransformEnabled;;
  }

  process() {
    if (
      this.rootTransformer.processPossibleArrowParamEnd() ||
      this.rootTransformer.processPossibleAsyncArrowWithTypeParams() ||
      this.rootTransformer.processPossibleTypeRange()
    ) {
      return true;
    }
    if (
      this.tokens.matches1(TokenType._public) ||
      this.tokens.matches1(TokenType._protected) ||
      this.tokens.matches1(TokenType._private) ||
      this.tokens.matches1(TokenType._abstract) ||
      this.tokens.matches1(TokenType._readonly) ||
      this.tokens.matches1(TokenType._override) ||
      this.tokens.matches1(TokenType.nonNullAssertion)
    ) {
      this.tokens.removeInitialToken();
      return true;
    }
    if (this.tokens.matches1(TokenType._enum) || this.tokens.matches2(TokenType._const, TokenType._enum)) {
      this.processEnum();
      return true;
    }
    if (
      this.tokens.matches2(TokenType._export, TokenType._enum) ||
      this.tokens.matches3(TokenType._export, TokenType._const, TokenType._enum)
    ) {
      this.processEnum(true);
      return true;
    }
    return false;
  }

  processEnum(isExport = false) {
    // We might have "export const enum", so just remove all relevant tokens.
    this.tokens.removeInitialToken();
    while (this.tokens.matches1(TokenType._const) || this.tokens.matches1(TokenType._enum)) {
      this.tokens.removeToken();
    }
    const enumName = this.tokens.identifierName();
    this.tokens.removeToken();
    if (isExport && !this.isImportsTransformEnabled) {
      this.tokens.appendCode("export ");
    }
    this.tokens.appendCode(`var ${enumName}; (function (${enumName})`);
    this.tokens.copyExpectedToken(TokenType.braceL);
    this.processEnumBody(enumName);
    this.tokens.copyExpectedToken(TokenType.braceR);
    if (isExport && this.isImportsTransformEnabled) {
      this.tokens.appendCode(`)(${enumName} || (exports.${enumName} = ${enumName} = {}));`);
    } else {
      this.tokens.appendCode(`)(${enumName} || (${enumName} = {}));`);
    }
  }

  /**
   * Transform an enum into equivalent JS. This has complexity in a few places:
   * - TS allows string enums, numeric enums, and a mix of the two styles within an enum.
   * - Enum keys are allowed to be referenced in later enum values.
   * - Enum keys are allowed to be strings.
   * - When enum values are omitted, they should follow an auto-increment behavior.
   */
  processEnumBody(enumName) {
    // Code that can be used to reference the previous enum member, or null if this is the first
    // enum member.
    let previousValueCode = null;
    while (true) {
      if (this.tokens.matches1(TokenType.braceR)) {
        break;
      }
      const {nameStringCode, variableName} = this.extractEnumKeyInfo(this.tokens.currentToken());
      this.tokens.removeInitialToken();

      if (
        this.tokens.matches3(TokenType.eq, TokenType.string, TokenType.comma) ||
        this.tokens.matches3(TokenType.eq, TokenType.string, TokenType.braceR)
      ) {
        this.processStringLiteralEnumMember(enumName, nameStringCode, variableName);
      } else if (this.tokens.matches1(TokenType.eq)) {
        this.processExplicitValueEnumMember(enumName, nameStringCode, variableName);
      } else {
        this.processImplicitValueEnumMember(
          enumName,
          nameStringCode,
          variableName,
          previousValueCode,
        );
      }
      if (this.tokens.matches1(TokenType.comma)) {
        this.tokens.removeToken();
      }

      if (variableName != null) {
        previousValueCode = variableName;
      } else {
        previousValueCode = `${enumName}[${nameStringCode}]`;
      }
    }
  }

  /**
   * Detect name information about this enum key, which will be used to determine which code to emit
   * and whether we should declare a variable as part of this declaration.
   *
   * Some cases to keep in mind:
   * - Enum keys can be implicitly referenced later, e.g. `X = 1, Y = X`. In Sucrase, we implement
   *   this by declaring a variable `X` so that later expressions can use it.
   * - In addition to the usual identifier key syntax, enum keys are allowed to be string literals,
   *   e.g. `"hello world" = 3,`. Template literal syntax is NOT allowed.
   * - Even if the enum key is defined as a string literal, it may still be referenced by identifier
   *   later, e.g. `"X" = 1, Y = X`. That means that we need to detect whether or not a string
   *   literal is identifier-like and emit a variable if so, even if the declaration did not use an
   *   identifier.
   * - Reserved keywords like `break` are valid enum keys, but are not valid to be referenced later
   *   and would be a syntax error if we emitted a variable, so we need to skip the variable
   *   declaration in those cases.
   *
   * The variableName return value captures these nuances: if non-null, we can and must emit a
   * variable declaration, and if null, we can't and shouldn't.
   */
  extractEnumKeyInfo(nameToken) {
    if (nameToken.type === TokenType.name) {
      const name = this.tokens.identifierNameForToken(nameToken);
      return {
        nameStringCode: `"${name}"`,
        variableName: isIdentifier(name) ? name : null,
      };
    } else if (nameToken.type === TokenType.string) {
      const name = this.tokens.stringValueForToken(nameToken);
      return {
        nameStringCode: this.tokens.code.slice(nameToken.start, nameToken.end),
        variableName: isIdentifier(name) ? name : null,
      };
    } else {
      throw new Error("Expected name or string at beginning of enum element.");
    }
  }

  /**
   * Handle an enum member where the RHS is just a string literal (not omitted, not a number, and
   * not a complex expression). This is the typical form for TS string enums, and in this case, we
   * do *not* create a reverse mapping.
   *
   * This is called after deleting the key token, when the token processor is at the equals sign.
   *
   * Example 1:
   * someKey = "some value"
   * ->
   * const someKey = "some value"; MyEnum["someKey"] = someKey;
   *
   * Example 2:
   * "some key" = "some value"
   * ->
   * MyEnum["some key"] = "some value";
   */
  processStringLiteralEnumMember(
    enumName,
    nameStringCode,
    variableName,
  ) {
    if (variableName != null) {
      this.tokens.appendCode(`const ${variableName}`);
      // =
      this.tokens.copyToken();
      // value string
      this.tokens.copyToken();
      this.tokens.appendCode(`; ${enumName}[${nameStringCode}] = ${variableName};`);
    } else {
      this.tokens.appendCode(`${enumName}[${nameStringCode}]`);
      // =
      this.tokens.copyToken();
      // value string
      this.tokens.copyToken();
      this.tokens.appendCode(";");
    }
  }

  /**
   * Handle an enum member initialized with an expression on the right-hand side (other than a
   * string literal). In these cases, we should transform the expression and emit code that sets up
   * a reverse mapping.
   *
   * The TypeScript implementation of this operation distinguishes between expressions that can be
   * "constant folded" at compile time (i.e. consist of number literals and simple math operations
   * on those numbers) and ones that are dynamic. For constant expressions, it emits the resolved
   * numeric value, and auto-incrementing is only allowed in that case. Evaluating expressions at
   * compile time would add significant complexity to Sucrase, so Sucrase instead leaves the
   * expression as-is, and will later emit something like `MyEnum["previousKey"] + 1` to implement
   * auto-incrementing.
   *
   * This is called after deleting the key token, when the token processor is at the equals sign.
   *
   * Example 1:
   * someKey = 1 + 1
   * ->
   * const someKey = 1 + 1; MyEnum[MyEnum["someKey"] = someKey] = "someKey";
   *
   * Example 2:
   * "some key" = 1 + 1
   * ->
   * MyEnum[MyEnum["some key"] = 1 + 1] = "some key";
   */
  processExplicitValueEnumMember(
    enumName,
    nameStringCode,
    variableName,
  ) {
    const rhsEndIndex = this.tokens.currentToken().rhsEndIndex;
    if (rhsEndIndex == null) {
      throw new Error("Expected rhsEndIndex on enum assign.");
    }

    if (variableName != null) {
      this.tokens.appendCode(`const ${variableName}`);
      this.tokens.copyToken();
      while (this.tokens.currentIndex() < rhsEndIndex) {
        this.rootTransformer.processToken();
      }
      this.tokens.appendCode(
        `; ${enumName}[${enumName}[${nameStringCode}] = ${variableName}] = ${nameStringCode};`,
      );
    } else {
      this.tokens.appendCode(`${enumName}[${enumName}[${nameStringCode}]`);
      this.tokens.copyToken();
      while (this.tokens.currentIndex() < rhsEndIndex) {
        this.rootTransformer.processToken();
      }
      this.tokens.appendCode(`] = ${nameStringCode};`);
    }
  }

  /**
   * Handle an enum member with no right-hand side expression. In this case, the value is the
   * previous value plus 1, or 0 if there was no previous value. We should also always emit a
   * reverse mapping.
   *
   * Example 1:
   * someKey2
   * ->
   * const someKey2 = someKey1 + 1; MyEnum[MyEnum["someKey2"] = someKey2] = "someKey2";
   *
   * Example 2:
   * "some key 2"
   * ->
   * MyEnum[MyEnum["some key 2"] = someKey1 + 1] = "some key 2";
   */
  processImplicitValueEnumMember(
    enumName,
    nameStringCode,
    variableName,
    previousValueCode,
  ) {
    let valueCode = previousValueCode != null ? `${previousValueCode} + 1` : "0";
    if (variableName != null) {
      this.tokens.appendCode(`const ${variableName} = ${valueCode}; `);
      valueCode = variableName;
    }
    this.tokens.appendCode(
      `${enumName}[${enumName}[${nameStringCode}] = ${valueCode}] = ${nameStringCode};`,
    );
  }
}

;// ./node_modules/sucrase/dist/esm/transformers/RootTransformer.js



























class RootTransformer {
   __init() {this.transformers = []}
  
  
   __init2() {this.generatedVariables = []}
  
  
  
  

  constructor(
    sucraseContext,
    transforms,
    enableLegacyBabel5ModuleInterop,
    options,
  ) {;RootTransformer.prototype.__init.call(this);RootTransformer.prototype.__init2.call(this);
    this.nameManager = sucraseContext.nameManager;
    this.helperManager = sucraseContext.helperManager;
    const {tokenProcessor, importProcessor} = sucraseContext;
    this.tokens = tokenProcessor;
    this.isImportsTransformEnabled = transforms.includes("imports");
    this.isReactHotLoaderTransformEnabled = transforms.includes("react-hot-loader");
    this.disableESTransforms = Boolean(options.disableESTransforms);

    if (!options.disableESTransforms) {
      this.transformers.push(
        new OptionalChainingNullishTransformer(tokenProcessor, this.nameManager),
      );
      this.transformers.push(new NumericSeparatorTransformer(tokenProcessor));
      this.transformers.push(new OptionalCatchBindingTransformer(tokenProcessor, this.nameManager));
    }

    if (transforms.includes("jsx")) {
      if (options.jsxRuntime !== "preserve") {
        this.transformers.push(
          new JSXTransformer(this, tokenProcessor, importProcessor, this.nameManager, options),
        );
      }
      this.transformers.push(
        new ReactDisplayNameTransformer(this, tokenProcessor, importProcessor, options),
      );
    }

    let reactHotLoaderTransformer = null;
    if (transforms.includes("react-hot-loader")) {
      if (!options.filePath) {
        throw new Error("filePath is required when using the react-hot-loader transform.");
      }
      reactHotLoaderTransformer = new ReactHotLoaderTransformer(tokenProcessor, options.filePath);
      this.transformers.push(reactHotLoaderTransformer);
    }

    // Note that we always want to enable the imports transformer, even when the import transform
    // itself isn't enabled, since we need to do type-only import pruning for both Flow and
    // TypeScript.
    if (transforms.includes("imports")) {
      if (importProcessor === null) {
        throw new Error("Expected non-null importProcessor with imports transform enabled.");
      }
      this.transformers.push(
        new CJSImportTransformer(
          this,
          tokenProcessor,
          importProcessor,
          this.nameManager,
          this.helperManager,
          reactHotLoaderTransformer,
          enableLegacyBabel5ModuleInterop,
          Boolean(options.enableLegacyTypeScriptModuleInterop),
          transforms.includes("typescript"),
          transforms.includes("flow"),
          Boolean(options.preserveDynamicImport),
          Boolean(options.keepUnusedImports),
        ),
      );
    } else {
      this.transformers.push(
        new ESMImportTransformer(
          tokenProcessor,
          this.nameManager,
          this.helperManager,
          reactHotLoaderTransformer,
          transforms.includes("typescript"),
          transforms.includes("flow"),
          Boolean(options.keepUnusedImports),
          options,
        ),
      );
    }

    if (transforms.includes("flow")) {
      this.transformers.push(
        new FlowTransformer(this, tokenProcessor, transforms.includes("imports")),
      );
    }
    if (transforms.includes("typescript")) {
      this.transformers.push(
        new TypeScriptTransformer(this, tokenProcessor, transforms.includes("imports")),
      );
    }
    if (transforms.includes("jest")) {
      this.transformers.push(
        new JestHoistTransformer(this, tokenProcessor, this.nameManager, importProcessor),
      );
    }
  }

  transform() {
    this.tokens.reset();
    this.processBalancedCode();
    const shouldAddUseStrict = this.isImportsTransformEnabled;
    // "use strict" always needs to be first, so override the normal transformer order.
    let prefix = shouldAddUseStrict ? '"use strict";' : "";
    for (const transformer of this.transformers) {
      prefix += transformer.getPrefixCode();
    }
    prefix += this.helperManager.emitHelpers();
    prefix += this.generatedVariables.map((v) => ` var ${v};`).join("");
    for (const transformer of this.transformers) {
      prefix += transformer.getHoistedCode();
    }
    let suffix = "";
    for (const transformer of this.transformers) {
      suffix += transformer.getSuffixCode();
    }
    const result = this.tokens.finish();
    let {code} = result;
    if (code.startsWith("#!")) {
      let newlineIndex = code.indexOf("\n");
      if (newlineIndex === -1) {
        newlineIndex = code.length;
        code += "\n";
      }
      return {
        code: code.slice(0, newlineIndex + 1) + prefix + code.slice(newlineIndex + 1) + suffix,
        // The hashbang line has no tokens, so shifting the tokens to account
        // for prefix can happen normally.
        mappings: this.shiftMappings(result.mappings, prefix.length),
      };
    } else {
      return {
        code: prefix + code + suffix,
        mappings: this.shiftMappings(result.mappings, prefix.length),
      };
    }
  }

  processBalancedCode() {
    let braceDepth = 0;
    let parenDepth = 0;
    while (!this.tokens.isAtEnd()) {
      if (this.tokens.matches1(TokenType.braceL) || this.tokens.matches1(TokenType.dollarBraceL)) {
        braceDepth++;
      } else if (this.tokens.matches1(TokenType.braceR)) {
        if (braceDepth === 0) {
          return;
        }
        braceDepth--;
      }
      if (this.tokens.matches1(TokenType.parenL)) {
        parenDepth++;
      } else if (this.tokens.matches1(TokenType.parenR)) {
        if (parenDepth === 0) {
          return;
        }
        parenDepth--;
      }
      this.processToken();
    }
  }

  processToken() {
    if (this.tokens.matches1(TokenType._class)) {
      this.processClass();
      return;
    }
    for (const transformer of this.transformers) {
      const wasProcessed = transformer.process();
      if (wasProcessed) {
        return;
      }
    }
    this.tokens.copyToken();
  }

  /**
   * Skip past a class with a name and return that name.
   */
  processNamedClass() {
    if (!this.tokens.matches2(TokenType._class, TokenType.name)) {
      throw new Error("Expected identifier for exported class name.");
    }
    const name = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
    this.processClass();
    return name;
  }

  processClass() {
    const classInfo = getClassInfo(this, this.tokens, this.nameManager, this.disableESTransforms);

    // Both static and instance initializers need a class name to use to invoke the initializer, so
    // assign to one if necessary.
    const needsCommaExpression =
      (classInfo.headerInfo.isExpression || !classInfo.headerInfo.className) &&
      classInfo.staticInitializerNames.length + classInfo.instanceInitializerNames.length > 0;

    let className = classInfo.headerInfo.className;
    if (needsCommaExpression) {
      className = this.nameManager.claimFreeName("_class");
      this.generatedVariables.push(className);
      this.tokens.appendCode(` (${className} =`);
    }

    const classToken = this.tokens.currentToken();
    const contextId = classToken.contextId;
    if (contextId == null) {
      throw new Error("Expected class to have a context ID.");
    }
    this.tokens.copyExpectedToken(TokenType._class);
    while (!this.tokens.matchesContextIdAndLabel(TokenType.braceL, contextId)) {
      this.processToken();
    }

    this.processClassBody(classInfo, className);

    const staticInitializerStatements = classInfo.staticInitializerNames.map(
      (name) => `${className}.${name}()`,
    );
    if (needsCommaExpression) {
      this.tokens.appendCode(
        `, ${staticInitializerStatements.map((s) => `${s}, `).join("")}${className})`,
      );
    } else if (classInfo.staticInitializerNames.length > 0) {
      this.tokens.appendCode(` ${staticInitializerStatements.map((s) => `${s};`).join(" ")}`);
    }
  }

  /**
   * We want to just handle class fields in all contexts, since TypeScript supports them. Later,
   * when some JS implementations support class fields, this should be made optional.
   */
  processClassBody(classInfo, className) {
    const {
      headerInfo,
      constructorInsertPos,
      constructorInitializerStatements,
      fields,
      instanceInitializerNames,
      rangesToRemove,
    } = classInfo;
    let fieldIndex = 0;
    let rangeToRemoveIndex = 0;
    const classContextId = this.tokens.currentToken().contextId;
    if (classContextId == null) {
      throw new Error("Expected non-null context ID on class.");
    }
    this.tokens.copyExpectedToken(TokenType.braceL);
    if (this.isReactHotLoaderTransformEnabled) {
      this.tokens.appendCode(
        "__reactstandin__regenerateByEval(key, code) {this[key] = eval(code);}",
      );
    }

    const needsConstructorInit =
      constructorInitializerStatements.length + instanceInitializerNames.length > 0;

    if (constructorInsertPos === null && needsConstructorInit) {
      const constructorInitializersCode = this.makeConstructorInitCode(
        constructorInitializerStatements,
        instanceInitializerNames,
        className,
      );
      if (headerInfo.hasSuperclass) {
        const argsName = this.nameManager.claimFreeName("args");
        this.tokens.appendCode(
          `constructor(...${argsName}) { super(...${argsName}); ${constructorInitializersCode}; }`,
        );
      } else {
        this.tokens.appendCode(`constructor() { ${constructorInitializersCode}; }`);
      }
    }

    while (!this.tokens.matchesContextIdAndLabel(TokenType.braceR, classContextId)) {
      if (fieldIndex < fields.length && this.tokens.currentIndex() === fields[fieldIndex].start) {
        let needsCloseBrace = false;
        if (this.tokens.matches1(TokenType.bracketL)) {
          this.tokens.copyTokenWithPrefix(`${fields[fieldIndex].initializerName}() {this`);
        } else if (this.tokens.matches1(TokenType.string) || this.tokens.matches1(TokenType.num)) {
          this.tokens.copyTokenWithPrefix(`${fields[fieldIndex].initializerName}() {this[`);
          needsCloseBrace = true;
        } else {
          this.tokens.copyTokenWithPrefix(`${fields[fieldIndex].initializerName}() {this.`);
        }
        while (this.tokens.currentIndex() < fields[fieldIndex].end) {
          if (needsCloseBrace && this.tokens.currentIndex() === fields[fieldIndex].equalsIndex) {
            this.tokens.appendCode("]");
          }
          this.processToken();
        }
        this.tokens.appendCode("}");
        fieldIndex++;
      } else if (
        rangeToRemoveIndex < rangesToRemove.length &&
        this.tokens.currentIndex() >= rangesToRemove[rangeToRemoveIndex].start
      ) {
        if (this.tokens.currentIndex() < rangesToRemove[rangeToRemoveIndex].end) {
          this.tokens.removeInitialToken();
        }
        while (this.tokens.currentIndex() < rangesToRemove[rangeToRemoveIndex].end) {
          this.tokens.removeToken();
        }
        rangeToRemoveIndex++;
      } else if (this.tokens.currentIndex() === constructorInsertPos) {
        this.tokens.copyToken();
        if (needsConstructorInit) {
          this.tokens.appendCode(
            `;${this.makeConstructorInitCode(
              constructorInitializerStatements,
              instanceInitializerNames,
              className,
            )};`,
          );
        }
        this.processToken();
      } else {
        this.processToken();
      }
    }
    this.tokens.copyExpectedToken(TokenType.braceR);
  }

  makeConstructorInitCode(
    constructorInitializerStatements,
    instanceInitializerNames,
    className,
  ) {
    return [
      ...constructorInitializerStatements,
      ...instanceInitializerNames.map((name) => `${className}.prototype.${name}.call(this)`),
    ].join(";");
  }

  /**
   * Normally it's ok to simply remove type tokens, but we need to be more careful when dealing with
   * arrow function return types since they can confuse the parser. In that case, we want to move
   * the close-paren to the same line as the arrow.
   *
   * See https://github.com/alangpierce/sucrase/issues/391 for more details.
   */
  processPossibleArrowParamEnd() {
    if (this.tokens.matches2(TokenType.parenR, TokenType.colon) && this.tokens.tokenAtRelativeIndex(1).isType) {
      let nextNonTypeIndex = this.tokens.currentIndex() + 1;
      // Look ahead to see if this is an arrow function or something else.
      while (this.tokens.tokens[nextNonTypeIndex].isType) {
        nextNonTypeIndex++;
      }
      if (this.tokens.matches1AtIndex(nextNonTypeIndex, TokenType.arrow)) {
        this.tokens.removeInitialToken();
        while (this.tokens.currentIndex() < nextNonTypeIndex) {
          this.tokens.removeToken();
        }
        this.tokens.replaceTokenTrimmingLeftWhitespace(") =>");
        return true;
      }
    }
    return false;
  }

  /**
   * An async arrow function might be of the form:
   *
   * async <
   *   T
   * >() => {}
   *
   * in which case, removing the type parameters will cause a syntax error. Detect this case and
   * move the open-paren earlier.
   */
  processPossibleAsyncArrowWithTypeParams() {
    if (
      !this.tokens.matchesContextual(ContextualKeyword._async) &&
      !this.tokens.matches1(TokenType._async)
    ) {
      return false;
    }
    const nextToken = this.tokens.tokenAtRelativeIndex(1);
    if (nextToken.type !== TokenType.lessThan || !nextToken.isType) {
      return false;
    }

    let nextNonTypeIndex = this.tokens.currentIndex() + 1;
    // Look ahead to see if this is an arrow function or something else.
    while (this.tokens.tokens[nextNonTypeIndex].isType) {
      nextNonTypeIndex++;
    }
    if (this.tokens.matches1AtIndex(nextNonTypeIndex, TokenType.parenL)) {
      this.tokens.replaceToken("async (");
      this.tokens.removeInitialToken();
      while (this.tokens.currentIndex() < nextNonTypeIndex) {
        this.tokens.removeToken();
      }
      this.tokens.removeToken();
      // We ate a ( token, so we need to process the tokens in between and then the ) token so that
      // we remain balanced.
      this.processBalancedCode();
      this.processToken();
      return true;
    }
    return false;
  }

  processPossibleTypeRange() {
    if (this.tokens.currentToken().isType) {
      this.tokens.removeInitialToken();
      while (this.tokens.currentToken().isType) {
        this.tokens.removeToken();
      }
      return true;
    }
    return false;
  }

  shiftMappings(
    mappings,
    prefixLength,
  ) {
    for (let i = 0; i < mappings.length; i++) {
      const mapping = mappings[i];
      if (mapping !== undefined) {
        mappings[i] = mapping + prefixLength;
      }
    }
    return mappings;
  }
}

// EXTERNAL MODULE: ./node_modules/sucrase/node_modules/lines-and-columns/build/index.js
var build = __webpack_require__(67979);
;// ./node_modules/sucrase/dist/esm/util/formatTokens.js





function formatTokens_formatTokens(code, tokens) {
  if (tokens.length === 0) {
    return "";
  }

  const tokenKeys = Object.keys(tokens[0]).filter(
    (k) => k !== "type" && k !== "value" && k !== "start" && k !== "end" && k !== "loc",
  );
  const typeKeys = Object.keys(tokens[0].type).filter((k) => k !== "label" && k !== "keyword");

  const headings = ["Location", "Label", "Raw", ...tokenKeys, ...typeKeys];

  const lines = new LinesAndColumns(code);
  const rows = [headings, ...tokens.map(getTokenComponents)];
  const padding = headings.map(() => 0);
  for (const components of rows) {
    for (let i = 0; i < components.length; i++) {
      padding[i] = Math.max(padding[i], components[i].length);
    }
  }
  return rows
    .map((components) => components.map((component, i) => component.padEnd(padding[i])).join(" "))
    .join("\n");

  function getTokenComponents(token) {
    const raw = code.slice(token.start, token.end);
    return [
      formatRange(token.start, token.end),
      formatTokenType(token.type),
      truncate(String(raw), 14),
      // @ts-ignore: Intentional dynamic access by key.
      ...tokenKeys.map((key) => formatValue(token[key], key)),
      // @ts-ignore: Intentional dynamic access by key.
      ...typeKeys.map((key) => formatValue(token.type[key], key)),
    ];
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function formatValue(value, key) {
    if (value === true) {
      return key;
    } else if (value === false || value === null) {
      return "";
    } else {
      return String(value);
    }
  }

  function formatRange(start, end) {
    return `${formatPos(start)}-${formatPos(end)}`;
  }

  function formatPos(pos) {
    const location = lines.locationForIndex(pos);
    if (!location) {
      return "Unknown";
    } else {
      return `${location.line + 1}:${location.column + 1}`;
    }
  }
}

function truncate(s, length) {
  if (s.length > length) {
    return `${s.slice(0, length - 3)}...`;
  } else {
    return s;
  }
}

;// ./node_modules/sucrase/dist/esm/util/getTSImportedNames.js




/**
 * Special case code to scan for imported names in ESM TypeScript. We need to do this so we can
 * properly get globals so we can compute shadowed globals.
 *
 * This is similar to logic in CJSImportProcessor, but trimmed down to avoid logic with CJS
 * replacement and flow type imports.
 */
function getTSImportedNames(tokens) {
  const importedNames = new Set();
  for (let i = 0; i < tokens.tokens.length; i++) {
    if (
      tokens.matches1AtIndex(i, TokenType._import) &&
      !tokens.matches3AtIndex(i, TokenType._import, TokenType.name, TokenType.eq)
    ) {
      collectNamesForImport(tokens, i, importedNames);
    }
  }
  return importedNames;
}

function collectNamesForImport(
  tokens,
  index,
  importedNames,
) {
  index++;

  if (tokens.matches1AtIndex(index, TokenType.parenL)) {
    // Dynamic import, so nothing to do
    return;
  }

  if (tokens.matches1AtIndex(index, TokenType.name)) {
    importedNames.add(tokens.identifierNameAtIndex(index));
    index++;
    if (tokens.matches1AtIndex(index, TokenType.comma)) {
      index++;
    }
  }

  if (tokens.matches1AtIndex(index, TokenType.star)) {
    // * as
    index += 2;
    importedNames.add(tokens.identifierNameAtIndex(index));
    index++;
  }

  if (tokens.matches1AtIndex(index, TokenType.braceL)) {
    index++;
    collectNamesForNamedImport(tokens, index, importedNames);
  }
}

function collectNamesForNamedImport(
  tokens,
  index,
  importedNames,
) {
  while (true) {
    if (tokens.matches1AtIndex(index, TokenType.braceR)) {
      return;
    }

    const specifierInfo = getImportExportSpecifierInfo(tokens, index);
    index = specifierInfo.endIndex;
    if (!specifierInfo.isType) {
      importedNames.add(specifierInfo.rightName);
    }

    if (tokens.matches2AtIndex(index, TokenType.comma, TokenType.braceR)) {
      return;
    } else if (tokens.matches1AtIndex(index, TokenType.braceR)) {
      return;
    } else if (tokens.matches1AtIndex(index, TokenType.comma)) {
      index++;
    } else {
      throw new Error(`Unexpected token: ${JSON.stringify(tokens.tokens[index])}`);
    }
  }
}

;// ./node_modules/sucrase/dist/esm/index.js



























;

function getVersion() {
  /* istanbul ignore next */
  return "3.35.0";
}

function transform(code, options) {
  validateOptions(options);
  try {
    const sucraseContext = getSucraseContext(code, options);
    const transformer = new RootTransformer(
      sucraseContext,
      options.transforms,
      Boolean(options.enableLegacyBabel5ModuleInterop),
      options,
    );
    const transformerResult = transformer.transform();
    let result = {code: transformerResult.code};
    if (options.sourceMapOptions) {
      if (!options.filePath) {
        throw new Error("filePath must be specified when generating a source map.");
      }
      result = {
        ...result,
        sourceMap: computeSourceMap(
          transformerResult,
          options.filePath,
          options.sourceMapOptions,
          code,
          sucraseContext.tokenProcessor.tokens,
        ),
      };
    }
    return result;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e) {
    if (options.filePath) {
      e.message = `Error transforming ${options.filePath}: ${e.message}`;
    }
    throw e;
  }
}

/**
 * Return a string representation of the sucrase tokens, mostly useful for
 * diagnostic purposes.
 */
function getFormattedTokens(code, options) {
  const tokens = getSucraseContext(code, options).tokenProcessor.tokens;
  return formatTokens(code, tokens);
}

/**
 * Call into the parser/tokenizer and do some further preprocessing:
 * - Come up with a set of used names so that we can assign new names.
 * - Preprocess all import/export statements so we know which globals we are interested in.
 * - Compute situations where any of those globals are shadowed.
 *
 * In the future, some of these preprocessing steps can be skipped based on what actual work is
 * being done.
 */
function getSucraseContext(code, options) {
  const isJSXEnabled = options.transforms.includes("jsx");
  const isTypeScriptEnabled = options.transforms.includes("typescript");
  const isFlowEnabled = options.transforms.includes("flow");
  const disableESTransforms = options.disableESTransforms === true;
  const file = parse(code, isJSXEnabled, isTypeScriptEnabled, isFlowEnabled);
  const tokens = file.tokens;
  const scopes = file.scopes;

  const nameManager = new NameManager(code, tokens);
  const helperManager = new HelperManager(nameManager);
  const tokenProcessor = new TokenProcessor(
    code,
    tokens,
    isFlowEnabled,
    disableESTransforms,
    helperManager,
  );
  const enableLegacyTypeScriptModuleInterop = Boolean(options.enableLegacyTypeScriptModuleInterop);

  let importProcessor = null;
  if (options.transforms.includes("imports")) {
    importProcessor = new CJSImportProcessor(
      nameManager,
      tokenProcessor,
      enableLegacyTypeScriptModuleInterop,
      options,
      options.transforms.includes("typescript"),
      Boolean(options.keepUnusedImports),
      helperManager,
    );
    importProcessor.preprocessTokens();
    // We need to mark shadowed globals after processing imports so we know that the globals are,
    // but before type-only import pruning, since that relies on shadowing information.
    identifyShadowedGlobals(tokenProcessor, scopes, importProcessor.getGlobalNames());
    if (options.transforms.includes("typescript") && !options.keepUnusedImports) {
      importProcessor.pruneTypeOnlyImports();
    }
  } else if (options.transforms.includes("typescript") && !options.keepUnusedImports) {
    // Shadowed global detection is needed for TS implicit elision of imported names.
    identifyShadowedGlobals(tokenProcessor, scopes, getTSImportedNames(tokenProcessor));
  }
  return {tokenProcessor, scopes, nameManager, importProcessor, helperManager};
}

;// ./node_modules/react-live/dist/index.mjs
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/components/Editor/index.tsx




var CodeEditor = (props) => {
  const { tabMode = "indentation" } = props;
  const editorRef = (0,react.useRef)(null);
  const [code, setCode] = (0,react.useState)(props.code || "");
  const { theme } = props;
  (0,react.useEffect)(() => {
    setCode(props.code);
  }, [props.code]);
  useEditable(
    editorRef,
    (text) => {
      const t = text.slice(0, -1);
      setCode(t);
      if (props.onChange) {
        props.onChange(t);
      }
    },
    {
      disabled: props.disabled,
      indentation: tabMode === "indentation" ? 2 : void 0
    }
  );
  return /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: props.className, style: props.style, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
    dist/* Highlight */.f4,
    {
      code,
      theme: props.theme || dist/* themes */.Zj.nightOwl,
      language: props.language,
      children: ({
        className: _className,
        tokens,
        getLineProps,
        getTokenProps,
        style: _style
      }) => /* @__PURE__ */ (0,jsx_runtime.jsx)(
        "pre",
        {
          className: _className,
          style: __spreadValues(__spreadValues({
            margin: 0,
            outline: "none",
            padding: 10,
            fontFamily: "inherit"
          }, theme && typeof theme.plain === "object" ? theme.plain : {}), _style),
          ref: editorRef,
          spellCheck: "false",
          children: tokens.map((line, lineIndex) => /* @__PURE__ */ (0,jsx_runtime.jsxs)("span", __spreadProps(__spreadValues({}, getLineProps({ line })), { children: [
            line.filter((token) => !token.empty).map((token, tokenIndex) => /* @__PURE__ */ (0,jsx_runtime.jsx)(
              "span",
              __spreadValues({}, getTokenProps({ token })),
              `token-${tokenIndex}`
            )),
            "\n"
          ] }), `line-${lineIndex}`))
        }
      )
    }
  ) });
};
var Editor_default = CodeEditor;

// src/components/Live/LiveProvider.tsx


// src/components/Live/LiveContext.ts

var LiveContext = (0,react.createContext)({});
var LiveContext_default = LiveContext;

// src/utils/transpile/index.ts


// src/utils/transpile/transform.ts

var defaultTransforms = ["jsx", "imports"];
function dist_transform(opts = {}) {
  const transforms = Array.isArray(opts.transforms) ? opts.transforms.filter(Boolean) : defaultTransforms;
  return (code) => transform(code, { transforms }).code;
}

// src/utils/transpile/errorBoundary.tsx


var errorBoundary = (Element, errorCallback) => {
  return class ErrorBoundary extends react.Component {
    componentDidCatch(error) {
      errorCallback(error);
    }
    render() {
      return typeof Element === "function" ? /* @__PURE__ */ (0,jsx_runtime.jsx)(Element, {}) : react.isValidElement(Element) ? Element : null;
    }
  };
};
var errorBoundary_default = errorBoundary;

// src/utils/transpile/evalCode.ts
var evalCode = (code, scope) => {
  const scopeKeys = Object.keys(scope);
  const scopeValues = scopeKeys.map((key) => scope[key]);
  return new Function(...scopeKeys, code)(...scopeValues);
};
var evalCode_default = evalCode;

// src/utils/transpile/compose.ts
function compose(...functions) {
  return functions.reduce(
    (acc, currentFn) => (...args) => acc(currentFn(...args))
  );
}

// src/utils/transpile/index.ts
var jsxConst = 'const _jsxFileName = "";';
var trimCode = (code) => code.trim().replace(/;$/, "");
var spliceJsxConst = (code) => code.replace(jsxConst, "").trim();
var addJsxConst = (code) => jsxConst + code;
var wrapReturn = (code) => `return (${code})`;
var generateElement = ({ code = "", scope = {}, enableTypeScript = true }, errorCallback) => {
  const firstPassTransforms = ["jsx"];
  enableTypeScript && firstPassTransforms.push("typescript");
  const transformed = compose(
    addJsxConst,
    dist_transform({ transforms: ["imports"] }),
    spliceJsxConst,
    trimCode,
    dist_transform({ transforms: firstPassTransforms }),
    wrapReturn,
    trimCode
  )(code);
  return errorBoundary_default(
    evalCode_default(transformed, __spreadValues({ React: react }, scope)),
    errorCallback
  );
};
var renderElementAsync = ({ code = "", scope = {}, enableTypeScript = true }, resultCallback, errorCallback) => {
  const render = (element) => {
    if (typeof element === "undefined") {
      errorCallback(new SyntaxError("`render` must be called with valid JSX."));
    } else {
      resultCallback(errorBoundary_default(element, errorCallback));
    }
  };
  if (!/render\s*\(/.test(code)) {
    return errorCallback(
      new SyntaxError("No-Inline evaluations must call `render`.")
    );
  }
  const transforms = ["jsx", "imports"];
  enableTypeScript && transforms.splice(1, 0, "typescript");
  evalCode_default(dist_transform({ transforms })(code), __spreadProps(__spreadValues({ React: react }, scope), { render }));
};

// src/components/Live/LiveProvider.tsx

function LiveProvider({
  children,
  code = "",
  language = "tsx",
  theme,
  enableTypeScript = true,
  disabled = false,
  scope,
  transformCode,
  noInline = false
}) {
  const [state, setState] = (0,react.useState)({
    error: void 0,
    element: void 0
  });
  function transpileAsync(newCode) {
    return __async(this, null, function* () {
      const errorCallback = (error) => {
        setState((previousState) => __spreadProps(__spreadValues({}, previousState), {
          error: error.toString(),
          element: void 0
        }));
      };
      try {
        const transformResult = transformCode ? transformCode(newCode) : newCode;
        try {
          const transformedCode = yield Promise.resolve(transformResult);
          const renderElement = (element) => setState({ error: void 0, element, newCode });
          if (typeof transformedCode !== "string") {
            throw new Error("Code failed to transform");
          }
          const input = {
            code: transformedCode,
            scope,
            enableTypeScript
          };
          if (noInline) {
            setState((previousState) => __spreadProps(__spreadValues({}, previousState), {
              error: void 0,
              element: null
            }));
            renderElementAsync(input, renderElement, errorCallback);
          } else {
            renderElement(generateElement(input, errorCallback));
          }
        } catch (error) {
          return errorCallback(error);
        }
      } catch (e) {
        errorCallback(e);
        return Promise.resolve();
      }
    });
  }
  const onError = (error) => setState({ error: error.toString() });
  (0,react.useEffect)(() => {
    transpileAsync(code).catch(onError);
  }, [code, scope, noInline, transformCode]);
  const onChange = (newCode) => {
    transpileAsync(newCode).catch(onError);
  };
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    LiveContext_default.Provider,
    {
      value: __spreadProps(__spreadValues({}, state), {
        code,
        language,
        theme,
        disabled,
        onError,
        onChange
      }),
      children
    }
  );
}
var LiveProvider_default = LiveProvider;

// src/components/Live/LiveEditor.tsx


function LiveEditor(props) {
  const { code, language, theme, disabled, onChange } = (0,react.useContext)(LiveContext_default);
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    Editor_default,
    __spreadValues({
      theme,
      code,
      language,
      disabled,
      onChange
    }, props)
  );
}

// src/components/Live/LiveError.tsx


function LiveError(props) {
  const { error } = (0,react.useContext)(LiveContext_default);
  return error ? /* @__PURE__ */ (0,jsx_runtime.jsx)("pre", __spreadProps(__spreadValues({}, props), { children: error })) : null;
}

// src/components/Live/LivePreview.tsx


// src/components/Live/ErrorBoundary.tsx

var ErrorBoundary = class extends react.Component {
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  componentDidCatch(err) {
    var _a, _b;
    (_b = (_a = this.props).onError) == null ? void 0 : _b.call(_a, err);
  }
  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
};

// src/components/Live/LivePreview.tsx

function LivePreview(_a) {
  var _b = _a, { Component: Component3 = "div" } = _b, rest = __objRest(_b, ["Component"]);
  const { element: Element, onError, newCode } = (0,react.useContext)(LiveContext_default);
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(ErrorBoundary, { onError, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Component3, __spreadProps(__spreadValues({}, rest), { children: Element ? /* @__PURE__ */ (0,jsx_runtime.jsx)(Element, {}) : null })) }, newCode);
}
var LivePreview_default = LivePreview;

// src/hoc/withLive.tsx

function withLive(WrappedComponent) {
  const WithLive = (props) => /* @__PURE__ */ jsx7(LiveContext_default.Consumer, { children: (live) => /* @__PURE__ */ jsx7(WrappedComponent, __spreadValues({ live }, props)) });
  WithLive.displayName = "WithLive";
  return WithLive;
}

//# sourceMappingURL=index.mjs.map

/***/ })

}]);