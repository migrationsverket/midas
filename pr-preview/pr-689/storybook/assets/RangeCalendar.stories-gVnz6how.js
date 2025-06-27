import{R as h}from"./RangeCalendar-v8EOGW3X.js";import{u as t,e as n}from"./index-CqmFxPum.js";import{m as s}from"./storybook-DLHntVpb.js";import"./jsx-runtime-BYYWji4R.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./CalendarHeader-Dx3V4qUh.js";import"./Button-Dw7lljiq.js";import"./utils-CT8CL8Qy.js";import"./SSRProvider-BhYbDCf7.js";import"./clsx-B-dksMZM.js";import"./Hidden-BC9qER92.js";import"./useFocusRing-CiRxO26c.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./context-zNjZoWML.js";import"./useButton-DFlERivp.js";import"./RSPContexts-HQcWPJyv.js";import"./Text-BDGh9UD8.js";import"./useDateFormatter-DzWwJ2YB.js";import"./CalendarDate-Lfx2W0H2.js";import"./useControlledState-H1tiOFpU.js";import"./useLocalizedStringFormatter-DiUIqqhg.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-BzF61qSB.js";import"./useEvent-YbNcfHeo.js";import"./getScrollParent-D3zukwiL.js";import"./scrollIntoView-D-J2YGNX.js";import"./VisuallyHidden-Bwo2Sxwr.js";import"./Button-BccoZHBZ.js";import"./Button.module-AG3JZ-l4.js";import"./createLucideIcon-DQK9Z80p.js";import"./Heading-BqhVQUP5.js";import"./Text-B94wSZIf.js";const et={component:h,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},e={},a={args:{isDisabled:!0},parameters:{a11y:{element:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},play:async({canvas:r,step:w})=>{await w("it should be possible to select today and two days ahead with the keyboard",async()=>{const g=s.day.toString(),v=s.add({days:1}).day.toString(),f=s.add({days:2}).day.toString();await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Space]"),await t.keyboard("[ArrowRight]"),await n(r.getByRole("gridcell",{name:g})).toHaveAttribute("aria-selected","true"),await n(r.getByRole("gridcell",{name:v})).toHaveAttribute("aria-selected","true"),await n(r.getByRole("gridcell",{name:f})).toHaveAttribute("aria-selected","true")})}};var i,d,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,p,l;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var y,u,b;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(b=(u=o.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const at=["Primary","Disabled","KeyboardTest"];export{a as Disabled,o as KeyboardTest,e as Primary,at as __namedExportsOrder,et as default};
