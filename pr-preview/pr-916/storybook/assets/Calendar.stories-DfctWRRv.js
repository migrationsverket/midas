import{$ as p,a as m,r as l,j as d}from"./iframe-2wgIB9ov.js";import{C as n}from"./Calendar-CrDnjk_G.js";import"./preload-helper-Ct5FWWRu.js";import"./CalendarHeader-cpEzXaFY.js";import"./Button-D4zAQrcJ.js";import"./utils-DaRf50JR.js";import"./clsx-B-dksMZM.js";import"./Hidden-CBQkbk4i.js";import"./useFocusRing-525HP1g7.js";import"./index-CD0ir1m5.js";import"./index-lBQIxa3z.js";import"./useLabels-DWZ8l6Oh.js";import"./useButton-C73Zvfrc.js";import"./RSPContexts-BTDVWGny.js";import"./Text-aNiv-eLR.js";import"./useDateFormatter-Cr0U-rkz.js";import"./useControlledState-DYBM3KFS.js";import"./useLocalizedStringFormatter-Db4gfQ33.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DZhMP5FB.js";import"./useEvent-I4eMPhOT.js";import"./getScrollParent-BCIlnNrp.js";import"./scrollIntoView-wN9fvFrD.js";import"./useDescription-DTDZRqpT.js";import"./VisuallyHidden-BisFr-Je.js";import"./clsx-Ciqy0D92.js";import"./Button-DFwCR_3-.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-DIWvrCmu.js";import"./chevron-right-DQRHAPib.js";import"./Heading-CtnV3cTO.js";import"./FieldError-wYXk6SIy.js";import"./Text-B1FXYo5G.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
