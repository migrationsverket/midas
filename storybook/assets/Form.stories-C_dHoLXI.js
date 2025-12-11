import{j as e}from"./iframe-y6AvU9pV.js";import{$ as c}from"./Form-DVSjZpus.js";import{G as d}from"./Grid-BQmSkR8O.js";import{G as i}from"./GridItem-CvvYvqm0.js";import{T as t}from"./TextField-UN7_scTg.js";import{S as l}from"./Select-Dr3WCGzt.js";import{B as a}from"./Button-4Ng5Qb5n.js";import{R as x,a as u}from"./Radio-CF0wkqEb.js";import{C as I}from"./CheckboxGroup-DfxhVrDo.js";import{C as G}from"./Checkbox-BI_Lda8d.js";import{L as p}from"./ListBoxItem-Bw541smz.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-VIxaLxO-.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BBLW1j1l.js";import"./useFocusRing-B9DSdUhj.js";import"./index-BwPUsMU4.js";import"./index-DrBZwNpv.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BRfTyY2d.js";import"./TextField-CdVMoo3Z.js";import"./FieldError-B_ZzXf74.js";import"./Text-DlhfRLNK.js";import"./Text-B3Lob103.js";import"./RSPContexts-CI4AlZqi.js";import"./Group-Kd9qyF79.js";import"./Input-BN15KM2D.js";import"./Hidden-CSfoPJVM.js";import"./Button-4DuSgfee.js";import"./useLabels-Bnd5CjV_.js";import"./useButton-DriAMg0B.js";import"./useTextField-D0XYBVgu.js";import"./useControlledState-DShqKV-K.js";import"./useField-BN-dX1j4.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DO4YL6tP.js";import"./Dialog-BoKqdo0f.js";import"./OverlayArrow-CSG2zuFf.js";import"./useResizeObserver-BWkC-VMD.js";import"./Collection-CKzIMKbb.js";import"./index-DQOx1nQi.js";import"./Separator-BWaXgvHa.js";import"./SelectionManager-DZRPETSX.js";import"./useEvent-DulQh_3F.js";import"./scrollIntoView-C9aEwsLu.js";import"./SelectionIndicator-DX20ZWKG.js";import"./useDescription-BWXgWP7M.js";import"./ListKeyboardDelegate-CQJsI6L7.js";import"./PressResponder-YEHEJoVU.js";import"./useLocalizedStringFormatter-DqeEh2aJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CtO4xKrK.js";import"./VisuallyHidden-DF1AJIqt.js";import"./x-CilltRp-.js";import"./createLucideIcon-D29kT7vp.js";import"./useLocalizedStringFormatter-BhHfTxwL.js";import"./Heading-BDM_ieoG.js";import"./info-fBh3PomB.js";import"./Popover-L_Bg4L94.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DheYkoPZ.js";import"./DragAndDrop-UXnnqi-5.js";import"./inertValue-7464UDwc.js";import"./useListState-CZX4E2S0.js";import"./Tag-DxsuoJqQ.js";import"./useHighlightSelectionDescription-B4B5pnHD.js";import"./useUpdateEffect-CnNJKs_t.js";import"./useHasTabbableChild-Cu3_R2zE.js";import"./chevron-down-DNe7Ok89.js";import"./Button.module-Co5e5YHp.js";import"./check-Bb0tla1j.js";import"./useToggleState-BR5yW0zB.js";import"./Virtualizer-DhOotGKv.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
