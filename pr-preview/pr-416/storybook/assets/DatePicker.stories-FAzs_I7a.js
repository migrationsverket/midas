import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{D as u}from"./DatePicker-BRrZ23R0.js";import{u as t,e as V}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-C6oo4-9j.js";import"./utils-fGMpyvF6.js";import"./clsx-B-dksMZM.js";import"./ProgressBar--YvcVoO5.js";import"./Label-DuUY1oNM.js";import"./Hidden-lswqw32w.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-D9x7ijjo.js";import"./context-gwlhO1hg.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./usePress-D7qiRhp3.js";import"./useFocusRing-CklmaPa3.js";import"./index-cpIEhwLo.js";import"./useFocusable-Cn0G9B-O.js";import"./DateField-Dagk2lv4.js";import"./Form-BWK6xyH1.js";import"./Text-CLHHKsvT.js";import"./useFormValidation-tLTeCxiF.js";import"./Group-BegkCWIz.js";import"./Input-C7Zh-d3_.js";import"./useDateFormatter-Dx8w5IVn.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useControlledState-DGyHFLi9.js";import"./FocusScope-CWlvLRaT.js";import"./useDescription-DtBV7V9R.js";import"./useField-Dtc4qbuX.js";import"./useLocalizedStringFormatter-C9hzL5Oy.js";import"./getScrollParent-CrrBdd7g.js";import"./scrollIntoView-DzftQ5Hl.js";import"./useEvent-Ou8lCwV4.js";import"./useFilter-MVXJdBMQ.js";import"./useCollator-BwOLflG5.js";import"./Calendar.module-Bh0nTpDj.js";import"./RSPContexts-CeCCo7XS.js";import"./useUpdateEffect-DVcG7G3u.js";import"./VisuallyHidden-9izUKr4W.js";import"./Dialog-CgUKwdUX.js";import"./OverlayArrow-CXQgvVpK.js";import"./Collection-BgAVdhih.js";import"./index-DwWe6W7f.js";import"./Separator-CD6mMu3N.js";import"./SelectionManager-DBzMVJ3_.js";import"./ListKeyboardDelegate-BT2IGCyv.js";import"./useOverlayTriggerState-Cqt2HN1Y.js";import"./PressResponder-DX2GyaXr.js";import"./useMenuTriggerState-BjsnJlSn.js";import"./createLucideIcon-8wDOqnHv.js";import"./RangeCalendar-BCycKLZS.js";import"./Heading-Bra5wENi.js";import"./chevron-right-CjCwHShF.js";import"./Calendar-BpMCQxCC.js";import"./Label-7KzwGxuL.js";import"./Text-ClOKek4T.js";import"./FieldError-BC6JBrt_.js";const Ct={component:u,title:"Components/DatePicker",tags:["autodocs"],args:{label:"Välj datum",description:"Beskrivning",errorMessage:"Var god ange ett datum",errorPosition:"top"},parameters:{a11y:{config:{rules:[{id:"color-contrast",selector:'[data-placeholder="true"]',enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={},s={args:{label:"Välj datum och tid",description:"YYYY-MM-DD HH-MM-SS",granularity:"second"}},o={args:{isDisabled:!0}},i={args:{isInvalid:!0}},n={args:{isRequired:!0},tags:["!dev"],render:r=>e.jsxs("form",{children:[e.jsx(u,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:r,step:p,args:{errorMessage:Y}})=>{await p("it should show an error message if submitted empty",async()=>{await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Enter]"),V(r.getByText(Y)).toBeInTheDocument()})}},m={args:{isRequired:!0,validate:({year:r})=>r===new Date().getFullYear()?"Var god välj ett annat år":!0},tags:["!dev"],render:r=>e.jsxs("form",{children:[e.jsx(u,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:r,step:p})=>{await p("it should show a custom error message if invalid",async()=>{await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Enter]"),await t.keyboard("[Enter]"),await t.tab(),V(r.getByText("Var god välj ett annat år")).toBeInTheDocument()})}};var c,d,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var b,g,w;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Välj datum och tid',
    description: 'YYYY-MM-DD HH-MM-SS',
    granularity: 'second'
  }
}`,...(w=(g=s.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var y,v,h;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(h=(v=o.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var E,D,f;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    isInvalid: true
  }
}`,...(f=(D=i.parameters)==null?void 0:D.docs)==null?void 0:f.source}}};var x,j,S;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isRequired: true
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
}`,...(S=(j=n.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var k,M,T;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(T=(M=m.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};const Ft=["Primary","WithTime","Disabled","Invalid","Required","CustomValiation"];export{m as CustomValiation,o as Disabled,i as Invalid,a as Primary,n as Required,s as WithTime,Ft as __namedExportsOrder,Ct as default};
