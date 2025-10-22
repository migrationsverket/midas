import{j as a}from"./iframe-C-Iz7t6i.js";import{T as o,a as i,s as D}from"./Tag-DOyrnzGv.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BkoGYE1W.js";import"./utils-CAdDMJK0.js";import"./clsx-B-dksMZM.js";import"./Hidden-D-7VMopT.js";import"./useFocusRing-De_0TNrE.js";import"./index-GuzIBqYd.js";import"./index-R4lrnf9Z.js";import"./useLabels-CvJrZY8k.js";import"./useButton-DawvbpK9.js";import"./Collection-DvU4f6V1.js";import"./index-B6-XOfYU.js";import"./ListBox-CatalVQK.js";import"./DragAndDrop-BtgsyZMl.js";import"./getScrollParent-Dv4xV-sl.js";import"./scrollIntoView-CSgwx9N8.js";import"./Separator-DzUwmt-z.js";import"./SelectionManager-DVt92HLx.js";import"./useEvent-oq9Y1YOs.js";import"./SelectionIndicator-DULyMaTo.js";import"./useDescription-DjbadPBe.js";import"./useControlledState-Dc_4UTe2.js";import"./ListKeyboardDelegate-cqiw3FtI.js";import"./RSPContexts-Cmiq4kNp.js";import"./Text-Bn9yFLt3.js";import"./inertValue-3YLKBS7t.js";import"./useListState-D9owg7Mu.js";import"./useHighlightSelectionDescription-Igzpa33s.js";import"./useUpdateEffect-D08oHLV5.js";import"./useLocalizedStringFormatter-YclNVuG_.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-QsKcLBR-.js";import"./useField-CGYPppZ6.js";import"./clsx-Ciqy0D92.js";import"./Button-CpYljy5F.js";import"./Button.module-CcWMkJAG.js";import"./x-9vyyRTLN.js";import"./createLucideIcon-CgI9-cy6.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
