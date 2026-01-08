import{$ as p,a as m,r as l,j as d}from"./iframe-BmoSYdAA.js";import{C as n}from"./Calendar-CjO3brJr.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Q2_Zp_Gw.js";import"./Button-BKQTUCQ9.js";import"./utils-C-CBKXNz.js";import"./clsx-B-dksMZM.js";import"./Hidden-2CP7YcQc.js";import"./useFocusRing-DvskDHXD.js";import"./index-BdUd5uZZ.js";import"./index-0cr7ctwJ.js";import"./useLabels-CxCxcB2N.js";import"./useButton-Z7anNymb.js";import"./RSPContexts-D_jCzI74.js";import"./Text-DaUdSSAr.js";import"./useDateFormatter-VsvgGrCQ.js";import"./useControlledState-Dzoa7zU0.js";import"./useLocalizedStringFormatter-DBGXY-0J.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Ck01zyT4.js";import"./useEvent-DrpJQgWB.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CyzvknZ3.js";import"./VisuallyHidden-sKibH-Cd.js";import"./clsx-Ciqy0D92.js";import"./Button-Br3AxFcp.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Bc48yrq4.js";import"./createLucideIcon-B0lPyAXK.js";import"./chevron-right-DDIOH7PH.js";import"./Heading-Da3dL7Es.js";import"./FieldError-BD5okbww.js";import"./Text-tl12LCyE.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
