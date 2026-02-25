import{$ as m,a as c,r as l,j as d}from"./iframe-BTWMpxaw.js";import{C as n}from"./Calendar-C12434WP.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DwIWEWiF.js";import"./Button-CAgd8sZK.js";import"./utils-C3lx9DX-.js";import"./useObjectRef-CQ0wbjO8.js";import"./clsx-B-dksMZM.js";import"./Hidden-BQDZ_Wq1.js";import"./number-DfkVkf0F.js";import"./useFocusRing-D_JbvpzL.js";import"./useFocusable-DroJBjVA.js";import"./index-BcRiH35A.js";import"./index-BRI9nXbv.js";import"./useLabels-Qrrl1VgB.js";import"./useButton-BrhFQfMI.js";import"./RSPContexts-CgrWNIj5.js";import"./Text-AwkOgpRf.js";import"./useDateFormatter-CEgxfk4A.js";import"./useControlledState-CRbmL-GT.js";import"./useLocalizedStringFormatter-CCWRThSu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BnRbzrEI.js";import"./useEvent-BLDn_e3Q.js";import"./getScrollParent-DRdm8xm-.js";import"./scrollIntoView-Q7175gbP.js";import"./useDescription-DVX_PCr4.js";import"./VisuallyHidden-BZ8ApsH8.js";import"./clsx-Ciqy0D92.js";import"./Button-B7QanPQQ.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BCu2gt1L.js";import"./createLucideIcon-D3byJH39.js";import"./chevron-left-CX06scyS.js";import"./chevron-right-BTMiuEa7.js";import"./Heading-CyoT9rFN.js";import"./FieldError-CapQEyCl.js";import"./Text-XH9vDvn5.js";const X={component:n,render:s=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...s})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new m(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},t={args:{isDateUnavailable:s=>c(s,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isDateUnavailable: date => isWeekend(date, 'sv-SE')
  }
}`,...t.parameters?.docs?.source}}};const Y=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,t as UnavailableWeekends,Y as __namedExportsOrder,X as default};
