import{$ as c,a as m,r as l,j as d}from"./iframe-CU6IyPdi.js";import{C as n}from"./Calendar-nWSG17JZ.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-MrdNGTt6.js";import"./Button-Dn__6SVC.js";import"./utils-C3EuF5tN.js";import"./clsx-B-dksMZM.js";import"./Hidden-BMh1hBMj.js";import"./useFocusRing-CgN0-97j.js";import"./index-CWwAu-UJ.js";import"./index-EaiVYzVz.js";import"./useLabel-Bt0836mW.js";import"./useLabels-Di0VtbU1.js";import"./useButton-YhY6a0OA.js";import"./RSPContexts-C8L0Tday.js";import"./Text-DjY_AY4u.js";import"./useDateFormatter-DqIx6VgW.js";import"./useControlledState-DnKqpd9E.js";import"./useLocalizedStringFormatter-CCIw-1cs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DQXzh7Ev.js";import"./useEvent-CbNpr6qP.js";import"./getScrollParent-DPGj-_74.js";import"./scrollIntoView-CBeKWyA3.js";import"./useDescription-C14Mmfay.js";import"./VisuallyHidden-Bl6sgZVR.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-Cai4MLgh.js";import"./createLucideIcon-BhPQSJHM.js";import"./chevron-right-r35xnsFW.js";import"./Button-DzjFo675.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-D1ier4wV.js";import"./Heading-Dnd9KkCF.js";import"./FieldError-CwoMpyv7.js";import"./Text-DiW7fUXy.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
