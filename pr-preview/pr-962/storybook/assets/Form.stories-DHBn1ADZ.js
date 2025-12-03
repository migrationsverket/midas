import{j as e}from"./iframe-a6Wk3Xzy.js";import{$ as c}from"./Form-CV6_CH2f.js";import{G as d}from"./Grid-n_8naX9S.js";import{G as i}from"./GridItem-8wcNhTQK.js";import{T as t}from"./TextField-pQMGa3G8.js";import{S as l}from"./Select-BFV3deNI.js";import{B as a}from"./Button-BXJQHasJ.js";import{R as x,a as u}from"./Radio-C3pDTNgp.js";import{C as I}from"./CheckboxGroup-C76R_hf6.js";import{C as G}from"./Checkbox-CVs6LAuz.js";import{L as p}from"./ListBoxItem-BxF9QQTK.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Djxj9dvS.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-ONm4qT-T.js";import"./useFocusRing-C1yXmCPx.js";import"./index-BIPy-evI.js";import"./index-h3_AmtF7.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-C8VsusAw.js";import"./TextField-C1qCvTHD.js";import"./FieldError-BCytiDW7.js";import"./Text-DkJniAIt.js";import"./Text-Cei6q4nW.js";import"./RSPContexts-SYjPV_Gd.js";import"./Group-DiCGmQhO.js";import"./Input-BIi4wIBk.js";import"./Hidden-DuHdXNGk.js";import"./Button-D3kzwT0j.js";import"./useLabels-C0y6iNyy.js";import"./useButton-BLcqsVts.js";import"./useTextField-C5MFLd6M.js";import"./useControlledState-DCZoTGT5.js";import"./useField-BDXXirFK.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DXagKvxd.js";import"./Dialog-CXvjpGUD.js";import"./OverlayArrow-CyE76S0y.js";import"./useResizeObserver-BdfPDCR2.js";import"./Collection-BxZCsRFI.js";import"./index-D2MYWhMB.js";import"./Separator-DC01dWRI.js";import"./SelectionManager-505Ik3lC.js";import"./useEvent-DDIjSBAF.js";import"./scrollIntoView-D4IpJVjb.js";import"./SelectionIndicator-CdYP5Mmy.js";import"./useDescription-CCWPLKTi.js";import"./ListKeyboardDelegate-hyjiyDq3.js";import"./PressResponder-Dhuu2u_J.js";import"./useLocalizedStringFormatter-CuYf0UQ-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DPdiGwy9.js";import"./VisuallyHidden-nz69IdQH.js";import"./x-UTOZVbAg.js";import"./createLucideIcon-D5ghYwFQ.js";import"./useLocalizedStringFormatter-73Ei4hOY.js";import"./Heading-B2z4anRX.js";import"./info-3ZPJIb02.js";import"./Popover-BqLHs2z5.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BEXh_4ze.js";import"./DragAndDrop-BCqNIrgf.js";import"./inertValue-m0D-1Wa4.js";import"./useListState-BDbkQsmw.js";import"./Tag-C8qqwLAX.js";import"./useHighlightSelectionDescription-Jkgp5R2P.js";import"./useUpdateEffect-CtcE8jsc.js";import"./useHasTabbableChild-BJO5-y03.js";import"./chevron-down-BSzGFoHX.js";import"./Button.module-Co5e5YHp.js";import"./check-BMVdLF27.js";import"./useToggleState-BRuYAOwi.js";import"./Virtualizer-DVIIa3fV.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Le=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Le as __namedExportsOrder,Xe as default};
