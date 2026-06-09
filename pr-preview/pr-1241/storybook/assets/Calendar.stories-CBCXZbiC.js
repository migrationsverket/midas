import{$ as c,a as m,r as l,j as d}from"./iframe-BONLLpOF.js";import{C as n}from"./Calendar-xCW5VkCO.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CyrQMzol.js";import"./Button-2Duwp_Ic.js";import"./utils-C9VmisX4.js";import"./clsx-B-dksMZM.js";import"./Hidden-DEirP3-u.js";import"./useFocusRing-DKupva6E.js";import"./index-CxKo4ITi.js";import"./index-AexxYhB1.js";import"./useLabel-Q48Rkvkt.js";import"./useLabels-Bh7NN-Ow.js";import"./useButton-hyzNfx3L.js";import"./RSPContexts-DjgvGlJ6.js";import"./Text-CYi48kKA.js";import"./useDateFormatter-F7PF09UA.js";import"./useControlledState-f1OgfOOU.js";import"./useLocalizedStringFormatter-Bxafu6ud.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DOb9g6E8.js";import"./useEvent-BT5XuWp7.js";import"./getScrollParent-BgLE-lAx.js";import"./scrollIntoView-BwrYAJjM.js";import"./useDescription-xh0FTpCi.js";import"./VisuallyHidden-DGoVngfB.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CzbBt0t2.js";import"./createLucideIcon-Dg8jUY-5.js";import"./chevron-right-CKI7Fpv8.js";import"./Button-BxdtuMNq.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BxhbuX7R.js";import"./Heading-DVfrHjdW.js";import"./FieldError-D2jIpheU.js";import"./Text-Cs-XgrOp.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
