import{$ as p,a as m,r as l,j as d}from"./iframe-CcFj61hi.js";import{C as n}from"./Calendar-BzsbXv7R.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-B56so3Nb.js";import"./Button-B1O3Yrk6.js";import"./utils-CsHqKOjh.js";import"./clsx-B-dksMZM.js";import"./Hidden-meMQGPd4.js";import"./useFocusRing-tven7JmU.js";import"./index-DGWwOE3x.js";import"./index-BNjYms5q.js";import"./useLabels-BR7Zi-G6.js";import"./useButton-6rhH5hF9.js";import"./RSPContexts-DH4UiXRZ.js";import"./Text-CVt-e_rr.js";import"./useDateFormatter-k1wfZbFl.js";import"./useControlledState-CS68R5UU.js";import"./useLocalizedStringFormatter-Ciz81QXa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DeFj85Qf.js";import"./useEvent-z1bYF1OT.js";import"./getScrollParent-2W37j7Q_.js";import"./scrollIntoView-BAiEh8sy.js";import"./useDescription-DcDlBbEU.js";import"./VisuallyHidden-5KJu7kOB.js";import"./clsx-Ciqy0D92.js";import"./Button-DCIYWzuo.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-MF-hbWH5.js";import"./createLucideIcon-pE-zvx_b.js";import"./chevron-right-BUuVV1Yt.js";import"./Heading-BCcfcevL.js";import"./FieldError-BbKWR-P3.js";import"./Text-BqVsEr9P.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
