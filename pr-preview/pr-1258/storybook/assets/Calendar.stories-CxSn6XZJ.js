import{$ as c,a as m,r as l,j as d}from"./iframe-1_iu-uVv.js";import{C as n}from"./Calendar-zmDcabIb.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BRTM2gqW.js";import"./Button-C-cqr9pq.js";import"./utils-D8XDfVqo.js";import"./clsx-B-dksMZM.js";import"./Hidden-7JO0YZlM.js";import"./useFocusRing-CLMMEccq.js";import"./index-DaFkej-O.js";import"./index-8FVPoEJc.js";import"./useLabel-DW7Clw8B.js";import"./useLabels-CD6qsxzR.js";import"./useButton-QeuVXvqT.js";import"./RSPContexts-Bv3dZUJW.js";import"./Text-Cs17jUaF.js";import"./useDateFormatter-BSKxpABR.js";import"./useControlledState-DeicQIqX.js";import"./useLocalizedStringFormatter-DQ-EATPr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DbC_5c-q.js";import"./useEvent-CZV_7zjz.js";import"./getScrollParent-CfG8ol6W.js";import"./scrollIntoView-CoHaVyLh.js";import"./useDescription-C3hybjUT.js";import"./VisuallyHidden-CLNANI2G.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-7DzEqD1A.js";import"./createLucideIcon-BbCelBYg.js";import"./chevron-right-CMcMvpyi.js";import"./Button-3xGdYp6o.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-ByENZTtA.js";import"./Heading-Bete7LDT.js";import"./FieldError--XBiql7z.js";import"./Text-Cvi52zQo.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
