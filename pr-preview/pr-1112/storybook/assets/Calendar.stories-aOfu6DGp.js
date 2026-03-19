import{$ as c,a as m,r as l,j as d}from"./iframe-QDSUgBpo.js";import{C as n}from"./Calendar-BOhmnzzY.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BasP4QeU.js";import"./Button-C3ndRLHV.js";import"./utils-DvLern-H.js";import"./clsx-B-dksMZM.js";import"./Hidden-BN-CZ8Az.js";import"./useFocusRing-DJFUjDnL.js";import"./index-BF2Mp0-C.js";import"./index-DczpGf_O.js";import"./useLabels-EtKw0NwM.js";import"./useButton-Ca39907a.js";import"./RSPContexts-DdhSCSVx.js";import"./Text-CvZZMQm8.js";import"./useDateFormatter-BLq4_-ME.js";import"./useControlledState-0ntZUwbV.js";import"./useLocalizedStringFormatter-BuFmuI1y.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DYEoqaYh.js";import"./useEvent-C8LuCS9K.js";import"./getScrollParent-CoiIkSSx.js";import"./scrollIntoView-DWJeooee.js";import"./useDescription-tD4XjceD.js";import"./VisuallyHidden-RUty4LXR.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BEYdVQfR.js";import"./createLucideIcon-awWdQq2I.js";import"./chevron-right-Co1xdQDy.js";import"./Button-B_32-CvO.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CpELJUen.js";import"./Heading-nnzh1k-l.js";import"./FieldError-BkvFLAiM.js";import"./Text-DR2iN84k.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
