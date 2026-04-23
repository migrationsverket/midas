import{j as e}from"./iframe-CcS9-zHY.js";import{c}from"./Form-B4Em8h3U.js";import{G as d}from"./Grid-B8RoHwTs.js";import{G as i}from"./GridItem-BHVUE7_t.js";import{a as x,R as u}from"./Radio-DhIgf1fh.js";import{C as I}from"./CheckboxGroup-BPZf22f5.js";import{C as G}from"./Checkbox-BwT4xHY7.js";import{T as t}from"./TextField-C37YElVk.js";import{S as l}from"./Select-C56DW5hy.js";import{L as p}from"./ListBoxItem-CUrRqTjI.js";import{B as a}from"./Button-D2itB7Px.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-DtQX9EVQ.js";import"./utils-BpPVMEC-.js";import"./clsx-B-dksMZM.js";import"./index-B__opsAk.js";import"./index-CTyP7lmf.js";import"./clsx-Ciqy0D92.js";import"./Group-DNVF67sa.js";import"./FieldError-CbsUmaqP.js";import"./Text-Bk3CxDKX.js";import"./Text-BzFZDvz7.js";import"./Button-CP1lY-X_.js";import"./Hidden-C5RVHIuY.js";import"./useLabel-CjpuKoQa.js";import"./useLabels-CEXOtBfV.js";import"./useButton-D8FkW36h.js";import"./SelectionIndicator-XmQFTl1h.js";import"./useField-B-LqTpNQ.js";import"./VisuallyHidden-hYYm2jyD.js";import"./useControlledState-BouQOm1H.js";import"./Label-x-AGAuY-.js";import"./Dialog-CFvfOaII.js";import"./RSPContexts-CbDTmKmT.js";import"./OverlayArrow-CJgvQAgw.js";import"./useResizeObserver-DEGSXQPw.js";import"./Collection-B8BWG8uC.js";import"./index-BeFzaQ2_.js";import"./Separator-DyJc7VpD.js";import"./SelectionManager-B0z2jKGv.js";import"./useEvent-BvvSzZ47.js";import"./scrollIntoView-xMmmrx8y.js";import"./useDescription-BvrFOMAt.js";import"./ListKeyboardDelegate-BKbak_DI.js";import"./PressResponder-D-DWvY-U.js";import"./useLocalizedStringFormatter-CayNuj83.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BhvHnTYH.js";import"./getScrollParent-C09F78IA.js";import"./ModalOverlay-BoWDw_P2.js";import"./x-I-qa-SpT.js";import"./createLucideIcon-C0GJ5EwW.js";import"./useLocalizedStringFormatter-CK-X1ruo.js";import"./Heading-BXnatuTy.js";import"./info-g2NHuh4Z.js";import"./Popover-BkUVv2pi.js";import"./check-C73J9HTj.js";import"./useToggleState-DCFGrPdd.js";import"./TextFieldBase-7S5M-bfE.js";import"./Input-Dr_jNhta.js";import"./useTextField-BOrC1Htv.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DT-mKgrf.js";import"./DragAndDrop-CbyMMQ54.js";import"./inertValue-BfIkCa4i.js";import"./useListState-l28iN_-m.js";import"./TagGroup-Dio0ItyC.js";import"./useHighlightSelectionDescription-DdsxyYSl.js";import"./useUpdateEffect-DpM_SBJU.js";import"./useHasTabbableChild-DIdLR2iF.js";import"./chevron-down-D1coR-xK.js";import"./Virtualizer-CRgCay6A.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
