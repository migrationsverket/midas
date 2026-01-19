import{$ as c,a as m,r as l,j as d}from"./iframe-CutDFk5n.js";import{C as n}from"./Calendar-cqe34BuJ.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DGz7GImS.js";import"./Button-Dp5-D5M-.js";import"./utils-CTW1dxkN.js";import"./clsx-B-dksMZM.js";import"./Hidden-CUK-mE4f.js";import"./useFocusRing-4WXHNlg7.js";import"./index-Vo5448Qj.js";import"./index-DJz0Sx_u.js";import"./useLabels-DY93YiY3.js";import"./useButton-Co8nMjNx.js";import"./RSPContexts-DcYz2meL.js";import"./Text-DcyAgiDX.js";import"./useDateFormatter-figS9P5u.js";import"./useControlledState-Cn8LkIR3.js";import"./useLocalizedStringFormatter-b3cE-jas.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CP3VoDjV.js";import"./useEvent-BeSsf5uU.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CHhNdst8.js";import"./VisuallyHidden-BPIRqvhu.js";import"./clsx-Ciqy0D92.js";import"./Button-DdqPt2Xq.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-ttEBQjzn.js";import"./createLucideIcon-B80-lQ4U.js";import"./chevron-left-_jBHsV_V.js";import"./chevron-right-DXrnF8Ud.js";import"./Heading-TSmww82B.js";import"./FieldError-DctkBoCn.js";import"./Text-CgQQrWKF.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
