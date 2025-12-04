import{$ as p,a as m,r as l,j as d}from"./iframe-DzWavng1.js";import{C as n}from"./Calendar-FPPn_3Vq.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CyxZp80U.js";import"./Button-BvaWFHt-.js";import"./utils-DZ771gTW.js";import"./clsx-B-dksMZM.js";import"./Hidden-ZA6QDtq5.js";import"./useFocusRing-BOScdwIf.js";import"./index-BqUojVv0.js";import"./index-3sde6yQY.js";import"./useLabels-roEh_XUF.js";import"./useButton-CgRo_gBu.js";import"./RSPContexts-DGc80Od4.js";import"./Text-ePkty29E.js";import"./useDateFormatter-DbSPiuAn.js";import"./useControlledState-lHw30NeI.js";import"./useLocalizedStringFormatter-DkL1-w21.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-alrcBA-E.js";import"./useEvent-5ivb094s.js";import"./getScrollParent-dwiGZhPf.js";import"./scrollIntoView-BAE8WRGI.js";import"./useDescription-B5og04Tz.js";import"./VisuallyHidden-u0dD8pVG.js";import"./clsx-Ciqy0D92.js";import"./Button-C9cedukw.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-enb0CHJT.js";import"./createLucideIcon-CC0DruiB.js";import"./chevron-right-BYmOPdq-.js";import"./Heading-BDScHeSe.js";import"./FieldError-B0hGaN2H.js";import"./Text-DA35gZzh.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
