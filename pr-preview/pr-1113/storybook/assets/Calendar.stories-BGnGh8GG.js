import{$ as c,a as m,r as l,j as d}from"./iframe-Boi322-e.js";import{C as n}from"./Calendar-DvhjwP34.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CR6j9Xdn.js";import"./Button-BZrkaF7s.js";import"./utils-z1j4bIi1.js";import"./clsx-B-dksMZM.js";import"./Hidden-Cxs5fcIU.js";import"./useFocusRing-CkCvH5DS.js";import"./index-Cvkkkaql.js";import"./index-s4s_PHwE.js";import"./useLabels-DbPeSc60.js";import"./useButton-aRTTkymG.js";import"./RSPContexts-CQ86iZLn.js";import"./Text-bXt2bHa-.js";import"./useDateFormatter-BKlrO17Z.js";import"./useControlledState-CJDuseoe.js";import"./useLocalizedStringFormatter-BdYnyh_u.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Cy3bzWKY.js";import"./useEvent-CDk6Ke-x.js";import"./getScrollParent-C8E3tpWG.js";import"./scrollIntoView-xxfCmNq8.js";import"./useDescription-CQ5vqFNH.js";import"./VisuallyHidden-CV_gcmgX.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-IbML59NT.js";import"./createLucideIcon-C52beLhx.js";import"./chevron-right-D608HA7P.js";import"./Button-BbOSYGn_.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DQv5OY2h.js";import"./Heading-B6yBeY0W.js";import"./FieldError-CghXp7Fo.js";import"./Text-D7z3Z1mn.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
