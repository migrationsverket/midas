import{$ as p,a as m,r as l,j as d}from"./iframe-DAWhaW2t.js";import{C as n}from"./Calendar-CBqiz6Kj.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-lkBZyJqm.js";import"./Button-B8FC0WHw.js";import"./utils-BR5sLtXt.js";import"./clsx-B-dksMZM.js";import"./Hidden-B7a6sUEi.js";import"./useFocusRing-BovWNloU.js";import"./index-D684xh88.js";import"./index-domxwQpS.js";import"./useLabels-CwJrZ3kb.js";import"./useButton-Df4qwn4n.js";import"./RSPContexts-CAzvZUzf.js";import"./Text-D2IArQsC.js";import"./useDateFormatter-DjlqkZu0.js";import"./useControlledState-y8wjQEhG.js";import"./useLocalizedStringFormatter-Bud54IOx.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DD4IM7yW.js";import"./useEvent-CayB1s0N.js";import"./getScrollParent-Ciw6Mddl.js";import"./scrollIntoView-BWTP8Mlk.js";import"./useDescription-BQlYcHFl.js";import"./VisuallyHidden-z0IVTDH3.js";import"./clsx-Ciqy0D92.js";import"./Button-B_JidUJl.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DGsrEw_W.js";import"./createLucideIcon-DPsPtM0A.js";import"./chevron-right-B2ZTXXUM.js";import"./Heading-0ZDi0Y6q.js";import"./FieldError-Ba9bdy0b.js";import"./Text-CgRVAj4B.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
