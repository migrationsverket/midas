import{j as a}from"./iframe-CgfjOamP.js";import{T as o,a as i,s as D}from"./Tag-CiyRQOK6.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BtpfA12t.js";import"./utils-B7IR5tpd.js";import"./clsx-B-dksMZM.js";import"./Hidden-CvMsrLmq.js";import"./useFocusRing-DKetXV2t.js";import"./index-DVkGHBpS.js";import"./index-C7rOlEzi.js";import"./useLabels-Bfqt8Zdi.js";import"./useButton-VkVZjmX7.js";import"./Collection-CFqNDNF4.js";import"./index-B5xnzi7Y.js";import"./ListBox-CBFLReBL.js";import"./DragAndDrop-BdI_STp2.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-Cb2ZpF35.js";import"./SelectionManager--nizYZWX.js";import"./useEvent--1_sOOcS.js";import"./FocusScope-Bt5i5qx2.js";import"./useDescription-Bm_Vfiwo.js";import"./useControlledState-Dq9UL-qa.js";import"./context-DRi4Tg0H.js";import"./Text-Cm7kHyBh.js";import"./inertValue-GqkuTu4z.js";import"./useListState-BS6wBiuU.js";import"./useHighlightSelectionDescription-BzJACLqi.js";import"./useUpdateEffect-DaBbJVmG.js";import"./useLocalizedStringFormatter-DcOPmlta.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DH6YvRIO.js";import"./useField-BxpKbDNZ.js";import"./Button-DniDMKnQ.js";import"./Button.module-DRhvPh0f.js";import"./x-DuLvZv5M.js";import"./createLucideIcon-DW6kjBNV.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
