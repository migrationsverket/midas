import{m as e}from"./iframe-Cg9bsw0p.js";import{R as A}from"./RangeCalendar-B0Ixbhuq.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-JoNyqHY1.js";import"./Button-0rg2-bJH.js";import"./utils-BDmz9ss0.js";import"./clsx-B-dksMZM.js";import"./Hidden-BqiN8Imq.js";import"./useFocusRing-kF5CxaXi.js";import"./index-DAAfdeRC.js";import"./index-Cs4yWL8O.js";import"./useLabels-63_LE9SZ.js";import"./useButton-DTh9iGdC.js";import"./RSPContexts-DcEi24la.js";import"./Text-MSMQ0onS.js";import"./useDateFormatter-DlnvbaFl.js";import"./useControlledState-BpsuIfnv.js";import"./useLocalizedStringFormatter-BM43qOcR.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-BT3fZg9u.js";import"./useEvent-CgpxcrA_.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./useDescription-DI-g8NQy.js";import"./VisuallyHidden-Bbuxh2i9.js";import"./clsx-Ciqy0D92.js";import"./Button-COeQT7LJ.js";import"./Button.module-BF_N0uYf.js";import"./useLocalizedStringFormatter-9YzW9Y9N.js";import"./createLucideIcon-Br1vyvNC.js";import"./chevron-right-UFRnM1u2.js";import"./Heading-CREk18-7.js";import"./Text-DJ8aMmha.js";const{expect:i,userEvent:t}=__STORYBOOK_MODULE_TEST__,ot={component:A,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},a={},r={args:{defaultValue:{start:e.subtract({days:2}),end:e.add({days:2})}}},o={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},s={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},play:async({canvas:n,step:v})=>{await v("it should be possible to select today and two days ahead with the keyboard",async()=>{const h=e.day.toString(),R=e.add({days:1}).day.toString(),k=e.add({days:2}).day.toString();await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Space]"),await t.keyboard("[ArrowRight]"),await i(n.getByRole("gridcell",{name:h})).toHaveAttribute("aria-selected","true"),await i(n.getByRole("gridcell",{name:R})).toHaveAttribute("aria-selected","true"),await i(n.getByRole("gridcell",{name:k})).toHaveAttribute("aria-selected","true")})}};var d,c,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,l,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var y,b,g;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(f=(S=s.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};const st=["Primary","SelectedDates","Disabled","KeyboardTest"];export{o as Disabled,s as KeyboardTest,a as Primary,r as SelectedDates,st as __namedExportsOrder,ot as default};
