import{$ as c,a as m,r as l,j as d}from"./iframe-DLIfUtVm.js";import{C as n}from"./Calendar-CZY1xibD.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-7Hf4KbYJ.js";import"./Button-DjhlSD9p.js";import"./utils-DijK3BhG.js";import"./clsx-B-dksMZM.js";import"./Hidden-gQ2c-O38.js";import"./useFocusRing-B-eRA-0U.js";import"./index-ic1LOc6Q.js";import"./index-BmToxQMH.js";import"./useLabel-CMC2PGue.js";import"./useLabels-D1ty8LnF.js";import"./useButton-B7XowPCf.js";import"./RSPContexts-D91XMIa7.js";import"./Text-BOHNy1km.js";import"./useDateFormatter-DBaM9n1n.js";import"./useControlledState-TKTqriB6.js";import"./useLocalizedStringFormatter-4oJDcrPd.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BVTowmdB.js";import"./useEvent-COzGA22f.js";import"./getScrollParent-QlPDcvR1.js";import"./scrollIntoView-C8C62cn2.js";import"./useDescription-BaeFvinJ.js";import"./VisuallyHidden-B6pFoD4c.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-S3sePfFx.js";import"./createLucideIcon-D_WvFzuZ.js";import"./chevron-right-CEUc0U80.js";import"./Button-C_w78fqJ.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-vmL8Qz6d.js";import"./Heading-B0E4XyP3.js";import"./FieldError-BHIohEsL.js";import"./Text-CpkwsxmM.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const V=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,V as __namedExportsOrder,T as default};
