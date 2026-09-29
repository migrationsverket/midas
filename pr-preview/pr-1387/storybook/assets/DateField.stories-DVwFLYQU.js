import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,r as i}from"./CalendarDate-FMiGohAb.js";import{n as a,t as o}from"./clsx-BvAV21YK.js";import{c as s,d as c,o as l}from"./SelectionIndicator-ByMiQgfh.js";import{a as ee,c as u,l as d,m as f,n as p,o as m,p as h,s as g,t as _}from"./DateInput-D9DzyqPP.js";import{n as v}from"./iframe-CXm8y9OE.js";import{n as y,t as b}from"./FieldError-CKrl-Jh-.js";import{n as x,t as S}from"./useLocalizedStringFormatter-CSOdVYPe.js";import{i as C,n as w,r as T,t as E}from"./Label-yinpxUNm.js";import{n as D,t as O}from"./Text-6j0KSB4r.js";var k,A,j;function M(){return(M=t((()=>{k={clear:`Clear date`},A={clear:`Rensa datum`},j={en:k,sv:A}})))()}var N,P,F,I,L;function R(){return(R=t((()=>{N=`_dateField_t65wr_1`,P=`_inputField_t65wr_7`,F=`_medium_t65wr_41`,I=`_clearButton_t65wr_50`,L={dateField:N,inputField:P,medium:F,clearButton:I}})))()}var z,B,V,H;function U(){return(U=t((()=>{z=e(n(),1),f(),a(),p(),m(),y(),w(),D(),u(),S(),M(),R(),C(),c(),B=v(),V=({isClearable:e,size:t,isDisabled:n,isReadOnly:r})=>{let i=x(j),a=z.useContext(d),s=l();return e&&a?.value!=null&&!r?(0,B.jsx)(g,{onPress:()=>{a?.setValue(null),s?.focusFirst()},size:t,isDisabled:n,"aria-label":i.format(`clear`),className:o(L.clearButton,{[L.medium]:t===`medium`})}):null},H=z.forwardRef(({className:e,description:t,errorMessage:n,errorPosition:r=`top`,label:i,size:a=`large`,popover:c,isClearable:l=!1,isReadOnly:u,isDisabled:d,...f},p)=>(0,B.jsxs)(h,{...f,ref:p,isReadOnly:u,isDisabled:d,className:o(L.dateField,e),children:[(0,B.jsx)(T,{popover:c,children:i&&(0,B.jsx)(E,{children:i})}),t&&(0,B.jsx)(O,{slot:`description`,children:t}),r===`top`&&(0,B.jsx)(b,{children:n}),(0,B.jsx)(`div`,{className:o(L.inputField,{[L.medium]:a===`medium`}),"data-testid":`date-field_input-field`,children:(0,B.jsxs)(s,{children:[(0,B.jsx)(_,{children:e=>(0,B.jsx)(ee,{segment:e})}),(0,B.jsx)(V,{isClearable:l,size:a,isDisabled:d,isReadOnly:u})]})}),r===`bottom`&&(0,B.jsx)(b,{children:n})]})),H.__docgenInfo={description:``,methods:[],displayName:`DateField`,props:{description:{required:!1,tsType:{name:`string`},description:``},errorMessage:{required:!1,tsType:{name:`union`,raw:`string | ((validation: ValidationResult) => string)`,elements:[{name:`string`},{name:`unknown`}]},description:``},errorPosition:{required:!1,tsType:{name:`union`,raw:`'top' | 'bottom'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'bottom'`}]},description:``,defaultValue:{value:`'top'`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:``},size:{required:!1,tsType:{name:`union`,raw:`'large' | 'medium'`,elements:[{name:`literal`,value:`'large'`},{name:`literal`,value:`'medium'`}]},description:`Component size (large: height 48px, medium: height 40px)
 @default 'large'`,defaultValue:{value:`'large'`,computed:!1}},popover:{required:!1,tsType:{name:`InfoPopoverProps`},description:`An assistive text that helps the user understand the field better. Will be hidden in a popover with an info icon button.`},isClearable:{required:!1,tsType:{name:`boolean`},description:`Show a clear button to remove the selected date
@default false`,defaultValue:{value:`false`,computed:!1}}},composes:[`AriaDateFieldProps`]}})))()}var W,G,K,q,J,Y,X,Z,Q;function $(){return($=t((()=>{i(),U(),W={component:H,title:`Components/DateField`,tags:[`autodocs`],parameters:{a11y:{config:{rules:[{id:`color-contrast`,selector:`[data-placeholder="true"]`,enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}},args:{errorPosition:`top`,label:`Välj ett datum`,description:`Vilket som helst`}},G={},K={args:{isInvalid:!0,errorMessage:`Date must be tjugonionde maj`}},q={args:{isDisabled:!0}},J={args:{isReadOnly:!0,defaultValue:new r(1995,5,29)}},Y={args:{defaultValue:new r(1995,5,29)}},X={args:{isClearable:!0,defaultValue:new r(1995,5,29)}},Z={args:{popover:{children:`An assistive text that helps the user understand the field better.`,"aria-label":`Mer information`}}},Q=[`Primary`,`Invalid`,`Disabled`,`ReadOnly`,`WithDefaultValue`,`WithClearButton`,`WithHelpPopover`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{}`,...G.parameters?.docs?.source},description:{story:`Don't put format in description, it changes with browser language settings!`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Date must be tjugonionde maj'
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    defaultValue: new CalendarDate(1995, 5, 29)
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: new CalendarDate(1995, 5, 29)
  }
}`,...Y.parameters?.docs?.source},description:{story:`When using uncontrolled value`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}}})))()}$();export{q as Disabled,K as Invalid,G as Primary,J as ReadOnly,X as WithClearButton,Y as WithDefaultValue,Z as WithHelpPopover,Q as __namedExportsOrder,W as default};