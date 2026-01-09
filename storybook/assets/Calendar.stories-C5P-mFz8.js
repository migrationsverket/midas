import{$ as p,a as m,r as l,j as d}from"./iframe-D57HPjUH.js";import{C as n}from"./Calendar-DNocjqiU.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DyPhj16P.js";import"./Button-DVU6uVBH.js";import"./utils-B06jzTgT.js";import"./clsx-B-dksMZM.js";import"./Hidden-Ds1-Bo4r.js";import"./useFocusRing-DtsyDwWy.js";import"./index-CgeWXzya.js";import"./index-DybAXT18.js";import"./useLabels-CqCkvO1J.js";import"./useButton-CaFZ2X3A.js";import"./RSPContexts-C7gWpURr.js";import"./Text-BRbYuply.js";import"./useDateFormatter-7QydgrLm.js";import"./useControlledState-C5qdaBdS.js";import"./useLocalizedStringFormatter-Do30dAQM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BLQ9ipgn.js";import"./useEvent-DImJ-Ww-.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DKI9BPRO.js";import"./VisuallyHidden-bPoGyprv.js";import"./clsx-Ciqy0D92.js";import"./Button-DUgrP7y1.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CP9tIGKw.js";import"./createLucideIcon-_zPB_PGU.js";import"./chevron-right-xZ5ZWmFG.js";import"./Heading-Bm1KbJoW.js";import"./FieldError-D4T6w_uZ.js";import"./Text-b7_ug03S.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
