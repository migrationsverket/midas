import{$ as c,a as m,r as l,j as d}from"./iframe-t1Iclc3O.js";import{C as n}from"./Calendar-DUHdvwVB.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-NAg1hbYe.js";import"./Button-Ct7y-I4z.js";import"./utils-Dct5gSIh.js";import"./clsx-B-dksMZM.js";import"./Hidden-CkUuXpVe.js";import"./useFocusRing-BpTBuj6A.js";import"./index-CA7bmWu8.js";import"./index-BvJk8jeb.js";import"./useLabel-oq7jpXGJ.js";import"./useLabels-D-BGXnYn.js";import"./useButton-DGrW7rRJ.js";import"./RSPContexts-UAuwQRBq.js";import"./Text-DMJCfth7.js";import"./useDateFormatter-DMe0k626.js";import"./useControlledState-BnBZk0Xv.js";import"./useLocalizedStringFormatter-Bv8tLnmi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C8Midkw6.js";import"./useEvent-lx3RMHYY.js";import"./getScrollParent-DF09mu8u.js";import"./scrollIntoView-C_BhVA7v.js";import"./useDescription-Dv4_a3bS.js";import"./VisuallyHidden-Mig31NA5.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CBAECzcj.js";import"./createLucideIcon-BnrXW6fJ.js";import"./chevron-right-Chuj0dkD.js";import"./Button-BRu7Bvor.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CiQgcaMc.js";import"./Heading-BhE84gYF.js";import"./FieldError-Dmn3kR1x.js";import"./Text-BsC3oc9y.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
