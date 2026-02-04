import{$ as c,a as m,r as l,j as d}from"./iframe-Bghha776.js";import{C as n}from"./Calendar-B4B5hFBK.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D9j9pocI.js";import"./Button-CTIdFoEB.js";import"./utils-CKwB2h75.js";import"./clsx-B-dksMZM.js";import"./Hidden-DkuxBDe3.js";import"./useFocusRing-dHOAdoS9.js";import"./index-Ct8cyA18.js";import"./index-B_EeXN7u.js";import"./useLabels-CD1l8WQW.js";import"./useButton-Bo_828zl.js";import"./RSPContexts-CGn2RDsi.js";import"./Text-BLYY5elp.js";import"./useDateFormatter-BvfVUjNU.js";import"./useControlledState-brBh_6bZ.js";import"./useLocalizedStringFormatter-BJIXw8SS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B6m4yDbE.js";import"./useEvent-DvjFxw-T.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-x32OOjmK.js";import"./VisuallyHidden-CjLtMi-P.js";import"./clsx-Ciqy0D92.js";import"./Button-CZ61ZB9b.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-YOCDJcZs.js";import"./createLucideIcon-DZRbkVj-.js";import"./chevron-left-D5KUQNUR.js";import"./chevron-right-DLJz2Mvw.js";import"./Heading-BPloDmyB.js";import"./FieldError-9H5y-Lx7.js";import"./Text-Dwv0_3Nj.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
