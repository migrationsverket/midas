import{$ as c,a as m,r as l,j as d}from"./iframe-Bc-UjTRz.js";import{C as n}from"./Calendar-CVZGMbKg.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Bf-oQVv8.js";import"./Button-BBbybcMx.js";import"./utils-CIlBOTwB.js";import"./clsx-B-dksMZM.js";import"./Hidden-Bobixe9k.js";import"./useFocusRing-DmMd8vo8.js";import"./index-Dv-GYJsK.js";import"./index-qwqwtO2K.js";import"./useLabel-BT5HgTPM.js";import"./useLabels-DPsB-EZ0.js";import"./useButton-CiKofbei.js";import"./RSPContexts-BrVLX_Kr.js";import"./Text-FaStHPve.js";import"./useDateFormatter-DbQZoL8M.js";import"./useControlledState-Dz98cjw-.js";import"./useLocalizedStringFormatter-CjnzGiN8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CXdA3QNj.js";import"./useEvent-CjNBBIKs.js";import"./getScrollParent-DeC6xe2r.js";import"./scrollIntoView-CTyn5EWZ.js";import"./useDescription-axt_AZYR.js";import"./VisuallyHidden-De98nctX.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BcYuPBY5.js";import"./createLucideIcon-Cvy5MTlk.js";import"./chevron-right-2PA8gxia.js";import"./Button-Ddjv6hkf.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CK7mP7jw.js";import"./Heading-riE0Xj9K.js";import"./FieldError-pc1xIYti.js";import"./Text-EmoXsUsF.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
