import{$ as p,a as m,r as l,j as d}from"./iframe-Cjrlzh3H.js";import{C as n}from"./Calendar-C-IX8c53.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Enr0Dyyo.js";import"./Button-DMFEHXPJ.js";import"./utils-CuTptj1-.js";import"./clsx-B-dksMZM.js";import"./Hidden-C0Y7LQUz.js";import"./useFocusRing-1xU_Qusa.js";import"./index-DXVX_pBX.js";import"./index-DF80V0P0.js";import"./useLabels-VB_Q-W40.js";import"./useButton-BTUGUDje.js";import"./RSPContexts-CXMSQIsh.js";import"./Text-BIGnKIDS.js";import"./useDateFormatter-BsGao346.js";import"./useControlledState-D7BOsOAW.js";import"./useLocalizedStringFormatter-BG0SYhYk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-D2QSKNdT.js";import"./useEvent-JWBWCRar.js";import"./getScrollParent-BJm2tcrQ.js";import"./scrollIntoView-DB_apnjb.js";import"./useDescription-Cz0FZt-N.js";import"./VisuallyHidden-Cg1wAZAe.js";import"./clsx-Ciqy0D92.js";import"./Button-Cenw66Ks.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-BkgNquZM.js";import"./chevron-right-CSF6VAsB.js";import"./Heading-4T_V5vUB.js";import"./FieldError-CX25NBUn.js";import"./Text-CEpVYdQN.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
