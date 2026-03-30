import{$ as c,a as m,r as l,j as d}from"./iframe-BY9vh6z6.js";import{C as n}from"./Calendar-3Rm2qEws.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DTMuFjpI.js";import"./Button-BRroCyFc.js";import"./utils-CvO9wRJK.js";import"./clsx-B-dksMZM.js";import"./Hidden-CtZVxLKv.js";import"./useFocusRing-C58Wldhw.js";import"./index-BCEmrA-k.js";import"./index-BY7PPuin.js";import"./useLabel-BGiQ4ILo.js";import"./useLabels-BEKF_Ui1.js";import"./useButton-C5riGvhj.js";import"./RSPContexts-DvzJiI6P.js";import"./Text-CS2W2lPB.js";import"./useDateFormatter-DopxvfKy.js";import"./useControlledState-tRNWjYkK.js";import"./useLocalizedStringFormatter-DvhmXb5T.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-7lR-FIgq.js";import"./useEvent-Dxv08bvf.js";import"./getScrollParent-DrF2sSND.js";import"./scrollIntoView-CCKb3jUj.js";import"./useDescription-Cjh6szWZ.js";import"./VisuallyHidden-D_LmADCN.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-YElkW3kX.js";import"./createLucideIcon-BXNm475a.js";import"./chevron-right-CRWT-yjz.js";import"./Button-C6EXF9Um.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CAo6NRgz.js";import"./Heading-CGdkvWQV.js";import"./FieldError-DeHNS8yq.js";import"./Text-D2NltcsY.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
