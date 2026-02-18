import{$ as c,a as m,r as l,j as d}from"./iframe-DGcUF2qp.js";import{C as n}from"./Calendar-BxoFnbRL.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DJK-8q0o.js";import"./Button-9W9ESKk6.js";import"./utils-C-g9IEHW.js";import"./clsx-B-dksMZM.js";import"./Hidden-DOf4aCVT.js";import"./number-DfkVkf0F.js";import"./useFocusRing-C3JE--XH.js";import"./index-Bg1abCEO.js";import"./index-6FNMycov.js";import"./useLabels-BWET_vJS.js";import"./useButton-CxyzWvKY.js";import"./RSPContexts-DKg32s8o.js";import"./Text-DL34Z6xI.js";import"./useDateFormatter-B9yDi8Uf.js";import"./useControlledState-BY4jsp46.js";import"./useLocalizedStringFormatter-M0xxk-YJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C0_gSjEd.js";import"./useEvent-C8sq29ir.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-SjgewDGU.js";import"./VisuallyHidden-CFai959P.js";import"./clsx-Ciqy0D92.js";import"./Button-BDoKvS7o.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-E6uNiOFA.js";import"./createLucideIcon-vaKNso9Q.js";import"./chevron-left-BT6d7E2P.js";import"./chevron-right-B5LHHfL4.js";import"./Heading-Bft_YpUD.js";import"./FieldError-BuaTWgbZ.js";import"./Text-DxpETNh1.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
