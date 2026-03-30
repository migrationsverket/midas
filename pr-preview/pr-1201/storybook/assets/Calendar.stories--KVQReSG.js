import{$ as c,a as m,r as l,j as d}from"./iframe-KvMX5Axs.js";import{C as n}from"./Calendar-BPd0wsTp.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Bp62HYIW.js";import"./Button-Bo3Qklea.js";import"./utils-DQB0ixZT.js";import"./clsx-B-dksMZM.js";import"./Hidden-DgM1V2hb.js";import"./useFocusRing-vgvsKIAr.js";import"./index-DTZE8lUv.js";import"./index-Y9HTW2-l.js";import"./useLabel-0b57TDxq.js";import"./useLabels-CR00I-nd.js";import"./useButton-DgCOwdob.js";import"./RSPContexts-C0J0N8cH.js";import"./Text-BvSzNFUh.js";import"./useDateFormatter-B8gpdMKy.js";import"./useControlledState-CT69c7wx.js";import"./useLocalizedStringFormatter-BUFrwSMc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DX-y8wr4.js";import"./useEvent-CIdla-e8.js";import"./getScrollParent-BQUmQnum.js";import"./scrollIntoView-B4l7yvba.js";import"./useDescription-BxZn0zUe.js";import"./VisuallyHidden-BX39qD-v.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-C_5eP3Wr.js";import"./createLucideIcon-CKpEkAd-.js";import"./chevron-right-CPdzMXmD.js";import"./Button-C1NVLp98.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-NesSIbJ3.js";import"./Heading-CT2JNdOT.js";import"./FieldError-Dm-mWSrI.js";import"./Text-xieIOj6u.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
