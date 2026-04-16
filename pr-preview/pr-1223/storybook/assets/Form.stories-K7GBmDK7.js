import{j as e}from"./iframe-JYgA1KQi.js";import{c}from"./Form-r6wIXJmO.js";import{G as d}from"./Grid-DVgYXwmF.js";import{G as i}from"./GridItem-ogTGGHNV.js";import{a as x,R as u}from"./Radio-Bg9vsmwZ.js";import{C as I}from"./CheckboxGroup-C5Ml4roU.js";import{C as G}from"./Checkbox-BtwCHnb_.js";import{T as t}from"./TextField-D-AztzFT.js";import{S as l}from"./Select-02YXjnx4.js";import{L as p}from"./ListBoxItem-BcyTKAZt.js";import{B as a}from"./Button-MMPxX2Zb.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-C06MErgQ.js";import"./utils-ChLKnNJg.js";import"./clsx-B-dksMZM.js";import"./index--lNTANJm.js";import"./index-L3mAy6mP.js";import"./clsx-Ciqy0D92.js";import"./Group-B675t2Fv.js";import"./FieldError-BlsJhfcN.js";import"./Text-D9TOgsmN.js";import"./Text-D50EAg-o.js";import"./Button-w7gIenY9.js";import"./Hidden-0YDp5zxo.js";import"./useLabel-DxtLEE3Y.js";import"./useLabels-DSacGDBd.js";import"./useButton-Beja3uNl.js";import"./SelectionIndicator-Cg3C4rFl.js";import"./useField-QQnG48hk.js";import"./VisuallyHidden-Cov8ReYV.js";import"./useControlledState-CXI3Yibh.js";import"./Label-DSIP6ZhT.js";import"./Dialog-DLppZ60P.js";import"./RSPContexts-gejQyHLH.js";import"./OverlayArrow-B2TJrPfo.js";import"./useResizeObserver-BiImtN7c.js";import"./Collection-BNq3e9X1.js";import"./index-C7yQKzyG.js";import"./Separator-BItHUN8S.js";import"./SelectionManager-CiWhjYbj.js";import"./useEvent-BOB9fAnz.js";import"./scrollIntoView-D2aT1v_d.js";import"./useDescription-CE0NAOWk.js";import"./ListKeyboardDelegate-CImt9RlX.js";import"./PressResponder-B0xgXgFS.js";import"./useLocalizedStringFormatter-CVst0Jjc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DS0nLW82.js";import"./getScrollParent-zw9jGmc3.js";import"./ModalOverlay-D0_8i7ni.js";import"./x-C1kwUoON.js";import"./createLucideIcon-UApEV6S6.js";import"./useLocalizedStringFormatter-j9dnYAXL.js";import"./Heading-BHTxTGKK.js";import"./info-D7hO4-PY.js";import"./Popover-CB-DEkvg.js";import"./check-DCY3asdX.js";import"./useToggleState-BdiQ14jL.js";import"./TextFieldBase-C9M_ak0B.js";import"./Input-B1FGNxTx.js";import"./useTextField-DbI1Iik8.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Dr4QxDZp.js";import"./DragAndDrop-CdhwxqnI.js";import"./inertValue-D_0SFJzU.js";import"./useListState-Cgr5iTzm.js";import"./TagGroup-B10U_coj.js";import"./useHighlightSelectionDescription-C9Gr4vHP.js";import"./useUpdateEffect-CIb3u_ya.js";import"./useHasTabbableChild-CgzW6gFD.js";import"./chevron-down-Vp1kGQVG.js";import"./Virtualizer-D6gNAzTO.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
