import{$ as p,a as m,r as l,j as d}from"./iframe-BCXW1_i0.js";import{C as n}from"./Calendar-B1aOAjMx.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BW6_tJa-.js";import"./Button-DY4JEqdp.js";import"./utils-BQj-xKr5.js";import"./clsx-B-dksMZM.js";import"./Hidden-CDiDpivh.js";import"./useFocusRing-Cbg95h9l.js";import"./index-CG2AamNc.js";import"./index-CJ47wOzG.js";import"./useLabels-BdTTmJ_V.js";import"./useButton-V3C9Q0iI.js";import"./RSPContexts-DUSTzirW.js";import"./Text-BRLrffF_.js";import"./useDateFormatter-BXqgUNsf.js";import"./useControlledState-B_lkycFk.js";import"./useLocalizedStringFormatter-CNw7cMsH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BPAm7CtN.js";import"./useEvent-BLUB4_Bw.js";import"./getScrollParent-BkFzyuEm.js";import"./scrollIntoView-B_Jw_5aw.js";import"./useDescription-DXlhDdlP.js";import"./VisuallyHidden-Ca69gFn7.js";import"./clsx-Ciqy0D92.js";import"./Button-C_naedx-.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-C1fxLZgu.js";import"./createLucideIcon-BmOKhA97.js";import"./chevron-right-BQzrlfMi.js";import"./Heading-iBuxhWN6.js";import"./FieldError-zUMBVfs0.js";import"./Text-DwKMZYPU.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
