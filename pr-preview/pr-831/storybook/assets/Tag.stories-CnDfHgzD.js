import{j as a}from"./iframe-DesuP6km.js";import{T as o,a as i,s as D}from"./Tag-BJXSpf7P.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DLP1b58x.js";import"./utils-By6QO0qY.js";import"./clsx-B-dksMZM.js";import"./Hidden-DNfyX8zr.js";import"./useFocusRing-W916_-LX.js";import"./index-BocVLyBT.js";import"./index-BMuB0BIx.js";import"./useLabels-3JGzp0nE.js";import"./useButton-DlJDtYy7.js";import"./Collection-CZ_5_TsF.js";import"./index-DK-aNZhp.js";import"./ListBox-BHmhIy0K.js";import"./DragAndDrop-DFzAZXBj.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-Du1h1AUB.js";import"./SelectionManager-DPjYgA8D.js";import"./useEvent-BM4h1coB.js";import"./FocusScope-pat7hTxQ.js";import"./useDescription-COvNJEyk.js";import"./useControlledState-CVscyt6a.js";import"./context-EF4DsnaP.js";import"./Text-DBWTwUUE.js";import"./inertValue-BQjOfNV8.js";import"./useListState-AEdVwPHN.js";import"./useHighlightSelectionDescription-Br2bWKgb.js";import"./useUpdateEffect-B4d1JZhr.js";import"./useLocalizedStringFormatter-CtrESTft.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CU_OCqlt.js";import"./useField-DdNdr0sa.js";import"./Button-vHkfp-vl.js";import"./Button.module-DRhvPh0f.js";import"./x-C_XdU-xI.js";import"./createLucideIcon-BS6tifVw.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
