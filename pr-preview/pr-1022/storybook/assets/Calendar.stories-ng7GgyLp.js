import{$ as c,a as m,r as l,j as d}from"./iframe-Yd_3Uapz.js";import{C as n}from"./Calendar-CXY2qR9o.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-08sTKlV-.js";import"./Button-CtSuRHbF.js";import"./utils-6lRm6Tee.js";import"./clsx-B-dksMZM.js";import"./Hidden-DV_FdnSF.js";import"./useFocusRing-BXLc5uur.js";import"./index-7qq0zYgX.js";import"./index-BOW1adYN.js";import"./useLabels-CBAQ5XKc.js";import"./useButton-BBbRN2vI.js";import"./RSPContexts-E-uPdC6l.js";import"./Text-Ppy1xlW_.js";import"./useDateFormatter-DI_R063Q.js";import"./useControlledState-CcJGCIAf.js";import"./useLocalizedStringFormatter-I01atqXI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-koX1V-4M.js";import"./useEvent-DeXrWnv_.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BugULMIn.js";import"./VisuallyHidden-DlJI08Uo.js";import"./clsx-Ciqy0D92.js";import"./Button-r50ETdbi.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-02LtWaa0.js";import"./createLucideIcon-BG79myAo.js";import"./chevron-left-D1SSR6Pt.js";import"./chevron-right-Bd70W9Ck.js";import"./Heading-B7Kjgc7K.js";import"./FieldError-nG5jWdlR.js";import"./Text-B4Lb8X2G.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
