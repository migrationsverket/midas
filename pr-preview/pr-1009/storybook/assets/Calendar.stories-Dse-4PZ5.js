import{$ as c,a as m,r as l,j as d}from"./iframe-D7pn65HD.js";import{C as n}from"./Calendar-PZVESJ9-.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-tm6yGSRN.js";import"./Button--lRgnSCB.js";import"./utils-gkLu2Q80.js";import"./clsx-B-dksMZM.js";import"./Hidden-CqqsxRSw.js";import"./useFocusRing-BRQN0HVs.js";import"./index-B0zKztvS.js";import"./index-CABcdHYW.js";import"./useLabels-e3eqZc1V.js";import"./useButton-BtvyslLl.js";import"./RSPContexts-BiIeKPVo.js";import"./Text-CMQOGgUM.js";import"./useDateFormatter-sdaezMjQ.js";import"./useControlledState-DyV8n_wu.js";import"./useLocalizedStringFormatter-DbF5DsVQ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Bb4t3tJV.js";import"./useEvent-CFzcDuTK.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-R-m8v4zo.js";import"./VisuallyHidden-Cjr7sTkY.js";import"./clsx-Ciqy0D92.js";import"./Button-_4N2Tdvz.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CFmBjBoC.js";import"./createLucideIcon-B4o84bfn.js";import"./chevron-left-C6E-E8zk.js";import"./chevron-right-CxRUT76S.js";import"./Heading-CI-0x4tv.js";import"./FieldError-CDBZhnFy.js";import"./Text-BoHU8OeY.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
