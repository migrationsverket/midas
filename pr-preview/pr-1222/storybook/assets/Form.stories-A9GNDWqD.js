import{j as e}from"./iframe-BQ0rH5Sa.js";import{c}from"./Form-CmjcdI7v.js";import{G as d}from"./Grid-hB8IfWMT.js";import{G as i}from"./GridItem-egSRsZ9P.js";import{a as x,R as u}from"./Radio-CD8cx4cS.js";import{C as I}from"./CheckboxGroup-zEZ2T1WJ.js";import{C as G}from"./Checkbox-q3i5cFms.js";import{T as t}from"./TextField-Bvgn55Pi.js";import{S as l}from"./Select-C9X2rUcV.js";import{L as p}from"./ListBoxItem-D9W8EwJE.js";import{B as a}from"./Button-xgeMudhK.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-CUcWLsdz.js";import"./utils-BbCSG2Ds.js";import"./clsx-B-dksMZM.js";import"./index-BRzOPMdu.js";import"./index-B9nWUi91.js";import"./clsx-Ciqy0D92.js";import"./Group-aavVp2ib.js";import"./FieldError-DF9g5RSV.js";import"./Text-Uu1ScPl1.js";import"./Text-rQ7Pcap6.js";import"./Button-BWU_U6pL.js";import"./Hidden-B903bi5e.js";import"./useLabel-G48bLjJ4.js";import"./useLabels-Btdu3CAb.js";import"./useButton-D_NyLkoF.js";import"./SelectionIndicator-CR-oyooM.js";import"./useField-CrN0JmcK.js";import"./VisuallyHidden-PaW3vCB4.js";import"./useControlledState-Bj7Wg3w8.js";import"./Label-CEcwAWdk.js";import"./Dialog-DyTiNzWr.js";import"./RSPContexts-DXFVYlMo.js";import"./OverlayArrow-DmOeEDl-.js";import"./useResizeObserver-dQOF5v6o.js";import"./Collection-DElV5k5j.js";import"./index-BgWuFVSf.js";import"./Separator-CjgADAso.js";import"./SelectionManager-DgEIU_G2.js";import"./useEvent-CV3GCwBx.js";import"./scrollIntoView-BZLVH2bl.js";import"./useDescription-n70PdxFN.js";import"./ListKeyboardDelegate-NXm3dSJr.js";import"./PressResponder-DlymkY53.js";import"./useLocalizedStringFormatter-yem2oIc6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BDQMmawh.js";import"./getScrollParent-DbuXa8OY.js";import"./ModalOverlay-Dzl52ksE.js";import"./x-DW52Hs4o.js";import"./createLucideIcon-CmTdOvE9.js";import"./useLocalizedStringFormatter-87HHeiEB.js";import"./Heading-CLHofvwk.js";import"./info-CVVa66bd.js";import"./Popover-DSfuVx7p.js";import"./check-CTVrwqq6.js";import"./useToggleState-BgKeYsOt.js";import"./TextFieldBase-CCiBuCp1.js";import"./Input-DW5nz6f0.js";import"./useTextField-tla-sBga.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-VO4gSTSk.js";import"./DragAndDrop-BmBRZb9O.js";import"./inertValue-ClE-4-wr.js";import"./useListState-DynFJljk.js";import"./TagGroup-iBJZWHKq.js";import"./useHighlightSelectionDescription-DlMWssIO.js";import"./useUpdateEffect-Ce28wpaI.js";import"./useHasTabbableChild--UC9HmcV.js";import"./chevron-down-BC6JPwRB.js";import"./Virtualizer-DsGDC0AM.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
