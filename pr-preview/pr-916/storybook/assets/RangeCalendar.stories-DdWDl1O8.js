import{m as t,$ as s}from"./iframe-ylZf3Rzh.js";import{R as n}from"./RangeCalendar-BC8p-FIA.js";import"./preload-helper-Ct5FWWRu.js";import"./CalendarHeader-BwtYFxDC.js";import"./Button-DhYk_hW2.js";import"./utils-D06pAXX_.js";import"./clsx-B-dksMZM.js";import"./Hidden-CalmMv23.js";import"./useFocusRing-Bo93gYby.js";import"./index-Bq-vAhim.js";import"./index-Crjclm7s.js";import"./useLabels-Bxulg4qY.js";import"./useButton-C5dBSQLo.js";import"./RSPContexts-DqWiROll.js";import"./Text-Db7o3Fbo.js";import"./useDateFormatter-C6tQHxSF.js";import"./useControlledState-Cl9-8Wdt.js";import"./useLocalizedStringFormatter-CDM70I-6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-3b5-BZkh.js";import"./useEvent-D3oA8MGZ.js";import"./getScrollParent-D2Fpe8q7.js";import"./scrollIntoView-B8UBJdD2.js";import"./useDescription-CvDzlQQ_.js";import"./VisuallyHidden-DcsDn9V3.js";import"./clsx-Ciqy0D92.js";import"./Button-DIVvbVZE.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-9MEtXIpu.js";import"./chevron-right-DfJ0p5qO.js";import"./Heading-DE2hCXd6.js";import"./Text-8r5M_h2W.js";const F={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new s(1995,5,29),end:new s(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
