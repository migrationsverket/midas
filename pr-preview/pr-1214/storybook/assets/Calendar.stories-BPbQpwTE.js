import{$ as c,a as m,r as l,j as d}from"./iframe-B22LvWbW.js";import{C as n}from"./Calendar-TT4KAo0E.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-B646CYMf.js";import"./Button-DKfTRRv_.js";import"./utils-BoCAfGQj.js";import"./clsx-B-dksMZM.js";import"./Hidden-BOXGnL4u.js";import"./useFocusRing-COZ-KdCj.js";import"./index-COlz_oEn.js";import"./index-Ce19_x3I.js";import"./useLabel-BMEjxuHj.js";import"./useLabels-CG8ZEWvO.js";import"./useButton-D-9O1J5B.js";import"./RSPContexts-C7KIxgyf.js";import"./Text-igIwftJt.js";import"./useDateFormatter-CjSFsYHf.js";import"./useControlledState-IKfTJ6C0.js";import"./useLocalizedStringFormatter-Cax5_603.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CbOYgt9h.js";import"./useEvent-DcI05E6D.js";import"./getScrollParent-BHXVU5eY.js";import"./scrollIntoView-7H8hj9e6.js";import"./useDescription-CWKmEZRS.js";import"./VisuallyHidden-BkHBxjny.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BokmCpJC.js";import"./createLucideIcon-B8tzovcT.js";import"./chevron-right-CVTs5vbT.js";import"./Button-sJK-n8WP.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Bx-OZ9xC.js";import"./Heading-CoAlJEvR.js";import"./FieldError-CaBPVaas.js";import"./Text-C_6Wg08c.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
