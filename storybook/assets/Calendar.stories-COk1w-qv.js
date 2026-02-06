import{$ as c,a as m,r as l,j as d}from"./iframe-D-REpNT2.js";import{C as n}from"./Calendar-CvBJfMNR.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D5rWqhA9.js";import"./Button-CSGruNvs.js";import"./utils-BDMdsvrX.js";import"./clsx-B-dksMZM.js";import"./Hidden-DBxbBPM8.js";import"./useFocusRing-BWmdFu0w.js";import"./index-CBX90dgQ.js";import"./index-Bb_XCQXS.js";import"./useLabels-CL0mObZW.js";import"./useButton-BVLm7XF-.js";import"./RSPContexts-CXb92NO5.js";import"./Text-C9Slm4PY.js";import"./useDateFormatter-CYpHpvyJ.js";import"./useControlledState-CRTz0NCq.js";import"./useLocalizedStringFormatter-D5aBFhGc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-U_RIkODl.js";import"./useEvent-D-eD8_or.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-5inR-ZqS.js";import"./VisuallyHidden-CjlKzDWm.js";import"./clsx-Ciqy0D92.js";import"./Button-MhaT5nTu.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Cz89ib5x.js";import"./createLucideIcon-BcZu8RhE.js";import"./chevron-left-CSdnqM2t.js";import"./chevron-right-cCcQko6L.js";import"./Heading-C72zqHqg.js";import"./FieldError-CA_O69rJ.js";import"./Text-MiHH5yI1.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
