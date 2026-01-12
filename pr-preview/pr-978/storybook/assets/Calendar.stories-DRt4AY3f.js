import{$ as c,a as m,r as l,j as d}from"./iframe-CL23rVh3.js";import{C as n}from"./Calendar-DVQUZM1E.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-hNRkIm6T.js";import"./Button-UvNdmwwk.js";import"./utils-CJ-Ij_R0.js";import"./clsx-B-dksMZM.js";import"./Hidden-DgDLAcvn.js";import"./useFocusRing-DkzWPJgi.js";import"./index-D2io7692.js";import"./index-Dps1x4rp.js";import"./useLabels-X6VpgWTq.js";import"./useButton-CPhZ5th1.js";import"./RSPContexts-BwT2hLmq.js";import"./Text-D1eXcxCX.js";import"./useDateFormatter-DZr9ZN8N.js";import"./useControlledState-BZgWFFOj.js";import"./useLocalizedStringFormatter-C59J0DnG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BGO8Zadv.js";import"./useEvent-DN98bbL5.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CGYkSA8m.js";import"./VisuallyHidden-D3iEUUnG.js";import"./clsx-Ciqy0D92.js";import"./Button-BRfjEKmY.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D_0t_udJ.js";import"./createLucideIcon-CscazfU0.js";import"./chevron-left-B6494m_Y.js";import"./chevron-right-DTydeBR_.js";import"./Heading-BhQ0A1J0.js";import"./FieldError-B8XPk18T.js";import"./Text-CytNYYuf.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
