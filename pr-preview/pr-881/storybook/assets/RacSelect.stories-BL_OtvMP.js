import{c as ga,r as o,e as g,j as n,o as k,d as Va}from"./iframe-BxWK1oDy.js";import{d as xa,e as Ea}from"./Collection-BIX-ui-y.js";import{r as Sa,h as Ta,i as Ma,a as wa}from"./Dialog-Cr9JDPX6.js";import{b as pa,d as ma,$ as fa}from"./Button-CP5b1jX2.js";import{b as ie,e as $a,l as Ca,$ as ba,h as ha,a as va,i as qa,j as Ha,k as Da}from"./utils-DEX85EPU.js";import{$ as Ba,F as ve}from"./FieldError-QWUa_CDD.js";import{a as Pa}from"./Form-CKrqDjen.js";import{$ as La}from"./intlStrings-ZMTSFH_M.js";import{c as Ia,d as ka}from"./ListBox-BkJeLv-g.js";import{$ as pe}from"./Text-B2q65MLi.js";import{$ as Aa}from"./Hidden-C-4Y_J9m.js";import{c as me,i as Ka,a as _a}from"./useFocusRing-Wp9TW9ZG.js";import{$ as Fa}from"./useResizeObserver-CX-NVMgQ.js";import{$ as ja}from"./useLocalizedStringFormatter-DJncF-Ya.js";import{b as Ra,c as Oa,a as Wa}from"./useFormValidation-CFqF0uM3.js";import{$ as Na}from"./useListState-DDVG8hpA.js";import{b as za}from"./OverlayArrow-DP6qIgnL.js";import{$ as Ua}from"./useControlledState-VCKsSYhl.js";import{$ as Ga,a as Xa}from"./ListKeyboardDelegate-CbwwgxXE.js";import{i as Ya}from"./SelectionManager-CHfe1G9J.js";import{$ as Ja}from"./useField-RkpLpfQx.js";import{a as Qa}from"./VisuallyHidden-Cc31a2-t.js";import{e as Za,b as et}from"./SelectionIndicator-B8dVTgan.js";import{a as at,L as tt}from"./Label-6Iw2ZWLr.js";import{c as le}from"./clsx-Ciqy0D92.js";import{C as nt}from"./Checkbox-DMu7w4q7.js";import{u as ee}from"./useLocalizedStringFormatter-BEZktG_c.js";import{X as lt}from"./x-CV9VCc4M.js";import{L as it,b as D,a as re,c as se}from"./ListBoxSection-B0Z8Eik4.js";import{T as rt,$ as st,a as ot}from"./Tag-GEK3rqDr.js";import{c as dt}from"./clsx-B-dksMZM.js";import{C as ut}from"./chevron-down-D6XvsY6p.js";import{T as ct}from"./Text-DXdlGpg6.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Ddgl1g9c.js";import"./index-CR8VvwZJ.js";import"./index-DNovdE3O.js";import"./RSPContexts-uVZhiFbn.js";import"./Separator-HjFF5L9_.js";import"./PressResponder-kojHGTxi.js";import"./useEvent-DwvbPWVi.js";import"./getScrollParent-BD4bj6hc.js";import"./scrollIntoView-Dt91R99J.js";import"./useLabels-Dr7rREME.js";import"./useButton-C7_1Jbh9.js";import"./DragAndDrop-VGgGQYJd.js";import"./inertValue-C8KL22e5.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useDescription-Bg8R3aV7.js";import"./Button-zIDUONlx.js";import"./Button.module-CcWMkJAG.js";import"./Heading-BbXb2z4K.js";import"./info-CeddOu1p.js";import"./createLucideIcon-B6tSgLJX.js";import"./Popover-D_m7I3l5.js";import"./useToggleState-BxR7RVNP.js";import"./Virtualizer-COa71RA0.js";import"./useHighlightSelectionDescription-t9XMQ18V.js";import"./useUpdateEffect-DoLAdXr4.js";import"./useHasTabbableChild-AtgvM-dB.js";function pt(e={}){let{locale:a}=ga();return o.useMemo(()=>new Intl.ListFormat(a,e),[a,e])}const fe=new WeakMap;function mt(e,a,t){let{keyboardDelegate:l,isDisabled:i,isRequired:d,name:v,form:s,validationBehavior:r="aria"}=e,p=Ga({usage:"search",sensitivity:"base"}),c=o.useMemo(()=>l||new Xa(a.collection,a.disabledKeys,t,p),[l,a.collection,a.disabledKeys,p,t]),{menuTriggerProps:f,menuProps:V}=Sa({isDisabled:i,type:"listbox"},a,t),x=y=>{if(a.selectionManager.selectionMode!=="multiple")switch(y.key){case"ArrowLeft":{var P,L;y.preventDefault();let A=a.selectedKey!=null?(P=c.getKeyAbove)===null||P===void 0?void 0:P.call(c,a.selectedKey):(L=c.getFirstKey)===null||L===void 0?void 0:L.call(c);A&&a.setSelectedKey(A);break}case"ArrowRight":{var te,ne;y.preventDefault();let A=a.selectedKey!=null?(te=c.getKeyBelow)===null||te===void 0?void 0:te.call(c,a.selectedKey):(ne=c.getFirstKey)===null||ne===void 0?void 0:ne.call(c);A&&a.setSelectedKey(A);break}}},{typeSelectProps:b}=Ya({keyboardDelegate:c,selectionManager:a.selectionManager,onTypeSelect(y){a.setSelectedKey(y)}}),{isInvalid:M,validationErrors:w,validationDetails:h}=a.displayValidation,{labelProps:E,fieldProps:T,descriptionProps:u,errorMessageProps:q}=Ja({...e,labelElementType:"span",isInvalid:M,errorMessage:e.errorMessage||w});b.onKeyDown=b.onKeyDownCapture,delete b.onKeyDownCapture,a.selectionManager.selectionMode==="multiple"&&(b={});let H=me(e,{labelable:!0}),S=ie(b,f,T),F=$a();return fe.set(a,{isDisabled:i,isRequired:d,name:v,form:s,validationBehavior:r}),{labelProps:{...E,onClick:()=>{if(!e.isDisabled){var y;(y=t.current)===null||y===void 0||y.focus(),Ka("keyboard")}}},triggerProps:ie(H,{...S,isDisabled:i,onKeyDown:Ca(S.onKeyDown,x,e.onKeyDown),onKeyUp:e.onKeyUp,"aria-labelledby":[F,S["aria-labelledby"],S["aria-label"]&&!S["aria-labelledby"]?S.id:null].filter(Boolean).join(" "),onFocus(y){a.isFocused||(e.onFocus&&e.onFocus(y),e.onFocusChange&&e.onFocusChange(!0),a.setFocused(!0))},onBlur(y){a.isOpen||(e.onBlur&&e.onBlur(y),e.onFocusChange&&e.onFocusChange(!1),a.setFocused(!1))}}),valueProps:{id:F},menuProps:{...V,autoFocus:a.focusStrategy||!0,shouldSelectOnPressUp:!0,shouldFocusOnHover:!0,disallowEmptySelection:!0,linkBehavior:"selection",onBlur:y=>{y.currentTarget.contains(y.relatedTarget)||(e.onBlur&&e.onBlur(y),e.onFocusChange&&e.onFocusChange(!1),a.setFocused(!1))},"aria-labelledby":[T["aria-labelledby"],S["aria-label"]&&!T["aria-labelledby"]?S.id:null].filter(Boolean).join(" ")},descriptionProps:u,errorMessageProps:q,isInvalid:M,validationErrors:w,validationDetails:h,hiddenSelectProps:{isDisabled:i,name:v,label:e.label,state:a,triggerRef:t,form:s}}}function ft(e,a,t){let l=fe.get(a)||{},{autoComplete:i,name:d=l.name,form:v=l.form,isDisabled:s=l.isDisabled}=e,{validationBehavior:r,isRequired:p}=l,{visuallyHiddenProps:c}=Qa({style:{position:"fixed",top:0,left:0}});Ra(e.selectRef,a.defaultValue,a.setValue),Oa({validationBehavior:r,focus:()=>{var b;return(b=t.current)===null||b===void 0?void 0:b.focus()}},a,e.selectRef);let f=a.setValue,V=o.useCallback(b=>{b.target.multiple?f(Array.from(b.target.selectedOptions,M=>M.value)):f(b.currentTarget.value)},[f]);var x;return{containerProps:{...c,"aria-hidden":!0,"data-react-aria-prevent-focus":!0,"data-a11y-ignore":"aria-hidden-focus"},inputProps:{style:{display:"none"}},selectProps:{tabIndex:-1,autoComplete:i,disabled:s,multiple:a.selectionManager.selectionMode==="multiple",required:r==="native"&&p,name:d,form:v,value:(x=a.value)!==null&&x!==void 0?x:"",onChange:V,onInput:V}}}function bt(e){let{state:a,triggerRef:t,label:l,name:i,form:d,isDisabled:v}=e,s=o.useRef(null),r=o.useRef(null),{containerProps:p,selectProps:c}=ft({...e,selectRef:a.collection.size<=300?s:r},a,t);if(a.collection.size<=300)return g.createElement("div",{...p,"data-testid":"hidden-select-container"},g.createElement("label",null,l,g.createElement("select",{...c,ref:s},g.createElement("option",null),[...a.collection.getKeys()].map(f=>{let V=a.collection.getItem(f);if(V&&V.type==="item")return g.createElement("option",{key:V.key,value:V.key},V.textValue)}))));if(i){let f=fe.get(a)||{},{validationBehavior:V}=f,x=Array.isArray(a.value)?a.value:[a.value];x.length===0&&(x=[null]);let b=x.map((M,w)=>{let h={type:"hidden",autoComplete:c.autoComplete,name:i,form:d,disabled:v,value:M??""};return V==="native"?g.createElement("input",{key:w,...h,ref:w===0?r:null,style:{display:"none"},type:"text",required:w===0?c.required:!1,onChange:()=>{}}):g.createElement("input",{key:w,...h,ref:w===0?r:null})});return g.createElement(g.Fragment,null,b)}return null}function ht(e){let{selectionMode:a="single"}=e,t=za(e),[l,i]=o.useState(null),d=o.useMemo(()=>{var u;return e.defaultValue!==void 0?e.defaultValue:a==="single"?(u=e.defaultSelectedKey)!==null&&u!==void 0?u:null:[]},[e.defaultValue,e.defaultSelectedKey,a]),v=o.useMemo(()=>e.value!==void 0?e.value:a==="single"?e.selectedKey:void 0,[e.value,e.selectedKey,a]),[s,r]=Ua(v,d,e.onChange),p=a==="single"&&Array.isArray(s)?s[0]:s,c=u=>{if(a==="single"){var q,H;let S=Array.isArray(u)?(H=u[0])!==null&&H!==void 0?H:null:u;r(S),S!==p&&((q=e.onSelectionChange)===null||q===void 0||q.call(e,S))}else{let S=[];Array.isArray(u)?S=u:u!=null&&(S=[u]),r(S)}},f=Na({...e,selectionMode:a,disallowEmptySelection:a==="single",allowDuplicateSelectionEvents:!0,selectedKeys:o.useMemo(()=>vt(p),[p]),onSelectionChange:u=>{if(u!=="all"){if(a==="single"){var q;let H=(q=u.values().next().value)!==null&&q!==void 0?q:null;c(H),t.close()}else c([...u]);b.commitValidation()}}}),V=f.selectionManager.firstSelectedKey,x=o.useMemo(()=>[...f.selectionManager.selectedKeys].map(u=>f.collection.getItem(u)).filter(u=>u!=null),[f.selectionManager.selectedKeys,f.collection]),b=Wa({...e,value:Array.isArray(p)&&p.length===0?null:p}),[M,w]=o.useState(!1),[h]=o.useState(p);var E,T;return{...b,...f,...t,value:p,defaultValue:d??h,setValue:c,selectedKey:V,setSelectedKey:c,selectedItem:(E=x[0])!==null&&E!==void 0?E:null,selectedItems:x,defaultSelectedKey:(T=e.defaultSelectedKey)!==null&&T!==void 0?T:e.selectionMode==="single"?h:null,focusStrategy:l,open(u=null){f.collection.size!==0&&(i(u),t.open())},toggle(u=null){f.collection.size!==0&&(i(u),t.toggle())},isFocused:M,setFocused:w}}function vt(e){if(e!==void 0)return e===null?[]:Array.isArray(e)?e:[e]}function yt(e){return e&&e.__esModule?e.default:e}const be=o.createContext(null),B=o.createContext(null),gt=o.forwardRef(function(a,t){[a,t]=ba(a,t,be);let{children:l,isDisabled:i=!1,isInvalid:d=!1,isRequired:v=!1}=a,s=o.useMemo(()=>typeof l=="function"?l({isOpen:!1,isDisabled:i,isInvalid:d,isRequired:v,isFocused:!1,isFocusVisible:!1,defaultChildren:null}):l,[l,i,d,v]);return g.createElement(xa,{content:s},r=>g.createElement(xt,{props:a,collection:r,selectRef:t}))}),Vt=[pa,ma,pe];function xt({props:e,selectRef:a,collection:t}){let{validationBehavior:l}=ha(Pa)||{};var i,d;let v=(d=(i=e.validationBehavior)!==null&&i!==void 0?i:l)!==null&&d!==void 0?d:"native",s=ht({...e,collection:t,children:void 0,validationBehavior:v}),{isFocusVisible:r,focusProps:p}=_a({within:!0}),c=o.useRef(null),[f,V]=qa(!e["aria-label"]&&!e["aria-labelledby"]),{labelProps:x,triggerProps:b,valueProps:M,menuProps:w,descriptionProps:h,errorMessageProps:E,hiddenSelectProps:T,...u}=mt({...Ha(e),label:V,validationBehavior:v},s,c),[q,H]=o.useState(null),S=o.useCallback(()=>{c.current&&H(c.current.offsetWidth+"px")},[c]);Fa({ref:c,onResize:S});let F=o.useMemo(()=>({isOpen:s.isOpen,isFocused:s.isFocused,isFocusVisible:r,isDisabled:e.isDisabled||!1,isInvalid:u.isInvalid||!1,isRequired:e.isRequired||!1}),[s.isOpen,s.isFocused,r,e.isDisabled,u.isInvalid,e.isRequired]),y=va({...e,values:F,defaultClassName:"react-aria-Select"}),P=me(e,{global:!0});delete P.id;let L=o.useRef(null);return g.createElement(Da,{values:[[be,e],[B,s],[ya,M],[pa,{...x,ref:f,elementType:"span"}],[ma,{...b,ref:c,isPressed:s.isOpen,autoFocus:e.autoFocus}],[Ta,s],[Ma,{trigger:"Select",triggerRef:c,scrollRef:L,placement:"bottom start",style:{"--trigger-width":q},"aria-labelledby":w["aria-labelledby"],clearContexts:Vt}],[Ia,{...w,ref:L}],[ka,s],[pe,{slots:{description:h,errorMessage:E}}],[Ba,u]]},g.createElement("div",{...ie(P,y,p),ref:a,slot:e.slot||void 0,"data-focused":s.isFocused||void 0,"data-focus-visible":r||void 0,"data-open":s.isOpen||void 0,"data-disabled":e.isDisabled||void 0,"data-invalid":u.isInvalid||void 0,"data-required":e.isRequired||void 0},y.children,g.createElement(bt,{...T,autoComplete:e.autoComplete})))}const ya=o.createContext(null),Et=Aa(function(a,t){var l;[a,t]=ba(a,t,ya);let i=o.useContext(B),{placeholder:d}=ha(be),v=i.selectedItems.map(h=>{var E;let T=(E=h.props)===null||E===void 0?void 0:E.children;return typeof T=="function"&&(T=T({isHovered:!1,isPressed:!1,isSelected:!1,isFocused:!1,isFocusVisible:!1,isDisabled:!1,selectionMode:"single",selectionBehavior:"toggle"})),T}),s=pt(),r=o.useMemo(()=>i.selectedItems.map(h=>h==null?void 0:h.textValue),[i.selectedItems]),p=i.selectionManager.selectionMode,c=o.useMemo(()=>{var h;return p==="single"?(h=r[0])!==null&&h!==void 0?h:"":s.format(r)},[p,s,r]),f=o.useMemo(()=>{if(p==="single")return v[0];let h=s.formatToParts(r);if(h.length===0)return null;let E=0;return h.map(T=>T.type==="element"?g.createElement(o.Fragment,{key:E},v[E++]):T.value)},[p,s,r,v]),V=ja(yt(La),"react-aria-components");var x,b;let M=va({...a,defaultChildren:(x=f??d)!==null&&x!==void 0?x:V.format("selectPlaceholder"),defaultClassName:"react-aria-SelectValue",values:{selectedItem:(b=(l=i.selectedItems[0])===null||l===void 0?void 0:l.value)!==null&&b!==void 0?b:null,selectedItems:o.useMemo(()=>i.selectedItems.map(h=>{var E;return(E=h.value)!==null&&E!==void 0?E:null}),[i.selectedItems]),selectedText:c,isPlaceholder:i.selectedItems.length===0,state:i}}),w=me(a,{global:!0});return g.createElement("span",{ref:t,...w,...M,"data-placeholder":i.selectedItems.length===0||void 0},g.createElement(pe.Provider,{value:void 0},M.children))}),St={clearAll:"Clear all",selectAll:"Select all",selectedItems:"Selected items",selected:"selected"},Tt={clearAll:"Rensa alla",selectAll:"Välj alla",selectedItems:"Valda objekt",selected:"valda"},ae={en:St,sv:Tt},Mt="_select_up64x_1",wt="_triggerContainer_up64x_6",$t="_trigger_up64x_6",Ct="_medium_up64x_26",qt="_selectValue_up64x_68",Ht="_placeholder_up64x_77",Dt="_selectValueTag_up64x_91",Bt="_clearButton_up64x_105",Pt="_truncate_up64x_117",Lt="_popover_up64x_154",It="_selectAll_up64x_178",kt="_tagGroup_up64x_232",C={select:Mt,triggerContainer:wt,trigger:$t,medium:Ct,selectValue:qt,placeholder:Ht,selectValueTag:Dt,clearButton:Bt,truncate:Pt,popover:Lt,selectAll:It,tagGroup:kt},At=()=>{const e=g.useContext(B),a=ee(ae),t=()=>e==null?void 0:e.setValue(e!=null&&e.selectionManager.isSelectAll?null:Array.from(e.collection.getKeys()));return n.jsx(nt,{className:C.selectAll,isIndeterminate:!(e!=null&&e.selectionManager.isSelectAll)&&!(e!=null&&e.selectionManager.isEmpty),isSelected:e==null?void 0:e.selectionManager.isSelectAll,onChange:t,children:a.format("selectAll")})},oe=({isClearable:e=!0,isDisabled:a,selectedItems:t,selectedText:l})=>{const i=ee(ae),d=()=>t.length===1?l:`${t.length} ${i.format("selected")}`;return n.jsxs("div",{className:C.selectValueTag,"data-disabled":a||void 0,children:[n.jsx("span",{className:C.truncate,children:d()}),e&&n.jsx(Kt,{})]})},Kt=()=>{const e=g.useContext(B),a=ee(ae),t=Za(),l=()=>{t==null||t.focusFirst(),e==null||e.setValue(null)};return n.jsx(fa,{"aria-label":a.format("clearAll"),className:C.clearButton,onPress:l,slot:null,children:n.jsx(lt,{width:20,height:20})})};try{oe.displayName="SelectValueTag",oe.__docgenInfo={description:"",displayName:"SelectValueTag",props:{isPlaceholder:{defaultValue:null,description:`Whether the value is a placeholder.
@selector [data-placeholder]`,name:"isPlaceholder",required:!0,type:{name:"boolean"}},selectedItem:{defaultValue:null,description:`The object value of the first selected item.
@deprecated`,name:"selectedItem",required:!0,type:{name:"object | null"}},selectedItems:{defaultValue:null,description:"The object values of the currently selected items.",name:"selectedItems",required:!0,type:{name:"(T | null)[]"}},selectedText:{defaultValue:null,description:"The textValue of the currently selected items.",name:"selectedText",required:!0,type:{name:"string"}},state:{defaultValue:null,description:"The state of the select.",name:"state",required:!0,type:{name:'SelectState<T, "single" | "multiple">'}},isDisabled:{defaultValue:null,description:"Whether the input is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},isClearable:{defaultValue:{value:"true"},description:"",name:"isClearable",required:!1,type:{name:"boolean"}}}}}catch{}const de=e=>{const a=o.useContext(B),t=l=>{a==null||a.selectionManager.setSelectedKeys(l)};return n.jsx(it,{...e,escapeKeyBehavior:"none",onSelectionChange:t})};try{de.displayName="SelectListBox",de.__docgenInfo={description:"",displayName:"SelectListBox",props:{items:{defaultValue:null,description:"Item objects in the collection.",name:"items",required:!1,type:{name:"Iterable<T>"}},isVirtualized:{defaultValue:null,description:"Whether the listbox uses virtual scrolling.",name:"isVirtualized",required:!1,type:{name:"boolean"}},keyboardDelegate:{defaultValue:null,description:`An optional keyboard delegate implementation for type to select,
to override the default.`,name:"keyboardDelegate",required:!1,type:{name:"KeyboardDelegate"}},layoutDelegate:{defaultValue:null,description:`A delegate object that provides layout information for items in the collection.
By default this uses the DOM, but this can be overridden to implement things like
virtualized scrolling.`,name:"layoutDelegate",required:!1,type:{name:"LayoutDelegate"}},shouldUseVirtualFocus:{defaultValue:null,description:"Whether the listbox items should use virtual focus instead of being focused directly.",name:"shouldUseVirtualFocus",required:!1,type:{name:"boolean"}},linkBehavior:{defaultValue:{value:"'override'"},description:`The behavior of links in the collection.
- 'action': link behaves like onAction.
- 'selection': link follows selection interactions (e.g. if URL drives selection).
- 'override': links override all other interactions (link items are not selectable).`,name:"linkBehavior",required:!1,type:{name:"enum",value:[{value:'"selection"'},{value:'"action"'},{value:'"override"'}]}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}},autoFocus:{defaultValue:null,description:"Whether to auto focus the listbox or an option.",name:"autoFocus",required:!1,type:{name:"boolean | FocusStrategy"}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"Identifies the element (or elements) that provide a detailed, extended description for the object.",name:"aria-details",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element.",name:"aria-labelledby",required:!1,type:{name:"string"}},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",required:!1,type:{name:"((e: FocusEvent<Element, Element>) => void)"}},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",required:!1,type:{name:"((e: FocusEvent<Element, Element>) => void)"}},disabledKeys:{defaultValue:null,description:"The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with.",name:"disabledKeys",required:!1,type:{name:"Iterable<Key>"}},onAction:{defaultValue:null,description:"Handler that is called when a user performs an action on an item. The exact user event depends on\nthe collection's `selectionBehavior` prop and the interaction modality.",name:"onAction",required:!1,type:{name:"((key: Key) => void)"}},onFocusChange:{defaultValue:null,description:"Handler that is called when the element's focus status changes.",name:"onFocusChange",required:!1,type:{name:"((isFocused: boolean) => void)"}},label:{defaultValue:null,description:"An optional visual label for the listbox.",name:"label",required:!1,type:{name:"ReactNode"}},escapeKeyBehavior:{defaultValue:{value:"'clearSelection'"},description:`Whether pressing the escape key should clear selection in the listbox or not.

Most experiences should not modify this option as it eliminates a keyboard user's ability to
easily clear selection. Only use if the escape key is being handled externally or should not
trigger selection clearing contextually.`,name:"escapeKeyBehavior",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"clearSelection"'}]}},shouldFocusWrap:{defaultValue:null,description:"Whether focus should wrap around when the end/start is reached.",name:"shouldFocusWrap",required:!1,type:{name:"boolean"}},selectionMode:{defaultValue:null,description:"The type of selection that is allowed in the collection.",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"single"'},{value:'"multiple"'}]}},disallowEmptySelection:{defaultValue:null,description:"Whether the collection allows empty selection.",name:"disallowEmptySelection",required:!1,type:{name:"boolean"}},selectedKeys:{defaultValue:null,description:"The currently selected keys in the collection (controlled).",name:"selectedKeys",required:!1,type:{name:'Iterable<Key> | "all"'}},defaultSelectedKeys:{defaultValue:null,description:"The initial selected keys in the collection (uncontrolled).",name:"defaultSelectedKeys",required:!1,type:{name:'Iterable<Key> | "all"'}},onSelectionChange:{defaultValue:null,description:"Handler that is called when the selection changes.",name:"onSelectionChange",required:!1,type:{name:"((keys: Selection) => void)"}},shouldSelectOnPressUp:{defaultValue:null,description:"Whether selection should occur on press up instead of press down.",name:"shouldSelectOnPressUp",required:!1,type:{name:"boolean"}},selectionBehavior:{defaultValue:null,description:"How multiple selection should behave in the collection.",name:"selectionBehavior",required:!1,type:{name:"enum",value:[{value:'"toggle"'},{value:'"replace"'}]}},shouldFocusOnHover:{defaultValue:null,description:"Whether options should be focused when the user hovers over them.",name:"shouldFocusOnHover",required:!1,type:{name:"boolean"}}}}}catch{}const ue=({showTags:e,isDisabled:a})=>{const t=ee(ae),l=o.useContext(B),i=d=>{l==null||l.selectionManager.toggleSelection(Array.from(d)[0])};return!(l!=null&&l.selectedItems.length)||!e?null:n.jsx(rt,{"aria-label":t.format("selectedItems"),className:C.tagGroup,onRemove:i,selectionBehavior:"toggle",children:n.jsx(st,{items:l.selectedItems,children:d=>n.jsx(ot,{dismissable:!0,id:d.key,isDisabled:a,textValue:d.textValue,children:d.textValue},d.key)})})};try{ue.displayName="SelectTags",ue.__docgenInfo={description:"",displayName:"SelectTags",props:{isDisabled:{defaultValue:null,description:"Whether the input is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},showTags:{defaultValue:null,description:"Show selected items as tags below select",name:"showTags",required:!1,type:{name:"boolean"}}}}}catch{}const ce=({size:e})=>{const a=o.useContext(B);return n.jsx(fa,{className:dt({[C.medium]:e==="medium"},C.trigger),"data-invalid":!!(a!=null&&a.displayValidation.isInvalid)||void 0,children:n.jsx("span",{"aria-hidden":"true",style:{display:"flex"},children:n.jsx(ut,{size:20})})})};try{ce.displayName="SelectTrigger",ce.__docgenInfo={description:"",displayName:"SelectTrigger",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'}]}}}}}catch{}function _({children:e,description:a,errorMessage:t,errorPosition:l="top",items:i,label:d,popover:v,size:s="large",...r}){return n.jsx(et,{children:n.jsxs(gt,{...r,className:le(r.className,C.select),children:[n.jsx(at,{popover:v,children:d&&n.jsx(tt,{"data-disabled":r.isDisabled||void 0,children:d})}),a&&n.jsx(ct,{slot:"description",children:a}),l==="top"&&n.jsx(ve,{children:t}),n.jsxs("div",{className:C.triggerContainer,"data-disabled":r.isDisabled||void 0,children:[n.jsx(ce,{size:s}),n.jsx(Et,{className:C.selectValue,"data-disabled":r.isDisabled||void 0,children:p=>p.isPlaceholder||r.selectionMode!=="multiple"?n.jsx("div",{className:le(C.placeholder),children:n.jsx("span",{className:le(C.truncate),children:p.defaultChildren})}):n.jsx(oe,{...r,...p})})]}),l==="bottom"&&n.jsx(ve,{children:t}),n.jsxs(wa,{className:C.popover,offset:0,children:[r.isSelectableAll&&n.jsx(At,{}),n.jsx(de,{disallowEmptySelection:!r.isClearable,items:i,children:e})]}),n.jsx(ue,{...r})]})})}try{_.displayName="RacSelect",_.__docgenInfo={description:"",displayName:"RacSelect",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string | ((validation: ValidationResult) => string)"}},errorPosition:{defaultValue:{value:"top"},description:"The position of the error message",name:"errorPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},isClearable:{defaultValue:null,description:"",name:"isClearable",required:!1,type:{name:"boolean"}},isSelectableAll:{defaultValue:null,description:"Whether to show a button to select all items.",name:"isSelectableAll",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"Iterable<T>"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},popover:{defaultValue:null,description:"An assistive text that helps the user understand the field better. Will be hidden in a popover with an info icon button.",name:"popover",required:!1,type:{name:"InfoPopoverProps"}},showTags:{defaultValue:null,description:"Show selected items as tags below select",name:"showTags",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"large"},description:"Component size (large: height 48px, medium: height 40px)",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'}]}},isDisabled:{defaultValue:null,description:"Whether the input is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"ClassNameOrFunction<SelectRenderProps>"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"StyleOrFunction<SelectRenderProps>"}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}},dir:{defaultValue:null,description:"",name:"dir",required:!1,type:{name:"string"}},lang:{defaultValue:null,description:"",name:"lang",required:!1,type:{name:"string"}},hidden:{defaultValue:null,description:"",name:"hidden",required:!1,type:{name:"boolean"}},inert:{defaultValue:null,description:"",name:"inert",required:!1,type:{name:"boolean"}},translate:{defaultValue:null,description:"",name:"translate",required:!1,type:{name:"enum",value:[{value:'"yes"'},{value:'"no"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onClickCapture:{defaultValue:null,description:"",name:"onClickCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onAuxClick:{defaultValue:null,description:"",name:"onAuxClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onAuxClickCapture:{defaultValue:null,description:"",name:"onAuxClickCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onContextMenu:{defaultValue:null,description:"",name:"onContextMenu",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onContextMenuCapture:{defaultValue:null,description:"",name:"onContextMenuCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onDoubleClick:{defaultValue:null,description:"",name:"onDoubleClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onDoubleClickCapture:{defaultValue:null,description:"",name:"onDoubleClickCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseDown:{defaultValue:null,description:"",name:"onMouseDown",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseDownCapture:{defaultValue:null,description:"",name:"onMouseDownCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseMove:{defaultValue:null,description:"",name:"onMouseMove",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseMoveCapture:{defaultValue:null,description:"",name:"onMouseMoveCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseOut:{defaultValue:null,description:"",name:"onMouseOut",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseOutCapture:{defaultValue:null,description:"",name:"onMouseOutCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseOver:{defaultValue:null,description:"",name:"onMouseOver",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseOverCapture:{defaultValue:null,description:"",name:"onMouseOverCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseUpCapture:{defaultValue:null,description:"",name:"onMouseUpCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onTouchCancel:{defaultValue:null,description:"",name:"onTouchCancel",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchCancelCapture:{defaultValue:null,description:"",name:"onTouchCancelCapture",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchEnd:{defaultValue:null,description:"",name:"onTouchEnd",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchEndCapture:{defaultValue:null,description:"",name:"onTouchEndCapture",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchMove:{defaultValue:null,description:"",name:"onTouchMove",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchMoveCapture:{defaultValue:null,description:"",name:"onTouchMoveCapture",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchStart:{defaultValue:null,description:"",name:"onTouchStart",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchStartCapture:{defaultValue:null,description:"",name:"onTouchStartCapture",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onPointerDown:{defaultValue:null,description:"",name:"onPointerDown",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerDownCapture:{defaultValue:null,description:"",name:"onPointerDownCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerMove:{defaultValue:null,description:"",name:"onPointerMove",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerMoveCapture:{defaultValue:null,description:"",name:"onPointerMoveCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerUp:{defaultValue:null,description:"",name:"onPointerUp",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerUpCapture:{defaultValue:null,description:"",name:"onPointerUpCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerCancel:{defaultValue:null,description:"",name:"onPointerCancel",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerCancelCapture:{defaultValue:null,description:"",name:"onPointerCancelCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerEnter:{defaultValue:null,description:"",name:"onPointerEnter",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerLeave:{defaultValue:null,description:"",name:"onPointerLeave",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerOver:{defaultValue:null,description:"",name:"onPointerOver",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerOverCapture:{defaultValue:null,description:"",name:"onPointerOverCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerOut:{defaultValue:null,description:"",name:"onPointerOut",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerOutCapture:{defaultValue:null,description:"",name:"onPointerOutCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onGotPointerCapture:{defaultValue:null,description:"",name:"onGotPointerCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onGotPointerCaptureCapture:{defaultValue:null,description:"",name:"onGotPointerCaptureCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onLostPointerCapture:{defaultValue:null,description:"",name:"onLostPointerCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onLostPointerCaptureCapture:{defaultValue:null,description:"",name:"onLostPointerCaptureCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onScroll:{defaultValue:null,description:"",name:"onScroll",required:!1,type:{name:"UIEventHandler<HTMLDivElement>"}},onScrollCapture:{defaultValue:null,description:"",name:"onScrollCapture",required:!1,type:{name:"UIEventHandler<HTMLDivElement>"}},onWheel:{defaultValue:null,description:"",name:"onWheel",required:!1,type:{name:"WheelEventHandler<HTMLDivElement>"}},onWheelCapture:{defaultValue:null,description:"",name:"onWheelCapture",required:!1,type:{name:"WheelEventHandler<HTMLDivElement>"}},onAnimationStart:{defaultValue:null,description:"",name:"onAnimationStart",required:!1,type:{name:"AnimationEventHandler<HTMLDivElement>"}},onAnimationStartCapture:{defaultValue:null,description:"",name:"onAnimationStartCapture",required:!1,type:{name:"AnimationEventHandler<HTMLDivElement>"}},onAnimationEnd:{defaultValue:null,description:"",name:"onAnimationEnd",required:!1,type:{name:"AnimationEventHandler<HTMLDivElement>"}},onAnimationEndCapture:{defaultValue:null,description:"",name:"onAnimationEndCapture",required:!1,type:{name:"AnimationEventHandler<HTMLDivElement>"}},onAnimationIteration:{defaultValue:null,description:"",name:"onAnimationIteration",required:!1,type:{name:"AnimationEventHandler<HTMLDivElement>"}},onAnimationIterationCapture:{defaultValue:null,description:"",name:"onAnimationIterationCapture",required:!1,type:{name:"AnimationEventHandler<HTMLDivElement>"}},onTransitionCancel:{defaultValue:null,description:"",name:"onTransitionCancel",required:!1,type:{name:"TransitionEventHandler<HTMLDivElement>"}},onTransitionCancelCapture:{defaultValue:null,description:"",name:"onTransitionCancelCapture",required:!1,type:{name:"TransitionEventHandler<HTMLDivElement>"}},onTransitionEnd:{defaultValue:null,description:"",name:"onTransitionEnd",required:!1,type:{name:"TransitionEventHandler<HTMLDivElement>"}},onTransitionEndCapture:{defaultValue:null,description:"",name:"onTransitionEndCapture",required:!1,type:{name:"TransitionEventHandler<HTMLDivElement>"}},onTransitionRun:{defaultValue:null,description:"",name:"onTransitionRun",required:!1,type:{name:"TransitionEventHandler<HTMLDivElement>"}},onTransitionRunCapture:{defaultValue:null,description:"",name:"onTransitionRunCapture",required:!1,type:{name:"TransitionEventHandler<HTMLDivElement>"}},onTransitionStart:{defaultValue:null,description:"",name:"onTransitionStart",required:!1,type:{name:"TransitionEventHandler<HTMLDivElement>"}},onTransitionStartCapture:{defaultValue:null,description:"",name:"onTransitionStartCapture",required:!1,type:{name:"TransitionEventHandler<HTMLDivElement>"}},defaultValue:{defaultValue:null,description:"The default value (uncontrolled).",name:"defaultValue",required:!1,type:{name:"Key | Key[] | null"}},autoFocus:{defaultValue:null,description:"Whether the element should receive focus on render.",name:"autoFocus",required:!1,type:{name:"boolean"}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string | null"}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"Identifies the element (or elements) that provide a detailed, extended description for the object.",name:"aria-details",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element.",name:"aria-labelledby",required:!1,type:{name:"string"}},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",required:!1,type:{name:"((e: FocusEvent<Element, Element>) => void)"}},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",required:!1,type:{name:"((e: FocusEvent<Element, Element>) => void)"}},onChange:{defaultValue:null,description:"Handler that is called when the value changes.",name:"onChange",required:!1,type:{name:"((value: ValueType<M>) => void)"}},onKeyDown:{defaultValue:null,description:"Handler that is called when a key is pressed.",name:"onKeyDown",required:!1,type:{name:"((e: KeyboardEvent) => void)"}},onKeyUp:{defaultValue:null,description:"Handler that is called when a key is released.",name:"onKeyUp",required:!1,type:{name:"((e: KeyboardEvent) => void)"}},form:{defaultValue:null,description:"The `<form>` element to associate the input with.\nThe value of this attribute must be the id of a `<form>` in the same document.\nSee [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#form).",name:"form",required:!1,type:{name:"string"}},disabledKeys:{defaultValue:null,description:"The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with.",name:"disabledKeys",required:!1,type:{name:"Iterable<Key>"}},onFocusChange:{defaultValue:null,description:"Handler that is called when the element's focus status changes.",name:"onFocusChange",required:!1,type:{name:"((isFocused: boolean) => void)"}},name:{defaultValue:null,description:"The name of the input, used when submitting an HTML form.",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"The current value (controlled).",name:"value",required:!1,type:{name:"Key | Key[] | null"}},excludeFromTabOrder:{defaultValue:null,description:`Whether to exclude the element from the sequential tab order. If true,
the element will not be focusable via the keyboard by tabbing. This should
be avoided except in rare scenarios where an alternative means of accessing
the element or its functionality via the keyboard is available.`,name:"excludeFromTabOrder",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Whether the input value is invalid.",name:"isInvalid",required:!1,type:{name:"boolean"}},autoComplete:{defaultValue:null,description:"Describes the type of autocomplete functionality the input should provide if any. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautocomplete).",name:"autoComplete",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:"'Select an item' (localized)"},description:"Temporary text that occupies the select when it is empty.",name:"placeholder",required:!1,type:{name:"string"}},isRequired:{defaultValue:null,description:"Whether user input is required on the input before form submission.",name:"isRequired",required:!1,type:{name:"boolean"}},validationBehavior:{defaultValue:{value:"'native'"},description:`Whether to use native HTML form validation to prevent form submission
when the value is missing or invalid, or mark the field as required
or invalid via ARIA.`,name:"validationBehavior",required:!1,type:{name:"enum",value:[{value:'"aria"'},{value:'"native"'}]}},validate:{defaultValue:null,description:'A function that returns an error message if a given value is invalid.\nValidation errors are displayed to the user when the form is submitted\nif `validationBehavior="native"`. For realtime validation, use the `isInvalid`\nprop instead.',name:"validate",required:!1,type:{name:"((value: ValidationType<M>) => true | ValidationError | null)"}},selectionMode:{defaultValue:{value:"'single'"},description:"Whether single or multiple selection is enabled.",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"single"'},{value:'"multiple"'}]}},onSelectionChange:{defaultValue:null,description:`Handler that is called when the selection changes.
@deprecated`,name:"onSelectionChange",required:!1,type:{name:"((key: Key | null) => void)"}},isOpen:{defaultValue:null,description:"Sets the open state of the menu.",name:"isOpen",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:null,description:"Sets the default open state of the menu.",name:"defaultOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Method that is called when the open state of the menu changes.",name:"onOpenChange",required:!1,type:{name:"((isOpen: boolean) => void)"}},selectedKey:{defaultValue:null,description:`The currently selected key in the collection (controlled).
@deprecated`,name:"selectedKey",required:!1,type:{name:"Key | null"}},defaultSelectedKey:{defaultValue:null,description:`The initial selected key in the collection (uncontrolled).
@deprecated`,name:"defaultSelectedKey",required:!1,type:{name:"Key"}}}}}catch{}const{expect:$,fn:he,spyOn:_t,userEvent:m,within:Ft}=__STORYBOOK_MODULE_TEST__,jt=he(),ye=he(),Xn={component:_,title:"Components/RacSelect",tags:["autodocs"],args:{children:e=>n.jsx(D,{...e,children:e.name}),description:"Description",isClearable:!0,isDisabled:!1,isSelectableAll:!1,label:"Label",items:k,placeholder:"Select an option",selectionMode:"single",showTags:!1,errorPosition:"top",onSelectionChange:jt,size:"large"}},j={args:{label:"label",description:"static",children:n.jsxs(n.Fragment,{children:[n.jsx(D,{children:"Hello"}),n.jsx(D,{children:"Goodbye"})]})}},I={play:async({args:e,canvas:a,step:t})=>{await t("It should be possible to select an item using the keyboard",async()=>{await m.tab(),await m.keyboard("[Space]"),await m.keyboard("[Space]");const l=a.getByText(k[0].name,{selector:"span"}),i=Ft(a.getByTestId("hidden-select-container")).getByDisplayValue(k[0].name);await $(i).toBeVisible(),await $(l).toBeVisible()}),await t("it should change size according to size prop",async()=>{await $(a.getByRole("button")).toHaveStyle({height:e.size==="large"?"48px":"40px"})})}},R={args:{description:"Kiwi and banana are pre-selected",defaultValue:["kiwi","banana"],selectionMode:"multiple"},play:async({canvas:e,step:a})=>{await a("It should display and reflect the pre-selected value",async()=>{await $(e.getByText("2 valda",{selector:"span"})).toBeVisible()})}},O={args:{selectionMode:"multiple",description:"All options are selected",defaultValue:k.map(({id:e})=>e)},play:async({canvas:e,step:a})=>{await a("It should display and reflect the pre-selected values",async()=>{await $(e.getByText(`${k.length} valda`,{selector:"span"})).toBeVisible()})}},W={parameters:{docs:{description:{story:"Avoid using disabled"}},a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}},args:{isDisabled:!0}},N={args:{description:"Kiwi is disabled",disabledKeys:["kiwi"]}},z={args:{isInvalid:!0,errorMessage:"Error msg"}},U={args:{selectionMode:"multiple",showTags:!0,defaultValue:["apple","kiwi"]},play:async({canvas:e,step:a})=>{await a("It should display and reflect the pre-selected values",async()=>{const t=e.getByText("2 valda",{selector:"span"});await $(t).toBeVisible(),await $(e.getByText("Apple",{selector:"div"})).toBeVisible(),await $(e.getByText("Kiwi",{selector:"div"})).toBeVisible()})}},G={args:{selectionMode:"multiple",isSelectableAll:!0},play:async({canvas:e,step:a})=>{await a("It should be possible to select all items",async()=>{await m.tab(),await m.keyboard("[Space]"),await m.tab({shift:!0}),await m.keyboard("[Space]"),await m.keyboard("[Escape]");const t=e.getByText(`${k.length} valda`,{selector:"span"});await $(t).toBeVisible()})}},K={args:{selectionMode:"multiple",isClearable:!1}},X={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{...I.args,selectionMode:"single",isClearable:!1,label:"Ärende",placeholder:"Välj ärende"},render:e=>{const[a,t]=o.useState(null);return n.jsx(_,{...e,value:a,onChange:t,items:[{id:"12",name:"tolv"},{id:"1",name:"ett"},{id:"2",name:"två"}]})},play:async({step:e,canvas:a})=>{await e("It should be possible to select an item with an ID greater than 9",async()=>{await m.tab(),await m.keyboard("[Space]"),await m.keyboard("[Space]");const t=a.getByText("tolv",{selector:"span"});await $(t).toBeVisible()})}},Y={args:{children:n.jsxs(n.Fragment,{children:[n.jsxs(re,{children:[n.jsx(se,{children:"Fruit"}),n.jsx(D,{id:"Apple",children:"Apple"}),n.jsx(D,{id:"Banana",children:"Banana"})]}),n.jsxs(re,{children:[n.jsx(se,{children:"Vegetables"}),n.jsx(D,{id:"Cabbage",children:"Cabbage"}),n.jsx(D,{id:"Broccoli",children:"Broccoli"})]})]})}},J={args:{...I.args,items:Va,children:e=>n.jsxs(re,{id:e.name,children:[n.jsx(se,{children:e.name}),n.jsx(Ea,{items:e.children,children:a=>n.jsx(D,{id:a.id,children:a.name})})]})},play:async({step:e})=>{const a=_t(console,"warn").mockImplementation(he());await e("It should not warn about missing aria labels when toggling the select open state",async()=>{await m.tab(),await m.keyboard("[Space]"),await m.keyboard("[Space]"),await $(a).toHaveBeenCalledTimes(0)})}},Q={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{selectionMode:"single",isRequired:!0},render:e=>n.jsxs("form",{onSubmit:a=>{a.preventDefault(),ye()},children:[n.jsx(_,{...e}),n.jsx("button",{type:"submit",children:"submit"})]}),play:async({step:e})=>{await e("It should give a validation error if the user submitted without selecting an option",async()=>{await m.tab(),await m.tab(),await m.keyboard("[Enter]"),await $(ye).not.toHaveBeenCalled()})}},Z={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{selectionMode:"multiple"},play:async({canvas:e,step:a})=>{await a("It should be possible to deselect all items to empty the selection",async()=>{await m.tab(),await m.keyboard("[Space]"),await m.keyboard("[Space]"),await m.keyboard("[Space]"),await m.keyboard("[Escape]");const t=e.getByText("Select an option",{selector:"span"});await $(t).toBeVisible()}),await a("It should be possible to press escape to exit the select without clearing the selections made",async()=>{await m.keyboard("[Space]"),await m.keyboard("[ArrowDown]"),await m.keyboard("[Space]"),await m.keyboard("[Escape]");const t=e.getByText("2 valda",{selector:"span"});await $(t).toBeVisible()})}};var ge,Ve,xe;j.parameters={...j.parameters,docs:{...(ge=j.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    label: 'label',
    description: 'static',
    children: <>
        <ListBoxItem>Hello</ListBoxItem>
        <ListBoxItem>Goodbye</ListBoxItem>
      </>
  }
}`,...(xe=(Ve=j.parameters)==null?void 0:Ve.docs)==null?void 0:xe.source}}};var Ee,Se,Te;I.parameters={...I.parameters,docs:{...(Ee=I.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Te=(Se=I.parameters)==null?void 0:Se.docs)==null?void 0:Te.source}}};var Me,we,$e;R.parameters={...R.parameters,docs:{...(Me=R.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...($e=(we=R.parameters)==null?void 0:we.docs)==null?void 0:$e.source}}};var Ce,qe,He;O.parameters={...O.parameters,docs:{...(Ce=O.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(He=(qe=O.parameters)==null?void 0:qe.docs)==null?void 0:He.source}}};var De,Be,Pe;W.parameters={...W.parameters,docs:{...(De=W.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Pe=(Be=W.parameters)==null?void 0:Be.docs)==null?void 0:Pe.source}}};var Le,Ie,ke;N.parameters={...N.parameters,docs:{...(Le=N.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi is disabled',
    disabledKeys: ['kiwi']
  }
}`,...(ke=(Ie=N.parameters)==null?void 0:Ie.docs)==null?void 0:ke.source}}};var Ae,Ke,_e;z.parameters={...z.parameters,docs:{...(Ae=z.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Error msg'
  }
}`,...(_e=(Ke=z.parameters)==null?void 0:Ke.docs)==null?void 0:_e.source}}};var Fe,je,Re;U.parameters={...U.parameters,docs:{...(Fe=U.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Re=(je=U.parameters)==null?void 0:je.docs)==null?void 0:Re.source}}};var Oe,We,Ne;G.parameters={...G.parameters,docs:{...(Oe=G.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Ne=(We=G.parameters)==null?void 0:We.docs)==null?void 0:Ne.source}}};var ze,Ue,Ge,Xe,Ye;K.parameters={...K.parameters,docs:{...(ze=K.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    isClearable: false
  }
}`,...(Ge=(Ue=K.parameters)==null?void 0:Ue.docs)==null?void 0:Ge.source},description:{story:"As default all options are clearable. `isClearable={false}` Experimental feature",...(Ye=(Xe=K.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.description}}};var Je,Qe,Ze;X.parameters={...X.parameters,docs:{...(Je=X.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Ze=(Qe=X.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source}}};var ea,aa,ta;Y.parameters={...Y.parameters,docs:{...(ea=Y.parameters)==null?void 0:ea.docs,source:{originalSource:`{
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
}`,...(ta=(aa=Y.parameters)==null?void 0:aa.docs)==null?void 0:ta.source}}};var na,la,ia;J.parameters={...J.parameters,docs:{...(na=J.parameters)==null?void 0:na.docs,source:{originalSource:`{
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
}`,...(ia=(la=J.parameters)==null?void 0:la.docs)==null?void 0:ia.source}}};var ra,sa,oa;Q.parameters={...Q.parameters,docs:{...(ra=Q.parameters)==null?void 0:ra.docs,source:{originalSource:`{
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
}`,...(oa=(sa=Q.parameters)==null?void 0:sa.docs)==null?void 0:oa.source}}};var da,ua,ca;Z.parameters={...Z.parameters,docs:{...(da=Z.parameters)==null?void 0:da.docs,source:{originalSource:`{
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
}`,...(ca=(ua=Z.parameters)==null?void 0:ua.docs)==null?void 0:ca.source}}};const Yn=["StaticItems","Normal","DefaultValue","AllKeysSelected","Disabled","DisabledOption","Invalid","WithTags","SelectAllEnabled","NotClearable","DS872","StaticSections","DynamicSections","RequiredSingleSelect","MultiSelectTests"];export{O as AllKeysSelected,X as DS872,R as DefaultValue,W as Disabled,N as DisabledOption,J as DynamicSections,z as Invalid,Z as MultiSelectTests,I as Normal,K as NotClearable,Q as RequiredSingleSelect,G as SelectAllEnabled,j as StaticItems,Y as StaticSections,U as WithTags,Yn as __namedExportsOrder,Xn as default};
