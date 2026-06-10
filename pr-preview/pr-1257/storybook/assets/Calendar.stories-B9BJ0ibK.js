import{$ as c,a as m,r as l,j as d}from"./iframe-BEEFzEsx.js";import{C as n}from"./Calendar-DOAfnvLp.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DMlSntCk.js";import"./Button-DEUQgxtQ.js";import"./utils-BVGeTo1z.js";import"./clsx-B-dksMZM.js";import"./Hidden-C5MrPpGY.js";import"./useFocusRing-DayYpa6h.js";import"./index-8CayshPQ.js";import"./index-icYaoe9T.js";import"./useLabel-BuYW4wvI.js";import"./useLabels-B32s2Ncd.js";import"./useButton-lpD_KbJB.js";import"./RSPContexts-BmjfNHwO.js";import"./Text-C3TPO5Ck.js";import"./useDateFormatter-CPj4SmG8.js";import"./useControlledState-DWXRJogA.js";import"./useLocalizedStringFormatter-CLVweFRJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-dwDNTmeU.js";import"./useEvent-DC72q5eP.js";import"./getScrollParent-DF6Cs9JC.js";import"./scrollIntoView-z3uFmj1G.js";import"./useDescription-Cvt0OA1S.js";import"./VisuallyHidden-CkEbrnwS.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DNhlBkiR.js";import"./createLucideIcon-DyvpJvxd.js";import"./chevron-right-BPQt4sMu.js";import"./Button-BTzHjp2C.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BOrzEOxe.js";import"./Heading-Bqj6Dsy8.js";import"./FieldError-HGo-eDX1.js";import"./Text-UbV7blhr.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
