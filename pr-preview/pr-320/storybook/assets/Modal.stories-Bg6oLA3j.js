import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{r as f,R as O}from"./index-BbAIUH2N.js";import{c as F}from"./clsx-B-dksMZM.js";import{B as m}from"./Button-Db39e4u1.js";import{X as B}from"./x-Cu6J0Y2u.js";import{F as H}from"./Flex-Q7BrZWJa.js";import{F as p}from"./FlexItem-CVJK9Qec.js";import{S,I as b}from"./Select-aSnSRzEU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-CL48leFB.js";import"./useFocusRing-CinZsMjC.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./Hidden-Dygrn3i1.js";import"./index-cpIEhwLo.js";import"./useFocusable-97lfcaNr.js";import"./createLucideIcon-8wDOqnHv.js";import"./ListBox-i6fXzs5h.js";import"./Collection-C65DcC29.js";import"./index-DwWe6W7f.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-AK1ucJrY.js";import"./SelectionManager-DQmjKvEJ.js";import"./useEvent-D1vddV-I.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-Dim9Sv8E.js";import"./context-uaUAhjVA.js";import"./useDescription-CvItXi3E.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-DmPpmGaI.js";import"./useCollator-CY3z9i9U.js";import"./Text-BOP8hVNJ.js";import"./useListState-CA7sqsFs.js";import"./useField-D3fxL6w1.js";import"./useLabels-DK3-SUbo.js";import"./Dialog-DQ5JeYJ_.js";import"./RSPContexts-CeCCo7XS.js";import"./OverlayArrow-CJX-muH8.js";import"./PressResponder-D8VDO3_G.js";import"./useLocalizedStringFormatter-CHyMmh6V.js";import"./getScrollParent-CrrBdd7g.js";import"./VisuallyHidden-jJNdpOK7.js";import"./Form-B4NAigXO.js";import"./useFormValidation-0O_oepKB.js";import"./intlStrings-ZMTSFH_M.js";import"./useSingleSelectListState-CobJKfWh.js";import"./chevron-down-U1dNK9nR.js";import"./TextField-akL_FYgi.js";import"./Input-lj-4FkjZ.js";import"./TextField.module-4WLKcRib.js";const w='"../theme/tokens.css"',q='"Inter", sans-serif',v="#ffffff",P="#f2f2f2",V="_modal_1wq00_4",M="_modalHeader_1wq00_30",R="_modalBody_1wq00_39",C="_modalHeading_1wq00_45",i={tokens:w,display:q,white:v,gray10:P,modal:V,modalHeader:M,modalBody:R,modalHeading:C},d=({id:r,isOpen:s,onOpenChange:t,children:n,title:y,className:j,..._})=>{const a=f.useRef(null);f.useEffect(()=>{var o,u;s?(o=a.current)==null||o.showModal():(u=a.current)==null||u.close()},[s]);const I=()=>{var o;(o=a.current)==null||o.close(),t(!1)},c=r+"_heading";return e.jsxs("dialog",{id:r,ref:a,onCancel:()=>t(!1),className:F(i.modal,j),"aria-labelledby":c,..._,children:[e.jsx("div",{className:i.modalHeader,children:e.jsx(m,{onPress:()=>I(),variant:"tertiary",icon:B,iconPlacement:"right",children:"Stäng"})}),e.jsxs("div",{className:i.modalBody,children:[e.jsx("h2",{className:i.modalHeading,id:c,children:y}),n]})]})};try{d.displayName="Modal",d.__docgenInfo={description:"",displayName:"Modal",props:{id:{defaultValue:null,description:"Id for accessibility",name:"id",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"Heading for the modal window",name:"title",required:!0,type:{name:"string"}},isOpen:{defaultValue:null,description:"Whether the modal is open or not",name:"isOpen",required:!0,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"State handler to toggle isOpen",name:"onOpenChange",required:!0,type:{name:"(isOpen: boolean) => void"}}}}}catch{}const Pe={component:d,title:"Components/Modal",tags:["autodocs"],parameters:{layout:"centered"}},l={args:{},render:function(){const[s,t]=O.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(m,{onPress:()=>t(!0),children:"Öppna"}),e.jsx(d,{id:"modal",title:"Välj ärende",isOpen:s,onOpenChange:n=>t(n),children:e.jsxs(H,{fluid:!0,children:[e.jsx(p,{col:12,children:e.jsx(S,{label:"Ärenden",placeholder:"Hej",description:"Välj ärende",items:[{id:1,name:"test"}],children:n=>e.jsx(b,{children:n.name})})}),e.jsx(p,{col:12,children:e.jsx(m,{onPress:()=>t(!1),children:"Spara"})}),e.jsx(p,{col:12,children:e.jsx(m,{variant:"secondary",onPress:()=>t(!1),children:"Avbryt"})})]})})]})}};var h,x,g;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    return <>
        <Button onPress={() => setIsOpen(true)}>Öppna</Button>
        <Modal id='modal' title='Välj ärende' isOpen={isOpen} onOpenChange={isOpen => setIsOpen(isOpen)}>
          <Flex fluid={true}>
            <FlexItem col={12}>
              <Select label='Ärenden' placeholder='Hej' description='Välj ärende' items={[{
              id: 1,
              name: 'test'
            }]}>
                {item => <Item>{item.name}</Item>}
              </Select>
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
}`,...(g=(x=l.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const Ve=["Default"];export{l as Default,Ve as __namedExportsOrder,Pe as default};
