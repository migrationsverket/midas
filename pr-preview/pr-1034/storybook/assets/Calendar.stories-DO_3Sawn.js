import{$ as c,a as m,r as l,j as d}from"./iframe-upcgl7eM.js";import{C as n}from"./Calendar-DpcTeQFw.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BLVUXz1f.js";import"./Button-Bm_96dJ2.js";import"./utils-DIx1IamT.js";import"./clsx-B-dksMZM.js";import"./Hidden-BVPjc43X.js";import"./useFocusRing-BqsA1vx-.js";import"./index-BuYUjQXP.js";import"./index-SbvGQsJp.js";import"./useLabels-CZlpXa7M.js";import"./useButton-DXi2-Ij4.js";import"./RSPContexts-B8fjskTn.js";import"./Text-4DZ9uLvx.js";import"./useDateFormatter-CEBCWhvS.js";import"./useControlledState-DxbIPEYQ.js";import"./useLocalizedStringFormatter-B_89sXt0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BEm6biyu.js";import"./useEvent-oippFPIE.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-B7RZGwxx.js";import"./VisuallyHidden-CruDu4Gn.js";import"./clsx-Ciqy0D92.js";import"./Button-D6mILSsj.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-XLs9F4JA.js";import"./createLucideIcon-NdGz0Ptw.js";import"./chevron-left-OYw6ZcgD.js";import"./chevron-right-CuXepk64.js";import"./Heading-BkDIPQhc.js";import"./FieldError-_edkh_FM.js";import"./Text-vUmVOUpM.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const T=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,T as __namedExportsOrder,Q as default};
