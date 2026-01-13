import{$ as p,a as m,r as l,j as d}from"./iframe-DIgCkbD1.js";import{C as n}from"./Calendar-BdFhjZ3b.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CRIvgTyL.js";import"./Button-L3gEMBR5.js";import"./utils-D8xi_xBs.js";import"./clsx-B-dksMZM.js";import"./Hidden-CeUFJKQL.js";import"./useFocusRing-B4tmv29s.js";import"./index-CX1iR86j.js";import"./index-CWy7JOdY.js";import"./useLabels-CMNk11Q0.js";import"./useButton-Cw6qVxnq.js";import"./RSPContexts-CJngwRS-.js";import"./Text-Ci7gikDv.js";import"./useDateFormatter-BhFZerbN.js";import"./useControlledState-iud_Pbox.js";import"./useLocalizedStringFormatter-C6XmYEGX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B1Dhh3Ri.js";import"./useEvent-DzaedMFS.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DZesk85t.js";import"./VisuallyHidden-DCGxt7Nj.js";import"./clsx-Ciqy0D92.js";import"./Button-DQt3X-10.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DXAAVeZG.js";import"./createLucideIcon-DsB032j6.js";import"./chevron-right-BiL4527Z.js";import"./Heading-B7NBDRgB.js";import"./FieldError-BtS7DKcw.js";import"./Text-D4RhZXD6.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
