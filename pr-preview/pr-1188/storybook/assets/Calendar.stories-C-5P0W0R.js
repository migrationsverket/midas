import{$ as c,a as m,r as l,j as d}from"./iframe-Dr8Tkvah.js";import{C as n}from"./Calendar-5pkhmgC8.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CyPOKMnK.js";import"./Button-C610-Rnq.js";import"./utils-DOuA3kXF.js";import"./clsx-B-dksMZM.js";import"./Hidden-BjSG53-T.js";import"./useFocusRing-poi8r4OJ.js";import"./index-DM6sY-46.js";import"./index-CtVp1upA.js";import"./useLabel-C7_L8_CN.js";import"./useLabels-DxkPONzl.js";import"./useButton-BViocPn_.js";import"./RSPContexts-DIaWsy7a.js";import"./Text-Dbwxk-C7.js";import"./useDateFormatter-DZ8dLVe6.js";import"./useControlledState-DzvWO88h.js";import"./useLocalizedStringFormatter-CR5zAqVa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-k9O9r0nD.js";import"./useEvent-DThJtK0k.js";import"./getScrollParent-CUIafVHW.js";import"./scrollIntoView-B1LP76du.js";import"./useDescription-BhmkpAHf.js";import"./VisuallyHidden-CqOJHiwP.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BByfCydx.js";import"./createLucideIcon-Boz8MrIZ.js";import"./chevron-right-joYGH8hV.js";import"./Button-B4jxTFim.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Cn25UGjx.js";import"./Heading-Daw6YIIy.js";import"./FieldError-K3l2DsmW.js";import"./Text-CQjzvGyg.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
