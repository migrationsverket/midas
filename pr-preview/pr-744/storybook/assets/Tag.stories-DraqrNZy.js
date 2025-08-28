import{j as a}from"./iframe-JTr4gq9D.js";import{T as o,a as i,s as _}from"./Tag-DUWrlcVz.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BLwjQO4b.js";import"./utils-Bx4Dt0bq.js";import"./clsx-B-dksMZM.js";import"./Hidden-DIiXKeAw.js";import"./useFocusRing-CbLxu3WS.js";import"./index-g6cWe-al.js";import"./index-3d2vR5fa.js";import"./useLabels-DkOfICx8.js";import"./useButton-CDEMr44G.js";import"./Collection-DyoWUq2Z.js";import"./index-C3F7Fzyg.js";import"./ListBox-LQ4VBbxU.js";import"./DragAndDrop-Dpa99LQ-.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BvESa1Tp.js";import"./SelectionManager-CdVJBCZg.js";import"./useEvent-BVXv5bLc.js";import"./FocusScope-CG6MKKzL.js";import"./useDescription-DeIhqwFt.js";import"./useControlledState-CzRnzZL9.js";import"./ListKeyboardDelegate-CkXpTqZL.js";import"./Text-tfXPfoS8.js";import"./inertValue-DtGFBFws.js";import"./useListState-EcjF-axx.js";import"./useField-C0RGatZc.js";import"./useHighlightSelectionDescription-DteG71kI.js";import"./useUpdateEffect-CuaGTUv3.js";import"./useLocalizedStringFormatter-BJGJtfgN.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BTNW0QJh.js";import"./Button-Bxc7q8hO.js";import"./Button.module-DKVuWS4g.js";import"./x-DHXwIEMO.js";import"./createLucideIcon-BHnEd9kD.js";const{expect:h}=__STORYBOOK_MODULE_TEST__,T="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":T,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:D}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{h(s.getByTestId(T)).toHaveClass(_.tag,D)})}},r={args:{type:"success"}},e={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
