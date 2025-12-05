import{$ as p,a as m,r as l,j as d}from"./iframe-4MXvvXb4.js";import{C as n}from"./Calendar-B-yxAL-B.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Cf5hIgAr.js";import"./Button-D7OB0dKW.js";import"./utils-CKUJDRfd.js";import"./clsx-B-dksMZM.js";import"./Hidden-Bs6UcX7L.js";import"./useFocusRing-CGRZ6TsU.js";import"./index-DNLPWJUA.js";import"./index-BNLaGBTn.js";import"./useLabels-BcyACAXj.js";import"./useButton-ELwrz3PB.js";import"./RSPContexts-BC_6Dhn9.js";import"./Text-DEF8XyQD.js";import"./useDateFormatter-Bv-zrLQr.js";import"./useControlledState-Yot6ptr4.js";import"./useLocalizedStringFormatter-uwpQqsQ4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CwGI2VP0.js";import"./useEvent-B7HYYs6V.js";import"./getScrollParent-BeL4ndT4.js";import"./scrollIntoView-wQ_uh2wm.js";import"./useDescription-09Y_4eEe.js";import"./VisuallyHidden-Bltgpije.js";import"./clsx-Ciqy0D92.js";import"./Button-D6HZYVFH.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-S9rOgstl.js";import"./createLucideIcon-DbyMZvJr.js";import"./chevron-right-BEzw7YNw.js";import"./Heading-CdN84TBh.js";import"./FieldError-B07U-Qv-.js";import"./Text-CjfGH0e9.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
