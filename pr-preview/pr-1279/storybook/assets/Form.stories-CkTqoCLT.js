import{j as e}from"./iframe-Dzhbyx-V.js";import{c}from"./Form-D-cIW_uQ.js";import{G as d}from"./Grid-nYRZBag-.js";import{G as i}from"./GridItem-DK8vcCWa.js";import{a as x,R as u}from"./Radio-C8wyeJnB.js";import{C as I}from"./CheckboxGroup-BcJ7n42O.js";import{C as G}from"./Checkbox-CEMfl-qb.js";import{T as t}from"./TextField-D8SP1S3l.js";import{S as l}from"./Select-BM32Ivsr.js";import{L as p}from"./ListBoxItem-BIqU4sOH.js";import{B as a}from"./Button-DVuadbrT.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-DJW4L7nP.js";import"./utils-CB1YxmUd.js";import"./clsx-B-dksMZM.js";import"./index-GOgi-yIv.js";import"./index-C7t27xFG.js";import"./clsx-Ciqy0D92.js";import"./Group-BeMwF-ca.js";import"./FieldError-BKbX9qzJ.js";import"./Text-B9yiudZO.js";import"./Text--lu7STeo.js";import"./Button-CBTAD5ia.js";import"./Hidden-CFP4Nw8t.js";import"./useLabel-Cr2tVHj4.js";import"./useLabels-Dn3VJT3c.js";import"./useButton-ZzDTgbRW.js";import"./SelectionIndicator-FpX-lNKX.js";import"./useField-DQZemjAW.js";import"./VisuallyHidden-BTnUWvIm.js";import"./useControlledState-BsGPn7dI.js";import"./Label-C63CAp6v.js";import"./Dialog-PCq06Qm1.js";import"./RSPContexts-BZBUf3ht.js";import"./OverlayArrow-DC5up_Z2.js";import"./useResizeObserver-DA-7fZmx.js";import"./Collection-Cyrn4hfM.js";import"./index-COsjAsAS.js";import"./Separator-dQuh_2rQ.js";import"./SelectionManager-CAcvLEQx.js";import"./useEvent-CM_jpF7d.js";import"./scrollIntoView-CGVh69Nr.js";import"./useDescription-CQR6r60R.js";import"./ListKeyboardDelegate-D4rfyZ0F.js";import"./PressResponder-XCyiw1VR.js";import"./useLocalizedStringFormatter-D1IY3EM8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CQB60EaB.js";import"./getScrollParent-BKCTdMaY.js";import"./ModalOverlay-CQBaCv5J.js";import"./x-Daz8ULC7.js";import"./createLucideIcon-Daz74Vgk.js";import"./useLocalizedStringFormatter-CZwJWfDJ.js";import"./Heading-llBbS4q-.js";import"./info-DgGoIkZW.js";import"./Popover-PoVtDkxQ.js";import"./check-Cz7yBD2d.js";import"./useToggleState-BLcO-Ek9.js";import"./TextFieldBase-DWCvR7Be.js";import"./Input-DvtTB9MK.js";import"./useTextField-C5k5GhGk.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-C8uZ2t_b.js";import"./DragAndDrop-CHN-VwzZ.js";import"./inertValue-zCRDij_W.js";import"./useListState-DVCcMFSr.js";import"./TagGroup-lWsDOmkU.js";import"./useHighlightSelectionDescription-aHgDV1Eq.js";import"./useUpdateEffect-C5ZCmitF.js";import"./useHasTabbableChild-Cm9E3pEU.js";import"./chevron-down-C3qizIsm.js";import"./Virtualizer-B5XotUzn.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
