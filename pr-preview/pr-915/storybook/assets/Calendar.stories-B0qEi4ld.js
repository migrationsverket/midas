import{$ as p,a as m,r as l,j as d}from"./iframe-DzJ58csS.js";import{C as n}from"./Calendar-VgFiYxeU.js";import"./preload-helper-Ct5FWWRu.js";import"./CalendarHeader-B-eyJlQO.js";import"./Button-XpnQOI7L.js";import"./utils-kFG7V26A.js";import"./clsx-B-dksMZM.js";import"./Hidden-DixvikVn.js";import"./useFocusRing-s8d5RV5A.js";import"./index-CXUZjOMB.js";import"./index-8g-wmO3w.js";import"./useLabels-CqViVGd8.js";import"./useButton-Bq7QVwIk.js";import"./RSPContexts-Bw7A04gx.js";import"./Text-CcO9WK_c.js";import"./useDateFormatter-D7n8Pph1.js";import"./useControlledState-BddBMCaY.js";import"./useLocalizedStringFormatter-LbY2s3T4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-96u3K8Yv.js";import"./useEvent-Bp2Ufb0u.js";import"./getScrollParent-DyLAwff4.js";import"./scrollIntoView-y1tmZMLC.js";import"./useDescription-CFNj517p.js";import"./VisuallyHidden-bMdwBiLV.js";import"./clsx-Ciqy0D92.js";import"./Button-DBLrduIN.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-DY2CvNkn.js";import"./chevron-right-Ca2BsnxE.js";import"./Heading-Cp-haDdt.js";import"./FieldError-F5XRq1hW.js";import"./Text-CF12HrJc.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
