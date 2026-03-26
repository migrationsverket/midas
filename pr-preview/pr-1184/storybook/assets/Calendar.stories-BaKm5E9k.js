import{$ as c,a as m,r as l,j as d}from"./iframe-2N4-NX-9.js";import{C as n}from"./Calendar-CGi-S8-u.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-B2latoQX.js";import"./Button-BdOK34vS.js";import"./utils-BDyzcRVF.js";import"./clsx-B-dksMZM.js";import"./Hidden-ByQp7cFw.js";import"./useFocusRing-CqNKm5um.js";import"./index-eEiNBmo6.js";import"./index-Boj7wyxf.js";import"./useLabel-Dt5gD5WC.js";import"./useLabels-BXMOGpY3.js";import"./useButton-DXuSSmPY.js";import"./RSPContexts-euEKx97A.js";import"./Text-CG1bHrxb.js";import"./useDateFormatter-CZ2q1Ial.js";import"./useControlledState-CJB9gvxC.js";import"./useLocalizedStringFormatter-B22JGswt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C8hKK484.js";import"./useEvent-Br-HnPPz.js";import"./getScrollParent-zIWWR_Mu.js";import"./scrollIntoView-7_tk7XK0.js";import"./useDescription-QUyLBt1z.js";import"./VisuallyHidden-BgOvzTZH.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BRmyRcEh.js";import"./createLucideIcon-BP_ZdL8b.js";import"./chevron-right-B3Pme5RO.js";import"./Button-BhHUqRPQ.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DUswzrwG.js";import"./Heading-faSUuyYq.js";import"./FieldError-DbzXWBkQ.js";import"./Text-C8oRKnIX.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
