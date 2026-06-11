import{$ as c,a as m,r as l,j as d}from"./iframe-BpYPS4gm.js";import{C as n}from"./Calendar-CeaLPVoQ.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CAhxhdvS.js";import"./Button-DUppCSnI.js";import"./utils-BkzBTegZ.js";import"./clsx-B-dksMZM.js";import"./Hidden-CTNCg_YB.js";import"./useFocusRing-Pq1S8Nkx.js";import"./index-C8EDYR9x.js";import"./index-CpQ1o8lj.js";import"./useLabel-DRewtayt.js";import"./useLabels-OrklnJZf.js";import"./useButton-BrYERvfl.js";import"./RSPContexts-Dy5rD26Q.js";import"./Text-CFeigIHC.js";import"./useDateFormatter-DqR1p0zM.js";import"./useControlledState-I9JlEHBp.js";import"./useLocalizedStringFormatter-QtzCwA5z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Ccqyt6dx.js";import"./useEvent-DFWay8hB.js";import"./getScrollParent-DWwoSmAy.js";import"./scrollIntoView-CExkIFba.js";import"./useDescription-DQt5_MYb.js";import"./VisuallyHidden-DHzGM297.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DxsDW2aQ.js";import"./createLucideIcon-Crq6vW28.js";import"./chevron-right-CS0EbbJ3.js";import"./Button-BN_pdcuF.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Bf3e6727.js";import"./Heading-Chz2Xcdl.js";import"./FieldError-zyWIi-nv.js";import"./Text-DftiSqWN.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
