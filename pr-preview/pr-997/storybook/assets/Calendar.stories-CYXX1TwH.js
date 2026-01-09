import{$ as p,a as m,r as l,j as d}from"./iframe--YiVc9hQ.js";import{C as n}from"./Calendar-2avJXutI.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DDRJYLrF.js";import"./Button-DG5CDtQI.js";import"./utils-CpTnsnHV.js";import"./clsx-B-dksMZM.js";import"./Hidden-BTZxWKRt.js";import"./useFocusRing-0ty734hP.js";import"./index-JKE8F4U8.js";import"./index-BL2jGLxX.js";import"./useLabels-BJE1cm7E.js";import"./useButton-jtZkJpn4.js";import"./RSPContexts-Cj5AcZ5v.js";import"./Text-o29tJk3p.js";import"./useDateFormatter-DzhN1p0x.js";import"./useControlledState-C3lB_-hB.js";import"./useLocalizedStringFormatter-Dw3D2Uxn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BA2gArDX.js";import"./useEvent-foWgZimj.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-W6MpaIcO.js";import"./VisuallyHidden-oIx4p_CA.js";import"./clsx-Ciqy0D92.js";import"./Button-UFPEZg__.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-39Qfkypc.js";import"./createLucideIcon-MgWQY606.js";import"./chevron-right-Dj-V-c36.js";import"./Heading-B6Ybwa57.js";import"./FieldError-BTW40C7o.js";import"./Text-CpCRGjDE.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
