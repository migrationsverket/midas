import{m as t,$ as s}from"./iframe-C1S3UI0q.js";import{R as n}from"./RangeCalendar-DAd6EtMe.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D4SCfFfv.js";import"./Button-iogE4gXn.js";import"./utils-DDXHsTpT.js";import"./clsx-B-dksMZM.js";import"./Hidden-BJe1Vr5O.js";import"./useFocusRing-CyRIiSHy.js";import"./index-DtMwqg1W.js";import"./index-9q-9abAX.js";import"./useLabels-zIJcgfCF.js";import"./useButton-Ca4j2v7e.js";import"./RSPContexts-h2hygVuJ.js";import"./Text-DHpcpzXZ.js";import"./useDateFormatter-D81-mhyy.js";import"./useControlledState-BU5hH7Ch.js";import"./useLocalizedStringFormatter-CL1671By.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-wjU1-G2X.js";import"./useEvent-ClTJe97m.js";import"./getScrollParent-Bjcd7mkO.js";import"./scrollIntoView-CJsMR2zp.js";import"./useDescription-D_-dPDWg.js";import"./VisuallyHidden-DFD9-6eR.js";import"./clsx-Ciqy0D92.js";import"./Button-BJgkfWbj.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-B-9b73Xu.js";import"./chevron-right-a8jV3Bco.js";import"./Heading-BAtLrgM0.js";import"./Text-BWJL7Gm8.js";const F={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new s(1995,5,29),end:new s(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
