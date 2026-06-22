import{$ as c,a as m,r as l,j as d}from"./iframe-A34tc1ma.js";import{C as n}from"./Calendar-C6KoZqEN.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DqLZozea.js";import"./Button-CJGwxkR8.js";import"./utils-iaIw3nix.js";import"./clsx-B-dksMZM.js";import"./Hidden-Bx_LiQEx.js";import"./useFocusRing-OnJtBabX.js";import"./index-Q8iWR-k3.js";import"./index-nqYRH_fx.js";import"./useLabel-B5C-WKT7.js";import"./useLabels-m8TWtq0-.js";import"./useButton-Dk5W4KfY.js";import"./RSPContexts-BvXmiLjq.js";import"./Text-PcmClRY0.js";import"./useDateFormatter-CeLX3NOx.js";import"./useControlledState-dFFgK4uz.js";import"./useLocalizedStringFormatter-CAgZjAaW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CclDi6Bj.js";import"./useEvent-DAxeeYk2.js";import"./getScrollParent-BfgMvCMm.js";import"./scrollIntoView-DqSfMztI.js";import"./useDescription-CkN0W4le.js";import"./VisuallyHidden-DFcjAmAE.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-gEUNK8Kw.js";import"./createLucideIcon-Bnflbpu4.js";import"./chevron-right-Bl80hl94.js";import"./Button-CEptxBDM.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-6FVavbxu.js";import"./Heading-DONAk9Wf.js";import"./FieldError-DMBLsclX.js";import"./Text-Bo9OR3IW.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
