import{j as e,l}from"./iframe-DRiJSY7M.js";import{S as t}from"./Skeleton-BpJbWlnV.js";import{T as p}from"./TextField-Br2veAY1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CTcYlYxQ.js";import"./utils-BJDSFOW5.js";import"./FieldError-BjsiVnPf.js";import"./Text-X4vUYIPT.js";import"./useFocusRing-B6J0ruRj.js";import"./index-9zNSRqxn.js";import"./index-BQ1pxiFP.js";import"./Text-B3YlrlLH.js";import"./RSPContexts-BcxExNnK.js";import"./Form-Uq1sMBKN.js";import"./useFormValidation-BivglJc0.js";import"./Group-D38pX208.js";import"./Input-Db4AGhyN.js";import"./Hidden-qasJP2Cu.js";import"./Button-BUgilED8.js";import"./useLabels-mUQxQX-2.js";import"./useButton-0YT_Gb4U.js";import"./useTextField-DZGYskYH.js";import"./useControlledState-BP1yiS2k.js";import"./useField-DFiBvVn6.js";import"./TextField.module-DdivwlC8.js";import"./Label-Cyx8o2TY.js";import"./Dialog-DqODIxB_.js";import"./OverlayArrow-Bkto-UNB.js";import"./useResizeObserver-C0jUuW8O.js";import"./Collection-CddT2mwo.js";import"./index-DRVte7H4.js";import"./Separator-h1reJ4ky.js";import"./SelectionManager-Ch8djR48.js";import"./useEvent-5R_vpykM.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-FRXTPgjb.js";import"./useDescription-Bok8djC6.js";import"./ListKeyboardDelegate-M0ueANy9.js";import"./PressResponder-CRbuKp7Q.js";import"./useLocalizedStringFormatter-BbfEnz-t.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BLh3lUuY.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-K6FaPgYL.js";import"./Button-G02mwiay.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CxYPA09E.js";import"./createLucideIcon-Dzsyexy7.js";import"./x-CBVQBqGf.js";import"./Heading-BO-m2inF.js";import"./info-Dhp3ut9P.js";import"./Popover-BSREQbrA.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(p,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    isAnimated: false
  },
  parameters: {
    docs: {
      source: {
        code: \`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>\`
      }
    }
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    isOnLayer01: true
  },
  render: args => <div style={{
    backgroundColor: variables.layer01Base,
    padding: '1rem'
  }}>
      <Skeleton {...args} data-testid='skeleton' />
    </div>
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  },
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <Skeleton {...args} data-testid='skeleton-1' />
      <Skeleton {...args} data-testid='skeleton-2' />
      <Skeleton {...args} data-testid='skeleton-3' />
    </div>
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  render: () => <div style={{
    display: 'flex',
    gap: '2rem',
    alignItems: 'flex-start'
  }}>
      <div style={{
      flex: 1
    }}>
        <h3 style={{
        marginTop: 0,
        fontSize: '1rem',
        fontWeight: 500
      }}>
          Skeleton (Loading)
        </h3>
        <Skeleton variant='form' size='large' />
      </div>
      <div style={{
      flex: 1
    }}>
        <h3 style={{
        marginTop: 0,
        fontSize: '1rem',
        fontWeight: 500
      }}>
          Actual TextField
        </h3>
        <TextField label='Namn' description='Fyll i ditt fullständiga namn' />
      </div>
    </div>
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,de as default};
