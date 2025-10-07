import{j as a}from"./iframe-DA2QP2gZ.js";import{T as o,a as i,s as D}from"./Tag-vBbpHdKT.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CDuPEANU.js";import"./utils-B4V3ufOL.js";import"./clsx-B-dksMZM.js";import"./Hidden-CMB0igjM.js";import"./useFocusRing-FuIjM7JQ.js";import"./index-7aBtRAey.js";import"./index-DhHNJUsG.js";import"./useLabels-OZSYNOQS.js";import"./useButton-BngaAYXs.js";import"./Collection-BBzArCaz.js";import"./index-BwBGH6_G.js";import"./ListBox-EL9XJLRL.js";import"./DragAndDrop-Ce_r6_uv.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-D4Ownr1m.js";import"./SelectionManager-DACDS8-5.js";import"./useEvent-CzG6qI3t.js";import"./FocusScope-aIgAoUSh.js";import"./useDescription-Cuns5jGH.js";import"./useControlledState-dGEuBejq.js";import"./context-hprZxKSG.js";import"./Text-_n6topwj.js";import"./inertValue-CsZJmqff.js";import"./useListState-BRQJa7Qm.js";import"./useHighlightSelectionDescription-CGnW_68N.js";import"./useUpdateEffect-D3VIP8Nx.js";import"./useLocalizedStringFormatter-tbzCVLLU.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-ClCcIRae.js";import"./useField-2wOWyc-x.js";import"./clsx-Ciqy0D92.js";import"./Button-DPwrfeeA.js";import"./Button.module-DRhvPh0f.js";import"./x-DEcX4A1J.js";import"./createLucideIcon-DMeWvDhb.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
