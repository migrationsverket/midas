import{j as a}from"./iframe-C8OYFDfe.js";import{T as o,a as i,s as D}from"./Tag-CNVLBITk.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CzoR2_QL.js";import"./utils-DzqiZkcJ.js";import"./clsx-B-dksMZM.js";import"./Hidden-BPnF0vgF.js";import"./useFocusRing-C-70Pw-9.js";import"./index-M858PuLa.js";import"./index-DH0V115W.js";import"./useLabels-Cpcihk6O.js";import"./useButton-DD5vYSUn.js";import"./Collection-BbHFY31Q.js";import"./index-BRbpPJ0G.js";import"./ListBox-ChjOhN6R.js";import"./DragAndDrop-CWtdld5G.js";import"./getScrollParent-DBLcxcGT.js";import"./scrollIntoView-D3CAyUrk.js";import"./Separator-BVSpFXIH.js";import"./SelectionManager-BcLKmIEH.js";import"./useEvent-xKCLR_TR.js";import"./SelectionIndicator-CVvpOn5S.js";import"./useDescription-DN65vc1r.js";import"./useControlledState-DdOVQOmn.js";import"./ListKeyboardDelegate-Bin3bk7t.js";import"./RSPContexts-BGovjLnb.js";import"./Text-ymlmeofs.js";import"./inertValue-BWrBJE57.js";import"./useListState-Dd9VHxgS.js";import"./useHighlightSelectionDescription-BNDv-3NL.js";import"./useUpdateEffect-Bd5qpgXu.js";import"./useLocalizedStringFormatter-Cq4pY9vx.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BQdR5YDp.js";import"./useField-BJBzlpLx.js";import"./clsx-Ciqy0D92.js";import"./Button-BjRE_LJs.js";import"./Button.module-CcWMkJAG.js";import"./x-CQnU_BOj.js";import"./createLucideIcon-DcUEygn2.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ms=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,ms as __namedExportsOrder,ps as default};
