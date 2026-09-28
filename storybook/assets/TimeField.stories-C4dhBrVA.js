import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{r,t as i}from"./CalendarDate-FMiGohAb.js";import{n as a,t as o}from"./clsx-BvAV21YK.js";import{c as s,d as c,o as l}from"./SelectionIndicator-ByMiQgfh.js";import{a as u,c as d,d as f,m as p,n as m,o as h,s as g,t as _,u as v}from"./DateInput-fMnD9pyC.js";import{n as ee}from"./iframe-Q-YUalFT.js";import{n as te,t as y}from"./FieldError-DJgbSCwg.js";import{n as b,t as x}from"./useLocalizedStringFormatter-BWoqhJfE.js";import{i as S,n as C,r as w,t as T}from"./Label-OZ8AKBSB.js";import{n as E,t as ne}from"./Text-DhquHM1-.js";var D,O,k;function A(){return(A=t((()=>{D={clear:`Clear time`},O={clear:`Rensa tid`},k={en:D,sv:O}})))()}var j,M,N,P,F;function I(){return(I=t((()=>{j=`_timeField_1evr6_1`,M=`_inputField_1evr6_7`,N=`_medium_1evr6_41`,P=`_clearButton_1evr6_50`,F={timeField:j,inputField:M,medium:N,clearButton:P}})))()}var L,R,z,B;function V(){return(V=t((()=>{L=e(n(),1),p(),c(),a(),m(),h(),te(),C(),E(),d(),x(),A(),I(),S(),R=ee(),z=({isClearable:e,size:t,isDisabled:n,isReadOnly:r})=>{let i=b(k),a=L.useContext(v),s=l();return e&&a?.value!=null&&!r?(0,R.jsx)(g,{onPress:()=>{a?.setValue(null),s?.focusFirst()},size:t,isDisabled:n,"aria-label":i.format(`clear`),className:o(F.clearButton,{[F.medium]:t===`medium`})}):null},B=L.forwardRef(({className:e,description:t,errorMessage:n,errorPosition:r=`top`,label:i,size:a=`large`,popover:c,isClearable:l=!1,isReadOnly:d,isDisabled:p,...m},h)=>(0,R.jsxs)(f,{...m,ref:h,isReadOnly:d,isDisabled:p,className:o(F.timeField,e),children:[(0,R.jsx)(w,{popover:c,children:i&&(0,R.jsx)(T,{children:i})}),t&&(0,R.jsx)(ne,{slot:`description`,children:t}),r===`top`&&(0,R.jsx)(y,{children:n}),(0,R.jsx)(`div`,{className:o(F.inputField,{[F.medium]:a===`medium`}),children:(0,R.jsxs)(s,{children:[(0,R.jsx)(_,{children:e=>(0,R.jsx)(u,{segment:e})}),(0,R.jsx)(z,{isClearable:l,size:a,isDisabled:p,isReadOnly:d})]})}),r===`bottom`&&(0,R.jsx)(y,{children:n})]})),B.__docgenInfo={description:``,methods:[],displayName:`TimeField`,props:{description:{required:!1,tsType:{name:`string`},description:``},errorMessage:{required:!1,tsType:{name:`union`,raw:`string | ((validation: ValidationResult) => string)`,elements:[{name:`string`},{name:`unknown`}]},description:``},errorPosition:{required:!1,tsType:{name:`union`,raw:`'top' | 'bottom'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'bottom'`}]},description:``,defaultValue:{value:`'top'`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:``},size:{required:!1,tsType:{name:`union`,raw:`'large' | 'medium'`,elements:[{name:`literal`,value:`'large'`},{name:`literal`,value:`'medium'`}]},description:`Component size (large: height 48px, medium: height 40px)
 @default 'large'`,defaultValue:{value:`'large'`,computed:!1}},popover:{required:!1,tsType:{name:`InfoPopoverProps`},description:`An assistive text that helps the user understand the field better. Will be hidden in a popover with an info icon button.`},isClearable:{required:!1,tsType:{name:`boolean`},description:`Show a clear button to remove the selected time
@default false`,defaultValue:{value:`false`,computed:!1}}},composes:[`AriaTimeFieldProps`]}})))()}var H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=t((()=>{r(),V(),H={component:B,title:`Components/TimeField`,tags:[`autodocs`],parameters:{a11y:{config:{rules:[{id:`color-contrast`,selector:`[data-placeholder="true"]`,enabled:!1}]}}},args:{errorPosition:`top`,label:`Välj en tid`,description:`Timmar och minuter`}},U={},W={args:{isInvalid:!0,errorMessage:`Ogiltig tid`}},G={args:{isDisabled:!0}},K={args:{isReadOnly:!0,defaultValue:new i(14,30)}},q={args:{defaultValue:new i(14,30)}},J={args:{isClearable:!0,defaultValue:new i(14,30)}},Y={args:{granularity:`second`,defaultValue:new i(14,30,45)}},X={args:{hourCycle:12,defaultValue:new i(14,30)}},Z={args:{...U.args,popover:{children:`An assistive text that helps the user understand the field better.`,"aria-label":`Mer information`}}},Q=[`Primary`,`Invalid`,`Disabled`,`ReadOnly`,`WithDefaultValue`,`WithClearButton`,`WithSeconds`,`HourCycle12`,`WithHelpPopover`],U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Ogiltig tid'
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    defaultValue: new Time(14, 30)
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: new Time(14, 30)
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    isClearable: true,
    defaultValue: new Time(14, 30)
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    granularity: 'second',
    defaultValue: new Time(14, 30, 45)
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    hourCycle: 12,
    defaultValue: new Time(14, 30)
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    popover: {
      children: 'An assistive text that helps the user understand the field better.',
      'aria-label': 'Mer information'
    }
  }
}`,...Z.parameters?.docs?.source}}}})))()}$();export{G as Disabled,X as HourCycle12,W as Invalid,U as Primary,K as ReadOnly,J as WithClearButton,q as WithDefaultValue,Z as WithHelpPopover,Y as WithSeconds,Q as __namedExportsOrder,H as default};