import{$ as p,a as m,r as l,j as d}from"./iframe-Bb5Ll2Q_.js";import{C as n}from"./Calendar-CWNnH2fm.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DCGnBCpx.js";import"./Button-CLgs0RHO.js";import"./utils-DUu2sqhX.js";import"./clsx-B-dksMZM.js";import"./Hidden-CIkUgucj.js";import"./useFocusRing-Che-PLf9.js";import"./index-hJZDNH39.js";import"./index-DaWpECPB.js";import"./useLabels-B4ytSInX.js";import"./useButton-Drix0Soe.js";import"./RSPContexts-BF108fh5.js";import"./Text-ATBrkPw2.js";import"./useDateFormatter-Cv-_3gPw.js";import"./useControlledState-CQTokbDY.js";import"./useLocalizedStringFormatter-BmXF49Fn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BM2yZZaO.js";import"./useEvent-DFeGPwZo.js";import"./getScrollParent-Dwp_thdi.js";import"./scrollIntoView-xcKTDZvX.js";import"./useDescription-C_IELAs0.js";import"./VisuallyHidden-BT0heQ-H.js";import"./clsx-Ciqy0D92.js";import"./Button-DcMiNBaO.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-r0kj4Pje.js";import"./createLucideIcon-BTIRr7kd.js";import"./chevron-right-HTXu5mp4.js";import"./Heading-nnfuclA9.js";import"./FieldError-DHSOLBGK.js";import"./Text-DGL_pGNa.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Q=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,Q as __namedExportsOrder,L as default};
