import{$ as c,a as m,r as l,j as d}from"./iframe-BiqtS-LP.js";import{C as n}from"./Calendar-jQF8K2Zq.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-T_UY4YYj.js";import"./Button-Dc8C55b6.js";import"./utils-DDp3zx2O.js";import"./clsx-B-dksMZM.js";import"./Hidden-DFfMyXk8.js";import"./useFocusRing-BBdC9X4b.js";import"./index-DTfFxrYl.js";import"./index-Bz2sGi_M.js";import"./useLabels-CVc1Ewfj.js";import"./useButton-C1JXpszC.js";import"./RSPContexts-Dx5-en_D.js";import"./Text-D-mv30w6.js";import"./useDateFormatter-BdbjcdMs.js";import"./useControlledState-D31sClCQ.js";import"./useLocalizedStringFormatter-BjTggtdP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CeI3gIyh.js";import"./useEvent-BCPLxZ21.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-R9tt-U1b.js";import"./VisuallyHidden-50sq9ta1.js";import"./clsx-Ciqy0D92.js";import"./Button-HP_18L76.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-C1qYlgbG.js";import"./createLucideIcon-DKP3y2-x.js";import"./chevron-left-DZyfqUaM.js";import"./chevron-right-Dz0GrTB-.js";import"./Heading-DgfbP9Bo.js";import"./FieldError-1zu70EvV.js";import"./Text-BTm6pr0L.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
