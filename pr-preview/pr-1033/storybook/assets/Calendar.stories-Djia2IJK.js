import{$ as c,a as m,r as l,j as d}from"./iframe-DuE5icfx.js";import{C as n}from"./Calendar-Cpfs7x2W.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BqVPFfW7.js";import"./Button-CHVND5il.js";import"./utils-ClhP-E5R.js";import"./clsx-B-dksMZM.js";import"./Hidden-CGryAwqK.js";import"./useFocusRing-C6UsRVMD.js";import"./index-BKNEv364.js";import"./index-jcTA0EzM.js";import"./useLabels-NFESUEmH.js";import"./useButton-Dpm-9eMP.js";import"./RSPContexts-C1VlAvM7.js";import"./Text-BXig9__r.js";import"./useDateFormatter-CWp2_AJ8.js";import"./useControlledState-C06eYFfj.js";import"./useLocalizedStringFormatter-mdX2hkSr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DjwQlbax.js";import"./useEvent-BRXH6lvV.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-E9xNjaIp.js";import"./VisuallyHidden-WoYUvN7P.js";import"./clsx-Ciqy0D92.js";import"./Button-Bv12ZKrk.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DdcJq8tj.js";import"./createLucideIcon-Cky2pY6t.js";import"./chevron-left-DllWfbsJ.js";import"./chevron-right-BH6DhDOO.js";import"./Heading-Bnu1vsMs.js";import"./FieldError-BFyaRGX_.js";import"./Text-CskgBW_y.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
