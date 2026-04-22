import{$ as c,a as m,r as l,j as d}from"./iframe-DIPCj7z0.js";import{C as n}from"./Calendar-BXed8Kmy.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-VDp4zhKl.js";import"./Button-XWLhDASZ.js";import"./utils-1Jw3myEp.js";import"./clsx-B-dksMZM.js";import"./Hidden-DixPPjgd.js";import"./useFocusRing-CGC0Rs2i.js";import"./index-BMYuBTg8.js";import"./index-CLZ6wIud.js";import"./useLabel-BuVDKvpb.js";import"./useLabels-a5aS50Gu.js";import"./useButton-B6P9-uWq.js";import"./RSPContexts-COR8iAs7.js";import"./Text-DfA3YTZF.js";import"./useDateFormatter-BdAJyQph.js";import"./useControlledState-BD_nezFk.js";import"./useLocalizedStringFormatter-CetMLESo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DvvsaU0c.js";import"./useEvent-C_MGKzuJ.js";import"./getScrollParent-CrP1MxC4.js";import"./scrollIntoView-BoRCBfrM.js";import"./useDescription-FuIsSDja.js";import"./VisuallyHidden-B7PA1Ynv.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CWsaNX0t.js";import"./createLucideIcon-BXzguI7t.js";import"./chevron-right-BIg-nynX.js";import"./Button-Dd5S0QsR.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CD9GRZFK.js";import"./Heading-BZjt7HWH.js";import"./FieldError-XsW3k3ta.js";import"./Text-CutZY7em.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
