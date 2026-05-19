import{$ as c,a as m,r as l,j as d}from"./iframe-BE6opBBQ.js";import{C as n}from"./Calendar-XiNCKkI8.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DfcXR8BX.js";import"./Button-33q5ghqc.js";import"./utils-C8ofSvVg.js";import"./clsx-B-dksMZM.js";import"./Hidden-ZOBOpRNs.js";import"./useFocusRing-B2vnni9l.js";import"./index-DAQ_HM4b.js";import"./index-yi7QOzex.js";import"./useLabel-DYb1uAYa.js";import"./useLabels-CTwsRaEG.js";import"./useButton-Ds0Hb-Tu.js";import"./RSPContexts-D18522_R.js";import"./Text-DssX7oue.js";import"./useDateFormatter-BdbJTKEE.js";import"./useControlledState-DKq-QKGp.js";import"./useLocalizedStringFormatter-D7yAGsCf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CQFKIiCd.js";import"./useEvent-Df4XmH1c.js";import"./getScrollParent-B6ANYB0N.js";import"./scrollIntoView-CGjnRAcf.js";import"./useDescription-Cm-6_l4m.js";import"./VisuallyHidden-TQ9t5iSG.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CQmko-KG.js";import"./createLucideIcon-BCuYuRMM.js";import"./chevron-right-DHOnCxQV.js";import"./Button-C8N-CVIU.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CwdjWiaw.js";import"./Heading-BmRPyc3t.js";import"./FieldError-rh0vxGNi.js";import"./Text-DXKcxlic.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
