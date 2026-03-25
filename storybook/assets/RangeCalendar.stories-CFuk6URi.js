import{$ as t,m as s}from"./iframe-CS97_aKA.js";import{R as n}from"./RangeCalendar-COrNe5s7.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BUEtNB9i.js";import"./Button-BEBLvHt_.js";import"./utils-Csn9hih_.js";import"./clsx-B-dksMZM.js";import"./Hidden-CZHel-hh.js";import"./useFocusRing-D6iyZNHD.js";import"./index-DiAF0rSe.js";import"./index-B-J3B99e.js";import"./useLabels-BnGDleQi.js";import"./useButton-BQMSADAy.js";import"./RSPContexts-CFWUJItL.js";import"./Text-DllmWVRt.js";import"./useDateFormatter-C6161Uj6.js";import"./useControlledState-DJ6meZbb.js";import"./useLocalizedStringFormatter-DHK9UVHX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CRa_aiQE.js";import"./useEvent-D0H0aX9U.js";import"./getScrollParent-BvsZnnQg.js";import"./scrollIntoView-BRhOFysU.js";import"./useDescription-ChcQRQvy.js";import"./VisuallyHidden-XYRUvUKq.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-D8tHN4LO.js";import"./createLucideIcon-CpkX-fVF.js";import"./chevron-right-BYJ0ejPD.js";import"./Button-BxQXJJlf.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Qz3N5T4H.js";import"./Heading-9Vi9Qzh3.js";import"./FieldError-Bgv3wgUX.js";import"./Text-BsEp3Lpg.js";const I={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:s.subtract({days:2}),end:s.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new t(1995,5,29),end:new t(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
