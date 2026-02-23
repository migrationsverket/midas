import{$ as c,a as m,r as l,j as d}from"./iframe-BUDtIrHl.js";import{C as n}from"./Calendar-BUiBDb2T.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C5nmxTDm.js";import"./Button-IDkkm_2W.js";import"./utils-AGwlrZ_4.js";import"./clsx-B-dksMZM.js";import"./Hidden-BlaUoiVl.js";import"./useFocusRing-CjCkUQdP.js";import"./index-DONLKseB.js";import"./index-CGdvhCdV.js";import"./useLabels-B8ED9S2U.js";import"./useButton-Dcc_HHbb.js";import"./RSPContexts-Cdws8AZx.js";import"./Text-CbEfxdsU.js";import"./useDateFormatter-Xg9Wz7KQ.js";import"./useControlledState-D9bcyMir.js";import"./useLocalizedStringFormatter-BWOiSsrR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-5mv_ydJw.js";import"./useEvent-BeMeyqUJ.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-C-xHEeiw.js";import"./VisuallyHidden-Dvn9bM_l.js";import"./clsx-Ciqy0D92.js";import"./Button-DLSCCVY_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B9NIs4hG.js";import"./createLucideIcon-BWsYPG1T.js";import"./chevron-left-BuhrECXV.js";import"./chevron-right-gHuDTw1d.js";import"./Heading-BMB407cu.js";import"./FieldError-B6xJ2_09.js";import"./Text-Bdd1tqPS.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
