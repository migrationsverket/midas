import{$ as c,a as m,r as l,j as d}from"./iframe-Br4UFWDA.js";import{C as n}from"./Calendar-BX_cceNO.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DaYjYeNP.js";import"./Button-DiwUVhQg.js";import"./utils-Bfs2iwu7.js";import"./clsx-B-dksMZM.js";import"./Hidden-B2UqZyG9.js";import"./useFocusRing-DmF-1uRF.js";import"./index-B5OjJHm8.js";import"./index-BLvyQ4Zy.js";import"./useLabel-PuL03Jmv.js";import"./useLabels-CD31_qda.js";import"./useButton-BuJxASXi.js";import"./RSPContexts-BSDVlP-T.js";import"./Text-DBKCtpuc.js";import"./useDateFormatter-BVxXVbTD.js";import"./useControlledState-t0OgLn8n.js";import"./useLocalizedStringFormatter-BYNBY8Ij.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CWon9Dr4.js";import"./useEvent-CVcdG4ON.js";import"./getScrollParent-BvBLI2ok.js";import"./scrollIntoView-Imy71PHr.js";import"./useDescription-DN-UTWji.js";import"./VisuallyHidden-BnWQuQpu.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CfwBdEzq.js";import"./createLucideIcon-CSxAjQ3c.js";import"./chevron-right-DWWxqP9R.js";import"./Button-B62uNfEE.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-B9cG3ozx.js";import"./Heading-BDXKjMa8.js";import"./FieldError-ClRId_ZV.js";import"./Text-C3N7Tmxi.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
