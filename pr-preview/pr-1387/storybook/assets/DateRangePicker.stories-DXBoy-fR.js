import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{n,r}from"./CalendarDate-B15qQ79W.js";import{n as i,t as a}from"./clsx-Qb-WgvrD.js";import{a as o,i as s,n as c,o as l,r as u,t as d}from"./DateInput-DFwTnaoh.js";import{a as f,i as p,l as m,n as h,o as g,r as _,s as v,t as y}from"./DatePickerPopover-Da7cMti0.js";import{n as b}from"./iframe-CQl2n6XD.js";import{n as x,t as S}from"./FieldError-Cxu2qhqO.js";import{i as C,n as w,r as T,t as E}from"./Label-Bwd4PUzT.js";import{n as D,t as O}from"./Text-Bigaaw2i.js";import{n as k,t as A}from"./RangeCalendar-C4kCIPU7.js";var j,M;function N(){return(N=e((()=>{t(),s(),j=b(),M=()=>(0,j.jsx)(`span`,{"aria-hidden":`true`,className:u.divider,children:`-`}),M.__docgenInfo={description:``,methods:[],displayName:`DateInputDivider`}})))()}var P,F;function I(){return(I=e((()=>{t(),m(),i(),p(),h(),c(),N(),l(),x(),w(),k(),D(),g(),C(),P=b(),F=({className:e,description:t,errorMessage:n,errorPosition:r=`top`,label:i,popover:s,isClearable:c=!1,isReadOnly:l,isDisabled:u,size:p,...m})=>(0,P.jsxs)(v,{className:a(f.datePicker,e),isReadOnly:l,isDisabled:u,...m,children:[(0,P.jsx)(T,{popover:s,children:i&&(0,P.jsx)(E,{children:i})}),t&&(0,P.jsx)(O,{slot:`description`,children:t}),r===`top`&&(0,P.jsx)(S,{children:n}),(0,P.jsxs)(_,{isClearable:c,isReadOnly:l,isDisabled:u,size:p,...m,children:[(0,P.jsx)(d,{slot:`start`,children:e=>(0,P.jsx)(o,{segment:e})}),(0,P.jsx)(M,{}),(0,P.jsx)(d,{slot:`end`,children:e=>(0,P.jsx)(o,{segment:e})})]}),r===`bottom`&&(0,P.jsx)(S,{children:n}),(0,P.jsx)(y,{children:(0,P.jsx)(A,{})})]}),F.__docgenInfo={description:``,methods:[],displayName:`DateRangePicker`,props:{description:{required:!1,tsType:{name:`string`},description:``},errorMessage:{required:!1,tsType:{name:`union`,raw:`string | ((validation: ValidationResult) => string)`,elements:[{name:`string`},{name:`unknown`}]},description:``},errorPosition:{required:!1,tsType:{name:`union`,raw:`'top' | 'bottom'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'bottom'`}]},description:``,defaultValue:{value:`'top'`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:``},size:{required:!1,tsType:{name:`union`,raw:`'large' | 'medium'`,elements:[{name:`literal`,value:`'large'`},{name:`literal`,value:`'medium'`}]},description:`Component size (large: height 48px, medium: height 40px)
 @default 'large'`},popover:{required:!1,tsType:{name:`InfoPopoverProps`},description:`An assistive text that helps the user understand the field better. Will be hidden in a popover with an info icon button.`},isClearable:{required:!1,tsType:{name:`boolean`},description:`Show a clear button to remove the selected date range
@default false`,defaultValue:{value:`false`,computed:!1}}},composes:[`AriaDateRangePickerProps`]}})))()}var L,R,z,B,V,H,U,W;function G(){return(G=e((()=>{r(),I(),L={component:F,title:`Components/DatePicker/DateRangePicker`,tags:[`autodocs`],parameters:{a11y:{config:{rules:[{id:`color-contrast`,selector:`[data-placeholder="true"]`,enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}},args:{label:`Välj datum`,description:`Beskrivning`,errorMessage:`Felmeddelande`,errorPosition:`top`}},R={},z={args:{isDisabled:!0}},B={args:{isReadOnly:!0,defaultValue:{start:new n(1995,5,29),end:new n(2025,5,29)}}},V={args:{isInvalid:!0}},H={args:{isClearable:!0,defaultValue:{start:new n(1995,5,29),end:new n(2025,5,29)}}},U={args:{isDateUnavailable:(e,t)=>t!==null&&Math.abs(e.compare(t))>7}},W=[`Primary`,`Disabled`,`ReadOnly`,`Invalid`,`WithClearButton`,`MaxRangeDuration`],R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    defaultValue: {
      start: new CalendarDate(1995, 5, 29),
      end: new CalendarDate(2025, 5, 29)
    }
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    isClearable: true,
    defaultValue: {
      start: new CalendarDate(1995, 5, 29),
      end: new CalendarDate(2025, 5, 29)
    }
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    isDateUnavailable: (date, anchorDate) => anchorDate !== null && Math.abs(date.compare(anchorDate)) > 7
  }
}`,...U.parameters?.docs?.source}}}})))()}G();export{z as Disabled,V as Invalid,U as MaxRangeDuration,R as Primary,B as ReadOnly,H as WithClearButton,W as __namedExportsOrder,L as default};