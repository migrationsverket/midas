import{j as a}from"./iframe-8aOGVoYY.js";import{T as o,a as i,s as D}from"./Tag-DXGZtW9u.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BpLCxO34.js";import"./utils-BGBQKmsS.js";import"./clsx-B-dksMZM.js";import"./Hidden-B05IaqZU.js";import"./useFocusRing-BM_e1CjE.js";import"./index-B3Kl6RIR.js";import"./index-CT58_O9X.js";import"./useLabels-DAQ56Wi0.js";import"./useButton-D2b6JBQv.js";import"./Collection-BulS82IZ.js";import"./index-Djj6K-tB.js";import"./ListBox-PLNZ1do6.js";import"./DragAndDrop-SIedVd6h.js";import"./getScrollParent-DsLz0bur.js";import"./scrollIntoView-CLoF95Jk.js";import"./Separator-D6iLI0EF.js";import"./SelectionManager-OULn3j6Z.js";import"./useEvent-CzOKJzrT.js";import"./SelectionIndicator-D3g-EpYv.js";import"./useDescription-Ch33TRwI.js";import"./useControlledState-CtyAPlwP.js";import"./ListKeyboardDelegate-BNIvu5M5.js";import"./RSPContexts-CA7gRToJ.js";import"./Text-BHi9TWrv.js";import"./inertValue-3RwzfhfL.js";import"./useListState-C4Tv2p34.js";import"./useHighlightSelectionDescription-DruzKKqZ.js";import"./useUpdateEffect-ljIkOjUH.js";import"./useLocalizedStringFormatter-MrWGE9Jz.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DCM7ZCxw.js";import"./useField-CWd5Avud.js";import"./clsx-Ciqy0D92.js";import"./Button-Co28ezKJ.js";import"./Button.module-CcWMkJAG.js";import"./x-fA0PtMDg.js";import"./createLucideIcon-XlUtBxFE.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
