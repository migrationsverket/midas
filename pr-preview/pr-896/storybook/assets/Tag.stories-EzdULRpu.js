import{j as a}from"./iframe-DXGCxPm3.js";import{T as o,a as i,s as D}from"./Tag-DulTIi4G.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DG4jaNrE.js";import"./utils-DxqarOjY.js";import"./clsx-B-dksMZM.js";import"./Hidden-BTkRoyFq.js";import"./useFocusRing-DwGv69HM.js";import"./index-Bz1_5tUP.js";import"./index-D7wSTu6G.js";import"./useLabels-CT4w4FkN.js";import"./useButton-D9niaKF_.js";import"./Collection-DtJUruip.js";import"./index-yJvnDciI.js";import"./ListBox-BawPOzoN.js";import"./DragAndDrop-CdPSBF45.js";import"./getScrollParent-DzD3VtSn.js";import"./scrollIntoView-BhftPGSI.js";import"./Separator-AtNTYy-e.js";import"./SelectionManager-BpnNFQ4I.js";import"./useEvent-CrRQVnZ_.js";import"./SelectionIndicator-FJ35dM9-.js";import"./useDescription-Vr_Vclo7.js";import"./useControlledState--G5CtM0x.js";import"./ListKeyboardDelegate-BF2ZNd4Y.js";import"./RSPContexts-UMUbv5wS.js";import"./Text-CwLSjgVS.js";import"./inertValue-u_qCalkV.js";import"./useListState-B1oCFqkP.js";import"./useHighlightSelectionDescription-BqXhDz7f.js";import"./useUpdateEffect-Cck_SNDq.js";import"./useLocalizedStringFormatter-XxNjOZTu.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DfXmqL3A.js";import"./useField-DHeG3_JT.js";import"./clsx-Ciqy0D92.js";import"./Button-CRJqDX3c.js";import"./Button.module-CcWMkJAG.js";import"./x-DfEdv-pT.js";import"./createLucideIcon-B35o6XNE.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  play: async ({
    canvas,
    step,
    args: {
      className
    }
  }) => {
    await step('it should preserve its classNames when being passed new ones', async () => {
      expect(canvas.getByTestId(testID)).toHaveClass(styles.tag, className as string);
    });
  }
}`,...(n=(m=t.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var c,l,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: 'success'
  }
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,g,T;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ms=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,ms as __namedExportsOrder,ps as default};
