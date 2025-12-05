import{$ as p,a as m,r as l,j as d}from"./iframe-CACK1ifN.js";import{C as n}from"./Calendar-BwzuwGdW.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Bry-WHdR.js";import"./Button-J7gLD4uT.js";import"./utils-DrYd9Pqd.js";import"./clsx-B-dksMZM.js";import"./Hidden-C1FS9acW.js";import"./useFocusRing-DYoY7B0o.js";import"./index-Cso1iP6f.js";import"./index-RncFtgOS.js";import"./useLabels-C_najzVY.js";import"./useButton-DYZev9kh.js";import"./RSPContexts-Bjnw7db_.js";import"./Text-BnT-eFzO.js";import"./useDateFormatter-L9vm-Szk.js";import"./useControlledState-DCOK662h.js";import"./useLocalizedStringFormatter-D7qp87au.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Dlt7X-Yj.js";import"./useEvent-CM7-6yi_.js";import"./getScrollParent-DcH05knO.js";import"./scrollIntoView-B7hwb_SX.js";import"./useDescription-osvHzt0k.js";import"./VisuallyHidden-COi0BVk3.js";import"./clsx-Ciqy0D92.js";import"./Button-BoPq1AVj.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-AIFce-v4.js";import"./createLucideIcon-G0rIHLkb.js";import"./chevron-right-BXETsmEE.js";import"./Heading-D4-h0TMa.js";import"./FieldError-Bhe1g_YD.js";import"./Text-CRhY20oU.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Q=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,Q as __namedExportsOrder,L as default};
