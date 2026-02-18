import{$ as c,a as m,r as l,j as d}from"./iframe-CjheOyM5.js";import{C as n}from"./Calendar-BnDPSyTf.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CMGOo2_e.js";import"./Button-BEfApAj7.js";import"./utils-GJab0JjV.js";import"./clsx-B-dksMZM.js";import"./Hidden-fPTMSZG1.js";import"./useFocusRing-BQBU-xxB.js";import"./index-BdSERe24.js";import"./index-CQFCXopn.js";import"./useLabels-CB9GaZKC.js";import"./useButton-BK6j3-_O.js";import"./RSPContexts-CC-kh1Fw.js";import"./Text-CyPeEhZq.js";import"./useDateFormatter-3nh25lpU.js";import"./useControlledState-BFDK1kJU.js";import"./useLocalizedStringFormatter-Bb6KJ9HR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-qDcCXVZp.js";import"./useEvent-DLgfOL5L.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-NtTCr5vC.js";import"./VisuallyHidden-BkQsNkQj.js";import"./clsx-Ciqy0D92.js";import"./Button-D6LrA16i.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-o8VSdvfs.js";import"./createLucideIcon-D7R3LjHD.js";import"./chevron-left-DZC5lBJm.js";import"./chevron-right-BeApav1u.js";import"./Heading-BFp0CnUy.js";import"./FieldError-CtzgHxZv.js";import"./Text-DfjK2rvS.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const T=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,T as __namedExportsOrder,Q as default};
