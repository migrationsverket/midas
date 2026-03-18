import{$ as c,a as m,r as l,j as d}from"./iframe-C_3vuCKG.js";import{C as n}from"./Calendar-DZR8ECP7.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DuXbQsmE.js";import"./Button-wKa-_VCA.js";import"./utils-CTZ-lGkv.js";import"./clsx-B-dksMZM.js";import"./Hidden-kaOVIzje.js";import"./useFocusRing-Bim_lF4S.js";import"./index-YuVOA9gI.js";import"./index-C8YVmd9h.js";import"./useLabels-zSAz4c3a.js";import"./useButton-DoN6A2i0.js";import"./RSPContexts-Chkf77Qe.js";import"./Text-7oa-kXNm.js";import"./useDateFormatter-QORHajpQ.js";import"./useControlledState-B6_sgsXL.js";import"./useLocalizedStringFormatter-DxLulngP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B4hIPn8z.js";import"./useEvent-DKEMayTQ.js";import"./getScrollParent-gVSPKYUW.js";import"./scrollIntoView-DcoQ6KWY.js";import"./useDescription-D545sxms.js";import"./VisuallyHidden-BW8k_cqp.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-H_pkUWz7.js";import"./createLucideIcon-Czsnz6Io.js";import"./chevron-right-BmAkC7qu.js";import"./Button-YkrHmIdv.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Bo6l1f_2.js";import"./Heading-CecS6_nO.js";import"./FieldError-Bjas0Mhs.js";import"./Text-DKTyWkTk.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
