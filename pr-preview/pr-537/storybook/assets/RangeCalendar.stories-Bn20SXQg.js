import{R as A}from"./RangeCalendar-CMMwhd93.js";import{u as t,e as i}from"./index-DtSMq7G1.js";import{m as s}from"./storybook-IMzbhOlc.js";import"./jsx-runtime-DtgEGaVE.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./CalendarHeader-CAvXTHiY.js";import"./Button-DMocNr_H.js";import"./utils-Dv9Ux5aE.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-DJC3JvQN.js";import"./Label-Cr3pFc-x.js";import"./Hidden-lswqw32w.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-BAqrTMfP.js";import"./context-oTIQb5ND.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useButton-BgYBsm5l.js";import"./usePress-B1qsLRUy.js";import"./useFocusRing-CPQALXIu.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-cpIEhwLo.js";import"./useFocusable-b_0ijIRa.js";import"./RSPContexts-CeCCo7XS.js";import"./Text-D0cNLqf0.js";import"./useDateFormatter-BuhIs_IT.js";import"./CalendarDate-Px-QPrMV.js";import"./useControlledState-DGyHFLi9.js";import"./useLocalizedStringFormatter-DGtYtDnp.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-DVcG7G3u.js";import"./useEvent-DnmuJhSu.js";import"./getScrollParent-CrrBdd7g.js";import"./scrollIntoView-DzftQ5Hl.js";import"./useDescription-TyCFs068.js";import"./VisuallyHidden-DiGk2ECL.js";import"./Button-Bo6x4U7a.js";import"./Button.module-BEIdyv-e.js";import"./chevron-right-CjCwHShF.js";import"./createLucideIcon-8wDOqnHv.js";import"./Heading-QrS6DDsr.js";import"./Text-DJ2zVqb4.js";const pt={component:A,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},a={},e={args:{isDisabled:!0}},r={tags:["!dev","!autodocs"],play:async({canvas:o,step:g})=>{await g("it should be possible to select today and two days ahead with the keyboard",async()=>{const b=s.day.toString(),v=s.add({days:1}).day.toString(),R=s.add({days:2}).day.toString();await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Space]"),await t.keyboard("[ArrowRight]"),await i(o.getByRole("gridcell",{name:b})).toHaveAttribute("aria-selected","true"),await i(o.getByRole("gridcell",{name:v})).toHaveAttribute("aria-selected","true"),await i(o.getByRole("gridcell",{name:R})).toHaveAttribute("aria-selected","true")})}};var n,d,m;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,c,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var y,u,w;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
  play: async ({
    canvas,
    step
  }) => {
    await step('it should be possible to select today and two days ahead with the keyboard', async () => {
      const todaysDate = mockedNow.day.toString();
      const tomorrow = mockedNow.add({
        days: 1
      }).day.toString();
      const dayAfterTomorrow = mockedNow.add({
        days: 2
      }).day.toString();
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.keyboard('[Space]');
      await userEvent.keyboard('[ArrowRight]');
      await expect(canvas.getByRole('gridcell', {
        name: todaysDate
      })).toHaveAttribute('aria-selected', 'true');
      await expect(canvas.getByRole('gridcell', {
        name: tomorrow
      })).toHaveAttribute('aria-selected', 'true');
      await expect(canvas.getByRole('gridcell', {
        name: dayAfterTomorrow
      })).toHaveAttribute('aria-selected', 'true');
    });
  }
}`,...(w=(u=r.parameters)==null?void 0:u.docs)==null?void 0:w.source}}};const ct=["Primary","Disabled","KeyboardTest"];export{e as Disabled,r as KeyboardTest,a as Primary,ct as __namedExportsOrder,pt as default};
