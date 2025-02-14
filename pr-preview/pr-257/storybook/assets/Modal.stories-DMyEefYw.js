import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{r as f,R as _}from"./index-BbAIUH2N.js";import{c as F}from"./clsx-B-dksMZM.js";import{B as a}from"./Button-e4wmZZGd.js";import{X as B}from"./x-Cu6J0Y2u.js";import{F as b}from"./Flex-Di1QQQg5.js";import{F as m}from"./FlexItem-DeKcLnIt.js";import{S as H}from"./Select-DEJGoAb0.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-QjS3GA-B.js";import"./useFocusable-CD-koIwE.js";import"./Hidden-Dq_nQgIS.js";import"./index-i7ZvCR4f.js";import"./createLucideIcon-8wDOqnHv.js";import"./Form-BfpKtXjF.js";import"./Text-DcjMt-Li.js";import"./useField-DtOnK51m.js";import"./useLabels-B6-QSSXo.js";import"./Tag-CDAaWaRI.js";import"./Collection-DZnsYLBa.js";import"./index-DwWe6W7f.js";import"./ListBox-CDrqQmjC.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-Dk3iDfC9.js";import"./SelectionManager-BLUZsctv.js";import"./useEvent-BMdKW5kW.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-DMgXehbl.js";import"./context-BZ3sRE81.js";import"./useDescription-D-cWy0W_.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-DmPpmGaI.js";import"./useCollator-D6uckuoG.js";import"./useListState-Bi7JdD2y.js";import"./useHighlightSelectionDescription-BKgki8fK.js";import"./useLocalizedStringFormatter-kgc-se6z.js";import"./useUpdateEffect-DShQiA8p.js";import"./useHasTabbableChild-U81ut5JF.js";import"./TextField-Nxx7sP73.js";import"./Input-C70qVu7X.js";import"./useOverlayTriggerState-BhC3EiyM.js";import"./VisuallyHidden-CkHCoHQ6.js";import"./useMenuTrigger-DsTCxScT.js";import"./useMenuTriggerState-Cjn-Ui2X.js";import"./chevron-down-U1dNK9nR.js";import"./Checkbox-D5UZFY_T.js";import"./RSPContexts-CeCCo7XS.js";const w='"../theme/tokens.css"',S='"Inter", sans-serif',v="#ffffff",q="#f2f2f2",M="_modal_1wq00_4",P="_modalHeader_1wq00_30",R="_modalBody_1wq00_39",C="_modalHeading_1wq00_45",s={tokens:w,display:S,white:v,gray10:q,modal:M,modalHeader:P,modalBody:R,modalHeading:C},p=({id:l,isOpen:n,onOpenChange:t,children:d,title:y,className:j,...O})=>{const r=f.useRef(null);f.useEffect(()=>{var o,u;n?(o=r.current)==null||o.showModal():(u=r.current)==null||u.close()},[n]);const I=()=>{var o;(o=r.current)==null||o.close(),t(!1)},c=l+"_heading";return e.jsxs("dialog",{id:l,ref:r,onCancel:()=>t(!1),className:F(s.modal,j),"aria-labelledby":c,...O,children:[e.jsx("div",{className:s.modalHeader,children:e.jsx(a,{onPress:()=>I(),variant:"tertiary",icon:B,iconPlacement:"right",children:"Stäng"})}),e.jsxs("div",{className:s.modalBody,children:[e.jsx("h2",{className:s.modalHeading,id:c,children:y}),d]})]})};p.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{id:{required:!0,tsType:{name:"string"},description:"Id for accessibility"},title:{required:!0,tsType:{name:"string"},description:"Heading for the modal window"},isOpen:{required:!0,tsType:{name:"boolean"},description:"Whether the modal is open or not"},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:"State handler to toggle isOpen"}}};const Se={component:p,title:"Components/Modal",tags:["autodocs"],parameters:{layout:"centered"}},i={args:{},render:function(){const[n,t]=_.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onPress:()=>t(!0),children:"Öppna"}),e.jsx(p,{id:"modal",title:"Välj ärende",isOpen:n,onOpenChange:d=>t(d),children:e.jsxs(b,{fluid:!0,children:[e.jsx(m,{col:12,children:e.jsx(H,{selectionMode:"single",label:"Ärenden",placeholder:"Hej",description:"Välj ärende",options:[{id:"test",name:"test"}]})}),e.jsx(m,{col:12,children:e.jsx(a,{onPress:()=>t(!1),children:"Spara"})}),e.jsx(m,{col:12,children:e.jsx(a,{variant:"secondary",onPress:()=>t(!1),children:"Avbryt"})})]})})]})}};var h,x,g;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    return <>
        <Button onPress={() => setIsOpen(true)}>Öppna</Button>
        <Modal id='modal' title='Välj ärende' isOpen={isOpen} onOpenChange={isOpen => setIsOpen(isOpen)}>
          <Flex fluid={true}>
            <FlexItem col={12}>
              <Select selectionMode={'single'} label='Ärenden' placeholder='Hej' description='Välj ärende' options={[{
              id: 'test',
              name: 'test'
            }]} />
            </FlexItem>
            <FlexItem col={12}>
              <Button onPress={() => setIsOpen(false)}>Spara</Button>
            </FlexItem>
            <FlexItem col={12}>
              <Button variant='secondary' onPress={() => setIsOpen(false)}>
                Avbryt
              </Button>
            </FlexItem>
          </Flex>
        </Modal>
      </>;
  }
}`,...(g=(x=i.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const ve=["Default"];export{i as Default,ve as __namedExportsOrder,Se as default};
