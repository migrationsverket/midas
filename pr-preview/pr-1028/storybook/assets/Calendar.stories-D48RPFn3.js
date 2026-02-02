import{$ as c,a as m,r as l,j as d}from"./iframe-BhBYd-yz.js";import{C as n}from"./Calendar-B-Ke0z8V.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-ChkO0e4J.js";import"./Button-BahhSbHm.js";import"./utils-dKiMTOip.js";import"./clsx-B-dksMZM.js";import"./Hidden-rBTlH4Hd.js";import"./useFocusRing-CTfHsPPf.js";import"./index-Bb1CvUWk.js";import"./index-4IMT8kge.js";import"./useLabels-WxFJLHTa.js";import"./useButton-CPG29_41.js";import"./RSPContexts-Bop_NSvS.js";import"./Text-Cnf9RaEJ.js";import"./useDateFormatter-CBWZZLEg.js";import"./useControlledState-BoIGYg0G.js";import"./useLocalizedStringFormatter-FWWM_265.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-8XVjpYUZ.js";import"./useEvent-B-Flje4X.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DJAzLegN.js";import"./VisuallyHidden-C_umXD1b.js";import"./clsx-Ciqy0D92.js";import"./Button-CltQ2OUe.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DxUWb3BW.js";import"./createLucideIcon-C3sGvf5y.js";import"./chevron-left-BLPUAJB_.js";import"./chevron-right-DWOYi66u.js";import"./Heading-ByYP2DRA.js";import"./FieldError-6GseZL7F.js";import"./Text-DPMgLSbx.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
