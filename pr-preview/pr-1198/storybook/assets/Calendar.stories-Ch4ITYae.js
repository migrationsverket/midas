import{$ as c,a as m,r as l,j as d}from"./iframe-4YO2ARDc.js";import{C as n}from"./Calendar-CD08M2sN.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-xTM0abCj.js";import"./Button-B4lRjwhF.js";import"./utils-Bfs2eoJd.js";import"./clsx-B-dksMZM.js";import"./Hidden-CaP86mrU.js";import"./useFocusRing-CIkko9vI.js";import"./index-D4eJv5Ic.js";import"./index-BTuiHaBk.js";import"./useLabel-p6x45DKH.js";import"./useLabels-CWRsfwtI.js";import"./useButton-BKsQrDS8.js";import"./RSPContexts-DcHnq2yo.js";import"./Text-CzwdOm33.js";import"./useDateFormatter-B7ne-38s.js";import"./useControlledState-DMcdq1J4.js";import"./useLocalizedStringFormatter-D7Kcj2Mq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Dmp2Tuce.js";import"./useEvent-Cqqb_9-s.js";import"./getScrollParent-BDe6vMxS.js";import"./scrollIntoView-Ya4JCi80.js";import"./useDescription-4EdgaLtr.js";import"./VisuallyHidden-DJTNtHiX.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BITy8MRw.js";import"./createLucideIcon-DgKHzC9k.js";import"./chevron-right-CZaBhRWs.js";import"./Button-Bn5ZQsd6.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DI81rz-a.js";import"./Heading-DOCrZSPR.js";import"./FieldError-OsSBmOrk.js";import"./Text-BPQIT5o1.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
