import{$ as c,a as m,r as l,j as d}from"./iframe-CxnkivWk.js";import{C as n}from"./Calendar-CLv0u_0_.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CqNTEzUq.js";import"./Button-bNvppfaR.js";import"./utils-D9spTQed.js";import"./clsx-B-dksMZM.js";import"./Hidden-DV_3dmeB.js";import"./useFocusRing-DuH0mTQw.js";import"./index-D6J4-gBr.js";import"./index-BAOnkMzS.js";import"./useLabel-DAx5WPkE.js";import"./useLabels-Dvg-ZEsL.js";import"./useButton-C_SSCC3h.js";import"./RSPContexts-BoJ1S5Xk.js";import"./Text-C1PtMghN.js";import"./useDateFormatter-g1toaiAm.js";import"./useControlledState-DslVItvC.js";import"./useLocalizedStringFormatter-B8oxEIA6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CpukhZt0.js";import"./useEvent-CQPjNeLr.js";import"./getScrollParent-ClxdokLI.js";import"./scrollIntoView-CctMTOtZ.js";import"./useDescription-DJZJclYp.js";import"./VisuallyHidden-CHjZ0tZh.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CxIEPpDO.js";import"./createLucideIcon-DTCD7Iny.js";import"./chevron-right-B35UWRm4.js";import"./Button-gL8l0gpP.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Byuqcgqc.js";import"./Heading-COAl1DmL.js";import"./FieldError-CXKQ23yv.js";import"./Text-DEFKyO3K.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
