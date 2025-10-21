import{j as n}from"./iframe-CKi6ZPsq.js";import{$ as j}from"./Form-6nKJj2fW.js";import{G}from"./Grid-BAX0u4wO.js";import{G as e}from"./GridItem-CauenMvi.js";import{T as r}from"./TextField-W3cq_83g.js";import{S as I}from"./Select-PedTHbLK.js";import{B as a}from"./Button-ChkBe_U-.js";import{R as g,a as b}from"./Radio-C5znkRtu.js";import{C as h}from"./CheckboxGroup-Dj_OGeYN.js";import{C as k}from"./Checkbox-pBo_690q.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-Cg1TFf_A.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BRe3-laq.js";import"./useFocusRing-9BoVbkS6.js";import"./index-Dd2Mnfzt.js";import"./index-DQeu7mLu.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-IG78QeuO.js";import"./TextField-rMynVtiI.js";import"./FieldError-ui6kxban.js";import"./Text-CixCtUx1.js";import"./Text-DhkQK7KJ.js";import"./RSPContexts-D4zpuawj.js";import"./Group-BQv0cSRx.js";import"./Input-DlIv48Rw.js";import"./Hidden-BI7NTh1S.js";import"./Button-Bc4X42Ye.js";import"./useLabels-C_6zeqoe.js";import"./useButton-Cxm3MS34.js";import"./useTextField-D6BLEysJ.js";import"./useControlledState-CS3naG7u.js";import"./useField-nrzR_jIH.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-BSheNEGW.js";import"./Dialog-BR9RNq0_.js";import"./OverlayArrow-JAjl7DFz.js";import"./useResizeObserver-DnMb2mu8.js";import"./Collection-dXxrsUfx.js";import"./index-Bchr3RSE.js";import"./Separator-DKUpqJz5.js";import"./SelectionManager-BRbUpU9R.js";import"./useEvent-CuctCJtW.js";import"./scrollIntoView-BWgSHvNF.js";import"./SelectionIndicator-PK7ryQ-B.js";import"./useDescription-C4RYLfr5.js";import"./ListKeyboardDelegate-FZSU0j0N.js";import"./PressResponder-D8o04TId.js";import"./useLocalizedStringFormatter-DnLxbWhg.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CBAmI_sh.js";import"./VisuallyHidden-Cb7EbJuL.js";import"./useLocalizedStringFormatter-CZCdLCDh.js";import"./x-BN2iSwzP.js";import"./createLucideIcon-BhBgv_rT.js";import"./Heading-LUh6eNHt.js";import"./info-C8yQiMTK.js";import"./Popover-D6bpaUEJ.js";import"./Tag-BY1kV2Sv.js";import"./ListBox-JTFWQH3W.js";import"./DragAndDrop-D4qDjKVR.js";import"./inertValue-Rlml3ook.js";import"./useListState-raDXHiEF.js";import"./useHighlightSelectionDescription-fDgwzj9M.js";import"./useUpdateEffect-DX5M6Iwr.js";import"./useHasTabbableChild-irGsFhwl.js";import"./check-D0FHR0OY.js";import"./ListBoxSection-CU48mq9N.js";import"./Virtualizer-DzzcFrTw.js";import"./chevron-down-dZ7ycRmG.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-CEW1ex9k.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
