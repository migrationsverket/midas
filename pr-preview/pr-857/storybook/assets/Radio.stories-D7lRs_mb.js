import{j as a}from"./iframe-DyJhOIHu.js";import{a as r,R as h,s as b}from"./Radio-BUEzPzWZ.js";import"./preload-helper-Dp1pzeXC.js";import"./Group-CQJ1xHu9.js";import"./utils-Ca8nIy98.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-3N_6QbD3.js";import"./index-tl4Jvvuo.js";import"./index-aWjYnd8Q.js";import"./FieldError-BkVou7by.js";import"./Text-D5vDhVRF.js";import"./clsx-Ciqy0D92.js";import"./Text-kHFKq75r.js";import"./Form-D1xau6q0.js";import"./useFormValidation-CzwckofQ.js";import"./Button-Bsgw5T0o.js";import"./Hidden-H7XPsmwy.js";import"./useLabels-Cxi1wSiA.js";import"./useButton-CtUYowCd.js";import"./FocusScope-BqV7y34N.js";import"./useField-n_m2f531.js";import"./VisuallyHidden-Bxbskn0N.js";import"./useControlledState-CJU9zzWn.js";import"./Label-gKo8_KpF.js";import"./Dialog-BcHtyDRT.js";import"./RSPContexts-BvHXGb4p.js";import"./OverlayArrow-KP5jF91M.js";import"./useResizeObserver-wt0qdos0.js";import"./Collection-WRtG8jX3.js";import"./index-ezulmnkY.js";import"./context-CdgczMNG.js";import"./SelectionManager-uFcDfZct.js";import"./useEvent-CSJQCX0i.js";import"./scrollIntoView-Dsrcj58z.js";import"./useDescription-D9p7SlLj.js";import"./Separator-CDugrJIa.js";import"./PressResponder-5_STBrKY.js";import"./useLocalizedStringFormatter-Cj8WdTyX.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./useLocalizedStringFormatter-DlKQknEj.js";import"./Button-BY1nz12H.js";import"./Button.module-DRhvPh0f.js";import"./x-DloEspXG.js";import"./createLucideIcon-BtIafmwO.js";import"./Heading-Csxe-U6K.js";import"./info-6YIMyZIh.js";import"./Popover-DQ8ntQya.js";const{expect:o,userEvent:t}=__STORYBOOK_MODULE_TEST__,_e={title:"Components/Radio",component:h,subcomponents:{Radio:r},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},F=["Äpple","Banan","Kiwi","Apelsin"],u=F.map(e=>a.jsx(r,{value:e,id:e.toLowerCase(),children:e},e)),L=[a.jsx(r,{value:"banan",children:"Banan"},"radio-banan"),a.jsx(r,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),a.jsx(r,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],n={args:{label:"Frukt",description:"Välj en frukt",children:F.map(e=>a.jsx(r,{value:e,id:e.toLowerCase(),className:"test-radio-class",children:e},e)),className:"test-class"},play:async({canvas:e,step:s,args:g})=>{await s("it should preserve its classNames when being passed new ones",async()=>{const H=e.getByRole("radiogroup"),q=e.getByRole("group").childNodes;await o(H).toHaveClass(b.radioGroup,g.className),q.forEach(async z=>{await o(z).toHaveClass(b.radio,"test-radio-class")})})}},i={args:{children:u,isDisabled:!0}},l={args:{children:L}},p={args:{children:u,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},d={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:u,isRequired:!0},render:e=>a.jsxs("form",{children:[a.jsx(h,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:s,args:g})=>{await s("should show a validation error message if the user submitted without selecting anything",async()=>{await t.tab(),await t.tab(),await t.keyboard("[Enter]"),o(e.getByRole("radiogroup")).toBeInvalid(),o(e.getByText(g.errorMessage)).toBeInTheDocument()})}},c={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:u,errorMessage:void 0,validate:e=>e!=null&&e.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:e=>a.jsxs("form",{children:[a.jsx(h,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:s})=>{await s("it should show the custom error message if the constraints was not satisfied",async()=>{await t.tab(),await t.keyboard("[Enter]"),await t.tab(),await t.keyboard("[Enter]"),o(e.getByText("Inga äpplen är tillåtna")).toBeInTheDocument()})}},m={args:{...n.args,children:a.jsxs(a.Fragment,{children:[a.jsx(r,{value:"apple",children:"Äpple"},"radio-apple"),a.jsx(r,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};var y,v,w;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Frukt',
    description: 'Välj en frukt',
    children: fruits.map(fruit => <Radio key={fruit} value={fruit} id={fruit.toLowerCase()} className='test-radio-class'>
        {fruit}
      </Radio>),
    className: 'test-class'
  },
  play: async ({
    canvas,
    step,
    args
  }) => {
    await step('it should preserve its classNames when being passed new ones', async () => {
      const radioGroup = canvas.getByRole('radiogroup');
      const radios = canvas.getByRole('group').childNodes;
      await expect(radioGroup).toHaveClass(styles.radioGroup, args.className as string);
      radios.forEach(async radio => {
        await expect(radio).toHaveClass(styles.radio, 'test-radio-class');
      });
    });
  }
}`,...(w=(v=n.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var f,x,k;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: items,
    isDisabled: true
  }
}`,...(k=(x=i.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var j,R,B;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: radioItemsOneDisabled
  }
}`,...(B=(R=l.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var E,I,D;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: items,
    isInvalid: true,
    errorMessage: 'Det här stämmer inte!'
  }
}`,...(D=(I=p.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var S,N,T;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    label: 'Frukt',
    description: 'Välj en frukt',
    children: items,
    isRequired: true
  },
  render: args => <form>
      <RadioGroup {...args} />
      <button type='submit'>Submit</button>
    </form>,
  play: async ({
    canvas,
    step,
    args
  }) => {
    await step('should show a validation error message if the user submitted without selecting anything', async () => {
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.keyboard('[Enter]');
      expect(canvas.getByRole('radiogroup')).toBeInvalid();
      expect(canvas.getByText(args.errorMessage as string)).toBeInTheDocument();
    });
  }
}`,...(T=(N=d.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var C,V,O;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    label: 'Frukt',
    description: 'Välj en frukt',
    children: items,
    errorMessage: undefined,
    validate: value => value?.includes('Äpple') ? 'Inga äpplen är tillåtna' : true
  },
  render: args => <form>
      <RadioGroup {...args} />
      <button type='submit'>Submit</button>
    </form>,
  play: async ({
    canvas,
    step
  }) => {
    await step('it should show the custom error message if the constraints was not satisfied', async () => {
      await userEvent.tab();
      await userEvent.keyboard('[Enter]');
      await userEvent.tab();
      await userEvent.keyboard('[Enter]');
      expect(canvas.getByText('Inga äpplen är tillåtna')).toBeInTheDocument();
    });
  }
}`,...(O=(V=c.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};var G,M,_;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    children: <>
        <Radio key='radio-apple' value='apple'>
          Äpple
        </Radio>
        <Radio key='radio-banan' value='banan'>
          Banan
        </Radio>
      </>,
    orientation: 'horizontal'
  }
}`,...(_=(M=m.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};const Fe=["Normal","Disabled","OneItemDisabled","Invalid","Required","CustomValidation","Horizontal"];export{c as CustomValidation,i as Disabled,m as Horizontal,p as Invalid,n as Normal,l as OneItemDisabled,d as Required,Fe as __namedExportsOrder,_e as default};
