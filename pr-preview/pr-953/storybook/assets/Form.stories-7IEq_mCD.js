import{j as e}from"./iframe-DXZswXcd.js";import{$ as c}from"./Form-BjvnKEQe.js";import{G as d}from"./Grid-BBuZ0Naj.js";import{G as i}from"./GridItem-lqXQH4ff.js";import{T as t}from"./TextField-D96L6BhI.js";import{S as l}from"./Select-eNVja3Y6.js";import{B as a}from"./Button-AcRXejUz.js";import{R as x,a as u}from"./Radio-BqiypQ7D.js";import{C as I}from"./CheckboxGroup-BFI4gs7L.js";import{C as G}from"./Checkbox-CGGM-DG8.js";import{L as p}from"./ListBoxItem-aoRKeRfJ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Cf0-1u65.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BEgmi4Gj.js";import"./useFocusRing-BG9tZgKA.js";import"./index-Crv0Q4vS.js";import"./index-C1YRI8qY.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-O4OY9cuh.js";import"./TextField-DUJ4r1cx.js";import"./FieldError-BvKOTYSn.js";import"./Text-nnXd3bBi.js";import"./Text-BGzfgZXL.js";import"./RSPContexts-C5Z6RhjK.js";import"./Group-B265ba4U.js";import"./Input-ghCLvrtX.js";import"./Hidden-DHOmIzAb.js";import"./Button-D1-arsKK.js";import"./useLabels-DwvLFUwE.js";import"./useButton-C6Wl-MUd.js";import"./useTextField-CtfY75Pr.js";import"./useControlledState-CJ_efx1W.js";import"./useField-DOslAXN9.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-DnNKyVfe.js";import"./Dialog-BX9QTNQj.js";import"./OverlayArrow-BOFP6ttP.js";import"./useResizeObserver-DpIMhh4t.js";import"./Collection-BiqV7mQf.js";import"./index-CNK238hP.js";import"./Separator-D1aHTNAV.js";import"./SelectionManager-OME_ZJYN.js";import"./useEvent-BUY7bp5p.js";import"./scrollIntoView-CaLNI_wC.js";import"./SelectionIndicator-AcToMlzz.js";import"./useDescription-IwVOs4ub.js";import"./ListKeyboardDelegate-DwfO7Ojx.js";import"./PressResponder-BbLBRR3U.js";import"./useLocalizedStringFormatter-LFtnKqVA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-D9uKd0qs.js";import"./VisuallyHidden-BQhZj104.js";import"./x-B9aDcILT.js";import"./createLucideIcon-Jyt4-ntd.js";import"./useLocalizedStringFormatter-BQ5mUNua.js";import"./Heading-Dqbz5JVQ.js";import"./info-Cn_srCiM.js";import"./Popover-TW0uy02k.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BYqF6Uez.js";import"./DragAndDrop-Cofx8vVY.js";import"./inertValue-DWhJ70Tr.js";import"./useListState-NtSOpsH0.js";import"./Tag-Bt9CXrUm.js";import"./useHighlightSelectionDescription-DBYe_aGv.js";import"./useUpdateEffect-DwmYQZbU.js";import"./useHasTabbableChild-Dl4Ap7C2.js";import"./chevron-down-C7JC6Bh6.js";import"./Button.module-CtQ1deO8.js";import"./check-f5NT52XC.js";import"./useToggleState-Bcu6ejiQ.js";import"./Virtualizer-BKbkZGhL.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
