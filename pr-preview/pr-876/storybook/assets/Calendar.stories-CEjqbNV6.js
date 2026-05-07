import{$ as c,a as m,r as l,j as d}from"./iframe-DFebKffn.js";import{C as n}from"./Calendar-D0yk-86T.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DdjC-1YH.js";import"./Button-BZDCT8jS.js";import"./utils-J_OqfxpN.js";import"./clsx-B-dksMZM.js";import"./Hidden-BATde4xQ.js";import"./useFocusRing-C3NPJWuR.js";import"./index-fFDBVBnh.js";import"./index-BJ2AWJ3X.js";import"./useLabel-B8lMlR1q.js";import"./useLabels-C1qgN7Qm.js";import"./useButton-C0xusnOU.js";import"./RSPContexts-Cvf_UqQA.js";import"./Text-jpnaKsAZ.js";import"./useDateFormatter-1ZTpyPnD.js";import"./useControlledState-BBnpHgMO.js";import"./useLocalizedStringFormatter-DT9MjXti.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DHNsqo72.js";import"./useEvent-BefO7eCM.js";import"./getScrollParent-C72LLC1f.js";import"./scrollIntoView-Ay2HlXpl.js";import"./useDescription-1A7QrMbF.js";import"./VisuallyHidden-J2xwiqaN.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DiQeWxhE.js";import"./createLucideIcon-eIhYDTFQ.js";import"./chevron-right-CLOke5h8.js";import"./Button-CAFfH1xQ.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-1z23XCra.js";import"./Heading-CCEXH8UY.js";import"./FieldError-CqV6hYY3.js";import"./Text-B-BzwR12.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
