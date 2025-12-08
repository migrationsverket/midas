import{$ as p,a as m,r as l,j as d}from"./iframe-BtgDep9R.js";import{C as n}from"./Calendar-HdgQ2WdH.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CM9Ct2qF.js";import"./Button-Dods2sxS.js";import"./utils-19pzbDMK.js";import"./clsx-B-dksMZM.js";import"./Hidden-BGFRCPE7.js";import"./useFocusRing-B0raOtM3.js";import"./index-bg38S8_S.js";import"./index-p62yjGZm.js";import"./useLabels-CH1U4Avs.js";import"./useButton-C3UREKjv.js";import"./RSPContexts-nWIXCX30.js";import"./Text-d4Ws1p9D.js";import"./useDateFormatter-Bw9CDT8E.js";import"./useControlledState-2-dryBsj.js";import"./useLocalizedStringFormatter-DfPHOYdh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-yz7HKj3S.js";import"./useEvent-C_gAsV0I.js";import"./getScrollParent-Bd4AszQN.js";import"./scrollIntoView-aqVd5jYf.js";import"./useDescription-DzQWt6tt.js";import"./VisuallyHidden-BCr4K6QV.js";import"./clsx-Ciqy0D92.js";import"./Button-DEl-3lBg.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dh89wCAf.js";import"./createLucideIcon-Dbtj7BRa.js";import"./chevron-right-J0JUb2z0.js";import"./Heading-ByTu16yF.js";import"./FieldError-CLjQSEjB.js";import"./Text-DSDXzy_7.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
