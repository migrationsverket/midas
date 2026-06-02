import{$ as c,a as m,r as l,j as d}from"./iframe-_Hk9HBhX.js";import{C as n}from"./Calendar-spTkfXz4.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CvMIG8QT.js";import"./Button-BcVwX6wB.js";import"./utils-Tr1wzETD.js";import"./clsx-B-dksMZM.js";import"./Hidden-vPthIoGd.js";import"./useFocusRing-CUpBT6GV.js";import"./index-fEZrWfc8.js";import"./index-Cjzv3PRo.js";import"./useLabel-CG8Xm4bD.js";import"./useLabels-XRHHudnr.js";import"./useButton-CZkGYXOZ.js";import"./RSPContexts-BkY4NJgN.js";import"./Text-CFXOaGuN.js";import"./useDateFormatter-D6_X-3MO.js";import"./useControlledState-CXVEjKuF.js";import"./useLocalizedStringFormatter-xIKmWIeo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BotRKgqK.js";import"./useEvent-BoXIj02p.js";import"./getScrollParent-arYGATXV.js";import"./scrollIntoView-DeSIzk3n.js";import"./useDescription-Br1cNKJN.js";import"./VisuallyHidden-CE55BuvM.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CL7CHqa5.js";import"./createLucideIcon-qIP4byR5.js";import"./chevron-right-KepLCnZF.js";import"./Button-BPI35lWH.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DUwGsNzO.js";import"./Heading-CVFjfB5H.js";import"./FieldError-BnqaSw3Q.js";import"./Text-4AExYRWh.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
