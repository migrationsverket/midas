import{$ as c,a as m,r as l,j as d}from"./iframe-Wguf_Vhy.js";import{C as n}from"./Calendar-DCUn9JUi.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-G7ISHEii.js";import"./Button-BzF2ZkA0.js";import"./utils-Cayzu3dl.js";import"./clsx-B-dksMZM.js";import"./Hidden-YVq9ta1r.js";import"./useFocusRing-BMPGM_9a.js";import"./index-Bm1qHM15.js";import"./index-CtVtkHSB.js";import"./useLabel-tYdicVQf.js";import"./useLabels-vxl1SBYw.js";import"./useButton-CeOXStth.js";import"./RSPContexts-DhG_A9LD.js";import"./Text-BApMudW2.js";import"./useDateFormatter-hBtzwwDP.js";import"./useControlledState-BlF8Bv-9.js";import"./useLocalizedStringFormatter-CLhcV9N0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-ZTrsLFWQ.js";import"./useEvent-DJgQxyut.js";import"./getScrollParent-BHQ6aUJm.js";import"./scrollIntoView-B9bW_vYG.js";import"./useDescription-eDDocBsi.js";import"./VisuallyHidden-kcCEeVgO.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-Di7Q53mo.js";import"./createLucideIcon-2JkbB8ZB.js";import"./chevron-right-BZdCU-Su.js";import"./Button-CZM9PIob.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CNmg9gE-.js";import"./Heading-CFOJwOMj.js";import"./FieldError-BgJaT6Rf.js";import"./Text-D697qKcG.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
