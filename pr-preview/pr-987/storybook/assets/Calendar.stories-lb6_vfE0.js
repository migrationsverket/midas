import{$ as p,a as m,r as l,j as d}from"./iframe-BGmArfkm.js";import{C as n}from"./Calendar-CGygf3gE.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BmB4ORGC.js";import"./Button-Bt35FmAc.js";import"./utils-De4ycVjz.js";import"./clsx-B-dksMZM.js";import"./Hidden-ZdYniLBZ.js";import"./useFocusRing-C96cr3fv.js";import"./index-Vx53ryqG.js";import"./index-DH2xrgDV.js";import"./useLabels-cL2sXBBB.js";import"./useButton-xm0K22zA.js";import"./RSPContexts-DnW8w3g2.js";import"./Text-Co2FLqMe.js";import"./useDateFormatter-Cq1SThQw.js";import"./useControlledState-C49VPy3O.js";import"./useLocalizedStringFormatter-DYenXjtl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CnuKQKAd.js";import"./useEvent-I3liNdnB.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-D2ktPnwX.js";import"./VisuallyHidden-C6Hru1_9.js";import"./clsx-Ciqy0D92.js";import"./Button-Cxuv1_BK.js";import"./Button.module-CIvIJ45H.js";import"./useLocalizedStringFormatter-BOskpLKS.js";import"./createLucideIcon-gRAp1Zbc.js";import"./chevron-right-DqCiQCCR.js";import"./Heading-D4Y8bukS.js";import"./FieldError-DWc1oqeh.js";import"./Text-B-cFjb91.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
