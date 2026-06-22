import{$ as c,a as m,r as l,j as d}from"./iframe-Cttpu6ri.js";import{C as n}from"./Calendar-Bay-S5eD.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C9o8Fyfx.js";import"./Button-BgQeNeK3.js";import"./utils-BuF_h7AP.js";import"./clsx-B-dksMZM.js";import"./Hidden-C4gGqRbi.js";import"./useFocusRing-Da5Lg8ZZ.js";import"./index-D0txj7Kr.js";import"./index-dIHcpMJ6.js";import"./useLabel-CDs_h7ib.js";import"./useLabels-iWlhSr0B.js";import"./useButton-BMgOxl6g.js";import"./RSPContexts-BavTxQ8D.js";import"./Text-Bia_ZCxP.js";import"./useDateFormatter-gf8iKFa8.js";import"./useControlledState-Dikg9rpi.js";import"./useLocalizedStringFormatter-BUIk-26D.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CGgiFki9.js";import"./useEvent-BTP9ZQAw.js";import"./getScrollParent-CEbSHGM5.js";import"./scrollIntoView-CRiUVsu9.js";import"./useDescription-Xa_PnaVA.js";import"./VisuallyHidden-B52J-ASA.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CqxSEF9-.js";import"./createLucideIcon-DxQlc1dM.js";import"./chevron-right-Cr8bru6m.js";import"./Button-BdE_pR_p.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DKwzGpb3.js";import"./Heading-BzPmUoAE.js";import"./FieldError-iMDvMznL.js";import"./Text-BDpwDhFd.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
