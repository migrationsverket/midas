import{$ as c,a as m,r as l,j as d}from"./iframe-O6mcP7w5.js";import{C as n}from"./Calendar-DUxDhu-y.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DzJCFIkV.js";import"./Button-BzVOX2eA.js";import"./utils-msXr86i8.js";import"./clsx-B-dksMZM.js";import"./Hidden-BulmN4hD.js";import"./useFocusRing-DFc_QmgH.js";import"./index-5zPEcam6.js";import"./index-DhMeVXuk.js";import"./useLabel-mg3lGotN.js";import"./useLabels-CbW6k4sf.js";import"./useButton-B_n0RrdL.js";import"./RSPContexts-BOI8AU7_.js";import"./Text-D-DusRzY.js";import"./useDateFormatter-BVhdYyzx.js";import"./useControlledState-BRRn0qym.js";import"./useLocalizedStringFormatter-7LpUttql.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CVz4GZ-A.js";import"./useEvent-CVey6hCu.js";import"./getScrollParent-Ccg0N06N.js";import"./scrollIntoView-MyDz4t7d.js";import"./useDescription-Brvp-X9_.js";import"./VisuallyHidden-CVj_UoLV.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CfYg70Uo.js";import"./createLucideIcon-rh706yg9.js";import"./chevron-right-Cc40b8VI.js";import"./Button-I2L11CLA.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Bp0OJ5-n.js";import"./Heading-Dpc1j2ct.js";import"./FieldError-CxFm68nF.js";import"./Text-CWuBzebG.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
