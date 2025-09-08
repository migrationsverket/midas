import{j as a}from"./iframe-CADNkzDL.js";import{T as o,a as i,s as D}from"./Tag-Bcida6di.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Bkx5_CX5.js";import"./utils-BRQGvenZ.js";import"./clsx-B-dksMZM.js";import"./Hidden-kXRviXiR.js";import"./useFocusRing-B0w8zuTu.js";import"./index-CZU2Wv30.js";import"./index-BB0FSD4e.js";import"./useLabels-DFiehMC2.js";import"./useButton-DSo34csk.js";import"./Collection-D3dSPW-o.js";import"./index-Bvqlg8EC.js";import"./ListBox-W8JkzKpG.js";import"./DragAndDrop-gZxDhVaw.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-Dvfrth78.js";import"./SelectionManager-Bjqx3R_s.js";import"./useEvent-CL7TYj0q.js";import"./FocusScope-DRsYSSLF.js";import"./useDescription-DHfS0dmD.js";import"./useControlledState-6NNWky-C.js";import"./ListKeyboardDelegate-DEEWUJZ9.js";import"./Text-DsjhGdl_.js";import"./inertValue-DuuMTosU.js";import"./useListState-BaKBf6s1.js";import"./useHighlightSelectionDescription-SAXIenBo.js";import"./useUpdateEffect-Bs0AG0bs.js";import"./useLocalizedStringFormatter-DtS8zFu9.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-B7Ey0_7p.js";import"./useField-B9xH3dj3.js";import"./Button-B06MeP3H.js";import"./Button.module-BkTnSRp5.js";import"./x-70RmMTyE.js";import"./createLucideIcon-BN2OwsXr.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
