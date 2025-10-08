import{j as a}from"./iframe-BCOgvRjU.js";import{T as o,a as i,s as D}from"./Tag-M9466WK2.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-ZLCb5lb0.js";import"./utils-Bx4-w4ac.js";import"./clsx-B-dksMZM.js";import"./Hidden-Bec9QF5i.js";import"./useFocusRing-O05N72v3.js";import"./index-C2nrVgHw.js";import"./index-DiBhqaqo.js";import"./useLabels-rD-nwCsE.js";import"./useButton-SfO-VunH.js";import"./Collection-JxW8DREw.js";import"./index-Dui1ywd6.js";import"./ListBox-D6XREf1u.js";import"./DragAndDrop-CZLIT7fq.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BvDa2MQJ.js";import"./SelectionManager-BfEbyE-p.js";import"./useEvent-BVvBhiie.js";import"./FocusScope-TrZwP3OJ.js";import"./useDescription-DK8QI8IN.js";import"./useControlledState-D7su3UME.js";import"./context-BBA3m8aj.js";import"./Text-Ra6lvBBM.js";import"./inertValue-CyAy5AgU.js";import"./useListState-B2lNTJ0f.js";import"./useHighlightSelectionDescription-DacNI5If.js";import"./useUpdateEffect-BM1A-h2N.js";import"./useLocalizedStringFormatter-FwomM39N.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DLJWbqli.js";import"./useField-6ot9vA3b.js";import"./clsx-Ciqy0D92.js";import"./Button-_zUC8qXE.js";import"./Button.module-CcWMkJAG.js";import"./x-CrYn5CXe.js";import"./createLucideIcon-xbRug_nx.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
