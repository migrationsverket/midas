import{m as t,$ as s}from"./iframe-CNb7O3fM.js";import{R as n}from"./RangeCalendar-D9Jqbux1.js";import"./preload-helper-Ct5FWWRu.js";import"./CalendarHeader-B0j0Y4lS.js";import"./Button-C3beaqZU.js";import"./utils-D0vAnsQi.js";import"./clsx-B-dksMZM.js";import"./Hidden-DQksNeyO.js";import"./useFocusRing-92_f-Cnn.js";import"./index-DNw74xlK.js";import"./index-TauKm_TR.js";import"./useLabels-BMdYA1hN.js";import"./useButton-BknTUIzA.js";import"./RSPContexts-D0Mi2c8F.js";import"./Text-bNJPpR3N.js";import"./useDateFormatter-Wo1gZXkK.js";import"./useControlledState-DD-yjPuv.js";import"./useLocalizedStringFormatter-BEOuTl9U.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CEObcmYR.js";import"./useEvent-BU8P7E25.js";import"./getScrollParent-dNi3Tk6G.js";import"./scrollIntoView-DzSt_Lig.js";import"./useDescription-0S3siiXJ.js";import"./VisuallyHidden-NUlijbui.js";import"./clsx-Ciqy0D92.js";import"./Button-B4oa6PJg.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-DJgDtxVY.js";import"./chevron-right-BlciHy46.js";import"./Heading-CGaG1cgk.js";import"./Text-IpU7O3G7.js";const F={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new s(1995,5,29),end:new s(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const G=["Primary","SelectedDates","Disabled","ReadOnly"];export{a as Disabled,r as Primary,o as ReadOnly,e as SelectedDates,G as __namedExportsOrder,F as default};
