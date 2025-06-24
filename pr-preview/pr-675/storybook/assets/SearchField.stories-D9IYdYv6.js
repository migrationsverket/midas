import{j as E}from"./jsx-runtime-BYYWji4R.js";import{S as h}from"./SearchField-B-XFz9lK.js";import{f as c,u as a,e as t}from"./index-CqmFxPum.js";import{s as H}from"./modes-BX-MOWoB.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./TextField.module-C33Y04O9.js";import"./clsx-B-dksMZM.js";import"./useControlledState-H1tiOFpU.js";import"./utils-oc6myKvD.js";import"./useLocalizedStringFormatter-DqnULi-B.js";import"./context-BSqJJvai.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useTextField-CPl6LdnF.js";import"./useFocusRing-DUrskli4.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormValidation-Cv-fFL6t.js";import"./useField-aNJ8ypzk.js";import"./useLabel-Blgy_cRF.js";import"./useFocusable-tJD4A6lu.js";import"./search-CU-MzbtL.js";import"./createLucideIcon-DQK9Z80p.js";import"./Button-D0wYUA_w.js";import"./Button.module-AG3JZ-l4.js";import"./Button-BD6hc4wl.js";import"./ProgressBar-CQGqtZ9B.js";import"./Label-CpkHsAPL.js";import"./Hidden-BC9qER92.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useButton-Cqc6u4_f.js";import"./usePress-BfxC_TyQ.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./x-BaIpobvV.js";import"./FieldError-C31dJ6Xr.js";import"./Text-C8tPE3tt.js";import"./Text-Dpx6Gex-.js";const de={component:h,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered",chromatic:{modes:H}},args:{buttonText:"Sök",errorPosition:"top"},render:(e,{globals:{size:r}})=>E.jsx(h,{...e,size:r})},s={args:{placeholder:"Sök efter en person",onChange:c(),onSubmit:c()},play:async({canvas:e,step:r,globals:{size:o},args:{onChange:n,onSubmit:m,buttonText:d}})=>{await r("it should be possible to submit a search string using only the keyboard",async()=>{await a.tab(),await a.keyboard("hello"),await a.keyboard("[Enter]"),t(n).toHaveBeenCalledWith("hello"),t(m).toHaveBeenCalledWith("hello")}),await r("it should be possible to submit a search string using the mouse",async()=>{await a.tab(),await a.keyboard("hello"),await a.click(e.getByText(d)),t(n).toHaveBeenCalledWith("hello"),t(m).toHaveBeenCalledWith("hello")}),await r("it should change size according to size prop",async()=>{await t(e.getByRole("searchbox")).toHaveStyle({height:o==="large"?"48px":"40px"}),await t(e.getByRole("button",{name:d})).toHaveStyle({height:o==="large"?"48px":"40px"})})}},i={args:{placeholder:'Sök efter "secret"',validate:e=>e==="secret"?"Sök inte efter hemligheter":!0,onChange:c(),onSubmit:c()},play:async({canvas:e,step:r,args:{onChange:o,onSubmit:n}})=>{await r("it should give a validation error if the user entered an unpermitted text",async()=>{await a.tab(),await a.keyboard("secret"),await a.tab(),await a.keyboard("[Enter]"),t(o).toHaveBeenCalledWith("secret"),t(n).not.toHaveBeenCalled(),t(e.getByText("Sök inte efter hemligheter")).toBeInTheDocument()})}},l={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"},play:async({canvas:e,step:r,args:{placeholder:o,errorMessage:n}})=>{await r("it should be invalid and show the custom message",async()=>{t(e.getByLabelText(o)).toBeInvalid(),t(e.getByText(n)).toBeInTheDocument()})}},p={args:{placeholder:"Sök efter dokument",isDisabled:!0}};var g,u,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(S=(k=l.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var B,f,C;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter dokument',
    isDisabled: true
  }
}`,...(C=(f=p.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const he=["Primary","CustomValidation","Invalid","Disabled"];export{i as CustomValidation,p as Disabled,l as Invalid,s as Primary,he as __namedExportsOrder,de as default};
