import{m as a}from"./iframe-DqOnImtB.js";import{R as A}from"./RangeCalendar-BUk-BD7B.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-58ejVmeG.js";import"./Button-BXZf-Ntr.js";import"./utils-CtOUdhlm.js";import"./clsx-B-dksMZM.js";import"./Hidden-DaJ_gIh_.js";import"./useFocusRing-CTLKxZOl.js";import"./index-BqMFRqFO.js";import"./index-BTjQfJwM.js";import"./useLabels-BbJEqnqr.js";import"./useButton-DiBhr5IU.js";import"./RSPContexts-DgymFxc4.js";import"./Text-spQo0dXp.js";import"./useDateFormatter-CW74VXZf.js";import"./useControlledState-Xdh2dYbf.js";import"./useLocalizedStringFormatter-DWAo3GxI.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-CDisofNV.js";import"./useEvent-XDgY8-01.js";import"./getScrollParent-DLQ8g5-_.js";import"./scrollIntoView-D6qed4DQ.js";import"./useDescription-BDqo8izq.js";import"./VisuallyHidden-DK-0L129.js";import"./clsx-Ciqy0D92.js";import"./Button-e7r9nziE.js";import"./Button.module-CcWMkJAG.js";import"./createLucideIcon-DrxU8fU6.js";import"./chevron-right-CSOtFYf7.js";import"./Heading-B1tvovrF.js";import"./Text-DSGtwwI6.js";const{expect:d,userEvent:t}=__STORYBOOK_MODULE_TEST__,ot={component:A,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},e={},o={parameters:{a11y:{test:"todo"}},args:{defaultValue:{start:a.subtract({days:2}),end:a.add({days:2})}}},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},n={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0},a11y:{test:"todo"}},play:async({canvas:s,step:S})=>{await S("it should be possible to select today and two days ahead with the keyboard",async()=>{const h=a.day.toString(),R=a.add({days:1}).day.toString(),k=a.add({days:2}).day.toString();await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Space]"),await t.keyboard("[ArrowRight]"),await d(s.getByRole("gridcell",{name:h})).toHaveAttribute("aria-selected","true"),await d(s.getByRole("gridcell",{name:R})).toHaveAttribute("aria-selected","true"),await d(s.getByRole("gridcell",{name:k})).toHaveAttribute("aria-selected","true")})}};var i,c,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var l,p,y;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const rt=["Primary","SelectedDates","Disabled","KeyboardTest"];export{r as Disabled,n as KeyboardTest,e as Primary,o as SelectedDates,rt as __namedExportsOrder,ot as default};
