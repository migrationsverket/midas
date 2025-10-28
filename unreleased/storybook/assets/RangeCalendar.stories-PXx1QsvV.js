import{m as e}from"./iframe-Dmk3epTB.js";import{R as A}from"./RangeCalendar-BrX3pqrb.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-c6WSm0xA.js";import"./Button-Ccd3J3vv.js";import"./utils-SlguuR_I.js";import"./clsx-B-dksMZM.js";import"./Hidden-0u0b-4t6.js";import"./useFocusRing-CGWwc_XC.js";import"./index-0Qm6xNmj.js";import"./index-QdYcievW.js";import"./useLabels-D8_5AASA.js";import"./useButton-CixU9N8b.js";import"./RSPContexts-C-SJq0sr.js";import"./Text-Bc8_beBE.js";import"./useDateFormatter-D7i3u5Wd.js";import"./useControlledState-CMGut-Nq.js";import"./useLocalizedStringFormatter-3y4YPuix.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-BvH0oAOC.js";import"./useEvent-CkgWFqxC.js";import"./getScrollParent-8uP_EfLK.js";import"./scrollIntoView-RkMgiIJ3.js";import"./useDescription-pLcWAWhY.js";import"./VisuallyHidden-Bsnmy3Y_.js";import"./clsx-Ciqy0D92.js";import"./Button-DWjoHsqk.js";import"./Button.module-CcWMkJAG.js";import"./createLucideIcon-D5JKFdiS.js";import"./chevron-right-BR4ZOjiP.js";import"./Heading-G_nT_8ze.js";import"./Text-CDZ_yN1O.js";const{expect:d,userEvent:t}=__STORYBOOK_MODULE_TEST__,ot={component:A,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},a={},o={parameters:{a11y:{test:"todo"}},args:{defaultValue:{start:e.subtract({days:2}),end:e.add({days:2})}}},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},s={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0},a11y:{test:"todo"}},play:async({canvas:n,step:S})=>{await S("it should be possible to select today and two days ahead with the keyboard",async()=>{const h=e.day.toString(),R=e.add({days:1}).day.toString(),k=e.add({days:2}).day.toString();await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Space]"),await t.keyboard("[ArrowRight]"),await d(n.getByRole("gridcell",{name:h,selected:!0})).toHaveAttribute("aria-selected","true"),await d(n.getByRole("gridcell",{name:R,selected:!0})).toHaveAttribute("aria-selected","true"),await d(n.getByRole("gridcell",{name:k,selected:!0})).toHaveAttribute("aria-selected","true")})}};var i,c,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,p,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
