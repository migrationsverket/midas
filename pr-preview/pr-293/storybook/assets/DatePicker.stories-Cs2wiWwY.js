import{j as a}from"./jsx-runtime-DtgEGaVE.js";import{D as p}from"./DatePicker-x-AaKuP1.js";import{w as x,u as t,e as f}from"./index-frOfh_zr.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-DlxIrWB_.js";import"./useFocusable-DTLHoeQe.js";import"./clsx-B-dksMZM.js";import"./Hidden-D9yAbrAR.js";import"./index-cpIEhwLo.js";import"./RSPContexts-CeCCo7XS.js";import"./Text-BorP-jFP.js";import"./context-DVpahnpO.js";import"./useControlledState-DGyHFLi9.js";import"./useLocalizedStringFormatter-BfPjM0Dg.js";import"./useLabels-Dt0KIlgT.js";import"./useUpdateEffect-DShQiA8p.js";import"./useEvent-B_cSPOEW.js";import"./ListKeyboardDelegate-dzYvetd0.js";import"./SelectionManager-Z9gqeiha.js";import"./FocusScope-DWsZ07QH.js";import"./useDescription-B0GcPv_I.js";import"./VisuallyHidden-3bHjY8GZ.js";import"./Group-BntAPbZu.js";import"./TextField-Dhd5GzR9.js";import"./Form-Cq4QZx_r.js";import"./useFormValidation-D_zB_ZT8.js";import"./Label-B23VYN9V.js";import"./TextField.module-BSzw7ps9.js";import"./useField-lqkOjd2l.js";import"./Button-KXcyN924.js";import"./useFilter-C6nYXwzR.js";import"./Dialog-DJFaj5QY.js";import"./OverlayArrow-B7QTCHgm.js";import"./Collection-B65vjQb4.js";import"./index-DwWe6W7f.js";import"./Separator-CFSVS3UH.js";import"./PressResponder-DogE8OEY.js";import"./Heading-CkRqaEjL.js";import"./createLucideIcon-8wDOqnHv.js";import"./chevron-right-CjCwHShF.js";const dt={component:p,title:"Components/DatePicker",tags:["autodocs"],args:{label:"Välj datum",description:"YYYY-MM-DD"},parameters:{a11y:{test:"todo"}}},r={},s={args:{label:"Välj datum och tid",description:"YYYY-MM-DD HH-MM-SS",granularity:"second"}},o={args:{isRequired:!0,errorMessage:"Var god ange ett datum"},render:e=>a.jsxs("form",{children:[a.jsx(p,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvasElement:e,step:n,args:{errorMessage:m}})=>{const j=x(e);n("it should show an error message if submitted empty",async()=>{await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Enter]"),f(j.getByText(m)).toBeInTheDocument()})}},i={args:{isRequired:!0,validate:({year:e})=>e===new Date().getFullYear()?"Var god välj ett annat år":!0},render:e=>a.jsxs("form",{children:[a.jsx(p,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvasElement:e,step:n})=>{const m=x(e);n("it should show a custom error message if invalid",async()=>{await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Enter]"),await t.keyboard("[Enter]"),await t.tab(),f(m.getByText("Var god välj ett annat år")).toBeInTheDocument()})}};var c,u,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var l,b,g;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Välj datum och tid',
    description: 'YYYY-MM-DD HH-MM-SS',
    granularity: 'second'
  }
}`,...(g=(b=s.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var w,y,v;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    isRequired: true,
    errorMessage: 'Var god ange ett datum'
  },
  render: args => <form>
      <DatePicker {...args} />
      <button type='submit'>Submit</button>
    </form>,
  play: async ({
    canvasElement,
    step,
    args: {
      errorMessage
    }
  }) => {
    const canvas = within(canvasElement);
    step('it should show an error message if submitted empty', async () => {
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.keyboard('[Enter]');
      expect(canvas.getByText(errorMessage as string)).toBeInTheDocument();
    });
  }
}`,...(v=(y=o.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var h,E,D;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    /**
     * This test is made to create an invalid DatePicker
     * the current year is not allowed the "user" selects todays date and submits the form
     */
    step('it should show a custom error message if invalid', async () => {
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
}`,...(D=(E=i.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};const lt=["Primary","WithTime","Required","CustomValiation"];export{i as CustomValiation,r as Primary,o as Required,s as WithTime,lt as __namedExportsOrder,dt as default};
