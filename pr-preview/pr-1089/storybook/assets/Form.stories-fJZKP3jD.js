import{j as e}from"./iframe-C9oGoQlD.js";import{$ as c}from"./Form-HBTvhOGb.js";import{G as d}from"./Grid-C5vC6o0v.js";import{G as i}from"./GridItem-CaAlnwgh.js";import{a as x,R as u}from"./Radio-CG_Urxjn.js";import{C as I}from"./CheckboxGroup-kPkneow0.js";import{C as G}from"./Checkbox-OoD3CyIL.js";import{T as t}from"./TextField-BhLSlho3.js";import{S as l}from"./Select-Bo0-0ZJ6.js";import{L as p}from"./ListBoxItem-DbcTmAVu.js";import{B as a}from"./Button-BfQwIuB4.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-c5FSWQc2.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Dt_mLA4h.js";import"./useFocusRing-BZ5zqIPz.js";import"./index-DI4OZgw7.js";import"./index-D3v6lHGq.js";import"./clsx-Ciqy0D92.js";import"./Group-DV1XTjT8.js";import"./FieldError-BqYP09uo.js";import"./Text-BguV-1BC.js";import"./Text-6CtE12hJ.js";import"./Button-Cxj7U1e9.js";import"./Hidden-DN3uGqX_.js";import"./useLabels-B3yO6u3S.js";import"./useButton-DJeKkiJU.js";import"./SelectionIndicator-BU-2wMTH.js";import"./useField-D2aP1UuT.js";import"./VisuallyHidden-cGHgangc.js";import"./useControlledState-Bqpo8ac-.js";import"./Label-CGvpUOLc.js";import"./Dialog-tRvNkEhL.js";import"./RSPContexts-BnvAgtmh.js";import"./OverlayArrow-ECDMMUFe.js";import"./useResizeObserver-C5fFhGEN.js";import"./Collection-1CzbJfsQ.js";import"./index-CzsQzHup.js";import"./Separator-DjtVqcvK.js";import"./SelectionManager-5cPgrrKD.js";import"./useEvent-CKrpPU1L.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DU5vTSEG.js";import"./ListKeyboardDelegate-B2fL_pD3.js";import"./PressResponder-khEv3hIN.js";import"./useLocalizedStringFormatter-BZNBSpMr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CXzW8d1z.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-a64OMIuk.js";import"./createLucideIcon-B4xrwkR8.js";import"./useLocalizedStringFormatter-CCYDdyRA.js";import"./Heading-CnrQystq.js";import"./info-C186CaFV.js";import"./Popover-BbBpnWtB.js";import"./check-aqc3dtrw.js";import"./useToggleState-mY1XG-gJ.js";import"./TextFieldBase-CVFWAO4G.js";import"./Input-V_4jw_Ee.js";import"./useTextField-BtgUFzkV.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Dm5yQS0q.js";import"./DragAndDrop-DB52-qbS.js";import"./inertValue-BzN497sR.js";import"./useListState-DMX4n61L.js";import"./TagGroup-4hB46ynb.js";import"./useHighlightSelectionDescription-Kg9t898G.js";import"./useUpdateEffect-k4WRsvAC.js";import"./useHasTabbableChild-bhQJycoG.js";import"./chevron-down-CA7GslZG.js";import"./Virtualizer-7DTvVA87.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
