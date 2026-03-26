import{$ as c,a as m,r as l,j as d}from"./iframe-I-T_H5J_.js";import{C as n}from"./Calendar-CYeUOZ7F.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CB_pfitm.js";import"./Button-C5239-Pe.js";import"./utils-JproU_nw.js";import"./clsx-B-dksMZM.js";import"./Hidden-BMWDbIRC.js";import"./useFocusRing-B9IqJ9Mt.js";import"./index-CYZt27Wv.js";import"./index-B8pVpPqH.js";import"./useLabel-QpkB0RGM.js";import"./useLabels-DPpJmx2A.js";import"./useButton-Bv3qVFH-.js";import"./RSPContexts-CMvVC2hR.js";import"./Text-BJ8cMGkE.js";import"./useDateFormatter-C7xLWciI.js";import"./useControlledState-B5eahPl_.js";import"./useLocalizedStringFormatter-BsAjlIoO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-urv6qtix.js";import"./useEvent-DneLHAtr.js";import"./getScrollParent-9iE4PQDL.js";import"./scrollIntoView-BTHLtI1M.js";import"./useDescription-BbwaY706.js";import"./VisuallyHidden-ImRnGBY4.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CAygZVHc.js";import"./createLucideIcon-BVI9IRTp.js";import"./chevron-right-DYK62ycE.js";import"./Button-B83Ld0RX.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-B0a8KkB4.js";import"./Heading-9Wui4UDu.js";import"./FieldError-BblABd-b.js";import"./Text-DpvJioBU.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
