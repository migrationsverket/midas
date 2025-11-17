import{$ as p,a as m,r as l,j as d}from"./iframe-CjjIIKGs.js";import{C as n}from"./Calendar-C_I1vYE_.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BOXpqe4f.js";import"./Button-DNpQXrrI.js";import"./utils-8ZbXS6f6.js";import"./clsx-B-dksMZM.js";import"./Hidden-BaoTcLvl.js";import"./useFocusRing-BUBN2goW.js";import"./index-D20K6lUI.js";import"./index-DEI9jor0.js";import"./useLabels-Ia4Z8tbb.js";import"./useButton-DixBK3IU.js";import"./RSPContexts-D6XtKLzn.js";import"./Text-CkV4NByh.js";import"./useDateFormatter-D0Mk1YY4.js";import"./useControlledState-wS3aoh2y.js";import"./useLocalizedStringFormatter-TVROMl_H.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BXpxc2ya.js";import"./useEvent-D1k2-Iuc.js";import"./getScrollParent-DL70V3fn.js";import"./scrollIntoView-Bwwiqusc.js";import"./useDescription-DKk6Hg5e.js";import"./VisuallyHidden-BVLylhk2.js";import"./clsx-Ciqy0D92.js";import"./Button-BNEmvK4K.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-Dff0qiua.js";import"./createLucideIcon-BKOGWx3H.js";import"./chevron-right-D544GzYj.js";import"./Heading-D4Qj-Amo.js";import"./FieldError-CY8akRGr.js";import"./Text-BpYGQE2I.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Q=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,Q as __namedExportsOrder,L as default};
