import{$ as c,a as m,r as l,j as d}from"./iframe-CLvF6Z40.js";import{C as n}from"./Calendar-CbdJAywJ.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-M1YtIETG.js";import"./Button-IXlIqRd7.js";import"./utils-CJoHmjoo.js";import"./clsx-B-dksMZM.js";import"./Hidden-DDGoYcTF.js";import"./useFocusRing-DA8pMfhu.js";import"./index-CaUd4TAW.js";import"./index-BMLC5BDm.js";import"./useLabel-BdfOsCqj.js";import"./useLabels-BSmXnSL5.js";import"./useButton-Vz0P8804.js";import"./RSPContexts-CTL5xx9Q.js";import"./Text-D9kACuMI.js";import"./useDateFormatter-K8wn4bSf.js";import"./useControlledState-aZqY8xT5.js";import"./useLocalizedStringFormatter-CKVgiq-J.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CuWoIipA.js";import"./useEvent-DVQ3dgzr.js";import"./getScrollParent-CPZW7HPG.js";import"./scrollIntoView-D0r91Cjt.js";import"./useDescription-Ctzm8kKf.js";import"./VisuallyHidden-Ckm5OILG.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BtwSjEvq.js";import"./createLucideIcon-BkSuVCZc.js";import"./chevron-right-DZj9Q66a.js";import"./Button-CVKy4fAF.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-gIilFwjy.js";import"./Heading-QPqQYzxD.js";import"./FieldError-VeyWLyeT.js";import"./Text-DSAnxviu.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
