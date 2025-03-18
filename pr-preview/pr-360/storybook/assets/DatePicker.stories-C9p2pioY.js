import{j as a}from"./jsx-runtime-DtgEGaVE.js";import{D as m}from"./DatePicker-BA8F8rvK.js";import{u as t,e as f}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-AXOEyd3Z.js";import"./utils-C4wbeGu1.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-DVVijuUB.js";import"./Label-BXmCKTLy.js";import"./Hidden-DizQ9ce0.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-Bdg4Lht-.js";import"./context-gxVqox2x.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useFocusRing-BPh1BF7L.js";import"./index-cpIEhwLo.js";import"./useFocusable-BNsiIlBy.js";import"./DateField-C2AxG3_K.js";import"./Form-BDyp70qB.js";import"./Text-CbyHDQDf.js";import"./useFormValidation-CE6QEibh.js";import"./Group-CfYmuYtY.js";import"./Input-B2v7qRwt.js";import"./useDateFormatter-DwAU-L3R.js";import"./useLocalizedStringFormatter-DFsWMtKh.js";import"./useControlledState-DGyHFLi9.js";import"./FocusScope-qaFvQZnw.js";import"./useDescription-B1EhVr9u.js";import"./useField-jnpLLrbi.js";import"./getScrollParent-CrrBdd7g.js";import"./scrollIntoView-DzftQ5Hl.js";import"./useEvent-D4_b5_Hb.js";import"./useFilter-Tn9az6gf.js";import"./useCollator-DpeVXYFV.js";import"./Calendar.module-YNgb1YdH.js";import"./RSPContexts-CeCCo7XS.js";import"./useUpdateEffect-DVcG7G3u.js";import"./VisuallyHidden-BWFG7hRI.js";import"./Dialog-D3Wo0K5t.js";import"./OverlayArrow-gTlSlHE6.js";import"./useDialog-m6eWD56q.js";import"./PressResponder-Bd0INNGE.js";import"./useOverlayTriggerState-CV3ul9Cj.js";import"./DismissButton-CGedck5U.js";import"./createLucideIcon-8wDOqnHv.js";import"./RangeCalendar-DOCSD5Te.js";import"./Heading-CLW9LB9_.js";import"./chevron-right-CjCwHShF.js";import"./Calendar-www5nFnR.js";const Et={component:m,title:"Components/DatePicker",tags:["autodocs"],args:{label:"Välj datum",description:"Beskrivning"},parameters:{a11y:{config:{rules:[{id:"color-contrast",selector:'[data-placeholder="true"]',enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},r={},o={args:{label:"Välj datum och tid",description:"YYYY-MM-DD HH-MM-SS",granularity:"second"}},s={args:{isRequired:!0,errorMessage:"Var god ange ett datum"},tags:["!dev"],render:e=>a.jsxs("form",{children:[a.jsx(m,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:n,args:{errorMessage:x}})=>{await n("it should show an error message if submitted empty",async()=>{await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Enter]"),f(e.getByText(x)).toBeInTheDocument()})}},i={args:{isRequired:!0,validate:({year:e})=>e===new Date().getFullYear()?"Var god välj ett annat år":!0},tags:["!dev"],render:e=>a.jsxs("form",{children:[a.jsx(m,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:n})=>{await n("it should show a custom error message if invalid",async()=>{await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Enter]"),await t.keyboard("[Enter]"),await t.tab(),f(e.getByText("Var god välj ett annat år")).toBeInTheDocument()})}};var p,u,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(c=(u=r.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var d,l,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Välj datum och tid',
    description: 'YYYY-MM-DD HH-MM-SS',
    granularity: 'second'
  }
}`,...(g=(l=o.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var b,w,y;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isRequired: true,
    errorMessage: 'Var god ange ett datum'
  },
  tags: ['!dev'],
  render: args => <form>
      <DatePicker {...args} />
      <button type='submit'>Submit</button>
    </form>,
  play: async ({
    canvas,
    step,
    args: {
      errorMessage
    }
  }) => {
    await step('it should show an error message if submitted empty', async () => {
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.keyboard('[Enter]');
      expect(canvas.getByText(errorMessage as string)).toBeInTheDocument();
    });
  }
}`,...(y=(w=s.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var v,h,E;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    isRequired: true,
    validate: ({
      year
    }) => year === new Date().getFullYear() ? 'Var god välj ett annat år' : true
  },
  tags: ['!dev'],
  render: args => <form>
      <DatePicker {...args} />
      <button type='submit'>Submit</button>
    </form>,
  play: async ({
    canvas,
    step
  }) => {
    /**
     * This test is made to create an invalid DatePicker
     * the current year is not allowed the "user" selects todays date and submits the form
     */
    await step('it should show a custom error message if invalid', async () => {
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.keyboard('[Enter]');
      await userEvent.keyboard('[Enter]');
      await userEvent.tab();
      expect(canvas.getByText('Var god välj ett annat år')).toBeInTheDocument();
    });
  }
}`,...(E=(h=i.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};const ft=["Primary","WithTime","Required","CustomValiation"];export{i as CustomValiation,r as Primary,s as Required,o as WithTime,ft as __namedExportsOrder,Et as default};
