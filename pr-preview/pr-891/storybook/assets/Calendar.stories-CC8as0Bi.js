import{$ as p,a as m,r as l,j as d}from"./iframe-C1qr5fJG.js";import{C as n}from"./Calendar-Cvv4kAAE.js";import"./preload-helper-Ct5FWWRu.js";import"./CalendarHeader-eeyP3wMd.js";import"./Button-DQJfHdFy.js";import"./utils-L5F-E5oa.js";import"./clsx-B-dksMZM.js";import"./Hidden-C3GbSa9q.js";import"./useFocusRing-28aIZAqG.js";import"./index-Bx_ZZiUf.js";import"./index-D-qeXkn4.js";import"./useLabels-DysWQsGc.js";import"./useButton-C5lUgphC.js";import"./RSPContexts-Bj5Jx20Q.js";import"./Text-PiImN2rq.js";import"./useDateFormatter-CkX6uunC.js";import"./useControlledState-BInoKRkZ.js";import"./useLocalizedStringFormatter-CZNoWOT_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Bd_PNKXq.js";import"./useEvent-E43Nzm_j.js";import"./getScrollParent-uqqKq15_.js";import"./scrollIntoView-Dd3Mp8Mp.js";import"./useDescription-CjUI-cVY.js";import"./VisuallyHidden--9QY6UIZ.js";import"./clsx-Ciqy0D92.js";import"./Button-DH_gl17G.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-BC-6srKg.js";import"./chevron-right-DvP97x5z.js";import"./Heading-DGreCZH6.js";import"./FieldError-PPsriwer.js";import"./Text-_yTTBlbq.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
