import{j as a}from"./jsx-runtime-DtgEGaVE.js";import{D as p}from"./DatePicker-BDdkAOv9.js";import{u as t,e as S}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-uO1JGISi.js";import"./utils-Cd6MiihZ.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-DNnV_wJ6.js";import"./Label-CkQlERdq.js";import"./Hidden-lswqw32w.js";import"./useFocusRing-HKeWiXpl.js";import"./index-cpIEhwLo.js";import"./context-BSqmORe6.js";import"./LiveAnnouncer-A-XV3aHJ.js";import"./useIsDisabled-BANivrO7.js";import"./Form-BBmrm8bW.js";import"./Text-BkowhAon.js";import"./useFormValidation-BWkP5gBo.js";import"./Input-CkPPhu4J.js";import"./useDateFormatter-D8oWd7cd.js";import"./useLocalizedStringFormatter-CIgGmZTI.js";import"./useControlledState-DGyHFLi9.js";import"./FocusScope-C97GJsIb.js";import"./scrollIntoView-CnTD5aJz.js";import"./useField-B8c6pWIv.js";import"./getScrollParent-2-PurW9V.js";import"./useEvent-Yxrkvbn7.js";import"./useCollator-C3PRVItH.js";import"./VisuallyHidden-I9LV86QJ.js";import"./Calendar.module-Bj9gwkWB.js";import"./RSPContexts-CeCCo7XS.js";import"./useUpdateEffect-DVcG7G3u.js";import"./Dialog-DvGj8Lch.js";import"./OverlayArrow-EUTjSIyA.js";import"./Collection-O4Gi1PSO.js";import"./index-DwWe6W7f.js";import"./Separator-BAiZ62s6.js";import"./SelectionManager-6a3fudD6.js";import"./ListKeyboardDelegate-DayiplM_.js";import"./useOverlayTriggerState-CIPnKd-A.js";import"./PressResponder-B4q3Hpl9.js";import"./useMenuTriggerState-DfrN39jX.js";import"./FieldError-Cae8s3IP.js";import"./createLucideIcon-8wDOqnHv.js";import"./RangeCalendar-DGLT6jc-.js";import"./Heading-CguzDhHq.js";import"./chevron-right-CjCwHShF.js";import"./Calendar-Vhl7JaFs.js";import"./Label-e6qbx1P3.js";import"./Text-modOyfN2.js";const jt={component:p,title:"Components/DatePicker",tags:["autodocs"],args:{label:"Välj datum",description:"Beskrivning"},parameters:{a11y:{config:{rules:[{id:"color-contrast",selector:'[data-placeholder="true"]',enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},r={},s={args:{label:"Välj datum och tid",description:"YYYY-MM-DD HH-MM-SS",granularity:"second"}},o={args:{isDisabled:!0}},i={args:{isRequired:!0,errorMessage:"Var god ange ett datum"},tags:["!dev"],render:e=>a.jsxs("form",{children:[a.jsx(p,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:m,args:{errorMessage:k}})=>{await m("it should show an error message if submitted empty",async()=>{await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Enter]"),S(e.getByText(k)).toBeInTheDocument()})}},n={args:{isRequired:!0,validate:({year:e})=>e===new Date().getFullYear()?"Var god välj ett annat år":!0},tags:["!dev"],render:e=>a.jsxs("form",{children:[a.jsx(p,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:m})=>{await m("it should show a custom error message if invalid",async()=>{await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Enter]"),await t.keyboard("[Enter]"),await t.tab(),S(e.getByText("Var god välj ett annat år")).toBeInTheDocument()})}};var u,c,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,b,g;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(j=(x=n.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const St=["Primary","WithTime","Disabled","Required","CustomValiation"];export{n as CustomValiation,o as Disabled,r as Primary,i as Required,s as WithTime,St as __namedExportsOrder,jt as default};
