import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as F}from"./index-ClcD9ViR.js";import{$ as z,D as O,a as N,s as A}from"./DatePickerPopover-A35dZzLe.js";import{c as _}from"./clsx-B-dksMZM.js";import{a as L,L as Y}from"./Label-cOtfoLZJ.js";import{C as U}from"./Calendar-dJPTBnGa.js";import{T as K}from"./Text-ObKd9RkE.js";import{F as y}from"./FieldError-Bc4GcTNT.js";import{D as Z,a as $}from"./DateInput-BdSABpZT.js";import{e as p,u as t}from"./index-CqmFxPum.js";import{s as G}from"./modes-BX-MOWoB.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-D5YfTa-t.js";import"./utils-BLyg3OOq.js";import"./Hidden-BC9qER92.js";import"./useFocusRing-eGNMqT99.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./context-d6PNTTSe.js";import"./useButton-rs5PgjfN.js";import"./CalendarHeader-Ez_2_TBz.js";import"./RSPContexts-HQcWPJyv.js";import"./Text-w6ZeLcO4.js";import"./useDateFormatter-CC7zCtTR.js";import"./CalendarDate-Lfx2W0H2.js";import"./useControlledState-H1tiOFpU.js";import"./useLocalizedStringFormatter-TrhiTCnH.js";import"./useUpdateEffect-BzF61qSB.js";import"./useEvent-B0l3XC2n.js";import"./getScrollParent-FdZGTYO5.js";import"./scrollIntoView-BivqL63c.js";import"./VisuallyHidden-DWQ0FsMN.js";import"./Button-BMLwOSNx.js";import"./Button.module-AG3JZ-l4.js";import"./createLucideIcon-DQK9Z80p.js";import"./Heading-DncQzqB_.js";import"./Dialog-yN6YlsCK.js";import"./OverlayArrow-BZcOvAjo.js";import"./Collection-nQ4RBMPG.js";import"./index-NDK0uC61.js";import"./Separator-u34oIBUJ.js";import"./SelectionManager-sKkAcYRw.js";import"./FocusScope-C-SsV_ba.js";import"./ListKeyboardDelegate-Bkg2cFa9.js";import"./Form-CLBgFqGB.js";import"./useFormValidation-Cwkq_bn0.js";import"./Group-5YIXANsC.js";import"./useField-BBXNKLtY.js";import"./Dialog-DN79WFEK.js";import"./x-BaIpobvV.js";import"./info-DTm9uzms.js";import"./Input-BWAASqba.js";import"./useFilter-CHjOrUJi.js";const i=({className:a,description:r,errorMessage:n,errorPosition:c="top",label:h,popover:W,...f})=>{const v=F.useRef(null);return e.jsxs(z,{className:_(A.datePicker,a),ref:v,...f,children:[e.jsx(L,{popover:W,children:h&&e.jsx(Y,{children:h})}),r&&e.jsx(K,{slot:"description",children:r}),c==="top"&&e.jsx(y,{children:n}),e.jsx(O,{...f,children:e.jsx(Z,{children:H=>e.jsx($,{segment:H})})}),c==="bottom"&&e.jsx(y,{children:n}),e.jsx(N,{ref:v,children:e.jsx(U,{})})]})};try{i.displayName="DatePicker",i.__docgenInfo={description:"",displayName:"DatePicker",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string | ((validation: ValidationResult) => string)"}},errorPosition:{defaultValue:{value:"top"},description:"",name:"errorPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"'large'"},description:"Component size (large: height 48px, medium: height 40px)",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'}]}},popover:{defaultValue:null,description:"An assistive text that helps the user understand the field better. Will be hidden in a popover with an info icon button.",name:"popover",required:!1,type:{name:"InfoPopoverProps"}},defaultValue:{defaultValue:null,description:"The default value (uncontrolled).",name:"defaultValue",required:!1,type:{name:"DateValue"}},autoFocus:{defaultValue:null,description:"Whether the element should receive focus on render.",name:"autoFocus",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"Identifies the element (or elements) that provide a detailed, extended description for the object.",name:"aria-details",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element.",name:"aria-labelledby",required:!1,type:{name:"string"}},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",required:!1,type:{name:"(e: FocusEvent<Element, Element>) => void"}},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",required:!1,type:{name:"(e: FocusEvent<Element, Element>) => void"}},onChange:{defaultValue:null,description:"Handler that is called when the value changes.",name:"onChange",required:!1,type:{name:"(value: DateValue) => void"}},onKeyDown:{defaultValue:null,description:"Handler that is called when a key is pressed.",name:"onKeyDown",required:!1,type:{name:"(e: KeyboardEvent) => void"}},onKeyUp:{defaultValue:null,description:"Handler that is called when a key is released.",name:"onKeyUp",required:!1,type:{name:"(e: KeyboardEvent) => void"}},isDisabled:{defaultValue:null,description:"Whether the input is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},onFocusChange:{defaultValue:null,description:"Handler that is called when the element's focus status changes.",name:"onFocusChange",required:!1,type:{name:"(isFocused: boolean) => void"}},name:{defaultValue:null,description:"The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"The current value (controlled).",name:"value",required:!1,type:{name:"DateValue"}},minValue:{defaultValue:null,description:"The minimum allowed date that a user may select.",name:"minValue",required:!1,type:{name:"DateValue"}},maxValue:{defaultValue:null,description:"The maximum allowed date that a user may select.",name:"maxValue",required:!1,type:{name:"DateValue"}},isDateUnavailable:{defaultValue:null,description:"Callback that is called for each date of the calendar. If it returns true, then the date is unavailable.",name:"isDateUnavailable",required:!1,type:{name:"(date: DateValue) => boolean"}},isReadOnly:{defaultValue:null,description:"Whether the input can be selected but not changed by the user.",name:"isReadOnly",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Whether the input value is invalid.",name:"isInvalid",required:!1,type:{name:"boolean"}},pageBehavior:{defaultValue:{value:"visible"},description:"Controls the behavior of paging. Pagination either works by advancing the visible page by visibleDuration (default) or one unit of visibleDuration.",name:"pageBehavior",required:!1,type:{name:"enum",value:[{value:'"single"'},{value:'"visible"'}]}},firstDayOfWeek:{defaultValue:null,description:"The day that starts the week.",name:"firstDayOfWeek",required:!1,type:{name:"enum",value:[{value:'"sun"'},{value:'"mon"'},{value:'"tue"'},{value:'"wed"'},{value:'"thu"'},{value:'"fri"'},{value:'"sat"'}]}},isRequired:{defaultValue:null,description:"Whether user input is required on the input before form submission.",name:"isRequired",required:!1,type:{name:"boolean"}},validate:{defaultValue:null,description:'A function that returns an error message if a given value is invalid.\nValidation errors are displayed to the user when the form is submitted\nif `validationBehavior="native"`. For realtime validation, use the `isInvalid`\nprop instead.',name:"validate",required:!1,type:{name:"(value: DateValue) => true | ValidationError"}},placeholderValue:{defaultValue:null,description:"A placeholder date that influences the format of the placeholder shown when no value is selected. Defaults to today's date at midnight.",name:"placeholderValue",required:!1,type:{name:"DateValue"}},hourCycle:{defaultValue:null,description:"Whether to display the time in 12 or 24 hour format. By default, this is determined by the user's locale.",name:"hourCycle",required:!1,type:{name:"enum",value:[{value:"12"},{value:"24"}]}},granularity:{defaultValue:null,description:'Determines the smallest unit that is displayed in the date picker. By default, this is `"day"` for dates, and `"minute"` for times.',name:"granularity",required:!1,type:{name:"enum",value:[{value:'"day"'},{value:'"hour"'},{value:'"minute"'},{value:'"second"'}]}},hideTimeZone:{defaultValue:{value:"false"},description:"Whether to hide the time zone abbreviation.",name:"hideTimeZone",required:!1,type:{name:"boolean"}},shouldForceLeadingZeros:{defaultValue:null,description:`Whether to always show leading zeros in the month, day, and hour fields.
By default, this is determined by the user's locale.`,name:"shouldForceLeadingZeros",required:!1,type:{name:"boolean"}},isOpen:{defaultValue:null,description:"Whether the overlay is open by default (controlled).",name:"isOpen",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:null,description:"Whether the overlay is open by default (uncontrolled).",name:"defaultOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Handler that is called when the overlay's open state changes.",name:"onOpenChange",required:!1,type:{name:"(isOpen: boolean) => void"}},shouldCloseOnSelect:{defaultValue:{value:"true"},description:"Determines whether the date picker popover should close automatically when a date is selected.",name:"shouldCloseOnSelect",required:!1,type:{name:"boolean | (() => boolean)"}},validationBehavior:{defaultValue:{value:"'native'"},description:`Whether to use native HTML form validation to prevent form submission
when the value is missing or invalid, or mark the field as required
or invalid via ARIA.`,name:"validationBehavior",required:!1,type:{name:"enum",value:[{value:'"aria"'},{value:'"native"'}]}},children:{defaultValue:null,description:"The children of the component. A function may be provided to alter the children based on component state.",name:"children",required:!1,type:{name:"ReactNode | ((values: DatePickerRenderProps & { defaultChildren: ReactNode; }) => ReactNode)"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: DatePickerRenderProps & { defaultClassName: string; }) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: DatePickerRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties)"}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string"}}}}}catch{}const Ge={component:i,title:"Components/DatePicker",tags:["autodocs"],args:{label:"Välj datum",description:"Beskrivning",errorPosition:"top"},parameters:{a11y:{config:{rules:[{id:"color-contrast",selector:'[data-placeholder="true"]',enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}},chromatic:{modes:G}},render:(a,{globals:{size:r}})=>e.jsx(i,{...a,size:r})},l={play:async({step:a,canvas:r,globals:{size:n}})=>{await a("it should change size according to size prop",async()=>{await p(r.getByRole("group")).toHaveStyle({height:n==="large"?"48px":"40px"})})}},s={args:{label:"Välj datum och tid",description:"YYYY-MM-DD HH-MM-SS",granularity:"second"}},o={args:{isDisabled:!0}},u={args:{isInvalid:!0,errorMessage:"Var god ange ett datum"}},d={args:{isRequired:!0,errorMessage:"Var god ange ett datum"},tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},render:a=>e.jsxs("form",{children:[e.jsx(i,{...a}),e.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:a,step:r,args:{errorMessage:n}})=>{await r("it should show an error message if submitted empty",async()=>{await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Enter]"),p(a.getByText(n)).toBeInTheDocument()})}},m={args:{isRequired:!0,validate:({year:a})=>a===new Date().getFullYear()?"Var god välj ett annat år":!0},tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},render:a=>e.jsxs("form",{children:[e.jsx(i,{...a}),e.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:a,step:r})=>{await r("it should show a custom error message if invalid",async()=>{await t.tab(),await t.tab(),await t.tab(),await t.tab(),await t.keyboard("[Enter]"),await t.keyboard("[Enter]"),await t.tab(),p(a.getByText("Var god välj ett annat år")).toBeInTheDocument()})}};var b,g,V;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(V=(g=l.parameters)==null?void 0:g.docs)==null?void 0:V.source}}};var w,q,D;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Välj datum och tid',
    description: 'YYYY-MM-DD HH-MM-SS',
    granularity: 'second'
  }
}`,...(D=(q=s.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var x,S,E;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(E=(S=o.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var k,T,j;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Var god ange ett datum'
  }
}`,...(j=(T=u.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var P,C,M;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(M=(C=d.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var I,R,B;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(B=(R=m.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};const Je=["Primary","WithTime","Disabled","Invalid","Required","CustomValiation"];export{m as CustomValiation,o as Disabled,u as Invalid,l as Primary,d as Required,s as WithTime,Je as __namedExportsOrder,Ge as default};
