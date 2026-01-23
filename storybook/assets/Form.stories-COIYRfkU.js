import{j as e}from"./iframe-CAxX8b8z.js";import{$ as c}from"./Form-DdIW8y_X.js";import{G as d}from"./Grid-CIhnBOuC.js";import{G as i}from"./GridItem-D0jo81v6.js";import{T as t}from"./TextField-Bhuu7NOm.js";import{S as l}from"./Select-BtiPlK-Y.js";import{B as a}from"./Button-hIWv77LG.js";import{R as x,a as u}from"./Radio-D3TRXaDH.js";import{C as I}from"./CheckboxGroup-C3gkGLkF.js";import{C as G}from"./Checkbox-DcvZFmA4.js";import{L as p}from"./ListBoxItem-VHqSsGa4.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DCHF2L9h.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-ORBzuIse.js";import"./useFocusRing-CJGxaojv.js";import"./index-BFL8txhV.js";import"./index-BsUamICG.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BzpANVBY.js";import"./TextField-B6LPg8h8.js";import"./FieldError-D4Sp8V1Y.js";import"./Text-BLQTNCsN.js";import"./Text-D4pRrquR.js";import"./RSPContexts-DSQBOyK1.js";import"./Group-CmhRRQeQ.js";import"./Input-DFPKX6GQ.js";import"./Hidden-BhCMtZNx.js";import"./Button-4YWHHaEC.js";import"./useLabels-DOCuV8eN.js";import"./useButton-pswNsnH0.js";import"./useTextField-DUDeOcF8.js";import"./useControlledState-CrLblIfK.js";import"./useField-BJlVD6tn.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-D0-ZtA9y.js";import"./Dialog-v-8j5ffk.js";import"./OverlayArrow-ChU4HsBS.js";import"./useResizeObserver-Bv8Dp1M7.js";import"./Collection-CHE2qNUL.js";import"./index-hoFEFN5M.js";import"./Separator-iD-1dxU-.js";import"./SelectionManager-BNvdJXY_.js";import"./useEvent-Be56k_0k.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cned-ECi.js";import"./useDescription-DlwMEBen.js";import"./ListKeyboardDelegate-DzMoo9Rf.js";import"./PressResponder-NTZTd40v.js";import"./useLocalizedStringFormatter-CTDPvKwa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DjThJUmE.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BxgXzkUT.js";import"./x-DFKddAaY.js";import"./createLucideIcon-Btl_k1Dg.js";import"./useLocalizedStringFormatter-Ck8_EjzN.js";import"./Heading-BB8-Gqoe.js";import"./info-CIX-ujr0.js";import"./Popover-DmLQWAeN.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DLUlVx8p.js";import"./DragAndDrop-DdukEe81.js";import"./inertValue-BwvQc4cI.js";import"./useListState-Bnam-FwK.js";import"./Tag-BzuTaRe5.js";import"./useHighlightSelectionDescription-BQS_BZAt.js";import"./useUpdateEffect-QZnmbQ41.js";import"./useHasTabbableChild-UWF1RhYD.js";import"./chevron-down-E1YXvB6R.js";import"./Button.module-Co5e5YHp.js";import"./check-97dXLU_3.js";import"./useToggleState-Cnp3jxxW.js";import"./Virtualizer-C0Cn612X.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
