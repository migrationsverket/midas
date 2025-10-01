import{m as e}from"./iframe-DCSq0-j9.js";import{R as A}from"./RangeCalendar-15h-QqnT.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-Mkz7wuXc.js";import"./Button-C-dIxopc.js";import"./utils-DrJ5-z8f.js";import"./clsx-B-dksMZM.js";import"./Hidden-pEOaXwqw.js";import"./useFocusRing-DMky3gKC.js";import"./index-B4xZwINQ.js";import"./index-Du-7c5Zh.js";import"./useLabels-XOqJWlBh.js";import"./useButton-DTm3ZcYp.js";import"./RSPContexts-Cfwtg70L.js";import"./Text-D5DMfOaX.js";import"./useDateFormatter-DgFCyEl6.js";import"./useControlledState-CnPbz5Aq.js";import"./useLocalizedStringFormatter-CynvazlR.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-DS4hGOXh.js";import"./useEvent-CQs6MVrK.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./useDescription-LBhSOD8-.js";import"./VisuallyHidden-CXLCs3vd.js";import"./Button-DZo5l6kp.js";import"./Button.module-DRhvPh0f.js";import"./createLucideIcon-DKEO3zXH.js";import"./chevron-right-C5eLt5W_.js";import"./Heading-CWo00jhv.js";import"./Text-0W6HO9fW.js";const{expect:d,userEvent:t}=__STORYBOOK_MODULE_TEST__,at={component:A,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},a={},r={args:{defaultValue:{start:e.subtract({days:2}),end:e.add({days:2})}}},o={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},s={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},play:async({canvas:n,step:v})=>{await v("it should be possible to select today and two days ahead with the keyboard",async()=>{const h=e.day.toString(),R=e.add({days:1}).day.toString(),k=e.add({days:2}).day.toString();await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Space]"),await t.keyboard("[ArrowRight]"),await d(n.getByRole("gridcell",{name:h})).toHaveAttribute("aria-selected","true"),await d(n.getByRole("gridcell",{name:R})).toHaveAttribute("aria-selected","true"),await d(n.getByRole("gridcell",{name:k})).toHaveAttribute("aria-selected","true")})}};var i,c,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var l,p,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
