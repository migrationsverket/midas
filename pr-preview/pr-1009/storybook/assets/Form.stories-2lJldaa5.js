import{j as e}from"./iframe-B_Y0DlqQ.js";import{$ as c}from"./Form-BHJz0544.js";import{G as d}from"./Grid-EPd86glo.js";import{G as i}from"./GridItem-BIdWIXUg.js";import{T as t}from"./TextField-DoH1pLSK.js";import{S as l}from"./Select-HmtRsjni.js";import{B as a}from"./Button-DLuLiY2m.js";import{R as x,a as u}from"./Radio-uf0uSmin.js";import{C as I}from"./CheckboxGroup-BJS8yBrz.js";import{C as G}from"./Checkbox-Dr5LLXe2.js";import{L as p}from"./ListBoxItem-4C4JYA3W.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DksA0Tsa.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BbQ3XrbH.js";import"./useFocusRing-Bri1p2OG.js";import"./index-DA90p7VR.js";import"./index-D4TvvLIK.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DOIZyv-S.js";import"./TextField-q3Qlm6lK.js";import"./FieldError-i5Ktr5xn.js";import"./Text-CYtRYcLc.js";import"./Text-CcUZk8IK.js";import"./RSPContexts-B5lGwhcJ.js";import"./Group-CSmA4msu.js";import"./Input-B7SVIrVB.js";import"./Hidden-DECSsGSE.js";import"./Button-Du8CgB5i.js";import"./useLabels-Ce9ZpRqc.js";import"./useButton-BkIr7UBR.js";import"./useTextField-C8EYfC3m.js";import"./useControlledState-DNwepJua.js";import"./useField-3oWVgLWz.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CzeIbsy3.js";import"./Dialog-ft7UPy6D.js";import"./OverlayArrow-auEgUC_S.js";import"./useResizeObserver-B7Qkibwd.js";import"./Collection-Cy_qBdK2.js";import"./index-yCQs7iDR.js";import"./Separator-DRsqODdx.js";import"./SelectionManager-DuHPqwUB.js";import"./useEvent-DpuzfOt5.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DumeAD8r.js";import"./useDescription-B5DmuzQE.js";import"./ListKeyboardDelegate-Cyz7xoOF.js";import"./PressResponder-C7JgJDDb.js";import"./useLocalizedStringFormatter-jn3ikADD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BSPULRBm.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Dfda1Uwj.js";import"./x-_e6csGZB.js";import"./createLucideIcon-DXYmNs8l.js";import"./useLocalizedStringFormatter-CQakQ_l-.js";import"./Heading-BtF3xjBY.js";import"./info-BOmTufZ3.js";import"./Popover-DmbZwZtw.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DjEP3lyX.js";import"./DragAndDrop-BMbt4TUM.js";import"./inertValue-CZu8mQCj.js";import"./useListState-BRQsgdLC.js";import"./Tag-C6h9DFM8.js";import"./useHighlightSelectionDescription-DwyV8maT.js";import"./useUpdateEffect-C2JG5PUU.js";import"./useHasTabbableChild-C4nK55EZ.js";import"./chevron-down-DKiv5-LF.js";import"./Button.module-Co5e5YHp.js";import"./check-9RvTG3H-.js";import"./useToggleState-DD3FQE9G.js";import"./Virtualizer-CkdcLOFp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
