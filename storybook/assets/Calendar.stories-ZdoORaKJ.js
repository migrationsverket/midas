import{$ as c,a as m,r as l,j as d}from"./iframe-DP3vvJW_.js";import{C as n}from"./Calendar-DIjXhJdH.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CGn4aCio.js";import"./Button-Cm4-ITis.js";import"./utils-DeQRcX3I.js";import"./clsx-B-dksMZM.js";import"./Hidden-0kVxHtHC.js";import"./useFocusRing-CT4t16Bn.js";import"./index-nwZ9FQBx.js";import"./index-B0BlSEXc.js";import"./useLabel-BkKpedFS.js";import"./useLabels-DjnDZU9d.js";import"./useButton-BtKEagUR.js";import"./RSPContexts-BPYDVhoO.js";import"./Text-COCpEZrG.js";import"./useDateFormatter-BNsF4Qin.js";import"./useControlledState-B3z4I1hz.js";import"./useLocalizedStringFormatter-CDrhnNBu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BicW3JmJ.js";import"./useEvent-KPlZMkuH.js";import"./getScrollParent-DKQ_TpWj.js";import"./scrollIntoView-C9R--iDG.js";import"./useDescription-ChOnG5Gy.js";import"./VisuallyHidden-ohAQh_Nb.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-C-GPnql6.js";import"./createLucideIcon-Deup7nCX.js";import"./chevron-right-B26i1ez7.js";import"./Button-CqcFgrq0.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-FpMcBaq8.js";import"./Heading-Bj5Rj2cw.js";import"./FieldError-Bmtmc6Ue.js";import"./Text-CdS1c328.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const V=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,V as __namedExportsOrder,T as default};
