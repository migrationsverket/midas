import{j as e,l}from"./iframe-zmdm5LWO.js";import{S as t}from"./Skeleton-BvWh2MMP.js";import{T as p}from"./TextField-BZhr8UwO.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CmU4q7IK.js";import"./utils-BVXhqey2.js";import"./FieldError-CnGNBTtl.js";import"./Text-C_A67KfE.js";import"./useFocusRing-ChdwpxNy.js";import"./index-CR9Wusv4.js";import"./index-BM2_5E3m.js";import"./Text-BlbFrX8Z.js";import"./RSPContexts-CkA1USMd.js";import"./Form-B9squnXu.js";import"./Group-BfrZXSfh.js";import"./Input-C28jpw0n.js";import"./Hidden-Da0JYuUZ.js";import"./Button-CJHqtIe5.js";import"./useLabel-Di2CB_YG.js";import"./useLabels-Co4DVdbJ.js";import"./useButton-BIbblWcf.js";import"./useTextField-DFZmybEF.js";import"./useControlledState-CPsjL82m.js";import"./useField-TGoSKSzA.js";import"./TextField.module-DdivwlC8.js";import"./Label-DzCqChbE.js";import"./Dialog-DBdMj1h1.js";import"./OverlayArrow-ZJg9Y93d.js";import"./useResizeObserver-M4b8JNbB.js";import"./Collection-B_xTn3lN.js";import"./index-D_c3Fzu0.js";import"./Separator-CQQaiTiT.js";import"./SelectionManager-wVErokbN.js";import"./useEvent-xez8_YkI.js";import"./scrollIntoView-QLDgtXAW.js";import"./SelectionIndicator-32SJlHNX.js";import"./useDescription-rHa26S1A.js";import"./ListKeyboardDelegate-CRUYtTHH.js";import"./PressResponder-DQgjA9_y.js";import"./useLocalizedStringFormatter-LEYk1ZVN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BTUHhIU3.js";import"./getScrollParent-YKNs88UL.js";import"./VisuallyHidden-DeZC0Ok1.js";import"./ModalOverlay-BhtOmyBA.js";import"./x-XVyRqWEu.js";import"./createLucideIcon-BWu7CyXu.js";import"./useLocalizedStringFormatter-Crt7pDpL.js";import"./Heading-vsfnRndb.js";import"./Button-BYmNnQBF.js";import"./Button.module-BB7N-cLd.js";import"./info-DeAVHKcj.js";import"./Popover-Dmb00BHz.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
