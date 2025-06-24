import{j as A}from"./jsx-runtime-BYYWji4R.js";import{C as m}from"./Calendar-DNsemzgg.js";import{r as H}from"./index-ClcD9ViR.js";import{u as a,e as N,w as I}from"./index-CqmFxPum.js";import{$ as U,a as j,b as T}from"./CalendarDate-Lfx2W0H2.js";import{m as p}from"./storybook-DLHntVpb.js";import"./CalendarHeader-CPv4mfwu.js";import"./Button-BD6hc4wl.js";import"./utils-oc6myKvD.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-CQGqtZ9B.js";import"./Label-CpkHsAPL.js";import"./Hidden-BC9qER92.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Blgy_cRF.js";import"./context-BSqJJvai.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useButton-Cqc6u4_f.js";import"./usePress-BfxC_TyQ.js";import"./useFocusRing-DUrskli4.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useFocusable-tJD4A6lu.js";import"./RSPContexts-HQcWPJyv.js";import"./Text-C8tPE3tt.js";import"./useDateFormatter-PNqY2u3u.js";import"./useControlledState-H1tiOFpU.js";import"./useLocalizedStringFormatter-DqnULi-B.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-BzF61qSB.js";import"./useEvent-DVigVKKB.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./useDescription-Bdyn64K0.js";import"./VisuallyHidden-uwYO98VR.js";import"./Button-D0wYUA_w.js";import"./Button.module-AG3JZ-l4.js";import"./createLucideIcon-DQK9Z80p.js";import"./Heading-DDSg48dG.js";import"./FieldError-C31dJ6Xr.js";import"./Text-Dpx6Gex-.js";const De={component:m,render:e=>{const[t,r]=H.useState(null);return A.jsx(m,{value:t,onChange:r,...e})},title:"Components/Calendar",tags:["autodocs"]},o={},s={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},play:async({canvas:e,step:t})=>{await t("it should be possible to select tomorrow with the keyboard",async()=>{await a.tab(),await a.tab(),await a.tab(),await a.keyboard("[ArrowRight]"),await a.keyboard("[Space]"),await N(e.getByRole("gridcell",{name:j(T()).add({days:1}).day.toString()})).toHaveAttribute("aria-selected","true")})}},n={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{minValue:p},play:async({canvas:e,step:t})=>{await t('it should show a "not-allowed" cursor when hovering disabled dates',async()=>{const r=I(e.getByRole("gridcell",{name:`${p.day-1}`})).getByRole("button");await a.hover(r),await N(r).toHaveStyle({cursor:"not-allowed"})})}},i={args:{isDisabled:!0},parameters:{a11y:{element:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},c={args:{isInvalid:!0,errorMessage:"Något gick fel"}},d={args:{isDateUnavailable:e=>U(e,"sv-SE")}};var l,u,y;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(y=(u=o.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var b,g,w;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(w=(g=s.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var v,h,f;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var S,k,x;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(x=(k=i.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var E,$,D;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Något gick fel'
  }
}`,...(D=($=c.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var B,R,C;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    isDateUnavailable: date => isWeekend(date, 'sv-SE')
  }
}`,...(C=(R=d.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};const Be=["Primary","KeyboardTest","DS1141","Disabled","Invalid","UnavailableWeekends"];export{n as DS1141,i as Disabled,c as Invalid,s as KeyboardTest,o as Primary,d as UnavailableWeekends,Be as __namedExportsOrder,De as default};
