import{m as l,$ as C,r as L,j as O,a as T,b as N}from"./iframe-Cd4_hk9G.js";import{C as p}from"./Calendar-CDXzxxvD.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-BEyQ6-ij.js";import"./Button-Bl7Xq1BF.js";import"./utils-C7DGwVmc.js";import"./clsx-B-dksMZM.js";import"./Hidden-BEFT2uWi.js";import"./useFocusRing-Dl4iNBzn.js";import"./index-quaEJJfq.js";import"./index-CcWRuhy4.js";import"./useLabels-DZkAX5yj.js";import"./useButton-BWByVh91.js";import"./RSPContexts-C6Iaij7a.js";import"./Text-DyksFLRp.js";import"./useDateFormatter-Ce-fCeqv.js";import"./useControlledState-C2RBJ-AA.js";import"./useLocalizedStringFormatter-t69ceniC.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-CpsZXpgu.js";import"./useEvent-ifcmPUoH.js";import"./getScrollParent-Blv4Kfzp.js";import"./scrollIntoView-BbGVdHYb.js";import"./useDescription-DbtWxpQv.js";import"./VisuallyHidden-CywcxyPR.js";import"./clsx-Ciqy0D92.js";import"./Button-F-Xc1j6-.js";import"./Button.module-CcWMkJAG.js";import"./createLucideIcon-CNpe1p1X.js";import"./chevron-right-DDX5cyOb.js";import"./Heading-DQX1zGsY.js";import"./FieldError-pYaIEwfy.js";import"./Text-6z_a9WgI.js";const{expect:A,userEvent:a,within:U}=__STORYBOOK_MODULE_TEST__,ge={component:p,render:e=>{const[t,r]=L.useState(null);return O.jsx(p,{value:t,onChange:r,...e})},title:"Components/Calendar",tags:["autodocs"]},o={},s={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},play:async({canvas:e,step:t})=>{await t("it should be possible to select a date with the keyboard",async()=>{await a.tab(),await a.tab(),await a.tab(),await a.keyboard("[ArrowLeft]"),await a.keyboard("[ArrowLeft]"),await a.keyboard("[Space]"),await A(e.getByRole("gridcell",{name:T(N()).subtract({days:2}).day.toString()})).toHaveAttribute("aria-selected","true")})}},n={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{minValue:l},play:async({canvas:e,step:t})=>{await t('it should show a "not-allowed" cursor when hovering disabled dates',async()=>{const r=U(e.getByRole("gridcell",{name:`${l.day-2}`})).getByRole("button");await a.hover(r),await A(r).toHaveStyle({cursor:"not-allowed"})})}},i={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},c={args:{isInvalid:!0,errorMessage:"Något gick fel"}},d={args:{isDateUnavailable:e=>C(e,"sv-SE")}};var m,u,b;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(b=(u=o.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var y,g,w;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('it should be possible to select a date with the keyboard', async () => {
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.keyboard('[ArrowLeft]');
      await userEvent.keyboard('[ArrowLeft]');
      await userEvent.keyboard('[Space]');
      await expect(canvas.getByRole('gridcell', {
        name: today(getLocalTimeZone()).subtract({
          days: 2
        }).day.toString()
      })).toHaveAttribute('aria-selected', 'true');
    });
  }
}`,...(w=(g=s.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var v,h,f;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    minValue: mockedNow
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('it should show a "not-allowed" cursor when hovering disabled dates', async () => {
      const yesterdayButton = within(canvas.getByRole('gridcell', {
        name: \`\${mockedNow.day - 2}\`
      })).getByRole('button');
      await userEvent.hover(yesterdayButton);
      await expect(yesterdayButton).toHaveStyle({
        cursor: 'not-allowed'
      });
    });
  }
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var S,k,E;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(E=(k=i.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var x,D,$;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Något gick fel'
  }
}`,...($=(D=c.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};var B,R,_;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    isDateUnavailable: date => isWeekend(date, 'sv-SE')
  }
}`,...(_=(R=d.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};const we=["Primary","KeyboardTest","DS1141","Disabled","Invalid","UnavailableWeekends"];export{n as DS1141,i as Disabled,c as Invalid,s as KeyboardTest,o as Primary,d as UnavailableWeekends,we as __namedExportsOrder,ge as default};
