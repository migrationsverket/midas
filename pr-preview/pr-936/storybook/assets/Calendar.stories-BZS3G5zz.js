import{$ as p,a as m,r as l,j as d}from"./iframe-DL0cr3No.js";import{C as n}from"./Calendar-CVbivILB.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-HT5mqxVF.js";import"./Button-B1jV44pP.js";import"./utils-BUc-cOn8.js";import"./clsx-B-dksMZM.js";import"./Hidden-pim-7Fp3.js";import"./useFocusRing-CUC21zm9.js";import"./index-RgupsUkd.js";import"./index-D6BEsua6.js";import"./useLabels-BC5LH5iw.js";import"./useButton-Bc5mEHZW.js";import"./RSPContexts-BjTXbXCR.js";import"./Text-BZY7tPCZ.js";import"./useDateFormatter-BSs-y0Ie.js";import"./useControlledState-oFMNdbap.js";import"./useLocalizedStringFormatter-YyaJr3k3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Bt1fPkRa.js";import"./useEvent-DDHdI2jX.js";import"./getScrollParent-Bmi8soUw.js";import"./scrollIntoView-D8yUuFnl.js";import"./useDescription-LyMbX_kV.js";import"./VisuallyHidden-LIFheGCJ.js";import"./clsx-Ciqy0D92.js";import"./Button-BJrL0Zus.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-CtVHrRwE.js";import"./chevron-right-BDmJdDyX.js";import"./Heading-BzXe7sUB.js";import"./FieldError-CSzLSbH0.js";import"./Text-B4js3SUR.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
