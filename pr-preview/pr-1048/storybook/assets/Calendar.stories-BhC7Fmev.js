import{$ as m,a as c,r as l,j as d}from"./iframe-BIYycVtF.js";import{C as n}from"./Calendar-BLgRw8uY.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CEf0-m29.js";import"./Button-xCxR0kSd.js";import"./utils-CQyQJNz7.js";import"./useObjectRef-Dnttuos9.js";import"./clsx-B-dksMZM.js";import"./Hidden-AGqSstUV.js";import"./useFocusRing-_u8e-JUw.js";import"./useFocusable-DRoMEDqQ.js";import"./index-CH0u5tNJ.js";import"./index-Dx5ixs9i.js";import"./useLabels-DC_FEenW.js";import"./useButton-BNdOFr74.js";import"./RSPContexts-B6TKKvZV.js";import"./Text-A1nWhzuO.js";import"./useDateFormatter-DaQuKQ3h.js";import"./useControlledState-C6aaDo-s.js";import"./useLocalizedStringFormatter-BW8yoNsi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BXnz-Ik9.js";import"./useEvent-B9CnIbJl.js";import"./getScrollParent-BVUiVP-B.js";import"./scrollIntoView-Bo1Xab6M.js";import"./useDescription-DVfA0GtU.js";import"./VisuallyHidden-CK9a4W9O.js";import"./clsx-Ciqy0D92.js";import"./Button-D9Any6-B.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BKDdPfco.js";import"./createLucideIcon-S6aGlHi1.js";import"./chevron-left-DBFNwLHK.js";import"./chevron-right-91JY7Zhg.js";import"./Heading-BG47WcTa.js";import"./FieldError-BsWqYage.js";import"./Text-B1YyVTq1.js";const V={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new m(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>c(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const X=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,X as __namedExportsOrder,V as default};
