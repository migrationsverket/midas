import{$ as c,a as m,r as l,j as d}from"./iframe-D0FqK1lb.js";import{C as n}from"./Calendar-Dvid017Q.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CzCqC8bZ.js";import"./Button-ASP2neQz.js";import"./utils-BMbNOyUc.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dhm_4TsG.js";import"./useFocusRing-BD1a5Y2G.js";import"./index-5HzkHfPe.js";import"./index-SIDrXvAb.js";import"./useLabel-ky8NeYeA.js";import"./useLabels-Dak2com7.js";import"./useButton-pK_0UtxK.js";import"./RSPContexts-0TxVVo6E.js";import"./Text-Du7gyEcw.js";import"./useDateFormatter-CHhNcemC.js";import"./useControlledState-C8lWssw-.js";import"./useLocalizedStringFormatter-BHS8kRNf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C47vblp-.js";import"./useEvent-B8pAJ79A.js";import"./getScrollParent-CbuB2ebi.js";import"./scrollIntoView-DLJFvk8W.js";import"./useDescription-Df9gIiPP.js";import"./VisuallyHidden-CFNdR6Qu.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-C0n9Sy9Z.js";import"./createLucideIcon-B3FFrp2k.js";import"./chevron-right-BVo9VQcD.js";import"./Button-BmBlwCLs.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CgfN0QE1.js";import"./Heading-DpJ7i1P8.js";import"./FieldError-D9qv9kV0.js";import"./Text-DNU35Fvp.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
