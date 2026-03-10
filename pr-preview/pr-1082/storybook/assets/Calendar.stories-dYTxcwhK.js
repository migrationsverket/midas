import{$ as c,a as m,r as l,j as d}from"./iframe-Bid_S7I4.js";import{C as n}from"./Calendar-DlfLbPcR.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D1xiAJ_p.js";import"./Button-CxmUZ178.js";import"./utils-B2qcFePq.js";import"./clsx-B-dksMZM.js";import"./Hidden-B_IoczkA.js";import"./useFocusRing-CGf0hTBa.js";import"./index-CbxEA1vr.js";import"./index-CZS9W8aw.js";import"./useLabels-CtsjeuWn.js";import"./useButton-D9fSscge.js";import"./RSPContexts-Yr0bwy4q.js";import"./Text-GfN3CyXi.js";import"./useDateFormatter-Dy0ivXY1.js";import"./useControlledState-BWQVgipy.js";import"./useLocalizedStringFormatter-5FSqA3CS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CDLnIEYa.js";import"./useEvent-B_2WmI7N.js";import"./getScrollParent-CjkeExGQ.js";import"./scrollIntoView-B0aCs9nt.js";import"./useDescription-CiTmE2hO.js";import"./VisuallyHidden-B_l7GjPs.js";import"./clsx-Ciqy0D92.js";import"./Button-CRgnzWDb.js";import"./Button.module-7yYQGR8l.js";import"./useLocalizedStringFormatter-D8yQOpe1.js";import"./createLucideIcon-D8f6cvff.js";import"./chevron-left-CIiU_3xv.js";import"./chevron-right-CTo-QA4T.js";import"./Heading-qFCHwR_3.js";import"./FieldError-B0mVz9cL.js";import"./Text-52ihcTiX.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
