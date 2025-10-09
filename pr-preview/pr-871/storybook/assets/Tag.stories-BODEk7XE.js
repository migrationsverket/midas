import{j as a}from"./iframe-Cg9bsw0p.js";import{T as o,a as i,s as D}from"./Tag-AAOhJes7.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-0rg2-bJH.js";import"./utils-BDmz9ss0.js";import"./clsx-B-dksMZM.js";import"./Hidden-BqiN8Imq.js";import"./useFocusRing-kF5CxaXi.js";import"./index-DAAfdeRC.js";import"./index-Cs4yWL8O.js";import"./useLabels-63_LE9SZ.js";import"./useButton-DTh9iGdC.js";import"./Collection-DDZW8RfR.js";import"./index-Cil5p5iN.js";import"./ListBox-C02d2XzI.js";import"./DragAndDrop-BjFJ_W23.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CYyjx_IY.js";import"./SelectionManager-DoBfWb4c.js";import"./useEvent-CgpxcrA_.js";import"./FocusScope-zBz3U1rl.js";import"./useDescription-DI-g8NQy.js";import"./useControlledState-BpsuIfnv.js";import"./context-CGeub-CQ.js";import"./Text-MSMQ0onS.js";import"./inertValue-Co3VG_xM.js";import"./useListState-BaNxw9KH.js";import"./useHighlightSelectionDescription-CdVuHWhx.js";import"./useUpdateEffect-BT3fZg9u.js";import"./useLocalizedStringFormatter-BM43qOcR.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-LI0LzPmz.js";import"./useField-DRvaNt6S.js";import"./clsx-Ciqy0D92.js";import"./Button-COeQT7LJ.js";import"./Button.module-BF_N0uYf.js";import"./useLocalizedStringFormatter-9YzW9Y9N.js";import"./createLucideIcon-Br1vyvNC.js";import"./VisuallyHidden-Bbuxh2i9.js";import"./x-CttU90I7.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ms={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},r={args:{type:"success"}},e={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(n=(m=t.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var c,l,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: 'success'
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,g,T;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(T=(g=e.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ns=["Default","Status","Disabled"];export{t as Default,e as Disabled,r as Status,ns as __namedExportsOrder,ms as default};
