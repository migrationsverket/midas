import{j as a}from"./jsx-runtime-DtgEGaVE.js";import{D as m}from"./DatePicker-D4bUSjmq.js";import{u as t,e as D}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-Cm6N-U3G.js";import"./useFocusable-kTDKG0-I.js";import"./clsx-B-dksMZM.js";import"./Hidden-BtGjzlYc.js";import"./index-cpIEhwLo.js";import"./RSPContexts-CeCCo7XS.js";import"./Text-B6PEOduq.js";import"./context-_OjZNubd.js";import"./useControlledState-DGyHFLi9.js";import"./useLocalizedStringFormatter-DFEaIMYS.js";import"./useLabels-CfvNSRSq.js";import"./useUpdateEffect-DShQiA8p.js";import"./useEvent-CUPsne6n.js";import"./useCollator-CU9Q0tF2.js";import"./scrollIntoView-DzftQ5Hl.js";import"./useDescription-Wc3eT9Hr.js";import"./VisuallyHidden-D13_LDvY.js";import"./Group-BCu23P5U.js";import"./TextField-BZ6g-1qt.js";import"./Form-CeDqcAbX.js";import"./useFormValidation-DR3ZhvQ-.js";import"./Label-CQG0hq8b.js";import"./useTextField-Ca09ynha.js";import"./useField-BCfbuq15.js";import"./FocusScope-DFXDyZr7.js";import"./useFilter-COUpFQ8n.js";import"./Dialog-BNL2wiYz.js";import"./OverlayArrow-Dyb7gmhQ.js";import"./useDialog-Dk8P4f29.js";import"./PressResponder-bYOa3nO9.js";import"./useOverlayTriggerState-DBlnXKaU.js";import"./DismissButton-4yM4YEZA.js";import"./Heading-CLxvFeOB.js";import"./TextField.module-DBomeRQe.js";import"./createLucideIcon-8wDOqnHv.js";import"./chevron-right-CjCwHShF.js";import"./TextField-B19fNRiO.js";import"./Button-BgnELAWU.js";const dt={component:m,title:"Components/DatePicker",tags:["autodocs"],args:{label:"Välj datum",description:"YYYY-MM-DD"},parameters:{a11y:{test:"todo"}}},r={},s={args:{label:"Välj datum och tid",description:"YYYY-MM-DD HH-MM-SS",granularity:"second"}},o={args:{isRequired:!0,errorMessage:"Var god ange ett datum"},render:e=>a.jsxs("form",{children:[a.jsx(m,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:n,args:{errorMessage:x}})=>{await n("it should show an error message if submitted empty",async()=>{await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Enter]"),D(e.getByText(x)).toBeInTheDocument()})}},i={args:{isRequired:!0,validate:({year:e})=>e===new Date().getFullYear()?"Var god välj ett annat år":!0},render:e=>a.jsxs("form",{children:[a.jsx(m,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:n})=>{await n("it should show a custom error message if invalid",async()=>{await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Enter]"),await t.keyboard("[Enter]"),await t.tab(),D(e.getByText("Var god välj ett annat år")).toBeInTheDocument()})}};var p,u,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(c=(u=r.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var d,l,b;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Välj datum och tid',
    description: 'YYYY-MM-DD HH-MM-SS',
    granularity: 'second'
  }
}`,...(b=(l=s.parameters)==null?void 0:l.docs)==null?void 0:b.source}}};var g,w,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isRequired: true,
    errorMessage: 'Var god ange ett datum'
  },
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
}`,...(y=(w=o.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var v,h,E;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    isRequired: true,
    validate: ({
      year
    }) => year === new Date().getFullYear() ? 'Var god välj ett annat år' : true
  },
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
}`,...(E=(h=i.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};const lt=["Primary","WithTime","Required","CustomValiation"];export{i as CustomValiation,r as Primary,o as Required,s as WithTime,lt as __namedExportsOrder,dt as default};
