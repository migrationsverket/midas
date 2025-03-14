import{j as a}from"./jsx-runtime-DtgEGaVE.js";import{D as m}from"./DatePicker-Bum65IIC.js";import{u as t,e as D}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-Db7Kwb_W.js";import"./utils-BhWkjeqE.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-KG041EEs.js";import"./Label-BBCc9K7K.js";import"./Hidden-DrRnqvCY.js";import"./index-cpIEhwLo.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-CH4xJhfw.js";import"./context-DKkYq9qZ.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useFocusable-CsLSqN_1.js";import"./useFocusRing-BFo6eXxS.js";import"./Calendar-HeNa_FXw.js";import"./RSPContexts-CeCCo7XS.js";import"./Text-BpXRIGMg.js";import"./useDateFormatter-x14-O3dn.js";import"./useControlledState-DGyHFLi9.js";import"./useLocalizedStringFormatter-CbwlXzSd.js";import"./useUpdateEffect-DShQiA8p.js";import"./useEvent-F7Njpygl.js";import"./getScrollParent-CrrBdd7g.js";import"./scrollIntoView-DzftQ5Hl.js";import"./useDescription-Dtl9HSnp.js";import"./VisuallyHidden-BrRgg-ml.js";import"./Heading-Bb6XMm53.js";import"./chevron-right-CjCwHShF.js";import"./createLucideIcon-8wDOqnHv.js";import"./DateField-CcI5RBBJ.js";import"./Form-DKViyh0O.js";import"./useFormValidation-DTUkoRt0.js";import"./Group-C-Kls-uU.js";import"./Input-D9FO-LNc.js";import"./FocusScope-CVReLJeH.js";import"./useField-Vu58C-dH.js";import"./useFilter-7uyplEy9.js";import"./useCollator-DojbmfC0.js";import"./Dialog-1m63WSm2.js";import"./OverlayArrow-DFEs6rvZ.js";import"./useDialog-CBeAzFYn.js";import"./PressResponder-Drl0S6l1.js";import"./useOverlayTriggerState-MBiwFMwk.js";import"./DismissButton-B1Ad_hU1.js";import"./TextField.module-DBomeRQe.js";import"./TextField-B3sPdNG4.js";import"./TextField-CdQBPvvv.js";import"./useTextField-yvZfA2lE.js";import"./Button-B1psBIqu.js";const ft={component:m,title:"Components/DatePicker",tags:["autodocs"],args:{label:"Välj datum",description:"YYYY-MM-DD"},parameters:{a11y:{test:"todo"}}},r={},o={args:{label:"Välj datum och tid",description:"YYYY-MM-DD HH-MM-SS",granularity:"second"}},s={args:{isRequired:!0,errorMessage:"Var god ange ett datum"},tags:["!dev"],render:e=>a.jsxs("form",{children:[a.jsx(m,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:n,args:{errorMessage:x}})=>{await n("it should show an error message if submitted empty",async()=>{await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Enter]"),D(e.getByText(x)).toBeInTheDocument()})}},i={args:{isRequired:!0,validate:({year:e})=>e===new Date().getFullYear()?"Var god välj ett annat år":!0},tags:["!dev"],render:e=>a.jsxs("form",{children:[a.jsx(m,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:n})=>{await n("it should show a custom error message if invalid",async()=>{await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Enter]"),await t.keyboard("[Enter]"),await t.tab(),D(e.getByText("Var god välj ett annat år")).toBeInTheDocument()})}};var p,u,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var c,g,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Välj datum och tid',
    description: 'YYYY-MM-DD HH-MM-SS',
    granularity: 'second'
  }
}`,...(l=(g=o.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var b,w,y;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(E=(h=i.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};const jt=["Primary","WithTime","Required","CustomValiation"];export{i as CustomValiation,r as Primary,s as Required,o as WithTime,jt as __namedExportsOrder,ft as default};
