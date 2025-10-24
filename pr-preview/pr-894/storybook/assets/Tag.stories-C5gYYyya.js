import{j as a}from"./iframe-tJ1bQdC5.js";import{T as o,a as i,s as D}from"./Tag-y91OP7Tv.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BRT3HrV0.js";import"./utils-Dtxack5N.js";import"./clsx-B-dksMZM.js";import"./Hidden-CXq-jgdK.js";import"./useFocusRing-4WojVJSR.js";import"./index-DkpH3wrQ.js";import"./index-hqimuXeh.js";import"./useLabels-Da4Pfe9K.js";import"./useButton-DAv_0PdS.js";import"./Collection-f3P3waPL.js";import"./index-BnzxF8u6.js";import"./ListBox-DNog3C_s.js";import"./DragAndDrop-DAPXFB6f.js";import"./getScrollParent-CzTp92yE.js";import"./scrollIntoView-BzzKEx0E.js";import"./Separator-8u1Zsf_8.js";import"./SelectionManager-DUp_tRyz.js";import"./useEvent-CVTaPBLg.js";import"./SelectionIndicator-27s8SBRr.js";import"./useDescription-HWLvDS9e.js";import"./useControlledState-u6N7Zwya.js";import"./ListKeyboardDelegate-C_9QbavB.js";import"./RSPContexts-BMGwmn_l.js";import"./Text-BEYvTD8y.js";import"./inertValue-BWFkyBDM.js";import"./useListState-DWIFYhx4.js";import"./useHighlightSelectionDescription-8lMMV4li.js";import"./useUpdateEffect-DmodTaVU.js";import"./useLocalizedStringFormatter-o71fyDnk.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CB97k3xm.js";import"./useField-BIoKLr4w.js";import"./clsx-Ciqy0D92.js";import"./Button-DIbFlLKN.js";import"./Button.module-CcWMkJAG.js";import"./x-Di-l2pcs.js";import"./createLucideIcon-DztohNQ2.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
