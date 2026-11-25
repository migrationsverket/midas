import{n as e,o as t}from"./rolldown-runtime-BCiCTKAo.js";import{t as n}from"./react-BWPDF9mI.js";import{n as r,r as i}from"./CalendarDate-Bc3rqXiE.js";import{n as a,t as o}from"./clsx-CRLSYZsH.js";import{a as s,c,i as l,l as u,m as d,n as f,o as p,p as ee,r as m,s as h,t as g}from"./DateInput-BeNW7w4Q.js";import{n as _,t as v}from"./FieldError-CB0Qo_uQ.js";import{o as y,r as b,t as x}from"./FocusScope-CguwfPD3.js";import{n as S,t as te}from"./useLocalizedStringFormatter-C5PgKCiv.js";import{i as C,n as w,r as T,t as E}from"./Label-B6_NBCGI.js";import{n as D,t as ne}from"./Text-Dr79uABK.js";import{n as re}from"./iframe-o6Q5_Mu7.js";var O,k,A;function j(){return(j=e((()=>{O={clear:`Clear date`},k={clear:`Rensa datum`},A={en:O,sv:k}})))()}var M,N,P,F,I;function L(){return(L=e((()=>{M=`_dateField_1w6t6_1`,N=`_inputField_1w6t6_7`,P=`_medium_1w6t6_43`,F=`_clearButton_1w6t6_52`,I={dateField:M,inputField:N,medium:P,clearButton:F}})))()}var R,z,B,V;function H(){return(H=e((()=>{R=t(n(),1),d(),a(),f(),l(),_(),w(),D(),c(),te(),j(),L(),p(),C(),y(),z=re(),B=({isClearable:e,size:t,isDisabled:n,isReadOnly:r})=>{let i=S(A),a=R.useContext(u),s=x();return e&&a?.value!=null&&!r?(0,z.jsx)(h,{onPress:()=>{a?.setValue(null),s?.focusFirst()},size:t,isDisabled:n,"aria-label":i.format(`clear`),className:o(I.clearButton,{[I.medium]:t===`medium`})}):null},V=R.forwardRef(({className:e,description:t,errorMessage:n,errorPosition:r=`top`,label:i,size:a=`large`,popover:c,isClearable:l=!1,isReadOnly:u,isDisabled:d,...f},p)=>(0,z.jsxs)(ee,{...f,ref:p,isReadOnly:u,isDisabled:d,className:o(I.dateField,e),children:[(0,z.jsx)(T,{popover:c,children:i&&(0,z.jsx)(E,{children:i})}),t&&(0,z.jsx)(ne,{slot:`description`,children:t}),r===`top`&&(0,z.jsx)(v,{children:n}),(0,z.jsx)(`div`,{className:o(I.inputField,{[I.medium]:a===`medium`}),"data-testid":`date-field_input-field`,children:(0,z.jsxs)(b,{children:[(0,z.jsx)(`div`,{className:s.scroller,children:(0,z.jsx)(g,{children:e=>(0,z.jsx)(m,{segment:e})})}),(0,z.jsx)(B,{isClearable:l,size:a,isDisabled:d,isReadOnly:u})]})}),r===`bottom`&&(0,z.jsx)(v,{children:n})]})),V.__docgenInfo={description:``,methods:[],displayName:`DateField`,props:{description:{required:!1,tsType:{name:`string`},description:``},errorMessage:{required:!1,tsType:{name:`union`,raw:`string | ((validation: ValidationResult) => string)`,elements:[{name:`string`},{name:`unknown`}]},description:``},errorPosition:{required:!1,tsType:{name:`union`,raw:`'top' | 'bottom'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'bottom'`}]},description:``,defaultValue:{value:`'top'`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:``},size:{required:!1,tsType:{name:`union`,raw:`'large' | 'medium'`,elements:[{name:`literal`,value:`'large'`},{name:`literal`,value:`'medium'`}]},description:`Component size (large: height 48px, medium: height 40px)
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