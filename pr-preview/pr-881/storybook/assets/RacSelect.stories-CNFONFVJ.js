import{c as pt,r as d,e as g,j as a,o as I,d as mt}from"./iframe-C-Iz7t6i.js";import{c as ft,d as vt}from"./Collection-DvU4f6V1.js";import{b as it,d as rt,$ as st}from"./Button-BkoGYE1W.js";import{b as le,e as bt,l as yt,$ as ot,h as dt,a as ut,i as ht,j as gt,k as Vt}from"./utils-CAdDMJK0.js";import{$ as xt,F as ve}from"./FieldError-BHsH0zgL.js";import{a as Et}from"./Form-gJM36v-Q.js";import{$ as Tt}from"./intlStrings-ZMTSFH_M.js";import{c as St,d as Mt}from"./ListBox-CatalVQK.js";import{r as wt,h as $t,i as Ct}from"./Dialog-DUOaYIsG.js";import{$ as ue}from"./Text-Bn9yFLt3.js";import{$ as Ht}from"./Hidden-D-7VMopT.js";import{c as ce,i as Dt,a as qt}from"./useFocusRing-De_0TNrE.js";import{$ as Bt}from"./useResizeObserver-BycTE8pF.js";import{$ as Pt}from"./useLocalizedStringFormatter-YclNVuG_.js";import{b as Lt,c as It,a as kt}from"./useFormValidation-C-o4sd_e.js";import{$ as At}from"./useListState-D9owg7Mu.js";import{b as _t}from"./OverlayArrow-e-DiyR2A.js";import{$ as Kt}from"./useControlledState-Dc_4UTe2.js";import{$ as Rt,a as jt}from"./ListKeyboardDelegate-cqiw3FtI.js";import{i as Ft}from"./SelectionManager-DVt92HLx.js";import{$ as Ot}from"./useField-CGYPppZ6.js";import{a as Nt}from"./VisuallyHidden-D8rluU4z.js";import{e as Wt,b as zt}from"./SelectionIndicator-DULyMaTo.js";import{a as Ut,L as Gt}from"./Label-D1ywWQWw.js";import{c as ne}from"./clsx-Ciqy0D92.js";import{C as Xt}from"./Checkbox-Cbydp241.js";import{u as Z}from"./useLocalizedStringFormatter-DQtv4EZ3.js";import{X as Yt}from"./x-9vyyRTLN.js";import{T as Jt,$ as Qt,a as Zt}from"./Tag-DOyrnzGv.js";import{c as ea}from"./clsx-B-dksMZM.js";import{C as ta}from"./chevron-down-CyogGEyL.js";import{T as aa}from"./Text-BDiKw_g1.js";import{P as na}from"./Popover-BlpU_6JO.js";import{L as la,a as q,b as ie,c as re}from"./ListBoxSection-39hLWp6f.js";import"./preload-helper-Dp1pzeXC.js";import"./index-GuzIBqYd.js";import"./index-R4lrnf9Z.js";import"./index-B6-XOfYU.js";import"./useLabels-CvJrZY8k.js";import"./useButton-DawvbpK9.js";import"./DragAndDrop-BtgsyZMl.js";import"./getScrollParent-Dv4xV-sl.js";import"./scrollIntoView-CSgwx9N8.js";import"./Separator-DzUwmt-z.js";import"./RSPContexts-Cmiq4kNp.js";import"./inertValue-3YLKBS7t.js";import"./PressResponder-DESzPfXp.js";import"./useEvent-oq9Y1YOs.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useDescription-DjbadPBe.js";import"./Button-CpYljy5F.js";import"./Button.module-CcWMkJAG.js";import"./Heading-D-MlOLZi.js";import"./info-JojYc3jR.js";import"./createLucideIcon-CgI9-cy6.js";import"./useToggleState-C1ay7cgd.js";import"./useHighlightSelectionDescription-Igzpa33s.js";import"./useUpdateEffect-D08oHLV5.js";import"./useHasTabbableChild-QsKcLBR-.js";import"./Virtualizer-DLc9hBrV.js";function ia(e={}){let{locale:t}=pt();return d.useMemo(()=>new Intl.ListFormat(t,e),[t,e])}const pe=new WeakMap;function ra(e,t,n){let{keyboardDelegate:l,isDisabled:i,isRequired:c,name:y,form:s,validationBehavior:r="aria"}=e,p=Rt({usage:"search",sensitivity:"base"}),u=d.useMemo(()=>l||new jt(t.collection,t.disabledKeys,n,p),[l,t.collection,t.disabledKeys,p,n]),{menuTriggerProps:f,menuProps:V}=wt({isDisabled:i,type:"listbox"},t,n),x=h=>{if(t.selectionManager.selectionMode!=="multiple")switch(h.key){case"ArrowLeft":{var B,P;h.preventDefault();let A=t.selectedKey!=null?(B=u.getKeyAbove)===null||B===void 0?void 0:B.call(u,t.selectedKey):(P=u.getFirstKey)===null||P===void 0?void 0:P.call(u);A&&t.setSelectedKey(A);break}case"ArrowRight":{var te,ae;h.preventDefault();let A=t.selectedKey!=null?(te=u.getKeyBelow)===null||te===void 0?void 0:te.call(u,t.selectedKey):(ae=u.getFirstKey)===null||ae===void 0?void 0:ae.call(u);A&&t.setSelectedKey(A);break}}},{typeSelectProps:v}=Ft({keyboardDelegate:u,selectionManager:t.selectionManager,onTypeSelect(h){t.setSelectedKey(h)}}),{isInvalid:M,validationErrors:w,validationDetails:b}=t.displayValidation,{labelProps:E,fieldProps:S,descriptionProps:o,errorMessageProps:H}=Ot({...e,labelElementType:"span",isInvalid:M,errorMessage:e.errorMessage||w});v.onKeyDown=v.onKeyDownCapture,delete v.onKeyDownCapture,t.selectionManager.selectionMode==="multiple"&&(v={});let D=ce(e,{labelable:!0}),T=le(v,f,S),K=bt();return pe.set(t,{isDisabled:i,isRequired:c,name:y,form:s,validationBehavior:r}),{labelProps:{...E,onClick:()=>{if(!e.isDisabled){var h;(h=n.current)===null||h===void 0||h.focus(),Dt("keyboard")}}},triggerProps:le(D,{...T,isDisabled:i,onKeyDown:yt(T.onKeyDown,x,e.onKeyDown),onKeyUp:e.onKeyUp,"aria-labelledby":[K,T["aria-labelledby"],T["aria-label"]&&!T["aria-labelledby"]?T.id:null].filter(Boolean).join(" "),onFocus(h){t.isFocused||(e.onFocus&&e.onFocus(h),e.onFocusChange&&e.onFocusChange(!0),t.setFocused(!0))},onBlur(h){t.isOpen||(e.onBlur&&e.onBlur(h),e.onFocusChange&&e.onFocusChange(!1),t.setFocused(!1))}}),valueProps:{id:K},menuProps:{...V,autoFocus:t.focusStrategy||!0,shouldSelectOnPressUp:!0,shouldFocusOnHover:!0,disallowEmptySelection:!0,linkBehavior:"selection",onBlur:h=>{h.currentTarget.contains(h.relatedTarget)||(e.onBlur&&e.onBlur(h),e.onFocusChange&&e.onFocusChange(!1),t.setFocused(!1))},"aria-labelledby":[S["aria-labelledby"],T["aria-label"]&&!S["aria-labelledby"]?T.id:null].filter(Boolean).join(" ")},descriptionProps:o,errorMessageProps:H,isInvalid:M,validationErrors:w,validationDetails:b,hiddenSelectProps:{isDisabled:i,name:y,label:e.label,state:t,triggerRef:n,form:s}}}function sa(e,t,n){let l=pe.get(t)||{},{autoComplete:i,name:c=l.name,form:y=l.form,isDisabled:s=l.isDisabled}=e,{validationBehavior:r,isRequired:p}=l,{visuallyHiddenProps:u}=Nt({style:{position:"fixed",top:0,left:0}});Lt(e.selectRef,t.defaultValue,t.setValue),It({validationBehavior:r,focus:()=>{var v;return(v=n.current)===null||v===void 0?void 0:v.focus()}},t,e.selectRef);let f=t.setValue,V=d.useCallback(v=>{v.target.multiple?f(Array.from(v.target.selectedOptions,M=>M.value)):f(v.currentTarget.value)},[f]);var x;return{containerProps:{...u,"aria-hidden":!0,"data-react-aria-prevent-focus":!0,"data-a11y-ignore":"aria-hidden-focus"},inputProps:{style:{display:"none"}},selectProps:{tabIndex:-1,autoComplete:i,disabled:s,multiple:t.selectionManager.selectionMode==="multiple",required:r==="native"&&p,name:c,form:y,value:(x=t.value)!==null&&x!==void 0?x:"",onChange:V,onInput:V}}}function oa(e){let{state:t,triggerRef:n,label:l,name:i,form:c,isDisabled:y}=e,s=d.useRef(null),r=d.useRef(null),{containerProps:p,selectProps:u}=sa({...e,selectRef:t.collection.size<=300?s:r},t,n);if(t.collection.size<=300)return g.createElement("div",{...p,"data-testid":"hidden-select-container"},g.createElement("label",null,l,g.createElement("select",{...u,ref:s},g.createElement("option",null),[...t.collection.getKeys()].map(f=>{let V=t.collection.getItem(f);if(V&&V.type==="item")return g.createElement("option",{key:V.key,value:V.key},V.textValue)}))));if(i){let f=pe.get(t)||{},{validationBehavior:V}=f,x=Array.isArray(t.value)?t.value:[t.value];x.length===0&&(x=[null]);let v=x.map((M,w)=>{let b={type:"hidden",autoComplete:u.autoComplete,name:i,form:c,disabled:y,value:M??""};return V==="native"?g.createElement("input",{key:w,...b,ref:w===0?r:null,style:{display:"none"},type:"text",required:w===0?u.required:!1,onChange:()=>{}}):g.createElement("input",{key:w,...b,ref:w===0?r:null})});return g.createElement(g.Fragment,null,v)}return null}function da(e){let{selectionMode:t="single"}=e,n=_t(e),[l,i]=d.useState(null),c=d.useMemo(()=>{var o;return e.defaultValue!==void 0?e.defaultValue:t==="single"?(o=e.defaultSelectedKey)!==null&&o!==void 0?o:null:[]},[e.defaultValue,e.defaultSelectedKey,t]),y=d.useMemo(()=>e.value!==void 0?e.value:t==="single"?e.selectedKey:void 0,[e.value,e.selectedKey,t]),[s,r]=Kt(y,c,e.onChange),p=t==="single"&&Array.isArray(s)?s[0]:s,u=o=>{if(t==="single"){var H,D;let T=Array.isArray(o)?(D=o[0])!==null&&D!==void 0?D:null:o;r(T),T!==p&&((H=e.onSelectionChange)===null||H===void 0||H.call(e,T))}else{let T=[];Array.isArray(o)?T=o:o!=null&&(T=[o]),r(T)}},f=At({...e,selectionMode:t,disallowEmptySelection:t==="single",allowDuplicateSelectionEvents:!0,selectedKeys:d.useMemo(()=>ua(p),[p]),onSelectionChange:o=>{if(o!=="all"){if(t==="single"){var H;let D=(H=o.values().next().value)!==null&&H!==void 0?H:null;u(D),n.close()}else u([...o]);v.commitValidation()}}}),V=f.selectionManager.firstSelectedKey,x=d.useMemo(()=>[...f.selectionManager.selectedKeys].map(o=>f.collection.getItem(o)).filter(o=>o!=null),[f.selectionManager.selectedKeys,f.collection]),v=kt({...e,value:Array.isArray(p)&&p.length===0?null:p}),[M,w]=d.useState(!1),[b]=d.useState(p);var E,S;return{...v,...f,...n,value:p,defaultValue:c??b,setValue:u,selectedKey:V,setSelectedKey:u,selectedItem:(E=x[0])!==null&&E!==void 0?E:null,selectedItems:x,defaultSelectedKey:(S=e.defaultSelectedKey)!==null&&S!==void 0?S:e.selectionMode==="single"?b:null,focusStrategy:l,open(o=null){f.collection.size!==0&&(i(o),n.open())},toggle(o=null){f.collection.size!==0&&(i(o),n.toggle())},isFocused:M,setFocused:w}}function ua(e){if(e!==void 0)return e===null?[]:Array.isArray(e)?e:[e]}function ca(e){return e&&e.__esModule?e.default:e}const me=d.createContext(null),k=d.createContext(null),pa=d.forwardRef(function(t,n){[t,n]=ot(t,n,me);let{children:l,isDisabled:i=!1,isInvalid:c=!1,isRequired:y=!1}=t,s=d.useMemo(()=>typeof l=="function"?l({isOpen:!1,isDisabled:i,isInvalid:c,isRequired:y,isFocused:!1,isFocusVisible:!1,defaultChildren:null}):l,[l,i,c,y]);return g.createElement(ft,{content:s},r=>g.createElement(fa,{props:t,collection:r,selectRef:n}))}),ma=[it,rt,ue];function fa({props:e,selectRef:t,collection:n}){let{validationBehavior:l}=dt(Et)||{};var i,c;let y=(c=(i=e.validationBehavior)!==null&&i!==void 0?i:l)!==null&&c!==void 0?c:"native",s=da({...e,collection:n,children:void 0,validationBehavior:y}),{isFocusVisible:r,focusProps:p}=qt({within:!0}),u=d.useRef(null),[f,V]=ht(!e["aria-label"]&&!e["aria-labelledby"]),{labelProps:x,triggerProps:v,valueProps:M,menuProps:w,descriptionProps:b,errorMessageProps:E,hiddenSelectProps:S,...o}=ra({...gt(e),label:V,validationBehavior:y},s,u),[H,D]=d.useState(null),T=d.useCallback(()=>{u.current&&D(u.current.offsetWidth+"px")},[u]);Bt({ref:u,onResize:T});let K=d.useMemo(()=>({isOpen:s.isOpen,isFocused:s.isFocused,isFocusVisible:r,isDisabled:e.isDisabled||!1,isInvalid:o.isInvalid||!1,isRequired:e.isRequired||!1}),[s.isOpen,s.isFocused,r,e.isDisabled,o.isInvalid,e.isRequired]),h=ut({...e,values:K,defaultClassName:"react-aria-Select"}),B=ce(e,{global:!0});delete B.id;let P=d.useRef(null);return g.createElement(Vt,{values:[[me,e],[k,s],[ct,M],[it,{...x,ref:f,elementType:"span"}],[rt,{...v,ref:u,isPressed:s.isOpen,autoFocus:e.autoFocus}],[$t,s],[Ct,{trigger:"Select",triggerRef:u,scrollRef:P,placement:"bottom start",style:{"--trigger-width":H},"aria-labelledby":w["aria-labelledby"],clearContexts:ma}],[St,{...w,ref:P}],[Mt,s],[ue,{slots:{description:b,errorMessage:E}}],[xt,o]]},g.createElement("div",{...le(B,h,p),ref:t,slot:e.slot||void 0,"data-focused":s.isFocused||void 0,"data-focus-visible":r||void 0,"data-open":s.isOpen||void 0,"data-disabled":e.isDisabled||void 0,"data-invalid":o.isInvalid||void 0,"data-required":e.isRequired||void 0},h.children,g.createElement(oa,{...S,autoComplete:e.autoComplete})))}const ct=d.createContext(null),va=Ht(function(t,n){var l;[t,n]=ot(t,n,ct);let i=d.useContext(k),{placeholder:c}=dt(me),y=i.selectedItems.map(b=>{var E;let S=(E=b.props)===null||E===void 0?void 0:E.children;return typeof S=="function"&&(S=S({isHovered:!1,isPressed:!1,isSelected:!1,isFocused:!1,isFocusVisible:!1,isDisabled:!1,selectionMode:"single",selectionBehavior:"toggle"})),S}),s=ia(),r=d.useMemo(()=>i.selectedItems.map(b=>b==null?void 0:b.textValue),[i.selectedItems]),p=i.selectionManager.selectionMode,u=d.useMemo(()=>{var b;return p==="single"?(b=r[0])!==null&&b!==void 0?b:"":s.format(r)},[p,s,r]),f=d.useMemo(()=>{if(p==="single")return y[0];let b=s.formatToParts(r);if(b.length===0)return null;let E=0;return b.map(S=>S.type==="element"?g.createElement(d.Fragment,{key:E},y[E++]):S.value)},[p,s,r,y]),V=Pt(ca(Tt),"react-aria-components");var x,v;let M=ut({...t,defaultChildren:(x=f??c)!==null&&x!==void 0?x:V.format("selectPlaceholder"),defaultClassName:"react-aria-SelectValue",values:{selectedItem:(v=(l=i.selectedItems[0])===null||l===void 0?void 0:l.value)!==null&&v!==void 0?v:null,selectedItems:d.useMemo(()=>i.selectedItems.map(b=>{var E;return(E=b.value)!==null&&E!==void 0?E:null}),[i.selectedItems]),selectedText:u,isPlaceholder:i.selectedItems.length===0,state:i}}),w=ce(t,{global:!0});return g.createElement("span",{ref:n,...w,...M,"data-placeholder":i.selectedItems.length===0||void 0},g.createElement(ue.Provider,{value:void 0},M.children))}),ba={clearAll:"Clear all",selectAll:"Select all",selectedItems:"Selected items",selected:"selected"},ya={clearAll:"Rensa alla",selectAll:"Välj alla",selectedItems:"Valda objekt",selected:"valda"},ee={en:ba,sv:ya},ha="_select_fb41t_1",ga="_triggerContainer_fb41t_6",Va="_trigger_fb41t_6",xa="_medium_fb41t_26",Ea="_selectValue_fb41t_68",Ta="_placeholder_fb41t_77",Sa="_selectValueTag_fb41t_91",Ma="_clearButton_fb41t_105",wa="_truncate_fb41t_117",$a="_popover_fb41t_154",Ca="_selectAll_fb41t_178",Ha="_tagGroup_fb41t_232",C={select:ha,triggerContainer:ga,trigger:Va,medium:xa,selectValue:Ea,placeholder:Ta,selectValueTag:Sa,clearButton:Ma,truncate:wa,popover:$a,selectAll:Ca,tagGroup:Ha},Da=()=>{const e=g.useContext(k),t=Z(ee),n=()=>e==null?void 0:e.setValue(e!=null&&e.selectionManager.isSelectAll?null:Array.from(e.collection.getKeys()));return a.jsx(Xt,{className:C.selectAll,isIndeterminate:!(e!=null&&e.selectionManager.isSelectAll)&&!(e!=null&&e.selectionManager.isEmpty),isSelected:e==null?void 0:e.selectionManager.isSelectAll,onChange:n,children:t.format("selectAll")})},se=({isDisabled:e,selectedItems:t,selectedText:n})=>{const l=Z(ee),i=()=>t.length===1?n:`${t.length} ${l.format("selected")}`;return a.jsxs("div",{className:C.selectValueTag,"data-disabled":e||void 0,children:[a.jsx("span",{className:C.truncate,children:i()}),a.jsx(qa,{isDisabled:e})]})},qa=({isDisabled:e})=>{const t=g.useContext(k),n=Z(ee),l=Wt(),i=()=>{l==null||l.focusFirst(),t==null||t.setValue(null)};return a.jsx(st,{"aria-label":n.format("clearAll"),className:C.clearButton,onPress:i,slot:null,isDisabled:e,children:a.jsx(Yt,{width:20,height:20})})};try{se.displayName="SelectValueTag",se.__docgenInfo={description:"",displayName:"SelectValueTag",props:{isPlaceholder:{defaultValue:null,description:`Whether the value is a placeholder.
@selector [data-placeholder]`,name:"isPlaceholder",required:!0,type:{name:"boolean"}},selectedItem:{defaultValue:null,description:`The object value of the first selected item.
@deprecated`,name:"selectedItem",required:!0,type:{name:"object | null"}},selectedItems:{defaultValue:null,description:"The object values of the currently selected items.",name:"selectedItems",required:!0,type:{name:"(T | null)[]"}},selectedText:{defaultValue:null,description:"The textValue of the currently selected items.",name:"selectedText",required:!0,type:{name:"string"}},state:{defaultValue:null,description:"The state of the select.",name:"state",required:!0,type:{name:'SelectState<T, "single" | "multiple">'}},isDisabled:{defaultValue:null,description:"Whether the input is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}}}}}catch{}const oe=({showTags:e,isDisabled:t})=>{const n=Z(ee),l=d.useContext(k),i=c=>{l==null||l.selectionManager.toggleSelection(Array.from(c)[0])};return!(l!=null&&l.selectedItems.length)||!e?null:a.jsx(Jt,{"aria-label":n.format("selectedItems"),className:C.tagGroup,onRemove:i,selectionBehavior:"toggle",children:a.jsx(Qt,{items:l.selectedItems,children:c=>a.jsx(Zt,{dismissable:!0,id:c.key,isDisabled:t,textValue:c.textValue,children:c.textValue},c.key)})})};try{oe.displayName="SelectTags",oe.__docgenInfo={description:"",displayName:"SelectTags",props:{isDisabled:{defaultValue:null,description:"Whether the input is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},showTags:{defaultValue:null,description:"Show selected items as tags below select",name:"showTags",required:!1,type:{name:"boolean"}}}}}catch{}const de=({size:e})=>{const t=d.useContext(k);return a.jsx(st,{className:ea({[C.medium]:e==="medium"},C.trigger),"data-invalid":!!(t!=null&&t.displayValidation.isInvalid)||void 0,children:a.jsx("span",{"aria-hidden":"true",style:{display:"flex"},children:a.jsx(ta,{size:20})})})};try{de.displayName="SelectTrigger",de.__docgenInfo={description:"",displayName:"SelectTrigger",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'}]}}}}}catch{}function _({children:e,description:t,errorMessage:n,errorPosition:l="top",items:i,label:c,popover:y,size:s="large",...r}){return a.jsx(zt,{children:a.jsxs(pa,{...r,className:ne(r.className,C.select),children:[a.jsx(Ut,{popover:y,children:c&&a.jsx(Gt,{"data-disabled":r.isDisabled||void 0,children:c})}),t&&a.jsx(aa,{slot:"description",children:t}),l==="top"&&a.jsx(ve,{children:n}),a.jsxs("div",{className:C.triggerContainer,"data-disabled":r.isDisabled||void 0,children:[a.jsx(de,{size:s}),a.jsx(va,{className:C.selectValue,"data-disabled":r.isDisabled||void 0,children:p=>p.isPlaceholder||r.selectionMode!=="multiple"?a.jsx("div",{className:ne(C.placeholder),children:a.jsx("span",{className:ne(C.truncate),children:p.defaultChildren})}):a.jsx(se,{...r,...p})})]}),l==="bottom"&&a.jsx(ve,{children:n}),a.jsxs(na,{className:C.popover,offset:0,hideArrow:!0,children:[r.isSelectableAll&&a.jsx(Da,{}),a.jsx(la,{escapeKeyBehavior:"none",items:i,children:e})]}),a.jsx(oe,{...r})]})})}try{_.displayName="RacSelect",_.__docgenInfo={description:"",displayName:"RacSelect",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string | ((validation: ValidationResult) => string)"}},errorPosition:{defaultValue:{value:"top"},description:"The position of the error message",name:"errorPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},isSelectableAll:{defaultValue:null,description:"Whether to show a button to select all items.",name:"isSelectableAll",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"Iterable<T>"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},popover:{defaultValue:null,description:"An assistive text that helps the user understand the field better. Will be hidden in a popover with an info icon button.",name:"popover",required:!1,type:{name:"InfoPopoverProps"}},showTags:{defaultValue:null,description:"Show selected items as tags below select",name:"showTags",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"large"},description:"Component size (large: height 48px, medium: height 40px)",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'}]}},isDisabled:{defaultValue:null,description:"Whether the input is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"ClassNameOrFunction<SelectRenderProps>"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"StyleOrFunction<SelectRenderProps>"}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}},dir:{defaultValue:null,description:"",name:"dir",required:!1,type:{name:"string"}},lang:{defaultValue:null,description:"",name:"lang",required:!1,type:{name:"string"}},hidden:{defaultValue:null,description:"",name:"hidden",required:!1,type:{name:"boolean"}},inert:{defaultValue:null,description:"",name:"inert",required:!1,type:{name:"boolean"}},translate:{defaultValue:null,description:"",name:"translate",required:!1,type:{name:"enum",value:[{value:'"yes"'},{value:'"no"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onClickCapture:{defaultValue:null,description:"",name:"onClickCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onAuxClick:{defaultValue:null,description:"",name:"onAuxClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onAuxClickCapture:{defaultValue:null,description:"",name:"onAuxClickCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onContextMenu:{defaultValue:null,description:"",name:"onContextMenu",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onContextMenuCapture:{defaultValue:null,description:"",name:"onContextMenuCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onDoubleClick:{defaultValue:null,description:"",name:"onDoubleClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onDoubleClickCapture:{defaultValue:null,description:"",name:"onDoubleClickCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseDown:{defaultValue:null,description:"",name:"onMouseDown",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseDownCapture:{defaultValue:null,description:"",name:"onMouseDownCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseMove:{defaultValue:null,description:"",name:"onMouseMove",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseMoveCapture:{defaultValue:null,description:"",name:"onMouseMoveCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseOut:{defaultValue:null,description:"",name:"onMouseOut",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseOutCapture:{defaultValue:null,description:"",name:"onMouseOutCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseOver:{defaultValue:null,description:"",name:"onMouseOver",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseOverCapture:{defaultValue:null,description:"",name:"onMouseOverCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseUpCapture:{defaultValue:null,description:"",name:"onMouseUpCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onTouchCancel:{defaultValue:null,description:"",name:"onTouchCancel",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchCancelCapture:{defaultValue:null,description:"",name:"onTouchCancelCapture",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchEnd:{defaultValue:null,description:"",name:"onTouchEnd",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchEndCapture:{defaultValue:null,description:"",name:"onTouchEndCapture",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchMove:{defaultValue:null,description:"",name:"onTouchMove",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchMoveCapture:{defaultValue:null,description:"",name:"onTouchMoveCapture",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchStart:{defaultValue:null,description:"",name:"onTouchStart",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchStartCapture:{defaultValue:null,description:"",name:"onTouchStartCapture",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onPointerDown:{defaultValue:null,description:"",name:"onPointerDown",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerDownCapture:{defaultValue:null,description:"",name:"onPointerDownCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerMove:{defaultValue:null,description:"",name:"onPointerMove",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerMoveCapture:{defaultValue:null,description:"",name:"onPointerMoveCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerUp:{defaultValue:null,description:"",name:"onPointerUp",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerUpCapture:{defaultValue:null,description:"",name:"onPointerUpCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerCancel:{defaultValue:null,description:"",name:"onPointerCancel",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerCancelCapture:{defaultValue:null,description:"",name:"onPointerCancelCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerEnter:{defaultValue:null,description:"",name:"onPointerEnter",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerLeave:{defaultValue:null,description:"",name:"onPointerLeave",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerOver:{defaultValue:null,description:"",name:"onPointerOver",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerOverCapture:{defaultValue:null,description:"",name:"onPointerOverCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerOut:{defaultValue:null,description:"",name:"onPointerOut",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerOutCapture:{defaultValue:null,description:"",name:"onPointerOutCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onGotPointerCapture:{defaultValue:null,description:"",name:"onGotPointerCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onGotPointerCaptureCapture:{defaultValue:null,description:"",name:"onGotPointerCaptureCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onLostPointerCapture:{defaultValue:null,description:"",name:"onLostPointerCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onLostPointerCaptureCapture:{defaultValue:null,description:"",name:"onLostPointerCaptureCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onScroll:{defaultValue:null,description:"",name:"onScroll",required:!1,type:{name:"UIEventHandler<HTMLDivElement>"}},onScrollCapture:{defaultValue:null,description:"",name:"onScrollCapture",required:!1,type:{name:"UIEventHandler<HTMLDivElement>"}},onWheel:{defaultValue:null,description:"",name:"onWheel",required:!1,type:{name:"WheelEventHandler<HTMLDivElement>"}},onWheelCapture:{defaultValue:null,description:"",name:"onWheelCapture",required:!1,type:{name:"WheelEventHandler<HTMLDivElement>"}},onAnimationStart:{defaultValue:null,description:"",name:"onAnimationStart",required:!1,type:{name:"AnimationEventHandler<HTMLDivElement>"}},onAnimationStartCapture:{defaultValue:null,description:"",name:"onAnimationStartCapture",required:!1,type:{name:"AnimationEventHandler<HTMLDivElement>"}},onAnimationEnd:{defaultValue:null,description:"",name:"onAnimationEnd",required:!1,type:{name:"AnimationEventHandler<HTMLDivElement>"}},onAnimationEndCapture:{defaultValue:null,description:"",name:"onAnimationEndCapture",required:!1,type:{name:"AnimationEventHandler<HTMLDivElement>"}},onAnimationIteration:{defaultValue:null,description:"",name:"onAnimationIteration",required:!1,type:{name:"AnimationEventHandler<HTMLDivElement>"}},onAnimationIterationCapture:{defaultValue:null,description:"",name:"onAnimationIterationCapture",required:!1,type:{name:"AnimationEventHandler<HTMLDivElement>"}},onTransitionCancel:{defaultValue:null,description:"",name:"onTransitionCancel",required:!1,type:{name:"TransitionEventHandler<HTMLDivElement>"}},onTransitionCancelCapture:{defaultValue:null,description:"",name:"onTransitionCancelCapture",required:!1,type:{name:"TransitionEventHandler<HTMLDivElement>"}},onTransitionEnd:{defaultValue:null,description:"",name:"onTransitionEnd",required:!1,type:{name:"TransitionEventHandler<HTMLDivElement>"}},onTransitionEndCapture:{defaultValue:null,description:"",name:"onTransitionEndCapture",required:!1,type:{name:"TransitionEventHandler<HTMLDivElement>"}},onTransitionRun:{defaultValue:null,description:"",name:"onTransitionRun",required:!1,type:{name:"TransitionEventHandler<HTMLDivElement>"}},onTransitionRunCapture:{defaultValue:null,description:"",name:"onTransitionRunCapture",required:!1,type:{name:"TransitionEventHandler<HTMLDivElement>"}},onTransitionStart:{defaultValue:null,description:"",name:"onTransitionStart",required:!1,type:{name:"TransitionEventHandler<HTMLDivElement>"}},onTransitionStartCapture:{defaultValue:null,description:"",name:"onTransitionStartCapture",required:!1,type:{name:"TransitionEventHandler<HTMLDivElement>"}},defaultValue:{defaultValue:null,description:"The default value (uncontrolled).",name:"defaultValue",required:!1,type:{name:"Key | Key[] | null"}},autoFocus:{defaultValue:null,description:"Whether the element should receive focus on render.",name:"autoFocus",required:!1,type:{name:"boolean"}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string | null"}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"Identifies the element (or elements) that provide a detailed, extended description for the object.",name:"aria-details",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element.",name:"aria-labelledby",required:!1,type:{name:"string"}},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",required:!1,type:{name:"((e: FocusEvent<Element, Element>) => void)"}},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",required:!1,type:{name:"((e: FocusEvent<Element, Element>) => void)"}},onChange:{defaultValue:null,description:"Handler that is called when the value changes.",name:"onChange",required:!1,type:{name:"((value: ValueType<M>) => void)"}},onKeyDown:{defaultValue:null,description:"Handler that is called when a key is pressed.",name:"onKeyDown",required:!1,type:{name:"((e: KeyboardEvent) => void)"}},onKeyUp:{defaultValue:null,description:"Handler that is called when a key is released.",name:"onKeyUp",required:!1,type:{name:"((e: KeyboardEvent) => void)"}},form:{defaultValue:null,description:"The `<form>` element to associate the input with.\nThe value of this attribute must be the id of a `<form>` in the same document.\nSee [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#form).",name:"form",required:!1,type:{name:"string"}},onFocusChange:{defaultValue:null,description:"Handler that is called when the element's focus status changes.",name:"onFocusChange",required:!1,type:{name:"((isFocused: boolean) => void)"}},isInvalid:{defaultValue:null,description:"Whether the input value is invalid.",name:"isInvalid",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"The current value (controlled).",name:"value",required:!1,type:{name:"Key | Key[] | null"}},name:{defaultValue:null,description:"The name of the input, used when submitting an HTML form.",name:"name",required:!1,type:{name:"string"}},excludeFromTabOrder:{defaultValue:null,description:`Whether to exclude the element from the sequential tab order. If true,
the element will not be focusable via the keyboard by tabbing. This should
be avoided except in rare scenarios where an alternative means of accessing
the element or its functionality via the keyboard is available.`,name:"excludeFromTabOrder",required:!1,type:{name:"boolean"}},disabledKeys:{defaultValue:null,description:"The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with.",name:"disabledKeys",required:!1,type:{name:"Iterable<Key>"}},isRequired:{defaultValue:null,description:"Whether user input is required on the input before form submission.",name:"isRequired",required:!1,type:{name:"boolean"}},validationBehavior:{defaultValue:{value:"'native'"},description:`Whether to use native HTML form validation to prevent form submission
when the value is missing or invalid, or mark the field as required
or invalid via ARIA.`,name:"validationBehavior",required:!1,type:{name:"enum",value:[{value:'"aria"'},{value:'"native"'}]}},validate:{defaultValue:null,description:'A function that returns an error message if a given value is invalid.\nValidation errors are displayed to the user when the form is submitted\nif `validationBehavior="native"`. For realtime validation, use the `isInvalid`\nprop instead.',name:"validate",required:!1,type:{name:"((value: ValidationType<M>) => true | ValidationError | null)"}},placeholder:{defaultValue:{value:"'Select an item' (localized)"},description:"Temporary text that occupies the select when it is empty.",name:"placeholder",required:!1,type:{name:"string"}},onSelectionChange:{defaultValue:null,description:`Handler that is called when the selection changes.
@deprecated`,name:"onSelectionChange",required:!1,type:{name:"((key: Key | null) => void)"}},selectedKey:{defaultValue:null,description:`The currently selected key in the collection (controlled).
@deprecated`,name:"selectedKey",required:!1,type:{name:"Key | null"}},defaultSelectedKey:{defaultValue:null,description:`The initial selected key in the collection (uncontrolled).
@deprecated`,name:"defaultSelectedKey",required:!1,type:{name:"Key"}},onOpenChange:{defaultValue:null,description:"Method that is called when the open state of the menu changes.",name:"onOpenChange",required:!1,type:{name:"((isOpen: boolean) => void)"}},autoComplete:{defaultValue:null,description:"Describes the type of autocomplete functionality the input should provide if any. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautocomplete).",name:"autoComplete",required:!1,type:{name:"string"}},isOpen:{defaultValue:null,description:"Sets the open state of the menu.",name:"isOpen",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:null,description:"Sets the default open state of the menu.",name:"defaultOpen",required:!1,type:{name:"boolean"}},selectionMode:{defaultValue:{value:"'single'"},description:"Whether single or multiple selection is enabled.",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"single"'},{value:'"multiple"'}]}}}}}catch{}const{expect:$,fn:fe,spyOn:Ba,userEvent:m,within:Pa}=__STORYBOOK_MODULE_TEST__,La=fe(),be=fe(),Fn={component:_,title:"Components/RacSelect",tags:["autodocs"],args:{children:e=>a.jsx(q,{...e,children:e.name}),description:"Description",isDisabled:!1,isSelectableAll:!1,label:"Label",items:I,placeholder:"Select an option",selectionMode:"single",showTags:!1,errorPosition:"top",onSelectionChange:La,size:"large"}},R={args:{label:"label",description:"static",children:a.jsxs(a.Fragment,{children:[a.jsx(q,{children:"Hello"}),a.jsx(q,{children:"Goodbye"})]})}},L={play:async({args:e,canvas:t,step:n})=>{await n("It should be possible to select an item using the keyboard",async()=>{await m.tab(),await m.keyboard("[Space]"),await m.keyboard("[Space]");const l=t.getByText(I[0].name,{selector:"span"}),i=Pa(t.getByTestId("hidden-select-container")).getByDisplayValue(I[0].name);await $(i).toBeVisible(),await $(l).toBeVisible()}),await n("it should change size according to size prop",async()=>{await $(t.getByRole("button")).toHaveStyle({height:e.size==="large"?"48px":"40px"})})}},j={args:{description:"Kiwi and banana are pre-selected",defaultValue:["kiwi","banana"],selectionMode:"multiple"},play:async({canvas:e,step:t})=>{await t("It should display and reflect the pre-selected value",async()=>{await $(e.getByText("2 valda",{selector:"span"})).toBeVisible()})}},F={args:{selectionMode:"multiple",description:"All options are selected",defaultValue:I.map(({id:e})=>e)},play:async({canvas:e,step:t})=>{await t("It should display and reflect the pre-selected values",async()=>{await $(e.getByText(`${I.length} valda`,{selector:"span"})).toBeVisible()})}},O={parameters:{docs:{description:{story:"Avoid using disabled"}},a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}},args:{isDisabled:!0}},N={args:{description:"Kiwi is disabled",disabledKeys:["kiwi"]}},W={args:{isInvalid:!0,errorMessage:"Error msg"}},z={args:{selectionMode:"multiple",showTags:!0,defaultValue:["apple","kiwi"]},play:async({canvas:e,step:t})=>{await t("It should display and reflect the pre-selected values",async()=>{const n=e.getByText("2 valda",{selector:"span"});await $(n).toBeVisible(),await $(e.getByText("Apple",{selector:"div"})).toBeVisible(),await $(e.getByText("Kiwi",{selector:"div"})).toBeVisible()})}},U={args:{selectionMode:"multiple",isSelectableAll:!0},play:async({canvas:e,step:t})=>{await t("It should be possible to select all items",async()=>{await m.tab(),await m.keyboard("[Space]"),await m.tab({shift:!0}),await m.keyboard("[Space]"),await m.keyboard("[Escape]");const n=e.getByText(`${I.length} valda`,{selector:"span"});await $(n).toBeVisible()})}},G={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{...L.args,selectionMode:"single",label:"Ärende",placeholder:"Välj ärende"},render:e=>{const[t,n]=d.useState(null);return a.jsx(_,{...e,value:t,onChange:n,items:[{id:"12",name:"tolv"},{id:"1",name:"ett"},{id:"2",name:"två"}]})},play:async({step:e,canvas:t})=>{await e("It should be possible to select an item with an ID greater than 9",async()=>{await m.tab(),await m.keyboard("[Space]"),await m.keyboard("[Space]");const n=t.getByText("tolv",{selector:"span"});await $(n).toBeVisible()})}},X={args:{children:a.jsxs(a.Fragment,{children:[a.jsxs(ie,{children:[a.jsx(re,{children:"Fruit"}),a.jsx(q,{id:"Apple",children:"Apple"}),a.jsx(q,{id:"Banana",children:"Banana"})]}),a.jsxs(ie,{children:[a.jsx(re,{children:"Vegetables"}),a.jsx(q,{id:"Cabbage",children:"Cabbage"}),a.jsx(q,{id:"Broccoli",children:"Broccoli"})]})]})}},Y={args:{...L.args,items:mt,children:e=>a.jsxs(ie,{id:e.name,children:[a.jsx(re,{children:e.name}),a.jsx(vt,{items:e.children,children:t=>a.jsx(q,{id:t.id,children:t.name})})]})},play:async({step:e})=>{const t=Ba(console,"warn").mockImplementation(fe());await e("It should not warn about missing aria labels when toggling the select open state",async()=>{await m.tab(),await m.keyboard("[Space]"),await m.keyboard("[Space]"),await $(t).toHaveBeenCalledTimes(0)})}},J={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{selectionMode:"single",isRequired:!0},render:e=>a.jsxs("form",{onSubmit:t=>{t.preventDefault(),be()},children:[a.jsx(_,{...e}),a.jsx("button",{type:"submit",children:"submit"})]}),play:async({step:e})=>{await e("It should give a validation error if the user submitted without selecting an option",async()=>{await m.tab(),await m.tab(),await m.keyboard("[Enter]"),await $(be).not.toHaveBeenCalled()})}},Q={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{selectionMode:"multiple"},play:async({canvas:e,step:t})=>{await t("It should be possible to deselect all items to empty the selection",async()=>{await m.tab(),await m.keyboard("[Space]"),await m.keyboard("[Space]"),await m.keyboard("[Space]"),await m.keyboard("[Escape]");const n=e.getByText("Select an option",{selector:"span"});await $(n).toBeVisible()}),await t("It should be possible to press escape to exit the select without clearing the selections made",async()=>{await m.keyboard("[Space]"),await m.keyboard("[ArrowDown]"),await m.keyboard("[Space]"),await m.keyboard("[Escape]");const n=e.getByText("2 valda",{selector:"span"});await $(n).toBeVisible()})}};var ye,he,ge;R.parameters={...R.parameters,docs:{...(ye=R.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    label: 'label',
    description: 'static',
    children: <>
        <ListBoxItem>Hello</ListBoxItem>
        <ListBoxItem>Goodbye</ListBoxItem>
      </>
  }
}`,...(ge=(he=R.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var Ve,xe,Ee;L.parameters={...L.parameters,docs:{...(Ve=L.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Ee=(xe=L.parameters)==null?void 0:xe.docs)==null?void 0:Ee.source}}};var Te,Se,Me;j.parameters={...j.parameters,docs:{...(Te=j.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Me=(Se=j.parameters)==null?void 0:Se.docs)==null?void 0:Me.source}}};var we,$e,Ce;F.parameters={...F.parameters,docs:{...(we=F.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(Ce=($e=F.parameters)==null?void 0:$e.docs)==null?void 0:Ce.source}}};var He,De,qe;O.parameters={...O.parameters,docs:{...(He=O.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(qe=(De=O.parameters)==null?void 0:De.docs)==null?void 0:qe.source}}};var Be,Pe,Le;N.parameters={...N.parameters,docs:{...(Be=N.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi is disabled',
    disabledKeys: ['kiwi']
  }
}`,...(Le=(Pe=N.parameters)==null?void 0:Pe.docs)==null?void 0:Le.source}}};var Ie,ke,Ae;W.parameters={...W.parameters,docs:{...(Ie=W.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Error msg'
  }
}`,...(Ae=(ke=W.parameters)==null?void 0:ke.docs)==null?void 0:Ae.source}}};var _e,Ke,Re;z.parameters={...z.parameters,docs:{...(_e=z.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(Re=(Ke=z.parameters)==null?void 0:Ke.docs)==null?void 0:Re.source}}};var je,Fe,Oe;U.parameters={...U.parameters,docs:{...(je=U.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Oe=(Fe=U.parameters)==null?void 0:Fe.docs)==null?void 0:Oe.source}}};var Ne,We,ze;G.parameters={...G.parameters,docs:{...(Ne=G.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    ...Normal.args,
    selectionMode: 'single',
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
}`,...(ze=(We=G.parameters)==null?void 0:We.docs)==null?void 0:ze.source}}};var Ue,Ge,Xe;X.parameters={...X.parameters,docs:{...(Ue=X.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(Xe=(Ge=X.parameters)==null?void 0:Ge.docs)==null?void 0:Xe.source}}};var Ye,Je,Qe;Y.parameters={...Y.parameters,docs:{...(Ye=Y.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(Qe=(Je=Y.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Ze,et,tt;J.parameters={...J.parameters,docs:{...(Ze=J.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(tt=(et=J.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var at,nt,lt;Q.parameters={...Q.parameters,docs:{...(at=Q.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(lt=(nt=Q.parameters)==null?void 0:nt.docs)==null?void 0:lt.source}}};const On=["StaticItems","Normal","DefaultValue","AllKeysSelected","Disabled","DisabledOption","Invalid","WithTags","SelectAllEnabled","DS872","StaticSections","DynamicSections","RequiredSingleSelect","MultiSelectTests"];export{F as AllKeysSelected,G as DS872,j as DefaultValue,O as Disabled,N as DisabledOption,Y as DynamicSections,W as Invalid,Q as MultiSelectTests,L as Normal,J as RequiredSingleSelect,U as SelectAllEnabled,R as StaticItems,X as StaticSections,z as WithTags,On as __namedExportsOrder,Fn as default};
