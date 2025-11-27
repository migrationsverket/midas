import{$ as p,a as m,r as l,j as d}from"./iframe-ckMlOdqt.js";import{C as n}from"./Calendar-Bqm0g_DA.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-xAupnSQt.js";import"./Button-Dx6eyFNo.js";import"./utils-BEkamF-T.js";import"./clsx-B-dksMZM.js";import"./Hidden-ByhuVBjJ.js";import"./useFocusRing-tPLOxKMi.js";import"./index-D88C6xys.js";import"./index-CnAoOEpY.js";import"./useLabels-BZnB0y21.js";import"./useButton-DcNY2x9q.js";import"./RSPContexts-5oeO9ebT.js";import"./Text-AOi115Er.js";import"./useDateFormatter--J86KDxj.js";import"./useControlledState-B3FFsQAI.js";import"./useLocalizedStringFormatter-v7dlyhTP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DOA_jXeZ.js";import"./useEvent-Bf69eK7o.js";import"./getScrollParent-CpbzBao7.js";import"./scrollIntoView-D-fTihUR.js";import"./useDescription-7A577X0U.js";import"./VisuallyHidden-PSC2lnf9.js";import"./clsx-Ciqy0D92.js";import"./Button-Bu43okhr.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-taz3lryJ.js";import"./createLucideIcon-BKonS68S.js";import"./chevron-right-DYEnLEV4.js";import"./Heading-FfM7aRYe.js";import"./FieldError-dYiQ5ceD.js";import"./Text-CEwfXAsA.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
