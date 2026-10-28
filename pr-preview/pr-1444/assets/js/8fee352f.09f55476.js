"use strict";
(self["webpackChunkdocs"] = self["webpackChunkdocs"] || []).push([["40"], {
19610(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_components_pagination_mdx_8fe_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-pagination-mdx-8fe.json
var site_docs_components_pagination_mdx_8fe_namespaceObject = JSON.parse('{"id":"components/pagination","title":"Pagination","description":"Paginering för tabeller","source":"@site/docs/components/pagination.mdx","sourceDirName":"components","slug":"/components/pagination","permalink":"/pr-preview/pr-1444/components/pagination","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Pagination","description":"Paginering för tabeller"},"sidebar":"sideBar","previous":{"title":"Modal","permalink":"/pr-preview/pr-1444/components/modal"},"next":{"title":"Popover","permalink":"/pr-preview/pr-1444/components/popover"}}')
// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(31085);
// EXTERNAL MODULE: ../../node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(71184);
// EXTERNAL MODULE: ./src/components/PropsTable.tsx + 2 modules
var PropsTable = __webpack_require__(67793);
;// CONCATENATED MODULE: ../../dist/api/table-styles/Pagination.json
var Pagination_namespaceObject = JSON.parse('{"schemaVersion":1,"package":"@midas-ds/table-styles","displayName":"Pagination","description":"","sourceFile":"packages/table-styles/src/lib/pagination/Pagination.tsx","props":{"pageSizeOptions":{"defaultValue":{"value":"[10, 20, 30, 40, 50]"},"description":"Options for different page sizes","name":"pageSizeOptions","required":false,"parent":{"fileName":"midas/packages/table-styles/src/lib/pagination/Pagination.tsx","name":"PaginationProps"},"declarations":[{"fileName":"midas/packages/table-styles/src/lib/pagination/Pagination.tsx","name":"PaginationProps"}],"type":{"name":"number[]","raw":"number[]","membersRef":"36257bc2cdf0"}},"getCanNextPage":{"defaultValue":null,"description":"Returns whether the table can go to the next page.\\n@link [API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#getcannextpage)\\n@link [Guide](https://tanstack.com/table/v8/docs/guide/pagination)","name":"getCanNextPage","required":true,"parent":{"fileName":"midas/node_modules/@tanstack/table-core/build/lib/features/RowPagination.d.ts","name":"PaginationInstance"},"declarations":[{"fileName":"midas/node_modules/@tanstack/table-core/build/lib/features/RowPagination.d.ts","name":"PaginationInstance"}],"type":{"name":"() => boolean"}},"getCanPreviousPage":{"defaultValue":null,"description":"Returns whether the table can go to the previous page.\\n@link [API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#getcanpreviouspage)\\n@link [Guide](https://tanstack.com/table/v8/docs/guide/pagination)","name":"getCanPreviousPage","required":true,"parent":{"fileName":"midas/node_modules/@tanstack/table-core/build/lib/features/RowPagination.d.ts","name":"PaginationInstance"},"declarations":[{"fileName":"midas/node_modules/@tanstack/table-core/build/lib/features/RowPagination.d.ts","name":"PaginationInstance"}],"type":{"name":"() => boolean"}},"getPageCount":{"defaultValue":null,"description":"Returns the page count. If manually paginating or controlling the pagination state, this will come directly from the `options.pageCount` table option, otherwise it will be calculated from the table data using the total row count and current page size.\\n@link [API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#getpagecount)\\n@link [Guide](https://tanstack.com/table/v8/docs/guide/pagination)","name":"getPageCount","required":true,"parent":{"fileName":"midas/node_modules/@tanstack/table-core/build/lib/features/RowPagination.d.ts","name":"PaginationInstance"},"declarations":[{"fileName":"midas/node_modules/@tanstack/table-core/build/lib/features/RowPagination.d.ts","name":"PaginationInstance"}],"type":{"name":"() => number"}},"getRowCount":{"defaultValue":null,"description":"Returns the row count. If manually paginating or controlling the pagination state, this will come directly from the `options.rowCount` table option, otherwise it will be calculated from the table data.\\n@link [API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#getrowcount)\\n@link [Guide](https://tanstack.com/table/v8/docs/guide/pagination)","name":"getRowCount","required":true,"parent":{"fileName":"midas/node_modules/@tanstack/table-core/build/lib/features/RowPagination.d.ts","name":"PaginationInstance"},"declarations":[{"fileName":"midas/node_modules/@tanstack/table-core/build/lib/features/RowPagination.d.ts","name":"PaginationInstance"}],"type":{"name":"() => number"}},"nextPage":{"defaultValue":null,"description":"Increments the page index by one, if possible.\\n@link [API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#nextpage)\\n@link [Guide](https://tanstack.com/table/v8/docs/guide/pagination)","name":"nextPage","required":true,"parent":{"fileName":"midas/node_modules/@tanstack/table-core/build/lib/features/RowPagination.d.ts","name":"PaginationInstance"},"declarations":[{"fileName":"midas/node_modules/@tanstack/table-core/build/lib/features/RowPagination.d.ts","name":"PaginationInstance"}],"type":{"name":"() => void"}},"previousPage":{"defaultValue":null,"description":"Decrements the page index by one, if possible.\\n@link [API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#previouspage)\\n@link [Guide](https://tanstack.com/table/v8/docs/guide/pagination)","name":"previousPage","required":true,"parent":{"fileName":"midas/node_modules/@tanstack/table-core/build/lib/features/RowPagination.d.ts","name":"PaginationInstance"},"declarations":[{"fileName":"midas/node_modules/@tanstack/table-core/build/lib/features/RowPagination.d.ts","name":"PaginationInstance"}],"type":{"name":"() => void"}},"setPageIndex":{"defaultValue":null,"description":"Updates the page index using the provided function or value in the `state.pagination.pageIndex` state.\\n@link [API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#setpageindex)\\n@link [Guide](https://tanstack.com/table/v8/docs/guide/pagination)","name":"setPageIndex","required":true,"parent":{"fileName":"midas/node_modules/@tanstack/table-core/build/lib/features/RowPagination.d.ts","name":"PaginationInstance"},"declarations":[{"fileName":"midas/node_modules/@tanstack/table-core/build/lib/features/RowPagination.d.ts","name":"PaginationInstance"}],"type":{"name":"(updater: Updater<number>) => void"}},"setPageSize":{"defaultValue":null,"description":"Updates the page size using the provided function or value in the `state.pagination.pageSize` state.\\n@link [API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#setpagesize)\\n@link [Guide](https://tanstack.com/table/v8/docs/guide/pagination)","name":"setPageSize","required":true,"parent":{"fileName":"midas/node_modules/@tanstack/table-core/build/lib/features/RowPagination.d.ts","name":"PaginationInstance"},"declarations":[{"fileName":"midas/node_modules/@tanstack/table-core/build/lib/features/RowPagination.d.ts","name":"PaginationInstance"}],"type":{"name":"(updater: Updater<number>) => void"}},"pageIndex":{"defaultValue":null,"description":"","name":"pageIndex","required":true,"parent":{"fileName":"midas/node_modules/@tanstack/table-core/build/lib/features/RowPagination.d.ts","name":"PaginationState"},"declarations":[{"fileName":"midas/node_modules/@tanstack/table-core/build/lib/features/RowPagination.d.ts","name":"PaginationState"}],"type":{"name":"number"}},"pageSize":{"defaultValue":null,"description":"","name":"pageSize","required":true,"parent":{"fileName":"midas/node_modules/@tanstack/table-core/build/lib/features/RowPagination.d.ts","name":"PaginationState"},"declarations":[{"fileName":"midas/node_modules/@tanstack/table-core/build/lib/features/RowPagination.d.ts","name":"PaginationState"}],"type":{"name":"number"}}},"types":{"03d82ab94a6a":[{"name":"searchElement","type":"number","description":"The value to locate in the array.","required":true},{"name":"fromIndex","type":"number | undefined","description":"The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.","required":true}],"09b79bd18f01":[{"name":"value","type":"number","description":"value to fill array section with","required":true},{"name":"start","type":"number | undefined","description":"index to start filling the array at. If start is negative, it is treated as\\nlength+start where length is the length of the array.","required":true},{"name":"end","type":"number | undefined","description":"index to stop filling the array at. If end is negative, it is treated as\\nlength+end.","required":true}],"0f2023152915":[{"name":"start","type":"number","description":"The zero-based location in the array from which to start removing elements.","required":true},{"name":"deleteCount","type":"number | undefined","description":"The number of elements to remove. Omitting this argument will remove all elements from the start\\nparamater location to end of the array. If value of this argument is either a negative number, zero, undefined, or a type\\nthat cannot be converted to an integer, the function will evaluate the argument as zero and not remove any elements.","required":true}],"36257bc2cdf0":[{"name":"length","type":"number","description":"Gets or sets the length of the array. This is a number one higher than the highest index in the array.","required":true},{"name":"toString","type":"() => string","description":"Returns a string representation of an array.","required":true},{"name":"toLocaleString","type":"{ (): string; (locales: string | string[], options?: (NumberFormatOptions & DateTimeFormatOptions) | undefined): string; }","description":"Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.","required":true},{"name":"pop","type":"() => number | undefined","description":"Removes the last element from an array and returns it.\\nIf the array is empty, undefined is returned and the array is not modified.","required":true},{"name":"push","type":"(...items: number[]) => number","description":"Appends new elements to the end of an array, and returns the new length of the array.","required":true,"membersRef":"e97233a284c8"},{"name":"concat","type":"{ (...items: ConcatArray<number>[]): number[]; (...items: (number | ConcatArray<number>)[]): number[]; }","description":"Combines two or more arrays.\\nThis method returns a new array without modifying any existing arrays.","required":true,"membersRef":"4a4796baca71"},{"name":"join","type":"(separator?: string | undefined) => string","description":"Adds all the elements of an array into a string, separated by the specified separator string.","required":true,"membersRef":"8ffe134cb078"},{"name":"reverse","type":"() => number[]","description":"Reverses the elements in an array in place.\\nThis method mutates the array and returns a reference to the same array.","required":true},{"name":"shift","type":"() => number | undefined","description":"Removes the first element from an array and returns it.\\nIf the array is empty, undefined is returned and the array is not modified.","required":true},{"name":"slice","type":"(start?: number | undefined, end?: number | undefined) => number[]","description":"Returns a copy of a section of an array.\\nFor both start and end, a negative index can be used to indicate an offset from the end of the array.\\nFor example, -2 refers to the second to last element of the array.","required":true,"membersRef":"cd2fa974e364"},{"name":"sort","type":"(compareFn?: ((a: number, b: number) => number) | undefined) => number[]","description":"Sorts an array in place.\\nThis method mutates the array and returns a reference to the same array.","required":true,"membersRef":"c7ac5e2fda1b"},{"name":"splice","type":"{ (start: number, deleteCount?: number | undefined): number[]; (start: number, deleteCount: number, ...items: number[]): number[]; }","description":"Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.","required":true,"membersRef":"0f2023152915"},{"name":"unshift","type":"(...items: number[]) => number","description":"Inserts new elements at the start of an array, and returns the new length of the array.","required":true,"membersRef":"f335e0c14384"},{"name":"indexOf","type":"(searchElement: number, fromIndex?: number | undefined) => number","description":"Returns the index of the first occurrence of a value in an array, or -1 if it is not present.","required":true,"membersRef":"03d82ab94a6a"},{"name":"lastIndexOf","type":"(searchElement: number, fromIndex?: number | undefined) => number","description":"Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.","required":true,"membersRef":"d8ba39295f9c"},{"name":"every","type":"{ <S extends number>(predicate: (value: number, index: number, array: number[]) => value is S, thisArg?: any): this is S[]; (predicate: (value: number, index: number, array: number[]) => unknown, thisArg?: any): boolean; }","description":"Determines whether all the members of an array satisfy the specified test.","required":true,"membersRef":"3a588c25a85d"},{"name":"some","type":"(predicate: (value: number, index: number, array: number[]) => unknown, thisArg?: any) => boolean","description":"Determines whether the specified callback function returns true for any element of an array.","required":true,"membersRef":"8688db3d1e3d"},{"name":"forEach","type":"(callbackfn: (value: number, index: number, array: number[]) => void, thisArg?: any) => void","description":"Performs the specified action for each element in an array.","required":true,"membersRef":"5cc628989a60"},{"name":"map","type":"<U>(callbackfn: (value: number, index: number, array: number[]) => U, thisArg?: any) => U[]","description":"Calls a defined callback function on each element of an array, and returns an array that contains the results.","required":true,"membersRef":"aa9f2ffc3f72"},{"name":"filter","type":"{ <S extends number>(predicate: (value: number, index: number, array: number[]) => value is S, thisArg?: any): S[]; (predicate: (value: number, index: number, array: number[]) => unknown, thisArg?: any): number[]; }","description":"Returns the elements of an array that meet the condition specified in a callback function.","required":true,"membersRef":"e67c7db42e8b"},{"name":"reduce","type":"{ (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number): number; (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number, initialValue: number): number; <U>(callbackfn: (previousValue: U, currentValue: number, ...","description":"Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.","required":true,"membersRef":"55136e418d35"},{"name":"reduceRight","type":"{ (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number): number; (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number, initialValue: number): number; <U>(callbackfn: (previousValue: U, currentValue: number, ...","description":"Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.","required":true,"membersRef":"4b63fb4ce05d"},{"name":"find","type":"{ <S extends number>(predicate: (value: number, index: number, obj: number[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: number, index: number, obj: number[]) => unknown, thisArg?: any): number | undefined; }","description":"Returns the value of the first element in the array where predicate is true, and undefined\\notherwise.","required":true,"membersRef":"ac29f34bcece"},{"name":"findIndex","type":"(predicate: (value: number, index: number, obj: number[]) => unknown, thisArg?: any) => number","description":"Returns the index of the first element in the array where predicate is true, and -1\\notherwise.","required":true,"membersRef":"d4e28111f893"},{"name":"fill","type":"(value: number, start?: number | undefined, end?: number | undefined) => number[]","description":"Changes all array elements from `start` to `end` index to a static `value` and returns the modified array","required":true,"membersRef":"09b79bd18f01"},{"name":"copyWithin","type":"(target: number, start: number, end?: number | undefined) => number[]","description":"Returns the this object after copying a section of the array identified by start and end\\nto the same array starting at position target","required":true,"membersRef":"749775027192"},{"name":"entries","type":"() => ArrayIterator<[number, number]>","description":"Returns an iterable of key, value pairs for every entry in the array","required":true},{"name":"keys","type":"() => ArrayIterator<number>","description":"Returns an iterable of keys in the array","required":true},{"name":"values","type":"() => ArrayIterator<number>","description":"Returns an iterable of values in the array","required":true},{"name":"includes","type":"(searchElement: number, fromIndex?: number | undefined) => boolean","description":"Determines whether an array includes a certain element, returning true or false as appropriate.","required":true,"membersRef":"863356df8489"},{"name":"flatMap","type":"<U, This = undefined>(callback: (this: This, value: number, index: number, array: number[]) => U | readonly U[], thisArg?: This | undefined) => U[]","description":"Calls a defined callback function on each element of an array. Then, flattens the result into\\na new array.\\nThis is identical to a map followed by flat with depth 1.","required":true,"membersRef":"d634dcf35402"},{"name":"flat","type":"<A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[]","description":"Returns a new array with all sub-array elements concatenated into it recursively up to the\\nspecified depth.","required":true,"membersRef":"ef8e8c28b0c7"}],"3a588c25a85d":[{"name":"predicate","type":"(value: number, index: number, array: number[]) => value is S","description":"A function that accepts up to three arguments. The every method calls\\nthe predicate function for each element in the array until the predicate returns a value\\nwhich is coercible to the Boolean value false, or until the end of the array.","required":true},{"name":"thisArg","type":"any","description":"An object to which the this keyword can refer in the predicate function.\\nIf thisArg is omitted, undefined is used as the this value.","required":true}],"4a4796baca71":[{"name":"items","type":"ConcatArray<number>[]","description":"Additional arrays and/or items to add to the end of the array.","required":true}],"4b63fb4ce05d":[{"name":"callbackfn","type":"(previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number","description":"A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.","required":true}],"55136e418d35":[{"name":"callbackfn","type":"(previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number","description":"A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.","required":true}],"5cc628989a60":[{"name":"callbackfn","type":"(value: number, index: number, array: number[]) => void","description":"A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.","required":true},{"name":"thisArg","type":"any","description":"An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.","required":true}],"749775027192":[{"name":"target","type":"number","description":"If target is negative, it is treated as length+target where length is the\\nlength of the array.","required":true},{"name":"start","type":"number","description":"If start is negative, it is treated as length+start. If end is negative, it\\nis treated as length+end.","required":true},{"name":"end","type":"number | undefined","description":"If not specified, length of the this object is used as its default value.","required":true}],"7c5cd566e23d":[{"name":"toString","type":"(radix?: number | undefined) => string","description":"Returns a string representation of an object.","required":true},{"name":"toFixed","type":"(fractionDigits?: number | undefined) => string","description":"Returns a string representing a number in fixed-point notation.","required":true},{"name":"toExponential","type":"(fractionDigits?: number | undefined) => string","description":"Returns a string containing a number represented in exponential notation.","required":true},{"name":"toPrecision","type":"(precision?: number | undefined) => string","description":"Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.","required":true},{"name":"valueOf","type":"() => number","description":"Returns the primitive value of the specified object.","required":true},{"name":"toLocaleString","type":"{ (locales?: string | string[] | undefined, options?: NumberFormatOptions | undefined): string; (locales?: LocalesArgument, options?: NumberFormatOptions | undefined): string; }","description":"Converts a number to a string by using the current or specified locale.","required":true}],"863356df8489":[{"name":"searchElement","type":"number","description":"The element to search for.","required":true},{"name":"fromIndex","type":"number | undefined","description":"The position in this array at which to begin searching for searchElement.","required":true}],"8688db3d1e3d":[{"name":"predicate","type":"(value: number, index: number, array: number[]) => unknown","description":"A function that accepts up to three arguments. The some method calls\\nthe predicate function for each element in the array until the predicate returns a value\\nwhich is coercible to the Boolean value true, or until the end of the array.","required":true},{"name":"thisArg","type":"any","description":"An object to which the this keyword can refer in the predicate function.\\nIf thisArg is omitted, undefined is used as the this value.","required":true}],"8ffe134cb078":[{"name":"separator","type":"string | undefined","description":"A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.","required":true}],"aa9f2ffc3f72":[{"name":"callbackfn","type":"(value: number, index: number, array: number[]) => U","description":"A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.","required":true},{"name":"thisArg","type":"any","description":"An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.","required":true}],"ac29f34bcece":[{"name":"predicate","type":"(value: number, index: number, obj: number[]) => value is S","description":"find calls predicate once for each element of the array, in ascending\\norder, until it finds one where predicate returns true. If such an element is found, find\\nimmediately returns that element value. Otherwise, find returns undefined.","required":true},{"name":"thisArg","type":"any","description":"If provided, it will be used as the this value for each invocation of\\npredicate. If it is not provided, undefined is used instead.","required":true}],"c7ac5e2fda1b":[{"name":"compareFn","type":"((a: number, b: number) => number) | undefined","description":"Function used to determine the order of the elements. It is expected to return\\na negative value if the first argument is less than the second argument, zero if they\'re equal, and a positive\\nvalue otherwise. If omitted, the elements are sorted in ascending, UTF-16 code unit order.\\n```ts\\n[11,2,22,1].sort((a, b) => a - b)\\n```","required":true}],"cd2fa974e364":[{"name":"start","type":"number | undefined","description":"The beginning index of the specified portion of the array.\\nIf start is undefined, then the slice begins at index 0.","required":true},{"name":"end","type":"number | undefined","description":"The end index of the specified portion of the array. This is exclusive of the element at the index \'end\'.\\nIf end is undefined, then the slice extends to the end of the array.","required":true}],"d4e28111f893":[{"name":"predicate","type":"(value: number, index: number, obj: number[]) => unknown","description":"find calls predicate once for each element of the array, in ascending\\norder, until it finds one where predicate returns true. If such an element is found,\\nfindIndex immediately returns that element index. Otherwise, findIndex returns -1.","required":true},{"name":"thisArg","type":"any","description":"If provided, it will be used as the this value for each invocation of\\npredicate. If it is not provided, undefined is used instead.","required":true}],"d634dcf35402":[{"name":"callback","type":"(this: This, value: number, index: number, array: number[]) => U | readonly U[]","description":"A function that accepts up to three arguments. The flatMap method calls the\\ncallback function one time for each element in the array.","required":true},{"name":"thisArg","type":"This | undefined","description":"An object to which the this keyword can refer in the callback function. If\\nthisArg is omitted, undefined is used as the this value.","required":true}],"d8ba39295f9c":[{"name":"searchElement","type":"number","description":"The value to locate in the array.","required":true},{"name":"fromIndex","type":"number | undefined","description":"The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array.","required":true}],"e67c7db42e8b":[{"name":"predicate","type":"(value: number, index: number, array: number[]) => value is S","description":"A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.","required":true},{"name":"thisArg","type":"any","description":"An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.","required":true}],"e97233a284c8":[{"name":"items","type":"number[]","description":"New elements to add to the array.","required":true}],"ef8e8c28b0c7":[{"name":"depth","type":"D | undefined","description":"The maximum recursion depth","required":true,"membersRef":"7c5cd566e23d"}],"f335e0c14384":[{"name":"items","type":"number[]","description":"Elements to insert at the start of the array.","required":true}]}}')
// EXTERNAL MODULE: ./src/components/getComponentMetaData.tsx
var getComponentMetaData = __webpack_require__(59282);
;// CONCATENATED MODULE: ./docs/components/pagination.mdx


const frontMatter = {
	title: 'Pagination',
	description: 'Paginering för tabeller'
};
const contentTitle = undefined;

const assets = {

};







const toc = [{
  "value": "API",
  "id": "api",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(getComponentMetaData/* .ComponentHeader */.B, {
      name: "Pagination",
      friendlyName: "Paginering",
      overrideHeadlessLink: ""
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Paginering för tabeller, anpassad för ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@tanstack/react-table"
      }), ". Se exempel på användning under vår guide för ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/dev/tanstack-table/#paginering",
        children: "Tanstack Table"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(PropsTable/* .PropTable */.U, {
      doc: Pagination_namespaceObject
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



},
27158(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"container":"container__96w","removeMargins":"removeMargins_pyqd","contained":"contained_vpHR","flex":"flex_QvQ5","fluid":"fluid_DXor","col":"col_y_9f","col-1":"col-1_XXxn","col-2":"col-2_moGr","col-3":"col-3_F2cd","col-quarter":"col-quarter_mUa9","col-4":"col-4__Ww3","col-third":"col-third_X71J","col-5":"col-5_ND3q","col-6":"col-6_H5Vp","col-half":"col-half_H56r","col-7":"col-7_RH3X","col-8":"col-8_hMp3","col-9":"col-9_OLoe","col-10":"col-10_cQ6C","col-11":"col-11_yjbP","col-12":"col-12_effh","col-full":"col-full_h70L","col-auto":"col-auto_gE4S","col-grow":"col-grow_acso","col-xs-1":"col-xs-1_Hh8U","col-xs-2":"col-xs-2_ZMrQ","col-xs-3":"col-xs-3_LOso","col-xs-quarter":"col-xs-quarter_l4rV","col-xs-4":"col-xs-4_kwz5","col-xs-third":"col-xs-third_yuln","col-xs-5":"col-xs-5_BLF1","col-xs-6":"col-xs-6_NaqK","col-xs-half":"col-xs-half_HC78","col-xs-7":"col-xs-7_h30J","col-xs-8":"col-xs-8_Fg_C","col-xs-9":"col-xs-9_wEbq","col-xs-10":"col-xs-10_NLbj","col-xs-11":"col-xs-11_kH0N","col-xs-12":"col-xs-12_Ydr2","col-xs-full":"col-xs-full_uWok","col-xs-auto":"col-xs-auto_lQ7o","col-xs-grow":"col-xs-grow_GUrq","col-sm-1":"col-sm-1_DYrQ","col-sm-2":"col-sm-2_R_jy","col-sm-3":"col-sm-3_f8lb","col-sm-quarter":"col-sm-quarter_Ur0q","col-sm-4":"col-sm-4_fxSP","col-sm-third":"col-sm-third_bFKM","col-sm-5":"col-sm-5_ZOWL","col-sm-6":"col-sm-6_SNZr","col-sm-half":"col-sm-half_j2M4","col-sm-7":"col-sm-7_ZL2b","col-sm-8":"col-sm-8_eOm5","col-sm-9":"col-sm-9_VPRS","col-sm-10":"col-sm-10_pj8F","col-sm-11":"col-sm-11_pO1i","col-sm-12":"col-sm-12_VlOc","col-sm-full":"col-sm-full_tlkf","col-sm-auto":"col-sm-auto_h3rQ","col-sm-grow":"col-sm-grow_r8Ij","col-md-1":"col-md-1_d_HG","col-md-2":"col-md-2_wh0s","col-md-3":"col-md-3_HNiY","col-md-quarter":"col-md-quarter_KGqv","col-md-4":"col-md-4_pP9O","col-md-third":"col-md-third_dpVt","col-md-5":"col-md-5_GQ4a","col-md-6":"col-md-6_R2MU","col-md-half":"col-md-half_dbor","col-md-7":"col-md-7_MwXS","col-md-8":"col-md-8_SEAf","col-md-9":"col-md-9_fDDy","col-md-10":"col-md-10_XcQu","col-md-11":"col-md-11_fwSK","col-md-12":"col-md-12_EjPC","col-md-full":"col-md-full_fqGQ","col-md-auto":"col-md-auto_IPi7","col-md-grow":"col-md-grow_sN1d","col-lg-1":"col-lg-1_XKAR","col-lg-2":"col-lg-2_CGg5","col-lg-3":"col-lg-3_IG8i","col-lg-quarter":"col-lg-quarter_ZP49","col-lg-4":"col-lg-4_lB2o","col-lg-third":"col-lg-third_l5Ik","col-lg-5":"col-lg-5_kwIR","col-lg-6":"col-lg-6_jFE6","col-lg-half":"col-lg-half_mHG6","col-lg-7":"col-lg-7_VKpt","col-lg-8":"col-lg-8_ppE2","col-lg-9":"col-lg-9_SPGU","col-lg-10":"col-lg-10_v6yO","col-lg-11":"col-lg-11_JCEp","col-lg-12":"col-lg-12_Qeri","col-lg-full":"col-lg-full_sIzl","col-lg-auto":"col-lg-auto_fQzB","col-lg-grow":"col-lg-grow_sFC4","col-xl-1":"col-xl-1_syh4","col-xl-2":"col-xl-2_R5eL","col-xl-3":"col-xl-3_tCGI","col-xl-quarter":"col-xl-quarter_Y5jm","col-xl-4":"col-xl-4_gZXZ","col-xl-third":"col-xl-third_p0LY","col-xl-5":"col-xl-5_sQxk","col-xl-6":"col-xl-6_C0Uv","col-xl-half":"col-xl-half_BD1M","col-xl-7":"col-xl-7_zRjA","col-xl-8":"col-xl-8_PAua","col-xl-9":"col-xl-9_vseQ","col-xl-10":"col-xl-10_ogWN","col-xl-11":"col-xl-11_SCcL","col-xl-12":"col-xl-12_iZFt","col-xl-full":"col-xl-full_akF9","col-xl-auto":"col-xl-auto_CKEz","col-xl-grow":"col-xl-grow_f8Vo","offset-1":"offset-1_cB0o","offset-2":"offset-2_YMBL","offset-3":"offset-3_UAyK","offset-quarter":"offset-quarter_MsqC","offset-4":"offset-4_MJ13","offset-third":"offset-third_LUur","offset-5":"offset-5_Joje","offset-6":"offset-6_JO1q","offset-half":"offset-half_Cxdq","offset-7":"offset-7_CLg_","offset-8":"offset-8_Lwfd","offset-9":"offset-9_X8qo","offset-10":"offset-10_n5Gz","offset-11":"offset-11_BGVy","offset-auto":"offset-auto_icoL","offset-xs-1":"offset-xs-1_Bqie","offset-xs-2":"offset-xs-2_sUUC","offset-xs-3":"offset-xs-3_QJ3N","offset-xs-quarter":"offset-xs-quarter_iQ8U","offset-xs-4":"offset-xs-4_KieU","offset-xs-third":"offset-xs-third_BvfR","offset-xs-5":"offset-xs-5_bU4d","offset-xs-6":"offset-xs-6_GQ4X","offset-xs-half":"offset-xs-half_cwbz","offset-xs-7":"offset-xs-7_SqQ2","offset-xs-8":"offset-xs-8_EAHs","offset-xs-9":"offset-xs-9_nY0z","offset-xs-10":"offset-xs-10_tOzF","offset-xs-11":"offset-xs-11_oYjr","offset-xs-auto":"offset-xs-auto_C1mp","offset-sm-1":"offset-sm-1_tX74","offset-sm-2":"offset-sm-2_aLgk","offset-sm-3":"offset-sm-3_H3UX","offset-sm-quarter":"offset-sm-quarter_JVaE","offset-sm-4":"offset-sm-4_aOLo","offset-sm-third":"offset-sm-third__7rb","offset-sm-5":"offset-sm-5_mTag","offset-sm-6":"offset-sm-6_EiCN","offset-sm-half":"offset-sm-half_NCRf","offset-sm-7":"offset-sm-7_AW4i","offset-sm-8":"offset-sm-8_LoVr","offset-sm-9":"offset-sm-9_m2yF","offset-sm-10":"offset-sm-10_KXZn","offset-sm-11":"offset-sm-11_o8EN","offset-sm-auto":"offset-sm-auto_OFdP","offset-md-1":"offset-md-1_xNnA","offset-md-2":"offset-md-2_M2wp","offset-md-3":"offset-md-3_hbhk","offset-md-quarter":"offset-md-quarter_nF_3","offset-md-4":"offset-md-4_TUDA","offset-md-third":"offset-md-third_tS3o","offset-md-5":"offset-md-5_ZsoI","offset-md-6":"offset-md-6_Fstc","offset-md-half":"offset-md-half_HEG0","offset-md-7":"offset-md-7_MYkw","offset-md-8":"offset-md-8_z0b9","offset-md-9":"offset-md-9_X_wB","offset-md-10":"offset-md-10_w6XG","offset-md-11":"offset-md-11_FEFD","offset-md-auto":"offset-md-auto_Umu5","offset-lg-1":"offset-lg-1_rUx8","offset-lg-2":"offset-lg-2_AX6n","offset-lg-3":"offset-lg-3_y_M0","offset-lg-quarter":"offset-lg-quarter_gUzC","offset-lg-4":"offset-lg-4_qcT5","offset-lg-third":"offset-lg-third_ifVe","offset-lg-5":"offset-lg-5_Hw2b","offset-lg-6":"offset-lg-6_Ckf9","offset-lg-half":"offset-lg-half_aHqJ","offset-lg-7":"offset-lg-7_C9bd","offset-lg-8":"offset-lg-8_z1iD","offset-lg-9":"offset-lg-9_jIoq","offset-lg-10":"offset-lg-10_NJJM","offset-lg-11":"offset-lg-11_rj3G","offset-lg-auto":"offset-lg-auto_t6yE","offset-xl-1":"offset-xl-1_NBlq","offset-xl-2":"offset-xl-2_xnbw","offset-xl-3":"offset-xl-3_x1fR","offset-xl-quarter":"offset-xl-quarter_rKWW","offset-xl-4":"offset-xl-4_E3Pl","offset-xl-third":"offset-xl-third_ZHMr","offset-xl-5":"offset-xl-5_KR3o","offset-xl-6":"offset-xl-6_hR9Z","offset-xl-half":"offset-xl-half_hDaK","offset-xl-7":"offset-xl-7_k6Zu","offset-xl-8":"offset-xl-8_JEm7","offset-xl-9":"offset-xl-9_z9xR","offset-xl-10":"offset-xl-10_HT4q","offset-xl-11":"offset-xl-11_Cd9z","offset-xl-auto":"offset-xl-auto_XRsv"});

},
67793(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  U: () => (/* binding */ PropTable)
});

// UNUSED EXPORTS: DisplayCompositeTypes

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(31085);
// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__(14041);
// EXTERNAL MODULE: ../../node_modules/react-aria-components/dist/private/Dialog.mjs + 1 modules
var Dialog = __webpack_require__(72026);
// EXTERNAL MODULE: ../../packages/components/src/popover/Popover.tsx + 1 modules
var Popover = __webpack_require__(81536);
// EXTERNAL MODULE: ../../packages/components/src/accordion/Accordion.tsx + 1 modules
var Accordion = __webpack_require__(19381);
// EXTERNAL MODULE: ../../packages/components/src/accordion/AccordionItem.tsx + 1 modules
var AccordionItem = __webpack_require__(28442);
;// CONCATENATED MODULE: ./src/css/propstable.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const propstable_module = ({"accordion":"accordion_tS3o","propsGridTable":"propsGridTable_Mtyx","membersTable":"membersTable_WMKU","popover":"popover_sIab","arrow":"arrow_Ij9y"});
// EXTERNAL MODULE: ../../node_modules/react-markdown/lib/index.js + 137 modules
var lib = __webpack_require__(83059);
// EXTERNAL MODULE: ../../node_modules/react-lowlight/src/Lowlight.js + 2 modules
var Lowlight = __webpack_require__(17329);
// EXTERNAL MODULE: ../../node_modules/react-lowlight/src/common.js + 38 modules
var common = __webpack_require__(46900);
// EXTERNAL MODULE: ../../node_modules/react-aria/dist/private/interactions/Pressable.mjs
var Pressable = __webpack_require__(13919);
;// CONCATENATED MODULE: ./src/utils/jsdocLinkToMarkdown.ts
const jsdocLinkToMarkdown = (comment)=>// {@link URL|Text} or {@link URL Text} format (JSDoc style)
    comment.replace(/\{@link\s+([^|\s}]+)\s*\|?\s*([^}]+)\}/g, (match, url, text)=>`[${text.trim()}](${url})`)// Replace @see with "See " at the beginning of lines
    .replace(/^\s*@see\s+/gm, 'See ')// Remove @link tags from the beginning of lines (but keep the markdown link)
    .replace(/^\s*@link\s+/gm, '')// Remove any extra @link tags that might be inline
    .replace(/\s*@link\s+/g, ' ');

;// CONCATENATED MODULE: ./src/components/PropsTable.tsx









/**
 * Generated docs store drill-down members once per file in `doc.types` and
 * refer to them by key. Resolves those references into nested `members`.
 */ function resolveProps(doc) {
    const tables = new Map();
    const resolve = (ref)=>{
        if (!ref) return undefined;
        if (!tables.has(ref)) {
            tables.set(ref, doc.types[ref].map((param)=>{
                let { membersRef, ...member } = param;
                return {
                    ...member,
                    members: resolve(membersRef)
                };
            }));
        }
        return tables.get(ref);
    };
    return Object.fromEntries(Object.entries(doc.props).map((param)=>{
        let [key, prop] = param;
        const { membersRef, value, ...type } = prop.type;
        return [
            key,
            {
                ...prop,
                type: {
                    ...type,
                    value: value?.map((param)=>{
                        let { membersRef, ...entry } = param;
                        return {
                            ...entry,
                            members: resolve(membersRef)
                        };
                    }),
                    members: resolve(membersRef)
                }
            }
        ];
    }));
}
function hasMembers(type) {
    return Array.isArray(type.members) && type.members.length > 0;
}
/** Renders a type name — clickable with drill-down popover if it has members */ const DrillableType = (param)=>{
    let { typeStr, members } = param;
    if (members && members.length > 0) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* .DialogTrigger */.zM, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Pressable/* .Pressable */.o, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        role: "button",
                        style: {
                            cursor: 'pointer'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Lowlight/* ["default"] */.A, {
                            value: typeStr,
                            inline: true,
                            language: "typescript",
                            markers: []
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Popover/* .Popover */.A, {
                    style: {
                        maxWidth: 'min(90vw, 800px)'
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MembersTable, {
                        members: members
                    })
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Lowlight/* ["default"] */.A, {
        value: typeStr,
        inline: true,
        language: "typescript",
        markers: []
    });
};
const MembersTable = (param)=>{
    let { members } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: propstable_module.membersTable,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("table", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("thead", {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                children: "Name"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                children: "Type"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                children: "Description"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("tbody", {
                    children: members.map((member)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Lowlight/* ["default"] */.A, {
                                        value: `${member.name}${member.required ? '' : '?'}`,
                                        inline: true,
                                        language: "typescript",
                                        markers: []
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DrillableType, {
                                        typeStr: member.type,
                                        members: member.members
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                    children: member.description || '-'
                                })
                            ]
                        }, member.name))
                })
            ]
        })
    });
};
const DisplayCompositeTypes = (param)=>{
    let { props } = param;
    if (hasMembers(props.type)) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(DrillableType, {
            typeStr: props.type.name,
            members: props.type.members
        });
    }
    switch(props.type.name){
        case 'enum':
            {
                return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* .DialogTrigger */.zM, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Pressable/* .Pressable */.o, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                role: "button",
                                style: {
                                    cursor: 'pointer'
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Lowlight/* ["default"] */.A, {
                                    value: props.type.raw,
                                    inline: true,
                                    language: "typescript",
                                    markers: []
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Popover/* .Popover */.A, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "hljs-code",
                                children: props.type.value?.map((r, i)=>{
                                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        children: [
                                            i === 0 ? ' ' : ' | ',
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(DrillableType, {
                                                typeStr: r.value.replace(/"/g, "'"),
                                                members: r.members
                                            })
                                        ]
                                    }, `${r.value}${i}`);
                                })
                            })
                        })
                    ]
                });
            }
        default:
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(Lowlight/* ["default"] */.A, {
                value: props.type.name,
                inline: true,
                language: "typescript",
                markers: []
            });
    }
};
/**
 * Props table for a component. Import the component's generated API doc in
 * the MDX file and pass it as `doc`:
 *
 * ```mdx
 * import ButtonApi from '@midas-ds/api/components/Button.json'
 *
 * <PropTable doc={ButtonApi} />
 * ```
 */ const PropTable = (param)=>{
    let { doc, defaultOpen = true } = param;
    const props = (0,react.useMemo)(()=>resolveProps(doc), [
        doc
    ]);
    const { events, accessibility, rest } = Object.entries(props).reduce((acc, param)=>{
        let [key, value] = param;
        if (key.startsWith('on')) {
            acc.events[key] = value;
        } else if (key.startsWith('aria-')) {
            acc.accessibility[key] = value;
        } else {
            acc.rest[key] = value;
        }
        return acc;
    }, {
        events: {},
        accessibility: {},
        rest: {}
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Accordion/* .Accordion */.n, {
        className: propstable_module.accordion,
        allowsMultipleExpanded: true,
        defaultExpandedKeys: defaultOpen ? [
            'props'
        ] : [],
        children: [
            Object.getOwnPropertyNames(rest).length !== 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionItem/* .AccordionItem */.A, {
                id: "props",
                title: "Props",
                className: propstable_module.accordionItem,
                contentBackground: "inherit",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid, {
                    propGroup: rest,
                    props: props
                })
            }),
            Object.getOwnPropertyNames(events).length !== 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionItem/* .AccordionItem */.A, {
                id: "events",
                title: "Events",
                className: propstable_module.accordionItem,
                contentBackground: "inherit",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid, {
                    propGroup: events,
                    props: props,
                    showDefault: false
                })
            }),
            Object.getOwnPropertyNames(accessibility).length !== 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionItem/* .AccordionItem */.A, {
                id: "accessibility",
                title: "Tillg\xe4nglighet",
                className: propstable_module.accordionItem,
                contentBackground: "inherit",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid, {
                    propGroup: accessibility,
                    props: props,
                    showDefault: false
                })
            })
        ]
    });
};
const Grid = (param)=>{
    let { propGroup, props, showDefault = true } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: propstable_module.propsGridTable,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("table", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("thead", {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                children: "Name"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                children: "Type"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                children: showDefault && 'Default'
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                children: "Description"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("tbody", {
                    children: Object.keys(propGroup).map((key)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("td", {
                                    "data-title": "Name",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Lowlight/* ["default"] */.A, {
                                            value: key,
                                            inline: true,
                                            language: "typescript",
                                            markers: []
                                        }),
                                        props[key].required && ' *'
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                    "data-title": "Type",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DisplayCompositeTypes, {
                                        props: props[key]
                                    })
                                }),
                                showDefault ? /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                    "data-title": "Default",
                                    children: props[key].defaultValue ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Lowlight/* ["default"] */.A, {
                                        value: props[key].defaultValue.value,
                                        inline: true,
                                        language: "typescript",
                                        markers: []
                                    }) : '-'
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {}),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                    "data-title": "Description",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(lib/* .Markdown */.oz, {
                                        children: jsdocLinkToMarkdown(props[key].description)
                                    })
                                })
                            ]
                        }, key))
                })
            ]
        })
    });
};


},
59282(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  B: () => (ComponentHeader)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(31085);
/* import */ var _midas_ds_components__rspack_import_3 = __webpack_require__(30230);
/* import */ var _midas_ds_components__rspack_import_4 = __webpack_require__(23527);
/* import */ var _midas_ds_components__rspack_import_5 = __webpack_require__(36360);
/* import */ var lucide_react__rspack_import_6 = __webpack_require__(12303);
/* import */ var _site_src_components_icons__rspack_import_1 = __webpack_require__(9333);
/* import */ var _docusaurus_useBaseUrl__rspack_import_2 = __webpack_require__(914);



/* eslint-disable @nx/enforce-module-boundaries */ 

const ComponentHeader = (param)=>{
    let { name, friendlyName, overrideHeadlessLink, overrideHeadlessLinkTitle, hideStorybookLink, overrideStorybookPath } = param;
    const baseUrl = _docusaurus_useBaseUrl__rspack_import_2/* ["default"] */.Ay;
    const componentPath = overrideStorybookPath ?? `?path=/docs/components-${name.toLowerCase()}--docs`;
    const storybookHost =  false ? 0 : baseUrl('/storybook');
    const storybookLink = `${storybookHost}/${componentPath}`;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("section", {
        className: "component-header",
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_midas_ds_components__rspack_import_3/* .Grid */.x, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_midas_ds_components__rspack_import_4/* .GridItem */.E, {
                    size: "auto",
                    className: "friendlyName",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("b", {
                        children: friendlyName
                    })
                }),
                !hideStorybookLink && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_midas_ds_components__rspack_import_4/* .GridItem */.E, {
                    size: "auto",
                    className: "headerLink",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_midas_ds_components__rspack_import_5/* .LinkButton */.z, {
                        href: storybookLink,
                        variant: "tertiary",
                        icon: _site_src_components_icons__rspack_import_1/* .EmptyIcon */.F,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_site_src_components_icons__rspack_import_1/* .StorybookIcon */.q, {
                                size: 24,
                                color: "#FF4785"
                            }),
                            "Storybook"
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_midas_ds_components__rspack_import_4/* .GridItem */.E, {
                    size: "auto",
                    className: "headerLink",
                    children: overrideHeadlessLink !== '' && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_midas_ds_components__rspack_import_5/* .LinkButton */.z, {
                        href: overrideHeadlessLink ? overrideHeadlessLink : `https://react-spectrum.adobe.com/react-aria/${name}.html`,
                        target: "_blank",
                        variant: "tertiary",
                        icon: lucide_react__rspack_import_6/* ["default"] */.A,
                        iconPlacement: "left",
                        children: overrideHeadlessLinkTitle ? overrideHeadlessLinkTitle : 'React Aria'
                    })
                })
            ]
        })
    });
};


},
9333(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  F: () => (/* reexport */ EmptyIcon),
  q: () => (/* reexport */ StorybookIcon)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(31085);
// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__(14041);
;// CONCATENATED MODULE: ./src/components/icons/Storybook.tsx


const StorybookIcon = /* @__PURE__ */ /*#__PURE__*/ react.forwardRef((param, forwardedRef)=>{
    let { color = 'currentColor', size = 20, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        viewBox: "-31.5 0 319 319",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "xMidYMid",
        fill: "#000000",
        width: size,
        height: size,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
                id: "SVGRepo_bgCarrier",
                strokeWidth: "0"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
                id: "SVGRepo_tracerCarrier",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                id: "SVGRepo_iconCarrier",
                children: [
                    ' ',
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
                        children: [
                            ' ',
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                d: "M9.87245893,293.324145 L0.0114611411,30.5732167 C-0.314208957,21.8955842 6.33948896,14.5413918 15.0063196,13.9997149 L238.494389,0.0317105427 C247.316188,-0.519651867 254.914637,6.18486163 255.466,15.0066607 C255.486773,15.339032 255.497167,15.6719708 255.497167,16.0049907 L255.497167,302.318596 C255.497167,311.157608 248.331732,318.323043 239.492719,318.323043 C239.253266,318.323043 239.013844,318.317669 238.774632,318.306926 L25.1475605,308.712253 C16.8276309,308.338578 10.1847994,301.646603 9.87245893,293.324145 L9.87245893,293.324145 Z",
                                id: "path-1",
                                children: ' '
                            }),
                            ' '
                        ]
                    }),
                    ' ',
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                        children: [
                            ' ',
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("mask", {
                                id: "mask-2",
                                fill: "white",
                                children: [
                                    ' ',
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("use", {
                                        href: "#path-1",
                                        children: " "
                                    }),
                                    ' '
                                ]
                            }),
                            ' ',
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("use", {
                                fill: color,
                                fillRule: "nonzero",
                                href: "#path-1",
                                children: ' '
                            }),
                            ' ',
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                d: "M188.665358,39.126973 L190.191903,2.41148534 L220.883535,0 L222.205755,37.8634126 C222.251771,39.1811466 221.22084,40.2866846 219.903106,40.3327009 C219.338869,40.3524045 218.785907,40.1715096 218.342409,39.8221376 L206.506729,30.4984116 L192.493574,41.1282444 C191.443077,41.9251106 189.945493,41.7195021 189.148627,40.6690048 C188.813185,40.2267976 188.6423,39.6815326 188.665358,39.126973 Z M149.413703,119.980309 C149.413703,126.206975 191.355678,123.222696 196.986019,118.848893 C196.986019,76.4467826 174.234041,54.1651411 132.57133,54.1651411 C90.9086182,54.1651411 67.5656805,76.7934542 67.5656805,110.735941 C67.5656805,169.85244 147.345341,170.983856 147.345341,203.229219 C147.345341,212.280549 142.913138,217.654777 133.162291,217.654777 C120.456641,217.654777 115.433477,211.165914 116.024438,189.103298 C116.024438,184.317101 67.5656805,182.824962 66.0882793,189.103298 C62.3262146,242.56887 95.6363019,257.990394 133.753251,257.990394 C170.688279,257.990394 199.645341,238.303123 199.645341,202.663511 C199.645341,139.304202 118.683759,141.001326 118.683759,109.604526 C118.683759,96.8760922 128.139127,95.178968 133.753251,95.178968 C139.662855,95.178968 150.300143,96.2205679 149.413703,119.980309 Z",
                                fill: "#FFFFFF",
                                fillRule: "nonzero",
                                mask: "url(#mask-2)",
                                children: ' '
                            }),
                            ' '
                        ]
                    }),
                    ' '
                ]
            })
        ]
    });
});

