import{$ as c,a as m,r as l,j as d}from"./iframe-yDDvrWXA.js";import{C as n}from"./Calendar-Bjxq3rkj.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C4Ix26B2.js";import"./Button-BKPyufTm.js";import"./utils-g-F492tU.js";import"./clsx-B-dksMZM.js";import"./Hidden-DwvTSKmX.js";import"./useFocusRing-B8EF4-Pv.js";import"./index-C7Z2RoQQ.js";import"./index-D5oXpZJ0.js";import"./useLabel-HsQrSNDJ.js";import"./useLabels-BAb68OIq.js";import"./useButton-C0YlumWP.js";import"./RSPContexts-BHMRgdEM.js";import"./Text-lgWPOHfn.js";import"./useDateFormatter-36VC0rr2.js";import"./useControlledState-DZNSaZzu.js";import"./useLocalizedStringFormatter-Dx4LUfLz.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-vD26oWjk.js";import"./useEvent-DV78v9xt.js";import"./getScrollParent-0zuGuC-1.js";import"./scrollIntoView-n_Hd7XfS.js";import"./useDescription-BnCt_ups.js";import"./VisuallyHidden-B50WqWni.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-ttMItmwm.js";import"./createLucideIcon-BAD1RTf1.js";import"./chevron-right-1514xBhw.js";import"./Button-DrFRlYBv.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CwuLAbHo.js";import"./Heading-63_DxrY4.js";import"./FieldError-CjrZ6id8.js";import"./Text-zKZPeGrs.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
