import{$ as c,a as m,r as l,j as d}from"./iframe-9MdBivRm.js";import{C as n}from"./Calendar-rEx9NK_w.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BWnx7VTP.js";import"./Button-CB5roEUk.js";import"./utils-Bn94QCjx.js";import"./clsx-B-dksMZM.js";import"./Hidden-mlaG9dyz.js";import"./useFocusRing-r9TCofSe.js";import"./index-Cx-gCRg0.js";import"./index-CYPjKd3_.js";import"./useLabel-DJ2FRaty.js";import"./useLabels-BVQx-2qb.js";import"./useButton-9AsuX9J0.js";import"./RSPContexts-yk-QUR19.js";import"./Text-DqogYLWC.js";import"./useDateFormatter-CY03jDaD.js";import"./useControlledState-DASGxOGH.js";import"./useLocalizedStringFormatter-BqBDGzJt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-D67O-OBM.js";import"./useEvent-CzJ1Xvo0.js";import"./getScrollParent-B8busNPw.js";import"./scrollIntoView--qBAJMrU.js";import"./useDescription-u6RsoVs5.js";import"./VisuallyHidden-B5GjKkS-.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BYlCiDPd.js";import"./createLucideIcon-w3wG1Pu8.js";import"./chevron-right-DwC_ftFs.js";import"./Button-oaXlsJtI.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BF9QVzFe.js";import"./Heading-CyZPaCxb.js";import"./FieldError-C2tntPOB.js";import"./Text-B_WlxrH5.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
