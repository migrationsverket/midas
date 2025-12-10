import{$ as p,a as m,r as l,j as d}from"./iframe-CnjefUD1.js";import{C as n}from"./Calendar-DhJJ_Xlr.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-By_zHA07.js";import"./Button-BHfV4bzr.js";import"./utils-D37LYN_z.js";import"./clsx-B-dksMZM.js";import"./Hidden-C9ODNoG7.js";import"./useFocusRing-OpxO3A8k.js";import"./index-CEoM9FY4.js";import"./index-C0k8iZuD.js";import"./useLabels-D_5lY230.js";import"./useButton-D49m94PX.js";import"./RSPContexts-Drdjh-bQ.js";import"./Text-D8shfVXj.js";import"./useDateFormatter-CSTksuz4.js";import"./useControlledState-uJdyG-cB.js";import"./useLocalizedStringFormatter-CcNy5K9j.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DHVs2L3Q.js";import"./useEvent-BX-F18G_.js";import"./getScrollParent-CzOKCRh2.js";import"./scrollIntoView-B-yMeDWI.js";import"./useDescription-BogjwYXB.js";import"./VisuallyHidden-C-qiHPSr.js";import"./clsx-Ciqy0D92.js";import"./Button-CAOAFMpi.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BV3whyUg.js";import"./createLucideIcon-CeKlyRFp.js";import"./chevron-right-CMCkOJ6c.js";import"./Heading-ByEVGbfl.js";import"./FieldError-DESxxTZt.js";import"./Text-DzNIEZYv.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
