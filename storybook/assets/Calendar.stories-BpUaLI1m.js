import{$ as c,a as m,r as l,j as d}from"./iframe-DI52Qlo4.js";import{C as n}from"./Calendar-CzCOpZMH.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CebZQhBi.js";import"./Button-eSR4bLK4.js";import"./utils-urtsDcnm.js";import"./clsx-B-dksMZM.js";import"./Hidden-CscT1sly.js";import"./useFocusRing-2JaqZA15.js";import"./index-BMA7stMc.js";import"./index-Dz8_67dy.js";import"./useLabel-Btef6QY2.js";import"./useLabels-DmZ1Q95o.js";import"./useButton-C_swT-ux.js";import"./RSPContexts-CrMRLfkl.js";import"./Text-C_RzDhoB.js";import"./useDateFormatter-zpaPf9ou.js";import"./useControlledState-CLoU2XYC.js";import"./useLocalizedStringFormatter-C62DnPYV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BY7lbnG-.js";import"./useEvent-BfgA6E-w.js";import"./getScrollParent-BHx5XlTQ.js";import"./scrollIntoView-hSq_mdzL.js";import"./useDescription-58WIc14O.js";import"./VisuallyHidden-Ct-vZpQ3.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-D-2-TgR8.js";import"./createLucideIcon-Bf3dyCX1.js";import"./chevron-right-CPMFpMfv.js";import"./Button-3POgXEp-.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-B0GJ_bM4.js";import"./Heading-B05gLXhy.js";import"./FieldError-CSuZWyFo.js";import"./Text-D2edba9r.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
