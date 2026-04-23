import{j as e,l}from"./iframe-BYwHSihz.js";import{S as t}from"./Skeleton-D7jWbZgc.js";import{T as p}from"./TextField-BLlgR59R.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Dg5AaZZh.js";import"./utils-Dh-IoFbm.js";import"./FieldError-BWBSyxmE.js";import"./Text-DJX_2QXd.js";import"./useFocusRing-DxmY0qcu.js";import"./index-CpfVIqpP.js";import"./index-d1liSO_o.js";import"./Text-BHNKCnwU.js";import"./RSPContexts-BAR4w1ha.js";import"./Form-xzTb284W.js";import"./Group-CHWkQxXC.js";import"./Input-d_MJQ0-d.js";import"./Hidden-DpptCkiu.js";import"./Button-DOnb1gUF.js";import"./useLabel-AYJIbpQy.js";import"./useLabels-C66ukF51.js";import"./useButton-xvHSlbxN.js";import"./useTextField-DGxfNyX_.js";import"./useControlledState-CJUIxKhT.js";import"./useField-Civc57Hk.js";import"./TextField.module-DdivwlC8.js";import"./Label-B2rCp1Xp.js";import"./Dialog-CrSFGI4p.js";import"./OverlayArrow-r7TCtT7t.js";import"./useResizeObserver-APOBPQ6V.js";import"./Collection-Bo1oU8IZ.js";import"./index-Cu1eBBaC.js";import"./Separator-DCA-sdeI.js";import"./SelectionManager-iLot_8Vm.js";import"./useEvent-CBrs3Ilv.js";import"./scrollIntoView-D2NUCauH.js";import"./SelectionIndicator-jYxL6MKO.js";import"./useDescription-CMXfddmg.js";import"./ListKeyboardDelegate-Dk9ALlMi.js";import"./PressResponder-LcoGqm7p.js";import"./useLocalizedStringFormatter-CIU3iXEN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dz0orPwe.js";import"./getScrollParent-DQgl8KcT.js";import"./VisuallyHidden-2UqtjUFf.js";import"./ModalOverlay-DXb41Uo_.js";import"./x-CQCbnBEa.js";import"./createLucideIcon-COPS1n-B.js";import"./useLocalizedStringFormatter-7gjKuEfr.js";import"./Heading-CGdHWwLi.js";import"./Button-crEn75HL.js";import"./Button.module-BB7N-cLd.js";import"./info-C6ypPFRL.js";import"./Popover-JkrvUn9z.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
