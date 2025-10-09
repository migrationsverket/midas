import{j as a}from"./iframe-CwJhxzVH.js";import{T as o,a as i,s as D}from"./Tag-o4SslXWQ.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Dz_kxykA.js";import"./utils-B7u-p3Ey.js";import"./clsx-B-dksMZM.js";import"./Hidden-VsmFYn9j.js";import"./useFocusRing-1NsBGyfn.js";import"./index-BYB2rjLj.js";import"./index-CQGlopZN.js";import"./useLabels-OVH5ORxP.js";import"./useButton-TsqQ9zD3.js";import"./Collection-BRegMs11.js";import"./index-Ca1L_VKR.js";import"./ListBox-Ck3a22LI.js";import"./DragAndDrop-CV8DXg2r.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CjVvf4pI.js";import"./SelectionManager-4u8-iCIx.js";import"./useEvent-C-CxLncA.js";import"./FocusScope-CdaVENzN.js";import"./useDescription-GcBK6TKJ.js";import"./useControlledState-BlLx2R-X.js";import"./context-BM990mgI.js";import"./Text-DGIO93lw.js";import"./inertValue-ClhEtZS9.js";import"./useListState-CVfCXFfZ.js";import"./useHighlightSelectionDescription-BntZr7SJ.js";import"./useUpdateEffect-C7vFE3Me.js";import"./useLocalizedStringFormatter-B8S07nK3.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DAhsdMf9.js";import"./useField-CeR6UcDS.js";import"./clsx-Ciqy0D92.js";import"./Button-DPJEYDZN.js";import"./Button.module-CcWMkJAG.js";import"./x-UvFAls-O.js";import"./createLucideIcon-56rveO51.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ps=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,ps as __namedExportsOrder,is as default};
