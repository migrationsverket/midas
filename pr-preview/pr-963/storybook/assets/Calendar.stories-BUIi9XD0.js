import{$ as p,a as m,r as l,j as d}from"./iframe-CqwJW-jH.js";import{C as n}from"./Calendar-CGAPxK2D.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BDIldscv.js";import"./Button-DMS3IEls.js";import"./utils-BjAcymq3.js";import"./clsx-B-dksMZM.js";import"./Hidden-CAXpsngw.js";import"./useFocusRing-s8rZZkXP.js";import"./index-CEUh_mhN.js";import"./index-Ck3K3FLZ.js";import"./useLabels-B2L_aLjR.js";import"./useButton-CQ1blk8z.js";import"./RSPContexts-B9bfeA8n.js";import"./Text-Bb3z90XN.js";import"./useDateFormatter-CF--g2ox.js";import"./useControlledState-D4ov5J9e.js";import"./useLocalizedStringFormatter-DemKPo_M.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-fUmv7qeJ.js";import"./useEvent-BWxOnnow.js";import"./getScrollParent-Bz9DRPyV.js";import"./scrollIntoView-Dk_3y03O.js";import"./useDescription-1D91jdoC.js";import"./VisuallyHidden-kxJd-Cll.js";import"./clsx-Ciqy0D92.js";import"./Button-B0Mj2CMf.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C2-HvklD.js";import"./createLucideIcon-CufIcqRQ.js";import"./chevron-right-CzdFOpOm.js";import"./Heading-BNyF6dE7.js";import"./FieldError-DaAFNjv3.js";import"./Text-BM7LeZYM.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
