import{$ as p,a as m,r as l,j as d}from"./iframe-BIgVwRzi.js";import{C as n}from"./Calendar-D8jNB-VK.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D72m007h.js";import"./Button-BbaSeMTk.js";import"./utils-zlmf3cg_.js";import"./clsx-B-dksMZM.js";import"./Hidden-UQDm3VtM.js";import"./useFocusRing-BbQ4IaHs.js";import"./index-BR_IV3ka.js";import"./index-D26pB2kE.js";import"./useLabels-Dvj8ZU2I.js";import"./useButton-I1p8fH58.js";import"./RSPContexts-Derb496R.js";import"./Text-igUMio9r.js";import"./useDateFormatter-CUNwisrG.js";import"./useControlledState-CBUPCzMg.js";import"./useLocalizedStringFormatter-CHL49Mx_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B7SWkdlB.js";import"./useEvent-Buf3aweS.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-6EDhH15h.js";import"./VisuallyHidden-BLTljg8L.js";import"./clsx-Ciqy0D92.js";import"./Button-cszjA275.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DSORq7VR.js";import"./createLucideIcon-38Nuhk7x.js";import"./chevron-right-DpGT9Tt5.js";import"./Heading-BR88Fj1o.js";import"./FieldError-CYKhEZDB.js";import"./Text-Bgt8anl_.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Q=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,Q as __namedExportsOrder,L as default};
