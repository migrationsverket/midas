import{S as E,s as T}from"./SearchField-sWjb3Qfy.js";import"./iframe-Be0g_aJO.js";import"./preload-helper-Dp1pzeXC.js";import"./TextField.module-DjUItNl5.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B9P4hSlN.js";import"./utils-ddu2LZsb.js";import"./useLocalizedStringFormatter-D8VSbuPC.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useTextField-C05gcHD6.js";import"./useFocusRing-COr-n7Fx.js";import"./index-B0KwozC5.js";import"./index-BSeW_fek.js";import"./useFormValidation-kksduhUS.js";import"./useField-dMHmgJSJ.js";import"./Button-D8MC8HcS.js";import"./Hidden-DfyZdMIn.js";import"./useLabels-COtLsp3_.js";import"./useButton-C8AwPNN5.js";import"./search-CcN4Aplz.js";import"./createLucideIcon-DknQS7n1.js";import"./Button-WxyWdEj2.js";import"./Button.module-DRhvPh0f.js";import"./x-BYUcNGG5.js";import"./useLocalizedStringFormatter-CsXzxHpG.js";import"./FieldError-eyb4PAz4.js";import"./Text-jDSViAJL.js";import"./Text-Bvq6LOwS.js";const{expect:t,fn:p,userEvent:e}=__STORYBOOK_MODULE_TEST__,ne={component:E,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},o={args:{placeholder:"Sök efter en person",onChange:p(),onSubmit:p()},play:async({canvas:a,canvasElement:r,step:n,args:{onChange:s,onSubmit:d,buttonText:f,className:C}})=>{await n("it should be possible to submit a search string using only the keyboard",async()=>{await e.tab(),await e.keyboard("hello"),await e.keyboard("[Enter]"),t(s).toHaveBeenCalledWith("hello"),t(d).toHaveBeenCalledWith("hello")}),await n("it should be possible to submit a search string using the mouse",async()=>{await e.tab(),await e.keyboard("hello"),await e.click(a.getByText(f)),t(s).toHaveBeenCalledWith("hello"),t(d).toHaveBeenCalledWith("hello")}),await n("it should accept custom classNames",async()=>{await t(r.querySelector("div")).toHaveClass(T.container,C)})}},i={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0,onChange:p(),onSubmit:p()},play:async({canvas:a,step:r,args:{onChange:n,onSubmit:s}})=>{await r("it should give a validation error if the user entered an unpermitted text",async()=>{await e.tab(),await e.keyboard("secret"),await e.tab(),await e.keyboard("[Enter]"),t(n).toHaveBeenCalledWith("secret"),t(s).not.toHaveBeenCalled(),t(a.getByText("Sök inte efter hemligheter")).toBeInTheDocument()})}},l={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"},play:async({canvas:a,step:r,args:{placeholder:n,errorMessage:s}})=>{await r("it should be invalid and show the custom message",async()=>{t(a.getByLabelText(n)).toBeInvalid(),t(a.getByText(s)).toBeInTheDocument()})}},c={args:{placeholder:"Sök efter dokument",isDisabled:!0}};var m,u,h;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
      className
      // size
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

    // TODO: this test fails in forced colors mode

    // await step('it should change size according to size prop', async () => {
    //   await expect(canvas.getByRole('searchbox')).toHaveStyle({
    //     height: size === 'large' ? '48px' : '40px',
    //   })
    //   await expect(
    //     canvas.getByRole('button', { name: buttonText }),
    //   ).toHaveStyle({
    //     height: size === 'large' ? '48px' : '40px',
    //   })
    // })

    await step('it should accept custom classNames', async () => {
      await expect(canvasElement.querySelector('div')).toHaveClass(styles.container, className as string);
    });
  }
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,v,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(v=i.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var b,w,k;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(k=(w=l.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var x,S,B;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter dokument',
    isDisabled: true
  }
}`,...(B=(S=c.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};const se=["Primary","CustomValidation","Invalid","Disabled"];export{i as CustomValidation,c as Disabled,l as Invalid,o as Primary,se as __namedExportsOrder,ne as default};
