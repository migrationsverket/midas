import{$ as c,a as m,r as l,j as d}from"./iframe-DVDWeSF5.js";import{C as n}from"./Calendar-CEsy2zCh.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Ca1Ok7l2.js";import"./Button-DfCh0cjZ.js";import"./utils-CefdWjxN.js";import"./clsx-B-dksMZM.js";import"./Hidden-DjqEg1Uq.js";import"./number-DfkVkf0F.js";import"./useFocusRing-C2ebvpGA.js";import"./index-H87RFqBd.js";import"./index-C4utJ2sZ.js";import"./useLabels-DToHZ87d.js";import"./useButton-BrZD_KUO.js";import"./RSPContexts-EgTevDbm.js";import"./Text-DZ1HT8EB.js";import"./useDateFormatter-Dzg026c4.js";import"./useControlledState-Ctil2qVb.js";import"./useLocalizedStringFormatter-oiapZ5Do.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CYq6i1lZ.js";import"./useEvent-DP-o3QeH.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Cw3ghCqy.js";import"./VisuallyHidden-CKmYPJ5r.js";import"./clsx-Ciqy0D92.js";import"./Button-BQ5lVkgn.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B9HTUBS2.js";import"./createLucideIcon-R2m_jWpB.js";import"./chevron-left-CW0ddme5.js";import"./chevron-right-DR4mReUe.js";import"./Heading-CzQxReMI.js";import"./FieldError-DwVX8OAB.js";import"./Text-CLyXbdox.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