;// CONCATENATED MODULE: ./src/components/icons/Empty.tsx

const EmptyIcon = ()=>/*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        height: 0,
        width: 0
    });

;// CONCATENATED MODULE: ./src/components/icons/index.ts




},
19381(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  n: () => (/* binding */ Accordion)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(31085);
;// CONCATENATED MODULE: ../../packages/components/src/accordion/Accordion.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Accordion_module = ({"root":"root_w42l","contained":"contained_rP30","triggerButton":"triggerButton_jEcc"});
// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__(14041);
// EXTERNAL MODULE: ../../packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(74677);
// EXTERNAL MODULE: ../../node_modules/react-aria-components/dist/private/Disclosure.mjs + 3 modules
var Disclosure = __webpack_require__(51669);
// EXTERNAL MODULE: ../../packages/components/src/accordion/AccordionContext.ts
var AccordionContext = __webpack_require__(79881);
;// CONCATENATED MODULE: ../../packages/components/src/accordion/Accordion.tsx
'use client';






/**
 * Accordions help reduce visual clutter on a page by organizing content into collapsible sections.
 */ const Accordion = (param)=>{
    let { children, className, isContained, size = 'large', ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionContext/* .AccordionContext.Provider */.C.Provider, {
        value: {
            isContained,
            size
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Disclosure/* .DisclosureGroup */.Tw, {
            className: (0,clsx/* ["default"] */.A)(Accordion_module.root, isContained ? Accordion_module.contained : Accordion_module.uncontained, className),
            ...props,
            children: children
        })
    });
};


},
79881(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  C: () => (AccordionContext)
});
/* import */ var react__rspack_import_0 = __webpack_require__(14041);

