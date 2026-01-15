import{j as e}from"./iframe-Cjp05Xvk.js";import{$ as c}from"./Form-B-AII52H.js";import{G as d}from"./Grid-C_WYstYx.js";import{G as i}from"./GridItem-D3xmR0Jb.js";import{T as t}from"./TextField-bn2FE7o6.js";import{S as l}from"./Select-CKSglFjI.js";import{B as a}from"./Button-QxYJDAqE.js";import{R as x,a as u}from"./Radio-DsCh8wM8.js";import{C as I}from"./CheckboxGroup-B7xwsWk1.js";import{C as G}from"./Checkbox-B-fSf8rZ.js";import{L as p}from"./ListBoxItem-D6mOMLgI.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B7KUpLVX.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-C6Bi5OeS.js";import"./useFocusRing-MuyneAO_.js";import"./index-DQoebJgT.js";import"./index-BqZRieL_.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BNg9apHE.js";import"./TextField-Ab3geyXW.js";import"./FieldError-DJAw2gVJ.js";import"./Text-CY50v26A.js";import"./Text-BqqvV1Lx.js";import"./RSPContexts-BXs3MdzJ.js";import"./Group-CvmyvYvU.js";import"./Input-DwkIqD-V.js";import"./Hidden-nSg4a4bn.js";import"./Button-BQdRHNfD.js";import"./useLabels-DKrB5MGQ.js";import"./useButton-CCylroM-.js";import"./useTextField-BBHsan9u.js";import"./useControlledState-C9vPwLiF.js";import"./useField-ChHqYgaR.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-ho67qEXm.js";import"./Dialog-Dk6djaYU.js";import"./OverlayArrow-B2pRkLMy.js";import"./useResizeObserver-7BmFqOFA.js";import"./Collection-UMAXBFiQ.js";import"./index-CRzahONy.js";import"./Separator-CXjDjCJ6.js";import"./SelectionManager-DcRQnitR.js";import"./useEvent-CmHPTiIB.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C_yFhE-I.js";import"./useDescription-BtBb2fRe.js";import"./ListKeyboardDelegate-BF1tQzOA.js";import"./PressResponder-B-5n5lr4.js";import"./useLocalizedStringFormatter-nEop6Uh_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D-SCOxJd.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BiBWBoz6.js";import"./x--z0bIiWF.js";import"./createLucideIcon-DtASArT9.js";import"./useLocalizedStringFormatter-DqBPpOm5.js";import"./Heading-AKJQvmhA.js";import"./info-Bc0e6oJa.js";import"./Popover-CUOeLxvu.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-1rF9sz6V.js";import"./DragAndDrop-C8BHQnDL.js";import"./inertValue-BrN_jDTk.js";import"./useListState-8Q4mLehU.js";import"./Tag-MV1oOohJ.js";import"./useHighlightSelectionDescription-DWT4Z7EI.js";import"./useUpdateEffect-BTHY7oev.js";import"./useHasTabbableChild-DpN5j9z0.js";import"./chevron-down-B2X338h5.js";import"./Button.module-Co5e5YHp.js";import"./check-Bql-2qhN.js";import"./useToggleState-DXLptuBI.js";import"./Virtualizer-DMRf0Mad.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
