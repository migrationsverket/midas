import{j as e}from"./iframe-D0_uqlPy.js";import{$ as c}from"./Form-CNx8SPR0.js";import{G as d}from"./Grid-DrCZPLCC.js";import{G as i}from"./GridItem--ZOMTkKw.js";import{T as t}from"./TextField-Cb0MhZml.js";import{S as l}from"./Select-DJeeFXF3.js";import{B as a}from"./Button-DymjvzeZ.js";import{R as x,a as u}from"./Radio-BQaPtPuv.js";import{C as I}from"./CheckboxGroup-CyV3eOo8.js";import{C as G}from"./Checkbox-eubmKNFB.js";import{L as p}from"./ListBoxItem-DWtZG-aT.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DZkN7PAb.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CyADXFmk.js";import"./useFocusRing-Dfa_i0W6.js";import"./index-pB_UCRcv.js";import"./index-Ci7Mui0x.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-5wCzki7C.js";import"./TextField-CtYbKD1Q.js";import"./FieldError-DP3Y5PAe.js";import"./Text-DFiA7Wnk.js";import"./Text-B1302s0A.js";import"./RSPContexts-BUqAcl8X.js";import"./Group-kT2cow1F.js";import"./Input-CL_VNVMw.js";import"./Hidden-BjgfQNZ3.js";import"./Button-eXHb7oON.js";import"./useLabels-BQfi_YAD.js";import"./useButton-BfeAEr6h.js";import"./useTextField-Bbr-1mQq.js";import"./useControlledState-BFe0ETRm.js";import"./useField-B5VgGyIk.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-D0Z4F8Ks.js";import"./Dialog-DiBznbGW.js";import"./OverlayArrow-B4wC0R2q.js";import"./useResizeObserver-RQWmM80L.js";import"./Collection-C_BTvHxS.js";import"./index-Coz5NjYT.js";import"./Separator-DLsyFjfX.js";import"./SelectionManager-ByuLsODz.js";import"./useEvent-Dv95vs0d.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cm3iGR2n.js";import"./useDescription-DI1OzZGu.js";import"./ListKeyboardDelegate-BLIzedj1.js";import"./PressResponder-BQDDDopb.js";import"./useLocalizedStringFormatter-D3uc4cjF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CRLd56QW.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D7lPxREE.js";import"./x-COQunIjs.js";import"./createLucideIcon-Ciz_2pai.js";import"./useLocalizedStringFormatter-DgmTFAS9.js";import"./Heading-CoR4_Cl-.js";import"./info-Bj3iqnwS.js";import"./Popover-zIVlmckn.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Dlu31I5K.js";import"./DragAndDrop-7TT9IQwW.js";import"./inertValue-CA2D_6G-.js";import"./useListState-CQhS7-Vf.js";import"./Tag-C88CeXaa.js";import"./useHighlightSelectionDescription-fsXyGBV8.js";import"./useUpdateEffect-DMWQJvIu.js";import"./useHasTabbableChild-ZZ8Nw0fi.js";import"./chevron-down-CyLoUzB_.js";import"./Button.module-Co5e5YHp.js";import"./check-_rKQLWQs.js";import"./useToggleState-BBnkHQkJ.js";import"./Virtualizer-v97E6dtv.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
