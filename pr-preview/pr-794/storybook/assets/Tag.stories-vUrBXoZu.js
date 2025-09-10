import{j as a}from"./iframe-BGRj5jui.js";import{T as o,a as i,s as D}from"./Tag-BxA0pcAa.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-C8fcYfhr.js";import"./utils-jQqyXbP1.js";import"./clsx-B-dksMZM.js";import"./Hidden-Bjf-3MOG.js";import"./useFocusRing-iy0Y3yYt.js";import"./index-BuN8I1MC.js";import"./index-a0A5RBhO.js";import"./useLabels-BydcNipU.js";import"./useButton-ahfIUT-F.js";import"./Collection-_sPfzeFB.js";import"./index-C3dEnVQp.js";import"./ListBox-BPr6dtsG.js";import"./DragAndDrop-PlhuPdh4.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-D52gebS3.js";import"./SelectionManager-Bh87KW-y.js";import"./useEvent-JzhQ5xyU.js";import"./FocusScope-BCEnnxn5.js";import"./useDescription-DUV7sgLE.js";import"./useControlledState-xKkhWiaw.js";import"./ListKeyboardDelegate-DBhxONsp.js";import"./Text-CVvnQfNU.js";import"./inertValue-DFgrGcHP.js";import"./useListState-D80CKR-x.js";import"./useHighlightSelectionDescription-D5Zl3P6g.js";import"./useUpdateEffect-Dg4x2-5k.js";import"./useLocalizedStringFormatter-CWz066uY.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-ChCkKd7J.js";import"./useField-COZlmZ_W.js";import"./Button-BZx88TdH.js";import"./Button.module-GuOSDIYz.js";import"./x-C0Qt6l3p.js";import"./createLucideIcon-BuVmJUgQ.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
