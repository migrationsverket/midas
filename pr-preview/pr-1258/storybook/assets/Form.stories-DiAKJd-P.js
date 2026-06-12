import{j as e}from"./iframe-BqQ5c8fE.js";import{c}from"./Form-DesHcFFM.js";import{G as d}from"./Grid-CtGQ5Vtt.js";import{G as i}from"./GridItem-D_6piWTw.js";import{a as x,R as u}from"./Radio-7bRUt73f.js";import{C as I}from"./CheckboxGroup-CQWJgKh5.js";import{C as G}from"./Checkbox-D5KdQcZu.js";import{T as t}from"./TextField-C2INK6-i.js";import{S as l}from"./Select-Bj_xZKoA.js";import{L as p}from"./ListBoxItem-Bi7MnLb3.js";import{B as a}from"./Button-BS1gBrNw.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-0ttJCKLt.js";import"./utils-vcgv-geB.js";import"./clsx-B-dksMZM.js";import"./index-BDVX9JuE.js";import"./index-Dx4QUBTR.js";import"./clsx-Ciqy0D92.js";import"./Group-B96oZygu.js";import"./FieldError-vKbkj088.js";import"./Text-mKjyceMN.js";import"./Text-DZT9e49R.js";import"./Button-BUzCWcrF.js";import"./Hidden-lysAnu3A.js";import"./useLabel-BDoARLXo.js";import"./useLabels-Z9FfN6Gk.js";import"./useButton-CjstFyO0.js";import"./SelectionIndicator-C8zII3ul.js";import"./useField-BpwbsBj8.js";import"./VisuallyHidden-BYz02vHS.js";import"./useControlledState-p_0xc8M1.js";import"./Label-C_r7Z9fb.js";import"./Dialog-R4f7XIN1.js";import"./RSPContexts-BnH9bYe5.js";import"./OverlayArrow-B6clPy7K.js";import"./useResizeObserver-CqZUYUxF.js";import"./Collection-CxdKGeHr.js";import"./index-21XDGZRk.js";import"./Separator-BgqByx8U.js";import"./SelectionManager-DSIhunJP.js";import"./useEvent-CwwdPrs-.js";import"./scrollIntoView-BSmOLwAx.js";import"./useDescription-BXuFRPve.js";import"./ListKeyboardDelegate-ChxPjGZv.js";import"./PressResponder-BBf-2b62.js";import"./useLocalizedStringFormatter-p3b_RLPb.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DKM6sTcQ.js";import"./getScrollParent-BizxzfZb.js";import"./ModalOverlay-7Jl_Yv-h.js";import"./x-DEICiepl.js";import"./createLucideIcon-BcjPS7EP.js";import"./useLocalizedStringFormatter-CDETYbM5.js";import"./Heading-nX8hWCWb.js";import"./info-DPNCsAFe.js";import"./Popover-kbi6VSQQ.js";import"./check-BgzoDrGb.js";import"./useToggleState-DD_ZSnCr.js";import"./TextFieldBase-DG6rqdlh.js";import"./Input-C_rKGDhH.js";import"./useTextField-CM4pVSWA.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DzDKiv3g.js";import"./DragAndDrop-Ajiuuo6Q.js";import"./inertValue-BphsYwDq.js";import"./useListState-DcYeyQsK.js";import"./TagGroup-BzEsYcQD.js";import"./useHighlightSelectionDescription-PECXPnzc.js";import"./useUpdateEffect-CnIA9zgc.js";import"./useHasTabbableChild-BfvRtqUU.js";import"./chevron-down-G9OQ-hom.js";import"./Virtualizer-Jym3GxvR.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
