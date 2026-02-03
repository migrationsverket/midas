import{$ as c,a as m,r as l,j as d}from"./iframe-CidOCZHB.js";import{C as n}from"./Calendar-CoV4iEuL.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Qg0W8cE5.js";import"./Button-DuriNJcC.js";import"./utils-8aJjhqNc.js";import"./clsx-B-dksMZM.js";import"./Hidden-CVjT_yJa.js";import"./useFocusRing-B8BRQkLp.js";import"./index-BBVZX2NF.js";import"./index--plQHcpZ.js";import"./useLabels-CL1SuhzR.js";import"./useButton-Bq1zX9NI.js";import"./RSPContexts-BO4m8Pb5.js";import"./Text-FUR3GSSr.js";import"./useDateFormatter-BM61U1Nd.js";import"./useControlledState-D0gzrqio.js";import"./useLocalizedStringFormatter-DaU6bXbA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Drmp26c1.js";import"./useEvent-BYzozCP5.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-D7W5dV4U.js";import"./VisuallyHidden-jV2krERt.js";import"./clsx-Ciqy0D92.js";import"./Button-DvQa6ahi.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B0fC8SpF.js";import"./createLucideIcon-bGF3Re28.js";import"./chevron-left-DND5-xf2.js";import"./chevron-right-Byb3qO-R.js";import"./Heading-Bqp8Sl6A.js";import"./FieldError-DXanqLob.js";import"./Text-DVNzE23j.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
