import{j as e}from"./iframe-C1JT45wI.js";import{$ as c}from"./Form-CmZHX-Gu.js";import{G as d}from"./Grid-DHT93VO_.js";import{G as i}from"./GridItem-CcoXlo-s.js";import{T as t}from"./TextField-BGGoCk9D.js";import{S as l}from"./Select-BJoHBLPp.js";import{B as a}from"./Button-Cvr3NX4g.js";import{R as x,a as u}from"./Radio-BG-vTXrJ.js";import{C as I}from"./CheckboxGroup-C9tHbg33.js";import{C as G}from"./Checkbox-Di5P7n8j.js";import{L as p}from"./ListBoxItem-CZ013lA1.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B3mA2zMb.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DlaAewcn.js";import"./useFocusRing-CMjH5GB-.js";import"./index-C7sIRXbI.js";import"./index-Ddf_a0id.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-9nlHucL5.js";import"./TextField-CCX94qcb.js";import"./FieldError-CRFea137.js";import"./Text-Do4Hf0SC.js";import"./Text-BnVMb_Eh.js";import"./RSPContexts-DsZAf0Kq.js";import"./Group-cA_WlLed.js";import"./Input-BSiH3PZg.js";import"./Hidden-B97wECjB.js";import"./Button-iYwZhBmL.js";import"./useLabels-DEpiNBM8.js";import"./useButton-gvMW1tsr.js";import"./useTextField-6AtaOWLD.js";import"./useControlledState-1gHrzrW8.js";import"./useField-ClfrWth6.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CsI35Iya.js";import"./Dialog-BWPdqkkK.js";import"./OverlayArrow-6b3z8Dc4.js";import"./useResizeObserver-DNv4RNnC.js";import"./Collection-D6aLFlgl.js";import"./index-NpDGjW3p.js";import"./Separator-M5nPkv4s.js";import"./SelectionManager-Bfq0-7_-.js";import"./useEvent-CMhUQfXy.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CQBUQ4k9.js";import"./useDescription-AygReMNv.js";import"./ListKeyboardDelegate-B7KmNsgj.js";import"./PressResponder-BOgwUnrt.js";import"./useLocalizedStringFormatter-BMOogDa6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-pC8zvn35.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CExqZ3An.js";import"./x-BEtEw_xa.js";import"./createLucideIcon-DjE8uKST.js";import"./useLocalizedStringFormatter-C-OdPEDV.js";import"./Heading-ZXPKAgVW.js";import"./info-BXyxxGGm.js";import"./Popover-D1vltZt0.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DNza1rVZ.js";import"./DragAndDrop-DOBWhtGu.js";import"./inertValue-hV9g7CIh.js";import"./useListState-DySwf5oY.js";import"./Tag-57oxWTSl.js";import"./useHighlightSelectionDescription-CCPEqCLs.js";import"./useUpdateEffect-BLVflKZM.js";import"./useHasTabbableChild-Cs5nG835.js";import"./chevron-down-DZLaXIWV.js";import"./Button.module-Co5e5YHp.js";import"./check-B0G9DJKh.js";import"./useToggleState-DQ6qqjDm.js";import"./Virtualizer-CTYrS0UF.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
