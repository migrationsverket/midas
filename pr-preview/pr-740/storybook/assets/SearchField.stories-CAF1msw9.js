import{j as T}from"./jsx-runtime-BYYWji4R.js";import{S as u,s as I}from"./SearchField-tr1gA1Rg.js";import{f as p,u as a,e as t}from"./index-Q7OVwvWC.js";import{s as W}from"./modes-BX-MOWoB.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./TextField.module-C33Y04O9.js";import"./clsx-B-dksMZM.js";import"./useControlledState-H1tiOFpU.js";import"./utils-RHx87K0F.js";import"./SSRProvider-BhYbDCf7.js";import"./useLocalizedStringFormatter-DiUIqqhg.js";import"./context-zNjZoWML.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useTextField-0IVN8eZA.js";import"./useFocusRing-zhkOjX4v.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./useFormValidation-DmuZGU-W.js";import"./useField-GoO-rf0S.js";import"./Button-BnGcr9X4.js";import"./Hidden-BC9qER92.js";import"./useLabels-FEgier_d.js";import"./useButton-DQcVpLGQ.js";import"./search-CgwdmG6v.js";import"./createLucideIcon-uZw3gxGR.js";import"./Button-HXME-i5Z.js";import"./Button.module-Bmb634uG.js";import"./x-Dz2R9y6b.js";import"./useLocalizedStringFormatter-9M_dEwOo.js";import"./FieldError-BjFojtrn.js";import"./Text-CZ6zcozL.js";import"./Text-BgvnLaBz.js";const pe={component:u,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered",chromatic:{modes:W}},args:{buttonText:"Sök",errorPosition:"top",className:"test-class"},render:(e,{globals:{size:r}})=>T.jsx(u,{...e,size:r})},o={args:{placeholder:"Sök efter en person",onChange:p(),onSubmit:p()},play:async({canvas:e,canvasElement:r,step:n,globals:{size:s},args:{onChange:m,onSubmit:d,buttonText:h,className:H}})=>{await n("it should be possible to submit a search string using only the keyboard",async()=>{await a.tab(),await a.keyboard("hello"),await a.keyboard("[Enter]"),t(m).toHaveBeenCalledWith("hello"),t(d).toHaveBeenCalledWith("hello")}),await n("it should be possible to submit a search string using the mouse",async()=>{await a.tab(),await a.keyboard("hello"),await a.click(e.getByText(h)),t(m).toHaveBeenCalledWith("hello"),t(d).toHaveBeenCalledWith("hello")}),await n("it should change size according to size prop",async()=>{await t(e.getByRole("searchbox")).toHaveStyle({height:s==="large"?"48px":"40px"}),await t(e.getByRole("button",{name:h})).toHaveStyle({height:s==="large"?"48px":"40px"})}),await n("it should accept custom classNames",async()=>{await t(r.querySelector("div")).toHaveClass(I.container,H)})}},i={args:{placeholder:'Sök efter "secret"',validate:e=>e==="secret"?"Sök inte efter hemligheter":!0,onChange:p(),onSubmit:p()},play:async({canvas:e,step:r,args:{onChange:n,onSubmit:s}})=>{await r("it should give a validation error if the user entered an unpermitted text",async()=>{await a.tab(),await a.keyboard("secret"),await a.tab(),await a.keyboard("[Enter]"),t(n).toHaveBeenCalledWith("secret"),t(s).not.toHaveBeenCalled(),t(e.getByText("Sök inte efter hemligheter")).toBeInTheDocument()})}},l={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"},play:async({canvas:e,step:r,args:{placeholder:n,errorMessage:s}})=>{await r("it should be invalid and show the custom message",async()=>{t(e.getByLabelText(n)).toBeInvalid(),t(e.getByText(s)).toBeInTheDocument()})}},c={args:{placeholder:"Sök efter dokument",isDisabled:!0}};var g,y,b;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter en person',
    onChange: fn(),
    onSubmit: fn()
  },
  play: async ({
    canvas,
    canvasElement,
    step,
    globals: {
      size
    },
    args: {
      onChange,
      onSubmit,
      buttonText,
      className
    }
  }) => {
    await step('it should be possible to submit a search string using only the keyboard', async () => {
      await userEvent.tab();
      await userEvent.keyboard('hello');
      await userEvent.keyboard('[Enter]');
      expect(onChange).toHaveBeenCalledWith('hello');
      expect(onSubmit).toHaveBeenCalledWith('hello');
    });
    await step('it should be possible to submit a search string using the mouse', async () => {
      await userEvent.tab();
      await userEvent.keyboard('hello');
      await userEvent.click(canvas.getByText(buttonText as string));
      expect(onChange).toHaveBeenCalledWith('hello');
      expect(onSubmit).toHaveBeenCalledWith('hello');
    });
    await step('it should change size according to size prop', async () => {
      await expect(canvas.getByRole('searchbox')).toHaveStyle({
        height: size === 'large' ? '48px' : '40px'
      });
      await expect(canvas.getByRole('button', {
        name: buttonText
      })).toHaveStyle({
        height: size === 'large' ? '48px' : '40px'
      });
    });
    await step('it should accept custom classNames', async () => {
      await expect(canvasElement.querySelector('div')).toHaveClass(styles.container, className as string);
    });
  }
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var v,x,w;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter "secret"',
    validate: (value: string) => value === 'secret' ? 'Sök inte efter hemligheter' : true,
    onChange: fn(),
    onSubmit: fn()
  },
  play: async ({
    canvas,
    step,
    args: {
      onChange,
      onSubmit
    }
  }) => {
    await step('it should give a validation error if the user entered an unpermitted text', async () => {
      await userEvent.tab();
      await userEvent.keyboard('secret');
      await userEvent.tab();
      await userEvent.keyboard('[Enter]');
      expect(onChange).toHaveBeenCalledWith('secret');
      expect(onSubmit).not.toHaveBeenCalled();
      expect(canvas.getByText('Sök inte efter hemligheter')).toBeInTheDocument();
    });
  }
}`,...(w=(x=i.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var k,S,B;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter dokument',
    isInvalid: true,
    errorMessage: 'Något gick fel, var god försök igen'
  },
  play: async ({
    canvas,
    step,
    args: {
      placeholder,
      errorMessage
    }
  }) => {
    await step('it should be invalid and show the custom message', async () => {
      expect(canvas.getByLabelText(placeholder as string)).toBeInvalid();
      expect(canvas.getByText(errorMessage as string)).toBeInTheDocument();
    });
  }
}`,...(B=(S=l.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var f,C,E;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter dokument',
    isDisabled: true
  }
}`,...(E=(C=c.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};const me=["Primary","CustomValidation","Invalid","Disabled"];export{i as CustomValidation,c as Disabled,l as Invalid,o as Primary,me as __namedExportsOrder,pe as default};
