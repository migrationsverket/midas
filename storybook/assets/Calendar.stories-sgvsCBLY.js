import{$ as c,a as m,r as l,j as d}from"./iframe-DXDVea5_.js";import{C as n}from"./Calendar-C5sqWbAZ.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BoW1jLSn.js";import"./Button-B96QzwM1.js";import"./utils-DmTgTNnL.js";import"./clsx-B-dksMZM.js";import"./Hidden-Fdu7osLZ.js";import"./useFocusRing-CEQXzaY3.js";import"./index-BnRq08uH.js";import"./index-5yLJteXC.js";import"./useLabels-CE1k4rx3.js";import"./useButton-fPBc3Yts.js";import"./RSPContexts-BS0M9Uv7.js";import"./Text-0AXlCnaa.js";import"./useDateFormatter-C-rInMuT.js";import"./useControlledState-CbOkSAeB.js";import"./useLocalizedStringFormatter-CUxy-dqS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Dd9sKSLJ.js";import"./useEvent-JQpqaSX3.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Cg7YGuRz.js";import"./VisuallyHidden-Cz2sP0_V.js";import"./clsx-Ciqy0D92.js";import"./Button-gdOhQx8I.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BRUhSZ3u.js";import"./createLucideIcon-De5c0UOR.js";import"./chevron-left-D69BCjrG.js";import"./chevron-right-pOfur9mg.js";import"./Heading-C9UszV_P.js";import"./FieldError-D7SZhjyZ.js";import"./Text-gvZnrrW0.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
