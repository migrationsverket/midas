import{j as e}from"./iframe-BqNGaS3Q.js";import{c}from"./Form-BK4969P0.js";import{G as d}from"./Grid-CwTFbLTy.js";import{G as i}from"./GridItem-BDXAS2jr.js";import{a as x,R as u}from"./Radio-CT_Eevhk.js";import{C as I}from"./CheckboxGroup-C4P-989j.js";import{C as G}from"./Checkbox-BCcNNpoh.js";import{T as t}from"./TextField-D-oeg_oS.js";import{S as l}from"./Select-5VQRUZG-.js";import{L as p}from"./ListBoxItem-BbhN16FO.js";import{B as a}from"./Button-o-Kbu0N5.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-CGkrrHUz.js";import"./utils-YRMroG4N.js";import"./clsx-B-dksMZM.js";import"./index-84uqcsRw.js";import"./index-Vj0nGHdt.js";import"./clsx-Ciqy0D92.js";import"./Group-DDpWCvq1.js";import"./FieldError-C9gz52yQ.js";import"./Text-1jSgyZAH.js";import"./Text-CJgdTp0n.js";import"./Button-DSR7b1dw.js";import"./Hidden-DSU9xJ9h.js";import"./useLabel-EeiXtDoW.js";import"./useLabels-adoQ0dml.js";import"./useButton-DOhwhZT1.js";import"./SelectionIndicator-BTVq9xT9.js";import"./useField-DFaQy0Xo.js";import"./VisuallyHidden-Bp1KH-we.js";import"./useControlledState-CmrGw6Qp.js";import"./Label-CI3rFEPo.js";import"./Dialog-B4koJbGS.js";import"./RSPContexts-BStQ6TrK.js";import"./OverlayArrow-D4O3P2k_.js";import"./useResizeObserver-Xrkj96LM.js";import"./Collection-BR8w3g5X.js";import"./index-DYyYHmLM.js";import"./Separator-CIXTBnH2.js";import"./SelectionManager-Daec-eOD.js";import"./useEvent-CbShBTQB.js";import"./scrollIntoView-DqdmP0Ox.js";import"./useDescription-qTJacu0G.js";import"./ListKeyboardDelegate-B0AvXnDg.js";import"./PressResponder-C41x452R.js";import"./useLocalizedStringFormatter-Dy-KyAJ-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D3Omskkq.js";import"./getScrollParent-D3JQJWO2.js";import"./ModalOverlay-DJsvZrI8.js";import"./x-CxJTxXmL.js";import"./createLucideIcon-DCKEqRJ8.js";import"./useLocalizedStringFormatter-Y9axLppZ.js";import"./Heading-fuBJDnNY.js";import"./info-Blx3Y7En.js";import"./Popover-BiJ8XDPo.js";import"./check-C4IyJfK2.js";import"./useToggleState-DEJGTGwi.js";import"./TextFieldBase-C2owCrBl.js";import"./Input-DSv9zuHY.js";import"./useTextField-CAOKavmj.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BBGblPPn.js";import"./DragAndDrop-CAiy6e3t.js";import"./inertValue-DLNvc6Eg.js";import"./useListState-Cuq7eNwl.js";import"./TagGroup-HB1QgEft.js";import"./useHighlightSelectionDescription-DxnI71zi.js";import"./useUpdateEffect-BORWL9Av.js";import"./useHasTabbableChild-CUtZT3lC.js";import"./chevron-down-DmXoalbZ.js";import"./Virtualizer-CEFEvg0_.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
