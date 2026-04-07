import{$ as c,a as m,r as l,j as d}from"./iframe-Cnprf77l.js";import{C as n}from"./Calendar-CND5zriG.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C-oLdoHc.js";import"./Button-C9qpCnHp.js";import"./utils-BAknv1n_.js";import"./clsx-B-dksMZM.js";import"./Hidden-CtzSMGYR.js";import"./useFocusRing-BbKkuYRW.js";import"./index-D131wgQu.js";import"./index-DinabbhG.js";import"./useLabel-VHxyrYwA.js";import"./useLabels-D2bRDv09.js";import"./useButton-Dj6JkoG-.js";import"./RSPContexts-Cw9ibUso.js";import"./Text-TETOR_cU.js";import"./useDateFormatter-pXwYV-NB.js";import"./useControlledState-bPVMsSoD.js";import"./useLocalizedStringFormatter-BM9Op5Of.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BsAcsXmS.js";import"./useEvent-CbxKKYwp.js";import"./getScrollParent-BJmogAva.js";import"./scrollIntoView-DxnzOPwB.js";import"./useDescription-1c_yFidr.js";import"./VisuallyHidden-O1yJF_LA.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-D37SyEBc.js";import"./createLucideIcon-BhAvpesv.js";import"./chevron-right-Dd_pWTY4.js";import"./Button-CSDIchjo.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-TTFjkzUm.js";import"./Heading-BKZ1VG_K.js";import"./FieldError-37LT6hKT.js";import"./Text-xSTWmp3z.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
