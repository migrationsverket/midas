import{$ as c,a as m,r as l,j as d}from"./iframe-Cg9cst3Z.js";import{C as n}from"./Calendar-CGuGAUta.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-cS8JTrNN.js";import"./Button-ou8EhBUQ.js";import"./utils-D2II4bp7.js";import"./clsx-B-dksMZM.js";import"./Hidden-BgIlWTMH.js";import"./useFocusRing-tXHDCFm3.js";import"./index-BFb9kRGB.js";import"./index-DWerqO7l.js";import"./useLabels-CiePX7Dn.js";import"./useButton-DC2n-s3O.js";import"./RSPContexts-CP6-3Q2F.js";import"./Text-B_9OfGMe.js";import"./useDateFormatter-BVNmPGUd.js";import"./useControlledState-L5_oq_SX.js";import"./useLocalizedStringFormatter-D4h7c2FO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C5Jk9Uqx.js";import"./useEvent-CEsrahCK.js";import"./getScrollParent-D0UAKGdc.js";import"./scrollIntoView-DwU_eyNu.js";import"./useDescription-BzGroFUq.js";import"./VisuallyHidden-CqMj_RBf.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-J8pgFvJO.js";import"./createLucideIcon-DCEeRogg.js";import"./chevron-right-Brt2Ncq9.js";import"./Button-rHVBUcPU.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CHcVYRW-.js";import"./Heading-Csha1cFf.js";import"./FieldError-VvIdynkJ.js";import"./Text-Bie4Jf82.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
