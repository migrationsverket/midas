import{j as e}from"./iframe-DpkXPy0n.js";import{$ as c}from"./Form-BNHQkg7Q.js";import{G as d}from"./Grid-dTlyuGoP.js";import{G as i}from"./GridItem-DsEcRHq4.js";import{T as t}from"./TextField-BjWVkoDT.js";import{S as l}from"./Select-CT3nfNaK.js";import{B as a}from"./Button-C4Ej8dq3.js";import{R as x,a as u}from"./Radio-D6ZXDVFm.js";import{C as I}from"./CheckboxGroup-CWQyrWHs.js";import{C as G}from"./Checkbox-DJDDvYmC.js";import{L as p}from"./ListBoxItem-DIaLiQRv.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-L94HqgzK.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CK2dLZcq.js";import"./useFocusRing-BK2U18QP.js";import"./index-Dz73hEDG.js";import"./index-Jpoz6mxO.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DKjRzjD7.js";import"./TextField-BXl0ueiH.js";import"./FieldError-EOCKYRyZ.js";import"./Text-GJ7yr5Nr.js";import"./Text-7Zq3gPgG.js";import"./RSPContexts-BfaQoUqD.js";import"./Group-CcT48O2s.js";import"./Input-DFS4Uub7.js";import"./Hidden-BTD0UQQQ.js";import"./Button-CHXzaCY5.js";import"./useLabels-BJw1CHux.js";import"./useButton-DOEAHNgg.js";import"./useTextField-C7wM31gS.js";import"./useControlledState-02wgDfoK.js";import"./useField-BAwJb_95.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-5i7ZbcHV.js";import"./Dialog-DHhbBpHU.js";import"./OverlayArrow-D3k4Vihs.js";import"./useResizeObserver-Dr-ZVF3X.js";import"./Collection-BEDZalt0.js";import"./index-DFiXKCdB.js";import"./Separator-CjHWfU5Z.js";import"./SelectionManager-Bn-2YX0T.js";import"./useEvent-Du52wMZn.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DzR8NV_o.js";import"./useDescription-DFbPOd92.js";import"./ListKeyboardDelegate-Bd-exi9h.js";import"./PressResponder-CXevQebg.js";import"./useLocalizedStringFormatter-MolCtrmQ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-0pZ_-tsG.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Dc6Lrvt7.js";import"./x-Dh9LhewW.js";import"./createLucideIcon-CfN2dpy0.js";import"./useLocalizedStringFormatter-B0-0j7mp.js";import"./Heading-CXmTa0V7.js";import"./info-Z3QOK22i.js";import"./Popover-Bwua81a_.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-1DCo1Dy5.js";import"./DragAndDrop-BhZ6z_gp.js";import"./inertValue-CW3xtVsB.js";import"./useListState-CzTK7EkX.js";import"./Tag-D30gqEQe.js";import"./useHighlightSelectionDescription-m3qQh3Wp.js";import"./useUpdateEffect-OFob3NkF.js";import"./useHasTabbableChild-Cp63UOpT.js";import"./chevron-down-BwiQf1fm.js";import"./Button.module-CIvIJ45H.js";import"./check-CNNn5wVo.js";import"./useToggleState-ByCrF5tu.js";import"./Virtualizer-BPuAkf8W.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
