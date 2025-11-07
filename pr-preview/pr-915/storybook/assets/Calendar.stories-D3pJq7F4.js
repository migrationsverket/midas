import{$ as p,a as m,r as l,j as d}from"./iframe-CDrSurWy.js";import{C as n}from"./Calendar-B5XJfCnj.js";import"./preload-helper-Ct5FWWRu.js";import"./CalendarHeader-DDsL60Ca.js";import"./Button-CT7017SL.js";import"./utils-Dy1P41Mq.js";import"./clsx-B-dksMZM.js";import"./Hidden-BWcF6djw.js";import"./useFocusRing-8Ibh4hbP.js";import"./index-CpmYj3fJ.js";import"./index-BMiT6AWh.js";import"./useLabels-DEqi4d33.js";import"./useButton-uFHPbEdv.js";import"./RSPContexts-C5dhxqCN.js";import"./Text-BsD5HA04.js";import"./useDateFormatter-c7aGo2ES.js";import"./useControlledState-CUTCkVdb.js";import"./useLocalizedStringFormatter-DuF-ONi0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Vg3mEo2t.js";import"./useEvent-wOK8FOZ6.js";import"./getScrollParent-CQcnHDD2.js";import"./scrollIntoView-DrqSbS4m.js";import"./useDescription-BahndL2P.js";import"./VisuallyHidden-CqzoDPo1.js";import"./clsx-Ciqy0D92.js";import"./Button-D1Cx7yto.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-DtA62ZGX.js";import"./chevron-right-DOjjVaBg.js";import"./Heading-IZt5eFTf.js";import"./FieldError-C3Cs2Qyk.js";import"./Text-Dk-c4AnW.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const L=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,L as __namedExportsOrder,K as default};
