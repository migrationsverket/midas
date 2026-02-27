import{$ as c,a as m,r as l,j as d}from"./iframe-6hgGCLw8.js";import{C as n}from"./Calendar-DLRkkfO1.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D1bNaK6j.js";import"./Button-Brt9OyKK.js";import"./utils-CX_zB5aR.js";import"./clsx-B-dksMZM.js";import"./Hidden-z4IjskhB.js";import"./useFocusRing-Cuwdf14T.js";import"./index-0RlmGZ9W.js";import"./index-I7rnJuI0.js";import"./useLabels-CgnqeCaq.js";import"./useButton-DGyELYzD.js";import"./RSPContexts-Bcn_vAUn.js";import"./Text-iSCx5bjD.js";import"./useDateFormatter-C8N4NGyP.js";import"./useControlledState-yzEE9xtq.js";import"./useLocalizedStringFormatter-DMNGX3Z_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CB-u7eri.js";import"./useEvent-BJk0ykSO.js";import"./getScrollParent-B0JbJ1bW.js";import"./scrollIntoView-Ckk0jegU.js";import"./useDescription-ltz1Kv2E.js";import"./VisuallyHidden-CWb-I5WH.js";import"./clsx-Ciqy0D92.js";import"./Button-C-MJs-8h.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-mYRlTdsp.js";import"./createLucideIcon-CMqrOtBY.js";import"./chevron-left-CofoV7Wg.js";import"./chevron-right-LQUAyZzO.js";import"./Heading-Cnm7AISj.js";import"./FieldError-i2DV-PmA.js";import"./Text-CFTnJ3zF.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
