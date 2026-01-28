import{$ as c,a as m,r as l,j as d}from"./iframe-CQYEjdz_.js";import{C as n}from"./Calendar-_r0871Jo.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DViULJY3.js";import"./Button-CvToZ011.js";import"./utils-CsTu9ikS.js";import"./clsx-B-dksMZM.js";import"./Hidden-4CIPvtTu.js";import"./useFocusRing-DlWhQp2A.js";import"./index-Vqw8ZxGg.js";import"./index-COoMP5iC.js";import"./useLabels-h4L6WHo6.js";import"./useButton-BvkZHVI6.js";import"./RSPContexts-CSrO3WzH.js";import"./Text-D3mzemNj.js";import"./useDateFormatter-CY89JA79.js";import"./useControlledState-08K4jq70.js";import"./useLocalizedStringFormatter-D_GTQ1_w.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B3-QfnnS.js";import"./useEvent-BdUP91sh.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CR3C3alu.js";import"./VisuallyHidden-CRBj22op.js";import"./clsx-Ciqy0D92.js";import"./Button-Cg9zZZ7J.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Nl9tDDDD.js";import"./createLucideIcon-B-IrTLpd.js";import"./chevron-left-D2PwPA2p.js";import"./chevron-right-wpQ6vNoI.js";import"./Heading-Bj5hgxJD.js";import"./FieldError-DI5FZj2R.js";import"./Text-C9HsrLdv.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
