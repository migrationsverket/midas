import{$ as c,a as m,r as l,j as d}from"./iframe-CVh3nSma.js";import{C as n}from"./Calendar-C_gu2MY4.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CMf6LLiQ.js";import"./Button-CjHZLp4M.js";import"./utils-DAl4r7ZI.js";import"./clsx-B-dksMZM.js";import"./Hidden-CKFlO9gT.js";import"./useFocusRing-DevKcWYf.js";import"./index-DZnEqQgx.js";import"./index-Cw_mWNji.js";import"./useLabels-BlYxGBYn.js";import"./useButton-Cv89nSdu.js";import"./RSPContexts-BTXC2TF-.js";import"./Text-BmDZHzTH.js";import"./useDateFormatter-CTvuGIQu.js";import"./useControlledState-Cgai1Xo4.js";import"./useLocalizedStringFormatter-CIu9Ev8Y.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-PVvS_7va.js";import"./useEvent-BeLY2gpF.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Lg2ymasT.js";import"./VisuallyHidden-8g-Kxj9j.js";import"./clsx-Ciqy0D92.js";import"./Button-CBEr-IVd.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DsUDPIO8.js";import"./createLucideIcon-DiDsoOCy.js";import"./chevron-left-Bwf0tAV8.js";import"./chevron-right-BCH3r5k0.js";import"./Heading-CKWun0e5.js";import"./FieldError-DrvXZ_4S.js";import"./Text-D6VK4Tm3.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
