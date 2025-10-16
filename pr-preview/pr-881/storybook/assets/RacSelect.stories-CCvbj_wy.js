import{c as vt,r as s,e as g,j as n,o as I,d as yt}from"./iframe-BxN02fG5.js";import{d as gt,e as Vt}from"./Collection-CNqop7R7.js";import{b as ut,d as ct,$ as pt}from"./Button-DL7reNRt.js";import{b as le,e as xt,l as Et,$ as mt,h as ft,a as bt,i as St,j as Tt,k as Mt}from"./utils-DNiWlLhS.js";import{$ as wt,F as be}from"./FieldError-BaC3YkHH.js";import{a as Ct}from"./Form-BEFN_a3K.js";import{$ as $t}from"./intlStrings-ZMTSFH_M.js";import{c as qt,d as Ht}from"./ListBox-YcfEHY5_.js";import{r as Dt,h as Bt,i as Pt}from"./Dialog-DBcQc_ZX.js";import{$ as ue}from"./Text-CHt3qNlh.js";import{$ as Lt}from"./Hidden-CszN_z70.js";import{c as ce,i as It,a as kt}from"./useFocusRing-CkJ8xgbS.js";import{$ as At}from"./useResizeObserver-C-F4DsAW.js";import{$ as Kt}from"./useLocalizedStringFormatter-CxLow131.js";import{b as Ft,c as Rt,a as _t}from"./useFormValidation-BHpK9Wra.js";import{$ as jt}from"./useListState-CbSt2dHd.js";import{b as Ot}from"./OverlayArrow-CgjPVJ5e.js";import{$ as Wt}from"./useControlledState-Dzc7NhFq.js";import{$ as Nt,a as zt}from"./ListKeyboardDelegate-BeSlpi_9.js";import{i as Ut}from"./SelectionManager-D1NpoMOO.js";import{$ as Gt}from"./useField-DFmto85z.js";import{a as Xt}from"./VisuallyHidden-bA_4nXW7.js";import{e as Yt,b as Jt}from"./SelectionIndicator-DNUOiUbQ.js";import{X as Qt}from"./x-BJC_acg4.js";import{u as ee}from"./useLocalizedStringFormatter-Bx-I8dIo.js";import{a as Zt,L as ea}from"./Label-Dyp-OodJ.js";import{T as ta,$ as aa,a as na}from"./Tag-znnIofdI.js";import{L as la,b as D,a as ie,c as re}from"./ListBoxSection-DFCFTUyi.js";import{c as ia}from"./clsx-Ciqy0D92.js";import{C as ra}from"./Checkbox-DXhLQTi4.js";import{C as oa}from"./chevron-down-CdTwyUUL.js";import{T as sa}from"./Text-Bv4CUcS1.js";import{P as da}from"./Popover-kN0btZ5M.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CsKFd6bt.js";import"./index-Ts9wpydp.js";import"./index-BSwxxkBy.js";import"./useLabels-Dm94oC0f.js";import"./useButton-B_39DARH.js";import"./clsx-B-dksMZM.js";import"./DragAndDrop-D3JJsADk.js";import"./getScrollParent-UniuAyzg.js";import"./scrollIntoView-aYdBJlGo.js";import"./Separator-tCsVQVw6.js";import"./RSPContexts-CuevQr1D.js";import"./inertValue-DJjNyVJ2.js";import"./PressResponder-DudX6uyb.js";import"./useEvent-XS_DxB45.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useDescription-CduxJyJh.js";import"./createLucideIcon-ALbjxArz.js";import"./Button-pZ5sJKIm.js";import"./Button.module-CcWMkJAG.js";import"./Heading-D1l70-7G.js";import"./info-4gl4BMuA.js";import"./useHighlightSelectionDescription-WMOSb6HV.js";import"./useUpdateEffect-DoMSANL1.js";import"./useHasTabbableChild-D4uA2IgL.js";import"./Virtualizer-CXK2bF5D.js";import"./useToggleState-DimymLtD.js";function ua(e={}){let{locale:t}=vt();return s.useMemo(()=>new Intl.ListFormat(t,e),[t,e])}const pe=new WeakMap;function ca(e,t,a){let{keyboardDelegate:l,isDisabled:i,isRequired:u,name:c,form:r,validationBehavior:m="aria"}=e,b=Nt({usage:"search",sensitivity:"base"}),o=s.useMemo(()=>l||new zt(t.collection,t.disabledKeys,a,b),[l,t.collection,t.disabledKeys,b,a]),{menuTriggerProps:p,menuProps:V}=Dt({isDisabled:i,type:"listbox"},t,a),x=y=>{if(t.selectionManager.selectionMode!=="multiple")switch(y.key){case"ArrowLeft":{var B,P;y.preventDefault();let A=t.selectedKey!=null?(B=o.getKeyAbove)===null||B===void 0?void 0:B.call(o,t.selectedKey):(P=o.getFirstKey)===null||P===void 0?void 0:P.call(o);A&&t.setSelectedKey(A);break}case"ArrowRight":{var ae,ne;y.preventDefault();let A=t.selectedKey!=null?(ae=o.getKeyBelow)===null||ae===void 0?void 0:ae.call(o,t.selectedKey):(ne=o.getFirstKey)===null||ne===void 0?void 0:ne.call(o);A&&t.setSelectedKey(A);break}}},{typeSelectProps:h}=Ut({keyboardDelegate:o,selectionManager:t.selectionManager,onTypeSelect(y){t.setSelectedKey(y)}}),{isInvalid:M,validationErrors:w,validationDetails:v}=t.displayValidation,{labelProps:E,fieldProps:T,descriptionProps:d,errorMessageProps:q}=Gt({...e,labelElementType:"span",isInvalid:M,errorMessage:e.errorMessage||w});h.onKeyDown=h.onKeyDownCapture,delete h.onKeyDownCapture,t.selectionManager.selectionMode==="multiple"&&(h={});let H=ce(e,{labelable:!0}),S=le(h,p,T),R=xt();return pe.set(t,{isDisabled:i,isRequired:u,name:c,form:r,validationBehavior:m}),{labelProps:{...E,onClick:()=>{if(!e.isDisabled){var y;(y=a.current)===null||y===void 0||y.focus(),It("keyboard")}}},triggerProps:le(H,{...S,isDisabled:i,onKeyDown:Et(S.onKeyDown,x,e.onKeyDown),onKeyUp:e.onKeyUp,"aria-labelledby":[R,S["aria-labelledby"],S["aria-label"]&&!S["aria-labelledby"]?S.id:null].filter(Boolean).join(" "),onFocus(y){t.isFocused||(e.onFocus&&e.onFocus(y),e.onFocusChange&&e.onFocusChange(!0),t.setFocused(!0))},onBlur(y){t.isOpen||(e.onBlur&&e.onBlur(y),e.onFocusChange&&e.onFocusChange(!1),t.setFocused(!1))}}),valueProps:{id:R},menuProps:{...V,autoFocus:t.focusStrategy||!0,shouldSelectOnPressUp:!0,shouldFocusOnHover:!0,disallowEmptySelection:!0,linkBehavior:"selection",onBlur:y=>{y.currentTarget.contains(y.relatedTarget)||(e.onBlur&&e.onBlur(y),e.onFocusChange&&e.onFocusChange(!1),t.setFocused(!1))},"aria-labelledby":[T["aria-labelledby"],S["aria-label"]&&!T["aria-labelledby"]?S.id:null].filter(Boolean).join(" ")},descriptionProps:d,errorMessageProps:q,isInvalid:M,validationErrors:w,validationDetails:v,hiddenSelectProps:{isDisabled:i,name:c,label:e.label,state:t,triggerRef:a,form:r}}}function pa(e,t,a){let l=pe.get(t)||{},{autoComplete:i,name:u=l.name,form:c=l.form,isDisabled:r=l.isDisabled}=e,{validationBehavior:m,isRequired:b}=l,{visuallyHiddenProps:o}=Xt({style:{position:"fixed",top:0,left:0}});Ft(e.selectRef,t.defaultValue,t.setValue),Rt({validationBehavior:m,focus:()=>{var h;return(h=a.current)===null||h===void 0?void 0:h.focus()}},t,e.selectRef);let p=t.setValue,V=s.useCallback(h=>{h.target.multiple?p(Array.from(h.target.selectedOptions,M=>M.value)):p(h.currentTarget.value)},[p]);var x;return{containerProps:{...o,"aria-hidden":!0,"data-react-aria-prevent-focus":!0,"data-a11y-ignore":"aria-hidden-focus"},inputProps:{style:{display:"none"}},selectProps:{tabIndex:-1,autoComplete:i,disabled:r,multiple:t.selectionManager.selectionMode==="multiple",required:m==="native"&&b,name:u,form:c,value:(x=t.value)!==null&&x!==void 0?x:"",onChange:V,onInput:V}}}function ma(e){let{state:t,triggerRef:a,label:l,name:i,form:u,isDisabled:c}=e,r=s.useRef(null),m=s.useRef(null),{containerProps:b,selectProps:o}=pa({...e,selectRef:t.collection.size<=300?r:m},t,a);if(t.collection.size<=300)return g.createElement("div",{...b,"data-testid":"hidden-select-container"},g.createElement("label",null,l,g.createElement("select",{...o,ref:r},g.createElement("option",null),[...t.collection.getKeys()].map(p=>{let V=t.collection.getItem(p);if(V&&V.type==="item")return g.createElement("option",{key:V.key,value:V.key},V.textValue)}))));if(i){let p=pe.get(t)||{},{validationBehavior:V}=p,x=Array.isArray(t.value)?t.value:[t.value];x.length===0&&(x=[null]);let h=x.map((M,w)=>{let v={type:"hidden",autoComplete:o.autoComplete,name:i,form:u,disabled:c,value:M??""};return V==="native"?g.createElement("input",{key:w,...v,ref:w===0?m:null,style:{display:"none"},type:"text",required:w===0?o.required:!1,onChange:()=>{}}):g.createElement("input",{key:w,...v,ref:w===0?m:null})});return g.createElement(g.Fragment,null,h)}return null}function fa(e){let{selectionMode:t="single"}=e,a=Ot(e),[l,i]=s.useState(null),u=s.useMemo(()=>{var d;return e.defaultValue!==void 0?e.defaultValue:t==="single"?(d=e.defaultSelectedKey)!==null&&d!==void 0?d:null:[]},[e.defaultValue,e.defaultSelectedKey,t]),c=s.useMemo(()=>e.value!==void 0?e.value:t==="single"?e.selectedKey:void 0,[e.value,e.selectedKey,t]),[r,m]=Wt(c,u,e.onChange),b=t==="single"&&Array.isArray(r)?r[0]:r,o=d=>{if(t==="single"){var q,H;let S=Array.isArray(d)?(H=d[0])!==null&&H!==void 0?H:null:d;m(S),S!==b&&((q=e.onSelectionChange)===null||q===void 0||q.call(e,S))}else{let S=[];Array.isArray(d)?S=d:d!=null&&(S=[d]),m(S)}},p=jt({...e,selectionMode:t,disallowEmptySelection:t==="single",allowDuplicateSelectionEvents:!0,selectedKeys:s.useMemo(()=>ba(b),[b]),onSelectionChange:d=>{if(d!=="all"){if(t==="single"){var q;let H=(q=d.values().next().value)!==null&&q!==void 0?q:null;o(H),a.close()}else o([...d]);h.commitValidation()}}}),V=p.selectionManager.firstSelectedKey,x=s.useMemo(()=>[...p.selectionManager.selectedKeys].map(d=>p.collection.getItem(d)).filter(d=>d!=null),[p.selectionManager.selectedKeys,p.collection]),h=_t({...e,value:Array.isArray(b)&&b.length===0?null:b}),[M,w]=s.useState(!1),[v]=s.useState(b);var E,T;return{...h,...p,...a,value:b,defaultValue:u??v,setValue:o,selectedKey:V,setSelectedKey:o,selectedItem:(E=x[0])!==null&&E!==void 0?E:null,selectedItems:x,defaultSelectedKey:(T=e.defaultSelectedKey)!==null&&T!==void 0?T:e.selectionMode==="single"?v:null,focusStrategy:l,open(d=null){p.collection.size!==0&&(i(d),a.open())},toggle(d=null){p.collection.size!==0&&(i(d),a.toggle())},isFocused:M,setFocused:w}}function ba(e){if(e!==void 0)return e===null?[]:Array.isArray(e)?e:[e]}function ha(e){return e&&e.__esModule?e.default:e}const me=s.createContext(null),k=s.createContext(null),va=s.forwardRef(function(t,a){[t,a]=mt(t,a,me);let{children:l,isDisabled:i=!1,isInvalid:u=!1,isRequired:c=!1}=t,r=s.useMemo(()=>typeof l=="function"?l({isOpen:!1,isDisabled:i,isInvalid:u,isRequired:c,isFocused:!1,isFocusVisible:!1,defaultChildren:null}):l,[l,i,u,c]);return g.createElement(gt,{content:r},m=>g.createElement(ga,{props:t,collection:m,selectRef:a}))}),ya=[ut,ct,ue];function ga({props:e,selectRef:t,collection:a}){let{validationBehavior:l}=ft(Ct)||{};var i,u;let c=(u=(i=e.validationBehavior)!==null&&i!==void 0?i:l)!==null&&u!==void 0?u:"native",r=fa({...e,collection:a,children:void 0,validationBehavior:c}),{isFocusVisible:m,focusProps:b}=kt({within:!0}),o=s.useRef(null),[p,V]=St(!e["aria-label"]&&!e["aria-labelledby"]),{labelProps:x,triggerProps:h,valueProps:M,menuProps:w,descriptionProps:v,errorMessageProps:E,hiddenSelectProps:T,...d}=ca({...Tt(e),label:V,validationBehavior:c},r,o),[q,H]=s.useState(null),S=s.useCallback(()=>{o.current&&H(o.current.offsetWidth+"px")},[o]);At({ref:o,onResize:S});let R=s.useMemo(()=>({isOpen:r.isOpen,isFocused:r.isFocused,isFocusVisible:m,isDisabled:e.isDisabled||!1,isInvalid:d.isInvalid||!1,isRequired:e.isRequired||!1}),[r.isOpen,r.isFocused,m,e.isDisabled,d.isInvalid,e.isRequired]),y=bt({...e,values:R,defaultClassName:"react-aria-Select"}),B=ce(e,{global:!0});delete B.id;let P=s.useRef(null);return g.createElement(Mt,{values:[[me,e],[k,r],[ht,M],[ut,{...x,ref:p,elementType:"span"}],[ct,{...h,ref:o,isPressed:r.isOpen,autoFocus:e.autoFocus}],[Bt,r],[Pt,{trigger:"Select",triggerRef:o,scrollRef:P,placement:"bottom start",style:{"--trigger-width":q},"aria-labelledby":w["aria-labelledby"],clearContexts:ya}],[qt,{...w,ref:P}],[Ht,r],[ue,{slots:{description:v,errorMessage:E}}],[wt,d]]},g.createElement("div",{...le(B,y,b),ref:t,slot:e.slot||void 0,"data-focused":r.isFocused||void 0,"data-focus-visible":m||void 0,"data-open":r.isOpen||void 0,"data-disabled":e.isDisabled||void 0,"data-invalid":d.isInvalid||void 0,"data-required":e.isRequired||void 0},y.children,g.createElement(ma,{...T,autoComplete:e.autoComplete})))}const ht=s.createContext(null),Va=Lt(function(t,a){var l;[t,a]=mt(t,a,ht);let i=s.useContext(k),{placeholder:u}=ft(me),c=i.selectedItems.map(v=>{var E;let T=(E=v.props)===null||E===void 0?void 0:E.children;return typeof T=="function"&&(T=T({isHovered:!1,isPressed:!1,isSelected:!1,isFocused:!1,isFocusVisible:!1,isDisabled:!1,selectionMode:"single",selectionBehavior:"toggle"})),T}),r=ua(),m=s.useMemo(()=>i.selectedItems.map(v=>v==null?void 0:v.textValue),[i.selectedItems]),b=i.selectionManager.selectionMode,o=s.useMemo(()=>{var v;return b==="single"?(v=m[0])!==null&&v!==void 0?v:"":r.format(m)},[b,r,m]),p=s.useMemo(()=>{if(b==="single")return c[0];let v=r.formatToParts(m);if(v.length===0)return null;let E=0;return v.map(T=>T.type==="element"?g.createElement(s.Fragment,{key:E},c[E++]):T.value)},[b,r,m,c]),V=Kt(ha($t),"react-aria-components");var x,h;let M=bt({...t,defaultChildren:(x=p??u)!==null&&x!==void 0?x:V.format("selectPlaceholder"),defaultClassName:"react-aria-SelectValue",values:{selectedItem:(h=(l=i.selectedItems[0])===null||l===void 0?void 0:l.value)!==null&&h!==void 0?h:null,selectedItems:s.useMemo(()=>i.selectedItems.map(v=>{var E;return(E=v.value)!==null&&E!==void 0?E:null}),[i.selectedItems]),selectedText:o,isPlaceholder:i.selectedItems.length===0,state:i}}),w=ce(t,{global:!0});return g.createElement("span",{ref:a,...w,...M,"data-placeholder":i.selectedItems.length===0||void 0},g.createElement(ue.Provider,{value:void 0},M.children))}),xa="_select_193ob_1",Ea="_triggerContainer_193ob_7",Sa="_trigger_193ob_7",Ta="_medium_193ob_27",Ma="_selectValue_193ob_69",wa="_selectValueTag_193ob_84",Ca="_clearButton_193ob_96",$a="_truncate_193ob_108",qa="_popover_193ob_145",Ha="_selectAll_193ob_171",Da="_tagGroup_193ob_225",$={select:xa,triggerContainer:Ea,trigger:Sa,medium:Ta,selectValue:Ma,selectValueTag:wa,clearButton:Ca,truncate:$a,popover:qa,selectAll:Ha,tagGroup:Da},Ba={clearAll:"Clear all",selectAll:"Select all",selectedItems:"Selected items",selected:"selected"},Pa={clearAll:"Rensa alla",selectAll:"Välj alla",selectedItems:"Valda objekt",selected:"valda"},te={en:Ba,sv:Pa},oe=({isClearable:e=!0,isDisabled:t,selectedItems:a,selectedText:l})=>{const i=ee(te),u=()=>a.length===1?l:`${a.length} ${i.format("selected")}`;return n.jsxs("div",{className:$.selectValueTag,"data-disabled":t||void 0,children:[n.jsx("span",{className:$.truncate,children:u()}),e&&n.jsx(La,{})]})};function La(){const e=g.useContext(k),t=ee(te),a=Yt(),l=()=>{a==null||a.focusFirst(),e==null||e.setValue(null)};return n.jsx(pt,{"aria-label":t.format("clearAll"),className:$.clearButton,onPress:l,slot:null,children:n.jsx(Qt,{width:20,height:20})})}try{oe.displayName="SelectValueTag",oe.__docgenInfo={description:"",displayName:"SelectValueTag",props:{defaultChildren:{defaultValue:null,description:"",name:"defaultChildren",required:!0,type:{name:"ReactNode"}},isPlaceholder:{defaultValue:null,description:`Whether the value is a placeholder.
@selector [data-placeholder]`,name:"isPlaceholder",required:!0,type:{name:"boolean"}},selectedItem:{defaultValue:null,description:`The object value of the first selected item.
@deprecated`,name:"selectedItem",required:!0,type:{name:"object | null"}},selectedItems:{defaultValue:null,description:"The object values of the currently selected items.",name:"selectedItems",required:!0,type:{name:"(T | null)[]"}},selectedText:{defaultValue:null,description:"The textValue of the currently selected items.",name:"selectedText",required:!0,type:{name:"string"}},state:{defaultValue:null,description:"The state of the select.",name:"state",required:!0,type:{name:'SelectState<T, "single" | "multiple">'}},isDisabled:{defaultValue:null,description:"Whether the input is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},isClearable:{defaultValue:{value:"true"},description:"",name:"isClearable",required:!1,type:{name:"boolean"}}}}}catch{}const se=({showTags:e,isDisabled:t})=>{const a=ee(te),l=s.useContext(k),i=u=>{l==null||l.selectionManager.toggleSelection(Array.from(u)[0])};return!(l!=null&&l.selectedItems.length)||!e?null:n.jsx(ta,{"aria-label":a.format("selectedItems"),className:$.tagGroup,onRemove:i,selectionBehavior:"toggle",children:n.jsx(aa,{items:l.selectedItems,children:u=>n.jsx(na,{dismissable:!0,id:u.key,isDisabled:t,textValue:u.textValue,children:u.textValue},u.key)})})};try{se.displayName="SelectTags",se.__docgenInfo={description:"",displayName:"SelectTags",props:{isDisabled:{defaultValue:null,description:"Whether the input is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},showTags:{defaultValue:null,description:"Show selected items as tags below select",name:"showTags",required:!1,type:{name:"boolean"}}}}}catch{}const de=e=>{const t=s.useContext(k),a=l=>{t==null||t.selectionManager.setSelectedKeys(l)};return n.jsx(la,{...e,escapeKeyBehavior:"none",onSelectionChange:a})};try{de.displayName="SelectListBox",de.__docgenInfo={description:"",displayName:"SelectListBox",props:{items:{defaultValue:null,description:"Item objects in the collection.",name:"items",required:!1,type:{name:"Iterable<T>"}},isVirtualized:{defaultValue:null,description:"Whether the listbox uses virtual scrolling.",name:"isVirtualized",required:!1,type:{name:"boolean"}},keyboardDelegate:{defaultValue:null,description:`An optional keyboard delegate implementation for type to select,
to override the default.`,name:"keyboardDelegate",required:!1,type:{name:"KeyboardDelegate"}},layoutDelegate:{defaultValue:null,description:`A delegate object that provides layout information for items in the collection.
By default this uses the DOM, but this can be overridden to implement things like
virtualized scrolling.`,name:"layoutDelegate",required:!1,type:{name:"LayoutDelegate"}},shouldUseVirtualFocus:{defaultValue:null,description:"Whether the listbox items should use virtual focus instead of being focused directly.",name:"shouldUseVirtualFocus",required:!1,type:{name:"boolean"}},linkBehavior:{defaultValue:{value:"'override'"},description:`The behavior of links in the collection.
- 'action': link behaves like onAction.
- 'selection': link follows selection interactions (e.g. if URL drives selection).
- 'override': links override all other interactions (link items are not selectable).`,name:"linkBehavior",required:!1,type:{name:"enum",value:[{value:'"selection"'},{value:'"action"'},{value:'"override"'}]}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}},autoFocus:{defaultValue:null,description:"Whether to auto focus the listbox or an option.",name:"autoFocus",required:!1,type:{name:"boolean | FocusStrategy"}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"Identifies the element (or elements) that provide a detailed, extended description for the object.",name:"aria-details",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element.",name:"aria-labelledby",required:!1,type:{name:"string"}},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",required:!1,type:{name:"((e: FocusEvent<Element, Element>) => void)"}},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",required:!1,type:{name:"((e: FocusEvent<Element, Element>) => void)"}},onFocusChange:{defaultValue:null,description:"Handler that is called when the element's focus status changes.",name:"onFocusChange",required:!1,type:{name:"((isFocused: boolean) => void)"}},label:{defaultValue:null,description:"An optional visual label for the listbox.",name:"label",required:!1,type:{name:"ReactNode"}},disallowEmptySelection:{defaultValue:null,description:"Whether the collection allows empty selection.",name:"disallowEmptySelection",required:!1,type:{name:"boolean"}},onSelectionChange:{defaultValue:null,description:"Handler that is called when the selection changes.",name:"onSelectionChange",required:!1,type:{name:"((keys: Selection) => void)"}},shouldFocusWrap:{defaultValue:null,description:"Whether focus should wrap around when the end/start is reached.",name:"shouldFocusWrap",required:!1,type:{name:"boolean"}},disabledKeys:{defaultValue:null,description:"The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with.",name:"disabledKeys",required:!1,type:{name:"Iterable<Key>"}},onAction:{defaultValue:null,description:"Handler that is called when a user performs an action on an item. The exact user event depends on\nthe collection's `selectionBehavior` prop and the interaction modality.",name:"onAction",required:!1,type:{name:"((key: Key) => void)"}},escapeKeyBehavior:{defaultValue:{value:"'clearSelection'"},description:`Whether pressing the escape key should clear selection in the listbox or not.

Most experiences should not modify this option as it eliminates a keyboard user's ability to
easily clear selection. Only use if the escape key is being handled externally or should not
trigger selection clearing contextually.`,name:"escapeKeyBehavior",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"clearSelection"'}]}},selectionMode:{defaultValue:null,description:"The type of selection that is allowed in the collection.",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"single"'},{value:'"multiple"'}]}},selectedKeys:{defaultValue:null,description:"The currently selected keys in the collection (controlled).",name:"selectedKeys",required:!1,type:{name:'Iterable<Key> | "all"'}},defaultSelectedKeys:{defaultValue:null,description:"The initial selected keys in the collection (uncontrolled).",name:"defaultSelectedKeys",required:!1,type:{name:'Iterable<Key> | "all"'}},shouldSelectOnPressUp:{defaultValue:null,description:"Whether selection should occur on press up instead of press down.",name:"shouldSelectOnPressUp",required:!1,type:{name:"boolean"}},selectionBehavior:{defaultValue:null,description:"How multiple selection should behave in the collection.",name:"selectionBehavior",required:!1,type:{name:"enum",value:[{value:'"toggle"'},{value:'"replace"'}]}},shouldFocusOnHover:{defaultValue:null,description:"Whether options should be focused when the user hovers over them.",name:"shouldFocusOnHover",required:!1,type:{name:"boolean"}}}}}catch{}const Ia=()=>{const e=g.useContext(k),t=ee(te),a=()=>e==null?void 0:e.setValue(e!=null&&e.selectionManager.isSelectAll?null:Array.from(e.collection.getKeys()));return n.jsx(ra,{className:$.selectAll,isIndeterminate:!(e!=null&&e.selectionManager.isSelectAll)&&!(e!=null&&e.selectionManager.isEmpty),isSelected:e==null?void 0:e.selectionManager.isSelectAll,onChange:a,children:t.format("selectAll")})};function F({label:e,description:t,errorMessage:a,children:l,items:i,popover:u,...c}){const{selectionMode:r="single",errorPosition:m="top",size:b="large"}=c,o=s.useRef(null);return n.jsx(Jt,{children:n.jsxs(va,{...c,className:$.select,children:[n.jsx(Zt,{popover:u,children:e&&n.jsx(ea,{"data-disabled":c.isDisabled||void 0,children:e})}),t&&n.jsx(sa,{slot:"description",children:t}),m==="top"&&n.jsx(be,{children:a}),n.jsxs("div",{className:$.triggerContainer,"data-disabled":c.isDisabled||void 0,children:[n.jsx(pt,{className:ia({[$.medium]:b==="medium"},$.trigger),ref:o,children:n.jsx("span",{"aria-hidden":"true",children:n.jsx(oa,{size:16})})}),n.jsx(Va,{className:`${$.selectValue} ${$.truncate}`,"data-disabled":c.isDisabled||void 0,children:p=>p.isPlaceholder||r==="single"?p.defaultChildren:n.jsx(oe,{...c,...p})})]}),m==="bottom"&&n.jsx(be,{children:a}),n.jsxs(da,{className:$.popover,offset:0,children:[c.isSelectableAll&&n.jsx(Ia,{}),n.jsx(de,{disallowEmptySelection:!c.isClearable,items:i,children:l})]}),n.jsx(se,{...c})]})})}try{F.displayName="RacSelect",F.__docgenInfo={description:"",displayName:"RacSelect",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string | ((validation: ValidationResult) => string)"}},items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"Iterable<T>"}},isClearable:{defaultValue:null,description:"",name:"isClearable",required:!1,type:{name:"boolean"}},popover:{defaultValue:null,description:"An assistive text that helps the user understand the field better. Will be hidden in a popover with an info icon button.",name:"popover",required:!1,type:{name:"InfoPopoverProps"}},errorPosition:{defaultValue:{value:'"top"'},description:"The position of the error message",name:"errorPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},showTags:{defaultValue:null,description:"Show selected items as tags below select",name:"showTags",required:!1,type:{name:"boolean"}},isSelectableAll:{defaultValue:null,description:"Whether to show a button to select all items.",name:"isSelectableAll",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"'large'"},description:"Component size (large: height 48px, medium: height 40px)",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'}]}},isDisabled:{defaultValue:null,description:"Whether the input is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"ClassNameOrFunction<SelectRenderProps>"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"StyleOrFunction<SelectRenderProps>"}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string | null"}},dir:{defaultValue:null,description:"",name:"dir",required:!1,type:{name:"string"}},lang:{defaultValue:null,description:"",name:"lang",required:!1,type:{name:"string"}},hidden:{defaultValue:null,description:"",name:"hidden",required:!1,type:{name:"boolean"}},inert:{defaultValue:null,description:"",name:"inert",required:!1,type:{name:"boolean"}},translate:{defaultValue:null,description:"",name:"translate",required:!1,type:{name:"enum",value:[{value:'"yes"'},{value:'"no"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onClickCapture:{defaultValue:null,description:"",name:"onClickCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onAuxClick:{defaultValue:null,description:"",name:"onAuxClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onAuxClickCapture:{defaultValue:null,description:"",name:"onAuxClickCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onContextMenu:{defaultValue:null,description:"",name:"onContextMenu",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onContextMenuCapture:{defaultValue:null,description:"",name:"onContextMenuCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onDoubleClick:{defaultValue:null,description:"",name:"onDoubleClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onDoubleClickCapture:{defaultValue:null,description:"",name:"onDoubleClickCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseDown:{defaultValue:null,description:"",name:"onMouseDown",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseDownCapture:{defaultValue:null,description:"",name:"onMouseDownCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseMove:{defaultValue:null,description:"",name:"onMouseMove",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseMoveCapture:{defaultValue:null,description:"",name:"onMouseMoveCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseOut:{defaultValue:null,description:"",name:"onMouseOut",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseOutCapture:{defaultValue:null,description:"",name:"onMouseOutCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseOver:{defaultValue:null,description:"",name:"onMouseOver",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseOverCapture:{defaultValue:null,description:"",name:"onMouseOverCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseUpCapture:{defaultValue:null,description:"",name:"onMouseUpCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onTouchCancel:{defaultValue:null,description:"",name:"onTouchCancel",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchCancelCapture:{defaultValue:null,description:"",name:"onTouchCancelCapture",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchEnd:{defaultValue:null,description:"",name:"onTouchEnd",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchEndCapture:{defaultValue:null,description:"",name:"onTouchEndCapture",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchMove:{defaultValue:null,description:"",name:"onTouchMove",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchMoveCapture:{defaultValue:null,description:"",name:"onTouchMoveCapture",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchStart:{defaultValue:null,description:"",name:"onTouchStart",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchStartCapture:{defaultValue:null,description:"",name:"onTouchStartCapture",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onPointerDown:{defaultValue:null,description:"",name:"onPointerDown",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerDownCapture:{defaultValue:null,description:"",name:"onPointerDownCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerMove:{defaultValue:null,description:"",name:"onPointerMove",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerMoveCapture:{defaultValue:null,description:"",name:"onPointerMoveCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerUp:{defaultValue:null,description:"",name:"onPointerUp",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerUpCapture:{defaultValue:null,description:"",name:"onPointerUpCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerCancel:{defaultValue:null,description:"",name:"onPointerCancel",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerCancelCapture:{defaultValue:null,description:"",name:"onPointerCancelCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerEnter:{defaultValue:null,description:"",name:"onPointerEnter",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerLeave:{defaultValue:null,description:"",name:"onPointerLeave",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerOver:{defaultValue:null,description:"",name:"onPointerOver",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerOverCapture:{defaultValue:null,description:"",name:"onPointerOverCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerOut:{defaultValue:null,description:"",name:"onPointerOut",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerOutCapture:{defaultValue:null,description:"",name:"onPointerOutCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onGotPointerCapture:{defaultValue:null,description:"",name:"onGotPointerCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onGotPointerCaptureCapture:{defaultValue:null,description:"",name:"onGotPointerCaptureCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onLostPointerCapture:{defaultValue:null,description:"",name:"onLostPointerCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onLostPointerCaptureCapture:{defaultValue:null,description:"",name:"onLostPointerCaptureCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onScroll:{defaultValue:null,description:"",name:"onScroll",required:!1,type:{name:"UIEventHandler<HTMLDivElement>"}},onScrollCapture:{defaultValue:null,description:"",name:"onScrollCapture",required:!1,type:{name:"UIEventHandler<HTMLDivElement>"}},onWheel:{defaultValue:null,description:"",name:"onWheel",required:!1,type:{name:"WheelEventHandler<HTMLDivElement>"}},onWheelCapture:{defaultValue:null,description:"",name:"onWheelCapture",required:!1,type:{name:"WheelEventHandler<HTMLDivElement>"}},onAnimationStart:{defaultValue:null,description:"",name:"onAnimationStart",required:!1,type:{name:"AnimationEventHandler<HTMLDivElement>"}},onAnimationStartCapture:{defaultValue:null,description:"",name:"onAnimationStartCapture",required:!1,type:{name:"AnimationEventHandler<HTMLDivElement>"}},onAnimationEnd:{defaultValue:null,description:"",name:"onAnimationEnd",required:!1,type:{name:"AnimationEventHandler<HTMLDivElement>"}},onAnimationEndCapture:{defaultValue:null,description:"",name:"onAnimationEndCapture",required:!1,type:{name:"AnimationEventHandler<HTMLDivElement>"}},onAnimationIteration:{defaultValue:null,description:"",name:"onAnimationIteration",required:!1,type:{name:"AnimationEventHandler<HTMLDivElement>"}},onAnimationIterationCapture:{defaultValue:null,description:"",name:"onAnimationIterationCapture",required:!1,type:{name:"AnimationEventHandler<HTMLDivElement>"}},onTransitionCancel:{defaultValue:null,description:"",name:"onTransitionCancel",required:!1,type:{name:"TransitionEventHandler<HTMLDivElement>"}},onTransitionCancelCapture:{defaultValue:null,description:"",name:"onTransitionCancelCapture",required:!1,type:{name:"TransitionEventHandler<HTMLDivElement>"}},onTransitionEnd:{defaultValue:null,description:"",name:"onTransitionEnd",required:!1,type:{name:"TransitionEventHandler<HTMLDivElement>"}},onTransitionEndCapture:{defaultValue:null,description:"",name:"onTransitionEndCapture",required:!1,type:{name:"TransitionEventHandler<HTMLDivElement>"}},onTransitionRun:{defaultValue:null,description:"",name:"onTransitionRun",required:!1,type:{name:"TransitionEventHandler<HTMLDivElement>"}},onTransitionRunCapture:{defaultValue:null,description:"",name:"onTransitionRunCapture",required:!1,type:{name:"TransitionEventHandler<HTMLDivElement>"}},onTransitionStart:{defaultValue:null,description:"",name:"onTransitionStart",required:!1,type:{name:"TransitionEventHandler<HTMLDivElement>"}},onTransitionStartCapture:{defaultValue:null,description:"",name:"onTransitionStartCapture",required:!1,type:{name:"TransitionEventHandler<HTMLDivElement>"}},defaultValue:{defaultValue:null,description:"The default value (uncontrolled).",name:"defaultValue",required:!1,type:{name:"Key | Key[] | null"}},autoFocus:{defaultValue:null,description:"Whether the element should receive focus on render.",name:"autoFocus",required:!1,type:{name:"boolean"}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"Identifies the element (or elements) that provide a detailed, extended description for the object.",name:"aria-details",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element.",name:"aria-labelledby",required:!1,type:{name:"string"}},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",required:!1,type:{name:"((e: FocusEvent<Element, Element>) => void)"}},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",required:!1,type:{name:"((e: FocusEvent<Element, Element>) => void)"}},onChange:{defaultValue:null,description:"Handler that is called when the value changes.",name:"onChange",required:!1,type:{name:"((value: ValueType<M>) => void)"}},onKeyDown:{defaultValue:null,description:"Handler that is called when a key is pressed.",name:"onKeyDown",required:!1,type:{name:"((e: KeyboardEvent) => void)"}},onKeyUp:{defaultValue:null,description:"Handler that is called when a key is released.",name:"onKeyUp",required:!1,type:{name:"((e: KeyboardEvent) => void)"}},form:{defaultValue:null,description:"The `<form>` element to associate the input with.\nThe value of this attribute must be the id of a `<form>` in the same document.\nSee [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#form).",name:"form",required:!1,type:{name:"string"}},onFocusChange:{defaultValue:null,description:"Handler that is called when the element's focus status changes.",name:"onFocusChange",required:!1,type:{name:"((isFocused: boolean) => void)"}},isInvalid:{defaultValue:null,description:"Whether the input value is invalid.",name:"isInvalid",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"The current value (controlled).",name:"value",required:!1,type:{name:"Key | Key[] | null"}},placeholder:{defaultValue:{value:"'Select an item' (localized)"},description:"Temporary text that occupies the select when it is empty.",name:"placeholder",required:!1,type:{name:"string"}},validationBehavior:{defaultValue:{value:"'native'"},description:`Whether to use native HTML form validation to prevent form submission
when the value is missing or invalid, or mark the field as required
or invalid via ARIA.`,name:"validationBehavior",required:!1,type:{name:"enum",value:[{value:'"native"'},{value:'"aria"'}]}},onSelectionChange:{defaultValue:null,description:`Handler that is called when the selection changes.
@deprecated`,name:"onSelectionChange",required:!1,type:{name:"((key: Key | null) => void)"}},selectedKey:{defaultValue:null,description:`The currently selected key in the collection (controlled).
@deprecated`,name:"selectedKey",required:!1,type:{name:"Key | null"}},defaultSelectedKey:{defaultValue:null,description:`The initial selected key in the collection (uncontrolled).
@deprecated`,name:"defaultSelectedKey",required:!1,type:{name:"Key"}},onOpenChange:{defaultValue:null,description:"Method that is called when the open state of the menu changes.",name:"onOpenChange",required:!1,type:{name:"((isOpen: boolean) => void)"}},disabledKeys:{defaultValue:null,description:"The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with.",name:"disabledKeys",required:!1,type:{name:"Iterable<Key>"}},isRequired:{defaultValue:null,description:"Whether user input is required on the input before form submission.",name:"isRequired",required:!1,type:{name:"boolean"}},validate:{defaultValue:null,description:'A function that returns an error message if a given value is invalid.\nValidation errors are displayed to the user when the form is submitted\nif `validationBehavior="native"`. For realtime validation, use the `isInvalid`\nprop instead.',name:"validate",required:!1,type:{name:"((value: ValidationType<M>) => true | ValidationError | null)"}},name:{defaultValue:null,description:"The name of the input, used when submitting an HTML form.",name:"name",required:!1,type:{name:"string"}},excludeFromTabOrder:{defaultValue:null,description:`Whether to exclude the element from the sequential tab order. If true,
the element will not be focusable via the keyboard by tabbing. This should
be avoided except in rare scenarios where an alternative means of accessing
the element or its functionality via the keyboard is available.`,name:"excludeFromTabOrder",required:!1,type:{name:"boolean"}},autoComplete:{defaultValue:null,description:"Describes the type of autocomplete functionality the input should provide if any. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautocomplete).",name:"autoComplete",required:!1,type:{name:"string"}},isOpen:{defaultValue:null,description:"Sets the open state of the menu.",name:"isOpen",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:null,description:"Sets the default open state of the menu.",name:"defaultOpen",required:!1,type:{name:"boolean"}},selectionMode:{defaultValue:{value:"'single'"},description:"Whether single or multiple selection is enabled.",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"single"'},{value:'"multiple"'}]}}}}}catch{}const{expect:C,fn:fe,spyOn:ka,userEvent:f,within:Aa}=__STORYBOOK_MODULE_TEST__,Ka=fe(),he=fe(),zn={component:F,title:"Components/RacSelect",tags:["autodocs"],args:{children:e=>n.jsx(D,{...e,children:e.name}),description:"Description",isClearable:!0,isDisabled:!1,isSelectableAll:!1,label:"Label",items:I,placeholder:"Select an option",selectionMode:"single",showTags:!1,errorPosition:"top",onSelectionChange:Ka,size:"large"}},_={args:{label:"label",description:"static",children:n.jsxs(n.Fragment,{children:[n.jsx(D,{children:"Hello"}),n.jsx(D,{children:"Goodbye"})]})}},L={play:async({args:e,canvas:t,step:a})=>{await a("It should be possible to select an item using the keyboard",async()=>{await f.tab(),await f.keyboard("[Space]"),await f.keyboard("[Space]");const l=t.getByText(I[0].name,{selector:"span"}),i=Aa(t.getByTestId("hidden-select-container")).getByDisplayValue(I[0].name);await C(i).toBeVisible(),await C(l).toBeVisible()}),await a("it should change size according to size prop",async()=>{await C(t.getByRole("button")).toHaveStyle({height:e.size==="large"?"48px":"40px"})})}},j={args:{description:"Kiwi and banana are pre-selected",defaultValue:["kiwi","banana"],selectionMode:"multiple"},play:async({canvas:e,step:t})=>{await t("It should display and reflect the pre-selected value",async()=>{await C(e.getByText("2 valda",{selector:"span"})).toBeVisible()})}},O={args:{selectionMode:"multiple",description:"All options are selected",defaultValue:I.map(({id:e})=>e)},play:async({canvas:e,step:t})=>{await t("It should display and reflect the pre-selected values",async()=>{await C(e.getByText(`${I.length} valda`,{selector:"span"})).toBeVisible()})}},W={parameters:{docs:{description:{story:"Avoid using disabled"}},a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}},args:{isDisabled:!0}},N={args:{description:"Kiwi is disabled",disabledKeys:["kiwi"]}},z={args:{isInvalid:!0,errorMessage:"Error msg"}},U={args:{selectionMode:"multiple",showTags:!0,defaultValue:["apple","kiwi"]},play:async({canvas:e,step:t})=>{await t("It should display and reflect the pre-selected values",async()=>{const a=e.getByText("2 valda",{selector:"span"});await C(a).toBeVisible(),await C(e.getByText("Apple",{selector:"div"})).toBeVisible(),await C(e.getByText("Kiwi",{selector:"div"})).toBeVisible()})}},G={args:{selectionMode:"multiple",isSelectableAll:!0},play:async({canvas:e,step:t})=>{await t("It should be possible to select all items",async()=>{await f.tab(),await f.keyboard("[Space]"),await f.tab({shift:!0}),await f.keyboard("[Space]"),await f.keyboard("[Escape]");const a=e.getByText(`${I.length} valda`,{selector:"span"});await C(a).toBeVisible()})}},K={args:{selectionMode:"multiple",isClearable:!1}},X={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{...L.args,selectionMode:"single",isClearable:!1,label:"Ärende",placeholder:"Välj ärende"},render:e=>{const[t,a]=s.useState(null);return n.jsx(F,{...e,value:t,onChange:a,items:[{id:"12",name:"tolv"},{id:"1",name:"ett"},{id:"2",name:"två"}]})},play:async({step:e,canvas:t})=>{await e("It should be possible to select an item with an ID greater than 9",async()=>{await f.tab(),await f.keyboard("[Space]"),await f.keyboard("[Space]");const a=t.getByText("tolv",{selector:"span"});await C(a).toBeVisible()})}},Y={args:{children:n.jsxs(n.Fragment,{children:[n.jsxs(ie,{children:[n.jsx(re,{children:"Fruit"}),n.jsx(D,{id:"Apple",children:"Apple"}),n.jsx(D,{id:"Banana",children:"Banana"})]}),n.jsxs(ie,{children:[n.jsx(re,{children:"Vegetables"}),n.jsx(D,{id:"Cabbage",children:"Cabbage"}),n.jsx(D,{id:"Broccoli",children:"Broccoli"})]})]})}},J={args:{...L.args,items:yt,children:e=>n.jsxs(ie,{id:e.name,children:[n.jsx(re,{children:e.name}),n.jsx(Vt,{items:e.children,children:t=>n.jsx(D,{id:t.id,children:t.name})})]})},play:async({step:e})=>{const t=ka(console,"warn").mockImplementation(fe());await e("It should not warn about missing aria labels when toggling the select open state",async()=>{await f.tab(),await f.keyboard("[Space]"),await f.keyboard("[Space]"),await C(t).toHaveBeenCalledTimes(0)})}},Q={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{selectionMode:"single",isRequired:!0},render:e=>n.jsxs("form",{onSubmit:t=>{t.preventDefault(),he()},children:[n.jsx(F,{...e}),n.jsx("button",{type:"submit",children:"submit"})]}),play:async({step:e})=>{await e("It should give a validation error if the user submitted without selecting an option",async()=>{await f.tab(),await f.tab(),await f.keyboard("[Enter]"),await C(he).not.toHaveBeenCalled()})}},Z={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{selectionMode:"multiple"},play:async({canvas:e,step:t})=>{await t("It should be possible to deselect all items to empty the selection",async()=>{await f.tab(),await f.keyboard("[Space]"),await f.keyboard("[Space]"),await f.keyboard("[Space]"),await f.keyboard("[Escape]");const a=e.getByText("Select an option",{selector:"span"});await C(a).toBeVisible()}),await t("It should be possible to press escape to exit the select without clearing the selections made",async()=>{await f.keyboard("[Space]"),await f.keyboard("[ArrowDown]"),await f.keyboard("[Space]"),await f.keyboard("[Escape]");const a=e.getByText("2 valda",{selector:"span"});await C(a).toBeVisible()})}};var ve,ye,ge;_.parameters={..._.parameters,docs:{...(ve=_.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    label: 'label',
    description: 'static',
    children: <>
        <ListBoxItem>Hello</ListBoxItem>
        <ListBoxItem>Goodbye</ListBoxItem>
      </>
  }
}`,...(ge=(ye=_.parameters)==null?void 0:ye.docs)==null?void 0:ge.source}}};var Ve,xe,Ee;L.parameters={...L.parameters,docs:{...(Ve=L.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas,
    step
  }) => {
    await step('It should be possible to select an item using the keyboard', async () => {
      await userEvent.tab();
      await userEvent.keyboard('[Space]');
      await userEvent.keyboard('[Space]');
      const visibleValue = canvas.getByText(options[0].name, {
        selector: 'span'
      });
      const hiddenValue = within(canvas.getByTestId('hidden-select-container')).getByDisplayValue(options[0].name);
      await expect(hiddenValue).toBeVisible();
      await expect(visibleValue).toBeVisible();
    });
    await step('it should change size according to size prop', async () => {
      await expect(canvas.getByRole('button')).toHaveStyle({
        height: args.size === 'large' ? '48px' : '40px'
      });
    });
  }
}`,...(Ee=(xe=L.parameters)==null?void 0:xe.docs)==null?void 0:Ee.source}}};var Se,Te,Me;j.parameters={...j.parameters,docs:{...(Se=j.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi and banana are pre-selected',
    defaultValue: ['kiwi', 'banana'],
    selectionMode: 'multiple'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('It should display and reflect the pre-selected value', async () => {
      await expect(canvas.getByText('2 valda', {
        selector: 'span'
      })).toBeVisible();
    });
  }
}`,...(Me=(Te=j.parameters)==null?void 0:Te.docs)==null?void 0:Me.source}}};var we,Ce,$e;O.parameters={...O.parameters,docs:{...(we=O.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    description: 'All options are selected',
    defaultValue: options.map(({
      id
    }) => id)
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('It should display and reflect the pre-selected values', async () => {
      await expect(canvas.getByText(\`\${options.length} valda\`, {
        selector: 'span'
      })).toBeVisible();
    });
  }
}`,...($e=(Ce=O.parameters)==null?void 0:Ce.docs)==null?void 0:$e.source}}};var qe,He,De;W.parameters={...W.parameters,docs:{...(qe=W.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Avoid using disabled'
      }
    },
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
  },
  args: {
    isDisabled: true
  }
}`,...(De=(He=W.parameters)==null?void 0:He.docs)==null?void 0:De.source}}};var Be,Pe,Le;N.parameters={...N.parameters,docs:{...(Be=N.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi is disabled',
    disabledKeys: ['kiwi']
  }
}`,...(Le=(Pe=N.parameters)==null?void 0:Pe.docs)==null?void 0:Le.source}}};var Ie,ke,Ae;z.parameters={...z.parameters,docs:{...(Ie=z.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Error msg'
  }
}`,...(Ae=(ke=z.parameters)==null?void 0:ke.docs)==null?void 0:Ae.source}}};var Ke,Fe,Re;U.parameters={...U.parameters,docs:{...(Ke=U.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    showTags: true,
    defaultValue: ['apple', 'kiwi']
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('It should display and reflect the pre-selected values', async () => {
      const visibleValue = canvas.getByText('2 valda', {
        selector: 'span'
      });
      await expect(visibleValue).toBeVisible();
      await expect(canvas.getByText('Apple', {
        selector: 'div'
      })).toBeVisible();
      await expect(canvas.getByText('Kiwi', {
        selector: 'div'
      })).toBeVisible();
    });
  }
}`,...(Re=(Fe=U.parameters)==null?void 0:Fe.docs)==null?void 0:Re.source}}};var _e,je,Oe;G.parameters={...G.parameters,docs:{...(_e=G.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    isSelectableAll: true
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('It should be possible to select all items', async () => {
      await userEvent.tab();
      await userEvent.keyboard('[Space]');
      await userEvent.tab({
        shift: true
      });
      await userEvent.keyboard('[Space]');
      await userEvent.keyboard('[Escape]');
      const visibleValue = canvas.getByText(\`\${options.length} valda\`, {
        selector: 'span'
      });
      await expect(visibleValue).toBeVisible();
    });
  }
}`,...(Oe=(je=G.parameters)==null?void 0:je.docs)==null?void 0:Oe.source}}};var We,Ne,ze,Ue,Ge;K.parameters={...K.parameters,docs:{...(We=K.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    isClearable: false
  }
}`,...(ze=(Ne=K.parameters)==null?void 0:Ne.docs)==null?void 0:ze.source},description:{story:"As default all options are clearable. `isClearable={false}` Experimental feature",...(Ge=(Ue=K.parameters)==null?void 0:Ue.docs)==null?void 0:Ge.description}}};var Xe,Ye,Je;X.parameters={...X.parameters,docs:{...(Xe=X.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    ...Normal.args,
    selectionMode: 'single',
    isClearable: false,
    label: 'Ärende',
    placeholder: 'Välj ärende'
  },
  render: args => {
    const [selectedKey, setSelectedKey] = useState<Key | null>(null);
    return <RacSelect {...args} value={selectedKey} onChange={setSelectedKey} items={[{
      id: '12',
      name: 'tolv'
    }, {
      id: '1',
      name: 'ett'
    }, {
      id: '2',
      name: 'två'
    }]} />;
  },
  play: async ({
    step,
    canvas
  }) => {
    await step('It should be possible to select an item with an ID greater than 9', async () => {
      await userEvent.tab();
      await userEvent.keyboard('[Space]');
      await userEvent.keyboard('[Space]');
      const visibleValue = canvas.getByText('tolv', {
        selector: 'span'
      });
      await expect(visibleValue).toBeVisible();
    });
  }
}`,...(Je=(Ye=X.parameters)==null?void 0:Ye.docs)==null?void 0:Je.source}}};var Qe,Ze,et;Y.parameters={...Y.parameters,docs:{...(Qe=Y.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  args: {
    children: <>
        <ListBoxSection>
          <ListBoxHeader>Fruit</ListBoxHeader>
          <ListBoxItem id='Apple'>Apple</ListBoxItem>
          <ListBoxItem id='Banana'>Banana</ListBoxItem>
        </ListBoxSection>
        <ListBoxSection>
          <ListBoxHeader>Vegetables</ListBoxHeader>
          <ListBoxItem id='Cabbage'>Cabbage</ListBoxItem>
          <ListBoxItem id='Broccoli'>Broccoli</ListBoxItem>
        </ListBoxSection>
      </>
  }
}`,...(et=(Ze=Y.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,at,nt;J.parameters={...J.parameters,docs:{...(tt=J.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    items: optionsWithSections,
    children: section => <ListBoxSection id={section.name}>
        <ListBoxHeader>{section.name}</ListBoxHeader>
        <Collection items={section.children}>
          {item => <ListBoxItem id={item.id}>{item.name}</ListBoxItem>}
        </Collection>
      </ListBoxSection>
  },
  play: async ({
    step
  }) => {
    const warn = spyOn(console, 'warn').mockImplementation(fn());
    await step('It should not warn about missing aria labels when toggling the select open state', async () => {
      await userEvent.tab();
      await userEvent.keyboard('[Space]');
      await userEvent.keyboard('[Space]');
      await expect(warn).toHaveBeenCalledTimes(0);
    });
  }
}`,...(nt=(at=J.parameters)==null?void 0:at.docs)==null?void 0:nt.source}}};var lt,it,rt;Q.parameters={...Q.parameters,docs:{...(lt=Q.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    selectionMode: 'single',
    isRequired: true
  },
  render: args => <form onSubmit={e => {
    e.preventDefault();
    onSubmit();
  }}>
      <RacSelect {...args} />
      <button type='submit'>submit</button>
    </form>,
  play: async ({
    step
  }) => {
    await step('It should give a validation error if the user submitted without selecting an option', async () => {
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.keyboard('[Enter]');
      await expect(onSubmit).not.toHaveBeenCalled();
    });
  }
}`,...(rt=(it=Q.parameters)==null?void 0:it.docs)==null?void 0:rt.source}}};var ot,st,dt;Z.parameters={...Z.parameters,docs:{...(ot=Z.parameters)==null?void 0:ot.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    selectionMode: 'multiple'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('It should be possible to deselect all items to empty the selection', async () => {
      await userEvent.tab();
      await userEvent.keyboard('[Space]');
      await userEvent.keyboard('[Space]');
      await userEvent.keyboard('[Space]');
      await userEvent.keyboard('[Escape]');
      const visibleValue = canvas.getByText(\`Select an option\`, {
        selector: 'span'
      });
      await expect(visibleValue).toBeVisible();
    });
    await step('It should be possible to press escape to exit the select without clearing the selections made', async () => {
      await userEvent.keyboard('[Space]');
      await userEvent.keyboard('[ArrowDown]');
      await userEvent.keyboard('[Space]');
      await userEvent.keyboard('[Escape]');
      const visibleValue = canvas.getByText(\`2 valda\`, {
        selector: 'span'
      });
      await expect(visibleValue).toBeVisible();
    });
  }
}`,...(dt=(st=Z.parameters)==null?void 0:st.docs)==null?void 0:dt.source}}};const Un=["StaticItems","Normal","DefaultValue","AllKeysSelected","Disabled","DisabledOption","Invalid","WithTags","SelectAllEnabled","NotClearable","DS872","StaticSections","DynamicSections","RequiredSingleSelect","MultiSelectTests"];export{O as AllKeysSelected,X as DS872,j as DefaultValue,W as Disabled,N as DisabledOption,J as DynamicSections,z as Invalid,Z as MultiSelectTests,L as Normal,K as NotClearable,Q as RequiredSingleSelect,G as SelectAllEnabled,_ as StaticItems,Y as StaticSections,U as WithTags,Un as __namedExportsOrder,zn as default};
