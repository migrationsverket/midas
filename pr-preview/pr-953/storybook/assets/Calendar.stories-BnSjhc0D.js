import{$ as p,a as m,r as l,j as d}from"./iframe-gVQjPewL.js";import{C as n}from"./Calendar-B6Pe4DP0.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-iYqsQgtX.js";import"./Button-omCgwxDS.js";import"./utils-BAvziVQG.js";import"./clsx-B-dksMZM.js";import"./Hidden-B8SjbVEJ.js";import"./useFocusRing-0gBgE6N-.js";import"./index-ndXt9Dvv.js";import"./index-Dx6mXqSO.js";import"./useLabels-BGa4lReX.js";import"./useButton-ChaUza1w.js";import"./RSPContexts-Da-6GabZ.js";import"./Text-D78Bknv4.js";import"./useDateFormatter-bZwoPpRP.js";import"./useControlledState-CoTiLeJu.js";import"./useLocalizedStringFormatter-CGcpvzuT.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-JVW9U-r8.js";import"./useEvent-BImc7z2-.js";import"./getScrollParent-BY51pk5z.js";import"./scrollIntoView-CxAjrn7U.js";import"./useDescription-C3xQRC9U.js";import"./VisuallyHidden-DHQLCAYC.js";import"./clsx-Ciqy0D92.js";import"./Button-DzhpmtPX.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DgH8u-_G.js";import"./createLucideIcon-BtoTmTD-.js";import"./chevron-right-Rrh1ykHQ.js";import"./Heading-CxRtLCg3.js";import"./FieldError-vZRBOpgn.js";import"./Text-_RjAag-Y.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
