import{$ as c,a as m,r as l,j as d}from"./iframe-COAE3Z9t.js";import{C as n}from"./Calendar-BNSgJgwd.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Dja_-2mi.js";import"./Button-DkXMbdmz.js";import"./utils-CJTCHx3j.js";import"./clsx-B-dksMZM.js";import"./Hidden-DT0_4oHH.js";import"./useFocusRing-DgA4QWCK.js";import"./index-B8ayM9Q4.js";import"./index-D6Rzgd1u.js";import"./useLabels-BGror0wH.js";import"./useButton-CNbG0xHv.js";import"./RSPContexts-DDx5Z7r8.js";import"./Text-CHPBuoo7.js";import"./useDateFormatter-U4UNEL8M.js";import"./useControlledState-CTgjAYDB.js";import"./useLocalizedStringFormatter-DNGn7vgv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-p_Xgx5u-.js";import"./useEvent-DxDv-_7a.js";import"./getScrollParent-BVX3VPRd.js";import"./scrollIntoView-HBj0czqw.js";import"./useDescription-CznxHAqb.js";import"./VisuallyHidden-Wni-KnVe.js";import"./clsx-Ciqy0D92.js";import"./Button-Bowambor.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-D1UulV0U.js";import"./createLucideIcon-DDrtG7WW.js";import"./chevron-left-DF2CrOQE.js";import"./chevron-right-DnIs2txa.js";import"./Heading-BQQ2Aro1.js";import"./FieldError-BUClrU9H.js";import"./Text-D5jwfrrb.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
