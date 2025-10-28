import{m as l,$ as C,r as L,j as O,a as T,b as N}from"./iframe-Dmk3epTB.js";import{C as p}from"./Calendar-BjN1Oauy.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-c6WSm0xA.js";import"./Button-Ccd3J3vv.js";import"./utils-SlguuR_I.js";import"./clsx-B-dksMZM.js";import"./Hidden-0u0b-4t6.js";import"./useFocusRing-CGWwc_XC.js";import"./index-0Qm6xNmj.js";import"./index-QdYcievW.js";import"./useLabels-D8_5AASA.js";import"./useButton-CixU9N8b.js";import"./RSPContexts-C-SJq0sr.js";import"./Text-Bc8_beBE.js";import"./useDateFormatter-D7i3u5Wd.js";import"./useControlledState-CMGut-Nq.js";import"./useLocalizedStringFormatter-3y4YPuix.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-BvH0oAOC.js";import"./useEvent-CkgWFqxC.js";import"./getScrollParent-8uP_EfLK.js";import"./scrollIntoView-RkMgiIJ3.js";import"./useDescription-pLcWAWhY.js";import"./VisuallyHidden-Bsnmy3Y_.js";import"./clsx-Ciqy0D92.js";import"./Button-DWjoHsqk.js";import"./Button.module-CcWMkJAG.js";import"./createLucideIcon-D5JKFdiS.js";import"./chevron-right-BR4ZOjiP.js";import"./Heading-G_nT_8ze.js";import"./FieldError-vMfe0mA8.js";import"./Text-CDZ_yN1O.js";const{expect:A,userEvent:a,within:U}=__STORYBOOK_MODULE_TEST__,ge={component:p,render:e=>{const[t,r]=L.useState(null);return O.jsx(p,{value:t,onChange:r,...e})},title:"Components/Calendar",tags:["autodocs"]},o={},s={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},play:async({canvas:e,step:t})=>{await t("it should be possible to select a date with the keyboard",async()=>{await a.tab(),await a.tab(),await a.tab(),await a.keyboard("[ArrowLeft]"),await a.keyboard("[ArrowLeft]"),await a.keyboard("[Space]"),await A(e.getByRole("gridcell",{name:T(N()).subtract({days:2}).day.toString()})).toHaveAttribute("aria-selected","true")})}},n={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{minValue:l},play:async({canvas:e,step:t})=>{await t('it should show a "not-allowed" cursor when hovering disabled dates',async()=>{const r=U(e.getByRole("gridcell",{name:`${l.day-2}`})).getByRole("button");await a.hover(r),await A(r).toHaveStyle({cursor:"not-allowed"})})}},i={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},c={args:{isInvalid:!0,errorMessage:"Något gick fel"}},d={args:{isDateUnavailable:e=>C(e,"sv-SE")}};var m,u,b;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(b=(u=o.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var y,g,w;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
