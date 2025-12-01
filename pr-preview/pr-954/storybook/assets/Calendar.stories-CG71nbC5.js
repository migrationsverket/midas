import{$ as p,a as m,r as l,j as d}from"./iframe-D3BUIA8t.js";import{C as n}from"./Calendar-BNYSMAms.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Ca0KNcTH.js";import"./Button-DFQM0Ftj.js";import"./utils-BRlrr6bM.js";import"./clsx-B-dksMZM.js";import"./Hidden-CYJ4paUC.js";import"./useFocusRing-Dmx1Rf0M.js";import"./index-BNf-lxYJ.js";import"./index-CUuStiOA.js";import"./useLabels-BWXlsqMn.js";import"./useButton-BbUvFvwo.js";import"./RSPContexts-CV4RKUwg.js";import"./Text-C-eelpHs.js";import"./useDateFormatter-CoJfLYh6.js";import"./useControlledState-BvkD_Bv4.js";import"./useLocalizedStringFormatter-BBFFW8CZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B631cef0.js";import"./useEvent-jFLDziUE.js";import"./getScrollParent-C8d6w8zj.js";import"./scrollIntoView-DdyGbssD.js";import"./useDescription-D6Hwdm3g.js";import"./VisuallyHidden-ib62HETz.js";import"./clsx-Ciqy0D92.js";import"./Button-B4PrgER1.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-Dt6krr6e.js";import"./createLucideIcon-hvTt_6n0.js";import"./chevron-right-B6XzPb7S.js";import"./Heading-BK0YGBVE.js";import"./FieldError-SCOyZSTv.js";import"./Text-Dp3wKR2d.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
