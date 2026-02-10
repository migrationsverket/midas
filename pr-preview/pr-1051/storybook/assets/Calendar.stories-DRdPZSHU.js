import{$ as c,a as m,r as l,j as d}from"./iframe-DOk2o9NQ.js";import{C as n}from"./Calendar-DAzJrJeL.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-0XEFl0Qz.js";import"./Button-WADFfC5e.js";import"./utils-yxEoGQIn.js";import"./clsx-B-dksMZM.js";import"./Hidden-C9UmOyee.js";import"./useFocusRing-DfiygLtK.js";import"./index-BDj9Getj.js";import"./index-Bd-kietF.js";import"./useLabels-CXX4Mh78.js";import"./useButton-oJknvzPj.js";import"./RSPContexts-DkRXQuPU.js";import"./Text-DOsGQ1iy.js";import"./useDateFormatter-ZM8vfhuZ.js";import"./useControlledState-D6ABUqgD.js";import"./useLocalizedStringFormatter-DgU5yhXs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B5rFR05Z.js";import"./useEvent-CEdgHe1B.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-B9j_W6AF.js";import"./VisuallyHidden-CCQSdTZL.js";import"./clsx-Ciqy0D92.js";import"./Button-BheV8xjG.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DTXBmCaA.js";import"./createLucideIcon-De700o01.js";import"./chevron-left-DrY3WRIy.js";import"./chevron-right-CQJ0jEG4.js";import"./Heading-CPJz5_k4.js";import"./FieldError-hXnolGoZ.js";import"./Text-B56BHEOe.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
