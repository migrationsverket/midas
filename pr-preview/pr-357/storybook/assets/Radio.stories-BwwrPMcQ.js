import{j as a}from"./jsx-runtime-CBDCb4rg.js";import{R as g,s as M,a as m}from"./Radio-DYNoguc5.js";import{e as u,u as t}from"./index-iZ8NAl3x.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Group-FOoQ2kH0.js";import"./utils-CyugoGNF.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-BODiw1iP.js";import"./index-BAyGJXOV.js";import"./Form-B3zPBtl7.js";import"./Text-DnyJpj_W.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormValidation-B1oMw7Lv.js";import"./Label-ByRA_SKm.js";import"./Hidden-B6il94lO.js";import"./useControlledState-BgxdDqm0.js";import"./FocusScope-Ded37Rd9.js";import"./useField-YKOABOJo.js";import"./useLabel-DbJIstGE.js";import"./context-BwmME58u.js";import"./useFocusable-CqLabGgp.js";import"./VisuallyHidden-Cx1OydyR.js";import"./TextField-l2NqUrvY.js";import"./Input-nkIej56h.js";import"./TextField-B4YrLK74.js";import"./useTextField-DXYVxhqA.js";import"./TextField.module-D2y0i4Dw.js";import"./Button-BUv4L4FB.js";import"./Button-iL9IzHG8.js";import"./ProgressBar-B2jw0c1b.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";const he={title:"Components/Radio",component:g,tags:["autodocs"],args:{label:"Group label",errorMessage:"Du måste välja en frukt?"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},C=["Äpple","Banan","Kiwi","Apelsin"],s=C.map(e=>a.jsx(m,{value:e,id:e.toLowerCase(),children:e},e)),F=[a.jsx(m,{value:"banan",children:"Banan"},"radio-banan"),a.jsx(m,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),a.jsx(m,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],i={args:{label:"Frukt",description:"Välj en frukt",children:s,className:"test-class"},play:async({canvas:e,step:r,args:n})=>{await r("it should preserve its classNames when being passed new ones",async()=>{const V=e.getByLabelText(n.label);u(V).toHaveClass(M.radioGroup,n.className)})}},o={args:{children:s,isDisabled:!0}},l={args:{children:F}},p={args:{children:s,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},d={tags:["!dev"],args:{label:"Frukt",description:"Välj en frukt",children:s,isRequired:!0},render:e=>a.jsxs("form",{children:[a.jsx(g,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:r,args:n})=>{await r("should show a validation error message if the user submitted without selecting anything",async()=>{await t.tab(),await t.tab(),await t.keyboard("[Enter]"),u(e.getByRole("radiogroup")).toBeInvalid(),u(e.getByText(n.errorMessage)).toBeInTheDocument()})}},c={tags:["!dev"],args:{label:"Frukt",description:"Välj en frukt",children:s,errorMessage:void 0,validate:e=>e!=null&&e.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:e=>a.jsxs("form",{children:[a.jsx(g,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:r})=>{await r("it should show the custom error message if the constraints was not satisfied",async()=>{await t.tab(),await t.keyboard("[Enter]"),await t.tab(),await t.keyboard("[Enter]"),u(e.getByText("Inga äpplen är tillåtna")).toBeInTheDocument()})}};var b,h,y;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Frukt',
    description: 'Välj en frukt',
    children: items,
    className: 'test-class'
  },
  play: async ({
    canvas,
    step,
    args
  }) => {
    await step('it should preserve its classNames when being passed new ones', async () => {
      const radioGroup = canvas.getByLabelText(args.label as string);
      expect(radioGroup).toHaveClass(styles.radioGroup, args.className as string);
    });
  }
}`,...(y=(h=i.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var v,w,x;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: items,
    isDisabled: true
  }
}`,...(x=(w=o.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var f,k,j;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: radioItemsOneDisabled
  }
}`,...(j=(k=l.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var I,D,B;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: items,
    isInvalid: true,
    errorMessage: 'Det här stämmer inte!'
  }
}`,...(B=(D=p.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var E,R,T;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['!dev'],
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
}`,...(T=(R=d.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var S,G,N;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['!dev'],
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
}`,...(N=(G=c.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};const ye=["Normal","Disabled","OneItemDisabled","Invalid","Required","CustomValidation"];export{c as CustomValidation,o as Disabled,p as Invalid,i as Normal,l as OneItemDisabled,d as Required,ye as __namedExportsOrder,he as default};
