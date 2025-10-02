import{j as a}from"./iframe-C-cO9dTk.js";import{T as o,a as i,s as D}from"./Tag-BsIJ3TA_.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Bhk0wMGA.js";import"./utils-DsfcK0M7.js";import"./clsx-B-dksMZM.js";import"./Hidden-D4N2JMJl.js";import"./useFocusRing-CLoA7Dmn.js";import"./index-G1Nd4Jrd.js";import"./index-DyzM1ODZ.js";import"./useLabels-D4yfvU4D.js";import"./useButton-D0cuswlb.js";import"./Collection-IlkzefHh.js";import"./index-gGjaACYU.js";import"./ListBox-DUJMgqFq.js";import"./DragAndDrop-DWkqRMVO.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BIeNemKu.js";import"./SelectionManager-DodyJ2ZP.js";import"./useEvent-Cy-qvmGW.js";import"./FocusScope-D6zIDLjN.js";import"./useDescription-CI31J1SQ.js";import"./useControlledState-CHOYivPB.js";import"./context-DsRt6DbB.js";import"./Text-CZUe-TO6.js";import"./inertValue-CojHPyc-.js";import"./useListState-BCi3z8KW.js";import"./useHighlightSelectionDescription-BW4rRFQe.js";import"./useUpdateEffect-CKa0lbxA.js";import"./useLocalizedStringFormatter-BcKtYOVH.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-TasmCfda.js";import"./useField-D_MiOTtu.js";import"./clsx-Ciqy0D92.js";import"./Button-DirqDxsV.js";import"./Button.module-DRhvPh0f.js";import"./x-BB_qWtrS.js";import"./createLucideIcon-BSMzbUPz.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
