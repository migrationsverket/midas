import{$ as c,a as m,r as l,j as d}from"./iframe-CNCYpet-.js";import{C as n}from"./Calendar-C-YzP73N.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-OEM7k3yx.js";import"./Button-DJ63q7tI.js";import"./utils-DbCir_Jt.js";import"./clsx-B-dksMZM.js";import"./Hidden-hGcy4cT5.js";import"./useFocusRing-CRxTmkRw.js";import"./index-BUDe2ZxC.js";import"./index-DWOJOWmI.js";import"./useLabel-CzS_jyTD.js";import"./useLabels-vAecHqWn.js";import"./useButton-DXHtHs2n.js";import"./RSPContexts-BaURGsym.js";import"./Text-BSDJ27Oc.js";import"./useDateFormatter-DQMUy1Qu.js";import"./useControlledState-CeXWXac4.js";import"./useLocalizedStringFormatter-D4gZ00xG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CWxL_VN5.js";import"./useEvent-SGyVQ3yM.js";import"./getScrollParent-C5eE57Do.js";import"./scrollIntoView-DKoFSOfZ.js";import"./useDescription-CgiS5IZ6.js";import"./VisuallyHidden-BD8822Hp.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-ByXXhj7s.js";import"./createLucideIcon-Clh8USVg.js";import"./chevron-right-Ssaoi0DE.js";import"./Button-FEtIFAuh.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BnKVjVFL.js";import"./Heading-BKsUShCt.js";import"./FieldError-pGosIpkp.js";import"./Text-ORzvfqKL.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
