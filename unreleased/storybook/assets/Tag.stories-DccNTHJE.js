import{j as a}from"./iframe-CP8t-7hT.js";import{T as o,a as i,s as D}from"./Tag-Dh9LImZe.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CtnqP9ZF.js";import"./utils-CgUAWCd-.js";import"./clsx-B-dksMZM.js";import"./Hidden-DxP2WVSo.js";import"./useFocusRing-rZvJgEnD.js";import"./index-DdbbECxV.js";import"./index-D_9FfvpY.js";import"./useLabels-B2_TbHUR.js";import"./useButton-BNwtkWJP.js";import"./Collection-jSH0lxDO.js";import"./index-BfYu5sot.js";import"./ListBox-Djeh-Iat.js";import"./DragAndDrop-DkHVbcxa.js";import"./getScrollParent--dLjMsCX.js";import"./scrollIntoView-B3IcIZeX.js";import"./Separator-DmWdm9Jc.js";import"./SelectionManager-CQmX5aOD.js";import"./useEvent-rO1MhcNK.js";import"./SelectionIndicator-CP3nq0sB.js";import"./useDescription-ZOA1i6Gi.js";import"./useControlledState-CIabsbOP.js";import"./ListKeyboardDelegate-CKUKnBJk.js";import"./RSPContexts-C69vMCqc.js";import"./Text-COmmnbBb.js";import"./inertValue-DlHMcCuJ.js";import"./useListState-SMQ1G33q.js";import"./useHighlightSelectionDescription-DuNSbGU_.js";import"./useUpdateEffect-Cy7nJGWo.js";import"./useLocalizedStringFormatter-AJdvOD1o.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CY2MYOld.js";import"./useField-BRWVHp0-.js";import"./clsx-Ciqy0D92.js";import"./Button-BCN6Sz20.js";import"./Button.module-CcWMkJAG.js";import"./x-lKM-jy32.js";import"./createLucideIcon-Dw0tc5YB.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
