import{j as e}from"./iframe-CyMjtGPK.js";import{$ as c}from"./Form-Bxd20bgC.js";import{G as d}from"./Grid-TcUqBK0k.js";import{G as i}from"./GridItem-B9cKypDo.js";import{T as t}from"./TextField-BINBwxri.js";import{S as l}from"./Select-9AK5RQoL.js";import{B as a}from"./Button-B8uAn95p.js";import{R as x,a as u}from"./Radio-CuSEWPba.js";import{C as I}from"./CheckboxGroup-Bce4lnsq.js";import{C as G}from"./Checkbox-c82oIZew.js";import{L as p}from"./ListBoxItem-BBU42Vcq.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DVuKvfbU.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DoI_l0NE.js";import"./useFocusRing-ChpYD699.js";import"./index-D_9YXFXE.js";import"./index-CEYNSK8w.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-3YqPwIT1.js";import"./TextField-CDC7mTBz.js";import"./FieldError-Bva2mD5K.js";import"./Text-DzIkDf4e.js";import"./Text-Ugwvt_bi.js";import"./RSPContexts-B7a1EqUx.js";import"./Group-4BDL0-vA.js";import"./Input-CsLrW7G-.js";import"./Hidden-IMfBhQ0L.js";import"./Button-BXSdsNHC.js";import"./useLabels-DNtrS2Qm.js";import"./useButton-KGQDEH2-.js";import"./useTextField-DLblCXJX.js";import"./useControlledState-CTMqSIS3.js";import"./useField-Bz927p2u.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-CXE6cfAH.js";import"./Dialog-BBciz3IO.js";import"./OverlayArrow-CZT2_jrR.js";import"./useResizeObserver--QwmZnvn.js";import"./Collection-DFlPbA8P.js";import"./index-DZDfQsSu.js";import"./Separator-C3w7GKaJ.js";import"./SelectionManager-C6_z_HwH.js";import"./useEvent-DGFI6kX3.js";import"./scrollIntoView-DiSP5vc7.js";import"./SelectionIndicator-OP8igp-4.js";import"./useDescription-y7zAw2pV.js";import"./ListKeyboardDelegate-C5QdJqc9.js";import"./PressResponder-DFq-te7B.js";import"./useLocalizedStringFormatter-CLPnsWem.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Da9WjJ5R.js";import"./VisuallyHidden-BjRgoPVR.js";import"./useLocalizedStringFormatter-C4pjlO5j.js";import"./x-E3pVvVHL.js";import"./createLucideIcon-D70ZsCEu.js";import"./Heading-Bo_fpOH0.js";import"./info-DtrsAcnO.js";import"./Popover-DcoGuDuo.js";import"./Input-DfRyvOEe.js";import"./Select-aNTqKcLt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DtEwYS3W.js";import"./DragAndDrop-vakca-Bd.js";import"./inertValue-DX2idHJz.js";import"./useListState-hW_0Zwwi.js";import"./Tag-CIWjMQLo.js";import"./useHighlightSelectionDescription-Bz3vvC1I.js";import"./useUpdateEffect-B6nZUL2A.js";import"./useHasTabbableChild-DrdQecjZ.js";import"./chevron-down-CU7H3a_x.js";import"./Button.module-CtQ1deO8.js";import"./check-fLvfdGtX.js";import"./useToggleState-C8FbBy4i.js";import"./Virtualizer-DdufjoIv.js";const ye={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Ke=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Ke as __namedExportsOrder,ye as default};
