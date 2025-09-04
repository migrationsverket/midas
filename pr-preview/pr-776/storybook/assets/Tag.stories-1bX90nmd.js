import{j as a}from"./iframe-CN_yL12w.js";import{T as o,a as i,s as D}from"./Tag-B3iwBFZy.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-B64mDLDr.js";import"./utils-CeeuZE1p.js";import"./clsx-B-dksMZM.js";import"./Hidden-q_RpAWvD.js";import"./useFocusRing-D8-w_OEY.js";import"./index-B1dkH4Tx.js";import"./index-Bw5AH5dE.js";import"./useLabels-BPveYFUn.js";import"./useButton-BdLyQ7RK.js";import"./Collection-B0-0gA29.js";import"./index-BtUcjMxu.js";import"./ListBox-DakNItNd.js";import"./DragAndDrop-wF13uy1q.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-B2Bk5eUd.js";import"./SelectionManager-Cd7_qbj6.js";import"./useEvent-BGg2fppv.js";import"./FocusScope-BxIuhKIG.js";import"./useDescription-Cy4jLEmJ.js";import"./useControlledState-D8NuGAIP.js";import"./ListKeyboardDelegate-CBPQL1Bb.js";import"./Text-BGntVnAb.js";import"./inertValue-D3E137G3.js";import"./useListState-DTsQssM4.js";import"./useHighlightSelectionDescription-Drs96lZv.js";import"./useUpdateEffect-DinujWSC.js";import"./useLocalizedStringFormatter-ZSr1NUdl.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CSgSNCPQ.js";import"./useField-DbVni0eH.js";import"./Button-e99RFJRf.js";import"./Button.module-DWkXlqFG.js";import"./x-D_n1jU0Z.js";import"./createLucideIcon-BfGcVdzf.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
