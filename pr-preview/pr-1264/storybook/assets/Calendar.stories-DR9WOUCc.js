import{$ as c,a as m,r as l,j as d}from"./iframe-Bd9H7Vfx.js";import{C as n}from"./Calendar-DUW4ODFE.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BucAqfv5.js";import"./Button-BiRWLd5m.js";import"./utils-DsmRkWxC.js";import"./clsx-B-dksMZM.js";import"./Hidden-BsqjLjJT.js";import"./useFocusRing-CnLPB_6u.js";import"./index-BtBPjCGs.js";import"./index-CaWaKKHJ.js";import"./useLabel-lBHMCnWn.js";import"./useLabels-D4u2oU-D.js";import"./useButton-BfgVUf0f.js";import"./RSPContexts-CuXYnuDl.js";import"./Text-B_j7rweg.js";import"./useDateFormatter-BNhaZ9Dz.js";import"./useControlledState-075FDtLg.js";import"./useLocalizedStringFormatter-BsyS8WPI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-D1NTUXfA.js";import"./useEvent-DN0cDM1V.js";import"./getScrollParent-Cbimak5V.js";import"./scrollIntoView-Bf_lnXkb.js";import"./useDescription-C3g1on3s.js";import"./VisuallyHidden-ytL0956d.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CEXuYTaI.js";import"./createLucideIcon-DpMYq6qz.js";import"./chevron-right-C6mWbtSU.js";import"./Button-6v77JWTX.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DCais5ZN.js";import"./Heading-DoXH1r2E.js";import"./FieldError-DpsZbolk.js";import"./Text-6cOQ6dAC.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
