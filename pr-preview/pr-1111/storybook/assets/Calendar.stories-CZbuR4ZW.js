import{$ as c,a as m,r as l,j as d}from"./iframe-ZeXYQ1RW.js";import{C as n}from"./Calendar-DErhEnOz.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BFJgOHzf.js";import"./Button-B1pz6NZE.js";import"./utils-DkAMXJPn.js";import"./clsx-B-dksMZM.js";import"./Hidden-Cw1xIodo.js";import"./useFocusRing-B05DoKvO.js";import"./index-DbUHK1eY.js";import"./index-DDIUhUq_.js";import"./useLabels-CvN3rkoX.js";import"./useButton-CABxZnPk.js";import"./RSPContexts-ByHBnrKz.js";import"./Text-Dve1S3pg.js";import"./useDateFormatter-DuOfG5Qb.js";import"./useControlledState-BI4OK_uN.js";import"./useLocalizedStringFormatter-26LgWsvD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-U3wXFl5Z.js";import"./useEvent-CBzfijIc.js";import"./getScrollParent-Dxv8a8bs.js";import"./scrollIntoView-DeVdbosm.js";import"./useDescription-B2YHcwj0.js";import"./VisuallyHidden-D_TH7fZb.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DrImh9Ge.js";import"./createLucideIcon-NOl_qKmM.js";import"./chevron-right-Lob-sZMu.js";import"./Button-D_9dtB_J.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DB_PBhmZ.js";import"./Heading-XJVIyJj6.js";import"./FieldError-Bowa5wqw.js";import"./Text-DNs8wtir.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
