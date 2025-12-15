import{j as e,l}from"./iframe-Co4-ZyV5.js";import{S as t}from"./Skeleton-Cm5zGYw7.js";import{T as p}from"./TextField-CeVS9SBu.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CdkaPIoY.js";import"./utils-vPvXRE8s.js";import"./TextField-plfI76Av.js";import"./FieldError-CSfnBoG7.js";import"./Text-Bx2UjQld.js";import"./useFocusRing-CbWbCyA2.js";import"./index-D1TXxQim.js";import"./index-BKiR4w34.js";import"./Text-CUkg7ETr.js";import"./RSPContexts-tZwB9aRP.js";import"./Form-5LJYEI1L.js";import"./useFormValidation-CI-48dgm.js";import"./Group-DOtvSo3k.js";import"./Input-CHek4FOn.js";import"./Hidden-CYasrRch.js";import"./Button-vLKPKh4I.js";import"./useLabels-K3nzkU17.js";import"./useButton-D9ay2y--.js";import"./useTextField-CRtyHqAT.js";import"./useControlledState-DDOdSbPg.js";import"./useField-_kwhBzfX.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-Cg0PnWuC.js";import"./Dialog-Dud2RglH.js";import"./OverlayArrow-CQ5am-7L.js";import"./useResizeObserver-Dt5BqhmZ.js";import"./Collection-BuZqzAjC.js";import"./index-9onNA-i4.js";import"./Separator-CWMT8vJ-.js";import"./SelectionManager-D8RWiL9F.js";import"./useEvent-DQKm_hMB.js";import"./scrollIntoView-DG1uVoNN.js";import"./SelectionIndicator-Brr7wOT6.js";import"./useDescription-COIi7tGW.js";import"./ListKeyboardDelegate-livHJMAo.js";import"./PressResponder-k3eT1X3U.js";import"./useLocalizedStringFormatter-BWJA3tAg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-XNd_6Ui7.js";import"./VisuallyHidden-BuTNJIhE.js";import"./Button-DLfCs3xE.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-2nFP8uYy.js";import"./createLucideIcon-B4KpWunU.js";import"./x-Dz3fvaRV.js";import"./Heading-AMjd11G8.js";import"./info-CvdA68jv.js";import"./Popover-FzGA_rZP.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
