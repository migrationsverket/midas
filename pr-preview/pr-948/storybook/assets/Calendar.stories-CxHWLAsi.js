import{$ as p,a as m,r as l,j as d}from"./iframe-CJ5mLT_4.js";import{C as n}from"./Calendar-Bgrqamin.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-yuSHsBYh.js";import"./Button-BISKQvSM.js";import"./utils-B-yNA_dJ.js";import"./clsx-B-dksMZM.js";import"./Hidden-BJ3c_w-7.js";import"./useFocusRing-BeTk7EYI.js";import"./index-B1paFtI4.js";import"./index-jV957jJU.js";import"./useLabels-BYugiRh3.js";import"./useButton-B1fXf975.js";import"./RSPContexts-BcgASvdu.js";import"./Text-DC_rgrUQ.js";import"./useDateFormatter-BCqNbTBo.js";import"./useControlledState-D_djqcyI.js";import"./useLocalizedStringFormatter-CmqbnUCj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DKoYWBp0.js";import"./useEvent-DFz4QqKo.js";import"./getScrollParent-BV-IzjNs.js";import"./scrollIntoView-Dn_JjNEb.js";import"./useDescription-oVI_xXa4.js";import"./VisuallyHidden-BdNOaLNL.js";import"./clsx-Ciqy0D92.js";import"./Button-B916xGn-.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DPJWVto_.js";import"./createLucideIcon-BmH-SYUv.js";import"./chevron-right-CIRQv5JT.js";import"./Heading-9IadZiuE.js";import"./FieldError-Pur5IESW.js";import"./Text-BcqPXIpA.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
