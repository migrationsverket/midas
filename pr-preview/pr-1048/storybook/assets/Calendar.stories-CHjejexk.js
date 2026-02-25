import{$ as m,a as c,r as l,j as d}from"./iframe-0ay5Cl7Z.js";import{C as n}from"./Calendar-FAqjCVJy.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CHJZ3dIY.js";import"./Button-DxAruj7U.js";import"./utils-OwhIF6Yv.js";import"./useObjectRef-DG4zbPWe.js";import"./clsx-B-dksMZM.js";import"./Hidden-BzPJJaE1.js";import"./number-DfkVkf0F.js";import"./useFocusRing-BCxb_ufh.js";import"./useFocusable-B634M_Fb.js";import"./index-9qv7Fem8.js";import"./index-U-aVmNqW.js";import"./useLabels-BQsB-eC9.js";import"./useButton-Dk5PjSpe.js";import"./RSPContexts-CAeNAO0k.js";import"./Text-DfthMNVx.js";import"./useDateFormatter-BH5GcXKP.js";import"./useControlledState-BZfBuZ3A.js";import"./useLocalizedStringFormatter-Bev7EFEw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-q6vMMHpi.js";import"./useEvent-5vUs9lWK.js";import"./getScrollParent-Bg5c39wC.js";import"./scrollIntoView-DBszQ3_a.js";import"./useDescription-f161JRhm.js";import"./VisuallyHidden-DQAFa958.js";import"./clsx-Ciqy0D92.js";import"./Button-C9_6wCAg.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CA3dvWhn.js";import"./createLucideIcon-C-V0PVLC.js";import"./chevron-left-CTHFlObZ.js";import"./chevron-right-tkAibjab.js";import"./Heading-CLuq4JDV.js";import"./FieldError-BsAQJ2uy.js";import"./Text-BGuljUD0.js";const X={component:n,render:s=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...s})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new m(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},t={args:{isDateUnavailable:s=>c(s,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isDateUnavailable: date => isWeekend(date, 'sv-SE')
  }
}`,...t.parameters?.docs?.source}}};const Y=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,t as UnavailableWeekends,Y as __namedExportsOrder,X as default};
