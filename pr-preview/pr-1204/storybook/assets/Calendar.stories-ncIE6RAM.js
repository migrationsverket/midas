import{$ as c,a as m,r as l,j as d}from"./iframe-Bp0IlJF2.js";import{C as n}from"./Calendar-BXThGGff.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Bi3hxTFH.js";import"./Button-JPYQALf4.js";import"./utils-CjNbFGiN.js";import"./clsx-B-dksMZM.js";import"./Hidden-D7-h4wXt.js";import"./useFocusRing-DY1AMT3v.js";import"./index-XmjshE1X.js";import"./index-DtgVGp9d.js";import"./useLabel-DUfJ5yQb.js";import"./useLabels-BVCe-bH1.js";import"./useButton-BNdBcGOL.js";import"./RSPContexts-CYpW2htd.js";import"./Text-BZtrmicZ.js";import"./useDateFormatter-BirI5WeW.js";import"./useControlledState-ClzZCqkV.js";import"./useLocalizedStringFormatter-BXFHs5VP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DQbyf-pJ.js";import"./useEvent-CSrgknyI.js";import"./getScrollParent-BXxENsSc.js";import"./scrollIntoView-BIHn6aZC.js";import"./useDescription-Dhw9gkBv.js";import"./VisuallyHidden-BVXE9jAl.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DLGZ4TNh.js";import"./createLucideIcon-DC4UrGzm.js";import"./chevron-right-DyRWSGsg.js";import"./Button-CuWSXiv5.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DkhY-lw-.js";import"./Heading-B6DJelp8.js";import"./FieldError-wBwSD7iB.js";import"./Text-DQDnVDGB.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
