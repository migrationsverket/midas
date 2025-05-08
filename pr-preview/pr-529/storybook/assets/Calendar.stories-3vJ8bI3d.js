import{j as g}from"./jsx-runtime-DtgEGaVE.js";import{C as i}from"./Calendar-BS8OtmOn.js";import{r as f}from"./index-BbAIUH2N.js";import{u as t,e as v}from"./index-DtSMq7G1.js";import{$ as x,a as h}from"./CalendarDate-Px-QPrMV.js";import"./CalendarHeader-d7SV1k1p.js";import"./Button-DMocNr_H.js";import"./utils-Dv9Ux5aE.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-DJC3JvQN.js";import"./Label-Cr3pFc-x.js";import"./Hidden-lswqw32w.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-BAqrTMfP.js";import"./context-oTIQb5ND.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useButton-BgYBsm5l.js";import"./usePress-B1qsLRUy.js";import"./useFocusRing-CPQALXIu.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-cpIEhwLo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useFocusable-b_0ijIRa.js";import"./RSPContexts-CeCCo7XS.js";import"./Text-D0cNLqf0.js";import"./useDateFormatter-BuhIs_IT.js";import"./useControlledState-DGyHFLi9.js";import"./useLocalizedStringFormatter-DGtYtDnp.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-DVcG7G3u.js";import"./useEvent-DnmuJhSu.js";import"./getScrollParent-CrrBdd7g.js";import"./scrollIntoView-DzftQ5Hl.js";import"./useDescription-TyCFs068.js";import"./VisuallyHidden-DiGk2ECL.js";import"./Button-D-p3WjFh.js";import"./Button.module-BEIdyv-e.js";import"./chevron-right-CjCwHShF.js";import"./createLucideIcon-8wDOqnHv.js";import"./Heading-QrS6DDsr.js";import"./Text-DJ2zVqb4.js";const ct={component:i,render:o=>{const[s,w]=f.useState(null);return g.jsx(i,{value:s,onChange:w,...o})},title:"Components/Calendar",tags:["autodocs"]},a={},e={tags:["!dev","!autodocs"],play:async({canvas:o,step:s})=>{await s("it should be possible to select tomorrow with the keyboard",async()=>{await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[ArrowRight]"),await t.keyboard("[Space]"),await v(o.getByRole("gridcell",{name:x(h()).add({days:1}).day.toString()})).toHaveAttribute("aria-selected","true")})}},r={args:{isDisabled:!0}};var p,m,n;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(n=(m=a.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var c,d,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
        name: today(getLocalTimeZone()).add({
          days: 1
        }).day.toString()
      })).toHaveAttribute('aria-selected', 'true');
    });
  }
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,b,y;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(y=(b=r.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const dt=["Primary","KeyboardTest","Disabled"];export{r as Disabled,e as KeyboardTest,a as Primary,dt as __namedExportsOrder,ct as default};
