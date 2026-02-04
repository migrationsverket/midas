import{$ as c,a as m,r as l,j as d}from"./iframe-a-0QSjcf.js";import{C as n}from"./Calendar-CVsxYR3M.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BKlcZPJK.js";import"./Button-C60PLABZ.js";import"./utils-B_-tSBeZ.js";import"./clsx-B-dksMZM.js";import"./Hidden-B9ZA2jSe.js";import"./useFocusRing-Czic3fia.js";import"./index-7-rgoRIg.js";import"./index-BW6KTqQa.js";import"./useLabels-BJ97I3JO.js";import"./useButton-CYqr7EFX.js";import"./RSPContexts-D7vEIwAp.js";import"./Text-BKQI6ihA.js";import"./useDateFormatter-D-d5dns9.js";import"./useControlledState-DQziIZ9T.js";import"./useLocalizedStringFormatter-JU1_R9Z5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B3Cg0W0K.js";import"./useEvent-DG_5MX2s.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DFv-da9o.js";import"./VisuallyHidden-B518bO6H.js";import"./clsx-Ciqy0D92.js";import"./Button-D2oQUHVT.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D3fQfCDh.js";import"./createLucideIcon-Dsg6rjRC.js";import"./chevron-left-uP3u6uVr.js";import"./chevron-right-_W-Lemr8.js";import"./Heading-D2oXPaON.js";import"./FieldError-DsswgMzG.js";import"./Text-B2LxCzJs.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
