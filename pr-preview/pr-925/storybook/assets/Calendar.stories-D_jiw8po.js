import{$ as p,a as m,r as l,j as d}from"./iframe-CIM0DofB.js";import{C as n}from"./Calendar-j7RvL1hh.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CiUMJ2mw.js";import"./Button-ropdusrp.js";import"./utils-B9P7pKe_.js";import"./clsx-B-dksMZM.js";import"./Hidden-C_nZwzti.js";import"./useFocusRing-CoxC0ffE.js";import"./index-z3A9RS1V.js";import"./index-Bmtd_4Bw.js";import"./useLabels-CBzADNBy.js";import"./useButton-C0Vwpaou.js";import"./RSPContexts-w2tebVZn.js";import"./Text-Ct6VpsXr.js";import"./useDateFormatter-pefceGHK.js";import"./useControlledState-BbgbYRMe.js";import"./useLocalizedStringFormatter-Mrh-6xvo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-D9x9pfFD.js";import"./useEvent-B-sCjbeA.js";import"./getScrollParent-BlYXZfSQ.js";import"./scrollIntoView-DzA6p2P1.js";import"./useDescription-DJZrXI9Y.js";import"./VisuallyHidden-CT-e_S4x.js";import"./clsx-Ciqy0D92.js";import"./Button-5M1jZ4FR.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-BthRmSsd.js";import"./chevron-right-le6OqJ67.js";import"./Heading-DJQ2j_aH.js";import"./FieldError-DwO_S0KA.js";import"./Text-B9vOzllF.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const L=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,L as __namedExportsOrder,K as default};
