import{$ as c,a as m,r as l,j as d}from"./iframe-D-p6dryC.js";import{C as n}from"./Calendar-CFpjVhq3.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-fRvvOts0.js";import"./Button-BU7RNZRB.js";import"./utils-B-poXB9P.js";import"./clsx-B-dksMZM.js";import"./Hidden-BoY54D8z.js";import"./useFocusRing-1dArzfdN.js";import"./index-DIakIQqk.js";import"./index-DkL1JqyI.js";import"./useLabels-Djww4bwV.js";import"./useButton-BYxg0DiE.js";import"./RSPContexts-i063sbcf.js";import"./Text-D7fRftcI.js";import"./useDateFormatter-zv5gca6n.js";import"./useControlledState-BBjtOFIE.js";import"./useLocalizedStringFormatter-qTNGciRf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CGnoa8Sq.js";import"./useEvent-0pnQ-670.js";import"./getScrollParent-D3Nh5GEm.js";import"./scrollIntoView-CkrWhIra.js";import"./useDescription-DAt4X-Ie.js";import"./VisuallyHidden-jfhHFvLB.js";import"./clsx-Ciqy0D92.js";import"./Button-W-Uz8qez.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DBvUnH6s.js";import"./createLucideIcon-DPKqS8th.js";import"./chevron-left-6R3S4Uut.js";import"./chevron-right-PNYZx2-N.js";import"./Heading-DWeNJ0wl.js";import"./FieldError-CmYJRG-e.js";import"./Text-CMUqHi1g.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
