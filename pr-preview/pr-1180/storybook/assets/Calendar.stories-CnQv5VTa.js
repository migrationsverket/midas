import{$ as c,a as m,r as l,j as d}from"./iframe-CH21sBFo.js";import{C as n}from"./Calendar-DM6YopDN.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DNGmNNgX.js";import"./Button-Cyld21y_.js";import"./utils-BTsYysht.js";import"./clsx-B-dksMZM.js";import"./Hidden-BZUBqXYz.js";import"./useFocusRing-DLE_Hwk5.js";import"./index-BSkkjiWB.js";import"./index-BSEruQCs.js";import"./useLabels-dAMIXjYB.js";import"./useButton-B_byaW6S.js";import"./RSPContexts-kvxCI0gF.js";import"./Text-BvEBpsjb.js";import"./useDateFormatter-DVfIXai3.js";import"./useControlledState-BSIuYOQP.js";import"./useLocalizedStringFormatter-DawUslhI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-UXW7fNt2.js";import"./useEvent-B6n2-V8U.js";import"./getScrollParent-DE7toX-r.js";import"./scrollIntoView-By99Ab3d.js";import"./useDescription-B4sJiGX5.js";import"./VisuallyHidden-BbJs2R-u.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-k6EkYuxz.js";import"./createLucideIcon-BCbaEzrv.js";import"./chevron-right-D0aWNfRp.js";import"./Button-DAqWGZgG.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CoUJdwyc.js";import"./Heading-BUbmqlpx.js";import"./FieldError-27wmxIep.js";import"./Text-irla2VTm.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
