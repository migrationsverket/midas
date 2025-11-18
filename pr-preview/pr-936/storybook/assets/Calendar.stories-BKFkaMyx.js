import{$ as p,a as m,r as l,j as d}from"./iframe-Zncv4Z_q.js";import{C as n}from"./Calendar-BOzPAdS3.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BIg1SQsD.js";import"./Button-C1wQYifO.js";import"./utils-Devluy5R.js";import"./clsx-B-dksMZM.js";import"./Hidden-mvxWno9C.js";import"./useFocusRing-Ca5sQuoz.js";import"./index-DOrRd1fP.js";import"./index--5vlIxZw.js";import"./useLabels-CK9bUtvN.js";import"./useButton-0w55E1yr.js";import"./RSPContexts-Dq6yafuR.js";import"./Text-DYVl_AjA.js";import"./useDateFormatter-B7qlJjBt.js";import"./useControlledState-CdK6s_X4.js";import"./useLocalizedStringFormatter-CEb7hF4c.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-2fQEmt89.js";import"./useEvent-CjvTY6Ub.js";import"./getScrollParent-lpMGunez.js";import"./scrollIntoView-BSmcXjZG.js";import"./useDescription-Dwj8v6fw.js";import"./VisuallyHidden-Cr1_BNyT.js";import"./clsx-Ciqy0D92.js";import"./Button-uct9GVFZ.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-DfBRHJjR.js";import"./chevron-right-bdlLYBnr.js";import"./Heading-CES6z74c.js";import"./FieldError-CP0ao9hi.js";import"./Text-B8DR8Mpf.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
