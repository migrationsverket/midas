import{S as E,s as T}from"./SearchField-0bIhPeGm.js";import"./iframe-D_nglXlK.js";import"./preload-helper-Dp1pzeXC.js";import"./TextField.module-Ddb2XBAw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DUHRkhL7.js";import"./utils-eEgmu3qc.js";import"./useLocalizedStringFormatter-C7rktcMS.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useTextField-Z62nWvqX.js";import"./useFocusRing-gTw7NsWc.js";import"./index-DTwlmn-p.js";import"./index-JHlRV5wf.js";import"./useFormValidation-CJBudy52.js";import"./useField-B2mLiCDw.js";import"./Button-uo7UjKzN.js";import"./Hidden-CdGT6bTj.js";import"./useLabels-CeihvMqc.js";import"./useButton-BSSS9gTf.js";import"./search-CLaCT-1W.js";import"./createLucideIcon-3Mgnj-Sn.js";import"./Button-BGETeqp7.js";import"./Button.module-CcWMkJAG.js";import"./x-BGTX4g33.js";import"./useLocalizedStringFormatter-BugTbIZx.js";import"./FieldError-CNnQO3QH.js";import"./Text-BqJU6zdf.js";import"./Text-BMIa5EIR.js";const{expect:t,fn:m,userEvent:e}=__STORYBOOK_MODULE_TEST__,re={component:E,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},o={args:{placeholder:"Sök efter en person",onChange:m(),onSubmit:m()},play:async({canvas:a,canvasElement:s,step:r,args:{onChange:n,onSubmit:d,buttonText:f,className:C}})=>{await r("it should be possible to submit a search string using only the keyboard",async()=>{await e.tab(),await e.keyboard("hello"),await e.keyboard("[Enter]"),t(n).toHaveBeenCalledWith("hello"),t(d).toHaveBeenCalledWith("hello")}),await r("it should be possible to submit a search string using the mouse",async()=>{await e.tab(),await e.keyboard("hello"),await e.click(a.getByText(f)),t(n).toHaveBeenCalledWith("hello"),t(d).toHaveBeenCalledWith("hello")}),await r("it should accept custom classNames",async()=>{await t(s.querySelector("div")).toHaveClass(T.container,C)})}},i={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0,onChange:m(),onSubmit:m()},play:async({canvas:a,step:s,args:{onChange:r,onSubmit:n}})=>{await s("it should give a validation error if the user entered an unpermitted text",async()=>{await e.tab(),await e.keyboard("secret"),await e.tab(),await e.keyboard("[Enter]"),t(r).toHaveBeenCalledWith("secret"),t(n).not.toHaveBeenCalled(),t(a.getByText("Sök inte efter hemligheter")).toBeInTheDocument()})}},l={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"},play:async({canvas:a,step:s,args:{placeholder:r,errorMessage:n}})=>{await s("it should be invalid and show the custom message",async()=>{t(a.getByLabelText(r)).toBeInvalid(),t(a.getByText(n)).toBeInTheDocument()})}},c={args:{placeholder:"Sök efter dokument",isDisabled:!0}};var p,u,h;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
    await step('it should accept custom classNames', async () => {
      await expect(canvasElement.querySelector('div')).toHaveClass(styles.container, className as string);
    });
  }
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,v,b;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(b=(v=i.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var y,k,w;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(w=(k=l.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var S,B,x;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter dokument',
    isDisabled: true
  }
}`,...(x=(B=c.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};const ne=["Primary","CustomValidation","Invalid","Disabled"];export{i as CustomValidation,c as Disabled,l as Invalid,o as Primary,ne as __namedExportsOrder,re as default};
