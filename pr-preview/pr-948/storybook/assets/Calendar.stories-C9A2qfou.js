import{$ as p,a as m,r as l,j as d}from"./iframe-CNs3Hc78.js";import{C as n}from"./Calendar-cBolLH-0.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BTBzl2tr.js";import"./Button-tVHEZQYV.js";import"./utils-BCAzWPEC.js";import"./clsx-B-dksMZM.js";import"./Hidden-DgJuJ0IA.js";import"./useFocusRing-zj2lvc57.js";import"./index-B3WrROuP.js";import"./index-D4SN8WxL.js";import"./useLabels-CT5lp67H.js";import"./useButton-BXGXxck1.js";import"./RSPContexts-BrkOvu8M.js";import"./Text-wtOrpJHq.js";import"./useDateFormatter-Do081VOz.js";import"./useControlledState-TNI0bjBI.js";import"./useLocalizedStringFormatter-BN9wWTBZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-_v10tRaw.js";import"./useEvent-CPgKTkC-.js";import"./getScrollParent-BCP-FySj.js";import"./scrollIntoView-C3r_DWJ9.js";import"./useDescription-DCIm4kSk.js";import"./VisuallyHidden-DpNrlenL.js";import"./clsx-Ciqy0D92.js";import"./Button-Co8s4gf_.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-CV3R0Jov.js";import"./createLucideIcon-gnxpVPhb.js";import"./chevron-right-Ba4a5Qcx.js";import"./Heading-6lhQ2fmS.js";import"./FieldError-zFhVoF9-.js";import"./Text-BgKg61nJ.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
