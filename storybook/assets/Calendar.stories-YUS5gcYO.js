import{$ as c,a as m,r as l,j as d}from"./iframe-DQ8MWDzl.js";import{C as n}from"./Calendar-DymW-p5f.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BFqVFDwQ.js";import"./Button-C6oyl_qC.js";import"./utils-MUondYLm.js";import"./clsx-B-dksMZM.js";import"./Hidden-BFm8JVh5.js";import"./useFocusRing-OnsEPzNC.js";import"./index-CWjVL5dm.js";import"./index-pN5S6Ptu.js";import"./useLabels-v8Ev80De.js";import"./useButton-DHWmFvz2.js";import"./RSPContexts-DuvxmCvc.js";import"./Text-B7FL6X4L.js";import"./useDateFormatter-BYSWfRfy.js";import"./useControlledState-DLe-crj8.js";import"./useLocalizedStringFormatter-CfUu-qj4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CPnIGhVH.js";import"./useEvent-LiCRS7cz.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DlClEnzw.js";import"./VisuallyHidden-CYOdgqsq.js";import"./clsx-Ciqy0D92.js";import"./Button-lMIcCMmO.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DopWcpGf.js";import"./createLucideIcon-BgRpLVeX.js";import"./chevron-left-nAOoPcE6.js";import"./chevron-right-uT2MyER6.js";import"./Heading-BWnhyVKJ.js";import"./FieldError-BbsiMUDV.js";import"./Text-DZRYbZpm.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
