import{j as t}from"./jsx-runtime-BYYWji4R.js";import{$ as _,D as L,a as Y,s as U}from"./DatePickerPopover-DC3reiNG.js";import{c as $}from"./clsx-B-dksMZM.js";import{a as K,L as Z}from"./Label-4vl2GDtd.js";import{C as G}from"./Calendar-C5hlMbc5.js";import{T as J}from"./Text-BgvnLaBz.js";import{F as y}from"./FieldError-BjFojtrn.js";import{D as Q,a as X}from"./DateInput-BY4KpqVa.js";import{e as f,u as e,w as ee}from"./index-Q7OVwvWC.js";import{s as ae}from"./modes-BX-MOWoB.js";import{R as te}from"./index-ClcD9ViR.js";import{c as b}from"./CalendarDate-Lfx2W0H2.js";import"./Button-BnGcr9X4.js";import"./utils-RHx87K0F.js";import"./SSRProvider-BhYbDCf7.js";import"./Hidden-BC9qER92.js";import"./useFocusRing-zhkOjX4v.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useLabels-FEgier_d.js";import"./context-zNjZoWML.js";import"./useButton-DQcVpLGQ.js";import"./CalendarHeader-ZhQaxu8I.js";import"./RSPContexts-HQcWPJyv.js";import"./Text-CZ6zcozL.js";import"./useDateFormatter-DzWwJ2YB.js";import"./useControlledState-H1tiOFpU.js";import"./useLocalizedStringFormatter-DiUIqqhg.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-BzF61qSB.js";import"./useEvent-D_ha2BWP.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./useDescription-BqzP9r9Z.js";import"./VisuallyHidden-BekSNXsj.js";import"./Button-DukQvNAj.js";import"./Button.module-Bmb634uG.js";import"./createLucideIcon-uZw3gxGR.js";import"./Heading-CV1Pcj_U.js";import"./Dialog-BTPkDfgN.js";import"./OverlayArrow-DJSGdA-H.js";import"./Collection-h-VYV8ts.js";import"./index-NDK0uC61.js";import"./Separator-BmLx0v9B.js";import"./SelectionManager-CFyGcN4y.js";import"./FocusScope-p3_VE_8x.js";import"./ListKeyboardDelegate-Dxk4Tqtx.js";import"./PressResponder-DWi2SZR7.js";import"./Form-Lr15ufU6.js";import"./useFormValidation-DmuZGU-W.js";import"./Group-DwTQcyET.js";import"./useField-GoO-rf0S.js";import"./Dialog-BjbXmeQd.js";import"./useLocalizedStringFormatter-9M_dEwOo.js";import"./x-Dz2R9y6b.js";import"./info-CSjK64PU.js";import"./Input-BMo7u0M7.js";import"./useFilter-Cu4UDaNa.js";const i=({className:a,description:r,errorMessage:n,errorPosition:l="top",label:s,popover:A,...v})=>t.jsxs(_,{className:$(U.datePicker,a),...v,children:[t.jsx(K,{popover:A,children:s&&t.jsx(Z,{children:s})}),r&&t.jsx(J,{slot:"description",children:r}),l==="top"&&t.jsx(y,{children:n}),t.jsx(L,{...v,children:t.jsx(Q,{children:O=>t.jsx(X,{segment:O})})}),l==="bottom"&&t.jsx(y,{children:n}),t.jsx(Y,{children:t.jsx(G,{})})]});try{i.displayName="DatePicker",i.__docgenInfo={description:"",displayName:"DatePicker",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string | ((validation: ValidationResult) => string)"}},errorPosition:{defaultValue:{value:"top"},description:"",name:"errorPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"'large'"},description:"Component size (large: height 48px, medium: height 40px)",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'}]}},popover:{defaultValue:null,description:"An assistive text that helps the user understand the field better. Will be hidden in a popover with an info icon button.",name:"popover",required:!1,type:{name:"InfoPopoverProps"}},isDisabled:{defaultValue:null,description:"Whether the input is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"Whether the element should receive focus on render.",name:"autoFocus",required:!1,type:{name:"boolean"}},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",required:!1,type:{name:"(e: FocusEvent<Element, Element>) => void"}},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",required:!1,type:{name:"(e: FocusEvent<Element, Element>) => void"}},onFocusChange:{defaultValue:null,description:"Handler that is called when the element's focus status changes.",name:"onFocusChange",required:!1,type:{name:"(isFocused: boolean) => void"}},onKeyDown:{defaultValue:null,description:"Handler that is called when a key is pressed.",name:"onKeyDown",required:!1,type:{name:"(e: KeyboardEvent) => void"}},onKeyUp:{defaultValue:null,description:"Handler that is called when a key is released.",name:"onKeyUp",required:!1,type:{name:"(e: KeyboardEvent) => void"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element.",name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"Identifies the element (or elements) that provide a detailed, extended description for the object.",name:"aria-details",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"The default value (uncontrolled).",name:"defaultValue",required:!1,type:{name:"DateValue"}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Handler that is called when the value changes.",name:"onChange",required:!1,type:{name:"(value: DateValue) => void"}},name:{defaultValue:null,description:"The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"The current value (controlled).",name:"value",required:!1,type:{name:"DateValue"}},validate:{defaultValue:null,description:'A function that returns an error message if a given value is invalid.\nValidation errors are displayed to the user when the form is submitted\nif `validationBehavior="native"`. For realtime validation, use the `isInvalid`\nprop instead.',name:"validate",required:!1,type:{name:"(value: DateValue) => true | ValidationError"}},pageBehavior:{defaultValue:{value:"visible"},description:"Controls the behavior of paging. Pagination either works by advancing the visible page by visibleDuration (default) or one unit of visibleDuration.",name:"pageBehavior",required:!1,type:{name:"enum",value:[{value:'"single"'},{value:'"visible"'}]}},firstDayOfWeek:{defaultValue:null,description:"The day that starts the week.",name:"firstDayOfWeek",required:!1,type:{name:"enum",value:[{value:'"sun"'},{value:'"mon"'},{value:'"tue"'},{value:'"wed"'},{value:'"thu"'},{value:'"fri"'},{value:'"sat"'}]}},minValue:{defaultValue:null,description:"The minimum allowed date that a user may select.",name:"minValue",required:!1,type:{name:"DateValue"}},maxValue:{defaultValue:null,description:"The maximum allowed date that a user may select.",name:"maxValue",required:!1,type:{name:"DateValue"}},isDateUnavailable:{defaultValue:null,description:"Callback that is called for each date of the calendar. If it returns true, then the date is unavailable.",name:"isDateUnavailable",required:!1,type:{name:"(date: DateValue) => boolean"}},placeholderValue:{defaultValue:null,description:"A placeholder date that influences the format of the placeholder shown when no value is selected. Defaults to today's date at midnight.",name:"placeholderValue",required:!1,type:{name:"DateValue"}},hourCycle:{defaultValue:null,description:"Whether to display the time in 12 or 24 hour format. By default, this is determined by the user's locale.",name:"hourCycle",required:!1,type:{name:"enum",value:[{value:"12"},{value:"24"}]}},granularity:{defaultValue:null,description:'Determines the smallest unit that is displayed in the date picker. By default, this is `"day"` for dates, and `"minute"` for times.',name:"granularity",required:!1,type:{name:"enum",value:[{value:'"day"'},{value:'"hour"'},{value:'"minute"'},{value:'"second"'}]}},hideTimeZone:{defaultValue:{value:"false"},description:"Whether to hide the time zone abbreviation.",name:"hideTimeZone",required:!1,type:{name:"boolean"}},shouldForceLeadingZeros:{defaultValue:null,description:`Whether to always show leading zeros in the month, day, and hour fields.
By default, this is determined by the user's locale.`,name:"shouldForceLeadingZeros",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:"Whether the input can be selected but not changed by the user.",name:"isReadOnly",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:"Whether user input is required on the input before form submission.",name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Whether the input value is invalid.",name:"isInvalid",required:!1,type:{name:"boolean"}},isOpen:{defaultValue:null,description:"Whether the overlay is open by default (controlled).",name:"isOpen",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:null,description:"Whether the overlay is open by default (uncontrolled).",name:"defaultOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Handler that is called when the overlay's open state changes.",name:"onOpenChange",required:!1,type:{name:"(isOpen: boolean) => void"}},shouldCloseOnSelect:{defaultValue:{value:"true"},description:"Determines whether the date picker popover should close automatically when a date is selected.",name:"shouldCloseOnSelect",required:!1,type:{name:"boolean | (() => boolean)"}},validationBehavior:{defaultValue:{value:"'native'"},description:`Whether to use native HTML form validation to prevent form submission
when the value is missing or invalid, or mark the field as required
or invalid via ARIA.`,name:"validationBehavior",required:!1,type:{name:"enum",value:[{value:'"native"'},{value:'"aria"'}]}},children:{defaultValue:null,description:"The children of the component. A function may be provided to alter the children based on component state.",name:"children",required:!1,type:{name:"ReactNode | ((values: DatePickerRenderProps & { defaultChildren: ReactNode; }) => ReactNode)"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: DatePickerRenderProps & { defaultClassName: string; }) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: DatePickerRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties)"}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string"}}}}}catch{}const g="datePicker",oa={component:i,title:"Components/DatePicker",tags:["autodocs"],args:{label:"Välj datum",description:"Beskrivning",errorPosition:"top"},parameters:{a11y:{config:{rules:[{id:"color-contrast",selector:'[data-placeholder="true"]',enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}},chromatic:{modes:ae}},render:(a,{globals:{size:r}})=>t.jsx(i,{...a,size:r})},o={play:async({step:a,canvas:r,globals:{size:n}})=>{await a("it should change size according to size prop",async()=>{await f(r.getByRole("group")).toHaveStyle({height:n==="large"?"48px":"40px"})})}},u={args:{label:"Välj datum och tid",description:"YYYY-MM-DD HH-MM-SS",granularity:"second"}},d={args:{isDisabled:!0}},m={args:{isInvalid:!0,errorMessage:"Var god ange ett datum"}},p={args:{isRequired:!0,errorMessage:"Var god ange ett datum"},tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},render:a=>t.jsxs("form",{children:[t.jsx(i,{...a}),t.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:a,step:r,args:{errorMessage:n}})=>{await r("it should show an error message if submitted empty",async()=>{await e.tab(),await e.tab(),await e.tab(),await e.tab(),await e.tab(),await e.keyboard("[Enter]"),f(a.getByText(n)).toBeInTheDocument()})}},c={args:{isRequired:!0,validate:({year:a})=>a===new Date().getFullYear()?"Var god välj ett annat år":!0},tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},render:a=>t.jsxs("form",{children:[t.jsx(i,{...a}),t.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:a,step:r})=>{await r("it should show a custom error message if invalid",async()=>{await e.tab(),await e.tab(),await e.tab(),await e.tab(),await e.keyboard("[Enter]"),await e.keyboard("[Enter]"),await e.tab(),f(a.getByText("Var god välj ett annat år")).toBeInTheDocument()})}},h={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},render:(a,{globals:{size:r}})=>{const[n,l]=te.useState(b("2026-05-29"));return t.jsx(i,{"data-testid":g,...a,size:r,value:n,onChange:s=>l(s?b(s.toString()):null)})},play:async({canvas:a,step:r})=>{await r("the calendar should not be contained by the datepicker div",async()=>{await e.tab(),await e.tab(),await e.tab(),await e.tab(),await e.keyboard("[Enter]"),await e.keyboard("[ArrowRight]"),await e.keyboard("[Enter]"),await e.keyboard("[Enter]"),await f(ee(a.getByTestId(g)).queryByRole("application")).toBeNull()})}};var w,V,D;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(D=(V=o.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var q,E,S;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Välj datum och tid',
    description: 'YYYY-MM-DD HH-MM-SS',
    granularity: 'second'
  }
}`,...(S=(E=u.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var x,k,T;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(T=(k=d.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var P,j,C;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Var god ange ett datum'
  }
}`,...(C=(j=m.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var R,B,I;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(I=(B=p.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var M,W,z;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(z=(W=c.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var H,F,N;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: (args, {
    globals: {
      size
    }
  }) => {
    const [value, setValue] = React.useState<CalendarDate | null>(parseDate('2026-05-29'));
    return <DatePicker data-testid={testID} {...args} size={size} value={value} onChange={newValue => setValue(newValue ? parseDate(newValue.toString()) : null)} />;
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('the calendar should not be contained by the datepicker div', async () => {
      // Select tomorrows date
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.keyboard('[Enter]');
      await userEvent.keyboard('[ArrowRight]');
      await userEvent.keyboard('[Enter]');
      await userEvent.keyboard('[Enter]');
      await expect(within(canvas.getByTestId(testID)).queryByRole('application')).toBeNull();
    });
  }
}`,...(N=(F=h.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};const ua=["Primary","WithTime","Disabled","Invalid","Required","CustomValiation","ControlledState"];export{h as ControlledState,c as CustomValiation,d as Disabled,m as Invalid,o as Primary,p as Required,u as WithTime,ua as __namedExportsOrder,oa as default};
