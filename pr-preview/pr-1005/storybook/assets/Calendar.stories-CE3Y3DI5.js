import{$ as c,a as m,r as l,j as d}from"./iframe-CvVfZMju.js";import{C as n}from"./Calendar-CD31KIA2.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Cu204bZo.js";import"./Button-KsvyKPrf.js";import"./utils-DWYdFJkQ.js";import"./clsx-B-dksMZM.js";import"./Hidden-BEb8_Y6y.js";import"./useFocusRing-C0LhZ78-.js";import"./index-D7941otZ.js";import"./index-Pshk4pH4.js";import"./useLabels-CsWyYT6N.js";import"./useButton-DjfUH4ri.js";import"./RSPContexts-BqDomoxP.js";import"./Text-BvmLx5Jg.js";import"./useDateFormatter-CHM6M0gR.js";import"./useControlledState-CMGDh5hi.js";import"./useLocalizedStringFormatter-BRwLdyH3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CsGlbp3r.js";import"./useEvent-BGpVX2rC.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CKnbeb1h.js";import"./VisuallyHidden-CuujIUMO.js";import"./clsx-Ciqy0D92.js";import"./Button-gfNGwmaI.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-JqvndrtF.js";import"./createLucideIcon-CL0pNCrf.js";import"./chevron-left-B8tdZ3WH.js";import"./chevron-right-CSMq8xML.js";import"./Heading-C9B0QyBV.js";import"./FieldError-AGivlbvG.js";import"./Text-Bu-h3aGF.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
