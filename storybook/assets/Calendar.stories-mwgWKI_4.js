import{$ as p,a as m,r as l,j as d}from"./iframe-zfNSE992.js";import{C as n}from"./Calendar-DlHFuQop.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CrylkjOZ.js";import"./Button-DC5DfWyL.js";import"./utils-B2SfFvVK.js";import"./clsx-B-dksMZM.js";import"./Hidden-DgIIwhxN.js";import"./useFocusRing-CI59KcKl.js";import"./index-CnTZzMrs.js";import"./index-D3448pLr.js";import"./useLabels-CjQ9ItwL.js";import"./useButton-DIQ3lO2m.js";import"./RSPContexts-CPw4lDId.js";import"./Text-Bl3fcot9.js";import"./useDateFormatter-CaaHE6JI.js";import"./useControlledState-CIBWwPsl.js";import"./useLocalizedStringFormatter-CJ_FBxg6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B_JVk0Ia.js";import"./useEvent-BF95CLEW.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CxH9sory.js";import"./VisuallyHidden-wYdlkGlt.js";import"./clsx-Ciqy0D92.js";import"./Button-DBGCil-H.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BJ90h7Po.js";import"./createLucideIcon-BiSgLEsQ.js";import"./chevron-right-BhjXdtSn.js";import"./Heading-in0uxqkQ.js";import"./FieldError-tjW0lz2J.js";import"./Text-CHvMVhnB.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
