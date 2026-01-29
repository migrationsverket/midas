import{$ as c,a as m,r as l,j as d}from"./iframe-esfLhqtF.js";import{C as n}from"./Calendar-D2bLxUln.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BuckpqLz.js";import"./Button-CQtaCEWI.js";import"./utils-NT1QK8Yd.js";import"./clsx-B-dksMZM.js";import"./Hidden-DfuLmxyz.js";import"./useFocusRing-CYEh12Dg.js";import"./index-BP3Blnj0.js";import"./index-wOGaw679.js";import"./useLabels-BNoZ-Pb6.js";import"./useButton-C-mpYoGp.js";import"./RSPContexts-BCvw1NWi.js";import"./Text-Yh0ae2Og.js";import"./useDateFormatter-lQxwuOlE.js";import"./useControlledState-C7s2HgD5.js";import"./useLocalizedStringFormatter-BZtdo5t2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BExJpwDC.js";import"./useEvent-BCwnBAuU.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DgLI7USw.js";import"./VisuallyHidden-SY7lO_bO.js";import"./clsx-Ciqy0D92.js";import"./Button-BnPxEc2U.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CNz9ujRO.js";import"./createLucideIcon-DYgZXBvy.js";import"./chevron-left-DckqRXRv.js";import"./chevron-right-CVcfugyG.js";import"./Heading-CicVc4kG.js";import"./FieldError-DgO7HhjR.js";import"./Text-BLd0QilH.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
