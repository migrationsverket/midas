import{$ as p,a as m,r as l,j as d}from"./iframe-DwmMgugL.js";import{C as n}from"./Calendar-CA3CtuP3.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BW7Opfig.js";import"./Button-Dle7h4uT.js";import"./utils-DmBjYA7q.js";import"./clsx-B-dksMZM.js";import"./Hidden-C52U5hS0.js";import"./useFocusRing-CzZK1_to.js";import"./index-DjWT9C0a.js";import"./index-BRzIZAFy.js";import"./useLabels-BFzRRTRc.js";import"./useButton-CUQ_mzTp.js";import"./RSPContexts-Bu2Edo6o.js";import"./Text-BgheBiT-.js";import"./useDateFormatter-B_jrpORQ.js";import"./useControlledState-yWDFBEGR.js";import"./useLocalizedStringFormatter-BaxlK3Fj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DP2Bct5v.js";import"./useEvent-Jcjvrjge.js";import"./getScrollParent-BGXuVfZe.js";import"./scrollIntoView-CjjreEs4.js";import"./useDescription-DUuO3-sD.js";import"./VisuallyHidden-Bjv_fvAd.js";import"./clsx-Ciqy0D92.js";import"./Button-DoQx4OEV.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-9R8XYZ6c.js";import"./chevron-right-TCUBu7LB.js";import"./Heading-L5Dj9Tzl.js";import"./FieldError-D5MBP0wB.js";import"./Text-uR4nWzwy.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
