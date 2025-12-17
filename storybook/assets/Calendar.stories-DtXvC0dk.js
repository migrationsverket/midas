import{$ as p,a as m,r as l,j as d}from"./iframe-90IRllkR.js";import{C as n}from"./Calendar-deea6OTU.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DD5BKFFz.js";import"./Button-DHs9eQM0.js";import"./utils-DrgpBlOV.js";import"./clsx-B-dksMZM.js";import"./Hidden-DTiIbjRg.js";import"./useFocusRing-D9xLokmm.js";import"./index-BQ655Sgl.js";import"./index-BT0vxHj_.js";import"./useLabels-mqYWaiYP.js";import"./useButton-D-5xgDmf.js";import"./RSPContexts-ewAwOmpc.js";import"./Text-BEFgBVJd.js";import"./useDateFormatter-B_YzHvuq.js";import"./useControlledState-DZmUU_C7.js";import"./useLocalizedStringFormatter-DKf9ituJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DtmSAJ1u.js";import"./useEvent-BIjQLxNz.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Dl1QAAnn.js";import"./VisuallyHidden-v16yXfjK.js";import"./clsx-Ciqy0D92.js";import"./Button-Bhqr8Mcz.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-37ueXPbA.js";import"./createLucideIcon-Dz-TUHWJ.js";import"./chevron-right-A5psGwGy.js";import"./Heading-Drc42Blr.js";import"./FieldError-DOJlLELe.js";import"./Text-CPIt8eLh.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
