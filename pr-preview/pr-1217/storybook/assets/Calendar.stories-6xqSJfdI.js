import{$ as c,a as m,r as l,j as d}from"./iframe-BHERtVNf.js";import{C as n}from"./Calendar-CTntwuHG.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CpeCH2xo.js";import"./Button-CWn0VMRl.js";import"./utils-CTHX7231.js";import"./clsx-B-dksMZM.js";import"./Hidden-Bbawj_lw.js";import"./useFocusRing-BHPpscSH.js";import"./index-DZ_I24z0.js";import"./index-BtFyGPoM.js";import"./useLabel-BYlWZT7f.js";import"./useLabels-C7V4whMC.js";import"./useButton-DKTwQcCs.js";import"./RSPContexts-CoVebu3O.js";import"./Text-CRbS9uup.js";import"./useDateFormatter-D8fE5GcW.js";import"./useControlledState-7jxNesIu.js";import"./useLocalizedStringFormatter-3lDJzaW9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Cj4-eCYw.js";import"./useEvent-uROvjphs.js";import"./getScrollParent-BOdzDoXv.js";import"./scrollIntoView-leVCW1jO.js";import"./useDescription-DMqZJTlw.js";import"./VisuallyHidden-CotPfbgC.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-y2sJ538W.js";import"./createLucideIcon-DvoPQrFJ.js";import"./chevron-right-CVpgXPqf.js";import"./Button-sL8xP2zY.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-MqTPcr_q.js";import"./Heading-CYL1c2CG.js";import"./FieldError-vYppElHh.js";import"./Text-DnQ_ETrR.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
