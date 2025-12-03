import{$ as p,a as m,r as l,j as d}from"./iframe-CxtXgaif.js";import{C as n}from"./Calendar-X9FznxBM.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CZQGhAw9.js";import"./Button-QJx86_Xy.js";import"./utils-BHaXAsAf.js";import"./clsx-B-dksMZM.js";import"./Hidden-BtogIfXa.js";import"./useFocusRing-C31KCpBg.js";import"./index-LOJiVQyp.js";import"./index-McGX5QjV.js";import"./useLabels-Cied99SI.js";import"./useButton-Cv4m8R1u.js";import"./RSPContexts-Bpq_c5A9.js";import"./Text-hsuWdQJy.js";import"./useDateFormatter-CYL6bRPU.js";import"./useControlledState-va708PFm.js";import"./useLocalizedStringFormatter-CiYxBryn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BKp0i-R8.js";import"./useEvent-BLEaEyxT.js";import"./getScrollParent-B9reZdFx.js";import"./scrollIntoView-DVjFN4rN.js";import"./useDescription-BJDx3EcI.js";import"./VisuallyHidden-CVvKj0Xg.js";import"./clsx-Ciqy0D92.js";import"./Button-CZkEUMhX.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DVPw1CAM.js";import"./createLucideIcon-CsCGHR6v.js";import"./chevron-right-zA9RaL1G.js";import"./Heading-BKwB8iEY.js";import"./FieldError-DOlGeurh.js";import"./Text-BZPjmLfW.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
