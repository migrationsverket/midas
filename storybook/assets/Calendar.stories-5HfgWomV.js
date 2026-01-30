import{$ as c,a as m,r as l,j as d}from"./iframe-Ci13ld7O.js";import{C as n}from"./Calendar-CLmG3Q9f.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-B2SZGkHX.js";import"./Button-YvURXki4.js";import"./utils-Cd0LQrts.js";import"./clsx-B-dksMZM.js";import"./Hidden-BWsE9twn.js";import"./useFocusRing-DnhJhnzY.js";import"./index-yP8H7dy3.js";import"./index-7gUS6nb-.js";import"./useLabels-BR_CPQ7_.js";import"./useButton-BJUfgxuB.js";import"./RSPContexts-CFalA0-F.js";import"./Text-BVmiYMQy.js";import"./useDateFormatter-BwBK42Sl.js";import"./useControlledState-BPjdf_b0.js";import"./useLocalizedStringFormatter-D47gSq9M.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DlSpsD90.js";import"./useEvent-C4x00_RR.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-4N3M-fgK.js";import"./VisuallyHidden-C1I07cqa.js";import"./clsx-Ciqy0D92.js";import"./Button-fdROVxmt.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Ys_jkXo3.js";import"./createLucideIcon-Bj58XDKs.js";import"./chevron-left-B9aPTSvC.js";import"./chevron-right-CHkgr05s.js";import"./Heading-DYM89nr5.js";import"./FieldError-CNS2gCFK.js";import"./Text-BPRonoR2.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
