import{$ as c,a as m,r as l,j as d}from"./iframe-B_HV58Tx.js";import{C as n}from"./Calendar-CbAdoraP.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CwCBCV-H.js";import"./Button-9JB-LEJf.js";import"./utils-D5bq7NR9.js";import"./clsx-B-dksMZM.js";import"./Hidden-CWUxqDD_.js";import"./useFocusRing-CQ6srqs1.js";import"./index-BV-Xu0hA.js";import"./index-BRioma8_.js";import"./useLabels-BLTcitxv.js";import"./useButton-86EcIjrD.js";import"./RSPContexts-BqT_UpmT.js";import"./Text-BmPT9jx1.js";import"./useDateFormatter-BrRyuuBc.js";import"./useControlledState-BTwDuLxs.js";import"./useLocalizedStringFormatter-BvV0axQt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B1j7tqKk.js";import"./useEvent-Pf1vK6cZ.js";import"./getScrollParent-BVi9_iGw.js";import"./scrollIntoView-DDgM4B6N.js";import"./useDescription-CFUiKXvj.js";import"./VisuallyHidden-D3wC15bS.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-Dmr7y52n.js";import"./createLucideIcon-BVARARz1.js";import"./chevron-right-CE4XWFYl.js";import"./Button-Bso6HAwt.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CoVb38JF.js";import"./Heading-Um23GnnF.js";import"./FieldError-DqYkTsF9.js";import"./Text-ErMtNt0N.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
