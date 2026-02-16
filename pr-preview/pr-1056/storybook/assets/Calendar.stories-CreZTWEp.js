import{$ as c,a as m,r as l,j as d}from"./iframe-BUyds97o.js";import{C as n}from"./Calendar-DbM0fc2W.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BQ7UdR0a.js";import"./Button-HXR-7m9h.js";import"./utils-BPu6xsrW.js";import"./clsx-B-dksMZM.js";import"./Hidden-D-uqQF0z.js";import"./useFocusRing-Bm-8HNv9.js";import"./index-511sCdBp.js";import"./index-jhER429G.js";import"./useLabels-BK_yTQcU.js";import"./useButton-v3-Q6iUD.js";import"./RSPContexts-B3kcM3sq.js";import"./Text-Dm1It-3G.js";import"./useDateFormatter-CvL9YHKy.js";import"./useControlledState-Dk1B153b.js";import"./useLocalizedStringFormatter-DVo_dtBE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Bye21iy_.js";import"./useEvent-CIz6tOnB.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BQAUwCoM.js";import"./VisuallyHidden-bxnSUgOY.js";import"./clsx-Ciqy0D92.js";import"./Button-N-WvUv-N.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C_jtq6xa.js";import"./createLucideIcon-iD7jktQ6.js";import"./chevron-left-Cc_EAYMa.js";import"./chevron-right-B-qYNRPR.js";import"./Heading-eSq5c7xp.js";import"./FieldError-nzuM8Mkm.js";import"./Text-DYJP5A76.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
