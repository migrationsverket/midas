import{m as l,$ as O,r as T,j as N,a as U,b as A}from"./iframe-CEa4rr9O.js";import{C as p}from"./Calendar-ENd1aoEZ.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-C0G41_Es.js";import"./Button-HyWfp8VZ.js";import"./utils-SuK80ERc.js";import"./clsx-B-dksMZM.js";import"./Hidden-wsurZ38g.js";import"./useFocusRing-DFgolbyR.js";import"./index-BndcDWl-.js";import"./index-C19RPnE6.js";import"./useLabels-DKRk9inx.js";import"./useButton-BiGh29rd.js";import"./RSPContexts-8Qc8SyXb.js";import"./Text-Mkv10tpK.js";import"./useDateFormatter-iESnSJPa.js";import"./useControlledState-CMrwFuIZ.js";import"./useLocalizedStringFormatter-OtwdKdNe.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-Cp_BwiiY.js";import"./useEvent-DLnspzpz.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./useDescription-CPtYZSrG.js";import"./VisuallyHidden-DJBLxG74.js";import"./Button-BQiqboZP.js";import"./Button.module-CF2bVDCq.js";import"./createLucideIcon-Crcp-qau.js";import"./Heading-BF9EFPtS.js";import"./FieldError-DoasGPDk.js";import"./Text-9lQkmYVM.js";const{expect:C,userEvent:a,within:H}=__STORYBOOK_MODULE_TEST__,ye={component:p,render:e=>{const[t,r]=T.useState(null);return N.jsx(p,{value:t,onChange:r,...e})},title:"Components/Calendar",tags:["autodocs"]},o={},s={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},play:async({canvas:e,step:t})=>{await t("it should be possible to select tomorrow with the keyboard",async()=>{await a.tab(),await a.tab(),await a.tab(),await a.keyboard("[ArrowRight]"),await a.keyboard("[Space]"),await C(e.getByRole("gridcell",{name:U(A()).add({days:1}).day.toString()})).toHaveAttribute("aria-selected","true")})}},n={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{minValue:l},play:async({canvas:e,step:t})=>{await t('it should show a "not-allowed" cursor when hovering disabled dates',async()=>{const r=H(e.getByRole("gridcell",{name:`${l.day-1}`})).getByRole("button");await a.hover(r),await C(r).toHaveStyle({cursor:"not-allowed"})})}},i={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},c={args:{isInvalid:!0,errorMessage:"Något gick fel"}},d={args:{isDateUnavailable:e=>O(e,"sv-SE")}};var m,u,y;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(y=(u=o.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var b,g,w;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(_=(R=d.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};const be=["Primary","KeyboardTest","DS1141","Disabled","Invalid","UnavailableWeekends"];export{n as DS1141,i as Disabled,c as Invalid,s as KeyboardTest,o as Primary,d as UnavailableWeekends,be as __namedExportsOrder,ye as default};
