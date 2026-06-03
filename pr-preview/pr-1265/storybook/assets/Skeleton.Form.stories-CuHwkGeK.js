import{j as e,l}from"./iframe-B-lTFvoy.js";import{S as t}from"./Skeleton-B3dzkxdo.js";import{T as p}from"./TextField-BrzF4MLn.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-qn9HXdRq.js";import"./utils-BvE7c9kg.js";import"./FieldError-BUQWfKIf.js";import"./Text-BcmCG7pr.js";import"./useFocusRing-1mXKXGvg.js";import"./index-DmPhFD94.js";import"./index-DAnTlNFf.js";import"./Text-C1H4pvzD.js";import"./RSPContexts-D3IvaYAD.js";import"./Form-BkPykOZH.js";import"./Group-X44LMo-J.js";import"./Input-DgIPJVVr.js";import"./Hidden-DgGj9s0X.js";import"./Button-DxSNXM4z.js";import"./useLabel-D3_Mwj4N.js";import"./useLabels-DPXFFgdJ.js";import"./useButton-BpEh7YD9.js";import"./useTextField-CUyjL-LP.js";import"./useControlledState-CblkDfUl.js";import"./useField-CZNhYKxr.js";import"./TextField.module-DdivwlC8.js";import"./Label-VFVkv4nl.js";import"./Dialog-peOVGIQh.js";import"./OverlayArrow--7LO6zbc.js";import"./useResizeObserver-BsnyFbXq.js";import"./Collection-DN7kv7Ki.js";import"./index-D871kQeG.js";import"./Separator-B2k8Seix.js";import"./SelectionManager-CyiCJxHi.js";import"./useEvent-CDFu6uQE.js";import"./scrollIntoView-YOf-cX1Z.js";import"./SelectionIndicator-D3wtYqkk.js";import"./useDescription-C3Cr_Jxc.js";import"./ListKeyboardDelegate-BUJNuGNB.js";import"./PressResponder-Bohcd8Do.js";import"./useLocalizedStringFormatter-DFJodF-E.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-VgwKKx1S.js";import"./getScrollParent-C7d2R0II.js";import"./VisuallyHidden-BBaBjIdQ.js";import"./ModalOverlay-dZTLCVIM.js";import"./x-CB9WHZye.js";import"./createLucideIcon-DTdT2pbF.js";import"./useLocalizedStringFormatter-Cmv69HRb.js";import"./Heading-B0wvQHWV.js";import"./Button-aUjqyot5.js";import"./Button.module-BB7N-cLd.js";import"./info-D-sGA9gx.js";import"./Popover-B2RgYLbH.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
