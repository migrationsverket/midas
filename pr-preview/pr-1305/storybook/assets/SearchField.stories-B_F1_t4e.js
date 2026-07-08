import{i as e}from"./preload-helper-CT_b8DTk.js";import{n as t,t as n}from"./SearchField-CAkONfqT.js";var r,i,a,o,s,c,l;e((()=>{t(),r={component:n,title:`Components/SearchField`,tags:[`autodocs`],parameters:{layout:`centered`},args:{errorPosition:`top`,className:`test-class`,size:`large`}},i={args:{placeholder:`Sök efter en person`}},a={args:{placeholder:`Sök efter "secret"`,validate:e=>e===`secret`?`Sök inte efter hemligheter`:!0}},o={args:{placeholder:`Sök efter dokument`,isInvalid:!0,errorMessage:`Något gick fel, var god försök igen`}},s={args:{placeholder:`Sök efter dokument`,isDisabled:!0}},c={name:`Without button (v18 default)`,args:{placeholder:`Sök efter en person`,showButton:!1}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter en person'
  }
}`,...i.parameters?.docs?.source},description:{story:`Default behavior in v17 — the built-in submit button is shown.
The button is not in the tab order; use Enter to submit or click the button.`,...i.parameters?.docs?.description}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter "secret"',
    validate: (value: string) => value === 'secret' ? 'Sök inte efter hemligheter' : true
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter dokument',
    isInvalid: true,
    errorMessage: 'Något gick fel, var god försök igen'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter dokument',
    isDisabled: true
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Without button (v18 default)',
  args: {
    placeholder: 'Sök efter en person',
    showButton: false
  }
}`,...c.parameters?.docs?.source},description:{story:"Future default in v18 — opt in today with `showButton={false}`.\nCompose your own `Button` outside `SearchField` for explicit submit.\nEnter still works for keyboard submission.",...c.parameters?.docs?.description}}},l=[`Primary`,`CustomValidation`,`Invalid`,`Disabled`,`WithoutButton`]}))();export{a as CustomValidation,s as Disabled,o as Invalid,i as Primary,c as WithoutButton,l as __namedExportsOrder,r as default};