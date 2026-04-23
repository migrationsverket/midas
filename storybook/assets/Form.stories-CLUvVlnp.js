import{j as e}from"./iframe-DOBgJI-y.js";import{c}from"./Form-DQ-r7Yap.js";import{G as d}from"./Grid-UqiXeoRu.js";import{G as i}from"./GridItem-4ZN3TwJ8.js";import{a as x,R as u}from"./Radio-B1mXzXib.js";import{C as I}from"./CheckboxGroup-DLLZ4ebH.js";import{C as G}from"./Checkbox-B_N9-l7y.js";import{T as t}from"./TextField-CQWg_rEm.js";import{S as l}from"./Select-YUZ4NYsg.js";import{L as p}from"./ListBoxItem-BZ13lcvN.js";import{B as a}from"./Button-u1ZblIyK.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-BQr5-3Np.js";import"./utils-DiaRguFq.js";import"./clsx-B-dksMZM.js";import"./index-X29No980.js";import"./index-mBWPsfNs.js";import"./clsx-Ciqy0D92.js";import"./Group-DS0v0YDF.js";import"./FieldError-BPSmjDw6.js";import"./Text-CGuvF1HY.js";import"./Text-DFLO7oRJ.js";import"./Button-iOZwwJt-.js";import"./Hidden-DRJRklAH.js";import"./useLabel-CwHTcLwx.js";import"./useLabels-DQJyw6TD.js";import"./useButton-q5vZ9ZE2.js";import"./SelectionIndicator-CiEVc6IP.js";import"./useField-22FoNi1Z.js";import"./VisuallyHidden-mcCQW-OH.js";import"./useControlledState-DuJeSPKv.js";import"./Label-Cb2VwvBl.js";import"./Dialog-3fHPTowi.js";import"./RSPContexts-D1vu3Vuz.js";import"./OverlayArrow-zzAqmKbl.js";import"./useResizeObserver-CpHe5CSo.js";import"./Collection-CQCqI1zo.js";import"./index-_K1HwoT7.js";import"./Separator-Bjcgp8Dp.js";import"./SelectionManager-BOMbf9lp.js";import"./useEvent-B26EYKij.js";import"./scrollIntoView-D0LuDjH5.js";import"./useDescription-BorXdBcC.js";import"./ListKeyboardDelegate-DEvkxBuI.js";import"./PressResponder-VOsET5cv.js";import"./useLocalizedStringFormatter-DKxraR3H.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CeVmZFjW.js";import"./getScrollParent-l3TZr912.js";import"./ModalOverlay-IshjVRTX.js";import"./x-BRuwBP3I.js";import"./createLucideIcon-DcZtHlnh.js";import"./useLocalizedStringFormatter-B7OxMwVs.js";import"./Heading-D9mndLSG.js";import"./info-BqKlEoQp.js";import"./Popover-CJb4S6mH.js";import"./check-CHSRmvUz.js";import"./useToggleState-BvRdfMMU.js";import"./TextFieldBase-9S_c4zb9.js";import"./Input-DGML-3Zm.js";import"./useTextField-CId_-ye5.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BuSfPuIq.js";import"./DragAndDrop-DyOIqwXm.js";import"./inertValue-LZBR3Dxr.js";import"./useListState-8QM6NEsq.js";import"./TagGroup-DU8Sxrd3.js";import"./useHighlightSelectionDescription-CCqHgz1O.js";import"./useUpdateEffect-Dqt-qXKB.js";import"./useHasTabbableChild-dPHvDEKh.js";import"./chevron-down-usReRDBA.js";import"./Virtualizer-D8f1NikV.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
