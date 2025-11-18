import{$ as p,a as m,r as l,j as d}from"./iframe-CRoNsbQO.js";import{C as n}from"./Calendar-BuKsQlW8.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-3ndda5qF.js";import"./Button-km7jXYEC.js";import"./utils-D0ifQBPW.js";import"./clsx-B-dksMZM.js";import"./Hidden-B-LzNKej.js";import"./useFocusRing-DQkUJ1am.js";import"./index-DMJTdnmZ.js";import"./index-D3s2XdJN.js";import"./useLabels-BhNZU1Aw.js";import"./useButton-QNz5bkbl.js";import"./RSPContexts-kFSkNoSC.js";import"./Text-CAsCU6A1.js";import"./useDateFormatter-B1GNjTI4.js";import"./useControlledState-Dj6nb6WC.js";import"./useLocalizedStringFormatter-DvLKTy1S.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-ZCmthKkT.js";import"./useEvent-aJGP5zxw.js";import"./getScrollParent-CsA_2YDI.js";import"./scrollIntoView-BrB1dIDm.js";import"./useDescription-D4n7GTlG.js";import"./VisuallyHidden-BDiINJ_f.js";import"./clsx-Ciqy0D92.js";import"./Button-DGaMX184.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-DIDS4uVQ.js";import"./chevron-right-CsLpT67R.js";import"./Heading-BXuhk9-h.js";import"./FieldError-Dj5cdKz5.js";import"./Text-CrBpTqh-.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const L=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,L as __namedExportsOrder,K as default};
