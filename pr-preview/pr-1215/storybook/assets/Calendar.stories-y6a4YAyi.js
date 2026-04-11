import{$ as c,a as m,r as l,j as d}from"./iframe-DagPb3DG.js";import{C as n}from"./Calendar-BPSW6ULV.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BcGyq4bm.js";import"./Button-Ckt0c6HW.js";import"./utils-DEIIZrT8.js";import"./clsx-B-dksMZM.js";import"./Hidden-BaZDL4oi.js";import"./useFocusRing-DV81koGP.js";import"./index-X3kKW3OI.js";import"./index-B3KKDvTU.js";import"./useLabel-DEs8DT9p.js";import"./useLabels-mT4eX36O.js";import"./useButton-BMw6H5IS.js";import"./RSPContexts-BcGBAh60.js";import"./Text-DrUxMYO_.js";import"./useDateFormatter-Dc47czL-.js";import"./useControlledState-CD6VDT_E.js";import"./useLocalizedStringFormatter-B_hF3Aaq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-D_owBv_C.js";import"./useEvent-Cclj6Db-.js";import"./getScrollParent-CH3EMup_.js";import"./scrollIntoView-C3PoXb1x.js";import"./useDescription-BqZkbbJU.js";import"./VisuallyHidden-BiE9yBGm.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BKL9pVhx.js";import"./createLucideIcon-KVoeMAdo.js";import"./chevron-right-CNpDek91.js";import"./Button-DeUqMdFb.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-C9lWcR8U.js";import"./Heading-g3dzpiDw.js";import"./FieldError-DRukOLZw.js";import"./Text-DqORZFkZ.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
