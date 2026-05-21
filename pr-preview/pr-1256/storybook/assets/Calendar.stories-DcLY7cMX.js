import{$ as c,a as m,r as l,j as d}from"./iframe-DcpPkcOs.js";import{C as n}from"./Calendar-CdV-TfuU.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-_VilWgUP.js";import"./Button-Ct2gBhbQ.js";import"./utils-CXltNwJi.js";import"./clsx-B-dksMZM.js";import"./Hidden-DC53IPGT.js";import"./useFocusRing-C7oRwYv0.js";import"./index-B5JE_P2G.js";import"./index-BObIBW6r.js";import"./useLabel-CzBIgrEB.js";import"./useLabels-L34wTJFT.js";import"./useButton-1kWau5nf.js";import"./RSPContexts-BUPHzZx4.js";import"./Text-gI7geXGi.js";import"./useDateFormatter-DpUU9oAG.js";import"./useControlledState-CqQWqGWO.js";import"./useLocalizedStringFormatter-CuAPqpgo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Bnr8u_MG.js";import"./useEvent-BNdFNVTO.js";import"./getScrollParent-Ck1J4Oi-.js";import"./scrollIntoView-DIZ8_NQ2.js";import"./useDescription-BvGFSiIZ.js";import"./VisuallyHidden-WVnnRw_3.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BEk0x6zu.js";import"./createLucideIcon-CmxgNO3A.js";import"./chevron-right-C9d4dUPg.js";import"./Button-Bt5uFCnx.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Dei12d-p.js";import"./Heading-B7voFT4a.js";import"./FieldError-Cl9GqMGN.js";import"./Text-BV9SFXbp.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
