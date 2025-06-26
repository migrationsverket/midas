import{j as E}from"./jsx-runtime-BYYWji4R.js";import{S as h}from"./SearchField-DfyQ_Yn9.js";import{f as p,u as a,e as t}from"./index-CqmFxPum.js";import{s as H}from"./modes-BX-MOWoB.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./TextField.module-C33Y04O9.js";import"./clsx-B-dksMZM.js";import"./useControlledState-H1tiOFpU.js";import"./utils-BLyg3OOq.js";import"./useLocalizedStringFormatter-TrhiTCnH.js";import"./context-d6PNTTSe.js";import"./useTextField-Bz4YJk8U.js";import"./useFocusRing-eGNMqT99.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./useFormValidation-Cwkq_bn0.js";import"./useField-BBXNKLtY.js";import"./Button-D5YfTa-t.js";import"./Hidden-BC9qER92.js";import"./useButton-rs5PgjfN.js";import"./search-CU-MzbtL.js";import"./createLucideIcon-DQK9Z80p.js";import"./Button-BJdOFndd.js";import"./Button.module-AG3JZ-l4.js";import"./x-BaIpobvV.js";import"./FieldError-Bc4GcTNT.js";import"./Text-w6ZeLcO4.js";import"./Text-ObKd9RkE.js";const re={component:h,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered",chromatic:{modes:H}},args:{buttonText:"Sök",errorPosition:"top"},render:(e,{globals:{size:r}})=>E.jsx(h,{...e,size:r})},s={args:{placeholder:"Sök efter en person",onChange:p(),onSubmit:p()},play:async({canvas:e,step:r,globals:{size:n},args:{onChange:o,onSubmit:d,buttonText:m}})=>{await r("it should be possible to submit a search string using only the keyboard",async()=>{await a.tab(),await a.keyboard("hello"),await a.keyboard("[Enter]"),t(o).toHaveBeenCalledWith("hello"),t(d).toHaveBeenCalledWith("hello")}),await r("it should be possible to submit a search string using the mouse",async()=>{await a.tab(),await a.keyboard("hello"),await a.click(e.getByText(m)),t(o).toHaveBeenCalledWith("hello"),t(d).toHaveBeenCalledWith("hello")}),await r("it should change size according to size prop",async()=>{await t(e.getByRole("searchbox")).toHaveStyle({height:n==="large"?"48px":"40px"}),await t(e.getByRole("button",{name:m})).toHaveStyle({height:n==="large"?"48px":"40px"})})}},i={args:{placeholder:'Sök efter "secret"',validate:e=>e==="secret"?"Sök inte efter hemligheter":!0,onChange:p(),onSubmit:p()},play:async({canvas:e,step:r,args:{onChange:n,onSubmit:o}})=>{await r("it should give a validation error if the user entered an unpermitted text",async()=>{await a.tab(),await a.keyboard("secret"),await a.tab(),await a.keyboard("[Enter]"),t(n).toHaveBeenCalledWith("secret"),t(o).not.toHaveBeenCalled(),t(e.getByText("Sök inte efter hemligheter")).toBeInTheDocument()})}},l={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"},play:async({canvas:e,step:r,args:{placeholder:n,errorMessage:o}})=>{await r("it should be invalid and show the custom message",async()=>{t(e.getByLabelText(n)).toBeInvalid(),t(e.getByText(o)).toBeInTheDocument()})}},c={args:{placeholder:"Sök efter dokument",isDisabled:!0}};var g,u,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter en person',
    onChange: fn(),
    onSubmit: fn()
  },
  play: async ({
    canvas,
    step,
    globals: {
      size
    },
    args: {
      onChange,
      onSubmit,
      buttonText
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
  }
}`,...(b=(u=s.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var y,v,x;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(x=(v=i.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var w,k,S;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(S=(k=l.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var B,f,C;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter dokument',
    isDisabled: true
  }
}`,...(C=(f=c.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const ne=["Primary","CustomValidation","Invalid","Disabled"];export{i as CustomValidation,c as Disabled,l as Invalid,s as Primary,ne as __namedExportsOrder,re as default};
