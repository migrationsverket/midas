import{$ as c,a as m,r as l,j as d}from"./iframe-BBOYsnjU.js";import{C as n}from"./Calendar-B290ZBp9.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-5bh1MKZH.js";import"./Button-DDjB2733.js";import"./utils-j2mhf0J5.js";import"./clsx-B-dksMZM.js";import"./Hidden-aOpMhQep.js";import"./useFocusRing-DZUzyHgy.js";import"./index-rPoChojA.js";import"./index-Cf35xK9l.js";import"./useLabels-DQMV1_Yc.js";import"./useButton-Ftv_ctu3.js";import"./RSPContexts-D5OeRAAV.js";import"./Text-CZBI6ZSH.js";import"./useDateFormatter-BkxG00xN.js";import"./useControlledState-CQ0df-ju.js";import"./useLocalizedStringFormatter-CDq5Lh88.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BgSzQoT1.js";import"./useEvent-BilFL-U7.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-C0eI7hlZ.js";import"./VisuallyHidden-CPK8rn6e.js";import"./clsx-Ciqy0D92.js";import"./Button-CyQgtJ3P.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D1Kiw22P.js";import"./createLucideIcon-Ce2Qhn1H.js";import"./chevron-left-DYuIfP5R.js";import"./chevron-right-tBVb0sfs.js";import"./Heading-BGkTIoGQ.js";import"./FieldError-DVSJgZFJ.js";import"./Text-DzOdr-51.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
