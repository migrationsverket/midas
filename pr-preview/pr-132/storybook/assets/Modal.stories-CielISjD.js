import{j as n}from"./jsx-runtime-Nms4Y4qS.js";import{$ as H,a as z,b as L,c as k,d as b,e as V,f as U,g as K,h as v,i as W}from"./Dialog-DOLxOzIg.js";import{a as P,c as E,y as X,h as F,z as B,f as S,m as M,$ as q,A as D,B as G}from"./useFocusable-DjeXhjfY.js";import{r as o,R as c}from"./index-BwDkhjyp.js";import{B as p}from"./Button-d63trt-j.js";import{X as J}from"./x-BNls5wfR.js";import{F as y,a as x}from"./FlexItem-DJyBMUzl.js";import{T as Q}from"./TextArea-BsLIbbcX.js";import{$ as Y}from"./Heading-Bsa4EASg.js";import"./RSPContexts-Bc9pl35m.js";import"./PressResponder--Ku2YYes.js";import"./useControlledState-DK-fUnpa.js";import"./FocusScope-B5i0-YrV.js";import"./index-Drt3gf4w.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Hidden-mTViOgbj.js";import"./context-DxE0kdpO.js";import"./getScrollParent-yMl4gzwT.js";import"./isScrollable-Bts8_1NI.js";import"./useLocalizedStringFormatter-57JI9Dsv.js";import"./VisuallyHidden-CewjJGy9.js";import"./clsx-B-dksMZM.js";import"./Button-qWGkjEjQ.js";import"./createLucideIcon-WuqQdmgs.js";import"./TextField-CdgN15En.js";import"./Form-C2wKEvlV.js";import"./Text-DKPe_caT.js";import"./triangle-alert-BkMwT_kE.js";let l=typeof document<"u"&&window.visualViewport;function Z(){let t=P(),[e,r]=o.useState(()=>t?{width:0,height:0}:w());return o.useEffect(()=>{let a=()=>{r(i=>{let s=w();return s.width===i.width&&s.height===i.height?i:s})};return l?l.addEventListener("resize",a):window.addEventListener("resize",a),()=>{l?l.removeEventListener("resize",a):window.removeEventListener("resize",a)}},[]),e}function w(){return{width:l&&(l==null?void 0:l.width)||window.innerWidth,height:l&&(l==null?void 0:l.height)||window.innerHeight}}function ee(t,e,r){let{overlayProps:a,underlayProps:i}=H({...t,isOpen:e.isOpen,onClose:e.close},r);return z({isDisabled:!e.isOpen}),L(),o.useEffect(()=>{if(e.isOpen)return k([r.current])},[e.isOpen,r]),{modalProps:E(a),underlayProps:i}}const te=o.createContext(null),O=o.createContext(null);function ne(t,e){if(o.useContext(O))return c.createElement(j,{...t,modalRef:e},t.children);let{isDismissable:a,isKeyboardDismissDisabled:i,isOpen:s,defaultOpen:f,onOpenChange:d,children:u,isEntering:m,isExiting:h,UNSTABLE_portalContainer:A,shouldCloseOnInteractOutside:N,...T}=t;return c.createElement(re,{isDismissable:a,isKeyboardDismissDisabled:i,isOpen:s,defaultOpen:f,onOpenChange:d,isEntering:m,isExiting:h,UNSTABLE_portalContainer:A,shouldCloseOnInteractOutside:N},c.createElement(j,{...T,modalRef:e},u))}const ae=o.forwardRef(ne);function ie(t,e){[t,e]=q(t,e,te);let r=o.useContext(b),a=U(t),i=t.isOpen!=null||t.defaultOpen!=null||!r?a:r,s=F(e),f=o.useRef(null),d=D(s,i.isOpen),u=D(f,i.isOpen),m=d||u||t.isExiting||!1,h=P();return!i.isOpen&&!m||h?null:c.createElement(se,{...t,state:i,isExiting:m,overlayRef:s,modalRef:f})}const re=o.forwardRef(ie);function se({UNSTABLE_portalContainer:t,...e}){let r=e.modalRef,{state:a}=e,{modalProps:i,underlayProps:s}=ee(e,a,r),f=B(e.overlayRef)||e.isEntering||!1,d=S({...e,defaultClassName:"react-aria-ModalOverlay",values:{isEntering:f,isExiting:e.isExiting,state:a}}),u=Z(),m={...d.style,"--visual-viewport-height":u.height+"px"};return c.createElement(K,{isExiting:e.isExiting,portalContainer:t},c.createElement("div",{...E(M(e),s),...d,style:m,ref:e.overlayRef,"data-entering":f||void 0,"data-exiting":e.isExiting||void 0},c.createElement(G,{values:[[O,{modalProps:i,modalRef:r,isExiting:e.isExiting,isDismissable:e.isDismissable}],[b,a]]},d.children)))}function j(t){let{modalProps:e,modalRef:r,isExiting:a,isDismissable:i}=o.useContext(O),s=o.useContext(b),f=o.useMemo(()=>X(t.modalRef,r),[t.modalRef,r]),d=F(f),u=B(d),m=S({...t,defaultClassName:"react-aria-Modal",values:{isEntering:u,isExiting:a,state:s}});return c.createElement("div",{...E(M(t),e),...m,ref:d,"data-entering":u||void 0,"data-exiting":a||void 0},i&&c.createElement(V,{onDismiss:s.close}),m.children)}const oe='"../../../theme/src/lib/tokens.css"',le='"Inter", sans-serif',de="#ffffff",ce="#f2f2f2",fe="_modal_1d3i1_11",me="_modalDialog_1d3i1_20",ue="_modalHeader_1d3i1_24",xe="_modalBody_1d3i1_30",g={tokens:oe,display:le,white:de,gray10:ce,modal:fe,modalDialog:me,modalHeader:ue,modalBody:xe},$e=()=>{const t=c.useContext(b);return n.jsx("div",{className:g.modalHeader,children:n.jsx(p,{onPress:t.close,variant:"tertiary",icon:J,iconPlacement:"right",children:"Stäng"})})},pe=({children:t,...e})=>n.jsx("div",{className:g.modalBody,...e,children:t}),I=({children:t,...e})=>n.jsx(ae,{className:g.modal,...e,children:n.jsx(W,{className:g.modalDialog,children:t})});try{v.displayName="DialogTrigger",v.__docgenInfo={description:"A DialogTrigger opens a dialog when a trigger element is pressed.",displayName:"DialogTrigger",props:{}}}catch{}const Ke={component:I,title:"Components/Modal",tags:["autodocs"],parameters:{layout:"centered"}},$={args:{},render:()=>n.jsxs(v,{children:[n.jsx(p,{children:"Öppna modal"}),n.jsx(I,{children:({close:t})=>n.jsxs(n.Fragment,{children:[n.jsx($e,{}),n.jsxs(pe,{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[n.jsx(y,{fluid:!0,children:n.jsx(x,{children:n.jsx(Y,{slot:"title",style:{margin:0},children:"Vill du avsluta uppdraget?"})})}),n.jsx(y,{fluid:!0,children:n.jsx(x,{children:n.jsx(Q,{autoFocus:!0,label:"Ange anledning",description:"Skriv anledning",maxCharacters:100})})}),n.jsxs(y,{fluid:!0,children:[n.jsx(x,{col:"auto",children:n.jsx(p,{onPress:t,children:"Spara korrespondens"})}),n.jsx(x,{children:n.jsx(p,{onPress:t,variant:"secondary",children:"Avbryt"})})]})]})]})})]})};var C,R,_;$.parameters={...$.parameters,docs:{...(C=$.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return <DialogTrigger>
        <Button>Öppna modal</Button>
        <Modal>
          {({
          close
        }) => <>
              <ModalHeader />
              <ModalBody style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}>
                <Flex fluid={true}>
                  <FlexItem>
                    <Heading slot='title' style={{
                  margin: 0
                }}>
                      Vill du avsluta uppdraget?
                    </Heading>
                  </FlexItem>
                </Flex>
                <Flex fluid={true}>
                  <FlexItem>
                    <TextArea
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus label='Ange anledning' description='Skriv anledning' maxCharacters={100} />
                  </FlexItem>
                </Flex>
                <Flex fluid={true}>
                  <FlexItem col='auto'>
                    <Button onPress={close}>Spara korrespondens</Button>
                  </FlexItem>
                  <FlexItem>
                    <Button onPress={close} variant='secondary'>
                      Avbryt
                    </Button>
                  </FlexItem>
                </Flex>
              </ModalBody>
            </>}
        </Modal>
      </DialogTrigger>;
  }
}`,...(_=(R=$.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};const We=["Default"];export{$ as Default,We as __namedExportsOrder,Ke as default};
