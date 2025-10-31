import{$ as p,a as m,r as l,j as d}from"./iframe-WskM-gQy.js";import{C as n}from"./Calendar-e6RSMcfn.js";import"./preload-helper-Ct5FWWRu.js";import"./CalendarHeader-swCHegHz.js";import"./Button-D8QLfFfX.js";import"./utils-PiplYHk9.js";import"./clsx-B-dksMZM.js";import"./Hidden-CGOCYihM.js";import"./useFocusRing-VjDIWbHo.js";import"./index-DQ5MGmqD.js";import"./index-BUVNGicR.js";import"./useLabels-CP12Ou_e.js";import"./useButton-DKOsPuai.js";import"./RSPContexts-BWosIfet.js";import"./Text-ZMEsASHW.js";import"./useDateFormatter-DVJXXZfc.js";import"./useControlledState-D9EpcS-3.js";import"./useLocalizedStringFormatter-DZmX7KtP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CS9ZE1zR.js";import"./useEvent-BPAOxkP6.js";import"./getScrollParent-BGKmcE_e.js";import"./scrollIntoView-D1wNzGzn.js";import"./useDescription-B9cpVcNh.js";import"./VisuallyHidden-Dwq3rn_j.js";import"./clsx-Ciqy0D92.js";import"./Button-DPo6WJUv.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-VhmxKnBe.js";import"./chevron-right-eHXPBfCn.js";import"./Heading-CyF5dkrn.js";import"./FieldError-DJyd5OaV.js";import"./Text-Dtog7EZC.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
