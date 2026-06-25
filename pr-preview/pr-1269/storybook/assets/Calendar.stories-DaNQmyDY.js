import{$ as c,a as m,r as l,j as d}from"./iframe-zmdm5LWO.js";import{C as n}from"./Calendar-AiMhXJ1t.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D5_Ucmnf.js";import"./Button-CJHqtIe5.js";import"./utils-BVXhqey2.js";import"./clsx-B-dksMZM.js";import"./Hidden-Da0JYuUZ.js";import"./useFocusRing-ChdwpxNy.js";import"./index-CR9Wusv4.js";import"./index-BM2_5E3m.js";import"./useLabel-Di2CB_YG.js";import"./useLabels-Co4DVdbJ.js";import"./useButton-BIbblWcf.js";import"./RSPContexts-CkA1USMd.js";import"./Text-C_A67KfE.js";import"./useDateFormatter-CbhZth4l.js";import"./useControlledState-CPsjL82m.js";import"./useLocalizedStringFormatter-LEYk1ZVN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-L__8C6WG.js";import"./useEvent-xez8_YkI.js";import"./getScrollParent-YKNs88UL.js";import"./scrollIntoView-QLDgtXAW.js";import"./useDescription-rHa26S1A.js";import"./VisuallyHidden-DeZC0Ok1.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-LOtO-bzA.js";import"./createLucideIcon-BWu7CyXu.js";import"./chevron-right-CEh-WQ5D.js";import"./Button-BYmNnQBF.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Crt7pDpL.js";import"./Heading-vsfnRndb.js";import"./FieldError-CnGNBTtl.js";import"./Text-BlbFrX8Z.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
