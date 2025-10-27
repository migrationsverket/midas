import{j as a}from"./iframe-D-svbNTC.js";import{T as o,a as i,s as D}from"./Tag-CPKyLVYG.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CQyZWjDO.js";import"./utils-BWvNjwRn.js";import"./clsx-B-dksMZM.js";import"./Hidden-BFovijmy.js";import"./useFocusRing-B-mX-xHO.js";import"./index-DWTcMa9i.js";import"./index-C9p5nswc.js";import"./useLabels-De6eVy31.js";import"./useButton-BVQBLJSS.js";import"./Collection-B1yIeNpA.js";import"./index-DmtZVvBC.js";import"./ListBox-DWQQtku_.js";import"./DragAndDrop-LlJWG0Io.js";import"./getScrollParent-eogDHESf.js";import"./scrollIntoView-JT3f5kky.js";import"./Separator-B8lmbbkj.js";import"./SelectionManager-c3m4KWfw.js";import"./useEvent-DhK1GJXf.js";import"./SelectionIndicator-CsxXolWd.js";import"./useDescription-Cm9PI3ZO.js";import"./useControlledState-D8fgeVqN.js";import"./ListKeyboardDelegate-C6yX5QjH.js";import"./RSPContexts-C_5i33gF.js";import"./Text-DfTVuBSz.js";import"./inertValue-DCC2T0yU.js";import"./useListState-BsEKT8VW.js";import"./useHighlightSelectionDescription-VtFYuju8.js";import"./useUpdateEffect-BNjr3QK0.js";import"./useLocalizedStringFormatter-COcVzmZc.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BPtyPmbB.js";import"./useField-CjtQUcp1.js";import"./clsx-Ciqy0D92.js";import"./Button-DkOV0qda.js";import"./Button.module-CcWMkJAG.js";import"./x-DiFSj5d_.js";import"./createLucideIcon-DUXLrqsR.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
