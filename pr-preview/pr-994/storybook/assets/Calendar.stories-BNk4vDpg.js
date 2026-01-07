import{$ as p,a as m,r as l,j as d}from"./iframe-CubTBBGo.js";import{C as n}from"./Calendar-0CS0Sl2r.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Dls2tmvh.js";import"./Button-CDJANkr2.js";import"./utils-DU8A25ha.js";import"./clsx-B-dksMZM.js";import"./Hidden-GxRiQCKq.js";import"./useFocusRing-lzGIxQWj.js";import"./index-C4yCgsVr.js";import"./index-CaW2QasO.js";import"./useLabels-BNDUUXFn.js";import"./useButton-BsD5A1Wy.js";import"./RSPContexts-DwpwGrnI.js";import"./Text-73NkOSuw.js";import"./useDateFormatter-BUL9N9Zi.js";import"./useControlledState-B8OTRD6B.js";import"./useLocalizedStringFormatter-CUeB_ZYl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-79fNnuVs.js";import"./useEvent-D8cbhnM-.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-hs9K73Tm.js";import"./VisuallyHidden-5NlIvA6X.js";import"./clsx-Ciqy0D92.js";import"./Button-CkP2HO-W.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DJ2CiOfY.js";import"./createLucideIcon-Bs7Zj_V7.js";import"./chevron-right-L24XeIe6.js";import"./Heading-BhSpU1m6.js";import"./FieldError-DW_zkLWT.js";import"./Text-LbE64-eX.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
