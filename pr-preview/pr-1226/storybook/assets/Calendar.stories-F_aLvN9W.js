import{$ as c,a as m,r as l,j as d}from"./iframe-DAlGZfQW.js";import{C as n}from"./Calendar-bf0471FO.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-WrnGGeAs.js";import"./Button-DEU34lA6.js";import"./utils-C0mXnx3L.js";import"./clsx-B-dksMZM.js";import"./Hidden-o3xiVHpT.js";import"./useFocusRing-aL1wDNV0.js";import"./index-ZTPDuQtA.js";import"./index-DeUwXnwW.js";import"./useLabel-Bq6n8TDb.js";import"./useLabels-oTyQAigb.js";import"./useButton-DzfauRnx.js";import"./RSPContexts-ogBeYVaG.js";import"./Text-LSJ9RRHV.js";import"./useDateFormatter-DOMPD5Q4.js";import"./useControlledState-CvHTtUWm.js";import"./useLocalizedStringFormatter-Db4mYuAv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-YgxQwquL.js";import"./useEvent-CF3bDdPT.js";import"./getScrollParent-CPI0vVZ2.js";import"./scrollIntoView-DhLsBgUV.js";import"./useDescription-7yGeAH-h.js";import"./VisuallyHidden-CtB5gR65.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CEEzxIxn.js";import"./createLucideIcon-D-D7lNm8.js";import"./chevron-right-C4-FWr4k.js";import"./Button-xgyBGP3u.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Bb6HaDEh.js";import"./Heading-7wa5xHuv.js";import"./FieldError-CkH1bdUQ.js";import"./Text-BD2SYZAb.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
