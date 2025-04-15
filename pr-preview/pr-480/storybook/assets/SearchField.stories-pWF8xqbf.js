import{S as x}from"./SearchField-B40uHh6O.js";import{f as p,u as e,e as t}from"./index-DtSMq7G1.js";import"./jsx-runtime-DtgEGaVE.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./TextField.module-BN8ZyQEf.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DGyHFLi9.js";import"./utils-fGMpyvF6.js";import"./useLocalizedStringFormatter-C9hzL5Oy.js";import"./context-gwlhO1hg.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useTextField-CRWtxm2p.js";import"./useFocusRing-CklmaPa3.js";import"./filterDOMProps-BSfnXAP7.js";import"./useFormValidation-tLTeCxiF.js";import"./useField-Dtc4qbuX.js";import"./useLabel-D9x7ijjo.js";import"./useFocusable-Cn0G9B-O.js";import"./search-C56AgnKs.js";import"./createLucideIcon-8wDOqnHv.js";import"./Button-DDYs4Nar.js";import"./Button-C6oo4-9j.js";import"./ProgressBar--YvcVoO5.js";import"./Label-DuUY1oNM.js";import"./Hidden-lswqw32w.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./usePress-D7qiRhp3.js";import"./index-cpIEhwLo.js";import"./x-Cu6J0Y2u.js";const ae={component:x,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top"}},s={args:{placeholder:"Sök efter en person",onChange:p(),onSubmit:p()},play:async({canvas:a,step:r,args:{onChange:n,onSubmit:o,buttonText:B}})=>{await r("it should be possible to submit a search string using only the keyboard",async()=>{await e.tab(),await e.keyboard("hello"),await e.keyboard("[Enter]"),t(n).toHaveBeenCalledWith("hello"),t(o).toHaveBeenCalledWith("hello")}),await r("it should be possible to submit a search string using the mouse",async()=>{await e.tab(),await e.keyboard("hello"),await e.click(a.getByText(B)),t(n).toHaveBeenCalledWith("hello"),t(o).toHaveBeenCalledWith("hello")})}},i={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0,onChange:p(),onSubmit:p()},play:async({canvas:a,step:r,args:{onChange:n,onSubmit:o}})=>{await r("it should give a validation error if the user entered an unpermitted text",async()=>{await e.tab(),await e.keyboard("secret"),await e.tab(),await e.keyboard("[Enter]"),t(n).toHaveBeenCalledWith("secret"),t(o).not.toHaveBeenCalled(),t(a.getByText("Sök inte efter hemligheter")).toBeInTheDocument()})}},l={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"},play:async({canvas:a,step:r,args:{placeholder:n,errorMessage:o}})=>{await r("it should be invalid and show the custom message",async()=>{t(a.getByLabelText(n)).toBeInvalid(),t(a.getByText(o)).toBeInTheDocument()})}},c={args:{placeholder:"Sök efter dokument",isDisabled:!0}};var d,m,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,g,b;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(b=(g=i.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var v,y,k;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(k=(y=l.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var w,S,f;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter dokument',
    isDisabled: true
  }
}`,...(f=(S=c.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};const re=["Primary","CustomValidation","Invalid","Disabled"];export{i as CustomValidation,c as Disabled,l as Invalid,s as Primary,re as __namedExportsOrder,ae as default};
