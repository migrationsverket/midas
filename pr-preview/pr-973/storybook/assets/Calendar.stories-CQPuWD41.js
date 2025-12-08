import{$ as p,a as m,r as l,j as d}from"./iframe-Cmcg9luQ.js";import{C as n}from"./Calendar-WFFoJ_mn.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-KAo2esGQ.js";import"./Button-CHShYw1t.js";import"./utils-DkJuHdm3.js";import"./clsx-B-dksMZM.js";import"./Hidden-zwF0tAvB.js";import"./useFocusRing-DDfGAqyv.js";import"./index-CGA0FNtf.js";import"./index-DVbC1Dtd.js";import"./useLabels-Cu1LcQOl.js";import"./useButton-DKMZ0sMp.js";import"./RSPContexts-XO60EeIg.js";import"./Text-hbQ-WDrk.js";import"./useDateFormatter-817JT_ve.js";import"./useControlledState-CQt4n5kP.js";import"./useLocalizedStringFormatter-DlNfiCCT.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-WTTesj0z.js";import"./useEvent-yxaIvS7j.js";import"./getScrollParent-Dj2mCMcV.js";import"./scrollIntoView-GW3hjUpk.js";import"./useDescription-DVpoVzOH.js";import"./VisuallyHidden-DrDA4vjy.js";import"./clsx-Ciqy0D92.js";import"./Button-2Trrvjfa.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DdGC_wlX.js";import"./createLucideIcon-BL352A7A.js";import"./chevron-right-HQrPMBYM.js";import"./Heading-DqvvOFdk.js";import"./FieldError-BaL3LJ5r.js";import"./Text-BAN3IH2j.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
