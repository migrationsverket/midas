import{$ as c,a as m,r as l,j as d}from"./iframe-Bm0DrSMO.js";import{C as n}from"./Calendar-N3du_VuW.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CjjKP7KI.js";import"./Button-BlmcdTpb.js";import"./utils-CoM9YHiu.js";import"./clsx-B-dksMZM.js";import"./Hidden-RcWRgJ8x.js";import"./useFocusRing-CkTqT8wc.js";import"./index-CFyUkJmM.js";import"./index-CuQSmexf.js";import"./useLabels-B81GYCN9.js";import"./useButton-BNEnbj2x.js";import"./RSPContexts-nAfEcYEJ.js";import"./Text-CvUQuXzc.js";import"./useDateFormatter-D2w-DJZ9.js";import"./useControlledState-_TpPhYBA.js";import"./useLocalizedStringFormatter-DWI_FIzZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DQQghGWZ.js";import"./useEvent-Bam-6ZDs.js";import"./getScrollParent-D9CIxd-t.js";import"./scrollIntoView-ChcThMc9.js";import"./useDescription-BgQlQb3M.js";import"./VisuallyHidden-B5PU83U6.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-bxoHPMKu.js";import"./createLucideIcon-CUh6klxC.js";import"./chevron-right-CE-zwnk_.js";import"./Button-CekYPC-I.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Ci4W8RSD.js";import"./Heading-BoQ-AyCY.js";import"./FieldError-CCe7rZes.js";import"./Text-BLzt5HZQ.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
