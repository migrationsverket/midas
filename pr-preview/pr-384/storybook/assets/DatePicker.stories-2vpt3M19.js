import{j as a}from"./jsx-runtime-DtgEGaVE.js";import{D as p}from"./DatePicker-B1sto5eQ.js";import{u as t,e as S}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-B2aR51FI.js";import"./utils-BYZtxgnE.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-Ce7Ytruc.js";import"./Label-B20XR-5d.js";import"./Hidden-DizQ9ce0.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-D0L8qOPf.js";import"./context-DlPnyEqv.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./usePress-DcG3_cox.js";import"./useFocusRing-BVR65GV4.js";import"./focusSafely-CCsE9NOP.js";import"./index-cpIEhwLo.js";import"./useFocusable-ByeJrHLx.js";import"./DateField-C1oZ3Sij.js";import"./Form-B__7jCkU.js";import"./Text-DGqKDvoY.js";import"./useFormValidation-CzFHg574.js";import"./Group-BqsvSBZ5.js";import"./Input-DnZ0R0Vm.js";import"./useDateFormatter-BqqX1dZE.js";import"./useLocalizedStringFormatter-CYf1eOAG.js";import"./useControlledState-DGyHFLi9.js";import"./FocusScope-Cto1rr90.js";import"./useDescription-BK8-bxoY.js";import"./useField-BP5oohdv.js";import"./getScrollParent-CrrBdd7g.js";import"./scrollIntoView-DzftQ5Hl.js";import"./useEvent-CYKx4DfG.js";import"./useFilter-somb3P_B.js";import"./useCollator-CdnSoI7T.js";import"./Calendar.module-BsVKXy4v.js";import"./RSPContexts-CeCCo7XS.js";import"./useUpdateEffect-DVcG7G3u.js";import"./VisuallyHidden-CQ87MyWU.js";import"./Dialog-B4UtpVXu.js";import"./OverlayArrow-YvpX_abK.js";import"./useDialog-BbdbZt-j.js";import"./PressResponder-NcrRXaRp.js";import"./useOverlayTriggerState-BfOBJM5F.js";import"./DismissButton-Gx2e4RHd.js";import"./FieldError-jQHHKhki.js";import"./createLucideIcon-8wDOqnHv.js";import"./RangeCalendar-DvXuJiQO.js";import"./Heading-D8JqNMmQ.js";import"./chevron-right-CjCwHShF.js";import"./Calendar-D20MSgGl.js";const Mt={component:p,title:"Components/DatePicker",tags:["autodocs"],args:{label:"Välj datum",description:"Beskrivning"},parameters:{a11y:{config:{rules:[{id:"color-contrast",selector:'[data-placeholder="true"]',enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},r={},s={args:{label:"Välj datum och tid",description:"YYYY-MM-DD HH-MM-SS",granularity:"second"}},o={args:{isDisabled:!0}},i={args:{isRequired:!0,errorMessage:"Var god ange ett datum"},tags:["!dev"],render:e=>a.jsxs("form",{children:[a.jsx(p,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:m,args:{errorMessage:k}})=>{await m("it should show an error message if submitted empty",async()=>{await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Enter]"),S(e.getByText(k)).toBeInTheDocument()})}},n={args:{isRequired:!0,validate:({year:e})=>e===new Date().getFullYear()?"Var god välj ett annat år":!0},tags:["!dev"],render:e=>a.jsxs("form",{children:[a.jsx(p,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:m})=>{await m("it should show a custom error message if invalid",async()=>{await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Enter]"),await t.keyboard("[Enter]"),await t.tab(),S(e.getByText("Var god välj ett annat år")).toBeInTheDocument()})}};var u,c,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,b,g;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Välj datum och tid',
    description: 'YYYY-MM-DD HH-MM-SS',
    granularity: 'second'
  }
}`,...(g=(b=s.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var w,y,v;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(v=(y=o.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var h,E,D;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(D=(E=i.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var f,x,j;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(j=(x=n.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const Tt=["Primary","WithTime","Disabled","Required","CustomValiation"];export{n as CustomValiation,o as Disabled,r as Primary,i as Required,s as WithTime,Tt as __namedExportsOrder,Mt as default};
