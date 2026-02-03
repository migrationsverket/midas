import{$ as c,a as m,r as l,j as d}from"./iframe-LxsxPn7f.js";import{C as n}from"./Calendar-Su_S-2I5.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CA9oGT4M.js";import"./Button-ghTKDsBY.js";import"./utils-DncIGQMF.js";import"./clsx-B-dksMZM.js";import"./Hidden-B-JeMypd.js";import"./useFocusRing-B93HZZsG.js";import"./index-CKuG6hKg.js";import"./index-kVjvdCiN.js";import"./useLabels-CVG2mcXN.js";import"./useButton-BtIaMTZK.js";import"./RSPContexts-DIHhpxyH.js";import"./Text-PejApv0F.js";import"./useDateFormatter-Cuz9j7iR.js";import"./useControlledState-nLdn7Lta.js";import"./useLocalizedStringFormatter-ot1i9Cu6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Df1KERM5.js";import"./useEvent-Rt9gRg-L.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DziSmAEk.js";import"./VisuallyHidden-qYkk6-oE.js";import"./clsx-Ciqy0D92.js";import"./Button-CEFhP8SH.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-ImfIeIeT.js";import"./createLucideIcon-BNlGPqho.js";import"./chevron-left-Bi2ecOiO.js";import"./chevron-right-DuVqA1ge.js";import"./Heading-BAsi9nxn.js";import"./FieldError-CgEYF0Jb.js";import"./Text-olPUrwWm.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
