import{$ as c,a as m,r as l,j as d}from"./iframe-Cu_fcUaC.js";import{C as n}from"./Calendar-D09FFVsd.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-OfMAhtrH.js";import"./Button-BJB-9Zcd.js";import"./utils-mLyOZ5qk.js";import"./clsx-B-dksMZM.js";import"./Hidden-D1QpNxPu.js";import"./useFocusRing-Dsj_Rw-j.js";import"./index-BAEOZiyy.js";import"./index-YTo08owu.js";import"./useLabel-Bo-LBJ9U.js";import"./useLabels-DuVjw0gV.js";import"./useButton-DbfMgMWW.js";import"./RSPContexts-voJfQs_F.js";import"./Text-BcWcM5HD.js";import"./useDateFormatter-BTFrWItx.js";import"./useControlledState-Cc2dWwpP.js";import"./useLocalizedStringFormatter-DyfcmqRi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BBB-HEnP.js";import"./useEvent-CwEPxrZU.js";import"./getScrollParent-DEJhUy4G.js";import"./scrollIntoView-ACzs8MHU.js";import"./useDescription-BXNyutV1.js";import"./VisuallyHidden-Bo9ouMME.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CDx2PRCS.js";import"./createLucideIcon-B_FH30vd.js";import"./chevron-right-CoOKf4NJ.js";import"./Button-DbgphF2R.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Dtw-Zwnl.js";import"./Heading-11L4UqbI.js";import"./FieldError-CcL3qzc2.js";import"./Text-CJt2oElV.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
