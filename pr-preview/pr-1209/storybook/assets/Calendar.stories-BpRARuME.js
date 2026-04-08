import{$ as c,a as m,r as l,j as d}from"./iframe-CEYCzj7u.js";import{C as n}from"./Calendar-DijQ6n40.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BV_T_B_Z.js";import"./Button-C7JuJvDF.js";import"./utils-AQIE0kDv.js";import"./clsx-B-dksMZM.js";import"./Hidden-BwxAj0d8.js";import"./useFocusRing-Dp-W9h8R.js";import"./index-BT04Vy5P.js";import"./index-BaKsLBWM.js";import"./useLabel-BMWHmK7D.js";import"./useLabels-BdGOjTVQ.js";import"./useButton-15OKOO7P.js";import"./RSPContexts-vK1IDStc.js";import"./Text-BtotI6hp.js";import"./useDateFormatter-CVg8htzO.js";import"./useControlledState-BgNKedVs.js";import"./useLocalizedStringFormatter-DsBO9UZN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B0ts-m9F.js";import"./useEvent-B9xcl8_k.js";import"./getScrollParent-DNFkay4Z.js";import"./scrollIntoView-BCOX-ymx.js";import"./useDescription-7tiDq9ws.js";import"./VisuallyHidden-B3AOW4Om.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BJWPlc3Y.js";import"./createLucideIcon-Djfjk74V.js";import"./chevron-right-OwzSwCp8.js";import"./Button-DjNzlNeH.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-B6vMXcu5.js";import"./Heading-BRZF6O29.js";import"./FieldError-BW7B152f.js";import"./Text-BKjU8N6L.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
