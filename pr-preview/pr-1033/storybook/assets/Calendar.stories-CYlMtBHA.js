import{$ as c,a as m,r as l,j as d}from"./iframe-Da36InMg.js";import{C as n}from"./Calendar-nbDIBTW5.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D-0psczN.js";import"./Button-C9KA9u1r.js";import"./utils-CHXZEpsb.js";import"./clsx-B-dksMZM.js";import"./Hidden-CWBgmXhh.js";import"./useFocusRing-PWqs4TW9.js";import"./index-CaZlPwUz.js";import"./index-Di1QGlpo.js";import"./useLabels-Bp-J3Y5-.js";import"./useButton-C2CUOyHb.js";import"./RSPContexts-BsaudI60.js";import"./Text-BrXpqahc.js";import"./useDateFormatter-Cq42FTD-.js";import"./useControlledState-CA4_YWUf.js";import"./useLocalizedStringFormatter-wrWdFXU1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CljHakf9.js";import"./useEvent-DIDPEC78.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BI7Uumxx.js";import"./VisuallyHidden-a6Yj5g4U.js";import"./clsx-Ciqy0D92.js";import"./Button-CXuDImk2.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CLWMEVc4.js";import"./createLucideIcon-CXcjDiHx.js";import"./chevron-left-wDHRCkw-.js";import"./chevron-right-BoxKutlt.js";import"./Heading-DyQRIaZu.js";import"./FieldError-DdDYB_s_.js";import"./Text-UbtOGoYO.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
