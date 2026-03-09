import{$ as c,a as m,r as l,j as d}from"./iframe-CgeuBGg3.js";import{C as n}from"./Calendar-CKL5PpMF.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DYL5FABS.js";import"./Button-D49K8NN3.js";import"./utils-D5ZiOk7c.js";import"./clsx-B-dksMZM.js";import"./Hidden-BuqiSPlJ.js";import"./useFocusRing-CtUB-pVk.js";import"./index-C0DQMcLX.js";import"./index-Dr51d6up.js";import"./useLabels-CcDa7eqk.js";import"./useButton-BafbxBxx.js";import"./RSPContexts-Cmp2aHI0.js";import"./Text-BY_Jfm-B.js";import"./useDateFormatter-DabMtSkg.js";import"./useControlledState-hrYI1rS_.js";import"./useLocalizedStringFormatter-DdY9z82P.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-D3Eg3csO.js";import"./useEvent-DfWlG2fS.js";import"./getScrollParent-BZNtwC6u.js";import"./scrollIntoView-BOtoWgvj.js";import"./useDescription-FPRM_do-.js";import"./VisuallyHidden-nAkuDexq.js";import"./clsx-Ciqy0D92.js";import"./Button-B3bHm7yN.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BVH642Vw.js";import"./createLucideIcon-j5uHxTIE.js";import"./chevron-left-DErcYSsJ.js";import"./chevron-right-DOSHVnqU.js";import"./Heading-BxH2CNNp.js";import"./FieldError-Ck8WwPsT.js";import"./Text-cOijWBlA.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
