import{$ as p,a as m,r as l,j as d}from"./iframe-CbbBAmzj.js";import{C as n}from"./Calendar-Df172gCX.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C_X82hjR.js";import"./Button-QZ9MaBJ0.js";import"./utils-BhRPGHPf.js";import"./clsx-B-dksMZM.js";import"./Hidden-c3MDr7Jx.js";import"./useFocusRing-0mAROpRM.js";import"./index-DHUIB7sV.js";import"./index-D-NGygsf.js";import"./useLabels-Cazyn2uu.js";import"./useButton-D2eklsDg.js";import"./RSPContexts-BPA00K2J.js";import"./Text-CsK72l07.js";import"./useDateFormatter-CgA2rLBM.js";import"./useControlledState-BiEt7xRU.js";import"./useLocalizedStringFormatter-BdrD0Kyz.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DOgjTSiE.js";import"./useEvent-CCkUFzKP.js";import"./getScrollParent-_ZlqpQjL.js";import"./scrollIntoView-CR5VKzw8.js";import"./useDescription-B-ccyjfI.js";import"./VisuallyHidden-ClvY-xxs.js";import"./clsx-Ciqy0D92.js";import"./Button-xJdt2F7s.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-CroHsTCf.js";import"./chevron-right-DGjAYrGi.js";import"./Heading-DvBuq4JF.js";import"./FieldError-DbUlAqb9.js";import"./Text-n09TZFQz.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
