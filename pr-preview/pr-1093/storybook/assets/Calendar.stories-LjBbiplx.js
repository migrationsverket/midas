import{$ as c,a as m,r as l,j as d}from"./iframe-DsfFtxS2.js";import{C as n}from"./Calendar-D0HZFu6K.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BAcojW2L.js";import"./Button-BUGcuGOU.js";import"./utils-CiHeKsB_.js";import"./clsx-B-dksMZM.js";import"./Hidden-Bs3ILcuK.js";import"./useFocusRing-1z_ufVt_.js";import"./index-DgLlfILw.js";import"./index-DnB7KTmW.js";import"./useLabels-MWmyC4Dm.js";import"./useButton-D8CT0FKr.js";import"./RSPContexts-jD7fw_oN.js";import"./Text-DAqpMgoy.js";import"./useDateFormatter-qG5661-x.js";import"./useControlledState-DnlDaLL1.js";import"./useLocalizedStringFormatter-BJ5DWpkF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-bv54uylV.js";import"./useEvent-Ck1U2V-h.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-D22BvyuU.js";import"./VisuallyHidden-DfQN_1Bp.js";import"./clsx-Ciqy0D92.js";import"./Button-4tH0viW2.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DZ4cvEMe.js";import"./createLucideIcon-B2R5tymB.js";import"./chevron-left-DHtYVdnw.js";import"./chevron-right-DfgabBPs.js";import"./Heading-CG1qb6l2.js";import"./FieldError-87EUhy5h.js";import"./Text-BpQb7gs6.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
