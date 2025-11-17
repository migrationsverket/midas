import{$ as p,a as m,r as l,j as d}from"./iframe-5OPxOFOo.js";import{C as n}from"./Calendar-65tpqlx2.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DBMUVF_j.js";import"./Button-DwYUQnyK.js";import"./utils-y7VQpXmV.js";import"./clsx-B-dksMZM.js";import"./Hidden-B8S2zPTS.js";import"./useFocusRing-YAhHe-vS.js";import"./index-Bl-U2zRt.js";import"./index--CP_AI-C.js";import"./useLabels-DFrgstvf.js";import"./useButton-DEtSmmrP.js";import"./RSPContexts-Bvl2qDvi.js";import"./Text-LE0QZyiT.js";import"./useDateFormatter-F3_px5Uh.js";import"./useControlledState-C3eWgmLl.js";import"./useLocalizedStringFormatter-CJrXU8gl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DU85q2R3.js";import"./useEvent-Dz5VVAtu.js";import"./getScrollParent-ClkZa6SK.js";import"./scrollIntoView-BziE6UoW.js";import"./useDescription-BnvkbMBx.js";import"./VisuallyHidden-D4M_6Oa3.js";import"./clsx-Ciqy0D92.js";import"./Button-CZG4l204.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-DTp8xoi7.js";import"./chevron-right-C_sopkcw.js";import"./Heading-DysyouUu.js";import"./FieldError-DsFnT5cH.js";import"./Text-DJ8ddDqj.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
