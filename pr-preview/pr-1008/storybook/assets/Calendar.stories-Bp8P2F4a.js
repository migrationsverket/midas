import{$ as c,a as m,r as l,j as d}from"./iframe-Cjp05Xvk.js";import{C as n}from"./Calendar-xVujcSEt.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-ICUotepY.js";import"./Button-BQdRHNfD.js";import"./utils-B7KUpLVX.js";import"./clsx-B-dksMZM.js";import"./Hidden-nSg4a4bn.js";import"./useFocusRing-MuyneAO_.js";import"./index-DQoebJgT.js";import"./index-BqZRieL_.js";import"./useLabels-DKrB5MGQ.js";import"./useButton-CCylroM-.js";import"./RSPContexts-BXs3MdzJ.js";import"./Text-CY50v26A.js";import"./useDateFormatter-BhAkVrJ0.js";import"./useControlledState-C9vPwLiF.js";import"./useLocalizedStringFormatter-nEop6Uh_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BTHY7oev.js";import"./useEvent-CmHPTiIB.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BtBb2fRe.js";import"./VisuallyHidden-BiBWBoz6.js";import"./clsx-Ciqy0D92.js";import"./Button-QxYJDAqE.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DqBPpOm5.js";import"./createLucideIcon-DtASArT9.js";import"./chevron-left-Da2xLQXe.js";import"./chevron-right-DJ3Z5prG.js";import"./Heading-AKJQvmhA.js";import"./FieldError-DJAw2gVJ.js";import"./Text-BqqvV1Lx.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
