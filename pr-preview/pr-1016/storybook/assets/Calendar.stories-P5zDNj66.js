import{$ as c,a as m,r as l,j as d}from"./iframe-Cy1O8yWi.js";import{C as n}from"./Calendar-DiseW1Yf.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DQG5qxOW.js";import"./Button-D7uf2_z0.js";import"./utils-BjVRslkV.js";import"./clsx-B-dksMZM.js";import"./Hidden-DfJC5d3o.js";import"./useFocusRing-Bp1jLS3U.js";import"./index-5ACCliHA.js";import"./index-Cyzr7w3M.js";import"./useLabels-BdY4SXxc.js";import"./useButton-MFlutIw_.js";import"./RSPContexts-DYATOnMx.js";import"./Text-BhW5Vg2W.js";import"./useDateFormatter-BqBOgg4s.js";import"./useControlledState-CGXlN-Wm.js";import"./useLocalizedStringFormatter-Cv53LFTg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Cu2sT7yK.js";import"./useEvent-BcfvInMW.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-dqHAgAeW.js";import"./VisuallyHidden-BDU5-Uv6.js";import"./clsx-Ciqy0D92.js";import"./Button-CD-tfith.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-3W37BXaG.js";import"./createLucideIcon-D6XDS7Dv.js";import"./chevron-left-CiFl5DsW.js";import"./chevron-right-BS73OrL6.js";import"./Heading-L0-fmDPo.js";import"./FieldError-CYJiMFhF.js";import"./Text-BQ9CxdIy.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const T=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,T as __namedExportsOrder,Q as default};
