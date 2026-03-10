import{$ as c,a as m,r as l,j as d}from"./iframe-DMN73KB2.js";import{C as n}from"./Calendar-BozGkf2r.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-OyvDZw5D.js";import"./Button-CGbtmoIr.js";import"./utils-ytX4X4hU.js";import"./clsx-B-dksMZM.js";import"./Hidden-BA-gHfWt.js";import"./useFocusRing-BhcplY33.js";import"./index-Qnw9UhGM.js";import"./index-DrmiERuM.js";import"./useLabels-CRP67w2C.js";import"./useButton-CkF7Pwvg.js";import"./RSPContexts-Be8xIyRm.js";import"./Text-DjG6q6Y1.js";import"./useDateFormatter-SF8cJIaC.js";import"./useControlledState-DtotprCd.js";import"./useLocalizedStringFormatter-B6PiDztw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CqhW-56X.js";import"./useEvent-I49ndoPs.js";import"./getScrollParent-tlP_VOWl.js";import"./scrollIntoView-BoaQO-l5.js";import"./useDescription-lqHqz3yA.js";import"./VisuallyHidden-CJkttl4h.js";import"./clsx-Ciqy0D92.js";import"./Button-Ck576HV9.js";import"./Button.module-7yYQGR8l.js";import"./useLocalizedStringFormatter-CiDW_veP.js";import"./createLucideIcon-C88Lc7aZ.js";import"./chevron-left-CB37bJ2z.js";import"./chevron-right-BwCTX4RP.js";import"./Heading-kRC-xwAu.js";import"./FieldError-DphimPrq.js";import"./Text-B0z8pO1R.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
