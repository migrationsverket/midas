import{$ as c,a as m,r as l,j as d}from"./iframe-C_2Po1qD.js";import{C as n}from"./Calendar-CByMIMhg.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-KDG9eiEV.js";import"./Button-B4BJcFaK.js";import"./utils-BoKSmqfj.js";import"./clsx-B-dksMZM.js";import"./Hidden-JqaEh-jr.js";import"./useFocusRing-BUXHOBJT.js";import"./index-D4Zi599j.js";import"./index-CUY9Xica.js";import"./useLabel-ZZAqWazw.js";import"./useLabels-DTlsntHT.js";import"./useButton-C9tFcCTE.js";import"./RSPContexts-BAtJ9VDW.js";import"./Text-CSVa2wh5.js";import"./useDateFormatter-D8XWwlDo.js";import"./useControlledState-DD8Y7tdb.js";import"./useLocalizedStringFormatter-DG7dszbR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CK89GVp1.js";import"./useEvent-BbapqdAS.js";import"./getScrollParent-D4y-S3mv.js";import"./scrollIntoView-BtZvMRNg.js";import"./useDescription-01jD8vLc.js";import"./VisuallyHidden-BezuJMNy.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-kIOXLM1F.js";import"./createLucideIcon-Cz_UZZWy.js";import"./chevron-right-LkrIUy2t.js";import"./Button-BV8yLb9D.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DvhmujFD.js";import"./Heading-C_lEIpy5.js";import"./FieldError-g89TDsVb.js";import"./Text-DCF_RRxK.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
