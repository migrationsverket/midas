import{m as t,$ as s}from"./iframe-CLw9EvUn.js";import{R as n}from"./RangeCalendar-CW3KhlJ4.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-PlGZTM3y.js";import"./Button-DnmoB4JS.js";import"./utils-BwWAyVJP.js";import"./clsx-B-dksMZM.js";import"./Hidden-D77l1g2T.js";import"./useFocusRing-BAEYXSj_.js";import"./index-Bq3XAPPV.js";import"./index-B5Glj1Lw.js";import"./useLabels-D1N2DW3Q.js";import"./useButton-DCV5HdO0.js";import"./RSPContexts-gaT2a0FT.js";import"./Text-D5JOCqJj.js";import"./useDateFormatter-BVkzhEGH.js";import"./useControlledState-D21u0Iei.js";import"./useLocalizedStringFormatter-tJnjIpft.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BoNG3IUV.js";import"./useEvent-BPW_XcXk.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-D3QViYKP.js";import"./VisuallyHidden-CbcleJY8.js";import"./clsx-Ciqy0D92.js";import"./Button-Cl5UNsPK.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B24pFSF-.js";import"./createLucideIcon-KVsuRhiu.js";import"./chevron-left-CtzGsANu.js";import"./chevron-right-BiFh_fJi.js";import"./Heading-DHqaN_SF.js";import"./FieldError-Cd3lwIs8.js";import"./Text-1Buqt0Vq.js";const I={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new s(1995,5,29),end:new s(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
