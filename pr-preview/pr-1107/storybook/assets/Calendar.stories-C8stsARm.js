import{$ as c,a as m,r as l,j as d}from"./iframe-DfM6kEgP.js";import{C as n}from"./Calendar-DNYdYt7y.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BbQnWxf2.js";import"./Button-Czn9lX0K.js";import"./utils-D8PGfxYb.js";import"./clsx-B-dksMZM.js";import"./Hidden-B-o_Z7ot.js";import"./useFocusRing-IDQhhoIK.js";import"./index-DJ_VatpF.js";import"./index-C5hIZfwH.js";import"./useLabels-SIl08feW.js";import"./useButton-MJN3qUWn.js";import"./RSPContexts-BeTSInpY.js";import"./Text-BibBkfuq.js";import"./useDateFormatter-D7Q4VtF4.js";import"./useControlledState-kzArnBYE.js";import"./useLocalizedStringFormatter-DnY2UHeu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-56KrdJM3.js";import"./useEvent-gEY0uIrq.js";import"./getScrollParent-C3WNykc8.js";import"./scrollIntoView-DF5-5d4s.js";import"./useDescription-CAoO2SDf.js";import"./VisuallyHidden-B1MOHF_-.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DUpdrcqZ.js";import"./createLucideIcon-DO7HuIXt.js";import"./chevron-right-B644SBRv.js";import"./Button-6n3SyLgE.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BjlGfbr7.js";import"./Heading-Dh4ztEp9.js";import"./FieldError-D7g57v3N.js";import"./Text-19RelmEi.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
