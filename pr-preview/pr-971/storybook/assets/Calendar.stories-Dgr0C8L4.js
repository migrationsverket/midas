import{$ as p,a as m,r as l,j as d}from"./iframe--mmKoKlF.js";import{C as n}from"./Calendar-Cp_86oEG.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-uZfraXn9.js";import"./Button-K9IUFIHc.js";import"./utils-Co0PR--s.js";import"./clsx-B-dksMZM.js";import"./Hidden-DQTVfJps.js";import"./useFocusRing-ElKf8bcK.js";import"./index-DlIPfWxH.js";import"./index-xyOEGRTy.js";import"./useLabels-C4a0JBZG.js";import"./useButton-DQXgnmsH.js";import"./RSPContexts-DKKk_j71.js";import"./Text-CHGY53Du.js";import"./useDateFormatter-BTTG1jPD.js";import"./useControlledState-CQsF2XT8.js";import"./useLocalizedStringFormatter-CvAW3YIB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BdS-IEYS.js";import"./useEvent-B3elpXMT.js";import"./getScrollParent-wkXY2yUz.js";import"./scrollIntoView-CpXiwoWy.js";import"./useDescription-C1dzGSna.js";import"./VisuallyHidden-7b4qEDFn.js";import"./clsx-Ciqy0D92.js";import"./Button-DFSRLbW3.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C1Y7m_4-.js";import"./createLucideIcon-LTD4_Te-.js";import"./chevron-right-DTX7sjvb.js";import"./Heading-CYGpAeti.js";import"./FieldError-DWqeJHep.js";import"./Text-CcHRZ_Ad.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
