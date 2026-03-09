import{$ as c,a as m,r as l,j as d}from"./iframe-570mREhY.js";import{C as n}from"./Calendar-oMlYISvA.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D5JB8tP4.js";import"./Button-C_kwnSXE.js";import"./utils-BqlcL5rx.js";import"./clsx-B-dksMZM.js";import"./Hidden-B4VHltGi.js";import"./useFocusRing-D77kJS_m.js";import"./index-Bvld532n.js";import"./index-C5HPQFby.js";import"./useLabels-C-WDIhaI.js";import"./useButton-TVehMT5u.js";import"./RSPContexts-Cb-2UirY.js";import"./Text-Bv6LeWEW.js";import"./useDateFormatter-DEB0H0P3.js";import"./useControlledState-Bk880GAa.js";import"./useLocalizedStringFormatter-CImBKygC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C_wpqgOl.js";import"./useEvent-BqxQVWwN.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-2ZAZ1q0L.js";import"./VisuallyHidden-BOerlFrD.js";import"./clsx-Ciqy0D92.js";import"./Button-dcNBfXXf.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DkAO2Z2_.js";import"./createLucideIcon-BAw__jnC.js";import"./chevron-left-C4JaDbtV.js";import"./chevron-right-BKv3Yj60.js";import"./Heading-CtGUg1Um.js";import"./FieldError-yE8YByGw.js";import"./Text-Dj2VLQFh.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
