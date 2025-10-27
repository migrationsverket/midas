import{j as a}from"./iframe-Buek6kz-.js";import{T as o,a as i,s as D}from"./Tag-CwCTbGMC.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-C1GVd9vs.js";import"./utils-CeaKCCXr.js";import"./clsx-B-dksMZM.js";import"./Hidden-0NE9Uh0U.js";import"./useFocusRing-CXChxsND.js";import"./index-BVY5DqbJ.js";import"./index-Rjg-Au0Q.js";import"./useLabels-pfXsCxxY.js";import"./useButton-BRywGHaG.js";import"./Collection-BpOZGhpH.js";import"./index-yFNkdEFF.js";import"./ListBox-DbA9YLJ2.js";import"./DragAndDrop-BV2n2vdW.js";import"./getScrollParent-B574bvB2.js";import"./scrollIntoView-DJz-hZZA.js";import"./Separator-BpqaPhIE.js";import"./SelectionManager-Daog7qVx.js";import"./useEvent-CNClmccm.js";import"./SelectionIndicator-jJngRtJi.js";import"./useDescription-DMg79PJL.js";import"./useControlledState-DA-5gQ4E.js";import"./ListKeyboardDelegate-DtL824MV.js";import"./RSPContexts-_pfma5_K.js";import"./Text-j6INtN3o.js";import"./inertValue-DWvn7dx3.js";import"./useListState-Dc2Q0NKm.js";import"./useHighlightSelectionDescription-DYk7CE-a.js";import"./useUpdateEffect-uBrq0rJG.js";import"./useLocalizedStringFormatter-DIG43t3y.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Da56nfvU.js";import"./useField-Czvowu87.js";import"./clsx-Ciqy0D92.js";import"./Button-DkPTbgVh.js";import"./Button.module-CcWMkJAG.js";import"./x-Boslj5Nc.js";import"./createLucideIcon-CboAl55C.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
