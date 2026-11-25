import{n as e,o as t}from"./rolldown-runtime-BCiCTKAo.js";import{t as n}from"./react-BWPDF9mI.js";import{n as r,r as i}from"./CalendarDate-Bc3rqXiE.js";import{n as a,t as o}from"./clsx-Cb5F7C4j.js";import{a as s,c,i as l,l as u,m as d,n as f,o as p,p as ee,r as m,s as te,t as ne}from"./DateInput-CfXZmKHv.js";import{n as h,t as g}from"./FieldError-CT-ROH46.js";import{o as _,r as v,t as y}from"./FocusScope-CguwfPD3.js";import{n as b,t as x}from"./useLocalizedStringFormatter-BYpzLSRd.js";import{i as S,n as re,r as ie,t as C}from"./Label-Bpz5E-oG.js";import{n as w,t as T}from"./Text-BtQ0SKPm.js";import{n as E}from"./iframe-Cnh_7U61.js";var D,O,k;function A(){return(A=e((()=>{D={clear:`Clear date`},O={clear:`Rensa datum`},k={en:D,sv:O}})))()}var j,M,N,P,F;function I(){return(I=e((()=>{j=`_dateField_1w6t6_1`,M=`_inputField_1w6t6_7`,N=`_medium_1w6t6_43`,P=`_clearButton_1w6t6_52`,F={dateField:j,inputField:M,medium:N,clearButton:P}})))()}var L,R,z,B;function V(){return(V=e((()=>{L=t(n(),1),d(),a(),f(),l(),h(),re(),w(),c(),x(),A(),I(),p(),S(),_(),R=E(),z=({isClearable:e,size:t,isDisabled:n,isReadOnly:r})=>{let i=b(k),a=L.useContext(u),s=y();return e&&a?.value!=null&&!r?(0,R.jsx)(te,{onPress:()=>{a?.setValue(null),s?.focusFirst()},size:t,isDisabled:n,"aria-label":i.format(`clear`),className:o(F.clearButton,{[F.medium]:t===`medium`})}):null},B=L.forwardRef(({className:e,description:t,errorMessage:n,errorPosition:r=`top`,label:i,size:a=`large`,popover:c,isClearable:l=!1,isReadOnly:u,isDisabled:d,...f},p)=>(0,R.jsxs)(ee,{...f,ref:p,isReadOnly:u,isDisabled:d,className:o(F.dateField,e),children:[(0,R.jsx)(ie,{popover:c,children:i&&(0,R.jsx)(C,{children:i})}),t&&(0,R.jsx)(T,{slot:`description`,children:t}),r===`top`&&(0,R.jsx)(g,{children:n}),(0,R.jsx)(`div`,{className:o(F.inputField,{[F.medium]:a===`medium`}),"data-testid":`date-field_input-field`,children:(0,R.jsxs)(v,{children:[(0,R.jsx)(`div`,{className:s.scroller,children:(0,R.jsx)(ne,{children:e=>(0,R.jsx)(m,{segment:e})})}),(0,R.jsx)(z,{isClearable:l,size:a,isDisabled:d,isReadOnly:u})]})}),r===`bottom`&&(0,R.jsx)(g,{children:n})]})),B.__docgenInfo={description:``,methods:[],displayName:`DateField`,props:{description:{required:!1,tsType:{name:`string`},description:``},errorMessage:{required:!1,tsType:{name:`union`,raw:`string | ((validation: ValidationResult) => string)`,elements:[{name:`string`},{name:`unknown`}]},description:``},errorPosition:{required:!1,tsType:{name:`union`,raw:`'top' | 'bottom'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'bottom'`}]},description:``,defaultValue:{value:`'top'`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:``},size:{required:!1,tsType:{name:`union`,raw:`'large' | 'medium'`,elements:[{name:`literal`,value:`'large'`},{name:`literal`,value:`'medium'`}]},description:`Component size (large: height 48px, medium: height 40px)
 @default 'large'`,defaultValue:{value:`'large'`,computed:!1}},popover:{required:!1,tsType:{name:`InfoPopoverProps`},description:`An assistive text that helps the user understand the field better. Will be hidden in a popover with an info icon button.`},isClearable:{required:!1,tsType:{name:`boolean`},description:`Show a clear button to remove the selected date
@default false`,defaultValue:{value:`false`,computed:!1}}},composes:[`AriaDateFieldProps`]}})))()}var H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{i(),V(),H={component:B,title:`Components/DateField`,tags:[`autodocs`],parameters:{a11y:{config:{rules:[{id:`color-contrast`,selector:`[data-placeholder="true"]`,enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}},args:{errorPosition:`top`,label:`Välj ett datum`,description:`Vilket som helst`}},U={},W={...U,tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{indexPreview:{width:`240px`}}},G={args:{isInvalid:!0,errorMessage:`Date must be tjugonionde maj`}},K={args:{isDisabled:!0}},q={args:{isReadOnly:!0,defaultValue:new r(1995,5,29)}},J={args:{defaultValue:new r(1995,5,29)}},Y={args:{...K.args,...J.args}},X={args:{isClearable:!0,defaultValue:new r(1995,5,29)}},Z={args:{popover:{children:`An assistive text that helps the user understand the field better.`,"aria-label":`Mer information`}}},Q=[`Primary`,`Preview`,`Invalid`,`Disabled`,`ReadOnly`,`WithDefaultValue`,`DisabledWithDefaultValue`,`WithClearButton`,`WithHelpPopover`],U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{}`,...U.parameters?.docs?.source},description:{story:`Don't put format in description, it changes with browser language settings!`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  ...Primary,
  tags: ['!dev', '!autodocs', '!snapshot'],
  // Rendered wider so the field doesn't shrink-wrap the date segments
  parameters: {
    indexPreview: {
      width: '240px'
    }
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Date must be tjugonionde maj'
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    defaultValue: new CalendarDate(1995, 5, 29)
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: new CalendarDate(1995, 5, 29)
  }
}`,...J.parameters?.docs?.source},description:{story:`When using uncontrolled value`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    ...Disabled.args,
    ...WithDefaultValue.args
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    isClearable: true,
    defaultValue: new CalendarDate(1995, 5, 29)
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    popover: {
      children: 'An assistive text that helps the user understand the field better.',
      'aria-label': 'Mer information'
    }
  }
}`,...Z.parameters?.docs?.source}}}})))()}$();export{K as Disabled,Y as DisabledWithDefaultValue,G as Invalid,W as Preview,U as Primary,q as ReadOnly,X as WithClearButton,J as WithDefaultValue,Z as WithHelpPopover,Q as __namedExportsOrder,H as default};