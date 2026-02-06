import{j as e,l}from"./iframe-ATzl8XNu.js";import{S as t}from"./Skeleton-BDowwrGu.js";import{T as p}from"./TextField-J1K5pjyl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DHKdPHjq.js";import"./utils-Cephp3rV.js";import"./TextField-DSxispa-.js";import"./FieldError-C2MY82An.js";import"./Text-aG-TJfe-.js";import"./useFocusRing-ukiZ3Ae7.js";import"./index-CaW5UWpb.js";import"./index-V5YcHX-r.js";import"./Text-B2jI714W.js";import"./RSPContexts-g44b3QqL.js";import"./Form-D7ezNQUV.js";import"./useFormValidation-BIKLk_Xn.js";import"./Group-CDvS3XHI.js";import"./Input-DLyps54A.js";import"./Hidden-BWe0F6w6.js";import"./Button-D92ovwB_.js";import"./useLabels-tIVsswAO.js";import"./useButton-BsQSv027.js";import"./useTextField-Jm6rKQrq.js";import"./useControlledState-BW_0fp0P.js";import"./useField-CBkghgUG.js";import"./TextField.module-DpzeWGpt.js";import"./Label-D6Gm1eFR.js";import"./Dialog-BdxJMQJi.js";import"./OverlayArrow-pyy3CoI-.js";import"./useResizeObserver-CXP8YjLm.js";import"./Collection-ZnBZXNKj.js";import"./index-DR9JhBGy.js";import"./Separator-jps98X89.js";import"./SelectionManager-F7a4txdx.js";import"./useEvent-CSZRshWR.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DFa8mu4E.js";import"./useDescription-DCZ17iuR.js";import"./ListKeyboardDelegate-BCGM-8wK.js";import"./PressResponder-BQrkw8Wy.js";import"./useLocalizedStringFormatter-D8Kn80zC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bcg8ghzt.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-B7WhOGok.js";import"./Button-Bsz6RG7e.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-OfhFidRK.js";import"./createLucideIcon-JvePCe7s.js";import"./x-BmEx4eXF.js";import"./Heading-BTXgxYvk.js";import"./info-Bqh14NSG.js";import"./Popover-BpJW7gGU.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
