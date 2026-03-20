import{$ as c,a as m,r as l,j as d}from"./iframe-CNCfLPs3.js";import{C as n}from"./Calendar-BKzyPp8Q.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Blz_m9up.js";import"./Button-BEZ5_JXL.js";import"./utils-e7FQN5yO.js";import"./clsx-B-dksMZM.js";import"./Hidden-CtoRdWlv.js";import"./useFocusRing-CUoBtFMe.js";import"./index-BHVmJuNO.js";import"./index-CnTOG63q.js";import"./useLabels-dz24dBNN.js";import"./useButton-Bz3E-ByR.js";import"./RSPContexts-BnqYv-3I.js";import"./Text-CBvTFJIS.js";import"./useDateFormatter-grPp6-ar.js";import"./useControlledState-D13ccspj.js";import"./useLocalizedStringFormatter-CmzWN2-U.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B1MJK651.js";import"./useEvent-DnGFAjoz.js";import"./getScrollParent-F6A2WJl-.js";import"./scrollIntoView-Crvi9te9.js";import"./useDescription-C9T5AWLx.js";import"./VisuallyHidden-Cq4Z2n0K.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CVMCpuw9.js";import"./createLucideIcon-Fn0POOLU.js";import"./chevron-right-DRS51ntC.js";import"./Button-OnAqZWBY.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BTk8Kzh-.js";import"./Heading-CKoKonSI.js";import"./FieldError-R8U9vf-q.js";import"./Text-o_j_xe-L.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
