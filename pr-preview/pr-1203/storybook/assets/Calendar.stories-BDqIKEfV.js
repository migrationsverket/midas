import{$ as c,a as m,r as l,j as d}from"./iframe-hABApRlT.js";import{C as n}from"./Calendar-ByvIJ2HV.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CMg383r5.js";import"./Button-BzGvPTBW.js";import"./utils-BkABga95.js";import"./clsx-B-dksMZM.js";import"./Hidden-B-K0lNZo.js";import"./useFocusRing-BP25i5uK.js";import"./index-77qwmgqY.js";import"./index-BVfSwpPB.js";import"./useLabel-qHqMeu2r.js";import"./useLabels-BIKxEJiN.js";import"./useButton-BuyQblWp.js";import"./RSPContexts-BLO7xP9m.js";import"./Text-Cb1qObZS.js";import"./useDateFormatter-yiDV9VDm.js";import"./useControlledState-vYw9-Cid.js";import"./useLocalizedStringFormatter-Cl3bAFJS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BapJATAW.js";import"./useEvent-C0BDDOqz.js";import"./getScrollParent-dFLOazss.js";import"./scrollIntoView-CT_O_81j.js";import"./useDescription-SP7YFPBn.js";import"./VisuallyHidden-DvfbpkLp.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-B4kN7038.js";import"./createLucideIcon-jn3NctNW.js";import"./chevron-right-C3f2zq7h.js";import"./Button-D27stedr.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Cc9pC_do.js";import"./Heading-UK42x3As.js";import"./FieldError-DKFm7MzG.js";import"./Text-DztaIr_D.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