const AccordionContext = (0,react__rspack_import_0.createContext)(undefined);


},
28442(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ AccordionItem)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(31085);
// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__(14041);
// EXTERNAL MODULE: ../../node_modules/react-aria-components/dist/private/Disclosure.mjs + 3 modules
var Disclosure = __webpack_require__(51669);
// EXTERNAL MODULE: ../../node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95288);
// EXTERNAL MODULE: ../../packages/components/src/button/Button.tsx
var Button = __webpack_require__(26282);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/chevron-down.mjs
var chevron_down = __webpack_require__(86788);
// EXTERNAL MODULE: ../../packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(74677);
;// CONCATENATED MODULE: ../../packages/components/src/accordion/AccordionItem.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const AccordionItem_module = ({"item":"item_wSqW","contained":"contained_Z_7A","medium":"medium_pS6e","success":"success_rUpQ","warning":"warning_I0dL","info":"info_gCGu","important":"important_fwgw","triggerButton":"triggerButton_Cluj","triggerText":"triggerText_uo81","trigger":"trigger_unEz","triggerMainContent":"triggerMainContent_LG_r","\t":"\t_aeGH","chevronIcon":"chevronIcon_EVtc","statusIcon":"statusIcon_Pq7i","panel":"panel_zkEb","content":"content_CTMZ","neutralBackground":"neutralBackground_X1kb","header":"header_BbQI"});
// EXTERNAL MODULE: ../../packages/components/src/heading/Heading.tsx + 1 modules
var Heading = __webpack_require__(15668);
// EXTERNAL MODULE: ../../packages/components/src/accordion/AccordionContext.ts
var AccordionContext = __webpack_require__(79881);
// EXTERNAL MODULE: ../../packages/components/src/common/FeedbackStatusIcon.tsx + 1 modules
var FeedbackStatusIcon = __webpack_require__(35349);
;// CONCATENATED MODULE: ../../packages/components/src/accordion/AccordionItem.tsx











