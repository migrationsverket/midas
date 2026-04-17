import{$ as c,a as m,r as l,j as d}from"./iframe-D49zqrLc.js";import{C as n}from"./Calendar-CbwSwJoX.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-okp-9ggi.js";import"./Button-J3Iz-Is0.js";import"./utils-DdKwVxXO.js";import"./clsx-B-dksMZM.js";import"./Hidden-BxWMNY2q.js";import"./useFocusRing--JbYat2w.js";import"./index-CIcuBPP4.js";import"./index-Gblu_uca.js";import"./useLabel-DknYPbVU.js";import"./useLabels-CkRRpiK4.js";import"./useButton-CxrKCV_E.js";import"./RSPContexts-BB17GfA4.js";import"./Text-gxnzhlQB.js";import"./useDateFormatter-DvlXCvQ6.js";import"./useControlledState-DfjmYRRj.js";import"./useLocalizedStringFormatter-CsaBVSjU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BsXudpGt.js";import"./useEvent-BNdUgJ17.js";import"./getScrollParent-ailHkxD7.js";import"./scrollIntoView-vmM-KOvz.js";import"./useDescription-2_Msdgp6.js";import"./VisuallyHidden-BCA1C0LI.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CKrMxnx5.js";import"./createLucideIcon-DrHl8fY3.js";import"./chevron-right-CIt2uayI.js";import"./Button-CsehA-0Y.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-D9dAP4k5.js";import"./Heading-DQ6cPxlP.js";import"./FieldError-CNr2Wry7.js";import"./Text-BHKGtyr7.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
