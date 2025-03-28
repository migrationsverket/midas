import{j as r}from"./jsx-runtime-DtgEGaVE.js";import{D as p}from"./DatePicker-CWtUWoou.js";import{u as t,e as S}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-C6oo4-9j.js";import"./utils-fGMpyvF6.js";import"./clsx-B-dksMZM.js";import"./ProgressBar--YvcVoO5.js";import"./Label-DuUY1oNM.js";import"./Hidden-lswqw32w.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-D9x7ijjo.js";import"./context-gwlhO1hg.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./usePress-D7qiRhp3.js";import"./useFocusRing-CklmaPa3.js";import"./index-cpIEhwLo.js";import"./useFocusable-Cn0G9B-O.js";import"./DateField-CIU-EXc9.js";import"./Form-BWK6xyH1.js";import"./Text-CLHHKsvT.js";import"./useFormValidation-tLTeCxiF.js";import"./Group-BegkCWIz.js";import"./Input-C7Zh-d3_.js";import"./useDateFormatter-Dx8w5IVn.js";import"./useLocalizedStringFormatter-D7bE6AYj.js";import"./useControlledState-DGyHFLi9.js";import"./FocusScope-CWlvLRaT.js";import"./useDescription-DtBV7V9R.js";import"./useField-Dtc4qbuX.js";import"./getScrollParent-CrrBdd7g.js";import"./scrollIntoView-DzftQ5Hl.js";import"./useEvent-Ou8lCwV4.js";import"./useFilter-MVXJdBMQ.js";import"./useCollator-BwOLflG5.js";import"./Calendar.module-C0nC7-zT.js";import"./RSPContexts-CeCCo7XS.js";import"./useUpdateEffect-DVcG7G3u.js";import"./VisuallyHidden-9izUKr4W.js";import"./Dialog-C9rfyFGH.js";import"./OverlayArrow-CXQgvVpK.js";import"./Collection-BgAVdhih.js";import"./index-DwWe6W7f.js";import"./Separator-CD6mMu3N.js";import"./SelectionManager-DBzMVJ3_.js";import"./ListKeyboardDelegate-BT2IGCyv.js";import"./useOverlayTriggerState-Cqt2HN1Y.js";import"./PressResponder-DX2GyaXr.js";import"./useMenuTriggerState-DQqQ1s0l.js";import"./FieldError-Ds0Dd64h.js";import"./createLucideIcon-8wDOqnHv.js";import"./RangeCalendar-DT3VaIQT.js";import"./Heading-Bra5wENi.js";import"./chevron-right-CjCwHShF.js";import"./Calendar-Cl_rEAfM.js";import"./Label-7KzwGxuL.js";import"./Text-BTJZlpVr.js";const Pt={component:p,title:"Components/DatePicker",tags:["autodocs"],args:{label:"Välj datum",description:"Beskrivning"},parameters:{a11y:{config:{rules:[{id:"color-contrast",selector:'[data-placeholder="true"]',enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={},s={args:{label:"Välj datum och tid",description:"YYYY-MM-DD HH-MM-SS",granularity:"second"}},o={args:{isDisabled:!0}},i={args:{isRequired:!0,errorMessage:"Var god ange ett datum"},tags:["!dev"],render:e=>r.jsxs("form",{children:[r.jsx(p,{...e}),r.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:m,args:{errorMessage:k}})=>{await m("it should show an error message if submitted empty",async()=>{await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Enter]"),S(e.getByText(k)).toBeInTheDocument()})}},n={args:{isRequired:!0,validate:({year:e})=>e===new Date().getFullYear()?"Var god välj ett annat år":!0},tags:["!dev"],render:e=>r.jsxs("form",{children:[r.jsx(p,{...e}),r.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:m})=>{await m("it should show a custom error message if invalid",async()=>{await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Enter]"),await t.keyboard("[Enter]"),await t.tab(),S(e.getByText("Var god välj ett annat år")).toBeInTheDocument()})}};var u,c,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,b,g;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(j=(x=n.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const Rt=["Primary","WithTime","Disabled","Required","CustomValiation"];export{n as CustomValiation,o as Disabled,a as Primary,i as Required,s as WithTime,Rt as __namedExportsOrder,Pt as default};
