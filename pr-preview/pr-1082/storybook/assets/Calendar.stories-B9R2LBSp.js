import{$ as c,a as m,r as l,j as d}from"./iframe-DZnWAGNq.js";import{C as n}from"./Calendar-D5glEo6s.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CU7s5XMq.js";import"./Button-BTPuoZ6n.js";import"./utils-Btsh_mej.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dc0Ha1vW.js";import"./useFocusRing-BZzOLfX3.js";import"./index--cp8vNXJ.js";import"./index-DH1eMf2P.js";import"./useLabel-iphFOCA9.js";import"./useLabels-bUzroRw2.js";import"./useButton-DqeMFL8_.js";import"./RSPContexts-CXYZROJa.js";import"./Text-8pdzY51Q.js";import"./useDateFormatter-gMu7Be8G.js";import"./useControlledState-6kQgBtxG.js";import"./useLocalizedStringFormatter-BNHvIU-7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-JaSxezPb.js";import"./useEvent-BKkN6iVY.js";import"./getScrollParent-5LQJ6MUd.js";import"./scrollIntoView-BEWtuar9.js";import"./useDescription-BbNu-u1f.js";import"./VisuallyHidden-BIds43GM.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BUiGTxEY.js";import"./createLucideIcon-DnUFLHhp.js";import"./chevron-right-BxQ1VnHc.js";import"./Button-DcP_UxfK.js";import"./Button.module-BFenTVPP.js";import"./useLocalizedStringFormatter-GZqDfzDD.js";import"./Heading-D57DtYH1.js";import"./FieldError-BtctqwaV.js";import"./Text-Db4n8kvt.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
