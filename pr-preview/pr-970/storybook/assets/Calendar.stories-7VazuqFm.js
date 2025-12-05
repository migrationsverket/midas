import{$ as p,a as m,r as l,j as d}from"./iframe-BvU5xcZ6.js";import{C as n}from"./Calendar-LZGbuODY.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BQOBzZG3.js";import"./Button-C9_RYgB9.js";import"./utils-DNv02rPu.js";import"./clsx-B-dksMZM.js";import"./Hidden-DHY5Q1Kt.js";import"./useFocusRing-vZw9Dvay.js";import"./index-Bef40-aw.js";import"./index-Dc_kFy69.js";import"./useLabels-FmS0ggiN.js";import"./useButton-B8BiSZmd.js";import"./RSPContexts-BulTZf7c.js";import"./Text-DFigioyQ.js";import"./useDateFormatter-D-XK9kw4.js";import"./useControlledState-PQZLqL14.js";import"./useLocalizedStringFormatter-BKZa2vq4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Bp9VIFz5.js";import"./useEvent-Bz8l31iO.js";import"./getScrollParent-D7Iam-X6.js";import"./scrollIntoView-D3VgVWtP.js";import"./useDescription-BClDbhSX.js";import"./VisuallyHidden-C8Yn3KEk.js";import"./clsx-Ciqy0D92.js";import"./Button-Cv7hnaWU.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B52eqB_B.js";import"./createLucideIcon-Bd04jM4n.js";import"./chevron-right-8oejyJUL.js";import"./Heading-BC0J-Zc1.js";import"./FieldError-C_jAntIO.js";import"./Text-evR5nmIf.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
