import{$ as c,a as m,r as l,j as d}from"./iframe-DEr5LyL9.js";import{C as n}from"./Calendar-CnzM4gFm.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C0XA81tV.js";import"./Button-CBWCdlEK.js";import"./utils-DwL8W83g.js";import"./clsx-B-dksMZM.js";import"./Hidden-NLnfrHdz.js";import"./useFocusRing-DOTEBX87.js";import"./index-DExjCakj.js";import"./index-Nw0I9830.js";import"./useLabels-h5iBdAs1.js";import"./useButton-CVEcfEQG.js";import"./RSPContexts-Bn2caes7.js";import"./Text-DAPFiM_T.js";import"./useDateFormatter-DK-XJPD2.js";import"./useControlledState-h_6fbbYP.js";import"./useLocalizedStringFormatter-7tBmCqt2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-t9NCR68n.js";import"./useEvent-AcHiQLhX.js";import"./getScrollParent-Cud-L_Kq.js";import"./scrollIntoView-CKlviFsz.js";import"./useDescription-DigpKdML.js";import"./VisuallyHidden-CwaOa1m7.js";import"./clsx-Ciqy0D92.js";import"./Button-BTVP098H.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-55D9ueFU.js";import"./createLucideIcon-C7-8qsjG.js";import"./chevron-left-D2gJnn3t.js";import"./chevron-right-0sWey5HU.js";import"./Heading-DPOfFdui.js";import"./FieldError-BdNVYVS1.js";import"./Text-BfZUAwgB.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
