import{$ as c,a as m,r as l,j as d}from"./iframe-apXpK-Ym.js";import{C as n}from"./Calendar-Cd4hn3iS.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DsCmLB1g.js";import"./Button-B7ztBAPt.js";import"./utils-D_IsDdxh.js";import"./clsx-B-dksMZM.js";import"./Hidden-Bx4MJY4P.js";import"./useFocusRing-DKK5dDPM.js";import"./index-DJoHNShF.js";import"./index-FrU2UnB4.js";import"./useLabels-C0ZZhp1J.js";import"./useButton-CEwHI7GR.js";import"./RSPContexts-faUp0Odp.js";import"./Text-C8sRdSzE.js";import"./useDateFormatter-6KgdH-AU.js";import"./useControlledState-Be_pRaEQ.js";import"./useLocalizedStringFormatter-LKHWluuZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CBOcqnz5.js";import"./useEvent-Cb7uf1PC.js";import"./getScrollParent-KYVriqsz.js";import"./scrollIntoView-CTB_aNM2.js";import"./useDescription-WAW3EvIG.js";import"./VisuallyHidden-DkYm7gZi.js";import"./clsx-Ciqy0D92.js";import"./Button-B3oZe3e3.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-RrN5kh6g.js";import"./createLucideIcon-BVTX869z.js";import"./chevron-left-BY0iaZ52.js";import"./chevron-right-C2RkmpzK.js";import"./Heading-TOojHhu6.js";import"./FieldError-D5-eAkFz.js";import"./Text-i6zD5ogA.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
