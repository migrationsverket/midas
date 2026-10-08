import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,r as n}from"./CalendarDate-B15qQ79W.js";import{c as r,o as i}from"./iframe-gYUqF9TQ.js";import{n as a,t as o}from"./RangeCalendar-ge0IImhP.js";var s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{i(),n(),a(),s={component:o,title:`Components/Calendar/RangeCalendar`,tags:[`autodocs`]},c={},l={args:{defaultValue:{start:r.subtract({days:2}),end:r.add({days:2})}}},u={args:{isDisabled:!0},parameters:{a11y:{context:`body`,config:{rules:[{id:`color-contrast`,enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},d={args:{isReadOnly:!0,value:{start:new t(1995,5,29),end:new t(1995,5,31)}}},f={args:{showMonthYearPicker:!0}},p={args:{isDateUnavailable:(e,t)=>t!==null&&Math.abs(e.compare(t))>7}},m=[`Primary`,`SelectedDates`,`Disabled`,`ReadOnly`,`WithMonthYearPicker`,`MaxRangeDuration`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    value: {
      start: new CalendarDate(1995, 5, 29),
      end: new CalendarDate(1995, 5, 31)
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    showMonthYearPicker: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    // The second argument (anchorDate) is the first date the user picked.
    // It's null until a selection has started, so dates are only restricted
    // once there's something to measure the 7-day window from.
    isDateUnavailable: (date, anchorDate) => anchorDate !== null && Math.abs(date.compare(anchorDate)) > 7
  }
}`,...p.parameters?.docs?.source}}}})))()}h();export{u as Disabled,p as MaxRangeDuration,c as Primary,d as ReadOnly,l as SelectedDates,f as WithMonthYearPicker,m as __namedExportsOrder,s as default};