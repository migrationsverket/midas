import{$ as p,a as m,r as l,j as d}from"./iframe-a6Wk3Xzy.js";import{C as n}from"./Calendar-DGDzzDTW.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BAMoYCnU.js";import"./Button-D3kzwT0j.js";import"./utils-Djxj9dvS.js";import"./clsx-B-dksMZM.js";import"./Hidden-DuHdXNGk.js";import"./useFocusRing-C1yXmCPx.js";import"./index-BIPy-evI.js";import"./index-h3_AmtF7.js";import"./useLabels-C0y6iNyy.js";import"./useButton-BLcqsVts.js";import"./RSPContexts-SYjPV_Gd.js";import"./Text-DkJniAIt.js";import"./useDateFormatter-COCCjEFx.js";import"./useControlledState-DCZoTGT5.js";import"./useLocalizedStringFormatter-CuYf0UQ-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CtcE8jsc.js";import"./useEvent-DDIjSBAF.js";import"./getScrollParent-DPdiGwy9.js";import"./scrollIntoView-D4IpJVjb.js";import"./useDescription-CCWPLKTi.js";import"./VisuallyHidden-nz69IdQH.js";import"./clsx-Ciqy0D92.js";import"./Button-BXJQHasJ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-73Ei4hOY.js";import"./createLucideIcon-D5ghYwFQ.js";import"./chevron-right-BhWtj_wN.js";import"./Heading-B2z4anRX.js";import"./FieldError-BCytiDW7.js";import"./Text-Cei6q4nW.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
