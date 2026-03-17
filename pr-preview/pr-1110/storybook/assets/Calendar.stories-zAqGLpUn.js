import{$ as c,a as m,r as l,j as d}from"./iframe-BLfzYH9C.js";import{C as n}from"./Calendar-D5A2jfGw.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Ii4aKCbp.js";import"./Button-CMX4o17j.js";import"./utils-D0dfH4vr.js";import"./clsx-B-dksMZM.js";import"./Hidden-N269CFB0.js";import"./useFocusRing-F01J-ZUp.js";import"./index-BEL0ZsXZ.js";import"./index-DhCXTl7z.js";import"./useLabels-Wx4YnUYv.js";import"./useButton-Bx_5EIaY.js";import"./RSPContexts-BNbJSQvo.js";import"./Text-Cc2e18q6.js";import"./useDateFormatter-BQ61S6Kf.js";import"./useControlledState-BRpuf71A.js";import"./useLocalizedStringFormatter-Cc04N7q5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-SBRqOirX.js";import"./useEvent-xhNamUK9.js";import"./getScrollParent-pMGfvvbY.js";import"./scrollIntoView-B8nL968g.js";import"./useDescription-Dwgsbzew.js";import"./VisuallyHidden-_5qjtK7j.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CVa_W4Oz.js";import"./createLucideIcon-CD_jUR-R.js";import"./chevron-right-BOdNzswE.js";import"./Button-sSCuqLNu.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-mYyUkQYg.js";import"./Heading-tqTcM_ey.js";import"./FieldError-BSEuC_KV.js";import"./Text-56NGX4CE.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
