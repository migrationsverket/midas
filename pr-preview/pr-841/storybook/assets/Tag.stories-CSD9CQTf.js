import{j as a}from"./iframe-CyJoHm5r.js";import{T as o,a as i,s as D}from"./Tag-Cz4RN50C.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-By-exDXn.js";import"./utils-ModePnfM.js";import"./clsx-B-dksMZM.js";import"./Hidden-CGgZ1HBg.js";import"./useFocusRing-Cdi7Z3Mg.js";import"./index-B3oeCMYp.js";import"./index-Bey9dCPE.js";import"./useLabels-BGv5yGGP.js";import"./useButton-CE5ZjOXe.js";import"./Collection-BM9eZGjV.js";import"./index-C1e_-02s.js";import"./ListBox-VoSaBXtF.js";import"./DragAndDrop-Up2po57R.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BDGRqg_U.js";import"./SelectionManager-Iu_88NXJ.js";import"./useEvent-PlLh5oPN.js";import"./FocusScope-BF3BROM-.js";import"./useDescription-FWA6z8UB.js";import"./useControlledState-B4yFBrLg.js";import"./context-lCuN0NLQ.js";import"./Text-BKcGGv-L.js";import"./inertValue-C9ksx0P0.js";import"./useListState-DviwjtGh.js";import"./useHighlightSelectionDescription-BEmdK-2v.js";import"./useUpdateEffect-1CgTJ6UV.js";import"./useLocalizedStringFormatter-BM5Ffnnd.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-ptW3zmq1.js";import"./useField-Cd_XVAQP.js";import"./Button-BnaKgPAZ.js";import"./Button.module-DRhvPh0f.js";import"./x-C7_O_qWj.js";import"./createLucideIcon-CzLf1g6E.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
