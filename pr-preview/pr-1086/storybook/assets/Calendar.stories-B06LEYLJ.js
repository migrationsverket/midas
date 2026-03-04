import{$ as c,a as m,r as l,j as d}from"./iframe-DBfoD2U7.js";import{C as n}from"./Calendar-jjEzDIvc.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CPJS8TgG.js";import"./Button-Bp1ZxcfX.js";import"./utils-D_iENdjI.js";import"./clsx-B-dksMZM.js";import"./Hidden-BUhyB_bX.js";import"./useFocusRing-_y_4-82L.js";import"./index-Cn5t1hH6.js";import"./index-Cba1Uww2.js";import"./useLabels-BUVsGCLs.js";import"./useButton-Cw8muoeF.js";import"./RSPContexts-BQx21hqj.js";import"./Text-BwIO0Pwg.js";import"./useDateFormatter-BYzz8qvY.js";import"./useControlledState-_hIvr0Rm.js";import"./useLocalizedStringFormatter-D7V2ZqXE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CsqDLGyN.js";import"./useEvent-tLrG8XwI.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BtveEICz.js";import"./VisuallyHidden-DIm4I4zN.js";import"./clsx-Ciqy0D92.js";import"./Button-mUhJkAyU.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DTqG2xCS.js";import"./createLucideIcon-Bmf1TE0_.js";import"./chevron-left-DcLoAhIi.js";import"./chevron-right-qpp_ixA3.js";import"./Heading-B26-eOYp.js";import"./FieldError-CyN1tUSk.js";import"./Text-D6_QswxK.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const T=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,T as __namedExportsOrder,Q as default};
