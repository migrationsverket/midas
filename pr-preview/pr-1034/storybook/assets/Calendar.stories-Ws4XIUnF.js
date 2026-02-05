import{$ as c,a as m,r as l,j as d}from"./iframe-BJhw2N0g.js";import{C as n}from"./Calendar-B1faRGtz.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DUmPS3WP.js";import"./Button-BdMf96yr.js";import"./utils-RbG-Aia_.js";import"./clsx-B-dksMZM.js";import"./Hidden-BnfcrX-c.js";import"./useFocusRing-BW39cesy.js";import"./index-EmEFlqRi.js";import"./index-Dqq__9iy.js";import"./useLabels-CV-btu-r.js";import"./useButton-C__A5Pf3.js";import"./RSPContexts-BF5tUZC_.js";import"./Text-DyuufO01.js";import"./useDateFormatter-urVRi0vZ.js";import"./useControlledState-LSwz2R3F.js";import"./useLocalizedStringFormatter-Cl7mz5Qk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-D4OUnlJd.js";import"./useEvent-C-emn93v.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-AGbylvSE.js";import"./VisuallyHidden-72ICTt_i.js";import"./clsx-Ciqy0D92.js";import"./Button-DiHVVB0y.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-0P1BRXD7.js";import"./createLucideIcon-IeDQBETZ.js";import"./chevron-left-DX9IrpHX.js";import"./chevron-right-D2tkL5KA.js";import"./Heading-uv8eZZPp.js";import"./FieldError-C8pmpL6w.js";import"./Text-CXHx80oD.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
