import{j as e}from"./iframe-D6gs3wS5.js";import{c}from"./Form-9Z_XXzsk.js";import{G as d}from"./Grid-CD-Uu2_M.js";import{G as i}from"./GridItem-rbSXNQzR.js";import{a as x,R as u}from"./Radio-Bi0bJL-D.js";import{C as I}from"./CheckboxGroup-D_Vw4HEU.js";import{C as G}from"./Checkbox-mNyRrkkc.js";import{T as t}from"./TextField-ORgA_oCs.js";import{S as l}from"./Select-MVsnXSdz.js";import{L as p}from"./ListBoxItem-bs8hgdGc.js";import{B as a}from"./Button-BVEXhnip.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-CFifySwi.js";import"./utils-DJQYVgmX.js";import"./clsx-B-dksMZM.js";import"./index-eJbc0aTW.js";import"./index-Ce1ePnt0.js";import"./clsx-Ciqy0D92.js";import"./Group-CPeAu2W-.js";import"./FieldError-Bf6pWkxo.js";import"./Text-BlJm85ZR.js";import"./Text-DqH78Bzr.js";import"./Button-CbEqyxyu.js";import"./Hidden-Chxa0iBH.js";import"./useLabel-cgRMBKD-.js";import"./useLabels-5rE94Eky.js";import"./useButton--ll78HR1.js";import"./SelectionIndicator-BbY2R1af.js";import"./useField-D_VgcOBp.js";import"./VisuallyHidden-DqFWHqpC.js";import"./useControlledState-CUa1KmDW.js";import"./Label-DQtpeuL0.js";import"./Dialog-C98XP9pU.js";import"./RSPContexts-h4eiuWjg.js";import"./OverlayArrow-Cu6bIr93.js";import"./useResizeObserver-DN7Cfe0F.js";import"./Collection-BPj3IxkI.js";import"./index-MBhbw5TK.js";import"./Separator-DFBkIcjx.js";import"./SelectionManager-D39yDHWQ.js";import"./useEvent-BmTKd3HL.js";import"./scrollIntoView-RTV5yabh.js";import"./useDescription-ChQWj-NI.js";import"./ListKeyboardDelegate-B-UkNWQd.js";import"./PressResponder-65KHhKmn.js";import"./useLocalizedStringFormatter-lMnXoQqL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CdlQofa4.js";import"./getScrollParent-Do3-zmpB.js";import"./ModalOverlay-Dy0Gqqwj.js";import"./x-JmNjUnkH.js";import"./createLucideIcon-Cx44WpFS.js";import"./useLocalizedStringFormatter-CkggrktT.js";import"./Heading-DzMuGclR.js";import"./info-CHS89hJ0.js";import"./Popover-BFkht2ft.js";import"./check-Cp-d3wef.js";import"./useToggleState-9Ois5ZbV.js";import"./TextFieldBase-DgzuhQ9N.js";import"./Input-mOQPu2PR.js";import"./useTextField-CbgRKsHa.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-C8aRdQe3.js";import"./DragAndDrop-aDUb-zHE.js";import"./inertValue-DI4K6UR3.js";import"./useListState-5kwwGhir.js";import"./TagGroup-BVVxzjpr.js";import"./useHighlightSelectionDescription-BswT5xaG.js";import"./useUpdateEffect-B1Ba2_Ek.js";import"./useHasTabbableChild-D3xj7MiI.js";import"./chevron-down-BAVcSzzp.js";import"./Virtualizer-UraM0Zai.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