const AccordionItem = (param)=>{
    let { title, children, className, headingLevel = 'h2', type, contentBackground: contentBackgroundFromProp, hasBackground, size = 'large', isContained: isContainedFromProp, iconAriaLabel, ...props } = param;
    const context = (0,react.useContext)(AccordionContext/* .AccordionContext */.C);
    const isContained = isContainedFromProp ?? context?.isContained ?? false;
    const titleIsReactNode = typeof title === 'object';
    const contentBackground = contentBackgroundFromProp ?? (hasBackground === false ? 'inherit' : 'neutral');
    (0,react.useEffect)(()=>{
        if (type && !isContained) {
            console.warn(`AccordionItem: When 'type' is set, it is recommended to also set 'isContained' to true for visual consistency.`);
        }
    }, [
        type,
        isContained
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Disclosure/* .Disclosure */.EN, {
        ...props,
        className: (0,clsx/* ["default"] */.A)(AccordionItem_module.item, type && isContained && AccordionItem_module[type], (size === 'medium' || context?.size === 'medium') && AccordionItem_module.medium, isContained && AccordionItem_module.contained, className),
        children: (0,utils/* .composeRenderProps */.HW)(children, (children)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: AccordionItem_module.trigger,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* .Button */.$, {
                            className: AccordionItem_module.triggerButton,
                            slot: "trigger",
                            variant: "icon",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_down/* ["default"] */.A, {
                                    size: 20,
                                    className: AccordionItem_module.chevronIcon
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: AccordionItem_module.triggerMainContent,
                                    children: titleIsReactNode ? title : /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* .Heading */.D, {
                                        level: 3,
                                        elementType: headingLevel,
                                        className: AccordionItem_module.triggerText,
                                        children: title
                                    })
                                }),
                                type && isContained && /*#__PURE__*/ (0,jsx_runtime.jsx)(FeedbackStatusIcon/* .FeedbackStatusIcon */.$, {
                                    "aria-label": iconAriaLabel,
                                    className: AccordionItem_module.statusIcon,
                                    status: type
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Disclosure/* .DisclosurePanel */.kS, {
                        className: AccordionItem_module.panel,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: (0,clsx/* ["default"] */.A)(AccordionItem_module.content, contentBackground === 'neutral' && AccordionItem_module.neutralBackground),
                            children: children
                        })
                    })
                ]
            }))
    });
};


},
35349(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $: () => (/* binding */ FeedbackStatusIcon)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(31085);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/check.mjs
var check = __webpack_require__(25298);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/info.mjs
var info = __webpack_require__(47782);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/flag.mjs
var flag = __webpack_require__(81876);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs
var triangle_alert = __webpack_require__(43919);
// EXTERNAL MODULE: ../../packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(18232);
;// CONCATENATED MODULE: ../../packages/components/src/common/intl/translations.json
var translations_namespaceObject = JSON.parse('{"en":{"ok":"okay","information":"information","importantInformation":"important information","warning":"warning"},"sv":{"ok":"okej","information":"information","importantInformation":"viktig information","warning":"varning"}}')
;// CONCATENATED MODULE: ../../packages/components/src/common/FeedbackStatusIcon.tsx




const icons = {
    success: check/* ["default"] */.A,
    info: info/* ["default"] */.A,
    important: flag/* ["default"] */.A,
    warning: triangle_alert/* ["default"] */.A
};
const labels = {
    success: 'ok',
    info: 'information',
    important: 'importantInformation',
    warning: 'warning'
};
const FeedbackStatusIcon = (param)=>{
    let { status, 'aria-label': ariaLabel, size = 20, ...rest } = param;
    const strings = (0,useLocalizedStringFormatter/* .useLocalizedStringFormatter */.oe)(translations_namespaceObject);
    const Icon = icons[status];
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Icon, {
        "aria-label": ariaLabel || strings.format(labels[status]),
        size: size,
        ...rest
    });
};


},
30230(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  x: () => (Grid)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(31085);
/* import */ var react__rspack_import_1 = __webpack_require__(14041);
/* import */ var _Grid_module_css__rspack_import_2 = __webpack_require__(27158);
/* import */ var _utils_clsx__rspack_import_3 = __webpack_require__(74677);




/**
 * Grid based on display: flex;
 * Calculates breakpoints and distributes columns according to MV specifications
 *
 * ### Children
 * Use GridItem to manage each column.
 * GridItem accepts values of 1 through 12 and auto.
 *
 * @see {@link: https://migrationsverket.se/components/grid}
 */ const Grid = (param)=>{
    let { children, isContained = false, removeMargins = false, ...rest } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
        ...rest,
        className: (0,_utils_clsx__rspack_import_3/* ["default"] */.A)(_Grid_module_css__rspack_import_2/* ["default"].container */.A.container, isContained && _Grid_module_css__rspack_import_2/* ["default"].contained */.A.contained, removeMargins && _Grid_module_css__rspack_import_2/* ["default"].removeMargins */.A.removeMargins, rest.className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
            className: _Grid_module_css__rspack_import_2/* ["default"].flex */.A.flex,
            children: children
        })
    });
};


},
23527(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  E: () => (GridItem)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(31085);
/* import */ var react__rspack_import_1 = __webpack_require__(14041);
/* import */ var _Grid_module_css__rspack_import_2 = __webpack_require__(27158);
/* import */ var _utils_clsx__rspack_import_3 = __webpack_require__(74677);




/**
 * Columns based on display: flex;
 * GridItem accepts values of 1 through 12 and auto.
 *
 * @see {@link: https://migrationsverket.se/components/flex}
 */ const GridItem = (param)=>{
    let { children, size, offset, ...props } = param;
    const offsetClass = offset ? `offset-${offset}` : '';
    const sizeClasses = getSizeClasses(size);
    const offsetClasses = getOffsetClasses(offset);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
        ...props,
        className: (0,_utils_clsx__rspack_import_3/* ["default"] */.A)(_Grid_module_css__rspack_import_2/* ["default"].col */.A.col, _Grid_module_css__rspack_import_2/* ["default"] */.A[offsetClass], sizeClasses.map((cls)=>_Grid_module_css__rspack_import_2/* ["default"] */.A[cls]), offsetClasses.map((cls)=>_Grid_module_css__rspack_import_2/* ["default"] */.A[cls]), props.className),
        children: children
    });
};
const getSizeClasses = (size)=>{
    if (!size) return [];
    if (typeof size === 'object') {
        return Object.entries(size).map((param)=>{
            let [breakpoint, value] = param;
            return breakpoint === 'xs' ? `col-${value}` : `col-${breakpoint}-${value}`;
        });
    }
    return [
        `col-${size}`
    ];
};
const getOffsetClasses = (offset)=>{
    if (!offset) return [];
    if (typeof offset === 'object') {
        return Object.entries(offset).map((param)=>{
            let [breakpoint, value] = param;
            return breakpoint === 'xs' ? `offset-${value}` : `offset-${breakpoint}-${value}`;
        });
    }
    return [
        `offset-${offset}`
    ];
};


},
15668(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  D: () => (/* binding */ Heading_Heading)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(31085);
// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__(14041);
// EXTERNAL MODULE: ../../packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(74677);
// EXTERNAL MODULE: ../../node_modules/react-aria-components/dist/private/Heading.mjs
var Heading = __webpack_require__(72925);
;// CONCATENATED MODULE: ../../packages/components/src/heading/Heading.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Heading_module = ({"h1":"h1_fjh3","h2":"h2_UaKO","h3":"h3_elJB","h4":"h4_stZd","h5":"h5_TRor","h6":"h6_sX_H"});
;// CONCATENATED MODULE: ../../packages/components/src/heading/Heading.tsx





const Heading_Heading = (param)=>{
    let { children, className, enableMargins = false, isExpressive = false, level = 3, elementType, ...rest } = param;
    const semanticLevel = elementType && parseInt(elementType.split('h')[1]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* .Heading */.D, {
        level: semanticLevel || level,
        className: (0,clsx/* ["default"] */.A)([
            Heading_module.h1,
            Heading_module.h2,
            Heading_module.h3,
            Heading_module.h4,
            Heading_module.h5,
            Heading_module.h6
        ][level - 1], className),
        ...isExpressive && {
            'data-expressive': true
        },
        ...enableMargins && {
            'data-margin': true
        },
        ...rest,
        children: children
    });
};


},
36360(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* binding */ LinkButton)
});

