import{j as e}from"./iframe-D3BUIA8t.js";import{$ as c}from"./Form-_eb6GcJE.js";import{G as d}from"./Grid-BQbfcDgU.js";import{G as i}from"./GridItem-DJw4mZa6.js";import{T as t}from"./TextField-BKSsBH8t.js";import{S as l}from"./Select-BDFXJn4M.js";import{B as a}from"./Button-B4PrgER1.js";import{R as x,a as u}from"./Radio-CVZf9rcN.js";import{C as I}from"./CheckboxGroup-DjeZo4a7.js";import{C as G}from"./Checkbox-BWz-onM2.js";import{L as p}from"./ListBoxItem-DdxUXA7D.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BRlrr6bM.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CBZTCHh6.js";import"./useFocusRing-Dmx1Rf0M.js";import"./index-BNf-lxYJ.js";import"./index-CUuStiOA.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-9dhJQCHe.js";import"./TextField-BwAg4uob.js";import"./FieldError-SCOyZSTv.js";import"./Text-C-eelpHs.js";import"./Text-Dp3wKR2d.js";import"./RSPContexts-CV4RKUwg.js";import"./Group-BIOUjxBC.js";import"./Input-CQoX55Gl.js";import"./Hidden-CYJ4paUC.js";import"./Button-DFQM0Ftj.js";import"./useLabels-BWXlsqMn.js";import"./useButton-BbUvFvwo.js";import"./useTextField-Dvicwip1.js";import"./useControlledState-BvkD_Bv4.js";import"./useField-B4KHEMc0.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-BzFsMCKr.js";import"./Dialog-DK1pCcrx.js";import"./OverlayArrow-C_xbk_-s.js";import"./useResizeObserver-Bhk7bTxr.js";import"./Collection-BNvj67Xa.js";import"./index-nLNMctm3.js";import"./Separator-BiXN7KA2.js";import"./SelectionManager-DN-RiP15.js";import"./useEvent-jFLDziUE.js";import"./scrollIntoView-DdyGbssD.js";import"./SelectionIndicator-B4PXXzQd.js";import"./useDescription-D6Hwdm3g.js";import"./ListKeyboardDelegate-CBk0xvUq.js";import"./PressResponder-8d8b5_sP.js";import"./useLocalizedStringFormatter-BBFFW8CZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-C8d6w8zj.js";import"./VisuallyHidden-ib62HETz.js";import"./x-CXeE-P16.js";import"./createLucideIcon-hvTt_6n0.js";import"./useLocalizedStringFormatter-Dt6krr6e.js";import"./Heading-BK0YGBVE.js";import"./info-DTFn8z1t.js";import"./Popover-9b7GRJkW.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DJbi_IrY.js";import"./DragAndDrop-Czz4jqkT.js";import"./inertValue-DjwGpUyG.js";import"./useListState-Cl66NwOp.js";import"./Tag-DTCMnGeS.js";import"./useHighlightSelectionDescription-CvSzhq39.js";import"./useUpdateEffect-B631cef0.js";import"./useHasTabbableChild-BJxLKl7Q.js";import"./chevron-down-Bkr-1j5K.js";import"./Button.module-CtQ1deO8.js";import"./check-BhHbqs7O.js";import"./useToggleState-Vw4wrSXB.js";import"./Virtualizer-B-1LVv0C.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
