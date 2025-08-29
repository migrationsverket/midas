import{j as t,e as A,f as y}from"./iframe-DgUUoo4T.js";import{$ as L,D as Y,a as U,s as K}from"./DatePickerPopover-ChFzsyiN.js";import{c as $}from"./clsx-B-dksMZM.js";import{a as Z,L as G}from"./Label-BKKtNcqF.js";import{C as J}from"./Calendar-oMtdO3nE.js";import{T as Q}from"./Text-C-1a0kYx.js";import{F as b}from"./FieldError-BAHOXuN8.js";import{D as X,a as ee}from"./DateInput-Cik0DEPS.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CfaThaXB.js";import"./utils-CSUHdYcV.js";import"./Hidden-Dg1s9RhG.js";import"./useFocusRing-B4yI1PJW.js";import"./index-D2B3xfdm.js";import"./index-DiO0iGYb.js";import"./useLabels-9Z-pw4ee.js";import"./useButton-CzH63SGf.js";import"./CalendarHeader-YU-SPUZ-.js";import"./RSPContexts-BAEdrvzX.js";import"./Text-0XenctL6.js";import"./useDateFormatter-C4OZtj0j.js";import"./useControlledState-mHNcrs-P.js";import"./useLocalizedStringFormatter-CYsaLqdU.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-BhuAQdOh.js";import"./useEvent-90PpPRfr.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./useDescription-DwPVuWGZ.js";import"./VisuallyHidden-k41X6Jb_.js";import"./Button-cnfrlHZK.js";import"./Button.module-CF2bVDCq.js";import"./createLucideIcon-DWDaj1ca.js";import"./chevron-right-DaszETSr.js";import"./Heading-BebhmVUy.js";import"./Dialog-B6G_M0wd.js";import"./OverlayArrow-X_YJzg3T.js";import"./useResizeObserver-CJhTgQwA.js";import"./Collection-z21gM2v5.js";import"./index-Cfrn2vWG.js";import"./Separator-DMZ7xpsp.js";import"./SelectionManager-DQHopoPG.js";import"./FocusScope-21IribJh.js";import"./ListKeyboardDelegate-BaimB7xH.js";import"./PressResponder-C56eHW7v.js";import"./Form-CZ_aMHdg.js";import"./useFormValidation-BMvGdLPp.js";import"./Group-VrDex3jb.js";import"./useField-6MVRdGd2.js";import"./Dialog-BNI8kozs.js";import"./useLocalizedStringFormatter-CotlejRG.js";import"./x-C_u3oRsj.js";import"./info-C5VJUdwU.js";import"./Input-BazTg3QK.js";import"./useFilter-CHjwRIOO.js";const i=({className:a,description:r,errorMessage:n,errorPosition:l="top",label:f,popover:z,...v})=>t.jsxs(L,{className:$(K.datePicker,a),...v,children:[t.jsx(Z,{popover:z,children:f&&t.jsx(G,{children:f})}),r&&t.jsx(Q,{slot:"description",children:r}),l==="top"&&t.jsx(b,{children:n}),t.jsx(Y,{...v,children:t.jsx(X,{children:N=>t.jsx(ee,{segment:N})})}),l==="bottom"&&t.jsx(b,{children:n}),t.jsx(U,{children:t.jsx(J,{})})]});try{i.displayName="DatePicker",i.__docgenInfo={description:"",displayName:"DatePicker",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string | ((validation: ValidationResult) => string)"}},errorPosition:{defaultValue:{value:"top"},description:"",name:"errorPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"'large'"},description:"Component size (large: height 48px, medium: height 40px)",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'}]}},popover:{defaultValue:null,description:"An assistive text that helps the user understand the field better. Will be hidden in a popover with an info icon button.",name:"popover",required:!1,type:{name:"InfoPopoverProps"}},isDisabled:{defaultValue:null,description:"Whether the input is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element.",name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"Identifies the element (or elements) that provide a detailed, extended description for the object.",name:"aria-details",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"The default value (uncontrolled).",name:"defaultValue",required:!1,type:{name:"DateValue | null"}},autoFocus:{defaultValue:null,description:"Whether the element should receive focus on render.",name:"autoFocus",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",required:!1,type:{name:"((e: FocusEvent<Element, Element>) => void)"}},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",required:!1,type:{name:"((e: FocusEvent<Element, Element>) => void)"}},onChange:{defaultValue:null,description:"Handler that is called when the value changes.",name:"onChange",required:!1,type:{name:"((value: DateValue | null) => void)"}},onKeyDown:{defaultValue:null,description:"Handler that is called when a key is pressed.",name:"onKeyDown",required:!1,type:{name:"((e: KeyboardEvent) => void)"}},onKeyUp:{defaultValue:null,description:"Handler that is called when a key is released.",name:"onKeyUp",required:!1,type:{name:"((e: KeyboardEvent) => void)"}},onFocusChange:{defaultValue:null,description:"Handler that is called when the element's focus status changes.",name:"onFocusChange",required:!1,type:{name:"((isFocused: boolean) => void)"}},minValue:{defaultValue:null,description:"The minimum allowed date that a user may select.",name:"minValue",required:!1,type:{name:"DateValue | null"}},maxValue:{defaultValue:null,description:"The maximum allowed date that a user may select.",name:"maxValue",required:!1,type:{name:"DateValue | null"}},isDateUnavailable:{defaultValue:null,description:"Callback that is called for each date of the calendar. If it returns true, then the date is unavailable.",name:"isDateUnavailable",required:!1,type:{name:"((date: DateValue) => boolean)"}},isReadOnly:{defaultValue:null,description:"Whether the input can be selected but not changed by the user.",name:"isReadOnly",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Whether the input value is invalid.",name:"isInvalid",required:!1,type:{name:"boolean"}},pageBehavior:{defaultValue:{value:"visible"},description:"Controls the behavior of paging. Pagination either works by advancing the visible page by visibleDuration (default) or one unit of visibleDuration.",name:"pageBehavior",required:!1,type:{name:"enum",value:[{value:'"single"'},{value:'"visible"'}]}},firstDayOfWeek:{defaultValue:null,description:"The day that starts the week.",name:"firstDayOfWeek",required:!1,type:{name:"enum",value:[{value:'"sun"'},{value:'"mon"'},{value:'"tue"'},{value:'"wed"'},{value:'"thu"'},{value:'"fri"'},{value:'"sat"'}]}},value:{defaultValue:null,description:"The current value (controlled).",name:"value",required:!1,type:{name:"DateValue | null"}},defaultOpen:{defaultValue:null,description:"Whether the overlay is open by default (uncontrolled).",name:"defaultOpen",required:!1,type:{name:"boolean"}},isOpen:{defaultValue:null,description:"Whether the overlay is open by default (controlled).",name:"isOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Handler that is called when the overlay's open state changes.",name:"onOpenChange",required:!1,type:{name:"((isOpen: boolean) => void)"}},placeholderValue:{defaultValue:null,description:"A placeholder date that influences the format of the placeholder shown when no value is selected. Defaults to today's date at midnight.",name:"placeholderValue",required:!1,type:{name:"DateValue | null"}},hourCycle:{defaultValue:null,description:"Whether to display the time in 12 or 24 hour format. By default, this is determined by the user's locale.",name:"hourCycle",required:!1,type:{name:"enum",value:[{value:"12"},{value:"24"}]}},granularity:{defaultValue:null,description:'Determines the smallest unit that is displayed in the date picker. By default, this is `"day"` for dates, and `"minute"` for times.',name:"granularity",required:!1,type:{name:"enum",value:[{value:'"day"'},{value:'"hour"'},{value:'"minute"'},{value:'"second"'}]}},hideTimeZone:{defaultValue:{value:"false"},description:"Whether to hide the time zone abbreviation.",name:"hideTimeZone",required:!1,type:{name:"boolean"}},shouldForceLeadingZeros:{defaultValue:null,description:`Whether to always show leading zeros in the month, day, and hour fields.
By default, this is determined by the user's locale.`,name:"shouldForceLeadingZeros",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:"Whether user input is required on the input before form submission.",name:"isRequired",required:!1,type:{name:"boolean"}},validate:{defaultValue:null,description:'A function that returns an error message if a given value is invalid.\nValidation errors are displayed to the user when the form is submitted\nif `validationBehavior="native"`. For realtime validation, use the `isInvalid`\nprop instead.',name:"validate",required:!1,type:{name:"((value: DateValue) => true | ValidationError | null)"}},name:{defaultValue:null,description:"The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).",name:"name",required:!1,type:{name:"string"}},shouldCloseOnSelect:{defaultValue:{value:"true"},description:"Determines whether the date picker popover should close automatically when a date is selected.",name:"shouldCloseOnSelect",required:!1,type:{name:"boolean | (() => boolean)"}},validationBehavior:{defaultValue:{value:"'native'"},description:`Whether to use native HTML form validation to prevent form submission
when the value is missing or invalid, or mark the field as required
or invalid via ARIA.`,name:"validationBehavior",required:!1,type:{name:"enum",value:[{value:'"native"'},{value:'"aria"'}]}},children:{defaultValue:null,description:"The children of the component. A function may be provided to alter the children based on component state.",name:"children",required:!1,type:{name:"ReactNode | ((values: DatePickerRenderProps & { defaultChildren: ReactNode; }) => ReactNode)"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: DatePickerRenderProps & { defaultClassName: string; }) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: DatePickerRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties)"}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string | null"}}}}}catch{}const{expect:h,userEvent:e,within:ae}=__STORYBOOK_MODULE_TEST__,g="datePicker",ra={component:i,title:"Components/DatePicker",tags:["autodocs"],args:{label:"Välj datum",description:"Beskrivning",errorPosition:"top",size:"large"},parameters:{a11y:{config:{rules:[{id:"color-contrast",selector:'[data-placeholder="true"]',enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},s={play:async({step:a,canvas:r,args:n})=>{await a("it should change size according to size prop",async()=>{await h(r.getByRole("group")).toHaveStyle({height:n.size==="large"?"48px":"40px"})})}},o={args:{label:"Välj datum och tid",description:"YYYY-MM-DD HH-MM-SS",granularity:"second"}},u={args:{isDisabled:!0}},d={args:{isInvalid:!0,errorMessage:"Var god ange ett datum"}},m={args:{isRequired:!0,errorMessage:"Var god ange ett datum"},tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},render:a=>t.jsxs("form",{children:[t.jsx(i,{...a}),t.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:a,step:r,args:{errorMessage:n}})=>{await r("it should show an error message if submitted empty",async()=>{await e.tab(),await e.tab(),await e.tab(),await e.tab(),await e.tab(),await e.keyboard("[Enter]"),h(a.getByText(n)).toBeInTheDocument()})}},p={args:{isRequired:!0,validate:({year:a})=>a===new Date().getFullYear()?"Var god välj ett annat år":!0},tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},render:a=>t.jsxs("form",{children:[t.jsx(i,{...a}),t.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:a,step:r})=>{await r("it should show a custom error message if invalid",async()=>{await e.tab(),await e.tab(),await e.tab(),await e.tab(),await e.keyboard("[Enter]"),await e.keyboard("[Enter]"),await e.tab(),h(a.getByText("Var god välj ett annat år")).toBeInTheDocument()})}},c={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},render:a=>{const[r,n]=A.useState(y("2026-05-29"));return t.jsx(i,{"data-testid":g,...a,value:r,onChange:l=>n(l?y(l.toString()):null)})},play:async({canvas:a,step:r})=>{await r("the calendar should not be contained by the datepicker div",async()=>{await e.tab(),await e.tab(),await e.tab(),await e.tab(),await e.keyboard("[Enter]"),await e.keyboard("[ArrowRight]"),await e.keyboard("[Enter]"),await e.keyboard("[Enter]"),await h(ae(a.getByTestId(g)).queryByRole("application")).toBeNull()})}};var w,V,D;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  play: async ({
    step,
    canvas,
    args
  }) => {
    await step('it should change size according to size prop', async () => {
      await expect(canvas.getByRole('group')).toHaveStyle({
        height: args.size === 'large' ? '48px' : '40px'
      });
    });
  }
}`,...(D=(V=s.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var q,E,S;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Välj datum och tid',
    description: 'YYYY-MM-DD HH-MM-SS',
    granularity: 'second'
  }
}`,...(S=(E=o.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var x,k,T;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(T=(k=u.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var P,j,C;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Var god ange ett datum'
  }
}`,...(C=(j=d.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var B,I,R;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(R=(I=m.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var M,W,H;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(H=(W=p.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var O,F,_;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: args => {
    const [value, setValue] = React.useState<CalendarDate | null>(parseDate('2026-05-29'));
    return <DatePicker data-testid={testID} {...args} value={value} onChange={newValue => setValue(newValue ? parseDate(newValue.toString()) : null)} />;
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
}`,...(_=(F=c.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};const na=["Primary","WithTime","Disabled","Invalid","Required","CustomValiation","ControlledState"];export{c as ControlledState,p as CustomValiation,u as Disabled,d as Invalid,s as Primary,m as Required,o as WithTime,na as __namedExportsOrder,ra as default};
