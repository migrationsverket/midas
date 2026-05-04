import{$ as c,a as m,r as l,j as d}from"./iframe-BLFVAebz.js";import{C as n}from"./Calendar-J1LN-J5H.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Y74_6-U3.js";import"./Button-CDRPkfYl.js";import"./utils-COORazi9.js";import"./clsx-B-dksMZM.js";import"./Hidden-DwfkqXbu.js";import"./useFocusRing-BtgCc4uS.js";import"./index-DxSzAXil.js";import"./index-MFhL1fTj.js";import"./useLabel-C9MLZ0ZV.js";import"./useLabels-DsM9HmY4.js";import"./useButton-Dkva8HAQ.js";import"./RSPContexts-dhIaIC8d.js";import"./Text-CMpPyQHQ.js";import"./useDateFormatter-DDEG2r_8.js";import"./useControlledState-DKdXVV8i.js";import"./useLocalizedStringFormatter-D6yZmrtf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BY-5Usb6.js";import"./useEvent-BSHnIrcj.js";import"./getScrollParent-VrUltlJn.js";import"./scrollIntoView-D0PGn0f2.js";import"./useDescription-ChbjjRBw.js";import"./VisuallyHidden-BFj9mjRF.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-D6mBQTvz.js";import"./createLucideIcon-ioBnSaPP.js";import"./chevron-right-Jx9lpJfs.js";import"./Button-DNuEBjZY.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DZSD3y5K.js";import"./Heading-CDtobJ4y.js";import"./FieldError-CotC56cl.js";import"./Text-BI792DVZ.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
