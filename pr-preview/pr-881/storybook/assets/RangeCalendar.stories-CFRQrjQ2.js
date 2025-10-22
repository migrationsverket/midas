import{m as a}from"./iframe-D7qSfnUE.js";import{R as A}from"./RangeCalendar-BX7qY5yj.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-C_6lKVU2.js";import"./Button-D26x-hX0.js";import"./utils-CeNm5Tih.js";import"./clsx-B-dksMZM.js";import"./Hidden-Jowmf4f0.js";import"./useFocusRing-qSh-9R1P.js";import"./index-BMQPrinf.js";import"./index-DTrZGXsA.js";import"./useLabels-BKQNgdG2.js";import"./useButton-DVaHBh8l.js";import"./RSPContexts-Bv8uCkvn.js";import"./Text-BMCR77k8.js";import"./useDateFormatter-DxrE9BkA.js";import"./useControlledState-Bz1sBQKS.js";import"./useLocalizedStringFormatter-bG5WwUlH.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-DPwsXt9j.js";import"./useEvent-CbWTIfAc.js";import"./getScrollParent-jITrOnkM.js";import"./scrollIntoView-Bs2AzVDZ.js";import"./useDescription-CwhIqzOE.js";import"./VisuallyHidden-DRKj4sPQ.js";import"./clsx-Ciqy0D92.js";import"./Button-CjV73bUl.js";import"./Button.module-CcWMkJAG.js";import"./createLucideIcon-z_R_CK7D.js";import"./chevron-right-D-hL0ieo.js";import"./Heading-D3zI5QKF.js";import"./Text-BFsJlwRH.js";const{expect:d,userEvent:t}=__STORYBOOK_MODULE_TEST__,ot={component:A,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},e={},o={parameters:{a11y:{test:"todo"}},args:{defaultValue:{start:a.subtract({days:2}),end:a.add({days:2})}}},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},n={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0},a11y:{test:"todo"}},play:async({canvas:s,step:S})=>{await S("it should be possible to select today and two days ahead with the keyboard",async()=>{const h=a.day.toString(),R=a.add({days:1}).day.toString(),k=a.add({days:2}).day.toString();await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Space]"),await t.keyboard("[ArrowRight]"),await d(s.getByRole("gridcell",{name:h})).toHaveAttribute("aria-selected","true"),await d(s.getByRole("gridcell",{name:R})).toHaveAttribute("aria-selected","true"),await d(s.getByRole("gridcell",{name:k})).toHaveAttribute("aria-selected","true")})}};var i,c,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var l,p,y;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
