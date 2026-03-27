import{$ as c,a as m,r as l,j as d}from"./iframe-BwW6Fqvd.js";import{C as n}from"./Calendar-CqHkalSz.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BLdWi9d3.js";import"./Button-zWxdU5Zd.js";import"./utils-Bghr1fcB.js";import"./clsx-B-dksMZM.js";import"./Hidden-DOVwj0BP.js";import"./useFocusRing-B8ItjY_Y.js";import"./index-BtFqcAbs.js";import"./index-BBxAD_Mx.js";import"./useLabel-BplFUPFd.js";import"./useLabels-CQajE6fa.js";import"./useButton-BEskBg1H.js";import"./RSPContexts-Bh9oL_fS.js";import"./Text-CYDu8Dn_.js";import"./useDateFormatter-Bj6cr3ZH.js";import"./useControlledState-DGQCfKNy.js";import"./useLocalizedStringFormatter-B_9ddfhq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BOBlZ46l.js";import"./useEvent-DMcK-jhf.js";import"./getScrollParent-C7W5J6K6.js";import"./scrollIntoView-CvIpTomZ.js";import"./useDescription-DDaxYDi5.js";import"./VisuallyHidden-6rJm-kLH.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CG1uufYJ.js";import"./createLucideIcon-baXbygoM.js";import"./chevron-right-Nnozpy5F.js";import"./Button-D29dOr6P.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-cARnU_EF.js";import"./Heading-B3fvxMc9.js";import"./FieldError-DG2mBVdw.js";import"./Text-D0nO-HBI.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
