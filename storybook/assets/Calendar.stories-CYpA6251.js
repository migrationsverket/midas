import{$ as p,a as m,r as l,j as d}from"./iframe-CZTdAuLL.js";import{C as n}from"./Calendar-BuqMUZuY.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BfPrN6rV.js";import"./Button-DKjLxueu.js";import"./utils-GGwn7RiQ.js";import"./clsx-B-dksMZM.js";import"./Hidden-BdpD47Oa.js";import"./useFocusRing-BSU_jsuo.js";import"./index-CbuYzQrS.js";import"./index-Dy_KSJtF.js";import"./useLabels-BNcETZqg.js";import"./useButton-DXw3P5Be.js";import"./RSPContexts-oB4wdkDb.js";import"./Text-Dvj4eqEd.js";import"./useDateFormatter-BENbCeT6.js";import"./useControlledState-CG6WOxF-.js";import"./useLocalizedStringFormatter-CcV7KYjT.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-tYpZRE2L.js";import"./useEvent-BFknnVL3.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DpLhcWK7.js";import"./VisuallyHidden-O6FFlbhO.js";import"./clsx-Ciqy0D92.js";import"./Button--pbAGE4c.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D-uEk36w.js";import"./createLucideIcon-BlxvcGuc.js";import"./chevron-right-QnPEgG-P.js";import"./Heading-DZGMY1f3.js";import"./FieldError-BY6a5paY.js";import"./Text-DZZVuCM0.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
