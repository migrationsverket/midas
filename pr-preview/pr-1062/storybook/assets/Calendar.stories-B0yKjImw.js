import{$ as c,a as m,r as l,j as d}from"./iframe-DT61WbGn.js";import{C as n}from"./Calendar-Cdn6xbDU.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BOcReMMs.js";import"./Button-9A3cEUNU.js";import"./utils-BNrItRfy.js";import"./clsx-B-dksMZM.js";import"./Hidden-DkIy8QtB.js";import"./useFocusRing-DYTAd8_U.js";import"./index-BOjhewCw.js";import"./index-B6JELXQq.js";import"./useLabels-BLjzORvQ.js";import"./useButton-DBUAos9E.js";import"./RSPContexts-BKYkq1wo.js";import"./Text-BiokIEeM.js";import"./useDateFormatter-Dln8YS_N.js";import"./useControlledState-BE2wyFhJ.js";import"./useLocalizedStringFormatter-B7AhjKe6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DOMiGJmv.js";import"./useEvent-BKGBdaZ_.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-oZ2Jk6d8.js";import"./VisuallyHidden-CidbwADT.js";import"./clsx-Ciqy0D92.js";import"./Button-B3A8mU5i.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CfwtoEKk.js";import"./createLucideIcon-BxpBX-dW.js";import"./chevron-left-BhTS86Zl.js";import"./chevron-right-BNCacJNO.js";import"./Heading-MXMhB4o8.js";import"./FieldError-BPllYc2R.js";import"./Text-BlgJzzP7.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
