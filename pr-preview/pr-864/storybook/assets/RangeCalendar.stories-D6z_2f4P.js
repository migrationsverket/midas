import{m as e}from"./iframe-2jCr-GtP.js";import{R as A}from"./RangeCalendar-T4db1NwC.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-CKDAg219.js";import"./Button-dDDKBd3w.js";import"./utils-BXeAKBiV.js";import"./clsx-B-dksMZM.js";import"./Hidden-BZ7LIDMo.js";import"./useFocusRing-UQolHKwo.js";import"./index-CtvLFszV.js";import"./index-Cxm_8wvF.js";import"./useLabels-Cid6-WUo.js";import"./useButton-Dz7OS1I-.js";import"./RSPContexts-CJxbgdNc.js";import"./Text-BvBhlIuM.js";import"./useDateFormatter-BtcYWQxQ.js";import"./useControlledState-DZS7WdDT.js";import"./useLocalizedStringFormatter-B-g6LA8F.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-BoNr39Lw.js";import"./useEvent-DpaWMfbD.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./useDescription-4hz1o47b.js";import"./VisuallyHidden-CzoFwHuA.js";import"./clsx-Ciqy0D92.js";import"./Button-DPL-9kiw.js";import"./Button.module-DRhvPh0f.js";import"./createLucideIcon-DdpFb7KD.js";import"./chevron-right-But59dqK.js";import"./Heading-DF6v-sxV.js";import"./Text-Du4hnDO4.js";const{expect:d,userEvent:t}=__STORYBOOK_MODULE_TEST__,rt={component:A,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},a={},r={args:{defaultValue:{start:e.subtract({days:2}),end:e.add({days:2})}}},o={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},s={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},play:async({canvas:n,step:v})=>{await v("it should be possible to select today and two days ahead with the keyboard",async()=>{const h=e.day.toString(),R=e.add({days:1}).day.toString(),k=e.add({days:2}).day.toString();await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Space]"),await t.keyboard("[ArrowRight]"),await d(n.getByRole("gridcell",{name:h})).toHaveAttribute("aria-selected","true"),await d(n.getByRole("gridcell",{name:R})).toHaveAttribute("aria-selected","true"),await d(n.getByRole("gridcell",{name:k})).toHaveAttribute("aria-selected","true")})}};var i,c,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var l,p,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var y,b,g;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(g=(b=o.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var w,S,f;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: {
      disableSnapshot: true
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
}`,...(f=(S=s.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};const ot=["Primary","SelectedDates","Disabled","KeyboardTest"];export{o as Disabled,s as KeyboardTest,a as Primary,r as SelectedDates,ot as __namedExportsOrder,rt as default};
