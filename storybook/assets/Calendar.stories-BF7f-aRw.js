import{$ as c,a as m,r as l,j as d}from"./iframe-DUaQtwZ4.js";import{C as n}from"./Calendar-CBzRz0to.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BwKyoR91.js";import"./Button-i4oaDduy.js";import"./utils-BxoSgS2M.js";import"./clsx-B-dksMZM.js";import"./Hidden-DsXdzH0m.js";import"./useFocusRing-rVgXHLOR.js";import"./index-DO5-fwSU.js";import"./index-BXP-Ly31.js";import"./useLabels-BjsrSgf-.js";import"./useButton-D2Ahp_5H.js";import"./RSPContexts-cx-hrirP.js";import"./Text-DKXG1-n8.js";import"./useDateFormatter-C9jEy12n.js";import"./useControlledState-44ZtI1aY.js";import"./useLocalizedStringFormatter-Db2anq4e.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-twLBdaoO.js";import"./useEvent-CQ4rq9N1.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BvCGrAk0.js";import"./VisuallyHidden-Dc19GMYo.js";import"./clsx-Ciqy0D92.js";import"./Button-DWqhmGVb.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DIWwlROZ.js";import"./createLucideIcon-DySqv-QW.js";import"./chevron-left-BatXjO9e.js";import"./chevron-right-Cp--Hn0x.js";import"./Heading-EcPDRrsl.js";import"./FieldError-CgUL0M8n.js";import"./Text-DnwjRhY6.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
