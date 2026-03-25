import{$ as c,a as m,r as l,j as d}from"./iframe-BGuMGxmc.js";import{C as n}from"./Calendar-2omRETnH.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-m70jqOKV.js";import"./Button-C3vJklaf.js";import"./utils-Ca8G7ZGu.js";import"./clsx-B-dksMZM.js";import"./Hidden-Blt3qGK-.js";import"./useFocusRing-DJApir6W.js";import"./index-B9qsJJ_r.js";import"./index-CvgehkYp.js";import"./useLabels-CUg_cq6I.js";import"./useButton-BJrbop6V.js";import"./RSPContexts-CnYkPQTV.js";import"./Text-D1Wivcto.js";import"./useDateFormatter-DmvZBXYc.js";import"./useControlledState-7HU2cwdp.js";import"./useLocalizedStringFormatter-CJMbHzz3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-GiDU_ueo.js";import"./useEvent-B0xi010u.js";import"./getScrollParent-B6QXkZoK.js";import"./scrollIntoView-DUfrCx46.js";import"./useDescription-CkSrBGkd.js";import"./VisuallyHidden-D0q9pbf-.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CYVjhj3U.js";import"./createLucideIcon-YpCIaABn.js";import"./chevron-right-DIGRPHzn.js";import"./Button-ClNKt42i.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Bx3yadO6.js";import"./Heading-Cle64A_X.js";import"./FieldError-CrkbqQXw.js";import"./Text-X11QTVVP.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
