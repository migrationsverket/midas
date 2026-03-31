import{$ as c,a as m,r as l,j as d}from"./iframe-BB-tPRzQ.js";import{C as n}from"./Calendar-CDSJF1RU.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-B0ZNO_VA.js";import"./Button-BE24gnSa.js";import"./utils-BktV0bPW.js";import"./clsx-B-dksMZM.js";import"./Hidden-DvrkBpIw.js";import"./useFocusRing-Ddeo6vcg.js";import"./index-BUPWnhQ_.js";import"./index-DlKD8ct_.js";import"./useLabel-DIhHpIun.js";import"./useLabels-C4NHgo-V.js";import"./useButton-DatsifZv.js";import"./RSPContexts-BmgBGX_c.js";import"./Text-Bl05kWUq.js";import"./useDateFormatter-Dujht_p7.js";import"./useControlledState-C03m2Mt3.js";import"./useLocalizedStringFormatter-BzEzuq1k.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B_0JfJhi.js";import"./useEvent-3yj0JxfP.js";import"./getScrollParent-D-jmBja6.js";import"./scrollIntoView-Cj-EggrR.js";import"./useDescription-DnTL-4Et.js";import"./VisuallyHidden-B0KgTif7.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BoZFV4Ef.js";import"./createLucideIcon-BAkvEDNb.js";import"./chevron-right-C0H-PsdG.js";import"./Button-C-wbQlf4.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Btt7l4WJ.js";import"./Heading-gGjQ1CPE.js";import"./FieldError-BmvkTOqd.js";import"./Text-DbHLBiJa.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
