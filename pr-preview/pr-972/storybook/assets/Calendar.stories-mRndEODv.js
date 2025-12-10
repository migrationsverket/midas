import{$ as p,a as m,r as l,j as d}from"./iframe-Ix5wRpaN.js";import{C as n}from"./Calendar-DHC2drNA.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DTjv9AsP.js";import"./Button-BM7g1M5L.js";import"./utils-IjPZU40W.js";import"./clsx-B-dksMZM.js";import"./Hidden-CNH6e1Wd.js";import"./useFocusRing-DQ3B9kj8.js";import"./index-BxboPkxI.js";import"./index-DhXNeZr5.js";import"./useLabels-Duwc-TYD.js";import"./useButton-Bj416gmr.js";import"./RSPContexts-Ci7SZAye.js";import"./Text-C--26gLT.js";import"./useDateFormatter-DXJbGASy.js";import"./useControlledState-B8ejMBKU.js";import"./useLocalizedStringFormatter-D-Y0AvCi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-ti05f6Ng.js";import"./useEvent-CMFoSART.js";import"./getScrollParent-DvjOSPHQ.js";import"./scrollIntoView-Dghqke3L.js";import"./useDescription-TqfBx-LN.js";import"./VisuallyHidden-CXRQ0hU3.js";import"./clsx-Ciqy0D92.js";import"./Button-DyCCzjyo.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DOQfTjJs.js";import"./createLucideIcon-YU44cn6f.js";import"./chevron-right-D5RGAfWO.js";import"./Heading-DOXf98rg.js";import"./FieldError-BZLcbguk.js";import"./Text-B11VOrpZ.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Q=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,Q as __namedExportsOrder,L as default};
