import{$ as c,a as m,r as l,j as d}from"./iframe-Chekwr6M.js";import{C as n}from"./Calendar-Bl0jM3RR.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CB-cD0y2.js";import"./Button-Z4awFVTj.js";import"./utils-Dj64B4Ck.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dy--Tx0W.js";import"./number-DfkVkf0F.js";import"./useFocusRing-CYwfk9cE.js";import"./index-D2-ul2QH.js";import"./index-BiGwtwNm.js";import"./useLabels-DDXNXFW7.js";import"./useButton-D4rnmHPz.js";import"./RSPContexts-B-5HPXFu.js";import"./Text-d5-92hiR.js";import"./useDateFormatter-BM7U4u8n.js";import"./useControlledState-CLkXqHsM.js";import"./useLocalizedStringFormatter-PB5CwfUm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-SuTRzneO.js";import"./useEvent-Du-C-SwK.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BaU05DyX.js";import"./VisuallyHidden-CfeHWJtp.js";import"./clsx-Ciqy0D92.js";import"./Button-D5FNdohA.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BFGhiOXi.js";import"./createLucideIcon-CPHdlOig.js";import"./chevron-left-qneukW4A.js";import"./chevron-right-CftNaB0W.js";import"./Heading-CaO4mVhn.js";import"./FieldError-DCB-eHPb.js";import"./Text-CNbIZlGx.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
