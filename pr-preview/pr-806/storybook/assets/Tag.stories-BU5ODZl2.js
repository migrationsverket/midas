import{j as a}from"./iframe-CQVQwVu4.js";import{T as o,a as i,s as D}from"./Tag-DbNYm7vK.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BesCZ1Cj.js";import"./utils-BG3C5Wnf.js";import"./clsx-B-dksMZM.js";import"./Hidden-CgJ1pobP.js";import"./useFocusRing-CAfw60tO.js";import"./index-CLyq_2FQ.js";import"./index-DXaZ8PDB.js";import"./useLabels-zdr5KFUQ.js";import"./useButton-BB9yyh2_.js";import"./Collection-DhVQAESs.js";import"./index-D61yKlzh.js";import"./ListBox-FGmSs4kV.js";import"./DragAndDrop-Bk6Jtaaw.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BQzkEijK.js";import"./SelectionManager-JlU--zNo.js";import"./useEvent-I7zTPCnD.js";import"./FocusScope-DbxQS5P7.js";import"./useDescription-C2Jy82mv.js";import"./useControlledState-DMJG9_4G.js";import"./ListKeyboardDelegate-Dv5NWkdU.js";import"./Text-DXO0LlLG.js";import"./inertValue-DxM6oj6M.js";import"./useListState-CcdKBRkL.js";import"./useHighlightSelectionDescription-CLdLNd-E.js";import"./useUpdateEffect-DytgwHaV.js";import"./useLocalizedStringFormatter-Dbh3xySS.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BLCyeUUw.js";import"./useField-Cb4s3N-T.js";import"./Button-D1ZaQxbM.js";import"./Button.module-DRhvPh0f.js";import"./x-DU-Q9KsF.js";import"./createLucideIcon-D_Xf7UtT.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
