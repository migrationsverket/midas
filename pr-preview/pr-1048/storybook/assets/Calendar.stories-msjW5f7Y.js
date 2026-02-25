import{$ as m,a as c,r as l,j as d}from"./iframe-qS8p8Yj8.js";import{C as n}from"./Calendar-Bb0hHSeu.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DtpSKdR8.js";import"./Button-DimkExxE.js";import"./utils-CLxZ6_kQ.js";import"./useObjectRef-C0Y2IBqc.js";import"./clsx-B-dksMZM.js";import"./Hidden-mOYAz_FQ.js";import"./number-DfkVkf0F.js";import"./useFocusRing-CdiqOQ6d.js";import"./useFocusable-C1cH2sYE.js";import"./index-Dkst7HIG.js";import"./index-D29fhoqb.js";import"./useLabels-CutYc3RI.js";import"./useButton-4It9SdDz.js";import"./RSPContexts-lPk0mMUN.js";import"./Text-ClZ-RuRz.js";import"./useDateFormatter-BedI8OSU.js";import"./useControlledState-CazLd_oJ.js";import"./useLocalizedStringFormatter-TI3MlKMg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DVv2Rr6W.js";import"./useEvent-V2R5wKyi.js";import"./getScrollParent-faTxr7gT.js";import"./scrollIntoView-DK04Y_7e.js";import"./useDescription-DGHlAMqD.js";import"./VisuallyHidden-oxQkvabd.js";import"./clsx-Ciqy0D92.js";import"./Button-B3ExRFXj.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CYia6YQs.js";import"./createLucideIcon-C52rh-_w.js";import"./chevron-left-DqtNqr5Q.js";import"./chevron-right-Bk4ny9Nx.js";import"./Heading-oJVkiPMA.js";import"./FieldError-C6jT-PXD.js";import"./Text-ByM0Af-l.js";const X={component:n,render:s=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...s})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new m(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},t={args:{isDateUnavailable:s=>c(s,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
