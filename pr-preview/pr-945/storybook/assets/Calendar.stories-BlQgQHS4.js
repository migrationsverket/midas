import{$ as p,a as m,r as l,j as d}from"./iframe-CTbPuyiZ.js";import{C as n}from"./Calendar-ChmnDdEN.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-88FxOv7O.js";import"./Button-CNOgGNQG.js";import"./utils-C6hfgLvT.js";import"./clsx-B-dksMZM.js";import"./Hidden-DaJx6vxq.js";import"./useFocusRing-n3eJMlTT.js";import"./index-Bgxm6v1H.js";import"./index-Cu3zMLv9.js";import"./useLabels-gUEAKYDn.js";import"./useButton-IIBwAU4K.js";import"./RSPContexts-ClJnUPs5.js";import"./Text-mSNC73zz.js";import"./useDateFormatter-CtYis8Bx.js";import"./useControlledState-Dm0v7F1R.js";import"./useLocalizedStringFormatter-Dq6DvKsR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-T75wA-uM.js";import"./useEvent-5NbWc272.js";import"./getScrollParent-Boh-5e6O.js";import"./scrollIntoView-r8-_icar.js";import"./useDescription-Bz8Mdm6f.js";import"./VisuallyHidden-sLTk1Jd1.js";import"./clsx-Ciqy0D92.js";import"./Button-CYxRok4a.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-B364Tmw0.js";import"./createLucideIcon-DcaVUwzg.js";import"./chevron-right-DIPacTgJ.js";import"./Heading-BRqMFDd5.js";import"./FieldError-K-Xe6uTG.js";import"./Text-vMxsj9yI.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Q=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,Q as __namedExportsOrder,L as default};
