import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./SearchField-BM20oYY5.js";var r,i,a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{t(),r={component:n,title:`Components/SearchField`,tags:[`autodocs`],parameters:{layout:`centered`},args:{errorPosition:`top`,className:`test-class`,size:`large`}},i={args:{placeholder:`Sök efter en person`}},a={args:{placeholder:`Sök efter "secret"`,validate:e=>e!==`secret`||`Sök inte efter hemligheter`}},o={args:{placeholder:`Sök efter dokument`,isInvalid:!0,errorMessage:`Något gick fel, var god försök igen`}},s={args:{placeholder:`Sök efter dokument`,isDisabled:!0}},c={name:`Without button (v18 default)`,args:{placeholder:`Sök efter en person`,showButton:!1}},l={args:{...i.args,label:`Sök person`,popover:{children:`An assistive text that helps the user understand the field better.`,"aria-label":`Mer information`}}},u={args:{...i.args,label:`Sök person`,description:`Ange namn, personnummer eller ärendenummer`}},d={args:{...u.args,showButton:!1}},f=[`Primary`,`CustomValidation`,`Invalid`,`Disabled`,`WithoutButton`,`WithHelpPopover`,`WithLabelAndDescription`,`WithLabelAndDescriptionWithoutButton`],i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source},description:{story:"Future default in v18 — opt in today with `showButton={false}`.\nCompose your own `Button` outside `SearchField` for explicit submit.\nEnter still works for keyboard submission.",...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    label: 'Sök person',
    popover: {
      children: 'An assistive text that helps the user understand the field better.',
      'aria-label': 'Mer information'
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    label: 'Sök person',
    description: 'Ange namn, personnummer eller ärendenummer'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithLabelAndDescription.args,
    showButton: false
  }
}`,...d.parameters?.docs?.source}}}})))()}p();export{a as CustomValidation,s as Disabled,o as Invalid,i as Primary,l as WithHelpPopover,u as WithLabelAndDescription,d as WithLabelAndDescriptionWithoutButton,c as WithoutButton,f as __namedExportsOrder,r as default};