// UNUSED EXPORTS: RouterProvider

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(31085);
// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__(14041);
// EXTERNAL MODULE: ../../node_modules/react-aria-components/dist/private/Link.mjs + 1 modules
var Link = __webpack_require__(77153);
// EXTERNAL MODULE: ../../node_modules/react-aria/dist/private/visually-hidden/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(32120);
;// CONCATENATED MODULE: ../../packages/components/src/link-button/LinkButton.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const LinkButton_module = ({"linkButton":"linkButton_gecX","secondary":"secondary_JNpq","icon":"icon_fF7b","tertiary":"tertiary_TMiw","danger":"danger_KaU1","iconBtn":"iconBtn_yoJx","medium":"medium_w63W","iconLeft":"iconLeft_mf1N","fullwidth":"fullwidth_KC7Q","button":"button_XFSc"});
// EXTERNAL MODULE: ../../packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(74677);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/square-arrow-out-up-right.mjs
var square_arrow_out_up_right = __webpack_require__(51951);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/arrow-left.mjs
var arrow_left = __webpack_require__(29853);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/arrow-right.mjs
var arrow_right = __webpack_require__(70840);
// EXTERNAL MODULE: ../../packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(18232);
;// CONCATENATED MODULE: ../../packages/components/src/link-button/intl/translations.json
var translations_namespaceObject = JSON.parse('{"en":{"opensInNewTab":"Opens in new tab"},"sv":{"opensInNewTab":"Öppnas i ny flik"}}')
;// CONCATENATED MODULE: ../../packages/components/src/link-button/LinkButton.tsx
'use client';









