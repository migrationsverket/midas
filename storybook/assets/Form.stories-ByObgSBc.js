import{j as e}from"./iframe-zfNSE992.js";import{$ as c}from"./Form-6PQG0HwU.js";import{G as d}from"./Grid-BZL0OgAk.js";import{G as i}from"./GridItem-BD0Iqf9_.js";import{T as t}from"./TextField-dbdA0Dqa.js";import{S as l}from"./Select-CXr38VPL.js";import{B as a}from"./Button-DBGCil-H.js";import{R as x,a as u}from"./Radio-RFxWrHcS.js";import{C as I}from"./CheckboxGroup-DxuX0Icn.js";import{C as G}from"./Checkbox-CdVOkr_J.js";import{L as p}from"./ListBoxItem-BiMs4u1D.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B2SfFvVK.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-K1-ScRZ6.js";import"./useFocusRing-CI59KcKl.js";import"./index-CnTZzMrs.js";import"./index-D3448pLr.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-C4W5dglC.js";import"./TextField-Dh2KypHo.js";import"./FieldError-tjW0lz2J.js";import"./Text-Bl3fcot9.js";import"./Text-CHvMVhnB.js";import"./RSPContexts-CPw4lDId.js";import"./Group-DpdCNFXc.js";import"./Input-DlM3ex9A.js";import"./Hidden-DgIIwhxN.js";import"./Button-DC5DfWyL.js";import"./useLabels-CjQ9ItwL.js";import"./useButton-DIQ3lO2m.js";import"./useTextField-CtJ9LcA7.js";import"./useControlledState-CIBWwPsl.js";import"./useField-CONU5j_T.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-tGIiThem.js";import"./Dialog-D8-e6XCB.js";import"./OverlayArrow-diGZdjTK.js";import"./useResizeObserver-DBO1Nm8L.js";import"./Collection-CNmZWZMw.js";import"./index-CeZtCSPC.js";import"./Separator-Cha28dSh.js";import"./SelectionManager-BL7qS2k3.js";import"./useEvent-BF95CLEW.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B2KX-6U1.js";import"./useDescription-CxH9sory.js";import"./ListKeyboardDelegate-BcysRdmZ.js";import"./PressResponder-DA6YHTJ4.js";import"./useLocalizedStringFormatter-CJ_FBxg6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bkh2xnu2.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-wYdlkGlt.js";import"./x-ahQW_gYz.js";import"./createLucideIcon-BiSgLEsQ.js";import"./useLocalizedStringFormatter-BJ90h7Po.js";import"./Heading-in0uxqkQ.js";import"./info-CTFYqTck.js";import"./Popover-BmxvQgJ2.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-C1CgDgLH.js";import"./DragAndDrop-DEjKKsAR.js";import"./inertValue-nn4ETiI0.js";import"./useListState-BFPS_Dni.js";import"./Tag-BLRD8hCp.js";import"./useHighlightSelectionDescription-BgVpC3fN.js";import"./useUpdateEffect-B_JVk0Ia.js";import"./useHasTabbableChild-CfZoZf4-.js";import"./chevron-down-CrtOTDKn.js";import"./Button.module-Co5e5YHp.js";import"./check-B5-vy8LJ.js";import"./useToggleState-Dct0pTav.js";import"./Virtualizer-lWzNfvZK.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
