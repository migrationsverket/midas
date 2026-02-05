import{$ as c,a as m,r as l,j as d}from"./iframe-BKVZlbwK.js";import{C as n}from"./Calendar-VV-WAgXa.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D5G1cPai.js";import"./Button-BXNg7Jsx.js";import"./utils-DPuolxVc.js";import"./clsx-B-dksMZM.js";import"./Hidden-BRpSC0Ka.js";import"./useFocusRing-B5vFDtZh.js";import"./index-PkL0TDm3.js";import"./index-BKxFf4CA.js";import"./useLabels-BVLaKNrB.js";import"./useButton-BvRx9rmC.js";import"./RSPContexts-B4IeL1gt.js";import"./Text-B3d4ibdb.js";import"./useDateFormatter-DmR5oxa0.js";import"./useControlledState-DGZkTwEL.js";import"./useLocalizedStringFormatter-B2KN6w1Y.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-v_WCjThL.js";import"./useEvent-vLHKVDXB.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-xVVRlRNW.js";import"./VisuallyHidden-DRvu9CAK.js";import"./clsx-Ciqy0D92.js";import"./Button-CMuF6ttX.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-hBwIhHtL.js";import"./createLucideIcon-DBPtg95-.js";import"./chevron-left-D7JvIep-.js";import"./chevron-right-DzNGtzdm.js";import"./Heading--57vxiPm.js";import"./FieldError-DDgadqx5.js";import"./Text-B3rWnA0b.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
