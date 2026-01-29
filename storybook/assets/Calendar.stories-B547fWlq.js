import{$ as c,a as m,r as l,j as d}from"./iframe-BvxrP4H_.js";import{C as n}from"./Calendar-3VlJi-Mo.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CF0M9e0l.js";import"./Button-BEiciYfb.js";import"./utils-DRwSYmkY.js";import"./clsx-B-dksMZM.js";import"./Hidden-D4jsxrLb.js";import"./useFocusRing-CJdHKEcp.js";import"./index-DZ-u2hu8.js";import"./index-D44wzwBB.js";import"./useLabels-BMmbJ9_b.js";import"./useButton-uALjNSWo.js";import"./RSPContexts-DEykMfDO.js";import"./Text-BJUv6RK-.js";import"./useDateFormatter-CIYcvPbp.js";import"./useControlledState-D2EAi2j4.js";import"./useLocalizedStringFormatter-D4pCyGYe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B-dKDf-G.js";import"./useEvent-CgFksn0F.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CWz-Nrf1.js";import"./VisuallyHidden-BJsqer9T.js";import"./clsx-Ciqy0D92.js";import"./Button-A9AEz-p5.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B_Mu1zyu.js";import"./createLucideIcon-B5KIjSHM.js";import"./chevron-left-C6CN7Kqs.js";import"./chevron-right-DGwyx60T.js";import"./Heading-Gcv-n3NK.js";import"./FieldError-D1Yw6ERp.js";import"./Text-DeMAVr2b.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
