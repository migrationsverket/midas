import{$ as p,a as m,r as l,j as d}from"./iframe-ESnm-WG3.js";import{C as n}from"./Calendar-CGZizVc8.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-B6KiPuvT.js";import"./Button-DFzAjeyw.js";import"./utils-CfF6X6ci.js";import"./clsx-B-dksMZM.js";import"./Hidden-CluJLsa9.js";import"./useFocusRing-DA_fDrnE.js";import"./index-vxsCmClI.js";import"./index-AgRx6xjg.js";import"./useLabels-CAK9137x.js";import"./useButton-6NzSPfmg.js";import"./RSPContexts-FqK3r0D2.js";import"./Text-CopC_eFr.js";import"./useDateFormatter-gM6YTh2P.js";import"./useControlledState-Df7HUCxc.js";import"./useLocalizedStringFormatter-DiyOzk1S.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-29q6trCl.js";import"./useEvent-CO_Npdc0.js";import"./getScrollParent-CNw16W3a.js";import"./scrollIntoView-yDgqYeez.js";import"./useDescription-BG6y4S9U.js";import"./VisuallyHidden-D9McEQWq.js";import"./clsx-Ciqy0D92.js";import"./Button-C-IyseEW.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-Dl_alOYb.js";import"./createLucideIcon-BI482lZK.js";import"./chevron-right-D2JZgqce.js";import"./Heading-382vz7ef.js";import"./FieldError-rr6C8cNr.js";import"./Text-DgO_WfAt.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
