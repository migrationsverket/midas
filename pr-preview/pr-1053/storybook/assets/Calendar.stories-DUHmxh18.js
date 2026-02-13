import{$ as c,a as m,r as l,j as d}from"./iframe-HTnyBHVP.js";import{C as n}from"./Calendar-BnT7KXg6.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-B1_APlus.js";import"./Button-D68YtQlI.js";import"./utils-nUZbU1Wv.js";import"./clsx-B-dksMZM.js";import"./Hidden-CcyJsNu-.js";import"./useFocusRing-cQQ3mgw6.js";import"./index-0Fr-bx-l.js";import"./index-B1GoJJ0m.js";import"./useLabels-B85yUaIW.js";import"./useButton-kqwXbyL2.js";import"./RSPContexts-CSmDHtYi.js";import"./Text-C-D185rS.js";import"./useDateFormatter-DppTL3wq.js";import"./useControlledState-BvewPd3v.js";import"./useLocalizedStringFormatter-BalekKZg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BhEyxspr.js";import"./useEvent-DHkhC7Ca.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DU_40zC-.js";import"./VisuallyHidden-DL4mh8Hc.js";import"./clsx-Ciqy0D92.js";import"./Button-CNzpSaeX.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Pq2987gd.js";import"./createLucideIcon-D9zOPHSY.js";import"./chevron-left-Cy0wuZGy.js";import"./chevron-right-DBroWTK6.js";import"./Heading-DJQooB_9.js";import"./FieldError-W3cPolKE.js";import"./Text-C2CdsLAg.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
