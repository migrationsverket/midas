import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{D as d}from"./DatePicker-Cv5Epihb.js";import{u as t,e as T}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-C6oo4-9j.js";import"./utils-fGMpyvF6.js";import"./clsx-B-dksMZM.js";import"./ProgressBar--YvcVoO5.js";import"./Label-DuUY1oNM.js";import"./Hidden-lswqw32w.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-D9x7ijjo.js";import"./context-gwlhO1hg.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./usePress-D7qiRhp3.js";import"./useFocusRing-CklmaPa3.js";import"./index-cpIEhwLo.js";import"./useFocusable-Cn0G9B-O.js";import"./DateField-Dagk2lv4.js";import"./Form-BWK6xyH1.js";import"./Text-CLHHKsvT.js";import"./useFormValidation-tLTeCxiF.js";import"./Group-BegkCWIz.js";import"./Input-C7Zh-d3_.js";import"./useDateFormatter-Dx8w5IVn.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useControlledState-DGyHFLi9.js";import"./FocusScope-CWlvLRaT.js";import"./useDescription-DtBV7V9R.js";import"./useField-Dtc4qbuX.js";import"./useLocalizedStringFormatter-C9hzL5Oy.js";import"./getScrollParent-CrrBdd7g.js";import"./scrollIntoView-DzftQ5Hl.js";import"./useEvent-Ou8lCwV4.js";import"./useFilter-MVXJdBMQ.js";import"./useCollator-BwOLflG5.js";import"./Calendar.module-CjduyLTr.js";import"./RSPContexts-CeCCo7XS.js";import"./useUpdateEffect-DVcG7G3u.js";import"./VisuallyHidden-9izUKr4W.js";import"./Dialog-BeGWRlqX.js";import"./OverlayArrow-CXQgvVpK.js";import"./Collection-CrlQSNFM.js";import"./index-DwWe6W7f.js";import"./Separator-D1KbA0aG.js";import"./SelectionManager-DBzMVJ3_.js";import"./ListKeyboardDelegate-BT2IGCyv.js";import"./useOverlayTriggerState-Cqt2HN1Y.js";import"./PressResponder-DX2GyaXr.js";import"./useMenuTriggerState-BjsnJlSn.js";import"./createLucideIcon-8wDOqnHv.js";import"./RangeCalendar-UD3H4LJh.js";import"./chevron-right-CjCwHShF.js";import"./Heading-Dqk4rW6U.js";import"./Heading-Bra5wENi.js";import"./Calendar-BxhY9jZD.js";import"./Label-DjHNQKaV.js";import"./Text-DTW4hkTA.js";import"./FieldError-DCgcqB00.js";const Ft={component:d,title:"Components/DatePicker",tags:["autodocs"],args:{label:"Välj datum",description:"Beskrivning",errorPosition:"top"},parameters:{a11y:{config:{rules:[{id:"color-contrast",selector:'[data-placeholder="true"]',enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={},o={args:{label:"Välj datum och tid",description:"YYYY-MM-DD HH-MM-SS",granularity:"second"}},s={args:{isDisabled:!0}},i={args:{isInvalid:!0,errorMessage:"Var god ange ett datum"}},n={args:{isRequired:!0,errorMessage:"Var god ange ett datum"},tags:["!dev","!autodocs"],render:r=>e.jsxs("form",{children:[e.jsx(d,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:r,step:p,args:{errorMessage:Y}})=>{await p("it should show an error message if submitted empty",async()=>{await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Enter]"),T(r.getByText(Y)).toBeInTheDocument()})}},m={args:{isRequired:!0,validate:({year:r})=>r===new Date().getFullYear()?"Var god välj ett annat år":!0},tags:["!dev","!autodocs"],render:r=>e.jsxs("form",{children:[e.jsx(d,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:r,step:p})=>{await p("it should show a custom error message if invalid",async()=>{await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Enter]"),await t.keyboard("[Enter]"),await t.tab(),T(r.getByText("Var god välj ett annat år")).toBeInTheDocument()})}};var u,c,l;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var g,b,w;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Välj datum och tid',
    description: 'YYYY-MM-DD HH-MM-SS',
    granularity: 'second'
  }
}`,...(w=(b=o.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var y,v,h;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(h=(v=s.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var E,D,f;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Var god ange ett datum'
  }
}`,...(f=(D=i.parameters)==null?void 0:D.docs)==null?void 0:f.source}}};var x,j,M;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isRequired: true,
    errorMessage: 'Var god ange ett datum'
  },
  tags: ['!dev', '!autodocs'],
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
}`,...(M=(j=n.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var S,V,k;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    isRequired: true,
    validate: ({
      year
    }) => year === new Date().getFullYear() ? 'Var god välj ett annat år' : true
  },
  tags: ['!dev', '!autodocs'],
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
}`,...(k=(V=m.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};const Wt=["Primary","WithTime","Disabled","Invalid","Required","CustomValiation"];export{m as CustomValiation,s as Disabled,i as Invalid,a as Primary,n as Required,o as WithTime,Wt as __namedExportsOrder,Ft as default};
