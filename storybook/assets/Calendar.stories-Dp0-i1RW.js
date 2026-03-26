import{$ as c,a as m,r as l,j as d}from"./iframe-CRmifMxk.js";import{C as n}from"./Calendar-ZCDnvMlI.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-B5M14PxE.js";import"./Button-Xq9T9zNn.js";import"./utils-Dhemezbc.js";import"./clsx-B-dksMZM.js";import"./Hidden-D_jN673M.js";import"./useFocusRing-C63zC52P.js";import"./index-DsJY3sZz.js";import"./index-C2oL4zj2.js";import"./useLabel-CMUsO_ec.js";import"./useLabels-DRk006Lw.js";import"./useButton-BpHW9Z05.js";import"./RSPContexts-Ch-opsTz.js";import"./Text-7kJBKZyv.js";import"./useDateFormatter-BiREcNzm.js";import"./useControlledState-DeYyUgKl.js";import"./useLocalizedStringFormatter-D-hwM5Wx.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C24Fq-cB.js";import"./useEvent-CCz8s320.js";import"./getScrollParent-DxnI4PpA.js";import"./scrollIntoView-D0gLy9uc.js";import"./useDescription-Tao1j2gm.js";import"./VisuallyHidden-C9jbNlKJ.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-Do8vK9qe.js";import"./createLucideIcon-DkATSQ6x.js";import"./chevron-right-BN37CaNV.js";import"./Button-C1SdrETN.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CHY6Cxq_.js";import"./Heading-B2jvBi9y.js";import"./FieldError-4mX3m-58.js";import"./Text-Cw5AWujN.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
