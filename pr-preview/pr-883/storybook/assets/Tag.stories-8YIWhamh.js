import{j as a}from"./iframe-Cl-IxzW2.js";import{T as o,a as i,s as D}from"./Tag-DUitbRrf.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-LkC1UpGg.js";import"./utils-B2mIuDPs.js";import"./clsx-B-dksMZM.js";import"./Hidden-Cr-wqARM.js";import"./useFocusRing-Bfe6xskX.js";import"./index-0TIGKTvV.js";import"./index-CcWeR_oV.js";import"./useLabels-DsjYxx_a.js";import"./useButton-DTtBk3fV.js";import"./Collection-DDwlsHIf.js";import"./index-DunOwbwX.js";import"./ListBox-B9SDYMwk.js";import"./DragAndDrop-HAbuGC-s.js";import"./getScrollParent-BP3Ydz1Q.js";import"./scrollIntoView-Bc7GjbOz.js";import"./Separator-CP5s0B8e.js";import"./SelectionManager-C9j4OZKK.js";import"./useEvent-B9WwUMQP.js";import"./SelectionIndicator-NIbEJ2HE.js";import"./useDescription-D0cbZW13.js";import"./useControlledState-B3UdsKuL.js";import"./ListKeyboardDelegate-DN-p9tKL.js";import"./RSPContexts-BEvpjN30.js";import"./Text-Bc_Hrdnn.js";import"./inertValue-ZohMtbwv.js";import"./useListState-DyA1cb1B.js";import"./useHighlightSelectionDescription-EbFq2L2P.js";import"./useUpdateEffect-DyqDLELP.js";import"./useLocalizedStringFormatter-BQZjYyQ8.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DAsKBqKT.js";import"./useField-CmX4HUIk.js";import"./clsx-Ciqy0D92.js";import"./Button-CsoiTdy1.js";import"./Button.module-CcWMkJAG.js";import"./x-hjMh2xA_.js";import"./createLucideIcon-Czf68ecY.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
