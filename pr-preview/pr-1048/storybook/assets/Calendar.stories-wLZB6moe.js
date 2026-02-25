import{$ as m,a as c,r as l,j as d}from"./iframe-Bces5ReF.js";import{C as n}from"./Calendar-BZlqa38v.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-3oNAFPu8.js";import"./Button-sx3D740K.js";import"./utils-KBwZHkAa.js";import"./useObjectRef-Cb_4IuYU.js";import"./clsx-B-dksMZM.js";import"./Hidden-HEj2_VP4.js";import"./number-DfkVkf0F.js";import"./useFocusRing-BbIVxAS-.js";import"./useFocusable-CCLwmwwj.js";import"./index-C3ONQ0hZ.js";import"./index-mmvsT4Yz.js";import"./useLabels-it0H97ln.js";import"./useButton-CFUJeSeD.js";import"./RSPContexts-KQSALUVI.js";import"./Text-BbgSNpRI.js";import"./useDateFormatter-fmDv06S3.js";import"./useControlledState-DzHlTDkP.js";import"./useLocalizedStringFormatter-DvTA5UTi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-D5BwVI9g.js";import"./useEvent-r8dTAAd3.js";import"./getScrollParent-CNLff4rP.js";import"./scrollIntoView-rsEwujUN.js";import"./useDescription-BDbgTMgy.js";import"./VisuallyHidden-CplwDL_w.js";import"./clsx-Ciqy0D92.js";import"./Button-CYRhppib.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Bezv0VbS.js";import"./createLucideIcon-B7hgpfhf.js";import"./chevron-left-CE5ZdB8w.js";import"./chevron-right-B84uw-G4.js";import"./Heading-f7FHASBd.js";import"./FieldError-CoA192lt.js";import"./Text-S43pSr6l.js";const X={component:n,render:s=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...s})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new m(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},t={args:{isDateUnavailable:s=>c(s,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isDateUnavailable: date => isWeekend(date, 'sv-SE')
  }
}`,...t.parameters?.docs?.source}}};const Y=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,t as UnavailableWeekends,Y as __namedExportsOrder,X as default};
