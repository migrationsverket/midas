import{n as e,o as t}from"./rolldown-runtime-BCiCTKAo.js";import{t as n}from"./react-BWPDF9mI.js";import{r,t as i}from"./CalendarDate-Bc3rqXiE.js";import{n as a,t as o}from"./clsx-Cb5F7C4j.js";import{c as s,d as c,i as l,m as u,n as d,r as f,s as p,t as m,u as h}from"./DateInput-D0kB-4BU.js";import{n as ee,t as g}from"./FieldError-B31f8Jlj.js";import{o as _,r as v,t as y}from"./FocusScope-CguwfPD3.js";import{n as te,t as ne}from"./useLocalizedStringFormatter-CeDud6ua.js";import{i as re,n as ie,r as b,t as x}from"./Label-DyaHTeB9.js";import{n as S,t as C}from"./Text-DtRKdckQ.js";import{n as w}from"./iframe-CCqG03Mn.js";var T,E,D;function O(){return(O=e((()=>{T={clear:`Clear time`},E={clear:`Rensa tid`},D={en:T,sv:E}})))()}var k,A,j,M,N;function P(){return(P=e((()=>{k=`_timeField_1swac_1`,A=`_inputField_1swac_8`,j=`_clearButton_1swac_43`,M=`_medium_1swac_47`,N={timeField:k,inputField:A,clearButton:j,medium:M}})))()}var F,I,L,R;function z(){return(z=e((()=>{F=t(n(),1),u(),_(),a(),d(),l(),ee(),ie(),S(),s(),ne(),O(),P(),re(),I=w(),L=({isClearable:e,size:t,isDisabled:n,isReadOnly:r})=>{let i=te(D),a=F.useContext(h),s=y();return e&&a?.value!=null&&!r?(0,I.jsx)(p,{onPress:()=>{a?.setValue(null),s?.focusFirst()},size:t,isDisabled:n,"aria-label":i.format(`clear`),className:o(N.clearButton,{[N.medium]:t===`medium`})}):null},R=F.forwardRef(({className:e,description:t,errorMessage:n,errorPosition:r=`top`,label:i,size:a=`large`,popover:s,isClearable:l=!1,isReadOnly:u,isDisabled:d,...p},h)=>(0,I.jsxs)(c,{...p,ref:h,isReadOnly:u,isDisabled:d,className:o(N.timeField,e),children:[(0,I.jsx)(b,{popover:s,children:i&&(0,I.jsx)(x,{children:i})}),t&&(0,I.jsx)(C,{slot:`description`,children:t}),r===`top`&&(0,I.jsx)(g,{children:n}),(0,I.jsx)(`div`,{className:o(N.inputField,{[N.medium]:a===`medium`}),children:(0,I.jsxs)(v,{children:[(0,I.jsx)(m,{children:e=>(0,I.jsx)(f,{segment:e})}),(0,I.jsx)(L,{isClearable:l,size:a,isDisabled:d,isReadOnly:u})]})}),r===`bottom`&&(0,I.jsx)(g,{children:n})]})),R.__docgenInfo={description:``,methods:[],displayName:`TimeField`,props:{description:{required:!1,tsType:{name:`string`},description:``},errorMessage:{required:!1,tsType:{name:`union`,raw:`string | ((validation: ValidationResult) => string)`,elements:[{name:`string`},{name:`unknown`}]},description:``},errorPosition:{required:!1,tsType:{name:`union`,raw:`'top' | 'bottom'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'bottom'`}]},description:``,defaultValue:{value:`'top'`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:``},size:{required:!1,tsType:{name:`union`,raw:`'large' | 'medium'`,elements:[{name:`literal`,value:`'large'`},{name:`literal`,value:`'medium'`}]},description:`Component size (large: height 48px, medium: height 40px)
 @default 'large'`,defaultValue:{value:`'large'`,computed:!1}},popover:{required:!1,tsType:{name:`InfoPopoverProps`},description:`An assistive text that helps the user understand the field better. Will be hidden in a popover with an info icon button.`},isClearable:{required:!1,tsType:{name:`boolean`},description:`Show a clear button to remove the selected time
@default false`,defaultValue:{value:`false`,computed:!1}}},composes:[`AriaTimeFieldProps`]}})))()}var B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{r(),z(),B={component:R,title:`Components/TimeField`,tags:[`autodocs`],parameters:{a11y:{config:{rules:[{id:`color-contrast`,selector:`[data-placeholder="true"]`,enabled:!1}]}}},args:{errorPosition:`top`,label:`Välj en tid`,description:`Timmar och minuter`}},V={},H={...V,tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{indexPreview:{width:`240px`}}},U={args:{isInvalid:!0,errorMessage:`Ogiltig tid`}},W={args:{isDisabled:!0}},G={args:{isReadOnly:!0,defaultValue:new i(14,30)}},K={args:{defaultValue:new i(14,30)}},q={args:{...W.args,...K.args}},J={args:{isClearable:!0,defaultValue:new i(14,30)}},Y={args:{granularity:`second`,defaultValue:new i(14,30,45)}},X={args:{hourCycle:12,defaultValue:new i(14,30)}},Z={args:{...V.args,popover:{children:`An assistive text that helps the user understand the field better.`,"aria-label":`Mer information`}}},Q=[`Primary`,`Preview`,`Invalid`,`Disabled`,`ReadOnly`,`WithDefaultValue`,`DisabledWithDefaultValue`,`WithClearButton`,`WithSeconds`,`HourCycle12`,`WithHelpPopover`],V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  ...Primary,
  tags: ['!dev', '!autodocs', '!snapshot'],
  // Same width as DateField's preview, so the two cards match
  parameters: {
    indexPreview: {
      width: '240px'
    }
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}}})))()}$();export{W as Disabled,q as DisabledWithDefaultValue,X as HourCycle12,U as Invalid,H as Preview,V as Primary,G as ReadOnly,J as WithClearButton,K as WithDefaultValue,Z as WithHelpPopover,Y as WithSeconds,Q as __namedExportsOrder,B as default};