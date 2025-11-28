import{$ as p,a as m,r as l,j as d}from"./iframe-B7hDXu73.js";import{C as n}from"./Calendar-B2P-X7bI.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CXFMGzai.js";import"./Button-Cy0FA1OU.js";import"./utils-s99TFDuF.js";import"./clsx-B-dksMZM.js";import"./Hidden-DGzhCWQ1.js";import"./useFocusRing-Dv3iYYgG.js";import"./index-jtS56rqd.js";import"./index-MHJ3wPjc.js";import"./useLabels-CckQevmM.js";import"./useButton-DUq9O1mu.js";import"./RSPContexts-D-pV6XVu.js";import"./Text-DttWi8Qf.js";import"./useDateFormatter-D__ontdm.js";import"./useControlledState-BSmwjkMx.js";import"./useLocalizedStringFormatter-CvfchuRE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BprncRqn.js";import"./useEvent-mDoXMvId.js";import"./getScrollParent-DC3qewbQ.js";import"./scrollIntoView-CtdKJbJH.js";import"./useDescription-CA2-cW-Y.js";import"./VisuallyHidden-v1Q3RFjC.js";import"./clsx-Ciqy0D92.js";import"./Button-BsMsUWps.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-Dp6ByE82.js";import"./createLucideIcon-DGjDO6gh.js";import"./chevron-right-DdNA1pvB.js";import"./Heading-Xp0eoec4.js";import"./FieldError-D2xIq2H5.js";import"./Text-5DcUl_uA.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
