import{m as e}from"./iframe-BAHKs3rc.js";import{R as A}from"./RangeCalendar-DmiBm_sJ.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-D-rSEmg5.js";import"./Button-xpNBxSR8.js";import"./utils-BCVdxp57.js";import"./clsx-B-dksMZM.js";import"./Hidden-Jl7SwQHM.js";import"./useFocusRing-vlTd0gtz.js";import"./index-DKY9vjWv.js";import"./index-B0t6iz74.js";import"./useLabels-CluKMOyR.js";import"./useButton-D94dNfeS.js";import"./RSPContexts-BiYDMgRx.js";import"./Text-C0yZ48vO.js";import"./useDateFormatter-C82ct6nz.js";import"./useControlledState-Bk8G3l7-.js";import"./useLocalizedStringFormatter-DbKcsCUh.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-Dj98LVa3.js";import"./useEvent-9JLckBLi.js";import"./getScrollParent-DtzqA49l.js";import"./scrollIntoView-nQ8HUUNN.js";import"./useDescription-BMX2psgp.js";import"./VisuallyHidden-DbBRseT5.js";import"./clsx-Ciqy0D92.js";import"./Button-HMTy8HIK.js";import"./Button.module-CcWMkJAG.js";import"./createLucideIcon-DViMXftD.js";import"./chevron-right-BiqkhEy4.js";import"./Heading-CJ5oQhhH.js";import"./Text-wW0KGFrx.js";const{expect:d,userEvent:t}=__STORYBOOK_MODULE_TEST__,ot={component:A,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},a={},o={parameters:{a11y:{test:"todo"}},args:{defaultValue:{start:e.subtract({days:2}),end:e.add({days:2})}}},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},s={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0},a11y:{test:"todo"}},play:async({canvas:n,step:S})=>{await S("it should be possible to select today and two days ahead with the keyboard",async()=>{const h=e.day.toString(),R=e.add({days:1}).day.toString(),k=e.add({days:2}).day.toString();await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Space]"),await t.keyboard("[ArrowRight]"),await d(n.getByRole("gridcell",{name:h,selected:!0})).toHaveAttribute("aria-selected","true"),await d(n.getByRole("gridcell",{name:R,selected:!0})).toHaveAttribute("aria-selected","true"),await d(n.getByRole("gridcell",{name:k,selected:!0})).toHaveAttribute("aria-selected","true")})}};var i,c,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,p,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var y,b,g;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var w,f,v;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const rt=["Primary","SelectedDates","Disabled","KeyboardTest"];export{r as Disabled,s as KeyboardTest,a as Primary,o as SelectedDates,rt as __namedExportsOrder,ot as default};
