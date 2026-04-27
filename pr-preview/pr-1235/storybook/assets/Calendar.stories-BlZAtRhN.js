import{$ as c,a as m,r as l,j as d}from"./iframe-Cen0ae1x.js";import{C as n}from"./Calendar-BNckKbG1.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BWl_wQpr.js";import"./Button-CH2bisSo.js";import"./utils-IBVWRADw.js";import"./clsx-B-dksMZM.js";import"./Hidden-DeFJbGnS.js";import"./useFocusRing-DL4UMbrb.js";import"./index--9VSKs4e.js";import"./index-CAAqL2lM.js";import"./useLabel-DSnRldp0.js";import"./useLabels-D8TiPXss.js";import"./useButton-SUZhILTb.js";import"./RSPContexts-j8AP2XCE.js";import"./Text-DIYKRKOx.js";import"./useDateFormatter-BRNNEal4.js";import"./useControlledState-JSkmdR3M.js";import"./useLocalizedStringFormatter-AjdMYjpu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C1FHLtjW.js";import"./useEvent-MaH29R_X.js";import"./getScrollParent-N9kF6Mqp.js";import"./scrollIntoView-Dta2NR0L.js";import"./useDescription-Co4ko50b.js";import"./VisuallyHidden-AN2tdixc.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BtIK3xBT.js";import"./createLucideIcon-obLWYbEm.js";import"./chevron-right-Cau9whXg.js";import"./Button-CA3EkwoT.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-4r_hlzhF.js";import"./Heading-B60h2Jja.js";import"./FieldError-BmQ4jQxz.js";import"./Text-CTsFsWIz.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
