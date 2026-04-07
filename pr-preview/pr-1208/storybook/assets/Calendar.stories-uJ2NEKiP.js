import{$ as c,a as m,r as l,j as d}from"./iframe-BRlibj-k.js";import{C as n}from"./Calendar-BifPN7e3.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-pY9GVrdE.js";import"./Button-B0keB5Wy.js";import"./utils-Bx0A40Hz.js";import"./clsx-B-dksMZM.js";import"./Hidden-BrLnFV9D.js";import"./useFocusRing-CE-jlBYc.js";import"./index-BvCpjtnM.js";import"./index-CUyw_AEg.js";import"./useLabel-PCvcVGmd.js";import"./useLabels-D3i6Mpdm.js";import"./useButton-BMOcI7o7.js";import"./RSPContexts-CV3yeRAb.js";import"./Text-Ck72NiTG.js";import"./useDateFormatter-BG9SRGMG.js";import"./useControlledState-CerSLXPK.js";import"./useLocalizedStringFormatter-zTincOmM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DpCqtSwy.js";import"./useEvent-CVRknVnX.js";import"./getScrollParent-BNETjxTj.js";import"./scrollIntoView-DIdzgJq7.js";import"./useDescription-By1zY_hH.js";import"./VisuallyHidden-DAewgK18.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-DIj8RbUy.js";import"./createLucideIcon-p72J_6hu.js";import"./chevron-right-DLlUYJ5-.js";import"./Button-BCeszJe0.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-nyGG6W03.js";import"./Heading-aBBagRC2.js";import"./FieldError-CFA3HJLW.js";import"./Text-fpqzAeYU.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
