import{$ as p,a as m,r as l,j as d}from"./iframe-DnZu7tjU.js";import{C as n}from"./Calendar-CknzPJTx.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-EMWMHAE9.js";import"./Button-hkOip--R.js";import"./utils-DvsDfxiZ.js";import"./clsx-B-dksMZM.js";import"./Hidden-MVD45dNy.js";import"./useFocusRing-BVLxtrwi.js";import"./index-pukpAhsd.js";import"./index-DuANshEl.js";import"./useLabels-DTmMdRQq.js";import"./useButton-DmjUv8W1.js";import"./RSPContexts-DMIbGUsk.js";import"./Text-DDckt_LF.js";import"./useDateFormatter-WY1uSiYO.js";import"./useControlledState-6_8Dx77R.js";import"./useLocalizedStringFormatter-C_uLFRgN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B-FXGVf4.js";import"./useEvent-DaspnZHR.js";import"./getScrollParent-R00I75Jc.js";import"./scrollIntoView-CZyBJ9rq.js";import"./useDescription-Carqnp7k.js";import"./VisuallyHidden-C4Nx-Lep.js";import"./clsx-Ciqy0D92.js";import"./Button-062FUKpn.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BX9jEi07.js";import"./createLucideIcon-3-UHYTi-.js";import"./chevron-right-Dvq9pAWg.js";import"./Heading-DPziEPRb.js";import"./FieldError-DdNBbPKU.js";import"./Text-ByAr067h.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Q=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,Q as __namedExportsOrder,L as default};