/**
 * A link to be used when a user expects a button but web technologies force us to use a a-tag
 * */ const LinkButton = (param)=>{
    let { children, variant, fullwidth, icon: customIcon, iconPlacement, className, as, size = 'large', ...rest } = param;
    const Component = as || Link/* .Link */.N;
    const strings = (0,useLocalizedStringFormatter/* .useLocalizedStringFormatter */.oe)(translations_namespaceObject);
    const getIcon = ()=>{
        if (customIcon) return {
            icon: customIcon
        };
        if (rest.target === '_blank') return {
            icon: square_arrow_out_up_right/* ["default"] */.A,
            label: strings.format('opensInNewTab')
        };
        if (iconPlacement === 'left') return {
            icon: arrow_left/* ["default"] */.A
        };
        return {
            icon: arrow_right/* ["default"] */.A
        };
    };
    const iconConfig = getIcon();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Component, {
        className: (0,clsx/* ["default"] */.A)(LinkButton_module.linkButton, variant === 'primary' && LinkButton_module.primary, variant === 'secondary' && LinkButton_module.secondary, variant === 'tertiary' && LinkButton_module.tertiary, variant === 'danger' && LinkButton_module.danger, variant === 'icon' && LinkButton_module.iconBtn, size === 'medium' && LinkButton_module.medium, fullwidth && LinkButton_module.fullwidth, iconPlacement === 'left' && LinkButton_module.iconLeft, className),
        ...rest,
        children: [
            children,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Icon, {
                className: LinkButton_module.icon,
                icon: iconConfig.icon,
                size: 20,
                "aria-hidden": true
            }),
            iconConfig.label && /*#__PURE__*/ (0,jsx_runtime.jsx)(VisuallyHidden/* .VisuallyHidden */.s, {
                children: iconConfig.label
            })
        ]
    });
};
const Icon = (param)=>{
    let { icon: IconComponent, ...rest } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(IconComponent, {
        ...rest
    });
};



},
81536(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Popover_Popover)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(31085);
// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__(14041);
// EXTERNAL MODULE: ../../node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95288);
// EXTERNAL MODULE: ../../node_modules/react-aria-components/dist/private/Popover.mjs + 1 modules
var Popover = __webpack_require__(44616);
// EXTERNAL MODULE: ../../node_modules/react-aria-components/dist/private/OverlayArrow.mjs
var OverlayArrow = __webpack_require__(19706);
// EXTERNAL MODULE: ../../packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(74677);
;// CONCATENATED MODULE: ../../packages/components/src/popover/Popover.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Popover_module = ({"popover":"popover_VTsQ","arrow":"arrow_Hrch"});
;// CONCATENATED MODULE: ../../packages/components/src/popover/Popover.tsx





const Popover_Popover = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const [mergedProps, mergedRef] = (0,utils/* .useContextProps */.JT)(props, ref, Popover/* .PopoverContext */.n);
    const { className, hideArrow = false, offset = 4, ...rest } = mergedProps;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Popover/* .Popover */.A, {
        className: (0,clsx/* ["default"] */.A)(Popover_module.popover, className),
        offset: offset,
        ref: mergedRef,
        ...rest,
        children: (0,utils/* .composeRenderProps */.HW)(mergedProps.children, (children)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    !hideArrow && /*#__PURE__*/ (0,jsx_runtime.jsx)(OverlayArrow/* .OverlayArrow */.k, {
                        className: Popover_module.arrow,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                            height: 16,
                            viewBox: "0 0 16 16",
                            width: 16,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                d: "M0 0 L8 8 L16 0"
                            })
                        })
                    }),
                    children
                ]
            }))
    });
});


},

}]);