import{j as e}from"./iframe-BAZk80fE.js";import{$ as c}from"./Form-CLsQOS9e.js";import{G as d}from"./Grid-D-8AoLRX.js";import{G as i}from"./GridItem-RBPreu1W.js";import{a as x,R as u}from"./Radio-CVYIKFK1.js";import{C as I}from"./CheckboxGroup-CERGAp2s.js";import{C as G}from"./Checkbox-DbZ7anWj.js";import{T as t}from"./TextField-1vXVRH5R.js";import{S as l}from"./Select-C66Gakli.js";import{L as p}from"./ListBoxItem-UM-Bde70.js";import{B as a}from"./Button-BOvHyuxs.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BhwQ1U93.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-3uDySqxb.js";import"./useFocusRing-KQoMJM9B.js";import"./index-Dt6rToeR.js";import"./index-B34iUau2.js";import"./clsx-Ciqy0D92.js";import"./Group-wVntAzck.js";import"./FieldError-DkhBXd6b.js";import"./Text-Y_F9Qc3q.js";import"./Text-Bot8P-aJ.js";import"./Button-eLqhqo_k.js";import"./Hidden-CYtm9s7u.js";import"./useLabels-CMB4fTd1.js";import"./useButton-CPWt2pMm.js";import"./SelectionIndicator-B0NoolGA.js";import"./useField-CzfiE8Id.js";import"./VisuallyHidden-Coy_xA-f.js";import"./useControlledState-Cu0nMJYp.js";import"./Label-bUmXrbRz.js";import"./Dialog-I6ArOmci.js";import"./RSPContexts-Ch508LJX.js";import"./OverlayArrow-D4E-POyn.js";import"./useResizeObserver-jKdj-9Bn.js";import"./Collection-RYZnXscw.js";import"./index-DRW4hoi9.js";import"./Separator-B7gVewdW.js";import"./SelectionManager-DGsipqzM.js";import"./useEvent-vN0H1Ozz.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CPqrosz3.js";import"./ListKeyboardDelegate-DxlpbXJb.js";import"./PressResponder-btOu00TB.js";import"./useLocalizedStringFormatter-B43e0zJD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BLotUQCh.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-BN85pv_s.js";import"./createLucideIcon-DfErYrVe.js";import"./useLocalizedStringFormatter-GVvU4XfJ.js";import"./Heading-Dob0vkkd.js";import"./info-CUaHiiwh.js";import"./Popover-D47IUhzN.js";import"./check-KS_81kg8.js";import"./useToggleState-Cco5wGHn.js";import"./TextFieldBase-lpKIm8NV.js";import"./TextField-CMiTxWf8.js";import"./Input-BTCqUZbP.js";import"./useTextField-B7oXgd8v.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CpjlWz0T.js";import"./DragAndDrop-CwfEIjLd.js";import"./inertValue-CZULs2aK.js";import"./useListState-CMmPqlfF.js";import"./Tag-CbtVsS3W.js";import"./useHighlightSelectionDescription-BiH6kVxq.js";import"./useUpdateEffect-Cer1WMgl.js";import"./useHasTabbableChild-CS0pKETZ.js";import"./chevron-down-BRIRDc6o.js";import"./Virtualizer-Dwi1t1H9.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
