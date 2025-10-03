import{m as l,$ as O,r as T,j as N,a as U,b as A}from"./iframe-DjblUb4f.js";import{C as p}from"./Calendar-BuRqN0-h.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-BytUWFvy.js";import"./Button-B9zochEP.js";import"./utils-CCs0666b.js";import"./clsx-B-dksMZM.js";import"./Hidden-BHPryOw3.js";import"./useFocusRing-kWeS4kYG.js";import"./index-BRUBfIwz.js";import"./index-CX_tGf-y.js";import"./useLabels-BA1x20eC.js";import"./useButton-Gy64vn3J.js";import"./RSPContexts-CTMHC7KX.js";import"./Text-CQ-HTbSR.js";import"./useDateFormatter-BU6aYKPB.js";import"./useControlledState-C6VV_tYe.js";import"./useLocalizedStringFormatter-Bgxg-DI8.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-Cz2fZmFn.js";import"./useEvent-D9BEd9jQ.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./useDescription-DugSly09.js";import"./VisuallyHidden-CU6EJPzu.js";import"./clsx-Ciqy0D92.js";import"./Button-jqem5o_e.js";import"./Button.module-DRhvPh0f.js";import"./createLucideIcon-Ds5JUCEV.js";import"./chevron-right-nJLHu7hJ.js";import"./Heading-B-Gg7u13.js";import"./ValidationText-CeuabXWS.js";import"./useLocalizedStringFormatter-CYt6D2wb.js";const{expect:C,userEvent:a,within:H}=__STORYBOOK_MODULE_TEST__,ge={component:p,render:e=>{const[t,r]=T.useState(null);return N.jsx(p,{value:t,onChange:r,...e})},title:"Components/Calendar",tags:["autodocs"]},o={},s={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},play:async({canvas:e,step:t})=>{await t("it should be possible to select tomorrow with the keyboard",async()=>{await a.tab(),await a.tab(),await a.tab(),await a.keyboard("[ArrowRight]"),await a.keyboard("[Space]"),await C(e.getByRole("gridcell",{name:U(A()).add({days:1}).day.toString()})).toHaveAttribute("aria-selected","true")})}},n={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{minValue:l},play:async({canvas:e,step:t})=>{await t('it should show a "not-allowed" cursor when hovering disabled dates',async()=>{const r=H(e.getByRole("gridcell",{name:`${l.day-1}`})).getByRole("button");await a.hover(r),await C(r).toHaveStyle({cursor:"not-allowed"})})}},i={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},c={args:{isInvalid:!0,errorMessage:"Något gick fel"}},d={args:{isDateUnavailable:e=>O(e,"sv-SE")}};var m,u,y;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(y=(u=o.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var b,g,w;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(_=(R=d.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};const we=["Primary","KeyboardTest","DS1141","Disabled","Invalid","UnavailableWeekends"];export{n as DS1141,i as Disabled,c as Invalid,s as KeyboardTest,o as Primary,d as UnavailableWeekends,we as __namedExportsOrder,ge as default};
