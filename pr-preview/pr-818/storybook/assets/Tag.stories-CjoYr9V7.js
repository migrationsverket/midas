import{j as a}from"./iframe-Iof4BHCv.js";import{T as o,a as i,s as D}from"./Tag-NVDSSLAQ.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DU30oxjI.js";import"./utils-D-sqiXg9.js";import"./clsx-B-dksMZM.js";import"./Hidden-5BcF1N8H.js";import"./useFocusRing-Slqf7zfs.js";import"./index-CGKRSw1M.js";import"./index-CmpNdnZT.js";import"./useLabels-DA_CNzbM.js";import"./useButton-BO5Bx4Rf.js";import"./Collection-Djt9cxkY.js";import"./index-9-IpcHqU.js";import"./ListBox-CqAwoOou.js";import"./DragAndDrop-1zB-cJbZ.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DhQcZ68_.js";import"./SelectionManager-Dpx3luoG.js";import"./useEvent-DQcJIPOM.js";import"./FocusScope-xvtIELvs.js";import"./useDescription-reKouz2Y.js";import"./useControlledState-nZ-8Ecqw.js";import"./ListKeyboardDelegate-ByGWYhMP.js";import"./Text-CHHV36v3.js";import"./inertValue-DIvMY8zC.js";import"./useListState-DzWZGuyc.js";import"./useHighlightSelectionDescription-hD_IGy8I.js";import"./useUpdateEffect-C-kPlqzU.js";import"./useLocalizedStringFormatter-CX_Jgvws.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-nxuzdrcg.js";import"./useField-XqTiyoOh.js";import"./Button-CZIhED1U.js";import"./Button.module-DRhvPh0f.js";import"./x-BLMS0eer.js";import"./createLucideIcon-CWr7Be8u.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
