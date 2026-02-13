import{$ as c,a as m,r as l,j as d}from"./iframe-CY7earj9.js";import{C as n}from"./Calendar-TTAVNh0L.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BHvmh__g.js";import"./Button-Cn9gwPsg.js";import"./utils-BHj0WwlJ.js";import"./clsx-B-dksMZM.js";import"./Hidden-BWeB5vvs.js";import"./useFocusRing-D0zrayrq.js";import"./index-BMlkIDuL.js";import"./index-DvjoN402.js";import"./useLabels-B26E6Lmi.js";import"./useButton-D33c8uF-.js";import"./RSPContexts-BRbL19jn.js";import"./Text-DDkXBPqL.js";import"./useDateFormatter-JP5grEi3.js";import"./useControlledState-CGlYRVEE.js";import"./useLocalizedStringFormatter-CXnWH6sO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BzkTYok2.js";import"./useEvent-BmzvquLD.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-B3ZL4MTY.js";import"./VisuallyHidden-BYqRYUAd.js";import"./clsx-Ciqy0D92.js";import"./Button-DqjjUYYg.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CYqH8VQ7.js";import"./createLucideIcon-_3e5Batb.js";import"./chevron-left-ztv4D0iP.js";import"./chevron-right-BmkakqIK.js";import"./Heading-DTdA7tNF.js";import"./FieldError-X9ojGEW-.js";import"./Text-DEbe6_kr.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
