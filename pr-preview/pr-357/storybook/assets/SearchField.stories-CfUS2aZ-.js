import{S as w}from"./SearchField-DYVqhq67.js";import{f as c,u as e,e as t}from"./index-iZ8NAl3x.js";import"./jsx-runtime-CBDCb4rg.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./TextField.module-D2y0i4Dw.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BgxdDqm0.js";import"./utils-CyugoGNF.js";import"./useLocalizedStringFormatter-B6l6yPuV.js";import"./context-BwmME58u.js";import"./useTextField-DXYVxhqA.js";import"./useFocusRing-BODiw1iP.js";import"./index-BAyGJXOV.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormValidation-B1oMw7Lv.js";import"./useField-YKOABOJo.js";import"./useLabel-DbJIstGE.js";import"./useFocusable-CqLabGgp.js";import"./createLucideIcon-DjmUzaoT.js";import"./Button-CJsnlSjH.js";import"./Button-iL9IzHG8.js";import"./ProgressBar-B2jw0c1b.js";import"./Label-ByRA_SKm.js";import"./Hidden-B6il94lO.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./x-CdHhRR78.js";const U={component:w,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök"}},s={args:{placeholder:"Sök efter en person",onChange:c(),onSubmit:c()},play:async({canvas:a,step:n,args:{onChange:r,onSubmit:o,buttonText:k}})=>{await n("it should be possible to submit a search string using only the keyboard",async()=>{await e.tab(),await e.keyboard("hello"),await e.keyboard("[Enter]"),t(r).toHaveBeenCalledWith("hello"),t(o).toHaveBeenCalledWith("hello")}),await n("it should be possible to submit a search string using the mouse",async()=>{await e.tab(),await e.keyboard("hello"),await e.click(a.getByText(k)),t(r).toHaveBeenCalledWith("hello"),t(o).toHaveBeenCalledWith("hello")})}},i={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0,onChange:c(),onSubmit:c()},play:async({canvas:a,step:n,args:{onChange:r,onSubmit:o}})=>{await n("it should give a validation error if the user entered an unpermitted text",async()=>{await e.tab(),await e.keyboard("secret"),await e.tab(),await e.keyboard("[Enter]"),t(r).toHaveBeenCalledWith("secret"),t(o).not.toHaveBeenCalled(),t(a.getByText("Sök inte efter hemligheter")).toBeInTheDocument()})}},l={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"},play:async({canvas:a,step:n,args:{placeholder:r,errorMessage:o}})=>{await n("it should be invalid and show the custom message",async()=>{t(a.getByLabelText(r)).toBeInvalid(),t(a.getByText(o)).toBeInTheDocument()})}};var p,m,d;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
