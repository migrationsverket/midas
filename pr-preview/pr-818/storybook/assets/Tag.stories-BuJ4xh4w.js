import{j as a}from"./iframe-DjOPeWRO.js";import{T as o,a as i,s as D}from"./Tag-BZdTyjIQ.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BEn25HMG.js";import"./utils-CLHggnle.js";import"./clsx-B-dksMZM.js";import"./Hidden-CHL2y8Ry.js";import"./useFocusRing-Y0u9c485.js";import"./index-diKK7A6y.js";import"./index-D-mOB6zQ.js";import"./useLabels-DcggZ_L3.js";import"./useButton-CX96_4oF.js";import"./Collection-DT_Q6zsV.js";import"./index-TbSdduEp.js";import"./ListBox-CXXEz5AR.js";import"./DragAndDrop-DAeNAX5Q.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-B8HVAKeg.js";import"./SelectionManager-DOsKIuJX.js";import"./useEvent-DEhbIWCb.js";import"./FocusScope-DzGsda8s.js";import"./useDescription-B04Mcv1z.js";import"./useControlledState-BDclS-sV.js";import"./ListKeyboardDelegate-CmXWW-mn.js";import"./Text-CKidCZAq.js";import"./inertValue-BS9orNTB.js";import"./useListState-CV747zvI.js";import"./useHighlightSelectionDescription-CZVuQbRN.js";import"./useUpdateEffect-DllzfqbR.js";import"./useLocalizedStringFormatter-CUrlHmMS.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BEhZ0LOa.js";import"./useField-xuFYj_Hs.js";import"./Button-DqsVmyp5.js";import"./Button.module-DRhvPh0f.js";import"./x-CAckjysE.js";import"./createLucideIcon-DqvONbIX.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
