import{$ as p,a as m,r as l,j as d}from"./iframe-vV_WTh41.js";import{C as n}from"./Calendar-CXFD8Ron.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BMJ-s-A1.js";import"./Button-DugNrTqg.js";import"./utils-BLkbaUED.js";import"./clsx-B-dksMZM.js";import"./Hidden-DmUWzxob.js";import"./useFocusRing-DjEgHD23.js";import"./index-8oChgm8L.js";import"./index-BBW3Edhr.js";import"./useLabels-D-vRNZ7C.js";import"./useButton-Bka7B6pp.js";import"./RSPContexts-CB14fttw.js";import"./Text--4As8pE8.js";import"./useDateFormatter-CqZo3MTh.js";import"./useControlledState-B5J2UdzZ.js";import"./useLocalizedStringFormatter-gFqboiC_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BmMSbzJJ.js";import"./useEvent-CpdQryxH.js";import"./getScrollParent-Bhot0QPs.js";import"./scrollIntoView-B9se38xm.js";import"./useDescription-oNLjY4JI.js";import"./VisuallyHidden-BwHE0vuQ.js";import"./clsx-Ciqy0D92.js";import"./Button-DZf68tgE.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-Bw-FFKAv.js";import"./chevron-right-0RfeKZA7.js";import"./Heading-Bew9Ky8a.js";import"./FieldError-DIXFUeQf.js";import"./Text-D7liI3QI.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
