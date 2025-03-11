import{j as a}from"./jsx-runtime-DtgEGaVE.js";import{D as m}from"./DatePicker-C5HAAF7s.js";import{u as t,e as D}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-DWcm3eun.js";import"./useFocusRing-CzvYi63w.js";import"./clsx-B-dksMZM.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./Hidden-Cwv2mliU.js";import"./index-cpIEhwLo.js";import"./useFocusable-BFetNXOg.js";import"./Calendar-By4dPZEq.js";import"./RSPContexts-CeCCo7XS.js";import"./Text-Bs3wmQ_r.js";import"./useDateFormatter-E4RkCH_K.js";import"./context-DhWQxiCQ.js";import"./useControlledState-DGyHFLi9.js";import"./useLocalizedStringFormatter-BPmhGMia.js";import"./useLabels-C6xreehw.js";import"./useUpdateEffect-DShQiA8p.js";import"./useEvent-obUhTg3D.js";import"./getScrollParent-CrrBdd7g.js";import"./scrollIntoView-DzftQ5Hl.js";import"./useDescription-DLAKITkC.js";import"./VisuallyHidden-Gg3j86pG.js";import"./Heading-D22Z-sij.js";import"./chevron-right-CjCwHShF.js";import"./createLucideIcon-8wDOqnHv.js";import"./DateField-Dm0jw6yn.js";import"./Form-CtPEz-EL.js";import"./useFormValidation-COh_aIUh.js";import"./Group-C-pz1s69.js";import"./Input-6VVu8_gT.js";import"./Label-D5LZnuba.js";import"./FocusScope-CaULHkOc.js";import"./useField-CeWVpZ88.js";import"./useFilter-BKKa6XYX.js";import"./useCollator-CZkj3LZa.js";import"./Dialog-BSG13mom.js";import"./OverlayArrow-DFvAyWp1.js";import"./useDialog-BBNmFTNB.js";import"./PressResponder-B88fYvo4.js";import"./useOverlayTriggerState-DuWewdYA.js";import"./DismissButton-CnWVp8i_.js";import"./TextField.module-DBomeRQe.js";import"./TextField-B-2IZnXF.js";import"./TextField-Ah33ZlDz.js";import"./useTextField-B88Z0jeU.js";import"./Button-DakbffNZ.js";const ht={component:m,title:"Components/DatePicker",tags:["autodocs"],args:{label:"Välj datum",description:"YYYY-MM-DD"},parameters:{a11y:{test:"todo"}}},r={},o={args:{label:"Välj datum och tid",description:"YYYY-MM-DD HH-MM-SS",granularity:"second"}},s={args:{isRequired:!0,errorMessage:"Var god ange ett datum"},render:e=>a.jsxs("form",{children:[a.jsx(m,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:n,args:{errorMessage:x}})=>{await n("it should show an error message if submitted empty",async()=>{await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Enter]"),D(e.getByText(x)).toBeInTheDocument()})}},i={args:{isRequired:!0,validate:({year:e})=>e===new Date().getFullYear()?"Var god välj ett annat år":!0},render:e=>a.jsxs("form",{children:[a.jsx(m,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:n})=>{await n("it should show a custom error message if invalid",async()=>{await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Enter]"),await t.keyboard("[Enter]"),await t.tab(),D(e.getByText("Var god välj ett annat år")).toBeInTheDocument()})}};var p,u,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(c=(u=r.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var d,l,b;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Välj datum och tid',
    description: 'YYYY-MM-DD HH-MM-SS',
    granularity: 'second'
  }
}`,...(b=(l=o.parameters)==null?void 0:l.docs)==null?void 0:b.source}}};var g,w,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(w=s.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var v,h,E;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(E=(h=i.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};const Et=["Primary","WithTime","Required","CustomValiation"];export{i as CustomValiation,r as Primary,s as Required,o as WithTime,Et as __namedExportsOrder,ht as default};
