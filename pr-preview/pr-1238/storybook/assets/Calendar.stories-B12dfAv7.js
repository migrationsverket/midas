import{$ as c,a as m,r as l,j as d}from"./iframe-DNIclJcr.js";import{C as n}from"./Calendar-o5cAg5Pm.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C35Pg8vY.js";import"./Button-BbtXrV7T.js";import"./utils-D_0gjjvk.js";import"./clsx-B-dksMZM.js";import"./Hidden-BEQ2WZ2g.js";import"./useFocusRing-DzLjolkJ.js";import"./index-CUHvxg5U.js";import"./index-DNZxg9il.js";import"./useLabel-D60xKodB.js";import"./useLabels-BYBeQKfq.js";import"./useButton-rBFOLHck.js";import"./RSPContexts-j22KMFJy.js";import"./Text-Ctfv3ntz.js";import"./useDateFormatter-C62jvIxR.js";import"./useControlledState-DkjzWyRs.js";import"./useLocalizedStringFormatter-DVD6HWHu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DW-rXVxh.js";import"./useEvent-CeBY1Vjl.js";import"./getScrollParent-DqCvg1x9.js";import"./scrollIntoView-B-YTSEJ0.js";import"./useDescription-D_58VzB0.js";import"./VisuallyHidden-BM29Dd_X.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CvmMJ_3S.js";import"./createLucideIcon-DHdJRlte.js";import"./chevron-right-D1Q-yK8Q.js";import"./Button-CmNHemBb.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-D1mfHEq_.js";import"./Heading-DUw36RJn.js";import"./FieldError-C44SiAvc.js";import"./Text-CeEH6Nc6.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
