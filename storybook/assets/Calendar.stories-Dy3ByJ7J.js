import{$ as c,a as m,r as l,j as d}from"./iframe-BsATTn7S.js";import{C as n}from"./Calendar-DVmy6xed.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BfWEXVF2.js";import"./Button-B8-_2jR7.js";import"./utils-CqHUKh2_.js";import"./clsx-B-dksMZM.js";import"./Hidden-STEvN2Ch.js";import"./useFocusRing-Bv0lKuNU.js";import"./index-B8jfesk_.js";import"./index-DrKA0vjB.js";import"./useLabels-Cy5smjs4.js";import"./useButton-BO5H5m2x.js";import"./RSPContexts-DlIxtbr4.js";import"./Text-BZiG-sAM.js";import"./useDateFormatter-DzrQuAtX.js";import"./useControlledState-BRGghZoO.js";import"./useLocalizedStringFormatter-D0E7DUZe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-gdCG28M_.js";import"./useEvent-BZDrSNpr.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BNPvHP4K.js";import"./VisuallyHidden-CD5_Pn7B.js";import"./clsx-Ciqy0D92.js";import"./Button-Bupwh-3M.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Dy_8RTcF.js";import"./createLucideIcon-CgjvvVBG.js";import"./chevron-left-2LYom86-.js";import"./chevron-right-CpRuO4uZ.js";import"./Heading-Wcta6dzy.js";import"./FieldError-ZIUt4nLn.js";import"./Text-DWxVSOOD.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
