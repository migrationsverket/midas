import{c as ya,r as u,e as g,j as n,o as I,d as ga}from"./iframe-BHx1YXWT.js";import{d as Va,e as xa}from"./Collection-iui7dfCc.js";import{b as ca,d as pa,$ as ma}from"./Button-BJsTxf2v.js";import{b as le,e as Ea,l as Sa,$ as fa,h as ba,a as ha,i as Ta,j as Ma,k as wa}from"./utils-29UIY1wg.js";import{$ as $a,F as be}from"./FieldError-BXsnpUNU.js";import{a as Ca}from"./Form-D-Ok5EUn.js";import{$ as qa}from"./intlStrings-ZMTSFH_M.js";import{c as Ha,d as Da}from"./ListBox-nztoXh-M.js";import{r as Ba,h as Pa,i as La}from"./Dialog-BW4MiYZ9.js";import{$ as ue}from"./Text-D6pVMuSB.js";import{$ as Ia}from"./Hidden-Dgru8jFp.js";import{c as ce,i as ka,a as Aa}from"./useFocusRing-CsIuwnWD.js";import{$ as Ka}from"./useResizeObserver-Fs7oULbV.js";import{$ as Fa}from"./useLocalizedStringFormatter-BiDXxmQ0.js";import{b as _a,c as Ra,a as ja}from"./useFormValidation-Cvq1bStP.js";import{$ as Oa}from"./useListState-g6qP-leg.js";import{b as Wa}from"./OverlayArrow-B4rN5vbR.js";import{$ as Na}from"./useControlledState-C7-AYeSc.js";import{$ as za,a as Ua}from"./ListKeyboardDelegate-DNLwcBTF.js";import{i as Ga}from"./SelectionManager-BqnUqIox.js";import{$ as Xa}from"./useField-jbfqwj3n.js";import{a as Ya}from"./VisuallyHidden-kD9-x1RH.js";import{e as Ja,b as Qa}from"./SelectionIndicator-C7ltmrD2.js";import{a as Za,L as et}from"./Label-lQQVaKg-.js";import{c as he}from"./clsx-Ciqy0D92.js";import{C as at}from"./Checkbox-PF0JoLDD.js";import{u as ee}from"./useLocalizedStringFormatter-D6HO9f7D.js";import{X as tt}from"./x-DAqDNG4o.js";import{L as nt,b as D,a as ie,c as re}from"./ListBoxSection-CqMWQt3u.js";import{T as lt,$ as it,a as rt}from"./Tag-CdE3HZn7.js";import{C as ot}from"./chevron-down-B_DtTOKK.js";import{T as st}from"./Text-C0bq6qfz.js";import{P as dt}from"./Popover-DnmncS8b.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BIwPKOEo.js";import"./index-aBA6tMIv.js";import"./index-CCSYfR79.js";import"./useLabels-CJoncRX8.js";import"./useButton-DyST1Yei.js";import"./clsx-B-dksMZM.js";import"./DragAndDrop-CAQKgvRw.js";import"./getScrollParent-eF3PYYDs.js";import"./scrollIntoView-DOCxFP9m.js";import"./Separator-BvRMrgIo.js";import"./RSPContexts-CZl0imhg.js";import"./inertValue-CjYo2QG8.js";import"./PressResponder-DaeRahKa.js";import"./useEvent-dxH_m5jY.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useDescription-CeDrGSSb.js";import"./Button-CAmSTkoA.js";import"./Button.module-CcWMkJAG.js";import"./Heading-BWQsmN74.js";import"./info-spQdepjj.js";import"./createLucideIcon-YCOVWVp0.js";import"./useToggleState-C3Rg5Hw5.js";import"./Virtualizer-DirRr4k3.js";import"./useHighlightSelectionDescription-C8cmh6Ug.js";import"./useUpdateEffect-CceIM244.js";import"./useHasTabbableChild-D9bDHAPb.js";function ut(e={}){let{locale:a}=ya();return u.useMemo(()=>new Intl.ListFormat(a,e),[a,e])}const pe=new WeakMap;function ct(e,a,t){let{keyboardDelegate:l,isDisabled:i,isRequired:s,name:v,form:o,validationBehavior:r="aria"}=e,p=za({usage:"search",sensitivity:"base"}),c=u.useMemo(()=>l||new Ua(a.collection,a.disabledKeys,t,p),[l,a.collection,a.disabledKeys,p,t]),{menuTriggerProps:f,menuProps:V}=Ba({isDisabled:i,type:"listbox"},a,t),x=y=>{if(a.selectionManager.selectionMode!=="multiple")switch(y.key){case"ArrowLeft":{var B,P;y.preventDefault();let A=a.selectedKey!=null?(B=c.getKeyAbove)===null||B===void 0?void 0:B.call(c,a.selectedKey):(P=c.getFirstKey)===null||P===void 0?void 0:P.call(c);A&&a.setSelectedKey(A);break}case"ArrowRight":{var te,ne;y.preventDefault();let A=a.selectedKey!=null?(te=c.getKeyBelow)===null||te===void 0?void 0:te.call(c,a.selectedKey):(ne=c.getFirstKey)===null||ne===void 0?void 0:ne.call(c);A&&a.setSelectedKey(A);break}}},{typeSelectProps:b}=Ga({keyboardDelegate:c,selectionManager:a.selectionManager,onTypeSelect(y){a.setSelectedKey(y)}}),{isInvalid:M,validationErrors:w,validationDetails:h}=a.displayValidation,{labelProps:E,fieldProps:T,descriptionProps:d,errorMessageProps:q}=Xa({...e,labelElementType:"span",isInvalid:M,errorMessage:e.errorMessage||w});b.onKeyDown=b.onKeyDownCapture,delete b.onKeyDownCapture,a.selectionManager.selectionMode==="multiple"&&(b={});let H=ce(e,{labelable:!0}),S=le(b,f,T),_=Ea();return pe.set(a,{isDisabled:i,isRequired:s,name:v,form:o,validationBehavior:r}),{labelProps:{...E,onClick:()=>{if(!e.isDisabled){var y;(y=t.current)===null||y===void 0||y.focus(),ka("keyboard")}}},triggerProps:le(H,{...S,isDisabled:i,onKeyDown:Sa(S.onKeyDown,x,e.onKeyDown),onKeyUp:e.onKeyUp,"aria-labelledby":[_,S["aria-labelledby"],S["aria-label"]&&!S["aria-labelledby"]?S.id:null].filter(Boolean).join(" "),onFocus(y){a.isFocused||(e.onFocus&&e.onFocus(y),e.onFocusChange&&e.onFocusChange(!0),a.setFocused(!0))},onBlur(y){a.isOpen||(e.onBlur&&e.onBlur(y),e.onFocusChange&&e.onFocusChange(!1),a.setFocused(!1))}}),valueProps:{id:_},menuProps:{...V,autoFocus:a.focusStrategy||!0,shouldSelectOnPressUp:!0,shouldFocusOnHover:!0,disallowEmptySelection:!0,linkBehavior:"selection",onBlur:y=>{y.currentTarget.contains(y.relatedTarget)||(e.onBlur&&e.onBlur(y),e.onFocusChange&&e.onFocusChange(!1),a.setFocused(!1))},"aria-labelledby":[T["aria-labelledby"],S["aria-label"]&&!T["aria-labelledby"]?S.id:null].filter(Boolean).join(" ")},descriptionProps:d,errorMessageProps:q,isInvalid:M,validationErrors:w,validationDetails:h,hiddenSelectProps:{isDisabled:i,name:v,label:e.label,state:a,triggerRef:t,form:o}}}function pt(e,a,t){let l=pe.get(a)||{},{autoComplete:i,name:s=l.name,form:v=l.form,isDisabled:o=l.isDisabled}=e,{validationBehavior:r,isRequired:p}=l,{visuallyHiddenProps:c}=Ya({style:{position:"fixed",top:0,left:0}});_a(e.selectRef,a.defaultValue,a.setValue),Ra({validationBehavior:r,focus:()=>{var b;return(b=t.current)===null||b===void 0?void 0:b.focus()}},a,e.selectRef);let f=a.setValue,V=u.useCallback(b=>{b.target.multiple?f(Array.from(b.target.selectedOptions,M=>M.value)):f(b.currentTarget.value)},[f]);var x;return{containerProps:{...c,"aria-hidden":!0,"data-react-aria-prevent-focus":!0,"data-a11y-ignore":"aria-hidden-focus"},inputProps:{style:{display:"none"}},selectProps:{tabIndex:-1,autoComplete:i,disabled:o,multiple:a.selectionManager.selectionMode==="multiple",required:r==="native"&&p,name:s,form:v,value:(x=a.value)!==null&&x!==void 0?x:"",onChange:V,onInput:V}}}function mt(e){let{state:a,triggerRef:t,label:l,name:i,form:s,isDisabled:v}=e,o=u.useRef(null),r=u.useRef(null),{containerProps:p,selectProps:c}=pt({...e,selectRef:a.collection.size<=300?o:r},a,t);if(a.collection.size<=300)return g.createElement("div",{...p,"data-testid":"hidden-select-container"},g.createElement("label",null,l,g.createElement("select",{...c,ref:o},g.createElement("option",null),[...a.collection.getKeys()].map(f=>{let V=a.collection.getItem(f);if(V&&V.type==="item")return g.createElement("option",{key:V.key,value:V.key},V.textValue)}))));if(i){let f=pe.get(a)||{},{validationBehavior:V}=f,x=Array.isArray(a.value)?a.value:[a.value];x.length===0&&(x=[null]);let b=x.map((M,w)=>{let h={type:"hidden",autoComplete:c.autoComplete,name:i,form:s,disabled:v,value:M??""};return V==="native"?g.createElement("input",{key:w,...h,ref:w===0?r:null,style:{display:"none"},type:"text",required:w===0?c.required:!1,onChange:()=>{}}):g.createElement("input",{key:w,...h,ref:w===0?r:null})});return g.createElement(g.Fragment,null,b)}return null}function ft(e){let{selectionMode:a="single"}=e,t=Wa(e),[l,i]=u.useState(null),s=u.useMemo(()=>{var d;return e.defaultValue!==void 0?e.defaultValue:a==="single"?(d=e.defaultSelectedKey)!==null&&d!==void 0?d:null:[]},[e.defaultValue,e.defaultSelectedKey,a]),v=u.useMemo(()=>e.value!==void 0?e.value:a==="single"?e.selectedKey:void 0,[e.value,e.selectedKey,a]),[o,r]=Na(v,s,e.onChange),p=a==="single"&&Array.isArray(o)?o[0]:o,c=d=>{if(a==="single"){var q,H;let S=Array.isArray(d)?(H=d[0])!==null&&H!==void 0?H:null:d;r(S),S!==p&&((q=e.onSelectionChange)===null||q===void 0||q.call(e,S))}else{let S=[];Array.isArray(d)?S=d:d!=null&&(S=[d]),r(S)}},f=Oa({...e,selectionMode:a,disallowEmptySelection:a==="single",allowDuplicateSelectionEvents:!0,selectedKeys:u.useMemo(()=>bt(p),[p]),onSelectionChange:d=>{if(d!=="all"){if(a==="single"){var q;let H=(q=d.values().next().value)!==null&&q!==void 0?q:null;c(H),t.close()}else c([...d]);b.commitValidation()}}}),V=f.selectionManager.firstSelectedKey,x=u.useMemo(()=>[...f.selectionManager.selectedKeys].map(d=>f.collection.getItem(d)).filter(d=>d!=null),[f.selectionManager.selectedKeys,f.collection]),b=ja({...e,value:Array.isArray(p)&&p.length===0?null:p}),[M,w]=u.useState(!1),[h]=u.useState(p);var E,T;return{...b,...f,...t,value:p,defaultValue:s??h,setValue:c,selectedKey:V,setSelectedKey:c,selectedItem:(E=x[0])!==null&&E!==void 0?E:null,selectedItems:x,defaultSelectedKey:(T=e.defaultSelectedKey)!==null&&T!==void 0?T:e.selectionMode==="single"?h:null,focusStrategy:l,open(d=null){f.collection.size!==0&&(i(d),t.open())},toggle(d=null){f.collection.size!==0&&(i(d),t.toggle())},isFocused:M,setFocused:w}}function bt(e){if(e!==void 0)return e===null?[]:Array.isArray(e)?e:[e]}function ht(e){return e&&e.__esModule?e.default:e}const me=u.createContext(null),k=u.createContext(null),vt=u.forwardRef(function(a,t){[a,t]=fa(a,t,me);let{children:l,isDisabled:i=!1,isInvalid:s=!1,isRequired:v=!1}=a,o=u.useMemo(()=>typeof l=="function"?l({isOpen:!1,isDisabled:i,isInvalid:s,isRequired:v,isFocused:!1,isFocusVisible:!1,defaultChildren:null}):l,[l,i,s,v]);return g.createElement(Va,{content:o},r=>g.createElement(gt,{props:a,collection:r,selectRef:t}))}),yt=[ca,pa,ue];function gt({props:e,selectRef:a,collection:t}){let{validationBehavior:l}=ba(Ca)||{};var i,s;let v=(s=(i=e.validationBehavior)!==null&&i!==void 0?i:l)!==null&&s!==void 0?s:"native",o=ft({...e,collection:t,children:void 0,validationBehavior:v}),{isFocusVisible:r,focusProps:p}=Aa({within:!0}),c=u.useRef(null),[f,V]=Ta(!e["aria-label"]&&!e["aria-labelledby"]),{labelProps:x,triggerProps:b,valueProps:M,menuProps:w,descriptionProps:h,errorMessageProps:E,hiddenSelectProps:T,...d}=ct({...Ma(e),label:V,validationBehavior:v},o,c),[q,H]=u.useState(null),S=u.useCallback(()=>{c.current&&H(c.current.offsetWidth+"px")},[c]);Ka({ref:c,onResize:S});let _=u.useMemo(()=>({isOpen:o.isOpen,isFocused:o.isFocused,isFocusVisible:r,isDisabled:e.isDisabled||!1,isInvalid:d.isInvalid||!1,isRequired:e.isRequired||!1}),[o.isOpen,o.isFocused,r,e.isDisabled,d.isInvalid,e.isRequired]),y=ha({...e,values:_,defaultClassName:"react-aria-Select"}),B=ce(e,{global:!0});delete B.id;let P=u.useRef(null);return g.createElement(wa,{values:[[me,e],[k,o],[va,M],[ca,{...x,ref:f,elementType:"span"}],[pa,{...b,ref:c,isPressed:o.isOpen,autoFocus:e.autoFocus}],[Pa,o],[La,{trigger:"Select",triggerRef:c,scrollRef:P,placement:"bottom start",style:{"--trigger-width":q},"aria-labelledby":w["aria-labelledby"],clearContexts:yt}],[Ha,{...w,ref:P}],[Da,o],[ue,{slots:{description:h,errorMessage:E}}],[$a,d]]},g.createElement("div",{...le(B,y,p),ref:a,slot:e.slot||void 0,"data-focused":o.isFocused||void 0,"data-focus-visible":r||void 0,"data-open":o.isOpen||void 0,"data-disabled":e.isDisabled||void 0,"data-invalid":d.isInvalid||void 0,"data-required":e.isRequired||void 0},y.children,g.createElement(mt,{...T,autoComplete:e.autoComplete})))}const va=u.createContext(null),Vt=Ia(function(a,t){var l;[a,t]=fa(a,t,va);let i=u.useContext(k),{placeholder:s}=ba(me),v=i.selectedItems.map(h=>{var E;let T=(E=h.props)===null||E===void 0?void 0:E.children;return typeof T=="function"&&(T=T({isHovered:!1,isPressed:!1,isSelected:!1,isFocused:!1,isFocusVisible:!1,isDisabled:!1,selectionMode:"single",selectionBehavior:"toggle"})),T}),o=ut(),r=u.useMemo(()=>i.selectedItems.map(h=>h==null?void 0:h.textValue),[i.selectedItems]),p=i.selectionManager.selectionMode,c=u.useMemo(()=>{var h;return p==="single"?(h=r[0])!==null&&h!==void 0?h:"":o.format(r)},[p,o,r]),f=u.useMemo(()=>{if(p==="single")return v[0];let h=o.formatToParts(r);if(h.length===0)return null;let E=0;return h.map(T=>T.type==="element"?g.createElement(u.Fragment,{key:E},v[E++]):T.value)},[p,o,r,v]),V=Fa(ht(qa),"react-aria-components");var x,b;let M=ha({...a,defaultChildren:(x=f??s)!==null&&x!==void 0?x:V.format("selectPlaceholder"),defaultClassName:"react-aria-SelectValue",values:{selectedItem:(b=(l=i.selectedItems[0])===null||l===void 0?void 0:l.value)!==null&&b!==void 0?b:null,selectedItems:u.useMemo(()=>i.selectedItems.map(h=>{var E;return(E=h.value)!==null&&E!==void 0?E:null}),[i.selectedItems]),selectedText:c,isPlaceholder:i.selectedItems.length===0,state:i}}),w=ce(a,{global:!0});return g.createElement("span",{ref:t,...w,...M,"data-placeholder":i.selectedItems.length===0||void 0},g.createElement(ue.Provider,{value:void 0},M.children))}),xt={clearAll:"Clear all",selectAll:"Select all",selectedItems:"Selected items",selected:"selected"},Et={clearAll:"Rensa alla",selectAll:"Välj alla",selectedItems:"Valda objekt",selected:"valda"},ae={en:xt,sv:Et},St="_select_193ob_1",Tt="_triggerContainer_193ob_7",Mt="_trigger_193ob_7",wt="_medium_193ob_27",$t="_selectValue_193ob_69",Ct="_selectValueTag_193ob_84",qt="_clearButton_193ob_96",Ht="_truncate_193ob_108",Dt="_popover_193ob_145",Bt="_selectAll_193ob_171",Pt="_tagGroup_193ob_225",C={select:St,triggerContainer:Tt,trigger:Mt,medium:wt,selectValue:$t,selectValueTag:Ct,clearButton:qt,truncate:Ht,popover:Dt,selectAll:Bt,tagGroup:Pt},Lt=()=>{const e=g.useContext(k),a=ee(ae),t=()=>e==null?void 0:e.setValue(e!=null&&e.selectionManager.isSelectAll?null:Array.from(e.collection.getKeys()));return n.jsx(at,{className:C.selectAll,isIndeterminate:!(e!=null&&e.selectionManager.isSelectAll)&&!(e!=null&&e.selectionManager.isEmpty),isSelected:e==null?void 0:e.selectionManager.isSelectAll,onChange:t,children:a.format("selectAll")})},oe=({isClearable:e=!0,isDisabled:a,selectedItems:t,selectedText:l})=>{const i=ee(ae),s=()=>t.length===1?l:`${t.length} ${i.format("selected")}`;return n.jsxs("div",{className:C.selectValueTag,"data-disabled":a||void 0,children:[n.jsx("span",{className:C.truncate,children:s()}),e&&n.jsx(It,{})]})},It=()=>{const e=g.useContext(k),a=ee(ae),t=Ja(),l=()=>{t==null||t.focusFirst(),e==null||e.setValue(null)};return n.jsx(ma,{"aria-label":a.format("clearAll"),className:C.clearButton,onPress:l,slot:null,children:n.jsx(tt,{width:20,height:20})})};try{oe.displayName="SelectValueTag",oe.__docgenInfo={description:"",displayName:"SelectValueTag",props:{isPlaceholder:{defaultValue:null,description:`Whether the value is a placeholder.
@selector [data-placeholder]`,name:"isPlaceholder",required:!0,type:{name:"boolean"}},selectedItem:{defaultValue:null,description:`The object value of the first selected item.
@deprecated`,name:"selectedItem",required:!0,type:{name:"object | null"}},selectedItems:{defaultValue:null,description:"The object values of the currently selected items.",name:"selectedItems",required:!0,type:{name:"(T | null)[]"}},selectedText:{defaultValue:null,description:"The textValue of the currently selected items.",name:"selectedText",required:!0,type:{name:"string"}},state:{defaultValue:null,description:"The state of the select.",name:"state",required:!0,type:{name:'SelectState<T, "single" | "multiple">'}},isDisabled:{defaultValue:null,description:"Whether the input is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},isClearable:{defaultValue:{value:"true"},description:"",name:"isClearable",required:!1,type:{name:"boolean"}}}}}catch{}const se=e=>{const a=u.useContext(k),t=l=>{a==null||a.selectionManager.setSelectedKeys(l)};return n.jsx(nt,{...e,escapeKeyBehavior:"none",onSelectionChange:t})};try{se.displayName="SelectListBox",se.__docgenInfo={description:"",displayName:"SelectListBox",props:{items:{defaultValue:null,description:"Item objects in the collection.",name:"items",required:!1,type:{name:"Iterable<T>"}},isVirtualized:{defaultValue:null,description:"Whether the listbox uses virtual scrolling.",name:"isVirtualized",required:!1,type:{name:"boolean"}},keyboardDelegate:{defaultValue:null,description:`An optional keyboard delegate implementation for type to select,
to override the default.`,name:"keyboardDelegate",required:!1,type:{name:"KeyboardDelegate"}},layoutDelegate:{defaultValue:null,description:`A delegate object that provides layout information for items in the collection.
By default this uses the DOM, but this can be overridden to implement things like
virtualized scrolling.`,name:"layoutDelegate",required:!1,type:{name:"LayoutDelegate"}},shouldUseVirtualFocus:{defaultValue:null,description:"Whether the listbox items should use virtual focus instead of being focused directly.",name:"shouldUseVirtualFocus",required:!1,type:{name:"boolean"}},linkBehavior:{defaultValue:{value:"'override'"},description:`The behavior of links in the collection.
- 'action': link behaves like onAction.
- 'selection': link follows selection interactions (e.g. if URL drives selection).
- 'override': links override all other interactions (link items are not selectable).`,name:"linkBehavior",required:!1,type:{name:"enum",value:[{value:'"selection"'},{value:'"action"'},{value:'"override"'}]}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}},autoFocus:{defaultValue:null,description:"Whether to auto focus the listbox or an option.",name:"autoFocus",required:!1,type:{name:"boolean | FocusStrategy"}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"Identifies the element (or elements) that provide a detailed, extended description for the object.",name:"aria-details",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element.",name:"aria-labelledby",required:!1,type:{name:"string"}},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",required:!1,type:{name:"((e: FocusEvent<Element, Element>) => void)"}},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",required:!1,type:{name:"((e: FocusEvent<Element, Element>) => void)"}},disabledKeys:{defaultValue:null,description:"The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with.",name:"disabledKeys",required:!1,type:{name:"Iterable<Key>"}},onAction:{defaultValue:null,description:"Handler that is called when a user performs an action on an item. The exact user event depends on\nthe collection's `selectionBehavior` prop and the interaction modality.",name:"onAction",required:!1,type:{name:"((key: Key) => void)"}},onFocusChange:{defaultValue:null,description:"Handler that is called when the element's focus status changes.",name:"onFocusChange",required:!1,type:{name:"((isFocused: boolean) => void)"}},label:{defaultValue:null,description:"An optional visual label for the listbox.",name:"label",required:!1,type:{name:"ReactNode"}},disallowEmptySelection:{defaultValue:null,description:"Whether the collection allows empty selection.",name:"disallowEmptySelection",required:!1,type:{name:"boolean"}},onSelectionChange:{defaultValue:null,description:"Handler that is called when the selection changes.",name:"onSelectionChange",required:!1,type:{name:"((keys: Selection) => void)"}},shouldFocusWrap:{defaultValue:null,description:"Whether focus should wrap around when the end/start is reached.",name:"shouldFocusWrap",required:!1,type:{name:"boolean"}},escapeKeyBehavior:{defaultValue:{value:"'clearSelection'"},description:`Whether pressing the escape key should clear selection in the listbox or not.

Most experiences should not modify this option as it eliminates a keyboard user's ability to
easily clear selection. Only use if the escape key is being handled externally or should not
trigger selection clearing contextually.`,name:"escapeKeyBehavior",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"clearSelection"'}]}},selectionMode:{defaultValue:null,description:"The type of selection that is allowed in the collection.",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"single"'},{value:'"multiple"'}]}},selectedKeys:{defaultValue:null,description:"The currently selected keys in the collection (controlled).",name:"selectedKeys",required:!1,type:{name:'Iterable<Key> | "all"'}},defaultSelectedKeys:{defaultValue:null,description:"The initial selected keys in the collection (uncontrolled).",name:"defaultSelectedKeys",required:!1,type:{name:'Iterable<Key> | "all"'}},selectionBehavior:{defaultValue:null,description:"How multiple selection should behave in the collection.",name:"selectionBehavior",required:!1,type:{name:"enum",value:[{value:'"toggle"'},{value:'"replace"'}]}},shouldSelectOnPressUp:{defaultValue:null,description:"Whether selection should occur on press up instead of press down.",name:"shouldSelectOnPressUp",required:!1,type:{name:"boolean"}},shouldFocusOnHover:{defaultValue:null,description:"Whether options should be focused when the user hovers over them.",name:"shouldFocusOnHover",required:!1,type:{name:"boolean"}}}}}catch{}const de=({showTags:e,isDisabled:a})=>{const t=ee(ae),l=u.useContext(k),i=s=>{l==null||l.selectionManager.toggleSelection(Array.from(s)[0])};return!(l!=null&&l.selectedItems.length)||!e?null:n.jsx(lt,{"aria-label":t.format("selectedItems"),className:C.tagGroup,onRemove:i,selectionBehavior:"toggle",children:n.jsx(it,{items:l.selectedItems,children:s=>n.jsx(rt,{dismissable:!0,id:s.key,isDisabled:a,textValue:s.textValue,children:s.textValue},s.key)})})};try{de.displayName="SelectTags",de.__docgenInfo={description:"",displayName:"SelectTags",props:{isDisabled:{defaultValue:null,description:"Whether the input is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},showTags:{defaultValue:null,description:"Show selected items as tags below select",name:"showTags",required:!1,type:{name:"boolean"}}}}}catch{}function F({children:e,description:a,errorMessage:t,errorPosition:l="top",items:i,label:s,popover:v,size:o="large",...r}){return n.jsx(Qa,{children:n.jsxs(vt,{...r,className:he(r.className,C.select),children:[n.jsx(Za,{popover:v,children:s&&n.jsx(et,{"data-disabled":r.isDisabled||void 0,children:s})}),a&&n.jsx(st,{slot:"description",children:a}),l==="top"&&n.jsx(be,{children:t}),n.jsxs("div",{className:C.triggerContainer,"data-disabled":r.isDisabled||void 0,children:[n.jsx(ma,{className:he({[C.medium]:o==="medium"},C.trigger),children:n.jsx("span",{"aria-hidden":"true",children:n.jsx(ot,{size:16})})}),n.jsx(Vt,{className:`${C.selectValue} ${C.truncate}`,"data-disabled":r.isDisabled||void 0,children:p=>p.isPlaceholder||r.selectionMode!=="multiple"?p.defaultChildren:n.jsx(oe,{...r,...p})})]}),l==="bottom"&&n.jsx(be,{children:t}),n.jsxs(dt,{className:C.popover,offset:0,children:[r.isSelectableAll&&n.jsx(Lt,{}),n.jsx(se,{disallowEmptySelection:!r.isClearable,items:i,children:e})]}),n.jsx(de,{...r})]})})}try{F.displayName="RacSelect",F.__docgenInfo={description:"",displayName:"RacSelect",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string | ((validation: ValidationResult) => string)"}},errorPosition:{defaultValue:{value:"top"},description:"The position of the error message",name:"errorPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},isClearable:{defaultValue:null,description:"",name:"isClearable",required:!1,type:{name:"boolean"}},isSelectableAll:{defaultValue:null,description:"Whether to show a button to select all items.",name:"isSelectableAll",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"Iterable<T>"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},popover:{defaultValue:null,description:"An assistive text that helps the user understand the field better. Will be hidden in a popover with an info icon button.",name:"popover",required:!1,type:{name:"InfoPopoverProps"}},showTags:{defaultValue:null,description:"Show selected items as tags below select",name:"showTags",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"large"},description:"Component size (large: height 48px, medium: height 40px)",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'}]}},isDisabled:{defaultValue:null,description:"Whether the input is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"ClassNameOrFunction<SelectRenderProps>"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"StyleOrFunction<SelectRenderProps>"}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}},dir:{defaultValue:null,description:"",name:"dir",required:!1,type:{name:"string"}},lang:{defaultValue:null,description:"",name:"lang",required:!1,type:{name:"string"}},hidden:{defaultValue:null,description:"",name:"hidden",required:!1,type:{name:"boolean"}},inert:{defaultValue:null,description:"",name:"inert",required:!1,type:{name:"boolean"}},translate:{defaultValue:null,description:"",name:"translate",required:!1,type:{name:"enum",value:[{value:'"yes"'},{value:'"no"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onClickCapture:{defaultValue:null,description:"",name:"onClickCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onAuxClick:{defaultValue:null,description:"",name:"onAuxClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onAuxClickCapture:{defaultValue:null,description:"",name:"onAuxClickCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onContextMenu:{defaultValue:null,description:"",name:"onContextMenu",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onContextMenuCapture:{defaultValue:null,description:"",name:"onContextMenuCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onDoubleClick:{defaultValue:null,description:"",name:"onDoubleClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onDoubleClickCapture:{defaultValue:null,description:"",name:"onDoubleClickCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseDown:{defaultValue:null,description:"",name:"onMouseDown",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseDownCapture:{defaultValue:null,description:"",name:"onMouseDownCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseMove:{defaultValue:null,description:"",name:"onMouseMove",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseMoveCapture:{defaultValue:null,description:"",name:"onMouseMoveCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseOut:{defaultValue:null,description:"",name:"onMouseOut",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseOutCapture:{defaultValue:null,description:"",name:"onMouseOutCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseOver:{defaultValue:null,description:"",name:"onMouseOver",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseOverCapture:{defaultValue:null,description:"",name:"onMouseOverCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseUpCapture:{defaultValue:null,description:"",name:"onMouseUpCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onTouchCancel:{defaultValue:null,description:"",name:"onTouchCancel",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchCancelCapture:{defaultValue:null,description:"",name:"onTouchCancelCapture",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchEnd:{defaultValue:null,description:"",name:"onTouchEnd",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchEndCapture:{defaultValue:null,description:"",name:"onTouchEndCapture",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchMove:{defaultValue:null,description:"",name:"onTouchMove",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchMoveCapture:{defaultValue:null,description:"",name:"onTouchMoveCapture",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchStart:{defaultValue:null,description:"",name:"onTouchStart",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchStartCapture:{defaultValue:null,description:"",name:"onTouchStartCapture",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onPointerDown:{defaultValue:null,description:"",name:"onPointerDown",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerDownCapture:{defaultValue:null,description:"",name:"onPointerDownCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerMove:{defaultValue:null,description:"",name:"onPointerMove",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerMoveCapture:{defaultValue:null,description:"",name:"onPointerMoveCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerUp:{defaultValue:null,description:"",name:"onPointerUp",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerUpCapture:{defaultValue:null,description:"",name:"onPointerUpCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerCancel:{defaultValue:null,description:"",name:"onPointerCancel",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerCancelCapture:{defaultValue:null,description:"",name:"onPointerCancelCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerEnter:{defaultValue:null,description:"",name:"onPointerEnter",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerLeave:{defaultValue:null,description:"",name:"onPointerLeave",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerOver:{defaultValue:null,description:"",name:"onPointerOver",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerOverCapture:{defaultValue:null,description:"",name:"onPointerOverCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerOut:{defaultValue:null,description:"",name:"onPointerOut",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerOutCapture:{defaultValue:null,description:"",name:"onPointerOutCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onGotPointerCapture:{defaultValue:null,description:"",name:"onGotPointerCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onGotPointerCaptureCapture:{defaultValue:null,description:"",name:"onGotPointerCaptureCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onLostPointerCapture:{defaultValue:null,description:"",name:"onLostPointerCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onLostPointerCaptureCapture:{defaultValue:null,description:"",name:"onLostPointerCaptureCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onScroll:{defaultValue:null,description:"",name:"onScroll",required:!1,type:{name:"UIEventHandler<HTMLDivElement>"}},onScrollCapture:{defaultValue:null,description:"",name:"onScrollCapture",required:!1,type:{name:"UIEventHandler<HTMLDivElement>"}},onWheel:{defaultValue:null,description:"",name:"onWheel",required:!1,type:{name:"WheelEventHandler<HTMLDivElement>"}},onWheelCapture:{defaultValue:null,description:"",name:"onWheelCapture",required:!1,type:{name:"WheelEventHandler<HTMLDivElement>"}},onAnimationStart:{defaultValue:null,description:"",name:"onAnimationStart",required:!1,type:{name:"AnimationEventHandler<HTMLDivElement>"}},onAnimationStartCapture:{defaultValue:null,description:"",name:"onAnimationStartCapture",required:!1,type:{name:"AnimationEventHandler<HTMLDivElement>"}},onAnimationEnd:{defaultValue:null,description:"",name:"onAnimationEnd",required:!1,type:{name:"AnimationEventHandler<HTMLDivElement>"}},onAnimationEndCapture:{defaultValue:null,description:"",name:"onAnimationEndCapture",required:!1,type:{name:"AnimationEventHandler<HTMLDivElement>"}},onAnimationIteration:{defaultValue:null,description:"",name:"onAnimationIteration",required:!1,type:{name:"AnimationEventHandler<HTMLDivElement>"}},onAnimationIterationCapture:{defaultValue:null,description:"",name:"onAnimationIterationCapture",required:!1,type:{name:"AnimationEventHandler<HTMLDivElement>"}},onTransitionCancel:{defaultValue:null,description:"",name:"onTransitionCancel",required:!1,type:{name:"TransitionEventHandler<HTMLDivElement>"}},onTransitionCancelCapture:{defaultValue:null,description:"",name:"onTransitionCancelCapture",required:!1,type:{name:"TransitionEventHandler<HTMLDivElement>"}},onTransitionEnd:{defaultValue:null,description:"",name:"onTransitionEnd",required:!1,type:{name:"TransitionEventHandler<HTMLDivElement>"}},onTransitionEndCapture:{defaultValue:null,description:"",name:"onTransitionEndCapture",required:!1,type:{name:"TransitionEventHandler<HTMLDivElement>"}},onTransitionRun:{defaultValue:null,description:"",name:"onTransitionRun",required:!1,type:{name:"TransitionEventHandler<HTMLDivElement>"}},onTransitionRunCapture:{defaultValue:null,description:"",name:"onTransitionRunCapture",required:!1,type:{name:"TransitionEventHandler<HTMLDivElement>"}},onTransitionStart:{defaultValue:null,description:"",name:"onTransitionStart",required:!1,type:{name:"TransitionEventHandler<HTMLDivElement>"}},onTransitionStartCapture:{defaultValue:null,description:"",name:"onTransitionStartCapture",required:!1,type:{name:"TransitionEventHandler<HTMLDivElement>"}},defaultValue:{defaultValue:null,description:"The default value (uncontrolled).",name:"defaultValue",required:!1,type:{name:"Key | Key[] | null"}},autoFocus:{defaultValue:null,description:"Whether the element should receive focus on render.",name:"autoFocus",required:!1,type:{name:"boolean"}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string | null"}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"Identifies the element (or elements) that provide a detailed, extended description for the object.",name:"aria-details",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element.",name:"aria-labelledby",required:!1,type:{name:"string"}},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",required:!1,type:{name:"((e: FocusEvent<Element, Element>) => void)"}},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",required:!1,type:{name:"((e: FocusEvent<Element, Element>) => void)"}},onChange:{defaultValue:null,description:"Handler that is called when the value changes.",name:"onChange",required:!1,type:{name:"((value: ValueType<M>) => void)"}},onKeyDown:{defaultValue:null,description:"Handler that is called when a key is pressed.",name:"onKeyDown",required:!1,type:{name:"((e: KeyboardEvent) => void)"}},onKeyUp:{defaultValue:null,description:"Handler that is called when a key is released.",name:"onKeyUp",required:!1,type:{name:"((e: KeyboardEvent) => void)"}},form:{defaultValue:null,description:"The `<form>` element to associate the input with.\nThe value of this attribute must be the id of a `<form>` in the same document.\nSee [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#form).",name:"form",required:!1,type:{name:"string"}},disabledKeys:{defaultValue:null,description:"The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with.",name:"disabledKeys",required:!1,type:{name:"Iterable<Key>"}},onFocusChange:{defaultValue:null,description:"Handler that is called when the element's focus status changes.",name:"onFocusChange",required:!1,type:{name:"((isFocused: boolean) => void)"}},name:{defaultValue:null,description:"The name of the input, used when submitting an HTML form.",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"The current value (controlled).",name:"value",required:!1,type:{name:"Key | Key[] | null"}},excludeFromTabOrder:{defaultValue:null,description:`Whether to exclude the element from the sequential tab order. If true,
the element will not be focusable via the keyboard by tabbing. This should
be avoided except in rare scenarios where an alternative means of accessing
the element or its functionality via the keyboard is available.`,name:"excludeFromTabOrder",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Whether the input value is invalid.",name:"isInvalid",required:!1,type:{name:"boolean"}},autoComplete:{defaultValue:null,description:"Describes the type of autocomplete functionality the input should provide if any. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautocomplete).",name:"autoComplete",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:"'Select an item' (localized)"},description:"Temporary text that occupies the select when it is empty.",name:"placeholder",required:!1,type:{name:"string"}},isRequired:{defaultValue:null,description:"Whether user input is required on the input before form submission.",name:"isRequired",required:!1,type:{name:"boolean"}},validationBehavior:{defaultValue:{value:"'native'"},description:`Whether to use native HTML form validation to prevent form submission
when the value is missing or invalid, or mark the field as required
or invalid via ARIA.`,name:"validationBehavior",required:!1,type:{name:"enum",value:[{value:'"aria"'},{value:'"native"'}]}},validate:{defaultValue:null,description:'A function that returns an error message if a given value is invalid.\nValidation errors are displayed to the user when the form is submitted\nif `validationBehavior="native"`. For realtime validation, use the `isInvalid`\nprop instead.',name:"validate",required:!1,type:{name:"((value: ValidationType<M>) => true | ValidationError | null)"}},onSelectionChange:{defaultValue:null,description:`Handler that is called when the selection changes.
@deprecated`,name:"onSelectionChange",required:!1,type:{name:"((key: Key | null) => void)"}},selectedKey:{defaultValue:null,description:`The currently selected key in the collection (controlled).
@deprecated`,name:"selectedKey",required:!1,type:{name:"Key | null"}},defaultSelectedKey:{defaultValue:null,description:`The initial selected key in the collection (uncontrolled).
@deprecated`,name:"defaultSelectedKey",required:!1,type:{name:"Key"}},onOpenChange:{defaultValue:null,description:"Method that is called when the open state of the menu changes.",name:"onOpenChange",required:!1,type:{name:"((isOpen: boolean) => void)"}},selectionMode:{defaultValue:{value:"'single'"},description:"Whether single or multiple selection is enabled.",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"single"'},{value:'"multiple"'}]}},isOpen:{defaultValue:null,description:"Sets the open state of the menu.",name:"isOpen",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:null,description:"Sets the default open state of the menu.",name:"defaultOpen",required:!1,type:{name:"boolean"}}}}}catch{}const{expect:$,fn:fe,spyOn:kt,userEvent:m,within:At}=__STORYBOOK_MODULE_TEST__,Kt=fe(),ve=fe(),zn={component:F,title:"Components/RacSelect",tags:["autodocs"],args:{children:e=>n.jsx(D,{...e,children:e.name}),description:"Description",isClearable:!0,isDisabled:!1,isSelectableAll:!1,label:"Label",items:I,placeholder:"Select an option",selectionMode:"single",showTags:!1,errorPosition:"top",onSelectionChange:Kt,size:"large"}},R={args:{label:"label",description:"static",children:n.jsxs(n.Fragment,{children:[n.jsx(D,{children:"Hello"}),n.jsx(D,{children:"Goodbye"})]})}},L={play:async({args:e,canvas:a,step:t})=>{await t("It should be possible to select an item using the keyboard",async()=>{await m.tab(),await m.keyboard("[Space]"),await m.keyboard("[Space]");const l=a.getByText(I[0].name,{selector:"span"}),i=At(a.getByTestId("hidden-select-container")).getByDisplayValue(I[0].name);await $(i).toBeVisible(),await $(l).toBeVisible()}),await t("it should change size according to size prop",async()=>{await $(a.getByRole("button")).toHaveStyle({height:e.size==="large"?"48px":"40px"})})}},j={args:{description:"Kiwi and banana are pre-selected",defaultValue:["kiwi","banana"],selectionMode:"multiple"},play:async({canvas:e,step:a})=>{await a("It should display and reflect the pre-selected value",async()=>{await $(e.getByText("2 valda",{selector:"span"})).toBeVisible()})}},O={args:{selectionMode:"multiple",description:"All options are selected",defaultValue:I.map(({id:e})=>e)},play:async({canvas:e,step:a})=>{await a("It should display and reflect the pre-selected values",async()=>{await $(e.getByText(`${I.length} valda`,{selector:"span"})).toBeVisible()})}},W={parameters:{docs:{description:{story:"Avoid using disabled"}},a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}},args:{isDisabled:!0}},N={args:{description:"Kiwi is disabled",disabledKeys:["kiwi"]}},z={args:{isInvalid:!0,errorMessage:"Error msg"}},U={args:{selectionMode:"multiple",showTags:!0,defaultValue:["apple","kiwi"]},play:async({canvas:e,step:a})=>{await a("It should display and reflect the pre-selected values",async()=>{const t=e.getByText("2 valda",{selector:"span"});await $(t).toBeVisible(),await $(e.getByText("Apple",{selector:"div"})).toBeVisible(),await $(e.getByText("Kiwi",{selector:"div"})).toBeVisible()})}},G={args:{selectionMode:"multiple",isSelectableAll:!0},play:async({canvas:e,step:a})=>{await a("It should be possible to select all items",async()=>{await m.tab(),await m.keyboard("[Space]"),await m.tab({shift:!0}),await m.keyboard("[Space]"),await m.keyboard("[Escape]");const t=e.getByText(`${I.length} valda`,{selector:"span"});await $(t).toBeVisible()})}},K={args:{selectionMode:"multiple",isClearable:!1}},X={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{...L.args,selectionMode:"single",isClearable:!1,label:"Ärende",placeholder:"Välj ärende"},render:e=>{const[a,t]=u.useState(null);return n.jsx(F,{...e,value:a,onChange:t,items:[{id:"12",name:"tolv"},{id:"1",name:"ett"},{id:"2",name:"två"}]})},play:async({step:e,canvas:a})=>{await e("It should be possible to select an item with an ID greater than 9",async()=>{await m.tab(),await m.keyboard("[Space]"),await m.keyboard("[Space]");const t=a.getByText("tolv",{selector:"span"});await $(t).toBeVisible()})}},Y={args:{children:n.jsxs(n.Fragment,{children:[n.jsxs(ie,{children:[n.jsx(re,{children:"Fruit"}),n.jsx(D,{id:"Apple",children:"Apple"}),n.jsx(D,{id:"Banana",children:"Banana"})]}),n.jsxs(ie,{children:[n.jsx(re,{children:"Vegetables"}),n.jsx(D,{id:"Cabbage",children:"Cabbage"}),n.jsx(D,{id:"Broccoli",children:"Broccoli"})]})]})}},J={args:{...L.args,items:ga,children:e=>n.jsxs(ie,{id:e.name,children:[n.jsx(re,{children:e.name}),n.jsx(xa,{items:e.children,children:a=>n.jsx(D,{id:a.id,children:a.name})})]})},play:async({step:e})=>{const a=kt(console,"warn").mockImplementation(fe());await e("It should not warn about missing aria labels when toggling the select open state",async()=>{await m.tab(),await m.keyboard("[Space]"),await m.keyboard("[Space]"),await $(a).toHaveBeenCalledTimes(0)})}},Q={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{selectionMode:"single",isRequired:!0},render:e=>n.jsxs("form",{onSubmit:a=>{a.preventDefault(),ve()},children:[n.jsx(F,{...e}),n.jsx("button",{type:"submit",children:"submit"})]}),play:async({step:e})=>{await e("It should give a validation error if the user submitted without selecting an option",async()=>{await m.tab(),await m.tab(),await m.keyboard("[Enter]"),await $(ve).not.toHaveBeenCalled()})}},Z={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{selectionMode:"multiple"},play:async({canvas:e,step:a})=>{await a("It should be possible to deselect all items to empty the selection",async()=>{await m.tab(),await m.keyboard("[Space]"),await m.keyboard("[Space]"),await m.keyboard("[Space]"),await m.keyboard("[Escape]");const t=e.getByText("Select an option",{selector:"span"});await $(t).toBeVisible()}),await a("It should be possible to press escape to exit the select without clearing the selections made",async()=>{await m.keyboard("[Space]"),await m.keyboard("[ArrowDown]"),await m.keyboard("[Space]"),await m.keyboard("[Escape]");const t=e.getByText("2 valda",{selector:"span"});await $(t).toBeVisible()})}};var ye,ge,Ve;R.parameters={...R.parameters,docs:{...(ye=R.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    label: 'label',
    description: 'static',
    children: <>
        <ListBoxItem>Hello</ListBoxItem>
        <ListBoxItem>Goodbye</ListBoxItem>
      </>
  }
}`,...(Ve=(ge=R.parameters)==null?void 0:ge.docs)==null?void 0:Ve.source}}};var xe,Ee,Se;L.parameters={...L.parameters,docs:{...(xe=L.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Se=(Ee=L.parameters)==null?void 0:Ee.docs)==null?void 0:Se.source}}};var Te,Me,we;j.parameters={...j.parameters,docs:{...(Te=j.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(we=(Me=j.parameters)==null?void 0:Me.docs)==null?void 0:we.source}}};var $e,Ce,qe;O.parameters={...O.parameters,docs:{...($e=O.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(qe=(Ce=O.parameters)==null?void 0:Ce.docs)==null?void 0:qe.source}}};var He,De,Be;W.parameters={...W.parameters,docs:{...(He=W.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Be=(De=W.parameters)==null?void 0:De.docs)==null?void 0:Be.source}}};var Pe,Le,Ie;N.parameters={...N.parameters,docs:{...(Pe=N.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi is disabled',
    disabledKeys: ['kiwi']
  }
}`,...(Ie=(Le=N.parameters)==null?void 0:Le.docs)==null?void 0:Ie.source}}};var ke,Ae,Ke;z.parameters={...z.parameters,docs:{...(ke=z.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Error msg'
  }
}`,...(Ke=(Ae=z.parameters)==null?void 0:Ae.docs)==null?void 0:Ke.source}}};var Fe,_e,Re;U.parameters={...U.parameters,docs:{...(Fe=U.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Re=(_e=U.parameters)==null?void 0:_e.docs)==null?void 0:Re.source}}};var je,Oe,We;G.parameters={...G.parameters,docs:{...(je=G.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(We=(Oe=G.parameters)==null?void 0:Oe.docs)==null?void 0:We.source}}};var Ne,ze,Ue,Ge,Xe;K.parameters={...K.parameters,docs:{...(Ne=K.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    isClearable: false
  }
}`,...(Ue=(ze=K.parameters)==null?void 0:ze.docs)==null?void 0:Ue.source},description:{story:"As default all options are clearable. `isClearable={false}` Experimental feature",...(Xe=(Ge=K.parameters)==null?void 0:Ge.docs)==null?void 0:Xe.description}}};var Ye,Je,Qe;X.parameters={...X.parameters,docs:{...(Ye=X.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(Qe=(Je=X.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Ze,ea,aa;Y.parameters={...Y.parameters,docs:{...(Ze=Y.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(aa=(ea=Y.parameters)==null?void 0:ea.docs)==null?void 0:aa.source}}};var ta,na,la;J.parameters={...J.parameters,docs:{...(ta=J.parameters)==null?void 0:ta.docs,source:{originalSource:`{
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
}`,...(la=(na=J.parameters)==null?void 0:na.docs)==null?void 0:la.source}}};var ia,ra,oa;Q.parameters={...Q.parameters,docs:{...(ia=Q.parameters)==null?void 0:ia.docs,source:{originalSource:`{
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
}`,...(oa=(ra=Q.parameters)==null?void 0:ra.docs)==null?void 0:oa.source}}};var sa,da,ua;Z.parameters={...Z.parameters,docs:{...(sa=Z.parameters)==null?void 0:sa.docs,source:{originalSource:`{
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
}`,...(ua=(da=Z.parameters)==null?void 0:da.docs)==null?void 0:ua.source}}};const Un=["StaticItems","Normal","DefaultValue","AllKeysSelected","Disabled","DisabledOption","Invalid","WithTags","SelectAllEnabled","NotClearable","DS872","StaticSections","DynamicSections","RequiredSingleSelect","MultiSelectTests"];export{O as AllKeysSelected,X as DS872,j as DefaultValue,W as Disabled,N as DisabledOption,J as DynamicSections,z as Invalid,Z as MultiSelectTests,L as Normal,K as NotClearable,Q as RequiredSingleSelect,G as SelectAllEnabled,R as StaticItems,Y as StaticSections,U as WithTags,Un as __namedExportsOrder,zn as default};
