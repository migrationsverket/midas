import{j as s}from"./jsx-runtime-Nms4Y4qS.js";import{r as f,R as b}from"./index-BwDkhjyp.js";import{a as N,b as S,c as q,d as z,e as D,f as W,g as O,h as k,i as w,j as A,k as L}from"./Form-BnF4q38W.js";import{l as U,n as T,s as G,b as C,c as R,d as H,e as j,f as F,w as J,x as K,y as Q,z as X}from"./useFocusable-oEo1n-jK.js";import{a as Y}from"./Hidden-CeomKQRv.js";import{$ as Z}from"./useControlledState-CktEcWfI.js";import{B as ee}from"./Button-C_z7reC9.js";import{T as ae}from"./triangle-alert-BkMwT_kE.js";function te(e,a){let{inputElementType:n="input",isDisabled:t=!1,isRequired:i=!1,isReadOnly:l=!1,type:c="text",validationBehavior:d="aria"}=e,[o,$]=Z(e.value,e.defaultValue||"",e.onChange),{focusableProps:x}=U(e,a),p=N({...e,value:o}),{isInvalid:r,validationErrors:v,validationDetails:I}=p.displayValidation,{labelProps:m,fieldProps:g,descriptionProps:P,errorMessageProps:y}=S({...e,isInvalid:r,errorMessage:e.errorMessage||v}),h=T(e,{labelable:!0});const M={type:c,pattern:e.pattern};return q(a,o,$),z(e,p,a),f.useEffect(()=>{if(a.current instanceof G(a.current).HTMLTextAreaElement){let _=a.current;Object.defineProperty(_,"defaultValue",{get:()=>_.value,set:()=>{},configurable:!0})}},[a]),{labelProps:m,inputProps:C(h,n==="input"?M:void 0,{disabled:t,readOnly:l,required:i&&d==="native","aria-required":i&&d==="aria"||void 0,"aria-invalid":r||void 0,"aria-errormessage":e["aria-errormessage"],"aria-activedescendant":e["aria-activedescendant"],"aria-autocomplete":e["aria-autocomplete"],"aria-haspopup":e["aria-haspopup"],value:o,onChange:_=>$(_.target.value),autoComplete:e.autoComplete,autoCapitalize:e.autoCapitalize,maxLength:e.maxLength,minLength:e.minLength,name:e.name,placeholder:e.placeholder,inputMode:e.inputMode,onCopy:e.onCopy,onCut:e.onCut,onPaste:e.onPaste,onCompositionEnd:e.onCompositionEnd,onCompositionStart:e.onCompositionStart,onCompositionUpdate:e.onCompositionUpdate,onSelect:e.onSelect,onBeforeInput:e.onBeforeInput,onInput:e.onInput,...x,...g}),descriptionProps:P,errorMessageProps:y,isInvalid:r,validationErrors:v,validationDetails:I}}const V=f.createContext({});let ie=e=>{let{onHoverStart:a,onHoverChange:n,onHoverEnd:t,...i}=e;return i};function ne(e,a){[e,a]=R(e,a,V);let{hoverProps:n,isHovered:t}=H(e),{isFocused:i,isFocusVisible:l,focusProps:c}=j({isTextInput:!0,autoFocus:e.autoFocus}),d=!!e["aria-invalid"]&&e["aria-invalid"]!=="false",o=F({...e,values:{isHovered:t,isFocused:i,isFocusVisible:l,isDisabled:e.disabled||!1,isInvalid:d},defaultClassName:"react-aria-Input"});return b.createElement("input",{...C(ie(e),c,n),...o,ref:a,"data-focused":i||void 0,"data-disabled":e.disabled||void 0,"data-hovered":t||void 0,"data-focus-visible":l||void 0,"data-invalid":d||void 0})}const se=Y(ne),B=f.createContext({});let re=e=>{let{onHoverStart:a,onHoverChange:n,onHoverEnd:t,...i}=e;return i};function de(e,a){[e,a]=R(e,a,B);let{hoverProps:n,isHovered:t}=H(e),{isFocused:i,isFocusVisible:l,focusProps:c}=j({isTextInput:!0,autoFocus:e.autoFocus}),d=!!e["aria-invalid"]&&e["aria-invalid"]!=="false",o=F({...e,values:{isHovered:t,isFocused:i,isFocusVisible:l,isDisabled:e.disabled||!1,isInvalid:d},defaultClassName:"react-aria-TextArea"});return b.createElement("textarea",{...C(re(e),c,n),...o,ref:a,"data-focused":i||void 0,"data-disabled":e.disabled||void 0,"data-hovered":t||void 0,"data-focus-visible":l||void 0,"data-invalid":d||void 0})}const We=f.forwardRef(de),oe=f.createContext(null);function le(e,a){[e,a]=R(e,a,oe);let{validationBehavior:n}=J(D)||{};var t,i;let l=(i=(t=e.validationBehavior)!==null&&t!==void 0?t:n)!==null&&i!==void 0?i:"native",c=f.useRef(null),[d,o]=K(),[$,x]=f.useState("input"),{labelProps:p,inputProps:r,descriptionProps:v,errorMessageProps:I,...m}=te({...Q(e),inputElementType:$,label:o,validationBehavior:l},c),g=f.useCallback(h=>{c.current=h,h&&x(h instanceof HTMLTextAreaElement?"textarea":"input")},[]),P=F({...e,values:{isDisabled:e.isDisabled||!1,isInvalid:m.isInvalid,isReadOnly:e.isReadOnly||!1,isRequired:e.isRequired||!1},defaultClassName:"react-aria-TextField"}),y=T(e);return delete y.id,b.createElement("div",{...y,...P,ref:a,slot:e.slot||void 0,"data-disabled":e.isDisabled||void 0,"data-invalid":m.isInvalid||void 0,"data-readonly":e.isReadOnly||void 0,"data-required":e.isRequired||void 0},b.createElement(X,{values:[[W,{...p,ref:d}],[V,{...r,ref:g}],[B,{...r,ref:g}],[O,{slots:{description:v,errorMessage:I}}],[k,m]]},P.children))}const ce=f.forwardRef(le),ue='"../../../theme/src/lib/tokens.css"',fe='"Inter", sans-serif',be="#ffdfdf",$e="#f2f2f2",pe="#e6e6e6",ve="#bfbfbf",xe="#000000",me="#e62323",he="500",ge="400",Pe="#1f1f1f",ye="_inputField_cx6z8_4",_e="_inputWrapper_cx6z8_13",Ie="_label_cx6z8_32",Ee="_text_cx6z8_39",Ce="_fieldError_cx6z8_46",Re="_input_cx6z8_4",Fe="_passwordText_cx6z8_83",we="_wrap_cx6z8_106",Te="_passwordButton_cx6z8_124",u={tokens:ue,display:fe,signalRed10:be,gray10:$e,gray20:pe,gray50:ve,black:xe,signalRed100:me,mediumWeight:he,regularWeight:ge,inputText:Pe,inputField:ye,inputWrapper:_e,label:Ie,text:Ee,fieldError:Ce,input:Re,passwordText:Fe,wrap:we,passwordButton:Te},Oe=({label:e,description:a,errorMessage:n,validationType:t,...i})=>{const[l,c]=b.useState(""),[d,o]=b.useState(!0),$=r=>{if(t===void 0)return!0;t==="ssn"&&o(je.test(r)),t instanceof RegExp&&o(new RegExp(t).test(r))},x=r=>{const v=r.target.value;$(v)},p=r=>{c(r.target.value)};return s.jsx(ce,{className:u.inputField,isInvalid:t!==void 0?!d:i.isInvalid,...i,children:s.jsx(E,{label:e,description:a,errorMessage:n,children:s.jsxs("div",{className:u.wrap,children:[s.jsx(se,{type:i.type,className:u.input,onChange:p,onBlur:x}),s.jsx(He,{type:i.type,input:l})]})})})},He=({type:e,input:a})=>{const[n,t]=b.useState(!1);return e==="password"?s.jsxs(s.Fragment,{children:[n&&s.jsx(w,{slot:"description",className:u.passwordText,children:a}),s.jsx(ee,{variant:"tertiary",onPress:()=>t(!n),className:u.passwordButton,children:n?"Dölj":"Visa"})]}):null},E=({label:e,description:a,errorMessage:n,children:t})=>s.jsxs("div",{className:u.inputWrapper,children:[e&&s.jsx(A,{className:u.label,children:e}),a&&s.jsx(w,{slot:"description",className:u.text,children:a}),s.jsx(L,{className:u.fieldError,children:s.jsxs(s.Fragment,{children:[s.jsx(ae,{width:16,height:16}),n]})}),t]}),je=new RegExp("^(?:(?:19|20)?\\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01])(?:[-+ ]?\\d{4})?|\\d{4}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01])(?:[-+ ]?\\d{4}))$");try{E.displayName="InputWrapper",E.__docgenInfo={description:"",displayName:"InputWrapper",props:{children:{defaultValue:null,description:"The children of the component. A function may be provided to alter the children based on component state.",name:"children",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string | ((validation: ValidationResult) => string)"}}}}}catch{}export{ce as $,E as I,Oe as T,u as a,We as b,te as c,V as d,se as e};