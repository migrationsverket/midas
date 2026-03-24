import{$ as c,a as m,r as l,j as d}from"./iframe-CuGoBoGQ.js";import{C as n}from"./Calendar-DqAqe86b.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Dx4WxTvQ.js";import"./Button-IcW5J6Fh.js";import"./utils-RwFFfgQr.js";import"./clsx-B-dksMZM.js";import"./Hidden-DY115Oyb.js";import"./useFocusRing-7bYJ39Cr.js";import"./index-BccAwutK.js";import"./index-Bov1f0DO.js";import"./useLabels-BByCvXff.js";import"./useButton-CJN9PhJp.js";import"./RSPContexts-CvhTtm28.js";import"./Text-CH2OEfXa.js";import"./useDateFormatter-AcEM3FpT.js";import"./useControlledState-SyqHFLy3.js";import"./useLocalizedStringFormatter-BG2zkY5m.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DbKMRg_S.js";import"./useEvent-CK9pGwso.js";import"./getScrollParent-Dk_EDX2n.js";import"./scrollIntoView-CMecGSk7.js";import"./useDescription-DnBOZ_LL.js";import"./VisuallyHidden-PGxXka93.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DeXROHJw.js";import"./createLucideIcon-COJKu3Gj.js";import"./chevron-right-4wlcyjT0.js";import"./Button-hgAtNtsw.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Xr2nB7Pj.js";import"./Heading-BtcVrrav.js";import"./FieldError-CnIE1vat.js";import"./Text-CKD5St-o.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
