import{$ as c,a as m,r as l,j as d}from"./iframe-CgWG_iU2.js";import{C as n}from"./Calendar-CY0iV_FV.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BucX-k5x.js";import"./Button-ByOlI6-C.js";import"./utils-_M8wNiGT.js";import"./clsx-B-dksMZM.js";import"./Hidden-D3aMc9rP.js";import"./useFocusRing-Dsycni8a.js";import"./index-DxbG3zi7.js";import"./index-BG0K86OR.js";import"./useLabel-DU9qnLW0.js";import"./useLabels-D66rAip6.js";import"./useButton-CtVOG2X0.js";import"./RSPContexts-Bs45BnO9.js";import"./Text-Dj7d9dGS.js";import"./useDateFormatter-C5VPVKAp.js";import"./useControlledState-BM6BESXh.js";import"./useLocalizedStringFormatter-BQ-Yoit3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Dx_OmGO6.js";import"./useEvent-FPbp72qp.js";import"./getScrollParent-DZ0TSZLG.js";import"./scrollIntoView-CqQuMmwT.js";import"./useDescription-CpHd73jI.js";import"./VisuallyHidden-oanLmiAX.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-D_lRas0D.js";import"./createLucideIcon-DjCctUN5.js";import"./chevron-right-Ca7GxNzn.js";import"./Button-nHuGQ5i0.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Bvq7R4Wr.js";import"./Heading-Cj6qOAV_.js";import"./FieldError-D-IJ4T5L.js";import"./Text-dFUGDIq7.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const V=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,V as __namedExportsOrder,T as default};
