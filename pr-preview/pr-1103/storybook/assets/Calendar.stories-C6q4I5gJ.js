import{$ as c,a as m,r as l,j as d}from"./iframe-DQVQza6Y.js";import{C as n}from"./Calendar-D6Ai0gDZ.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-COgQc5jV.js";import"./Button-BSDgymoN.js";import"./utils-D-_RfQn2.js";import"./clsx-B-dksMZM.js";import"./Hidden-Hezyv9Df.js";import"./useFocusRing-CBM0kVUN.js";import"./index-DiS2M8Ea.js";import"./index-CfbU1Mg4.js";import"./useLabels-De2gA6Om.js";import"./useButton-B4zLsihB.js";import"./RSPContexts-ydiiyV1F.js";import"./Text-BbABlkeP.js";import"./useDateFormatter-DJDA1Ui_.js";import"./useControlledState-CaVALF-g.js";import"./useLocalizedStringFormatter-Dx8dDRGS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DR7_RC1V.js";import"./useEvent-Cy-UQw5n.js";import"./getScrollParent-CB6YDYVQ.js";import"./scrollIntoView-BNfA40iN.js";import"./useDescription-DvP5wxQA.js";import"./VisuallyHidden-DtlR1Tt8.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-3TP4gJyd.js";import"./createLucideIcon-CuIMjDf_.js";import"./chevron-right-CZmF6IEo.js";import"./Button-BVp6tPBn.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-IWYOBSFO.js";import"./Heading-BVNrAe5L.js";import"./FieldError-BFJVbEZW.js";import"./Text-CiNfpZ1d.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
