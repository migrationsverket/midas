import{$ as c,a as m,r as l,j as d}from"./iframe-B3gHnZ_4.js";import{C as n}from"./Calendar-zcFbC0aH.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-B4mNV8Bd.js";import"./Button-tj4RHwPQ.js";import"./utils-CdET5WnV.js";import"./clsx-B-dksMZM.js";import"./Hidden-dfLF-Ti8.js";import"./useFocusRing-DIJ0sANO.js";import"./index-D2HHYUpr.js";import"./index-ClVbkfNF.js";import"./useLabel-Co4jWqc7.js";import"./useLabels-BzsFe6ap.js";import"./useButton-wyQ3LRsu.js";import"./RSPContexts-DQ5I8I6_.js";import"./Text-C8paMr1m.js";import"./useDateFormatter-gyhKATBb.js";import"./useControlledState-BvujKDrt.js";import"./useLocalizedStringFormatter-DX3s4o0C.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-I1dAQKC5.js";import"./useEvent-BVTuF7AB.js";import"./getScrollParent-DysXOOBH.js";import"./scrollIntoView-BeJDYg3T.js";import"./useDescription-C4OXEZSl.js";import"./VisuallyHidden-D_rpyZ3J.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CZTsjjMX.js";import"./createLucideIcon-ClRsgvfJ.js";import"./chevron-right-B6O6J3Ra.js";import"./Button-Cw4w6g1P.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Cp3BGEKs.js";import"./Heading-gxWPWf0v.js";import"./FieldError-pXnrGUBV.js";import"./Text-DcZUZMzL.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
