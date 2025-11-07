import{$ as p,a as m,r as l,j as d}from"./iframe-ylZf3Rzh.js";import{C as n}from"./Calendar-ioZThPJ2.js";import"./preload-helper-Ct5FWWRu.js";import"./CalendarHeader-BwtYFxDC.js";import"./Button-DhYk_hW2.js";import"./utils-D06pAXX_.js";import"./clsx-B-dksMZM.js";import"./Hidden-CalmMv23.js";import"./useFocusRing-Bo93gYby.js";import"./index-Bq-vAhim.js";import"./index-Crjclm7s.js";import"./useLabels-Bxulg4qY.js";import"./useButton-C5dBSQLo.js";import"./RSPContexts-DqWiROll.js";import"./Text-Db7o3Fbo.js";import"./useDateFormatter-C6tQHxSF.js";import"./useControlledState-Cl9-8Wdt.js";import"./useLocalizedStringFormatter-CDM70I-6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-3b5-BZkh.js";import"./useEvent-D3oA8MGZ.js";import"./getScrollParent-D2Fpe8q7.js";import"./scrollIntoView-B8UBJdD2.js";import"./useDescription-CvDzlQQ_.js";import"./VisuallyHidden-DcsDn9V3.js";import"./clsx-Ciqy0D92.js";import"./Button-DIVvbVZE.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-9MEtXIpu.js";import"./chevron-right-DfJ0p5qO.js";import"./Heading-DE2hCXd6.js";import"./FieldError-DTCUMNT4.js";import"./Text-8r5M_h2W.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const L=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,L as __namedExportsOrder,K as default};
