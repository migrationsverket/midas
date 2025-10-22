import{j as a}from"./iframe-CD-IIfnK.js";import{T as o,a as i,s as D}from"./Tag-W5KladA-.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-D_gbEXqW.js";import"./utils-CUvDBW54.js";import"./clsx-B-dksMZM.js";import"./Hidden-Vum_PisX.js";import"./useFocusRing-erVSEtvh.js";import"./index-BIcPSdag.js";import"./index-DSQv2drZ.js";import"./useLabels-SkfViOZd.js";import"./useButton-py1kuCGq.js";import"./Collection-BSWBsnVC.js";import"./index-B9U6qvzC.js";import"./ListBox-DKuu4AUl.js";import"./DragAndDrop-C2en4-92.js";import"./getScrollParent-Bytov_A8.js";import"./scrollIntoView-BQW8ww20.js";import"./Separator-DUQbK5Lw.js";import"./SelectionManager-jyOBSS2S.js";import"./useEvent-CPWGqx2i.js";import"./SelectionIndicator-D5Om78zB.js";import"./useDescription-CzRRhaw7.js";import"./useControlledState-D8LuuRYE.js";import"./ListKeyboardDelegate-Dlkp45-9.js";import"./RSPContexts-Br_9Jfvd.js";import"./Text-B45Q9E2i.js";import"./inertValue-BQc-rhcz.js";import"./useListState-C_QeSQeX.js";import"./useHighlightSelectionDescription-aEa91x2f.js";import"./useUpdateEffect-By7v3ayn.js";import"./useLocalizedStringFormatter-D2ZlPW2f.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DoUSr8VE.js";import"./useField-CPtWaEdz.js";import"./clsx-Ciqy0D92.js";import"./Button-Bh6sZxib.js";import"./Button.module-CcWMkJAG.js";import"./x-C7fjqvSX.js";import"./createLucideIcon-FCeP3akY.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
