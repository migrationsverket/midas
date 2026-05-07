import{$ as c,a as m,r as l,j as d}from"./iframe-drf9EhAh.js";import{C as n}from"./Calendar-D3yeShr3.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DUnexchZ.js";import"./Button-uX5YcsyE.js";import"./utils-DcVi9P2n.js";import"./clsx-B-dksMZM.js";import"./Hidden-DCsyu9It.js";import"./useFocusRing-CFnRXdWt.js";import"./index-DYwtvWTx.js";import"./index-C8RswtkR.js";import"./useLabel-Nvs3avqK.js";import"./useLabels-CghwtOHR.js";import"./useButton-BPOukTAc.js";import"./RSPContexts-CdnNEEoB.js";import"./Text-4jcbiO_v.js";import"./useDateFormatter-CEWQmX5m.js";import"./useControlledState-PtQwVjVx.js";import"./useLocalizedStringFormatter-B8W8LNuc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DxJx9bl3.js";import"./useEvent-DDZO5sYT.js";import"./getScrollParent-C25lSkvK.js";import"./scrollIntoView-DPcz4qGT.js";import"./useDescription-DoT_EJq_.js";import"./VisuallyHidden-S3B-3ASH.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CutIAkjr.js";import"./createLucideIcon-ZHG_RQ_P.js";import"./chevron-right-CShMRSmA.js";import"./Button-CKcwfDVm.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-IFaLmUck.js";import"./Heading-BUSolncq.js";import"./FieldError-Csn4LdNH.js";import"./Text-BGu5cWKN.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
