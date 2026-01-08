import{$ as p,a as m,r as l,j as d}from"./iframe-Di032A-a.js";import{C as n}from"./Calendar-OELVDe43.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CwbbQAe5.js";import"./Button-BX9DRAn2.js";import"./utils-BJxOcxIc.js";import"./clsx-B-dksMZM.js";import"./Hidden-DxXb6fAE.js";import"./useFocusRing-BEKzggJ1.js";import"./index-CCl7obIv.js";import"./index-FnGCBODv.js";import"./useLabels-CfOSYcsl.js";import"./useButton-DKb25YL9.js";import"./RSPContexts-xlTisE2o.js";import"./Text-DkJdkbXM.js";import"./useDateFormatter-CvRMo2dU.js";import"./useControlledState-DwpgrxVp.js";import"./useLocalizedStringFormatter-BzuFEIom.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CChDLsqN.js";import"./useEvent-BbrDk_On.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DRp0FeRZ.js";import"./VisuallyHidden-D_sjnnJP.js";import"./clsx-Ciqy0D92.js";import"./Button-Cil7mUi6.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-tbWfEf8y.js";import"./createLucideIcon-CaCVZ628.js";import"./chevron-right-DgRkVBrk.js";import"./Heading-LPSg21Yg.js";import"./FieldError-CxIoYGIw.js";import"./Text-BDBd8d6g.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
