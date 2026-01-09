import{$ as p,a as m,r as l,j as d}from"./iframe-DSpa0ZJj.js";import{C as n}from"./Calendar-Cawg5Tzd.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CA1jafPb.js";import"./Button-Cz-z0Ko6.js";import"./utils-W7NKEzNd.js";import"./clsx-B-dksMZM.js";import"./Hidden-Bn_hIWKG.js";import"./useFocusRing-CHFIxq0S.js";import"./index-Bm634ACX.js";import"./index-JwgIIJLt.js";import"./useLabels-CCN5xeFd.js";import"./useButton-Cu2rmCSH.js";import"./RSPContexts-2cznPi_5.js";import"./Text-B4__o0ew.js";import"./useDateFormatter-cHV9Fk-1.js";import"./useControlledState-BWGhdnzP.js";import"./useLocalizedStringFormatter-20jVmx8j.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DU3oi-Z_.js";import"./useEvent-DSFx2P8Q.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Q359T3QE.js";import"./VisuallyHidden-8eYS4FK5.js";import"./clsx-Ciqy0D92.js";import"./Button-Cdop71cL.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DPq-0JGc.js";import"./createLucideIcon-DKtiU0kB.js";import"./chevron-right-ihEXn5x9.js";import"./Heading-PeB1jTB-.js";import"./FieldError-D4Zul2ht.js";import"./Text-CuC4lmi7.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
