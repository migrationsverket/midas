import{$ as c,a as m,r as l,j as d}from"./iframe-CmC6_uFn.js";import{C as n}from"./Calendar-DzA3YmqS.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CRk010vw.js";import"./Button-BfXSwHW0.js";import"./utils-DpIGtToL.js";import"./clsx-B-dksMZM.js";import"./Hidden-Ci7T1bEi.js";import"./useFocusRing-CnXjVSj9.js";import"./index-_SptB5IF.js";import"./index-Cq0yuKyu.js";import"./useLabel-CZd2jY9k.js";import"./useLabels-CAk5ShxF.js";import"./useButton-Dc8urwoW.js";import"./RSPContexts-CHkHxhdH.js";import"./Text-bLb0hYqG.js";import"./useDateFormatter-vnmMbOqO.js";import"./useControlledState-x3Q8v9NC.js";import"./useLocalizedStringFormatter-fVU3OA8S.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CQPiULjW.js";import"./useEvent-lwkuKQG3.js";import"./getScrollParent-TKe_y_ar.js";import"./scrollIntoView-AobHmSLH.js";import"./useDescription-BV7Lh5gS.js";import"./VisuallyHidden-DhqoAnIr.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-gkeR87mW.js";import"./createLucideIcon-DG07A9xd.js";import"./chevron-right-DqqrPlPu.js";import"./Button-WgLWfZml.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CHt1E_Fl.js";import"./Heading-CWx7pa9X.js";import"./FieldError-B-ZQXEeM.js";import"./Text-ChJGU_Xm.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
