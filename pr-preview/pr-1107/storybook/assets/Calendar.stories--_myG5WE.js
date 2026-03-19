import{$ as c,a as m,r as l,j as d}from"./iframe-BIHPCSD7.js";import{C as n}from"./Calendar-T73Le2aK.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BikuvQ2l.js";import"./Button-CSz7Ih4-.js";import"./utils-DD1AhTmn.js";import"./clsx-B-dksMZM.js";import"./Hidden-BPDZ6gCs.js";import"./useFocusRing-BMHnjiK5.js";import"./index-D8pKX7IM.js";import"./index-fodDxchC.js";import"./useLabels-j4j3caFA.js";import"./useButton-COi1XBPP.js";import"./RSPContexts-DjrbWcHb.js";import"./Text-41JxePIO.js";import"./useDateFormatter-J0-tmSqU.js";import"./useControlledState-7StlLOGr.js";import"./useLocalizedStringFormatter-ruJF4A_C.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DeTD31HD.js";import"./useEvent-DwulRvFz.js";import"./getScrollParent-C7NYmB80.js";import"./scrollIntoView-Cjdp4BaG.js";import"./useDescription-B6Gpa9qj.js";import"./VisuallyHidden-CQeIgFd3.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BrjUtrzT.js";import"./createLucideIcon-CEpUHvVi.js";import"./chevron-right-Be2QZYTP.js";import"./Button-B-WLyZXQ.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DgK4llAe.js";import"./Heading-De18PXua.js";import"./FieldError-Kju1pqM0.js";import"./Text-BxyjZI9K.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
