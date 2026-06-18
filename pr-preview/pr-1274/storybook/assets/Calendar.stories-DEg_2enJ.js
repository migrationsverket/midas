import{$ as c,a as m,r as l,j as d}from"./iframe-CX9u6T8Y.js";import{C as n}from"./Calendar-Lvnxxd5T.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C-QGMLrO.js";import"./Button-DNtvrS_L.js";import"./utils-B_VHG1Gv.js";import"./clsx-B-dksMZM.js";import"./Hidden-BBME2lcH.js";import"./useFocusRing-VvtcDzXm.js";import"./index-CMK6CEsG.js";import"./index-BVrz2ZAp.js";import"./useLabel-BDLn6W6W.js";import"./useLabels-B630tUke.js";import"./useButton-CBDoaz5U.js";import"./RSPContexts-BNooXlrN.js";import"./Text-C6_BqquS.js";import"./useDateFormatter-sdllSBB2.js";import"./useControlledState-CqdFbIjJ.js";import"./useLocalizedStringFormatter-Bk5zOPZH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DLzyy33s.js";import"./useEvent-zf2pcSAO.js";import"./getScrollParent-CX4KiXNJ.js";import"./scrollIntoView-DpK8DHna.js";import"./useDescription-EWWy_tBC.js";import"./VisuallyHidden-CQlGnIWD.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-oWg6B3QW.js";import"./createLucideIcon-B3Yd5B-T.js";import"./chevron-right-C1RZSfkv.js";import"./Button-DlDZpI3n.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BMBTKo38.js";import"./Heading-RxnKE-X9.js";import"./FieldError--tTRVDtY.js";import"./Text-e2IPEiX4.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
