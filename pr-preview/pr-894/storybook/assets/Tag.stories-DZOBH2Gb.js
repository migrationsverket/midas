import{j as a}from"./iframe-uM3qqLC1.js";import{T as o,a as i,s as D}from"./Tag-DwG2Old3.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DoT16R3T.js";import"./utils-HBEDfByc.js";import"./clsx-B-dksMZM.js";import"./Hidden-ChuQCa3d.js";import"./useFocusRing-BSauiWtM.js";import"./index-C5wsGSUN.js";import"./index-BQhIt1Gf.js";import"./useLabels-BbpNPeJk.js";import"./useButton-DypzjKrp.js";import"./Collection-DAZN5MPL.js";import"./index-BaF5gIKz.js";import"./ListBox-AXlsGz-s.js";import"./DragAndDrop-CtkSXa_q.js";import"./getScrollParent-DBoSOlsB.js";import"./scrollIntoView-pXO9z5Y4.js";import"./Separator-CzB7FZLb.js";import"./SelectionManager-B_UDqW10.js";import"./useEvent-BEHJp5pG.js";import"./SelectionIndicator-DTaITcQ9.js";import"./useDescription-BOjEw7RY.js";import"./useControlledState-B_Yl3B1s.js";import"./ListKeyboardDelegate-BCGIj1pT.js";import"./RSPContexts-wp9z8r7-.js";import"./Text-CN_gt17r.js";import"./inertValue-D5Osij4N.js";import"./useListState-BTBQnAW5.js";import"./useHighlightSelectionDescription-CJpeFHMS.js";import"./useUpdateEffect-B6x6sWe_.js";import"./useLocalizedStringFormatter-BU3ytf7Q.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BxRfn6GO.js";import"./useField-BvOstTO2.js";import"./clsx-Ciqy0D92.js";import"./Button-CRoPWYQa.js";import"./Button.module-CcWMkJAG.js";import"./x-Dd0VmR0s.js";import"./createLucideIcon-DguizvGn.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
