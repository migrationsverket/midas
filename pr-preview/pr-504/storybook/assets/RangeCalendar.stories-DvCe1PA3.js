import{R as A}from"./RangeCalendar-CPFU8EzY.js";import{M as n}from"./mockdate-C6Fr_Vrr.js";import{$ as S}from"./useDateFormatter-CCmn1O7K.js";import{u as t,e as i}from"./index-DtSMq7G1.js";import"./jsx-runtime-DtgEGaVE.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./CalendarContent-BiI6cGHi.js";import"./Button-Co7pWk88.js";import"./utils-Dv9Ux5aE.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-6st-rJzm.js";import"./Label-Cr3pFc-x.js";import"./Hidden-lswqw32w.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-BAqrTMfP.js";import"./context-eceod8wW.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useButton-DFPcodtW.js";import"./usePress-DljlCKCj.js";import"./useFocusRing-CPQALXIu.js";import"./index-cpIEhwLo.js";import"./useFocusable-Cs9agisI.js";import"./RSPContexts-CeCCo7XS.js";import"./Text-D0cNLqf0.js";import"./useControlledState-DGyHFLi9.js";import"./useLocalizedStringFormatter-DA8E_9Dc.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-DVcG7G3u.js";import"./useEvent-DnmuJhSu.js";import"./getScrollParent-CrrBdd7g.js";import"./scrollIntoView-DzftQ5Hl.js";import"./useDescription-TyCFs068.js";import"./VisuallyHidden-DiGk2ECL.js";import"./Button-BT4YzKuP.js";import"./Button.module-kL9Mhzoi.js";import"./chevron-right-CjCwHShF.js";import"./createLucideIcon-8wDOqnHv.js";import"./Text-BO1MQlio.js";import"./Heading-DmTsGMz3.js";const w="2025-05-29",s=S(w),ct={component:A,title:"Components/Calendar/RangeCalendar",tags:["autodocs"],async beforeEach(){return n.set(w),()=>{n.reset()}}},a={},e={args:{isDisabled:!0}},r={tags:["!dev","!autodocs"],play:async({canvas:o,step:v})=>{await v("it should be possible to select today and two days ahead with the keyboard",async()=>{const R=s.day.toString(),f=s.add({days:1}).day.toString(),h=s.add({days:2}).day.toString();await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Space]"),await t.keyboard("[ArrowRight]"),await i(o.getByRole("gridcell",{name:R})).toHaveAttribute("aria-selected","true"),await i(o.getByRole("gridcell",{name:f})).toHaveAttribute("aria-selected","true"),await i(o.getByRole("gridcell",{name:h})).toHaveAttribute("aria-selected","true")})}};var d,m,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,l,y;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(y=(l=e.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};var u,g,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
  play: async ({
    canvas,
    step
  }) => {
    await step('it should be possible to select today and two days ahead with the keyboard', async () => {
      const today = parsedDate.day.toString();
      const tomorrow = parsedDate.add({
        days: 1
      }).day.toString();
      const dayAfterTomorrow = parsedDate.add({
        days: 2
      }).day.toString();
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.keyboard('[Space]');
      await userEvent.keyboard('[ArrowRight]');
      await expect(canvas.getByRole('gridcell', {
        name: today
      })).toHaveAttribute('aria-selected', 'true');
      await expect(canvas.getByRole('gridcell', {
        name: tomorrow
      })).toHaveAttribute('aria-selected', 'true');
      await expect(canvas.getByRole('gridcell', {
        name: dayAfterTomorrow
      })).toHaveAttribute('aria-selected', 'true');
    });
  }
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const lt=["Primary","Disabled","KeyboardTest"];export{e as Disabled,r as KeyboardTest,a as Primary,lt as __namedExportsOrder,ct as default};
