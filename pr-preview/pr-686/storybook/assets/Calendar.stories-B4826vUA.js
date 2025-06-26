import{j as A}from"./jsx-runtime-BYYWji4R.js";import{C as l}from"./Calendar-CqnuWxLA.js";import{r as H}from"./index-ClcD9ViR.js";import{u as a,e as N,w as I}from"./index-CqmFxPum.js";import{$ as U,a as j,b as T}from"./CalendarDate-Lfx2W0H2.js";import{m}from"./storybook-DLHntVpb.js";import"./CalendarHeader-CP4h-zNo.js";import"./Button-C9yg6fHw.js";import"./utils-BLyg3OOq.js";import"./clsx-B-dksMZM.js";import"./Hidden-BC9qER92.js";import"./useFocusRing-DVgdqMmF.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./context-d6PNTTSe.js";import"./useButton-DVh6qrnV.js";import"./RSPContexts-HQcWPJyv.js";import"./Text-BGwM_jUK.js";import"./useDateFormatter-CC7zCtTR.js";import"./useControlledState-H1tiOFpU.js";import"./useLocalizedStringFormatter-TrhiTCnH.js";import"./useUpdateEffect-BzF61qSB.js";import"./useEvent-B0l3XC2n.js";import"./getScrollParent-FdZGTYO5.js";import"./scrollIntoView-BivqL63c.js";import"./VisuallyHidden-B-Fwaf7X.js";import"./Button-BcZkB2rZ.js";import"./Button.module-AG3JZ-l4.js";import"./createLucideIcon-DQK9Z80p.js";import"./Heading-DncQzqB_.js";import"./FieldError-C9cT7vfN.js";import"./FieldError-qYvGdo98.js";import"./Text-D7RmNfn4.js";const we={component:l,render:e=>{const[t,r]=H.useState(null);return A.jsx(l,{value:t,onChange:r,...e})},title:"Components/Calendar",tags:["autodocs"]},o={},s={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},play:async({canvas:e,step:t})=>{await t("it should be possible to select tomorrow with the keyboard",async()=>{await a.tab(),await a.tab(),await a.tab(),await a.keyboard("[ArrowRight]"),await a.keyboard("[Space]"),await N(e.getByRole("gridcell",{name:j(T()).add({days:1}).day.toString()})).toHaveAttribute("aria-selected","true")})}},n={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{minValue:m},play:async({canvas:e,step:t})=>{await t('it should show a "not-allowed" cursor when hovering disabled dates',async()=>{const r=I(e.getByRole("gridcell",{name:`${m.day-1}`})).getByRole("button");await a.hover(r),await N(r).toHaveStyle({cursor:"not-allowed"})})}},i={args:{isDisabled:!0},parameters:{a11y:{element:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},c={args:{isInvalid:!0,errorMessage:"Något gick fel"}},d={args:{isDateUnavailable:e=>U(e,"sv-SE")}};var p,u,y;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(y=(u=o.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var b,g,w;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(C=(R=d.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};const ve=["Primary","KeyboardTest","DS1141","Disabled","Invalid","UnavailableWeekends"];export{n as DS1141,i as Disabled,c as Invalid,s as KeyboardTest,o as Primary,d as UnavailableWeekends,ve as __namedExportsOrder,we as default};
