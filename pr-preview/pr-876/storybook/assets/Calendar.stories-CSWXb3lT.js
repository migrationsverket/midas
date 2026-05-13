import{$ as c,a as m,r as l,j as d}from"./iframe-XCmPjT_D.js";import{C as n}from"./Calendar-KHxOaADi.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Cb0iRoGc.js";import"./Button-CNsl3901.js";import"./utils-UE4RAygH.js";import"./clsx-B-dksMZM.js";import"./Hidden-YeCUxupi.js";import"./useFocusRing-Ow3seqvj.js";import"./index-BelrfpRG.js";import"./index-BOZEGAbU.js";import"./useLabel-DhxNDKAr.js";import"./useLabels-BQnVbVBu.js";import"./useButton-DKwW11Mp.js";import"./RSPContexts-BqTpYPqw.js";import"./Text-BuJILbtP.js";import"./useDateFormatter-C4r4TQNS.js";import"./useControlledState-CJRuvBEJ.js";import"./useLocalizedStringFormatter-CELL1ivr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BLisHd76.js";import"./useEvent-CkgGcE1e.js";import"./getScrollParent-BZMbo4m2.js";import"./scrollIntoView-Dci8aQFD.js";import"./useDescription-DSdmSZs4.js";import"./VisuallyHidden-DTL2Sb6w.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-B1mU9G3U.js";import"./createLucideIcon-dj1Mp7UM.js";import"./chevron-right-5Z9R-LAl.js";import"./Button-BoCs2oV6.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BRU34m0r.js";import"./Heading-827tCZrs.js";import"./FieldError-Ddp3ZKWY.js";import"./Text-RTx-QT4L.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
