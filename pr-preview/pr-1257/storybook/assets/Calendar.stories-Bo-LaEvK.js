import{$ as c,a as m,r as l,j as d}from"./iframe-DKbnbcYA.js";import{C as n}from"./Calendar-D0bd-kZY.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DSqAEFqk.js";import"./Button-B9rMpOVw.js";import"./utils-2X7WrewA.js";import"./clsx-B-dksMZM.js";import"./Hidden-DVrzkHs4.js";import"./useFocusRing-BgkQ1tOe.js";import"./index-lY0kbfn5.js";import"./index-B5M4WY2m.js";import"./useLabel-BTu-VYKR.js";import"./useLabels-4lND4b_p.js";import"./useButton-Zx4CPHJq.js";import"./RSPContexts-m9rKlbSF.js";import"./Text-2zkyeVit.js";import"./useDateFormatter-CCtznRM0.js";import"./useControlledState-EM6fJcGZ.js";import"./useLocalizedStringFormatter-CpOP5_I5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DF1x8Ita.js";import"./useEvent-DNJmfabJ.js";import"./getScrollParent-PmVOkSW6.js";import"./scrollIntoView-CnVxFKeo.js";import"./useDescription-W2O0P_pV.js";import"./VisuallyHidden-BcPnQgXd.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DaAaTz_8.js";import"./createLucideIcon-CRlO1Apy.js";import"./chevron-right-C_3z0dZe.js";import"./Button-CxkBGpkE.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CoGMLhd_.js";import"./Heading-DH99ugyJ.js";import"./FieldError-BRRl8Jd8.js";import"./Text-8emuzLV6.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
