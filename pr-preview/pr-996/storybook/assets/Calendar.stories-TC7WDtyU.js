import{$ as p,a as m,r as l,j as d}from"./iframe-BRBGZIqz.js";import{C as n}from"./Calendar-BJdF02DH.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BjYTTAw4.js";import"./Button-Di6ycfiR.js";import"./utils-OvVzRtGp.js";import"./clsx-B-dksMZM.js";import"./Hidden-Bjo-j34-.js";import"./useFocusRing-TRszBoqc.js";import"./index-BZiahUN9.js";import"./index-D1MdiIlN.js";import"./useLabels-BD_4aIe0.js";import"./useButton-DDvnlXFn.js";import"./RSPContexts-jYMRsKlw.js";import"./Text-Bm57nBYX.js";import"./useDateFormatter-CcLJ2Lp6.js";import"./useControlledState-i1Jya0wd.js";import"./useLocalizedStringFormatter-GxtkbDMC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CLpVWMxf.js";import"./useEvent-MfuLXWyH.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CYAHXzDK.js";import"./VisuallyHidden-V6qs-Wg7.js";import"./clsx-Ciqy0D92.js";import"./Button-CNcByJgx.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DdmTdBPq.js";import"./createLucideIcon-9r_u-ur5.js";import"./chevron-right-CfjLadH9.js";import"./Heading-Cv-exkUw.js";import"./FieldError-Bvp_2QjQ.js";import"./Text-D30cak4p.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
