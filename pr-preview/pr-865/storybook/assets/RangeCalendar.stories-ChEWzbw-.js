import{m as e}from"./iframe-BCOgvRjU.js";import{R as A}from"./RangeCalendar-D-AzA4Y_.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-CiVXnhmJ.js";import"./Button-ZLCb5lb0.js";import"./utils-Bx4-w4ac.js";import"./clsx-B-dksMZM.js";import"./Hidden-Bec9QF5i.js";import"./useFocusRing-O05N72v3.js";import"./index-C2nrVgHw.js";import"./index-DiBhqaqo.js";import"./useLabels-rD-nwCsE.js";import"./useButton-SfO-VunH.js";import"./RSPContexts-CnJVYjxW.js";import"./Text-Ra6lvBBM.js";import"./useDateFormatter-py4v70Gl.js";import"./useControlledState-D7su3UME.js";import"./useLocalizedStringFormatter-FwomM39N.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-BM1A-h2N.js";import"./useEvent-BVvBhiie.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./useDescription-DK8QI8IN.js";import"./VisuallyHidden-Bml_392b.js";import"./clsx-Ciqy0D92.js";import"./Button-_zUC8qXE.js";import"./Button.module-CcWMkJAG.js";import"./createLucideIcon-xbRug_nx.js";import"./chevron-right-CFkP_aur.js";import"./Heading-BhHVO1sy.js";import"./Text-CiLdoy1G.js";const{expect:d,userEvent:t}=__STORYBOOK_MODULE_TEST__,rt={component:A,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},a={},r={args:{defaultValue:{start:e.subtract({days:2}),end:e.add({days:2})}}},o={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},s={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},play:async({canvas:n,step:v})=>{await v("it should be possible to select today and two days ahead with the keyboard",async()=>{const h=e.day.toString(),R=e.add({days:1}).day.toString(),k=e.add({days:2}).day.toString();await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Space]"),await t.keyboard("[ArrowRight]"),await d(n.getByRole("gridcell",{name:h})).toHaveAttribute("aria-selected","true"),await d(n.getByRole("gridcell",{name:R})).toHaveAttribute("aria-selected","true"),await d(n.getByRole("gridcell",{name:k})).toHaveAttribute("aria-selected","true")})}};var i,c,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var l,p,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
