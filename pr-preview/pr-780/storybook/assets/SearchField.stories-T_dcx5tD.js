import{S as H,s as T}from"./SearchField-DZLW8zfa.js";import"./iframe-esvdJFfr.js";import"./preload-helper-Dp1pzeXC.js";import"./TextField.module-CBRvGQ7k.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D2MlztED.js";import"./utils-CA6cvJcn.js";import"./useLocalizedStringFormatter-DsuYda5r.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useTextField-DYwfpDTA.js";import"./useFocusRing-VPnEXuzQ.js";import"./index-Dor75QZH.js";import"./index-w_P7rb89.js";import"./useFormValidation-D1sBEd5H.js";import"./useField-Dx8Fw3cP.js";import"./Button-DhAk4_Yc.js";import"./Hidden-Bqx_ujhi.js";import"./useLabels-DQgkfLF4.js";import"./useButton-CupiQMID.js";import"./search-VU9wWB3y.js";import"./createLucideIcon-nwVrMw5a.js";import"./Button-DMBclqbI.js";import"./Button.module-DgYkWG2o.js";import"./x-D44o35Sp.js";import"./useLocalizedStringFormatter-CLJ56Mmw.js";import"./FieldError-BaINGyL-.js";import"./Text-C5kAi3KT.js";import"./Text-ekZXbZU3.js";const{expect:e,fn:p,userEvent:a}=__STORYBOOK_MODULE_TEST__,ne={component:H,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},o={args:{placeholder:"Sök efter en person",onChange:p(),onSubmit:p()},play:async({canvas:t,canvasElement:s,step:n,args:{onChange:r,onSubmit:d,buttonText:m,className:E,size:h}})=>{await n("it should be possible to submit a search string using only the keyboard",async()=>{await a.tab(),await a.keyboard("hello"),await a.keyboard("[Enter]"),e(r).toHaveBeenCalledWith("hello"),e(d).toHaveBeenCalledWith("hello")}),await n("it should be possible to submit a search string using the mouse",async()=>{await a.tab(),await a.keyboard("hello"),await a.click(t.getByText(m)),e(r).toHaveBeenCalledWith("hello"),e(d).toHaveBeenCalledWith("hello")}),await n("it should change size according to size prop",async()=>{await e(t.getByRole("searchbox")).toHaveStyle({height:h==="large"?"48px":"40px"}),await e(t.getByRole("button",{name:m})).toHaveStyle({height:h==="large"?"48px":"40px"})}),await n("it should accept custom classNames",async()=>{await e(s.querySelector("div")).toHaveClass(T.container,E)})}},i={args:{placeholder:'Sök efter "secret"',validate:t=>t==="secret"?"Sök inte efter hemligheter":!0,onChange:p(),onSubmit:p()},play:async({canvas:t,step:s,args:{onChange:n,onSubmit:r}})=>{await s("it should give a validation error if the user entered an unpermitted text",async()=>{await a.tab(),await a.keyboard("secret"),await a.tab(),await a.keyboard("[Enter]"),e(n).toHaveBeenCalledWith("secret"),e(r).not.toHaveBeenCalled(),e(t.getByText("Sök inte efter hemligheter")).toBeInTheDocument()})}},l={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"},play:async({canvas:t,step:s,args:{placeholder:n,errorMessage:r}})=>{await s("it should be invalid and show the custom message",async()=>{e(t.getByLabelText(n)).toBeInvalid(),e(t.getByText(r)).toBeInTheDocument()})}},c={args:{placeholder:"Sök efter dokument",isDisabled:!0}};var u,g,y;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var v,b,w;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(w=(b=i.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var x,S,k;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(k=(S=l.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var B,f,C;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter dokument',
    isDisabled: true
  }
}`,...(C=(f=c.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const re=["Primary","CustomValidation","Invalid","Disabled"];export{i as CustomValidation,c as Disabled,l as Invalid,o as Primary,re as __namedExportsOrder,ne as default};
