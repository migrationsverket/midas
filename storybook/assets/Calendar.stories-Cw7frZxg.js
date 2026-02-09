import{$ as c,a as m,r as l,j as d}from"./iframe-BWdkMAjO.js";import{C as n}from"./Calendar-CCys0fKA.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CN_z9KPg.js";import"./Button-DbXwylTQ.js";import"./utils-C4rGLdQa.js";import"./clsx-B-dksMZM.js";import"./Hidden-DoytNLvt.js";import"./useFocusRing-Dz8KRmRs.js";import"./index-PBQ0q_wK.js";import"./index-B_yrj6ZN.js";import"./useLabels-f4Sfov9b.js";import"./useButton-CRIQl1ZU.js";import"./RSPContexts-rbDLAAYz.js";import"./Text-88YPWSN7.js";import"./useDateFormatter-sSmqHNOk.js";import"./useControlledState-tNlRhvlF.js";import"./useLocalizedStringFormatter-CsTrlIxe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-ltpDZr1e.js";import"./useEvent--2GNkBiv.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BWeYbpkJ.js";import"./VisuallyHidden-DDe5r2jE.js";import"./clsx-Ciqy0D92.js";import"./Button-VYBWmn37.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B72kiSfm.js";import"./createLucideIcon-UbHQFer_.js";import"./chevron-left-BaZFGfnA.js";import"./chevron-right-B1qJhpZL.js";import"./Heading-D2h7lSET.js";import"./FieldError-DicB1PMu.js";import"./Text-CClrU0hd.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
