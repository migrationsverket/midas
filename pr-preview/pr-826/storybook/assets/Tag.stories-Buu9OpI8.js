import{j as a}from"./iframe-BhJ76A8A.js";import{T as o,a as i,s as D}from"./Tag-CbczbXR5.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BZ-kk6TR.js";import"./utils-DoSyZFyW.js";import"./clsx-B-dksMZM.js";import"./Hidden-CaDBF6rz.js";import"./useFocusRing-D7tTGpsH.js";import"./index-BSUEiJ2_.js";import"./index-BLWHlOx-.js";import"./useLabels-CkxtbZ8M.js";import"./useButton-00xU3eXS.js";import"./Collection-CNSiPQee.js";import"./index-BrnTujs6.js";import"./ListBox-C8oj2oam.js";import"./DragAndDrop-B9obrWFa.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DNXgcTLE.js";import"./SelectionManager-CRaGfHyE.js";import"./useEvent-BuAm9vRt.js";import"./FocusScope-CsSxMshE.js";import"./useDescription-EpFc1-Ik.js";import"./useControlledState-CP-Pl1_b.js";import"./ListKeyboardDelegate-DJlWVZ32.js";import"./Text-BEbHd_Vj.js";import"./inertValue-DyJl_qLa.js";import"./useListState-C0dn1MNO.js";import"./useHighlightSelectionDescription-nCulj-kp.js";import"./useUpdateEffect-wDeJaJ_e.js";import"./useLocalizedStringFormatter-lRZaW8zD.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DfurGKBx.js";import"./useField-Cjl_3pwv.js";import"./Button-B-uf27G7.js";import"./Button.module-DRhvPh0f.js";import"./x-BKp-Puxt.js";import"./createLucideIcon-Bx7L9bmn.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
