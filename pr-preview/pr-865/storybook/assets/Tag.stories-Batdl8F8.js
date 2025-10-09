import{j as a}from"./iframe-Cl5_beEg.js";import{T as o,a as i,s as D}from"./Tag-UG0oFOhT.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CAw74QL-.js";import"./utils-D_oDwicM.js";import"./clsx-B-dksMZM.js";import"./Hidden-BlNFK_nZ.js";import"./useFocusRing-h3aI2Nju.js";import"./index-D3IbmBDI.js";import"./index-DqP8L41q.js";import"./useLabels-C1Z5tIpq.js";import"./useButton-DxWaPuEy.js";import"./Collection-lCoayKqL.js";import"./index-6lf5lzil.js";import"./ListBox-C39z3hsK.js";import"./DragAndDrop-lF1OC8K6.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BbSigyEg.js";import"./SelectionManager-nNmIjyD3.js";import"./useEvent-CsCTOnE4.js";import"./FocusScope-rHV_-unf.js";import"./useDescription-EvocwPRg.js";import"./useControlledState-CBe9DPcU.js";import"./context-Dsuun0If.js";import"./Text-BMC_jlEt.js";import"./inertValue-Dwz5UtPY.js";import"./useListState-sxpivUHb.js";import"./useHighlightSelectionDescription-B9XKQBqg.js";import"./useUpdateEffect-7j8LupHJ.js";import"./useLocalizedStringFormatter-IA-KMFo2.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CiU64d8s.js";import"./useField-DTxXhRQ7.js";import"./clsx-Ciqy0D92.js";import"./Button-_M9lUZij.js";import"./Button.module-CcWMkJAG.js";import"./x-2FCCvcNF.js";import"./createLucideIcon-Cjgv95oy.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
