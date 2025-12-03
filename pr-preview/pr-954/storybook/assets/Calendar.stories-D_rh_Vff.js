import{$ as p,a as m,r as l,j as d}from"./iframe-BOu6r4-L.js";import{C as n}from"./Calendar-CWg9lFU6.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Cn6VX81m.js";import"./Button-B0Z6PH11.js";import"./utils-Of-4zx3T.js";import"./clsx-B-dksMZM.js";import"./Hidden-2Cq_win6.js";import"./useFocusRing-CFbRrjJi.js";import"./index-DqaHjeC4.js";import"./index-CMXhJPlL.js";import"./useLabels-BrgyP2gh.js";import"./useButton-BT4cJEqS.js";import"./RSPContexts-D6jwhaRj.js";import"./Text-zopR0-zB.js";import"./useDateFormatter-D3IyLJgV.js";import"./useControlledState--hsMgjoo.js";import"./useLocalizedStringFormatter-BW64KWwC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C3Uj5Bhu.js";import"./useEvent-CoQgBDF8.js";import"./getScrollParent-BlFk2VvU.js";import"./scrollIntoView-7tZxxRg-.js";import"./useDescription-DJ-wqbC6.js";import"./VisuallyHidden-Dj8ZJDI7.js";import"./clsx-Ciqy0D92.js";import"./Button-ndCSfgaE.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CTxkkben.js";import"./createLucideIcon-D3MExOcj.js";import"./chevron-right-Dg_cbKs0.js";import"./Heading-BD9bvnEY.js";import"./FieldError-D7y_D_tp.js";import"./Text-BqeEVLWH.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
