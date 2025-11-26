import{$ as p,a as m,r as l,j as d}from"./iframe-RVXDGCzj.js";import{C as n}from"./Calendar-D3CK-KUh.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CQY-_5l9.js";import"./Button-Cz75Jen_.js";import"./utils-iN7SzKyx.js";import"./clsx-B-dksMZM.js";import"./Hidden-Db8RCo9R.js";import"./useFocusRing-sIIsP_Ie.js";import"./index-DsyKD1zx.js";import"./index-BAD9ZDfl.js";import"./useLabels-DJJVN5GP.js";import"./useButton-1XCOziGF.js";import"./RSPContexts-etk9STJM.js";import"./Text-oVUe24-Y.js";import"./useDateFormatter-BeW-m-N3.js";import"./useControlledState-vlSlkaDy.js";import"./useLocalizedStringFormatter-BTQA-h52.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CEhp2rdz.js";import"./useEvent-Db1fO8KO.js";import"./getScrollParent-DamLJe1F.js";import"./scrollIntoView-CdSTv21u.js";import"./useDescription-BCQ1k-43.js";import"./VisuallyHidden-DItlx4KW.js";import"./clsx-Ciqy0D92.js";import"./Button-c186Iq00.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-HLcBV4V1.js";import"./createLucideIcon-BjtbSbwb.js";import"./chevron-right-mDB4sqD9.js";import"./Heading-HJFjTeVj.js";import"./FieldError-B3uFZtah.js";import"./Text-D1N65mcs.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
