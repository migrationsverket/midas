import{m as l,$ as O,r as T,j as N,a as U,b as A}from"./iframe-BdgLdgYE.js";import{C as p}from"./Calendar-MjWHD2tY.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-Be-GTkst.js";import"./Button-WyhW3_uk.js";import"./utils-BvcxwFyW.js";import"./clsx-B-dksMZM.js";import"./Hidden-CBixdTTx.js";import"./useFocusRing-CTNShohj.js";import"./index-bdnO63b_.js";import"./index-BK0Ncq4b.js";import"./useLabels-CvTKfdWu.js";import"./useButton-D5My0K8O.js";import"./RSPContexts-Dc_gSHep.js";import"./Text-l-A5Z5Hz.js";import"./useDateFormatter-O8EBhanR.js";import"./useControlledState-CnQUdn_q.js";import"./useLocalizedStringFormatter-ILYc6jSb.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-gXZaNdRA.js";import"./useEvent-CC6p_nb1.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./useDescription-BLhSGx0Q.js";import"./VisuallyHidden-CbJqQ_pY.js";import"./Button-DoG7b90P.js";import"./Button.module-DRhvPh0f.js";import"./createLucideIcon-C7t1_r_C.js";import"./chevron-right-BWQfHxRh.js";import"./Heading-Dpx6Lkvg.js";import"./FieldError-CU13nm55.js";import"./Text-Cn-ae3_x.js";const{expect:C,userEvent:a,within:H}=__STORYBOOK_MODULE_TEST__,be={component:p,render:e=>{const[t,r]=T.useState(null);return N.jsx(p,{value:t,onChange:r,...e})},title:"Components/Calendar",tags:["autodocs"]},o={},s={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},play:async({canvas:e,step:t})=>{await t("it should be possible to select tomorrow with the keyboard",async()=>{await a.tab(),await a.tab(),await a.tab(),await a.keyboard("[ArrowRight]"),await a.keyboard("[Space]"),await C(e.getByRole("gridcell",{name:U(A()).add({days:1}).day.toString()})).toHaveAttribute("aria-selected","true")})}},n={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{minValue:l},play:async({canvas:e,step:t})=>{await t('it should show a "not-allowed" cursor when hovering disabled dates',async()=>{const r=H(e.getByRole("gridcell",{name:`${l.day-1}`})).getByRole("button");await a.hover(r),await C(r).toHaveStyle({cursor:"not-allowed"})})}},i={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},c={args:{isInvalid:!0,errorMessage:"Något gick fel"}},d={args:{isDateUnavailable:e=>O(e,"sv-SE")}};var m,u,y;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(y=(u=o.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var b,g,w;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
    await step('it should be possible to select tomorrow with the keyboard', async () => {
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.keyboard('[ArrowRight]');
      await userEvent.keyboard('[Space]');
      await expect(canvas.getByRole('gridcell', {
        name: today(getLocalTimeZone()).add({
          days: 1
        }).day.toString()
      })).toHaveAttribute('aria-selected', 'true');
    });
  }
}`,...(w=(g=s.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var v,h,S;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
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
        name: \`\${mockedNow.day - 1}\`
      })).getByRole('button');
      await userEvent.hover(yesterdayButton);
      await expect(yesterdayButton).toHaveStyle({
        cursor: 'not-allowed'
      });
    });
  }
}`,...(S=(h=n.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var f,k,x;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(x=(k=i.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var E,D,$;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Något gick fel'
  }
}`,...($=(D=c.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};var B,R,_;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    isDateUnavailable: date => isWeekend(date, 'sv-SE')
  }
}`,...(_=(R=d.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};const ge=["Primary","KeyboardTest","DS1141","Disabled","Invalid","UnavailableWeekends"];export{n as DS1141,i as Disabled,c as Invalid,s as KeyboardTest,o as Primary,d as UnavailableWeekends,ge as __namedExportsOrder,be as default};
