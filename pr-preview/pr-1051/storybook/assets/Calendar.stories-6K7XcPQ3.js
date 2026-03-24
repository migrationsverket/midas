import{$ as c,a as m,r as l,j as d}from"./iframe-CdQtBTvN.js";import{C as n}from"./Calendar-6jygynR2.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BG9mcf0T.js";import"./Button-C9FUZnpG.js";import"./utils-hCPuu9ww.js";import"./clsx-B-dksMZM.js";import"./Hidden-VZvKjJAN.js";import"./useFocusRing-Dx5ENljC.js";import"./index-BqBvBc_L.js";import"./index-CBjbBfBt.js";import"./useLabels-DmlxY5xa.js";import"./useButton-BMciKW0o.js";import"./RSPContexts-GhAFq0Kb.js";import"./Text-BlVIijGN.js";import"./useDateFormatter-DaeJ1GsY.js";import"./useControlledState-CDyRnnpP.js";import"./useLocalizedStringFormatter-CAvIyCZj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CqBY0sZj.js";import"./useEvent-DC4JEHXI.js";import"./getScrollParent-EH2M_cTQ.js";import"./scrollIntoView-BM5ZBaG8.js";import"./useDescription-WCfTXBDc.js";import"./VisuallyHidden-C2L8poid.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-MVZpknLL.js";import"./createLucideIcon-TCf9LglA.js";import"./chevron-right-itZ-kyvp.js";import"./Button-NsfQzJOD.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BjshCCmP.js";import"./Heading-R-ZLjnfx.js";import"./FieldError-Ds80xhU5.js";import"./Text-DG4x08uA.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
