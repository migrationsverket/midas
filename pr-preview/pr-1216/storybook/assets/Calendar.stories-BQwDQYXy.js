import{$ as c,a as m,r as l,j as d}from"./iframe-BgN3T3xs.js";import{C as n}from"./Calendar-pJNeW6Rj.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DrkkVdbH.js";import"./Button-BtxXkeGG.js";import"./utils-Cy9VbIrx.js";import"./clsx-B-dksMZM.js";import"./Hidden-BUpoh45I.js";import"./useFocusRing-s6LcsVmw.js";import"./index-C8VIyOAM.js";import"./index-DDvZmCCm.js";import"./useLabel-C7Safkp7.js";import"./useLabels-CtvG29M_.js";import"./useButton-CYBdLk3p.js";import"./RSPContexts-Bpqk6zEL.js";import"./Text-Cws1TLos.js";import"./useDateFormatter-BF7ccnFG.js";import"./useControlledState-DuMP6pst.js";import"./useLocalizedStringFormatter-B0LCJo7R.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CNkAaxoy.js";import"./useEvent-Ca5NannD.js";import"./getScrollParent-tQwdPnh6.js";import"./scrollIntoView-AzFj4YLb.js";import"./useDescription-5FEPrfMM.js";import"./VisuallyHidden-DwUK2ATG.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-Cu54JhLC.js";import"./createLucideIcon-BePQROhA.js";import"./chevron-right-DAPuFZ7S.js";import"./Button-zGEEwAU5.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-B8VZY1gF.js";import"./Heading-zTI0ET9q.js";import"./FieldError-Cg97d-Xo.js";import"./Text-Bm_qFAHe.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
