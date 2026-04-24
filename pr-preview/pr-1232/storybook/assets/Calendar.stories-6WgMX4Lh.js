import{$ as c,a as m,r as l,j as d}from"./iframe-IJuqoOmk.js";import{C as n}from"./Calendar-CmWu-7eM.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-HU6Rg1LV.js";import"./Button-E9T7cgY3.js";import"./utils-B1FkGHW3.js";import"./clsx-B-dksMZM.js";import"./Hidden-DzRh-64e.js";import"./useFocusRing-CkLNsvno.js";import"./index-CBGauQ3U.js";import"./index-DtmQ20tD.js";import"./useLabel-BDetoK4o.js";import"./useLabels-W32AwYY6.js";import"./useButton-Ckvqp9dV.js";import"./RSPContexts-BaJeT4Si.js";import"./Text-B8nSOSOw.js";import"./useDateFormatter-CidmyPMz.js";import"./useControlledState-DL7f2Wr3.js";import"./useLocalizedStringFormatter-BdCq-opg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Bw5hbbwF.js";import"./useEvent-tP2LEsJ9.js";import"./getScrollParent-CQ3nADdi.js";import"./scrollIntoView-Cek-eHKE.js";import"./useDescription--7_MWUV8.js";import"./VisuallyHidden-Bdyvpnxr.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-B9LXWC6_.js";import"./createLucideIcon-9OQLRRNP.js";import"./chevron-right-B0zwOfrY.js";import"./Button-DQFlWi2u.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Vjm4sErI.js";import"./Heading-Crc-KCwN.js";import"./FieldError-BFehnrZy.js";import"./Text-Dbv6zmdw.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
