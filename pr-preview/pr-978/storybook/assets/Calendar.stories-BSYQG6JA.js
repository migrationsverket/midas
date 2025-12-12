import{$ as c,a as m,r as l,j as d}from"./iframe-BGtyy6fd.js";import{C as n}from"./Calendar-BnKzZkuF.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C_CjuDI4.js";import"./Button-DrTjj1gj.js";import"./utils-CccsvD7u.js";import"./clsx-B-dksMZM.js";import"./Hidden-BxOQW0OL.js";import"./useFocusRing-BnRxtNNt.js";import"./index-Jo84nh3h.js";import"./index-iE9NyH8V.js";import"./useLabels-C6qEHWqP.js";import"./useButton-BpARo-s5.js";import"./RSPContexts-CVImfJEg.js";import"./Text-CdSUS3L4.js";import"./useDateFormatter-DlGTdNfr.js";import"./useControlledState-NBBb3dwB.js";import"./useLocalizedStringFormatter-BciR1wkJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B6O5_quF.js";import"./useEvent-CtQhVAtx.js";import"./getScrollParent-DmaRQTrd.js";import"./scrollIntoView-nLxHXHgJ.js";import"./useDescription-C16OAo1l.js";import"./VisuallyHidden-ClSljMM6.js";import"./clsx-Ciqy0D92.js";import"./Button-D11DdKki.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C0q1zQmh.js";import"./createLucideIcon-4ZkmUN36.js";import"./chevron-left-DlGMRwk-.js";import"./chevron-right-BUV3Rz17.js";import"./Heading-B04CcTxN.js";import"./FieldError-CeFSAGIb.js";import"./Text-BVf8H_wM.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
