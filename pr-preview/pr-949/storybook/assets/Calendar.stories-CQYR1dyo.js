import{$ as p,a as m,r as l,j as d}from"./iframe-CfzEJfTl.js";import{C as n}from"./Calendar-XuPAeWUY.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BzPSu9VL.js";import"./Button-_yEl9m9t.js";import"./utils-DMT3jteK.js";import"./clsx-B-dksMZM.js";import"./Hidden-CO_ry7Y6.js";import"./useFocusRing-5mlRQFlf.js";import"./index-CMLkFNUk.js";import"./index-DlHBYD_b.js";import"./useLabels-DnN5Bi55.js";import"./useButton-DxBAtA7-.js";import"./RSPContexts-BRrdno09.js";import"./Text-C2N2S6jp.js";import"./useDateFormatter-DkF526Ge.js";import"./useControlledState-CiYq6-kc.js";import"./useLocalizedStringFormatter-8C8un9Z1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-D8920nK6.js";import"./useEvent-BW6_HwHq.js";import"./getScrollParent-BjV0FuZW.js";import"./scrollIntoView-D7CVscOt.js";import"./useDescription-BFDNZgK_.js";import"./VisuallyHidden-DH1p0Y9r.js";import"./clsx-Ciqy0D92.js";import"./Button-qxfYGoKg.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-CBKlJ1yT.js";import"./createLucideIcon-D2wUs9_7.js";import"./chevron-right-C2-XQThP.js";import"./Heading-DTHxO0Gw.js";import"./FieldError-CNWb36NS.js";import"./Text-DMZehI1u.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
