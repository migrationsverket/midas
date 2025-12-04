import{$ as p,a as m,r as l,j as d}from"./iframe-67fMHQcr.js";import{C as n}from"./Calendar-DiknC6kR.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-B3Xq35ge.js";import"./Button-kat9spYA.js";import"./utils-CzrochTz.js";import"./clsx-B-dksMZM.js";import"./Hidden-CgRbqzp1.js";import"./useFocusRing-Bp8Mhd7n.js";import"./index-DfEYfE5h.js";import"./index-sfGWluQm.js";import"./useLabels-Jj46PDyy.js";import"./useButton-BkNgGNTC.js";import"./RSPContexts-Ubta1JzZ.js";import"./Text-BUZyNo40.js";import"./useDateFormatter-DrK1dBKc.js";import"./useControlledState-DJp7nnOG.js";import"./useLocalizedStringFormatter-B_WHaKeu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BqNL1Hlm.js";import"./useEvent-Ctiau1nl.js";import"./getScrollParent-DW9ss5j_.js";import"./scrollIntoView-BVZkxVMT.js";import"./useDescription-_77_jMY7.js";import"./VisuallyHidden-kN9goOZy.js";import"./clsx-Ciqy0D92.js";import"./Button-SGb-jW8E.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-166t5hcs.js";import"./createLucideIcon-DPoFQgUp.js";import"./chevron-right-Z-JLOTyM.js";import"./Heading-COwaGWHF.js";import"./FieldError-e7I4HOpx.js";import"./Text-DRPPRvVG.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  },
  parameters: {
    a11y: {
      context: 'body',
      config: {
        rules: [{
          // Dont check for color contrast on disabled elements
          id: 'color-contrast',
          enabled: false
        }]
      },
      options: {
        rules: {
          'color-contrast': {
            enabled: false
          }
        }
      } satisfies RunOptions
    }
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    value: new CalendarDate(1995, 5, 29)
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Något gick fel'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isDateUnavailable: date => isWeekend(date, 'sv-SE')
  }
}`,...s.parameters?.docs?.source}}};const Q=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,Q as __namedExportsOrder,L as default};
