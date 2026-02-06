import{$ as c,a as m,r as l,j as d}from"./iframe-X3mj68t3.js";import{C as n}from"./Calendar-DjSUL8lb.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DIpqwNK8.js";import"./Button-B9l0bgEJ.js";import"./utils-DTPrts_7.js";import"./clsx-B-dksMZM.js";import"./Hidden-ozg39Vr6.js";import"./useFocusRing-A-SYz4Bz.js";import"./index-BNiETeWH.js";import"./index-CgJQ_hcF.js";import"./useLabels-DEY-9MxO.js";import"./useButton-CupICIN9.js";import"./RSPContexts-DnDgit_C.js";import"./Text-dnG1hIAI.js";import"./useDateFormatter-DWgAMLBa.js";import"./useControlledState-DGtnjhE_.js";import"./useLocalizedStringFormatter-BdsuAGwL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DgXh_gH6.js";import"./useEvent-cKzqiIgZ.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-C7T8B3ZX.js";import"./VisuallyHidden-BBlGikRY.js";import"./clsx-Ciqy0D92.js";import"./Button-BVJ0mzNb.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DzOxC-Qk.js";import"./createLucideIcon-DXrZJMlk.js";import"./chevron-left-CVEOaeaP.js";import"./chevron-right-D3k48dVp.js";import"./Heading-ocoQFlqf.js";import"./FieldError-ND8ftnbY.js";import"./Text-BWheoq0_.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
