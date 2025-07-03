import{R as A}from"./RangeCalendar-BnkWlGHE.js";import{u as e,e as i}from"./index-CqmFxPum.js";import{m as t}from"./storybook-DLHntVpb.js";import"./jsx-runtime-BYYWji4R.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./CalendarHeader-S_xnGWsm.js";import"./Button-Dw7lljiq.js";import"./utils-CT8CL8Qy.js";import"./SSRProvider-BhYbDCf7.js";import"./clsx-B-dksMZM.js";import"./Hidden-BC9qER92.js";import"./useFocusRing-CiRxO26c.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./context-zNjZoWML.js";import"./useButton-DFlERivp.js";import"./RSPContexts-HQcWPJyv.js";import"./Text-BDGh9UD8.js";import"./useDateFormatter-DzWwJ2YB.js";import"./CalendarDate-Lfx2W0H2.js";import"./useControlledState-H1tiOFpU.js";import"./useLocalizedStringFormatter-DiUIqqhg.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-BzF61qSB.js";import"./useEvent-YbNcfHeo.js";import"./getScrollParent-D3zukwiL.js";import"./scrollIntoView-D-J2YGNX.js";import"./VisuallyHidden-Bwo2Sxwr.js";import"./Button-Dms9LACj.js";import"./Button.module-DKVuWS4g.js";import"./createLucideIcon-uZw3gxGR.js";import"./Heading-BqhVQUP5.js";import"./Text-B94wSZIf.js";const se={component:A,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},a={},r={args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},o={args:{isDisabled:!0},parameters:{a11y:{element:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},s={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},play:async({canvas:n,step:S})=>{await S("it should be possible to select today and two days ahead with the keyboard",async()=>{const h=t.day.toString(),k=t.add({days:1}).day.toString(),R=t.add({days:2}).day.toString();await e.tab(),await e.tab(),await e.tab(),await e.keyboard("[Space]"),await e.keyboard("[ArrowRight]"),await i(n.getByRole("gridcell",{name:h})).toHaveAttribute("aria-selected","true"),await i(n.getByRole("gridcell",{name:k})).toHaveAttribute("aria-selected","true"),await i(n.getByRole("gridcell",{name:R})).toHaveAttribute("aria-selected","true")})}};var d,c,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var l,p,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
      element: 'body',
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
}`,...(g=(b=o.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var w,f,v;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const ne=["Primary","SelectedDates","Disabled","KeyboardTest"];export{o as Disabled,s as KeyboardTest,a as Primary,r as SelectedDates,ne as __namedExportsOrder,se as default};
