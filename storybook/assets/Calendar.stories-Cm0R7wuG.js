import{$ as p,a as m,r as l,j as d}from"./iframe-DAdLp1QF.js";import{C as n}from"./Calendar-83hk7xon.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-8k6zDBUB.js";import"./Button-fvyThmWu.js";import"./utils-ByUIGDWY.js";import"./clsx-B-dksMZM.js";import"./Hidden-B_XHwn2B.js";import"./useFocusRing-D53tZ_0K.js";import"./index-DoL8Y7w4.js";import"./index-QU8jILku.js";import"./useLabels-Ca5jvo4m.js";import"./useButton-D93eGxVU.js";import"./RSPContexts-D2jy_A4X.js";import"./Text-SxkkCqAs.js";import"./useDateFormatter-D4gQiIVl.js";import"./useControlledState-Cjv7AWlH.js";import"./useLocalizedStringFormatter-CNpWk1vP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DUNV_TzU.js";import"./useEvent-DlPeIjzj.js";import"./getScrollParent-Ijb0Zcwq.js";import"./scrollIntoView-DYxQjL77.js";import"./useDescription-CybEfZFS.js";import"./VisuallyHidden-Ctoge_gF.js";import"./clsx-Ciqy0D92.js";import"./Button-DQbQp0QJ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BzYUMjPp.js";import"./createLucideIcon-DWkxk0NR.js";import"./chevron-right-DYOBRojC.js";import"./Heading-CaYbTykr.js";import"./FieldError-FVxfyxcS.js";import"./Text-CopR-Qh3.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
