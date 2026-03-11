import{j as e}from"./iframe-BULWFXB5.js";import{$ as c}from"./Form-GTo_fkTX.js";import{G as d}from"./Grid-ysanFvv-.js";import{G as i}from"./GridItem-Bv8MaFq6.js";import{a as x,R as u}from"./Radio-Dng8f7z3.js";import{C as I}from"./CheckboxGroup-lMd6AHZb.js";import{C as G}from"./Checkbox-k7mZfrEv.js";import{T as t}from"./TextField-DvGyUaU-.js";import{S as l}from"./Select-DXW6xzVb.js";import{L as p}from"./ListBoxItem-Mgxe7jcR.js";import{B as a}from"./Button-DuCjaiZE.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BypaegC2.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BnhRbTsd.js";import"./useFocusRing-BQjr63hK.js";import"./index-Bq_n1hpv.js";import"./index-CB-9tr3l.js";import"./clsx-Ciqy0D92.js";import"./Group-DP3oo-ZU.js";import"./FieldError-C4OBGurV.js";import"./Text--sxnixpG.js";import"./Text-DuTR7tq0.js";import"./Button-DlgELQyz.js";import"./Hidden-iwjRZV6c.js";import"./useLabels-CYw97kiM.js";import"./useButton-CjhJKsMh.js";import"./SelectionIndicator-bTKIb-VQ.js";import"./useField-Da10gebg.js";import"./VisuallyHidden-D8sOhpgS.js";import"./useControlledState-BW5BQp7c.js";import"./Label-C4aZ8uIP.js";import"./Dialog-DgAdDjCQ.js";import"./RSPContexts-p83zhHcS.js";import"./OverlayArrow-D6Wvffju.js";import"./useResizeObserver-ccEFS9WT.js";import"./Collection-DBptuMbt.js";import"./index-HIf1MFds.js";import"./Separator-Dj4DC63K.js";import"./SelectionManager-Dv0G0Tlv.js";import"./useEvent-P8B_Gb_H.js";import"./scrollIntoView-DAGd27OM.js";import"./useDescription-DGIlMGbp.js";import"./ListKeyboardDelegate-CcolMQIW.js";import"./PressResponder-foLuIAeD.js";import"./useLocalizedStringFormatter-Eb1GNK_U.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BCQf3Ezu.js";import"./getScrollParent-BKMesRpb.js";import"./x-oHK0ncrQ.js";import"./createLucideIcon-Ch4Yrygv.js";import"./useLocalizedStringFormatter-B5QzfwUv.js";import"./Heading-SCHH97H1.js";import"./info-BiZBGm_G.js";import"./Popover-D7OHo3Lj.js";import"./check-DpQFVNoC.js";import"./useToggleState-DlXLfDmY.js";import"./TextFieldBase-DdWh13o5.js";import"./Input-Dbg-Ztut.js";import"./useTextField-CpWqU1eE.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BgKsI0ZZ.js";import"./DragAndDrop-CqNLlWpo.js";import"./inertValue-Bq8Zub17.js";import"./useListState-bEvS13YD.js";import"./TagGroup-Bm0doxZ4.js";import"./useHighlightSelectionDescription-D-rIRBuB.js";import"./useUpdateEffect-BGZbUXI-.js";import"./useHasTabbableChild-DmvMp1IX.js";import"./chevron-down-BzJ05esI.js";import"./Virtualizer-DyuGAsjF.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
