import{$ as p,a as m,r as l,j as d}from"./iframe-B_wOJzak.js";import{C as n}from"./Calendar-KYZwKyt1.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BuIzCtnb.js";import"./Button--YbSiPHP.js";import"./utils-CqdFBANG.js";import"./clsx-B-dksMZM.js";import"./Hidden-DVTPrRLd.js";import"./useFocusRing-DoMqkbPM.js";import"./index-CY391PiH.js";import"./index-CXI-rU25.js";import"./useLabels-DczO-y-_.js";import"./useButton-BIdPbjci.js";import"./RSPContexts-BZAsk-Iz.js";import"./Text-Bdvl2sVE.js";import"./useDateFormatter-12SCEF8X.js";import"./useControlledState-CsUwFHf6.js";import"./useLocalizedStringFormatter-C7fIyH4c.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-UMzCaRES.js";import"./useEvent-D4_dQ-oV.js";import"./getScrollParent-X93ZPV66.js";import"./scrollIntoView-Bd8U5JDo.js";import"./useDescription-DogmSaKs.js";import"./VisuallyHidden-DvToQpL6.js";import"./clsx-Ciqy0D92.js";import"./Button-T6l_wraQ.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-CrRdlSwf.js";import"./chevron-right-GwbXzEqK.js";import"./Heading-DFOhIGaT.js";import"./FieldError-BQuMjgpB.js";import"./Text-BdfzGXfI.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const L=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,L as __namedExportsOrder,K as default};
