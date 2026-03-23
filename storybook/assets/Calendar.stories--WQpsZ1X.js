import{$ as c,a as m,r as l,j as d}from"./iframe-BDBC-eBH.js";import{C as n}from"./Calendar-BFML2b2-.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Ceab-zGd.js";import"./Button-C0bwvCnL.js";import"./utils-BF3dZFMw.js";import"./clsx-B-dksMZM.js";import"./Hidden-BOnSBQrS.js";import"./useFocusRing-CgfezvW6.js";import"./index-BWNKyBGD.js";import"./index-C54ey478.js";import"./useLabels-C2GA6JVF.js";import"./useButton-CdFak1iR.js";import"./RSPContexts-BqLHknP6.js";import"./Text-DO7PXPW2.js";import"./useDateFormatter-DuEjPkWg.js";import"./useControlledState-BUM3bHka.js";import"./useLocalizedStringFormatter-DJ0cN-Xn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-2dErOR9z.js";import"./useEvent-DajtHI1Q.js";import"./getScrollParent-CCOLkLjE.js";import"./scrollIntoView-DiugVx5R.js";import"./useDescription-BjmAj66h.js";import"./VisuallyHidden-Cj48UhMD.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BLUdtYER.js";import"./createLucideIcon-B9PoiMSr.js";import"./chevron-right-MypHScxs.js";import"./Button-z3f5m6Cn.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-C0PyQwpA.js";import"./Heading-Z8tR6iFR.js";import"./FieldError-ATBv1U6u.js";import"./Text-B8jtlyCQ.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
