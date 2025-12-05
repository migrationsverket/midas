import{$ as p,a as m,r as l,j as d}from"./iframe-Hg8hxll6.js";import{C as n}from"./Calendar-D9M1Q6OG.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Cig3Q2Qg.js";import"./Button-D6s1rIHb.js";import"./utils-DkBAlQaP.js";import"./clsx-B-dksMZM.js";import"./Hidden-CW8eyMJF.js";import"./useFocusRing-BHhaWYLO.js";import"./index-C9pUtnOL.js";import"./index-QbllegrG.js";import"./useLabels-Dhhk-JlN.js";import"./useButton-C_20Yccn.js";import"./RSPContexts-CUKDrdkA.js";import"./Text-g8ihhCC7.js";import"./useDateFormatter-sc9_WgCv.js";import"./useControlledState-B9N8h_ty.js";import"./useLocalizedStringFormatter-BuwzLtaA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CnNoGesY.js";import"./useEvent-DcZb6QTG.js";import"./getScrollParent-D5TELs7H.js";import"./scrollIntoView-QWj_UH7z.js";import"./useDescription-DDUPD-SO.js";import"./VisuallyHidden-DEAPyNKO.js";import"./clsx-Ciqy0D92.js";import"./Button-BHcDCTkB.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Kb9GHVVg.js";import"./createLucideIcon-CorD8qZx.js";import"./chevron-right-Cw7KkfWD.js";import"./Heading-BLhkKBPG.js";import"./FieldError-BnM-2-2F.js";import"./Text-CbJwjeA3.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
