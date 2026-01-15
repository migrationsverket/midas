import{$ as c,a as m,r as l,j as d}from"./iframe-ccFBI1Zy.js";import{C as n}from"./Calendar-CUs9JrIb.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CWfJz8GT.js";import"./Button-CEnfx92n.js";import"./utils-BVj3-Cd3.js";import"./clsx-B-dksMZM.js";import"./Hidden-p0IfrMWZ.js";import"./useFocusRing-C9VQOrA-.js";import"./index-dN5ydD_a.js";import"./index-Dusa60jE.js";import"./useLabels-CApjWlXB.js";import"./useButton-DsE6FkYL.js";import"./RSPContexts-CBH8t1Y8.js";import"./Text-mV_idVq_.js";import"./useDateFormatter-YsWeSxY1.js";import"./useControlledState-BI6Lp7H1.js";import"./useLocalizedStringFormatter-ClaIkQbq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C9HkJm6q.js";import"./useEvent-zMHUl8wo.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-B1c0tiyy.js";import"./VisuallyHidden-CfF4nhmt.js";import"./clsx-Ciqy0D92.js";import"./Button-BJwJ6DIM.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DAkizOqJ.js";import"./createLucideIcon-puHPRiC0.js";import"./chevron-left-aWQsdchu.js";import"./chevron-right-Cy_70dqC.js";import"./Heading-DS1q6uAH.js";import"./FieldError-CVxfd_t0.js";import"./Text-CmBwCO8i.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const T=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,T as __namedExportsOrder,Q as default};
