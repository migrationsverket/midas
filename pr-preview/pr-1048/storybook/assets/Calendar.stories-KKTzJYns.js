import{$ as c,a as m,r as l,j as d}from"./iframe-Bd3o2-kp.js";import{C as n}from"./Calendar-b3g9A25n.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CTSIwQ38.js";import"./Button-OB4vCyak.js";import"./utils-_rYlTRGE.js";import"./clsx-B-dksMZM.js";import"./Hidden-I4t1GTdG.js";import"./useFocusRing-_t-XzKAc.js";import"./index-DDX6x1th.js";import"./index-eLVcURWN.js";import"./useLabels-8gAUbgWu.js";import"./useButton-ckXfTI1r.js";import"./RSPContexts-DXI9Wvdb.js";import"./Text-Cavz3YgX.js";import"./useDateFormatter-CfojLIJf.js";import"./useControlledState-CKr9JfDg.js";import"./useLocalizedStringFormatter-CZQf7unD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CO3MOz-3.js";import"./useEvent-DfAY0KtM.js";import"./getScrollParent-x0CFFfYB.js";import"./scrollIntoView-D_3VunV_.js";import"./useDescription-Bwebj_p1.js";import"./VisuallyHidden-B2vIweuU.js";import"./clsx-Ciqy0D92.js";import"./Button-BQ7itNQZ.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CuqGYsZF.js";import"./createLucideIcon-CqPIwQix.js";import"./chevron-left-BNI_Ut-7.js";import"./chevron-right-D2wwDeF8.js";import"./Heading-CzC_gkFh.js";import"./FieldError-uVOJT8DA.js";import"./Text-CXquw0of.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
