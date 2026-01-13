import{j as e}from"./iframe-C-ZgYTLd.js";import{$ as c}from"./Form-CwWoFJfE.js";import{G as d}from"./Grid-CcHSiK0O.js";import{G as i}from"./GridItem-kSSnkZkV.js";import{T as t}from"./TextField-fJE3wSGf.js";import{S as l}from"./Select-CLz0gKUe.js";import{B as a}from"./Button-h5IDA3ie.js";import{R as x,a as u}from"./Radio-BVD2XCdV.js";import{C as I}from"./CheckboxGroup-DgtK5yPK.js";import{C as G}from"./Checkbox-Cw2212c-.js";import{L as p}from"./ListBoxItem-vakN3HnJ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-5FE85UMg.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DFhaQe1w.js";import"./useFocusRing-Bc0MHDjd.js";import"./index-ChPkoH3I.js";import"./index-CXE28Dj1.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-OadeWo9B.js";import"./TextField-B4TQLiaa.js";import"./FieldError-BgIsxqD2.js";import"./Text-ZgpLFqnp.js";import"./Text-BR0bAKi6.js";import"./RSPContexts-CNZ1zMeG.js";import"./Group-BQ5lbuz3.js";import"./Input-D8IZw8Ap.js";import"./Hidden-DYGqIVaB.js";import"./Button-B6pX2OWD.js";import"./useLabels-2zRZ-jjd.js";import"./useButton-qcLY0iFO.js";import"./useTextField-DlmJhj-Z.js";import"./useControlledState-j9N21RQd.js";import"./useField-D678ic1M.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BDL6PMm2.js";import"./Dialog-BM8_A6Uk.js";import"./OverlayArrow-3mRbgVn_.js";import"./useResizeObserver-LfOLoz3K.js";import"./Collection-D-w0--MV.js";import"./index-ihfxEqj8.js";import"./Separator-BJayw3EZ.js";import"./SelectionManager-DoS21RMw.js";import"./useEvent-BNx8FKA0.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CkFFauei.js";import"./useDescription-BsSbnagY.js";import"./ListKeyboardDelegate-8j2oF_gg.js";import"./PressResponder-C3BZlgw1.js";import"./useLocalizedStringFormatter-D5GDJFPJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CYWptF-D.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BOVmsq2q.js";import"./x-CGX4TCwo.js";import"./createLucideIcon-DhqApzLs.js";import"./useLocalizedStringFormatter-DVNEhNrj.js";import"./Heading-DgAAR0AT.js";import"./info-BGcn7pqn.js";import"./Popover-Bn-wUiwq.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BNUSWtK1.js";import"./DragAndDrop-CMgZjGXD.js";import"./inertValue-C1pS31Y-.js";import"./useListState-DKx9F4nC.js";import"./Tag-DxP164cq.js";import"./useHighlightSelectionDescription-BJxbrcak.js";import"./useUpdateEffect-BwJ1N7Gx.js";import"./useHasTabbableChild-DqckJAEA.js";import"./chevron-down-Dmq8jFs5.js";import"./Button.module-Co5e5YHp.js";import"./check-BOHYC_7m.js";import"./useToggleState-BbEXHIwT.js";import"./Virtualizer-JFq1azaV.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
