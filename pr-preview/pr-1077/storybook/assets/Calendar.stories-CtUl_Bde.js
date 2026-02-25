import{$ as c,a as m,r as l,j as d}from"./iframe-Dp43kgFY.js";import{C as n}from"./Calendar-i5KbX6H6.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-EebtMrGq.js";import"./Button-Bq7x_9-Y.js";import"./utils-CQURC1dK.js";import"./clsx-B-dksMZM.js";import"./Hidden-ypOha8Sj.js";import"./useFocusRing-DuecCpf4.js";import"./index-l95OD-BB.js";import"./index-DdtjAW4o.js";import"./useLabels-COsyDR1S.js";import"./useButton-D3tp8nbg.js";import"./RSPContexts-ChoQx1hy.js";import"./Text-CqEImv_2.js";import"./useDateFormatter-BxPM_6ZM.js";import"./useControlledState-DJq_g7YW.js";import"./useLocalizedStringFormatter-MZozDBHj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BwARvU8J.js";import"./useEvent-DT_nKyT3.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CTRJEwnt.js";import"./VisuallyHidden-DkuOGL8E.js";import"./clsx-Ciqy0D92.js";import"./Button-O1BOKm9x.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Co-CJ4tv.js";import"./createLucideIcon-D72gX86M.js";import"./chevron-left-T1wBdBx9.js";import"./chevron-right-CMdsThS-.js";import"./Heading-DZgEA9s4.js";import"./FieldError-fHEQddPz.js";import"./Text-Bo7dFu1i.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
