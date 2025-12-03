import{$ as p,a as m,r as l,j as d}from"./iframe-DKD8Hhkt.js";import{C as n}from"./Calendar-nwYVxZGy.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-LSwBO01Q.js";import"./Button-BwBVmhGW.js";import"./utils-MI8bpwWe.js";import"./clsx-B-dksMZM.js";import"./Hidden-DPLxNawq.js";import"./useFocusRing-DaRRNwj-.js";import"./index-BBc3oC3v.js";import"./index-CbSysqEM.js";import"./useLabels-C8mFIlFg.js";import"./useButton-sutBB3el.js";import"./RSPContexts-BquRMNxt.js";import"./Text-CAhqk-DI.js";import"./useDateFormatter-DMEpEPIS.js";import"./useControlledState-CoGFVVHL.js";import"./useLocalizedStringFormatter-tIc5njIq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CTItGy73.js";import"./useEvent-GK6_gpuW.js";import"./getScrollParent-DYmInOV2.js";import"./scrollIntoView-BMVD6Opw.js";import"./useDescription-qUz9Rnax.js";import"./VisuallyHidden-9B-wHDrP.js";import"./clsx-Ciqy0D92.js";import"./Button-CPOu634C.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DNj3ahoN.js";import"./createLucideIcon-BawZSGby.js";import"./chevron-right-DI1ofoav.js";import"./Heading-BC4KM-ZJ.js";import"./FieldError-bIrBWj8O.js";import"./Text-CEobg6V0.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
