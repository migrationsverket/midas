"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([["6361"], {
91146(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_components_layout_legacy_mdx_75f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-layout-legacy-mdx-75f.json
var site_docs_components_layout_legacy_mdx_75f_namespaceObject = JSON.parse('{"id":"components/layout/legacy","title":"Legacy Layout","description":"En skalkomponent för att få en simpel sidomeny och sidhuvud.","source":"@site/docs/components/layout/legacy.mdx","sourceDirName":"components/layout","slug":"/components/layout/legacy","permalink":"/pr-preview/pr-1431/components/layout/legacy","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"Legacy Layout","description":"En skalkomponent för att få en simpel sidomeny och sidhuvud.","sidebar_position":7},"sidebar":"sideBar","previous":{"title":"Migrationsguide","permalink":"/pr-preview/pr-1431/components/layout/migration"},"next":{"title":"LinkButton","permalink":"/pr-preview/pr-1431/components/link-button"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./apps/docs/src/components/PropsTable.tsx + 2 modules
var PropsTable = __webpack_require__(28247);
;// CONCATENATED MODULE: ./dist/api/components/Layout.json
var Layout_namespaceObject = JSON.parse('{"schemaVersion":1,"package":"@midas-ds/components","displayName":"Layout","description":"","sourceFile":"packages/components/src/layout/Layout.tsx","props":{"items":{"defaultValue":null,"description":"The menu items/item groups","name":"items","required":true,"parent":{"fileName":"midas/packages/components/src/layout/Layout.tsx","name":"MidasLayout"},"declarations":[{"fileName":"midas/packages/components/src/layout/Layout.tsx","name":"MidasLayout"}],"type":{"name":"SidebarLinkGroup[]","membersRef":"64131bbc1b71"}},"title":{"defaultValue":null,"description":"Title displayed at the top of the application header","name":"title","required":true,"parent":{"fileName":"midas/packages/components/src/layout/Layout.tsx","name":"MidasLayout"},"declarations":[{"fileName":"midas/packages/components/src/layout/Layout.tsx","name":"MidasLayout"}],"type":{"name":"string"}},"headerChildren":{"defaultValue":null,"description":"List of links in the top right of the application header","name":"headerChildren","required":false,"parent":{"fileName":"midas/packages/components/src/layout/Layout.tsx","name":"MidasLayout"},"declarations":[{"fileName":"midas/packages/components/src/layout/Layout.tsx","name":"MidasLayout"}],"type":{"name":"enum","raw":"ReactNode","value":[{"value":"Iterable<ReactNode>","description":"","fullComment":"","tags":{}},{"value":"Promise<AwaitedReactNode>","description":"Represents the completion of an asynchronous operation","fullComment":"Represents the completion of an asynchronous operation","tags":{},"membersRef":"bc30f28a4db2"},{"value":"ReactElement<unknown, string | JSXElementConstructor<any>>","description":"Represents a JSX element.\\n\\nWhere {@link ReactNode} represents everything that can be rendered, `ReactElement`\\nonly represents JSX.","fullComment":"Represents a JSX element.\\n\\nWhere {@link ReactNode} represents everything that can be rendered, `ReactElement`\\nonly represents JSX.\\n@template P The type of the props object\\n@template T The type of the component or tag\\n@example ```tsx\\nconst element: ReactElement = <div />;\\n```","tags":{"template":"P The type of the props object\\nT The type of the component or tag","example":"```tsx\\nconst element: ReactElement = <div />;\\n```"}},{"value":"ReactPortal","description":"","fullComment":"","tags":{}},{"value":"bigint","membersRef":"1effde887a16"},{"value":"false"},{"value":"null"},{"value":"number","membersRef":"21cee1dc460f"},{"value":"string","membersRef":"a37b4426d16c"},{"value":"true"}]}},"user":{"defaultValue":null,"description":"Current user details","name":"user","required":true,"parent":{"fileName":"midas/packages/components/src/layout/Layout.tsx","name":"MidasLayout"},"declarations":[{"fileName":"midas/packages/components/src/layout/Layout.tsx","name":"MidasLayout"}],"type":{"name":"SidebarUser","membersRef":"7e431012f854"}},"app":{"defaultValue":null,"description":"Name of the app","name":"app","required":true,"parent":{"fileName":"midas/packages/components/src/layout/Layout.tsx","name":"MidasLayout"},"declarations":[{"fileName":"midas/packages/components/src/layout/Layout.tsx","name":"MidasLayout"}],"type":{"name":"App","membersRef":"386a0201658d"}},"clientSideRouter":{"defaultValue":null,"description":"Provide the layout with your router for client side navigation\\n@see {@link https://designsystem.migrationsverket.se/dev/client-side-routing/ Client side routing}","name":"clientSideRouter","required":false,"parent":{"fileName":"midas/packages/components/src/layout/Layout.tsx","name":"MidasLayout"},"declarations":[{"fileName":"midas/packages/components/src/layout/Layout.tsx","name":"MidasLayout"}],"type":{"name":"enum","raw":"((path: string, routerOptions: undefined) => void)","value":[{"value":"(path: string, routerOptions: undefined) => void","description":"","fullComment":"","tags":{}}]}},"clientSideHref":{"defaultValue":null,"description":"Converts a router-specific href to a native HTML href, e.g. prepending a base path.\\nUse this if you\'re using React Router\'s `basename` option.\\n@see {@link https://reactrouter.com/en/main/hooks/use-href/ useHref}","name":"clientSideHref","required":false,"parent":{"fileName":"midas/packages/components/src/layout/Layout.tsx","name":"MidasLayout"},"declarations":[{"fileName":"midas/packages/components/src/layout/Layout.tsx","name":"MidasLayout"}],"type":{"name":"enum","raw":"((href: string) => string)","value":[{"value":"(href: string) => string","description":"","fullComment":"","tags":{}}]}},"variant":{"defaultValue":null,"description":"","name":"variant","required":true,"parent":{"fileName":"midas/packages/components/src/layout/Layout.tsx","name":"MidasLayout"},"declarations":[{"fileName":"midas/packages/components/src/layout/Layout.tsx","name":"MidasLayout"}],"type":{"name":"enum","raw":"\\"external\\" | \\"internal\\"","value":[{"value":"\\"external\\""},{"value":"\\"internal\\""}]}},"className":{"defaultValue":null,"description":"","name":"className","required":false,"parent":{"fileName":"midas/packages/components/src/layout/Layout.tsx","name":"MidasLayout"},"declarations":[{"fileName":"midas/packages/components/src/layout/Layout.tsx","name":"MidasLayout"}],"type":{"name":"string","raw":"string","membersRef":"8fe69696fdef"}},"onSidebarLinkClick":{"defaultValue":null,"description":"Event triggered when sidebar link is clicked.","name":"onSidebarLinkClick","required":false,"parent":{"fileName":"midas/packages/components/src/layout/Layout.tsx","name":"MidasLayout"},"declarations":[{"fileName":"midas/packages/components/src/layout/Layout.tsx","name":"MidasLayout"}],"type":{"name":"enum","raw":"((e: SidebarLinkClickData) => void)","value":[{"value":"(e: SidebarLinkClickData) => void","description":"","fullComment":"","tags":{}}]}}},"types":{"01d77d4df9d7":[{"name":"locales","type":"string | string[] | undefined","description":"","required":true}],"044423aaef36":[{"name":"locales","type":"string | string[] | undefined","description":"A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.","required":true},{"name":"options","type":"NumberFormatOptions | undefined","description":"An object that contains one or more properties that specify comparison options.","required":true}],"0893409af856":[{"name":"form","type":"\\"NFC\\" | \\"NFD\\" | \\"NFKC\\" | \\"NFKD\\"","description":"Applicable values: \\"NFC\\", \\"NFD\\", \\"NFKC\\", or \\"NFKD\\", If not specified default\\nis \\"NFC\\"","required":true}],"0f2023152915":[{"name":"start","type":"number","description":"The zero-based location in the array from which to start removing elements.","required":true},{"name":"deleteCount","type":"number | undefined","description":"The number of elements to remove. Omitting this argument will remove all elements from the start\\nparamater location to end of the array. If value of this argument is either a negative number, zero, undefined, or a type\\nthat cannot be converted to an integer, the function will evaluate the argument as zero and not remove any elements.","required":true}],"0f3193437c88":[{"name":"items","type":"SidebarLinkGroup[]","description":"Elements to insert at the start of the array.","required":true}],"1305ca773c62":[{"name":"searchElement","type":"SidebarLinkGroup","description":"The element to search for.","required":true,"membersRef":"8302cfa07d73"},{"name":"fromIndex","type":"number | undefined","description":"The position in this array at which to begin searching for searchElement.","required":true}],"1462b4fa6c1e":[{"name":"searchString","type":"string","description":"","required":true},{"name":"endPosition","type":"number | undefined","description":"","required":true}],"1effde887a16":[{"name":"toString","type":"(radix?: number | undefined) => string","description":"Returns a string representation of an object.","required":true,"membersRef":"c3aa62ce4c4f"},{"name":"toLocaleString","type":"(locales?: LocalesArgument, options?: BigIntToLocaleStringOptions | undefined) => string","description":"Returns a string representation appropriate to the host environment\'s current locale.","required":true,"membersRef":"accc6b80d33f"},{"name":"valueOf","type":"() => bigint","description":"Returns the primitive value of the specified object.","required":true}],"218011b4d7cd":[{"name":"callbackfn","type":"(previousValue: SidebarLinkGroup, currentValue: SidebarLinkGroup, currentIndex: number, array: SidebarLinkGroup[]) => SidebarLinkGroup","description":"A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.","required":true}],"21cee1dc460f":[{"name":"toString","type":"(radix?: number | undefined) => string","description":"Returns a string representation of an object.","required":true,"membersRef":"f2cc3e3d5a99"},{"name":"toFixed","type":"(fractionDigits?: number | undefined) => string","description":"Returns a string representing a number in fixed-point notation.","required":true,"membersRef":"bbffa5aff06f"},{"name":"toExponential","type":"(fractionDigits?: number | undefined) => string","description":"Returns a string containing a number represented in exponential notation.","required":true,"membersRef":"bbffa5aff06f"},{"name":"toPrecision","type":"(precision?: number | undefined) => string","description":"Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.","required":true,"membersRef":"cc7181a546b9"},{"name":"valueOf","type":"() => number","description":"Returns the primitive value of the specified object.","required":true},{"name":"toLocaleString","type":"{ (locales?: string | string[] | undefined, options?: NumberFormatOptions | undefined): string; (locales?: LocalesArgument, options?: NumberFormatOptions | undefined): string; }","description":"Converts a number to a string by using the current or specified locale.","required":true,"membersRef":"044423aaef36"}],"226c98df387a":[{"name":"predicate","type":"(value: SidebarLinkGroup, index: number, obj: SidebarLinkGroup[]) => value is S","description":"find calls predicate once for each element of the array, in ascending\\norder, until it finds one where predicate returns true. If such an element is found, find\\nimmediately returns that element value. Otherwise, find returns undefined.","required":true},{"name":"thisArg","type":"any","description":"If provided, it will be used as the this value for each invocation of\\npredicate. If it is not provided, undefined is used instead.","required":true}],"2a360c425eaf":[{"name":"pos","type":"number","description":"","required":true}],"35835347058b":[{"name":"value","type":"SidebarLinkGroup","description":"value to fill array section with","required":true,"membersRef":"8302cfa07d73"},{"name":"start","type":"number | undefined","description":"index to start filling the array at. If start is negative, it is treated as\\nlength+start where length is the length of the array.","required":true},{"name":"end","type":"number | undefined","description":"index to stop filling the array at. If end is negative, it is treated as\\nlength+end.","required":true}],"35e9426b05b6":[{"name":"maxLength","type":"number","description":"The length of the resulting string once the current string has been padded.\\nIf this parameter is smaller than the current string\'s length, the current string will be returned as it is.","required":true},{"name":"fillString","type":"string | undefined","description":"The string to pad the current string with.\\nIf this string is too long, it will be truncated and the left-most part will be applied.\\nThe default value for this parameter is \\" \\" (U+0020).","required":true}],"377260011cd5":[{"name":"searchString","type":"string","description":"","required":true},{"name":"position","type":"number | undefined","description":"","required":true}],"386a0201658d":[{"name":"name","type":"string","description":"","required":true},{"name":"color","type":"`#${string}` | undefined","description":"","required":false}],"3c4ce9e0f207":[{"name":"items","type":"SidebarLinkGroup[]","description":"New elements to add to the array.","required":true}],"4bb35b6c951e":[{"name":"size","type":"number","description":"","required":true}],"4be40676f323":[{"name":"searchValue","type":"RegExp | string","description":"A string or regular expression to search for.","required":true},{"name":"replaceValue","type":"string","description":"A string containing the text to replace. When the {@linkcode searchValue} is a `RegExp`, all matches are replaced if the `g` flag is set (or only those matches at the beginning, if the `y` flag is also present). Otherwise, only the first match of {@linkcode searchValue} is replaced.","required":true}],"4dd07f231cf0":[{"name":"predicate","type":"(value: SidebarLinkGroup, index: number, array: SidebarLinkGroup[]) => value is S","description":"A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.","required":true},{"name":"thisArg","type":"any","description":"An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.","required":true}],"5f5ec91a71ae":[{"name":"onfulfilled","type":"((value: AwaitedReactNode) => TResult1 | PromiseLike<TResult1>) | null | undefined","description":"The callback to execute when the Promise is resolved.","required":true},{"name":"onrejected","type":"((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined","description":"The callback to execute when the Promise is rejected.","required":true}],"60791cbf2bdf":[{"name":"regexp","type":"RegExp | string","description":"A variable name or string literal containing the regular expression pattern and flags.","required":true,"membersRef":"eae38bb2b61a"}],"6310e67d4fe7":[{"name":"color","type":"string","description":"","required":true}],"64131bbc1b71":[{"name":"length","type":"number","description":"Gets or sets the length of the array. This is a number one higher than the highest index in the array.","required":true},{"name":"toString","type":"() => string","description":"Returns a string representation of an array.","required":true},{"name":"toLocaleString","type":"{ (): string; (locales: string | string[], options?: (NumberFormatOptions & DateTimeFormatOptions) | undefined): string; }","description":"Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.","required":true},{"name":"pop","type":"() => SidebarLinkGroup | undefined","description":"Removes the last element from an array and returns it.\\nIf the array is empty, undefined is returned and the array is not modified.","required":true},{"name":"push","type":"(...items: SidebarLinkGroup[]) => number","description":"Appends new elements to the end of an array, and returns the new length of the array.","required":true,"membersRef":"3c4ce9e0f207"},{"name":"concat","type":"{ (...items: ConcatArray<SidebarLinkGroup>[]): SidebarLinkGroup[]; (...items: (SidebarLinkGroup | ConcatArray<SidebarLinkGroup>)[]): SidebarLinkGroup[]; }","description":"Combines two or more arrays.\\nThis method returns a new array without modifying any existing arrays.","required":true,"membersRef":"772bbf69048d"},{"name":"join","type":"(separator?: string | undefined) => string","description":"Adds all the elements of an array into a string, separated by the specified separator string.","required":true,"membersRef":"8ffe134cb078"},{"name":"reverse","type":"() => SidebarLinkGroup[]","description":"Reverses the elements in an array in place.\\nThis method mutates the array and returns a reference to the same array.","required":true},{"name":"shift","type":"() => SidebarLinkGroup | undefined","description":"Removes the first element from an array and returns it.\\nIf the array is empty, undefined is returned and the array is not modified.","required":true},{"name":"slice","type":"(start?: number | undefined, end?: number | undefined) => SidebarLinkGroup[]","description":"Returns a copy of a section of an array.\\nFor both start and end, a negative index can be used to indicate an offset from the end of the array.\\nFor example, -2 refers to the second to last element of the array.","required":true,"membersRef":"cd2fa974e364"},{"name":"sort","type":"(compareFn?: ((a: SidebarLinkGroup, b: SidebarLinkGroup) => number) | undefined) => SidebarLinkGroup[]","description":"Sorts an array in place.\\nThis method mutates the array and returns a reference to the same array.","required":true,"membersRef":"e9a962b7cc52"},{"name":"splice","type":"{ (start: number, deleteCount?: number | undefined): SidebarLinkGroup[]; (start: number, deleteCount: number, ...items: SidebarLinkGroup[]): SidebarLinkGroup[]; }","description":"Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.","required":true,"membersRef":"0f2023152915"},{"name":"unshift","type":"(...items: SidebarLinkGroup[]) => number","description":"Inserts new elements at the start of an array, and returns the new length of the array.","required":true,"membersRef":"0f3193437c88"},{"name":"indexOf","type":"(searchElement: SidebarLinkGroup, fromIndex?: number | undefined) => number","description":"Returns the index of the first occurrence of a value in an array, or -1 if it is not present.","required":true,"membersRef":"ec4a19974bcc"},{"name":"lastIndexOf","type":"(searchElement: SidebarLinkGroup, fromIndex?: number | undefined) => number","description":"Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.","required":true,"membersRef":"91ea8ab5f465"},{"name":"every","type":"{ <S extends SidebarLinkGroup>(predicate: (value: SidebarLinkGroup, index: number, array: SidebarLinkGroup[]) => value is S, thisArg?: any): this is S[]; (predicate: (value: SidebarLinkGroup, index: number, array: SidebarLinkGroup[]) => unknown, thisArg?: any): boolean; }","description":"Determines whether all the members of an array satisfy the specified test.","required":true,"membersRef":"f84e6279acc1"},{"name":"some","type":"(predicate: (value: SidebarLinkGroup, index: number, array: SidebarLinkGroup[]) => unknown, thisArg?: any) => boolean","description":"Determines whether the specified callback function returns true for any element of an array.","required":true,"membersRef":"81f224c0349b"},{"name":"forEach","type":"(callbackfn: (value: SidebarLinkGroup, index: number, array: SidebarLinkGroup[]) => void, thisArg?: any) => void","description":"Performs the specified action for each element in an array.","required":true,"membersRef":"b8d0bb3f0911"},{"name":"map","type":"<U>(callbackfn: (value: SidebarLinkGroup, index: number, array: SidebarLinkGroup[]) => U, thisArg?: any) => U[]","description":"Calls a defined callback function on each element of an array, and returns an array that contains the results.","required":true,"membersRef":"778e79ffc1a3"},{"name":"filter","type":"{ <S extends SidebarLinkGroup>(predicate: (value: SidebarLinkGroup, index: number, array: SidebarLinkGroup[]) => value is S, thisArg?: any): S[]; (predicate: (value: SidebarLinkGroup, index: number, array: SidebarLinkGroup[]) => unknown, thisArg?: any): SidebarLinkGroup[]; }","description":"Returns the elements of an array that meet the condition specified in a callback function.","required":true,"membersRef":"4dd07f231cf0"},{"name":"reduce","type":"{ (callbackfn: (previousValue: SidebarLinkGroup, currentValue: SidebarLinkGroup, currentIndex: number, array: SidebarLinkGroup[]) => SidebarLinkGroup): SidebarLinkGroup; (callbackfn: (previousValue: SidebarLinkGroup, currentValue: SidebarLinkGroup, currentIndex: number, array: SidebarLinkGroup[]) => SidebarLinkGroup...","description":"Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.","required":true,"membersRef":"218011b4d7cd"},{"name":"reduceRight","type":"{ (callbackfn: (previousValue: SidebarLinkGroup, currentValue: SidebarLinkGroup, currentIndex: number, array: SidebarLinkGroup[]) => SidebarLinkGroup): SidebarLinkGroup; (callbackfn: (previousValue: SidebarLinkGroup, currentValue: SidebarLinkGroup, currentIndex: number, array: SidebarLinkGroup[]) => SidebarLinkGroup...","description":"Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.","required":true,"membersRef":"b20c38b863fa"},{"name":"find","type":"{ <S extends SidebarLinkGroup>(predicate: (value: SidebarLinkGroup, index: number, obj: SidebarLinkGroup[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: SidebarLinkGroup, index: number, obj: SidebarLinkGroup[]) => unknown, thisArg?: any): SidebarLinkGroup | undefined; }","description":"Returns the value of the first element in the array where predicate is true, and undefined\\notherwise.","required":true,"membersRef":"226c98df387a"},{"name":"findIndex","type":"(predicate: (value: SidebarLinkGroup, index: number, obj: SidebarLinkGroup[]) => unknown, thisArg?: any) => number","description":"Returns the index of the first element in the array where predicate is true, and -1\\notherwise.","required":true,"membersRef":"66b62c5b3f41"},{"name":"fill","type":"(value: SidebarLinkGroup, start?: number | undefined, end?: number | undefined) => SidebarLinkGroup[]","description":"Changes all array elements from `start` to `end` index to a static `value` and returns the modified array","required":true,"membersRef":"35835347058b"},{"name":"copyWithin","type":"(target: number, start: number, end?: number | undefined) => SidebarLinkGroup[]","description":"Returns the this object after copying a section of the array identified by start and end\\nto the same array starting at position target","required":true,"membersRef":"749775027192"},{"name":"entries","type":"() => ArrayIterator<[number, SidebarLinkGroup]>","description":"Returns an iterable of key, value pairs for every entry in the array","required":true},{"name":"keys","type":"() => ArrayIterator<number>","description":"Returns an iterable of keys in the array","required":true},{"name":"values","type":"() => ArrayIterator<SidebarLinkGroup>","description":"Returns an iterable of values in the array","required":true},{"name":"includes","type":"(searchElement: SidebarLinkGroup, fromIndex?: number | undefined) => boolean","description":"Determines whether an array includes a certain element, returning true or false as appropriate.","required":true,"membersRef":"1305ca773c62"},{"name":"flatMap","type":"<U, This = undefined>(callback: (this: This, value: SidebarLinkGroup, index: number, array: SidebarLinkGroup[]) => U | readonly U[], thisArg?: This | undefined) => U[]","description":"Calls a defined callback function on each element of an array. Then, flattens the result into\\na new array.\\nThis is identical to a map followed by flat with depth 1.","required":true,"membersRef":"769f781a9530"},{"name":"flat","type":"<A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[]","description":"Returns a new array with all sub-array elements concatenated into it recursively up to the\\nspecified depth.","required":true,"membersRef":"ef8e8c28b0c7"}],"66b62c5b3f41":[{"name":"predicate","type":"(value: SidebarLinkGroup, index: number, obj: SidebarLinkGroup[]) => unknown","description":"find calls predicate once for each element of the array, in ascending\\norder, until it finds one where predicate returns true. If such an element is found,\\nfindIndex immediately returns that element index. Otherwise, findIndex returns -1.","required":true},{"name":"thisArg","type":"any","description":"If provided, it will be used as the this value for each invocation of\\npredicate. If it is not provided, undefined is used instead.","required":true}],"73ff6eee3307":[{"name":"searchString","type":"string","description":"The substring to search for.","required":true},{"name":"position","type":"number | undefined","description":"The index at which to begin searching. If omitted, the search begins at the end of the string.","required":true}],"749775027192":[{"name":"target","type":"number","description":"If target is negative, it is treated as length+target where length is the\\nlength of the array.","required":true},{"name":"start","type":"number","description":"If start is negative, it is treated as length+start. If end is negative, it\\nis treated as length+end.","required":true},{"name":"end","type":"number | undefined","description":"If not specified, length of the this object is used as its default value.","required":true}],"769f781a9530":[{"name":"callback","type":"(this: This, value: SidebarLinkGroup, index: number, array: SidebarLinkGroup[]) => U | readonly U[]","description":"A function that accepts up to three arguments. The flatMap method calls the\\ncallback function one time for each element in the array.","required":true},{"name":"thisArg","type":"This | undefined","description":"An object to which the this keyword can refer in the callback function. If\\nthisArg is omitted, undefined is used as the this value.","required":true}],"772bbf69048d":[{"name":"items","type":"ConcatArray<SidebarLinkGroup>[]","description":"Additional arrays and/or items to add to the end of the array.","required":true}],"7777f6fe3a61":[{"name":"start","type":"number","description":"The zero-based index number indicating the beginning of the substring.","required":true},{"name":"end","type":"number | undefined","description":"Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.\\nIf end is omitted, the characters from start through the end of the original string are returned.","required":true}],"778e79ffc1a3":[{"name":"callbackfn","type":"(value: SidebarLinkGroup, index: number, array: SidebarLinkGroup[]) => U","description":"A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.","required":true},{"name":"thisArg","type":"any","description":"An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.","required":true}],"7991011384b2":[{"name":"separator","type":"RegExp | string","description":"A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.","required":true},{"name":"limit","type":"number | undefined","description":"A value used to limit the number of elements returned in the array.","required":true}],"7af7778b5273":[{"name":"strings","type":"string[]","description":"The strings to append to the end of the string.","required":true}],"7c5cd566e23d":[{"name":"toString","type":"(radix?: number | undefined) => string","description":"Returns a string representation of an object.","required":true},{"name":"toFixed","type":"(fractionDigits?: number | undefined) => string","description":"Returns a string representing a number in fixed-point notation.","required":true},{"name":"toExponential","type":"(fractionDigits?: number | undefined) => string","description":"Returns a string containing a number represented in exponential notation.","required":true},{"name":"toPrecision","type":"(precision?: number | undefined) => string","description":"Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.","required":true},{"name":"valueOf","type":"() => number","description":"Returns the primitive value of the specified object.","required":true},{"name":"toLocaleString","type":"{ (locales?: string | string[] | undefined, options?: NumberFormatOptions | undefined): string; (locales?: LocalesArgument, options?: NumberFormatOptions | undefined): string; }","description":"Converts a number to a string by using the current or specified locale.","required":true}],"7e431012f854":[{"name":"name","type":"string","description":"","required":true},{"name":"title","type":"string","description":"","required":true}],"81f224c0349b":[{"name":"predicate","type":"(value: SidebarLinkGroup, index: number, array: SidebarLinkGroup[]) => unknown","description":"A function that accepts up to three arguments. The some method calls\\nthe predicate function for each element in the array until the predicate returns a value\\nwhich is coercible to the Boolean value true, or until the end of the array.","required":true},{"name":"thisArg","type":"any","description":"An object to which the this keyword can refer in the predicate function.\\nIf thisArg is omitted, undefined is used as the this value.","required":true}],"8302cfa07d73":[{"name":"title","type":"string | undefined","description":"","required":false},{"name":"items","type":"SidebarLinkProps[]","description":"","required":true}],"8fe69696fdef":[{"name":"toString","type":"() => string","description":"Returns a string representation of a string.","required":true},{"name":"charAt","type":"(pos: number) => string","description":"Returns the character at the specified index.","required":true,"membersRef":"d5b2a246006d"},{"name":"charCodeAt","type":"(index: number) => number","description":"Returns the Unicode value of the character at the specified location.","required":true,"membersRef":"ca0c0224558f"},{"name":"concat","type":"(...strings: string[]) => string","description":"Returns a string that contains the concatenation of two or more strings.","required":true,"membersRef":"7af7778b5273"},{"name":"indexOf","type":"(searchString: string, position?: number | undefined) => number","description":"Returns the position of the first occurrence of a substring, or -1 if it is not present.","required":true,"membersRef":"ba38c2576cee"},{"name":"lastIndexOf","type":"(searchString: string, position?: number | undefined) => number","description":"Returns the last occurrence of a substring in the string, or -1 if it is not present.","required":true,"membersRef":"73ff6eee3307"},{"name":"localeCompare","type":"{ (that: string): number; (that: string, locales?: string | string[] | undefined, options?: CollatorOptions | undefined): number; (that: string, locales?: LocalesArgument, options?: CollatorOptions | undefined): number; }","description":"Determines whether two strings are equivalent in the current locale.\\nDetermines whether two strings are equivalent in the current or specified locale.","required":true,"membersRef":"f9f8b34cda4b"},{"name":"match","type":"{ (regexp: string | RegExp): RegExpMatchArray | null; (matcher: { [Symbol.match](string: string): RegExpMatchArray | null; }): RegExpMatchArray | null; }","description":"Matches a string with a regular expression, and returns an array containing the results of that search.\\nMatches a string or an object that supports being matched against, and returns an array\\ncontaining the results of that search, or null if no matches are found.","required":true,"membersRef":"60791cbf2bdf"},{"name":"replace","type":"{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; (searchValue: { ...; }, replaceValue: string): string; (searchValue: { ...; }, replacer: (substring: string, ...args: any[]) => string): string; }","description":"Replaces text in a string, using a regular expression or search string.\\nPasses a string and {@linkcode replaceValue} to the `[Symbol.replace]` method on {@linkcode searchValue}. This method is expected to implement its own replacement algorithm.\\nReplaces text in a string, using an object that supports replacement within a string.","required":true,"membersRef":"c3e867e53f9d"},{"name":"search","type":"{ (regexp: string | RegExp): number; (searcher: { [Symbol.search](string: string): number; }): number; }","description":"Finds the first substring match in a regular expression search.","required":true,"membersRef":"c00770acccc4"},{"name":"slice","type":"(start?: number | undefined, end?: number | undefined) => string","description":"Returns a section of a string.","required":true,"membersRef":"c5ad11b6d4e3"},{"name":"split","type":"{ (separator: string | RegExp, limit?: number | undefined): string[]; (splitter: { [Symbol.split](string: string, limit?: number | undefined): string[]; }, limit?: number | undefined): string[]; }","description":"Split a string into substrings using the specified separator and return them as an array.","required":true,"membersRef":"942bf9d7e9b6"},{"name":"substring","type":"(start: number, end?: number | undefined) => string","description":"Returns the substring at the specified location within a String object.","required":true,"membersRef":"7777f6fe3a61"},{"name":"toLowerCase","type":"() => string","description":"Converts all the alphabetic characters in a string to lowercase.","required":true},{"name":"toLocaleLowerCase","type":"{ (locales?: string | string[] | undefined): string; (locales?: LocalesArgument): string; }","description":"Converts all alphabetic characters to lowercase, taking into account the host environment\'s current locale.","required":true,"membersRef":"01d77d4df9d7"},{"name":"toUpperCase","type":"() => string","description":"Converts all the alphabetic characters in a string to uppercase.","required":true},{"name":"toLocaleUpperCase","type":"{ (locales?: string | string[] | undefined): string; (locales?: LocalesArgument): string; }","description":"Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment\'s current locale.","required":true,"membersRef":"01d77d4df9d7"},{"name":"trim","type":"() => string","description":"Removes the leading and trailing white space and line terminator characters from a string.","required":true},{"name":"length","type":"number","description":"Returns the length of a String object.","required":true},{"name":"substr","type":"(from: number, length?: number | undefined) => string","description":"Gets a substring beginning at the specified location and having the specified length.","required":true,"membersRef":"fbc5ffeb0a40"},{"name":"valueOf","type":"() => string","description":"Returns the primitive value of the specified object.","required":true},{"name":"codePointAt","type":"(pos: number) => number | undefined","description":"Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point\\nvalue of the UTF-16 encoded code point starting at the string element at position pos in\\nthe String resulting from converting this object to a String.\\nIf there is no element at that position, the result is undefined.\\nIf a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.","required":true,"membersRef":"2a360c425eaf"},{"name":"includes","type":"(searchString: string, position?: number | undefined) => boolean","description":"Returns true if searchString appears as a substring of the result of converting this\\nobject to a String, at one or more positions that are\\ngreater than or equal to position; otherwise, returns false.","required":true,"membersRef":"acd009e83d9c"},{"name":"endsWith","type":"(searchString: string, endPosition?: number | undefined) => boolean","description":"Returns true if the sequence of elements of searchString converted to a String is the\\nsame as the corresponding elements of this object (converted to a String) starting at\\nendPosition – length(this). Otherwise returns false.","required":true,"membersRef":"1462b4fa6c1e"},{"name":"normalize","type":"{ (form: \\"NFC\\" | \\"NFD\\" | \\"NFKC\\" | \\"NFKD\\"): string; (form?: string | undefined): string; }","description":"Returns the String value result of normalizing the string into the normalization form\\nnamed by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.","required":true,"membersRef":"0893409af856"},{"name":"repeat","type":"(count: number) => string","description":"Returns a String value that is made from count copies appended together. If count is 0,\\nthe empty string is returned.","required":true,"membersRef":"a2cd9f067bdf"},{"name":"startsWith","type":"(searchString: string, position?: number | undefined) => boolean","description":"Returns true if the sequence of elements of searchString converted to a String is the\\nsame as the corresponding elements of this object (converted to a String) starting at\\nposition. Otherwise returns false.","required":true,"membersRef":"377260011cd5"},{"name":"anchor","type":"(name: string) => string","description":"Returns an `<a>` HTML anchor element and sets the name attribute to the text value","required":true,"membersRef":"e0f587ffe245"},{"name":"big","type":"() => string","description":"Returns a `<big>` HTML element","required":true},{"name":"blink","type":"() => string","description":"Returns a `<blink>` HTML element","required":true},{"name":"bold","type":"() => string","description":"Returns a `<b>` HTML element","required":true},{"name":"fixed","type":"() => string","description":"Returns a `<tt>` HTML element","required":true},{"name":"fontcolor","type":"(color: string) => string","description":"Returns a `<font>` HTML element and sets the color attribute value","required":true,"membersRef":"6310e67d4fe7"},{"name":"fontsize","type":"{ (size: number): string; (size: string): string; }","description":"Returns a `<font>` HTML element and sets the size attribute value","required":true,"membersRef":"4bb35b6c951e"},{"name":"italics","type":"() => string","description":"Returns an `<i>` HTML element","required":true},{"name":"link","type":"(url: string) => string","description":"Returns an `<a>` HTML element and sets the href attribute value","required":true,"membersRef":"dff8e7eb9471"},{"name":"small","type":"() => string","description":"Returns a `<small>` HTML element","required":true},{"name":"strike","type":"() => string","description":"Returns a `<strike>` HTML element","required":true},{"name":"sub","type":"() => string","description":"Returns a `<sub>` HTML element","required":true},{"name":"sup","type":"() => string","description":"Returns a `<sup>` HTML element","required":true},{"name":"padStart","type":"(maxLength: number, fillString?: string | undefined) => string","description":"Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\\nThe padding is applied from the start (left) of the current string.","required":true,"membersRef":"35e9426b05b6"},{"name":"padEnd","type":"(maxLength: number, fillString?: string | undefined) => string","description":"Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\\nThe padding is applied from the end (right) of the current string.","required":true,"membersRef":"35e9426b05b6"},{"name":"trimEnd","type":"() => string","description":"Removes the trailing white space and line terminator characters from a string.","required":true},{"name":"trimStart","type":"() => string","description":"Removes the leading white space and line terminator characters from a string.","required":true},{"name":"trimLeft","type":"() => string","description":"Removes the leading white space and line terminator characters from a string.","required":true},{"name":"trimRight","type":"() => string","description":"Removes the trailing white space and line terminator characters from a string.","required":true},{"name":"matchAll","type":"(regexp: RegExp) => RegExpStringIterator<RegExpExecArray>","description":"Matches a string with a regular expression, and returns an iterable of matches\\ncontaining the results of that search.","required":true,"membersRef":"bc94faea80bc"}],"8ffe134cb078":[{"name":"separator","type":"string | undefined","description":"A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.","required":true}],"91ea8ab5f465":[{"name":"searchElement","type":"SidebarLinkGroup","description":"The value to locate in the array.","required":true,"membersRef":"8302cfa07d73"},{"name":"fromIndex","type":"number | undefined","description":"The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array.","required":true}],"942bf9d7e9b6":[{"name":"separator","type":"RegExp | string","description":"A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.","required":true,"membersRef":"eae38bb2b61a"},{"name":"limit","type":"number | undefined","description":"A value used to limit the number of elements returned in the array.","required":true}],"9b1117d5b6e9":[{"name":"regexp","type":"RegExp","description":"A regular expression","required":true}],"9c697c4622f2":[{"name":"exec","type":"(string: string) => RegExpExecArray | null","description":"Executes a search on a string using a regular expression pattern, and returns an array containing the results of that search.","required":true},{"name":"test","type":"(string: string) => boolean","description":"Returns a Boolean value that indicates whether or not a pattern exists in a searched string.","required":true},{"name":"source","type":"string","description":"Returns a copy of the text of the regular expression pattern. Read-only. The regExp argument is a Regular expression object. It can be a variable name or a literal.","required":true},{"name":"global","type":"boolean","description":"Returns a Boolean value indicating the state of the global flag (g) used with a regular expression. Default is false. Read-only.","required":true},{"name":"ignoreCase","type":"boolean","description":"Returns a Boolean value indicating the state of the ignoreCase flag (i) used with a regular expression. Default is false. Read-only.","required":true},{"name":"multiline","type":"boolean","description":"Returns a Boolean value indicating the state of the multiline flag (m) used with a regular expression. Default is false. Read-only.","required":true},{"name":"lastIndex","type":"number","description":"","required":true},{"name":"compile","type":"(pattern: string, flags?: string | undefined) => RegExp","description":"","required":true},{"name":"flags","type":"string","description":"Returns a string indicating the flags of the regular expression in question. This field is read-only.\\nThe characters in this string are sequenced and concatenated in the following order:\\n\\n   - \\"g\\" for global\\n   - \\"i\\" for ignoreCase\\n   - \\"m\\" for multiline\\n   - \\"u\\" for unicode\\n   - \\"y\\" for sticky\\n\\nIf no flags are set, the value is the empty string.","required":true},{"name":"sticky","type":"boolean","description":"Returns a Boolean value indicating the state of the sticky flag (y) used with a regular\\nexpression. Default is false. Read-only.","required":true},{"name":"unicode","type":"boolean","description":"Returns a Boolean value indicating the state of the Unicode flag (u) used with a regular\\nexpression. Default is false. Read-only.","required":true},{"name":"dotAll","type":"boolean","description":"Returns a Boolean value indicating the state of the dotAll flag (s) used with a regular expression.\\nDefault is false. Read-only.","required":true}],"a2cd9f067bdf":[{"name":"count","type":"number","description":"number of copies to append","required":true}],"a37b4426d16c":[{"name":"toString","type":"() => string","description":"Returns a string representation of a string.","required":true},{"name":"charAt","type":"(pos: number) => string","description":"Returns the character at the specified index.","required":true,"membersRef":"d5b2a246006d"},{"name":"charCodeAt","type":"(index: number) => number","description":"Returns the Unicode value of the character at the specified location.","required":true,"membersRef":"ca0c0224558f"},{"name":"concat","type":"(...strings: string[]) => string","description":"Returns a string that contains the concatenation of two or more strings.","required":true,"membersRef":"7af7778b5273"},{"name":"indexOf","type":"(searchString: string, position?: number | undefined) => number","description":"Returns the position of the first occurrence of a substring, or -1 if it is not present.","required":true,"membersRef":"ba38c2576cee"},{"name":"lastIndexOf","type":"(searchString: string, position?: number | undefined) => number","description":"Returns the last occurrence of a substring in the string, or -1 if it is not present.","required":true,"membersRef":"73ff6eee3307"},{"name":"localeCompare","type":"{ (that: string): number; (that: string, locales?: string | string[] | undefined, options?: CollatorOptions | undefined): number; (that: string, locales?: LocalesArgument, options?: CollatorOptions | undefined): number; }","description":"Determines whether two strings are equivalent in the current locale.\\nDetermines whether two strings are equivalent in the current or specified locale.","required":true,"membersRef":"f9f8b34cda4b"},{"name":"match","type":"{ (regexp: string | RegExp): RegExpMatchArray | null; (matcher: { [Symbol.match](string: string): RegExpMatchArray | null; }): RegExpMatchArray | null; }","description":"Matches a string with a regular expression, and returns an array containing the results of that search.\\nMatches a string or an object that supports being matched against, and returns an array\\ncontaining the results of that search, or null if no matches are found.","required":true,"membersRef":"ada11bcbb74f"},{"name":"replace","type":"{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; (searchValue: { ...; }, replaceValue: string): string; (searchValue: { ...; }, replacer: (substring: string, ...args: any[]) => string): string; }","description":"Replaces text in a string, using a regular expression or search string.\\nPasses a string and {@linkcode replaceValue} to the `[Symbol.replace]` method on {@linkcode searchValue}. This method is expected to implement its own replacement algorithm.\\nReplaces text in a string, using an object that supports replacement within a string.","required":true,"membersRef":"4be40676f323"},{"name":"search","type":"{ (regexp: string | RegExp): number; (searcher: { [Symbol.search](string: string): number; }): number; }","description":"Finds the first substring match in a regular expression search.","required":true,"membersRef":"acf933af128b"},{"name":"slice","type":"(start?: number | undefined, end?: number | undefined) => string","description":"Returns a section of a string.","required":true,"membersRef":"c5ad11b6d4e3"},{"name":"split","type":"{ (separator: string | RegExp, limit?: number | undefined): string[]; (splitter: { [Symbol.split](string: string, limit?: number | undefined): string[]; }, limit?: number | undefined): string[]; }","description":"Split a string into substrings using the specified separator and return them as an array.","required":true,"membersRef":"7991011384b2"},{"name":"substring","type":"(start: number, end?: number | undefined) => string","description":"Returns the substring at the specified location within a String object.","required":true,"membersRef":"7777f6fe3a61"},{"name":"toLowerCase","type":"() => string","description":"Converts all the alphabetic characters in a string to lowercase.","required":true},{"name":"toLocaleLowerCase","type":"{ (locales?: string | string[] | undefined): string; (locales?: LocalesArgument): string; }","description":"Converts all alphabetic characters to lowercase, taking into account the host environment\'s current locale.","required":true,"membersRef":"01d77d4df9d7"},{"name":"toUpperCase","type":"() => string","description":"Converts all the alphabetic characters in a string to uppercase.","required":true},{"name":"toLocaleUpperCase","type":"{ (locales?: string | string[] | undefined): string; (locales?: LocalesArgument): string; }","description":"Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment\'s current locale.","required":true,"membersRef":"01d77d4df9d7"},{"name":"trim","type":"() => string","description":"Removes the leading and trailing white space and line terminator characters from a string.","required":true},{"name":"length","type":"number","description":"Returns the length of a String object.","required":true},{"name":"substr","type":"(from: number, length?: number | undefined) => string","description":"Gets a substring beginning at the specified location and having the specified length.","required":true,"membersRef":"fbc5ffeb0a40"},{"name":"valueOf","type":"() => string","description":"Returns the primitive value of the specified object.","required":true},{"name":"codePointAt","type":"(pos: number) => number | undefined","description":"Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point\\nvalue of the UTF-16 encoded code point starting at the string element at position pos in\\nthe String resulting from converting this object to a String.\\nIf there is no element at that position, the result is undefined.\\nIf a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.","required":true,"membersRef":"2a360c425eaf"},{"name":"includes","type":"(searchString: string, position?: number | undefined) => boolean","description":"Returns true if searchString appears as a substring of the result of converting this\\nobject to a String, at one or more positions that are\\ngreater than or equal to position; otherwise, returns false.","required":true,"membersRef":"acd009e83d9c"},{"name":"endsWith","type":"(searchString: string, endPosition?: number | undefined) => boolean","description":"Returns true if the sequence of elements of searchString converted to a String is the\\nsame as the corresponding elements of this object (converted to a String) starting at\\nendPosition – length(this). Otherwise returns false.","required":true,"membersRef":"1462b4fa6c1e"},{"name":"normalize","type":"{ (form: \\"NFC\\" | \\"NFD\\" | \\"NFKC\\" | \\"NFKD\\"): string; (form?: string | undefined): string; }","description":"Returns the String value result of normalizing the string into the normalization form\\nnamed by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.","required":true,"membersRef":"0893409af856"},{"name":"repeat","type":"(count: number) => string","description":"Returns a String value that is made from count copies appended together. If count is 0,\\nthe empty string is returned.","required":true,"membersRef":"a2cd9f067bdf"},{"name":"startsWith","type":"(searchString: string, position?: number | undefined) => boolean","description":"Returns true if the sequence of elements of searchString converted to a String is the\\nsame as the corresponding elements of this object (converted to a String) starting at\\nposition. Otherwise returns false.","required":true,"membersRef":"377260011cd5"},{"name":"anchor","type":"(name: string) => string","description":"Returns an `<a>` HTML anchor element and sets the name attribute to the text value","required":true,"membersRef":"e0f587ffe245"},{"name":"big","type":"() => string","description":"Returns a `<big>` HTML element","required":true},{"name":"blink","type":"() => string","description":"Returns a `<blink>` HTML element","required":true},{"name":"bold","type":"() => string","description":"Returns a `<b>` HTML element","required":true},{"name":"fixed","type":"() => string","description":"Returns a `<tt>` HTML element","required":true},{"name":"fontcolor","type":"(color: string) => string","description":"Returns a `<font>` HTML element and sets the color attribute value","required":true,"membersRef":"6310e67d4fe7"},{"name":"fontsize","type":"{ (size: number): string; (size: string): string; }","description":"Returns a `<font>` HTML element and sets the size attribute value","required":true,"membersRef":"4bb35b6c951e"},{"name":"italics","type":"() => string","description":"Returns an `<i>` HTML element","required":true},{"name":"link","type":"(url: string) => string","description":"Returns an `<a>` HTML element and sets the href attribute value","required":true,"membersRef":"dff8e7eb9471"},{"name":"small","type":"() => string","description":"Returns a `<small>` HTML element","required":true},{"name":"strike","type":"() => string","description":"Returns a `<strike>` HTML element","required":true},{"name":"sub","type":"() => string","description":"Returns a `<sub>` HTML element","required":true},{"name":"sup","type":"() => string","description":"Returns a `<sup>` HTML element","required":true},{"name":"padStart","type":"(maxLength: number, fillString?: string | undefined) => string","description":"Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\\nThe padding is applied from the start (left) of the current string.","required":true,"membersRef":"35e9426b05b6"},{"name":"padEnd","type":"(maxLength: number, fillString?: string | undefined) => string","description":"Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\\nThe padding is applied from the end (right) of the current string.","required":true,"membersRef":"35e9426b05b6"},{"name":"trimEnd","type":"() => string","description":"Removes the trailing white space and line terminator characters from a string.","required":true},{"name":"trimStart","type":"() => string","description":"Removes the leading white space and line terminator characters from a string.","required":true},{"name":"trimLeft","type":"() => string","description":"Removes the leading white space and line terminator characters from a string.","required":true},{"name":"trimRight","type":"() => string","description":"Removes the trailing white space and line terminator characters from a string.","required":true},{"name":"matchAll","type":"(regexp: RegExp) => RegExpStringIterator<RegExpExecArray>","description":"Matches a string with a regular expression, and returns an iterable of matches\\ncontaining the results of that search.","required":true,"membersRef":"9b1117d5b6e9"}],"accc6b80d33f":[{"name":"locales","type":"LocalesArgument","description":"","required":true},{"name":"options","type":"BigIntToLocaleStringOptions | undefined","description":"","required":true}],"acd009e83d9c":[{"name":"searchString","type":"string","description":"search string","required":true},{"name":"position","type":"number | undefined","description":"If position is undefined, 0 is assumed, so as to search all of the String.","required":true}],"acf933af128b":[{"name":"regexp","type":"RegExp | string","description":"The regular expression pattern and applicable flags.","required":true}],"ada11bcbb74f":[{"name":"regexp","type":"RegExp | string","description":"A variable name or string literal containing the regular expression pattern and flags.","required":true}],"b20c38b863fa":[{"name":"callbackfn","type":"(previousValue: SidebarLinkGroup, currentValue: SidebarLinkGroup, currentIndex: number, array: SidebarLinkGroup[]) => SidebarLinkGroup","description":"A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.","required":true}],"b8d0bb3f0911":[{"name":"callbackfn","type":"(value: SidebarLinkGroup, index: number, array: SidebarLinkGroup[]) => void","description":"A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.","required":true},{"name":"thisArg","type":"any","description":"An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.","required":true}],"ba38c2576cee":[{"name":"searchString","type":"string","description":"The substring to search for in the string","required":true},{"name":"position","type":"number | undefined","description":"The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.","required":true}],"bbffa5aff06f":[{"name":"fractionDigits","type":"number | undefined","description":"Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.","required":true}],"bc30f28a4db2":[{"name":"then","type":"<TResult1 = AwaitedReactNode, TResult2 = never>(onfulfilled?: ((value: AwaitedReactNode) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<...>) | ... 1 more ... | undefined) => Promise<...>","description":"Attaches callbacks for the resolution and/or rejection of the Promise.","required":true,"membersRef":"5f5ec91a71ae"},{"name":"catch","type":"<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null | undefined) => Promise<AwaitedReactNode | TResult>","description":"Attaches a callback for only the rejection of the Promise.","required":true,"membersRef":"c7409f4f3191"},{"name":"finally","type":"(onfinally?: (() => void) | null | undefined) => Promise<AwaitedReactNode>","description":"Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The\\nresolved value cannot be modified from the callback.","required":true,"membersRef":"c09410ba7c13"}],"bc94faea80bc":[{"name":"regexp","type":"RegExp","description":"A regular expression","required":true,"membersRef":"9c697c4622f2"}],"c00770acccc4":[{"name":"regexp","type":"RegExp | string","description":"The regular expression pattern and applicable flags.","required":true,"membersRef":"eae38bb2b61a"}],"c09410ba7c13":[{"name":"onfinally","type":"(() => void) | null | undefined","description":"The callback to execute when the Promise is settled (fulfilled or rejected).","required":true}],"c3aa62ce4c4f":[{"name":"radix","type":"number | undefined","description":"Specifies a radix for converting numeric values to strings.","required":true}],"c3e867e53f9d":[{"name":"searchValue","type":"RegExp | string","description":"A string or regular expression to search for.","required":true,"membersRef":"eae38bb2b61a"},{"name":"replaceValue","type":"string","description":"A string containing the text to replace. When the {@linkcode searchValue} is a `RegExp`, all matches are replaced if the `g` flag is set (or only those matches at the beginning, if the `y` flag is also present). Otherwise, only the first match of {@linkcode searchValue} is replaced.","required":true}],"c5ad11b6d4e3":[{"name":"start","type":"number | undefined","description":"The index to the beginning of the specified portion of stringObj.","required":true},{"name":"end","type":"number | undefined","description":"The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.\\nIf this value is not specified, the substring continues to the end of stringObj.","required":true}],"c7409f4f3191":[{"name":"onrejected","type":"((reason: any) => TResult | PromiseLike<TResult>) | null | undefined","description":"The callback to execute when the Promise is rejected.","required":true}],"ca0c0224558f":[{"name":"index","type":"number","description":"The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.","required":true}],"cc7181a546b9":[{"name":"precision","type":"number | undefined","description":"Number of significant digits. Must be in the range 1 - 21, inclusive.","required":true}],"cd2fa974e364":[{"name":"start","type":"number | undefined","description":"The beginning index of the specified portion of the array.\\nIf start is undefined, then the slice begins at index 0.","required":true},{"name":"end","type":"number | undefined","description":"The end index of the specified portion of the array. This is exclusive of the element at the index \'end\'.\\nIf end is undefined, then the slice extends to the end of the array.","required":true}],"d5b2a246006d":[{"name":"pos","type":"number","description":"The zero-based index of the desired character.","required":true}],"dff8e7eb9471":[{"name":"url","type":"string","description":"","required":true}],"e0f587ffe245":[{"name":"name","type":"string","description":"","required":true}],"e9a962b7cc52":[{"name":"compareFn","type":"((a: SidebarLinkGroup, b: SidebarLinkGroup) => number) | undefined","description":"Function used to determine the order of the elements. It is expected to return\\na negative value if the first argument is less than the second argument, zero if they\'re equal, and a positive\\nvalue otherwise. If omitted, the elements are sorted in ascending, UTF-16 code unit order.\\n```ts\\n[11,2,22,1].sort((a, b) => a - b)\\n```","required":true}],"eae38bb2b61a":[{"name":"toString","type":"(() => string) | (() => string)","description":"Returns a string representation of a string.\\nReturns a string representation of an object.","required":true},{"name":"valueOf","type":"(() => Object) | (() => string)","description":"Returns the primitive value of the specified object.","required":true}],"ec4a19974bcc":[{"name":"searchElement","type":"SidebarLinkGroup","description":"The value to locate in the array.","required":true,"membersRef":"8302cfa07d73"},{"name":"fromIndex","type":"number | undefined","description":"The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.","required":true}],"ef8e8c28b0c7":[{"name":"depth","type":"D | undefined","description":"The maximum recursion depth","required":true,"membersRef":"7c5cd566e23d"}],"f2cc3e3d5a99":[{"name":"radix","type":"number | undefined","description":"Specifies a radix for converting numeric values to strings. This value is only used for numbers.","required":true}],"f84e6279acc1":[{"name":"predicate","type":"(value: SidebarLinkGroup, index: number, array: SidebarLinkGroup[]) => value is S","description":"A function that accepts up to three arguments. The every method calls\\nthe predicate function for each element in the array until the predicate returns a value\\nwhich is coercible to the Boolean value false, or until the end of the array.","required":true},{"name":"thisArg","type":"any","description":"An object to which the this keyword can refer in the predicate function.\\nIf thisArg is omitted, undefined is used as the this value.","required":true}],"f9f8b34cda4b":[{"name":"that","type":"string","description":"String to compare to target string","required":true}],"fbc5ffeb0a40":[{"name":"from","type":"number","description":"The starting position of the desired substring. The index of the first character in the string is zero.","required":true},{"name":"length","type":"number | undefined","description":"The number of characters to include in the returned substring.","required":true}]}}')
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx
var getComponentMetaData = __webpack_require__(82737);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(66497);
;// CONCATENATED MODULE: ./apps/docs/src/components/examples/layout/LayoutExamples.tsx



const BasicExample = (props)=>{
    const layoutExampleUrl = (0,useBaseUrl/* ["default"] */.Ay)('/layout-examples/layout');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "card",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("iframe", {
            title: "Layout example",
            style: {
                width: '100%',
                height: 500,
                border: 'none'
            },
            src: layoutExampleUrl
        })
    });
};
const ExternalExample = (props)=>{
    const layoutExampleUrl = (0,useBaseUrl/* ["default"] */.Ay)('/layout-examples/layout-external');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "card",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("iframe", {
            title: "Layout external example",
            style: {
                width: '100%',
                height: 500,
                border: 'none'
            },
            src: layoutExampleUrl
        })
    });
};

