import{$ as c,a as m,r as l,j as d}from"./iframe-DXV5yNVg.js";import{C as n}from"./Calendar-D0ZJxe_V.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-R_tNgJzr.js";import"./Button-BFHR6RXp.js";import"./utils-D2X0V_ch.js";import"./clsx-B-dksMZM.js";import"./Hidden-D1mzcqIQ.js";import"./useFocusRing-D5WWltRW.js";import"./index-CzcJdf_a.js";import"./index-Ck0jOAPG.js";import"./useLabel-DhHgPc5x.js";import"./useLabels-CnmTVeYq.js";import"./useButton-D2_h4EWT.js";import"./RSPContexts-CFPuUxx1.js";import"./Text-CKvHTakV.js";import"./useDateFormatter-wkioPNIQ.js";import"./useControlledState-gqmUfamI.js";import"./useLocalizedStringFormatter-DMugWIr_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BTVXTsXJ.js";import"./useEvent-BKSnxFNZ.js";import"./getScrollParent-DEOaQKh5.js";import"./scrollIntoView-Gtl3EXZL.js";import"./useDescription-Br6-58Tk.js";import"./VisuallyHidden-BEiLaXoC.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-rmlxvQZ2.js";import"./createLucideIcon-BzcStSQs.js";import"./chevron-right-Cdd8u-c4.js";import"./Button-BlXLhIpL.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-C4UT3jd4.js";import"./Heading-DF9E9mda.js";import"./FieldError-BqMBz98l.js";import"./Text-CBeHelAL.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const V=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,V as __namedExportsOrder,T as default};
