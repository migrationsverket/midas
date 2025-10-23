import{S as h,s as g}from"./SearchField-DKNBDQIU.js";import"./iframe-CcqQFNZ4.js";import"./preload-helper-Ct5FWWRu.js";import"./TextField.module-suvedwZH.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DWv4BEMA.js";import"./utils-CzaLILIa.js";import"./useLocalizedStringFormatter-SKtJYtnG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DKupzS-w.js";import"./useFocusRing-BA6Kf1-f.js";import"./index-DuhG6G0z.js";import"./index-DovVAc5x.js";import"./useFormValidation-Du3RhDZj.js";import"./useField-1XPfFC0b.js";import"./Button-BwODYqP3.js";import"./Hidden-_YiRnjLS.js";import"./useLabels-BZCRLtmz.js";import"./useButton-3G_DPaEV.js";import"./search-B9mbUXhP.js";import"./createLucideIcon-tejd7HsP.js";import"./Button-Bb_v90_P.js";import"./Button.module-CtQ1deO8.js";import"./x-CwAMwMTg.js";import"./useLocalizedStringFormatter-D_lTOACh.js";import"./FieldError-C-XRItMF.js";import"./Text-CJ6eX-zL.js";import"./Text-XFg0ZgIN.js";const{expect:t,fn:m,userEvent:e}=__STORYBOOK_MODULE_TEST__,Y={component:h,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},o={args:{placeholder:"Sök efter en person",onChange:m(),onSubmit:m()},play:async({canvas:a,canvasElement:s,step:r,args:{onChange:n,onSubmit:d,buttonText:p,className:u}})=>{await r("it should be possible to submit a search string using only the keyboard",async()=>{await e.tab(),await e.keyboard("hello"),await e.keyboard("[Enter]"),t(n).toHaveBeenCalledWith("hello"),t(d).toHaveBeenCalledWith("hello")}),await r("it should be possible to submit a search string using the mouse",async()=>{await e.tab(),await e.keyboard("hello"),await e.click(a.getByText(p)),t(n).toHaveBeenCalledWith("hello"),t(d).toHaveBeenCalledWith("hello")}),await r("it should accept custom classNames",async()=>{await t(s.querySelector("div")).toHaveClass(g.container,u)})}},i={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0,onChange:m(),onSubmit:m()},play:async({canvas:a,step:s,args:{onChange:r,onSubmit:n}})=>{await s("it should give a validation error if the user entered an unpermitted text",async()=>{await e.tab(),await e.keyboard("secret"),await e.tab(),await e.keyboard("[Enter]"),t(r).toHaveBeenCalledWith("secret"),t(n).not.toHaveBeenCalled(),t(a.getByText("Sök inte efter hemligheter")).toBeInTheDocument()})}},l={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"},play:async({canvas:a,step:s,args:{placeholder:r,errorMessage:n}})=>{await s("it should be invalid and show the custom message",async()=>{t(a.getByLabelText(r)).toBeInvalid(),t(a.getByText(n)).toBeInTheDocument()})}},c={args:{placeholder:"Sök efter dokument",isDisabled:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter dokument',
    isDisabled: true
  }
}`,...c.parameters?.docs?.source}}};const j=["Primary","CustomValidation","Invalid","Disabled"];export{i as CustomValidation,c as Disabled,l as Invalid,o as Primary,j as __namedExportsOrder,Y as default};
