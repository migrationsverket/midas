import{n as e,o as t}from"./rolldown-runtime-BCiCTKAo.js";import{t as n}from"./react-BWPDF9mI.js";import{n as r,r as i}from"./CalendarDate-Bc3rqXiE.js";import{n as a,t as o}from"./clsx-Cb5F7C4j.js";import{a as s,c,l,m as u,n as d,o as f,p,s as m,t as h}from"./DateInput-aNMqwBI9.js";import{n as g,t as _}from"./FieldError-tlrzNLLk.js";import{o as ee,r as v,t as y}from"./FocusScope-CguwfPD3.js";import{n as b,t as x}from"./useLocalizedStringFormatter-jMGhd2fz.js";import{i as S,n as C,r as w,t as T}from"./Label-26iDCKG7.js";import{n as E,t as D}from"./Text-B0QRSI__.js";import{n as te}from"./iframe-rO7NPwkc.js";var O,k,A;function j(){return(j=e((()=>{O={clear:`Clear date`},k={clear:`Rensa datum`},A={en:O,sv:k}})))()}var M,N,P,F,I;function L(){return(L=e((()=>{M=`_dateField_t65wr_1`,N=`_inputField_t65wr_7`,P=`_medium_t65wr_41`,F=`_clearButton_t65wr_50`,I={dateField:M,inputField:N,medium:P,clearButton:F}})))()}var R,z,B,V;function H(){return(H=e((()=>{R=t(n(),1),u(),a(),d(),f(),g(),C(),E(),c(),x(),j(),L(),S(),ee(),z=te(),B=({isClearable:e,size:t,isDisabled:n,isReadOnly:r})=>{let i=b(A),a=R.useContext(l),s=y();return e&&a?.value!=null&&!r?(0,z.jsx)(m,{onPress:()=>{a?.setValue(null),s?.focusFirst()},size:t,isDisabled:n,"aria-label":i.format(`clear`),className:o(I.clearButton,{[I.medium]:t===`medium`})}):null},V=R.forwardRef(({className:e,description:t,errorMessage:n,errorPosition:r=`top`,label:i,size:a=`large`,popover:c,isClearable:l=!1,isReadOnly:u,isDisabled:d,...f},m)=>(0,z.jsxs)(p,{...f,ref:m,isReadOnly:u,isDisabled:d,className:o(I.dateField,e),children:[(0,z.jsx)(w,{popover:c,children:i&&(0,z.jsx)(T,{children:i})}),t&&(0,z.jsx)(D,{slot:`description`,children:t}),r===`top`&&(0,z.jsx)(_,{children:n}),(0,z.jsx)(`div`,{className:o(I.inputField,{[I.medium]:a===`medium`}),"data-testid":`date-field_input-field`,children:(0,z.jsxs)(v,{children:[(0,z.jsx)(h,{children:e=>(0,z.jsx)(s,{segment:e})}),(0,z.jsx)(B,{isClearable:l,size:a,isDisabled:d,isReadOnly:u})]})}),r===`bottom`&&(0,z.jsx)(_,{children:n})]})),V.__docgenInfo={description:``,methods:[],displayName:`DateField`,props:{description:{required:!1,tsType:{name:`string`},description:``},errorMessage:{required:!1,tsType:{name:`union`,raw:`string | ((validation: ValidationResult) => string)`,elements:[{name:`string`},{name:`unknown`}]},description:``},errorPosition:{required:!1,tsType:{name:`union`,raw:`'top' | 'bottom'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'bottom'`}]},description:``,defaultValue:{value:`'top'`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:``},size:{required:!1,tsType:{name:`union`,raw:`'large' | 'medium'`,elements:[{name:`literal`,value:`'large'`},{name:`literal`,value:`'medium'`}]},description:`Component size (large: height 48px, medium: height 40px)
 @default 'large'`,defaultValue:{value:`'large'`,computed:!1}},popover:{required:!1,tsType:{name:`InfoPopoverProps`},description:`An assistive text that helps the user understand the field better. Will be hidden in a popover with an info icon button.`},isClearable:{required:!1,tsType:{name:`boolean`},description:`Show a clear button to remove the selected date
@default false`,defaultValue:{value:`false`,computed:!1}}},composes:[`AriaDateFieldProps`]}})))()}var U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{i(),H(),U={component:V,title:`Components/DateField`,tags:[`autodocs`],parameters:{a11y:{config:{rules:[{id:`color-contrast`,selector:`[data-placeholder="true"]`,enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}},args:{errorPosition:`top`,label:`Välj ett datum`,description:`Vilket som helst`}},W={},G={args:{isInvalid:!0,errorMessage:`Date must be tjugonionde maj`}},K={args:{isDisabled:!0}},q={args:{isReadOnly:!0,defaultValue:new r(1995,5,29)}},J={args:{defaultValue:new r(1995,5,29)}},Y={args:{...K.args,...J.args}},X={args:{isClearable:!0,defaultValue:new r(1995,5,29)}},Z={args:{popover:{children:`An assistive text that helps the user understand the field better.`,"aria-label":`Mer information`}}},Q=[`Primary`,`Invalid`,`Disabled`,`ReadOnly`,`WithDefaultValue`,`DisabledWithDefaultValue`,`WithClearButton`,`WithHelpPopover`],W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{}`,...W.parameters?.docs?.source},description:{story:`Don't put format in description, it changes with browser language settings!`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}}})))()}$();export{K as Disabled,Y as DisabledWithDefaultValue,G as Invalid,W as Primary,q as ReadOnly,X as WithClearButton,J as WithDefaultValue,Z as WithHelpPopover,Q as __namedExportsOrder,U as default};