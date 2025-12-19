import{$ as p,a as m,r as l,j as d}from"./iframe-Cjj-T_WN.js";import{C as n}from"./Calendar-D2P-c2NF.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DPo-vTc7.js";import"./Button-DS8btNoB.js";import"./utils-CcLbDqYB.js";import"./clsx-B-dksMZM.js";import"./Hidden-tOizJ85m.js";import"./useFocusRing-CwecGSw4.js";import"./index-ky7TdNXS.js";import"./index-CxmudArT.js";import"./useLabels-DXBe3XOZ.js";import"./useButton-CHP-KyDJ.js";import"./RSPContexts-CEwT9ion.js";import"./Text-DGl_bXVg.js";import"./useDateFormatter-BMatS5J2.js";import"./useControlledState-Cm5wADKy.js";import"./useLocalizedStringFormatter-GQWeNoaA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CFpjDM-O.js";import"./useEvent-BUMkRfC-.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CG2NFrQv.js";import"./VisuallyHidden-CQopoBEp.js";import"./clsx-Ciqy0D92.js";import"./Button-BCd8eFMO.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Cqkyr2UN.js";import"./createLucideIcon-DY10d_On.js";import"./chevron-right-COF_RTUr.js";import"./Heading-CC8Cq5su.js";import"./FieldError-DCk6hMOV.js";import"./Text-gU00Swsd.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
