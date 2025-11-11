import{$ as p,a as m,r as l,j as d}from"./iframe-9CWn0dLe.js";import{C as n}from"./Calendar-ZgtLxRs6.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DKFKE493.js";import"./Button-BJGIOWWr.js";import"./utils-CuV_iOgg.js";import"./clsx-B-dksMZM.js";import"./Hidden-CvOu_WHO.js";import"./useFocusRing-B85yjLqW.js";import"./index-ChHL_39O.js";import"./index-CgCHr7e4.js";import"./useLabels-C0HlmxZK.js";import"./useButton-mlyjrjfq.js";import"./RSPContexts-CQWVYSX6.js";import"./Text-An75_Zxb.js";import"./useDateFormatter-BaJSCjOk.js";import"./useControlledState-By_9HlDg.js";import"./useLocalizedStringFormatter-CncNPno2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-8m0pSVWQ.js";import"./useEvent-DpugV3Z6.js";import"./getScrollParent-Tyo35a9C.js";import"./scrollIntoView-DTq6YPeW.js";import"./useDescription-CN24XJha.js";import"./VisuallyHidden-D1VOR-Jq.js";import"./clsx-Ciqy0D92.js";import"./Button-CujSre3v.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-B5h6e8RU.js";import"./chevron-right-LCxFp_cr.js";import"./Heading-C2p66HiZ.js";import"./FieldError-Di2SbmV3.js";import"./Text-6xl2iDhz.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
