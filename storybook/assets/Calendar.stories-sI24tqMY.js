import{$ as c,a as m,r as l,j as d}from"./iframe-iIM7yFlw.js";import{C as n}from"./Calendar-D4QOE6DF.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-VZmAqDIH.js";import"./Button-XY1USx81.js";import"./utils-DNy6buAm.js";import"./clsx-B-dksMZM.js";import"./Hidden-pJH8oqvO.js";import"./useFocusRing-CERt57Nt.js";import"./index-C-jrAZ8o.js";import"./index-DvWNh13S.js";import"./useLabels-BYU3vliF.js";import"./useButton-BOKRtXXu.js";import"./RSPContexts-83tn9EqZ.js";import"./Text-CpJA3Ugt.js";import"./useDateFormatter-CPM_pRNT.js";import"./useControlledState-CjC15qhB.js";import"./useLocalizedStringFormatter-CVQ2svrB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B_A4rWYw.js";import"./useEvent-D1Z-PedL.js";import"./getScrollParent-LhiTx7mo.js";import"./scrollIntoView-DCsIsjsr.js";import"./useDescription-CJa9wdXg.js";import"./VisuallyHidden-BIQkIPH_.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DPWY8Ri_.js";import"./createLucideIcon-BWICqhq6.js";import"./chevron-right-Dani9fBL.js";import"./Button-D34JSMMc.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CVsIIBgW.js";import"./Heading-CASTwqW7.js";import"./FieldError-BJhyn0Bc.js";import"./Text-GrSmyAjf.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
