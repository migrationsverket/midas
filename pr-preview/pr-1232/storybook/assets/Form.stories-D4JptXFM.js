import{j as e}from"./iframe-yW9ZA3bb.js";import{c}from"./Form-Dyi7ByEU.js";import{G as d}from"./Grid-DAQrx4Li.js";import{G as i}from"./GridItem-DcxMLN7o.js";import{a as x,R as u}from"./Radio-BLm7NgiJ.js";import{C as I}from"./CheckboxGroup-Bmj8-dBK.js";import{C as G}from"./Checkbox-CqVwedsa.js";import{T as t}from"./TextField-B4-4Ow4W.js";import{S as l}from"./Select-DV14n3DW.js";import{L as p}from"./ListBoxItem-B9XNM4cf.js";import{B as a}from"./Button-CVdu7ubL.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-Bwgr8eO9.js";import"./utils-BUJhr-Te.js";import"./clsx-B-dksMZM.js";import"./index-BH1NNJD9.js";import"./index-XMJgY8GA.js";import"./clsx-Ciqy0D92.js";import"./Group-DSLIBANt.js";import"./FieldError-CaZE3eKK.js";import"./Text-Cihq6LYV.js";import"./Text-DMsq_JIv.js";import"./Button-Dz51wr3r.js";import"./Hidden-zw4kT8e2.js";import"./useLabel-BCJoncEW.js";import"./useLabels-CW7YtnuA.js";import"./useButton-Cr-TXgCI.js";import"./SelectionIndicator-DU1EMdvh.js";import"./useField-DB6t2HH5.js";import"./VisuallyHidden-BLpKIy7O.js";import"./useControlledState-YFMNQnxY.js";import"./Label-BktIqWh4.js";import"./Dialog-CA921wXk.js";import"./RSPContexts-ESkvyycf.js";import"./OverlayArrow-Bc9LmL03.js";import"./useResizeObserver-CnuGVro4.js";import"./Collection-Bw0lf7NA.js";import"./index-rTiiKE-t.js";import"./Separator-WIHQB6Ek.js";import"./SelectionManager-BxnG2-K_.js";import"./useEvent-7NkuCPOG.js";import"./scrollIntoView-DxGdu0tm.js";import"./useDescription-Cw85_cIo.js";import"./ListKeyboardDelegate-HzIwCYcA.js";import"./PressResponder-CZpqY1IJ.js";import"./useLocalizedStringFormatter-sAga3kqn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C84mhlBd.js";import"./getScrollParent-ByY90j8k.js";import"./ModalOverlay-CQLS8SbE.js";import"./x-DnrjJHU3.js";import"./createLucideIcon-Dzjc7ziG.js";import"./useLocalizedStringFormatter-bv3drFF0.js";import"./Heading-Df13RFa7.js";import"./info-DvvFrCJ1.js";import"./Popover-DjjRZZRa.js";import"./check-Byrhfxjk.js";import"./useToggleState-BAV0XQKa.js";import"./TextFieldBase-BIqlg8iF.js";import"./Input-aTb6VFZD.js";import"./useTextField-BPKUsTxO.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BUoHOFsa.js";import"./DragAndDrop-ANfjVQd4.js";import"./inertValue-u315Jshf.js";import"./useListState-Dg5BuDc3.js";import"./TagGroup-YGb2klFA.js";import"./useHighlightSelectionDescription-B1Oclkdo.js";import"./useUpdateEffect-20AShWAd.js";import"./useHasTabbableChild-Dca0MITO.js";import"./chevron-down-Bt81addK.js";import"./Virtualizer-PDtZaQiO.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
