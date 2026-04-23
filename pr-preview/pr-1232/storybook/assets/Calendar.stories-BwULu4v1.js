import{$ as c,a as m,r as l,j as d}from"./iframe-CM9gzC_-.js";import{C as n}from"./Calendar-C0TG-FGY.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BIMiMFpG.js";import"./Button-4PfHMxFE.js";import"./utils-CXcBw8mX.js";import"./clsx-B-dksMZM.js";import"./Hidden-D0XxjEDh.js";import"./useFocusRing-Bz17EpSW.js";import"./index-CVH0l-Rs.js";import"./index-Bg9NulRa.js";import"./useLabel-DNzyNjQ0.js";import"./useLabels-_1rwYSL1.js";import"./useButton-BDzD217S.js";import"./RSPContexts-BGBhlXAt.js";import"./Text-Bft1iTTC.js";import"./useDateFormatter-MYgyC-Z4.js";import"./useControlledState-D7RofSAB.js";import"./useLocalizedStringFormatter-DGUVN_Wt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CdFwj8T2.js";import"./useEvent-CmguT4Gg.js";import"./getScrollParent-B7Te1-pw.js";import"./scrollIntoView-3rRtgk00.js";import"./useDescription-BQW7Zq6D.js";import"./VisuallyHidden-CyPA52id.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-T52EITFt.js";import"./createLucideIcon-gLaeDi4P.js";import"./chevron-right-CZ_lSAHq.js";import"./Button-DVDe5XTB.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DuVOZRpg.js";import"./Heading-DcYuxKBt.js";import"./FieldError-Br-BXIw9.js";import"./Text-DvQTbzsU.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
