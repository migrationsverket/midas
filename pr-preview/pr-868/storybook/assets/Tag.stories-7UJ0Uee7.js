import{j as a}from"./iframe-uBTkslfb.js";import{T as o,a as i,s as D}from"./Tag-BB4x9_io.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Br73K3db.js";import"./utils-CumDBnap.js";import"./clsx-B-dksMZM.js";import"./Hidden-BKWXvfJ5.js";import"./useFocusRing-DxnsZtzX.js";import"./index-DWpnBiZw.js";import"./index-CGAnqsB7.js";import"./useLabels-QE_p4m4P.js";import"./useButton-ZQnfcGOp.js";import"./Collection-Dnh3aGcH.js";import"./index-CULh-HCE.js";import"./ListBox-DI1Yr4g8.js";import"./DragAndDrop-zyTuJxxS.js";import"./getScrollParent-CcHNl4L9.js";import"./scrollIntoView-Dw77OiVa.js";import"./Separator-D1MHH6YR.js";import"./SelectionManager-BqNwJarN.js";import"./useEvent-Rpf5mPPv.js";import"./SelectionIndicator-B3qt10Yf.js";import"./useDescription-tf9xcBPd.js";import"./useControlledState-B10q2kbP.js";import"./ListKeyboardDelegate-DgptQr2I.js";import"./RSPContexts-DXqcv2hr.js";import"./Text-B2Lro3d-.js";import"./inertValue-DRYCU4Hw.js";import"./useListState-DGUlM9Sh.js";import"./useHighlightSelectionDescription-DJ-9J9XX.js";import"./useUpdateEffect-D7Zlpf84.js";import"./useLocalizedStringFormatter-C0kV7IvK.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-HD0qSyOF.js";import"./useField-CayOPNTG.js";import"./clsx-Ciqy0D92.js";import"./Button-D3HCsOWK.js";import"./Button.module-CcWMkJAG.js";import"./x-CGs0MDLB.js";import"./createLucideIcon-CnjrgaKQ.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
