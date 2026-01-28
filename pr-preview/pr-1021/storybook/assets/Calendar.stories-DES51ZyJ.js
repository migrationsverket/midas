import{$ as c,a as m,r as l,j as d}from"./iframe-BUyS91gW.js";import{C as n}from"./Calendar-DZnYUWz6.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BWYtUVtR.js";import"./Button-BFrQimfv.js";import"./utils-DtC5DJlv.js";import"./clsx-B-dksMZM.js";import"./Hidden-DgRACCJZ.js";import"./useFocusRing-BaIAxEeU.js";import"./index-fSOK1slO.js";import"./index-BdrDW8xm.js";import"./useLabels-Tbmfxorq.js";import"./useButton-CnjpyvMJ.js";import"./RSPContexts--MjZDMmy.js";import"./Text-BPqpCryx.js";import"./useDateFormatter-BG8sTB8d.js";import"./useControlledState-pY5KefEA.js";import"./useLocalizedStringFormatter-DVHPDbxU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DgSe21kE.js";import"./useEvent-Cv6pNzgP.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BGG01yMW.js";import"./VisuallyHidden-DWShOfIn.js";import"./clsx-Ciqy0D92.js";import"./Button-Fgf1rOG6.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-p_nb56wi.js";import"./createLucideIcon-B-WbV5NM.js";import"./chevron-left-BF42I8gK.js";import"./chevron-right-DmFB9aJQ.js";import"./Heading-BY0o0N8u.js";import"./FieldError-CFfhbF8H.js";import"./Text-COkIx5pS.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
