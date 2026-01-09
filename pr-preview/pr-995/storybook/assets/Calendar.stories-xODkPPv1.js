import{$ as p,a as m,r as l,j as d}from"./iframe-CiD__Hyy.js";import{C as n}from"./Calendar-C2dYm1vK.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D6bnfr-F.js";import"./Button-B2sA97lD.js";import"./utils-Q1z5OATQ.js";import"./clsx-B-dksMZM.js";import"./Hidden-BE6gFQQR.js";import"./useFocusRing-BySSjodA.js";import"./index-BT7nfzmR.js";import"./index-CV7cu1dt.js";import"./useLabels-CX9hgZKe.js";import"./useButton-X_4XH9RQ.js";import"./RSPContexts-D7xeFMEU.js";import"./Text-DeJgjfoW.js";import"./useDateFormatter-BB64fXqK.js";import"./useControlledState-B8jVS4zb.js";import"./useLocalizedStringFormatter-GCebu6ZU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B_XcpdY9.js";import"./useEvent-CdJ8U0oy.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-iasQP9PS.js";import"./VisuallyHidden-BXpQqt24.js";import"./clsx-Ciqy0D92.js";import"./Button-D24FKJ_j.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-EaUWWv-J.js";import"./createLucideIcon-BkxrGWvy.js";import"./chevron-right-BfhoTUqf.js";import"./Heading-DwR6zONe.js";import"./FieldError-Dm1ekGMw.js";import"./Text-BQRoNCWw.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
