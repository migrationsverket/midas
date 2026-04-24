import{$ as c,a as m,r as l,j as d}from"./iframe-C2ifzLFW.js";import{C as n}from"./Calendar-ClQqdeIu.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DNyViiJa.js";import"./Button-DrEkBHNm.js";import"./utils-73qIUJkS.js";import"./clsx-B-dksMZM.js";import"./Hidden-arruSKBU.js";import"./useFocusRing-D5sowTP0.js";import"./index-D40BKMj1.js";import"./index-Cku3_zST.js";import"./useLabel-BkkkauYh.js";import"./useLabels-BURtxaJp.js";import"./useButton-BQcZ3c2T.js";import"./RSPContexts-D7FudQaj.js";import"./Text-CD2yXDFK.js";import"./useDateFormatter-Bed4ajcr.js";import"./useControlledState-DIVk5_t_.js";import"./useLocalizedStringFormatter-Bfe8f42t.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BoDyj24F.js";import"./useEvent-DOTctoG_.js";import"./getScrollParent-DnkUn25f.js";import"./scrollIntoView-Ch2TMXIT.js";import"./useDescription-CmVv1Pv8.js";import"./VisuallyHidden-B1aqafDE.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DvjHh62G.js";import"./createLucideIcon-BoPfjMKr.js";import"./chevron-right-B953HUjQ.js";import"./Button-DtzYCx6b.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BkkLiQpX.js";import"./Heading-C-leph9A.js";import"./FieldError-CG9ZMBd0.js";import"./Text-BHGhTSao.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
