import{$ as p,a as m,r as l,j as d}from"./iframe-XX0Vdbj7.js";import{C as n}from"./Calendar-Cvy4CuMM.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BX3Kt4ua.js";import"./Button-DY_cHSjI.js";import"./utils-CbDu8gNr.js";import"./clsx-B-dksMZM.js";import"./Hidden-BPeBnAY5.js";import"./useFocusRing-DZkPrIsz.js";import"./index-DTlV7nv2.js";import"./index-BrPE2rn6.js";import"./useLabels-BB7TQJZF.js";import"./useButton-afcNCAs_.js";import"./RSPContexts-D4Trq4sX.js";import"./Text-BeRQ2kjX.js";import"./useDateFormatter-Dh1GnL_t.js";import"./useControlledState-CExhW45z.js";import"./useLocalizedStringFormatter-BMuLFIl9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-jDo7NlyM.js";import"./useEvent-BDIgNVUL.js";import"./getScrollParent-CJczyCZU.js";import"./scrollIntoView-BOk-Zv9y.js";import"./useDescription-IkLXckEB.js";import"./VisuallyHidden-D9J82ZWu.js";import"./clsx-Ciqy0D92.js";import"./Button-CgwWNrBR.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BYLA1ivb.js";import"./createLucideIcon-cScy24ZI.js";import"./chevron-right-C8-h4DRW.js";import"./Heading-B2A5PAFc.js";import"./FieldError-ChwcOMX4.js";import"./Text-DyXudq4d.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
