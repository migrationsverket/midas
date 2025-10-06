import{j as a}from"./iframe-D_hTK4X1.js";import{T as o,a as i,s as D}from"./Tag-C1Rwz7no.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Ch4Gz5Ik.js";import"./utils-CiqmWvjL.js";import"./clsx-B-dksMZM.js";import"./Hidden-CUqH_Aka.js";import"./useFocusRing-De9yw-yS.js";import"./index-DtsIDssv.js";import"./index-8vmSkrgO.js";import"./useLabels-EmgWstHh.js";import"./useButton-hEwtYoDI.js";import"./Collection-DmoB5SEy.js";import"./index-CwIowub5.js";import"./ListBox-CIIjXXP_.js";import"./DragAndDrop-n5luPepA.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-dG5M_nkd.js";import"./SelectionManager-CpI--dVM.js";import"./useEvent-Cp5SkwCn.js";import"./FocusScope-1lvk-T85.js";import"./useDescription-C9_Kr9nw.js";import"./useControlledState-BOdlhhr9.js";import"./context-BDdaGlE6.js";import"./Text-BnLZ2TS-.js";import"./inertValue-DzUDv45e.js";import"./useListState-7N8J9bfw.js";import"./useHighlightSelectionDescription-WHmKBn1b.js";import"./useUpdateEffect-CqCCeTcj.js";import"./useLocalizedStringFormatter-CHEokgb2.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-D5C3siPH.js";import"./useField-BThY6ti8.js";import"./clsx-Ciqy0D92.js";import"./Button-DuJaJy5c.js";import"./Button.module-DRhvPh0f.js";import"./x-ECbtACyJ.js";import"./createLucideIcon-D64OBT21.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
