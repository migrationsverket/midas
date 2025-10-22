import{m as a,$ as c}from"./iframe-C1OjVKLQ.js";import{R as _}from"./RangeCalendar-DEdCpj0H.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-BjncdxjT.js";import"./Button-CO1ceYUP.js";import"./utils-BqJ8lzMo.js";import"./clsx-B-dksMZM.js";import"./Hidden-CO3ECb5p.js";import"./useFocusRing-DDPJ_J0E.js";import"./index-rMroQDpJ.js";import"./index-B_7_j7oG.js";import"./useLabels-Chpo7CqR.js";import"./useButton-D6Ng0KWn.js";import"./RSPContexts-Dqv4fxN1.js";import"./Text-BWMw7upc.js";import"./useDateFormatter-CXmbyoLA.js";import"./useControlledState-DymAS9IR.js";import"./useLocalizedStringFormatter-BWJx7Up_.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-ByK9Jn23.js";import"./useEvent-7kK98PpR.js";import"./getScrollParent-rrZUu6o-.js";import"./scrollIntoView-6xtkIAFo.js";import"./useDescription-ZCYdd1bR.js";import"./VisuallyHidden-DPH9mEsF.js";import"./clsx-Ciqy0D92.js";import"./Button-DhWY514l.js";import"./Button.module-CcWMkJAG.js";import"./createLucideIcon-B5uMbs8Z.js";import"./chevron-right-BSSX37Lk.js";import"./Heading-REVEpVRZ.js";import"./Text-B0u0FgxD.js";const{expect:i,userEvent:e}=__STORYBOOK_MODULE_TEST__,ie={component:_,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},t={},r={parameters:{a11y:{test:"todo"}},args:{defaultValue:{start:a.subtract({days:2}),end:a.add({days:2})}}},o={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},n={args:{isReadOnly:!0,value:{start:new c(1995,5,29),end:new c(1995,5,31)}}},s={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0},a11y:{test:"todo"}},play:async({canvas:d,step:A})=>{await A("it should be possible to select today and two days ahead with the keyboard",async()=>{const O=a.day.toString(),x=a.add({days:1}).day.toString(),E=a.add({days:2}).day.toString();await e.tab(),await e.tab(),await e.tab(),await e.keyboard("[Space]"),await e.keyboard("[ArrowRight]"),await i(d.getByRole("gridcell",{name:O})).toHaveAttribute("aria-selected","true"),await i(d.getByRole("gridcell",{name:x})).toHaveAttribute("aria-selected","true"),await i(d.getByRole("gridcell",{name:E})).toHaveAttribute("aria-selected","true")})}};var m,l,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,y,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
        name: todaysDate
      })).toHaveAttribute('aria-selected', 'true');
      await expect(canvas.getByRole('gridcell', {
        name: tomorrow
      })).toHaveAttribute('aria-selected', 'true');
      await expect(canvas.getByRole('gridcell', {
        name: dayAfterTomorrow
      })).toHaveAttribute('aria-selected', 'true');
    });
  }
}`,...(D=(k=s.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};const ce=["Primary","SelectedDates","Disabled","ReadOnly","KeyboardTest"];export{o as Disabled,s as KeyboardTest,t as Primary,n as ReadOnly,r as SelectedDates,ce as __namedExportsOrder,ie as default};
