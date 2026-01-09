import{$ as p,a as m,r as l,j as d}from"./iframe-BbpEZ5aM.js";import{C as n}from"./Calendar-Dv126D2V.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Ct1klu47.js";import"./Button-CtkizHV8.js";import"./utils-BdrbvCyg.js";import"./clsx-B-dksMZM.js";import"./Hidden-BuJG9RrC.js";import"./useFocusRing-Cb5PiwmC.js";import"./index-B8aZdXXD.js";import"./index-BjFCBoac.js";import"./useLabels-BZZ1Timc.js";import"./useButton-ldcm24KF.js";import"./RSPContexts-x1o6smL2.js";import"./Text-8_j-63AW.js";import"./useDateFormatter-DXu35nAq.js";import"./useControlledState-D9qEZDAW.js";import"./useLocalizedStringFormatter-blmY65Ok.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CgLx_Kf2.js";import"./useEvent-6MY4vP-O.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CuIauOi2.js";import"./VisuallyHidden-kdaoL2HV.js";import"./clsx-Ciqy0D92.js";import"./Button-yWoA7-6W.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-ChzbMIxf.js";import"./createLucideIcon-CPTKChIs.js";import"./chevron-right-BBSqTyAv.js";import"./Heading-BpERB3MI.js";import"./FieldError-BW704g2y.js";import"./Text-j1d70Osr.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
