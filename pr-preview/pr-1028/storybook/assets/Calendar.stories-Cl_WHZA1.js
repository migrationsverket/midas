import{$ as c,a as m,r as l,j as d}from"./iframe-D7hgefFi.js";import{C as n}from"./Calendar-CRzbnRKy.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CXHydwDH.js";import"./Button-BkQQAf76.js";import"./utils-1x5w2eFs.js";import"./clsx-B-dksMZM.js";import"./Hidden-BPthAdp1.js";import"./useFocusRing-BEIKl4Np.js";import"./index-DPE8HPpB.js";import"./index-Dc5FCrrK.js";import"./useLabels-BNWiTCFC.js";import"./useButton-fmMn4P32.js";import"./RSPContexts-edSBr0y1.js";import"./Text-bVuSsYW4.js";import"./useDateFormatter-qDGZASht.js";import"./useControlledState-C_xkaUiB.js";import"./useLocalizedStringFormatter-Df3u4y0n.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DvKepdL0.js";import"./useEvent-Bq0KSq8o.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BnUO2d3M.js";import"./VisuallyHidden-JgK0gAZ6.js";import"./clsx-Ciqy0D92.js";import"./Button-rPxCLKTe.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D_1GwcS9.js";import"./createLucideIcon-B4zeiAHI.js";import"./chevron-left-Cq7_NpGv.js";import"./chevron-right-B9z6yzD9.js";import"./Heading-CjrbX93v.js";import"./FieldError-CIHFT2OA.js";import"./Text-DGN2slpv.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
