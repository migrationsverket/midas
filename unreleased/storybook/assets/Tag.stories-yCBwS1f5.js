import{j as a}from"./iframe-C0PCRCkO.js";import{T as o,a as i,s as D}from"./Tag-BdcIfmXZ.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BVnti8bG.js";import"./utils-DpVG-ipu.js";import"./clsx-B-dksMZM.js";import"./Hidden-EKaMX1qv.js";import"./useFocusRing-8Q4V7Hyt.js";import"./index-CxMvqUxZ.js";import"./index-CbYfoCda.js";import"./useLabels-BWLBFXAh.js";import"./useButton-BPUoaxOu.js";import"./Collection-nAv8Igft.js";import"./index-fkFBwqMy.js";import"./ListBox-CHro7Mvm.js";import"./DragAndDrop-C9HwE-Jc.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BuX4GZyi.js";import"./SelectionManager-B-i3dDZU.js";import"./useEvent-DU28e7fq.js";import"./FocusScope-BrrGmWgW.js";import"./useDescription-B2zPAnd2.js";import"./useControlledState-pVfQK387.js";import"./context-C1tYqZyM.js";import"./Text-BzGSpgeR.js";import"./inertValue-DToNECl5.js";import"./useListState-DjaT4jDR.js";import"./useHighlightSelectionDescription-D79lybyB.js";import"./useUpdateEffect-QmB5rrXQ.js";import"./useLocalizedStringFormatter-BrsARl8Y.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-H6OMlDXW.js";import"./useField-z8bvFzBr.js";import"./Button-C-E46qiS.js";import"./Button.module-DRhvPh0f.js";import"./x-DlLbhjvs.js";import"./createLucideIcon-t963rzNU.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