;// CONCATENATED MODULE: ./apps/docs/docs/components/layout/legacy.mdx


const frontMatter = {
	title: 'Legacy Layout',
	description: 'En skalkomponent för att få en simpel sidomeny och sidhuvud.',
	sidebar_position: 7
};
const contentTitle = undefined;

const assets = {

};







const toc = [{
  "value": "Extern variant",
  "id": "extern-variant",
  "level": 2
}, {
  "value": "Separat användning",
  "id": "separat-användning",
  "level": 2
}, {
  "value": "Client Side Routing",
  "id": "client-side-routing",
  "level": 2
}, {
  "value": "Riktlinjer",
  "id": "riktlinjer",
  "level": 2
}, {
  "value": "API",
  "id": "api",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.admonition, {
      title: "Ersätts av nytt paket",
      type: "warning",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Layout"
        }), " från ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@midas-ds/components"
        }), " ersätts av ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/components/layout/get-started",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@midas-ds/layout"
          })
        }), " — ett nytt, modulärt layoutpaket. Det gamla paketet fungerar fortfarande men rekommenderas inte för nya projekt. Se ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/components/layout/migration",
          children: "migrationsguiden"
        }), " för hur du går över."]
      })
    }), "\n", (0,jsx_runtime.jsx)(getComponentMetaData/* .ComponentHeader */.B, {
      name: "Layout",
      friendlyName: "Meny, baslayout, sidomeny, sidhuvud",
      overrideHeadlessLink: ""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "En skalkomponent för att få en simpel sidomeny och sidhuvud."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Layout } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Layout\n  variant='internal'\n  items={[\n    {\n      items: [\n        {\n          title: 'Översikt',\n          href: '#',\n          icon: House,\n        },\n      ],\n    },\n    {\n      title: 'Ansökan',\n      items: [\n        {\n          title: 'Skapa ansökan',\n          href: '#',\n          icon: Plus,\n        },\n        {\n          title: 'Beslut',\n          href: '#',\n          icon: Gavel,\n        },\n      ],\n    },\n    {\n      title: 'Kort och konto',\n      items: [\n        {\n          title: 'LMA-kort',\n          href: '#',\n          icon: Calendar,\n        },\n        {\n          title: 'Avvikelser',\n          href: '#',\n          icon: ClipboardList,\n          hasBadge: true,\n        },\n      ],\n    },\n  ]}\n  title='Skapa ansökningar'\n  user={{ name: 'Namn Namnsson', title: 'Roll eller behörighet' }}\n  app={{ name: 'Namn på applikationen' }}\n  headerChildren={\n    <LinkButton\n      variant='tertiary'\n      target='_blank'\n    >\n      Öppna annan tjänst\n    </LinkButton>\n  }\n>\n  {/* Din applikation */}\n</Layout>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(BasicExample, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "extern-variant",
      children: "Extern variant"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd ", (0,jsx_runtime.jsx)(_components.code, {
        children: "variant=\"external\""
      }), " för en förenklad version av Layout med Navbar i botten av fönstret i mobilt läge."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Layout\n  // highlight-start\n  variant='external'\n  // highlight-end\n  items={[\n    {\n      items: [\n        {\n          title: 'Hem',\n          href: '#',\n          icon: House,\n          active: true,\n        },\n        {\n          title: 'Ansökan',\n          href: '#',\n          icon: Search,\n        },\n        {\n          title: 'Boka',\n          href: '#',\n          icon: Calendar,\n          hasBadge: true,\n        },\n        {\n          title: 'Profil',\n          href: '#',\n          icon: User,\n        },\n        {\n          title: 'Kontakt',\n          href: '#',\n          icon: Plus,\n        },\n      ],\n    },\n    {\n      title: 'Kort och konto',\n      items: [\n        {\n          title: 'LMA-kort',\n          href: '#',\n          icon: Calendar,\n        },\n        {\n          title: 'Avvikelser',\n          href: '#',\n          icon: ClipboardList,\n          hasBadge: true,\n        },\n      ],\n    },\n  ]}\n  title='Skapa ansökningar'\n  user={{ name: 'Namn Namnsson', title: 'Roll eller behörighet' }}\n  app={{ name: 'Namn på applikationen' }}\n  headerChildren={\n    <LinkButton\n      variant='tertiary'\n      target='_blank'\n    >\n      Öppna annan tjänst\n    </LinkButton>\n  }\n>\n  {/* Din applikation */}\n</Layout>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(ExternalExample, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "separat-användning",
      children: "Separat användning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Det går att importera sidomenyn samt sidhuvudet som separata komponenter om så önskas, det är dock rekommenderat att använda hela Layoutkomponenten."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Layout.Header, Layout.Sidebar } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "client-side-routing",
      children: "Client Side Routing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Läs mer om hur du kan använda komponenten med ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/dev/client-side-routing",
        children: "Client Side Routing"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "riktlinjer",
      children: "Riktlinjer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kommer snart"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(PropsTable/* .PropTable */.U, {
      doc: Layout_namespaceObject
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
52072(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"container":"container_uCKZ","removeMargins":"removeMargins_rQ9U","contained":"contained_R9lB","flex":"flex_LQ20","fluid":"fluid_Y1tE","col":"col_tmG6","col-1":"col-1_OVvW","col-2":"col-2_XfVI","col-3":"col-3_KxqE","col-quarter":"col-quarter_eUut","col-4":"col-4_Ovxr","col-third":"col-third_FUaF","col-5":"col-5_uIyd","col-6":"col-6_i8WR","col-half":"col-half_GzSn","col-7":"col-7_devX","col-8":"col-8_tlAZ","col-9":"col-9_Nbjm","col-10":"col-10_rwyP","col-11":"col-11_ShOw","col-12":"col-12_eQeJ","col-full":"col-full_K_XT","col-auto":"col-auto_nMhH","col-grow":"col-grow_TBON","col-xs-1":"col-xs-1_Bg_O","col-xs-2":"col-xs-2_UhmL","col-xs-3":"col-xs-3_mEvh","col-xs-quarter":"col-xs-quarter_mtoI","col-xs-4":"col-xs-4_Uv5i","col-xs-third":"col-xs-third_AHrM","col-xs-5":"col-xs-5_Gdnm","col-xs-6":"col-xs-6_z366","col-xs-half":"col-xs-half_vH6m","col-xs-7":"col-xs-7_HNwO","col-xs-8":"col-xs-8_Vwih","col-xs-9":"col-xs-9_vfTc","col-xs-10":"col-xs-10_wJWt","col-xs-11":"col-xs-11_KTEA","col-xs-12":"col-xs-12_TaE_","col-xs-full":"col-xs-full_enWi","col-xs-auto":"col-xs-auto_G2jj","col-xs-grow":"col-xs-grow_kY1W","col-sm-1":"col-sm-1_YvIs","col-sm-2":"col-sm-2_NSCq","col-sm-3":"col-sm-3_cJ0H","col-sm-quarter":"col-sm-quarter_WWBJ","col-sm-4":"col-sm-4_dtZx","col-sm-third":"col-sm-third_g3dG","col-sm-5":"col-sm-5_C87q","col-sm-6":"col-sm-6_SkMd","col-sm-half":"col-sm-half_QX4f","col-sm-7":"col-sm-7_wa6s","col-sm-8":"col-sm-8_zH5I","col-sm-9":"col-sm-9_ym4Z","col-sm-10":"col-sm-10_jE4j","col-sm-11":"col-sm-11_Va2g","col-sm-12":"col-sm-12_BgjD","col-sm-full":"col-sm-full_Nb6O","col-sm-auto":"col-sm-auto_Qj4m","col-sm-grow":"col-sm-grow_mAH5","col-md-1":"col-md-1_Zeqd","col-md-2":"col-md-2_DR6K","col-md-3":"col-md-3_OZK7","col-md-quarter":"col-md-quarter_AmxM","col-md-4":"col-md-4_NxEu","col-md-third":"col-md-third_J4Ja","col-md-5":"col-md-5_cBkY","col-md-6":"col-md-6_it5t","col-md-half":"col-md-half_aEv_","col-md-7":"col-md-7__sAT","col-md-8":"col-md-8_WfW7","col-md-9":"col-md-9_orzQ","col-md-10":"col-md-10_wh5t","col-md-11":"col-md-11_Wsgq","col-md-12":"col-md-12_gZQg","col-md-full":"col-md-full_Ow4Z","col-md-auto":"col-md-auto_e67j","col-md-grow":"col-md-grow_quHq","col-lg-1":"col-lg-1_e1au","col-lg-2":"col-lg-2_fUsj","col-lg-3":"col-lg-3_EhhM","col-lg-quarter":"col-lg-quarter_SI9I","col-lg-4":"col-lg-4_VuKz","col-lg-third":"col-lg-third_Lf2A","col-lg-5":"col-lg-5_TF5r","col-lg-6":"col-lg-6_E93v","col-lg-half":"col-lg-half_ZdoE","col-lg-7":"col-lg-7_L5CO","col-lg-8":"col-lg-8_ZBHN","col-lg-9":"col-lg-9_TbUu","col-lg-10":"col-lg-10_Tsqu","col-lg-11":"col-lg-11_Eg8x","col-lg-12":"col-lg-12_eNvi","col-lg-full":"col-lg-full_SaRE","col-lg-auto":"col-lg-auto_fNRO","col-lg-grow":"col-lg-grow_XTrt","col-xl-1":"col-xl-1_BRna","col-xl-2":"col-xl-2_eGSK","col-xl-3":"col-xl-3_RrW2","col-xl-quarter":"col-xl-quarter_V_Yw","col-xl-4":"col-xl-4_R4AZ","col-xl-third":"col-xl-third_W3hT","col-xl-5":"col-xl-5_k7Gx","col-xl-6":"col-xl-6_xZyb","col-xl-half":"col-xl-half_V9xE","col-xl-7":"col-xl-7_lJfg","col-xl-8":"col-xl-8_zErQ","col-xl-9":"col-xl-9_oYwQ","col-xl-10":"col-xl-10_cLTa","col-xl-11":"col-xl-11_xqWK","col-xl-12":"col-xl-12_Vrsf","col-xl-full":"col-xl-full_vVSm","col-xl-auto":"col-xl-auto_YBap","col-xl-grow":"col-xl-grow_YMBn","offset-1":"offset-1_ZQkJ","offset-2":"offset-2_Reek","offset-3":"offset-3_SDkl","offset-quarter":"offset-quarter_ho5e","offset-4":"offset-4_L0XB","offset-third":"offset-third_dE8e","offset-5":"offset-5_Mz95","offset-6":"offset-6_Zp68","offset-half":"offset-half_nGtc","offset-7":"offset-7_ZApX","offset-8":"offset-8_UZTZ","offset-9":"offset-9_FiKS","offset-10":"offset-10_hN9R","offset-11":"offset-11_cqgv","offset-auto":"offset-auto_ZBrI","offset-xs-1":"offset-xs-1__ZrT","offset-xs-2":"offset-xs-2_WySR","offset-xs-3":"offset-xs-3_u9Tb","offset-xs-quarter":"offset-xs-quarter_Pd1o","offset-xs-4":"offset-xs-4_Bibg","offset-xs-third":"offset-xs-third_CeeW","offset-xs-5":"offset-xs-5_OgED","offset-xs-6":"offset-xs-6_ihSu","offset-xs-half":"offset-xs-half_Vrdz","offset-xs-7":"offset-xs-7_TtZQ","offset-xs-8":"offset-xs-8_Ftc2","offset-xs-9":"offset-xs-9_HptZ","offset-xs-10":"offset-xs-10_umjb","offset-xs-11":"offset-xs-11_Suix","offset-xs-auto":"offset-xs-auto_fxe8","offset-sm-1":"offset-sm-1_knSM","offset-sm-2":"offset-sm-2_zWxo","offset-sm-3":"offset-sm-3_oqp6","offset-sm-quarter":"offset-sm-quarter_Nav1","offset-sm-4":"offset-sm-4_EvUX","offset-sm-third":"offset-sm-third_tGgh","offset-sm-5":"offset-sm-5_raNi","offset-sm-6":"offset-sm-6_KTA8","offset-sm-half":"offset-sm-half_ab81","offset-sm-7":"offset-sm-7_duQl","offset-sm-8":"offset-sm-8_uRxp","offset-sm-9":"offset-sm-9_AqYl","offset-sm-10":"offset-sm-10_Wt6J","offset-sm-11":"offset-sm-11_yAYq","offset-sm-auto":"offset-sm-auto_FAp6","offset-md-1":"offset-md-1_OpgB","offset-md-2":"offset-md-2_U24n","offset-md-3":"offset-md-3_YxnQ","offset-md-quarter":"offset-md-quarter_y53T","offset-md-4":"offset-md-4_ZaOC","offset-md-third":"offset-md-third_HZWP","offset-md-5":"offset-md-5_KVFL","offset-md-6":"offset-md-6_bZvL","offset-md-half":"offset-md-half_yilA","offset-md-7":"offset-md-7_fs04","offset-md-8":"offset-md-8_QmYF","offset-md-9":"offset-md-9_QoVc","offset-md-10":"offset-md-10_OrE0","offset-md-11":"offset-md-11_reKz","offset-md-auto":"offset-md-auto_ETdh","offset-lg-1":"offset-lg-1_zi3j","offset-lg-2":"offset-lg-2_YgjU","offset-lg-3":"offset-lg-3_CHdw","offset-lg-quarter":"offset-lg-quarter_Chor","offset-lg-4":"offset-lg-4_NOCF","offset-lg-third":"offset-lg-third_LTbL","offset-lg-5":"offset-lg-5_dGzM","offset-lg-6":"offset-lg-6_kXXi","offset-lg-half":"offset-lg-half_vFHN","offset-lg-7":"offset-lg-7_jIth","offset-lg-8":"offset-lg-8_T0Jx","offset-lg-9":"offset-lg-9_mYmL","offset-lg-10":"offset-lg-10_clJ6","offset-lg-11":"offset-lg-11_zFW2","offset-lg-auto":"offset-lg-auto_W3q4","offset-xl-1":"offset-xl-1_pRWH","offset-xl-2":"offset-xl-2_FX3q","offset-xl-3":"offset-xl-3_P8xx","offset-xl-quarter":"offset-xl-quarter_RLTy","offset-xl-4":"offset-xl-4_n7Vy","offset-xl-third":"offset-xl-third_w0fc","offset-xl-5":"offset-xl-5_vC_8","offset-xl-6":"offset-xl-6_BvQ2","offset-xl-half":"offset-xl-half_HQ16","offset-xl-7":"offset-xl-7_m1bv","offset-xl-8":"offset-xl-8_FJ1u","offset-xl-9":"offset-xl-9_oAbC","offset-xl-10":"offset-xl-10_wwaH","offset-xl-11":"offset-xl-11_HpDF","offset-xl-auto":"offset-xl-auto_Dv5P"});

},
28247(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  U: () => (/* binding */ PropTable)
});

