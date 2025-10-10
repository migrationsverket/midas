import{j as a}from"./iframe-CKFCPaJj.js";import{T as o,a as i,s as D}from"./Tag-gVP2LOoa.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Do54eTEB.js";import"./utils-CXkY2Ri7.js";import"./clsx-B-dksMZM.js";import"./Hidden-Coj8JIdC.js";import"./useFocusRing-Bh481TRB.js";import"./index-BIOxsggm.js";import"./index-BQYV8Hn0.js";import"./useLabels-DDroFUFI.js";import"./useButton-DwnwEFss.js";import"./Collection-Dv43PKJF.js";import"./index-DhF0UKXp.js";import"./ListBox-DFNw2GQD.js";import"./DragAndDrop-BOMicAW6.js";import"./getScrollParent-CYlVZ_yE.js";import"./scrollIntoView-nE9p-1SD.js";import"./Separator-CMrc46Ng.js";import"./SelectionManager-BSAi_yVH.js";import"./useEvent-BAoxnqgj.js";import"./SelectionIndicator-DiZ4VIXi.js";import"./useDescription-BElJhtWU.js";import"./useControlledState-DhZ9bnti.js";import"./ListKeyboardDelegate-B_5AAgjb.js";import"./RSPContexts-DTualVAo.js";import"./Text-BbJOyk9f.js";import"./inertValue-2532D-Ks.js";import"./useListState-Cm7_a_1w.js";import"./useHighlightSelectionDescription-1U6GWZEB.js";import"./useUpdateEffect-BfYy7lw-.js";import"./useLocalizedStringFormatter-abbX0qnT.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CV7x_0Ur.js";import"./useField-B3j1Gmrc.js";import"./clsx-Ciqy0D92.js";import"./Button-C5o72pYJ.js";import"./Button.module-CcWMkJAG.js";import"./x-EuSeUY2k.js";import"./createLucideIcon-BfFLuAr7.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
