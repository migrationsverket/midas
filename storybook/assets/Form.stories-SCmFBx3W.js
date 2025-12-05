import{j as e}from"./iframe-CuvNnZhW.js";import{$ as c}from"./Form-Ov6B_FDi.js";import{G as d}from"./Grid-Cj-vy9aE.js";import{G as i}from"./GridItem-BpiWOvtz.js";import{T as t}from"./TextField-Bc2nUc_C.js";import{S as l}from"./Select-nu_mlQTO.js";import{B as a}from"./Button-_NSsZI2K.js";import{R as x,a as u}from"./Radio-CaKgLqfc.js";import{C as I}from"./CheckboxGroup-MCWnUe2_.js";import{C as G}from"./Checkbox-DyvMOgzE.js";import{L as p}from"./ListBoxItem-BGPb-wN4.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Bm57M54E.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-D-Xc3W6R.js";import"./useFocusRing-D43600Fq.js";import"./index-B40owRUi.js";import"./index-BMAPmUts.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-OlXIqiF0.js";import"./TextField-D-FqnVZd.js";import"./FieldError-3gQNfb17.js";import"./Text-yK2KnKs6.js";import"./Text-DQruYnq-.js";import"./RSPContexts-CQpn_-P6.js";import"./Group-CqB0c1_6.js";import"./Input-VbQbtPnq.js";import"./Hidden-DxowtwNV.js";import"./Button-DOL-rno5.js";import"./useLabels-efXzBIHp.js";import"./useButton-Cp1eU1ae.js";import"./useTextField-U4PEZY98.js";import"./useControlledState-CMlYEkCM.js";import"./useField-AEkN06Tw.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BYi2LUkk.js";import"./Dialog-Oqp-w9-d.js";import"./OverlayArrow-3qO1Pz2Y.js";import"./useResizeObserver-Lve1GpGt.js";import"./Collection-D9tKhjzz.js";import"./index-CnemMvpk.js";import"./Separator-CyRvqttG.js";import"./SelectionManager-CtXuFHLs.js";import"./useEvent-Bpy0OARu.js";import"./scrollIntoView-1KZh3iQK.js";import"./SelectionIndicator-CkCvo8--.js";import"./useDescription-DhNPqrJw.js";import"./ListKeyboardDelegate-D1LsJ1W6.js";import"./PressResponder-B40WJfeG.js";import"./useLocalizedStringFormatter-C1w5KOSu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-LlGdJz5e.js";import"./VisuallyHidden-CwpyE811.js";import"./x-Df8grS6J.js";import"./createLucideIcon-Df2ePFAr.js";import"./useLocalizedStringFormatter-6M9RCcid.js";import"./Heading-J7EIvy2J.js";import"./info-Bqg9AUda.js";import"./Popover-CXi3Y7h5.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-pU0WqIgN.js";import"./DragAndDrop-DihPdzp9.js";import"./inertValue-DT2nxx3H.js";import"./useListState-CXU573Dp.js";import"./Tag-B1X5csOj.js";import"./useHighlightSelectionDescription-CWS1Z_JV.js";import"./useUpdateEffect-BeGb7bk2.js";import"./useHasTabbableChild-B9AFgwr-.js";import"./chevron-down-DiacPrZo.js";import"./Button.module-Co5e5YHp.js";import"./check-CrGU6xTW.js";import"./useToggleState-B4G9AM1R.js";import"./Virtualizer-BE28_P2y.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
