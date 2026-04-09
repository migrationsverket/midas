import{$ as c,a as m,r as l,j as d}from"./iframe-BQlcbrgq.js";import{C as n}from"./Calendar-of3DGDw7.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DBGrKroH.js";import"./Button-CDoUC3iq.js";import"./utils-zlU0QFfw.js";import"./clsx-B-dksMZM.js";import"./Hidden-BCstp6u_.js";import"./useFocusRing-vaJTuI4B.js";import"./index-9xcskC2r.js";import"./index-BwtwGZuI.js";import"./useLabel-Btcj4E6x.js";import"./useLabels-QRQ8ouBW.js";import"./useButton-oX55LUg2.js";import"./RSPContexts-Bvy64kgY.js";import"./Text-9noXsIlr.js";import"./useDateFormatter-DAk-w86t.js";import"./useControlledState-8FQUmPf4.js";import"./useLocalizedStringFormatter-DJDlUoLo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Dx51VpbG.js";import"./useEvent-DZ7mJmfU.js";import"./getScrollParent-CdT_EqNx.js";import"./scrollIntoView-qNB0-vvI.js";import"./useDescription-WI-F6yLm.js";import"./VisuallyHidden-CKBFwX4P.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DFJu0vpd.js";import"./createLucideIcon-Dkmw8KOt.js";import"./chevron-right-C5ZpPj-T.js";import"./Button-CWx5j6of.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DdRSrN8_.js";import"./Heading-oxsWrt8S.js";import"./FieldError-Bsl-hkeP.js";import"./Text-VFn9yNax.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
