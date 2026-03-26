import{j as e}from"./iframe-CRmifMxk.js";import{c}from"./Form-BdfTmg9K.js";import{G as d}from"./Grid-DF3FFUAA.js";import{G as i}from"./GridItem-Clr-Fakl.js";import{a as x,R as u}from"./Radio-BpnEBnBo.js";import{C as I}from"./CheckboxGroup-DqniBrFI.js";import{C as G}from"./Checkbox-B4ZmW57T.js";import{T as t}from"./TextField-BJ7ywWNR.js";import{S as l}from"./Select-DiAcfdHN.js";import{L as p}from"./ListBoxItem-DKtVHtSC.js";import{B as a}from"./Button-C1SdrETN.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-C63zC52P.js";import"./utils-Dhemezbc.js";import"./clsx-B-dksMZM.js";import"./index-DsJY3sZz.js";import"./index-C2oL4zj2.js";import"./clsx-Ciqy0D92.js";import"./Group-BEi-QEnV.js";import"./FieldError-4mX3m-58.js";import"./Text-7kJBKZyv.js";import"./Text-Cw5AWujN.js";import"./Button-Xq9T9zNn.js";import"./Hidden-D_jN673M.js";import"./useLabel-CMUsO_ec.js";import"./useLabels-DRk006Lw.js";import"./useButton-BpHW9Z05.js";import"./SelectionIndicator-kZ0Ry9SW.js";import"./useField-CAyp5oSJ.js";import"./VisuallyHidden-C9jbNlKJ.js";import"./useControlledState-DeYyUgKl.js";import"./Label-DpfANppt.js";import"./Dialog-DNb1Uoko.js";import"./RSPContexts-Ch-opsTz.js";import"./OverlayArrow-BDQxE5Aw.js";import"./useResizeObserver-Czi0T6ep.js";import"./Collection-BhxLxQcu.js";import"./index-DwLMWdc1.js";import"./Separator-CUTS7byi.js";import"./SelectionManager-DztN3z26.js";import"./useEvent-CCz8s320.js";import"./scrollIntoView-D0gLy9uc.js";import"./useDescription-Tao1j2gm.js";import"./ListKeyboardDelegate-BPJcXB6C.js";import"./PressResponder-BT7TY4ez.js";import"./useLocalizedStringFormatter-D-hwM5Wx.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CJnMoTai.js";import"./getScrollParent-DxnI4PpA.js";import"./x-COiF7Ld4.js";import"./createLucideIcon-DkATSQ6x.js";import"./useLocalizedStringFormatter-CHY6Cxq_.js";import"./Heading-B2jvBi9y.js";import"./info-C89V329i.js";import"./Popover-6X5Oeaj7.js";import"./check-PWESK8WL.js";import"./useToggleState-DdZ2lj-a.js";import"./TextFieldBase-C4HV1Ofz.js";import"./Input-PRe3Ij8l.js";import"./useTextField-CQSHC6Ee.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-C2hP3EOJ.js";import"./DragAndDrop-CkfYJqWE.js";import"./inertValue-C1c6uZ_B.js";import"./useListState-B5IdCNqG.js";import"./TagGroup-C8yWDBeu.js";import"./useHighlightSelectionDescription-B5S1OM2H.js";import"./useUpdateEffect-C24Fq-cB.js";import"./useHasTabbableChild-0dlPfDDa.js";import"./chevron-down-RoGL8dwp.js";import"./Virtualizer-Cq9uDEGi.js";import"./Button.module-BB7N-cLd.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
