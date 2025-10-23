import{m as t,$ as c}from"./iframe-Tw41aNfS.js";import{R as _}from"./RangeCalendar-Dzf34_DK.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-DyqAAsbC.js";import"./Button-DNTXyKA6.js";import"./utils-BPejs0wc.js";import"./clsx-B-dksMZM.js";import"./Hidden-_XUoW0aU.js";import"./useFocusRing-mxtqiPoR.js";import"./index-CKncJRoA.js";import"./index-C3uEoWC8.js";import"./useLabels-CihZ0btI.js";import"./useButton-DvHXUOBv.js";import"./RSPContexts-BaqoygXm.js";import"./Text-Bc0J-Jf5.js";import"./useDateFormatter-5nSKN2wy.js";import"./useControlledState-B5Dm8GAh.js";import"./useLocalizedStringFormatter-CSGw0Clq.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-4zxp6d-Z.js";import"./useEvent-BL7ym3ft.js";import"./getScrollParent-C19WkcPQ.js";import"./scrollIntoView-5IfCkSsC.js";import"./useDescription-Cbff0xqB.js";import"./VisuallyHidden-GQBdtwAz.js";import"./clsx-Ciqy0D92.js";import"./Button-BHbFATyp.js";import"./Button.module-CcWMkJAG.js";import"./createLucideIcon-DaJOZeq2.js";import"./chevron-right-hewoMCbs.js";import"./Heading-DIsxoGpP.js";import"./Text-PYLpypEq.js";const{expect:i,userEvent:e}=__STORYBOOK_MODULE_TEST__,ie={component:_,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},a={},r={parameters:{a11y:{test:"todo"}},args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},o={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},n={args:{isReadOnly:!0,value:{start:new c(1995,5,29),end:new c(1995,5,31)}}},s={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0},a11y:{test:"todo"}},play:async({canvas:d,step:A})=>{await A("it should be possible to select today and two days ahead with the keyboard",async()=>{const O=t.day.toString(),x=t.add({days:1}).day.toString(),E=t.add({days:2}).day.toString();await e.tab(),await e.tab(),await e.tab(),await e.keyboard("[Space]"),await e.keyboard("[ArrowRight]"),await i(d.getByRole("gridcell",{name:O,selected:!0})).toHaveAttribute("aria-selected","true"),await i(d.getByRole("gridcell",{name:x,selected:!0})).toHaveAttribute("aria-selected","true"),await i(d.getByRole("gridcell",{name:E,selected:!0})).toHaveAttribute("aria-selected","true")})}};var l,m,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,y,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    // violations in forced-colors
    a11y: {
      test: 'todo'
    }
  },
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
}`,...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var w,g,f;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,S,R;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    value: {
      start: new CalendarDate(1995, 5, 29),
      end: new CalendarDate(1995, 5, 31)
    }
  }
}`,...(R=(S=n.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var h,k,D;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    },
    // violations in forced-colors
    a11y: {
      test: 'todo'
    }
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('it should be possible to select today and two days ahead with the keyboard', async () => {
      const todaysDate = mockedNow.day.toString();
      const tomorrow = mockedNow.add({
        days: 1
      }).day.toString();
      const dayAfterTomorrow = mockedNow.add({
        days: 2
      }).day.toString();
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.keyboard('[Space]');
      await userEvent.keyboard('[ArrowRight]');
      await expect(canvas.getByRole('gridcell', {
        name: todaysDate,
        selected: true
      })).toHaveAttribute('aria-selected', 'true');
      await expect(canvas.getByRole('gridcell', {
        name: tomorrow,
        selected: true
      })).toHaveAttribute('aria-selected', 'true');
      await expect(canvas.getByRole('gridcell', {
        name: dayAfterTomorrow,
        selected: true
      })).toHaveAttribute('aria-selected', 'true');
    });
  }
}`,...(D=(k=s.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};const ce=["Primary","SelectedDates","Disabled","ReadOnly","KeyboardTest"];export{o as Disabled,s as KeyboardTest,a as Primary,n as ReadOnly,r as SelectedDates,ce as __namedExportsOrder,ie as default};
