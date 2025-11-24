import{$ as p,a as m,r as l,j as d}from"./iframe-cBPiYa1j.js";import{C as n}from"./Calendar-Denqq6ei.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D0LEUzKH.js";import"./Button-DqAr_Q3f.js";import"./utils-BsI1IeI-.js";import"./clsx-B-dksMZM.js";import"./Hidden-D604MEhG.js";import"./useFocusRing-C3NoufTF.js";import"./index-D3tkVpzv.js";import"./index-DfcTzlFO.js";import"./useLabels-Ca7v6l-q.js";import"./useButton-DElLBHjA.js";import"./RSPContexts-BVzQNN1V.js";import"./Text-C9cmeUrC.js";import"./useDateFormatter-DZkmsi73.js";import"./useControlledState-CfXtp8hs.js";import"./useLocalizedStringFormatter-DCwlqfNN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-D57o_B0x.js";import"./useEvent-BPy_avrj.js";import"./getScrollParent-BNm3_zhV.js";import"./scrollIntoView-B9C68jgb.js";import"./useDescription-BdbzbGud.js";import"./VisuallyHidden-YR2KbVd6.js";import"./clsx-Ciqy0D92.js";import"./Button-DLE1YCfG.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BmqhCjnA.js";import"./createLucideIcon-Ft43kjRZ.js";import"./chevron-right-SiDo8KwR.js";import"./Heading-DGMv4Qcq.js";import"./FieldError-BxRdx_yQ.js";import"./Text-D5vIYSns.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
