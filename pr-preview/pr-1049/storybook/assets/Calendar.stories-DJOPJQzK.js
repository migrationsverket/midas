import{$ as c,a as m,r as l,j as d}from"./iframe-8LQjSoV-.js";import{C as n}from"./Calendar-CBeeg7XI.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CFrnjiW0.js";import"./Button-B1ovmxx6.js";import"./utils-D4ezzWJc.js";import"./clsx-B-dksMZM.js";import"./Hidden-DMawGuP2.js";import"./useFocusRing-eCeeo32D.js";import"./index-CSLiAA3d.js";import"./index-Bp415QC6.js";import"./useLabels-D4_n4kmh.js";import"./useButton-V0hMWo2E.js";import"./RSPContexts-C9qIP2XU.js";import"./Text-Ba5DRcdW.js";import"./useDateFormatter-Cj_MKDX9.js";import"./useControlledState-BRRCr0-V.js";import"./useLocalizedStringFormatter-C8C_oBkV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-YjnK7sZh.js";import"./useEvent-Ba0ZD0JM.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DXvHmld6.js";import"./VisuallyHidden-CKIzJ5lj.js";import"./clsx-Ciqy0D92.js";import"./Button-BHfZAxDJ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CEJaTWWg.js";import"./createLucideIcon-DK8ikGDs.js";import"./chevron-left-wpWi4aMC.js";import"./chevron-right-ByfE34iA.js";import"./Heading-BEuxFqUj.js";import"./FieldError-ZO43sKQE.js";import"./Text-B7DoZjLQ.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
