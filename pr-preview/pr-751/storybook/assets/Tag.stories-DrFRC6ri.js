import{j as a}from"./iframe-CJ3Bd2y9.js";import{T as o,a as i,s as _}from"./Tag-D0gqPEv1.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CbVG9CnY.js";import"./utils-BljoEF6y.js";import"./clsx-B-dksMZM.js";import"./Hidden-BN0dss75.js";import"./useFocusRing-CXzqdedF.js";import"./index-BWTL8kKo.js";import"./index-GG7ESPen.js";import"./useLabels-DXhq6q-U.js";import"./useButton-D-F3Pxzg.js";import"./Collection-DiFXlNVo.js";import"./index-BVjIFIOD.js";import"./ListBox-DnzFuHCk.js";import"./DragAndDrop-CFW8Kwac.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-TDol6n3-.js";import"./SelectionManager-CTnIdLtI.js";import"./useEvent-dISa9YQQ.js";import"./FocusScope-DJozF_sM.js";import"./useDescription-DJrtfGRe.js";import"./useControlledState-DvQi_fSx.js";import"./ListKeyboardDelegate-BMBPvwtt.js";import"./Text-BsIzxJls.js";import"./inertValue-d8yqZ17F.js";import"./useListState-Pmd0P4z_.js";import"./useField-D5LyFSZM.js";import"./useHighlightSelectionDescription-XT1F0cE-.js";import"./useUpdateEffect-D2ebvnUI.js";import"./useLocalizedStringFormatter-CZ7e4oHD.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Cs6hiEs6.js";import"./Button-BbM5QBn1.js";import"./Button.module-DKVuWS4g.js";import"./x-CkDCRd5w.js";import"./createLucideIcon-ShPBi3q4.js";const{expect:h}=__STORYBOOK_MODULE_TEST__,T="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":T,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:D}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{h(s.getByTestId(T)).toHaveClass(_.tag,D)})}},r={args:{type:"success"}},e={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(n=(m=t.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var c,l,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: 'success'
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,g,y;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(y=(g=e.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const is=["Default","Status","Disabled"];export{t as Default,e as Disabled,r as Status,is as __namedExportsOrder,os as default};
