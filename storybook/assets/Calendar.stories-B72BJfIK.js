import{$ as c,a as m,r as l,j as d}from"./iframe-B9EGKC1A.js";import{C as n}from"./Calendar-CWl5n8vU.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CXVVMUaV.js";import"./Button-DlLSg3Nk.js";import"./utils-DzN8UgTA.js";import"./clsx-B-dksMZM.js";import"./Hidden-wAD8NsRv.js";import"./useFocusRing-CQ5RM59H.js";import"./index--DS5PC0t.js";import"./index-DJ0aAN4x.js";import"./useLabels-Bl3P75C2.js";import"./useButton-emt7P429.js";import"./RSPContexts-CVSZKZ30.js";import"./Text-BE5AMrY4.js";import"./useDateFormatter-CYHCW81R.js";import"./useControlledState-DY41YncH.js";import"./useLocalizedStringFormatter-CMmHX6mL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-eRfQtyWK.js";import"./useEvent-a78rAipB.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CEdPnwlS.js";import"./VisuallyHidden-CFcEMtwF.js";import"./clsx-Ciqy0D92.js";import"./Button-DTp360Zp.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CvJyQgQK.js";import"./createLucideIcon-DF7Nxj94.js";import"./chevron-left-DMfU9cNZ.js";import"./chevron-right-COGMCbPP.js";import"./Heading-CGMzCXH3.js";import"./FieldError-Cbj94XFe.js";import"./Text-BfUKDAVE.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
