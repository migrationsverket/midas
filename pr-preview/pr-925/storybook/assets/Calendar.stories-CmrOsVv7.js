import{$ as p,a as m,r as l,j as d}from"./iframe-nGNo9-8O.js";import{C as n}from"./Calendar-BFYKH9k5.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DMHhbJ13.js";import"./Button-eRwgxovv.js";import"./utils-UNFcTH9P.js";import"./clsx-B-dksMZM.js";import"./Hidden-CvblkW9k.js";import"./useFocusRing-C4tRJGEy.js";import"./index-Bofu8C1l.js";import"./index-C-K6rHqI.js";import"./useLabels-DhwZeyz8.js";import"./useButton-BNd8Ph1P.js";import"./RSPContexts-ows3dTJg.js";import"./Text-Z8AhytFT.js";import"./useDateFormatter-DsuOCczw.js";import"./useControlledState-EHg2JhJE.js";import"./useLocalizedStringFormatter-BA4G5uku.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-XtXnD125.js";import"./useEvent-xRdD90JH.js";import"./getScrollParent-QuAjI_UN.js";import"./scrollIntoView-DCwh4uUE.js";import"./useDescription-BAV84UvR.js";import"./VisuallyHidden-GtNNRbXA.js";import"./clsx-Ciqy0D92.js";import"./Button-LUv1NTVn.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BT8srvPn.js";import"./createLucideIcon-BBha-BqP.js";import"./chevron-right-DL1hIH1j.js";import"./Heading-D7BtKegf.js";import"./FieldError-CT-Q184-.js";import"./Text-f2btrM1d.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
