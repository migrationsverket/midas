import{$ as c,a as m,r as l,j as d}from"./iframe-Bf1Ah5rB.js";import{C as n}from"./Calendar-CcD8WjRH.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-w-RKTCz4.js";import"./Button-CnYQaxyi.js";import"./utils-DXJEO7_N.js";import"./clsx-B-dksMZM.js";import"./Hidden-Cbiq0OqP.js";import"./useFocusRing-DSdU7aAS.js";import"./index-Dbyil8jF.js";import"./index-CF1c_2Pb.js";import"./useLabels-B4_UAfBy.js";import"./useButton-DSIJ1kYo.js";import"./RSPContexts-kOrZQZ_t.js";import"./Text-BHf7sfPg.js";import"./useDateFormatter-BLWrX7rP.js";import"./useControlledState-C7EdL_Lb.js";import"./useLocalizedStringFormatter-tsrFn-Jf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BNFWBf9O.js";import"./useEvent-BxaPwLOP.js";import"./getScrollParent-BUiYsgTc.js";import"./scrollIntoView-GI-dTWRJ.js";import"./useDescription-CpnzDPEn.js";import"./VisuallyHidden-CeYEhVtC.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-B1NRYZ_t.js";import"./createLucideIcon-upfVu1an.js";import"./chevron-right-Dj_kuCUw.js";import"./Button-BY8ZqICl.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-8eSi0SDt.js";import"./Heading-BE9Oh088.js";import"./FieldError-BasXWSrV.js";import"./Text-DhXeS_DS.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
