import{$ as c,a as m,r as l,j as d}from"./iframe-BWPy1RBq.js";import{C as n}from"./Calendar-BuxzsKwm.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-lkkBzVyD.js";import"./Button-CpSzsQmu.js";import"./utils-K3-6RYqB.js";import"./clsx-B-dksMZM.js";import"./Hidden-Tw89Zkrb.js";import"./useFocusRing-RbbtUgdg.js";import"./index-r2wyVjUx.js";import"./index-cuXqdBSv.js";import"./useLabel-DJc0EjwM.js";import"./useLabels-ByrSZnHm.js";import"./useButton-Be0Brtpy.js";import"./RSPContexts-nAVSp4dG.js";import"./Text-Cia4oSWl.js";import"./useDateFormatter-DYME9FuP.js";import"./useControlledState-D92tKPK_.js";import"./useLocalizedStringFormatter-1oCiTqWf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DGnIDERi.js";import"./useEvent-BFfcpkt9.js";import"./getScrollParent-Bz2Jpk0G.js";import"./scrollIntoView-BPThSa08.js";import"./useDescription-DKa3yvbb.js";import"./VisuallyHidden-Bglg35TW.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-qp2IpVpS.js";import"./createLucideIcon-B4kCR5jG.js";import"./chevron-right-C6QDbqKk.js";import"./Button-DrPZXGaG.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-C9Npvx33.js";import"./Heading-CimGNnkR.js";import"./FieldError-Cz5zi-ZF.js";import"./Text-NU9ujCYW.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
