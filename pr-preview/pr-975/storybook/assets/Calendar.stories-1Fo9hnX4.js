import{$ as p,a as m,r as l,j as d}from"./iframe--li1tHgy.js";import{C as n}from"./Calendar-Bo3hQL2p.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Ce3znPt0.js";import"./Button-DhqFImjK.js";import"./utils-d7pE4sht.js";import"./clsx-B-dksMZM.js";import"./Hidden-DN3rilfW.js";import"./useFocusRing-Baa8Ke6W.js";import"./index-BMTXQDlD.js";import"./index-na2T25w4.js";import"./useLabels-CQth3QJU.js";import"./useButton-DI4U2DL6.js";import"./RSPContexts-BSBhoFuS.js";import"./Text-C6CT3M7i.js";import"./useDateFormatter-CYztm-r_.js";import"./useControlledState-D6TeioUq.js";import"./useLocalizedStringFormatter-B9gNfdrG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DJLNIVsc.js";import"./useEvent-Cf26KrZD.js";import"./getScrollParent-DBJMcwbO.js";import"./scrollIntoView-B8fKlZrL.js";import"./useDescription-Dj35526z.js";import"./VisuallyHidden-BrGVJhu4.js";import"./clsx-Ciqy0D92.js";import"./Button-nsixNk6A.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DjA8Yn1n.js";import"./createLucideIcon-DFHtXhgj.js";import"./chevron-right-xpw-0QFx.js";import"./Heading-B-DVUmM6.js";import"./FieldError-BS8UBwNs.js";import"./Text-CGSXZbqm.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Q=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,Q as __namedExportsOrder,L as default};
