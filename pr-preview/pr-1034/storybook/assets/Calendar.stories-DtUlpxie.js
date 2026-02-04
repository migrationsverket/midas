import{$ as c,a as m,r as l,j as d}from"./iframe-KIBzDUfV.js";import{C as n}from"./Calendar-DcRHw45j.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-B3OwxVzE.js";import"./Button-B74IQIIY.js";import"./utils-B3s11CxX.js";import"./clsx-B-dksMZM.js";import"./Hidden-_s5Kzwns.js";import"./useFocusRing-DIi5rye2.js";import"./index-B7quJzXG.js";import"./index-CZhNCbuO.js";import"./useLabels-CsvdAiYC.js";import"./useButton-CQ4Hdmts.js";import"./RSPContexts-BKpto4kw.js";import"./Text-BcfqcDG4.js";import"./useDateFormatter-QbnnBrOV.js";import"./useControlledState-gvhGp19W.js";import"./useLocalizedStringFormatter-BDrDCZSr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BB4T27K-.js";import"./useEvent-DlPvFlnY.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Cc1bnlw8.js";import"./VisuallyHidden-BM7AOnhj.js";import"./clsx-Ciqy0D92.js";import"./Button-D_6pE22y.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DpqnENkr.js";import"./createLucideIcon-DYfbqy8w.js";import"./chevron-left-DppjpgeB.js";import"./chevron-right-CuhCK8sq.js";import"./Heading-DAzo48yH.js";import"./FieldError-CQia8U4U.js";import"./Text-D2dj_Y_G.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
