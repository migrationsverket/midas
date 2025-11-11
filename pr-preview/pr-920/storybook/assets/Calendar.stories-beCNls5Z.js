import{$ as p,a as m,r as l,j as d}from"./iframe-DmzrtX3u.js";import{C as n}from"./Calendar-BtSvRd48.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-gFQIk8kB.js";import"./Button-D1_GOLvy.js";import"./utils-Oc8X9Dut.js";import"./clsx-B-dksMZM.js";import"./Hidden-DYOxjREs.js";import"./useFocusRing-DiXFM6IK.js";import"./index-DK6gMfte.js";import"./index-DRO8jrzk.js";import"./useLabels-LOtlQFBi.js";import"./useButton-DTNBbrec.js";import"./RSPContexts-CprwvviT.js";import"./Text-CUUMtVou.js";import"./useDateFormatter-BpUfrCDi.js";import"./useControlledState-C4k0njb5.js";import"./useLocalizedStringFormatter-CNEzkPvm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-f3HiXvCl.js";import"./useEvent-CSOa97Sz.js";import"./getScrollParent-DmfcLomM.js";import"./scrollIntoView-CddCsQNc.js";import"./useDescription-C6boHjI1.js";import"./VisuallyHidden-BdOo9cjO.js";import"./clsx-Ciqy0D92.js";import"./Button-DBXHyq-A.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-d42gtct_.js";import"./chevron-right-BIbfdY6G.js";import"./Heading-Te6eeXsF.js";import"./FieldError-8YrpNVDd.js";import"./Text-4zuef1by.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const L=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,L as __namedExportsOrder,K as default};
