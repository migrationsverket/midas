import{$ as p,a as m,r as l,j as d}from"./iframe-BCu1NNFI.js";import{C as n}from"./Calendar-BaKHYI7O.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CgT3MNRr.js";import"./Button-vp3BXzyW.js";import"./utils-fj1shBHC.js";import"./clsx-B-dksMZM.js";import"./Hidden-CM3Yk7lA.js";import"./useFocusRing-Bi2l9BeF.js";import"./index-BORhhh-V.js";import"./index-pb47Dny1.js";import"./useLabels-Ck0jGj4V.js";import"./useButton-tpmepzyq.js";import"./RSPContexts-DJXEp2S5.js";import"./Text-CSC27xRH.js";import"./useDateFormatter-BmCGsvnn.js";import"./useControlledState-Dejsun2t.js";import"./useLocalizedStringFormatter-BQINCQnu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-9Ma-jQ7m.js";import"./useEvent-CklH_3Xl.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BP344jV7.js";import"./VisuallyHidden-BUlrvxyt.js";import"./clsx-Ciqy0D92.js";import"./Button-D-exP_iM.js";import"./Button.module-CIvIJ45H.js";import"./useLocalizedStringFormatter-DO5bmpoD.js";import"./createLucideIcon-B5Es93Ur.js";import"./chevron-right-BWASO5dM.js";import"./Heading-CHeMvKF_.js";import"./FieldError-D_bX0XbT.js";import"./Text-DIEFoepW.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
