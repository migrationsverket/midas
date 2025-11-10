import{$ as p,a as m,r as l,j as d}from"./iframe-1jCyVKTR.js";import{C as n}from"./Calendar-DQWtBdZ1.js";import"./preload-helper-Ct5FWWRu.js";import"./CalendarHeader-KKHTYmIS.js";import"./Button-BBbyz38O.js";import"./utils-DZdh9xsP.js";import"./clsx-B-dksMZM.js";import"./Hidden-BeQfraet.js";import"./useFocusRing-B8WDFENw.js";import"./index-Cfj3l_Mf.js";import"./index-O3MJa0Qz.js";import"./useLabels-BVuAqKI_.js";import"./useButton-BuSAxlcg.js";import"./RSPContexts-C6SYwle_.js";import"./Text-FQYgckzw.js";import"./useDateFormatter-D2OO3IpF.js";import"./useControlledState-RwIOrToL.js";import"./useLocalizedStringFormatter-C9x2tCAa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Ha6xC4TF.js";import"./useEvent-1SLLKsgm.js";import"./getScrollParent-OYNJJ5NF.js";import"./scrollIntoView-sIBFCGIW.js";import"./useDescription-BaOnPnVQ.js";import"./VisuallyHidden-ynQwwP3K.js";import"./clsx-Ciqy0D92.js";import"./Button-DaHqgoFJ.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-D-FkpzSt.js";import"./chevron-right-BG9tqYYX.js";import"./Heading-xa_uGpIM.js";import"./FieldError-D9fldg2V.js";import"./Text-CLTLikYF.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const L=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,L as __namedExportsOrder,K as default};
