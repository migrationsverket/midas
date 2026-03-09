import{$ as c,a as m,r as l,j as d}from"./iframe-DF-gckEl.js";import{C as n}from"./Calendar-D5LLOtP4.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-B0UZx3JU.js";import"./Button-DfFeWMER.js";import"./utils-xE_2EOTS.js";import"./clsx-B-dksMZM.js";import"./Hidden-CnADKIpW.js";import"./useFocusRing-DVmaifLp.js";import"./index-BB1CKHGL.js";import"./index-B-8oVGre.js";import"./useLabels-DYYbGYck.js";import"./useButton-D5_aypw0.js";import"./RSPContexts-CRcRJYcx.js";import"./Text-CD93M0aA.js";import"./useDateFormatter-BCqqUaaY.js";import"./useControlledState-BozieDQw.js";import"./useLocalizedStringFormatter-B49X21jk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DqzKfJJj.js";import"./useEvent-BG4kCyp-.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BrazaQD9.js";import"./VisuallyHidden-WVzpTwv1.js";import"./clsx-Ciqy0D92.js";import"./Button-xgruqnpI.js";import"./Button.module-7yYQGR8l.js";import"./useLocalizedStringFormatter-CPX24HR9.js";import"./createLucideIcon-DlP1PWjK.js";import"./chevron-left-CwVtxkh-.js";import"./chevron-right-D0TCEwJq.js";import"./Heading-CDJzqsYL.js";import"./FieldError-nZ-6NevE.js";import"./Text-mrdWRvrC.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
