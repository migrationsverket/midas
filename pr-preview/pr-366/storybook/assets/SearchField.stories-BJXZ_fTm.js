import{S as w}from"./SearchField-DfwrC0n3.js";import{f as c,u as e,e as t}from"./index-DtSMq7G1.js";import"./jsx-runtime-DtgEGaVE.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./TextField.module-ewMUXt43.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DGyHFLi9.js";import"./utils-C4wbeGu1.js";import"./useLocalizedStringFormatter-DFsWMtKh.js";import"./context-gxVqox2x.js";import"./useTextField-CPdDRbKg.js";import"./useFocusRing-BPh1BF7L.js";import"./index-cpIEhwLo.js";import"./filterDOMProps-BSfnXAP7.js";import"./useFormValidation-CE6QEibh.js";import"./useField-jnpLLrbi.js";import"./useLabel-Bdg4Lht-.js";import"./useFocusable-BNsiIlBy.js";import"./createLucideIcon-8wDOqnHv.js";import"./Button-QLOjaOhp.js";import"./Button-AXOEyd3Z.js";import"./ProgressBar-DVVijuUB.js";import"./Label-BXmCKTLy.js";import"./Hidden-DizQ9ce0.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./x-Cu6J0Y2u.js";const U={component:w,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök"}},s={args:{placeholder:"Sök efter en person",onChange:c(),onSubmit:c()},play:async({canvas:a,step:n,args:{onChange:r,onSubmit:o,buttonText:k}})=>{await n("it should be possible to submit a search string using only the keyboard",async()=>{await e.tab(),await e.keyboard("hello"),await e.keyboard("[Enter]"),t(r).toHaveBeenCalledWith("hello"),t(o).toHaveBeenCalledWith("hello")}),await n("it should be possible to submit a search string using the mouse",async()=>{await e.tab(),await e.keyboard("hello"),await e.click(a.getByText(k)),t(r).toHaveBeenCalledWith("hello"),t(o).toHaveBeenCalledWith("hello")})}},i={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0,onChange:c(),onSubmit:c()},play:async({canvas:a,step:n,args:{onChange:r,onSubmit:o}})=>{await n("it should give a validation error if the user entered an unpermitted text",async()=>{await e.tab(),await e.keyboard("secret"),await e.tab(),await e.keyboard("[Enter]"),t(r).toHaveBeenCalledWith("secret"),t(o).not.toHaveBeenCalled(),t(a.getByText("Sök inte efter hemligheter")).toBeInTheDocument()})}},l={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"},play:async({canvas:a,step:n,args:{placeholder:r,errorMessage:o}})=>{await n("it should be invalid and show the custom message",async()=>{t(a.getByLabelText(r)).toBeInvalid(),t(a.getByText(o)).toBeInTheDocument()})}};var p,m,d;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter en person',
    onChange: fn(),
    onSubmit: fn()
  },
  play: async ({
    canvas,
    step,
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
  }
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var h,u,g;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(g=(u=i.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var b,v,y;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(y=(v=l.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const X=["Primary","CustomValidation","Invalid"];export{i as CustomValidation,l as Invalid,s as Primary,X as __namedExportsOrder,U as default};
