import{n as e,o as t}from"./rolldown-runtime-BCiCTKAo.js";import{t as n}from"./react-BWPDF9mI.js";import{r,t as i}from"./CalendarDate-Bc3rqXiE.js";import{n as a,t as o}from"./clsx-Cb5F7C4j.js";import{a as s,c,d as l,m as u,n as d,o as f,s as p,t as m,u as h}from"./DateInput-aNMqwBI9.js";import{n as g,t as _}from"./FieldError-tlrzNLLk.js";import{o as ee,r as te,t as v}from"./FocusScope-CguwfPD3.js";import{n as y,t as ne}from"./useLocalizedStringFormatter-jMGhd2fz.js";import{i as b,n as x,r as S,t as C}from"./Label-26iDCKG7.js";import{n as w,t as T}from"./Text-B0QRSI__.js";import{n as re}from"./iframe-rO7NPwkc.js";var E,D,O;function k(){return(k=e((()=>{E={clear:`Clear time`},D={clear:`Rensa tid`},O={en:E,sv:D}})))()}var A,j,M,N,P;function F(){return(F=e((()=>{A=`_timeField_1evr6_1`,j=`_inputField_1evr6_7`,M=`_medium_1evr6_41`,N=`_clearButton_1evr6_50`,P={timeField:A,inputField:j,medium:M,clearButton:N}})))()}var I,L,R,z;function B(){return(B=e((()=>{I=t(n(),1),u(),ee(),a(),d(),f(),g(),x(),w(),c(),ne(),k(),F(),b(),L=re(),R=({isClearable:e,size:t,isDisabled:n,isReadOnly:r})=>{let i=y(O),a=I.useContext(h),s=v();return e&&a?.value!=null&&!r?(0,L.jsx)(p,{onPress:()=>{a?.setValue(null),s?.focusFirst()},size:t,isDisabled:n,"aria-label":i.format(`clear`),className:o(P.clearButton,{[P.medium]:t===`medium`})}):null},z=I.forwardRef(({className:e,description:t,errorMessage:n,errorPosition:r=`top`,label:i,size:a=`large`,popover:c,isClearable:u=!1,isReadOnly:d,isDisabled:f,...p},h)=>(0,L.jsxs)(l,{...p,ref:h,isReadOnly:d,isDisabled:f,className:o(P.timeField,e),children:[(0,L.jsx)(S,{popover:c,children:i&&(0,L.jsx)(C,{children:i})}),t&&(0,L.jsx)(T,{slot:`description`,children:t}),r===`top`&&(0,L.jsx)(_,{children:n}),(0,L.jsx)(`div`,{className:o(P.inputField,{[P.medium]:a===`medium`}),children:(0,L.jsxs)(te,{children:[(0,L.jsx)(m,{children:e=>(0,L.jsx)(s,{segment:e})}),(0,L.jsx)(R,{isClearable:u,size:a,isDisabled:f,isReadOnly:d})]})}),r===`bottom`&&(0,L.jsx)(_,{children:n})]})),z.__docgenInfo={description:``,methods:[],displayName:`TimeField`,props:{description:{required:!1,tsType:{name:`string`},description:``},errorMessage:{required:!1,tsType:{name:`union`,raw:`string | ((validation: ValidationResult) => string)`,elements:[{name:`string`},{name:`unknown`}]},description:``},errorPosition:{required:!1,tsType:{name:`union`,raw:`'top' | 'bottom'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'bottom'`}]},description:``,defaultValue:{value:`'top'`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:``},size:{required:!1,tsType:{name:`union`,raw:`'large' | 'medium'`,elements:[{name:`literal`,value:`'large'`},{name:`literal`,value:`'medium'`}]},description:`Component size (large: height 48px, medium: height 40px)
 @default 'large'`,defaultValue:{value:`'large'`,computed:!1}},popover:{required:!1,tsType:{name:`InfoPopoverProps`},description:`An assistive text that helps the user understand the field better. Will be hidden in a popover with an info icon button.`},isClearable:{required:!1,tsType:{name:`boolean`},description:`Show a clear button to remove the selected time
@default false`,defaultValue:{value:`false`,computed:!1}}},composes:[`AriaTimeFieldProps`]}})))()}var V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{r(),B(),V={component:z,title:`Components/TimeField`,tags:[`autodocs`],parameters:{a11y:{config:{rules:[{id:`color-contrast`,selector:`[data-placeholder="true"]`,enabled:!1}]}}},args:{errorPosition:`top`,label:`Välj en tid`,description:`Timmar och minuter`}},H={},U={args:{isInvalid:!0,errorMessage:`Ogiltig tid`}},W={args:{isDisabled:!0}},G={args:{isReadOnly:!0,defaultValue:new i(14,30)}},K={args:{defaultValue:new i(14,30)}},q={args:{...W.args,...K.args}},J={args:{isClearable:!0,defaultValue:new i(14,30)}},Y={args:{granularity:`second`,defaultValue:new i(14,30,45)}},X={args:{hourCycle:12,defaultValue:new i(14,30)}},Z={args:{...H.args,popover:{children:`An assistive text that helps the user understand the field better.`,"aria-label":`Mer information`}}},Q=[`Primary`,`Invalid`,`Disabled`,`ReadOnly`,`WithDefaultValue`,`DisabledWithDefaultValue`,`WithClearButton`,`WithSeconds`,`HourCycle12`,`WithHelpPopover`],H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Ogiltig tid'
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    defaultValue: new Time(14, 30)
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: new Time(14, 30)
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    ...Disabled.args,
    ...WithDefaultValue.args
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
}`,...Z.parameters?.docs?.source}}}})))()}$();export{W as Disabled,q as DisabledWithDefaultValue,X as HourCycle12,U as Invalid,H as Primary,G as ReadOnly,J as WithClearButton,K as WithDefaultValue,Z as WithHelpPopover,Y as WithSeconds,Q as __namedExportsOrder,V as default};