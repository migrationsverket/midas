import{$ as c,a as m,r as l,j as d}from"./iframe-CDna8jjE.js";import{C as n}from"./Calendar-Dbv4HQRu.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CWB42kFj.js";import"./Button-CasiqzJU.js";import"./utils-DLwzmocV.js";import"./clsx-B-dksMZM.js";import"./Hidden-CL_R-LHP.js";import"./useFocusRing-Cui58P_W.js";import"./index-CqO8KTpm.js";import"./index-C1kBw2K3.js";import"./useLabels-DJeip4q-.js";import"./useButton-DgzyzFaT.js";import"./RSPContexts-BA89GZqc.js";import"./Text-DFouRg6c.js";import"./useDateFormatter-BfaN0sqQ.js";import"./useControlledState-ZH1c28y-.js";import"./useLocalizedStringFormatter-Ce-PtoG-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DqPlp9C4.js";import"./useEvent-DNIo1dKq.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-qt3ADn-9.js";import"./VisuallyHidden-BxQZRWoC.js";import"./clsx-Ciqy0D92.js";import"./Button-BzWf_0Ce.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-T78m4mfD.js";import"./createLucideIcon-DXyy-duf.js";import"./chevron-left-6XS94sBR.js";import"./chevron-right-BAUr5iXX.js";import"./Heading-Dphh5hYW.js";import"./FieldError-Bwk-kYY7.js";import"./Text-CTMNSfQo.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
