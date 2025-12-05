import{$ as p,a as m,r as l,j as d}from"./iframe-CWzFX-Au.js";import{C as n}from"./Calendar-DfE4z_X1.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Be3A3Iac.js";import"./Button-CC-tYdMe.js";import"./utils-CvTFoCuM.js";import"./clsx-B-dksMZM.js";import"./Hidden-b8PZeIsK.js";import"./useFocusRing-B_tX-SRB.js";import"./index-DEOOosMo.js";import"./index-5Kn37Y6O.js";import"./useLabels-CVVzofvr.js";import"./useButton-CTuUMItv.js";import"./RSPContexts-DMSmahKw.js";import"./Text-BBMjHQRy.js";import"./useDateFormatter-DhTqo8Ba.js";import"./useControlledState-BEhUYREu.js";import"./useLocalizedStringFormatter-mP_Yqfvz.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Bmef_dWt.js";import"./useEvent-BGsu8qaD.js";import"./getScrollParent-xmVexIhv.js";import"./scrollIntoView-CNn1G9wO.js";import"./useDescription-Cf-6dpdu.js";import"./VisuallyHidden-B6tTkxvS.js";import"./clsx-Ciqy0D92.js";import"./Button-CN-tdIf6.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Cs6gtZeE.js";import"./createLucideIcon-ChdQ3NNl.js";import"./chevron-right-DV-q1EIV.js";import"./Heading-Bbsaqg7w.js";import"./FieldError-rAccfbQj.js";import"./Text-DsDS5WxU.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
