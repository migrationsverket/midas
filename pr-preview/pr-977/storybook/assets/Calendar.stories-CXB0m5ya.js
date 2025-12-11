import{$ as p,a as m,r as l,j as d}from"./iframe-MGON9gUz.js";import{C as n}from"./Calendar-DEh2QR8J.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-1ODNTbF0.js";import"./Button-C2E3oR8W.js";import"./utils-Cnlzp-5B.js";import"./clsx-B-dksMZM.js";import"./Hidden-jd2R-Bfn.js";import"./useFocusRing-ThBX_ucU.js";import"./index-BPAmBu_k.js";import"./index-FW1sGAw2.js";import"./useLabels-DAFPofHN.js";import"./useButton-CZwmHtQP.js";import"./RSPContexts-DiOGMsFy.js";import"./Text-BnvHdZmH.js";import"./useDateFormatter-CRxfu_Be.js";import"./useControlledState-C7UrvEAm.js";import"./useLocalizedStringFormatter-Dk_lEJbs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-g34eltEc.js";import"./useEvent-evFt6shW.js";import"./getScrollParent-D8-cmg2g.js";import"./scrollIntoView-_LxBK19Y.js";import"./useDescription-BsxXVwWM.js";import"./VisuallyHidden-Dsp0-A_8.js";import"./clsx-Ciqy0D92.js";import"./Button-DNm7fuyT.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CcmqV3-4.js";import"./createLucideIcon-CxLXd6bS.js";import"./chevron-right-C56AkDrm.js";import"./Heading-Dq2fb95l.js";import"./FieldError-CsJWXBCg.js";import"./Text-DHFOFPOF.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
