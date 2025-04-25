import{j as f}from"./jsx-runtime-DtgEGaVE.js";import{C as i}from"./Calendar-r40A-wek.js";import{r as h}from"./index-BbAIUH2N.js";import{u as t,e as D}from"./index-DtSMq7G1.js";import{M as p}from"./mockdate-C6Fr_Vrr.js";import{$ as E}from"./useDateFormatter-RZ7n7xxz.js";import"./CalendarGrid-CHgTkCbW.js";import"./Button-BeGWj9DP.js";import"./Button.module-kL9Mhzoi.js";import"./Button-646fE-tP.js";import"./utils-Dv9Ux5aE.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-DJC3JvQN.js";import"./Label-Cr3pFc-x.js";import"./Hidden-lswqw32w.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-BAqrTMfP.js";import"./context-oTIQb5ND.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useButton-DFPcodtW.js";import"./usePress-DljlCKCj.js";import"./useFocusRing-CPQALXIu.js";import"./index-cpIEhwLo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useFocusable-Cs9agisI.js";import"./chevron-right-CjCwHShF.js";import"./createLucideIcon-8wDOqnHv.js";import"./Heading-DmTsGMz3.js";import"./RSPContexts-CeCCo7XS.js";import"./Text-D0cNLqf0.js";import"./useControlledState-DGyHFLi9.js";import"./useLocalizedStringFormatter-DGtYtDnp.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-DVcG7G3u.js";import"./useEvent-DnmuJhSu.js";import"./getScrollParent-CrrBdd7g.js";import"./scrollIntoView-DzftQ5Hl.js";import"./useDescription-TyCFs068.js";import"./VisuallyHidden-DiGk2ECL.js";import"./Text-BO1MQlio.js";const g="2025-05-29",x=E(g),dt={component:i,render:o=>{const[s,v]=h.useState(null);return f.jsx(i,{value:s,onChange:v,...o})},async beforeEach(){return p.set(g),()=>{p.reset()}},title:"Components/Calendar",tags:["autodocs"]},e={},r={tags:["!dev","!autodocs"],play:async({canvas:o,step:s})=>{await s("it should be possible to select tomorrow with the keyboard",async()=>{await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[ArrowRight]"),await t.keyboard("[Space]"),await D(o.getByRole("gridcell",{name:x.add({days:1}).day.toString()})).toHaveAttribute("aria-selected","true")})}},a={args:{isDisabled:!0}};var m,n,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var d,u,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
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
        name: parsedDate.add({
          days: 1
        }).day.toString()
      })).toHaveAttribute('aria-selected', 'true');
    });
  }
}`,...(l=(u=r.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var b,y,w;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(w=(y=a.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const ut=["Primary","KeyboardTest","Disabled"];export{a as Disabled,r as KeyboardTest,e as Primary,ut as __namedExportsOrder,dt as default};
