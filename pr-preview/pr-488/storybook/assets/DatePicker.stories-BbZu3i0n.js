import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{D as d}from"./DatePicker-C2Obt5Ad.js";import{u as t,e as T}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-Co7pWk88.js";import"./utils-Dv9Ux5aE.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-6st-rJzm.js";import"./Label-Cr3pFc-x.js";import"./Hidden-lswqw32w.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-BAqrTMfP.js";import"./context-eceod8wW.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useButton-DFPcodtW.js";import"./usePress-DljlCKCj.js";import"./useFocusRing-CPQALXIu.js";import"./index-cpIEhwLo.js";import"./useFocusable-Cs9agisI.js";import"./DateField-DoiofYRN.js";import"./Form-BMyPeP3B.js";import"./Text-D0cNLqf0.js";import"./useFormValidation-BrFQy5aA.js";import"./Group-DITek4ZD.js";import"./Input-Dj8a3env.js";import"./useDateFormatter-BFH_ZwDc.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useControlledState-DGyHFLi9.js";import"./FocusScope-C0EWTSbR.js";import"./useDescription-TyCFs068.js";import"./useField-BWvtu4tG.js";import"./useLocalizedStringFormatter-DA8E_9Dc.js";import"./getScrollParent-CrrBdd7g.js";import"./scrollIntoView-DzftQ5Hl.js";import"./useEvent-DnmuJhSu.js";import"./useFilter-DX9q-4uJ.js";import"./useCollator-CouJQU85.js";import"./Calendar.module-DkZouBMm.js";import"./RSPContexts-CeCCo7XS.js";import"./useUpdateEffect-DVcG7G3u.js";import"./VisuallyHidden-DiGk2ECL.js";import"./Dialog-4cOlkMge.js";import"./OverlayArrow-fkN0_ThZ.js";import"./Collection-B2SsLZVR.js";import"./index-DwWe6W7f.js";import"./Separator-CRX4oULg.js";import"./SelectionManager-2oMtjjZz.js";import"./ListKeyboardDelegate-CA_BFpv4.js";import"./useOverlayTriggerState-Bjtc1fMu.js";import"./PressResponder-BdSNFUtN.js";import"./useMenuTriggerState-D4kT7gee.js";import"./createLucideIcon-8wDOqnHv.js";import"./RangeCalendar-BfhrDSt-.js";import"./chevron-right-CjCwHShF.js";import"./Heading-DmTsGMz3.js";import"./Calendar-BULTyBXD.js";import"./Label-ClRk-i9L.js";import"./Text-BO1MQlio.js";import"./FieldError-BI5lou7e.js";const Ft={component:d,title:"Components/DatePicker",tags:["autodocs"],args:{label:"Välj datum",description:"Beskrivning",errorPosition:"top"},parameters:{a11y:{config:{rules:[{id:"color-contrast",selector:'[data-placeholder="true"]',enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={},o={args:{label:"Välj datum och tid",description:"YYYY-MM-DD HH-MM-SS",granularity:"second"}},s={args:{isDisabled:!0}},i={args:{isInvalid:!0,errorMessage:"Var god ange ett datum"}},n={args:{isRequired:!0,errorMessage:"Var god ange ett datum"},tags:["!dev","!autodocs"],render:r=>e.jsxs("form",{children:[e.jsx(d,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:r,step:p,args:{errorMessage:Y}})=>{await p("it should show an error message if submitted empty",async()=>{await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Enter]"),T(r.getByText(Y)).toBeInTheDocument()})}},m={args:{isRequired:!0,validate:({year:r})=>r===new Date().getFullYear()?"Var god välj ett annat år":!0},tags:["!dev","!autodocs"],render:r=>e.jsxs("form",{children:[e.jsx(d,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:r,step:p})=>{await p("it should show a custom error message if invalid",async()=>{await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Enter]"),await t.keyboard("[Enter]"),await t.tab(),T(r.getByText("Var god välj ett annat år")).toBeInTheDocument()})}};var u,c,l;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var g,b,w;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
