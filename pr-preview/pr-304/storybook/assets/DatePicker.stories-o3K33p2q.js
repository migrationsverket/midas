import{j as a}from"./jsx-runtime-DtgEGaVE.js";import{D as m}from"./DatePicker-eN2kzEfu.js";import{u as t,e as f}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-BhwOwugC.js";import"./utils-DdXLQA3f.js";import"./clsx-B-dksMZM.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./Hidden-0Xxd6rx0.js";import"./index-cpIEhwLo.js";import"./useFocusRing-CAIiVOBX.js";import"./useFocusable-C2jS3Qdx.js";import"./DateField-Bxz21-PS.js";import"./Form-DJSr-0L7.js";import"./Text-CV6Bluw9.js";import"./useFormValidation-DerMACuP.js";import"./Group-CXqmBkpb.js";import"./Input-BPCyqAmH.js";import"./Label-oUcQSHlD.js";import"./useDateFormatter-ChAZyTDe.js";import"./context-BR8A0IbO.js";import"./useLocalizedStringFormatter-CrofGC5X.js";import"./useControlledState-DGyHFLi9.js";import"./FocusScope-Q9OnV_W8.js";import"./useDescription-EqQzVjeZ.js";import"./useField-_-T_Udov.js";import"./useLabels-BlWvxUw7.js";import"./getScrollParent-CrrBdd7g.js";import"./scrollIntoView-DzftQ5Hl.js";import"./useEvent-BB46z8qb.js";import"./useFilter-DYBeGCRR.js";import"./useCollator-CsHORISF.js";import"./Calendar.module-Cla8CCag.js";import"./RSPContexts-CeCCo7XS.js";import"./useUpdateEffect-DShQiA8p.js";import"./VisuallyHidden-DZK_6M_C.js";import"./Dialog-Cjmp9FyO.js";import"./OverlayArrow-BGGzdKnh.js";import"./useDialog-84x-blKf.js";import"./PressResponder-BQj9d-QJ.js";import"./useOverlayTriggerState-Md-KFT5u.js";import"./DismissButton-Bk1YbeAq.js";import"./createLucideIcon-8wDOqnHv.js";import"./RangeCalendar-Bnersvnd.js";import"./Heading-Bx0h7_1c.js";import"./chevron-right-CjCwHShF.js";import"./Calendar-CWZqR_2W.js";const yt={component:m,title:"Components/DatePicker",tags:["autodocs"],args:{label:"Välj datum",description:"Beskrivning"},parameters:{a11y:{config:{rules:[{id:"color-contrast",selector:'[data-placeholder="true"]',enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},r={},s={args:{label:"Välj datum och tid",description:"YYYY-MM-DD HH-MM-SS",granularity:"second"}},o={args:{isRequired:!0,errorMessage:"Var god ange ett datum"},tags:["!dev"],render:e=>a.jsxs("form",{children:[a.jsx(m,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:n,args:{errorMessage:x}})=>{await n("it should show an error message if submitted empty",async()=>{await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Enter]"),f(e.getByText(x)).toBeInTheDocument()})}},i={args:{isRequired:!0,validate:({year:e})=>e===new Date().getFullYear()?"Var god välj ett annat år":!0},tags:["!dev"],render:e=>a.jsxs("form",{children:[a.jsx(m,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:n})=>{await n("it should show a custom error message if invalid",async()=>{await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Enter]"),await t.keyboard("[Enter]"),await t.tab(),f(e.getByText("Var god välj ett annat år")).toBeInTheDocument()})}};var p,u,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(c=(u=r.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var d,l,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Välj datum och tid',
    description: 'YYYY-MM-DD HH-MM-SS',
    granularity: 'second'
  }
}`,...(g=(l=s.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var b,w,y;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(y=(w=o.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var v,h,E;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(E=(h=i.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};const vt=["Primary","WithTime","Required","CustomValiation"];export{i as CustomValiation,r as Primary,o as Required,s as WithTime,vt as __namedExportsOrder,yt as default};
