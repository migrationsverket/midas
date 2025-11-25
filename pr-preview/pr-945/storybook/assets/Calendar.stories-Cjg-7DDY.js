import{$ as p,a as m,r as l,j as d}from"./iframe-DDE2q2jJ.js";import{C as n}from"./Calendar-DqvXFxtr.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BCpvFUTu.js";import"./Button-HCOG5F4J.js";import"./utils-a9bcQ49A.js";import"./clsx-B-dksMZM.js";import"./Hidden-By32gRxz.js";import"./useFocusRing-B3mA85Wg.js";import"./index-Dbi_VTwK.js";import"./index-lUxujH5K.js";import"./useLabels-DDbF2kwS.js";import"./useButton-fYhOhmoU.js";import"./RSPContexts-CFPL8A-7.js";import"./Text-Cm5UVo2w.js";import"./useDateFormatter-D-p1I5xm.js";import"./useControlledState-DAP_JcuQ.js";import"./useLocalizedStringFormatter-Bcbgr9Cy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DaN4EkfI.js";import"./useEvent-tL9OW1cd.js";import"./getScrollParent-BsyS2ene.js";import"./scrollIntoView-DPCVqvBT.js";import"./useDescription-DcQu_PV8.js";import"./VisuallyHidden-CHq8aofl.js";import"./clsx-Ciqy0D92.js";import"./Button-Ci_9cuGQ.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-B_ZJeHWO.js";import"./createLucideIcon-Bl1-P2Iq.js";import"./chevron-right-yIO9WWOq.js";import"./Heading-BagC_Uao.js";import"./FieldError-DCUvG-Rb.js";import"./Text-BwkS_7yz.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
