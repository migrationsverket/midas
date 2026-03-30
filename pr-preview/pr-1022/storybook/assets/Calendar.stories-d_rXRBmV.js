import{$ as c,a as m,r as l,j as d}from"./iframe-BCVsy88N.js";import{C as n}from"./Calendar-CZ36IFNQ.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DE2R7fw_.js";import"./Button-Kvyi1RRX.js";import"./utils-C-OmHNLm.js";import"./clsx-B-dksMZM.js";import"./Hidden-CN3dXu03.js";import"./useFocusRing-eWhXbche.js";import"./index-BwfJQ9F8.js";import"./index-cJVZ5RXC.js";import"./useLabel-BbZWMYwa.js";import"./useLabels-COZKzSvp.js";import"./useButton-DfNnGNTV.js";import"./RSPContexts-BeHTEqOC.js";import"./Text-CJD2elUx.js";import"./useDateFormatter-ViXgCn61.js";import"./useControlledState-jD-tqQdO.js";import"./useLocalizedStringFormatter-atdiyxXD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Ct6IYVOF.js";import"./useEvent-D0oKdA7w.js";import"./getScrollParent-0ANyO0oI.js";import"./scrollIntoView-BpYW2Snh.js";import"./useDescription-BypmPDUq.js";import"./VisuallyHidden-D6HKc_n0.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-D0qiWAme.js";import"./createLucideIcon-D1oE0F07.js";import"./chevron-right-CsFXiEFG.js";import"./Button-VV8KlKzK.js";import"./Button.module-BFenTVPP.js";import"./useLocalizedStringFormatter-mDxu21Fd.js";import"./Heading-bh_ln7Ke.js";import"./FieldError-DIexkAgJ.js";import"./Text-C7Bb6ebF.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
