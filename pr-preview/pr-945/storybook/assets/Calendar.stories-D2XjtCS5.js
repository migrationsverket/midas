import{$ as p,a as m,r as l,j as d}from"./iframe-no9CntvV.js";import{C as n}from"./Calendar-M9YeAhfq.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CSOku3p6.js";import"./Button-Deq-w1A_.js";import"./utils-B6AasQkX.js";import"./clsx-B-dksMZM.js";import"./Hidden-CFcjd9Ye.js";import"./useFocusRing-pveG4jA-.js";import"./index-DvXDbTU2.js";import"./index-DEYREeZj.js";import"./useLabels-BIymkZE6.js";import"./useButton-C4GsfKwP.js";import"./RSPContexts-Cef-5t5s.js";import"./Text-BpKcKBtM.js";import"./useDateFormatter-BHWDaFuZ.js";import"./useControlledState-DxYknQDv.js";import"./useLocalizedStringFormatter-BdwuPI9T.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BjdrVpTZ.js";import"./useEvent-DgT1RkyW.js";import"./getScrollParent-5zfS10KG.js";import"./scrollIntoView-BVD0fCXS.js";import"./useDescription-Cspf3mhS.js";import"./VisuallyHidden-BIFAjTF4.js";import"./clsx-Ciqy0D92.js";import"./Button-LFMtXpU7.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-Dz0tCMy5.js";import"./createLucideIcon-DGuN_Rm2.js";import"./chevron-right-BrfZjN8c.js";import"./Heading-Bbqsli7f.js";import"./FieldError-sDyen7ng.js";import"./Text-BGa0l0Rh.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
