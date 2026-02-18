import{j as e,l}from"./iframe-BMx8CJ_s.js";import{S as t}from"./Skeleton-u4-Ba-od.js";import{T as p}from"./TextField-EDffNNca.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CJ4eImKH.js";import"./utils-mLbJG5lt.js";import"./FieldError-CIeNzIqM.js";import"./Text-B5Nx5J8j.js";import"./useFocusRing-C7jWGJZo.js";import"./index-BdeXmt1O.js";import"./index-2hUmUoIt.js";import"./Text-Bta2s8Xv.js";import"./RSPContexts-1zG-hXcj.js";import"./Form-wsN3MSKu.js";import"./useFormValidation-BT0aeyXX.js";import"./Group-BUYU9Ldn.js";import"./Input-DSsNrpG8.js";import"./Hidden-bWwRORGP.js";import"./Button-DAS2aWUT.js";import"./useLabels-0a9zero9.js";import"./useButton-DYdnoqIL.js";import"./useTextField-B0Cqt9ot.js";import"./useControlledState-CbJAHATE.js";import"./useField-DV_7nNQX.js";import"./TextField.module-Cm6797Xw.js";import"./Label-Czki3lvX.js";import"./Dialog-CW_waJrw.js";import"./OverlayArrow-vxk6OKNl.js";import"./useResizeObserver-C8Cf5OiE.js";import"./Collection-GsaDwpcK.js";import"./index-DnwTQJ2n.js";import"./Separator-CS1vem8_.js";import"./SelectionManager-JGNYvAX4.js";import"./useEvent-D46soD9Y.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BmLr6iQk.js";import"./useDescription-cKJ3yPgP.js";import"./ListKeyboardDelegate-BuVhQcE2.js";import"./PressResponder-Ci3IKN5N.js";import"./useLocalizedStringFormatter-BgZX5ldx.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D0MpGRZ9.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C38pbAG2.js";import"./Button-Cj8oElf-.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CkXFCrEO.js";import"./createLucideIcon-BUxxpft6.js";import"./x-DY7xSTl4.js";import"./Heading-UhgDl-sW.js";import"./info-IIvgKs_a.js";import"./Popover-B7G8pIgx.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
