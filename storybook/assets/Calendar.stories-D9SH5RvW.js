import{$ as c,a as m,r as l,j as d}from"./iframe-CLw9EvUn.js";import{C as n}from"./Calendar-BDiSLYfr.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-PlGZTM3y.js";import"./Button-DnmoB4JS.js";import"./utils-BwWAyVJP.js";import"./clsx-B-dksMZM.js";import"./Hidden-D77l1g2T.js";import"./useFocusRing-BAEYXSj_.js";import"./index-Bq3XAPPV.js";import"./index-B5Glj1Lw.js";import"./useLabels-D1N2DW3Q.js";import"./useButton-DCV5HdO0.js";import"./RSPContexts-gaT2a0FT.js";import"./Text-D5JOCqJj.js";import"./useDateFormatter-BVkzhEGH.js";import"./useControlledState-D21u0Iei.js";import"./useLocalizedStringFormatter-tJnjIpft.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BoNG3IUV.js";import"./useEvent-BPW_XcXk.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-D3QViYKP.js";import"./VisuallyHidden-CbcleJY8.js";import"./clsx-Ciqy0D92.js";import"./Button-Cl5UNsPK.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B24pFSF-.js";import"./createLucideIcon-KVsuRhiu.js";import"./chevron-left-CtzGsANu.js";import"./chevron-right-BiFh_fJi.js";import"./Heading-DHqaN_SF.js";import"./FieldError-Cd3lwIs8.js";import"./Text-1Buqt0Vq.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
