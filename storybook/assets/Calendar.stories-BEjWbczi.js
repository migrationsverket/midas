import{$ as c,a as m,r as l,j as d}from"./iframe-Dmk7YWbP.js";import{C as n}from"./Calendar-BZu7rnQb.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DMW11ZgX.js";import"./Button-F5fRRQra.js";import"./utils-CZU1a0io.js";import"./clsx-B-dksMZM.js";import"./Hidden-j21WNwyS.js";import"./useFocusRing-DQsZ5BW0.js";import"./index-D7ra6ojE.js";import"./index-CGyxxXDN.js";import"./useLabel-DM6ovL82.js";import"./useLabels-BCoT3OdJ.js";import"./useButton-C4S2lX_8.js";import"./RSPContexts-BkluUXe_.js";import"./Text-C-958akl.js";import"./useDateFormatter-BlvMX0cc.js";import"./useControlledState-C7rqhk2c.js";import"./useLocalizedStringFormatter-BZ6VtZ8V.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BPBIoCea.js";import"./useEvent-DnGv8QpP.js";import"./getScrollParent-CKQLrhSn.js";import"./scrollIntoView-B790B2bQ.js";import"./useDescription-aAvmV4Vy.js";import"./VisuallyHidden-CW18ePiJ.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-Ds2Uuur3.js";import"./createLucideIcon-Dl46zayF.js";import"./chevron-right-yOcYt-m1.js";import"./Button-BkclXew1.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BIZu7Yxw.js";import"./Heading-DrckR7wJ.js";import"./FieldError-Blg6FnKj.js";import"./Text--asL3Zcb.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
