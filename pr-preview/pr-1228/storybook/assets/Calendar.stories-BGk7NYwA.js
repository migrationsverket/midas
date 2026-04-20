import{$ as c,a as m,r as l,j as d}from"./iframe-SiFgIgtO.js";import{C as n}from"./Calendar-VHR_arHT.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CcMKLNmy.js";import"./Button-CIm-1svz.js";import"./utils-o2Exi7SE.js";import"./clsx-B-dksMZM.js";import"./Hidden-BczPpR5h.js";import"./useFocusRing-CvkTALop.js";import"./index-DSbiV_Yq.js";import"./index-C4sSyqsa.js";import"./useLabel-z_-c7Nf0.js";import"./useLabels-KeWp1COh.js";import"./useButton-B0oseYFB.js";import"./RSPContexts-DM50IAXa.js";import"./Text-iLvdh7Qr.js";import"./useDateFormatter-DAhP8FuW.js";import"./useControlledState-BeznzCuJ.js";import"./useLocalizedStringFormatter-BSIB72Kk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect--C_tgNEG.js";import"./useEvent-DvWnSKUG.js";import"./getScrollParent-BdyvFVIS.js";import"./scrollIntoView-bZNhA6RN.js";import"./useDescription-CU7ZHwK3.js";import"./VisuallyHidden-DrRKsR6_.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DiPj51om.js";import"./createLucideIcon-jPk5qvos.js";import"./chevron-right-QF_eJxTe.js";import"./Button-DBG0-mK7.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CsnzAfll.js";import"./Heading-CsY9bpyS.js";import"./FieldError-BG5wZCkL.js";import"./Text-JI0YDy3v.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
