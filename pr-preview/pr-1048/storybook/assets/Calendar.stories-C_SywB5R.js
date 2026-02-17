import{$ as c,a as m,r as l,j as d}from"./iframe-E1AQR6fx.js";import{C as n}from"./Calendar-8fIhmZ2d.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C97g3u2e.js";import"./Button-Dcl0k1ed.js";import"./utils-C9k_Z1-L.js";import"./clsx-B-dksMZM.js";import"./Hidden-9DB17Ws8.js";import"./number-DfkVkf0F.js";import"./useFocusRing-ClTdqGvY.js";import"./index-BY2IQZHk.js";import"./index-LL_riRvH.js";import"./useLabels-BBvY9IMA.js";import"./useButton-CI0sJCD2.js";import"./RSPContexts-JAi78m_a.js";import"./Text-Dbmjj9FJ.js";import"./useDateFormatter-B4yJOQwj.js";import"./useControlledState-DzUy243X.js";import"./useLocalizedStringFormatter-Cs1nU2fr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Ds_EomMe.js";import"./useEvent-DhJ_snWh.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BmqQ3yEq.js";import"./VisuallyHidden-Bpe1pimA.js";import"./clsx-Ciqy0D92.js";import"./Button-IKHtJ1-M.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dtq-c4fz.js";import"./createLucideIcon-D8ApGr_r.js";import"./chevron-left-DVDjppEM.js";import"./chevron-right-BSjKo2Eh.js";import"./Heading-at50eEei.js";import"./FieldError-EwGM1OTM.js";import"./Text-CEr6kfZB.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
