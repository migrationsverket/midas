import{$ as c,a as m,r as l,j as d}from"./iframe-Da7nq29g.js";import{C as n}from"./Calendar-5Q234Ktz.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CKy6MAe9.js";import"./Button-CtgdX1q6.js";import"./utils-B0CyUW-5.js";import"./clsx-B-dksMZM.js";import"./Hidden-DRaikK2a.js";import"./useFocusRing-BfWaxzv3.js";import"./index-Chz3wJrr.js";import"./index-BQQ1R4UO.js";import"./useLabels-uo9Op09U.js";import"./useButton-DItgdLXo.js";import"./RSPContexts-CA4TT0Pe.js";import"./Text-BYaoYc1H.js";import"./useDateFormatter-gsRPwFGR.js";import"./useControlledState-DqL64D7D.js";import"./useLocalizedStringFormatter-CdeSJGSi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C8R919p5.js";import"./useEvent-Dtm5G7ur.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-VrbZdKT0.js";import"./VisuallyHidden-DaXw9Zgt.js";import"./clsx-Ciqy0D92.js";import"./Button-BlivHiUN.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B5xCdXuP.js";import"./createLucideIcon-DXCReTis.js";import"./chevron-left-DEo3Ap8Q.js";import"./chevron-right-D2fzzBG8.js";import"./Heading-BbtFBKJu.js";import"./FieldError-N_3bhSnW.js";import"./Text-BQLX2n4Y.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
