import{$ as c,a as m,r as l,j as d}from"./iframe-ZU-VlsmC.js";import{C as n}from"./Calendar-B_ljzqDF.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BGEOQr7F.js";import"./Button-CeMV39iZ.js";import"./utils-CwYPazgz.js";import"./clsx-B-dksMZM.js";import"./Hidden-DuFt3Wpn.js";import"./useFocusRing-DeDg3Wm1.js";import"./index-BJjzhiid.js";import"./index-B-c5mNFM.js";import"./useLabels-t8k_Uoah.js";import"./useButton-C2Rk3x3w.js";import"./RSPContexts-yZiAzvBR.js";import"./Text-Bk-OwW6a.js";import"./useDateFormatter-XD-ClNm-.js";import"./useControlledState-CLKMAA4K.js";import"./useLocalizedStringFormatter-DKJg5-Yp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-9hmtaLtn.js";import"./useEvent-TDbxnCp3.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-aAdr_LiL.js";import"./VisuallyHidden-CGc8iUr3.js";import"./clsx-Ciqy0D92.js";import"./Button-CkFCptv_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-9gOm9LYJ.js";import"./createLucideIcon-zhU_S5bE.js";import"./chevron-left-SCobvRwM.js";import"./chevron-right-BgnLWZUm.js";import"./Heading-C2qvWc5u.js";import"./FieldError-CW123qup.js";import"./Text-Der4VdMW.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
