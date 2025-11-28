import{$ as p,a as m,r as l,j as d}from"./iframe-oXsIpbMB.js";import{C as n}from"./Calendar-Ba-QMK2g.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-2W_hNjUu.js";import"./Button-8cpKG8rd.js";import"./utils-B-O4b79N.js";import"./clsx-B-dksMZM.js";import"./Hidden-WXuZRkqT.js";import"./useFocusRing-BW9P1ZR5.js";import"./index-BxWuJyFF.js";import"./index-CmStSKjz.js";import"./useLabels-CoOIyE91.js";import"./useButton-Dsjjlw5w.js";import"./RSPContexts-DPtGg_n2.js";import"./Text-D73taSIa.js";import"./useDateFormatter-C_WLwUsx.js";import"./useControlledState-BKAJ8-LK.js";import"./useLocalizedStringFormatter-BAW-PBtE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DaGet61H.js";import"./useEvent-DKd880lO.js";import"./getScrollParent-L4py_Hz8.js";import"./scrollIntoView-q6sbjqLE.js";import"./useDescription-BTh-6Bla.js";import"./VisuallyHidden-D-5RikPd.js";import"./clsx-Ciqy0D92.js";import"./Button-BuFobGoF.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-IfFIdOWG.js";import"./createLucideIcon-CifL85wv.js";import"./chevron-right-D9jtX72i.js";import"./Heading-B756-Qse.js";import"./FieldError-BTJfSvTO.js";import"./Text-BH5S53Oz.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
