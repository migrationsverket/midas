import{j as a}from"./iframe-DcZ5xzqZ.js";import{T as o,a as i,s as D}from"./Tag-Dq9ORePm.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CfSWfJFF.js";import"./utils-D6Yn0QYE.js";import"./clsx-B-dksMZM.js";import"./Hidden-BK8jyQ3o.js";import"./useFocusRing-C7Ohac8h.js";import"./index-BOYtEpaF.js";import"./index-CTmnlUfE.js";import"./useLabels-CY991DFS.js";import"./useButton-C82Ego0n.js";import"./Collection-vV7UHcLv.js";import"./index-CToKXnYJ.js";import"./ListBox-Co-OxLM0.js";import"./DragAndDrop-CfC78HMW.js";import"./getScrollParent-W2p4q2jL.js";import"./scrollIntoView-CuqBj6RA.js";import"./Separator-D0kKfQEQ.js";import"./SelectionManager-bxoMi63C.js";import"./useEvent-C0oAJR40.js";import"./SelectionIndicator-WgqEHOpE.js";import"./useDescription-DK6atxD5.js";import"./useControlledState-BWMx-3N8.js";import"./ListKeyboardDelegate-AhOgPzf9.js";import"./RSPContexts-E_hCFDGF.js";import"./Text-CReCzfYa.js";import"./inertValue-DVZSzvjz.js";import"./useListState-D_iD2ewh.js";import"./useHighlightSelectionDescription-CXFTMUhQ.js";import"./useUpdateEffect-Ch9wPygr.js";import"./useLocalizedStringFormatter-DMctv_Mv.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CxIObtys.js";import"./useField-NEPmUtz7.js";import"./clsx-Ciqy0D92.js";import"./Button-kJ-gYwXs.js";import"./Button.module-CcWMkJAG.js";import"./x-rhggwcW5.js";import"./createLucideIcon-D00WC-Mc.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