// UNUSED EXPORTS: DisplayCompositeTypes

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Dialog.mjs + 1 modules
var Dialog = __webpack_require__(5245);
// EXTERNAL MODULE: ./packages/components/src/popover/Popover.tsx + 1 modules
var Popover = __webpack_require__(11728);
// EXTERNAL MODULE: ./packages/components/src/accordion/Accordion.tsx + 1 modules
var Accordion = __webpack_require__(18003);
// EXTERNAL MODULE: ./packages/components/src/accordion/AccordionItem.tsx + 1 modules
var AccordionItem = __webpack_require__(69130);
;// CONCATENATED MODULE: ./apps/docs/src/css/propstable.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const propstable_module = ({"accordion":"accordion_M8EQ","propsGridTable":"propsGridTable_luj3","membersTable":"membersTable_K5oi","popover":"popover_gEf7","arrow":"arrow_kUCF"});
// EXTERNAL MODULE: ./node_modules/react-markdown/lib/index.js + 137 modules
var lib = __webpack_require__(24649);
// EXTERNAL MODULE: ./node_modules/react-lowlight/src/Lowlight.js + 2 modules
var Lowlight = __webpack_require__(2268);
// EXTERNAL MODULE: ./node_modules/react-lowlight/src/common.js + 38 modules
var common = __webpack_require__(14788);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/Pressable.mjs
var Pressable = __webpack_require__(45210);
;// CONCATENATED MODULE: ./apps/docs/src/utils/jsdocLinkToMarkdown.ts
const jsdocLinkToMarkdown = (comment)=>// {@link URL|Text} or {@link URL Text} format (JSDoc style)
    comment.replace(/\{@link\s+([^|\s}]+)\s*\|?\s*([^}]+)\}/g, (match, url, text)=>`[${text.trim()}](${url})`)// Replace @see with "See " at the beginning of lines
    .replace(/^\s*@see\s+/gm, 'See ')// Remove @link tags from the beginning of lines (but keep the markdown link)
    .replace(/^\s*@link\s+/gm, '')// Remove any extra @link tags that might be inline
    .replace(/\s*@link\s+/g, ' ');

