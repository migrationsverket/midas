import{m as p,$ as y,a as b,r as g,j as w,b as v,c as h}from"./iframe-fDXOsywa.js";import{C as m}from"./Calendar-fBRhUwaE.js";import"./preload-helper-Ct5FWWRu.js";import"./CalendarHeader-CagRWY7P.js";import"./Button-EDZL10yX.js";import"./utils-jl4nVMmS.js";import"./clsx-B-dksMZM.js";import"./Hidden-D-yqKUTe.js";import"./useFocusRing-gU4XRzOS.js";import"./index-wA_lPabs.js";import"./index-NMMldFA3.js";import"./useLabels-BmkcOEEQ.js";import"./useButton-CqL1Vm8Z.js";import"./RSPContexts-DXYNxytm.js";import"./Text-BaIQfRso.js";import"./useDateFormatter-Dpfshom7.js";import"./useControlledState-BFHIlEy-.js";import"./useLocalizedStringFormatter-DiNpPFwm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DPNX0U6G.js";import"./useEvent-BlL3_Xul.js";import"./getScrollParent-BT3G_gxy.js";import"./scrollIntoView-DBOgPBsD.js";import"./useDescription-Dsp-kCKx.js";import"./VisuallyHidden-Bm44aDzc.js";import"./clsx-Ciqy0D92.js";import"./Button-Ck-hw6bu.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-T-T0oES3.js";import"./chevron-right-DEaSQnfq.js";import"./Heading-hDshH0a8.js";import"./FieldError-gRqQXOJZ.js";import"./Text-D9v5SlmJ.js";const{expect:u,userEvent:a,within:f}=__STORYBOOK_MODULE_TEST__,ee={component:m,render:e=>{const[t,r]=g.useState(null);return w.jsx(m,{value:t,onChange:r,...e})},title:"Components/Calendar",tags:["autodocs"]},s={},o={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},play:async({canvas:e,step:t})=>{await t("it should be possible to select a date with the keyboard",async()=>{await a.tab(),await a.tab(),await a.tab(),await a.keyboard("[ArrowLeft]"),await a.keyboard("[ArrowLeft]"),await a.keyboard("[Space]"),await u(e.getByRole("gridcell",{name:v(h()).subtract({days:2}).day.toString()})).toHaveAttribute("aria-selected","true")})}},n={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{minValue:p},play:async({canvas:e,step:t})=>{await t('it should show a "not-allowed" cursor when hovering disabled dates',async()=>{const r=f(e.getByRole("gridcell",{name:`${p.day-2}`})).getByRole("button");await a.hover(r),await u(r).toHaveStyle({cursor:"not-allowed"})})}},i={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},c={args:{isReadOnly:!0,value:new y(1995,5,29)}},d={args:{isInvalid:!0,errorMessage:"Något gick fel"}},l={args:{isDateUnavailable:e=>b(e,"sv-SE")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    value: new CalendarDate(1995, 5, 29)
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Något gick fel'
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isDateUnavailable: date => isWeekend(date, 'sv-SE')
  }
}`,...l.parameters?.docs?.source}}};const ae=["Primary","KeyboardTest","DS1141","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{n as DS1141,i as Disabled,d as Invalid,o as KeyboardTest,s as Primary,c as ReadOnly,l as UnavailableWeekends,ae as __namedExportsOrder,ee as default};
