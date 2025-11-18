import{$ as p,a as m,r as l,j as d}from"./iframe-DUeAI7tp.js";import{C as n}from"./Calendar-o6HYCf4y.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-_4Roorao.js";import"./Button-CJuM9N5t.js";import"./utils-CvLaDxIV.js";import"./clsx-B-dksMZM.js";import"./Hidden-COQ8gpNg.js";import"./useFocusRing-DorgMgHM.js";import"./index-yRPl9svU.js";import"./index-Dz_PiMJv.js";import"./useLabels-CvUTJeh5.js";import"./useButton-yeWcga3Z.js";import"./RSPContexts-Mh3RzDNv.js";import"./Text-DQm2ChpK.js";import"./useDateFormatter-DaudVuxp.js";import"./useControlledState-DBJr3GmL.js";import"./useLocalizedStringFormatter-AYWN_0qc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Tb5oOGqi.js";import"./useEvent-CI3wsE6q.js";import"./getScrollParent-DBOnfGvj.js";import"./scrollIntoView-chzndA4p.js";import"./useDescription-r19AltPN.js";import"./VisuallyHidden-CKOpq1qy.js";import"./clsx-Ciqy0D92.js";import"./Button-8U8D-1-N.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-CDd_qO2R.js";import"./chevron-right-r1zXULrm.js";import"./Heading-CXaVSElD.js";import"./FieldError-DUhQF5jP.js";import"./Text-J32TKqmz.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
