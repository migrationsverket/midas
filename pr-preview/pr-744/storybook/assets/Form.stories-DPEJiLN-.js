import{j as n}from"./iframe-teSvwxqR.js";import{$ as j}from"./Form-CtxoDqdR.js";import{G}from"./Grid-Dmh5jBPn.js";import{G as e}from"./GridItem-Dzb3NBcp.js";import{T as r}from"./TextField-BAU0DnjD.js";import{S as I}from"./Select-LO0KcZl4.js";import{B as a}from"./Button-DhwBtmjI.js";import{R as g,a as b}from"./Radio-jJX4aja1.js";import{C as h}from"./CheckboxGroup-B3gyZv0z.js";import{C as k}from"./Checkbox-BUXKnznc.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-Drw8ybL-.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BP7s8N34.js";import"./useFocusRing-DcZHCjrB.js";import"./index-DQEu1ddM.js";import"./index-CrK5w07T.js";import"./TextFieldBase-CSwkO_6q.js";import"./TextField-CuN43Zfk.js";import"./FieldError-BtDEqkiF.js";import"./Text-0R16PnAc.js";import"./Text-D4pxv7-U.js";import"./ListKeyboardDelegate-M9R1Vj1J.js";import"./SelectionManager-DsgXm_vo.js";import"./useEvent-DrKbVf8_.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DOnjABkp.js";import"./useDescription-CrpOTzrK.js";import"./useControlledState-Csa_HTcQ.js";import"./Group-CCdGJvW5.js";import"./Input-D2_iwgNJ.js";import"./Hidden-DP8SkWFR.js";import"./Button-uKzEloET.js";import"./useLabels-D3ZxEY1u.js";import"./useButton-aLCkhSi-.js";import"./useTextField-Bxs1vZ_1.js";import"./useField-CavUiFDI.js";import"./TextField.module-BrIGiDQC.js";import"./Label-BgQ24dEA.js";import"./Dialog-CciU0Mfy.js";import"./RSPContexts-BKbNPC18.js";import"./OverlayArrow-C895hCef.js";import"./useResizeObserver-BpgWMPMF.js";import"./Collection-CO8iMlEv.js";import"./index-09wOHlx4.js";import"./Separator--2Bk_2gN.js";import"./PressResponder-CzfUmsl5.js";import"./useLocalizedStringFormatter-SfosuQu6.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-C03xyiC8.js";import"./Dialog-N-tOBZkE.js";import"./useLocalizedStringFormatter-wNN0Ib3B.js";import"./x-BUyK7o_V.js";import"./createLucideIcon-w9zvgYet.js";import"./Heading-DofFme2E.js";import"./info-Jc5i4rXB.js";import"./Tag-BHkldyEw.js";import"./ListBox-0klfaGQn.js";import"./DragAndDrop-B4pmsMrd.js";import"./inertValue-BnLtFp9B.js";import"./useListState-q2OLYS0g.js";import"./useHighlightSelectionDescription-DJM9gdYV.js";import"./useUpdateEffect-CtaUhkLB.js";import"./useHasTabbableChild-DRXfBZGq.js";import"./check-3xGoOpTu.js";import"./ListBoxSection-De0Pm3qt.js";import"./Virtualizer-BSYsqlAQ.js";import"./useObserveElement-F5mo_AH4.js";import"./chevron-down-BR4434tL.js";import"./Button.module-CF2bVDCq.js";import"./useToggleState-CVEQYtcl.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
