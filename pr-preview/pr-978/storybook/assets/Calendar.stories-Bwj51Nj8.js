import{$ as c,a as m,r as l,j as d}from"./iframe-DjgIrgXx.js";import{C as n}from"./Calendar-B3rzIoac.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-fUH3mz2h.js";import"./Button-B_QLJXSL.js";import"./utils-D2kAasoR.js";import"./clsx-B-dksMZM.js";import"./Hidden-BNyl_2c1.js";import"./useFocusRing-B_HSwrPF.js";import"./index-D1Un5PzA.js";import"./index-CF8FLkGf.js";import"./useLabels-B0sW_9bm.js";import"./useButton-ulDAvSC9.js";import"./RSPContexts-0C0uUEQ2.js";import"./Text-BGE_6lk2.js";import"./useDateFormatter-Bt4x6X_H.js";import"./useControlledState-BGQ28pQk.js";import"./useLocalizedStringFormatter-O_Q9rGTo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DoDec-wm.js";import"./useEvent-BWCG7k4D.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DRcT1wYK.js";import"./VisuallyHidden-BkzPV6ob.js";import"./clsx-Ciqy0D92.js";import"./Button-jAm1QGD3.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D_-NNNwN.js";import"./createLucideIcon-B3OWVXDd.js";import"./chevron-left-B6yMYIVH.js";import"./chevron-right-0q_6B72a.js";import"./Heading-DtdFzrUy.js";import"./FieldError-B5gp4YY1.js";import"./Text-CKRJVtbY.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
