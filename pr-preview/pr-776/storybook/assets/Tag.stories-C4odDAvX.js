import{j as a}from"./iframe-CaTehrPZ.js";import{T as o,a as i,s as D}from"./Tag-CP9LHn4X.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DVEtGYmw.js";import"./utils-CfOR-KSy.js";import"./clsx-B-dksMZM.js";import"./Hidden-BlGccWek.js";import"./useFocusRing-CESEA6ML.js";import"./index-B6VyMR8D.js";import"./index-DKux4EUk.js";import"./useLabels-B6bcn-xM.js";import"./useButton-D2QDUmGe.js";import"./Collection-CKosh5QQ.js";import"./index-D6nkslD-.js";import"./ListBox-DAEktOWW.js";import"./DragAndDrop-C8rLEA5s.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CzVfPTVB.js";import"./SelectionManager-DWTRI4sc.js";import"./useEvent-gTF2P3E_.js";import"./FocusScope-C5A5dqJm.js";import"./useDescription-DEJGRTo8.js";import"./useControlledState-C46R8h6l.js";import"./ListKeyboardDelegate-B-B7sp_G.js";import"./Text-BVeEnIcV.js";import"./inertValue-BC_zk-Ln.js";import"./useListState-DzySxP7C.js";import"./useHighlightSelectionDescription-B5dhjYD9.js";import"./useUpdateEffect-DpY1qC9f.js";import"./useLocalizedStringFormatter-vk5W2tLq.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Dj1af5sL.js";import"./useField-B33F63Q-.js";import"./Button-Buf6l9l1.js";import"./Button.module-DgYkWG2o.js";import"./x-C9db_WwY.js";import"./createLucideIcon-DyLXW-Uf.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
