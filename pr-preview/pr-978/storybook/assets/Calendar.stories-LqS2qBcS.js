import{$ as c,a as m,r as l,j as d}from"./iframe-ByNEmIOU.js";import{C as n}from"./Calendar-BbFOHOFP.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C8SHfLoJ.js";import"./Button-CZ3GNczv.js";import"./utils-DTOyoAZG.js";import"./clsx-B-dksMZM.js";import"./Hidden-D8ivFDCG.js";import"./useFocusRing-CytbFWM3.js";import"./index-DBfj5PxR.js";import"./index-CGNcjuez.js";import"./useLabels-lfHEtpRl.js";import"./useButton-DMFyreMT.js";import"./RSPContexts-BsQr0774.js";import"./Text-BNZ-1xk8.js";import"./useDateFormatter-BUMXSdl3.js";import"./useControlledState-BenzJtep.js";import"./useLocalizedStringFormatter-YRte3exA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BEuiqXbu.js";import"./useEvent-C5ByhIa5.js";import"./getScrollParent-DTrxB9eS.js";import"./scrollIntoView-BsCZGpGi.js";import"./useDescription-BQ4qbpcd.js";import"./VisuallyHidden-B2loE3ZQ.js";import"./clsx-Ciqy0D92.js";import"./Button-BZj1eUaG.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-WWUimbhC.js";import"./createLucideIcon-HuBhSAyF.js";import"./chevron-left-BRHUK7dr.js";import"./chevron-right-em0qxyJu.js";import"./Heading-B9sYL-oJ.js";import"./FieldError-3BzwtZU_.js";import"./Text-D_4I_8jd.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
