import{j as a}from"./iframe-qKIy3wmY.js";import{T as o,a as i,s as D}from"./Tag-Beh0MW-Q.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BNA5GHnV.js";import"./utils-C8wEFA_1.js";import"./clsx-B-dksMZM.js";import"./Hidden-CR9G9F-Z.js";import"./useFocusRing-D7LswpKN.js";import"./index-CWLqntj6.js";import"./index-Cxn-Arms.js";import"./useLabels-CFL6Dk_m.js";import"./useButton-Ca3e_so5.js";import"./Collection-BH2msktS.js";import"./index-DfSn7kO2.js";import"./ListBox-BJX_O8_K.js";import"./DragAndDrop-6h9qkJlD.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-C_IrpxPT.js";import"./SelectionManager-DypYSELD.js";import"./useEvent-k8EmDulw.js";import"./FocusScope-rL2rmBfm.js";import"./useDescription-WtP7XJXN.js";import"./useControlledState-Tl8yVl-E.js";import"./context-Bukw511F.js";import"./Text-DcJXlnuB.js";import"./inertValue-C75HMJQS.js";import"./useListState-D2EHPciB.js";import"./useHighlightSelectionDescription-DmanQ9Ms.js";import"./useUpdateEffect-CW3Nz_13.js";import"./useLocalizedStringFormatter-CBomW2bk.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CASdvavH.js";import"./useField-PfvNjd5u.js";import"./clsx-Ciqy0D92.js";import"./Button-BGM324aV.js";import"./Button.module-DRhvPh0f.js";import"./x-u8GogN0C.js";import"./createLucideIcon-Dvj4P432.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
