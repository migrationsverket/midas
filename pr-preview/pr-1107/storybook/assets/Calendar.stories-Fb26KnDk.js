import{$ as c,a as m,r as l,j as d}from"./iframe-Cr04uqFn.js";import{C as n}from"./Calendar--PjORBoi.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-MI73ARyT.js";import"./Button-BDZhuw74.js";import"./utils-CsC3xkQx.js";import"./clsx-B-dksMZM.js";import"./Hidden-BqmZgZ8y.js";import"./useFocusRing-iGoUiyfg.js";import"./index-Ge0-Pyay.js";import"./index-BRmKR4IG.js";import"./useLabels-Jqxce70U.js";import"./useButton-DDahEz2i.js";import"./RSPContexts-DKIHjjdb.js";import"./Text-SaXXHVxE.js";import"./useDateFormatter-DPkLuRzt.js";import"./useControlledState-DjFFz4B7.js";import"./useLocalizedStringFormatter-CTazVPN1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-KfbDKUuF.js";import"./useEvent-B_zIZR1f.js";import"./getScrollParent-DB2xYs0i.js";import"./scrollIntoView-BS5aSLnj.js";import"./useDescription-vtlKpR3S.js";import"./VisuallyHidden-Bkfpb86W.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-B_GSzI0Y.js";import"./createLucideIcon-DucUkfKy.js";import"./chevron-right-CNgcKMgX.js";import"./Button-Bskr_9E8.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-afGT4_9p.js";import"./Heading-8owiBgBQ.js";import"./FieldError-CM9YGji9.js";import"./Text-CMC0Dinw.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
