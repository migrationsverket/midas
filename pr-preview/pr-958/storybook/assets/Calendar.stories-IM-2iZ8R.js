import{$ as p,a as m,r as l,j as d}from"./iframe-DjkzDfUJ.js";import{C as n}from"./Calendar-CZffDKX6.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CMIT9TCy.js";import"./Button--BMsMuMT.js";import"./utils-vexqYITr.js";import"./clsx-B-dksMZM.js";import"./Hidden-XVXMf98p.js";import"./useFocusRing-CESrVCRK.js";import"./index-Ga__SQ6G.js";import"./index-6ad1L8SU.js";import"./useLabels-B6BslA1N.js";import"./useButton-Db0mva43.js";import"./RSPContexts-DZRurk6q.js";import"./Text-C5izD3Og.js";import"./useDateFormatter-D48PZDOZ.js";import"./useControlledState-CN1_NNkw.js";import"./useLocalizedStringFormatter-BW-uk-lr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-D7P20HRX.js";import"./useEvent-YZt64TSK.js";import"./getScrollParent-g7ixsLHw.js";import"./scrollIntoView-I26RsPsF.js";import"./useDescription-CU_RGk8G.js";import"./VisuallyHidden-DkXgx9RF.js";import"./clsx-Ciqy0D92.js";import"./Button-BR2m8ec0.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Cc-I9I7t.js";import"./createLucideIcon-BK-M30E7.js";import"./chevron-right-De1ngaJK.js";import"./Heading-_2TmmWg6.js";import"./FieldError-yYdtsfGD.js";import"./Text-DYUCIzkR.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
