import{j as a}from"./jsx-runtime-CBDCb4rg.js";import{D as m}from"./DatePicker-DAf21ITY.js";import{u as t,e as f}from"./index-iZ8NAl3x.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-iL9IzHG8.js";import"./utils-CyugoGNF.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-B2jw0c1b.js";import"./Label-ByRA_SKm.js";import"./Hidden-B6il94lO.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DbJIstGE.js";import"./context-BwmME58u.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusRing-BODiw1iP.js";import"./index-BAyGJXOV.js";import"./useFocusable-CqLabGgp.js";import"./DateField-D7GmDtd_.js";import"./Form-B3zPBtl7.js";import"./Text-DnyJpj_W.js";import"./useFormValidation-B1oMw7Lv.js";import"./Group-FOoQ2kH0.js";import"./Input-nkIej56h.js";import"./useDateFormatter-DXsNSGQX.js";import"./FocusScope-Ded37Rd9.js";import"./useDescription-DZZa8B5b.js";import"./useField-YKOABOJo.js";import"./useLocalizedStringFormatter-B6l6yPuV.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./useEvent-DrHgLB5Q.js";import"./useFilter-BJ9yscCY.js";import"./useCollator-B0i4hO_n.js";import"./useControlledState-BgxdDqm0.js";import"./Calendar.module-DZRUxbNL.js";import"./RSPContexts-BT50PPhj.js";import"./useUpdateEffect-Bs3_Kx5l.js";import"./VisuallyHidden-Cx1OydyR.js";import"./Dialog-BO8Dfov-.js";import"./OverlayArrow-CBK1XRIu.js";import"./useDialog-BgtKtjEq.js";import"./PressResponder-BjRG4CYk.js";import"./useOverlayTriggerState-_3rNuFLY.js";import"./DismissButton-BaTbkvC9.js";import"./createLucideIcon-DjmUzaoT.js";import"./RangeCalendar-DRLwEQig.js";import"./Heading-CTHypeMA.js";import"./chevron-right-DAk5v0C9.js";import"./Calendar-lHuQ-urx.js";const Et={component:m,title:"Components/DatePicker",tags:["autodocs"],args:{label:"Välj datum",description:"Beskrivning"},parameters:{a11y:{config:{rules:[{id:"color-contrast",selector:'[data-placeholder="true"]',enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},r={},o={args:{label:"Välj datum och tid",description:"YYYY-MM-DD HH-MM-SS",granularity:"second"}},s={args:{isRequired:!0,errorMessage:"Var god ange ett datum"},tags:["!dev"],render:e=>a.jsxs("form",{children:[a.jsx(m,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:n,args:{errorMessage:x}})=>{await n("it should show an error message if submitted empty",async()=>{await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Enter]"),f(e.getByText(x)).toBeInTheDocument()})}},i={args:{isRequired:!0,validate:({year:e})=>e===new Date().getFullYear()?"Var god välj ett annat år":!0},tags:["!dev"],render:e=>a.jsxs("form",{children:[a.jsx(m,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:n})=>{await n("it should show a custom error message if invalid",async()=>{await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Enter]"),await t.keyboard("[Enter]"),await t.tab(),f(e.getByText("Var god välj ett annat år")).toBeInTheDocument()})}};var p,u,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(c=(u=r.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var d,l,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Välj datum och tid',
    description: 'YYYY-MM-DD HH-MM-SS',
    granularity: 'second'
  }
}`,...(g=(l=o.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var b,w,y;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(y=(w=s.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var v,h,E;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(E=(h=i.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};const ft=["Primary","WithTime","Required","CustomValiation"];export{i as CustomValiation,r as Primary,s as Required,o as WithTime,ft as __namedExportsOrder,Et as default};
