import{j as e}from"./iframe-D4Gvrs9r.js";import{$ as c}from"./Form-BfdGIWU_.js";import{G as d}from"./Grid-DKKzu4Iy.js";import{G as i}from"./GridItem-Ca3MHZHa.js";import{a as x,R as u}from"./Radio-Dr3zE88C.js";import{C as I}from"./CheckboxGroup-C_FLkNJB.js";import{C as G}from"./Checkbox-Dafw5WIf.js";import{T as t}from"./TextField-DxGvdwdl.js";import{S as l}from"./Select-B4uWIRHq.js";import{L as p}from"./ListBoxItem-BXN-WG25.js";import{B as a}from"./Button-CGGZxAPK.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DgLFYAtQ.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CwQ_rSHp.js";import"./useFocusRing-Cb3CZ-aE.js";import"./index-6UveYWg_.js";import"./index-DkaKCeuE.js";import"./clsx-Ciqy0D92.js";import"./Group-BYXCsgyg.js";import"./FieldError-BLkIz_DJ.js";import"./Text-9OpdE2KE.js";import"./Text-DPs03w0L.js";import"./Button-BokCFgRi.js";import"./Hidden-Fg0nOe1J.js";import"./useLabels-d4KXrv_2.js";import"./useButton-BedLEyIe.js";import"./SelectionIndicator-BIxjpXf9.js";import"./useField-BR9XxUx2.js";import"./VisuallyHidden-DsUdzhfv.js";import"./useControlledState-BxrHLQLL.js";import"./Label-L_cZKA3o.js";import"./Dialog-zW0zG9W3.js";import"./RSPContexts-Czq_pnVN.js";import"./OverlayArrow-BQwfwJwo.js";import"./useResizeObserver-D88_ukrT.js";import"./Collection-hZrEm5m1.js";import"./index-CmIIKAbh.js";import"./Separator-BNy66H1K.js";import"./SelectionManager-DFet17wD.js";import"./useEvent-BCx0YIxG.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CaLH3whp.js";import"./ListKeyboardDelegate-DJnjR6Kz.js";import"./PressResponder-B5c3bIBx.js";import"./useLocalizedStringFormatter-C406VONV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-mkPjdFLR.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-De-PNzK7.js";import"./createLucideIcon-BxZcqrlQ.js";import"./useLocalizedStringFormatter-BFXwxmG8.js";import"./Heading-DDPiogzv.js";import"./info-BqSFbJvi.js";import"./Popover-CGzaLVgW.js";import"./check-CDPJeYWc.js";import"./useToggleState-C6Car7gE.js";import"./TextFieldBase-34-gU71K.js";import"./Input-Cdjp1W2Q.js";import"./useTextField-BIe-c23M.js";import"./TextField.module-Cm6797Xw.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DzmCBGpL.js";import"./DragAndDrop-CCdXxF60.js";import"./inertValue-DbCpIESS.js";import"./useListState-B2bR7XCq.js";import"./Tag-Bjeplwtp.js";import"./useHighlightSelectionDescription-KHhmAoKW.js";import"./useUpdateEffect-BDWGf2Me.js";import"./useHasTabbableChild-v7-oLx4W.js";import"./chevron-down-BfKIJIJ3.js";import"./Virtualizer-C3VcU783.js";import"./Button.module-Co5e5YHp.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
