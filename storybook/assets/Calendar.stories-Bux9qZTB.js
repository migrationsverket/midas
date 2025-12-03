import{$ as p,a as m,r as l,j as d}from"./iframe-CCQfngwq.js";import{C as n}from"./Calendar-CX6WKETK.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BP8L84Sw.js";import"./Button-5oXIvCJG.js";import"./utils-CgsB8-M-.js";import"./clsx-B-dksMZM.js";import"./Hidden-CbIGjTgf.js";import"./useFocusRing-DrqjHVCw.js";import"./index-ByVvlwyD.js";import"./index-Cw_5Evfx.js";import"./useLabels-ChtSCMDo.js";import"./useButton-C3KQprnb.js";import"./RSPContexts-5wOIRLjy.js";import"./Text-Cw_qglJK.js";import"./useDateFormatter-WzsrlRFu.js";import"./useControlledState-D-jefNLs.js";import"./useLocalizedStringFormatter-fWmNxkyX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CTcA_92y.js";import"./useEvent-DvrGnkNh.js";import"./getScrollParent-EuR23wxh.js";import"./scrollIntoView-BGFG9DOp.js";import"./useDescription-Cp__ppAa.js";import"./VisuallyHidden-QnJstid8.js";import"./clsx-Ciqy0D92.js";import"./Button-Bab2JnFs.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C-1-g-Qi.js";import"./createLucideIcon-mKithfj1.js";import"./chevron-right-BEGRSO1X.js";import"./Heading-BbgRD-Zw.js";import"./FieldError-Bdi6QzIL.js";import"./Text-Cc3exSDh.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
