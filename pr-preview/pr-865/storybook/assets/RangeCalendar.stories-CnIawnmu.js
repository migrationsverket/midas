import{m as e}from"./iframe-Be0g_aJO.js";import{R as A}from"./RangeCalendar-CaIiJ1ud.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-D_q10AAr.js";import"./Button-D8MC8HcS.js";import"./utils-ddu2LZsb.js";import"./clsx-B-dksMZM.js";import"./Hidden-DfyZdMIn.js";import"./useFocusRing-COr-n7Fx.js";import"./index-B0KwozC5.js";import"./index-BSeW_fek.js";import"./useLabels-COtLsp3_.js";import"./useButton-C8AwPNN5.js";import"./RSPContexts-PBwx02cj.js";import"./Text-jDSViAJL.js";import"./useDateFormatter-D2oykTpV.js";import"./useControlledState-B9P4hSlN.js";import"./useLocalizedStringFormatter-D8VSbuPC.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-Dz11lOr7.js";import"./useEvent-CbUSRY16.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./useDescription-3LzBmV9x.js";import"./VisuallyHidden-zms1DDcC.js";import"./clsx-Ciqy0D92.js";import"./Button-WxyWdEj2.js";import"./Button.module-DRhvPh0f.js";import"./createLucideIcon-DknQS7n1.js";import"./chevron-right-BasTPsui.js";import"./Heading-D1RR6dcO.js";import"./Text-Bvq6LOwS.js";const{expect:d,userEvent:t}=__STORYBOOK_MODULE_TEST__,ot={component:A,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},a={},o={parameters:{a11y:{test:"todo"}},args:{defaultValue:{start:e.subtract({days:2}),end:e.add({days:2})}}},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},n={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0},a11y:{test:"todo"}},play:async({canvas:s,step:S})=>{await S("it should be possible to select today and two days ahead with the keyboard",async()=>{const h=e.day.toString(),R=e.add({days:1}).day.toString(),k=e.add({days:2}).day.toString();await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Space]"),await t.keyboard("[ArrowRight]"),await d(s.getByRole("gridcell",{name:h})).toHaveAttribute("aria-selected","true"),await d(s.getByRole("gridcell",{name:R})).toHaveAttribute("aria-selected","true"),await d(s.getByRole("gridcell",{name:k})).toHaveAttribute("aria-selected","true")})}};var i,c,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var l,p,y;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(y=(p=o.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var u,b,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var w,f,v;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
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
}`,...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const rt=["Primary","SelectedDates","Disabled","KeyboardTest"];export{r as Disabled,n as KeyboardTest,a as Primary,o as SelectedDates,rt as __namedExportsOrder,ot as default};
