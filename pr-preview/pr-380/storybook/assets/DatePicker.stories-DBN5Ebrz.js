import{j as a}from"./jsx-runtime-DtgEGaVE.js";import{D as p}from"./DatePicker-B4oOIrdG.js";import{u as t,e as S}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-CTiZg4rz.js";import"./utils-fGMpyvF6.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-qio85TVe.js";import"./Label-C7YJVz0K.js";import"./Hidden-lswqw32w.js";import"./useFocusRing-D234eI5d.js";import"./index-cpIEhwLo.js";import"./context-gwlhO1hg.js";import"./LiveAnnouncer-A-XV3aHJ.js";import"./useIsDisabled-Cy36feIv.js";import"./Checkbox-U40LUIMq.js";import"./RSPContexts-CeCCo7XS.js";import"./Form-I0ljaAay.js";import"./Text-CLHHKsvT.js";import"./useFormValidation-BplRM21L.js";import"./useControlledState-DGyHFLi9.js";import"./useField-DUxalVp6.js";import"./VisuallyHidden-CIX9y9is.js";import"./Input-CMdrBSNU.js";import"./useDateFormatter-XsEnc7vv.js";import"./useLocalizedStringFormatter-D7bE6AYj.js";import"./FocusScope-BTvUdKNZ.js";import"./scrollIntoView-Br2KMoz-.js";import"./getScrollParent-DaqmRUg6.js";import"./useEvent-Ou8lCwV4.js";import"./useCollator-BwOLflG5.js";import"./Calendar.module-B6TKaREN.js";import"./useUpdateEffect-DVcG7G3u.js";import"./Dialog-6rGhS6Q5.js";import"./OverlayArrow-CXQgvVpK.js";import"./Collection-8zswMZr2.js";import"./index-DwWe6W7f.js";import"./Separator-Dru5Rsd-.js";import"./SelectionManager-CpQyjLx-.js";import"./ListKeyboardDelegate-Cy2OSJKs.js";import"./useOverlayTriggerState-DwxlxUpQ.js";import"./PressResponder-D2hyN4Xm.js";import"./useMenuTriggerState-upCXLjC-.js";import"./FieldError-BADsxAoD.js";import"./createLucideIcon-8wDOqnHv.js";import"./RangeCalendar-DwBxioiG.js";import"./Heading-Bra5wENi.js";import"./chevron-right-CjCwHShF.js";import"./Calendar-nOIhD1_t.js";import"./Label-D7d8orDF.js";import"./Text-YbdszP_I.js";const St={component:p,title:"Components/DatePicker",tags:["autodocs"],args:{label:"Välj datum",description:"Beskrivning"},parameters:{a11y:{config:{rules:[{id:"color-contrast",selector:'[data-placeholder="true"]',enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},r={},s={args:{label:"Välj datum och tid",description:"YYYY-MM-DD HH-MM-SS",granularity:"second"}},o={args:{isDisabled:!0}},i={args:{isRequired:!0,errorMessage:"Var god ange ett datum"},tags:["!dev"],render:e=>a.jsxs("form",{children:[a.jsx(p,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:m,args:{errorMessage:k}})=>{await m("it should show an error message if submitted empty",async()=>{await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Enter]"),S(e.getByText(k)).toBeInTheDocument()})}},n={args:{isRequired:!0,validate:({year:e})=>e===new Date().getFullYear()?"Var god välj ett annat år":!0},tags:["!dev"],render:e=>a.jsxs("form",{children:[a.jsx(p,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:m})=>{await m("it should show a custom error message if invalid",async()=>{await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Enter]"),await t.keyboard("[Enter]"),await t.tab(),S(e.getByText("Var god välj ett annat år")).toBeInTheDocument()})}};var u,c,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,b,g;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(j=(x=n.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const kt=["Primary","WithTime","Disabled","Required","CustomValiation"];export{n as CustomValiation,o as Disabled,r as Primary,i as Required,s as WithTime,kt as __namedExportsOrder,St as default};
