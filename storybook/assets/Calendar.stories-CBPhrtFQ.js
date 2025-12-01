import{$ as p,a as m,r as l,j as d}from"./iframe-DDGhSUPH.js";import{C as n}from"./Calendar-CIRiFrfw.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D4jh1v5e.js";import"./Button-DoGvud4r.js";import"./utils-DkSk5Fpi.js";import"./clsx-B-dksMZM.js";import"./Hidden-CVyjnzAi.js";import"./useFocusRing-Cp9EtA1A.js";import"./index-BxxJ1gtc.js";import"./index-LwRNPsNd.js";import"./useLabels-rropAply.js";import"./useButton-BDswbpVc.js";import"./RSPContexts-FtlrlkMu.js";import"./Text-BJg9Wjq2.js";import"./useDateFormatter-B7WSDT5b.js";import"./useControlledState-DUR86Gn9.js";import"./useLocalizedStringFormatter-DCfAOUk8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B9sjK5dw.js";import"./useEvent-shFS8DT5.js";import"./getScrollParent-BMuJYkOi.js";import"./scrollIntoView-cvGLPaS2.js";import"./useDescription-DEKDhtSX.js";import"./VisuallyHidden-44FJARoa.js";import"./clsx-Ciqy0D92.js";import"./Button-CXmfUOo7.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BChb16bJ.js";import"./createLucideIcon-KTBaycPF.js";import"./chevron-right-PI1Oy_w4.js";import"./Heading-Cq1LxtAA.js";import"./FieldError-B2snDo_I.js";import"./Text-BWNYfE2D.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
