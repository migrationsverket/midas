import{j as a}from"./iframe-Ba3mC7SB.js";import{T as o,a as i,s as D}from"./Tag-BPBNapFN.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-B_SNKqey.js";import"./utils-C1iq5Lk6.js";import"./clsx-B-dksMZM.js";import"./Hidden-Cyy7t6rt.js";import"./useFocusRing-CAGohK0F.js";import"./index-sDsl5weH.js";import"./index-CaVyFZs_.js";import"./useLabels-91mmodFz.js";import"./useButton-Z7KtdJqb.js";import"./Collection-Dce8_Pfs.js";import"./index-Ddd1EZkB.js";import"./ListBox-D8veiAYL.js";import"./DragAndDrop-BRqKFTwn.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-B7hGvaOY.js";import"./SelectionManager-93RkxrRK.js";import"./useEvent-cyrTRrNF.js";import"./FocusScope-kf1Z3w66.js";import"./useDescription-CgNTBD15.js";import"./useControlledState-Cy0p7dTM.js";import"./context-BQl7IJ5p.js";import"./Text-C1bn72QV.js";import"./inertValue-OoRbpmcc.js";import"./useListState-DJPzrqFX.js";import"./useHighlightSelectionDescription-BmSqSJUM.js";import"./useUpdateEffect-Cj7gIwAC.js";import"./useLocalizedStringFormatter-BjaEQKSr.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CK7a5L3k.js";import"./useField-CU3OZWsD.js";import"./clsx-Ciqy0D92.js";import"./Button-DwOA7W77.js";import"./Button.module-CcWMkJAG.js";import"./x-BRi4fkBr.js";import"./createLucideIcon-DSEMZEa1.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
