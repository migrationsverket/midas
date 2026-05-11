import{$ as c,a as m,r as l,j as d}from"./iframe-CWKpWNkk.js";import{C as n}from"./Calendar-QT7r1dh2.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-COUz-eSB.js";import"./Button-apqjWUoz.js";import"./utils-DZaHz_Vy.js";import"./clsx-B-dksMZM.js";import"./Hidden-bt019v0w.js";import"./useFocusRing-CpL5jV2W.js";import"./index-B6G90j2w.js";import"./index-ky1MVl1j.js";import"./useLabel-CVerH1Jx.js";import"./useLabels-CpFnq5uL.js";import"./useButton-DMvYi67o.js";import"./RSPContexts-BCpmha9C.js";import"./Text-C7LaV_aB.js";import"./useDateFormatter-CJMSfOQB.js";import"./useControlledState-DvoS3sKo.js";import"./useLocalizedStringFormatter-CzLna1TA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BAAXu-b_.js";import"./useEvent-Bvf1pRIU.js";import"./getScrollParent-8ZOlHmZ1.js";import"./scrollIntoView-EiYcHJPI.js";import"./useDescription-DoPJm1n-.js";import"./VisuallyHidden-CUqCo7Kt.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BkFFDxcd.js";import"./createLucideIcon-DmuvpfBU.js";import"./chevron-right-q1oSoAFv.js";import"./Button-WdsjujPh.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-JVYCQbQZ.js";import"./Heading-D-lMrc2Q.js";import"./FieldError-CQ-FvnYz.js";import"./Text-Ds_oVnWP.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
