import{j as a}from"./iframe-DcAJ2ZJg.js";import{T as o,a as i,s as D}from"./Tag-us-zvToE.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CnA_liPh.js";import"./utils-DfWfZ4K6.js";import"./clsx-B-dksMZM.js";import"./Hidden-DjKyp5I7.js";import"./useFocusRing-DoVCJMpb.js";import"./index-BEn_fgqG.js";import"./index-BImlJy0D.js";import"./useLabels-p4_MJdfd.js";import"./useButton-ipB-6l2O.js";import"./Collection-CWUdUZZa.js";import"./index-BDuo-erc.js";import"./ListBox-CUkxdSRM.js";import"./DragAndDrop-GN25Tqmn.js";import"./getScrollParent-CNQi9Fa9.js";import"./scrollIntoView-2p82eA0E.js";import"./Separator-DAjpg0ax.js";import"./SelectionManager-CSQjN2os.js";import"./useEvent-Dha3ld6E.js";import"./SelectionIndicator-fA30KV0w.js";import"./useDescription-qE97LE4s.js";import"./useControlledState-SuDFX2cU.js";import"./ListKeyboardDelegate-CWcazBLK.js";import"./RSPContexts-IxICh8ZI.js";import"./Text-CoOEDDOK.js";import"./inertValue-DL4AdwQI.js";import"./useListState-aXX3i4TO.js";import"./useHighlightSelectionDescription-BVuCaxQz.js";import"./useUpdateEffect-DHhpkC-F.js";import"./useLocalizedStringFormatter-CbwPFicv.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DVOoi_ip.js";import"./useField-DlnBTYPD.js";import"./clsx-Ciqy0D92.js";import"./Button-DeeuRJg4.js";import"./Button.module-CcWMkJAG.js";import"./x-D2COrIZu.js";import"./createLucideIcon-D3RYulYr.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
