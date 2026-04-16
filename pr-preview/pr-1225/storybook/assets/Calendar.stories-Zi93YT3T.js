import{$ as c,a as m,r as l,j as d}from"./iframe-BsjwZNBI.js";import{C as n}from"./Calendar-Chn_2qPb.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CejpTcDi.js";import"./Button-RMvP7Zi7.js";import"./utils-DYyBIiF3.js";import"./clsx-B-dksMZM.js";import"./Hidden-B7nyiEix.js";import"./useFocusRing-C6pIr3Cw.js";import"./index-3FCY3Hw8.js";import"./index-mMukGJMX.js";import"./useLabel-zdvU6Gzq.js";import"./useLabels-BUVWty__.js";import"./useButton-IYi6gdVO.js";import"./RSPContexts-DsjC0Jzf.js";import"./Text-CAl4ECWA.js";import"./useDateFormatter-DtVWxWpv.js";import"./useControlledState-DSo337QI.js";import"./useLocalizedStringFormatter-uzycqsy8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-cquah7Gu.js";import"./useEvent-Ce5NelAS.js";import"./getScrollParent-Ciimyvfo.js";import"./scrollIntoView-Dj0SH0aW.js";import"./useDescription-BBYDL9dC.js";import"./VisuallyHidden-BLVEBQnn.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BfTdugsy.js";import"./createLucideIcon-wuciem56.js";import"./chevron-right-CfTr7nnh.js";import"./Button--2JTIhzL.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DjpujwKI.js";import"./Heading-CF6sSghd.js";import"./FieldError-D8jlKqgQ.js";import"./Text-lI4j22eJ.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
