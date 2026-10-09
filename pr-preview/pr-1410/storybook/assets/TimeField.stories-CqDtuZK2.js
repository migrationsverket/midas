import{n as e,o as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-DiVRNtpo.js";import{r,t as i}from"./CalendarDate-B15qQ79W.js";import{c as a,d as o,o as s}from"./SelectionIndicator-BL9XZvXv.js";import{a as c,c as l,d as u,m as d,n as f,o as p,s as m,t as ee,u as te}from"./DateInput-D4-umtYK.js";import{n as h}from"./iframe-zbFWRH-9.js";import{n as ne,t as g}from"./FieldError-Bf4dUW5i.js";import{n as _,t as v}from"./clsx-BbIth5Jl.js";import{n as y,t as b}from"./useLocalizedStringFormatter-4NaVhzZI.js";import{i as x,n as S,r as C,t as w}from"./Label-C9_1IgLM.js";import{n as re,t as T}from"./Text-BlnyZWNb.js";var E,D,O;function k(){return(k=e((()=>{E={clear:`Clear time`},D={clear:`Rensa tid`},O={en:E,sv:D}})))()}var A,j,M,N,P;function F(){return(F=e((()=>{A=`_timeField_1evr6_1`,j=`_inputField_1evr6_7`,M=`_medium_1evr6_41`,N=`_clearButton_1evr6_50`,P={timeField:A,inputField:j,medium:M,clearButton:N}})))()}var I,L,R,z;function B(){return(B=e((()=>{I=t(n(),1),d(),o(),_(),f(),p(),ne(),S(),re(),l(),b(),k(),F(),x(),L=h(),R=({isClearable:e,size:t,isDisabled:n,isReadOnly:r})=>{let i=y(O),a=I.useContext(te),o=s();return e&&a?.value!=null&&!r?(0,L.jsx)(m,{onPress:()=>{a?.setValue(null),o?.focusFirst()},size:t,isDisabled:n,"aria-label":i.format(`clear`),className:v(P.clearButton,{[P.medium]:t===`medium`})}):null},z=I.forwardRef(({className:e,description:t,errorMessage:n,errorPosition:r=`top`,label:i,size:o=`large`,popover:s,isClearable:l=!1,isReadOnly:d,isDisabled:f,...p},m)=>(0,L.jsxs)(u,{...p,ref:m,isReadOnly:d,isDisabled:f,className:v(P.timeField,e),children:[(0,L.jsx)(C,{popover:s,children:i&&(0,L.jsx)(w,{children:i})}),t&&(0,L.jsx)(T,{slot:`description`,children:t}),r===`top`&&(0,L.jsx)(g,{children:n}),(0,L.jsx)(`div`,{className:v(P.inputField,{[P.medium]:o===`medium`}),children:(0,L.jsxs)(a,{children:[(0,L.jsx)(ee,{children:e=>(0,L.jsx)(c,{segment:e})}),(0,L.jsx)(R,{isClearable:l,size:o,isDisabled:f,isReadOnly:d})]})}),r===`bottom`&&(0,L.jsx)(g,{children:n})]})),z.__docgenInfo={description:``,methods:[],displayName:`TimeField`,props:{description:{required:!1,tsType:{name:`string`},description:``},errorMessage:{required:!1,tsType:{name:`union`,raw:`string | ((validation: ValidationResult) => string)`,elements:[{name:`string`},{name:`unknown`}]},description:``},errorPosition:{required:!1,tsType:{name:`union`,raw:`'top' | 'bottom'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'bottom'`}]},description:``,defaultValue:{value:`'top'`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:``},size:{required:!1,tsType:{name:`union`,raw:`'large' | 'medium'`,elements:[{name:`literal`,value:`'large'`},{name:`literal`,value:`'medium'`}]},description:`Component size (large: height 48px, medium: height 40px)
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