;// CONCATENATED MODULE: ./apps/docs/src/components/PropsTable.tsx









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
82737(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  B: () => (ComponentHeader)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _midas_ds_components__rspack_import_3 = __webpack_require__(25879);
/* import */ var _midas_ds_components__rspack_import_4 = __webpack_require__(80782);
/* import */ var _midas_ds_components__rspack_import_5 = __webpack_require__(35900);
/* import */ var lucide_react__rspack_import_6 = __webpack_require__(85304);
/* import */ var _site_src_components_icons__rspack_import_1 = __webpack_require__(95860);
/* import */ var _docusaurus_useBaseUrl__rspack_import_2 = __webpack_require__(66497);



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
95860(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  F: () => (/* reexport */ EmptyIcon),
  q: () => (/* reexport */ StorybookIcon)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// CONCATENATED MODULE: ./apps/docs/src/components/icons/Storybook.tsx


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

;// CONCATENATED MODULE: ./apps/docs/src/components/icons/Empty.tsx

const EmptyIcon = ()=>/*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        height: 0,
        width: 0
    });

;// CONCATENATED MODULE: ./apps/docs/src/components/icons/index.ts




},
18003(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  n: () => (/* binding */ Accordion)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// CONCATENATED MODULE: ./packages/components/src/accordion/Accordion.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Accordion_module = ({"root":"root_dwc1","contained":"contained_snuo","triggerButton":"triggerButton_v7ly"});
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Disclosure.mjs + 3 modules
var Disclosure = __webpack_require__(13827);
// EXTERNAL MODULE: ./packages/components/src/accordion/AccordionContext.ts
var AccordionContext = __webpack_require__(52436);
;// CONCATENATED MODULE: ./packages/components/src/accordion/Accordion.tsx
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
52436(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  C: () => (AccordionContext)
});
/* import */ var react__rspack_import_0 = __webpack_require__(96540);

