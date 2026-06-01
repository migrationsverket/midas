import{$ as c,a as m,r as l,j as d}from"./iframe-gbJBpoDx.js";import{C as n}from"./Calendar-DCfJBrLt.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader--ZXMxEiz.js";import"./Button-C3tdjGV6.js";import"./utils-DUgHs6FT.js";import"./clsx-B-dksMZM.js";import"./Hidden-CvjG_1RQ.js";import"./useFocusRing-CdGrrviA.js";import"./index-DGfeUZWJ.js";import"./index-h8QHE_zG.js";import"./useLabel-DBWjU4Cx.js";import"./useLabels-CGcCPDWZ.js";import"./useButton-BmNiDIvC.js";import"./RSPContexts-DiLb2jsV.js";import"./Text-CE4EKtCP.js";import"./useDateFormatter-CsdvJmAS.js";import"./useControlledState-CVd5Xqz2.js";import"./useLocalizedStringFormatter--yN4gUH3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-COKkianB.js";import"./useEvent-waE1JgxF.js";import"./getScrollParent-CXwwiqPr.js";import"./scrollIntoView-DIgHhdMC.js";import"./useDescription-6CJm5bcg.js";import"./VisuallyHidden-Ck3fIWPQ.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DXhVcNsf.js";import"./createLucideIcon-C3IEX8hu.js";import"./chevron-right-BLdiDVCm.js";import"./Button-Dpg56qc6.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BrXpMl3k.js";import"./Heading-dnaurqAS.js";import"./FieldError-KeTSBYc8.js";import"./Text-zmsiiY3G.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const V=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,V as __namedExportsOrder,T as default};
