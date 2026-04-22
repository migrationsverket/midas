import{$ as c,a as m,r as l,j as d}from"./iframe-CWDqI9As.js";import{C as n}from"./Calendar-VIcxIeyj.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-oMFZJQ8F.js";import"./Button-ChgRUqyy.js";import"./utils-dBjUBpAV.js";import"./clsx-B-dksMZM.js";import"./Hidden-Cgjt9oWa.js";import"./useFocusRing-CGI_ER4d.js";import"./index-BPbsZXYC.js";import"./index-B9h6eKZl.js";import"./useLabel-BVrFk9UL.js";import"./useLabels-BvpY06Hn.js";import"./useButton-C4i5Q2ts.js";import"./RSPContexts-BANsKMWb.js";import"./Text-CNhsvp3k.js";import"./useDateFormatter-NzRvC_Aw.js";import"./useControlledState-7TZpR_sr.js";import"./useLocalizedStringFormatter-BpizLsAw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BxR7Ys3d.js";import"./useEvent-Cr5dRUc0.js";import"./getScrollParent-_UwOfSKS.js";import"./scrollIntoView-CWyOkl1L.js";import"./useDescription-DPaZj1pb.js";import"./VisuallyHidden-CSPSoyjM.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-WpHJ1njA.js";import"./createLucideIcon-CQ9K894w.js";import"./chevron-right-DFTGUp4M.js";import"./Button-CT52BdlE.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CoCxcMtj.js";import"./Heading-mvOStMwp.js";import"./FieldError-BFTOWK8w.js";import"./Text-Bg0gZzcQ.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
