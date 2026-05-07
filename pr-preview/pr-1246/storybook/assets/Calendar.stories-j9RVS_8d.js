import{$ as c,a as m,r as l,j as d}from"./iframe-Dy3Rw66z.js";import{C as n}from"./Calendar-BsZ5AVEH.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BQ3BQDvm.js";import"./Button-DWNrJ0qN.js";import"./utils-DtZwbp1W.js";import"./clsx-B-dksMZM.js";import"./Hidden-BiAiu52X.js";import"./useFocusRing-OfUNuA-J.js";import"./index-BL9qN4Dl.js";import"./index-C7Y6vcpr.js";import"./useLabel-B2Izx8ga.js";import"./useLabels-CiX5UPE6.js";import"./useButton-DzKW80i7.js";import"./RSPContexts-C0IvGsnI.js";import"./Text-CjiLEpJA.js";import"./useDateFormatter-C3cyyvoQ.js";import"./useControlledState-CujSUpWY.js";import"./useLocalizedStringFormatter-CUaO5Dey.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-tVGoV8hb.js";import"./useEvent-DcOaT4Vn.js";import"./getScrollParent-sGEfSoh4.js";import"./scrollIntoView-DNWLzZw6.js";import"./useDescription-BNi02mG9.js";import"./VisuallyHidden-ke2bwlqF.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DN0xOQhX.js";import"./createLucideIcon-CGcaihwO.js";import"./chevron-right-Bx54I53E.js";import"./Button-Cl_Vf5i1.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BdDGNVQC.js";import"./Heading-CVTdlCZ7.js";import"./FieldError-CRQYtwdw.js";import"./Text-BOYOdsAw.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
