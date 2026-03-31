import{$ as c,a as m,r as l,j as d}from"./iframe-CXDxfhKB.js";import{C as n}from"./Calendar-DkFOA2hD.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-VlbnjS27.js";import"./Button-rApmyro7.js";import"./utils-BlE_s_bB.js";import"./clsx-B-dksMZM.js";import"./Hidden-DFs8xn-0.js";import"./useFocusRing-V1VB5dDl.js";import"./index-C3fyWD75.js";import"./index-0GWGer8Z.js";import"./useLabel-BQWuOrga.js";import"./useLabels-CzD1PIZv.js";import"./useButton-CHfNFaSS.js";import"./RSPContexts-Nbqg0I0B.js";import"./Text-w7WBT89W.js";import"./useDateFormatter-4SqqEtvP.js";import"./useControlledState-C3yTnT2d.js";import"./useLocalizedStringFormatter-DFZeYHJD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B4Pyk6px.js";import"./useEvent-BMdy9ETw.js";import"./getScrollParent-DpF68pAX.js";import"./scrollIntoView-CrmCmhFj.js";import"./useDescription-DvZUghvu.js";import"./VisuallyHidden-D1jOK9_R.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-C1z3ivRS.js";import"./createLucideIcon-DfHQJbWK.js";import"./chevron-right-BpPZE3vc.js";import"./Button-BZAdL-F6.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BSYNBMcv.js";import"./Heading-BGATdE4Y.js";import"./FieldError-CRkZofSG.js";import"./Text-NatKauD4.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
