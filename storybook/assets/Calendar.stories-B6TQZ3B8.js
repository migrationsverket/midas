import{$ as c,a as m,r as l,j as d}from"./iframe-th_azU5_.js";import{C as n}from"./Calendar-C9hAvgc3.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DcSmvgxb.js";import"./Button-wk7uPRGE.js";import"./utils-C4VuU2um.js";import"./clsx-B-dksMZM.js";import"./Hidden-BFds7gf1.js";import"./useFocusRing-BDcpBQzO.js";import"./index-CzrHA3v-.js";import"./index-BbA8n6Hq.js";import"./useLabel-CYIQyZrD.js";import"./useLabels-BxY9CSFr.js";import"./useButton-u6wZaZk_.js";import"./RSPContexts-DcQ_ZJZT.js";import"./Text-hdNvr6U4.js";import"./useDateFormatter-Dxg1P2WD.js";import"./useControlledState-kFNWgpP8.js";import"./useLocalizedStringFormatter-C0jZ500X.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-HN_jwC-A.js";import"./useEvent-tLzXOHdh.js";import"./getScrollParent-BHVOeKIe.js";import"./scrollIntoView-D5fKhQtx.js";import"./useDescription-D59bYXVd.js";import"./VisuallyHidden-CkdA4sJp.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-B7yEOEbK.js";import"./createLucideIcon-Bv08NMl0.js";import"./chevron-right-DCEBZJ9f.js";import"./Button-CauCyY5i.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Bei2ateM.js";import"./Heading-CzjIk2-X.js";import"./FieldError-AfpWYpbz.js";import"./Text-DELoTx3Q.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
