import{$ as c,a as m,r as l,j as d}from"./iframe-2JtjApPo.js";import{C as n}from"./Calendar--OQNa6a-.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-oFLRhsI3.js";import"./Button-ByCdtsdN.js";import"./utils-CzNHZNuR.js";import"./clsx-B-dksMZM.js";import"./Hidden-C9R9ag8Z.js";import"./useFocusRing-C0YicbWo.js";import"./index-CSBRpQP6.js";import"./index-BGdLG16e.js";import"./useLabels-L4n1lfmV.js";import"./useButton-DQi2T4lG.js";import"./RSPContexts-CHZ5pSVJ.js";import"./Text-DuXa3TNC.js";import"./useDateFormatter-C-UfORiU.js";import"./useControlledState-Bc67AkWO.js";import"./useLocalizedStringFormatter-DLo_dynU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BCFuFidE.js";import"./useEvent-X2YyRtFg.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DTNf7b1X.js";import"./VisuallyHidden-BPqsl5RX.js";import"./clsx-Ciqy0D92.js";import"./Button-Cqjrp1pe.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dm9cUQa8.js";import"./createLucideIcon-DDjq8OkZ.js";import"./chevron-left-CyBtzQsS.js";import"./chevron-right-DkxdPLd5.js";import"./Heading-BTo5mNK0.js";import"./FieldError-Dln1Os_1.js";import"./Text-BSc0SvwI.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
