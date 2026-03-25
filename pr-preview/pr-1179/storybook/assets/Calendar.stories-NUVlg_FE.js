import{$ as c,a as m,r as l,j as d}from"./iframe-zC7rO4bQ.js";import{C as n}from"./Calendar-BF3PCTj9.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-oobSwnc2.js";import"./Button-C21x7wzp.js";import"./utils-DJDHHgRa.js";import"./clsx-B-dksMZM.js";import"./Hidden-iMadBBvo.js";import"./useFocusRing-BstF4Rhc.js";import"./index-Dv34dGV6.js";import"./index-2cydjPlj.js";import"./useLabel-1c7fDk1R.js";import"./useLabels-DXFco5wv.js";import"./useButton-DgxqVrin.js";import"./RSPContexts-CFrdutnD.js";import"./Text-B2ypy93g.js";import"./useDateFormatter-Dh32hyqU.js";import"./useControlledState-B6sghpTG.js";import"./useLocalizedStringFormatter-EHiso99i.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C6WS0x4h.js";import"./useEvent-DGX0zBSm.js";import"./getScrollParent-DIXAYsd-.js";import"./scrollIntoView-Dr4WxEdF.js";import"./useDescription-BPY04rZg.js";import"./VisuallyHidden-satwz06w.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-Cif69K5S.js";import"./createLucideIcon-BRqO66r7.js";import"./chevron-right-BU-ZzOBH.js";import"./Button-w7ryzoNy.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CWhgLXAn.js";import"./Heading-JaygidPh.js";import"./FieldError-uFgMezhi.js";import"./Text-Dq6fJTxq.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
