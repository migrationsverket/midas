import{$ as c,a as m,r as l,j as d}from"./iframe-D2QiFl1Q.js";import{C as n}from"./Calendar-JuiCHlhv.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-cooZgwf8.js";import"./Button-jwqYg1go.js";import"./utils-C8ZbQkE7.js";import"./clsx-B-dksMZM.js";import"./Hidden-Ec0HhwAs.js";import"./useFocusRing-CBM371L3.js";import"./index-Cl8hPLRd.js";import"./index-McmNB2RO.js";import"./useLabels-By_yzmZ7.js";import"./useButton-q6SL79uh.js";import"./RSPContexts-CrDf2hpR.js";import"./Text-BwutiQ1I.js";import"./useDateFormatter-BV9mG7y4.js";import"./useControlledState-l7K5Cl0t.js";import"./useLocalizedStringFormatter-AJrWLMlk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DVhd3ArW.js";import"./useEvent-KlMFWHnu.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BCN90KGy.js";import"./VisuallyHidden-LF61GAgF.js";import"./clsx-Ciqy0D92.js";import"./Button-fUVp2AkT.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-lXxhePp3.js";import"./createLucideIcon-D1IpgdG_.js";import"./chevron-left-CiYZf8J4.js";import"./chevron-right-DrS444YM.js";import"./Heading-CVxW4iun.js";import"./FieldError-DzMY0KoY.js";import"./Text-Czz1G82J.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
