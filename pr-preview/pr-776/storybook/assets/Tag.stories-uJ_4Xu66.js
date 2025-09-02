import{j as a}from"./iframe-CvXLfF_q.js";import{T as o,a as i,s as D}from"./Tag-KZTnjdzz.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DuOxkN_z.js";import"./utils-BO9tHePg.js";import"./clsx-B-dksMZM.js";import"./Hidden-D9TBDvEX.js";import"./useFocusRing-Dkk5pHgn.js";import"./index-bGVzQcYJ.js";import"./index-C7WGyVe8.js";import"./useLabels-DU0_Q9NE.js";import"./useButton-DiOUPaD7.js";import"./Collection-CReGmjXs.js";import"./index-CaHkNvi3.js";import"./ListBox-CoDe6PtQ.js";import"./DragAndDrop-CrTaUfdZ.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-4w49e6pF.js";import"./SelectionManager-DrHdJ81Z.js";import"./useEvent-CyJvjCuv.js";import"./FocusScope-CIM936_K.js";import"./useDescription-DfZu2Tdo.js";import"./useControlledState-DJIgnqjn.js";import"./ListKeyboardDelegate-6KNXhNiy.js";import"./Text-BB2QvOPj.js";import"./inertValue-SClefERU.js";import"./useListState-x708TW5Z.js";import"./useHighlightSelectionDescription-CO_l4ebe.js";import"./useUpdateEffect-C5q4m3jo.js";import"./useLocalizedStringFormatter-B7iV-Ktc.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CGcBxyAo.js";import"./useField-D7L2p-JC.js";import"./Button-C5offM08.js";import"./Button.module-9Myim2MN.js";import"./x-BTUMAxJS.js";import"./createLucideIcon-GP4wNw-1.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
