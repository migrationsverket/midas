import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BlIEEezU.js";import{n,r}from"./CalendarDate-Bc3rqXiE.js";import{n as i,t as a}from"./clsx-DCdnwCma.js";import{a as o,i as s,n as c,o as l,r as u,t as d}from"./DateInput-C0OTK-ea.js";import{a as f,i as p,l as m,n as h,o as g,r as _,s as v,t as y}from"./DatePickerPopover-BPTfMkeN.js";import{n as b}from"./iframe-OF-qHMaR.js";import{n as x,t as S}from"./FieldError-Cig3YiAk.js";import{i as C,n as w,r as T,t as E}from"./Label-M7dM5fjM.js";import{n as D,t as O}from"./Text-_75oqZEU.js";import{n as k,t as A}from"./RangeCalendar-Cs4Ldcel.js";var j,M;function N(){return(N=e((()=>{t(),s(),j=b(),M=()=>(0,j.jsx)(`span`,{"aria-hidden":`true`,className:u.divider,children:`-`}),M.__docgenInfo={description:``,methods:[],displayName:`DateInputDivider`}})))()}var P,F;function I(){return(I=e((()=>{t(),m(),i(),p(),h(),c(),N(),l(),x(),w(),k(),D(),g(),C(),P=b(),F=({className:e,description:t,errorMessage:n,errorPosition:r=`top`,label:i,popover:s,isClearable:c=!1,isReadOnly:l,isDisabled:u,size:p,...m})=>(0,P.jsxs)(v,{className:a(f.datePicker,e),isReadOnly:l,isDisabled:u,...m,children:[(0,P.jsx)(T,{popover:s,children:i&&(0,P.jsx)(E,{children:i})}),t&&(0,P.jsx)(O,{slot:`description`,children:t}),r===`top`&&(0,P.jsx)(S,{children:n}),(0,P.jsxs)(_,{isClearable:c,isReadOnly:l,isDisabled:u,size:p,...m,children:[(0,P.jsx)(d,{slot:`start`,children:e=>(0,P.jsx)(o,{segment:e})}),(0,P.jsx)(M,{}),(0,P.jsx)(d,{slot:`end`,children:e=>(0,P.jsx)(o,{segment:e})})]}),r===`bottom`&&(0,P.jsx)(S,{children:n}),(0,P.jsx)(y,{children:(0,P.jsx)(A,{})})]}),F.__docgenInfo={description:``,methods:[],displayName:`DateRangePicker`,props:{description:{required:!1,tsType:{name:`string`},description:``},errorMessage:{required:!1,tsType:{name:`union`,raw:`string | ((validation: ValidationResult) => string)`,elements:[{name:`string`},{name:`unknown`}]},description:``},errorPosition:{required:!1,tsType:{name:`union`,raw:`'top' | 'bottom'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'bottom'`}]},description:``,defaultValue:{value:`'top'`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:``},size:{required:!1,tsType:{name:`union`,raw:`'large' | 'medium'`,elements:[{name:`literal`,value:`'large'`},{name:`literal`,value:`'medium'`}]},description:`Component size (large: height 48px, medium: height 40px)
 @default 'large'`},popover:{required:!1,tsType:{name:`InfoPopoverProps`},description:`An assistive text that helps the user understand the field better. Will be hidden in a popover with an info icon button.`},isClearable:{required:!1,tsType:{name:`boolean`},description:`Show a clear button to remove the selected date range
@default false`,defaultValue:{value:`false`,computed:!1}}},composes:[`AriaDateRangePickerProps`]}})))()}var L,R,z,B,V,H,U,W,G,K,q,J;function Y(){return(Y=e((()=>{r(),I(),L=b(),R={component:F,title:`Components/DatePicker/DateRangePicker`,tags:[`autodocs`],parameters:{a11y:{config:{rules:[{id:`color-contrast`,selector:`[data-placeholder="true"]`,enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}},args:{label:`Välj datum`,description:`Beskrivning`,errorMessage:`Felmeddelande`,errorPosition:`top`}},z=e=>({...e,args:{...e.args,defaultOpen:!0},parameters:{a11y:{test:`todo`}},decorators:[e=>(0,L.jsx)(`div`,{style:{minHeight:`32rem`},children:(0,L.jsx)(e,{})})]}),B={},V={args:{isDisabled:!0}},H={args:{isReadOnly:!0,defaultValue:{start:new n(1995,5,29),end:new n(2025,5,29)}}},U={args:{isInvalid:!0}},W={args:{isClearable:!0,defaultValue:{start:new n(1995,5,29),end:new n(2025,5,29)}}},G={args:{isDateUnavailable:(e,t)=>t!==null&&Math.abs(e.compare(t))>7}},K={...z(B),tags:[`!dev`,`!autodocs`]},q={...z(W),tags:[`!dev`,`!autodocs`]},J=[`Primary`,`Disabled`,`ReadOnly`,`Invalid`,`WithClearButton`,`MaxRangeDuration`,`PrimaryOpen`,`WithClearButtonOpen`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    defaultValue: {
      start: new CalendarDate(1995, 5, 29),
      end: new CalendarDate(2025, 5, 29)
    }
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    isClearable: true,
    defaultValue: {
      start: new CalendarDate(1995, 5, 29),
      end: new CalendarDate(2025, 5, 29)
    }
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    isDateUnavailable: (date, anchorDate) => anchorDate !== null && Math.abs(date.compare(anchorDate)) > 7
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  ...open(Primary),
  tags: ['!dev', '!autodocs']
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  ...open(WithClearButton),
  tags: ['!dev', '!autodocs']
}`,...q.parameters?.docs?.source}}}})))()}Y();export{V as Disabled,U as Invalid,G as MaxRangeDuration,B as Primary,K as PrimaryOpen,H as ReadOnly,W as WithClearButton,q as WithClearButtonOpen,J as __namedExportsOrder,R as default};