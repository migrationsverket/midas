import{$ as p,a as m,r as l,j as d}from"./iframe-DzpGAGRs.js";import{C as n}from"./Calendar-C5YbEsnz.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-I2cNO70Z.js";import"./Button-DhsqVPF-.js";import"./utils-DhQZEy20.js";import"./clsx-B-dksMZM.js";import"./Hidden-BamiLY6w.js";import"./useFocusRing-CBMZ-ulq.js";import"./index-RZDpPbNi.js";import"./index-COvdJqzc.js";import"./useLabels-CnU9ekD0.js";import"./useButton-DgcuQT2f.js";import"./RSPContexts-Dqik0rA0.js";import"./Text-DzINHNBQ.js";import"./useDateFormatter-UNlFlOdV.js";import"./useControlledState-Cd4ZWdr1.js";import"./useLocalizedStringFormatter-Chv8IKjN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DdSbS6-G.js";import"./useEvent-CFsLuxvR.js";import"./getScrollParent-DkDG2Qlb.js";import"./scrollIntoView-J6xnNcxw.js";import"./useDescription-_6Itm5b2.js";import"./VisuallyHidden-Bu_FxHbl.js";import"./clsx-Ciqy0D92.js";import"./Button-zwkBBH84.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DclIrRz1.js";import"./createLucideIcon-BvhlWCmI.js";import"./chevron-right-Dm6aSE3Q.js";import"./Heading-CYq4rErI.js";import"./FieldError-BJ6H7Ap3.js";import"./Text-BciY5Tjq.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
