import{$ as c,a as m,r as l,j as d}from"./iframe-CROn2D2x.js";import{C as n}from"./Calendar-CbgIQJ3i.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CI_0i1_C.js";import"./Button-rTy-r-bM.js";import"./utils-BmCdB7DC.js";import"./clsx-B-dksMZM.js";import"./Hidden-B4kaJ98v.js";import"./useFocusRing-DbrQCD6u.js";import"./index-BApTSzNb.js";import"./index-CojDe_Mf.js";import"./useLabels-B2-lRjdq.js";import"./useButton-CtKtHL67.js";import"./RSPContexts-BXOPS_Ee.js";import"./Text-m0OBBvo5.js";import"./useDateFormatter-Bw-x3Qr6.js";import"./useControlledState-Bvh10bMV.js";import"./useLocalizedStringFormatter-B4be551O.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BYGy_QTQ.js";import"./useEvent-CCZ-8-DW.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-D384wrOJ.js";import"./VisuallyHidden-BHGp5XeR.js";import"./clsx-Ciqy0D92.js";import"./Button-tcUqF5wD.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CDmjJZHt.js";import"./createLucideIcon-BBVnxcWo.js";import"./chevron-left-CUoZ6BxO.js";import"./chevron-right-CDiQVcyd.js";import"./Heading-BOPgGtk2.js";import"./FieldError-DOqGfxSh.js";import"./Text-p_fXYEUj.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
