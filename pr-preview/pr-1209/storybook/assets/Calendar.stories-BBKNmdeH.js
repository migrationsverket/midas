import{$ as c,a as m,r as l,j as d}from"./iframe-DWnL6zvQ.js";import{C as n}from"./Calendar-B4ZuYNfP.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DlRYR7ic.js";import"./Button-aAs4bXFc.js";import"./utils-ZOmRnVQp.js";import"./clsx-B-dksMZM.js";import"./Hidden-D-JZUsjj.js";import"./useFocusRing-T-08Y7EQ.js";import"./index-BKrgJF-5.js";import"./index-BdkXzYOX.js";import"./useLabel-0R8_MAd9.js";import"./useLabels-D-eiwoeG.js";import"./useButton-Da9Ah83K.js";import"./RSPContexts-Ce97Jw3e.js";import"./Text-BFKc_gYr.js";import"./useDateFormatter-D3Hp33Hn.js";import"./useControlledState-BFA4HXY0.js";import"./useLocalizedStringFormatter-B7dpYpQH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-spkZuIIx.js";import"./useEvent-Dnzvg3-j.js";import"./getScrollParent-DhTLAxD9.js";import"./scrollIntoView-CVWuYFBu.js";import"./useDescription-DfYNITNj.js";import"./VisuallyHidden-DbmKXf8Z.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-XvaGzuEw.js";import"./createLucideIcon--0_c509q.js";import"./chevron-right-BOco06mK.js";import"./Button-DLalHH7Q.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BGNOMAGR.js";import"./Heading-C9qHsJhG.js";import"./FieldError-ans3DohR.js";import"./Text-BYUx4Ue_.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
