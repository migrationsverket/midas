import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as H}from"./index-ClcD9ViR.js";import{$ as F,D as z,a as O,s as N}from"./DatePickerPopover-Cbk2iCxj.js";import{c as A}from"./clsx-B-dksMZM.js";import{C as _}from"./Calendar-Do9wmsDH.js";import{L as Y}from"./Label-C8mJCmL2.js";import{T as L}from"./Text-Dpx6Gex-.js";import{F as v}from"./FieldError-C31dJ6Xr.js";import{D as U,a as K}from"./DateInput-B_k60VvL.js";import{e as p,u as t}from"./index-CqmFxPum.js";import{s as Z}from"./modes-BX-MOWoB.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-BD6hc4wl.js";import"./utils-oc6myKvD.js";import"./ProgressBar-CQGqtZ9B.js";import"./Label-CpkHsAPL.js";import"./Hidden-BC9qER92.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Blgy_cRF.js";import"./context-BSqJJvai.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useButton-Cqc6u4_f.js";import"./usePress-BfxC_TyQ.js";import"./useFocusRing-DUrskli4.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./useFocusable-tJD4A6lu.js";import"./CalendarHeader-BGt_PpXN.js";import"./RSPContexts-HQcWPJyv.js";import"./Text-C8tPE3tt.js";import"./useDateFormatter-PNqY2u3u.js";import"./CalendarDate-Lfx2W0H2.js";import"./useControlledState-H1tiOFpU.js";import"./useLocalizedStringFormatter-DqnULi-B.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-BzF61qSB.js";import"./useEvent-DVigVKKB.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./useDescription-Bdyn64K0.js";import"./VisuallyHidden-uwYO98VR.js";import"./Button-BjVYXvP1.js";import"./Button.module-AG3JZ-l4.js";import"./createLucideIcon-DQK9Z80p.js";import"./Heading-DDSg48dG.js";import"./Dialog-AjuNQtAO.js";import"./OverlayArrow-qK8NxBS9.js";import"./Collection-BHHe22Am.js";import"./index-NDK0uC61.js";import"./Separator-DiWRQEoC.js";import"./SelectionManager-BGs3xiJx.js";import"./FocusScope-Dq_oVuiP.js";import"./ListKeyboardDelegate-EWbBYqg2.js";import"./useCollator-B-UPZ4SJ.js";import"./PressResponder-DqE_a81G.js";import"./Form-CXoNEyM_.js";import"./useFormValidation-Cv-fFL6t.js";import"./Group-C7PQJuJg.js";import"./useField-aNJ8ypzk.js";import"./Input-mxO2G9Hh.js";import"./useFilter-ZczMi-_B.js";const i=({className:a,description:r,errorMessage:n,errorPosition:c="top",label:I,...h})=>{const f=H.useRef(null);return e.jsxs(F,{className:A(N.datePicker,a),ref:f,...h,children:[e.jsx(Y,{children:I}),r&&e.jsx(L,{slot:"description",children:r}),c==="top"&&e.jsx(v,{children:n}),e.jsx(z,{...h,children:e.jsx(U,{children:W=>e.jsx(K,{segment:W})})}),c==="bottom"&&e.jsx(v,{children:n}),e.jsx(O,{ref:f,children:e.jsx(_,{})})]})};try{i.displayName="DatePicker",i.__docgenInfo={description:"",displayName:"DatePicker",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string | ((validation: ValidationResult) => string)"}},errorPosition:{defaultValue:{value:"top"},description:"",name:"errorPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"'large'"},description:"Component size (large: height 48px, medium: height 40px)",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'}]}},minValue:{defaultValue:null,description:"The minimum allowed date that a user may select.",name:"minValue",required:!1,type:{name:"DateValue"}},maxValue:{defaultValue:null,description:"The maximum allowed date that a user may select.",name:"maxValue",required:!1,type:{name:"DateValue"}},isDateUnavailable:{defaultValue:null,description:"Callback that is called for each date of the calendar. If it returns true, then the date is unavailable.",name:"isDateUnavailable",required:!1,type:{name:"(date: DateValue) => boolean"}},isDisabled:{defaultValue:null,description:"Whether the input is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:"Whether the input can be selected but not changed by the user.",name:"isReadOnly",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"Whether the element should receive focus on render.",name:"autoFocus",required:!1,type:{name:"boolean"}},onFocusChange:{defaultValue:null,description:"Handler that is called when the element's focus status changes.",name:"onFocusChange",required:!1,type:{name:"(isFocused: boolean) => void"}},isInvalid:{defaultValue:null,description:"Whether the input value is invalid.",name:"isInvalid",required:!1,type:{name:"boolean"}},pageBehavior:{defaultValue:{value:"visible"},description:"Controls the behavior of paging. Pagination either works by advancing the visible page by visibleDuration (default) or one unit of visibleDuration.",name:"pageBehavior",required:!1,type:{name:"enum",value:[{value:'"single"'},{value:'"visible"'}]}},firstDayOfWeek:{defaultValue:null,description:"The day that starts the week.",name:"firstDayOfWeek",required:!1,type:{name:"enum",value:[{value:'"sun"'},{value:'"mon"'},{value:'"tue"'},{value:'"wed"'},{value:'"thu"'},{value:'"fri"'},{value:'"sat"'}]}},value:{defaultValue:null,description:"The current value (controlled).",name:"value",required:!1,type:{name:"DateValue"}},defaultValue:{defaultValue:null,description:"The default value (uncontrolled).",name:"defaultValue",required:!1,type:{name:"DateValue"}},onChange:{defaultValue:null,description:"Handler that is called when the value changes.",name:"onChange",required:!1,type:{name:"(value: DateValue) => void"}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element.",name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"Identifies the element (or elements) that provide a detailed, extended description for the object.",name:"aria-details",required:!1,type:{name:"string"}},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",required:!1,type:{name:"(e: FocusEvent<Element, Element>) => void"}},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",required:!1,type:{name:"(e: FocusEvent<Element, Element>) => void"}},onKeyDown:{defaultValue:null,description:"Handler that is called when a key is pressed.",name:"onKeyDown",required:!1,type:{name:"(e: KeyboardEvent) => void"}},onKeyUp:{defaultValue:null,description:"Handler that is called when a key is released.",name:"onKeyUp",required:!1,type:{name:"(e: KeyboardEvent) => void"}},isRequired:{defaultValue:null,description:"Whether user input is required on the input before form submission.",name:"isRequired",required:!1,type:{name:"boolean"}},validate:{defaultValue:null,description:'A function that returns an error message if a given value is invalid.\nValidation errors are displayed to the user when the form is submitted\nif `validationBehavior="native"`. For realtime validation, use the `isInvalid`\nprop instead.',name:"validate",required:!1,type:{name:"(value: DateValue) => true | ValidationError"}},name:{defaultValue:null,description:"The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).",name:"name",required:!1,type:{name:"string"}},isOpen:{defaultValue:null,description:"Whether the overlay is open by default (controlled).",name:"isOpen",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:null,description:"Whether the overlay is open by default (uncontrolled).",name:"defaultOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Handler that is called when the overlay's open state changes.",name:"onOpenChange",required:!1,type:{name:"(isOpen: boolean) => void"}},placeholderValue:{defaultValue:null,description:"A placeholder date that influences the format of the placeholder shown when no value is selected. Defaults to today's date at midnight.",name:"placeholderValue",required:!1,type:{name:"DateValue"}},hourCycle:{defaultValue:null,description:"Whether to display the time in 12 or 24 hour format. By default, this is determined by the user's locale.",name:"hourCycle",required:!1,type:{name:"enum",value:[{value:"12"},{value:"24"}]}},granularity:{defaultValue:null,description:'Determines the smallest unit that is displayed in the date picker. By default, this is `"day"` for dates, and `"minute"` for times.',name:"granularity",required:!1,type:{name:"enum",value:[{value:'"day"'},{value:'"hour"'},{value:'"minute"'},{value:'"second"'}]}},hideTimeZone:{defaultValue:{value:"false"},description:"Whether to hide the time zone abbreviation.",name:"hideTimeZone",required:!1,type:{name:"boolean"}},shouldForceLeadingZeros:{defaultValue:null,description:`Whether to always show leading zeros in the month, day, and hour fields.
By default, this is determined by the user's locale.`,name:"shouldForceLeadingZeros",required:!1,type:{name:"boolean"}},shouldCloseOnSelect:{defaultValue:{value:"true"},description:"Determines whether the date picker popover should close automatically when a date is selected.",name:"shouldCloseOnSelect",required:!1,type:{name:"boolean | (() => boolean)"}},validationBehavior:{defaultValue:{value:"'native'"},description:`Whether to use native HTML form validation to prevent form submission
when the value is missing or invalid, or mark the field as required
or invalid via ARIA.`,name:"validationBehavior",required:!1,type:{name:"enum",value:[{value:'"aria"'},{value:'"native"'}]}},children:{defaultValue:null,description:"The children of the component. A function may be provided to alter the children based on component state.",name:"children",required:!1,type:{name:"ReactNode | ((values: DatePickerRenderProps & { defaultChildren: ReactNode; }) => ReactNode)"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: DatePickerRenderProps & { defaultClassName: string; }) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: DatePickerRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties)"}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string"}}}}}catch{}const ra={component:i,title:"Components/DatePicker",tags:["autodocs"],args:{label:"Välj datum",description:"Beskrivning",errorPosition:"top"},parameters:{a11y:{config:{rules:[{id:"color-contrast",selector:'[data-placeholder="true"]',enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}},chromatic:{modes:Z}},render:(a,{globals:{size:r}})=>e.jsx(i,{...a,size:r})},l={play:async({step:a,canvas:r,globals:{size:n}})=>{await a("it should change size according to size prop",async()=>{await p(r.getByRole("group")).toHaveStyle({height:n==="large"?"48px":"40px"})})}},s={args:{label:"Välj datum och tid",description:"YYYY-MM-DD HH-MM-SS",granularity:"second"}},o={args:{isDisabled:!0}},u={args:{isInvalid:!0,errorMessage:"Var god ange ett datum"}},d={args:{isRequired:!0,errorMessage:"Var god ange ett datum"},tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},render:a=>e.jsxs("form",{children:[e.jsx(i,{...a}),e.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:a,step:r,args:{errorMessage:n}})=>{await r("it should show an error message if submitted empty",async()=>{await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Enter]"),p(a.getByText(n)).toBeInTheDocument()})}},m={args:{isRequired:!0,validate:({year:a})=>a===new Date().getFullYear()?"Var god välj ett annat år":!0},tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},render:a=>e.jsxs("form",{children:[e.jsx(i,{...a}),e.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:a,step:r})=>{await r("it should show a custom error message if invalid",async()=>{await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Enter]"),await t.keyboard("[Enter]"),await t.tab(),p(a.getByText("Var god välj ett annat år")).toBeInTheDocument()})}};var y,b,g;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  play: async ({
    step,
    canvas,
    globals: {
      size
    }
  }) => {
    await step('it should change size according to size prop', async () => {
      await expect(canvas.getByRole('group')).toHaveStyle({
        height: size === 'large' ? '48px' : '40px'
      });
    });
  }
}`,...(g=(b=l.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var V,w,q;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Välj datum och tid',
    description: 'YYYY-MM-DD HH-MM-SS',
    granularity: 'second'
  }
}`,...(q=(w=s.parameters)==null?void 0:w.docs)==null?void 0:q.source}}};var D,x,S;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(S=(x=o.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var E,k,T;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Var god ange ett datum'
  }
}`,...(T=(k=u.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var j,P,C;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    isRequired: true,
    errorMessage: 'Var god ange ett datum'
  },
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: args => <form>
      <DatePicker {...args} />
      <button type='submit'>Submit</button>
    </form>,
  play: async ({
    canvas,
    step,
    args: {
      errorMessage
    }
  }) => {
    await step('it should show an error message if submitted empty', async () => {
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.keyboard('[Enter]');
      expect(canvas.getByText(errorMessage as string)).toBeInTheDocument();
    });
  }
}`,...(C=(P=d.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var M,R,B;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    isRequired: true,
    validate: ({
      year
    }) => year === new Date().getFullYear() ? 'Var god välj ett annat år' : true
  },
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: args => <form>
      <DatePicker {...args} />
      <button type='submit'>Submit</button>
    </form>,
  play: async ({
    canvas,
    step
  }) => {
    /**
     * This test is made to create an invalid DatePicker
     * the current year is not allowed the "user" selects todays date and submits the form
     */
    await step('it should show a custom error message if invalid', async () => {
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.keyboard('[Enter]');
      await userEvent.keyboard('[Enter]');
      await userEvent.tab();
      expect(canvas.getByText('Var god välj ett annat år')).toBeInTheDocument();
    });
  }
}`,...(B=(R=m.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};const na=["Primary","WithTime","Disabled","Invalid","Required","CustomValiation"];export{m as CustomValiation,o as Disabled,u as Invalid,l as Primary,d as Required,s as WithTime,na as __namedExportsOrder,ra as default};
