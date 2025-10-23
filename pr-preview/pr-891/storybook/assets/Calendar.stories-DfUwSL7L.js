import{m as p,$ as N,a as U,r as H,j as I,b as j,c as K}from"./iframe-Tw41aNfS.js";import{C as m}from"./Calendar-DyLvuxXl.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-DyqAAsbC.js";import"./Button-DNTXyKA6.js";import"./utils-BPejs0wc.js";import"./clsx-B-dksMZM.js";import"./Hidden-_XUoW0aU.js";import"./useFocusRing-mxtqiPoR.js";import"./index-CKncJRoA.js";import"./index-C3uEoWC8.js";import"./useLabels-CihZ0btI.js";import"./useButton-DvHXUOBv.js";import"./RSPContexts-BaqoygXm.js";import"./Text-Bc0J-Jf5.js";import"./useDateFormatter-5nSKN2wy.js";import"./useControlledState-B5Dm8GAh.js";import"./useLocalizedStringFormatter-CSGw0Clq.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-4zxp6d-Z.js";import"./useEvent-BL7ym3ft.js";import"./getScrollParent-C19WkcPQ.js";import"./scrollIntoView-5IfCkSsC.js";import"./useDescription-Cbff0xqB.js";import"./VisuallyHidden-GQBdtwAz.js";import"./clsx-Ciqy0D92.js";import"./Button-BHbFATyp.js";import"./Button.module-CcWMkJAG.js";import"./createLucideIcon-DaJOZeq2.js";import"./chevron-right-hewoMCbs.js";import"./Heading-DIsxoGpP.js";import"./FieldError-Djc4bkx4.js";import"./Text-PYLpypEq.js";const{expect:T,userEvent:a,within:M}=__STORYBOOK_MODULE_TEST__,Se={component:m,render:e=>{const[t,r]=H.useState(null);return I.jsx(m,{value:t,onChange:r,...e})},title:"Components/Calendar",tags:["autodocs"]},s={},o={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},play:async({canvas:e,step:t})=>{await t("it should be possible to select a date with the keyboard",async()=>{await a.tab(),await a.tab(),await a.tab(),await a.keyboard("[ArrowLeft]"),await a.keyboard("[ArrowLeft]"),await a.keyboard("[Space]"),await T(e.getByRole("gridcell",{name:j(K()).subtract({days:2}).day.toString()})).toHaveAttribute("aria-selected","true")})}},n={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{minValue:p},play:async({canvas:e,step:t})=>{await t('it should show a "not-allowed" cursor when hovering disabled dates',async()=>{const r=M(e.getByRole("gridcell",{name:`${p.day-2}`})).getByRole("button");await a.hover(r),await T(r).toHaveStyle({cursor:"not-allowed"})})}},i={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},c={args:{isReadOnly:!0,value:new N(1995,5,29)}},d={args:{isInvalid:!0,errorMessage:"Något gick fel"}},l={args:{isDateUnavailable:e=>U(e,"sv-SE")}};var u,y,b;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var g,w,v;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(w=o.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var h,f,S;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(S=(f=n.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var k,x,E;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(E=(x=i.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var $,D,R;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    value: new CalendarDate(1995, 5, 29)
  }
}`,...(R=(D=c.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var B,O,_;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Något gick fel'
  }
}`,...(_=(O=d.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var C,A,L;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    isDateUnavailable: date => isWeekend(date, 'sv-SE')
  }
}`,...(L=(A=l.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};const ke=["Primary","KeyboardTest","DS1141","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{n as DS1141,i as Disabled,d as Invalid,o as KeyboardTest,s as Primary,c as ReadOnly,l as UnavailableWeekends,ke as __namedExportsOrder,Se as default};
