import{j as a}from"./iframe-BfBJi4Ot.js";import{T as o,a as i,s as D}from"./Tag-CPDxrsiW.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-_d6wyQfs.js";import"./utils-B9LhAdX7.js";import"./clsx-B-dksMZM.js";import"./Hidden-CY1egKyk.js";import"./useFocusRing-DFspDhiP.js";import"./index-p097scRN.js";import"./index-B-SYa0h-.js";import"./useLabels-DDg8TQFW.js";import"./useButton-BNV9DhW9.js";import"./Collection-N-81PRQj.js";import"./index-BMwa_rEm.js";import"./ListBox-BCpEYbim.js";import"./DragAndDrop-B4QhZ1qL.js";import"./getScrollParent-_XE8XHOG.js";import"./scrollIntoView-B-WXQQGU.js";import"./Separator-XXMVNHMr.js";import"./SelectionManager-BAgLt7n0.js";import"./useEvent-DrbUkHUE.js";import"./SelectionIndicator-B9UCyzeg.js";import"./useDescription-aBpC8vin.js";import"./useControlledState-BK4ewmWb.js";import"./ListKeyboardDelegate-CbESNiaF.js";import"./RSPContexts-C6633DCM.js";import"./Text-Dq1pOL9O.js";import"./inertValue-CHyuwfXx.js";import"./useListState-CnocFeuw.js";import"./useHighlightSelectionDescription-CGxme6mo.js";import"./useUpdateEffect-T66mW4M7.js";import"./useLocalizedStringFormatter-Dqv8kJnk.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-E9OGk_4p.js";import"./useField-Bd6BBlXy.js";import"./clsx-Ciqy0D92.js";import"./Button-Ckkzvd0s.js";import"./Button.module-CcWMkJAG.js";import"./x-Bw8--Dxk.js";import"./createLucideIcon-CC2EVtY8.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
