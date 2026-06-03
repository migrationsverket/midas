import{$ as c,a as m,r as l,j as d}from"./iframe-B-lTFvoy.js";import{C as n}from"./Calendar-eTZKMZzX.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DSouWWZ3.js";import"./Button-DxSNXM4z.js";import"./utils-BvE7c9kg.js";import"./clsx-B-dksMZM.js";import"./Hidden-DgGj9s0X.js";import"./useFocusRing-1mXKXGvg.js";import"./index-DmPhFD94.js";import"./index-DAnTlNFf.js";import"./useLabel-D3_Mwj4N.js";import"./useLabels-DPXFFgdJ.js";import"./useButton-BpEh7YD9.js";import"./RSPContexts-D3IvaYAD.js";import"./Text-BcmCG7pr.js";import"./useDateFormatter-Bc6-RfT6.js";import"./useControlledState-CblkDfUl.js";import"./useLocalizedStringFormatter-DFJodF-E.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BoHOTqay.js";import"./useEvent-CDFu6uQE.js";import"./getScrollParent-C7d2R0II.js";import"./scrollIntoView-YOf-cX1Z.js";import"./useDescription-C3Cr_Jxc.js";import"./VisuallyHidden-BBaBjIdQ.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DNC5CWSS.js";import"./createLucideIcon-DTdT2pbF.js";import"./chevron-right-tj45psUh.js";import"./Button-aUjqyot5.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Cmv69HRb.js";import"./Heading-B0wvQHWV.js";import"./FieldError-BUQWfKIf.js";import"./Text-C1H4pvzD.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
