import{j as a}from"./iframe-BdgLdgYE.js";import{T as o,a as i,s as D}from"./Tag-D37lN2pd.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-WyhW3_uk.js";import"./utils-BvcxwFyW.js";import"./clsx-B-dksMZM.js";import"./Hidden-CBixdTTx.js";import"./useFocusRing-CTNShohj.js";import"./index-bdnO63b_.js";import"./index-BK0Ncq4b.js";import"./useLabels-CvTKfdWu.js";import"./useButton-D5My0K8O.js";import"./Collection-BL_MIQ9r.js";import"./index-CkIM88CH.js";import"./ListBox-0KcyJf0b.js";import"./DragAndDrop-C7bS6ts4.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-C2Cu4Kwo.js";import"./SelectionManager-Ny1Sem7f.js";import"./useEvent-CC6p_nb1.js";import"./FocusScope-7ZFiyo7C.js";import"./useDescription-BLhSGx0Q.js";import"./useControlledState-CnQUdn_q.js";import"./ListKeyboardDelegate-CPp65dVC.js";import"./Text-l-A5Z5Hz.js";import"./inertValue-BYYWeGWj.js";import"./useListState-B1oRON4L.js";import"./useHighlightSelectionDescription-Bhtmh4oD.js";import"./useUpdateEffect-gXZaNdRA.js";import"./useLocalizedStringFormatter-ILYc6jSb.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-GHepJ7Pa.js";import"./useField-C3ODo7tn.js";import"./Button-DoG7b90P.js";import"./Button.module-DRhvPh0f.js";import"./x-BRdayo4W.js";import"./createLucideIcon-C7t1_r_C.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
