import{$ as c,a as m,r as l,j as d}from"./iframe-goP8imCK.js";import{C as n}from"./Calendar-D1-ycnAG.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DtMQb7ER.js";import"./Button-CnchVFFe.js";import"./utils-D97N4ORW.js";import"./clsx-B-dksMZM.js";import"./Hidden-x8iT2j8D.js";import"./useFocusRing-D7HTnxbj.js";import"./index-UqNR_IG4.js";import"./index-CvvtcQxC.js";import"./useLabels-KHl-vYzN.js";import"./useButton-UIJcfSO0.js";import"./RSPContexts-BWY-CEwa.js";import"./Text-Bl2otZFr.js";import"./useDateFormatter-BS3j2cLV.js";import"./useControlledState-CK6_hlZX.js";import"./useLocalizedStringFormatter-5g3MeGHg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-uxNCBw-1.js";import"./useEvent-DFlAQp2Z.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CwsM3XiG.js";import"./VisuallyHidden-Bk8wprlF.js";import"./clsx-Ciqy0D92.js";import"./Button-Bamq_8Qe.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-fhyQcR-T.js";import"./createLucideIcon-Bja-RJnq.js";import"./chevron-left-Cc64PYIe.js";import"./chevron-right-1HgTwev4.js";import"./Heading-DbBXOFxh.js";import"./FieldError-DvD6etUO.js";import"./Text-DqafpL3h.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const T=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,T as __namedExportsOrder,Q as default};
