import{$ as c,a as m,r as l,j as d}from"./iframe-DOBgJI-y.js";import{C as n}from"./Calendar-BU_Hsm1r.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Cc3L5NsP.js";import"./Button-iOZwwJt-.js";import"./utils-DiaRguFq.js";import"./clsx-B-dksMZM.js";import"./Hidden-DRJRklAH.js";import"./useFocusRing-BQr5-3Np.js";import"./index-X29No980.js";import"./index-mBWPsfNs.js";import"./useLabel-CwHTcLwx.js";import"./useLabels-DQJyw6TD.js";import"./useButton-q5vZ9ZE2.js";import"./RSPContexts-D1vu3Vuz.js";import"./Text-CGuvF1HY.js";import"./useDateFormatter-Dr-ks_2g.js";import"./useControlledState-DuJeSPKv.js";import"./useLocalizedStringFormatter-DKxraR3H.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Dqt-qXKB.js";import"./useEvent-B26EYKij.js";import"./getScrollParent-l3TZr912.js";import"./scrollIntoView-D0LuDjH5.js";import"./useDescription-BorXdBcC.js";import"./VisuallyHidden-mcCQW-OH.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-B3qyfzF4.js";import"./createLucideIcon-DcZtHlnh.js";import"./chevron-right-CYdUnFA9.js";import"./Button-u1ZblIyK.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-B7OxMwVs.js";import"./Heading-D9mndLSG.js";import"./FieldError-BPSmjDw6.js";import"./Text-DFLO7oRJ.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
