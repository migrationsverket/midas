import{$ as p,a as m,r as l,j as d}from"./iframe-B_KOJ0G0.js";import{C as n}from"./Calendar-B9wfbf69.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CPnPxVqS.js";import"./Button-CnpoiceM.js";import"./utils-BTtkoL8i.js";import"./clsx-B-dksMZM.js";import"./Hidden-B9DtuNar.js";import"./useFocusRing-5nURZfN9.js";import"./index-CXgWkQzh.js";import"./index-CF3jB36m.js";import"./useLabels-FMAmdZ1G.js";import"./useButton-DkRmfz4B.js";import"./RSPContexts-CbVBvrS_.js";import"./Text-D3GHA6gq.js";import"./useDateFormatter-DBvOm862.js";import"./useControlledState-CTR0ps1O.js";import"./useLocalizedStringFormatter-DGPkZ-8S.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-bAt_xAjm.js";import"./useEvent-DxD1kQt5.js";import"./getScrollParent-DfLYi2pS.js";import"./scrollIntoView-BwfxgBXt.js";import"./useDescription-7M9C1DQ3.js";import"./VisuallyHidden-C9mO_RkX.js";import"./clsx-Ciqy0D92.js";import"./Button-Drf_ZmSl.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-v4d1yczo.js";import"./createLucideIcon-C0reiAmG.js";import"./chevron-right-CUFfzcow.js";import"./Heading-D-1uIkeo.js";import"./FieldError-DUwoG9cu.js";import"./Text-ZOMm-Alb.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
