import{$ as c,a as m,r as l,j as d}from"./iframe-SDpi4twy.js";import{C as n}from"./Calendar-BBUJasjg.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BWKhkkry.js";import"./Button-CP9rYMdO.js";import"./utils-xrvn9yoP.js";import"./clsx-B-dksMZM.js";import"./Hidden-DCBLchC2.js";import"./useFocusRing-HN10idpk.js";import"./index-DtGjaFFO.js";import"./index-BiFAAEUl.js";import"./useLabel-CsVesTp2.js";import"./useLabels-BdN3-T9J.js";import"./useButton-da7p-KW-.js";import"./RSPContexts-6ABDZ8a3.js";import"./Text-DfMMI2V7.js";import"./useDateFormatter-tpF0RAzt.js";import"./useControlledState-DnKNiq_e.js";import"./useLocalizedStringFormatter-BT0fez2i.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B-kuX5E4.js";import"./useEvent-Du0U3mMG.js";import"./getScrollParent-CwCM-QuG.js";import"./scrollIntoView-BoxRYZNv.js";import"./useDescription-CU7-IrDB.js";import"./VisuallyHidden-DDECxo00.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-u7YkJ34B.js";import"./createLucideIcon-CoSUjgph.js";import"./chevron-right-CSieUymA.js";import"./Button-BFfXUBEp.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DAhT7gg2.js";import"./Heading-D22PM7wL.js";import"./FieldError-BAYSeF7s.js";import"./Text-fYO5A3M_.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
