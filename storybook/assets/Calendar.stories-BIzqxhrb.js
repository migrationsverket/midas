import{$ as c,a as m,r as l,j as d}from"./iframe-C8x-msxk.js";import{C as n}from"./Calendar-DwzxOl1F.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CZiXnAw9.js";import"./Button-CUxxVM2V.js";import"./utils-x6RmcanB.js";import"./clsx-B-dksMZM.js";import"./Hidden-BrrSlW-M.js";import"./useFocusRing-pYs-dxV_.js";import"./index-esthriUJ.js";import"./index-Bvs38Ve9.js";import"./useLabel-fGMhI5RW.js";import"./useLabels-CTHQc_bx.js";import"./useButton-DEMiZMSi.js";import"./RSPContexts-Bq-VVGt_.js";import"./Text-DgcFjB2j.js";import"./useDateFormatter-pcNNb1FX.js";import"./useControlledState-DCAgeBJw.js";import"./useLocalizedStringFormatter-DijUnHEf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BEUu9QL2.js";import"./useEvent-Cws_rkzS.js";import"./getScrollParent-Bc34TBH3.js";import"./scrollIntoView-M59Z7YUm.js";import"./useDescription-CnL7BH0S.js";import"./VisuallyHidden-CQd7HXEj.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BELWoTaC.js";import"./createLucideIcon-yUmnm7ht.js";import"./chevron-right-D8N-GaLV.js";import"./Button-vkpw1trS.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DbnioywX.js";import"./Heading-C3GaqhQf.js";import"./FieldError-rBwuM1xB.js";import"./Text-DQO-SfK1.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
