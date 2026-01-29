import{$ as c,a as m,r as l,j as d}from"./iframe-CTvpKBSK.js";import{C as n}from"./Calendar-DaoUH8gl.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-ZCgF27xx.js";import"./Button-u0YKTc5k.js";import"./utils-BiLGnBBz.js";import"./clsx-B-dksMZM.js";import"./Hidden-DgXsqmZh.js";import"./useFocusRing-DfvRkfqL.js";import"./index-g0pugt_v.js";import"./index-DVdtA1wK.js";import"./useLabels-DvvCz1Di.js";import"./useButton-PqLQDpbO.js";import"./RSPContexts-fL8CzLzf.js";import"./Text-DjtetnZp.js";import"./useDateFormatter-DANHH9Hw.js";import"./useControlledState-66bebSHu.js";import"./useLocalizedStringFormatter-g83VFJyl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Dy4sE4Ea.js";import"./useEvent-6UK5uY3G.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-C76Kc7TT.js";import"./VisuallyHidden-C1c0ClIs.js";import"./clsx-Ciqy0D92.js";import"./Button-BtfMoIh9.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C25wyzL4.js";import"./createLucideIcon-BvYu-wbL.js";import"./chevron-left-D1EtnXJ8.js";import"./chevron-right-Ba1lRVVi.js";import"./Heading-DQH8WAtT.js";import"./FieldError-BquSn9wl.js";import"./Text-BI68LSzD.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
