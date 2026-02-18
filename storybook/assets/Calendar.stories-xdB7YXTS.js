import{$ as c,a as m,r as l,j as d}from"./iframe-DEp2oG17.js";import{C as n}from"./Calendar-CoCXYwHY.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-M1V20TwJ.js";import"./Button-C_5E3NeR.js";import"./utils-BdDw9a3H.js";import"./clsx-B-dksMZM.js";import"./Hidden-CABjF7lx.js";import"./useFocusRing-Mb90B-sd.js";import"./index-DjxIfj_1.js";import"./index-bV2pO4CY.js";import"./useLabels-Cyk4YZSQ.js";import"./useButton-tx-eN_jr.js";import"./RSPContexts-BpY8Nizo.js";import"./Text-CI29p5RE.js";import"./useDateFormatter-D19F-139.js";import"./useControlledState-B8G_0Le1.js";import"./useLocalizedStringFormatter-BceleSe3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CdawM-Ux.js";import"./useEvent-CKG_1VwL.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-8UxhvEwk.js";import"./VisuallyHidden-CS5LSF1P.js";import"./clsx-Ciqy0D92.js";import"./Button-DbApqNlR.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BCi1uvX3.js";import"./createLucideIcon-CCWrt2pH.js";import"./chevron-left-B9mQIIMu.js";import"./chevron-right-CPIcCbJp.js";import"./Heading-DumaOAFC.js";import"./FieldError-DN8iUwVl.js";import"./Text-DdOwJXNS.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
