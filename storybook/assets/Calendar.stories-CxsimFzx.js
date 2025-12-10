import{$ as p,a as m,r as l,j as d}from"./iframe-BUzSQYPC.js";import{C as n}from"./Calendar-BgyOnArO.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DGHyNQjS.js";import"./Button-OR1vhKiL.js";import"./utils-Btzcj3N0.js";import"./clsx-B-dksMZM.js";import"./Hidden-BnEE9Gsk.js";import"./useFocusRing-YU2uIjvV.js";import"./index-GFhdUWhY.js";import"./index-Co6p1tFH.js";import"./useLabels-cBc_DTaL.js";import"./useButton-DY9W__1v.js";import"./RSPContexts-Cz2k_HNM.js";import"./Text-Bd7HxiMM.js";import"./useDateFormatter-Df5vAMAA.js";import"./useControlledState-DRPCclAj.js";import"./useLocalizedStringFormatter-Df3fxnIS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DNDlFwAF.js";import"./useEvent-Bdun3CtA.js";import"./getScrollParent-BETkQzAi.js";import"./scrollIntoView-DVdSjfTj.js";import"./useDescription-DUYplGlv.js";import"./VisuallyHidden-DxzlT-nw.js";import"./clsx-Ciqy0D92.js";import"./Button-BNm8f_W9.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DGyxLrTg.js";import"./createLucideIcon-DHyF6-IS.js";import"./chevron-right-DgxbLi6y.js";import"./Heading-BAJI1xjf.js";import"./FieldError-Bhel02KK.js";import"./Text-Bj5T73Aj.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
