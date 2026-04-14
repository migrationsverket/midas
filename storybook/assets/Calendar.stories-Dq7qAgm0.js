import{$ as c,a as m,r as l,j as d}from"./iframe-CO-rhcep.js";import{C as n}from"./Calendar-BOOsRQwF.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Ds9laMSo.js";import"./Button-BEB_3r-L.js";import"./utils-xXHSLQwD.js";import"./clsx-B-dksMZM.js";import"./Hidden-CWNbbLzJ.js";import"./useFocusRing-DON0ybQn.js";import"./index-BhaZxxI5.js";import"./index-BCVRneEd.js";import"./useLabel-CHsEFPNy.js";import"./useLabels-C_wmlfWA.js";import"./useButton-D7IEmpnO.js";import"./RSPContexts-B-Xm9PzS.js";import"./Text-DdPGOhQT.js";import"./useDateFormatter-DiN89PmA.js";import"./useControlledState-ByGhFCbY.js";import"./useLocalizedStringFormatter-D2pDPRTj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CrpVGJlV.js";import"./useEvent-BTYXRaQg.js";import"./getScrollParent-BKQZghjE.js";import"./scrollIntoView-D7XGELv_.js";import"./useDescription-Be4D-VmW.js";import"./VisuallyHidden-C7JdZ-qs.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-nHkNUA4X.js";import"./createLucideIcon-oXqbvAOH.js";import"./chevron-right-DOGfbUVi.js";import"./Button-ChDRE6gD.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-C-ngEN8v.js";import"./Heading-Bw96Yzvv.js";import"./FieldError-DWjrBszR.js";import"./Text-BNQMcymU.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
