import{$ as c,a as m,r as l,j as d}from"./iframe-CM25YVMI.js";import{C as n}from"./Calendar-D6DZmhCT.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Dckavun8.js";import"./Button-vkdXqgie.js";import"./utils-B96ufrPs.js";import"./clsx-B-dksMZM.js";import"./Hidden-Bkjvz6Ri.js";import"./useFocusRing-leQD3u2F.js";import"./index-DYgoHuTv.js";import"./index-Dkdrw9MX.js";import"./useLabel-Bns7seSC.js";import"./useLabels-61TYLMjS.js";import"./useButton-B_beWRfB.js";import"./RSPContexts-BEyD-TmB.js";import"./Text-DDiDpkRq.js";import"./useDateFormatter-CUUKCeJa.js";import"./useControlledState-FG_bUeqE.js";import"./useLocalizedStringFormatter-B8uPJVbi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BfioqoHa.js";import"./useEvent-BJWNvlK2.js";import"./getScrollParent-CcTlIiv2.js";import"./scrollIntoView-CM-wWI7V.js";import"./useDescription-D-2ki_PT.js";import"./VisuallyHidden-CwsE6PRe.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CrDvJSmY.js";import"./createLucideIcon-Br4oCZrR.js";import"./chevron-right-COa_1vZR.js";import"./Button-CImuJsqD.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DdE69EWU.js";import"./Heading-Bq6iHTA4.js";import"./FieldError-DrjYFklj.js";import"./Text-D4mHh6eT.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
