import{$ as c,a as m,r as l,j as d}from"./iframe-Nwmt74ZK.js";import{C as n}from"./Calendar-C1jgBmCh.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Bf5DZ-Bi.js";import"./Button-BFe_Cqcu.js";import"./utils-C6s6aSRX.js";import"./clsx-B-dksMZM.js";import"./Hidden-BPf52IcM.js";import"./useFocusRing-CWypq6Zx.js";import"./index-ch-f0Bx3.js";import"./index-BhWzPHH5.js";import"./useLabel-NM3EoEuU.js";import"./useLabels-BWJGA9gI.js";import"./useButton-DPlFKcS8.js";import"./RSPContexts-DNNsF2wO.js";import"./Text-C173mZfn.js";import"./useDateFormatter-BMQQTpop.js";import"./useControlledState-BkVOv_aE.js";import"./useLocalizedStringFormatter-BJ5VKpXB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Ba-XvRAf.js";import"./useEvent-BjT0dJCf.js";import"./getScrollParent-C5s_m2ho.js";import"./scrollIntoView-BcBxafTP.js";import"./useDescription-NCT_P-H8.js";import"./VisuallyHidden-CtXXaRnR.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-D7H7BQjR.js";import"./createLucideIcon-BM-CznMN.js";import"./chevron-right-CsMSYcBa.js";import"./Button-BFrhdIAu.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-C2TFJ0GM.js";import"./Heading-BhJocmar.js";import"./FieldError-Br06WdKh.js";import"./Text-BsCHJ-9I.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
