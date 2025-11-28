import{$ as p,a as m,r as l,j as d}from"./iframe-Bu_0PVym.js";import{C as n}from"./Calendar-DUQpJ2nP.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DTeoYerZ.js";import"./Button-axDS0fX7.js";import"./utils-BIbh9FXc.js";import"./clsx-B-dksMZM.js";import"./Hidden-qOIDITa6.js";import"./useFocusRing-Dpo6Rp6r.js";import"./index-CFkxhmdC.js";import"./index-DpdlitPn.js";import"./useLabels-D-wdi6sm.js";import"./useButton-DnFz0C4G.js";import"./RSPContexts-Dlhq9Mwl.js";import"./Text-BYC8Q8vx.js";import"./useDateFormatter-D4njUJSj.js";import"./useControlledState-DhxqLuUq.js";import"./useLocalizedStringFormatter-Drm1wbnq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect--2DRq2xw.js";import"./useEvent-CkXPWDzi.js";import"./getScrollParent-DQAysRqG.js";import"./scrollIntoView-CmL5QW7o.js";import"./useDescription-CzNL1T7g.js";import"./VisuallyHidden-BhEPxKK7.js";import"./clsx-Ciqy0D92.js";import"./Button-xsqQqkQ4.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-Bso3J__i.js";import"./createLucideIcon-DsJW-Utu.js";import"./chevron-right-Bj2LkPxg.js";import"./Heading-DbU8QRcB.js";import"./FieldError-D_EEMj73.js";import"./Text-CcT2CHdP.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
