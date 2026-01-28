import{$ as c,a as m,r as l,j as d}from"./iframe-aMoIVDeR.js";import{C as n}from"./Calendar-C0ivDFp1.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-2Knt6m0t.js";import"./Button-DiQ7-ULm.js";import"./utils-CFxRfzzc.js";import"./clsx-B-dksMZM.js";import"./Hidden-B6fG37sh.js";import"./useFocusRing-DlrmdZPs.js";import"./index-DBBzqi9Z.js";import"./index-srgIOSWI.js";import"./useLabels-akov2npX.js";import"./useButton-CkIEgbAm.js";import"./RSPContexts-CsPbAcKW.js";import"./Text-p3-kB6K4.js";import"./useDateFormatter-CWgCZBAv.js";import"./useControlledState-CJ6hso62.js";import"./useLocalizedStringFormatter-A5HFr0Ya.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BbQ-jpPv.js";import"./useEvent-C22glenQ.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DuoNJ0JY.js";import"./VisuallyHidden-DdIi_TPZ.js";import"./clsx-Ciqy0D92.js";import"./Button-CD86P0d9.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D-L8R7Fq.js";import"./createLucideIcon-Bt3zLjO1.js";import"./chevron-left-Cy_ir2RO.js";import"./chevron-right-CYHR5xD0.js";import"./Heading-BfhUreNf.js";import"./FieldError-D2QhEaby.js";import"./Text-BbmTTQ6z.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const T=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,T as __namedExportsOrder,Q as default};
