import{$ as c,a as m,r as l,j as d}from"./iframe-xM6GPlxZ.js";import{C as n}from"./Calendar-r7vc00ln.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BMtOkOsr.js";import"./Button-D0EwoScf.js";import"./utils-BWmJmXij.js";import"./clsx-B-dksMZM.js";import"./Hidden-CNNVQzIs.js";import"./useFocusRing-QfzGUTUK.js";import"./index-Cg05t2G5.js";import"./index-DC2xKSlP.js";import"./useLabels-C6Mi33Cz.js";import"./useButton-CI69bHTl.js";import"./RSPContexts-CBBqJTPm.js";import"./Text-eaDz3eV1.js";import"./useDateFormatter-wKvvfSbO.js";import"./useControlledState-C_N3S3lP.js";import"./useLocalizedStringFormatter-CX9bacHe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-QeeTLylW.js";import"./useEvent-D1PWkF_3.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DRbU8aXx.js";import"./VisuallyHidden-Ck-DDgGV.js";import"./clsx-Ciqy0D92.js";import"./Button-CKxI1r1_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CfPLxaXy.js";import"./createLucideIcon-D-PEwym-.js";import"./chevron-left-BKU6KBGP.js";import"./chevron-right-Bpt_a7o2.js";import"./Heading-wS7RUvpX.js";import"./FieldError-CI525PUG.js";import"./Text-CHMvJdTr.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
