import{$ as c,a as m,r as l,j as d}from"./iframe-C8wbd0xw.js";import{C as n}from"./Calendar-CDO2ozbP.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DD3gzqvv.js";import"./Button-CshDR4Sg.js";import"./utils-BvSYGh_U.js";import"./clsx-B-dksMZM.js";import"./Hidden-C80CkRC2.js";import"./useFocusRing-Bg15NFQh.js";import"./index-620_CD08.js";import"./index-Db09nDsC.js";import"./useLabel-VczPGpuz.js";import"./useLabels-DNgQ3t5h.js";import"./useButton-J8srJfI2.js";import"./RSPContexts-CJjr_xEH.js";import"./Text-CNrdh4nj.js";import"./useDateFormatter-CH416Olv.js";import"./useControlledState-Ctd2zKcE.js";import"./useLocalizedStringFormatter-CzJGuAX0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-ZIiICdHp.js";import"./useEvent-pYuuJSlJ.js";import"./getScrollParent-upgEqPZt.js";import"./scrollIntoView-BHLgP0Bo.js";import"./useDescription-Cy_FD0MX.js";import"./VisuallyHidden-Br2qyVeY.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CMWNp7qM.js";import"./createLucideIcon-DuCqgbBp.js";import"./chevron-right-mdVaFJ0E.js";import"./Button-CYDl1rDD.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Cn7XrlA9.js";import"./Heading-yVu3W5Is.js";import"./FieldError-BgH3yzjq.js";import"./Text-DfltvgM6.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const V=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,V as __namedExportsOrder,T as default};
