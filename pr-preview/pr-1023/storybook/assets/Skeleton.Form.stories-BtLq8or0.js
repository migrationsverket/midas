import{j as e,l}from"./iframe-DLG9UKPd.js";import{S as t}from"./Skeleton-BfH4e6HI.js";import{T as p}from"./TextField-VxjgyUws.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BNywrL7D.js";import"./utils-DBUuZCdW.js";import"./TextField-s1mnnBVa.js";import"./FieldError-crXTrtj0.js";import"./Text-BSfpdnWo.js";import"./useFocusRing-CPajt0l2.js";import"./index-BfkNjs9H.js";import"./index-Dhh4UqYu.js";import"./Text-RyRTgpJt.js";import"./RSPContexts-B1mSspvQ.js";import"./Form-DM08mJyW.js";import"./useFormValidation-DMkWfSjQ.js";import"./Group-CWaYRlj-.js";import"./Input-BLbmkuZd.js";import"./Hidden-BrEjSDmZ.js";import"./Button-TurWYA_F.js";import"./useLabels-Bt1wH29Q.js";import"./useButton-DVAUhmi8.js";import"./useTextField-Co9_Q0hz.js";import"./useControlledState-DKvDtRay.js";import"./useField-BIKHvwdL.js";import"./TextField.module-1fNSVGjT.js";import"./Label-B3SkrlHm.js";import"./Dialog-HPYNLG1w.js";import"./OverlayArrow-C7NIMeCm.js";import"./useResizeObserver-Bj0of0Zm.js";import"./Collection-D7DCZQ7p.js";import"./index-BkR-K3nJ.js";import"./Separator-C51Xr8n7.js";import"./SelectionManager-Cs0Oc9Y9.js";import"./useEvent-B9M_w_TJ.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-_XobMEGX.js";import"./useDescription-CNKvzn77.js";import"./ListKeyboardDelegate-CAHUNpaI.js";import"./PressResponder-sF-hqXVX.js";import"./useLocalizedStringFormatter-DIbN7jUK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D2z5fIdw.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CqsIInob.js";import"./Button-BSBQeMEK.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BgfRRBj_.js";import"./createLucideIcon-BPNvabKa.js";import"./x-Cu5S1DSw.js";import"./Heading-Dnzz1pkx.js";import"./info-BwUjhGZU.js";import"./Popover-Cfoyvvnu.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(p,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ge=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,o as Medium,a as Multiple,n as NoAnimation,i as OnLayer01,ge as __namedExportsOrder,ce as default};
