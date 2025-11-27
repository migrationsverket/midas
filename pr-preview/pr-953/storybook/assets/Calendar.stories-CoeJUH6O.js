import{$ as p,a as m,r as l,j as d}from"./iframe-krU3lnll.js";import{C as n}from"./Calendar-CLOugWdd.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D5nGYMCk.js";import"./Button-BU6Lkb_Z.js";import"./utils-DnS0_qQ0.js";import"./clsx-B-dksMZM.js";import"./Hidden-VnIe4cgE.js";import"./useFocusRing-CWzVObSZ.js";import"./index-C3RV6eBu.js";import"./index-VFJCran0.js";import"./useLabels-CUZsRNLj.js";import"./useButton-D0AxcNmg.js";import"./RSPContexts-CK5__bLT.js";import"./Text-DbFNQrMd.js";import"./useDateFormatter-Bp0_KlID.js";import"./useControlledState-BaSC3gVY.js";import"./useLocalizedStringFormatter-DZ80bzWS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DsQQ3g0P.js";import"./useEvent-DlIKZhAG.js";import"./getScrollParent-DN-of50m.js";import"./scrollIntoView-DmSwjTPb.js";import"./useDescription-BPn6lxFJ.js";import"./VisuallyHidden-C3s2Crnt.js";import"./clsx-Ciqy0D92.js";import"./Button-C-0GV_cb.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-B3TpQ19y.js";import"./createLucideIcon-DPakKbXd.js";import"./chevron-right-C4KTuQqK.js";import"./Heading-CWDBVfdi.js";import"./FieldError-BZw0hilX.js";import"./Text-CRDp8VCP.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
