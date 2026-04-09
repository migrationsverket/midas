import{$ as c,a as m,r as l,j as d}from"./iframe-CKFMuO9m.js";import{C as n}from"./Calendar-BhJ1xiCE.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DZIux-BL.js";import"./Button-r5FEcXKA.js";import"./utils-D5GKgKLw.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dy9FDq_i.js";import"./useFocusRing-yfimCeup.js";import"./index-6i8ZJQUe.js";import"./index-DDqKr8WO.js";import"./useLabel-Biy0vo30.js";import"./useLabels-D1n_UWc_.js";import"./useButton-CBEFeFxS.js";import"./RSPContexts-DhqrhFMI.js";import"./Text-D6Srqbyc.js";import"./useDateFormatter-DkKHunL4.js";import"./useControlledState-BexPn5vQ.js";import"./useLocalizedStringFormatter-BF0ENpbS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C13oSkuA.js";import"./useEvent-DtZHTgkv.js";import"./getScrollParent-CRWGRsX_.js";import"./scrollIntoView-DixLNrnP.js";import"./useDescription-Df78gmXN.js";import"./VisuallyHidden-DCQS44v1.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DEucLDuv.js";import"./createLucideIcon-C2PX8F3A.js";import"./chevron-right-L7Sx94I0.js";import"./Button-DCc3RCFi.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BlqBGSSd.js";import"./Heading-CUHS5E_c.js";import"./FieldError-BxVlGG_h.js";import"./Text-CA1blZ7p.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
