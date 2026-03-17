import{$ as c,a as m,r as l,j as d}from"./iframe-FsNXgqe6.js";import{C as n}from"./Calendar-70cVLyJr.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BkOkK5RU.js";import"./Button-BlUHKe-n.js";import"./utils-CHHHSM11.js";import"./clsx-B-dksMZM.js";import"./Hidden-B6vp6jMs.js";import"./useFocusRing-CRoVfTyE.js";import"./index-C-L_vO3C.js";import"./index-DR5yPJn1.js";import"./useLabels-Dlx2sqNn.js";import"./useButton-Dvk9iXpB.js";import"./RSPContexts-L16IbbAV.js";import"./Text-CjmdaRq5.js";import"./useDateFormatter-DKgwH1xP.js";import"./useControlledState-cgOhGnIF.js";import"./useLocalizedStringFormatter-C2slbsQF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Bgv144H7.js";import"./useEvent-ClOxTEoa.js";import"./getScrollParent--flH2mcI.js";import"./scrollIntoView-C5rWQYSS.js";import"./useDescription-B03GWqqQ.js";import"./VisuallyHidden-CDgolLOv.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-D67xpx9C.js";import"./createLucideIcon-Dz3AmHpK.js";import"./chevron-right-lVTQb-_4.js";import"./Button-YzrNlavS.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-XwSS7WVV.js";import"./Heading-B37BGmC_.js";import"./FieldError-p7x1oei0.js";import"./Text-C8W6Aunw.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
