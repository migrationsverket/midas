import{$ as c,a as m,r as l,j as d}from"./iframe-XiCiIf0n.js";import{C as n}from"./Calendar-BG7grU-w.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-ZX3sJt1l.js";import"./Button-GBAKwEXf.js";import"./utils-DN6l_A4f.js";import"./clsx-B-dksMZM.js";import"./Hidden-B0NT9U_h.js";import"./useFocusRing-Du04ckjJ.js";import"./index-5eW94gXQ.js";import"./index-DUzzqUE5.js";import"./useLabel-CX8LzJ5q.js";import"./useLabels-yWB8_p4-.js";import"./useButton-DdGLHplO.js";import"./RSPContexts-DA4QYsro.js";import"./Text-BgntJj64.js";import"./useDateFormatter-BfAlnuOh.js";import"./useControlledState-CUbneG8a.js";import"./useLocalizedStringFormatter-D4lkYHou.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Dtfj_Yt8.js";import"./useEvent-Byt7kt62.js";import"./getScrollParent-Bk9-lSDZ.js";import"./scrollIntoView-CPg7R5H1.js";import"./useDescription-D3XmSikn.js";import"./VisuallyHidden-D8kosd8O.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-B92vSv2v.js";import"./createLucideIcon-Bi0GkdZT.js";import"./chevron-right-BPThS2Qb.js";import"./Button-34yPA4wA.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-COrKBGOW.js";import"./Heading-CrR6P3Ih.js";import"./FieldError-BphdTUoK.js";import"./Text-BB__0TpL.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
