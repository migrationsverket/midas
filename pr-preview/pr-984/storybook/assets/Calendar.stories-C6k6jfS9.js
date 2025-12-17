import{$ as p,a as m,r as l,j as d}from"./iframe-BvrUArBU.js";import{C as n}from"./Calendar-97JtM6_K.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CkdpFtG1.js";import"./Button-D7XroJJX.js";import"./utils-C_lYNAOR.js";import"./clsx-B-dksMZM.js";import"./Hidden-ClBR-m0d.js";import"./useFocusRing-wAugWugz.js";import"./index-DcrVl_28.js";import"./index-DsaZsgX_.js";import"./useLabels-BzNgkpLP.js";import"./useButton-BGbib_XA.js";import"./RSPContexts-CN08SUZd.js";import"./Text-DY3vNu9D.js";import"./useDateFormatter-B4cJoQLZ.js";import"./useControlledState-Oju3a5HH.js";import"./useLocalizedStringFormatter-D-QUy42V.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect--uB1QXrO.js";import"./useEvent-mzwxisiy.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BcB0MmhA.js";import"./VisuallyHidden-Dgw8VeyT.js";import"./clsx-Ciqy0D92.js";import"./Button-opugJ3Pw.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CGIaKyQn.js";import"./createLucideIcon-CC3ddONH.js";import"./chevron-right-C3xw_iGw.js";import"./Heading-ZB9RXTIw.js";import"./FieldError-BP3wi4fG.js";import"./Text-DjPIzR5K.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
