import{j as e}from"./iframe-Ex-KEKbR.js";import{c}from"./Form-CXAt5UpX.js";import{G as d}from"./Grid-DguFePZ1.js";import{G as i}from"./GridItem-BaESUNSj.js";import{a as x,R as u}from"./Radio-B_QyzA8L.js";import{C as I}from"./CheckboxGroup-BGDRjIR-.js";import{C as G}from"./Checkbox-CiVn6ige.js";import{T as t}from"./TextField-CxMZaaiZ.js";import{S as l}from"./Select-CrGEqb-J.js";import{L as p}from"./ListBoxItem-DAaDWeEW.js";import{B as a}from"./Button-BAZVnFvD.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-H-1VYNNS.js";import"./utils-Dq_8TIe4.js";import"./clsx-B-dksMZM.js";import"./index-DADZxfgg.js";import"./index-DTNdKqrN.js";import"./clsx-Ciqy0D92.js";import"./Group-uGzZW66D.js";import"./FieldError-CgmLooUG.js";import"./Text-CeEAoIdH.js";import"./Text-DJaiOuNK.js";import"./Button-C8JSYTF8.js";import"./Hidden-CyDaCMoS.js";import"./useLabel-iQaKdHKt.js";import"./useLabels-PlDzf5VQ.js";import"./useButton-It03dpfb.js";import"./SelectionIndicator-DgoNvaWX.js";import"./useField-BOXq6rqV.js";import"./VisuallyHidden-B1UrQI4k.js";import"./useControlledState-OUr4VazD.js";import"./Label-C9Jm7gW_.js";import"./Dialog-CRxTXFHb.js";import"./RSPContexts-DxlwqgCa.js";import"./OverlayArrow-BEp85xx4.js";import"./useResizeObserver-EpcjSYJm.js";import"./Collection-Bge0dQHT.js";import"./index-CJUwhwxK.js";import"./Separator-dkZZPlDE.js";import"./SelectionManager-XXgR8HaZ.js";import"./useEvent-B4t1a7CS.js";import"./scrollIntoView-D4kGYOib.js";import"./useDescription-Bk4LSLU-.js";import"./ListKeyboardDelegate-Bg6ymlV0.js";import"./PressResponder-fPkhSkCj.js";import"./useLocalizedStringFormatter-C1SYv3sl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BtJRc29T.js";import"./getScrollParent-ClgoPRH9.js";import"./ModalOverlay--BWN3whO.js";import"./x-D_4t1M2T.js";import"./createLucideIcon-CnalT5R6.js";import"./useLocalizedStringFormatter-CTOyl-7s.js";import"./Heading-Hwdatq5V.js";import"./info-1tlzplCu.js";import"./Popover-CPeSqkYI.js";import"./check-DuCLopxg.js";import"./useToggleState-DGdgrcBh.js";import"./TextFieldBase-B79_bFpb.js";import"./Input-CN9bHUmc.js";import"./useTextField-BU2Zn2Z3.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-B1HHk4Tl.js";import"./DragAndDrop-DxdtYTWg.js";import"./inertValue-DhjvNcjY.js";import"./useListState-DemnMecy.js";import"./TagGroup-Hnw3WpWF.js";import"./useHighlightSelectionDescription-BXdY1Lya.js";import"./useUpdateEffect-1FylvW6V.js";import"./useHasTabbableChild-D9jdibTW.js";import"./chevron-down-DYSOlqTo.js";import"./Virtualizer-CZ-FpyQE.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
