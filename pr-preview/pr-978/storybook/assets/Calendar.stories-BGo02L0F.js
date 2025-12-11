import{$ as c,a as m,r as l,j as d}from"./iframe-BMeA-RN6.js";import{C as n}from"./Calendar-DUwCY2AT.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Cui0y0D_.js";import"./Button-b7DAjz5F.js";import"./utils-D-POQ3d7.js";import"./clsx-B-dksMZM.js";import"./Hidden-B5LLNwAb.js";import"./useFocusRing-CtghauyP.js";import"./index-CknK32V_.js";import"./index-DwmAtCXr.js";import"./useLabels-BMjdtdsU.js";import"./useButton-Dw1G8P0H.js";import"./RSPContexts-DRDWvQzB.js";import"./Text-D3CkMuyw.js";import"./useDateFormatter-Dg-nN7mB.js";import"./useControlledState-B9yv0jWj.js";import"./useLocalizedStringFormatter-BUX58cI-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BLgwwiEq.js";import"./useEvent-DgIhMCFn.js";import"./getScrollParent-BswwR7TE.js";import"./scrollIntoView-C4X0t-7E.js";import"./useDescription-h-uPIWF3.js";import"./VisuallyHidden-3ctKZrmJ.js";import"./clsx-Ciqy0D92.js";import"./Button-BdoKN1aN.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DVzCWO_w.js";import"./createLucideIcon-CKOT3wpY.js";import"./chevron-left-CGakS7H2.js";import"./chevron-right-yF1OK5G7.js";import"./Heading-Hdvcobgi.js";import"./FieldError-ounuCchV.js";import"./Text-BhHw_bJV.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
