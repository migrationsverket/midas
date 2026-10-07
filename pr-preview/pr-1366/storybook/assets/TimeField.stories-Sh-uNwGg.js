import{n as e,o as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-DiVRNtpo.js";import{r,t as i}from"./CalendarDate-B15qQ79W.js";import{c as a,d as o,o as s}from"./SelectionIndicator-BL9XZvXv.js";import{a as c,c as l,d as u,m as d,n as f,o as p,s as m,t as h,u as ee}from"./DateInput-u1KU93GD.js";import{n as g}from"./iframe-BDtkX1bq.js";import{n as _,t as v}from"./FieldError-DBfAxEzi.js";import{n as y,t as b}from"./clsx-BbIth5Jl.js";import{n as te,t as ne}from"./useLocalizedStringFormatter-CvZFM253.js";import{i as x,n as S,r as C,t as w}from"./Label-DdQd_TI9.js";import{n as T,t as E}from"./Text-FEIhdvqD.js";var D,O,k;function A(){return(A=e((()=>{D={clear:`Clear time`},O={clear:`Rensa tid`},k={en:D,sv:O}})))()}var j,M,N,P,F;function I(){return(I=e((()=>{j=`_timeField_1evr6_1`,M=`_inputField_1evr6_7`,N=`_medium_1evr6_41`,P=`_clearButton_1evr6_50`,F={timeField:j,inputField:M,medium:N,clearButton:P}})))()}var L,R,z,B;function V(){return(V=e((()=>{L=t(n(),1),d(),o(),y(),f(),p(),_(),S(),T(),l(),ne(),A(),I(),x(),R=g(),z=({isClearable:e,size:t,isDisabled:n,isReadOnly:r})=>{let i=te(k),a=L.useContext(ee),o=s();return e&&a?.value!=null&&!r?(0,R.jsx)(m,{onPress:()=>{a?.setValue(null),o?.focusFirst()},size:t,isDisabled:n,"aria-label":i.format(`clear`),className:b(F.clearButton,{[F.medium]:t===`medium`})}):null},B=L.forwardRef(({className:e,description:t,errorMessage:n,errorPosition:r=`top`,label:i,size:o=`large`,popover:s,isClearable:l=!1,isReadOnly:d,isDisabled:f,...p},m)=>(0,R.jsxs)(u,{...p,ref:m,isReadOnly:d,isDisabled:f,className:b(F.timeField,e),children:[(0,R.jsx)(C,{popover:s,children:i&&(0,R.jsx)(w,{children:i})}),t&&(0,R.jsx)(E,{slot:`description`,children:t}),r===`top`&&(0,R.jsx)(v,{children:n}),(0,R.jsx)(`div`,{className:b(F.inputField,{[F.medium]:o===`medium`}),children:(0,R.jsxs)(a,{children:[(0,R.jsx)(h,{children:e=>(0,R.jsx)(c,{segment:e})}),(0,R.jsx)(z,{isClearable:l,size:o,isDisabled:f,isReadOnly:d})]})}),r===`bottom`&&(0,R.jsx)(v,{children:n})]})),B.__docgenInfo={description:``,methods:[],displayName:`TimeField`,props:{description:{required:!1,tsType:{name:`string`},description:``},errorMessage:{required:!1,tsType:{name:`union`,raw:`string | ((validation: ValidationResult) => string)`,elements:[{name:`string`},{name:`unknown`}]},description:``},errorPosition:{required:!1,tsType:{name:`union`,raw:`'top' | 'bottom'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'bottom'`}]},description:``,defaultValue:{value:`'top'`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:``},size:{required:!1,tsType:{name:`union`,raw:`'large' | 'medium'`,elements:[{name:`literal`,value:`'large'`},{name:`literal`,value:`'medium'`}]},description:`Component size (large: height 48px, medium: height 40px)
 @default 'large'`,defaultValue:{value:`'large'`,computed:!1}},popover:{required:!1,tsType:{name:`InfoPopoverProps`},description:`An assistive text that helps the user understand the field better. Will be hidden in a popover with an info icon button.`},isClearable:{required:!1,tsType:{name:`boolean`},description:`Show a clear button to remove the selected time
@default false`,defaultValue:{value:`false`,computed:!1}}},composes:[`AriaTimeFieldProps`]}})))()}var H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{r(),V(),H={component:B,title:`Components/TimeField`,tags:[`autodocs`],parameters:{a11y:{config:{rules:[{id:`color-contrast`,selector:`[data-placeholder="true"]`,enabled:!1}]}}},args:{errorPosition:`top`,label:`Välj en tid`,description:`Timmar och minuter`}},U={},W={args:{isInvalid:!0,errorMessage:`Ogiltig tid`}},G={args:{isDisabled:!0}},K={args:{isReadOnly:!0,defaultValue:new i(14,30)}},q={args:{defaultValue:new i(14,30)}},J={args:{isClearable:!0,defaultValue:new i(14,30)}},Y={args:{granularity:`second`,defaultValue:new i(14,30,45)}},X={args:{hourCycle:12,defaultValue:new i(14,30)}},Z={args:{...U.args,popover:{children:`An assistive text that helps the user understand the field better.`,"aria-label":`Mer information`}}},Q=[`Primary`,`Invalid`,`Disabled`,`ReadOnly`,`WithDefaultValue`,`WithClearButton`,`WithSeconds`,`HourCycle12`,`WithHelpPopover`],U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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