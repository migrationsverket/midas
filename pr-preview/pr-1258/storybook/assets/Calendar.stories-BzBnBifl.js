import{$ as c,a as m,r as l,j as d}from"./iframe-BqQ5c8fE.js";import{C as n}from"./Calendar-C3dun-Xa.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D79fi7t8.js";import"./Button-BUzCWcrF.js";import"./utils-vcgv-geB.js";import"./clsx-B-dksMZM.js";import"./Hidden-lysAnu3A.js";import"./useFocusRing-0ttJCKLt.js";import"./index-BDVX9JuE.js";import"./index-Dx4QUBTR.js";import"./useLabel-BDoARLXo.js";import"./useLabels-Z9FfN6Gk.js";import"./useButton-CjstFyO0.js";import"./RSPContexts-BnH9bYe5.js";import"./Text-mKjyceMN.js";import"./useDateFormatter-D2_Hkeb9.js";import"./useControlledState-p_0xc8M1.js";import"./useLocalizedStringFormatter-p3b_RLPb.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CnIA9zgc.js";import"./useEvent-CwwdPrs-.js";import"./getScrollParent-BizxzfZb.js";import"./scrollIntoView-BSmOLwAx.js";import"./useDescription-BXuFRPve.js";import"./VisuallyHidden-BYz02vHS.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-Ds3Rqn85.js";import"./createLucideIcon-BcjPS7EP.js";import"./chevron-right-DLq4Apcq.js";import"./Button-BS1gBrNw.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CDETYbM5.js";import"./Heading-nX8hWCWb.js";import"./FieldError-vKbkj088.js";import"./Text-DZT9e49R.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
