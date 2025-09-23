import{j as a}from"./iframe-BKfQqCJ-.js";import{T as o,a as i,s as D}from"./Tag-sSf7ID9R.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BBmGPuy0.js";import"./utils-Cq_JvdRL.js";import"./clsx-B-dksMZM.js";import"./Hidden-BnMgWm1R.js";import"./useFocusRing-Dfuc2Vp9.js";import"./index-DmPK7dVD.js";import"./index-Blt6LKFp.js";import"./useLabels-DtGPBlpw.js";import"./useButton-BOtP_vgu.js";import"./Collection-DZdBso4x.js";import"./index-DANWogtf.js";import"./ListBox-BFoI0qLN.js";import"./DragAndDrop-CytvPNNJ.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DWaiJKJA.js";import"./SelectionManager-DksGzdL9.js";import"./useEvent-DQ9P-b2j.js";import"./FocusScope-CEu85w4S.js";import"./useDescription-BlPwYZVf.js";import"./useControlledState-CgGm4NM9.js";import"./ListKeyboardDelegate-qOLm4ibK.js";import"./Text-3-bLkHlZ.js";import"./inertValue-CIl7UYAx.js";import"./useListState-DUkgaorG.js";import"./useHighlightSelectionDescription-x-NspqcG.js";import"./useUpdateEffect-B9nKezd1.js";import"./useLocalizedStringFormatter-B9qe4_yB.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CLR8t3AA.js";import"./useField-BRLSFBhF.js";import"./Button-DxcKNOmO.js";import"./Button.module-DRhvPh0f.js";import"./x-BTmK_xeb.js";import"./createLucideIcon-DO94F0NE.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const is=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,is as __namedExportsOrder,os as default};
