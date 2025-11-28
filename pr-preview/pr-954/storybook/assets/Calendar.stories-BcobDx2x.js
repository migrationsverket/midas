import{$ as p,a as m,r as l,j as d}from"./iframe-B_gFPxCX.js";import{C as n}from"./Calendar-DeCRuu1G.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DZWFYVwE.js";import"./Button-Dh_N8FAk.js";import"./utils-Du2m8pi6.js";import"./clsx-B-dksMZM.js";import"./Hidden-OS0LVvpv.js";import"./useFocusRing-B_f_9ZIB.js";import"./index-BmP6HVCy.js";import"./index-Bk1XN2WI.js";import"./useLabels-CKCRW4zl.js";import"./useButton-CXzrlu1a.js";import"./RSPContexts-DOLdHzZj.js";import"./Text-Cy6zixyL.js";import"./useDateFormatter-Dztl6b8P.js";import"./useControlledState-x6V7bWVY.js";import"./useLocalizedStringFormatter-DfaT6UQu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-GhZxI3TO.js";import"./useEvent-C8IsYOHI.js";import"./getScrollParent-Cy2bhqUS.js";import"./scrollIntoView-vBXGo_Pf.js";import"./useDescription-BgYJLdYq.js";import"./VisuallyHidden-Ds2FNi3l.js";import"./clsx-Ciqy0D92.js";import"./Button-CMmiPFF7.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DSk1S1l2.js";import"./createLucideIcon-C8OA8uCW.js";import"./chevron-right-C83IPaf6.js";import"./Heading-CTpAMjcl.js";import"./FieldError-BRP4YCh0.js";import"./Text-Ccf4bkuw.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
