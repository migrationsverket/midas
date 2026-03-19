import{$ as c,a as m,r as l,j as d}from"./iframe-CPuYvm8s.js";import{C as n}from"./Calendar-B7CrdH0q.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BycCQw9K.js";import"./Button-CPLgo8WB.js";import"./utils-CE1Vntqw.js";import"./clsx-B-dksMZM.js";import"./Hidden-BWUoGLqJ.js";import"./useFocusRing-QQHGmBCu.js";import"./index-DBbEfBNG.js";import"./index-D0qZXW9E.js";import"./useLabels-DXd6EmCJ.js";import"./useButton-CRB1vlh0.js";import"./RSPContexts-B80FC-gZ.js";import"./Text-fDukTeyt.js";import"./useDateFormatter-zRzb53zi.js";import"./useControlledState-BltVdFKI.js";import"./useLocalizedStringFormatter-B0oCO7RT.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CDFq6SMA.js";import"./useEvent-Dhfs_hD8.js";import"./getScrollParent-BCbGbaUX.js";import"./scrollIntoView-BxCcwxL9.js";import"./useDescription-CiB6T9-T.js";import"./VisuallyHidden-Di6zhsCH.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-C7Naw0kR.js";import"./createLucideIcon-DGj_OZpv.js";import"./chevron-right-CRA42YK5.js";import"./Button-B6VpCJV_.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CLkxGaNH.js";import"./Heading-BO5x4INr.js";import"./FieldError-G-kOnKNy.js";import"./Text-DVquWBhJ.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
