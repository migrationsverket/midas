import{$ as c,a as m,r as l,j as d}from"./iframe-C3suvfCC.js";import{C as n}from"./Calendar-rUgzz_Sx.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D_li0D00.js";import"./Button-Dadovnzr.js";import"./utils-8KtKGWo2.js";import"./clsx-B-dksMZM.js";import"./Hidden-B4jqCieW.js";import"./number-DfkVkf0F.js";import"./useFocusRing-DPPVEX-G.js";import"./index-DPEO0aoj.js";import"./index-PxyQfFNQ.js";import"./useLabels-ETQjh8K0.js";import"./useButton-D1gxBCXz.js";import"./RSPContexts-D9aNL0uK.js";import"./Text-TmrZTkdZ.js";import"./useDateFormatter-CvI0y3no.js";import"./useControlledState-Dy1nnS07.js";import"./useLocalizedStringFormatter-BhJ_7gEa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-D3I_akV7.js";import"./useEvent-C45D4JfQ.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Dzu4Oy5P.js";import"./VisuallyHidden-BuDGIcKc.js";import"./clsx-Ciqy0D92.js";import"./Button-BugZSa53.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B21-jb3s.js";import"./createLucideIcon-lIWmNTi7.js";import"./chevron-left-DAI-sG2c.js";import"./chevron-right-DJFp_0h-.js";import"./Heading-BUZwhMm1.js";import"./FieldError-r_7UR8Ic.js";import"./Text-CAR9w4j8.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
