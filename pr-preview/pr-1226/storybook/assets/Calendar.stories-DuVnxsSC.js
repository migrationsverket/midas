import{$ as c,a as m,r as l,j as d}from"./iframe-D3lvYj-7.js";import{C as n}from"./Calendar-D3VrQWNn.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-aYySiOSP.js";import"./Button-DOFXZV3V.js";import"./utils-B6k7vEYH.js";import"./clsx-B-dksMZM.js";import"./Hidden-DPjLOd6z.js";import"./useFocusRing-DIwykGm6.js";import"./index-BM1vPyr1.js";import"./index-DIXJvTpR.js";import"./useLabel-Pnrma__y.js";import"./useLabels-CJIv4d2A.js";import"./useButton-Dbna9MqX.js";import"./RSPContexts-D64MNSpQ.js";import"./Text-DdkQbCnP.js";import"./useDateFormatter-WRPmdmE7.js";import"./useControlledState-D5Ejjxkh.js";import"./useLocalizedStringFormatter-ZyPAj94C.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DCYzTRMy.js";import"./useEvent-oTCry49G.js";import"./getScrollParent-D1A9VXvD.js";import"./scrollIntoView-DNnNX0kR.js";import"./useDescription-CYl_TCbf.js";import"./VisuallyHidden-a__j3MRh.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BX5l4kXi.js";import"./createLucideIcon-C2BZ0Xjj.js";import"./chevron-right-CwNgppCY.js";import"./Button-DrsIbXth.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Dn72RgHJ.js";import"./Heading-CFWUW695.js";import"./FieldError-BIzYN5TD.js";import"./Text-CEj93Me_.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
