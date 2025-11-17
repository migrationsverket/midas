import{$ as p,a as m,r as l,j as d}from"./iframe-DzMIb7Ox.js";import{C as n}from"./Calendar-CrrxSFKV.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DLY1_qU3.js";import"./Button-Crwjj3sD.js";import"./utils-Cdwe4BCh.js";import"./clsx-B-dksMZM.js";import"./Hidden-DAvjwAnA.js";import"./useFocusRing-BFU8EAFv.js";import"./index-DW-0uUM6.js";import"./index-Cl0FZxW_.js";import"./useLabels-CeSEzTdd.js";import"./useButton-1toAChHK.js";import"./RSPContexts-DJiMJ6Uh.js";import"./Text-BBuKGEIS.js";import"./useDateFormatter-CFheGWWG.js";import"./useControlledState-C6lxKGJg.js";import"./useLocalizedStringFormatter-Cm24wEWc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-a3rkpYT3.js";import"./useEvent-ZscvBuYj.js";import"./getScrollParent-BMEE02Hx.js";import"./scrollIntoView-C77nXoWt.js";import"./useDescription-BHWqtBw9.js";import"./VisuallyHidden-BJydeYP9.js";import"./clsx-Ciqy0D92.js";import"./Button-BHSCiAEx.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-DxKoJQzX.js";import"./chevron-right-V_emao_e.js";import"./Heading-Br2mJzVB.js";import"./FieldError-DbxKaZYC.js";import"./Text-CuzShXx2.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const L=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,L as __namedExportsOrder,K as default};
