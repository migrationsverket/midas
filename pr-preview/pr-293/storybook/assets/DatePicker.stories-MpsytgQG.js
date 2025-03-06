import{j as a}from"./jsx-runtime-DtgEGaVE.js";import{D as m}from"./DatePicker-DC1558sV.js";import{u as t,e as D}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-DlxIrWB_.js";import"./useFocusable-DTLHoeQe.js";import"./clsx-B-dksMZM.js";import"./Hidden-D9yAbrAR.js";import"./index-cpIEhwLo.js";import"./RSPContexts-CeCCo7XS.js";import"./Text-BorP-jFP.js";import"./context-DVpahnpO.js";import"./useControlledState-DGyHFLi9.js";import"./useLocalizedStringFormatter-BfPjM0Dg.js";import"./useLabels-Dt0KIlgT.js";import"./useUpdateEffect-DShQiA8p.js";import"./useEvent-B_cSPOEW.js";import"./ListKeyboardDelegate-dzYvetd0.js";import"./SelectionManager-Z9gqeiha.js";import"./FocusScope-DWsZ07QH.js";import"./useDescription-B0GcPv_I.js";import"./VisuallyHidden-3bHjY8GZ.js";import"./Group-BntAPbZu.js";import"./TextField-CnJ_Ih0o.js";import"./Form-Cq4QZx_r.js";import"./useFormValidation-D_zB_ZT8.js";import"./Label-B23VYN9V.js";import"./TextField.module-BSzw7ps9.js";import"./useField-lqkOjd2l.js";import"./Button-CYc5P7iM.js";import"./useFilter-C6nYXwzR.js";import"./Dialog-DJFaj5QY.js";import"./OverlayArrow-B7QTCHgm.js";import"./Collection-B65vjQb4.js";import"./index-DwWe6W7f.js";import"./Separator-CFSVS3UH.js";import"./PressResponder-DogE8OEY.js";import"./Heading-CkRqaEjL.js";import"./createLucideIcon-8wDOqnHv.js";import"./chevron-right-CjCwHShF.js";const ut={component:m,title:"Components/DatePicker",tags:["autodocs"],args:{label:"Välj datum",description:"YYYY-MM-DD"},parameters:{a11y:{test:"todo"}}},r={},s={args:{label:"Välj datum och tid",description:"YYYY-MM-DD HH-MM-SS",granularity:"second"}},o={args:{isRequired:!0,errorMessage:"Var god ange ett datum"},render:e=>a.jsxs("form",{children:[a.jsx(m,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:n,args:{errorMessage:x}})=>{await n("it should show an error message if submitted empty",async()=>{await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Enter]"),D(e.getByText(x)).toBeInTheDocument()})}},i={args:{isRequired:!0,validate:({year:e})=>e===new Date().getFullYear()?"Var god välj ett annat år":!0},render:e=>a.jsxs("form",{children:[a.jsx(m,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:n})=>{await n("it should show a custom error message if invalid",async()=>{await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Enter]"),await t.keyboard("[Enter]"),await t.tab(),D(e.getByText("Var god välj ett annat år")).toBeInTheDocument()})}};var p,u,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(c=(u=r.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var d,l,b;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(E=(h=i.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};const ct=["Primary","WithTime","Required","CustomValiation"];export{i as CustomValiation,r as Primary,o as Required,s as WithTime,ct as __namedExportsOrder,ut as default};
