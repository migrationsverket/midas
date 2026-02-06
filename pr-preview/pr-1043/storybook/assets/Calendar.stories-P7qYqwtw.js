import{$ as c,a as m,r as l,j as d}from"./iframe-D9Rzgh85.js";import{C as n}from"./Calendar-Bx1CI38K.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D9xWzKbV.js";import"./Button-D5VXQBoK.js";import"./utils-CcE3691I.js";import"./clsx-B-dksMZM.js";import"./Hidden-CRl_n9Jn.js";import"./useFocusRing-qy6wHmp4.js";import"./index-DmQawtna.js";import"./index-BrMoY6nn.js";import"./useLabels-nvjoqgK_.js";import"./useButton-C4LQsEB7.js";import"./RSPContexts-BGjvgK0i.js";import"./Text-3qget8RN.js";import"./useDateFormatter-DHg4HrOu.js";import"./useControlledState-CJh_WJgv.js";import"./useLocalizedStringFormatter-Dq7J19BW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C71n-Tjr.js";import"./useEvent-Ckf4GrX8.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BM34yKeA.js";import"./VisuallyHidden-DYBD2kzd.js";import"./clsx-Ciqy0D92.js";import"./Button-GEwt1th_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DjQyT7Ji.js";import"./createLucideIcon-Cr-DKDH9.js";import"./chevron-left-Vi_gwqq_.js";import"./chevron-right-B03qdd04.js";import"./Heading-CbGso2BQ.js";import"./FieldError-CIzKS9xI.js";import"./Text-Dd2X_hQM.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
