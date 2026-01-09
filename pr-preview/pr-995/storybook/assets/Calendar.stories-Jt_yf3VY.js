import{$ as p,a as m,r as l,j as d}from"./iframe-Dor4ircF.js";import{C as n}from"./Calendar-Izi9xD4X.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-ceAKGfWP.js";import"./Button-CwntTkhI.js";import"./utils-DMuGTtMS.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dp-Crghp.js";import"./useFocusRing-CI_ISeqX.js";import"./index-BRWlJPJW.js";import"./index-qWyL7EHC.js";import"./useLabels-CpLLuEK0.js";import"./useButton-CwfL82kC.js";import"./RSPContexts-CxfAfl7o.js";import"./Text-B-FP0CmP.js";import"./useDateFormatter-GngAcFL4.js";import"./useControlledState-DvR4e7YP.js";import"./useLocalizedStringFormatter-BWgIDVv3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BKheAyNI.js";import"./useEvent-Bb7RUZ2F.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Drpzw2S9.js";import"./VisuallyHidden-CIjKH1Nn.js";import"./clsx-Ciqy0D92.js";import"./Button-DlFMUaPv.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Hlva-IBM.js";import"./createLucideIcon-Db-iAtDf.js";import"./chevron-right-BjqUsFkp.js";import"./Heading-TEjQ0Xg3.js";import"./FieldError-CwY-5fO_.js";import"./Text-BhYbgXGv.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
