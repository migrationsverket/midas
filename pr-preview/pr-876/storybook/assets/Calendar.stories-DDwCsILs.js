import{$ as c,a as m,r as l,j as d}from"./iframe-9chkR4gz.js";import{C as n}from"./Calendar-DqEPZu7F.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BLWcx981.js";import"./Button-D4nJHmzm.js";import"./utils-BlWKHGoz.js";import"./clsx-B-dksMZM.js";import"./Hidden-Bdzqqxyq.js";import"./useFocusRing-WYiiq_Gm.js";import"./index-CHvMuKX3.js";import"./index-N421M2ll.js";import"./useLabel-CMZqh7QI.js";import"./useLabels-Caurk_qr.js";import"./useButton-Bq4HZXfA.js";import"./RSPContexts-CUGomGxG.js";import"./Text-MA5MIJQJ.js";import"./useDateFormatter-DXExem2f.js";import"./useControlledState-CLfBe7O7.js";import"./useLocalizedStringFormatter-D-8D6EPs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Dgn7JV2t.js";import"./useEvent-Cgh5SQda.js";import"./getScrollParent-BfXegyuf.js";import"./scrollIntoView-sky0cFHJ.js";import"./useDescription-DPjbxax8.js";import"./VisuallyHidden-V1FUVsZ9.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-Cd9d5jIo.js";import"./createLucideIcon-BKKhyqi3.js";import"./chevron-right-Cojg72vw.js";import"./Button-Ci--O4pG.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BvTLyPxY.js";import"./Heading-yGrF_JVo.js";import"./FieldError-vZw2hMgY.js";import"./Text-Dp0Bwi6j.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
