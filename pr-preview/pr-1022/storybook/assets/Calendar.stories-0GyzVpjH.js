import{$ as c,a as m,r as l,j as d}from"./iframe-DLQn-qTm.js";import{C as n}from"./Calendar-B2L8gL1V.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-6x5pU4Rk.js";import"./Button-DYd3H_n-.js";import"./utils-BseBzJWz.js";import"./clsx-B-dksMZM.js";import"./Hidden-CNhpunQg.js";import"./useFocusRing-Do74QKH1.js";import"./index-BkZE1OTB.js";import"./index-C8Zl_Tv7.js";import"./useLabels-DyMy7daN.js";import"./useButton-C2eCHCKv.js";import"./RSPContexts-DvPIEXFn.js";import"./Text-CuFotw1d.js";import"./useDateFormatter-CtrAXHu7.js";import"./useControlledState-BZ3KbGsu.js";import"./useLocalizedStringFormatter-BJIt3lYB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CXe3h0lM.js";import"./useEvent-dNq17Ah7.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Cc6Zbq_g.js";import"./VisuallyHidden--4vyVQ1_.js";import"./clsx-Ciqy0D92.js";import"./Button-ChhODU99.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CJPUWmDD.js";import"./createLucideIcon-Dlil2oPf.js";import"./chevron-left-CR2dlQ92.js";import"./chevron-right-DAEBr6R4.js";import"./Heading-DIsi2CKj.js";import"./FieldError-DhgEtkJ4.js";import"./Text-CjwNLSIP.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
