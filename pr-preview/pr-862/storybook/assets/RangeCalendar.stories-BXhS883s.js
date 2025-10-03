import{m as e}from"./iframe-DjblUb4f.js";import{R as A}from"./RangeCalendar-BRdPbBmp.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-BytUWFvy.js";import"./Button-B9zochEP.js";import"./utils-CCs0666b.js";import"./clsx-B-dksMZM.js";import"./Hidden-BHPryOw3.js";import"./useFocusRing-kWeS4kYG.js";import"./index-BRUBfIwz.js";import"./index-CX_tGf-y.js";import"./useLabels-BA1x20eC.js";import"./useButton-Gy64vn3J.js";import"./RSPContexts-CTMHC7KX.js";import"./Text-CQ-HTbSR.js";import"./useDateFormatter-BU6aYKPB.js";import"./useControlledState-C6VV_tYe.js";import"./useLocalizedStringFormatter-Bgxg-DI8.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-Cz2fZmFn.js";import"./useEvent-D9BEd9jQ.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./useDescription-DugSly09.js";import"./VisuallyHidden-CU6EJPzu.js";import"./clsx-Ciqy0D92.js";import"./Button-jqem5o_e.js";import"./Button.module-DRhvPh0f.js";import"./createLucideIcon-Ds5JUCEV.js";import"./chevron-right-nJLHu7hJ.js";import"./Heading-B-Gg7u13.js";import"./ValidationText-CeuabXWS.js";import"./useLocalizedStringFormatter-CYt6D2wb.js";const{expect:i,userEvent:t}=__STORYBOOK_MODULE_TEST__,ot={component:A,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},a={},r={args:{defaultValue:{start:e.subtract({days:2}),end:e.add({days:2})}}},o={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},s={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},play:async({canvas:n,step:v})=>{await v("it should be possible to select today and two days ahead with the keyboard",async()=>{const h=e.day.toString(),R=e.add({days:1}).day.toString(),k=e.add({days:2}).day.toString();await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Space]"),await t.keyboard("[ArrowRight]"),await i(n.getByRole("gridcell",{name:h})).toHaveAttribute("aria-selected","true"),await i(n.getByRole("gridcell",{name:R})).toHaveAttribute("aria-selected","true"),await i(n.getByRole("gridcell",{name:k})).toHaveAttribute("aria-selected","true")})}};var d,c,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,l,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
