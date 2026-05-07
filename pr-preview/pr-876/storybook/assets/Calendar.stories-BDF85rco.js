import{$ as c,a as m,r as l,j as d}from"./iframe-Bb_VlPo9.js";import{C as n}from"./Calendar-rz4G2hAk.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-rUJnUipx.js";import"./Button-DwR9JkjB.js";import"./utils-2r_62JIY.js";import"./clsx-B-dksMZM.js";import"./Hidden-Da5yr2Rv.js";import"./useFocusRing-DQRmwydT.js";import"./index-DAEy4VqV.js";import"./index-BxkaVGNc.js";import"./useLabel-gulxf9DU.js";import"./useLabels-CsGVZDGi.js";import"./useButton-yJmLtQfA.js";import"./RSPContexts-DMtGcFC9.js";import"./Text-D7Tr2OQH.js";import"./useDateFormatter-ByUlOYmT.js";import"./useControlledState-CFQUuuzt.js";import"./useLocalizedStringFormatter-BINmwfC_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Bm-5DJ5V.js";import"./useEvent-u95MDZQv.js";import"./getScrollParent-BlCILjnb.js";import"./scrollIntoView-BG7Sd968.js";import"./useDescription-C9KC-F2o.js";import"./VisuallyHidden-7RIQbTv5.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DwHE2pNl.js";import"./createLucideIcon-a3otmfa0.js";import"./chevron-right-CS4FSX6G.js";import"./Button-BoP38GQz.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-D3GzHYKP.js";import"./Heading-D41PspzV.js";import"./FieldError-CbhfVIv0.js";import"./Text-DTJEuclf.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
