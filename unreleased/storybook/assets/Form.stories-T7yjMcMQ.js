import{j as n}from"./iframe-CkK6ta2K.js";import{$ as j}from"./Form-BuoS8J_5.js";import{G}from"./Grid-CwchJPNn.js";import{G as e}from"./GridItem-CKrvwEAa.js";import{T as r}from"./TextField-BSgmm-O8.js";import{S as I}from"./Select-C8C3dm24.js";import{B as a}from"./Button-kUeFOv4E.js";import{R as g,a as b}from"./Radio-CbxkPKRs.js";import{C as h}from"./CheckboxGroup-Dgib4q_-.js";import{C as k}from"./Checkbox-8h56rniM.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BH3lcQMk.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-D8q2Kj1M.js";import"./useFocusRing-T06rac6t.js";import"./index-CUtqnPIU.js";import"./index-D7D-U_uI.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DeT0dPvp.js";import"./TextField-PdtBrErv.js";import"./FieldError-B62FFyn5.js";import"./Text-Bx8zPwaM.js";import"./Text-Dx4jNgDb.js";import"./RSPContexts-BuKh5yTI.js";import"./Group-CSACi_J0.js";import"./Input-CdS8Llpg.js";import"./Hidden-C5ZZ4VaZ.js";import"./Button-D3iZZAMq.js";import"./useLabels-CRUOvwRs.js";import"./useButton-WFd2STGe.js";import"./useTextField-D8TZ3i49.js";import"./useControlledState-BsJx9A-Z.js";import"./useField-CPQg7i9g.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-CV4gChGr.js";import"./Dialog-CPE0_FAm.js";import"./OverlayArrow-DwsQot2l.js";import"./useResizeObserver-7r0Yk07N.js";import"./Collection-BT13kBPv.js";import"./index-C26Oweua.js";import"./Separator-Cd3C-fWs.js";import"./SelectionManager-DUF06rLK.js";import"./useEvent-DZ8p_aYw.js";import"./scrollIntoView-BBuSZYlE.js";import"./SelectionIndicator-B38V3vjg.js";import"./useDescription-ClDb31Mm.js";import"./ListKeyboardDelegate-lzWyaK0s.js";import"./PressResponder-qks6LxCL.js";import"./useLocalizedStringFormatter-Bvs7rVFB.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-Dm7e6Awq.js";import"./VisuallyHidden-CIIGtafK.js";import"./useLocalizedStringFormatter-B2r4TK7x.js";import"./x-BfjjiftR.js";import"./createLucideIcon-C2EPTzfC.js";import"./Heading-BZ88QcIT.js";import"./info-DPSV6AuF.js";import"./Popover-DNlNdG2w.js";import"./Tag-GdyGohif.js";import"./ListBox-pctMFKbN.js";import"./DragAndDrop-CcEMjtbH.js";import"./inertValue-uoq93x4I.js";import"./useListState-DIrPrKz6.js";import"./useHighlightSelectionDescription-Brs4f76u.js";import"./useUpdateEffect-DogvlrD-.js";import"./useHasTabbableChild-BkwsP0dc.js";import"./check-AsWuYPai.js";import"./ListBoxSection-DX5aIZT9.js";import"./Virtualizer-DYbCk-GY.js";import"./chevron-down-BnfMH80d.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-J_oxc9cc.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['Banan', 'Apple', 'Mango'];
    return <Grid>
        <GridItem size={12}>
          <TextField label='Ange ditt fullständiga namn' description='Glöm inte dina eventuella mellannamn!' />
        </GridItem>
        <GridItem size={12}>
          <TextField label='Personnummmer' description='Anges på formen ÅÅMMDD-XXXX' />
        </GridItem>
        <GridItem size={12}>
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' options={ITEMS.map(i => ({
          id: i,
          name: i
        }))} />
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...(p=(l=m.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,x,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['A', 'B', 'C'];
    const RADIOITEMS = ['Anledning A', 'Anledning B', 'Anledning C'];
    return <div>
        <Grid>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <RadioGroup label='Anledning' description='Ange anledning till att du söker i databasen'>
              {RADIOITEMS.map((item: string) => <Radio value={item} key={item}>
                  {item}
                </Radio>)}
            </RadioGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <CheckboxGroup label='Databas' description='Välj databas att söka i'>
              {ITEMS.map((item: string) => <Checkbox value={item} key={item}>
                  {item}
                </Checkbox>)}
            </CheckboxGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Namn' description='' />
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Personnummer' />
          </GridItem>

          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' options={ITEMS.map(i => ({
            name: i,
            id: i
          }))} />
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Ärendekod' />
          </GridItem>

          <GridItem size='auto'>
            <Button>Sök</Button>
          </GridItem>
          <GridItem size='auto'>
            <Button variant='secondary'>Rensa</Button>
          </GridItem>
        </Grid>
      </div>;
  }
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const wn=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,wn as __namedExportsOrder,$n as default};
