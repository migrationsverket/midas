import{$ as c,a as m,r as l,j as d}from"./iframe-D4usB9n2.js";import{C as n}from"./Calendar-Bw51GJUb.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DU16-PHI.js";import"./Button-C0ozI8gk.js";import"./utils-Chiz1oN2.js";import"./clsx-B-dksMZM.js";import"./Hidden-Cn6dZTod.js";import"./useFocusRing-ihkH1nOS.js";import"./index-D_BiQ3CN.js";import"./index-D7VIiBEs.js";import"./useLabel-Bqb-L3h5.js";import"./useLabels-D2vaRbqn.js";import"./useButton-DDapGTCA.js";import"./RSPContexts-D-vGj3gL.js";import"./Text-DCjCSbNe.js";import"./useDateFormatter-DEoYh-ab.js";import"./useControlledState-DA5Xz2a0.js";import"./useLocalizedStringFormatter-_6pgVaCX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Df8ADDLK.js";import"./useEvent-B_vV08nn.js";import"./getScrollParent-BPU2H25u.js";import"./scrollIntoView-DMee3u0y.js";import"./useDescription-CP735cHb.js";import"./VisuallyHidden-DISGYBiK.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-C5DbMXlR.js";import"./createLucideIcon-DqajdqxS.js";import"./chevron-right-DCEqpXcn.js";import"./Button-DaUg4W92.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-C7hYA8xN.js";import"./Heading-BcqVgANH.js";import"./FieldError-CPaCZkAy.js";import"./Text-BPVUDIkV.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
