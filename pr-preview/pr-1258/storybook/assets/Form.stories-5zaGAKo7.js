import{j as e}from"./iframe-CXw6yEtL.js";import{c}from"./Form-dUtoNK2v.js";import{G as d}from"./Grid-Du6PmPU5.js";import{G as i}from"./GridItem-CLtmo6sn.js";import{a as x,R as u}from"./Radio-DATS0mJ6.js";import{C as I}from"./CheckboxGroup-DUBCuTur.js";import{C as G}from"./Checkbox-CtQHdpMr.js";import{T as t}from"./TextField-gvrLjZu8.js";import{S as l}from"./Select-D78sP5NI.js";import{L as p}from"./ListBoxItem-Cmluweg3.js";import{B as a}from"./Button-DEhxKNaB.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-BUJw-zNR.js";import"./utils-TMTFLosf.js";import"./clsx-B-dksMZM.js";import"./index-CPSfvkie.js";import"./index-DlzVmrOj.js";import"./clsx-Ciqy0D92.js";import"./Group-Bc1Fe6Rl.js";import"./FieldError-DxjbVN8c.js";import"./Text-B-ez7dVi.js";import"./Text-DfSBpgc9.js";import"./Button-C2Moqf7z.js";import"./Hidden-D7hcqzmB.js";import"./useLabel-B_dwgCb3.js";import"./useLabels-Bmz9yT3c.js";import"./useButton-DFd8dIUb.js";import"./SelectionIndicator-CRVyJK_1.js";import"./useField-CgwfKGqG.js";import"./VisuallyHidden-DZf8hqs4.js";import"./useControlledState-uGX0UHSY.js";import"./Label-GQUT7ZEJ.js";import"./Dialog-BDtLRBZX.js";import"./RSPContexts-CRecp9AH.js";import"./OverlayArrow-CYsKMuHd.js";import"./useResizeObserver-BgbTD5F9.js";import"./Collection-DRs08V62.js";import"./index-D_bJjS7Z.js";import"./Separator-CiHVhPYJ.js";import"./SelectionManager-DF7_C-wd.js";import"./useEvent-CLzgpnys.js";import"./scrollIntoView-J9HcqoeY.js";import"./useDescription-5GU4b1w7.js";import"./ListKeyboardDelegate-C0AuU4n7.js";import"./PressResponder-BdAtoMPY.js";import"./useLocalizedStringFormatter-GNvNdhCY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DmiDGQ5a.js";import"./getScrollParent-DI5JJTrt.js";import"./ModalOverlay-Bj4CBpHh.js";import"./x-Cy8UX61V.js";import"./createLucideIcon-DWQv9Ysr.js";import"./useLocalizedStringFormatter-sjnuzL-M.js";import"./Heading-E2UPktky.js";import"./info-95qLpLfK.js";import"./Popover-DnXwvssA.js";import"./check-C8mC6rxp.js";import"./useToggleState-DCBrl0NZ.js";import"./TextFieldBase-o9ylp2an.js";import"./Input-kZlQDEcC.js";import"./useTextField-DtF14BWt.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-COsseUx5.js";import"./DragAndDrop-BudoI50b.js";import"./inertValue-BTDzGIyN.js";import"./useListState-CL7xhEko.js";import"./TagGroup-D44GsfVE.js";import"./useHighlightSelectionDescription-DhVbWTDY.js";import"./useUpdateEffect-BsBkk_X3.js";import"./useHasTabbableChild-D-X8vxUr.js";import"./chevron-down-erQ19oG4.js";import"./Virtualizer-qdM78nAl.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' items={ITEMS.map(i => ({
          id: i,
          name: i
        }))}>
            {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
          </Select>
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' items={ITEMS.map(i => ({
            name: i,
            id: i
          }))}>
              {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
            </Select>
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
}`,...s.parameters?.docs?.source}}};const ye=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,ye as __namedExportsOrder,Le as default};
