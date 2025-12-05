import{$ as p,a as m,r as l,j as d}from"./iframe-qDdxYEqa.js";import{C as n}from"./Calendar-BR8vP1p6.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-COKcyiHV.js";import"./Button-B6p9EZnf.js";import"./utils-BM4vGe7B.js";import"./clsx-B-dksMZM.js";import"./Hidden-DtSTyAaE.js";import"./useFocusRing-B6vuZu2_.js";import"./index-DzlCj9Y4.js";import"./index-BVyj6e23.js";import"./useLabels-xEn6R_2b.js";import"./useButton-5HeDBVBJ.js";import"./RSPContexts-D7OWPLkC.js";import"./Text-bywFbAb4.js";import"./useDateFormatter-BkY71Yzs.js";import"./useControlledState-0uhYfAk6.js";import"./useLocalizedStringFormatter-DIrmbVtk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DW0IDBgl.js";import"./useEvent-BfpnWR31.js";import"./getScrollParent-pPUmGKBq.js";import"./scrollIntoView-HxGvSmTa.js";import"./useDescription-CKkIcbk2.js";import"./VisuallyHidden-CKY1T34r.js";import"./clsx-Ciqy0D92.js";import"./Button-Cs7TGJjB.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D8GJkiEc.js";import"./createLucideIcon-G8J66sNp.js";import"./chevron-right-Bx7ElUAX.js";import"./Heading-C-pdQTkz.js";import"./FieldError-BwMuefB_.js";import"./Text-WW175J0Z.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
