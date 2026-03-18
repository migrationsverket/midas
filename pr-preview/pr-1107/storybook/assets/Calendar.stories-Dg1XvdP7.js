import{$ as c,a as m,r as l,j as d}from"./iframe-TiTRU3BL.js";import{C as n}from"./Calendar-Bonc3iiX.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DjIc6fFW.js";import"./Button-D1pF9L05.js";import"./utils-C9MqlSp2.js";import"./clsx-B-dksMZM.js";import"./Hidden-oj9BLOe9.js";import"./useFocusRing-dtBjt7J0.js";import"./index-B_qfMS5p.js";import"./index-B3QYGaBR.js";import"./useLabels-CfZHg_n5.js";import"./useButton-P0duEZAc.js";import"./RSPContexts-ByDZeKU9.js";import"./Text-BHbOdxoE.js";import"./useDateFormatter-CLjNVOGT.js";import"./useControlledState-L72g7_5f.js";import"./useLocalizedStringFormatter-BNlFtQ2R.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C2ViXhcm.js";import"./useEvent-YyEIKRGW.js";import"./getScrollParent-Lft_6uIw.js";import"./scrollIntoView-DVlMW1h6.js";import"./useDescription-C6zFetVQ.js";import"./VisuallyHidden-BpqMk6oy.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CmbhgPb2.js";import"./createLucideIcon-BH4SiISs.js";import"./chevron-right-ER_bPQBO.js";import"./Button-uSTshioy.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BuTIbiUS.js";import"./Heading-CKFwtyMM.js";import"./FieldError-Db_dX9Wa.js";import"./Text-CNXxeonm.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
