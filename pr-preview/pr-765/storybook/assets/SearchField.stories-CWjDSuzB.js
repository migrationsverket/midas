import{S as H,s as T}from"./SearchField-Omb4UHuO.js";import{f as p,u as a,e}from"./index-Q7OVwvWC.js";import"./jsx-runtime-BYYWji4R.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./TextField.module-C33Y04O9.js";import"./clsx-B-dksMZM.js";import"./useControlledState-H1tiOFpU.js";import"./utils-RHx87K0F.js";import"./SSRProvider-BhYbDCf7.js";import"./useLocalizedStringFormatter-DiUIqqhg.js";import"./context-zNjZoWML.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useTextField-BtgNBGWN.js";import"./useFocusRing-zhkOjX4v.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./useFormValidation-DmuZGU-W.js";import"./useField-C9GdkJOV.js";import"./Button-v_l_ujRb.js";import"./Hidden-BC9qER92.js";import"./useLabels-FEgier_d.js";import"./useButton-DQcVpLGQ.js";import"./search-CgwdmG6v.js";import"./createLucideIcon-uZw3gxGR.js";import"./Button-DfVhI_5H.js";import"./Button.module-DKVuWS4g.js";import"./x-Dz2R9y6b.js";import"./useLocalizedStringFormatter-9M_dEwOo.js";import"./FieldError-BjFojtrn.js";import"./Text-CZ6zcozL.js";import"./Text-BgvnLaBz.js";const ie={component:H,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},s={args:{placeholder:"Sök efter en person",onChange:p(),onSubmit:p()},play:async({canvas:t,canvasElement:o,step:n,args:{onChange:r,onSubmit:m,buttonText:d,className:E,size:h}})=>{await n("it should be possible to submit a search string using only the keyboard",async()=>{await a.tab(),await a.keyboard("hello"),await a.keyboard("[Enter]"),e(r).toHaveBeenCalledWith("hello"),e(m).toHaveBeenCalledWith("hello")}),await n("it should be possible to submit a search string using the mouse",async()=>{await a.tab(),await a.keyboard("hello"),await a.click(t.getByText(d)),e(r).toHaveBeenCalledWith("hello"),e(m).toHaveBeenCalledWith("hello")}),await n("it should change size according to size prop",async()=>{await e(t.getByRole("searchbox")).toHaveStyle({height:h==="large"?"48px":"40px"}),await e(t.getByRole("button",{name:d})).toHaveStyle({height:h==="large"?"48px":"40px"})}),await n("it should accept custom classNames",async()=>{await e(o.querySelector("div")).toHaveClass(T.container,E)})}},i={args:{placeholder:'Sök efter "secret"',validate:t=>t==="secret"?"Sök inte efter hemligheter":!0,onChange:p(),onSubmit:p()},play:async({canvas:t,step:o,args:{onChange:n,onSubmit:r}})=>{await o("it should give a validation error if the user entered an unpermitted text",async()=>{await a.tab(),await a.keyboard("secret"),await a.tab(),await a.keyboard("[Enter]"),e(n).toHaveBeenCalledWith("secret"),e(r).not.toHaveBeenCalled(),e(t.getByText("Sök inte efter hemligheter")).toBeInTheDocument()})}},l={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"},play:async({canvas:t,step:o,args:{placeholder:n,errorMessage:r}})=>{await o("it should be invalid and show the custom message",async()=>{e(t.getByLabelText(n)).toBeInvalid(),e(t.getByText(r)).toBeInTheDocument()})}},c={args:{placeholder:"Sök efter dokument",isDisabled:!0}};var u,g,y;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter en person',
    onChange: fn(),
    onSubmit: fn()
  },
  play: async ({
    canvas,
    canvasElement,
    step,
    args: {
      onChange,
      onSubmit,
      buttonText,
      className,
      size
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
}`,...(y=(g=s.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var v,b,w;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(w=(b=i.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var x,k,S;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(C=(f=c.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const le=["Primary","CustomValidation","Invalid","Disabled"];export{i as CustomValidation,c as Disabled,l as Invalid,s as Primary,le as __namedExportsOrder,ie as default};
