import{$ as p,a as m,r as l,j as d}from"./iframe-B1XQ_l8d.js";import{C as n}from"./Calendar-D4DzoxrV.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-h4_xlqHh.js";import"./Button-6O4twiKj.js";import"./utils-DPtwDUAf.js";import"./clsx-B-dksMZM.js";import"./Hidden-BU4k3NAN.js";import"./useFocusRing-DgKSykKC.js";import"./index-BZkYwFdY.js";import"./index-DmzzjCRS.js";import"./useLabels-BAmMi-sg.js";import"./useButton-BsGmSg5A.js";import"./RSPContexts-DGbPHIgI.js";import"./Text-D_Txx_2-.js";import"./useDateFormatter-DF6Exo9k.js";import"./useControlledState-B22hZPAG.js";import"./useLocalizedStringFormatter-DI9f3P1n.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CvsLi_Vq.js";import"./useEvent-DY4S-wnp.js";import"./getScrollParent-Dx3G8DHG.js";import"./scrollIntoView-2fhJfOJs.js";import"./useDescription-C_YDLdIX.js";import"./VisuallyHidden-C1ErRwO4.js";import"./clsx-Ciqy0D92.js";import"./Button-CRoKTtLi.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C-0R5Nhb.js";import"./createLucideIcon-DWbs9rHd.js";import"./chevron-right-f-C6LhRf.js";import"./Heading-DCd0e_XD.js";import"./FieldError-COBE7U4N.js";import"./Text-BFkBeHhq.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
