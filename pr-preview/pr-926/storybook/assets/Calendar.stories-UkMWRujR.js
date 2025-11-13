import{$ as p,a as m,r as l,j as d}from"./iframe-DkfvDrVS.js";import{C as n}from"./Calendar-CSYkfN7B.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D0vtpqrL.js";import"./Button-BEd_-gNz.js";import"./utils-DzbRiR6M.js";import"./clsx-B-dksMZM.js";import"./Hidden-BZCdAkKc.js";import"./useFocusRing-BM6vq-KP.js";import"./index-DRhH9nnC.js";import"./index-BZFBT-3J.js";import"./useLabels-DflfoN4r.js";import"./useButton-DkycpXBB.js";import"./RSPContexts-UtRAkjgF.js";import"./Text-CsHYCFhe.js";import"./useDateFormatter-_P7yPS_9.js";import"./useControlledState-BCW3Vp6F.js";import"./useLocalizedStringFormatter-CJdbxQ-n.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-u7PqqgQ4.js";import"./useEvent-Crzj0sZq.js";import"./getScrollParent-CrQPhNEJ.js";import"./scrollIntoView-DkrJ5nKE.js";import"./useDescription-tC6WY3QA.js";import"./VisuallyHidden-M3WPnoP3.js";import"./clsx-Ciqy0D92.js";import"./Button-B_yGy9B1.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-caan2w-a.js";import"./chevron-right-DWXhndOs.js";import"./Heading-DSaLSNhs.js";import"./FieldError-BIMD40Se.js";import"./Text-DCB-quyL.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const L=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,L as __namedExportsOrder,K as default};
