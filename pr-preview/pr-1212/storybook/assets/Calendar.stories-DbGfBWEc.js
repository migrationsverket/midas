import{$ as c,a as m,r as l,j as d}from"./iframe-CFC4xcGk.js";import{C as n}from"./Calendar-0LO0bG-q.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-uzi_jDma.js";import"./Button-Dlhy25YO.js";import"./utils-YAjyJ6o5.js";import"./clsx-B-dksMZM.js";import"./Hidden-BvfitbEd.js";import"./useFocusRing-jXz3NGbj.js";import"./index-BxLA2RHQ.js";import"./index-CMa239of.js";import"./useLabel-BN4J_loo.js";import"./useLabels-D-PAbcSB.js";import"./useButton-DvjQ4vDc.js";import"./RSPContexts-BaTuXADK.js";import"./Text-AmqWzkOV.js";import"./useDateFormatter-BpefFrYi.js";import"./useControlledState-CPr8PZqM.js";import"./useLocalizedStringFormatter-dA5DnFaT.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DxVR2Bwn.js";import"./useEvent-BUJ9aQ4c.js";import"./getScrollParent-v4OBvkmq.js";import"./scrollIntoView-CKdxk-E0.js";import"./useDescription-BsBgpIxP.js";import"./VisuallyHidden-BPhSZleF.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BxSLZqTI.js";import"./createLucideIcon-BfFQGVhS.js";import"./chevron-right-OdEjEpM5.js";import"./Button-DmKKfG5W.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BYPhK6jM.js";import"./Heading-DngLrKmF.js";import"./FieldError-DPjUPYFy.js";import"./Text-ZUooKx_2.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
