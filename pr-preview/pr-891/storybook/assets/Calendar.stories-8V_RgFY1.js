import{m as p,$ as A,a as H,r as I,j,b as K,c as M}from"./iframe-DSnn27g_.js";import{C as m}from"./Calendar-y7J9uaSU.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-BNWdQEni.js";import"./Button-o7f1f1B_.js";import"./utils-DMRVVt0W.js";import"./clsx-B-dksMZM.js";import"./Hidden-D3uRTTac.js";import"./useFocusRing-B0kGOk6b.js";import"./index-DZBSjlS6.js";import"./index-BjdDVgTd.js";import"./useLabels-Ce0RUtwe.js";import"./useButton-C4obrwMi.js";import"./RSPContexts-C9onCh2x.js";import"./Text-GLsatxCV.js";import"./useDateFormatter-Dd3O3TKP.js";import"./useControlledState-uxvYb-ts.js";import"./useLocalizedStringFormatter-mbK1evP8.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-Bk0tXX1U.js";import"./useEvent-C0v-h-xd.js";import"./getScrollParent-5ZVZ4IwV.js";import"./scrollIntoView-Dw_LmK8o.js";import"./useDescription-Bth95dVM.js";import"./VisuallyHidden-D--nviQF.js";import"./clsx-Ciqy0D92.js";import"./Button-DM8Q6ENn.js";import"./Button.module-CcWMkJAG.js";import"./createLucideIcon-Ctc5foUX.js";import"./chevron-right-Csmrzme1.js";import"./Heading-BaqoISbv.js";import"./FieldError-DR6MOAC8.js";import"./Text-RvcCloK4.js";const{expect:U,userEvent:a,within:W}=__STORYBOOK_MODULE_TEST__,fe={component:m,render:e=>{const[t,r]=I.useState(null);return j.jsx(m,{value:t,onChange:r,...e})},title:"Components/Calendar",tags:["autodocs"]},o={},s={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},play:async({canvas:e,step:t})=>{await t("it should be possible to select tomorrow with the keyboard",async()=>{await a.tab(),await a.tab(),await a.tab(),await a.keyboard("[ArrowRight]"),await a.keyboard("[Space]"),await U(e.getByRole("gridcell",{name:K(M()).add({days:1}).day.toString()})).toHaveAttribute("aria-selected","true")})}},n={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{minValue:p},play:async({canvas:e,step:t})=>{await t('it should show a "not-allowed" cursor when hovering disabled dates',async()=>{const r=W(e.getByRole("gridcell",{name:`${p.day-1}`})).getByRole("button");await a.hover(r),await U(r).toHaveStyle({cursor:"not-allowed"})})}},i={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},c={args:{isReadOnly:!0,value:new A(1995,5,29)}},d={args:{isInvalid:!0,errorMessage:"Något gick fel"}},l={args:{isDateUnavailable:e=>H(e,"sv-SE")}};var u,y,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var g,w,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(w=s.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var h,S,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
        name: \`\${mockedNow.day - 1}\`
      })).getByRole('button');
      await userEvent.hover(yesterdayButton);
      await expect(yesterdayButton).toHaveStyle({
        cursor: 'not-allowed'
      });
    });
  }
}`,...(f=(S=n.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var k,x,R;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(R=(x=i.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};var $,E,D;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    value: new CalendarDate(1995, 5, 29)
  }
}`,...(D=(E=c.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var B,O,_;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Något gick fel'
  }
}`,...(_=(O=d.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var C,T,N;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    isDateUnavailable: date => isWeekend(date, 'sv-SE')
  }
}`,...(N=(T=l.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};const ke=["Primary","KeyboardTest","DS1141","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{n as DS1141,i as Disabled,d as Invalid,s as KeyboardTest,o as Primary,c as ReadOnly,l as UnavailableWeekends,ke as __namedExportsOrder,fe as default};
