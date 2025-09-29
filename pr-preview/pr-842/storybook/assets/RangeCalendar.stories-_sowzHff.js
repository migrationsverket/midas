import{m as e}from"./iframe-CgfjOamP.js";import{R as A}from"./RangeCalendar-DD3MF3a5.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-ClqQ_904.js";import"./Button-BtpfA12t.js";import"./utils-B7IR5tpd.js";import"./clsx-B-dksMZM.js";import"./Hidden-CvMsrLmq.js";import"./useFocusRing-DKetXV2t.js";import"./index-DVkGHBpS.js";import"./index-C7rOlEzi.js";import"./useLabels-Bfqt8Zdi.js";import"./useButton-VkVZjmX7.js";import"./RSPContexts-Cp5-e8Z7.js";import"./Text-Cm7kHyBh.js";import"./useDateFormatter-DhpDyFge.js";import"./useControlledState-Dq9UL-qa.js";import"./useLocalizedStringFormatter-DcOPmlta.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-DaBbJVmG.js";import"./useEvent--1_sOOcS.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./useDescription-Bm_Vfiwo.js";import"./VisuallyHidden-DW7OqHFy.js";import"./Button-DniDMKnQ.js";import"./Button.module-DRhvPh0f.js";import"./createLucideIcon-DW6kjBNV.js";import"./chevron-right-C_PBccjT.js";import"./Heading-u_mB3F-g.js";import"./Text-Dox_jSkD.js";const{expect:d,userEvent:t}=__STORYBOOK_MODULE_TEST__,at={component:A,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},a={},r={args:{defaultValue:{start:e.subtract({days:2}),end:e.add({days:2})}}},o={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},s={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},play:async({canvas:n,step:v})=>{await v("it should be possible to select today and two days ahead with the keyboard",async()=>{const h=e.day.toString(),R=e.add({days:1}).day.toString(),k=e.add({days:2}).day.toString();await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Space]"),await t.keyboard("[ArrowRight]"),await d(n.getByRole("gridcell",{name:h})).toHaveAttribute("aria-selected","true"),await d(n.getByRole("gridcell",{name:R})).toHaveAttribute("aria-selected","true"),await d(n.getByRole("gridcell",{name:k})).toHaveAttribute("aria-selected","true")})}};var i,c,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var l,p,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(f=(S=s.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};const rt=["Primary","SelectedDates","Disabled","KeyboardTest"];export{o as Disabled,s as KeyboardTest,a as Primary,r as SelectedDates,rt as __namedExportsOrder,at as default};
