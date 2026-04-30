import{$ as c,a as m,r as l,j as d}from"./iframe-C2VOWNy0.js";import{C as n}from"./Calendar-BSv5Cqxj.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-2W1k9VMP.js";import"./Button-MPfMNKtf.js";import"./utils-DL-QRm3L.js";import"./clsx-B-dksMZM.js";import"./Hidden-BpHByyx6.js";import"./useFocusRing-tC1N5ZLd.js";import"./index-BznYJ3G3.js";import"./index-HiVmXaez.js";import"./useLabel-CxUvvvjx.js";import"./useLabels-Szx34EwE.js";import"./useButton-BqHFL3UV.js";import"./RSPContexts-Cjt7Khrj.js";import"./Text-Cxs3PxNa.js";import"./useDateFormatter-BK4a1yf6.js";import"./useControlledState-DnakpviL.js";import"./useLocalizedStringFormatter-BtBT9ZZk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DHZ4gp8q.js";import"./useEvent-BuIe4DGB.js";import"./getScrollParent-D2095vKQ.js";import"./scrollIntoView-DdcCNGEe.js";import"./useDescription-DsRwbbxm.js";import"./VisuallyHidden-B4dPT57A.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-Bx0alJkw.js";import"./createLucideIcon-DQ7ZZ5Wg.js";import"./chevron-right-Bs8Vx-GX.js";import"./Button-BlyWqisU.js";import"./Button.module-BFenTVPP.js";import"./useLocalizedStringFormatter-BAlXpd6A.js";import"./Heading--TddKMjF.js";import"./FieldError-jk1VrFqC.js";import"./Text-Dp8Xagmv.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
