import{$ as c,a as m,r as l,j as d}from"./iframe-BU6kIGzE.js";import{C as n}from"./Calendar-Dz7MDcqc.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Bfu5MUKN.js";import"./Button-DOwpnfPC.js";import"./utils-DwBB38ip.js";import"./clsx-B-dksMZM.js";import"./Hidden-CGqS0Jzf.js";import"./useFocusRing-Dvp7gJRw.js";import"./index-Dv6U3VwT.js";import"./index-DyZImytF.js";import"./useLabels-DikblKAC.js";import"./useButton-DOAxkkBc.js";import"./RSPContexts-BRqazcIV.js";import"./Text-JypUyMeF.js";import"./useDateFormatter-DXhylDb2.js";import"./useControlledState-CCRLFJ5Q.js";import"./useLocalizedStringFormatter-E1-lnqHI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BsYc8DOC.js";import"./useEvent-Bzt2Vkll.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-B-6CLxOX.js";import"./VisuallyHidden-BjLN-Bea.js";import"./clsx-Ciqy0D92.js";import"./Button-DUCzx4_4.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dkmyjsow.js";import"./createLucideIcon-BFaI5vBG.js";import"./chevron-left-CrviUcGu.js";import"./chevron-right-BKcLxAPw.js";import"./Heading-Z4JZUrow.js";import"./FieldError-CUk6ZN6c.js";import"./Text-CQspy15V.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
