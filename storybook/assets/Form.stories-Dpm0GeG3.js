import{j as e}from"./iframe-DhO1D3QS.js";import{c}from"./Form-DQnVBK_C.js";import{G as d}from"./Grid-C7UNlaIa.js";import{G as i}from"./GridItem-4RrIelTS.js";import{a as x,R as u}from"./Radio-6CysNfl8.js";import{C as I}from"./CheckboxGroup-jwisOiPJ.js";import{C as G}from"./Checkbox-DtFMNpCh.js";import{T as t}from"./TextField-CO3vqbXV.js";import{S as l}from"./Select-D-16VqCJ.js";import{L as p}from"./ListBoxItem-D-V2GGXP.js";import{B as a}from"./Button-Do0NIfC4.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-CQcNXJs3.js";import"./utils-CSNCD2yj.js";import"./clsx-B-dksMZM.js";import"./index-LXpDKKNQ.js";import"./index-DoTz7Iqr.js";import"./clsx-Ciqy0D92.js";import"./Group-C20hGe4g.js";import"./FieldError-BUEn5Oe2.js";import"./Text-_SRXujoE.js";import"./Text-CzyDiWSu.js";import"./Button-C3UugFSS.js";import"./Hidden-I1lhyBbs.js";import"./useLabel-DkS0rVDY.js";import"./useLabels-DLba56LZ.js";import"./useButton-CWHmgq4Y.js";import"./SelectionIndicator-DS0PCRu2.js";import"./useField-DoQL0GGr.js";import"./VisuallyHidden-D9luNuIh.js";import"./useControlledState-C9CuHrJu.js";import"./Label-BEbcJJ-0.js";import"./Dialog-DnbLLgMq.js";import"./RSPContexts-6O3ucjMQ.js";import"./OverlayArrow-Bt3V5xwN.js";import"./useResizeObserver-Dy2ut44h.js";import"./Collection-Cimwf5Zr.js";import"./index-Bc5wjcDh.js";import"./Separator-CAP_u--M.js";import"./SelectionManager-BiDDZLNk.js";import"./useEvent-CAEIwGNs.js";import"./scrollIntoView-aGeNnyvC.js";import"./useDescription-CghzDXw0.js";import"./ListKeyboardDelegate-D5nCii-g.js";import"./PressResponder-Dn7Sr3dQ.js";import"./useLocalizedStringFormatter-BuzJnweE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B8lt5G5V.js";import"./getScrollParent-CDShaaNJ.js";import"./ModalOverlay-D2epRYB1.js";import"./x-CdBi1_si.js";import"./createLucideIcon-DKHdgiD6.js";import"./useLocalizedStringFormatter-D1NPH8NW.js";import"./Heading-43GdhHJh.js";import"./info-DClxFg8y.js";import"./Popover-yvf1XY0m.js";import"./check-oasUPCPj.js";import"./useToggleState-QykUU3tt.js";import"./TextFieldBase-C8S0jv7b.js";import"./Input-C6g8_Qf3.js";import"./useTextField-C_37wv57.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BV1sW0tn.js";import"./DragAndDrop-CpnUOMqJ.js";import"./inertValue-BXvoH9kk.js";import"./useListState-TbCVayQy.js";import"./TagGroup-SESlrYVy.js";import"./useHighlightSelectionDescription-D9-6fRJD.js";import"./useUpdateEffect-50Wz2k7C.js";import"./useHasTabbableChild-DVtp2-rM.js";import"./chevron-down-CvAXEs8H.js";import"./Virtualizer-CL-Xkr8v.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
