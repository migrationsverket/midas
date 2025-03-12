import{j as a}from"./jsx-runtime-DtgEGaVE.js";import{D as m}from"./DatePicker-BCDRNev9.js";import{u as t,e as x}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-DWcm3eun.js";import"./useFocusRing-CzvYi63w.js";import"./clsx-B-dksMZM.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./Hidden-Cwv2mliU.js";import"./index-cpIEhwLo.js";import"./useFocusable-BFetNXOg.js";import"./DateField-CYYkiVHG.js";import"./Form-CtPEz-EL.js";import"./Text-Bs3wmQ_r.js";import"./useFormValidation-COh_aIUh.js";import"./Group-C-pz1s69.js";import"./Input-6VVu8_gT.js";import"./Label-D5LZnuba.js";import"./useDateFormatter-DJgQzXn-.js";import"./context-DhWQxiCQ.js";import"./useLocalizedStringFormatter-BPmhGMia.js";import"./useControlledState-DGyHFLi9.js";import"./FocusScope-CaULHkOc.js";import"./useDescription-DLAKITkC.js";import"./useField-CeWVpZ88.js";import"./useLabels-C6xreehw.js";import"./getScrollParent-CrrBdd7g.js";import"./scrollIntoView-DzftQ5Hl.js";import"./useEvent-obUhTg3D.js";import"./useFilter-BKKa6XYX.js";import"./useCollator-CZkj3LZa.js";import"./Calendar.module-B2aAgo6R.js";import"./RSPContexts-CeCCo7XS.js";import"./useUpdateEffect-DShQiA8p.js";import"./VisuallyHidden-Gg3j86pG.js";import"./Dialog-BSG13mom.js";import"./OverlayArrow-DFvAyWp1.js";import"./useDialog-BBNmFTNB.js";import"./PressResponder-B88fYvo4.js";import"./useOverlayTriggerState-DuWewdYA.js";import"./DismissButton-CnWVp8i_.js";import"./createLucideIcon-8wDOqnHv.js";import"./RangeCalendar-CzioHO0U.js";import"./Heading-D22Z-sij.js";import"./chevron-right-CjCwHShF.js";import"./Calendar-DNkyPqKG.js";const wt={component:m,title:"Components/DatePicker",tags:["autodocs"],args:{label:"Välj datum",description:"Beskrivning",errorMessage:"Här var det fel!"},parameters:{a11y:{test:"todo"}}},r={},s={args:{label:"Välj datum och tid",description:"YYYY-MM-DD HH-MM-SS",granularity:"second"}},o={args:{isRequired:!0,errorMessage:"Var god ange ett datum"},render:e=>a.jsxs("form",{children:[a.jsx(m,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:n,args:{errorMessage:f}})=>{await n("it should show an error message if submitted empty",async()=>{await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Enter]"),x(e.getByText(f)).toBeInTheDocument()})}},i={args:{isRequired:!0,validate:({year:e})=>e===new Date().getFullYear()?"Var god välj ett annat år":!0},render:e=>a.jsxs("form",{children:[a.jsx(m,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:n})=>{await n("it should show a custom error message if invalid",async()=>{await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Enter]"),await t.keyboard("[Enter]"),await t.tab(),x(e.getByText("Var god välj ett annat år")).toBeInTheDocument()})}};var p,u,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(c=(u=r.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var d,l,b;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(E=(h=i.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};const yt=["Primary","WithTime","Required","CustomValiation"];export{i as CustomValiation,r as Primary,o as Required,s as WithTime,yt as __namedExportsOrder,wt as default};
