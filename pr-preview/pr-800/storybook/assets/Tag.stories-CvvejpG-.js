import{j as a}from"./iframe-C4zOpDmo.js";import{T as o,a as i,s as D}from"./Tag-S-QOph4h.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CCOwQLb-.js";import"./utils-CM3FGMCU.js";import"./clsx-B-dksMZM.js";import"./Hidden-9IIPIzpX.js";import"./useFocusRing-CYYkn1ko.js";import"./index-SZeSXddZ.js";import"./index-ghJQV6Us.js";import"./useLabels-CCgTKvzn.js";import"./useButton-DDBQS4d5.js";import"./Collection-BmGO_uN5.js";import"./index-CQfKhGmE.js";import"./ListBox-YGUD48HU.js";import"./DragAndDrop-71rRAQQc.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-VTe61BcV.js";import"./SelectionManager-BrQwy7X0.js";import"./useEvent-DCMK44Hn.js";import"./FocusScope-EgPZe0-x.js";import"./useDescription-xM7FDMSw.js";import"./useControlledState-DXNGYwbF.js";import"./ListKeyboardDelegate-BRlhBtTg.js";import"./Text-BnjhMhVk.js";import"./inertValue-yHdG7Qqf.js";import"./useListState-D6p2Waoq.js";import"./useHighlightSelectionDescription-BBb8tWEV.js";import"./useUpdateEffect-BDphaUbt.js";import"./useLocalizedStringFormatter-B5nf6F0g.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BVTg8F0F.js";import"./useField-C-AI9shR.js";import"./Button-B5XXxa4j.js";import"./Button.module-DRhvPh0f.js";import"./x-BqSAmWTo.js";import"./createLucideIcon-CVso7Nq-.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
