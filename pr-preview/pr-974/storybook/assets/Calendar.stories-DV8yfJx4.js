import{$ as p,a as m,r as l,j as d}from"./iframe-C9g4MTX7.js";import{C as n}from"./Calendar-gi9IOujX.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CnqBeMGN.js";import"./Button-_3UTtnws.js";import"./utils-_Jmhc4hr.js";import"./clsx-B-dksMZM.js";import"./Hidden-Blvi27yb.js";import"./useFocusRing-DG43Unny.js";import"./index-C_J0lp9X.js";import"./index-DhjFuTvG.js";import"./useLabels-LOj0MSb9.js";import"./useButton-BIIPbxfI.js";import"./RSPContexts-vx5S09HY.js";import"./Text-XjFf9xI5.js";import"./useDateFormatter-DVSvFu_n.js";import"./useControlledState-FOZz2YKy.js";import"./useLocalizedStringFormatter-DewJi2DS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BXO-XuWZ.js";import"./useEvent-Bv7P4LMn.js";import"./getScrollParent-DWsgVBc_.js";import"./scrollIntoView-DxrqCAfs.js";import"./useDescription-4ih0aY-K.js";import"./VisuallyHidden-CMi3wTGx.js";import"./clsx-Ciqy0D92.js";import"./Button-Cd6lSrpE.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D0wJzWuW.js";import"./createLucideIcon-mQbrOUxF.js";import"./chevron-right-Bnx_BXG2.js";import"./Heading-Q5zE7r_Q.js";import"./FieldError-C8KRqUxl.js";import"./Text-CbrSL-Nv.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
