import{j as e,l}from"./iframe-CdV99NDU.js";import{S as t}from"./Skeleton-DK9u0KBv.js";import{T as p}from"./TextField-CkqmdZ0F.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DerDHHhj.js";import"./utils-CMfRIaXv.js";import"./TextField-QXxxNz3d.js";import"./FieldError-CzkKIm6d.js";import"./Text-DrXygMM2.js";import"./useFocusRing-e9aHRU6a.js";import"./index-BzgysReL.js";import"./index-yHLZSSmE.js";import"./Text-C43rwyi-.js";import"./RSPContexts-aiXnIDGZ.js";import"./Form-CAqYEDpD.js";import"./useFormValidation-KDukGO29.js";import"./Group-JJhUuNns.js";import"./Input-C9YU2iUD.js";import"./Hidden-B5huBJsQ.js";import"./Button-pO8fiD1O.js";import"./useLabels-BD260d70.js";import"./useButton-KkSusS_w.js";import"./useTextField-CAf1i9nO.js";import"./useControlledState-RbaACq8P.js";import"./useField-CYefFohu.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CDwmSx2A.js";import"./Dialog-CYr1tOJW.js";import"./OverlayArrow-DfWMMDPB.js";import"./useResizeObserver-Cbv0FbJp.js";import"./Collection-DqZyFB69.js";import"./index-p-XLETit.js";import"./Separator-CMc22emk.js";import"./SelectionManager-DHJky9qJ.js";import"./useEvent-CUH_UTTo.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DcarU12u.js";import"./useDescription-CMkoGRwr.js";import"./ListKeyboardDelegate-C05_rVzA.js";import"./PressResponder-CAYXo6yN.js";import"./useLocalizedStringFormatter-Bp1Nt6ma.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-_Bxr_lht.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-B5phWBq7.js";import"./Button-Dfhqrxs-.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dbxw2dmh.js";import"./createLucideIcon-B6F2wH1H.js";import"./x-BA1eIH_o.js";import"./Heading-CJMyDpVX.js";import"./info-B3aMcGeP.js";import"./Popover-C6fv9dIY.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
