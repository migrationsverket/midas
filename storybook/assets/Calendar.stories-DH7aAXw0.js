import{$ as c,a as m,r as l,j as d}from"./iframe-lVehiq6l.js";import{C as n}from"./Calendar-DoEoEInd.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BoW5FKd4.js";import"./Button-CYmCkrOz.js";import"./utils-mNJ9Z0MW.js";import"./clsx-B-dksMZM.js";import"./Hidden-CQ6hLYuq.js";import"./useFocusRing--_5FTCU2.js";import"./index-BYr4OlSN.js";import"./index-IBTB5hiH.js";import"./useLabel-BJ5LbRsC.js";import"./useLabels-BVtbuBE4.js";import"./useButton-CaovbWyL.js";import"./RSPContexts-DMhdXzo5.js";import"./Text-BTYS5fVW.js";import"./useDateFormatter-IBo_FfXY.js";import"./useControlledState-BySGjGY5.js";import"./useLocalizedStringFormatter-Bj44o9Xo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-D2DQ6hng.js";import"./useEvent-E09xkLUE.js";import"./getScrollParent-DZNwOYHo.js";import"./scrollIntoView-_wY1R8QT.js";import"./useDescription-CymLEEwh.js";import"./VisuallyHidden-C5EMcuEJ.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BIC9zQl8.js";import"./createLucideIcon-D1OyaQLn.js";import"./chevron-right-BuF2Tso8.js";import"./Button-Dp2V6GGG.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-qtrOBw-Q.js";import"./Heading-DZYBL7Gl.js";import"./FieldError-BiJGHbcs.js";import"./Text-CB3b7It2.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
