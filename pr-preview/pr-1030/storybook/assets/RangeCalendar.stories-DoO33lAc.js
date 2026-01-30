import{m as t,$ as s}from"./iframe-BFkYxjpi.js";import{R as n}from"./RangeCalendar-fsgIOe3T.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DJvW-5I2.js";import"./Button-CPeoJlq9.js";import"./utils-Cvg_SbFj.js";import"./clsx-B-dksMZM.js";import"./Hidden-BxbGe5dx.js";import"./useFocusRing-DhM4Chk4.js";import"./index-1TDjJkgb.js";import"./index-Bfl55b4y.js";import"./useLabels-BHCtKWaQ.js";import"./useButton-w70hhn_t.js";import"./RSPContexts-CX5DCwKf.js";import"./Text-B49sPC4A.js";import"./useDateFormatter-DJJFe-Kh.js";import"./useControlledState-Jpu9zhJ4.js";import"./useLocalizedStringFormatter-CfQ5XL6Z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Ck8gwo2m.js";import"./useEvent-C1J2zTQJ.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BbdIQJUv.js";import"./VisuallyHidden-CKZ765x3.js";import"./clsx-Ciqy0D92.js";import"./Button-C3X5dVZs.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-3SxVOfHu.js";import"./createLucideIcon-Dk_ZVBqn.js";import"./chevron-left-BqucviSH.js";import"./chevron-right-D4FmulIx.js";import"./Heading-CyhYxcEs.js";import"./FieldError-CieRBtPV.js";import"./Text-f7GuBcHW.js";const I={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new s(1995,5,29),end:new s(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: {
      start: mockedNow.subtract({
        days: 2
      }),
      end: mockedNow.add({
        days: 2
      })
    }
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    value: {
      start: new CalendarDate(1995, 5, 29),
      end: new CalendarDate(1995, 5, 31)
    }
  }
}`,...o.parameters?.docs?.source}}};const J=["Primary","SelectedDates","Disabled","ReadOnly"];export{a as Disabled,r as Primary,o as ReadOnly,e as SelectedDates,J as __namedExportsOrder,I as default};
