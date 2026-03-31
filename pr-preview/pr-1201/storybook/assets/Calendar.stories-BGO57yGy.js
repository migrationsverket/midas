import{$ as c,a as m,r as l,j as d}from"./iframe-CKynqbsT.js";import{C as n}from"./Calendar-BBDEIQ3h.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Dfjtcwna.js";import"./Button-odKdBChn.js";import"./utils-Cz4s-P07.js";import"./clsx-B-dksMZM.js";import"./Hidden-CxwF48Ci.js";import"./useFocusRing-DW03qt76.js";import"./index-MKc-RSGl.js";import"./index-DbmjAuuR.js";import"./useLabel-BScGGoXy.js";import"./useLabels-CasMb-p3.js";import"./useButton-K4roNkpf.js";import"./RSPContexts-1kvrZnW_.js";import"./Text-CFqReYPn.js";import"./useDateFormatter-DS7G1VGB.js";import"./useControlledState-CkRmHnNo.js";import"./useLocalizedStringFormatter-1siNxGD0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Bqy7s0Hg.js";import"./useEvent-Dya9lerV.js";import"./getScrollParent-BDZEhSWz.js";import"./scrollIntoView-DZna20aA.js";import"./useDescription-CppHAd8O.js";import"./VisuallyHidden-BxWxnvxB.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CbPwbjFr.js";import"./createLucideIcon-B7xcXnKD.js";import"./chevron-right-B3yPb9sp.js";import"./Button-DQDk8v-k.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BJaowkmQ.js";import"./Heading-C555MQzz.js";import"./FieldError-D5ePyvQL.js";import"./Text-CV3rC3lw.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
