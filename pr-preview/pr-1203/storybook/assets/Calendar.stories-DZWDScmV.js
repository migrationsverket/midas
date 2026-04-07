import{$ as c,a as m,r as l,j as d}from"./iframe-BObKWO8P.js";import{C as n}from"./Calendar-DecqoPB_.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BibFmrRf.js";import"./Button-Bj1Gx374.js";import"./utils-L1ZXEAM0.js";import"./clsx-B-dksMZM.js";import"./Hidden-pBI9L9bQ.js";import"./useFocusRing-CEJP2sKk.js";import"./index-DZLGwHwk.js";import"./index-w-ZTYn4u.js";import"./useLabel-CCF_4gB4.js";import"./useLabels-CPcqYQYg.js";import"./useButton-0-s8uA0b.js";import"./RSPContexts--YEt9orp.js";import"./Text-B0SIJ0ar.js";import"./useDateFormatter-BLdKbgWx.js";import"./useControlledState-2AKkTK1v.js";import"./useLocalizedStringFormatter-DdHSxoKc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-R1-tQbDT.js";import"./useEvent-BEm0Eqbv.js";import"./getScrollParent-BEOCR9gy.js";import"./scrollIntoView-CMGg4YQW.js";import"./useDescription-CgE9sFBH.js";import"./VisuallyHidden-C2-WAH_L.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-XCLWEejy.js";import"./createLucideIcon-Bq0_1Yjp.js";import"./chevron-right-B3lPm-7Q.js";import"./Button-CF3n8BCq.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Bt1-Aj9O.js";import"./Heading-xn6cGSx1.js";import"./FieldError-C85eAV5x.js";import"./Text-BL0-OeDh.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
