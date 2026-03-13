import{$ as c,a as m,r as l,j as d}from"./iframe-B5zOBWL8.js";import{C as n}from"./Calendar-Piis-DoE.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-fH3zvPpz.js";import"./Button-Cr4v4jCk.js";import"./utils-eNYL6jem.js";import"./clsx-B-dksMZM.js";import"./Hidden-BfTCrLpu.js";import"./useFocusRing-BLNWzzDa.js";import"./index-BUSmP6HV.js";import"./index-DCfNYjYD.js";import"./useLabels-BojerJy7.js";import"./useButton-BuCB7CsM.js";import"./RSPContexts-DY0llAGa.js";import"./Text-CneoSpSV.js";import"./useDateFormatter-BDvyt3B-.js";import"./useControlledState-GuUpKA2D.js";import"./useLocalizedStringFormatter-Cgkn5RBi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CaQUSCEL.js";import"./useEvent-CkQwjY1M.js";import"./getScrollParent-DhsKx92u.js";import"./scrollIntoView-DWtQnOyb.js";import"./useDescription-Cf4XGtE7.js";import"./VisuallyHidden-BwEmyPT5.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BjkPaMYD.js";import"./createLucideIcon-BVioREcM.js";import"./chevron-right-C0W_NP3f.js";import"./Button-Ctf6p_Bv.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-C9omsTZd.js";import"./Heading-B4kZX7AI.js";import"./FieldError-C872MoeY.js";import"./Text-2qPPhaNY.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
