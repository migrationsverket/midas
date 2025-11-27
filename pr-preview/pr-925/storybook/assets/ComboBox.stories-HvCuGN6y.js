import{r as H,j as r,e as D,c as G,k as J}from"./iframe-CwLkjgpT.js";import{$ as N}from"./Collection-CBg4ukBX.js";import{b as Q,a as X,s as v}from"./ComboBox.module-B2DypimS.js";import{a as Y}from"./Button-CQyRRKMW.js";import{a as Z}from"./Input-7bLPdQ52.js";import{c as F}from"./clsx-Ciqy0D92.js";import{a as _,L as ee}from"./Label-D-92omIG.js";import{C as te}from"./chevron-down-DxbyGmwZ.js";import{L as re}from"./ListBoxPopover-OD0fr2J_.js";import{s as ne,a as se,L as y}from"./ListBoxItem-dTE-FLN3.js";import{L as O,a as oe}from"./ListBoxSection-DGbj09jS.js";import{u as z}from"./useLocalizedStringFormatter-BIv7akwD.js";import{T as K}from"./Text-BQIFYXN4.js";import{F as R}from"./FieldError-DGr3c4Fy.js";import{e as ae}from"./ListBox-nUQDNtxQ.js";import{S as le}from"./Button-DtGuvUjf.js";import"./preload-helper-PPVm8Dsz.js";import"./Hidden-DdX0U8LA.js";import"./index-DksoI_g-.js";import"./index-B5Ydvek1.js";import"./useFocusRing-DAwt605V.js";import"./utils-DSWzARDZ.js";import"./clsx-B-dksMZM.js";import"./index-kdVZxqd5.js";import"./FieldError-D0HGPYoR.js";import"./Text-BZsBZWaE.js";import"./Form-DyQS-Rx8.js";import"./useFormValidation-DYTV0QoP.js";import"./Group-7o8s51Es.js";import"./Dialog-PD56cuDU.js";import"./RSPContexts-5uc_6UdN.js";import"./OverlayArrow-Bj1Y5OAh.js";import"./useResizeObserver-zNonKEnh.js";import"./useControlledState-aJ_MxFDE.js";import"./Separator-Z-GnE651.js";import"./SelectionManager-C1UZmZTF.js";import"./useEvent-D_IHmf9Z.js";import"./scrollIntoView-CO_UKuN0.js";import"./SelectionIndicator-CO6cAmp2.js";import"./useDescription-DbGCeq7X.js";import"./ListKeyboardDelegate-CNEKZ9v2.js";import"./PressResponder-DaJ7LY8c.js";import"./useLocalizedStringFormatter-4a_u7Il3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-C95P398o.js";import"./useLabels-C8OlSCO5.js";import"./VisuallyHidden-DcUNvP8l.js";import"./useFilter-DzxuzAhh.js";import"./useSingleSelectListState-4WhnBafK.js";import"./useListState-CC9-S_do.js";import"./useUpdateEffect-t_UoM87h.js";import"./useTextField-BI3tjPnv.js";import"./useField-Bu-u-nKx.js";import"./useButton-BS52WYPg.js";import"./x-717PqAvY.js";import"./createLucideIcon-DeGNxWTw.js";import"./Heading-DmQGtzi_.js";import"./info-DnhfSu3G.js";import"./Popover-DXbYzZFC.js";import"./Virtualizer-DONj3PPw.js";import"./DragAndDrop-BIDfv-uo.js";import"./inertValue-CcIixnsx.js";import"./Button.module-CtQ1deO8.js";function ie(t,e){let s;switch(t.state){case"idle":case"error":switch(e.type){case"loading":case"loadingMore":case"sorting":case"filtering":var o,l;return{...t,filterText:(o=e.filterText)!==null&&o!==void 0?o:t.filterText,state:e.type,items:e.type==="loading"?[]:t.items,sortDescriptor:(l=e.sortDescriptor)!==null&&l!==void 0?l:t.sortDescriptor,abortController:e.abortController};case"update":var i;return{...t,...(i=e.updater)===null||i===void 0?void 0:i.call(e,t)};case"success":case"error":return t;default:throw new Error(`Invalid action "${e.type}" in state "${t.state}"`)}case"loading":case"sorting":case"filtering":switch(e.type){case"success":if(e.abortController!==t.abortController)return t;var u;s=(u=e.selectedKeys)!==null&&u!==void 0?u:t.selectedKeys;var n,c,d;return{...t,filterText:(n=e.filterText)!==null&&n!==void 0?n:t.filterText,state:"idle",items:[...(c=e.items)!==null&&c!==void 0?c:[]],selectedKeys:s==="all"?"all":new Set(s),sortDescriptor:(d=e.sortDescriptor)!==null&&d!==void 0?d:t.sortDescriptor,abortController:void 0,cursor:e.cursor};case"error":return e.abortController!==t.abortController?t:{...t,state:"error",error:e.error,abortController:void 0};case"loading":case"loadingMore":case"sorting":case"filtering":var h;(h=t.abortController)===null||h===void 0||h.abort();var a;return{...t,filterText:(a=e.filterText)!==null&&a!==void 0?a:t.filterText,state:e.type,items:e.type==="loading"?[]:t.items,abortController:e.abortController};case"update":var f;return{...t,...(f=e.updater)===null||f===void 0?void 0:f.call(e,t)};default:throw new Error(`Invalid action "${e.type}" in state "${t.state}"`)}case"loadingMore":switch(e.type){case"success":var m;s=t.selectedKeys==="all"||e.selectedKeys==="all"?"all":new Set([...t.selectedKeys,...(m=e.selectedKeys)!==null&&m!==void 0?m:[]]);var b,x;return{...t,state:"idle",items:[...t.items,...(b=e.items)!==null&&b!==void 0?b:[]],selectedKeys:s,sortDescriptor:(x=e.sortDescriptor)!==null&&x!==void 0?x:t.sortDescriptor,abortController:void 0,cursor:e.cursor};case"error":return e.abortController!==t.abortController?t:{...t,state:"error",error:e.error};case"loading":case"sorting":case"filtering":var C;(C=t.abortController)===null||C===void 0||C.abort();var g;return{...t,filterText:(g=e.filterText)!==null&&g!==void 0?g:t.filterText,state:e.type,items:e.type==="loading"?[]:t.items,abortController:e.abortController};case"loadingMore":var S;return(S=e.abortController)===null||S===void 0||S.abort(),t;case"update":var V;return{...t,...(V=e.updater)===null||V===void 0?void 0:V.call(e,t)};default:throw new Error(`Invalid action "${e.type}" in state "${t.state}"`)}default:throw new Error(`Invalid state "${t.state}"`)}}function U(t){const{load:e,sort:s,initialSelectedKeys:o,initialSortDescriptor:l,getKey:i=a=>a.id||a.key,initialFilterText:u=""}=t;let[n,c]=H.useReducer(ie,{state:"idle",error:void 0,items:[],selectedKeys:o==="all"?"all":new Set(o),sortDescriptor:l,filterText:u});const d=async(a,f)=>{let m=new AbortController;try{c({...a,abortController:m});var b;let g=(b=a.filterText)!==null&&b!==void 0?b:n.filterText;var x;let S=await f({items:n.items.slice(),selectedKeys:n.selectedKeys,sortDescriptor:(x=a.sortDescriptor)!==null&&x!==void 0?x:n.sortDescriptor,signal:m.signal,cursor:a.type==="loadingMore"?n.cursor:void 0,filterText:g,loadingState:n.state});var C;let V=(C=S.filterText)!==null&&C!==void 0?C:g;c({type:"success",...S,abortController:m}),V&&V!==g&&!m.signal.aborted&&d({type:"filtering",filterText:V},e)}catch(g){c({type:"error",error:g,abortController:m})}};let h=H.useRef(!1);return H.useEffect(()=>{h.current||(d({type:"loading"},e),h.current=!0)},[]),{items:n.items,selectedKeys:n.selectedKeys,sortDescriptor:n.sortDescriptor,isLoading:n.state==="loading"||n.state==="loadingMore"||n.state==="sorting"||n.state==="filtering",loadingState:n.state,error:n.error,filterText:n.filterText,getItem(a){return n.items.find(f=>i(f)===a)},reload(){d({type:"loading"},e)},loadMore(){n.state==="loading"||n.state==="loadingMore"||n.state==="filtering"||n.cursor==null||d({type:"loadingMore"},e)},sort(a){d({type:"sorting",sortDescriptor:a},s||e)},...Q({...t,getKey:i,cursor:n.cursor},a=>{c({type:"update",updater:a})}),setFilterText(a){d({type:"filtering",filterText:a},e)}}}const de={"loading...":"Loading..."},ue={"loading...":"Laddar..."},me={en:de,sv:ue},$=({className:t,children:e,isLoading:s,...o})=>{const l=z(me);return r.jsx(ae,{className:F(ne.listBoxLoadMoreItem,t),isLoading:s,...o,children:e||r.jsxs(r.Fragment,{children:[r.jsx(le,{small:!0}),r.jsx("span",{"aria-hidden":!0,children:l.format("loading...")})]})})};try{$.displayName="ListBoxLoadMoreItem",$.__docgenInfo={description:"",displayName:"ListBoxLoadMoreItem",props:{children:{defaultValue:null,description:"The load more spinner to render when loading additional items.",name:"children",required:!1,type:{name:"ReactNode"}},isLoading:{defaultValue:null,description:"Whether or not the loading spinner should be rendered or not.",name:"isLoading",required:!1,type:{name:"boolean"}},onLoadMore:{defaultValue:null,description:"Handler that is called when more items should be loaded, e.g. while scrolling near the bottom.",name:"onLoadMore",required:!1,type:{name:"(() => any)"}},scrollOffset:{defaultValue:{value:"1"},description:`The amount of offset from the bottom of your scrollable region that should trigger load more.
Uses a percentage value relative to the scroll body's client height. Load more is then triggered
when your current scroll position's distance from the bottom of the currently loaded list of items is less than
or equal to the provided value. (e.g. 1 = 100% of the scroll region's height).`,name:"scrollOffset",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element.",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const ce={showList:"Show list",noResultsFound:"No results found"},pe={showList:"Visa lista",noResultsFound:"Inga träffar"},he={en:ce,sv:pe};function p({label:t,description:e,errorMessage:s,children:o,items:l,className:i,errorPosition:u="top",size:n="large",popover:c,...d}){const h=D.useRef(null),a=z(he),f=m=>{m.currentTarget.value&&h.current?.select()};return r.jsxs(X,{className:F(v.combobox,i),...d,"data-readonly":d.isReadOnly||void 0,children:[r.jsx(_,{popover:c,children:t&&r.jsx(ee,{children:t})}),e&&r.jsx(K,{slot:"description",children:e}),u==="top"&&r.jsx(R,{"data-testid":"fieldError",children:s}),r.jsxs("div",{className:v.wrap,children:[r.jsx(Z,{className:F(v.inputField,{[v.medium]:n==="medium"}),"data-readonly":d.isReadOnly||void 0,onMouseUp:f,ref:h}),r.jsx(Y,{className:F(v.button,{[v.medium]:n==="medium"}),"aria-label":a.format("showList"),children:r.jsx("div",{className:v.icon,"aria-hidden":"true",children:r.jsx(te,{size:20,"aria-hidden":!0})})})]}),u==="bottom"&&r.jsx(R,{"data-testid":"fieldError",children:s}),r.jsx(re,{children:r.jsx(se,{items:l,renderEmptyState:()=>r.jsx(K,{className:v.emptyState,children:a.format("noResultsFound")}),children:o})})]})}function A(t){return r.jsx(y,{...t})}function W(t){return r.jsx(O,{...t,children:r.jsx(N,{items:t.children,children:e=>r.jsx(A,{children:e.name},e.id)})})}try{p.displayName="ComboBox",p.__docgenInfo={description:"",displayName:"ComboBox",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string | ((validation: ValidationResult) => string)"}},items:{defaultValue:null,description:"The list of ComboBox items (controlled).",name:"items",required:!1,type:{name:"Iterable<T>"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},errorPosition:{defaultValue:{value:"top"},description:"",name:"errorPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},size:{defaultValue:{value:"large"},description:"Component size (large: height 48px, medium: height 40px)",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'}]}},popover:{defaultValue:null,description:"",name:"popover",required:!1,type:{name:"InfoPopoverProps"}},isDisabled:{defaultValue:null,description:"Whether the input is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"ClassNameOrFunction<ComboBoxRenderProps>"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"StyleOrFunction<ComboBoxRenderProps>"}},autoFocus:{defaultValue:null,description:"Whether the element should receive focus on render.",name:"autoFocus",required:!1,type:{name:"boolean"}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string | null"}},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",required:!1,type:{name:"((e: FocusEvent<HTMLInputElement, Element>) => void)"}},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",required:!1,type:{name:"((e: FocusEvent<HTMLInputElement, Element>) => void)"}},onKeyDown:{defaultValue:null,description:"Handler that is called when a key is pressed.",name:"onKeyDown",required:!1,type:{name:"((e: KeyboardEvent) => void)"}},onKeyUp:{defaultValue:null,description:"Handler that is called when a key is released.",name:"onKeyUp",required:!1,type:{name:"((e: KeyboardEvent) => void)"}},disabledKeys:{defaultValue:null,description:"The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with.",name:"disabledKeys",required:!1,type:{name:"Iterable<Key>"}},onFocusChange:{defaultValue:null,description:"Handler that is called when the element's focus status changes.",name:"onFocusChange",required:!1,type:{name:"((isFocused: boolean) => void)"}},isReadOnly:{defaultValue:null,description:"Whether the input can be selected but not changed by the user.",name:"isReadOnly",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Whether the input value is invalid.",name:"isInvalid",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:"Whether user input is required on the input before form submission.",name:"isRequired",required:!1,type:{name:"boolean"}},validationBehavior:{defaultValue:{value:"'native'"},description:`Whether to use native HTML form validation to prevent form submission
when the value is missing or invalid, or mark the field as required
or invalid via ARIA.`,name:"validationBehavior",required:!1,type:{name:"enum",value:[{value:'"aria"'},{value:'"native"'}]}},validate:{defaultValue:null,description:'A function that returns an error message if a given value is invalid.\nValidation errors are displayed to the user when the form is submitted\nif `validationBehavior="native"`. For realtime validation, use the `isInvalid`\nprop instead.',name:"validate",required:!1,type:{name:"((value: ComboBoxValidationValue) => true | ValidationError | null)"}},onSelectionChange:{defaultValue:null,description:"Handler that is called when the selection changes.",name:"onSelectionChange",required:!1,type:{name:"((key: Key | null) => void)"}},selectedKey:{defaultValue:null,description:"The currently selected key in the collection (controlled).",name:"selectedKey",required:!1,type:{name:"Key | null"}},defaultSelectedKey:{defaultValue:null,description:"The initial selected key in the collection (uncontrolled).",name:"defaultSelectedKey",required:!1,type:{name:"Key"}},shouldFocusWrap:{defaultValue:null,description:"Whether keyboard navigation is circular.",name:"shouldFocusWrap",required:!1,type:{name:"boolean"}},defaultItems:{defaultValue:null,description:"The list of ComboBox items (uncontrolled).",name:"defaultItems",required:!1,type:{name:"Iterable<T>"}},onOpenChange:{defaultValue:null,description:"Method that is called when the open state of the menu changes. Returns the new open state and the action that caused the opening of the menu.",name:"onOpenChange",required:!1,type:{name:"((isOpen: boolean, menuTrigger?: MenuTriggerAction) => void)"}},inputValue:{defaultValue:null,description:"The value of the ComboBox input (controlled).",name:"inputValue",required:!1,type:{name:"string"}},defaultInputValue:{defaultValue:null,description:"The default value of the ComboBox input (uncontrolled).",name:"defaultInputValue",required:!1,type:{name:"string"}},onInputChange:{defaultValue:null,description:"Handler that is called when the ComboBox input value changes.",name:"onInputChange",required:!1,type:{name:"((value: string) => void)"}},allowsCustomValue:{defaultValue:null,description:"Whether the ComboBox allows a non-item matching input value to be set.",name:"allowsCustomValue",required:!1,type:{name:"boolean"}},menuTrigger:{defaultValue:{value:"'input'"},description:"The interaction required to display the ComboBox menu.",name:"menuTrigger",required:!1,type:{name:"enum",value:[{value:'"input"'},{value:'"focus"'},{value:'"manual"'}]}},defaultFilter:{defaultValue:null,description:"The filter function used to determine if a option should be included in the combo box list.",name:"defaultFilter",required:!1,type:{name:"((textValue: string, inputValue: string) => boolean)"}},formValue:{defaultValue:{value:"'key'"},description:"Whether the text or key of the selected item is submitted as part of an HTML form.\nWhen `allowsCustomValue` is `true`, this option does not apply and the text is always submitted.",name:"formValue",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"key"'}]}},allowsEmptyCollection:{defaultValue:null,description:"Whether the combo box allows the menu to be open when the collection is empty.",name:"allowsEmptyCollection",required:!1,type:{name:"boolean"}}}}}catch{}try{A.displayName="ComboBoxItem",A.__docgenInfo={description:"",displayName:"ComboBoxItem",props:{id:{defaultValue:null,description:"The unique id of the item.",name:"id",required:!1,type:{name:"Key"}},value:{defaultValue:null,description:"The object value that this item represents. When using dynamic collections, this is set automatically.",name:"value",required:!1,type:{name:"ListBoxItemElement"}},textValue:{defaultValue:null,description:"A string representation of the item's contents, used for features like typeahead.",name:"textValue",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"An accessibility label for this item.",name:"aria-label",required:!1,type:{name:"string"}},isDisabled:{defaultValue:null,description:"Whether the item is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},onAction:{defaultValue:null,description:"Handler that is called when a user performs an action on the item. The exact user event depends on\nthe collection's `selectionBehavior` prop and the interaction modality.",name:"onAction",required:!1,type:{name:"(() => void)"}},children:{defaultValue:null,description:"The children of the component. A function may be provided to alter the children based on component state.",name:"children",required:!1,type:{name:"ChildrenOrFunction<ListBoxItemRenderProps>"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"ClassNameOrFunction<ComboBoxRenderProps>"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"StyleOrFunction<ComboBoxRenderProps>"}},onHoverStart:{defaultValue:null,description:"Handler that is called when a hover interaction starts.",name:"onHoverStart",required:!1,type:{name:"((e: HoverEvent) => void)"}},onHoverEnd:{defaultValue:null,description:"Handler that is called when a hover interaction ends.",name:"onHoverEnd",required:!1,type:{name:"((e: HoverEvent) => void)"}},onHoverChange:{defaultValue:null,description:"Handler that is called when the hover state changes.",name:"onHoverChange",required:!1,type:{name:"((isHovering: boolean) => void)"}},onPress:{defaultValue:null,description:"Handler that is called when the press is released over the target.",name:"onPress",required:!1,type:{name:"((e: PressEvent) => void)"}},onPressStart:{defaultValue:null,description:"Handler that is called when a press interaction starts.",name:"onPressStart",required:!1,type:{name:"((e: PressEvent) => void)"}},onPressEnd:{defaultValue:null,description:`Handler that is called when a press interaction ends, either
over the target or when the pointer leaves the target.`,name:"onPressEnd",required:!1,type:{name:"((e: PressEvent) => void)"}},onPressChange:{defaultValue:null,description:"Handler that is called when the press state changes.",name:"onPressChange",required:!1,type:{name:"((isPressed: boolean) => void)"}},onPressUp:{defaultValue:null,description:`Handler that is called when a press is released over the target, regardless of
whether it started on the target or not.`,name:"onPressUp",required:!1,type:{name:"((e: PressEvent) => void)"}},onClick:{defaultValue:null,description:"**Not recommended – use `onPress` instead.** `onClick` is an alias for `onPress`\nprovided for compatibility with other libraries. `onPress` provides \nadditional event details for non-mouse interactions.",name:"onClick",required:!1,type:{name:"((e: MouseEvent<FocusableElement, MouseEvent>) => void)"}}}}}catch{}try{W.displayName="ComboBoxSection",W.__docgenInfo={description:"",displayName:"ComboBoxSection",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}}}}}catch{}const fe=J(30),wt={component:p,title:"Components/ComboBox",tags:["autodocs"],args:{label:"Etikett",placeholder:"Placeholder",description:"Beskrivning",errorMessage:"Fel!",errorPosition:"top",size:"large"},argTypes:{placeholder:{control:"text"}},render:t=>r.jsxs(p,{...t,children:[r.jsx(y,{id:"apple",children:"Apple"}),r.jsx(y,{id:"lemon",children:"Lemon"})]})},w={args:{placeholder:"Välj eller sök frukt",label:"Välj en frukt",description:"Description",className:"test"},render:t=>r.jsx(p,{"data-testid":"test",items:fe,...t,children:e=>r.jsx(y,{children:e.name})})},L={args:{isInvalid:!0}},q={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}}},B={args:{size:"medium",isInvalid:!0}},j={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},T={args:{isReadOnly:!0,defaultSelectedKey:"lemon"}},E={args:{"aria-label":"test",isRequired:!0},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:t=>r.jsxs("form",{children:[r.jsx(p,{...t,children:r.jsx(y,{children:"Hej"})}),r.jsx("button",{type:"submit",children:"Submit"})]})},k={args:{placeholder:"Välj eller sök frukt",label:"Välj en frukt",description:"Description",className:"test",items:G},render:t=>r.jsx(p,{...t,children:e=>r.jsxs(O,{id:e.name,children:[r.jsx(oe,{children:e.name}),r.jsx(N,{items:e.children,children:s=>r.jsx(y,{id:s.id,children:s.name})})]})})},M={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},render:t=>{const[e,s]=D.useState(25),o=[...Array(e).keys()].map(l=>({name:l.toString(),id:l}));return r.jsxs(r.Fragment,{children:[r.jsxs("label",{children:["Adjust load",r.jsx("input",{type:"number",step:25,value:e,onChange:l=>s(parseInt(l.target.value))})]}),r.jsx(p,{...t,children:o.map(({name:l,id:i})=>r.jsx(y,{children:l},i))})]})}},I={args:{label:"Star Wars Character Lookup",placeholder:"Välj eller sök karaktär",description:"Anropar ett externt API",allowsEmptyCollection:!0},render:t=>{const e=U({async load({signal:s,cursor:o,filterText:l}){o&&(o=o.replace(/^http:\/\//i,"https://"));const i=await fetch(o||`https://swapi.py4e.com/api/people/?search=${l}`,{signal:s}),{results:u,next:n}=await i.json();return{items:u,cursor:n}}});return r.jsxs(p,{...t,inputValue:e.filterText,onInputChange:e.setFilterText,children:[r.jsx(N,{items:e.items,children:s=>r.jsx(y,{id:s.name?.toString(),children:s.name})}),e.isLoading&&r.jsx($,{isLoading:e.isLoading})]})}},P={args:{...I.args},render:t=>{const e=U({async load({signal:s,cursor:o,filterText:l}){o&&(o=o.replace(/^http:\/\//i,"https://"));const i=await fetch(o||`https://swapi.py4e.com/api/people/?search=${l}`,{signal:s}),{results:u,next:n}=await i.json();return{items:u,cursor:n}}});return r.jsxs(p,{...t,inputValue:e.filterText,onInputChange:e.setFilterText,children:[r.jsx(N,{items:e.items,children:s=>r.jsx(y,{id:s.name?.toString(),children:s.name})}),r.jsx($,{isLoading:e.loadingState==="loadingMore",onLoadMore:e.loadMore})]})}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Välj eller sök frukt',
    label: 'Välj en frukt',
    description: 'Description',
    className: 'test'
  },
  render: args => <ComboBox data-testid='test' items={options} {...args}>
      {item => <ListBoxItem>{item.name}</ListBoxItem>}
    </ComboBox>
}`,...w.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true
  }
}`,...L.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...q.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    isInvalid: true
  }
}`,...B.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  },
  parameters: {
    a11y: {
      context: 'body',
      config: {
        rules: [{
          // Dont check for color contrast on disabled elements
          id: 'color-contrast',
          enabled: false
        }]
      },
      options: {
        rules: {
          'color-contrast': {
            enabled: false
          }
        }
      } satisfies RunOptions
    }
  }
}`,...j.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    defaultSelectedKey: 'lemon'
  }
}`,...T.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'test',
    isRequired: true
  },
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: args => <form>
      <ComboBox {...args}>
        <ListBoxItem>Hej</ListBoxItem>
      </ComboBox>
      <button type='submit'>Submit</button>
    </form>
}`,...E.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Välj eller sök frukt',
    label: 'Välj en frukt',
    description: 'Description',
    className: 'test',
    items: optionsWithSections
  },
  render: args => <ComboBox {...args}>
      {section => <ListBoxSection id={section.name}>
          <ListBoxHeader>{section.name}</ListBoxHeader>
          <Collection items={section.children}>
            {item => <ListBoxItem id={item.id}>{item.name}</ListBoxItem>}
          </Collection>
        </ListBoxSection>}
    </ComboBox>
}`,...k.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: args => {
    const [numberOfItems, setNumberOfItems] = React.useState(25);
    const items = [...Array(numberOfItems).keys()].map(n => ({
      name: n.toString(),
      id: n
    }));
    return <>
        <label>
          Adjust load
          <input type='number' step={25} value={numberOfItems} onChange={e => setNumberOfItems(parseInt(e.target.value))} />
        </label>
        <ComboBox {...args}>
          {items.map(({
          name,
          id
        }) => <ListBoxItem key={id}>{name}</ListBoxItem>)}
        </ComboBox>
      </>;
  }
}`,...M.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Star Wars Character Lookup',
    placeholder: 'Välj eller sök karaktär',
    description: 'Anropar ett externt API',
    allowsEmptyCollection: true
  },
  render: args => {
    const list = useAsyncList<Item>({
      async load({
        signal,
        cursor,
        filterText
      }) {
        if (cursor) {
          cursor = cursor.replace(/^http:\\/\\//i, 'https://');
        }
        const res = await fetch(cursor || \`https://swapi.py4e.com/api/people/?search=\${filterText}\`, {
          signal
        });
        const {
          results,
          next
        } = await res.json();
        return {
          items: results,
          cursor: next
        };
      }
    });
    return <ComboBox {...args} inputValue={list.filterText} onInputChange={list.setFilterText}>
        <Collection items={list.items}>
          {item => <ListBoxItem id={item.name?.toString()}>{item.name}</ListBoxItem>}
        </Collection>
        {list.isLoading && <ListBoxLoadMoreItem isLoading={list.isLoading} />}
      </ComboBox>;
  }
}`,...I.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    ...AsynchronousLoadingWithEmptyMessage.args
  },
  render: args => {
    const list = useAsyncList<Item>({
      async load({
        signal,
        cursor,
        filterText
      }) {
        if (cursor) {
          cursor = cursor.replace(/^http:\\/\\//i, 'https://');
        }
        const res = await fetch(cursor || \`https://swapi.py4e.com/api/people/?search=\${filterText}\`, {
          signal
        });
        const {
          results,
          next
        } = await res.json();
        return {
          items: results,
          cursor: next
        };
      }
    });
    return <ComboBox {...args} inputValue={list.filterText} onInputChange={list.setFilterText}>
        <Collection items={list.items}>
          {item => <ListBoxItem id={item.name?.toString()}>{item.name}</ListBoxItem>}
        </Collection>
        <ListBoxLoadMoreItem isLoading={list.loadingState === 'loadingMore'} onLoadMore={list.loadMore} />
      </ComboBox>;
  }
}`,...P.parameters?.docs?.source}}};const Lt=["Primary","Invalid","DS1253","MediumSizeInvalid","Disabled","ReadOnly","Required","Sectioned","PerformanceTest","AsynchronousLoadingWithEmptyMessage","InfiniteScroll"];export{I as AsynchronousLoadingWithEmptyMessage,q as DS1253,j as Disabled,P as InfiniteScroll,L as Invalid,B as MediumSizeInvalid,M as PerformanceTest,w as Primary,T as ReadOnly,E as Required,k as Sectioned,Lt as __namedExportsOrder,wt as default};
