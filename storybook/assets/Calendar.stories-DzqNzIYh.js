import{$ as c,a as m,r as l,j as d}from"./iframe-CKu8C240.js";import{C as n}from"./Calendar-BK2aga2G.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BExiJwO8.js";import"./Button-IlsrLhR8.js";import"./utils-CLX7J-q0.js";import"./clsx-B-dksMZM.js";import"./Hidden-C6ArxBUW.js";import"./useFocusRing-IcTt8PE9.js";import"./index-CxrKtYp1.js";import"./index-psXWBm0q.js";import"./useLabel-MFPilgOm.js";import"./useLabels-CRoKZlxn.js";import"./useButton-g3DD9S56.js";import"./RSPContexts-BYfsL_eH.js";import"./Text-BIK_Bqtk.js";import"./useDateFormatter-Dr7wegiX.js";import"./useControlledState-DDnLcn-b.js";import"./useLocalizedStringFormatter-D8TEkIPn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DxvJCU41.js";import"./useEvent-yXAGKDbR.js";import"./getScrollParent-BKhUwAVM.js";import"./scrollIntoView-BgJofm9P.js";import"./useDescription-K8aGsr7r.js";import"./VisuallyHidden-DpKSD7VN.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DedEH5uj.js";import"./createLucideIcon-B2wZBV1e.js";import"./chevron-right-DYnE2ZWJ.js";import"./Button-OIliGZdS.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BcHgs7SS.js";import"./Heading-BdP2SFj1.js";import"./FieldError-BcSOiHDV.js";import"./Text-B_i6Ec48.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
