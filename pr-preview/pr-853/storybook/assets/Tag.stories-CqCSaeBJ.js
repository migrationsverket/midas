import{j as a}from"./iframe-DQA3pSQx.js";import{T as o,a as i,s as D}from"./Tag-CIMl2aDC.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CH-XL3vM.js";import"./utils-ZnSUEkcD.js";import"./clsx-B-dksMZM.js";import"./Hidden-BAAHXK11.js";import"./useFocusRing-BgC83NNd.js";import"./index-DA4EXxbL.js";import"./index-DH_Cse9T.js";import"./useLabels-BQ18LTKe.js";import"./useButton-B4J6CxCd.js";import"./Collection-CaMDem4D.js";import"./index-BgnmEzm3.js";import"./ListBox-DU1OcE77.js";import"./DragAndDrop-BhUk8UUd.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-C7QpM0Rp.js";import"./SelectionManager-CB57t2Jv.js";import"./useEvent-B5tcrgdZ.js";import"./FocusScope-rFdW1KA2.js";import"./useDescription-CxCK2ZLb.js";import"./useControlledState-CTOuJjbM.js";import"./context-pA0QXgEU.js";import"./Text-w4_TSq-q.js";import"./inertValue-Dlu8hXqI.js";import"./useListState-CCD-Qdij.js";import"./useHighlightSelectionDescription-21FOdH7e.js";import"./useUpdateEffect-Cl1CnZPS.js";import"./useLocalizedStringFormatter-B1jGGnZy.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-D4_EH-LR.js";import"./useField-b2sP3XyJ.js";import"./clsx-Ciqy0D92.js";import"./Button-Cl7rzNnC.js";import"./Button.module-DRhvPh0f.js";import"./x-CyHwwnm9.js";import"./createLucideIcon-Cyy33NVc.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
