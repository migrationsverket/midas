import{$ as c,a as m,r as l,j as d}from"./iframe-B8dODSM7.js";import{C as n}from"./Calendar-joPR0sZ1.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DbyosTU3.js";import"./Button-CEvb2_wi.js";import"./utils-DKhPm4Nt.js";import"./clsx-B-dksMZM.js";import"./Hidden-DILkQdFQ.js";import"./useFocusRing-DKQkST-P.js";import"./index-pILuv3eo.js";import"./index-DvxVvxvs.js";import"./useLabel-CeFvsTDB.js";import"./useLabels-Cr6sIa7x.js";import"./useButton-C2UEY7aL.js";import"./RSPContexts-CqliKkX6.js";import"./Text-CIOHcKum.js";import"./useDateFormatter-DLUtcudm.js";import"./useControlledState-DhH3lMF6.js";import"./useLocalizedStringFormatter-ByMwlETP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DPH9WA_z.js";import"./useEvent-DkI1NEZn.js";import"./getScrollParent-aaxOorIB.js";import"./scrollIntoView-Dkn0W1jL.js";import"./useDescription-BO0eKfud.js";import"./VisuallyHidden-Csntf2Wj.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-Dt3lsN2R.js";import"./createLucideIcon-7ECh1RW_.js";import"./chevron-right-LfF7UlIp.js";import"./Button-BGOYT3gN.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BpbsYO7v.js";import"./Heading-CE4rG5va.js";import"./FieldError-Cs03i1ku.js";import"./Text-DyDE_nMf.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
