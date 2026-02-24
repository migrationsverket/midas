import{j as e}from"./iframe-Cz8HHCXP.js";import{$ as c}from"./Form-DvbuDjI_.js";import{G as d}from"./Grid-FHrqpkfF.js";import{G as i}from"./GridItem-CJXMZp4a.js";import{a as x,R as u}from"./Radio-DgI2aaxR.js";import{C as I}from"./CheckboxGroup-yD7uJTtj.js";import{C as G}from"./Checkbox-COrulbNs.js";import{T as t}from"./TextField-SJHWnh4c.js";import{S as l}from"./Select-DzgAzx3s.js";import{L as p}from"./ListBoxItem-BnWdSpOp.js";import{B as a}from"./Button-_rHSG3fZ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CHHvFpL5.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BmxCMhME.js";import"./useFocusRing-CifWSbR7.js";import"./index-ByLFS2_k.js";import"./index-DySfiLBO.js";import"./clsx-Ciqy0D92.js";import"./Group-Dk-S29IJ.js";import"./FieldError-CP8pZpTQ.js";import"./Text-C2eLHPBt.js";import"./Text-Ds9GT8qW.js";import"./Button-CyhSWA6k.js";import"./Hidden-DjfT0FF_.js";import"./useLabels-C0CZzmBW.js";import"./useButton-knBJS-If.js";import"./SelectionIndicator-Dq--1A-J.js";import"./useField-DMkuuKjj.js";import"./VisuallyHidden-Bnafg7jN.js";import"./useControlledState-CGafyotv.js";import"./Label-Cn-uj30S.js";import"./Dialog-PfjTyKnn.js";import"./RSPContexts-BZpnDWsc.js";import"./OverlayArrow-Czi8Ji7R.js";import"./useResizeObserver-DecP2-I9.js";import"./Collection-Bh_gfeuR.js";import"./index-DTlwesn3.js";import"./Separator-jmVq-6bR.js";import"./SelectionManager-7ahMGbrk.js";import"./useEvent-CnM7m0F3.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-D6nJ7Lob.js";import"./ListKeyboardDelegate-kyO647b2.js";import"./PressResponder-cjCNE8YI.js";import"./useLocalizedStringFormatter-uYoPNXl-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dohc3n8K.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-BGPJdTwu.js";import"./createLucideIcon-D0LCllt7.js";import"./useLocalizedStringFormatter-BF9hqiyk.js";import"./Heading-DEjXC6uX.js";import"./info-CGU-eILb.js";import"./Popover-Dy7L_dCg.js";import"./check-GVxvPxno.js";import"./useToggleState-DXC7Y8ML.js";import"./TextFieldBase-DMB3bccr.js";import"./Input-D8R08HXc.js";import"./useTextField-C_mtJk_s.js";import"./TextField.module-Ck-VtJ3k.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BGz_5RYv.js";import"./DragAndDrop-Bd0O-89D.js";import"./inertValue-D_gMX8UJ.js";import"./useListState-DRwszmhw.js";import"./TagGroup-BcavN4v-.js";import"./useHighlightSelectionDescription-C_7OM-rA.js";import"./useUpdateEffect-Zp4_hfNM.js";import"./useHasTabbableChild-oS5mTdUk.js";import"./chevron-down-X1PxQA-s.js";import"./Virtualizer-erQmJDOv.js";import"./Button.module-Co5e5YHp.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
