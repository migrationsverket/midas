import{$ as c,a as m,r as l,j as d}from"./iframe-ntYsoI3q.js";import{C as n}from"./Calendar-BveeJFok.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CikZ_bJl.js";import"./Button-Czul53LM.js";import"./utils-BJHfATlu.js";import"./clsx-B-dksMZM.js";import"./Hidden-BJHd_AQT.js";import"./useFocusRing-D9nk-FO4.js";import"./index-PknmiIVy.js";import"./index-FJM3BeIO.js";import"./useLabel-Dq9C3dm5.js";import"./useLabels-xSNV-NpM.js";import"./useButton-BE2eqaFK.js";import"./RSPContexts-Vvgjzfon.js";import"./Text-DeKUVabC.js";import"./useDateFormatter-BXuzdVx4.js";import"./useControlledState-DrHB4IJb.js";import"./useLocalizedStringFormatter-hhUVFxwM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-65LEw_qu.js";import"./useEvent-BZsGlSL3.js";import"./getScrollParent-1fm_mwK8.js";import"./scrollIntoView-DyKyaLk8.js";import"./useDescription-FAfc1Eak.js";import"./VisuallyHidden-Tbx6jsXW.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-5-dqs39B.js";import"./createLucideIcon-DVRKw96B.js";import"./chevron-right-Dkuhiaur.js";import"./Button-Cjgmk6w1.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CkAS-7e9.js";import"./Heading-Bb4w0_0o.js";import"./FieldError-BR-RMZw1.js";import"./Text-DcoyKAFk.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
