import{j as e}from"./jsx-runtime-CBDCb4rg.js";import{r as f,R as _}from"./index-B-o1Wr-g.js";import{c as F}from"./clsx-B-dksMZM.js";import{B as l}from"./Button-dZcdrYJ-.js";import{X as B}from"./x-CdHhRR78.js";import{F as b}from"./Flex-B0onHs7a.js";import{F as d}from"./FlexItem-bxHKyMao.js";import{S as H,I as S}from"./Select-B2_q70hm.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-BeKNHBLF.js";import"./useFocusable-BFvoMS9y.js";import"./Hidden-DWlCxbq5.js";import"./index-D2jEcJry.js";import"./createLucideIcon-DjmUzaoT.js";import"./ListBox-Bqd_jMsd.js";import"./Collection-BhSMiv7E.js";import"./index-Btf1eDe9.js";import"./DragAndDrop-Bfvg-Q35.js";import"./Separator-Bd4vkn40.js";import"./SelectionManager-DRRiPKTi.js";import"./useEvent-D6jxNLXQ.js";import"./FocusScope-2XdeF7h-.js";import"./context-DFvSrY_x.js";import"./useDescription-DRw803pY.js";import"./useControlledState-BgxdDqm0.js";import"./ListKeyboardDelegate-Lv1vouSK.js";import"./Text-BvZdlzFi.js";import"./useField-BVKRIrPf.js";import"./useLabels-slPl-z-z.js";import"./useListState-BtOFoHoC.js";import"./Dialog-BjTCWXX6.js";import"./RSPContexts-BT50PPhj.js";import"./PressResponder-DFXhZkop.js";import"./useLocalizedStringFormatter-CABpxIsR.js";import"./VisuallyHidden-Bqo5Lliv.js";import"./Form-DKIud6kt.js";import"./intlStrings-ZMTSFH_M.js";import"./useSingleSelectListState-SN9L5I06.js";import"./chevron-down-DOK0m5UE.js";import"./TextField-CEBpLkqm.js";import"./TextField.module-Nb1XZxae.js";const v="_modal_1wq00_4",q="_modalHeader_1wq00_30",w="_modalBody_1wq00_39",P="_modalHeading_1wq00_45",a={modal:v,modalHeader:q,modalBody:w,modalHeading:P},p=({id:m,isOpen:o,onOpenChange:t,children:n,title:j,className:y,...I})=>{const s=f.useRef(null);f.useEffect(()=>{var r,u;o?(r=s.current)==null||r.showModal():(u=s.current)==null||u.close()},[o]);const O=()=>{var r;(r=s.current)==null||r.close(),t(!1)},c=m+"_heading";return e.jsxs("dialog",{id:m,ref:s,onCancel:()=>t(!1),className:F(a.modal,y),"aria-labelledby":c,...I,children:[e.jsx("div",{className:a.modalHeader,children:e.jsx(l,{onPress:()=>O(),variant:"tertiary",icon:B,iconPlacement:"right",children:"Stäng"})}),e.jsxs("div",{className:a.modalBody,children:[e.jsx("h2",{className:a.modalHeading,id:c,children:j}),n]})]})};p.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{id:{required:!0,tsType:{name:"string"},description:"Id for accessibility"},title:{required:!0,tsType:{name:"string"},description:"Heading for the modal window"},isOpen:{required:!0,tsType:{name:"boolean"},description:"Whether the modal is open or not"},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:"State handler to toggle isOpen"}}};const ye={component:p,title:"Components/Modal",tags:["autodocs"],parameters:{layout:"centered"}},i={args:{},render:function(){const[o,t]=_.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{onPress:()=>t(!0),children:"Öppna"}),e.jsx(p,{id:"modal",title:"Välj ärende",isOpen:o,onOpenChange:n=>t(n),children:e.jsxs(b,{fluid:!0,children:[e.jsx(d,{col:12,children:e.jsx(H,{label:"Ärenden",placeholder:"Hej",description:"Välj ärende",items:[{id:1,name:"test"}],children:n=>e.jsx(S,{children:n.name})})}),e.jsx(d,{col:12,children:e.jsx(l,{onPress:()=>t(!1),children:"Spara"})}),e.jsx(d,{col:12,children:e.jsx(l,{variant:"secondary",onPress:()=>t(!1),children:"Avbryt"})})]})})]})}};var h,x,g;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(g=(x=i.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const Ie=["Default"];export{i as Default,Ie as __namedExportsOrder,ye as default};
