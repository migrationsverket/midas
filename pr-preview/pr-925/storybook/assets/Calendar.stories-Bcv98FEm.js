import{$ as p,a as m,r as l,j as d}from"./iframe-jgKyCgCs.js";import{C as n}from"./Calendar-C9fSSXYX.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CFtk5mX6.js";import"./Button-qMrleB50.js";import"./utils-Di2SFccO.js";import"./clsx-B-dksMZM.js";import"./Hidden-DKkXPRAB.js";import"./useFocusRing-iYG5kAH5.js";import"./index-DG2WG7qx.js";import"./index-BFSl9xNw.js";import"./useLabels-mdXMBDxR.js";import"./useButton-DdA7_Pcq.js";import"./RSPContexts-CjB3U11V.js";import"./Text-CyTszoD0.js";import"./useDateFormatter-CWepFZgq.js";import"./useControlledState-BchtzvOb.js";import"./useLocalizedStringFormatter-CytWURy7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-D--3dXfO.js";import"./useEvent-B4KHg1tu.js";import"./getScrollParent-CU028xxg.js";import"./scrollIntoView-DpvrOgVf.js";import"./useDescription-CFNrmai2.js";import"./VisuallyHidden-C4wfS2L1.js";import"./clsx-Ciqy0D92.js";import"./Button-DWs9gr3F.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-CWyh0Gfz.js";import"./chevron-right-Calvq0Px.js";import"./Heading-I7geM05-.js";import"./FieldError-B54BjIf5.js";import"./FieldError-CoMeK_07.js";import"./Text-B1Y_W_Ha.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
