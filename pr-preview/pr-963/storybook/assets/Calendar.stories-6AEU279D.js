import{$ as p,a as m,r as l,j as d}from"./iframe-EvAXEFMI.js";import{C as n}from"./Calendar-BZjsHMIe.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CrArN1AK.js";import"./Button-CoUp-4SO.js";import"./utils-CxbI4lJ8.js";import"./clsx-B-dksMZM.js";import"./Hidden-DF-gcxja.js";import"./useFocusRing-DfVRu85N.js";import"./index-BERR-sy9.js";import"./index-5Nx_3vzb.js";import"./useLabels-CcKLbZF9.js";import"./useButton-CyNHfsAf.js";import"./RSPContexts-79mGs6IV.js";import"./Text-C1bk4Rmu.js";import"./useDateFormatter-CyvbgvD9.js";import"./useControlledState-B-dx9B_p.js";import"./useLocalizedStringFormatter-LpBXKpWQ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-gl58YIk9.js";import"./useEvent-CwuJt_mK.js";import"./getScrollParent-C-4i_HdT.js";import"./scrollIntoView-C9rzGjd3.js";import"./useDescription-DBAUb1QW.js";import"./VisuallyHidden-Bx2PPkoO.js";import"./clsx-Ciqy0D92.js";import"./Button-DNu20i5o.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BQT0Ev-t.js";import"./createLucideIcon-Dkm_kHZA.js";import"./chevron-right-EvqZXoDK.js";import"./Heading-BdUvKCq1.js";import"./FieldError-BYwZNEs3.js";import"./Text-CAHlbO0E.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