const AccordionContext = (0,react__rspack_import_0.createContext)(undefined);


},
69130(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ AccordionItem)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Disclosure.mjs + 3 modules
var Disclosure = __webpack_require__(13827);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95841);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(67191);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-down.mjs
var chevron_down = __webpack_require__(16749);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
;// CONCATENATED MODULE: ./packages/components/src/accordion/AccordionItem.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const AccordionItem_module = ({"item":"item_VttG","contained":"contained_ub98","medium":"medium_WM8r","success":"success_cpFV","warning":"warning_NxFE","info":"info_suK1","important":"important_n_K6","triggerButton":"triggerButton_En7k","triggerText":"triggerText_VvwO","trigger":"trigger_dCCq","triggerMainContent":"triggerMainContent_WoSV","\t":"\t_YXX_","chevronIcon":"chevronIcon_kSND","statusIcon":"statusIcon_DtWQ","panel":"panel_RCRU","content":"content_EuZw","neutralBackground":"neutralBackground_NTCu","header":"header_kp5y"});
// EXTERNAL MODULE: ./packages/components/src/heading/Heading.tsx + 1 modules
var Heading = __webpack_require__(72201);
// EXTERNAL MODULE: ./packages/components/src/accordion/AccordionContext.ts
var AccordionContext = __webpack_require__(52436);
// EXTERNAL MODULE: ./packages/components/src/common/FeedbackStatusIcon.tsx + 1 modules
var FeedbackStatusIcon = __webpack_require__(19573);
;// CONCATENATED MODULE: ./packages/components/src/accordion/AccordionItem.tsx











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
19573(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $: () => (/* binding */ FeedbackStatusIcon)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/check.mjs
var check = __webpack_require__(53729);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/info.mjs
var info = __webpack_require__(50643);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/flag.mjs
var flag = __webpack_require__(4329);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs
var triangle_alert = __webpack_require__(63626);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(26821);
;// CONCATENATED MODULE: ./packages/components/src/common/intl/translations.json
var translations_namespaceObject = JSON.parse('{"en":{"ok":"okay","information":"information","importantInformation":"important information","warning":"warning"},"sv":{"ok":"okej","information":"information","importantInformation":"viktig information","warning":"varning"}}')
;// CONCATENATED MODULE: ./packages/components/src/common/FeedbackStatusIcon.tsx




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
25879(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  x: () => (Grid)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _Grid_module_css__rspack_import_2 = __webpack_require__(52072);
/* import */ var _utils_clsx__rspack_import_3 = __webpack_require__(18496);




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
80782(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  E: () => (GridItem)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _Grid_module_css__rspack_import_2 = __webpack_require__(52072);
/* import */ var _utils_clsx__rspack_import_3 = __webpack_require__(18496);




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
72201(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  D: () => (/* binding */ Heading_Heading)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Heading.mjs
var Heading = __webpack_require__(91820);
;// CONCATENATED MODULE: ./packages/components/src/heading/Heading.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Heading_module = ({"h1":"h1_fQIH","h2":"h2_fBmz","h3":"h3_xOF5","h4":"h4_AF6p","h5":"h5_slY8","h6":"h6_loS0"});
;// CONCATENATED MODULE: ./packages/components/src/heading/Heading.tsx





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
35900(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* binding */ LinkButton)
});

// UNUSED EXPORTS: RouterProvider

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Link.mjs + 1 modules
var Link = __webpack_require__(10068);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/visually-hidden/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(81013);
;// CONCATENATED MODULE: ./packages/components/src/link-button/LinkButton.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const LinkButton_module = ({"linkButton":"linkButton_DlJV","secondary":"secondary_aNB6","icon":"icon_g3pu","tertiary":"tertiary_tl3f","danger":"danger_qkvT","iconBtn":"iconBtn_Ngss","medium":"medium_St93","iconLeft":"iconLeft_r90N","fullwidth":"fullwidth_yUSG","button":"button_CzNs"});
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/square-arrow-out-up-right.mjs
var square_arrow_out_up_right = __webpack_require__(38012);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-left.mjs
var arrow_left = __webpack_require__(8252);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-right.mjs
var arrow_right = __webpack_require__(25279);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(26821);
;// CONCATENATED MODULE: ./packages/components/src/link-button/intl/translations.json
var translations_namespaceObject = JSON.parse('{"en":{"opensInNewTab":"Opens in new tab"},"sv":{"opensInNewTab":"Öppnas i ny flik"}}')
;// CONCATENATED MODULE: ./packages/components/src/link-button/LinkButton.tsx
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
11728(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Popover_Popover)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95841);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Popover.mjs + 1 modules
var Popover = __webpack_require__(30900);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/OverlayArrow.mjs
var OverlayArrow = __webpack_require__(57653);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
;// CONCATENATED MODULE: ./packages/components/src/popover/Popover.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Popover_module = ({"popover":"popover_qr_p","arrow":"arrow_bhQK"});
;// CONCATENATED MODULE: ./packages/components/src/popover/Popover.tsx





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