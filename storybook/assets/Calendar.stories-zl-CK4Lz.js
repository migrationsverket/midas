import{$ as c,a as m,r as l,j as d}from"./iframe-CHfAArqL.js";import{C as n}from"./Calendar-PHlXprlF.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BYsLiYNV.js";import"./Button-Kjhz10Fb.js";import"./utils-B9qYaPsL.js";import"./clsx-B-dksMZM.js";import"./Hidden-BOX53JQz.js";import"./useFocusRing-BLqX-8xD.js";import"./index-DD_A6Sdz.js";import"./index-BO2C6bAK.js";import"./useLabel-BoRZ5h0h.js";import"./useLabels-8brOlTZV.js";import"./useButton-CXuQG5Fo.js";import"./RSPContexts-CdZqI30k.js";import"./Text-9hAgyQPX.js";import"./useDateFormatter-CvjilZ8K.js";import"./useControlledState-By7B3ojn.js";import"./useLocalizedStringFormatter-aQ9hIT3Z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-ChikD8Cg.js";import"./useEvent-g8MOXAII.js";import"./getScrollParent-DFfRG1WF.js";import"./scrollIntoView-DiMlvdiv.js";import"./useDescription-DeNQGmHX.js";import"./VisuallyHidden-QI36eTUn.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DjtfUgcl.js";import"./createLucideIcon-Cv2FgIad.js";import"./chevron-right-Bmr5LSh5.js";import"./Button-Cmx0GvV9.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-B-k-1dED.js";import"./Heading-B3eVwh_1.js";import"./FieldError-DThBEncI.js";import"./Text-C_6I0x6_.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
