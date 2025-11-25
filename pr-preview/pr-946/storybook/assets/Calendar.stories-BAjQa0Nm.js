import{$ as p,a as m,r as l,j as d}from"./iframe-Bgec6LZ9.js";import{C as n}from"./Calendar-CxbjV5rq.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D3StZ8r_.js";import"./Button-_JSPr_Qd.js";import"./utils-DIIQIBM-.js";import"./clsx-B-dksMZM.js";import"./Hidden-ClpDugI3.js";import"./useFocusRing-B1D5indB.js";import"./index-Ceczni1n.js";import"./index-BeLA2EJf.js";import"./useLabels-DcdCSdhe.js";import"./useButton-CXyVv40K.js";import"./RSPContexts-CbK1ypjQ.js";import"./Text-VdO0wtcg.js";import"./useDateFormatter-B5NdwMdE.js";import"./useControlledState-DnXTl3Pc.js";import"./useLocalizedStringFormatter-BWOfcfGM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Ck06PdU4.js";import"./useEvent-Ccc7jkrB.js";import"./getScrollParent-Ch1KfHwI.js";import"./scrollIntoView-BCNTH4IC.js";import"./useDescription-ASwlOTW0.js";import"./VisuallyHidden-U53ARRrF.js";import"./clsx-Ciqy0D92.js";import"./Button-DzNsYof3.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DBY3ly5_.js";import"./createLucideIcon-D_CGqgCc.js";import"./chevron-right-D_yLuouV.js";import"./Heading-6_8Tm-Cn.js";import"./FieldError-6CR-SQTz.js";import"./Text-ChsjEId-.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
