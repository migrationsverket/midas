import{$ as c,a as m,r as l,j as d}from"./iframe-DGitGBwd.js";import{C as n}from"./Calendar-CibGa1BQ.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D3SQadl6.js";import"./Button-CFc7ZkBU.js";import"./utils-DlxgMN-X.js";import"./clsx-B-dksMZM.js";import"./Hidden-BTbvwN5u.js";import"./useFocusRing-BSQFeV26.js";import"./index-CgyYAO-T.js";import"./index-C2aEhFku.js";import"./useLabel-DxdQgbMB.js";import"./useLabels-Obe7Lwct.js";import"./useButton-CJsEP6bk.js";import"./RSPContexts-BNal8wWj.js";import"./Text-BBS_R9Lb.js";import"./useDateFormatter-BeUddgml.js";import"./useControlledState-Dj3Q8cMg.js";import"./useLocalizedStringFormatter-IrjHOpw7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CqYhF1SR.js";import"./useEvent-DNR96Pag.js";import"./getScrollParent-BD_bpobV.js";import"./scrollIntoView-CQlM3xNO.js";import"./useDescription-DIrfQQU3.js";import"./VisuallyHidden-BUTi2bAi.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DoSfKa7Z.js";import"./createLucideIcon-CcqKhbRQ.js";import"./chevron-right-ydGN15i6.js";import"./Button-CJ16F3mz.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CveS3y_K.js";import"./Heading-B0sINXDi.js";import"./FieldError-BLFTeUPi.js";import"./Text-BHRP82y-.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
