import{$ as p,a as m,r as l,j as d}from"./iframe-BGyjMY2A.js";import{C as n}from"./Calendar-CSYNy-X7.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BLscOpYY.js";import"./Button-DI8VxDKE.js";import"./utils-CTEL-aPn.js";import"./clsx-B-dksMZM.js";import"./Hidden-7YyYTdjK.js";import"./useFocusRing-Qz5ydHqq.js";import"./index-BSnPUmLp.js";import"./index-CExSyphq.js";import"./useLabels-BKJWTw5n.js";import"./useButton-Cgw_GPMG.js";import"./RSPContexts-DcfdI7Bu.js";import"./Text-yiC38_9n.js";import"./useDateFormatter-C8ci2lL0.js";import"./useControlledState-tPA4VUhi.js";import"./useLocalizedStringFormatter-CHCXaTKp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DThQLJyT.js";import"./useEvent-ERybvefB.js";import"./getScrollParent-Cml6bqId.js";import"./scrollIntoView-BWfcBpus.js";import"./useDescription-Cn9clWz2.js";import"./VisuallyHidden-CeB8DNep.js";import"./clsx-Ciqy0D92.js";import"./Button-DoINo-pg.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-_mvD30RP.js";import"./createLucideIcon-Dt69t0iG.js";import"./chevron-right-Spuah7W-.js";import"./Heading-CIYG4bW9.js";import"./FieldError-B1WUXMvL.js";import"./Text-ZEUEevv6.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
